const mediaQuery1300 = window.matchMedia('(max-width: 1300px)')

const mainText1 = document.querySelector('#main-text-1');
const mainText2 = document.querySelector('#main-text-2');


// showElement = element => element.classList.remove('hide');
// hideElement = element => element.classList.add('hide');
removeClass = (element, className) => element.classList.remove(className);
addClass = (element, className) => element.classList.add(className);



mediaQuery1300.addEventListener('change', () => {
  if (mediaQuery1300.matches){
    // hideElement(mainText1);
    // showElement(mainText2);
    addClass(mainText1, 'hide');
    removeClass(mainText2, 'hide');
  }
  else {
    // hideElement(mainText2);
    // showElement(mainText1);
    addClass(mainText2, 'hide');
    removeClass(mainText1, 'hide');
  }
})