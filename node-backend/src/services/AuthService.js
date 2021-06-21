const jwt = require('jsonwebtoken');

const SIGNATURE_KEY = 'HelloFromTheOtherSide.IMustHaveCalledAThousandTimes.ToTellYouIAmSorry.ForEverythingThatIHaveDone';


const signup = (username, password) => {
    // sign up steps
}


const signin = (username, password) => {
    // sign in steps
}


const verify = (token) => {
    // verify token here   
}


export { signup, signin, verify };