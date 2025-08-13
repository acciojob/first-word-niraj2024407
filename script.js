function firstWord(s) {
  // your code here
	 // Trim leading spaces to handle cases like "  Hello World"
  s = s.trim();

  // If string is empty after trimming, return empty string
  if (s === "") return "";

  // Find index of first space
  let spaceIndex = s.indexOf(" ");

  // If there is no space, return the entire string
  if (spaceIndex === -1) return s;

  // Return substring from start to the first space
  return s.substring(0, spaceIndex);
	
	
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
