const priceperkm = 0.21;
const jrdiscount = 0.8;
const srdiscount = 0.6;

const userAge = prompt("Enter your age");
console.log("You are " + userAge + " years old");

const distanceKM = prompt("How far are you travelling (KM)?");

const price = distanceKM * priceperkm;
console.log("Standard price is £" + price);
// confirm("Standard price is £" + price);

if (userAge < 18) {
  const youngerdiscount = price * jrdiscount;
  console.log(
    "Due to your age, you are appliciable for a 20% discount. Your new price is £" +
      youngerdiscount
  );
  // confirm(
  //   "Due to your age, you are appliciable for a 20% discount. Your new price is £" +
  //     youngerdiscount
  // );
} else if (userAge > 65) {
  const seniordiscount = price * srdiscount;
  console.log(
    "Due to your age, you are appliciable for a 40% discount. Your new price is £" +
      seniordiscount
  );
  // confirm(
  //   "Due to your age, you are appliciable for a 40% discount. Your new price is £" +
  //     seniordiscount
  // );
}
