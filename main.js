let button = document.querySelector('.float');
let profile = document.querySelector('header > section');
let card = document.querySelector('header');
let status = true;
button.addEventListener('click',()=>{
  if (status) {
    animateOpen();
    status = false;
  } else {
    animateClose();
    status = true;
  }
});



function animateOpen() {
  button.style.bottom = '180px';
  profile.style.bottom = '-110px';
   card.style.backgroundImage = "url('./serge-minhulin-wip-third-dragon-lighting.gif')";
  button.firstElementChild.innerText = 'close';
}

function animateClose() {
  button.style.bottom = '7px';
  profile.style.bottom = '-400px';
  card.style.backgroundImage = "url('./serge-minhulin-thumb-cover-002-end.jpg')";
  button.firstElementChild.innerText = 'view profile';
}
