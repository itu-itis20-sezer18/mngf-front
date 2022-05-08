class Auth {
  constructor() {}

  async signUp(dataObj) {
    let response = await fetch("https://api.miningfy.net/auth/signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataObj),
    });
    let data = await response.json();
    return data;
  }
  async signIn(dataObj) {
    let response = await fetch("https://api.miningfy.net/auth/signIn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataObj),
    });
    let data = await response.json();
    return data;
  }
}

export default Auth;
