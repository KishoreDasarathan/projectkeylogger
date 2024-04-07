  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js";

  // Your web app's Firebase configuration
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

 signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("Logged In")
    window.location.href = "dashboard.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
})
