var tl = new TimelineMax();
var tl2 = new TimelineMax();
var tl3 = new TimelineMax();
var tl4 = new TimelineMax();
var tl5 = new TimelineMax();
var tlNav1 = new TimelineMax();
var tlNav2 = new TimelineMax();
var tlNav3 = new TimelineMax();
const controller = new ScrollMagic.Controller();

tl.from('.cta-heading', 0.5, {x:-200, opacity:0})
tl.from('.cta-subheading', 0.5, {x:-200, opacity:0}, '=-0.45')
tl.from('.cta-paragraph', 0.5, {x:-200, opacity:0}, '=-0.45')
tl.from('.cta-btn', 0.5, {x:-200, opacity:0}, '=-0.45')
tl.from('.separator', 0.5, {y:50, opacity:0}, '=-0.2')
tl.from('.ot-heading', 0.5, {x:200, opacity:0}, '=-0.2')
tl.from('.ot-1', 0.5, {x:200, opacity:0}, '=-0.48')
tl.from('.ot-2', 0.5, {x:200, opacity:0}, '=-0.48')
tl.from('.ot-3', 0.5, {x:200, opacity:0}, '=-0.48')
tl.from('.ot-4', 0.5, {x:200, opacity:0}, '=-0.48')
tl.from('.ot-5', 0.5, {x:200, opacity:0}, '=-0.48')
tl.from('.ot-6', 0.5, {x:200, opacity:0}, '=-0.48')
tl2.from('.home', 0.2, {x:20, opacity:0})
tl3.from('.classes-subhead', 0.5, {y:50, opacity:0})
tl3.from('.classes-head', 0.5, {y:50, opacity:0}, '=-0.4')
tl3.from('.class-cards', 0.5, {y:50, opacity:0}, '=-0.4')
tl4.from('.about-subhead', 0.8, {y:80, opacity:0})
tl4.from('.about-head', 0.8, {y:80, opacity:0}, '=-0.7')
tl4.from('.about-us-content', 0.8, {y:80, opacity:0}, '=-0.7')
tl5.from('.contact-head', 0.8, {y:80, opacity:0})
tlNav1.to('.classes-link', 0.1, {color:'rgb(165, 42, 42)'})
tlNav2.to('.classes-link', 0.1, {color:'white'})
tlNav2.to('.about-us-link', 0.1, {color:'rgb(165, 42, 42)'})
tlNav3.to('.about-us-link', 0.1, {color:'white'})
tlNav3.to('.contact-us-link', 0.1, {color:'rgb(165, 42, 42)'})



const scene = new ScrollMagic.Scene({
  triggerElement: '.header-marker'
}).setTween(tl).addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: '.header-btns'
}).setTween(tl2).addTo(controller);

const scene3 = new ScrollMagic.Scene({
  triggerElement: '.cta-heading'
}).setTween(tl3).addTo(controller);

const scene4 = new ScrollMagic.Scene({
  triggerElement: '.trigger-element'
}).setTween(tl4).addTo(controller);

const scene5 = new ScrollMagic.Scene({
  triggerElement: '.contact-trigger'
}).setTween(tl5).addTo(controller);

const scene6 = new ScrollMagic.Scene({
  triggerElement: '#classes'
}).setTween(tlNav1).addTo(controller);

const scene7 = new ScrollMagic.Scene({
  triggerElement: '#about-us'
}).setTween(tlNav2).addTo(controller);

const scene8 = new ScrollMagic.Scene({
  triggerElement: '#contact-us'
}).setTween(tlNav3).addTo(controller);

window.onscroll = () => {stickNavbar()};

const navBar = document.querySelector('nav');
const sticky = navBar.offsetTop;

stickNavbar = () => {
  if (window.scrollY > sticky) {
    navBar.classList.add('sticky');
    // console.log('sticky');
  }
  else {
    navBar.classList.remove('sticky');
    // console.log('not sticky');
  }
};


//Modal

const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content')
const openBtn = document.querySelector('.signup-btn');
const openBtn2 = document.querySelector('.signup-btn2');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener ('click', () => {
  modal.style.display = 'block';
  modal.style.animation = 'fadeIn 0.4s';
  modalContent.style.animation = 'scaleIn 0.4s';
} )

openBtn2.addEventListener ('click', () => {
  modal.style.display = 'block';
  modal.style.animation = 'fadeIn 0.4s';
  modalContent.style.animation = 'scaleIn 0.4s';  
} )

closeBtn.addEventListener('click', () => {
  modal.style.animation = 'fadeOut 0.4s';
  modalContent.style.animation = 'scaleOut 0.4s';
  
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
})

window.addEventListener('click', (e) => {
  if (e.target == modal){
    modal.style.animation = 'fadeOut 0.4s';
  modalContent.style.animation = 'scaleOut 0.4s';
  
  setTimeout(() => {
    modal.style.display = 'none';
  }, 300);
}
})

// Form Validation

const form = document.querySelector('.modal-form');
const name_ = document.querySelector('#signup-name');
const email = document.querySelector('#signup-email');
const password = document.querySelector('#signup-password');
const passowrdConfirm = document.querySelector('#signup-password-confirm');
let isValid = false;

function showError(input, message) {
  const formValidation = input.parentElement;
  formValidation.className = 'form-validation error';

  const errorMessage = formValidation.querySelector('p');
  errorMessage.innerText = message;
}

function showValid(input) {
  const formValidation = input.parentElement;
  formValidation.className = 'form-validation valid'
}

checkRequired = inputArr => {
  inputArr.forEach(function(input) {
    if (input.value.trim() === '') {
      showError(input, `${getFieldName(input)} is required`);
      isValid = false;
    }

    else if (input.id === 'signup-password-confirm'  && password.value !== passowrdConfirm.value) {
      showError(input, `Passwords do not match`);
      isValid = false;
    }

    else {
      showValid(input);
      isValid = true;
    }

  })
};

checkRequired2 = input => {
  // console.log('This is the ', input)
    if (input.value.trim() === '' && input.type !== 'submit') {
      showError(input, `${getFieldName(input)} is required`);
    }
    else if (input.type === 'email') {
      emailFormatCheck([...input.value])
    }
    else if (input.type !== 'submit') {
      showValid(input);
    }
    if (input.id === 'signup-password-confirm'  && password.value !== passowrdConfirm.value) {
      showError(input, `Passwords do not match`);
    }
};

function emailFormatCheck(value) {
  let isEmail = false;
  console.log(value);
  value.forEach(function(char) {
    if (char ==='@') {
      isEmail = true;
    }
  });
  if (isEmail == false) {
    showError(email, `Enter a valid email`);
  } 
  else {
    showValid(email);
  }
}


function getFieldName(input) {
  return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

form.addEventListener('focusout', (e) => {
  checkRequired2(e.target);
  // console.log('Lost focus', e.target);
})

form.addEventListener('submit', e => {
  // e.preventDefault();
  checkRequired([name_, email, password, passowrdConfirm]);
  if (!isValid) {
    e.preventDefault();
  }
})

// Hamburger menu

hamburgerMenu = document.querySelector('#check-btn');
homeButton = document.querySelector('.home');
classesButton = document.querySelector('.classes');
aboutButton = document.querySelector('.about');
contactButton = document.querySelector('.contact');

const navButtons = [
  document.querySelector('.home'),
  document.querySelector('.classes'),
  document.querySelector('.about'),
  document.querySelector('.contact')]; 

for (i=0; i<navButtons.length; i++) {
  navButtons[i].addEventListener('click', () => {
    if (hamburgerMenu.checked) {
    hamburgerMenu.checked = false;
    }
  })
}