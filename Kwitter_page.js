//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyB63J03vwg-g1BR2gEse3gW3OwV58bZgsk",
    authDomain: "kwitter-app-cddce.firebaseapp.com",
    databaseURL: "https://kwitter-app-cddce-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-cddce",
    storageBucket: "kwitter-app-cddce.appspot.com",
    messagingSenderId: "150343884580",
    appId: "1:150343884580:web:f288886bf836592b9f9db1"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
    firebase.database().ref("/"+ room_name).on('value', function (snapshot){
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
    childKey = childSnapshot.key; childData = childSnapshot.val(); if (childKey != "purpose") {
          firebase_message_id = childKey;
          message_data = childData;
          //Start code

          //End code
    }
});
    })
}
getData();

function logout() {
localStorage.removeItem("user_name")
localStorage.removeItem("room_name")
window.location = "index.html"

}

function send(){
var msg=document.getElementById("msg").value
}