# Bootstrap y WAI-ARIA

En esta práctica vamos a coger elementos de la documentación de bootstrap y
hacerlos accesibles con WAI-ARIA.

### Botón
---

```html
<button type="button" class="btn">Base class</button>
```

```html
<button type="button" class="btn" role="button" aria-label="button" aria-pressed="false" tabindex="0">Base class</button>
```
Etiqueta role para especificar el tipo de elemento que es, aira-label para darle un nombre, aria-pressed para indicar si el botón está pulsado o no y tabindex para indicar el orden de navegación.


### Checkbox
---

```html
<div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
  <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

  <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>

  <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off">
  <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
</div>
```
```html
<div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">
  <input type="checkbox" class="btn-check" id="btncheck1" autocomplete="off" role="checkbox" aria-label="checkbox" aria-checked="true" tabindex="0">
  <label class="btn btn-outline-primary" for="btncheck1">Checkbox 1</label>

  <input type="checkbox" class="btn-check" id="btncheck2" autocomplete="off" role="checkbox" aria-label="checkbox" aria-checked="false" tabindex="-1">
  <label class="btn btn-outline-primary" for="btncheck2">Checkbox 2</label>

  <input type="checkbox" class="btn-check" id="btncheck3" autocomplete="off" role="checkbox" aria-label="checkbox" aria-checked="false" tabindex="-2">
  <label class="btn btn-outline-primary" for="btncheck3">Checkbox 3</label>
</div>
```

Etiqueta role para especificar el tipo de elemento que es, aira-label para darle un nombre, aria-checked para indicar si el checkbox está seleccionado o no y tabindex para indicar el orden de navegación.


### Switch 
```html
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
  <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div>
```

```html
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" aria-label="switch" aria-checked="false" tabindex="0">
  <label class="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
</div>
<div class="form-check form-switch">
  <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" aria-label="switch" aria-checked="true" tabindex="-1">
  <label class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
</div>
```

Etiqueta role para especificar el tipo de elemento que es, aira-label para darle un nombre, aria-checked para indicar si el switch está seleccionado o no y tabindex para indicar el orden de navegación.

### Radio
---
```html
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked>
  <label class="form-check-label" for="exampleRadios1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
  <label class="form-check-label" for="exampleRadios2">
    Second default radio
  </label>
</div>
```
```html
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" role="radio" aria-label="radio" aria-checked="true" tabindex="0">
  <label class="form-check-label" for="exampleRadios1">
    Default radio
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" role="radio" aria-label="radio" aria-checked="false" tabindex="-1">
  <label class="form-check-label" for="exampleRadios2">
    Second default radio
  </label>
</div>
```

Etiqueta role para especificar el tipo de elemento que es, aira-label para darle un nombre, aria-checked para indicar si el radio está seleccionado o no y tabindex para indicar el orden de navegación.


### Accordion
```html
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
```
```html
<div class="accordion" id="accordionExample" role="accordion" aria-label="accordion">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" tabindex="0">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
      </div>
    </div>
  </div>
</div>
```
Etiqueta role para especificar el tipo de elemento que es, aira-label para darle un nombre, aria-expanded para indicar si el accordion está expandido o no y tabindex para indicar el orden de navegación.

