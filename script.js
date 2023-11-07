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

// Task 4.0
const subMenuEl = document.querySelector('#sub-menu');
// Task 4.1
subMenuEl.style.height = '100%';
// Task 4.2
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';
// Task 4.3
subMenuEl.classList.add('flex-around');
// Task 4.4
subMenuEl.style.position = 'absolute';
// Task 4.5
subMenuEl.style.top = '0';

// Task 5.1
const topMenuLinks = topMenuEl.children;
let showingSubMenu = false;
// Task 5.2
topMenuEl.addEventListener('click', (event) => {
  event.preventDefault();
  if (!event.target.matches('a')) return;
  console.log(event.target.textContent);

  // Task 5.3
  if (event.target.classList.contains('active')) {
    event.target.classList.remove('active');
    showingSubMenu = false;
    subMenuEl.style.top = '0';
    return;
  }
  // Task 5.4
  for (anchor of topMenuLinks) {
    anchor.classList.remove('active');
  }
  // Task 5.5
  event.target.classList.add('active');
  
  // 5.6
  if (event.target.text !== 'about') {
    showingSubMenu = true;
  } else {
    showingSubMenu = false;
  }

  // 5.7
  if (showingSubMenu === true) {
      menuLinks.forEach((link) =>{
        if (link.subLinks && link.text === event.target.innerHTML) {
          buildSubMenu(link.subLinks);
          subMenuEl.style.top = '100%';
        }
      });
  } else subMenuEl.style.top = '0';


});

// 5.8
function buildSubMenu(sublinks) {
  subMenuEl.innerHTML = '';
  sublinks.forEach((sublink) => {
    let aElement = document.createElement('a');
    aElement.setAttribute('href', sublink.href);
    aElement.innerHTML = sublink.text;
    subMenuEl.append(aElement);
  });
}

// 6.0
subMenuEl.onclick = (event) => {
  event.preventDefault();
  if (!event.target.matches('a')) return;
  console.log(event.target.innerHTML);

  // 6.1
  showingSubMenu = false;
  subMenuEl.style.top = '0';

  // 6.2
  for (anchor of topMenuLinks) {
    anchor.classList.remove('active');
  };

  // 6.3
  document.querySelector('h1').innerHTML = event.target.textContent;
};

// 6.4
topMenuEl.onclick = (event) => {
  if (event.target.innerHTML === 'about') {
    document.querySelector('h1').innerHTML = event.target.textContent;
  }
};
