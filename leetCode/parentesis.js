var isValid = function(s) {
    const regex = /[()][(][)]/g  ;

    if(s.match(regex)){
        return true
    }
    else{
        return false;
    }
};

console.log(isValid("([])"))