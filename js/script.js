const lightMode = document.querySelector('.light-mode');
const darkMode = document.querySelector('.dark-mode');
const menuToggle = document.querySelector('.toggle');
const menuBar = document.querySelector('.toggle');
const menuNav = document.querySelector('.menu');
const loader =document.querySelector('.container-loader')

menuBar.addEventListener('click', function () {
  menuNav.classList.toggle('active');
});
// light mode
darkMode.addEventListener('click', () => {
  document.body.classList.toggle('light-mode-active');
  lightMode.classList.toggle('active');
  darkMode.classList.toggle('active');
});
lightMode.addEventListener('click', () => {
  document.body.classList.remove('light-mode-active');
  darkMode.classList.remove('active');
  lightMode.classList.remove('active');
});

menuToggle.onclick = function () {
  menuToggle.classList.toggle('active');
};

function loaderActive(){
  loader.classList.add('loader-active');
}
function loaderActiveTime(){
  setInterval(loaderActive, 3000);
}
window.onload = loaderActiveTime();

