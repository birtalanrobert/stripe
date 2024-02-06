import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCqbrrr1Z_r9UmQ2SwUfxBfi3Dhu0YKuhA",
  authDomain: "stripe-f5a1a.firebaseapp.com",
  projectId: "stripe-f5a1a",
  storageBucket: "stripe-f5a1a.appspot.com",
  messagingSenderId: "170886909434",
  appId: "1:170886909434:web:f5d8f78d8d7845627ea843",
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

const auth = firebase.auth();

const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }

  const userRef = firestore.doc(`users/${userAuth.multiFactor.user.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({ displayName, email, createdAt, ...additionalData });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

export { firestore, createUserProfileDocument, auth };
