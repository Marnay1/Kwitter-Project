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

function logout(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location.replace("index.html");
}
user_name= localStorage.getItem("user_name");
room_name= localStorage.getItem("room_name");
document.getElementById("username").innerHTML= "Welcome "+ user_name +" to the "+ room_name+ " room!";
function send(){
    message= document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name:user_name,
        message:message,
        like:0
    });
    document.getElementById("msg").innerHTML= " ";
}