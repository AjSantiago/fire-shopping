import { initializeApp } from 'firebase/app';
import { getMessaging, getToken } from 'firebase/messaging';

const vapidKey =
  'BF5iKgCCk1MqwqJ0gOHaXwDljfRZROvNL_rTKGFmOntQ-is7yZLd1q0DdA-BLtTbbgiRaGQJg17QqqWGcSWx_3A';

const firebaseConfig = {
  apiKey: 'AIzaSyCMxHQQqfH8XknB6qbLuxJ87b_4SjEuVx8',
  authDomain: 'fire-shopping-51f3c.firebaseapp.com',
  projectId: 'fire-shopping-51f3c',
  storageBucket: 'fire-shopping-51f3c.appspot.com',
  messagingSenderId: '210846767610',
  appId: '1:210846767610:web:5d228192c5711a713cec43',
};

function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
      const app = initializeApp(firebaseConfig);

      // Initialize Firebase Cloud Messaging and get a reference to the service
      const messaging = getMessaging(app);

      // Add the public key generated from the console here.
      getToken(messaging, { vapidKey })
        .then((currentToken) => {
          if (currentToken) {
            // console.log('Current getToken: ', currentToken);
            sendTokenToServer(currentToken);
          } else {
            console.log(
              'No registration token available. Request permission to generate one.'
            );
          }
        })
        .catch((err) => {
          console.log('An error occurred while retrieving token. ', err);
        });
    } else {
      console.log('Do not have permission.');
    }
  });
}

requestPermission();

const sendTokenToServer = (token) => {
  if (localStorage.getItem('tokenSentToServer')) return;
  // TODO: Implementar la lógica de que en el servidor se almacene el token
  localStorage.setItem('tokenSentToServer', '1');
};

// const messaging = getMessaging();
// messaging.onBackgroundMessage(function (payload) {
//   console.log('Received background message ', payload);
//   // Customize notification here
//   const notificationTitle = 'Título de la notificación';
//   const notificationOptions = {
//     body: 'Cuerpo del mensaje.',
//     icon: 'https://firebase.google.com/static/downloads/brand-guidelines/PNG/logo-vertical.png?hl=es-419',
//   };

//   // eslint-disable-next-line no-restricted-globals
//   self.registration.showNotification(notificationTitle, notificationOptions);
// });
