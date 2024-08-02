let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLink = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLink.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
};

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

//CHARACTER ANIMATION

document.addEventListener('mousemove',function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const eyes = document.getElementById('eyes');
    const face = document.getElementById('face');

    //Get the SVG elements and its bounding rectangle
    const svg = document.querySelector('svg');
    const svgRect = svg.getBoundingClientRect();

    //calculate the center of the svg viewport
    const svgCenterX = svgRect.width / 2;
    const svgCenterY = svgRect.height / 2;

    //calc the movement ratios based on the mouse position
    const moveX = (mouseX - svgRect.left - svgCenterX) / svgCenterX;
    const moveY = (mouseY - svgRect.top - svgCenterY) / svgCenterY;

    //apply trannsformations to eyes and face layers
    eyes.style.transform = `translate(${moveX * 15}px, ${moveY * 15}px)`;
    face.style.transform = `translate(${moveX * 10}px, ${moveY * 10}px)`;
});

/*
window.addEventListener('scroll', () => {
    const horizontalScrollSection = document.querySelector('.horizontal-scroll-section');
    if (horizontalScrollSection) {
        const rect = horizontalScrollSection.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const horizontalScroll = horizontalScrollSection.querySelector('.horizontal-scroll');
            const container = horizontalScroll.querySelector('.scroll-container');
            const sectionHeight = horizontalScrollSection.offsetHeight;
            const scrollY = window.scrollY - horizontalScrollSection.offsetTop;
            const maxScroll = container.scrollWidth - window.innerWidth;
            const scrollPercentage = Math.min(scrollY / (sectionHeight - window.innerHeight), 1);
            container.style.transform = `translateX(${-scrollPercentage * maxScroll}px)`;
        }
    }
});*/

//OU REGTE DEEL
//Horizontal scrolling code starts
const stickySections = [...document.querySelectorAll('.sticky')];
let images = [
    'self1.jpg',
    'faith1.jpg', //Image by rawpixel.com on Freepik
    'extraclass1.jpeg',
    'typing1.jpeg'
];

images.forEach(img => {
    stickySections.forEach(section => {
        let image = document.createElement('img');
        image.src = img;
        section.querySelector('.scroll_section').appendChild(image);
    });
});




window.addEventListener('scroll', () => {
    for(let i = 0; i< stickySections.length; i++) {
        transform(stickySections[i]);
    }
});


function transform(section){
    const offsettTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.scroll_section');
    let percentage = ((window.scrollY - offsettTop) / window.innerHeight) * 100;

    if (window.innerWidth <= 895) {
        percentage = percentage < 0 ? 0 : percentage > 500 ? 50 : percentage;
        // Adjust for smaller screens
    //    scrollSection.style.transform = `translate3d(${-percentage * (maxScroll / 100)}px)`;

    } else {
        percentage = percentage < 0 ? 0 : percentage > 100 ? 100 : percentage;
        // Standard transformation for larger screens
    //    scrollSection.style.transform = `translate3d(${-(percentage * (images.length - 1))}vw, 0, 0)`;
    };
    
    
    scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`;
    //percentage = Math.max(0, Math.min(percentage, 100)); // Limit percentage to 0-100 range
    //scrollSection.style.transform = `translateX(${-(percentage * (scrollSection.offsetWidth / window.innerWidth - 1))}px)`;

    
    //scrollSection.style.transform = `translate3d(${-(percentage * (images.length - 1))}vw, 0, 0)`;

    //const sectionWidth = scrollSection.offsetWidth;
    //const imageWidth = sectionWidth / images.length; // Calculate width per image
    //const maxScroll = sectionWidth - window.innerWidth;

    // Check screen width and apply different transformation if width is 895px or less
    //if (window.innerWidth <= 895) {
        // Adjust for smaller screens
    //    scrollSection.style.transform = `translate3d(${-percentage * (maxScroll / 100)}px)`;
    //} else {
        // Standard transformation for larger screens
    //    scrollSection.style.transform = `translate3d(${-(percentage * (images.length - 1))}vw, 0, 0)`;
    //}
};

/* WERKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK
function transform(section){
    const offsettTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.scroll_section');
    let percentage = ((window.scrollY - offsettTop) / window.innerHeight) * 100;


    percentage = Math.max(0, Math.min(percentage, 100)); // Limit percentage to 0-100 range
    //scrollSection.style.transform = `translateX(${-(percentage * (scrollSection.offsetWidth / window.innerWidth - 1))}px)`;

    //percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
    //scrollSection.style.transform = `translate3d(${-(percentage * (images.length - 1))}vw, 0, 0)`;

    const sectionWidth = scrollSection.offsetWidth;
    const imageWidth = sectionWidth / images.length; // Calculate width per image
    const maxScroll = sectionWidth - window.innerWidth;

    // Check screen width and apply different transformation if width is 895px or less
    if (window.innerWidth <= 895) {
        // Adjust for smaller screens
        scrollSection.style.transform = `translate3d(${-percentage * (maxScroll / 100)}px)`;
    } else {
        // Standard transformation for larger screens
        scrollSection.style.transform = `translate3d(${-(percentage * (images.length - 1))}vw, 0, 0)`;
    }
};*/



//REGTE DEEL KLAAR
















/*
window.addEventListener('scroll', () => {
    stickySections.forEach(section => {
        transform(section);
    });
});


function transform(section) {
    const scrollSection = section.querySelector('.scroll_section');
    const scrollWidth = scrollSection.scrollWidth;
    const viewportWidth = window.innerWidth;
    const maxScroll = scrollWidth - viewportWidth;

    let percentage = (window.scrollY / document.body.scrollHeight) * 100;
    percentage = Math.max(0, Math.min(percentage, 100)); // Limit percentage to 0-100 range

    // Translate to account for scroll position and width of images
    scrollSection.style.transform = `translateX(${-percentage * maxScroll / 100}px)`;
};
*/