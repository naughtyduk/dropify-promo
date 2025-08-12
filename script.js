// HERO SLIDER

// const images = [
//     "/assets/hero/LG-BKG-V1.jpg",
//     "/assets/hero/LG-BKG-V2.jpg",
//     "/assets/hero/LG-BKG-V3.jpg"
//   ];
  
// video setup
const videoElement = document.getElementById("canvasVideo");
// images setup
// uniforms backgrounds color
const images = [
  "/assets/hero/LG-BKG-V1.jpg"
];

// content setup
const texts = [
  [""],
  [""],
  [""]
]

rgbKineticSlider = new rgbKineticSlider({

  slideImages: [videoElement], // array of images > must be 1920 x 1080
  itemsTitles: texts, // array of titles / subtitles
  
    backgroundDisplacementSprite: '/assets/LG-Displace-v1.jpg',
    cursorDisplacementSprite: '/assets/hero/LG-BKG-V1.jpg',
  
    cursorImgEffect : true,
    cursorTextEffect : false,
    cursorScaleIntensity : 24,
    cursorMomentum : 0.5,
  
    swipe: false,
    swipeDistance : window.innerWidth * 0.5,
    swipeScaleIntensity: 5,
  
    slideTransitionDuration : 0.4,
    transitionScaleIntensity : 10,
    transitionScaleAmplitude : 80,
  
    nav: true,
    navElement: '.main-nav',
  
    imagesRgbEffect : false,
  
    textsDisplay : true,
    textsSubTitleDisplay : false,
    textsTiltEffect : true,
    googleFonts : ['Open Sans'],
    buttonMode : false,
    textsRgbEffect : false,
  
    textTitleColor : 'white',
    textTitleSize : 180,
    mobileTextTitleSize : 40,
    textTitleLetterspacing : 20,

    cursorDisplacementEasing: 'easeInOutQuint',
  });

  // toggle slide auto
  // setInterval(function() {
  //   $('.next').click();
  // }, 4500);
  
// Function to initialize grained texture
function initGrainedTexture() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    // Settings for screens wider than 992px
    grained('#grain-overlay', {
      animate: true,
      patternWidth: 200,
      patternHeight: 200,
      grainOpacity: 0.35,
      grainDensity: 3,
      grainWidth: 1,
      grainHeight: 1
    });
  } else {
    // Settings for screens narrower than 991px
    grained('#grain-overlay', {
      animate: true,
      patternWidth: 20,
      patternHeight: 20,
      grainOpacity: 0.15,
      grainDensity: 3,
      grainWidth: 1,
      grainHeight: 1
    });
  }
}

// Call the function initially
initGrainedTexture();

// Listen for window resize events
window.addEventListener('resize', initGrainedTexture);


  // Intro Animate
  const animateInElements = document.querySelectorAll('.animate-in');
  const animateInLogoOverlay = document.querySelectorAll('.logo-overlay');


  // Logo overlay animation
  anime({
    targets: animateInLogoOverlay,
    opacity: [0, 1],
    easing: 'easeOutExpo',
    duration: 1500,
    delay: 350,
  });
  // Link animations
  setTimeout(function() {
    anime({
      targets: animateInElements,
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 1300,
      delay: anime.stagger(350),
    });
  }, 1000);

  // Tilt functions
  $('.js-tilt').tilt({
    maxTilt:        10,
    perspective:    150,
    easing:         "cubic-bezier(.03,.98,.52,.99)",
    speed:          1300,
    transition:     true,
    disableAxis:    null,
    reset:          true,
    glare:          false,
    maxGlare:       1
  });



// // Get the HTML element with the class .animated-content
// var container = document.querySelector('.rgbKineticSlider');

// // Get the canvas element within the container
// var canvas = container.querySelector('canvas');

// // Set the willReadFrequently attribute to true
// canvas.willReadFrequently = true;


// Print console link NaughtyDuk
console.log("%cThis site was built by NaughtyDuk©", "font-weight: bold;");
console.log("%chttps://naughtyduk.com", "font-weight: bold; text-decoration: underline; cursor: pointer;");

console.log = (function(originalConsoleLog) {
  return function(...args) {
    const isUrl = args[0] === "https://naughtyduk.com";
    if (isUrl) {
      const link = document.createElement("a");
      link.href = args[0];
      link.textContent = args[0];
      link.target = "_blank";
      console.log(link);
    } else {
      originalConsoleLog(...args);
    }
  };
})(console.log);


// Scroll & Glitch
const parent = document.getElementById('parent');
const canvasTouch = document.getElementById('rgbKineticSlider');

let lastTouchX = null;
let lastTouchY = null;

// Add touch event listeners to the canvas
canvasTouch.addEventListener('touchstart', e => {
  lastTouchX = e.touches[0].clientX;
  lastTouchY = e.touches[0].clientY;
});

canvasTouch.addEventListener('touchmove', e => {
  const touchX = e.touches[0].clientX;
  const touchY = e.touches[0].clientY;
  const dx = touchX - lastTouchX;
  const dy = touchY - lastTouchY;
  
  // Handle touch event here
  
  lastTouchX = touchX;
  lastTouchY = touchY;
  
  // Prevent default scrolling behavior
  e.preventDefault();
});

// Add scroll event listener to the parent element
parent.addEventListener('scroll', e => {
  // Handle scrolling here
});
