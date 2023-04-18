//biblioteca do firebase
import firebase from 'firebase/compat/app';
//autenticação de email e senha
import 'firebase/compat/auth';
//trabalha com o banco de dados criado no firebase
import 'firebase/compat/database';

let firebaseConfig = {
    apiKey: "AIzaSyCYj9Iq-pqHbRN6pb79SpL8ifNEkpi0V2E",
    authDomain: "dbboerviagem.firebaseapp.com",
    projectId: "dbboerviagem",
    storageBucket: "dbboerviagem.appspot.com",
    messagingSenderId: "244580227384",
    appId: "1:244580227384:web:cd030fd10943b94b6389cd"
};

if (!firebase.apps.length) {
    // Initialize Firebase
     firebase.initializeApp(firebaseConfig);
    }


export default firebase;