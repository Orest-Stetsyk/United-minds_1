// плавний перехід по якірним посиланням
document.addEventListener('DOMContentLoaded', function () {
  const links = document.querySelectorAll('nav a');

  links.forEach(link => {
    link.addEventListener('click', smoothScroll);
  });

  function smoothScroll(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }

    
    // перехід з мобільного меня та кнопка вимкнення вмикання меню
    
    const closeButton = document.getElementById('closeButton');
    const menuLinks = document.querySelectorAll('.link-mobile-menu-header');
    const openButton = document.getElementById('openButton');

  closeButton.addEventListener('click', function () {
    toggleMenu();
  });

     openButton.addEventListener('click', function () {
    toggleMenu();
  });
    
  menuLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      toggleMenu();
    });
  });

  function toggleMenu() {
    const mobileMenuWrapper = document.querySelector('.mobile-menu-wrapper');
    mobileMenuWrapper.classList.toggle('is-open');
  }
})