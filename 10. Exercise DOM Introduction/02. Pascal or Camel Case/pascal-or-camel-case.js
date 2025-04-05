function solve() {
  let input = document.getElementById("text").value;
  let currentCase = document.getElementById("naming-convention").value;

  let str = input.toLowerCase().split(' ');

  let res = document.getElementById("result");

  if (currentCase == 'Camel Case') {
    res.innerHTML += str[0];
    for (let i = 1; i < str.length; i++) {
      res.innerHTML += str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
  }
  else if (currentCase == 'Pascal Case') {
    str.forEach((word) => res.innerHTML += word.charAt(0).toUpperCase() + word.slice(1));
  }
  else {
    res.innerHTML = 'Error!';
  }

}