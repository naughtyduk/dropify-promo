# About Dropify®

<div class="docs-video-wrapper">
  <div class="docs-video-container">
    <video class="docs-video" preload="metadata">
      <source src="https://dropify.naughtydukassets.com/Dropify-Promo-Video-v3.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    <div class="docs-custom-controls">
      <button class="docs-play-pause-btn" aria-label="Play video"></button>
      <div class="docs-progress-bar-container">
        <div class="docs-progress-bar-fill"></div>
      </div>
    </div>
  </div>
</div>

<style>
.docs-video-wrapper {
  margin: 20px 0;
  display: flex;
  justify-content: center;
}

.docs-video-container {
  position: relative;
  width: 100%;
  max-width: 800px;
  border-radius: 12px;
  overflow: hidden;
  background: #000;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.docs-video {
  width: 100%;
  height: auto;
  display: block;
  cursor: pointer;
}

.docs-video-container:hover .docs-custom-controls {
  opacity: 1;
}

.docs-custom-controls {
  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 30px);
  max-width: 760px;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px 15px 10px 10px;
  border-radius: 10px;
  background: rgba(232, 232, 232, 0.95);
  backdrop-filter: blur(10px);
  transition: opacity 0.4s ease;
  opacity: 1;
  z-index: 10;
}

.docs-video-container.inactive .docs-custom-controls {
  opacity: 0;
}

.docs-play-pause-btn {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  position: relative;
  outline: none;
  flex-shrink: 0;
}

.docs-play-pause-btn::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  border-top: 8px solid transparent;
  border-bottom: 8px solid transparent;
  border-left: 14px solid #333333;
  transition: all 0.2s ease;
}

.docs-play-pause-btn.playing::before {
  border-style: double;
  border-width: 0 0 0 14px;
  border-color: #333333;
  height: 16px;
  width: 10px;
  border-left-style: solid;
  border-right-style: solid;
  border-left-width: 4px;
  border-right-width: 4px;
  transform: translate(-50%, -50%);
}

.docs-progress-bar-container {
  flex-grow: 1;
  height: 6px;
  background: #cdcdcd;
  border-radius: 3px;
  cursor: pointer;
}

.docs-progress-bar-fill {
  width: 0;
  height: 100%;
  border-radius: 3px;
  background: #333333;
  transition: width 0.1s ease;
}

@media (max-width: 768px) {
  .docs-custom-controls {
    opacity: 1;
  }
  
  .docs-video-container {
    border-radius: 8px;
  }
}
</style>

<script>
if (typeof window !== 'undefined') {
  function initVideoControls() {
    const videoContainer = document.querySelector('.docs-video-container');
    if (!videoContainer) {
      setTimeout(initVideoControls, 100);
      return;
    }
    
    const video = videoContainer.querySelector('.docs-video');
    const playPauseBtn = videoContainer.querySelector('.docs-play-pause-btn');
    const progressBarContainer = videoContainer.querySelector('.docs-progress-bar-container');
    const progressBarFill = videoContainer.querySelector('.docs-progress-bar-fill');
    
    if (!video || !playPauseBtn || !progressBarContainer || !progressBarFill) {
      setTimeout(initVideoControls, 100);
      return;
    }
    
    let inactivityTimer;
    
    function hideControls() {
      if (!video.paused) {
        videoContainer.classList.add('inactive');
      }
    }
    
    function resetInactivityTimer() {
      videoContainer.classList.remove('inactive');
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(hideControls, 3000);
    }
    
    videoContainer.addEventListener('mousemove', resetInactivityTimer);
    videoContainer.addEventListener('touchstart', resetInactivityTimer);
    
    function togglePlayPause() {
      if (video.paused) {
        video.play().then(() => {
          playPauseBtn.classList.add('playing');
          playPauseBtn.setAttribute('aria-label', 'Pause video');
          resetInactivityTimer();
        }).catch(e => console.error('Play failed:', e));
      } else {
        video.pause();
        playPauseBtn.classList.remove('playing');
        playPauseBtn.setAttribute('aria-label', 'Play video');
        clearTimeout(inactivityTimer);
      }
    }
    
    playPauseBtn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      togglePlayPause();
    });
    
    video.addEventListener('click', function(e) {
      e.stopPropagation();
      if (e.target === video) togglePlayPause();
    });
    
    video.addEventListener('timeupdate', function() {
      if (video.duration) {
        const progress = (video.currentTime / video.duration) * 100;
        progressBarFill.style.width = progress + '%';
      }
    });
    
    progressBarContainer.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      const rect = progressBarContainer.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const width = rect.width;
      if (video.duration) {
        const newTime = (clickX / width) * video.duration;
        video.currentTime = newTime;
      }
    });
    
    video.addEventListener('ended', function() {
      playPauseBtn.classList.remove('playing');
      playPauseBtn.setAttribute('aria-label', 'Play video');
      videoContainer.classList.remove('inactive');
      clearTimeout(inactivityTimer);
    });
    
    // Keyboard controls
    document.addEventListener('keydown', function(e) {
      if (document.activeElement && document.activeElement.closest('.docs-video-container')) {
        if (e.key === ' ') {
          e.preventDefault();
          togglePlayPause();
        }
      }
    });
  }
  
  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVideoControls);
  } else {
    initVideoControls();
  }
}
</script>

Dropify® is a Shopify app designed to build anticipation and drive sales for product launches by creating password-protected countdown landing pages. When customers visit your store, they'll see a customisable countdown timer with your branding, along with an email and phone collection form to capture interested customers before your drop goes live.

## Key Features

- **Countdown Protection**: Automatically password-protect your entire store with a countdown timer
- **Customer Collection**: Capture email addresses and phone numbers from interested customers
- **Auto-Unlock**: Automatically remove protection and restore site access when the countdown ends
- **Native Integration**: All collected customer data flows directly into Shopify's customer records
- **Marketing Ready**: Customers are automatically tagged and opted into marketing communications

## Case Studies

We've performed several case studies with brands using Dropify®, and the results consistently show significant improvements in customer engagement and sales conversion.

In our most notable success story, a large entertainment brand saw a **32.8% sales uplift** when they enabled phone number collection and used SMS notifications to alert customers when their drop went live. For this particular brand, the increased engagement equated to more than £300,000 in additional revenue from a single product launch.

The combination of building anticipation through the countdown and having direct communication channels (email and SMS) proved to be highly effective for driving immediate sales when products became available.
