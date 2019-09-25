function numREp(minum){
var arreglo=[1,2,3,2,4,5,3,7,4,1,3,8,5,9,0]
var crep=0;
for(i =0; i < arreglo.length-1; i++){
if(minum == arreglo[i]){
    crep++;
}
}
console.log("Tu numero se repite " + crep +" veces");
}
numREp(3);








