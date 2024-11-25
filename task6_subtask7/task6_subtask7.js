function multiplication(m, n) {
  console.log(m * n);
}

multiplication(5, 6);

function area(r) {
  function square(r) {
    var sq = r * r;
    return sq;
  }
  ar = square(r) * 3.14;
  return ar;
}

console.log(area(5));
