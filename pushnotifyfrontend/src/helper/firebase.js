import firebase from "firebase";

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

//vipidKey -> project overview web config key pair
export const getToken = () => {
  const messaging = firebase.messaging();
  return messaging
    .getToken({
      vapidKey:
        "BMqibBJw1GOp9y654WjNe5nUh-nCurG9lZaoh8b9he-7FZwFfYcOy66cMa5zNr1ujK2dHE1XCetLQOm02Wbv8KI",
    })
    .then((currentToken) => {
      if (currentToken) {
        console.log("current token for client: ", currentToken);
        // setTokenFound(true);
        // Track the token -> client mapping, by sending to backend server
        // show on the UI that permission is secured
        localStorage.setItem("fcmPushNotificationToken", currentToken);
      } else {
        console.log(
          "No registration token available. Request permission to generate one."
        );
        // setTokenFound(false);
        // shows on the UI that permission is required
      }
    })
    .catch((err) => {
      console.log("An error occurred while retrieving token. ", err);
      // catch error while creating client token
    });
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    console.log("infireeeee");
    const messaging = firebase.messaging();
    messaging.onMessage((payload) => {
      resolve(payload);
    });
  });

export default firebase;
