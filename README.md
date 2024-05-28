# WebpageAnalyzer
Count Words And Get Images From A Webpage

This has been tested with Node version 21.7.1

## Installation and Startup

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the proxy server:

   ```bash
   node proxy.js
   ```
    
3. In the project directory, you can run npm start to run the app in the development mode.

   ```bash
   npm start
   ```

## URL Proxy Server

This Node.js proxy server allows you to fetch content from URLs via a simple API endpoint. It serves as an intermediary between your client and the target URL, providing a CORS-enabled solution for cross-origin requests.

### Features

- **CORS Support:** Enables Cross-Origin Resource Sharing, allowing clients from different origins to fetch content.
- **URL Fetching:** Accepts a URL parameter and retrieves the HTML content from the specified URL.
- **Error Handling:** Provides error handling for cases where fetching the URL fails or if the URL parameter is missing.

### Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your/repository.git
   ```

2. Navigate to the project directory:

   ```bash
   cd repository
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

### Usage

1. Start the server:

   ```bash
   npm start
   ```

2. Access the proxy server at:

   ```plaintext
   http://localhost:5001
   ```

3. To fetch content from a URL, make a GET request to:

   ```plaintext
   http://localhost:5001/fetch-url?url={URL_HERE}
   ```

   Replace `{URL_HERE}` with the URL you want to fetch content from.

### Example

```plaintext
GET /fetch-url?url=https://example.com
```

### Dependencies

- [Express](https://www.npmjs.com/package/express): Web framework for Node.js.
- [CORS](https://www.npmjs.com/package/cors): Express middleware for CORS.
- [node-fetch](https://www.npmjs.com/package/node-fetch): A light-weight module that brings `window.fetch` to Node.js.

### License

This project is licensed under the [MIT License](LICENSE).

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
