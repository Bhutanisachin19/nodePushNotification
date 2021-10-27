// Scripts for firebase and firebase messaging
importScripts("https://www.gstatic.com/firebasejs/8.6.2/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.6.2/firebase-messaging.js");
importScripts(
  "https://cdnjs.cloudflare.com/ajax/libs/platform/1.3.6/platform.min.js"
);

// Initialize the Firebase app in the service worker by passing the generated config
const firebaseConfig = {
  apiKey: "AIzaSyB1HReE0e9MDt5sfhnviPTxRys4KGdUmvE",
  authDomain: "testpushnotification-c87c4.firebaseapp.com",
  projectId: "testpushnotification-c87c4",
  storageBucket: "testpushnotification-c87c4.appspot.com",
  messagingSenderId: "537488732738",
  appId: "1:537488732738:web:1923abbe4e28bac0eab3db",
  measurementId: "G-Y59MV96JKZ",
};

firebase.initializeApp(firebaseConfig);

// Retrieve firebase messaging
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("Received background message ", payload);

  // const notificationTitle = payload.notification.title;
  // const notificationOptions = {
  //   body: payload.notification.body,
  // };

  // self.registration.showNotification(notificationTitle,
  //   notificationOptions);
});
