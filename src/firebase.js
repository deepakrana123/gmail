// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
	apiKey: "AIzaSyAqoUv3wiGISWAlAOY7nPrhpcj_EyKdGvw",
	authDomain: "fir-6e7e0.firebaseapp.com",
	databaseURL:"gs://fir-6e7e0.appspot.com/",
	projectId: "fir-6e7e0",
	storageBucket: "fir-6e7e0.appspot.com",
	messagingSenderId: "781766455453",
	appId: "1:781766455453:web:327fb5c7e78bc45ba4a474",
	measurementId: "G-X3M52V38VJ"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig);

  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  const provider =new firebase.auth.GoogleAuthProvider();
  
  export {db,auth,provider};
