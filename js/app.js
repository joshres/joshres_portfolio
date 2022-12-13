const dropContainer = document.querySelector('.drop-container');
const dropMenuClick = document.querySelector('.drop-menu');
const dropItem = document.querySelector('.dropdown-item');
const overlay = document.querySelector(".overlay");
const modalContainer = document.querySelector(".modal-content");
const modalClose = document.querySelector(".modal-close");
const mainName = document.querySelector(".name");


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

// Close the dropdown menu if the user clicks the X
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

function displayModal(i) {
  index = i;

  const modalHTML = `
    <img class="modal-image" src="images/josh-river.jpg">
    <div class="mmodal-text-container">
      <h2 class="modal-name">Josh Resnick</h2>
      <p class="modal-about">I love things!</p>
    </div>
  `;

  overlay.classList.remove("hidden");
  modalContainer.innerHTML = modalHTML;
};

mainName.addEventListener('click', e => {

  // make sure the click is not on the gridContainer itself
  if (e.target === mainName) {
    displayModal();
  }
});

///////// Close Modal /////////

modalClose.addEventListener('click', () => {
  overlay.classList.add("hidden");
});
