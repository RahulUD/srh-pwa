import { generateEndpoints } from "./endPoints";
declare const require : any;

const baseUrl = 'http://localhost:8001/'

export const environment = {
  production: false,
  appVersion: require('../../package.json').version,
  appEnvironment: 'Dev',
  appName : 'sarkariresulthub.in',
  endPoints: generateEndpoints(baseUrl),
  firebase : {
    apiKey: "AIzaSyDlvdhxuswVRHoDCjQrbxijYD_ySHbazIA",
    authDomain: "sarkariresulthub-7d02a.firebaseapp.com",
    projectId: "sarkariresulthub-7d02a",
    storageBucket: "sarkariresulthub-7d02a.appspot.com",
    messagingSenderId: "897593007049",
    appId: "1:897593007049:web:9d6d9b0a9a1423777b2618",
    measurementId: "G-2RZB9MMNVK",
  }
};
