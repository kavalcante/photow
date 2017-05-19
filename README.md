# Photow
Realtime Web app made with Vue.js and the awesome Firebase to take photos from webcam 🔥

#Instructions to run
This project runs with webpack, and some node dependencies.
The first thing that you have to do is `npm install` in the root folder, after hit `enter`, go drink a coffee, and when you come back, all the things should be downloaded and read to go.

#Setting up firebase SDK
First, you have to configure the firebase keys that you can get in the dashoboard of firebase when created your app, looks like this:

```
// Initialize the Firebase SDK
const config = {
  apiKey: '<your-api-key>',
  authDomain: '<your-auth-domain>',
  databaseURL: '<your-database-url>',
  storageBucket: '<your-storage-bucket>'
};
firebase.initializeApp(config);
```

Just replace then into `firebase.js` file, located [here](https://github.com/kavalcante/photow/blob/master/src/firebase.js).

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```