import User from "../module/user.js";
import Withdrawal from "../module/withdrawal.js";
import Deposit from "../module/deposit.js";

let user = new User();
let withdrawal = new Withdrawal();
let deposit = new Deposit();

let userData = user.isLogin(true);

let balances = {
  BTC: document.querySelector("#btcb"),
  ETH: document.querySelector("#ethb"),
  LTC: document.querySelector("#ltcb"),
  USDT: document.querySelector("#usdtb"),
  MNGF: document.querySelector("#mngfb"),
};

balances.BTC.innerHTML = userData.balances.BTC.toFixed(2) + " BTC";
balances.ETH.innerHTML = userData.balances.ETH.toFixed(2) + " ETH";
balances.LTC.innerHTML = userData.balances.LTC.toFixed(2) + " LTC";
balances.USDT.innerHTML = userData.balances.USDT.toFixed(2) + " USDT";
balances.MNGF.innerHTML = userData.balances.MNGF.toFixed(2) + " MNGF";

deposit.getByUserId(userData._id).then((data) => {
  let otherEl = "";
  if (data.length <= 0 || data == undefined || data == null) {
    otherEl = `
    <div class="no-invest">
      <strong class="mb-3">Yatırım Bulunamadı</strong>
      <a href="/signed-up-plan.html" class="custom-button btn-select-plan">Plan Seç</a>
    </div>
  `;
    document.querySelector("#first-invest").innerHTML = otherEl;
    document.querySelector(".progress-loadmore").classList.add("d-none");
    document
      .querySelector("#loadmore-active-investment")
      .classList.add("invisible");
    return;
  }

  let loadmore = document.querySelector("#loadmore-active-investment span");
  loadmore.innerHTML = data.length;
  data.map((invest, index) => {
    let planDays = parseInt(invest.data.plan.replace("-days", ""));
    let meter = ((planDays - invest.daysLeft) / planDays) * 100;
    if (index == 0) {
      document.querySelector("#first-invest #amount-deposit b").innerHTML =
        invest.data.amountInMngf.toFixed(2) + " MNGF";
      document.querySelector("#first-invest .invest-earn b").innerHTML =
        (invest.data.amountWillBeRecieved - invest.data.amountInMngf).toFixed(2) + " MNGF";
      document.querySelector("#first-invest .day-left").innerHTML =
        invest.daysLeft + " gün kaldı";
      document.querySelector(
        "#first-invest .meter"
      ).innerHTML = `  <span style="width: ${meter}%;"></span>`;
    } else if (index == 1){
      otherEl += `  
      <div class="col-12">
      <div style="width: 100%;display: flex;justify-content: end;"><div>
      <i class="fa fa-ellipsis-h" id="det-btn-${index}" onclick="openInvestmentDetail(this)" data-toggle="modal" data-target="#investmentDetailModal" aria-hidden="true" style="color: white;cursor: pointer;"></i>
   </div></div>
      <div class="progress-loadmore__item">
         <div class="progress-loadmore-info d-flex">
            <div class="term-sum">
               Vade tutarı <br> <span style='color: #55ffdd'>${invest.data.amountInMngf.toFixed(2)} MNGF</span>
            </div>
            <div class="term-earn">
               Vade sonu kazanç <br> <span style='color: #55ffdd'>${(invest.data.amountWillBeRecieved - invest.data.amountInMngf).toFixed(2)} MNGF</span>
            </div>
         </div>
         <div class="meter">
            <span style="width: ${meter}%;"></span>
            <div class="date-left">
               ${invest.daysLeft} gün kaldı
            </div>
         </div>
      </div>
   </div>
   `;
    }
    else{
      otherEl += `  
      <div class="col-12" style='margin-top:15%'>
      <div style="width: 100%;display: flex;justify-content: end;"><div>
      <i class="fa fa-ellipsis-h" id="det-btn-${index}" onclick="openInvestmentDetail(this)" data-toggle="modal" data-target="#investmentDetailModal" aria-hidden="true" style="color: white;cursor: pointer;"></i>
   </div></div>
      <div class="progress-loadmore__item">
         <div class="progress-loadmore-info d-flex">
            <div class="term-sum">
               Vade tutarı <br> <span style='color: #55ffdd'>${invest.data.amountInMngf.toFixed(2)} MNGF</span>
            </div>
            <div class="term-earn">
               Vade sonu kazanç <br> <span style='color: #55ffdd'>${(invest.data.amountWillBeRecieved - invest.data.amountInMngf).toFixed(2)} MNGF</span>
            </div>
         </div>
         <div class="meter">
            <span style="width: ${meter}%;"></span>
            <div class="date-left">
               ${invest.daysLeft} gün kaldı
            </div>
         </div>
      </div>
   </div>
   `;
    }
  });

  document.querySelector(".progress-loadmore").innerHTML = otherEl;
});
// dashboard.html > Active Investments > Progress Loadmore > Progress Loadmore Item > Meter > Span Adding
