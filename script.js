function firstWord(s) {
  // your code here
	const trimStr = s.trim();
	const words =trimStr.split(" ");
	console.log(words);
	return words[0];
}

// Do not change the code below

// const s = prompt("Enter String:");
// alert(firstWord(s));
