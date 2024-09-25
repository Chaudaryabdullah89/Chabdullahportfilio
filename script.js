
const elementsLeft = document.querySelectorAll(".animation-left");
const elementsRight = document.querySelectorAll(".animation-right");

window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    var ul = document.querySelector('nav ul');
    var mobileMenu = document.getElementById('mobileMenu');
    var button = document.querySelector('button'); // Select the button

    if (window.scrollY > 100) {
        mobileMenu.style.zIndex = '60';
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.width = '100%';
   
        navbar.style.backgroundColor = 'transparent';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.borderBottom = '1px solid #e5e7eb'; 
        ul.classList.remove('border-2');
    } else {
        navbar.style.position = 'static';
        navbar.style.borderBottom = 'none'; 
        ul.classList.add('border-2');
    }

    // Hide the button on medium and small screens
    if (window.innerWidth < 768) {
        button.style.display = 'none';
    } else {
        button.style.display = 'block';
    }
});

function circlemousefollower(xscale,yscale) {
    window.addEventListener("mousemove", function(dets) {

        let minicircle = document.getElementsByClassName('minicircle')[0];
        if (minicircle) { 
            minicircle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(${xscale},${yscale})`;
            minicircle.style.display = 'Unset' 
        }
    });
}
function mousemoving(){

}
circlemousefollower();
function toggleMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const menuItems = document.querySelectorAll('.menu a'); 
    menuItems.forEach(item => {
        item.addEventListener('click', () => {
      
            mobileMenu.classList.remove('translate-x-0');
            mobileMenu.classList.add('translate-x-full');
        });
    });
    if (mobileMenu.classList.contains('translate-x-full')) {
        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.classList.add('translate-x-0');
    } else {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
    }
}
// script.js
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
       
        } else {
            entry.target.classList.remove('visible');
    
        }
    });
}, { threshold: 0.1 });

elementsLeft.forEach(element => {
    observer.observe(element);
});

elementsRight.forEach(element => {
    observer.observe(element);
});


document.addEventListener("DOMContentLoaded", function() {
const header = document.querySelector('.head')
const elementsLeft = document.querySelectorAll(".animation-left");
const elementsRight = document.querySelectorAll(".animation-right");
const elemnt = document.querySelector(".accouncment-bar")

let lastScrollY = window.scrollY;

window.addEventListener("scroll", function() {
if (window.scrollY > lastScrollY) {
  // Scrolling down
  header.classList.add("fixed");
  header.classList.remove("not-fixed");
  elemnt.classList.add('none')
} else {
  // Scrolling up
  header.classList.remove("fixed");
  header.classList.add("not-fixed");
  elemnt.classList.remove('none')
}
lastScrollY = window.scrollY;
});

const observer = new IntersectionObserver(entries => {
entries.forEach(entry => {
if (entry.isIntersecting) {
entry.target.classList.add('visible');
header.classList.remove("not-fixed");
} else {
entry.target.classList.remove('visible');
header.classList.add("not-fixed");
}
});
}, { threshold: 0.1 });

elementsLeft.forEach(element => {
observer.observe(element);
});

elementsRight.forEach(element => {
observer.observe(element);
});
});
function circlemoving() {
    var xscale = 1;
    var yscale = 1;
    var xprev = 0;
    var yprev = 0;
    var timeout;

    window.addEventListener('mousemove', function (dets) {
        if (dets.clientY > window.innerHeight) return;

        clearTimeout(timeout);

        var xdiff = dets.clientX - xprev;
        var ydiff = dets.clientY - yprev;

        xprev = dets.clientX;
        yprev = dets.clientY;

        let xscale = gsap.utils.clamp(.8, 1.2, xdiff);
        let yscale = gsap.utils.clamp(.8, 1.2, ydiff);

        circlemousefollower(xscale, yscale);

        timeout = setTimeout((e) => {
            let minicircle = document.getElementsByClassName('minicircle')[0];
            if (minicircle) {
                minicircle.style.transform = `translate(${dets.clientX}px, ${dets.clientY}px) scale(1,1)`;
                minicircle.style.display = 'unset';
            }
        }, 100);
        console.log(xscale, dets.clientX, yscale, dets.clientY);
    });
}
circlemoving()
