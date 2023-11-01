// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '#', subLinks: [
    {text: 'all', href: '/catalog/all'},
    {text: 'top selling', href: '/catalog/top'},
    {text: 'search', href: '/catalog/search'},
  ]},
  {text: 'orders', href: '#' , subLinks: [
    {text: 'new', href: '/orders/new'},
    {text: 'pending', href: '/orders/pending'},
    {text: 'history', href: '/orders/history'},
  ]},
  {text: 'account', href: '#', subLinks: [
    {text: 'profile', href: '/account/profile'},
    {text: 'sign out', href: '/account/signout'},
  ]},
];

// Select main element
const mainEl = document.querySelector('main');
// Change its color
mainEl.style.backgroundColor = 'var(--main-bg)';
// Add h1 element to main
mainEl.innerHTML = '<h1>SEI Rocks!</h1>';
// Add an existing class to main element
mainEl.classList.add('flex-ctr');

// Select element with id = "top-menu"
const topMenuEl = document.querySelector("#top-menu");
// Set height
topMenuEl.style.height = '100%';
// Change its color
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
// Add an existing class to element 
topMenuEl.classList.add('flex-around');

// Iterate over 'menuLinks' array
menuLinks.forEach((link) => {
  // For each element:
  // create an anchor element
  let anchor = document.createElement('a');
  // Set href attribute with its corresponding url
  anchor.setAttribute('href', link.href);
  // Place text into the element 
  anchor.textContent = link.text;
  // Append element to the DOM
  topMenuEl.append(anchor);
});

// Task 4.*
const subMenuEl = document.querySelector('#sub-menu');
subMenuEl.style.height = '100%';
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
subMenuEl.classList.add('flex-around');
subMenuEl.style.position = 'absolute';
subMenuEl.style.top = '0';

// Task 5.*
const topMenuLinks = topMenuEl.children;
const showingSubMenu = false;
topMenuEl.addEventListener('click', (event) => {
  event.preventDefault();
  if (!event.target.matches('a')) return;
  console.log(event.target.textContent);
  if (event.target.classList.contains('active')) {
    event.target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }
  for (anchor of topMenuLinks) {
    anchor.classList.remove('active');
  }
  event.target.classList.add('active');  
});
