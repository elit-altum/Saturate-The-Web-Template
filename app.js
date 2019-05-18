var myTimer;

function showPage() {

      //Sets timer for 3.2 seconds (minimum time the pre loader animation will have to run for)
      myTimer = setInterval(getContent, 3200);
}

function getContent() {

      //Hides the preloader content and displays the body content
      document.getElementById('preLoader').style.display = "none";
      document.getElementById('content').style.display = "block";
}

var windowWidth = window.innerWidth;

//Changes color of the nav upon scroll
if(windowWidth < 700){
      document.getElementById("myNav").style.backgroundColor = "rgba(0, 0, 0, 0.9)";
}
else{
      window.onscroll = function () {
            if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
                  document.getElementById("myNav").style.backgroundColor = "rgba(0, 0, 0, 0.9)";
                  document.getElementById("myNav").style.transition = "all 0.3s ease-in";
            }
            else {
                  document.getElementById("myNav").style.backgroundColor = "transparent";
            }
      }
}


//Navbar animations
var myNavBar = document.querySelector('.nav-links');
var burgerIcon = document.querySelector('.burger-icon');

var navLinksArray = document.querySelectorAll('.nav-links li');

const navSlider = function () {

      burgerIcon.addEventListener('click', function () { //Onclick of the burger icon
            myNavBar.style.transition = 'all 0.5s ease-in-out';
            myNavBar.classList.toggle('nav-active');
            burgerIcon.classList.toggle('toggle-icon');

            //Applies the fade in animation to each of the nav links
            navLinksArray.forEach(function (link, index) {
                  if (link.style.animation) {
                        link.style.animation = '';
                  } else {
                        link.style.animation = `sideFade 0.5s ease forwards ${index / 5 + 0.8}s`;
                  }
            })

      })

}

navSlider(); //calls the function for execution

// Saturate, The Web Template
// Elit Altum
