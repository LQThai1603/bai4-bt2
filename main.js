var a = [1,2,5,7,9,0];
var b = [-1,19];

var mina=a[0];
var maxa=a[0];

var minb=b[0];
var maxb=a[0];

for(var i=0; i<a.length; i++){
    if(a[i] < mina){
        mina = a[i]
    }
    if(a[i] > maxa){
        maxa = a[i]
    }
}
for(var i=0; i<b.length; i++){
    if(b[i] < minb){
        mina = b[i]
    }
    if(b[i] > maxb){
        maxb = b[i]
    }
}


console.log("a: " + a);
console.log("b: " + b);

console.log(mina > minb && maxa < maxb)