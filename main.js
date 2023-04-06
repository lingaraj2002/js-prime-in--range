let a= prompt("enter the starting value");
let b= prompt("enter the ending value");

for(j=a;j<=b;j++){
    c=0;
    for(i=2;i<j;i++){
        if(j%i==0){
            c=1;
        }
    }
    if(c==0 && j>1 ){
        document.write(j);
    }   
}