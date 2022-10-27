var sidemenu = document.getElementById("sidemenu");

function openmenu() {
	sidemenu.style.right = "0";
}

function closemenu() {
	sidemenu.style.right = "-500px";
}

const toggleButton = document.getElementById('toggle-button');
const navlist = document.getElementById('nav-list');

toggleButton.addEventListener('click', () => {
	navlist.classList.toggle('active');
});

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 5000);