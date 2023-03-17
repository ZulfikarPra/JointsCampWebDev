function passwordValidator(password) {
    const isWhiteSpace = /^(?=.*\s)/
    if(isWhiteSpace.test(password)){
        throw new Error('Password must not contain whitespace')
    }
    const isUpperCase = /^(?=.*[A-Z])/
    if(!isUpperCase.test(password)){
        throw new Error('Password must contain at least one uppercase letter')
    }
    const isLowerCase = /^(?=.*[a-z])/
    if(!isLowerCase.test(password)){
        throw new Error('Password must contain at least one lowercase letter')
    }
    const isNumber = /^(?=.*[0-9])/
    if(!isNumber.test(password)){
        throw new Error('Password must contain at least one number')
    }
    const isSpecialCharacter = /^(?=.*[!@#$%^&*])/
    if(!isSpecialCharacter.test(password)){
        throw new Error('Password must contain at least one special character')
    }
    if(password.length < 8){
        throw new Error('Password must be at least 8 characters')
    }
}

module.exports = passwordValidator