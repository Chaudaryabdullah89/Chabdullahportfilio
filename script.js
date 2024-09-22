


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
    if (mobileMenu.classList.contains('translate-x-full')) {
        mobileMenu.classList.remove('translate-x-full');
        mobileMenu.classList.add('translate-x-0');
    } else {
        mobileMenu.classList.remove('translate-x-0');
        mobileMenu.classList.add('translate-x-full');
    }
}