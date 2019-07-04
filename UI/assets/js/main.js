// show and hide signModal
// let signInBtn = document.querySelector('my-header').shadowRoot.querySelector('.signin')
// let signUpBtn = document.querySelector('my-header').shadowRoot.querySelector('.signup')
let signModal = document.querySelector('.sign-modal');
let pageWrap = document.querySelector('.page-wrap');
let closeBtn = document.querySelector('.close-btn');

// show modal with sign in
// signUpBtn.addEventListener('click', () => {
//     signModal.classList.add('show');
//     signModal.classList.remove('hide');
//     pageWrap.classList.add('blur');
//     innerContainer.classList.add('sign-up');
//     innerContainer.classList.remove('sign-in');

// });

// show modal with sign up
// signInBtn.addEventListener('click', () => {
//     signModal.classList.add('show');
//     signModal.classList.remove('hide');
//     pageWrap.classList.add('blur');
//     innerContainer.classList.add('sign-in');
//     innerContainer.classList.remove('sign-up');
// });

// close modal
// closeBtn.addEventListener('click', () => {
//     signModal.classList.add('hide');
//     signModal.classList.remove('show');
//     pageWrap.classList.remove('blur');
// });

// show ad hide the header
window.addEventListener('scroll', () => {
    if (document.body.scrollTop > 350 || document.documentElement.scrollTop > 350) {
        document.querySelector("my-header").classList.add('scrolled');
        document.querySelector("my-header").classList.remove('rise');
    } else {
        document.querySelector("my-header").classList.remove('scrolled');
        document.querySelector("my-header").classList.add('rise');
    }
});

// signModal.addEventListener('click', (evt) => {
//     // if only the signModal itself is clicked (outer space)
//     if (evt.target === signModal ) {
//         signModal.classList.remove('show');
//         signModal.classList.add('hide');
//         pageWrap.classList.remove('blur');
//         innerContainer.classList.remove('left');
//         innerContainer.classList.add('right');
//     }
// });

// let logInButton = document.getElementById("login-button");
// logInButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     window.location.href = 'user_account.html'
// });
// let signUpButton = document.getElementById("signup-button");
// signUpButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     window.location.href = 'user_account.html'
// });

// // Animated signup form
// let showSignIn = document.querySelector('.show-signin');
// let showLogIn = document.querySelector('.show-login');
// let innerContainer = document.querySelector('.form-inner-container');

// showSignIn.addEventListener('click', () => {
//     innerContainer.classList.add('left');
//     innerContainer.classList.remove('right');
// });

// showLogIn.addEventListener('click', () => {
//     innerContainer.classList.add('right');
//     innerContainer.classList.remove('left');
// });
