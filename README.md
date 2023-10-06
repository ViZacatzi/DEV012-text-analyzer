# Analizador de texto

## Índice

* [1. Consideraciones generales](#1-consideraciones-generales)
* [2. Resumen del Proyecto](#2-resumen-del-proyecto)
* [3. Funcionalidades](#3-funcionalidades)
* [4. Diseño del proyecto](#4-diseño-del-proyecto)


***

## 1. Consideraciones generales

El proyecto esta realizado con el programa Vainilla JavaScript también conocido como JavaScript puro, sin el uso de librerias, frameworks para desarrollarlo. Para darle estilo se utilizo el CSS y para darle estructura se utiliza el HTML.

## 2. Resumen del proyecto

Como su nombre lo dice un analizador de texto es una aplicación para extraer información útil de un texto. Este proyecto web permite al usuario obtener informacion especifica del texto que quiera analizar, es decir, la aplicación le proporciona una variedad de métricas básicas como: 
1.el conteo de palabras
2.el conteo de caracteres
3.el conteo de caracteres sin espacios ni caracteres espaciales
4.el conteo de números
5.la suma de los números
6.La longitud promedio de las palabras
Además determinar si un numero es entero o decimal y realiza la suma correctamente, todo esto al mismo tiempo que el usuario ingresa el texto, finalmete cuenta con un boton que limpia todas la metricas para volver a ingresar un nuevo texto.

## 3. Funcionalidades

El listado de funcionalidades es el siguiente:

1. La aplicación debe permitir a la usuaria ingresar un texto escribiéndolo
en un cuadro de texto.

2. La aplicación debe calcular las siguientes métricas y actualizar el
resultado en tiempo real a medida que la usuaria escribe su texto:

    - **Conteo de palabras**: la aplicación contabiliza el número de
    palabras en el texto de entrada y muestra este recuento al usuario.
    - **Conteo de caracteres**: la aplicación contabiliza el número de
    caracteres en el texto de entrada, incluidos espacios y signos de
    puntuación, y muestra este recuento al usuario.
    - **Conteo de caracteres excluyendo espacios y signos de puntuación**:
    la aplicación contabiliza el número de caracteres en el texto de
    entrada, excluyendo espacios y signos de puntuación, y muestra este recuento
    al usuario.
    - **Conteo de números**: la aplicación contabiliza números hay en
    el texto de entrada y muestra este recuento al usuario.
    - **Suma total de los números**: la aplicación suma todos los números que
    hay en el texto de entrada y muestra el resultado al usuario.
    - **Longitud media de las palabras**: la aplicación calcula la
    longitud media de las palabras en el texto de entrada la muestra al usuario.

3. La aplicación limpia el contenido de la caja de texto haciendo
clic en un botón.

## 4. Diseño del proyecto

La aplicación se pensó en modo sencillo con colores suaves para que con una caja de texto más grande y con un color negro para que contrastara con el resto de los objetos y donde el usuario ingresa al ingresar su texto puede verlo mejor, si es que hay algún error, mientras, los bloques que contabilizan la métricas están distribuidos de forma horizontal para que el usuario pueda verlas de forma continua, finalmente se diseña un botón que resalte y que básicamente borra tanto el texto ingresado y lleva las métricas a 0 nuevamente

<img width="921" alt="Prototipo" src="https://github.com/ViZacatzi/DEV012-text-analyzer/assets/145049256/13ffbb6d-3ea1-4eb7-8a0b-820e6359a936">


El producto final se acerca mucho al prototipo los colores se mantuvieron, ya que son suaves y cómodos a la vista, pero se realizaron algunas modificaciones, se le dio un formato de letra más grande al titulo para destacarlo y en lugar de estar detrás de una figura tipo flecha se opto por hacer el seleccionado completo, los contabilizados se dejaron el linea horizontal ya que así se le sigue dando importancia al texto y para no variar mucho del prototipo, finalmente el botón simplemente se hizo mas grande conservando sus colores para que destacara de las métricas.
￼
<img width="1435" alt="Web" src="https://github.com/ViZacatzi/DEV012-text-analyzer/assets/145049256/5dddeeb4-3f17-4e17-96e5-a6498603bb40">

