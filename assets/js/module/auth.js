class Auth {
  constructor() {}

  async signUp(dataObj) {
    let response = await fetch("http://localhost:4000/auth/signUp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataObj),
    });
    let data = await response.json();
    return data;
  }
  async signIn(dataObj) {
    let response = await fetch("http://localhost:4000/auth/signIn", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dataObj),
    });
    let data = await response.json();
    return data;
  }
}

export default Auth;
