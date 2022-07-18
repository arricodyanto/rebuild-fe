// Header Fixed
window.onscroll = function() {
    const header = document.querySelector('header');
    const settingBox = document.querySelector('#setting-box');
    const fixedTopbar = header.offsetTop;

    if(window.pageYOffset > fixedTopbar) {
        header.classList.add('header-fixed');
        settingBox.classList.remove('border-t');
    } else {
        header.classList.remove('header-fixed');
        settingBox.classList.add('border-t');
    }
}

// Topbar Setting
const settings = document.querySelector('#setting-ic');
const settingBox = document.querySelector('#setting-box');

settings.addEventListener('click', function() {
    // settings.classList.toggle('setting-active');
    settingBox.classList.remove('slide-out')
    settingBox.classList.add('slide-in')
});

document.addEventListener('click', (event) => {
    const isClickInside = settings.contains(event.target);
    if(!isClickInside) {
        // settings.classList.remove('setting-active')
        settingBox.classList.remove('slide-in')
        settingBox.classList.add('slide-out')
    }
    const box = settingBox.contains(event.target)
    if(box) {
        settingBox.classList.remove('slide-out')
        settingBox.classList.add('slide-in')
    }
})

//Topbar Avatar
const avatar = document.querySelector('#avatar-ic');
const avatarBox = document.querySelector('#avatar-box');

avatar.addEventListener('click', function() {
    avatarBox.classList.toggle('avatar-up');
    avatarBox.classList.toggle('avatar-down');
})

document.addEventListener('click', (event) => {
    const isClickInside = avatar.contains(event.target);
    if(!isClickInside) {
        // settings.classList.remove('setting-active')
        avatarBox.classList.remove('avatar-down')
        avatarBox.classList.add('avatar-up')
    }
    const box = avatarBox.contains(event.target)
    if(box) {
        avatarBox.classList.remove('avatar-up')
        avatarBox.classList.add('avatar-down')
    }
})

//Topbar Notification
const notification = document.querySelector('#notification-ic');
const notifBox = document.querySelector('#notification-box');

notification.addEventListener('click', function() {
    notifBox.classList.toggle('notif-up');
    notifBox.classList.toggle('notif-down');
})

document.addEventListener('click', (event) => {
    const isClickInside = notification.contains(event.target);
    if(!isClickInside) {
        // settings.classList.remove('setting-active')
        notifBox.classList.remove('notif-down')
        notifBox.classList.add('notif-up')
    }
    const box = notifBox.contains(event.target)
    if(box) {
        notifBox.classList.remove('notif-up')
        notifBox.classList.add('notif-down')
    }
})

//Topbar Search
const search = document.querySelector('#search-ic');
const searchBox = document.querySelector('#search-box');

search.addEventListener('click', function() {
    searchBox.classList.toggle('search-up');
    searchBox.classList.toggle('search-down');
})

document.addEventListener('click', (event) => {
    const isClickInside = search.contains(event.target);
    if(!isClickInside) {
        // settings.classList.remove('setting-active')
        searchBox.classList.remove('search-down')
        searchBox.classList.add('search-up')
    }
    const box = searchBox.contains(event.target)
    if(box) {
        searchBox.classList.remove('search-up')
        searchBox.classList.add('search-down')
    }
})

// Hamburger
const hamburger = document.querySelector('#hamburger-ic');
const hamburgerMenu = document.querySelector('#hamburger-menu');

hamburger.addEventListener('click', function() {
    // settings.classList.toggle('setting-active');
    hamburgerMenu.classList.toggle('slide-out')
    hamburgerMenu.classList.toggle('hamburger-in')
});

document.addEventListener('click', (event) => {
    const isClickInside = hamburger.contains(event.target);
    if(!isClickInside) {
        // settings.classList.remove('setting-active')
        hamburgerMenu.classList.remove('hamburger-in')
        hamburgerMenu.classList.add('slide-out')
    }
    const box = hamburgerMenu.contains(event.target)
    if(box) {
        hamburgerMenu.classList.remove('slide-out')
        hamburgerMenu.classList.add('hamburger-in')
    }
})

const collapse = document.getElementsByClassName('collapse');
var i;

for (i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener('click', function() {
    this.classList.toggle('active');
    this.classList.toggle('collapse-active');
    const content = this.nextElementSibling;
    content.classList.toggle('menu-up');
    content.classList.toggle('menu-down');
  });
}


// Warning Alert
const modal = document.getElementsByClassName('modal');

for(i=0; i<modal.length; i++) {
    modal[i].addEventListener('click', function() {
        const content = this.parentElement;
        content.classList.toggle('hidden')
    })
}
    