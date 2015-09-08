/**
 * Created by Jovanny on 9/8/2015.
 */

//global scope
var foo = "bar";

function bar() {
    var foo = "baz"; //a local LHS reference

    function baz(foo) {
        foo = "bam";
        bam  = "yay";
    }
    //a RHS in the scope of bar
    baz();
}

bar(); //this is a RHS reference
foo; //bar (RHS reference)
bam; //yay
baz(); //RHS reference (reference error!)
