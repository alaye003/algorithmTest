document.getElementById('form-string').addEventListener('submit', getResult);

function getResult (e){
  let string = document.getElementById('string');
  string = string.value;
  document.getElementById('input-value').innerHTML = '<b>Input:</b> ' + string;
  document.getElementById('output-value').innerHTML = '<b>Output:</b> ' + SwapII(string);

  clearField();
  
  e.preventDefault();
}

function clearField() {
  document.getElementById('string').value = '';
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
      // console.log(index)
      if(isNaN(arrayElement[i])){ // character
        result += arrayElement[i];
      }else{ // is a number or whitespace 
        if(arrayElement[i] !== '' && arrayElement[i] !== ' '){
          // check if the next item is a character          
          if(isNaN(arrayElement[i+1]) && firstValue === 0){ //next index is character
            console.log((arrayElement[i+1]))
            // assign element to first value
              firstValue = arrayElement[i];
              // get index of item
              firstIndex = i;
              console.log(firstIndex);
              secondValue = 0; 
          }
          if(isNaN(arrayElement[i-1])){
            console.log(isNaN(arrayElement[i-1]))
            secondValue = arrayElement[i];
            secondIndex = i;
            console.log(secondIndex);
          }
          
            result += arrayElement[i];
        }        
      }
    } // end for loop
      
      if(secondValue === 0){
      }else{

        replaced = replaceCharacters(result, firstIndex, secondValue);
        replaced = replaceCharacters(replaced, secondIndex, firstValue);
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

function replaceCharacters(str, index, replacement){
  return str.substr(0, index) + replacement + str.substr(index+1);
}

// let r =(replaceCharacters('H4ell6o', 1, '6'));
// console.log(r);
// r = (replaceCharacters(r, 5, '4'));
// console.log(r);