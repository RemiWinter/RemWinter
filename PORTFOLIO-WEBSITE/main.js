var tl = new TimelineMax({onUpdate:updatePercentage});
tl2 = new TimelineMax();
tl3 = new TimelineMax();
const controller = new ScrollMagic.Controller();


const sevenH = window.matchMedia('(max-width: 766px)');

// tl.to('.about', 1, {x:-100,});
// tl2.to('.about', 0.5, {x:-100});
if (window.screen.width > 600) {
  tl.to('.hi-div', 1, {x:-200, y:50});
  tl.to('.i-0-div', 1, {x:-190, y:50}, '=-1');
  tl.to('.im-div', 1, {x:-104, y:-23}, '=-1');
  tl.to('.i-1-div', 1, {x:-160, y:-23}, '=-1');
  tl.to('.remi-div', 1, {x:-5, y:-96}, '=-1');
  tl.to('.i-2-div', 1, {x:42, y:-96}, '=-1');
  tl.to('.winter-div', 1, {x:154, y:-168}, '=-1');
  if (window.screen.width / window.screen.height === 3/2){
    tl.to('.i-3-div', 1, {x:113, y:-168}, '=-1');
  }
  else {
    tl.to('.i-3-div', 1, {x:113, y:-168}, '=-1');
  }
  // tl.to('.about', 1, {left:0, right:0}, '=-0.8');  Nav scroll animation
  tl.to('.about-link', 1, { color:'red'}, '=-0.8');
  tl.from('.about-me-div', 1, {opacity:0, scale:0, y:-100}, '=-0.8');
}
else {
  tl.to('.hi-div', 1, {y:0});
  tl.to('.i-0-div', 1, {y:0}, '=-1');
  tl.to('.im-div', 1, {y:-23}, '=-1');
  tl.to('.i-1-div', 1, {y:-23}, '=-1');
  tl.to('.remi-div', 1, {y:-46}, '=-1');
  tl.to('.i-2-div', 1, {y:-46}, '=-1');
  tl.to('.winter-div', 1, {y:-68}, '=-1');
  tl.to('.i-3-div', 1, {y:-68}, '=-1');
  tl.to('.about-link', 1, { color:'red'}, '=-0.8');
  tl.from('.about-me-div', 1, {opacity:0, scale:0, y:-100}, '=-1.2');
}


// tl.to('.about', 0.5, {right:'90%'});
// tl.to('.about-link', 0.5, {color:'white'}, '=-0.5');
// tl.to('.projects', 0.5, {left:90, right:90})
// tl.to('.projects-link', 1, { color:'red'}, '=-0.5');
// tl.to('.item-1', 2, {opacity:1}, '=-0.8');
// tl.from('.item-1', 2, {x:-300}, '=-0.8');






const scene = new ScrollMagic.Scene({
  triggerElement: '.header-content',
  triggerHook: 'onLeave',
  duration: '100%'
}).setPin('.header-content')
  .setTween(tl)
    .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: '#projects'
}).setTween(tl2).addTo(controller);

const scene3 = new ScrollMagic.Scene({
  triggerElement: '#contact'
}).setTween(tl3).addTo(controller);

function updatePercentage() {
  tl.progress();
}

if (window.screen.width > 700){

  // Waits for inital animation to finish

  setTimeout(() => {
    // document.querySelector('.about').classList.add('end');  Nav scroll animation
    // document.querySelector('.projects').classList.add('end');  Nav scroll animation
    // document.querySelector('.contact').classList.add('end');  Nav scroll animation
    document.querySelector('.i-0').classList.remove('animation');
    document.querySelector('.i-1').classList.remove('animation');
    document.querySelector('.i-2').classList.remove('animation');
    document.querySelector('.i-3').classList.remove('animation');
    document.querySelector('.hi').classList.remove('animation');
    document.querySelector('.im').classList.remove('animation');
    document.querySelector('.remi').classList.remove('animation');
    document.querySelector('.winter').classList.remove('animation');
    
    if (!sevenH.matches) {
      document.querySelector('.web-dev').classList.remove('animation');
      document.querySelector('.programmer').classList.remove('animation');
      document.querySelector('.designer').classList.remove('animation');
    }
    document.querySelector('header').classList.remove('disable-scroll');
    document.querySelector('#about').classList.remove('hide');
    document.querySelector('#about2').classList.remove('hide');
    document.querySelector('#projects').classList.remove('hide');
    document.querySelector('#contact').classList.remove('hide');
    document.querySelector('#buffer').classList.remove('hide');
    document.querySelector('.projects-section').classList.remove('hide');
    document.querySelector('.contact-section').classList.remove('hide');
  
    window.onscroll = () => {
      console.log(window.scrollY);
      if (window.scrollY <= 800) {
        for (i=0; i<gridItems.length; i++) {
          item = gridItems[i];
          item.classList.remove('hide');
        }
      }
    };
  
    tl2.to('.hi-full', 0.3, {opacity:0}), '=-0.5';
    tl2.to('.im-full', 0.3, {opacity:0}, '=-0.3');
    tl2.to('.remi-full', 0.3, {opacity:0}, '=-0.3');
    tl2.to('.winter-full', 0.3, {opacity:0}, '=-0.3');
    tl2.to('.about-me-div', 0.3, {opacity:0}, '=-0.1');
    tl2.to('.header-content', 0.3, {scale:0, opacity:0}, '=-0.1');
    // tl2.to('.about', 0.5, {right:'90%'});   Nav scroll animation
    tl2.to('.about-link', 0.5, {color:'white'}, '=-0.5');
    // tl2.to('.welcome', 0.1, {opacity:0}, '=-0.4');  Nav scroll animation
    // tl2.to('.projects', 0.5, {left:55, right:90}, '=-0.5');  Nav scroll animation
    tl2.to('.projects-link', 0.5, { color:'red'}, '=-0.5');
    tl2.from('.item-1', 0.2, {opacity:0.01, x:-300});
    tl2.from('.item-2', 0.2, {opacity:0.01, x:300});
    tl2.from('.item-3', 0.2, {opacity:0.01, x:-300});
    tl2.from('.item-4', 0.2, {opacity:0.01, x:300});
    // tl2.from('.grid-items', 0.2, {x:200});
    // tl3.to('.projects', 0.5, {right:'80%'});  Nav scroll animation
    tl3.to('.projects-link', 0.5, {color:'white'}, '=-0.5');
    // tl3.to('.contact', 0.5, {left:20, right:40}, '=-0.5');  Nav scroll animation
    tl3.to('.contact-link', 1, { color:'red'}, '=-0.5');
    // tl3.from('.c-email', 0.3, {x:-40}, '=-0.3');
    // tl3.from('.c-email-2', 0.3, {x:-40}, '=-0.3');
    // tl3.from('.c-git', 0.3, {x:-40}), '=-0.3';
    // tl3.from('.c-git-2', 0.3, {x:-40}, '=-0.3');
    // tl3.from('.c-linkedin', 0.3, {x:-40}), '=-0.3';
    // tl3.from('.c-linkedin-2', 0.3, {x:-40}, '=-0.3');
  }, 9000)
}

else {

  // Waits for inital animation to finish

  setTimeout(() => {
    // document.querySelector('.about').classList.add('end');  Nav scroll animation
    // document.querySelector('.projects').classList.add('end');  Nav scroll animation
    // document.querySelector('.contact').classList.add('end');  Nav scroll animation
    document.querySelector('.i-0').classList.remove('animation');
    document.querySelector('.i-1').classList.remove('animation');
    document.querySelector('.i-2').classList.remove('animation');
    document.querySelector('.i-3').classList.remove('animation');
    document.querySelector('.hi').classList.remove('animation');
    document.querySelector('.im').classList.remove('animation');
    document.querySelector('.remi').classList.remove('animation');
    document.querySelector('.winter').classList.remove('animation');
    
    if (!sevenH.matches) {
      document.querySelector('.web-dev').classList.remove('animation');
      document.querySelector('.programmer').classList.remove('animation');
      document.querySelector('.designer').classList.remove('animation');
    }
    document.querySelector('header').classList.remove('disable-scroll');
    document.querySelector('#about').classList.remove('hide');
    document.querySelector('#about2').classList.remove('hide');
    document.querySelector('#projects').classList.remove('hide');
    document.querySelector('#contact').classList.remove('hide');
    document.querySelector('#buffer').classList.remove('hide');
    document.querySelector('.projects-section').classList.remove('hide');
    document.querySelector('.contact-section').classList.remove('hide');
  
    window.onscroll = () => {
      console.log(window.scrollY);
      if (window.scrollY <= 800) {
        for (i=0; i<gridItems.length; i++) {
          item = gridItems[i];
          item.classList.remove('hide');
        }
      }
    };
  
    // tl2.to('.hi-full', 0.3, {opacity:0}), '=-0.5';
    // tl2.to('.im-full', 0.3, {opacity:0}, '=-0.3');
    // tl2.to('.remi-full', 0.3, {opacity:0}, '=-0.3');
    // tl2.to('.winter-full', 0.3, {opacity:0}, '=-0.3');
    // tl2.to('.about-me-div', 0.3, {opacity:0}, '=-0.1');
    tl2.to('.header-content', 0.3, {y:-200, opacity:0}, '=-0.1');
    // tl2.to('.about', 0.5, {right:'90%'});   Nav scroll animation
    tl2.to('.about-link', 0.5, {color:'white'}, '=-0.5');
    // tl2.to('.welcome', 0.1, {opacity:0}, '=-0.4');  Nav scroll animation
    // tl2.to('.projects', 0.5, {left:55, right:90}, '=-0.5');  Nav scroll animation
    tl2.to('.projects-link', 0.5, { color:'red'}, '=-0.5');
    if (window.screen.width <= 600) {
      tl2.from('.projects-header', 0.2, {opacity:0, y:60});
    }
    tl2.from('.item-1', 0.2, {opacity:0.01, x:-300});
    tl2.from('.item-2', 0.2, {opacity:0.01, x:300});
    tl2.from('.item-3', 0.2, {opacity:0.01, x:-300});
    tl2.from('.item-4', 0.2, {opacity:0.01, x:300});
    // tl2.from('.grid-items', 0.2, {x:200});
    // tl3.to('.projects', 0.5, {right:'80%'});  Nav scroll animation
    tl3.to('.projects-link', 0.5, {color:'white'}, '=-0.5');
    // tl3.to('.contact', 0.5, {left:20, right:40}, '=-0.5');  Nav scroll animation
    tl3.to('.contact-link', 1, { color:'red'}, '=-0.5');
    // tl3.from('.c-email', 0.3, {x:-40}, '=-0.3');
    // tl3.from('.c-email-2', 0.3, {x:-40}, '=-0.3');
    // tl3.from('.c-git', 0.3, {x:-40}), '=-0.3';
    // tl3.from('.c-git-2', 0.3, {x:-40}, '=-0.3');
    // tl3.from('.c-linkedin', 0.3, {x:-40}), '=-0.3';
    // tl3.from('.c-linkedin-2', 0.3, {x:-40}, '=-0.3');
  }, 6900)
}



// window.onscroll = () => {aboutScroll()};

// aboutScroll = () => {
//   if (window.scrollY>0) {
//     document.querySelector('.about').classList.add('active');
//   }
//   else {
//     document.querySelector('.about').classList.remove('active');
//   }
// }

const gridItems = document.querySelectorAll('.grid-items');

for (i=0; i<gridItems.length; i++) {
  let item = gridItems[i]
  item.addEventListener('mouseover', e => {
    item.querySelector('img').style.display = 'none';
    item.querySelector('video').style.display = 'block';
    item.querySelector('video').currentTime = 0;
  })
  
  item.addEventListener('mouseout', e => {
    item.querySelector('img').style.display = 'block';
    item.querySelector('video').style.display = 'none';
  })
}

// Hamburger Menu

hamburgerMenu = document.querySelector('#check-btn');
homeButton = document.querySelector('.home');
aboutButton = document.querySelector('.about');
projectsButton = document.querySelector('.projects');
contactButton = document.querySelector('.contact');

const navButtons = [
  document.querySelector('.about'),
  document.querySelector('.home'),
  document.querySelector('.projects'),
  document.querySelector('.contact')]; 

for (i=0; i<navButtons.length; i++) {
  navButtons[i].addEventListener('click', () => {
    if (hamburgerMenu.checked) {
    hamburgerMenu.checked = false;
    }
  })
}

