//菱形
let i,j,k,l;

for(i = 1; i <= 6; i++){
    let ling = "";
    for(j = 0; j <= 5 - i; j++){    
        ling = ling + " ";
    } 
    for(k = 1; k <= 2 * i - 1; k++){
        ling = ling + "*";
    }
    console.log(ling); 
}

for(i=1;i<=5;i++){
    let ling = "";
    for(j=1;j<=i;j++){
        ling = ling + " ";
    }
    for(l=1;l<=11-2*i;l++){
        ling = ling + "*";
    }
    console.log(ling);
}









