/*$(document).ready(function(){
   var link = $('.link-menu');
   var menu = $('.menu');
   var navLink = $('.menu-link');
  link.click(function(){
   link.toggleClass('link-menu_active');
   menu.toggleClass('menu_active');
   
  });
  navLink.click(function(){
    link.toggleClass('link-menu_active');
    menu.toggleClass('menu_active');
  });
});
*/

window.addEventListener('DOMContentLoaded', () =>{
  const header = document.querySelector('.header');
  let headerContent = document.createElement('div');
  headerContent.classList.add('header-content');
  headerContent.innerHTML = `
   <a href="#" class="header-logo"></a>
          <nav class="nav-menu">
              <ul class="heder-list">
            <li class="header-list-item"><a href="#" class="header-list-link">Главная</a></li>
            <li class="header-list-item"><a href="#" class="header-list-link">О нас</a></li>
            <li class="header-list-item"><a href="#" class="header-list-link">Кухни</a></li>
            <li class="header-list-item"><a href="#" class="header-list-link">Столы & Cтулья</a></li>
            
            <li class="header-list-item"><a href="#" class="header-list-link">Дизайн Итерьера</a></li>
            <li class="header-list-item"><a href="#" class="header-list-link">Контакты</a></li>
            <li class="header-list-item"><a href="#" class="header-list-link">хуй</a></li>
            <li class="header-list-item"><a href="#" class="header-list-link">хуй2</a></li>
          </ul>
          </nav>
  `;
  header.appendChild(headerContent);

});
$(document).ready(function(){
  var btn = $('.products-item-btn');
  var modal = $('.modal');
  var modalBtn = $('.modal-content-btn');
 btn.click(function(){
  event.preventDefault();
 modal.addClass('modal-active');
  
 });
 modalBtn.click(function(){
  event.preventDefault();
  modal.removeClass('modal-active');
 });
 $(".slider").each(function() {

  var repeats = 5, // кількість повторювань автоматичного прокручування
  interval = 1, // інтервал в секундах
  repeat = true, // чи треба автоматично прокручувати (true/false)
  slider = $(this),
  repeatCount = 0,
  elements = $(slider).find("li").length;
 
  $(slider)
  .append("<div class='nav'></div>")
  .find("li").each(function() {
  $(slider).find(".nav").append("<span data-slide='"+$(this).index()+"'></span>");
  $(this).attr("data-slide", $(this).index());
  })
  .end()
  .find("span").first().addClass("on");
 
  // add timeout
 
  if (repeat) {
  repeat = setInterval(function() {
  if (repeatCount >= repeats - 1) {
  window.clearInterval(repeat);
  }
 
  var index = $(slider).find('.on').data("slide"),
  nextIndex = index + 1 < elements ? index + 1 : 0;
 
  sliderJS(nextIndex, slider);
 
  repeatCount += 1;
  }, interval * 3000);
  }
 
  });
  
 
 function sliderJS(index, slider) { // slide
  var ul = $(slider).find("ul"),
  bl = $(slider).find("li[data-slide=" + index + "]"),
  step = $(bl).width();
 
  $(slider)
  .find("span").removeClass("on")
  .end()
  .find("span[data-slide=" + index + "]").addClass("on");
 
  $(ul).animate({
  marginLeft: "-" + step * index
  }, 500);
 }
 
 $(document).on("click", ".slider .nav span", function(e) { // slider click navigate
  e.preventDefault();
  var slider = $(this).closest(".slider"),
  index = $(this).data("slide");
 
  sliderJS(index, slider);
 });
 var btn = $('.slider-btn');
  var submitForm = $('.slider-form');
  var formBtn = $('.slider-form-btn');
 btn.click(function(){
  event.preventDefault();
 submitForm.addClass('slider-form-active');
  
 });
 formBtn.click(function(){
  event.preventDefault();
  submitForm.removeClass('slider-form-active');
 });
});