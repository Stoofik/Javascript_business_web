// Nacteni hlavni stranky
const loadHero = () => {
    const introNav = document.querySelector("nav");
    const introText = document.querySelector(".intro-text-container");
    const introPicture = document.querySelector(".intro-picture-container");
    const mainBtn = document.querySelector(".mainBtn");

    window.addEventListener("load", function() {
        introNav.style.cssText = "transform: translateY(0%)";
        introText.style.cssText = "transform: translateX(0%)";
        introPicture.style.cssText = "transform: translateX(0%)";
        mainBtn.style.cssText = "transform: translateX(0%)";
    });

};
loadHero();

// Postupne zobrazeni textu na hlavni strance
const loadIntroText = () => {
    const introTextH3 = document.querySelector(".intro-text h3");
    const introTextH1 = document.querySelector(".intro-text h1");
    const introTextp = document.querySelector(".intro-text p");

    setTimeout(function(){ introTextH3.style.cssText = "transform: translateY(0%); opacity: 1"; }, 1100);
    setTimeout(function(){ introTextH1.style.cssText = "transform: translateY(0%); opacity: 1"; }, 1200);
    setTimeout(function(){ introTextp.style.cssText = "transform: translateY(0%); opacity: 1"; }, 1300);
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


// scroll animace z vybraneho mista na druhe
function smoothScroll(target, duration) {
    let scrollHere = document.querySelector(target);
    let targetPosition = scrollHere.getBoundingClientRect().top+window.pageYOffset;
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
    let navbarHome = document.querySelector(".home-link");

    navbarHome.addEventListener("click", function () {
        smoothScroll("section#one", 1000);
    });

    //from navbar services button to services
    let navbarServices = document.querySelector(".services-link");

    navbarServices.addEventListener("click", function () {
        smoothScroll("section#two", 1000);
    });

    //from navbar prices button to prices
    let navbarPrices = document.querySelector(".prices-link");

    navbarPrices.addEventListener("click", function () {
        smoothScroll("section#four", 1000);
    });

    //from navbar contact button to contact
    let navbarContact = document.querySelector(".contact-link");

    navbarContact.addEventListener("click", function () {
        smoothScroll("section#six", 1000);
    });

    //from main page to services
    let mainBtn = document.querySelector(".mainBtn");

    mainBtn.addEventListener("click", function() {
        smoothScroll("section#two", 1000);
    });

    //from footer to main page
    let footerHomeBtn = document.querySelector(".back-main-page");

    footerHomeBtn.addEventListener("click", function() {
        smoothScroll("section#one", 1000);
    });

    //from footer to services page
    let footerServicesBtn = document.querySelector(".back-services");

    footerServicesBtn.addEventListener("click", function () {
        smoothScroll("section#two", 1000);
    });

    let footerPricesBtn = document.querySelector(".back-prices");

    //from footer to prices page
    footerPricesBtn.addEventListener("click", function () {
        smoothScroll("section#four", 1000);
    });

    //from footer to Contact page
    let footerContactBtn = document.querySelector(".back-contact");

    footerContactBtn.addEventListener("click", function () {
        smoothScroll("section#six", 1000);
    });
};

scrollToLink();




// postupne zobrazeni obrazku pri scrollu
const imgAppearOnScroll = () => {
    const fadedImges = document.querySelectorAll(".service-image-container");

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



