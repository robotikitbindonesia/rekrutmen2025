// // TODO: GANTI DENGAN CONFIG FIREBASE ANDA
//         const firebaseConfig = {
//           apiKey: "AIzaSyA7Srz3fWUL4BrEkA2I6Ywsq2O9Ehhh7os",
//           authDomain: "rekrutmenrobotikitbi2025.firebaseapp.com",
//           databaseURL: "https://rekrutmenrobotikitbi2025-default-rtdb.asia-southeast1.firebasedatabase.app",
//           projectId: "rekrutmenrobotikitbi2025",
//           storageBucket: "rekrutmenrobotikitbi2025.firebasestorage.app",
//           messagingSenderId: "899366353919",
//           appId: "1:899366353919:web:7372240bf986b5724ac5ca",
//           measurementId: "G-6CHC1P48SF"
//         };

//         // Initialize Firebase
//         firebase.initializeApp(firebaseConfig);
//         const database = firebase.database();

// // Export untuk digunakan di file lain
// window.firebaseDb = database;



  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.4.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA7Srz3fWUL4BrEkA2I6Ywsq2O9Ehhh7os",
    authDomain: "rekrutmenrobotikitbi2025.firebaseapp.com",
    databaseURL: "https://rekrutmenrobotikitbi2025-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "rekrutmenrobotikitbi2025",
    storageBucket: "rekrutmenrobotikitbi2025.firebasestorage.app",
    messagingSenderId: "899366353919",
    appId: "1:899366353919:web:7372240bf986b5724ac5ca",
    measurementId: "G-6CHC1P48SF"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
