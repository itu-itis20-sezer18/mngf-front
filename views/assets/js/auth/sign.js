import Auth from "../module/auth.js";
import Form from "../module/form.js";
import User from "../module/user.js";

let auth = new Auth();
let form = new Form();
let user = new User();

if (user.isLogin(true)) {
  user.btnLogout();
}

let btnSignUp = document.querySelector("#btn-sign-up");
let btnSignIn = document.querySelector("#btn-sign-in");

btnSignUp?.addEventListener("click", () => {
  document.getElementById("btn-sign-up").style.visibility = "hidden"

  let formData = document.querySelectorAll(
    ".account-form input, .account-form select"
  );
  // Get Form Data
  let checkFormData = true;
  formData.forEach((item) => {
    if (item.value == "" && !item.hasAttribute("not-required")) {
      Swal.fire({
        icon: "error",
        title: "Hata...",
        text: `${item.getAttribute("error-msg")}`,
      });
      document.getElementById("btn-sign-up").style.visibility = "visible"
      checkFormData = false;
    }
  });

  // Form Data Check

  // Form Data Convert Object

  if (checkFormData) {
    formData = form.form2Obj(formData);
    console.log(formData);
    auth.signUp(formData).then((data) => {
      if(data.msg == "unauthorized"){
        localStorage.removeItem("myUser");
        window.location.href = "/sign-in"
      }
      localStorage.setItem("token",data.token)
      data = data.data
      let msg =
        data.msg == "taken-email" ? "e-Mail Adresi" : "Telefon Numarası";
      if (
        data.msg &&
        (data.msg == "taken-email" || data.msg == "taken-number")
      ) {
        Swal.fire({
          icon: "error",
          title: "Hata...",
          text: `Bu ${msg} zaten kullanıyor.`,
        });
        document.getElementById("btn-sign-up").style.visibility = "visible"
        return;
      }
      localStorage.setItem("myUser", JSON.stringify(data));
      window.location.href = "dashboard.html";
    });
  }

  // Sign Up Control and Save Data
});

btnSignIn?.addEventListener("click", () => {
  let formData = document.querySelectorAll("#signIn input");
  // Get Form Data
  let checkFormData = true;
  formData.forEach((item) => {
    if (item.value == "" && !item.hasAttribute("not-required")) {
      Swal.fire({
        icon: "error",
        title: "Hata...",
        text: `${item.getAttribute("error-msg")}`,
      });
      document.getElementById("btn-sign-up").style.visibility = "visible"
      checkFormData = false;
    }
  });
  // Form Data Check

  if (checkFormData) {
    formData = form.form2Obj(formData);
    // Form Data Convert Object
    console.log(formData);

    auth.signIn(formData).then((data) => {
      if(data.msg == "unauthorized"){
        localStorage.removeItem("myUser");
        window.location.href = "/sign-in"
      }
      localStorage.setItem("token",data.token)
      data = data.data
      if (data.msg && data.msg == "no-user") {
        Swal.fire({
          icon: "error",
          title: "Hata!",
          text: "e-Mail adresi ya da şifre yanlış",
        });
        document.getElementById("btn-sign-up").style.visibility = "visible"
        return;
      }

      localStorage.setItem("myUser", JSON.stringify(data));
      window.location.href = "dashboard.html";
    });
  }

  // Sign Up Control and Save Data
});
