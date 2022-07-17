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
