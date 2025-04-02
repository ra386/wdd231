// Non profit
let modal = document.getElementById("myModal");
let btn = document.getElementById("myBtn");
let span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}

// Bronze

let bronze = document.getElementById("bronze-modal");
let bronzebtn = document.getElementById("bronzeBtn");
let bronzespan = document.getElementsByClassName("bronzeclose")[0];
bronzebtn.onclick = function() {
    modal.style.display = "block";
  }
bronzespan.onclick = function() {
    modal.style.display = "none";
  }
// Silver

  let bronze = document.getElementById("silver-modal");
  let bronzebtn = document.getElementById("bronzeBtn");
  let bronzespan = document.getElementsByClassName("bronzeclose")[0];
  bronzebtn.onclick = function() {
      modal.style.display = "block";
    }
  bronzespan.onclick = function() {
      modal.style.display = "none";
    }

// Non Gold
let bronze = document.getElementById("silver-modal");
  let bronzebtn = document.getElementById("bronzeBtn");
  let bronzespan = document.getElementsByClassName("bronzeclose")[0];
  bronzebtn.onclick = function() {
      modal.style.display = "block";
    }
  bronzespan.onclick = function() {
      modal.style.display = "none";
    }

  
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }