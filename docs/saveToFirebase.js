function saveToFirebase(email) {
    var emailObject = {
        email: email
    };

    firebase.database().ref('subscription-entries').push().set(emailObject)
        .then(function(snapshot) {
            success(); // some success method
        }, function(error) {
            console.log('error' + error);
            error(); // some error method
        });
}

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/7.19.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/7.19.0/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyD5qGknO7A_nvl5bjlVsLuIvWaAiZ72gSk",
    authDomain: "ylhe-6a941.firebaseapp.com",
    databaseURL: "https://ylhe-6a941.firebaseio.com",
    projectId: "ylhe-6a941",
    storageBucket: "ylhe-6a941.appspot.com",
    messagingSenderId: "1042102527429",
    appId: "1:1042102527429:web:e52718a9d17a70eca657ac",
    measurementId: "G-HKC4GKZ7W9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

const email = document.getElementById('inputEmail');
saveToFirebase(email);