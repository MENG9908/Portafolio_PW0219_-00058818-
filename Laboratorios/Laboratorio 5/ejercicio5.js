function palindrome(palabra){
    var isPalindrome = true;
    var original = palabra.split("");
    //console.log(original);
    var invertido = palabra.split("").reverse();

    for(var i =0; i<original.legth; i++){
if (invertido[i] != original[i]) {
    console.log("NO es palindrome");
    isPAlindrome = false;
    break;
}
}
if (isPalindrome == true) {
    console.log("Es palindrome");
}
    

}
palindrome("ana")