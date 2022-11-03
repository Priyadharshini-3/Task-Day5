// 1.Print odd numbers in an array
// 2.Convert all the strings to title caps in a string array
// 3.Sum of all numbers in an array
// 4.Return all the prime numbers in an array
// 5.Return all the palindromes in an array

// 1.Print odd numbers in an array
// Arrow 
    oddNumbers = (array) => {
    for(var i = 0 ; i< array.length ; i++){
         if(array[i]%2!=0){
            console.log(array[i])
         } 
    }
         }

// 2.Convert all the strings to title caps in a string array
// Arrow  
 titleCase = (str) => {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    } 
    return str.join(' ');
  } 
// 3.Sum of all numbers in an array
// Arrow     
  sum = (array)=>{
    var sum = 0;
         for(var i = 0 ; i< array.length ; i++){
            sum = sum + array[i];
          }
          return sum;
          }

// 4.Return all the prime numbers in an array
// Arrow 
    
 primeNumber = (numArray) => {
     numArray = numArray.filter((number) => {
    for (var i = 2; i <= Math.sqrt(number); i++) {
     if (number % i === 0) return false;
     }
        return true;
     });
     console.log(numArray);
     }
          
// 5.Return all the palindromes in an array
// Arrow  
Palindrome = (arr, n) =>
    {
        for (let i = 0; i < n; i++)
        {
            let ans = isPalindrome(arr[i]);
            if (ans == false)
                return false;
        }
        return true;
    }

