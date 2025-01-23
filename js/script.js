/*function spinner */
let spinner = document.getElementById('spinner');
let body = document.querySelector('body');


body.style.overflow = 'hidden';

if (spinner) {
    window.addEventListener('load', () => {
        setTimeout(() => { 
            spinner.remove();
            body.style.overflow = ''; 
        }, 500); 
    });
}

/*function toTop */

function toTop() {
    window.scrollTo({
        top: 0,
    });
}