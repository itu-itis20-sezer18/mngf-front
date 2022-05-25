class MngfCoin {
    constructor() {}
  
    async getByUserId(userid) {
      let response = await fetch("http://api.miningfy.net/deposit/getAll", {
        method: "POST",
        headers: { "Content-Type": "application/json",
        "Authorization": "Bearer " + token },
        body: JSON.stringify({ userId: userid }),
      });
      let data = await response.json();
      if(data.msg == "unauthorized"){
        localStorage.removeItem("myUser");
        window.location.href = "/sign-in"
      }
      return data;
    }
  }
  
  export default Deposit;
  