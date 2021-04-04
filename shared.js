var backdrop = document.querySelector('.backdrop');
var selectPlanButtons = document.querySelectorAll('.plan button');
var modal = document.querySelector('.modal');
var modalNoButton = document.querySelector('.modal__action--negative');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');


// console.dir(backdrop);

for (var i = 0 ; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.classList.add('open');
        backdrop.classList.add('open')
        
    });
}

backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open')
    mobileNav.style.display = 'none';
    closeModal();
});

if (modalNoButton) {
    modalNoButton.addEventListener('click',closeModal);
}

function closeModal() {
    backdrop.classList.remove('open');
    if (modal) {
    modal.classList.remove('open');
    };
    
}

toggleButton.addEventListener('click', function() {
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
    
    
})
