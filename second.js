// Toatl Sales
let totalsale=0;
for(let i=0;i<arr.length;i++){
    totalsale  +=arr[i].totalPrice;
}
let btn1=document.getElementById("totalsale");
btn1.addEventListener('click',()=>{
    document.getElementById("tp").innerHTML=`Total sale is <b>${totalsale }</b>`;
});

// Month Wise Sales
function myFunction() {
    let b=0;
    let c=0;
    let x = document.getElementById("myMonth").value.slice(5,7);
    for(let i=0;i<arr.length;i++){
        b=arr[i].date.slice(5,7);
        if(b==x)
            c +=arr[i].totalPrice;
    }
    document.getElementById("ms").innerHTML=`Total sale in this month is <b>${c}</b>`;
  }

  // Most popular item in month and quantity ,min, max, avg order
  let countquantity1=0;
  let countquantity2=0;
  let mostpopitm=0;
  let unitprice=0;
  let count=0;
  let mn=Infinity;
  let mx=0;
  
function myFunction1() {
    mostpopitm="data not available";
    countquantity2=0;
    count=0;
    mn=Infinity;
    mx=0;
    let x = document.getElementById("myMonth1").value.slice(5,7);
    
     for(let i=0;i<arr1.length;i++){
        q=arr1[i];
        countquantity1=0;
        for(let p=0;p<arr.length;p++){
            mostpop(p,x);
            mostpop1(p,x);   
        }
      }

      document.getElementById("ms1").innerHTML=`The most popular item this month is <b>${mostpopitm}</b> and quantity is <b>${countquantity2}</b> and this item generating most revenue is <b>${countquantity2*unitprice}</b>`; 
      
      for(let j=0;j<arr.length;j++){
        if(x===arr[j].date.slice(5,7)){
          if(mostpopitm==arr[j].sku){
            count++;
          }
        }
      }

      document.getElementById("ms2").innerHTML=`The most popular item in this month is <b>${mostpopitm}</b> the min order is <b>${mn}</b>,the max order is <b>${mx}</b> & average order is <b>${countquantity2/count}</b>`    
}

  
function mostpop1(p,x){
    let max;
    let min;
    if(x===arr[p].date.slice(5,7)){
          if(mostpopitm===arr[p].sku){
            min=arr[p].quantity;
            max=arr[p].quantity;
          }
          if( min<mn){
             mn=min;
          } 
          if( max>mx){
             mx=max;
          }
    }
}

function mostpop(p,x){
    if(x===arr[p].date.slice(5,7)){
          if(q===arr[p].sku){
            countquantity1 +=arr[p].quantity;
          }
          if( countquantity1>countquantity2){
            countquantity2=countquantity1;
            mostpopitm=q;
            arr.forEach((ele)=>{if(ele.sku==mostpopitm)unitprice=ele.unitPrice})
          } 
    }
}
