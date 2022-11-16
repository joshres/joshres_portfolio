const dropContainer = document.querySelector('.drop-container');
const dropMenuClick = document.querySelector('.drop-menu');
const dropItem = document.querySelector('.dropdown-item');

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
