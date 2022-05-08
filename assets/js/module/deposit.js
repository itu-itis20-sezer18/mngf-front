class Deposit {
  constructor() {}

  async getByUserId(userid) {
    let response = await fetch("http://api.miningfy.net/deposit/getAll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: userid }),
    });
    let data = await response.json();
    return data;
  }
}

export default Deposit;
