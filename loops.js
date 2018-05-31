function forLoop(array){
  
  for (let i = 0; i < 25; i++){
    
   
      
   array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`);
      
    
   
    
  }
   return array;
}





function whileLoop(x){
while (x > 0) {
  console.log(--x);
}
return "done";
}


function doWhileLoop(array) {
  
  return Math.random() >= 0.5;
  
}
  
  do{
    
    array.pop();
    
  }while (array.length > -1 && maybeTrue());
  
  return array;


  
