const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



function addLink (position, text){
  let currentNav = document.querySelector('a:nth-child(' + position +')');
  currentNav.textContent = text;
}

addLink(1, siteContent["nav"]["nav-item-1"]);
addLink(2,siteContent["nav"]["nav-item-2"]);
addLink(3,siteContent["nav"]["nav-item-3"]);
addLink(4,siteContent["nav"]["nav-item-4"]);
addLink(5,siteContent["nav"]["nav-item-5"]);
addLink(6,siteContent["nav"]["nav-item-6"]);

let ctaTextH1 = document.querySelector('.cta-text h1');
ctaTextH1.textContent = siteContent.cta.h1;

let ctaTextButton = document.querySelector('.cta-text button');
ctaTextButton.textContent = siteContent.cta.button;

let ctaImage = document.querySelector('#cta-img');
ctaImage.src = siteContent.cta["img-src"];

let features = document.querySelector('.main-content .top-content .text-content:nth-child(1)')
features.querySelector('h4').textContent = siteContent["main-content"]["features-h4"];
features.querySelector('p').textContent = siteContent["main-content"]["features-content"];

let about = document.querySelector('.main-content .top-content .text-content:nth-child(2)')
about.querySelector('h4').textContent = siteContent["main-content"]["about-h4"];
about.querySelector('p').textContent = siteContent["main-content"]["about-content"];

let middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

