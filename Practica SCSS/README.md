# Ejercicios para practicar SASS

ENUNCIADO

1. Convierte los siguientes códigos CSS a SCSS:

EJERCICIOS
---
Ejercicio 1
```CSS
button {
background-color: #333;
color: #fff;
border: none;
padding: 10px 20px;
font-size: 16px;
}
button:hover {
background-color: #fff;
color: #333;
}
```
```SCSS
button {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;

    &:hover {
    background-color: #fff;
    color: #333;
    }
}

```
Ejercicio 2
```CSS
.container {
width: 100%;
max-width: 1200px;
margin: 0 auto;
}
.container h1 {
font-size: 24px;
color: #333;
}
.container p {
font-size: 16px;
color: #666;
}
```
```SCSS
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    h1 {
    font-size: 24px;
    color: #333;
    }
    p {
    font-size: 16px;
    color: #666;
    }
}
```
Ejercicio 3
```CSS
nav ul li {
display: inline-block;
margin-right: 20px;
}
nav ul li a {
color: #333;
text-decoration: none;
}
nav ul li a:hover {
text-decoration: underline;
}
```
```SCSS
nav ul li {
    display: inline-block;
    margin-right: 20px;
    a {
    color: #333;
    text-decoration: none;
        :hover {
        text-decoration: underline;
        }
    }
}
```
Ejercicio 4
```CSS
.container {
width: 100%;
max-width: 1200px;
margin: 0 auto;
}
.container .row {
display: flex;
justify-content: space-between;
}
.container .row .col {
width: 30%;
background-color: #f2f2f2;
padding: 20px;
margin-bottom: 20px;
}
```
```SCSS
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    .row {
    display: flex;
    justify-content: space-between;
        .col {
        width: 30%;
        background-color: #f2f2f2;
        padding: 20px;
        margin-bottom: 20px;
        }
    }
}
```
Ejercicio 5
```CSS
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    h1 {
    font-size: 24px;
    color: #333;
    }
    p {
    font-size: 16px;
    color: #666;
    }
}
.btn {
background-color: #333;
color: #fff;
border: none;
padding: 10px 20px;
font-size: 16px;
}
.container .btn:hover {
background-color: #fff;
color: #333;
}
```
Ejercicio 6
```CSS
.container {
width: 100%;
max-width: 1200px;
margin: 0 auto;
}
.container h1 {
font-size: 24px;
color: #333;
}
.container p {
font-size: 16px;
color: #666;
}
.container .btn {
background-color: #333;
color: #fff;
border: none;
padding: 10px 20px;
font-size: 16px;
}
.container .btn:hover {
background-color: #fff;
color: #333;
}
```
```SCSS
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    h1 {
    font-size: 24px;
    color: #333;
    }
    p {
    font-size: 16px;
    color: #666;
    }
    .btn {
        background-color: #333;
        color: #fff;
        border: none;
        padding: 10px 20px;
        font-size: 16px;
        &:hover {
            background-color: #fff;
            color: #333;
        }
    }
}
```
Ejercicio 7
```CSS
nav ul li {
display: inline-block;
margin-right: 20px;
}
ul li a {
color: #333;
text-decoration: none;
}
nav ul a:hover {
text-decoration: underline;
}
```
```SCSS
nav ul li {
    display: inline-block;
    margin-right: 20px;
    ul li a {
    color: #333;
    text-decoration: none;
    }
    ul a:hover {
    text-decoration: underline;
    }
}
```
Ejercicio 8
```CSS
.container {
width: 100%;
max-width: 1200px;
margin: 0 auto;
}
.container .row {
display: flex;
justify-content: space-between;
}
.container .row .col {
width: 30%;
background-color: #f2f2f2;
padding: 20px;
margin-bottom: 20px;
}
```
```SCSS
.container {
width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    .row {
    display: flex;
    justify-content: space-between;
        .col {
        width: 30%;
        background-color: #f2f2f2;
        padding: 20px;
        margin-bottom: 20px;
        }
    }
}
```
Ejercicio 9
```CSS
.container {
width: 100%;
max-width: 1200px;
margin: 0 auto;
}
.container h1 {
font-size: 24px;
color: #333;
}
.container p {
font-size: 16px;
color: #666;
}
.container .btn {
background-color: #333;
color: #fff;
border: none;
padding: 10px 20px;
font-size: 16px;
}
.container .btn:hover {
background-color: #fff;
color: #333;
}
```
```SCSS
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    h1 {
    font-size: 24px;
    color: #333;
    }
    p {
    font-size: 16px;
    color: #666;
    }
    .btn {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
        &:hover {
        background-color: #fff;
        color: #333;
        }
    }
}
```
Ejercicio 10
```CSS
.container {
width: 100%;
max-width: 1200px;
margin: 0 auto;
}
.container h1 {
font-size: 24px;
color: #333;
}
.container p {
font-size: 16px;
color: #666;
}
```
```SCSS
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    h1 {
    font-size: 24px;
    color: #333;
    }
    p {
    font-size: 16px;
    color: #666;
    }
}
```
Ejercicio 11
```CSS
nav ul li {
display: inline-block;
margin-right: 20px;
}
nav ul li a {
color: #333;
text-decoration: none;
}
ul li a:hover {
text-decoration: underline;
}
```
```SCSS
nav ul li {
    display: inline-block;
    margin-right: 20px;
    a {
    color: #333;
    text-decoration: none;
        &:hover {
        text-decoration: underline;
        }
    }
}
```
Ejercicio 12
```CSS
.container {
width: 100%;
max-width: 1200px;
margin: 0 auto;
}
.container .row {
display: flex;
justify-content: space-between;
}
.container .row .col {
width: 30%;
background-color: #f2f2f2;
padding: 20px;
margin-bottom: 20px;
}
```
```SCSS
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    .row {
    display: flex;
    justify-content: space-between;
        .col {
        width: 30%;
        background-color: #f2f2f2;
        padding: 20px;
        margin-bottom: 20px;
        }
    }
}
```
Ejercicio 13
```CSS
.container {
width: 100%;
max-width: 1200px;
margin: 0 auto;
}
.container .btn {
background-color: #333;
color: #fff;
border: none;
padding: 10px 20px;
font-size: 16px;
}
.container .btn:hover {
background-color: #fff;
color: #333;
}
```
```SCSS
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    .btn {
    background-color: #333;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
        &:hover {
        background-color: #fff;
        color: #333;
        }
    }
}
```
Ejercicio 14
```CSS
.container {
width: 100%;
max-width: 1200px;
margin: 0 auto;
}
.container a {
display: flex;
justify-content:
space-between; }
.container .row .col {
width: 30%;
background-color: #f2f2f2;
padding: 20px;
margin-bottom: 20px;
}
.container .row
.col:first-child {
background-color:
#333;
color: #fff;
}
```
```SCSS
.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    a {
    display: flex;
    justify-content:
    space-between;
    }
    .row .col {
    width: 30%;
    background-color: #f2f2f2;
    padding: 20px;
    margin-bottom: 20px;
        &:first-child {
        background-color:
        #333;
        color: #fff;
        }
    }
}
```
