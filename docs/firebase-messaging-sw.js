importScripts("https://www.gstatic.com/firebasejs/11.16.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/11.16.0/firebase-messaging.js"
);
firebase.initializeApp({
  apiKey: "AIzaSyDlvdhxuswVRHoDCjQrbxijYD_ySHbazIA",
  authDomain: "sarkariresulthub-7d02a.firebaseapp.com",
  projectId: "sarkariresulthub-7d02a",
  storageBucket: "sarkariresulthub-7d02a.appspot.com",
  messagingSenderId: "897593007049",
  appId: "1:897593007049:web:9d6d9b0a9a1423777b2618",
  measurementId: "G-2RZB9MMNVK",
});
const messaging = firebase.messaging();
