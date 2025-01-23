/*function spinner */
let spinner = document.getElementById('spinner');
let body = document.querySelector('body');


body.style.overflow = 'hidden';

if (spinner) {
    window.addEventListener('load', () => {
        setTimeout(() => { 
            spinner.remove();
            body.style.overflow = ''; 
            initializeScrollReveal(); 
        }, 500); 
    });
}

/*function toTop */

function toTop() {
    window.scrollTo({
        top: 0,
    });
}

/* ScrollReveal functions */

function initializeScrollReveal() {

    let nodeArray = [
        document.getElementById('form-contact-id'),
        document.getElementById('footer-content-id'),
        document.getElementById('footer-paragraph-id'),
        document.getElementById('to-top-container'),
        document.getElementById('profile-info-image-id'),
        ...document.querySelectorAll('.skill-content'),
    ];

        ScrollReveal().reveal(nodeArray,{
            origin: 'bottom',
            scale: 0.8,
            easing: 'ease-in-out',
            duration: 1500,  
            reset: true  
        });


    let bottomToTop = document.getElementById('profile-info-id');

        ScrollReveal().reveal(bottomToTop,{
            origin: 'bottom',
            distance: '40px',
            easing: 'ease-in-out',
            duration: 1500,  
            reset: true  
        });


    let rightToLeft = [
        ...document.querySelectorAll('.project-content.right'),
    ];

        ScrollReveal().reveal(rightToLeft,{
            origin: 'right',
            distance: '50px',
            duration: 700,  
            easing: 'ease-in-out',
            reset: true  
        });

    let leftToRight = [
        ...document.querySelectorAll('.project-content.left'),
    ];

        ScrollReveal().reveal(leftToRight,{
            origin: 'left',
            distance: '50px',
            duration: 700,  
            easing: 'ease-in-out',
            reset: true  
        });
}