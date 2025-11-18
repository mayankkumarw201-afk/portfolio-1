const themeBtn = document.querySelector('.call-btn');

const themeIcon = themeBtn.querySelector('i');

themeBtn.addEventListener('click', function(e) {
    e.preventDefault();
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
    
        themeIcon.classList.remove('bi-brilliance');
        themeIcon.classList.add('bi-moon-stars-fill');
    } else {
        themeIcon.classList.remove('bi-moon-stars-fill');
        themeIcon.classList.add('bi-brilliance');
    }
});