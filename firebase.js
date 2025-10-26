// TODO: GANTI DENGAN CONFIG FIREBASE ANDA
        const firebaseConfig = {
          apiKey: "AIzaSyA7Srz3fWUL4BrEkA2I6Ywsq2O9Ehhh7os",
          authDomain: "rekrutmenrobotikitbi2025.firebaseapp.com",
          databaseURL: "https://rekrutmenrobotikitbi2025-default-rtdb.asia-southeast1.firebasedatabase.app",
          projectId: "rekrutmenrobotikitbi2025",
          storageBucket: "rekrutmenrobotikitbi2025.appspot.com",
          messagingSenderId: "899366353919",
          appId: "1:899366353919:web:7372240bf986b5724ac5ca",
          measurementId: "G-6CHC1P48SF"
        };

        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);
        const database = firebase.database();

// Export untuk digunakan di file lain
window.firebaseDb = database;


