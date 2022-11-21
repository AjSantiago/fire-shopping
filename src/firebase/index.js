import { initializeApp } from 'firebase/app';
import { getMessaging } from 'firebase/messaging';
import { getFirestore } from 'firebase/firestore';

// const vapidKey =
//   'BF5iKgCCk1MqwqJ0gOHaXwDljfRZROvNL_rTKGFmOntQ-is7yZLd1q0DdA-BLtTbbgiRaGQJg17QqqWGcSWx_3A';

// currentToken =
//   'd1Q4ENaRXh5laReJo_A47f:APA91bFtawUx32FbS6BTGMR1bCJXErQfr4xoz_zNZZhW_Bg3Obh2J8JKXB1EUogNd0XjHlSK3YcERcqFdb1r8LddxiRDObSykcCezLkn1OIZvlx-HasLt5UawKT4g4N2GlUgqQSdWiwB';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCMxHQQqfH8XknB6qbLuxJ87b_4SjEuVx8',
  authDomain: 'fire-shopping-51f3c.firebaseapp.com',
  projectId: 'fire-shopping-51f3c',
  storageBucket: 'fire-shopping-51f3c.appspot.com',
  messagingSenderId: '210846767610',
  appId: '1:210846767610:web:5d228192c5711a713cec43',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging();
export const db = getFirestore(app);
