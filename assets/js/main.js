//open nav menu
let showMenu, closeMenu, popUp;
showMenu = document.querySelector('.burger-menu');
closeMenu = document.querySelector('.menu__close');
popUp = document.querySelector('.pop-up__menu');

close()

showMenu.onclick = show;
closeMenu.onclick = close;


function show() {
  popUp.style.marginRight = "0rem";
  
}
function close() {
  popUp.style.marginRight = "-125rem";
}

//open search 

let searchInput = document.querySelector('.search__active');
let searchSw = document.querySelector('.nav-bar__search');
let searchCl = document.querySelector('.search__active__close');
let inputValue = document.getElementById('searchInput');

closeSearch()

searchSw.onclick = showeSearch;
searchCl.onclick = closeSearch;


function showeSearch() {
  searchInput.hidden = false;
  searchSw.style.fill = "#87E6FF";
};

function closeSearch() {
  searchInput.hidden = true;
  searchSw.style.fill = "#212121";
  inputValue.value = '';
};

//work search 

function searchSection() {
  let input, filter, ul, li, a, i;
  input = document.getElementById('searchInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("search_id");
  li = ul.getElementsByTagName('li');

  for ( i = 0; i < li.length; i++) {

      a = li[i].getElementsByTagName("a")[0];

      if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
          li[i].style.display = "block";
      }
      else {
          li[i].style.display = "none";
      }
  }
}

//slider 

let sliders = document.querySelectorAll('.our-work__slider');

for (let i = 0; i < sliders.length; i++) {
  sliders[i].onclick = sliderLeft;
}

let left = 0;

function sliderLeft() {
  let slider = document.querySelectorAll('.slider__items');

  for (let i = 0; i < slider.length; i++) {
    slider[i].style.left = left + '%';
  }

  if (window.screen.width > 1000){
    left += - 40;
    
    if ( left < -170 ){
      left = 0;
    }
  } else if ( window.screen.width <= 1000 && window.screen.width >= 420) {
    left += - 30;

    if ( left < -100 ){
      left = 0;
    }
  } else {
    left += - 100;
    
      if ( left < -495 ){
        left = 0;
      }
  } 
  
}

 
//scroll

$(document).ready(function() {
  $('a[href^="#"]').click(function () { 
  elementClick = $(this).attr("href");
  destination = $(elementClick).offset().top;
  if($.browser.google){
  $('body').animate( { scrollTop: destination }, 1100 );
  }else{
  $('html').animate( { scrollTop: destination }, 1100 );
  }
  return false;
  });

});

// Tabs
document.querySelector('.our-work__ul').addEventListener('click', chengeTab);

function chengeTab(e) {
  if (e.target.className == 'tab-h'){
      let dataTab = (e.target.getAttribute('data-tab'));
      let tabHead = document.querySelectorAll('.tab-h');

      for (let i = 0; i < tabHead.length; i++) {
        tabHead[i].classList.remove('active');
      }

      e.target.classList.add('active');

      let tabBody = document.querySelectorAll('.tab-b');

      for (let i = 0; i < tabBody.length; i++){
          if (dataTab == i) {
            tabBody[i].style.display = "flex";
          } else {
            tabBody[i].style.display = "none";
          }
      }
  }
}
