
var firebaseConfig = {
      apiKey: "AIzaSyB74PQu6sFkaUK-DJ9-iyz5bAu1Eqxc8KI",
      authDomain: "class-95-2d382.firebaseapp.com",
      databaseURL: "https://class-95-2d382-default-rtdb.firebaseio.com",
      projectId: "class-95-2d382",
      storageBucket: "class-95-2d382.appspot.com",
      messagingSenderId: "886842073751",
      appId: "1:886842073751:web:9b85e23d9897d728737fd2"
    };
    
    // Initialize Firebase
firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log("Room Name - " + Room_name);
row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>";
document.getElementById("output").innerHTML +=row;
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html")
}