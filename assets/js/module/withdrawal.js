class Withdrawal {
  constructor() {}

  async getByUserId(userid) {
    let response = await fetch("http://api.miningfy.net/withdrawal/getAll", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ userId: userid._id }),
    });
    let data = await response.json();

    return data;
  }
  async create(dataJson) {
    await fetch("http://api.miningfy.net/withdrawal/create", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
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
