var globalVariable = "Welcome"
function outer() {
    alert(globalVariable);
    var cours = "Holberton";
    function inner() {
        alert(globalVariable + cours);
        var exclamation = '!';
        function inception (){
            alert(globalVariable + cours + exclamation);
        }
        inception();
      }
}
outer();
