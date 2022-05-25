class Withdrawal {
  constructor() {}

  async getByUserId(userid) {
    let response = await fetch("http://api.miningfy.net/withdrawal/getAll", {
      method: "POST",
      headers: { "Content-Type": "application/json",
      "Authorization": "Bearer " + token },
      body: JSON.stringify({ userId: userid._id }),
    });
    let data = await response.json();
    if(data.msg == "unauthorized"){
      localStorage.removeItem("myUser");
      window.location.href = "/sign-in"
    }
    return data;
  }
  async create(dataJson) {
    await fetch("http://api.miningfy.net/withdrawal/create", {
      method: "POST",
      headers: { "Content-Type": "application/json",
      "Authorization": "Bearer " + token },
      body: JSON.stringify(dataJson),
    });
    /*
            console.log("Request complete! response:", res);
            Swal.fire({
               icon: 'success',
               title: 'Çekim talebiniz gönderilmiştir.',
               text: 'Onay sürecinden sonra miktar hesabınıza yatırılacaktır.',
            })
            $('#withdrawModal').modal('hide')

         */
  }
}

export default Withdrawal;
