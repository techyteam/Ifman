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
//     innercontainer1.classList.add('sign-up');
//     innercontainer1.classList.remove('sign-in');

// });

// show modal with sign up
// signInBtn.addEventListener('click', () => {
//     signModal.classList.add('show');
//     signModal.classList.remove('hide');
//     pageWrap.classList.add('blur');
//     innercontainer1.classList.add('sign-in');
//     innercontainer1.classList.remove('sign-up');
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

var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
  // This function will display the specified tab of the form...
  var x = document.getElementsByClassName("tab");
  x[n].style.display = "block";
  //... and fix the Previous/Next buttons:
  if (n == 0) {
    document.getElementById("prevBtn").style.display = "none";
  } else {
    document.getElementById("prevBtn").style.display = "inline";
  }
  if (n == (x.length - 1)) {
    document.getElementById("nextBtn").innerHTML = "Submit";
  } else {
    document.getElementById("nextBtn").innerHTML = "Next";
  }
  //... and run a function that will display the correct step indicator:
  fixStepIndicator(n)
}

function nextPrev(n) {
  // This function will figure out which tab to display
  var x = document.getElementsByClassName("tab");
  // Exit the function if any field in the current tab is invalid:
  if (n == 1 && !validateForm()) return false;
  // Hide the current tab:
  x[currentTab].style.display = "none";
  // Increase or decrease the current tab by 1:
  currentTab = currentTab + n;
  // if you have reached the end of the form...
  if (currentTab >= x.length) {
    // ... the form gets submitted:
    document.getElementById("regForm").submit();
    return false;
  }
  // Otherwise, display the correct tab:
  showTab(currentTab);
}

function validateForm() {
  // This function deals with validation of the form fields
  var x, y, i, valid = true;
  x = document.getElementsByClassName("tab");
  y = x[currentTab].getElementsByTagName("input");
  // A loop that checks every input field in the current tab:
  for (i = 0; i < y.length; i++) {
    // If a field is empty...
    if (y[i].value == "") {
      // add an "invalid" class to the field:
      y[i].className += " invalid";
      // and set the current valid status to false
      valid = false;
    }
  }
  // If the valid status is true, mark the step as finished and valid:
  if (valid) {
    document.getElementsByClassName("step")[currentTab].className += " finish";
  }
  return valid; // return the valid status
}

function fixStepIndicator(n) {
  // This function removes the "active" class of all steps...
  var i, x = document.getElementsByClassName("step");
  for (i = 0; i < x.length; i++) {
    x[i].className = x[i].className.replace(" active", "");
  }
  //... and adds the "active" class on the current step:
  x[n].className += " active";
}

// signModal.addEventListener('click', (evt) => {
//     // if only the signModal itself is clicked (outer space)
//     if (evt.target === signModal ) {
//         signModal.classList.remove('show');
//         signModal.classList.add('hide');
//         pageWrap.classList.remove('blur');
//         innercontainer1.classList.remove('left');
//         innercontainer1.classList.add('right');
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
// let innercontainer1 = document.querySelector('.form-inner-container1');

// showSignIn.addEventListener('click', () => {
//     innercontainer1.classList.add('left');
//     innercontainer1.classList.remove('right');
// });

// showLogIn.addEventListener('click', () => {
//     innercontainer1.classList.add('right');
//     innercontainer1.classList.remove('left');
// });

      /**Client Side JS */
    //   const pages = document.querySelectorAll('.app > main');
    //   //Hide Other pages on load
    //   window.addEventListener('DOMContentLoaded', () => {
    //       pages.forEach((item, index, arr) => {
    //           if(index > 0){
    //               item.classList.add('hide');
    //           }
    //       })
    //   })

      // const newText = getText.textareaObject.value;

    //   const inputs = document.querySelectorAll('.form-row > input')
    //   const validateFields = () => {
    //       for(let i=0; i < 3; i++){
    //           if(validateField(inputs[i]) === false){
    //               return false;
    //           }
    //       }
    //       return true;
    //   }
    //   const validateField = (input) => {
    //       if(input.value === "" || input.value.length < 10){
    //           input.classList.toggle('invalid')
    //           setTimeout(() => {
    //               input.classList.toggle('invalid')
    //               return false
    //           }, 500)
    //       }else{
    //           return true
    //       }
    //   }


    //   //Populate Summary View
    //   const populateSummaryPage = () => {
    //       const selects = document.querySelector('.select-row');
    //       const selected = selects.options[selects.options.selectedIndex].value;
    //       // const getText = document.querySelector('.text-row').value;
    //       const summaryData = document.querySelectorAll('.summary-box > p:last-of-type')
    //       summaryData.forEach((item, index, arr) => {
    //           if(index === 0) {item.innerHTML = inputs[0].value}
    //           if(index === 1) {item.innerHTML = inputs[1].value}
    //           if(index === 2) {item.innerHTML = inputs[2].value}
    //           if(index === 3) {item.innerHTML = selected}
    //           // if(index === 4) {item.innerHTML = getText}
    //       })
    //       //  {item.innerHTML = selected}
          
    //   }


    //   //Navigation
    //   const navigate = (currentPage, nextPage) => {
    //       currentPage.classList.toggle('hide')
    //       nextPage.classList.toggle('hide')
    //   }

    //   const actionButtons = document.querySelectorAll('#next')
    //   actionButtons.forEach((item, index, arr) => {
    //       item.addEventListener('click', () => {
    //           if(index === 0){
    //               navigate(pages[0], pages[1])
    //           }
    //           if(index === 1){
    //               if(validateFields()){
    //                   populateSummaryPage();
    //                   navigate(pages[1], pages[2], pages[3], pages[4])
    //               }
    //           }else{
    //               navigate(pages[1], pages[2], pages[3], pages[4])
    //           }
    //       })
    //   })

    //   const back = document.querySelector('.back')
    //   back.addEventListener('click', () => {
    //       navigate(pages[2], pages[1])
    //   })

/**Client Side JS */