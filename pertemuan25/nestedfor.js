var s = '';
for(i=0; i<=5; i++){
    // s+='*' sama saja dengan s=s+'*'
    for(var j=5; j>i; j--){
        s += '*';
    }
    s += '\n';
}
console.log(s);

/*
dari bintang 1ke 5
var s = '';
for(i=0; i<=5; i++){
    for(var j=0; j<i; j++){
        s += '*';
    }
    s += '\n';
}
console.log(s); */