function Validation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/

    /* user name validation */
    if(values.name === ""){
        error.name = "Enter userName"
    }
    else {
        error.name= " "
    }

    /* email validation */
    if(values.email === ""){
        error.email = "Enter valid email"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "E-Mail didn't match"
    }
    else {
        error.email= " "
    }

    /* password validation */
    if(values.password === ""){
        error.password = "Enter valid password Eg: testABC123"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Password didn't match"
    }
    else {
        error.password= " "
    }
    return error;
}
export default Validation;