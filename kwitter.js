function addUser(){
    username= document.getElementById("user_name").value;
    localStorage.setItem("user_name", username);
    window.location= "kwitter_room.html";
    user_name= document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}
