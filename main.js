var toggle = document.getElementById('nav-toggle');
var mobileNav = document.getElementById('mobile-nav');

if (toggle && mobileNav) {
    toggle.addEventListener('click', function () {
        toggle.classList.toggle('open');
        mobileNav.classList.toggle('open');
    });

    mobileNav.querySelectorAll('a').forEach(function (a) {
        a.addEventListener('click', function () {
            toggle.classList.remove('open');
            mobileNav.classList.remove('open');
        });
    });

    document.addEventListener('click', function (e) {
        if (!toggle.contains(e.target) && !mobileNav.contains(e.target)) {
            toggle.classList.remove('open');
            mobileNav.classList.remove('open');
        }
    });
}
