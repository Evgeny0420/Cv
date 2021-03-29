'use strict';

(function () {
  var body = document.querySelector('.page-body');
  var navButton = document.querySelector('.navigation__burger');
  var menu = document.querySelector('.navigation__list');
  var navLink = document.querySelectorAll('.navigation__item');

  navButton.classList.remove('navigation__burger--nojs');
  menu.classList.remove('navigation__list--nojs');

  var closeMenu = function () {
    menu.classList.add('navigation__list--close');
    body.classList.remove('page-body--open-menu');
  };

  var openMenu = function () {
    menu.classList.remove('navigation__list--close');
    body.classList.add('page-body--open-menu');
  };

  navButton.addEventListener('click', function () {
    if (menu.classList.contains('navigation__list--close')) {
      openMenu();
    } else {
      closeMenu();
    }
  });

  for (var i = 0; i < navLink.length; i++) {
    navLink[i].addEventListener('click', function () {
      closeMenu();
    });
  }
})();
