import * as firebase from "firebase/app";
import "firebase/firebase-messaging";
import token from "../../tokens.json";
/* eslint-disable no-console */

const firebaseConfig = {
  apiKey: token.firebaseConfig.apiKey,
  authDomain: token.firebaseConfig.authDomain,
  databaseURL: token.firebaseConfig.databaseURL,
  projectId: token.firebaseConfig.projectId,
  storageBucket: token.firebaseConfig.storageBucket,
  messagingSenderId: token.firebaseConfig.messagingSenderId,
  appId: token.firebaseConfig.appId
};
export const firebaseApp = firebase.initializeApp(firebaseConfig);

// fcm part
const messaging = firebase.messaging();
messaging.usePublicVapidKey(token.gcm_sender_id);

Notification.requestPermission();

// Notification.requestPermission().then(permission => {
//   if (permission === "granted") {
//     console.log("Notification permission granted.");

//     messaging.getToken().then(token => {
//       console.log("token: ", token);
//     });
//   } else {
//     console.log("Unable to get permission to notify.");
//   }
// });
