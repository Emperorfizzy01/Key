document.addEventListener("keydown", function mansHot(event) {
   document.getElementById('key').innerHTML = event.key;
   document.getElementById("location").innerHTML = event.location;
   document.getElementById('which').innerHTML = event.which;
   document.getElementById("code").innerHTML = event.code;
   document.getElementById("number").innerHTML = event.keyCode;
})