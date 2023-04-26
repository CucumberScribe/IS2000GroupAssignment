// Contributors: Aramis Hahne, Michael Hoff

function showVid () {
  var video = document.getElementById("vid")
  if (video.style.display === "none") {
    video.style.display = "block";
  } else {
    video.style.display = "none";
  }
}

//Donations Show/Hide Buttons

function show_hide_DonateFunds() {
  var x = document.getElementById("DonateFunds");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function show_hide_Sponsor() {
  var x = document.getElementById("Sponsor");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function show_hide_Host() {
  var x = document.getElementById("Host");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//Thank You, Alert
function thank_you() {   
  alert("Thank You For Your Support!");  
}  