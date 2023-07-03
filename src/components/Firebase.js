import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBC3K61k-U0X29Wl8iMfaoQJobn8PrUXAI",
    authDomain: "to-do-list-241ae.firebaseapp.com",
    projectId: "to-do-list-241ae",
    storageBucket: "to-do-list-241ae.appspot.com",
    messagingSenderId: "104951440676",
    appId: "1:104951440676:web:b23e6fa334b31b4792ffb1",
    measurementId: "G-YXSJMTSFYR"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;