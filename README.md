# Zemoga Challenge

## Feedback

Primero que todo queiro decir muchas gracias por dejar este challenge para mi. enviando este challenge me encontre con muchos problemas.

### Que problemas me encontre

- Yo no trabajo en OS Windows, yo uso linux y abrir un psd file fue dificil para mi(tengo windows en mi computador, pero este es solo para multimedia), incluso abriendo el PSD nunca he trabajado con Photoshop como mockup de layouts(Uso Zeppelin).
- No encontre ningun tipo de assets como
- - En descripcion encontre que toca usar el Font "Lato" y pues era todo lo que tenia de parametros
- - Imagenes(los tuve que sacar de internet, y no encontre identicas)
- - Iconos (Use FontAwesome)
- - Codigo de colores (en algunos lados use colores de material design)
- Dimenciones de todo (Debe ser que estan en PSD pero como dije, yo nunca he trabajado con PSD por usar Linux, todo me toco hacer basandose en mi ojo y no quedo super y la verdad no me gusta como quedo, podria haber sido mucho mejor)

### Features

- Lo hice en react(me defiendo igual en React y VueJs) por razon que no queria hacerlo desde, hubiera sido mucho codigo no comprimido y la pagina pesaria mucho mas (uno se demora mas rapido escribiendo create-react-app que configurando webpack)
- - Miren que use muchos componentes y los hice de formas diferentes para demostrar que manejo cualquier forma de componente.
- Media Queries: en uno de los componentes(votesCard) esta el uso de media queries directo en el componente.(tambien los conozco usar en css puro)
- React hooks
- Uso de constantes en vez de meter texto de hardcoding(no en todos, lados pero hay ejemplos claros)
- En muchos lados use Flexbox para evitar escribir MediaQueries.
- Uso adecuado de SCSS y en algunos lados use BEM para demostracion

### Que me falto (A mi punto de vista, depronto encuentran mas cosas)

los siguientes puntos no alcanze por dos razones (Falta de tiempo, y no conocer), hace un buen tiempo no he escrito html puro con CSS, me especializo mas en trabajo con SPA y manejo de tiempo de carga y optmiziaciones de bundles

- Miren que el icono(like/dislike) que queda en los Cards en la parte izquierda no queda alineado (lo intente por flexbox, pero no pude, hubiera dedicado mas tiempo al problema si tendria un poco mas datos de dimenciones)
- El Header no quedo "Super" responsive(solo felxbox sin media queries), por razon de crear un hamburguer con un Drawer me demoraria mucho porque nunca lo he hecho(hay muchos ejemplos ya listos para descargar)
- En 1200px no quedan responsive los cards.
- En Iphone 5/SE no queda responsive el disenio.
- Depende de la imagen(ustedes la tienen con tono oscuro) los botones de "Vote now" no quedan bien con un fondo blanco(en mi caso) por lo tanto intente usar shadow para el texto, pero y eso no ayuda mucho.
- Hay codigo comentado

### Para finalizar

Fue un task interesante, como les comente antes, hace un buen tiempo no trabajo con HTML&CSS puro y muchas cosas se me olvidaron y me toco repasar. mas que todo la parte de responsive y las variables standarizados de @mediaQueries

# React default

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
