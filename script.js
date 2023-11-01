// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

// Tasks 1.*
const mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
mainEl.classList.add('flex-ctr');

// tasks 2.*
const topMenuEl = document.querySelector("#top-menu");
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

// tasks 3.*
menuLinks.forEach((link) => {
    let anchor = document.createElement('a');
    anchor.setAttribute('href', link.href);
    anchor.textContent = link.text;
    topMenuEl.append(anchor);
});