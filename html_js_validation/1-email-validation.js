//validate email format
function validateEmail(email){
   const  regex  = /^[^\s@]+@[^\s@]=\.[^\s@]+$/
   return regex.test(email)
}
//handling submission
function handleSubmit(event){
    event.preventDefault()//to prevent default form submission behaviour
    const emailInput = document.getElementById('email').Value
    const errorElement = document.getElementById('error')

    if(!validateEmail(emailInput)){
        errorElement.textContent='Please enter a valid email address.'
    }
    else{
        errorElement.textContent='' // no error if email address is valid
        console.log('email is valid:', emailInput)
    }
}
//event listener to the form submission
document.getElementById('emailForm')
