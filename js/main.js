var myText = 'Hello, This is type writer effects on text';
var myButton = document.getElementById('button');
var i = 0;

myButton.onclick = function name (params) {
  var typeWriter = setInterval(function name (params) {
    document.getElementById('type').textContent += myText[i];
    i++;
    if (i > myText.length - 1) {
      clearInterval(typeWriter);
    }
  }, 200);
}
