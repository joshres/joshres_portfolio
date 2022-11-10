const dropContainer = document.querySelector('.drop-container');
const dropMenuClick = document.querySelector('.drop-menu');

////
///////////////////// Dropdown Menu /////////////////////
////

// toggle between hiding and showing the list when the user clicks on button
function dropMenu() {
    document.getElementById("dropdown").classList.toggle("show");
};

// close the dropdown menu if the user clicks oustide of it
window.onclick = function(event) {
    if (!event.target.matches('.drop-container')) {
        let dropdowns = document.getElementsByClassName("dropdown");
        for (i = 0; i < dropdowns.length; i++) {
            let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

// target drop-menu and listen for click
dropMenuClick.onclick = changeMenu(), dropMenu();

// change the hamburger menu icon to an X 
function changeMenu() {
    dropContainer.classList.toggle("change");
  }