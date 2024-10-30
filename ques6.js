function palindrome(str) {
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }