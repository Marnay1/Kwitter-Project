var firebaseConfig = {
    apiKey: "AIzaSyBkYwB6cqQ2bdKW-ISdBR-ttUNkMjFnGhc",
    authDomain: "twitter-project-73a32.firebaseapp.com",
    databaseURL: "https://twitter-project-73a32-default-rtdb.firebaseio.com",
    projectId: "twitter-project-73a32",
    storageBucket: "twitter-project-73a32.appspot.com",
    messagingSenderId: "944186381194",
    appId: "1:944186381194:web:82a5e02fe8763ce8dcae73"
};

firebase.initializeApp(firebaseConfig);
var user = localStorage.getItem("user_name");
document.getElementById("je").innerHTML = "Welcome " + user;

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name"
    });
    localStorage.setItem("roomname", room_name);
    window.location = "kwitter_page.html";
}

    function getData() {
        firebase.database().ref("/").on('value',
            function (snapshot) {
                document.getElementById("output").innerHTML =
                    "";
                snapshot.forEach(function (childSnapshot) {
                    childKey = childSnapshot.key;
                    Room_names = childKey;
                    //Start code
                    row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                    document.getElementById("output").innerHTML += row;
                    //End code
                });
            });
    }
    getData();


function redirectToRoomName(name) {
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("roomname");
    window.location.replace("index.html");
}