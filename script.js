                         // ***VARIABLE*** //
// console.log(a);
// var a=10;
// let b=20;
// console.log(b);
// {
//    var c =50;
//    console.log(c);
//    var d =60;
//    console.log(d) ;
// }
// console.log(c);
// console.log(d);

                          //***  COSTANT ***//

//const a =10;
//console.log(a)
// const b        //--------------Error 
//a=20;           //--------------Error
//console.log(a);


//const myArr={
    //5000
//name: "Rupali",
//}
//myArr.name="Paddy";
//myArr.name ={         //--------------Error
    //name:"Prisha"
//};
//console.log(myArr); 

                          // *** STRING  ***//
 
// let myString1="Hrithi@patil.com";
//   let myString2="prisha@patil.com" ;

//   console.log(myString1.toUpperCase()=== myString2.toUpperCase());
//   true

//   for(let i=0; i < myString1.length;i++)
//   {
//       console.log(myString1[i]);   //each character within string
//   }


  // # wap to find repated characters from string # //
 
//  let input="abcdafgdabjacj";
//  let output="";
  
// for(let i=0; i < input.length;i++){     //irrtertor
//     let count = 0;
// for(let j=0; j < input.length;j++){      //function
//    if(input[i] === input[j] )        //&& i <= j
//    { 
//        if(j <i ){
//            break;
//        }
//         count++;
//        if(count > 1)
//        {
//            output =output + input[i];
//            break;
//        }
//      }
//    }
// }
// console.log(output);
       
                  //*** Array ***//      

 //let myArr = [1,2,3,4,5, "my String",['a','b']];
//  let myArr =[1,2,3,4,5];
//  let myArr1 =[1,2,3,4,5];
//  let isSame = true;
//  for(let i=0;i< myArr.length;i++)
//  {
//      if(myArr[i] !== myArr1[i])
//      {
//          isSame = false
//          break;
//      }
//  }
//  //console.log(myArr=myArr1);    //---------False
//  console.log(isSame);            //-----------True

// # wap to break the statements # //

// let input ="India is my Country";
// let output="";                      //aidnI si ym yrtnuoC

// function reverseString(value)
// {
//     let returnValue ="";
//     for (let i= value.length -1; i >-1;i--)
//     {
//    returnValue = returnValue + value[i];
//     }
//        return  returnValue;
// }

// let wordString ="";
// for(let i=0;i < input.length;i++)
// {
    
//     if(input[i]===" ")
//     {
//         output = output + reverseString(wordString)+" ";
//         console.log(wordString);
//         wordString ="";
//         continue;
//     }else
//     {
//         wordString = wordString + input[i];
//         if(i+1 === input.length)
//         {
//             output = output + reverseString(wordString);
//             console.log(wordString);
//             wordString ="";
//         }
       
//     }
  
// }
// console.log(output); 

                    // *** FUNCTION ***///
                   // Normal  Function //
// console.log(addNumbers);     // we will get the function defination
// function addNumbers(number1,number2);
// {
//     return number1+number2;
// };

//                        //function Expreesion//
//   const addNumbers2 =function(number1,number2)
//   {
//       return number1+number2;
//   } ;
//   console.log(addNumbers(10,20));      // we will get the Result:30
//   console.log(addNumbers2);         // we will get the function defination

//                    // Arrow Function //
// const addNumbersArrow =(number1,number2)=>
//  {
//  return number1+number2;
//  };   
//  console.log(addNumbersArrow(10,20));
//   console.log(addNumbersArrow);              
   
// function myfun1(){
//     return true;
//   }
//   function myfun2(){
//     return true;
//   }
//   function myfun3(){
//     return true;
//   }
//   function myfun4(){
//     return true;
//   }

                // *** THIS ***//
//   const myObject =             //1000
//   {
//       name :"Hrithika",
//       getName: function(){
//       return this.name
//   },
//   } ;
  
//   const myNewObject =           //2000
//   {
//       name:"Ish",
//   }
//   //myObject.getName->1000
//   //newGetName->2000
// const newGetName = myObject.getName.bind(myNewObject);
// console.log(myObject.getName());       //Ish
// console.log(newGetName());             //Hrithika     

                     // *** CONSTRUCTOR FUNCTION ***//
//  function person(name,age)        
//                                   //check if called with new keyword
//  {
//      if(!new.target)
//      {
//          return new person (name,age);
//      }
//      this.name=name;          //this{} added internally
//      //this.number =1234;
//      this.age=age;
//      //return this;
//      //return{name};          //return { name: name}
//      //return 1234;           // not allowed
//      //return [1,2,3,4];      //alowed
//      //return this;           //added internally
//  }                
 
//  const personObject = new person ("Trisha",23);
//  console.log(personObject);
//  const personObject1 = person ("Trisha",23);
//  console.log(personObject1);

                    //***DESTRUCTURING ***//
// const myArr[1,2,3,4];
// const a=myArr[0];
// const b=myArr[1];
// const c=myArr[2];
// const d=myArr[3];

// const [a,b,c,d]=myArr;      // sequence is very important
// console.log(a,b,c,d);

// const myObject =
// {
//     name:"Pradynesh",
//     age :25,
// };
// //const name =myObject.name;
// //const age=myObiject.age
// const{name,age} = myObject;
// console.log(name,age);

//                 // ***SPREAD OPERATOR ***//
//  const myArr = [1,2,3,4,5];        // 1000
//  const myArrNew =[];               //2000 old way
//  const myArrNew = [...myArr];       //2000
//  for (let i = 0; i < myArr.length; i++) 
//  {
//      myArrNew.push(myArr[i]);
//  } 
//  console.log(...myArr)  ;
//  console.log(myArr);
//  console.log(myArrNew);
//  myArr.push(6);
//  console.log(myArr);
//  console.log(myArrNew)  ;         

// const myObject={
// name:"rudra",
// age:20,
// };

// const myNewObject ={...myObject};
// console.log(myObject);
// console.log(myNewObject);
// myObject.name="mohini";
// console.log(myObject);
// console.log(myNewObject);

                 // ***REST ***//
  function addNumber(...args)
  {
     let result = 0;
     for(i = 0;i<args.length; i++){


    result += args[i];
      //console.log(args);
     // return a+b+c+d+e;
  }   
  return result; 
}        
  console.log (addNumber(10,20,30,40,50));