function sumYpRom(num){
    var sum=0;
    var prom=0;
    for(i=0; i< num.length; i++){
        sum += num[i];
        
    }
    prom = sum/num.length
    console.log(sum);
    console.log(prom);

}

var num = [1,2,3];
sumYpRom(num);