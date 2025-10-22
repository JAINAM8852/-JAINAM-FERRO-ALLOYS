// ===== MAIN JAVASCRIPT FILE FOR SAILCO METAL & TUBES INDUSTRIES =====

// ===== HERO SLIDER FUNCTIONALITY =====
let currentSlideIndex = 0;
const slides = document.querySelectorAll(".hero-slide");
const indicators = document.querySelectorAll(".indicator");
let slideInterval;

// Initialize slider
function initHeroSlider() {
  if (slides.length === 0) return;

  // Start automatic sliding
  startAutoSlide();

  // Pause auto-slide on hover
  const heroSection = document.querySelector(".hero-section");
  heroSection.addEventListener("mouseenter", pauseAutoSlide);
  heroSection.addEventListener("mouseleave", startAutoSlide);
}

// Change slide function
function changeSlide(direction) {
  slides[currentSlideIndex].classList.remove("active");
  indicators[currentSlideIndex].classList.remove("active");

  currentSlideIndex += direction;

  if (currentSlideIndex >= slides.length) {
    currentSlideIndex = 0;
  }
  if (currentSlideIndex < 0) {
    currentSlideIndex = slides.length - 1;
  }

  slides[currentSlideIndex].classList.add("active");
  indicators[currentSlideIndex].classList.add("active");

  // Reset auto-slide timer
  resetAutoSlide();
}

// Go to specific slide
function currentSlide(index) {
  slides[currentSlideIndex].classList.remove("active");
  indicators[currentSlideIndex].classList.remove("active");

  currentSlideIndex = index - 1;

  slides[currentSlideIndex].classList.add("active");
  indicators[currentSlideIndex].classList.add("active");

  // Reset auto-slide timer
  resetAutoSlide();
}

// Auto-slide functions
function startAutoSlide() {
  slideInterval = setInterval(() => {
    changeSlide(1);
  }, 5000); // Change slide every 5 seconds
}

function pauseAutoSlide() {
  clearInterval(slideInterval);
}

function resetAutoSlide() {
  pauseAutoSlide();
  startAutoSlide();
}

// Initialize hero slider when DOM is loaded
document.addEventListener("DOMContentLoaded", initHeroSlider);

// ===== SMOOTH SCROLLING FOR NAVIGATION LINKS =====
document.addEventListener("DOMContentLoaded", function () {
  // Smooth scrolling for anchor links
  const navLinks = document.querySelectorAll('a[href^="#"]');

  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetSection = document.querySelector(targetId);

      if (targetSection) {
        targetSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
});

// ===== SCROLL ANIMATIONS =====
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  };

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, observerOptions);

  // Observe all elements with scroll-animate class
  const animateElements = document.querySelectorAll(".scroll-animate");
  animateElements.forEach((el) => {
    observer.observe(el);
  });
}

// Initialize scroll animations when DOM is loaded
document.addEventListener("DOMContentLoaded", initScrollAnimations);

// ===== ACTIVE NAVIGATION HIGHLIGHTING =====
function updateActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let currentSection = "";
  const scrollPosition = window.scrollY + 100; // Offset for better detection

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (
      scrollPosition >= sectionTop &&
      scrollPosition < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
}

// Update active nav on scroll
window.addEventListener("scroll", updateActiveNav);

// ===== NAVBAR BACKGROUND ON SCROLL =====
function updateNavbarOnScroll() {
  const navbar = document.querySelector(".main-nav");
  const scrolled = window.scrollY;

  if (scrolled > 100) {
    navbar.style.background = "rgba(255, 255, 255, 0.95)";
    navbar.style.backdropFilter = "blur(10px)";
  } else {
    navbar.style.background = "var(--white)";
    navbar.style.backdropFilter = "none";
  }
}

window.addEventListener("scroll", updateNavbarOnScroll);

// ===== CONTACT FORM HANDLING =====
function initContactForm() {
  const contactForm = document.getElementById("contactForm");

  if (contactForm) {
    // Initialize EmailJS (add your Public Key)
    emailjs.init("KkebE2LnQ0U33dZLM");

    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form data
      const formData = new FormData(this);
      const formValues = {};

      for (let [key, value] of formData.entries()) {
        formValues[key] = value;
      }

      // Validate form
      if (validateForm(formValues)) {
        // Send using EmailJS
        console.log("from-->>",formValues)
        emailjs
          .send("service_tjpxolm", "template_fq38jjg", formValues)
          .then(() => {
            showMessage(
              "Message sent successfully! We’ll contact you soon.",
              "success"
            );
            contactForm.reset();
          })
          .catch((error) => {
            console.error("EmailJS Error:", error);
            showMessage(
              "Failed to send message. Please try again later.",
              "error"
            );
          });
      }
    });
  }
}


// Form validation function
function validateForm(data) {
  const requiredFields = ["name", "email", "message"];

  for (let field of requiredFields) {
    if (!data[field] || data[field].trim() === "") {
      showMessage(`Please fill in the ${field} field.`, "error");
      return false;
    }
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(data.email)) {
    showMessage("Please enter a valid email address.", "error");
    return false;
  }

  return true;
}

// Show message function
function showMessage(message, type) {
  // Remove existing messages
  const existingMessage = document.querySelector(".form-message");
  if (existingMessage) {
    existingMessage.remove();
  }

  // Create message element
  const messageElement = document.createElement("div");
  messageElement.className = `form-message alert alert-${
    type === "success" ? "success" : "danger"
  }`;
  messageElement.style.cssText = `
        padding: 1rem;
        margin-bottom: 1rem;
        border-radius: var(--border-radius-md);
        background-color: ${type === "success" ? "#d4edda" : "#f8d7da"};
        border: 1px solid ${type === "success" ? "#c3e6cb" : "#f5c6cb"};
        color: ${type === "success" ? "#155724" : "#721c24"};
    `;
  messageElement.textContent = message;

  // Insert message at the top of the form
  const contactForm = document.getElementById("contactForm");
  contactForm.insertBefore(messageElement, contactForm.firstChild);

  // Auto-remove message after 5 seconds
  setTimeout(() => {
    messageElement.remove();
  }, 5000);
}

// Initialize contact form when DOM is loaded
document.addEventListener("DOMContentLoaded", initContactForm);

// ===== GALLERY LIGHTBOX (Simple Implementation) =====
function initGallery() {
  const galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      const img = this.querySelector("img");
      if (img) {
        createLightbox(img.src, img.alt);
      }
    });
  });
}

// function intiCertificate() {
//   const certificateImage = document.querySelectorAll(".certificateViewBtn");
//   console.log("-->", certificateImage);
//   certificateImage.forEach((item) => {
//     item.addEventListener("click", function () {
//       const img = this.querySelector("img");
//       console.log("img->", img);
//       if (img) {
//         createLightbox(img.src, img.alt);
//       }
//     });
//   });
// }

// // Create lightbox modal
// function createLightbox(imageSrc, imageAlt) {
//   // Create lightbox elements
//   const lightbox = document.createElement("div");
//   lightbox.className = "lightbox-overlay";
//   lightbox.style.cssText = `
//         position: fixed;
//         top: 0;
//         left: 0;
//         width: 100%;
//         height: 100%;
//         background: rgba(0, 0, 0, 0.9);
//         display: flex;
//         align-items: center;
//         justify-content: center;
//         z-index: 9999;
//         cursor: pointer;
//     `;

//   const lightboxImg = document.createElement("img");
//   lightboxImg.src = imageSrc;
//   lightboxImg.alt = imageAlt;
//   lightboxImg.style.cssText = `
//         max-width: 90%;
//         max-height: 90%;
//         object-fit: contain;
//         border-radius: var(--border-radius-lg);
//         box-shadow: var(--shadow-xl);
//     `;

//   const closeButton = document.createElement("button");
//   closeButton.innerHTML = "&times;";
//   closeButton.style.cssText = `
//         position: absolute;
//         top: 20px;
//         right: 30px;
//         background: none;
//         border: none;
//         color: white;
//         font-size: 40px;
//         cursor: pointer;
//         z-index: 10000;
//     `;

//   // Add elements to lightbox
//   lightbox.appendChild(lightboxImg);
//   lightbox.appendChild(closeButton);
//   document.body.appendChild(lightbox);

//   // Close lightbox functionality
//   const closeLightbox = () => {
//     document.body.removeChild(lightbox);
//   };

//   lightbox.addEventListener("click", closeLightbox);
//   closeButton.addEventListener("click", closeLightbox);

//   // Prevent image click from closing lightbox
//   lightboxImg.addEventListener("click", (e) => {
//     e.stopPropagation();
//   });

//   // Close with Escape key
//   const handleKeyDown = (e) => {
//     if (e.key === "Escape") {
//       closeLightbox();
//       document.removeEventListener("keydown", handleKeyDown);
//     }
//   };
//   document.addEventListener("keydown", handleKeyDown);
// }

// // Initialize gallery when DOM is loaded
// // document.addEventListener("DOMContentLoaded", initGallery);
// document.addEventListener("DOMContentLoaded", intiCertificate);

// ===== COUNTER ANIMATION =====
function intiCertificate() {
  const certificateButtons = document.querySelectorAll(".certificateViewBtn");

  certificateButtons.forEach((button) => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const images = this.querySelectorAll("img");

      if (images.length > 0) {
        const imageSources = Array.from(images).map((img) => ({
          src: img.src,
          alt: img.alt,
        }));
        createMultiImageLightbox(imageSources);
      }
    });
  });
}

// Create multi-image lightbox modal
function createMultiImageLightbox(imagesData) {
  let currentIndex = 0;

  // Create lightbox container
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox-overlay";
  lightbox.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.95);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  `;

  // Create image container
  const imageContainer = document.createElement("div");
  imageContainer.style.cssText = `
    position: relative;
    max-width: 90%;
    max-height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
  `;

  // Create image element with zoom capability
  const lightboxImg = document.createElement("img");
  let currentZoom = 1;
  const minZoom = 1;
  const maxZoom = 3;
  const zoomStep = 0.5;

  lightboxImg.style.cssText = `
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s ease;
    cursor: grab;
  `;

  // Pan functionality when zoomed
  let isPanning = false;
  let startX,
    startY,
    translateX = 0,
    translateY = 0;

  lightboxImg.addEventListener("mousedown", (e) => {
    if (currentZoom > 1) {
      isPanning = true;
      startX = e.clientX - translateX;
      startY = e.clientY - translateY;
      lightboxImg.style.cursor = "grabbing";
    }
  });

  document.addEventListener("mousemove", (e) => {
    if (isPanning) {
      translateX = e.clientX - startX;
      translateY = e.clientY - startY;
      lightboxImg.style.transform = `scale(${currentZoom}) translate(${
        translateX / currentZoom
      }px, ${translateY / currentZoom}px)`;
    }
  });

  document.addEventListener("mouseup", () => {
    if (isPanning) {
      isPanning = false;
      lightboxImg.style.cursor = "grab";
    }
  });

  // Create close button
  const closeButton = document.createElement("button");
  closeButton.innerHTML = "&times;";
  closeButton.style.cssText = `
    position: absolute;
    top: 20px;
    right: 30px;
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    font-size: 40px;
    cursor: pointer;
    z-index: 10001;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s;
  `;
  closeButton.onmouseover = () =>
    (closeButton.style.background = "rgba(255, 255, 255, 0.3)");
  closeButton.onmouseout = () =>
    (closeButton.style.background = "rgba(255, 255, 255, 0.2)");

  // Create zoom controls
  const zoomControls = document.createElement("div");
  zoomControls.style.cssText = `
    position: absolute;
    bottom: 30px;
    right: 30px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 10001;
  `;

  const zoomInButton = document.createElement("button");
  zoomInButton.innerHTML = "+";
  zoomInButton.title = "Zoom In";
  zoomInButton.style.cssText = `
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    font-size: 32px;
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s;
    font-weight: bold;
  `;

  const zoomOutButton = document.createElement("button");
  zoomOutButton.innerHTML = "−";
  zoomOutButton.title = "Zoom Out";
  zoomOutButton.style.cssText = zoomInButton.style.cssText;

  const resetZoomButton = document.createElement("button");
  resetZoomButton.innerHTML = "⟲";
  resetZoomButton.title = "Reset Zoom";
  resetZoomButton.style.cssText = `
    background: rgba(255, 255, 255, 0.2);
    border: none;
    color: white;
    font-size: 24px;
    cursor: pointer;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.3s;
  `;

  // Hover effects for zoom buttons
  [zoomInButton, zoomOutButton, resetZoomButton].forEach((btn) => {
    btn.onmouseover = () => (btn.style.background = "rgba(255, 255, 255, 0.3)");
    btn.onmouseout = () => (btn.style.background = "rgba(255, 255, 255, 0.2)");
  });

  // Zoom functions
  const updateZoom = () => {
    lightboxImg.style.transform = `scale(${currentZoom}) translate(${
      translateX / currentZoom
    }px, ${translateY / currentZoom}px)`;
    lightboxImg.style.cursor = currentZoom > 1 ? "grab" : "default";

    // Update button states
    zoomInButton.disabled = currentZoom >= maxZoom;
    zoomOutButton.disabled = currentZoom <= minZoom;

    if (zoomInButton.disabled) {
      zoomInButton.style.opacity = "0.5";
      zoomInButton.style.cursor = "not-allowed";
    } else {
      zoomInButton.style.opacity = "1";
      zoomInButton.style.cursor = "pointer";
    }

    if (zoomOutButton.disabled) {
      zoomOutButton.style.opacity = "0.5";
      zoomOutButton.style.cursor = "not-allowed";
    } else {
      zoomOutButton.style.opacity = "1";
      zoomOutButton.style.cursor = "pointer";
    }
  };

  const resetZoom = () => {
    currentZoom = 1;
    translateX = 0;
    translateY = 0;
    updateZoom();
  };

  zoomInButton.onclick = (e) => {
    e.stopPropagation();
    if (currentZoom < maxZoom) {
      currentZoom = Math.min(currentZoom + zoomStep, maxZoom);
      updateZoom();
    }
  };

  zoomOutButton.onclick = (e) => {
    e.stopPropagation();
    if (currentZoom > minZoom) {
      currentZoom = Math.max(currentZoom - zoomStep, minZoom);
      if (currentZoom === minZoom) {
        translateX = 0;
        translateY = 0;
      }
      updateZoom();
    }
  };

  resetZoomButton.onclick = (e) => {
    e.stopPropagation();
    resetZoom();
  };

  // Mouse wheel zoom
  imageContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    if (e.deltaY < 0) {
      // Scroll up - zoom in
      if (currentZoom < maxZoom) {
        currentZoom = Math.min(currentZoom + 0.2, maxZoom);
        updateZoom();
      }
    } else {
      // Scroll down - zoom out
      if (currentZoom > minZoom) {
        currentZoom = Math.max(currentZoom - 0.2, minZoom);
        if (currentZoom === minZoom) {
          translateX = 0;
          translateY = 0;
        }
        updateZoom();
      }
    }
  });

  zoomControls.appendChild(zoomInButton);
  zoomControls.appendChild(zoomOutButton);
  zoomControls.appendChild(resetZoomButton);

  // Create page counter (only if multiple images)
  const pageCounter = document.createElement("div");
  if (imagesData.length > 1) {
    pageCounter.style.cssText = `
      position: absolute;
      top: 30px;
      left: 50%;
      transform: translateX(-50%);
      background: rgba(0, 0, 0, 0.7);
      color: white;
      padding: 8px 16px;
      border-radius: 20px;
      font-size: 14px;
      z-index: 10001;
    `;
  }

  // Function to update image
  const updateImage = () => {
    lightboxImg.src = imagesData[currentIndex].src;
    lightboxImg.alt = imagesData[currentIndex].alt;
    if (imagesData.length > 1) {
      pageCounter.textContent = `${currentIndex + 1} / ${imagesData.length}`;
    }
  };

  // Navigation buttons (only if multiple images)
  let prevButton, nextButton;

  if (imagesData.length > 1) {
    prevButton = document.createElement("button");
    prevButton.innerHTML = "&#8249;";
    prevButton.style.cssText = `
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      background: rgba(255, 255, 255, 0.2);
      border: none;
      color: black;
      font-size: 48px;
      cursor: pointer;
      z-index: 10001;
      width: 50px;
      height: 50px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: background 0.3s;
    `;
    prevButton.onmouseover = () =>
      (prevButton.style.background = "rgba(255, 255, 255, 0.3)");
    prevButton.onmouseout = () =>
      (prevButton.style.background = "rgba(255, 255, 255, 0.2)");

    nextButton = document.createElement("button");
    nextButton.innerHTML = "&#8250;";
    nextButton.style.cssText = prevButton.style.cssText.replace(
      "left: 20px",
      "right: 20px"
    );
    nextButton.onmouseover = () =>
      (nextButton.style.background = "rgba(255, 255, 255, 0.3)");
    nextButton.onmouseout = () =>
      (nextButton.style.background = "rgba(255, 255, 255, 0.2)");

    // Navigation handlers
    prevButton.onclick = (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex - 1 + imagesData.length) % imagesData.length;
      updateImage();
    };

    nextButton.onclick = (e) => {
      e.stopPropagation();
      currentIndex = (currentIndex + 1) % imagesData.length;
      updateImage();
    };
  }

  // Assemble lightbox
  imageContainer.appendChild(lightboxImg);
  lightbox.appendChild(imageContainer);
  lightbox.appendChild(closeButton);

  if (imagesData.length > 1) {
    lightbox.appendChild(pageCounter);
    lightbox.appendChild(prevButton);
    lightbox.appendChild(nextButton);
  }

  document.body.appendChild(lightbox);

  // Initialize first image
  updateImage();

  // Close lightbox functionality
  const closeLightbox = () => {
    document.body.removeChild(lightbox);
  };

  closeButton.addEventListener("click", (e) => {
    e.stopPropagation();
    closeLightbox();
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Prevent image click from closing lightbox
  imageContainer.addEventListener("click", (e) => {
    e.stopPropagation();
  });

  // Keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "Escape") {
      closeLightbox();
      document.removeEventListener("keydown", handleKeyDown);
    } else if (imagesData.length > 1) {
      if (e.key === "ArrowLeft") {
        currentIndex =
          (currentIndex - 1 + imagesData.length) % imagesData.length;
        updateImage();
      } else if (e.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % imagesData.length;
        updateImage();
      }
    }
  };
  document.addEventListener("keydown", handleKeyDown);
}

// Initialize when DOM is loaded
document.addEventListener("DOMContentLoaded", intiCertificate);


function initCounters() {
  const counters = document.querySelectorAll("[data-count]");

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const counter = entry.target;
          const target = parseInt(counter.dataset.count);
          const duration = 2000; // 2 seconds
          const step = target / (duration / 16); // 60 FPS

          let current = 0;
          const timer = setInterval(() => {
            current += step;
            counter.textContent = Math.round(current);

            if (current >= target) {
              counter.textContent = target;
              clearInterval(timer);
            }
          }, 16);

          counterObserver.unobserve(counter);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => {
    counterObserver.observe(counter);
  });
}

// Initialize counters when DOM is loaded
document.addEventListener("DOMContentLoaded", initCounters);

// ===== MOBILE MENU HANDLING =====
function initMobileMenu() {
  const navbarToggler = document.querySelector(".navbar-toggler");
  const navbarNav = document.querySelector("#navbarNav");
  const navLinks = document.querySelectorAll(".nav-link");

  // Close mobile menu when clicking on nav links
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      if (navbarNav.classList.contains("show")) {
        navbarToggler.click(); // Trigger Bootstrap's collapse
      }
    });
  });
}

// Initialize mobile menu when DOM is loaded
document.addEventListener("DOMContentLoaded", initMobileMenu);

// ===== PERFORMANCE OPTIMIZATIONS =====
// Throttle scroll events
function throttle(func, limit) {
  let lastFunc;
  let lastRan;
  return function () {
    const context = this;
    const args = arguments;
    if (!lastRan) {
      func.apply(context, args);
      lastRan = Date.now();
    } else {
      clearTimeout(lastFunc);
      lastFunc = setTimeout(function () {
        if (Date.now() - lastRan >= limit) {
          func.apply(context, args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

// Apply throttling to scroll events
window.addEventListener(
  "scroll",
  throttle(function () {
    updateActiveNav();
    updateNavbarOnScroll();
  }, 100)
);

// ===== LAZY LOADING FOR IMAGES =====
function initLazyLoading() {
  const images = document.querySelectorAll("img[data-src]");

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.classList.remove("lazy");
        imageObserver.unobserve(img);
      }
    });
  });

  images.forEach((img) => imageObserver.observe(img));
}

// Initialize lazy loading when DOM is loaded
document.addEventListener("DOMContentLoaded", initLazyLoading);

// ===== LOADING SCREEN =====
function initLoadingScreen() {
  const loadingScreen = document.querySelector(".loading-screen");

  window.addEventListener("load", () => {
    if (loadingScreen) {
      loadingScreen.classList.add("fade-out");
      setTimeout(() => {
        loadingScreen.remove();
      }, 500);
    }
  });
}

// Initialize loading screen
document.addEventListener("DOMContentLoaded", initLoadingScreen);

// ===== CUSTOM CURSOR (Optional Enhancement) =====
function initCustomCursor() {
  const cursor = document.createElement("div");
  cursor.className = "custom-cursor";
  cursor.style.cssText = `
        width: 20px;
        height: 20px;
        border: 2px solid var(--secondary-color);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 10000;
        transition: all 0.1s ease;
        display: none;
    `;

  document.body.appendChild(cursor);

  // Only show custom cursor on desktop
  if (window.innerWidth > 768) {
    document.addEventListener("mousemove", (e) => {
      cursor.style.display = "block";
      cursor.style.left = e.clientX - 10 + "px";
      cursor.style.top = e.clientY - 10 + "px";
    });

    // Hide cursor when leaving window
    document.addEventListener("mouseleave", () => {
      cursor.style.display = "none";
    });

    // Enlarge cursor on hover over clickable elements
    const clickableElements = document.querySelectorAll(
      "a, button, .service-card, .gallery-item",
      ".certificateImage"
    );

    clickableElements.forEach((el) => {
      el.addEventListener("mouseenter", () => {
        cursor.style.transform = "scale(1.5)";
        cursor.style.backgroundColor = "rgba(212, 168, 83, 0.2)";
      });

      el.addEventListener("mouseleave", () => {
        cursor.style.transform = "scale(1)";
        cursor.style.backgroundColor = "transparent";
      });
    });
  }
}

// Initialize custom cursor when DOM is loaded (optional)
// document.addEventListener('DOMContentLoaded', initCustomCursor);

// ===== CONSOLE MESSAGE =====
console.log(
  "%c🏭 Developed by Vikas Gaur",
  "color: #d4a853; font-size: 24px; font-weight: bold;"
);
console.log(
  "%cWebsite loaded successfully! 🚀",
  "color: #2c5f7a; font-size: 16px;"
);
console.log(
  "%cBuilt with ❤️ for excellence in steel manufacturing",
  "color: #666; font-size: 12px;"
);

var slider = document.getElementById("slider"),
  sliderItems = document.getElementById("slides"),
  prev = document.getElementById("prev"),
  next = document.getElementById("next");

function slide(wrapper, items, prev, next) {
  let posX1 = 0,
    posX2 = 0,
    posInitial,
    posFinal,
    slides = items.getElementsByClassName("slide"),
    slidesLength = slides.length,
    // slideSize = window.innerWidth,
    slideSize = items.parentElement.offsetWidth,
    firstSlide = slides[0],
    lastSlide = slides[slidesLength - 1],
    cloneFirst = firstSlide.cloneNode(true),
    cloneLast = lastSlide.cloneNode(true),
    index = 0,
    allowShift = true,
    autoSlideInterval,
    threshold = 100;
    // threshold = slideSize / 4; // dynamic threshold

     Array.from(slides).forEach((slide) => {
       slide.style.minWidth = "100%";
       slide.style.maxWidth = "100%";
       slide.style.flexShrink = "0";
     });

  // Clone first and last slide
  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);

  // Set initial position
   items.style.left = -items.parentElement.offsetWidth + "px";
  wrapper.classList.add("loaded");

  // Mouse events
  items.onmousedown = dragStart;

  // Touch events
  items.addEventListener("touchstart", dragStart);
  items.addEventListener("touchend", dragEnd);
  items.addEventListener("touchmove", dragAction);

  // Click events
  prev.addEventListener("click", () => {
    shiftSlide(-1);
    resetAutoSlide();
  });
  next.addEventListener("click", () => {
    shiftSlide(1);
    resetAutoSlide();
  });

  // Transition events
  items.addEventListener("transitionend", checkIndex);

  // Auto slide every 3s
  startAutoSlide();

  // Recalculate on resize
 window.addEventListener("resize", () => {
   slideSize = items.parentElement.offsetWidth; // CHANGE 
   threshold = 100; // Keep fixed
   items.style.transition = "none"; // ADD
   items.style.left = -((index + 1) * slideSize) + "px";
   setTimeout(() => {
     items.style.transition = ""; // ADD
   }, 50);
 });

  function dragStart(e) {
    e = e || window.event;
    // e.preventDefault();
    posInitial = items.offsetLeft;

    if (e.type === "touchstart") {
      posX1 = e.touches[0].clientX;
    } else {
      posX1 = e.clientX;
      document.onmouseup = dragEnd;
      document.onmousemove = dragAction;
    }
    stopAutoSlide();
  }

  function dragAction(e) {
    e = e || window.event;
    if (e.type === "touchmove") {
      posX2 = posX1 - e.touches[0].clientX;
      posX1 = e.touches[0].clientX;
    } else {
      posX2 = posX1 - e.clientX;
      posX1 = e.clientX;
    }
    items.style.left = items.offsetLeft - posX2 + "px";
  }

  function dragEnd() {
    posFinal = items.offsetLeft;
    if (posFinal - posInitial < -threshold) {
      shiftSlide(1, "drag");
    } else if (posFinal - posInitial > threshold) {
      shiftSlide(-1, "drag");
    } else {
      items.style.left = posInitial + "px";
    }
    document.onmouseup = null;
    document.onmousemove = null;
    startAutoSlide();
  }

  function shiftSlide(dir, action) {
    if (!allowShift) return; // prevent double shift
    items.classList.add("shifting");

    if (!action) posInitial = items.offsetLeft;
    if (dir === 1) {
      items.style.left = posInitial - slideSize + "px";
      index++;
    } else if (dir === -1) {
      items.style.left = posInitial + slideSize + "px";
      index--;
    }
    allowShift = false;
  }

  function checkIndex() {
    items.classList.remove("shifting");
    if (index === -1) {
      items.style.left = -(slidesLength * slideSize) + "px";
      index = slidesLength - 1;
    }
    if (index === slidesLength) {
      items.style.left = -(1 * slideSize) + "px";
      index = 0;
    }
    allowShift = true;
  }

  function startAutoSlide() {
    autoSlideInterval = setInterval(() => shiftSlide(1), 3000);
  }
  function stopAutoSlide() {
    clearInterval(autoSlideInterval);
  }
  function resetAutoSlide() {
    stopAutoSlide();
    startAutoSlide();
  }
}

slide(slider, sliderItems, prev, next);

const track = document.querySelector(".carousel-track");
const indSlides = Array.from(track.children);
const slideCount = indSlides.length;

let slideWidth = indSlides[0].offsetWidth + 16; // Slide width + margin

// Clone first and last slides for seamless looping
const firstClone = indSlides[0].cloneNode(true);
const lastClone = indSlides[slideCount - 1].cloneNode(true);

track.appendChild(firstClone);
track.insertBefore(lastClone, indSlides[0]);

const allSlides = Array.from(track.children);
const totalSlides = allSlides.length;

let currentPos = 1; // Start at first original slide

// Center track based on current position
function setPosition(pos) {
  const offset =
    -slideWidth * pos +
    (track.parentElement.offsetWidth - indSlides[0].offsetWidth) / 2;
  track.style.transform = `translateX(${offset}px)`;
}

// Update active slide styling
function updateActive() {
  allSlides.forEach((slide) => slide.classList.remove("active"));
  allSlides[currentPos].classList.add("active");
}

// Initialize position and active slide
setPosition(currentPos);
updateActive();

// Move to slide with transition
function moveToSlide(pos) {
  currentPos = pos;
  track.style.transition = "transform 0.6s cubic-bezier(.42,0,.58,1)";
  setPosition(currentPos);
  updateActive();
}

// Slide to next image
function nextSlide() {
  if (currentPos >= totalSlides - 1) return;
  moveToSlide(currentPos + 1);
}

// Handle transition end for seamless loop without jump
track.addEventListener("transitionend", () => {
  if (currentPos === totalSlides - 1) {
    track.style.transition = "none";
    currentPos = 1;
    setPosition(currentPos);
    track.offsetHeight; // force reflow
    setTimeout(() => {
      track.style.transition = "transform 0.6s cubic-bezier(.42,0,.58,1)";
      updateActive();
    }, 0);
  } else if (currentPos === 0) {
    track.style.transition = "none";
    currentPos = totalSlides - 2;
    setPosition(currentPos);
    track.offsetHeight;
    setTimeout(() => {
      track.style.transition = "transform 0.6s cubic-bezier(.42,0,.58,1)";
      updateActive();
    }, 0);
  }
});

// Update slide width and position on resize
// window.addEventListener("resize", () => {
//   slideWidth = window.innerWidth; /* CHANGE this line */
//   threshold = slideWidth / 4;
//   items.style.left = -((index + 1) * slideWidth) + "px";
// });

window.addEventListener("resize", () => {
  // Get the new slide width including margin
  const slide = indSlides[0];
  const style = window.getComputedStyle(slide);
  const margin = parseInt(style.marginLeft) + parseInt(style.marginRight);
  slideWidth = slide.offsetWidth + margin;
  setPosition(currentPos); // Re-center after resize
});


// Auto slide every 1800ms (adjust as needed)
setInterval(() => {
  nextSlide();
}, 1800);



//------------------------------Product data array----------------------
// const products = [
//   {
//     id: "product1",
//     name: "SLIP ON FLANGES",
//     img: "./images/flangs/SLIP ON FLANGES/Alloy-Steel-Slip-On-Flanges.webp",
//     alt: "Stainless Steel Tubes",
//   },
//   {
//     id: "product2",
//     name: "WELD NECK FLANGES",
//     img: "./images/flangs/WELD NECK FLANGES/Alloy Steel WNRF Flanges.webp",
//     alt: "Carbon Steel Pipes",
//   },
//   {
//     id: "product3",
//     name: "LONG_WELD",
//     img: "./images/flangs/LONG_WELD/Alloy Steel Long Weld Neck Flanges.jpg",
//     alt: "Alloy Steel Products",
//   },
//   {
//     id: "product4",
//     name: "AWWA_FLANGES",
//     img: "./images/flangs/AWWA_FLANGES/Awwa Flanges.jpg",
//     alt: "Cold Drawn Precision Tubes",
//   },
//   {
//     id: "product5",
//     name: "Body Flanges",
//     img: "./images/flangs/Body Flanges/Body Flanges.jpg",
//     alt: "Industrial Steel Pipes",
//   },
//   {
//     id: "product6",
//     name: "BLIND FLANGES",
//     img: "./images/flangs/BLIND FLANGES/BLIND FLANGES.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product7",
//     name: "THREADED FLANGES",
//     img: "./images/flangs/THREADED FLANGES/Stainless Threaded Flanges.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product8",
//     name: "DIN FLANGES",
//     img: "./images/flangs/DIN FLANGES/DIN PN6 PN40 Flanges.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product9",
//     name: "PADDLE BLANK FLANGES",
//     img: "./images/flangs/PADDLE BLANK FLANGES/Hydrotest Flanges.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product10",
//     name: "PADDLE SPACER FLANGES",
//     img: "./images/flangs/PADDLE SPACER FLANGES/Paddle Spacer Flanges.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product11",
//     name: "SPECTACLE BLIND FLANGES",
//     img: "./images/flangs/SPECTACLE BLIND FLANGES/Spectacle Blind Flanges_.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product12",
//     name: "RING TYPE JOINT FLANGES",
//     img: "./images/flangs/RING TYPE JOINT FLANGES/ring-type-joint-flanges.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product13",
//     name: "Nipo Flange",
//     img: "./images/flangs/Nipo Flange/Steel Nipoflange.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   // Buttweld Fittings
//   {
//     id: "product14",
//     name: "Pipe Tees",
//     img: "./images/Buttweld Fittings/Tee/SS Cross Tee.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product15",
//     name: "Pipe Reducers",
//     img: "./images/Buttweld Fittings/CONCENTRIC REDUCER/Duplex Steel Concentric Reducer.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product16",
//     name: "Stainless Steel Tube",
//     img: "./images/Buttweld Fittings/ECCENTRIC REDUCER/Duplex Steel Concentric Reducer.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product17",
//     name: "ASME / ANSI B16.9 Barred Tee",
//     img: "./images/Buttweld Fittings/Barred Tees/Buttweld Barred Tee.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product18",
//     name: "ANSI B16.28 5D/6D Pipe Bend",
//     img: "./images/Buttweld Fittings/BEND/SS 6D Bend.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product19",
//     name: "ASTM A403 Stainless Steel Reducing Tee",
//     img: "./images/Buttweld Fittings/Butt Weld Reducing Tee/Reducing Tee.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product20",
//     name: "ANSI B16.28 Stainless Steel Elbow",
//     img: "./images/Buttweld Fittings/ELBOW/Carbon Steel 45° Elbow.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product21",
//     name: "ANSI B16.28 Reducing Elbow",
//     img: "./images/Buttweld Fittings/Reducing Elbow/Carbon Steel 45° Reducing Elbow.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product22",
//     name: "ANSI B16.28 Stainless Steel Cross Tee",
//     img: "./images/Buttweld Fittings/CROSS TEE/SS Cross Tee.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product23",
//     name: "ANSI B16.28 Swage Nipple",
//     img: "./images/Buttweld Fittings/Swage Nipple/SS Swage Nipple.webp",
//     alt: "Custom Steel Solutions",
//   },
//   //COMPRESSION TUBE FITTINGS
//   {
//     id: "product24",
//     name: "Stainless Steel Insulation Gasket Kits",
//     img: "./images/COMPRESSION TUBE FITTINGS/MALE CONNECTOR/Male Connector.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product25",
//     name: "Parker 8-6 HBZ-SS Reducing Union",
//     img: "./images/COMPRESSION TUBE FITTINGS/TUBE TO UNION/Tube To Union.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product26",
//     name: "Forged Stainless Steel Tube Union Elbow",
//     img: "./images/COMPRESSION TUBE FITTINGS/UNION ELBOW/SS Union Elbow.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product27",
//     name: "Corten Steel Panels",
//     img: "./images/COMPRESSION TUBE FITTINGS/VALVES/CS Check Valves.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   //Forged Fittings
//   {
//     id: "product28",
//     name: "Forged Cross Pipe Fittings",
//     img: "./images/Forged Fittings/FORGED TEE/Socketweld Forged Tee.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product29",
//     name: "ANSI B16.9 Forged Concentric Reducer",
//     img: "./images/Forged Fittings/FORGED REDUCER/Forged Concentric Reducer.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product30",
//     name: "Forged Cross Pipe Fittings",
//     img: "./images/Forged Fittings/FORGED CROSS/Forged Threaded Cross.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product31",
//     name: "ANSI B16.9 Forged Welding Outlets",
//     img: "./images/Forged Fittings/WELDING OUTLET/SS Welding Outlets.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product32",
//     name: "ASTM A182 Nipple Outlets",
//     img: "./images/Forged Fittings/NIPPLE OUTLET/SS Nipple Outlet.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product33",
//     name: "ASTM A182 Nipple Outlets",
//     img: "./images/Forged Fittings/Sweep Outlet/SS Sweep Outlet.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product34",
//     name: "ASTM A182 Flange Outlets",
//     img: "./images/Forged Fittings/Flange Outlets/SS Flange Outlets.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product35",
//     name: "Stainless Steel Threaded Outlets",
//     img: "./images/Forged Fittings/Threaded Outlet/Threaded Outlet.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product36",
//     name: "Elbow Outlet Pipe Fittings",
//     img: "./images/Forged Fittings/Elbow Outlet/Elbow Outlets.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product37",
//     name: "ASTM A234 WP11 Pipe Reducing Tee",
//     img: "./images/Forged Fittings/Forged Fittings - Reducing Tee/Carbon Steel Reducing Tee.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product38",
//     name: "ASTM A325 Hex Bolts",
//     img: "./images/Fasteners/Hex Bolts/Hex Bolt.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product39",
//     name: "ASTM A325 Heavy Hex Nuts",
//     img: "./images/Fasteners/HEAVY HEX NUTS/Steel Heavy Hex Nuts.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product40",
//     name: "ASTM A193 B7 Stud Bolts",
//     img: "./images/Fasteners/STUD BOLTS/Stainless Steel Studs.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product41",
//     name: "ASTM A325 Washers",
//     img: "./images/Fasteners/WASHERS/SS Flat Washer.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product42",
//     name: "Stainless Steel Anchor & Foundation Bolts",
//     img: "./images/Fasteners/Anchor Bolts/Sleeve Anchor Bolts.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product43",
//     name: "ASTM A325 Eye Bolts",
//     img: "./images/Fasteners/Eye Bolts/Shoulder Eye Bolt.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product44",
//     name: "ASTM A325 Fasteners",
//     img: "./images/Fasteners/HILTI FASTENERS/Anchor.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product45",
//     name: "ASTM A325 U Bolts",
//     img: "./images/Fasteners/U BOLTS/Stainless Steel U Bolt.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product46",
//     name: "V Shaped Refractory Anchors",
//     img: "./images/REFRACTORY ANCHORS/V ANCHORS/Refractory V Anchors.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product47",
//     name: "Stainless Steel Y Type Refractory Anchors",
//     img:
//       "./images/REFRACTORY ANCHORS/Y TYPE ANCHORS/Refractory Y Type Anchors.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product48",
//     name: "U Type Refractory Anchors",
//     img: "./images/REFRACTORY ANCHORS/U ANCHORS/SS U ANCHORS.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product49",
//     name: "Customized Stainless Steel Refractory Anchors",
//     img:
//       "./images/REFRACTORY ANCHORS/CUSTOMIZE REFRACTORY ANCHORS/Refractory Anchors UV Type.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product50",
//     name: "Carbon Steel Forged Rings ASTM A105",
//     img:
//       "./images/FORGING PRODUCTS/FORGED RINGS/Carbon Steel Forged Ring.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product51",
//     name: "ASTM A105 Carbon Steel Rotor Shafts",
//     img: "./images/FORGING PRODUCTS/ROTER SHAFT/ROTER SHAFT.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product52",
//     name: "Stainless Steel and Carbon Steel Propeller Shafts & Forged Round Bars",
//     img: "./images/FORGING PRODUCTS/ROUND BARS/CS Forged Round Bar.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product53",
//     name: "Customized Stainless Steel and Carbon Steel Forgings",
//     img:
//       "./images/FORGING PRODUCTS/CUSTOMIZE FORGING/Customize Hot Forging.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product54",
//     name: "Stainless Steel Insulation Gasket Kits",
//     img:
//       "./images/GASKETS/INSULATION GASKET KITS/Monel Insulation Gasket.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product55",
//     name: "Spiral Wound Gaskets",
//     img: "./images/GASKETS/SPIRAL WOUND GASKETS/Spiral Wound Gaskets_.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product56",
//     name: "Alloy 20 and Stainless Steel Ring Type Joint Gaskets",
//     img: "./images/GASKETS/RING JOINT TYPE GASKETS/RING JOINT TYPE GASKETS.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product57",
//     name: "SS 316 and High Nickel Octagonal Ring Type Joint Gaskets",
//     img: "./images/GASKETS/OCTOGONAL GASKETS/OCTOGONAL GASKETS.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product58",
//     name: "Stainless Steel Graphite Filler Gaskets",
//     img:"./images/GASKETS/GRAPHITE FILLER GASKETS/Monel Graphite Filler Gaskets.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product59",
//     name: "Stainless Steel Designer Sheets",
//     img: "./images/DESIGNER SHEETS/Rose Gold Mirror Sheet.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product60",
//     name: "Corten Steel Panels",
//     img: "./images/OTHER/Corten Steel Panels/CORTEN PANEL.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product61",
//     name: "Stainless Steel T, U & C Profiles",
//     img:"./images/OTHER/Stainless Steel 304 T, C & U Profile/stainless steel t patti.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product62",
//     name: "Stainless Steel PVD Coated Color Profiles",
//     img:"./images/OTHER/Colour PVD Profile/Stainless Steel 316 Decorative Color C Profile.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product63",
//     name: "Stainless Steel Omega Profiles",
//     img: "./images/OTHER/Omega Profiles/Profile Omega.jpg",
//     alt: "Custom Steel Solutions",
//   },
//   {
//     id: "product64",
//     name: "Corten Steel Planters",
//     img: "./images/OTHER/CORTEN PLANTERS/Corten Steel Square Planters.jpg",
//     alt: "Custom Steel Solutions",
//   },
// ];

const products = [
  {
    id: 1,
    name: "Stainless Steel Flanges",
    image: "./images/TypesOf/flanges.jpg",
    alt: "Stainless Steel Tubes",
    category: "flanges",
    description:
      "High-quality slip-on flanges for various industrial applications",
  },
  {
    id: 59,
    name: "Stainless Steel Sheets, Plates & Coils",
    image: "./images/TypesOf/sheets-plates-coil1.jpg",
    alt: "Custom Steel Solutions",
    category: "sheets%2C+plates+%26+coils",
    description: "Sheets, Plates & Coils",
  },
  {
    id: 14,
    name: "Stainless Steel Buttweld Fittings",
    image: "./images/TypesOf/buttweld-fittings.jpg",
    alt: "Custom Steel Solutions",
    category: "Buttweld Fittings",
    description: "Durable pipe tees for smooth branch connections",
  },
  {
    id: 39,
    name: "Stainless Steel Connectors",
    image: "./images/TypesOf/Connectors.jpg",
    alt: "Connectors",
    category: "Connectors",
    description: "Connectors",
  },
  {
    id: 28,
    name: "Stainless Steel Forged Fittings",
    image: "./images/TypesOf/forged-fittings.jpg",
    alt: "Custom Steel Solutions",
    category: "Forged Fittings",
    description: "Forged cross fittings meeting ASME and MSS standards",
  },
  {
    id: 38,
    name: "Stainless Steel Fasteners",
    image: "./images/TypesOf/fasteners.jpg",
    alt: "Custom Steel Solutions",
    category: "Fasteners",
    description: "High-strength hex bolts for industrial fastening needs",
  },
];

// Dynamically render gallery
const gallery = document.getElementById('productGallery');
products.forEach(product => {
  const col = document.createElement('div');
  col.className = 'col-lg-4 col-md-6';
  col.innerHTML = `
    <div class="gallery-item scroll-animate">
      <a href="productsFilter.html?filter=${product.category}" target="_self">
        <img src="${product.image}" alt="${product.alt}" />
        <div class="gallery-overlay text-white">${product.name}</div>
      </a>
    </div>
  `;
  gallery.appendChild(col);
});

// Optional: animation if using scroll-animate, add JS for that.


document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 200; // smaller = faster

  const runCounter = (counter) => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;
    const increment = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(() => runCounter(counter), 20);
    } else {
      counter.innerText = target;
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          counters.forEach((counter) => runCounter(counter));
          observer.disconnect(); // run only once
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(document.querySelector(".counter-section"));
});

// Close WhatsApp button when user clicks X
// document.getElementById('whatsappClose').addEventListener('click', function() {
//   console.log("000--->>")
//   document.getElementById('whatsappWrapper').style.display = 'none';
// });
