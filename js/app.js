const dropContainer = document.querySelector('.drop-container');
const dropMenuClick = document.querySelector('.drop-menu');
const dropItem = document.querySelector('.dropdown-item');
const overlay = document.querySelector(".overlay");
const modalContainer = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");


////
///////////////////// Dropdown Menu /////////////////////
////

// toggle between hiding and showing the list when the user clicks on button
function dropMenu() {
    document.getElementById("dropdown").classList.toggle("show");
};

// change the hamburger menu icon to an X 
function changeMenu() {
    dropContainer.classList.toggle("change");
  }

// target drop-menu and listen for click
dropMenuClick.onclick = function() {dropMenu(), changeMenu()};

// Close the dropdown menu if the user clicks outside of it
const dropList = document.querySelector('.dropdown-list');
dropList.addEventListener("click" , e => {
  if (!e.target.matches('.drop-item')) {
    let dropdown = document.getElementById("dropdown") 
    if (dropdown.classList.contains("show")) {
      dropdown.classList.remove("show");
    }
    if (dropContainer.classList.contains("change")) {
      dropContainer.classList.remove("change");
    }
  }
  })

////////// Open Modal /////////////

gridContainer.addEventListener('click', e => {

  // make sure the click is not on the gridContainer itself
  if (e.target !== gridContainer) {

      // select the card element based on its proximity to the actual element clicked
      const card = e.target.closest(".card");
      const index = card.getAttribute('data-index');

      displayModal(index);
  }
});

///////// Close Modal /////////

modalClose.addEventListener('click', () => {
  overlay.classList.add("hidden");
});
