// let string = 'I read a thousand books last month';

// let num = string[5];

// console.log(num);

// let n1 = string.replace(string[5], "q");
// console.log(n1)

// let n2 = n1.replace(string[7], '22');

// console.log(n2)

function rep(){
  let str = 'Hello World';
  str = setChatAt(str, 0, '!');
  console.log(str);
}

function setChatAt(str, index, chr){
  // if(index > str.length-1) return str;

  // return str.substr(0, index) + chr  + 
  // return str.substr(index+1);
  return str.substr(0,3) + chr + str.substr(5)
}

rep()