document.getElementById('form-string').addEventListener('submit', getResult);

function getResult (e){
  let string = document.getElementById('string').value;
  document.getElementById('output').innerHTML = SwapII(string);
  
  e.preventDefault();
}


function SwapII(str){

  let value = '';
  let result = '' ;
  let allOfIT = '' ;
  let firstValue = 0;
  let secondValue;

  const  array = str.split('');

  array.forEach((item)=>{
    if(isNaN(item)){ // only characters
      value += swapCase(item);
    }else{ // its a number of white space
      if(item !== ' '){ // a number
        value += item;          
      }else{ // white space
        value += item;
      }
    }
  });

  value = value.split(' ');
  
  value.forEach((arrayElement, index)=>{
    for(let i = 0; i < arrayElement.length; i++){
      
      if(isNaN(arrayElement[i])){ // character
        result += arrayElement[i];
      }else{ // is a number or whitespace 
        if(arrayElement[i] !== '' && arrayElement[i] !== ' '){
          if(firstValue === 0){
            firstValue = arrayElement[i];
            secondValue = 0;           
          }else{      
            secondValue = arrayElement[i];
          }      
          result += arrayElement[i];
        }        
      }
    } // end for loop
      
      if(secondValue === 0){
      }else{
        replaced = result.replace(secondValue, firstValue);
        
        // replace first occurance of first value  with first value (FROM 4hello4: it gives 6hello4)
        replaced = replaced.replace(firstValue, secondValue);
        
        result = replaced;
      }

    firstValue = 0;
    secondValue = 0;

    if((index) === 0 || index !== value.length-1){
      result += ' ';
    }

    allOfIT += result;
    result = '';
  });
  return(allOfIT);
  
} // end of SwapII

// SwapII('2S 6 du5d4e');
// console.log(SwapII('6hello4 -8World 6sf afa7 5 4'));

function swapCase(character){
  if(character === character.toLowerCase()){
    character = character.toUpperCase();
    return character;
  }else{
    character = character.toLowerCase();
    return character;
  }  
}