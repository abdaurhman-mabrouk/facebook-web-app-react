//Global Variables and Constants
const userMenuLink = document.getElementById('userImageLink');
const userMenuDiv = document.getElementById('userMenuDiv');
const notificationsLink = document.getElementById('notificationsImageLink');
const notificationsDiv = document.getElementById('notificationsDiv');
const messagesLink = document.getElementById('messagesImageLink');
const messagesDiv = document.getElementById('messagesDiv');

const navBarHomeLink = document.getElementById('navBarHomeLink');
const navBarWatchLink = document.getElementById('navBarWatchLink');
const navBarMarketLink = document.getElementById('navBarMarketLink');
const navBarGroupsLink = document.getElementById('navBarGroupsLink');
const navBarGamingLink = document.getElementById('navBarGamingLink');

/*==============================
=            NAVBAR LEFT LINKS            =
==============================*/

//User Menu Div
function toggleUserMenuDiv() {
  if (userMenuDiv.style.display == 'none') {
    userMenuDiv.style.display = 'block';
    notificationsDiv.style.display = 'none';
    messagesDiv.style.display = 'none';
  } else {
    userMenuDiv.style.display = 'none';
  }
}

userMenuLink.onclick = () => {
  toggleUserMenuDiv();
};

//Notifications Div
function toggleNotificationsDiv() {
  if (notificationsDiv.style.display == 'none') {
    notificationsDiv.style.display = 'block';
    userMenuDiv.style.display = 'none';
    messagesDiv.style.display = 'none';
  } else {
    notificationsDiv.style.display = 'none';
  }
}

notificationsLink.onclick = () => {
  toggleNotificationsDiv();
};

//Messages Div
function toggleMessagesDiv() {
  if (messagesDiv.style.display == 'none') {
    messagesDiv.style.display = 'block';
    userMenuDiv.style.display = 'none';
    notificationsDiv.style.display = 'none';
  } else {
    messagesDiv.style.display = 'none';
  }
}

messagesLink.onclick = () => {
  toggleMessagesDiv();
};

/*==============================
=            NAVBAR CENTER LINKS              =
==============================*/
function toggleHomePage() {
  document.title = 'Home | Facebook';
  document.querySelector('body main#home').style.display = '';
  document.querySelector('body main#watch').style.display = 'none';
  document.querySelector('body main#market').style.display = 'none';
  document.querySelector('body main#groups').style.display = 'none';
  document.querySelector('body main#gaming').style.display = 'none';
}
navBarHomeLink.onclick = () => {
  toggleHomePage();
};

function toggleWatchPage() {
  document.title = 'Watch | Facebook';
  document.querySelector('body main#watch').style.display = '';
  document.querySelector('body main#home').style.display = 'none';
  document.querySelector('body main#market').style.display = 'none';
  document.querySelector('body main#groups').style.display = 'none';
  document.querySelector('body main#gaming').style.display = 'none';
}
navBarWatchLink.onclick = () => {
  toggleWatchPage();
};

function toggleMarketPage() {
  document.title = 'Market | Facebook';
  document.querySelector('body main#market').style.display = 'block';
  document.querySelector('body main#home').style.display = 'none';
  document.querySelector('body main#watch').style.display = 'none';
  document.querySelector('body main#groups').style.display = 'none';
  document.querySelector('body main#gaming').style.display = 'none';
}
navBarMarketLink.onclick = () => {
  toggleMarketPage();
};

function toggleGroupsPage() {
  document.title = 'Groups | Facebook';
  document.querySelector('body main#groups').style.display = 'block';
  document.querySelector('body main#home').style.display = 'none';
  document.querySelector('body main#watch').style.display = 'none';
  document.querySelector('body main#market').style.display = 'none';
  document.querySelector('body main#gaming').style.display = 'none';
}
navBarGroupsLink.onclick = () => {
  toggleGroupsPage();
};

function toggleGamingPage() {
  document.title = 'Gaming | Facebook';
  document.querySelector('body main#gaming').style.display = 'block';
  document.querySelector('body main#home').style.display = 'none';
  document.querySelector('body main#watch').style.display = 'none';
  document.querySelector('body main#market').style.display = 'none';
  document.querySelector('body main#groups').style.display = 'none';
}
navBarGamingLink.onclick = () => {
  toggleGamingPage();
};

/*==============================
=     NAVBAR RIGHT LINKS       =
==============================*/
