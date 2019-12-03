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

let services = document.querySelector('.main-content .bottom-content .text-content:nth-child(1)')
services.querySelector('h4').textContent = siteContent["main-content"]["services-h4"];
services.querySelector('p').textContent = siteContent["main-content"]["services-content"];

let product = document.querySelector('.main-content .bottom-content .text-content:nth-child(2)')
product.querySelector('h4').textContent = siteContent["main-content"]["product-h4"];
product.querySelector('p').textContent = siteContent["main-content"]["product-content"];

let vision = document.querySelector('.main-content .bottom-content .text-content:nth-child(3)')
vision.querySelector('h4').textContent = siteContent["main-content"]["vision-h4"];
vision.querySelector('p').textContent = siteContent["main-content"]["vision-content"];

let contact = document.querySelector('.contact');
document.querySelector('.contact h4').textContent = siteContent.contact["contact-h4"];

contact.querySelector('p:nth-child(2)').textContent = siteContent.contact.address;
contact.querySelector('p:nth-child(3)').textContent = siteContent.contact.phone;
contact.querySelector('p:nth-child(4)').textContent = siteContent.contact.email;

let footer = document.querySelector('footer p');
footer.textContent = siteContent.footer.copyright;

let navigation = document.querySelectorAll('nav a');
for (let link of navigation){
  link.style.color = 'green';
}

const newNav1 = document.createElement('a');
newNav1.textContent = 'Beginning';
newNav1.href = '#';

const newNav2 = document.createElement('a');
newNav2.textContent = 'End';
newNav2.href = '#';

const navSection = document.querySelector('nav');


navSection.appendChild(newNav2);
navSection.prepend(newNav1);


const header = document.querySelector('header');
header.style.backgroundColor = '#505050';

const redButton = document.createElement('button');
redButton.textContent = 'Red';
redButton.classList.add('redButton');

const blueButton = document.createElement('button');
blueButton.textContent = 'Blue';
blueButton.classList.add('blueButton');
blueButton.addEventListener('click', event => {
  document.querySelector('body').style.backgroundColor = 'blue';
});

const ctaSection = document.querySelector('.cta-text');
ctaSection.appendChild(redButton);
ctaSection.appendChild(blueButton);
redButton.addEventListener('click', event => {
  document.querySelector('body').style.backgroundColor = 'red';
});

const getStartedButton = ctaSection.querySelector('button');
getStartedButton.addEventListener('click', event => {
  document.querySelector('body').style.backgroundColor = '';
});

