/**
 * Created by Jovanny on 9/7/2015.
 */

//global scope
var foo = "bar";

// bar scope
function bar() {
    var foo = "test";
}

function test(foo) {
    foo = "bam";
    bam = "yay"; //go to global scope and create the variable. this variable is undeclared

    //an undeclared variable means; we are unable to find a proper LHS reference for it in any of the scopes that we have access to.
    //undefined means; he was declared but it has a 'special' empty value. (the value is absent)
}
