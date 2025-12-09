function solution(my_string) {
let swapped = "";
  
  for (let i = 0; i < my_string.length; i++) {
    const char = my_string[i];
    
    if (char === char.toUpperCase()) {
      swapped += char.toLowerCase();
    } else {
      swapped += char.toUpperCase();
    }
  }
  
  return swapped;
}
