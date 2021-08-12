//Global Variables needed for Navbar
let burger = document.querySelector(".navbar-toggle");
let mobileMenu = document.querySelector(".mobile-nav-links");
let sections = document.querySelectorAll("section");
let navbarLinks = document.querySelectorAll("ul.links");

//functions for opening and closing the Navbar menu
//function to open menu by clicking burger
const toggleMenu = () => {
    burger.addEventListener('click', function() {
        mobileMenu.classList.toggle("mobile-nav-active");
    });
};

toggleMenu();

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
//Burger menu transformation effect
//==================================
const burgerTransform = () => {
    //variables
    let topBar = document.querySelector("span.bar#top");
    let midBar = document.querySelector("span.bar#mid");
    let botBar = document.querySelector("span.bar#bot");

    //function to transform the burger when clicking the burger
    burger.addEventListener('click', function() {
        topBar.classList.toggle("close");
        midBar.classList.toggle("close");
        botBar.classList.toggle("close");
    });

    //function to transform the burger when clicking elsewhere
    sections.forEach((section) => {
        section.addEventListener("click", function() {
            topBar.classList.remove("close");
            midBar.classList.remove("close");
            botBar.classList.remove("close");
        });
    });

    //function to transform burger when clicking a button

    navbarLinks.forEach((link) => {
        link.addEventListener("click", function() {
            topBar.classList.remove("close");
            midBar.classList.remove("close");
            botBar.classList.remove("close");
        });
    });
}
burgerTransform();
//===========================================


// Nacteni hlavni stranky
const loadHero = () => {
    // selector All with for cycle used due to having two separate navbars, 
    // one for PC and one for mobile
    const navbarLogo = document.querySelectorAll(".navbar-logo");

    navbarLogo.forEach(logo => {
        window.addEventListener("load", function() {
        logo.style.cssText = "transform: translateX(0%)";
        });
    });
};
loadHero();

// Postupne zobrazeni textu na hlavni strance
const loadIntroText = () => {

    //navbar links
    const homeLink = document.querySelector(".home-link");
    const servicesLink = document.querySelector(".services-link");
    const aboutLink = document.querySelector(".about-link");
    const contactLink = document.querySelector(".contact-link");

    setTimeout(function(){ homeLink.style.cssText = "transform: translateY(0%); opacity: 1"; }, 1100);
    setTimeout(function(){ servicesLink.style.cssText = "transform: translateY(0%); opacity: 1"; }, 1200);
    setTimeout(function(){ aboutLink.style.cssText = "transform: translateY(0%); opacity: 1"; }, 1300);
    setTimeout(function(){ contactLink.style.cssText = "transform: translateY(0%); opacity: 1"; }, 1400);

    //main hero text
    const introTextH1 = document.querySelector(".sticker-text h1");
    const introTextH2 = document.querySelector(".sticker-text h2");
    const heroContactButton = document.querySelector(".hero-button h3");

    setTimeout(function(){ introTextH1.style.cssText = "transform: translateY(0%); opacity: 1"; }, 1100);
    setTimeout(function(){ introTextH2.style.cssText = "transform: translateY(0%); opacity: 1"; }, 1200);
    setTimeout(function(){ heroContactButton.style.cssText = "transform: translateY(0%); opacity: 1"; }, 1300);
};

loadIntroText();

// postupne zobrazeni textu pri scrollovani strankou
const textAppearOnScroll = () => {
    const faders = document.querySelectorAll(".fade-in");

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


// scroll animace z vybraneho mista na druhe
function smoothScroll(target, duration) {
    let scrollHere = document.querySelector(target);
    let navbarPc = document.querySelector("nav.pc-nav");
    let navbarMobile = document.querySelector("nav.mobile-nav");

    let navbarPcPosition = navbarPc.getBoundingClientRect().height;
    let navbarMobilePosition = navbarMobile.getBoundingClientRect().height;

    // determines if there is mobile or PC navbar, to asign the correct height
    if(navbarPcPosition === 0) {
        navbarPosition = navbarMobilePosition;
    } else {
        navbarPosition = navbarPcPosition;
    };

    let targetPosition = scrollHere.getBoundingClientRect().top+window.pageYOffset-navbarPosition;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    function animationScroll(currentTime) {
        if(startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if(timeElapsed < duration) requestAnimationFrame(animationScroll);
    };

    function ease(t, b, c, d) {
        t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };

    requestAnimationFrame(animationScroll);
}

//pridani scroll animace jednotlivym linkum
const scrollToLink = () => {
    let navbarHome = document.querySelectorAll(".home-link");


    navbarHome.forEach((element) => {
        element.addEventListener('click', function() {
            smoothScroll("section#main-page", 1000);
        });
    });

    //from navbar services button to services
    let navbarServices = document.querySelectorAll(".services-link");

    navbarServices.forEach((element) => {
        element.addEventListener('click', function() {
            smoothScroll("section#services-section-one", 1000);
        });
    });

    //from navbar about button to about
    let navbarAbout = document.querySelectorAll(".about-link");

    navbarAbout.forEach((element) => {
        element.addEventListener('click', function() {
            smoothScroll("section#four", 1000);
        });
    });

    //from navbar contact button to contact
    let navbarContact = document.querySelectorAll(".contact-link");

    navbarContact.forEach((element) => {
        element.addEventListener('click', function() {
            smoothScroll("section#contact-section", 1000);
        });
    });

    // from main page to contact
    let heroContactButton = document.querySelector(".hero-button");

    heroContactButton.addEventListener("click", function() {
        smoothScroll("section#contact-section", 1000);
    });

    let heroServicesButton = document.querySelector(".border-button-polygon");

    heroServicesButton.addEventListener("click", function() {
        smoothScroll("section#two", 1000);
    });

    //from footer to main page
    let footerHomeBtn = document.querySelector(".back-main-page");

    footerHomeBtn.addEventListener("click", function() {
        smoothScroll("section#main-page", 1000);
    });

    //from footer to services page
    let footerServicesBtn = document.querySelector(".back-services");

    footerServicesBtn.addEventListener("click", function () {
        smoothScroll("section#services-section-one", 1000);
    });

    let footerPricesBtn = document.querySelector(".back-prices");

    //from footer to prices page
    footerPricesBtn.addEventListener("click", function () {
        smoothScroll("section#four", 1000);
    });

    //from footer to Contact page
    let footerContactBtn = document.querySelector(".back-contact");

    footerContactBtn.addEventListener("click", function () {
        smoothScroll("section#contact-section", 1000);
    });
};

scrollToLink();



