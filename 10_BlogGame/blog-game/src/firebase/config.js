import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
//banco de dados do firebase é o firestore a baixo estamos importando ele
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBPb4R1vlzPwilshYlnPe_2uh_OBdYY21E",
  authDomain: "bloggames-9bd06.firebaseapp.com",
  projectId: "bloggames-9bd06",
  storageBucket: "bloggames-9bd06.appspot.com",
  messagingSenderId: "1058826693801",
  appId: "1:1058826693801:web:29ab44c91e64a0e0b54db8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
const auth = getAuth(app)

export  {db, auth} ;