function insert(num) {
  var press = document.getElementById("enter");
  press.value = document.getElementById("enter").value + num;
}

function equal() {
  var equiv = document.getElementById("enter").value;
  document.getElementById("enter").value = eval(equiv);
}

function back() {
  var bck = document.getElementById("enter").value;
  document.getElementById("enter").value = bck.substr(0, bck.length - 1);
}
