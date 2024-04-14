
let input1 = "babad"
let input2 = "cbbd"

function findLongestPalindrome(str) {
     
    let longestPalindrome = " ";

    //func substringสำหรับขยายรอบๆตำแหน่ง center index เพื่อหา palindrome
    //ขยายไปซ้าย-ขวาเพื่อตรวจสอบตัวอักษรให้เหมือนกัน
    //return substring ที่เป็น palindrome
    
    function expandAroundIndex(left , right) {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            left--;
            right++;
        }
        return str.substring(left + 1 , right);
        
    }

    //ลองขยายรอบตัวอักษร 1 ตัว
    //ลองขยายรอบตัวอักษร 2 ตัว
    //update palindromeยาวที่สุด

    for (let i = 0; i < str.length; i++) {
        let palindrome1 = expandAroundIndex(i , i);
        let palindrome2 = expandAroundIndex(i , i + 1);

        if(palindrome1.length > longestPalindrome.length) {
            longestPalindrome = palindrome1;
        }
        if(palindrome2.length > longestPalindrome.length) {
            longestPalindrome = palindrome2;
        }
    }
    return longestPalindrome;
}

//test
console.log(findLongestPalindrome(input1));
console.log(findLongestPalindrome(input2));