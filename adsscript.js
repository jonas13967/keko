const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");

menuOpenButton.addEventListener("click", () => {
    // Toggle mobile menu visibility
    document.body.classList.toggle("show-mobile-menu");
});


// close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click
());

 
// Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabcursor: true, 
    spacebetween: 25,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullet: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
     
    // responsive breakpoints
    breakpiont: {
        0: {
         slidesperview: 1    
        },
        768: {
            slidespreview: 2
        },
        1024: {
            slidespreview: 3
        }

      
    }
  });