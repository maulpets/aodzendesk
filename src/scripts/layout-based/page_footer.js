export default function footer() {
  const copyright = document.getElementById("companyCopyright");
  const address = document.getElementById("companyAddress");
  const phone = document.getElementById("companyPhone");
  // footer
  copyright.innerHTML = "Copyright © 2018 Attendance on Demand, Inc.";
  address.innerHTML = "22300 Haggerty Road, Northville MI 48167";
  phone.innerHTML = "800.465.9980";

  // footer click
  phone.addEventListener("click", () => window.open('tel:1-800-465-9920'));
  address.addEventListener("click", () => window.open('https://www.google.com/maps/place/Attendance+on+Demand,+Inc/@42.4525709,-83.4350621,17z/data=!3m1!4b1!4m5!3m4!1s0x8824adf8f66fd2bb:0xd4f09dd1d13218b0!8m2!3d42.4525709!4d-83.4328734?q=attendance+on+demand&biw=1920&bih=984&um=1&ie=UTF-8&sa=X&ved=0ahUKEwi058fEmunXAhUG5YMKHZgtDuYQ_AUIDCgD'));
}
