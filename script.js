function firstWord(s) {
  // your code here
	 // Trim leading spaces to handle cases like "  Hello World"
  str = str.trim();

  // If string is empty after trimming, return empty string
  if (str === "") return "";

  // Find index of first space
  let spaceIndex = str.indexOf(" ");

  // If there is no space, return the entire string
  if (spaceIndex === -1) return str;

  // Return substring from start to the first space
  return str.substring(0, spaceIndex);
	
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
