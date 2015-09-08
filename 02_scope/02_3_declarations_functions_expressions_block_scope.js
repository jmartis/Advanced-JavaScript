/**
 * Created by Jovanny on 9/8/2015.
 */

// a name function expression
var foo = function bar() {
    var foo =  "baz";

    function baz(foo) {
        foo = bar;
        foo; // function...
    }
}

foo();
bar(); // Error!

var bam;

try {
    bam.length;
}
catch (err) {
    console.log(err); // TypeError
}

console.log(err); // ReferenceError