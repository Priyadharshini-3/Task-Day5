// anonymous function & IIFE

//1. Print odd numbers in an array
//2. Convert all the strings to title caps in a string array
//3. Sum of all numbers in an array
//4. Return all the prime numbers in an array
//5. Return all the palindromes in an array
//6. Return median of two sorted arrays of the same size.
//7. Remove duplicates from an array
//8. Rotate an array by k times


//1. Print odd numbers in an array

// Anonymous  
function(array){
    for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
             console.log(array[i])
          } 
     }
  }

// IIFE    
    (function(array){
for(var i = 0 ; i< array.length ; i++){
          if(array[i]%2!=0){
             console.log(array[i])
          } 
     }
})([1,2,3,4,5])

//2. Convert all the strings to title caps in a string array

// Anonymous 
function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  }
  
// IIFE 
 (function (str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  })("HELLO EVERYONE!!");

  //3. Sum of all numbers in an array

  //   Anonymous 
   function(array){
    var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
  }

// IIFE 
       (function(array){
var sum = 0;
    for(var i = 0 ; i< array.length ; i++){
       sum = sum + array[i];
     }
     return sum;
})([10,12,14,19,27])

//4. Return all the prime numbers in an array

// Anonymous 
 function(numArray){
 numArray = numArray.filter((number) => {
 for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
          }
         return true;
         });
    console.log(numArray);
    }

//    IIFE 
     (  
     function(numArray){
     numArray = numArray.filter((number) => {
     for (var i = 2; i <= Math.sqrt(number); i++) {
       if (number % i === 0) return false;
       }
          return true;
      });
     console.log(numArray);
      })([1,2,3,4])

 //5. Return all the palindromes in an array

 //  Anonymous 
   function (arr, n)
    {
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }
    
    // IIFE 

              (  function (arr, n)
        {
            for (let i = 0; i < n; i++)
            {
                let ans = isPalindrome(arr[i]);
                if (ans == false)
                    return false;
            }
            return true;
        })([1,2,3] , 3)
        
//6. Return median of two sorted arrays of the same size
//7. Remove duplicates from an array

// Anonymous 
function(array){
    let dup = [...new Set(array)];
    console.log(dup);
  }

// IIFE  
 (function(array){
    let dup = [...new Set(array)];
    console.log(dup);
   })([1,1,2,3,2,4])

//8. Rotate an array by k times

// Anonymous function 
function(array , k){
    k = k % a.length;
      if(k < 0){
        k += a.length;
      }

      reverse(a, 0, a.length - k - 1);
      reverse(a, a.length - k, a.length - 1);
      reverse(a, 0, a.length - 1);
    }
    
// IIFE 
   (function(array , k){
    k = k % a.length;
      if(k < 0){
        k += a.length;
      }

      reverse(a, 0, a.length - k - 1);
      reverse(a, a.length - k, a.length - 1);
      reverse(a, 0, a.length - 1);
    })([1,2,3,4] , 2)



