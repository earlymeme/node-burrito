var burrito = require('burrito');

var util = require('util');
var dir = function (obj) {
    console.log(util.inspect(obj, null, 10));
};

var src = burrito('f() && g(h())\nfoo()', function (node) {
//console.dir(node);
    if (node.name === 'call') node.wrap('qqq(%s)');
});

console.log(src);