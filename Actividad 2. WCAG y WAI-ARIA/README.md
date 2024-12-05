# Actividad 2. WCAG y WAI-ARIA

En esta tarea vamos a ver código html no accesible, y lo vamos a transformar para que lo sea siguiendo los estándares WCAG y WAI-ARIA


### Ejercicio 1. Imagen sin texto alternativo
```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <title>Galería de Fotos</title>
  </head>
  <body>
    <h1>Galería de Fotos</h1>
    <img src="playa.jpg">
    <img src="montana.jpg">
  </body>
</html>
```
Esta se arregla fácilmente ya que hay que añadir el atributo alt
```html
<!DOCTYPE html>
<html lang="es">
  <head>
    <title>Galería de Fotos</title>
  </head>
  <body>
    <h1>Galería de Fotos</h1>
    <img src="playa.jpg" alt="playa">
    <img src="montana.jpg" alt="montana">
  </body>
</html>
```

### Ejercicio 2. Formulario sin etiquetas y mensajes de error
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Registro</title>
</head>
<body>
  <h1>Formulario de Registro</h1>
  <form>
    <input type="text" placeholder="Nombre">
    <input type="email" placeholder="Correo electrónico">
    <button>Enviar</button>
  </form>
</body>
</html>
```

Para que este código sea accesible necesitamos añadirle una etiqueta "label" por cada etiqueta "input" que haya y relacionarlas con un atributo "id". Los errores los podemos controlar añadiendo un "span" con el mensaje que querémos que se muestre, este lo relacionamos con el "input" para el email por el atributo "aria-describedby".

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Registro</title>
</head>
<body>
  <h1>Formulario de Registro</h1>
  <form>
    <label for="name">Nombre: </label>
    <input type="text" id="name" placeholder="Name">
    <label for="email">Email: </label>
    <input type="email" id="email" placeholder="Email" aria-describedby="email-message">
    <span id="email-message">Porfavor, introduzca un correo válido</span>
    <button>Enviar</button>
  </form>
</body>
</html>
```

### Ejercicio 3. Botón que no es accesible para lectores de pantalla
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Botón</title>
</head>
<body>
  <h1>Interacción</h1>
  <div onclick="alert('¡Botón presionado!')" style="border: 1px solid; padding: 10px; width: 100px; text-align: center; cursor: pointer;">
    Presionar
  </div>
</body>
</html>
```

Este error se puede arreglar gracias al atributo "aria-label" el cual permite a los lectores de pantalla poder leer el botón.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Botón</title>
</head>
<body>
  <h1>Interacción</h1>
  <div onclick="alert('¡Botón presionado!')" style="border: 1px solid; padding: 10px; width: 100px; text-align: center; cursor: pointer;" aria-label="button" role="button">
    Presionar
  </div>
</body>
</html>
```

### Ejercicio 4. Navegación sin estructura semántica
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Navegación</title>
</head>
<body>
  <div>
    <span>Inicio</span>
    <span>Servicios</span>
    <span>Contacto</span>
  </div>
</body>
</html>
```

Para este caso debemos añadir etiquetas las cuales dan una estructura a nuestro código, dichas etiquetas son "header", "nav", "main", "aside" y "footer". Este código se arregla añadiendo dichas etiquetas mencionadas anteriormente. Además de añadir el atributo "role" y "aria-label" para los lectores de pantalla.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Navegación</title>
</head>
<body>
  <header>
    <nav role="navigation" aria-label="Menú de navegación">
      <a href="...">Inicio</a>
      <a href="...">Servicios</a>
      <a href="...">Contacto</a>
    </nav>
  </header>
</body>
</html>
```

### Ejercicio 5. Tabla sin encabezados
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Tabla</title>
</head>
<body>
  <h1>Lista de Precios</h1>
  <table>
    <tr>
      <td>Producto 1</td>
      <td>10 USD</td>
    </tr>
    <tr>
      <td>Producto 2</td>
      <td>20 USD</td>
    </tr>
  </table>
</body>
</html>
```

Esta problema sería solucionado añadiendo una fila más al principio de la tabla para distinguir el producto del precio, en esta fila cada caja tendrá la etiqueta de "th" en vez de "td", ya que esta resalta el texto.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Tabla</title>
</head>
<body>
  <h1>Lista de Precios</h1>
  <table>
    <tr>
      <th>Producto</th>
      <th>Precio</th>
    </tr>
    <tr>
      <td>Producto 1</td>
      <td>10 USD</td>
    </tr>
    <tr>
      <td>Producto 2</td>
      <td>20 USD</td>
    </tr>
  </table>
</body>
</html>
```

### Ejercicio 6. Contenido dinámico sin notificación
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Notificaciones</title>
  <script>
    function mostrarNotificacion() {
      document.getElementById('notificacion').innerText = 'Cambio guardado';
    }
  </script>
</head>
<body>
  <button onclick="mostrarNotificacion()">Guardar</button>
  <div id="notificacion"></div>
</body>
</html>
```

Añadiendo el atributo 'aria-live="polite"'a la notificación conseguiremos que sea dinámica.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Notificaciones</title>
  <script>
    function mostrarNotificacion() {
      document.getElementById('notificacion').innerText = 'Cambio guardado';
    }
  </script>
</head>
<body>
  <button onclick="mostrarNotificacion()">Guardar</button>
  <div aria-live="polite" id="notificacion"></div>
</body>
</html>
```

### Ejercicio 7. Contraste bajo
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Texto</title>
  <style>
    body {
      background-color: #f0f0f0;
      color: #a0a0a0;
    }
  </style>
</head>
<body>
  <h1>Texto difícil de leer</h1>
  <p>Este texto tiene un contraste muy bajo con el fondo.</p>
</body>
</html>
```

Este problema de contraste se soluciona fácilmente cambiando el color de la letra a uno que se diferencie más del color de fondo.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Texto</title>
  <style>
    body {
      background-color: #f0f0f0;
      color: #464646;
    }
  </style>
</head>
<body>
  <h1>Texto difícil de leer</h1>
  <p>Este texto tiene un contraste muy bajo con el fondo.</p>
</body>
</html>
```

### Ejercicio 8. Lista desplegable sin indicar su estado
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Menú</title>
  <style>
    .submenu {
      display: none;
    }
    .menu:hover .submenu {
      display: block;
    }
  </style>
</head>
<body>
  <h1>Menú</h1>
  <div class="menu">
    Opciones
    <div class="submenu">
      <p>Opción 1</p>
      <p>Opción 2</p>
    </div>
  </div>
</body>
</html>
```

Podemos indicar el estado de la lista desplegable con el atributo 'aria-expanded="false"'.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Menú</title>
  <style>
    .submenu {
      display: none;
    }
    .menu:hover .submenu {
      display: block;
    }
  </style>
</head>
<body>
  <h1>Menú</h1>
  <div class="menu">
    Opciones
    <div class="submenu" aria-expanded="false">
      <a href="...">Opción 1</a>
      <a href="...">Opción 2</a>
    </div>
  </div>
</body>
</html>
```

### Ejercicio 9. Página con contenido multimedia
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Video Educativo</title>
</head>
<body>
  <h1>Cómo cocinar pasta</h1>
  <video controls>
    <source src="video.mp4" type="video/mp4">
  </video>
</body>
</html>
```

Este problema lo solucionamos añadiendo una etiqueta "track" para darle opción de subtítulos al contenido multimedia.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Video Educativo</title>
</head>
<body>
  <h1>Cómo cocinar pasta</h1>
  <video controls>
    <source src="video.mp4" type="video/mp4">
    <track src="subtitles.vtt" kind="subtitles" srclang="es" label="Español"/>
  </video>
</body>
</html>
```

### Ejercicio 10. Página dinámica sin accesibilidad
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Notificaciones</title>
  <script>
    function mostrarMensaje() {
      document.getElementById('mensaje').innerText = '¡Nueva notificación!';
    }
  </script>
</head>
<body>
  <h1>Página de Notificaciones</h1>
  <button onclick="mostrarMensaje()">Mostrar Notificación</button>
  <div id="mensaje"></div>
</body>
</html>
```

Esto se soluciona con el uso de atributos ARIA, en este caso utilizando el atributo 'aria-pressed="false"', para indicar que el botón no está pulsado.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Notificaciones</title>
  <script>
    function mostrarMensaje() {
      document.getElementById('mensaje').innerText = '¡Nueva notificación!';
    }
  </script>
</head>
<body>
  <h1>Página de Notificaciones</h1>
  <button onclick="mostrarMensaje()" aria-pressed="false">Mostrar Notificación</button>
  <div id="mensaje"></div>
</body>
</html>
```

### Ejercicio 11. Página web de un producto
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Zapatos Deportivos</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .precio {
      font-size: 20px;
      color: red;
    }
    .boton {
      background-color: blue;
      color: white;
      padding: 10px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div>
    <h1>Zapatos Deportivos</h1>
    <div>
      <img src="zapatos.jpg">
      <p>Los mejores zapatos para correr.</p>
      <p class="precio">Precio: $50</p>
    </div>
    <div class="boton" onclick="alert('Producto añadido al carrito')">Añadir al carrito</div>
  </div>
</body>
</html>
```

El error de esta página es que no está utilizando un texto alternativo para la imagen, este error se arregla añadiendole el atributo "alt".

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Zapatos Deportivos</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    .precio {
      font-size: 20px;
      color: red;
    }
    .boton {
      background-color: blue;
      color: white;
      padding: 10px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div>
    <h1>Zapatos Deportivos</h1>
    <div>
      <img src="zapatos.jpg" alt="zapatos">
      <p>Los mejores zapatos para correr.</p>
      <p class="precio">Precio: $50</p>
    </div>
    <div class="boton" onclick="alert('Producto añadido al carrito')" role="button">Añadir al carrito</div>
  </div>
</body>
</html>
```

### Ejercicio 12. Blog con múltiples secciones
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Mi Blog</title>
</head>
<body>
  <div>
    <div>
      <span>Inicio</span> | <span>Sobre mí</span> | <span>Contacto</span>
    </div>
    <div>
      <h2>Artículo Reciente</h2>
      <p>Este es el contenido del artículo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <a href="#">Leer más</a>
    </div>
    <div>
      <h2>Otro Artículo</h2>
      <p>Contenido del segundo artículo. Lorem ipsum dolor sit amet.</p>
      <a href="#">Leer más</a>
    </div>
  </div>
</body>
</html>
```

El error de este blog es el desuso de las etiquetas semánticas, las cuales una vez añadidas dan un mejor aspecto a nuestro código. Además de añadir un atributo "aria-label" para indicar la navegación de la página.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Mi Blog</title>
</head>
<body>
  <header>
    <nav role="navigation" aria-label="navigation">
      <span>Inicio</span> | <span>Sobre mí</span> | <span>Contacto</span>
    </nav>
  </header>
  <main>
    <h1>Artículos</h1>
    <div>
      <h2>Artículo Reciente</h2>
      <p>Este es el contenido del artículo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <a href="#">Leer más</a>
    </div>
    <div>
      <h2>Otro Artículo</h2>
      <p>Contenido del segundo artículo. Lorem ipsum dolor sit amet.</p>
      <a href="#">Leer más</a>
    </div>
  </main>
</body>
</html>
```

### Ejercicio 13. Formulario de inscripción 
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Formulario de Inscripción</title>
</head>
<body>
  <h1>Formulario de Inscripción</h1>
  <form>
    <div>
      <input type="text" placeholder="Nombre completo">
    </div>
    <div>
      <input type="email" placeholder="Correo electrónico">
    </div>
    <div>
      <select>
        <option>Seleccionar país</option>
        <option>México</option>
        <option>España</option>
        <option>Colombia</option>
      </select>
    </div>
    <div>
      <button>Enviar</button>
    </div>
  </form>
</body>
</html>
```

Este formulario se puede hacer accesible añadiendole un "label" a cada "input" como se ha mencionado en ejercicios anteriores, además de añadir una etiqueta "aria-required" para ind### icar que este campo es obligatorio si se quiere enviar el formulario.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Formulario de Inscripción</title>
</head>
<body>
  <h1>Formulario de Inscripción</h1>
  <form>
    <div>
      <label for="name">Nombre completo</label>
      <input type="text" id="name" placeholder="Nombre completo" aria-required="true">
    </div>
    <div>
      <label for="email">Correo electrónico</label>
      <input type="email" id="email" placeholder="Correo electrónico" aria-required="true">
    </div>
    <div>
      <label for="country">Seleccionar país</label>
      <select id="country" aria-required="true">
        <option>Seleccionar país</option>
        <option>México</option>
        <option>España</option>
        <option>Colombia</option>
      </select>
    </div>
    <div>
      <button>Enviar</button>
    </div>
  </form>
</body>
</html>
```

### Ejercicio 14. Tabla de datos compleja
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Reporte de Ventas</title>
</head>
<body>
  <h1>Reporte Mensual de Ventas</h1>
  <table border="1">
    <tr>
      <td>Producto</td>
      <td>Enero</td>
      <td>Febrero</td>
      <td>Marzo</td>
    </tr>
    <tr>
      <td>Zapatos</td>
      <td>100</td>
      <td>150</td>
      <td>200</td>
    </tr>
    <tr>
      <td>Camisas</td>
      <td>200</td>
      <td>250</td>
      <td>300</td>
    </tr>
  </table>
</body>
</html>
```

Esta tabla la podemos hacer más accesible usando las etiquedas "thead" y "tbody" las cuales nos ayudan a estructurar más la tabla, además de usar la etiqueta "th" para resaltar el la cabeza de cada columna.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Reporte de Ventas</title>
</head>
<body>
  <h1>Reporte Mensual de Ventas</h1>
  <table border="1">
    <thead>
      <tr>
        <th>Producto</th>
        <th>Enero</th>
        <th>Febrero</th>
        <th>Marzo</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Zapatos</td>
        <td>100</td>
        <td>150</td>
        <td>200</td>
      </tr>
      <tr>
        <td>Camisas</td>
        <td>200</td>
        <td>250</td>
        <td>300</td>
      </tr>
    </tbody>
  </table>
</body>
</html>
```

### Ejercicio 15. Menú interactivo
```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Menú Interactivo</title>
  <style>
    .submenu {
      display: none;
    }
    .menu:hover .submenu {
      display: block;
    }
  </style>
</head>
<body>
  <h1>Menú de Opciones</h1>
  <div class="menu">
    <p>Opciones</p>
    <div class="submenu">
      <p>Opción 1</p>
      <p>Opción 2</p>
      <p>Opción 3</p>
    </div>
  </div>
</body>
</html>
```

Se implementan atributos como role para añadirle identificación de roles a objetos no diseñados para ello, como al menú que fue implementado con un "div", aria-haspopup para indicar que hay un menú desplegable y tabindex = 0 para permitir que el "div" sea accesible mediante teclado.

Para hacer este menú más accesible se han añadido las etiquetas "aria-haspopup" para indicar que aquí hay un menú desplegable y "aria-expanded" para indicar que dicho menú está colapsado.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <title>Menú Interactivo</title>
  <style>
    .submenu {
      display: none;
    }
    .menu:hover .submenu {
      display: block;
    }
  </style>
</head>
<body>
  <h1>Menú de Opciones</h1>
  <div class="menu" aria-haspopup="true" aria-expanded="false">
    <p>Opciones</p>
    <div class="submenu">
      <p>Opción 1</p>
      <p>Opción 2</p>
      <p>Opción 3</p>
    </div>
  </div>
</body>
</html>
```