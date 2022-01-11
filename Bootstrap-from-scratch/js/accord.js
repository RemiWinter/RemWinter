var expandButton = document.getElementsByClassName('accord-btn');
var accordText = document.getElementsByClassName('accord-text'); 


for (i=0; i<accordText.length; i++) {
  expandButton[i].addEventListener('click', function(){
    this.classList.toggle('active')
  })
}