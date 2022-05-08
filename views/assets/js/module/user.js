var userCookie = JSON.parse(localStorage.getItem("myUser"));

class User {
  constructor() {}

  isLogin(isRedirect) {
    let url = window.location.href;
    if (isRedirect && !url.includes("sign-in")) {
      if (!url.includes("sign-up")) {
        return userCookie
          ? userCookie
          : (window.location.href = "sign-in.html");
      }
    }
    return userCookie ? userCookie : false;
  }
  async getUserById(userid) {
    let response = await fetch("https://api.miningfy.net/auth/signInWithId", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: userid }),
    });
    let data = await response.json();
    return data;
  }

  Logout() {
    window.localStorage.removeItem("myUser");
    window.location.href = "sign-in.html";
  }
  async btnLogout() {
    let btnLogout = await document.querySelector("#btn-logout");
    btnLogout?.addEventListener("click", (e) => {
      e.preventDefault();
      window.localStorage.removeItem("myUser");
      window.location.href = "sign-in.html";
    });
  }
}

export default User;
