  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAcP-Uv2AfvdYSQFHez-WLWQSyxBxAeL2c",
    authDomain: "lapzzz.firebaseapp.com",
    projectId: "lapzzz",
    storageBucket: "lapzzz.appspot.com",
    messagingSenderId: "452565234676",
    appId: "1:452565234676:web:67645050baa44d8b32bfa1",
    measurementId: "G-J1TQMMHVQL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 

//submit button

const submit = document.getElementById('submit');
submit.addEventListener("click", function (event){
  event.preventDefault()

   //inupts

const email = document.getElementById('email').value;
const password = document.getElementById('password').value;
const username = document.getElementById('username').value;

  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Account Created... Login Now")
    window.location.href ="login.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });



})