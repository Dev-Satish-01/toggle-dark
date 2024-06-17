document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.getElementById('toggle');
    const body = document.querySelector('body');
    toggle.addEventListener('click', function() {
        toggle.classList.toggle('active');
        body.classList.toggle('active');
    });
    
});

