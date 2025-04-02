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
window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
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

  let silver = document.getElementById("silver-modal");
  let silverbtn = document.getElementById("silverBtn");
  let silverspan = document.getElementsByClassName("silverclose")[0];
  silverbtn.onclick = function() {
      modal.style.display = "block";
    }
  silverspan.onclick = function() {
      modal.style.display = "none";
    }



let goldModal = document.getElementById("gold-modal");
let goldBtn = document.getElementById("goldBtn");
let goldSpan = document.getElementsByClassName("goldclose")[0];
goldBtn.onclick = function() {
  modal.style.display = "block";
}
goldSpan.onclick = function() {
  modal.style.display = "none";
}

  