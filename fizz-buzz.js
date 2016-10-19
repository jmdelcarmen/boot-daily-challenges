for (var i = 1; i <= 100; i++ ) {
  if (i%15 === 0) {
    document.write("Fizz Buzz" + "__");
  }
  else if (i%5 === 0) {
    document.write("Buzz" + "__");
  }
  else if (i%3 === 0) {
    document.write("Fizz"  + "__");
  }
  else {
    document.write(i  + "__");
  }
}
