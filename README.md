Alejandro Marín Melero - Curso React Js Coder House


// TiendaVinilosMarin //


Mi proyecto para este curso de React de Corder House es una e-commerce de vinilos, donde se pueden comprar distintos vinilos de distintos géneros musicales.

el proyecto está creado sobre el arbol de directorios creado a partir del comando:

- npx create-react-app "nombre del proyecto"

Con la siguiente estructura:

- project-reactjs "/"
    - public
        - assets (carpeta contenedora de imagens, iconos, videos, etc...)
        - mocks (carpeta contenedora de los archivos en formato json que utilizamos para almacenar datos mostrados en la app)
    - src
        - componentes (diferentes componentes, en su mayoría de presentación, de la app en react)
        - contenedores (contenedores que manejan lógica JS)
        - context (componente para manejo de lógica JS y utilizado de forma global en la app)
        - style (carpeta de almacenamiento de estilos css generales de la app)
        - utils (carpeta que almacena funciones llamadas en otros componentes para optimizar la lectura del código)
        - App.jsx (archivo principal de la app)
        - .gitignore
        - package.json (archivo que almacena scripts y dependencias necesarias para el desarrollo de la app)
        - README.md (archivo con la información de la app)

Mediante la ayuda del manejador de paquetes de node "npm", he instalado las siguientes herramientas para su desarrollo:

- react-router-dom: para la definición y navegación mediante rutas en la SPA, así como la definición y utilización de parámetro de dichas rutas.

- sass: para la creación de estilos mediante css de forma avanzada.

- react-loader-spinner: para la implememtación de spinners (iconos de carga) mientras se cargan las llamadas a Firebase.

- SweetAlert2: para la implementación de alertas personalizadas asociadas a ciertas acciones.

- react-dev-tools: para poder acceder a las herramientas de desarrollo de react en el navegador.

- gh-pages: para la actualización desde vscode del repositorio de la app

El flow principal de la aplicación contiene los siguientes componentes (contenedores y presentación):

- Home

- Navbar:
    - Vinilos
    - Géneros
    - Contacto
    - CartWidget

- ItemListContainer:
    - ItemList
        - ItemDetail
            - ItemCount

- Footer 
- Cart
- PurchaseForm


TiendaVinilosMarin © Alejandro Marín Melero
