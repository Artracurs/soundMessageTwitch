const text = "Hello World"

for (var i = 0; i < text.length; i++) {
	console.log(text[i] + '\t');
}
// -------------------
let res = ''

for (var i = 0; i < text.length; i++) {
  if (i % 2){
    res += text[i].toUpperCase()
  }
  else {
    res += text[i].toLowerCase()
  }
}

console.log(res)