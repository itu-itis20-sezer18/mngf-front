import Auth from "./module/auth.js";
import User from "./module/user.js";

let auth = new Auth();
let user = new User();

if (user.isLogin(false)) {
  user.btnLogout();

  let userData = user.isLogin(false);
  console.log(userData);
  let userName = document.querySelector("#main-user-name");
  let navUserName = document.querySelector("#nav-user-name");
  let navEmail = document.querySelector("#nav-email");

  userName.innerHTML = `${userData.firstName}`;
  navUserName.innerHTML = `${userData.firstName}`;
  navEmail.innerHTML = userData.email;
  try {
    // document.querySelector(".btn-join-us").style.display = "none";
    document.getElementById("no-user-header").style.display = "none";
    document.getElementById("no-user-header-bottom").style.display = "none";
    document.querySelector(".header-top.user").style.display = "block";
  } catch (error) {
    console.log(error);
  }
} else {
  try {
    document.getElementById("no-user-header").style.display = "block";
    document.getElementById("no-user-header-bottom").style.display = "block";

    // document.querySelector(".btn-join-us").style.display = "block";
    document.querySelector(".header-top.user").style.display = "none";
  } catch (error) {
    console.log(error);
  }
}
