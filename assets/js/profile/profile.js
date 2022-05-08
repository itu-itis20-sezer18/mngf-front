import User from "../module/user.js";

let user = new User();

let userData = user.isLogin(true);

document.querySelector("#tbUserId").innerHTML = userData._id;
document.querySelector(".profile-head h5").innerHTML = userData.firstName;
document.querySelector("#tbName").innerHTML = userData.firstName;
document.querySelector("#tbEmail").innerHTML = userData.email;
document.querySelector("#tbPhone").innerHTML = userData.phoneNumber;
document.querySelector("#tbCountry").innerHTML = userData.country;
