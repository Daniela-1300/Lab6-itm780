function promptUserName() {              
    let person = prompt("Please enter your name");
    if (person != null) {
      document.getElementById("demo").innerHTML =
      "Hello " + person + "! How are you today?";
    }
}

function enlargeImage(img) {
    img.style.transform = "scale(1.5)";
    img.style.transition = "transform 0.3s ease";
}

function resetImage(img) {
    img.style.transform = "scale(1)";
}

function toggleDropdown() {      //nav bar functions
    const dropdown = document.getElementById("contact-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

function toggleDropdownAbout() {
    const dropdown = document.getElementById("about-dropdown");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}

// closes dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.nav-item a')) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (let i = 0; i < dropdowns.length; i++) {
            const openDropdown = dropdowns[i];
            if (openDropdown.style.display === "block") {
                openDropdown.style.display = "none";
            }

            const infoBoxes = document.getElementsByClassName("info-box");
            for (let box of infoBoxes) {
                box.style.display = "none";
            }
        }
    }
}

function showInfo(infoId) {
    // hides all info boxes first
    const infoBoxes = document.getElementsByClassName("info-box");
    for (let box of infoBoxes) {
        box.style.display = "none";
    }
    
    // show the selected info box
    const infoBox = document.getElementById(infoId);
    infoBox.style.display = "block";
}

function hideInfo(infoId) {
    const infoBox = document.getElementById(infoId);
    infoBox.style.display = "none";
}
