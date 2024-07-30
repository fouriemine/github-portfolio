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
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector('header nav a [href*=' + id + ']').classList.add('active')
            })
        }
    })
}

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

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

//Horizontal scrolling code starts
const stickySections = [...document.querySelectorAll('.sticky')]
let images = [
    'image1.jpg',
    'image2.jpeg'
]

images.forEach(img => {
    stickySections.forEach(section => {
        let image = document.createElement('img');
        image.src = img;
        section.querySelector('.scroll_section').appendChild(image)
    })
})

window.addEventListener('scroll', (e) => {
    for(let i = 0; i< stickySections.length; i++) {
        transform(stickySections[i])
    }
})

function transform(section){
    const offsettTop = section.parentElement.offsetTop;
    const scrollSection = section.querySelector('.scroll_section')
    let percentage = ((window.scrollY - offsettTop) / window.innerHeight) * 100;
    percentage = percentage < 0 ? 0 : percentage > 400 ? 400 : percentage;
    scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
}