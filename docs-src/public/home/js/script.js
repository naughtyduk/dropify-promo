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
const images = ["/assets/hero/LG-BKG-V1.jpg"];

// content setup
const texts = [[""], [""], [""]];

rgbKineticSlider = new rgbKineticSlider({
  slideImages: [videoElement], // array of images > must be 1920 x 1080
  itemsTitles: texts, // array of titles / subtitles

  backgroundDisplacementSprite: "/hero/LIQ_DISPLACE.jpg",
  cursorDisplacementSprite: "/hero/LIQ_DISPLACE.jpg",

  cursorImgEffect: true,
  cursorTextEffect: false,
  cursorScaleIntensity: 24,
  cursorMomentum: 0.5,

  swipe: false,
  swipeDistance: window.innerWidth * 0.5,
  swipeScaleIntensity: 5,

  slideTransitionDuration: 0.4,
  transitionScaleIntensity: 10,
  transitionScaleAmplitude: 80,

  nav: true,
  navElement: ".main-nav",

  imagesRgbEffect: false,

  textsDisplay: true,
  textsSubTitleDisplay: false,
  textsTiltEffect: true,
  googleFonts: ["Open Sans"],
  buttonMode: false,
  textsRgbEffect: false,

  textTitleColor: "white",
  textTitleSize: 180,
  mobileTextTitleSize: 40,
  textTitleLetterspacing: 20,

  cursorDisplacementEasing: "easeInOutQuint",
});

// toggle slide auto
// setInterval(function() {
//   $('.next').click();
// }, 4500);

// Function to initialize grained texture
function initGrainedTexture() {
  if (window.matchMedia("(min-width: 992px)").matches) {
    // Settings for screens wider than 992px
    grained("#grain-overlay", {
      animate: true,
      patternWidth: 200,
      patternHeight: 200,
      grainOpacity: 0.35,
      grainDensity: 3,
      grainWidth: 1,
      grainHeight: 1,
    });
  } else {
    // Settings for screens narrower than 991px
    grained("#grain-overlay", {
      animate: true,
      patternWidth: 20,
      patternHeight: 20,
      grainOpacity: 0.15,
      grainDensity: 3,
      grainWidth: 1,
      grainHeight: 1,
    });
  }
}

// Call the function initially
initGrainedTexture();

// Listen for window resize events
window.addEventListener("resize", initGrainedTexture);

// Intro Animate
const animateInElements = document.querySelectorAll(".animate-in");
const animateInLogoOverlay = document.querySelectorAll(".logo-overlay");

// Logo overlay animation
anime({
  targets: animateInLogoOverlay,
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 1500,
  delay: 500,
});
// Link animations
setTimeout(function () {
  anime({
    targets: animateInElements,
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 1300,
    delay: anime.stagger(550),
  });
}, 700);

// Tilt functions
$(".js-tilt").tilt({
  maxTilt: 10,
  perspective: 150,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  speed: 1300,
  transition: true,
  disableAxis: null,
  reset: true,
  glare: false,
  maxGlare: 1,
});

// // Get the HTML element with the class .animated-content
// var container = document.querySelector('.rgbKineticSlider');

// // Get the canvas element within the container
// var canvas = container.querySelector('canvas');

// // Set the willReadFrequently attribute to true
// canvas.willReadFrequently = true;

// Print console link NaughtyDuk
console.log("%cThis site was built by NaughtyDuk©", "font-weight: bold;");
console.log(
  "%chttps://naughtyduk.com",
  "font-weight: bold; text-decoration: underline; cursor: pointer;"
);

console.log = (function (originalConsoleLog) {
  return function (...args) {
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
const parent = document.getElementById("parent");
const canvasTouch = document.getElementById("rgbKineticSlider");

let lastTouchX = null;
let lastTouchY = null;

// Add touch event listeners to the canvas
canvasTouch.addEventListener("touchstart", (e) => {
  lastTouchX = e.touches[0].clientX;
  lastTouchY = e.touches[0].clientY;
});

canvasTouch.addEventListener("touchmove", (e) => {
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
parent.addEventListener("scroll", (e) => {
  // Handle scrolling here
});

//Ripples
//$('#ripples').ripples({
//	resolution: 1024,
//	dropRadius: 25,
//	perturbance: 0.8,
//});

// Video Modal Behavior (mirrors example.html; uses GSAP/TweenMax already loaded)
(function () {
  const videoHoverArea = document.querySelector(".video-hover-area");
  const fullscreenPlayer = document.querySelector(".fullscreen-player");
  if (!videoHoverArea || !fullscreenPlayer) return;

  const playerVideo = fullscreenPlayer.querySelector("video");
  const closeBtn = fullscreenPlayer.querySelector(".close-btn");
  const playPauseBtn = fullscreenPlayer.querySelector(".play-pause-btn");
  const progressBarContainer = fullscreenPlayer.querySelector(
    ".progress-bar-container"
  );
  const progressBarFill = fullscreenPlayer.querySelector(".progress-bar-fill");
  let inactivityTimer;
  let isOpen = false;

  // Initialize modal position immediately to prevent flash
  TweenMax.set(fullscreenPlayer, { xPercent: -100 });
  fullscreenPlayer.setAttribute("aria-hidden", "true");

  function hideControls() {
    if (!playerVideo.paused) {
      fullscreenPlayer.classList.add("inactive");
    }
  }

  function resetInactivityTimer() {
    fullscreenPlayer.classList.remove("inactive");
    clearTimeout(inactivityTimer);
    inactivityTimer = setTimeout(hideControls, 3000);
  }

  fullscreenPlayer.addEventListener("mousemove", resetInactivityTimer);
  fullscreenPlayer.addEventListener("touchstart", resetInactivityTimer);

  function togglePlayPause() {
    if (playerVideo.paused) {
      playerVideo.play();
      playPauseBtn.classList.add("playing");
      playPauseBtn.setAttribute("aria-label", "Pause video");
      resetInactivityTimer();
    } else {
      playerVideo.pause();
      playPauseBtn.classList.remove("playing");
      playPauseBtn.setAttribute("aria-label", "Play video");
      clearTimeout(inactivityTimer);
    }
  }

  playPauseBtn.addEventListener("click", togglePlayPause);
  playerVideo.addEventListener("click", function (e) {
    e.stopPropagation();
    if (e.target === playerVideo) togglePlayPause();
  });

  playerVideo.addEventListener("timeupdate", function () {
    const progress = (playerVideo.currentTime / playerVideo.duration) * 100;
    TweenMax.to(progressBarFill, 0.1, {
      width: progress + "%",
      ease: Linear.easeNone,
    });
  });

  progressBarContainer.addEventListener("click", function (e) {
    const rect = progressBarContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const newTime = (clickX / width) * playerVideo.duration;
    playerVideo.currentTime = newTime;
  });

  playerVideo.addEventListener("ended", function () {
    playPauseBtn.classList.remove("playing");
    playPauseBtn.setAttribute("aria-label", "Play video");
    fullscreenPlayer.classList.remove("inactive");
    clearTimeout(inactivityTimer);
  });

  videoHoverArea.addEventListener("click", function (e) {
    e.preventDefault();
    TweenMax.set(fullscreenPlayer, { visibility: "visible" });
    TweenMax.to(fullscreenPlayer, 0.8, {
      xPercent: 0,
      ease: Power4.easeInOut,
      onComplete: function () {
        playerVideo.play();
        playPauseBtn.classList.add("playing");
        playPauseBtn.setAttribute("aria-label", "Pause video");
        resetInactivityTimer();
      },
    });
    isOpen = true;
    fullscreenPlayer.setAttribute("aria-hidden", "false");
  });

  function closePlayer() {
    TweenMax.to(playerVideo, 0.5, {
      volume: 0,
      ease: Linear.easeNone,
      onComplete: function () {
        playerVideo.pause();
        TweenMax.to(fullscreenPlayer, 0.8, {
          xPercent: -100,
          ease: Power4.easeInOut,
          onComplete: function () {
            TweenMax.set(fullscreenPlayer, { visibility: "hidden" });
            playerVideo.currentTime = 0;
            playerVideo.volume = 1;
            playPauseBtn.classList.remove("playing");
            playPauseBtn.setAttribute("aria-label", "Play video");
            TweenMax.set(progressBarFill, { width: "0%" });
          },
        });
      },
    });
    isOpen = false;
    fullscreenPlayer.setAttribute("aria-hidden", "true");
  }

  closeBtn.addEventListener("click", closePlayer);
  closeBtn.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      closePlayer();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (!isOpen) return;
    if (e.key === "Escape") {
      closePlayer();
    } else if (e.key === " ") {
      e.preventDefault();
      togglePlayPause();
    }
  });
})();
