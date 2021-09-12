//Global Variables needed for Navbar
let burger = document.querySelector(".navbar-toggle");
let mobileMenu = document.querySelector(".mobile-nav-links");
let sections = document.querySelectorAll("section");
let navbarLinks = document.querySelectorAll("ul.links");
let navbarBackground = document.querySelector(".background-navbar-blur");

//functions for opening and closing the Navbar menu
//function to open menu by clicking burger
const toggleMenu = () => {
    burger.addEventListener('click', function() {
        mobileMenu.classList.toggle("mobile-nav-active");
    });
};
toggleMenu();

const toggleMenuBackground = () => {
    navbarBackground.addEventListener('click', function() {
        mobileMenu.classList.remove("mobile-nav-active");
    });
};
toggleMenuBackground();


//function to close the menu when clicking elsewhere
sections.forEach((section) => {
    section.addEventListener('click', function() {
        mobileMenu.classList.remove("mobile-nav-active");
    });
});

//function to close menu after clicking a button
navbarLinks.forEach((link) => {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove("mobile-nav-active");
    });
});



//==================================
//Burger menu transformation effects
//==================================
const burgerTransform = () => {

    //variables
    let topBar = document.querySelector("span.bar#top");
    let midBar = document.querySelector("span.bar#mid");
    let botBar = document.querySelector("span.bar#bot");

    //array of variables for easier access
    const bars = [topBar, midBar, botBar];
    
    // function to transform the burger to X when clicking the burger
    bars.forEach((bar) => {
        burger.addEventListener("click", () => {
            bar.classList.toggle("close");
        });
    });

    //function to transform the burger when clicking elsewhere
    bars.forEach((bar) => {
        navbarBackground.addEventListener('click', () => {
            bar.classList.remove("close");
        });
    });

    //function to transform the burger when clicking elsewhere
    sections.forEach((section) => {
        section.addEventListener("click", () => {
            bars.forEach((bar) => {
                bar.classList.remove("close");
            });
        });
    });

    //function to transform burger when clicking a button
    navbarLinks.forEach((link) => {
        link.addEventListener("click", function() {
            bars.forEach((bar) => {
                bar.classList.remove("close");
            });
        });
    });
}
burgerTransform();

//function to blur the background when navbar is activated
const blurBackgroundMobile = () => {
    burger.addEventListener("click", () => {
        navbarBackground.classList.toggle("active");
    });
    
    navbarBackground.addEventListener("click", () => {
        navbarBackground.classList.remove("active");
    });
    
    navbarLinks.forEach((link) => {
        link.addEventListener("click", () => {
            navbarBackground.classList.remove("active");
        });
    });
};
blurBackgroundMobile();

//===========================================
// End of Burger menu transformation effects //
//===========================================


// Main paige load animations
const loadHero = () => {

    const navbarLogo = document.querySelectorAll(".navbar-logo");
    //animation property
    slideLogoAnimation = "transform: translateX(0%); opacity: 1";

    navbarLogo.forEach(logo => {
        this.addEventListener("load", () => {
        logo.style.cssText = slideLogoAnimation;
        });
    });
};
loadHero();

// Text appear animations on load
const loadIntroText = () => {

    //** Navbar links appear animation **/

    //navbar links
    const homeLink = document.querySelector(".home-link");
    const servicesLink = document.querySelector(".services-link");
    const pricesLink = document.querySelector(".prices-link");
    const contactLink = document.querySelector(".contact-link");

    //list of links
    const navbarLinks = [homeLink, servicesLink, pricesLink, contactLink]

    //link animation properties
    let linksTimeout = 1100
    const linksIncrement = 100
    const appearPropertyLinks = "transform: translateY(0%); opacity: 1";

    //function to assign a property to each link after a specified timeout
    navbarLinks.forEach((link) => {
        setTimeout(() => {
            link.style.cssText = appearPropertyLinks;
        }, linksTimeout);
        linksTimeout += linksIncrement;
    });

    //** Text on hero paige animation **/

    //main hero text
    const introTextH1 = document.querySelector(".sticker-text h1");
    const introTextH2 = document.querySelector(".sticker-text h2");
    const heroContactButton = document.querySelector(".hero-button h3");
    //main hero offer text
    const introOffer = document.querySelector(".offer-overlay-polygon h1");
    const offerText = document.querySelector(".border-effect-polygon p");
    const offerBtn = document.querySelector("a.services-button");

    //list of all text to appear one after another
    const heroTexts = [introTextH1, introTextH2, heroContactButton, introOffer, offerText, offerBtn];

    //animation properties
    let textTimeout = 1100;
    const textIncrement = 50;
    const appearPropertyIntro = "transform: translateY(0%); opacity: 1"

    //function to assign property after certain delay
    heroTexts.forEach((text) => {
        setTimeout(() => {
            text.style.cssText = appearPropertyIntro;
        }, textTimeout);
        textTimeout += textIncrement;
    });
};
loadIntroText();

// image function slider on the main page
const imageSlider = () => {
    //selecting images
    const sliderImages = document.querySelectorAll(".img-slider-container img");

    //time period between the image switch
    const nextImageDelay = 5000;
    //the count of images
    let currentImageCounter = 0;
    //making the first picute visible
    sliderImages[currentImageCounter].style.opacity = "1";

    //function to switch the opacity between each image
    function nextImage() {
        //currently displayed picture dissapears
        sliderImages[currentImageCounter].style.opacity = "0";
        //variable that repeatedly returns numbers from 1 to number of images to ensure a never ending carousel
        currentImageCounter = (currentImageCounter + 1) % sliderImages.length;
        //displaying the image next in line
        sliderImages[currentImageCounter].style.opacity = "1";
    }
    //repeating the function to infinity
    setInterval(nextImage, nextImageDelay);
};
imageSlider();

// function to create an electric glow running on the contact button
const buttonGlow = () => {

    //top, right, bottom and left borders
    const topBorder = document.querySelector(".top-border");
    const rightBorder = document.querySelector(".right-border");
    const bottomBorder = document.querySelector(".bottom-border");
    const leftBorder = document.querySelector(".left-border");

    //list of borders and their classes to be assigned as they are in the order in the list
    const borders = [topBorder, rightBorder, bottomBorder, leftBorder];
    const classes = ["left-right", "up-down", "right-left", "down-up"];
    let loadInterval = 1000;

    //initial border load
    for (let i = 0; i < borders.length; i++) {
        setTimeout(() => {
            borders[i].classList.add(classes[i]);
        }, loadInterval);
    };

    //top and bottom border run animation
    function topLeftToRight() {
        return new Promise((resolve) => {
            //animating the left to right run effect
            setTimeout(() => {
                topBorder.classList.toggle("reverse");
                bottomBorder.classList.toggle("reverse");
                resolve();
            }, loadInterval);
        });
    };

    //right and left border run animation
    function rightTopToBottom() {
        return new Promise((resolve) => {
            setTimeout(() => {
                rightBorder.classList.toggle("reverse");
                leftBorder.classList.toggle("reverse");
                resolve();
            },loadInterval); 
        });
    };

    //running the animations one after another
    async function runAnimation() {
        await topLeftToRight();
        await rightTopToBottom();
    };

    //repeating the animation each 1.5sec
    setInterval(() => {
        runAnimation();
    }, 1500);
     
}
buttonGlow();
    

// text appear while scrolling through the page
const textAppearOnScroll = () => {
    const faders = document.querySelectorAll(".fade-in");

    //options for the text to appear only when scrolled past -100px
    const appearOptions =  {
        treshold: 1,
        rootMargin: "0px 0px -100px 0px"
    };

    const textAppear = new IntersectionObserver(function(
        entries,
        textAppear
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                textAppear.unobserve(entry.target);
            };
        });
    }, appearOptions);

    faders.forEach(fader => {
        textAppear.observe(fader);
    });
};
textAppearOnScroll();

// postupne zobrazeni obrazku pri scrollu
const imgAppearOnScroll = () => {
    const fadedImges = document.querySelectorAll(".faded-image-container");

    const appearOptions =  {
        treshold: 1,
        rootMargin: "0px 0px -100px 0px"
    };

    const imgAppear = new IntersectionObserver(function(
        entries,
        imgAppear
    ) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add("appear");
                imgAppear.unobserve(entry.target);
            };
        });
    }, appearOptions);

    fadedImges.forEach(fadedImg => {
        imgAppear.observe(fadedImg);
    });
};
imgAppearOnScroll();


// scroll animation from links/buttons to selected section
function smoothScroll(target, duration) {
    let scrollHere = document.querySelector(target);
    const navbarPc = document.querySelector("nav.pc-nav");
    const navbarMobile = document.querySelector("nav.mobile-nav");

    // extracting the navbar height
    const navbarPcPosition = navbarPc.getBoundingClientRect().height;
    const navbarMobilePosition = navbarMobile.getBoundingClientRect().height;

    //setting up the variable for future assingment to determine if mobile or PC nav is used
    let navbarPosition = 0;

    // determines if there is mobile or PC navbar
    if(navbarPcPosition === 0) {
        navbarPosition = navbarMobilePosition;
    } else {
        navbarPosition = navbarPcPosition;
    };

    //calculation of the target position to scroll to
    let targetPosition = scrollHere.getBoundingClientRect().top+window.pageYOffset-navbarPosition;
    // setting up variables for scroll function
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    //easing function to smoothen the scrolling effect
    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };

    //function to animate the scroll effect
    function animationScroll(currentTime) {
        if(startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animationScroll);
    };

    requestAnimationFrame(animationScroll);
}

//pridani scroll animace jednotlivym linkum

const scrollToLink = () => {
    //from navbar home link to home page
    let navbarHome = document.querySelectorAll(".home-link");

    navbarHome.forEach((element) => {
        element.addEventListener('click', () => {
            smoothScroll("section#main-page", 1000);
        });
    });

    //from navbar services link to services page
    let navbarServices = document.querySelectorAll(".services-link");

    navbarServices.forEach((element) => {
        element.addEventListener('click', () => {
            smoothScroll("section#services-section", 1000);
        });
    });

    //from navbar prices link to prices page
    let navbarPrices = document.querySelectorAll(".prices-link");

    navbarPrices.forEach((element) => {
        element.addEventListener('click', () => {
            smoothScroll("section#prices", 1000);
        });
    });

    //from navbar contact link to contact page
    let navbarContact = document.querySelectorAll(".contact-link");

    navbarContact.forEach((element) => {
        element.addEventListener('click', () => {
            smoothScroll("section#contact-section", 1000);
        });
    });

    // from main page to contact
    let heroContactButton = document.querySelector(".hero-button");

    heroContactButton.addEventListener("click",()  =>{
        smoothScroll("section#contact-section", 1000);
    });

    let heroServicesButton = document.querySelector(".border-button-polygon");

    heroServicesButton.addEventListener("click",()  =>{
        smoothScroll("section#services-section", 1000);
    });

    //from footer to main page
    let footerHomeBtn = document.querySelector(".back-main-page");

    footerHomeBtn.addEventListener("click",()  =>{
        smoothScroll("section#main-page", 1000);
    });

    //from footer to services page
    let footerServicesBtn = document.querySelector(".back-services");

    footerServicesBtn.addEventListener("click", () => {
        smoothScroll("section#services-section", 1000);
    });

    let footerPricesBtn = document.querySelector(".back-prices");

    //from footer to prices page
    footerPricesBtn.addEventListener("click", () => {
        smoothScroll("section#prices", 1000);
    });

    //from footer to Contact page
    let footerContactBtn = document.querySelector(".back-contact");

    footerContactBtn.addEventListener("click", () => {
        smoothScroll("section#contact-section", 1000);
    });
};

scrollToLink();




