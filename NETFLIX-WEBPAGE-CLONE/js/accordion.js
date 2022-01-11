const accordion = document.getElementsByClassName('accordion');

for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener('click', function(){
    this.classList.toggle('active');

  var panel = this.nextElementSibling;
    // if (panel.style.display === "block") {
    //   panel.style.display = "none";
    // } else {
    //   panel.style.display = "block";
    // }
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
      panel.style.padding = '0 31.5px';
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      panel.style.padding = 31.5 +'px'
    }
  });

}

