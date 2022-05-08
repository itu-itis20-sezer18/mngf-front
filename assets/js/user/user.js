import USER from "../module/user.js";

let user = new USER();

// Check User is Login
if (user.isLogin(true)) {
  user.btnLogout();
}
