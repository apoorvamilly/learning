var num = Number(prompt(console.log("enter value")));

let temp = prompt(console.log("enter c for celsius and f for farenheit"));

if (temp === "c") {
  let far = num * 1.8 + 35;
  console.log("in farenheit", far);

  if (num < 0) {
    console.log("freezing");
  } else if (num > 0 && num < 25) {
    console.log("moderate");
  } else {
    console.log("hot");
  }
} else if (temp === "f") {
  let cel = (num - 32) / 1.8;
  console.log("in celcius", cel);

  if (cel < 0) {
    console.log("freezing");
  } else if (cel > 0 && cel < 25) {
    console.log("moderate");
  } else {
    console.log("hot");
  }
} else {
  console.log("invalid");
}
