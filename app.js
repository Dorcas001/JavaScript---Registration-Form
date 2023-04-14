const form = document.getElementById('form');
const userName = document.getElementById('username');
const emailInput = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
 form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();

 });

 function validateInputs() {
   // gets values from inputs  
    const userValue = userName.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue= password.value.trim();
    const password2Value= password2.value.trim();
    if(userValue === ""){
      // show error
      // add error class
      // create a function for error
      setErrorFor(userName, 'username cannot be blank');  

    } else{
      // show success
      // setSuccessFor(username)
      setSuccessFor(userName )
    }
    if (emailValue === ''){
      // if email is empty create error
      setErrorFor(emailInput, 'Email cannot be blank');
      // validating email
    } else if(!isEmail(emailValue)) {
      setErrorFor(emailInput, 'email is not valid');
      // setSuccess for email
    } else {
      setSuccessFor(emailInput);
    }
    if(passwordValue === '') {
      setErrorFor(password, 'password cannot be empty' );

    } else if( passwordValue.length < 8) {
      setErrorFor(password, 'password must be aleast 8 characters' );
    } else {
      setSuccessFor(password);
    }
    if(password2Value === '') {
      setErrorFor(password2, 'password cannot be empty' )
    
    } else if(password2Value !== passwordValue){
      setErrorFor(password2, 'passwords does not match' )
    } else {
      setSuccessFor(password2);
    }
   //  to show a success message
 }
function setErrorFor(input, message){
   const inputControl = input.parentElement; // form control
   const errorDisplay = inputControl.querySelector('.error')
   // add error inside div 
   errorDisplay.innerText = message
   // add error class
   inputControl.classList.add('error');
   inputControl.classList.remove('success');
}
//  setSuccessFor()
   function setSuccessFor(input){
      const inputSuccess = input.parentElement //form control
      const errorDisplay = inputSuccess.querySelector('.error')

      // to remove errorDisplay
      errorDisplay.innerText = '';
      // after adding username, displays success
      inputSuccess.classList.add('success');
      inputSuccess.classList.remove('error');
   }
   // validating email
function isEmail(email) {
   return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email); // syntax for email validation called regex exr/regular expressions
}