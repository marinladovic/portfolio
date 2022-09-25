// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBnrc-u06Ust9wKwdYZik0zjg62jmPj2T0',
  authDomain: 'portfolio-adc48.firebaseapp.com',
  projectId: 'portfolio-adc48',
  storageBucket: 'portfolio-adc48.appspot.com',
  messagingSenderId: '777655565130',
  appId: '1:777655565130:web:56661c2644905ed944dfb3',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
