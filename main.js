// PROGRAM
document.getElementById("btn").addEventListener("click", enter);

function enter() {
  let count = 0;

  let response1 = document.getElementById("search-in").value;
  if (response1 == "5") {
    document.getElementById("is-correct").innerHTML = "correct";
    count = count + 1;
  } else {
    document.getElementById("is-correct").innerHTML = "incorrect";
  }

  let response2 = document.getElementById("search-in1").value;
  if (response1 == "false") {
    document.getElementById("is-correct1").innerHTML = "correct";
    count = count + 1;
  } else {
    document.getElementById("is-correct1").innerHTML = "incorrect";
  }

  let response3 = document.getElementById("search-in2").value;
  if (response3 == "basketball") {
    document.getElementById("is-correct2").innerHTML = "correct";
    count = count + 1;
  } else {
    document.getElementById("is-correct2").innerHTML = "incorrect";
  }

  let response4 = document.getElementById("search-in3").value;
  if (response4 == "Michael Jordan") {
    document.getElementById("is-correct3").innerHTML = "correct";
    count = count + 1;
  } else {
    document.getElementById("is-correct3").innerHTML = "incorrect";
  }
  document.getElementById("score").innerText = count;
}
