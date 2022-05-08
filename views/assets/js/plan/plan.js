import Deposit from "../module/deposit.js";
import User from "../module/user.js";

let user = new User();
let deposit = new Deposit();

deposit.getByUserId(user.isLogin()._id).then((data) => {
  if (data.length == 0) {
    document.querySelector("btn-plan-select").classList.remove("d-none");
  }
});
