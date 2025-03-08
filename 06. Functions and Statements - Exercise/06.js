function passwordValidator(password) {
    let isValid = true;
    let errors = [];

    if (password.length < 6 || password.length > 10) {
        errors.push("Password must be between 6 and 10 characters");
        isValid = false;
      }
    
      // Check for letters and digits only
      const alphaNumericRegex = /^[a-zA-Z0-9]+$/;
      if (!alphaNumericRegex.test(password)) {
        errors.push("Password must consist only of letters and digits");
        isValid = false;
      }
    
      // Check for at least 2 digits
      const digitRegex = /.*[0-9].*[0-9].*/;
      if (!digitRegex.test(password)) {
        errors.push("Password must have at least 2 digits");
        isValid = false;
      }
    
      // Output
      if (isValid) {
        console.log("Password is valid");
      } else {
        errors.forEach(error => console.log(error));
      }
}


passwordValidator('logIn');
passwordValidator('MyPass123');
passwordValidator('Pa$s$s');