function getPasswordChecker(password) {
   return function check(enteredPassword) {
      return password === enteredPassword;
   }
}

c = getPasswordChecker("1234");
console.log(c("1234"));
console.log(c("1235"));