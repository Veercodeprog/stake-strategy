const axios = require("axios");

async function sendRequest(amount) {
  const url = "https://stake.com/_api/graphql";
  const headers = {
    accept: "*/*",
    "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
    "cache-control": "no-cache",
    "content-type": "application/json",
    cookie:
      'cf_chl_rc_m=1; currency_currency=btc; currency_hideZeroBalances=false; currency_currencyView=crypto; fiat_number_format=en; cookie_consent=false; sidebarView=hidden; casinoSearch=["Monopoly","Crazy Time","Sweet Bonanza","Money Train","Reactoonz"]; sportsSearch=["Liverpool FC","Kansas City Chiefs","Los Angeles Lakers","FC Barcelona","FC Bayern Munich"]; sportMarketGroupMap={}; oddsFormat=decimal; locale=en; cf_clearance=u9AV7Xw1eP_ci8pdpNgqzXfE2ipl2o27.G5mnTf3SKQ-1721401773-1.0.1.1-AJodn8LV_strPke6DGCAsokPn31q6tmU2Qn0jMfqffkKlvPfU5e_BMr31V6Ok6DujYa8NAyydLaazmliH6Aatg; intercom-id-cx1ywgf2=db733301-ef1b-4595-b90c-3b3b3252a270; intercom-device-id-cx1ywgf2=86aa497c-1eba-4b53-90d8-4cee3f523788; session=8396bfe66f2f516fc05664fb95ca805c673e01f8c652f0fc57f69d7e7defd31793b0299f750f5c6ed660a328cdfe55a5; session_info={"id":"a7451726-b2d8-4e1a-abb0-5208f4346fc9","sessionName":"Chrome (Unknown)","ip":"49.36.16.249","country":"IN","city":"Navi Mumbai (Reliance Corporate Park)","active":true,"updatedAt":"Fri, 19 Jul 2024 15:10:31 GMT","__typename":"UserSession"}; hideBalances=false; leftSidebarView_v2=minimized; __cf_bm=bkXSkyrtGQ0SjK1HQhw_7gz34FRFVwNYSk3cOsYaR3c-1721402673-1.0.1.1-rc_Z88LYTvFnG_TuXdT1YM3aG9Z13z0XyIl82.qL4B6ZZ3GemvOurBzWGc8W5WPn85NZ0vWrtYhTvrGCxyHwAQ; __cfwaitingroom=Chh1aDBXaU9OcDdiZlRMT2hadC90ZW9BPT0ShAJXYktRZElDOHlpRjZzOHZubzBIbkJmYzRQSHFxVDU2YWVBbUhVOG1UY2VWWUpFaTk1c2plSmt1cnA4T01sUHVhellMQmlldjJFTHBHL2VGYlppaldIb0JOcEpVQkkra1Z2U0VYY09sUnRnZzFtdFp2VTVzb1ZyYlUzWkNoazBndVJtWUdRK09TbERMN3BraFM3bGhad2ppVy80ckZVd0VDaEdrTWxZVmdMQ1l0RlFLbXUrOVZWK2FUdWk2THpXWXo0MXB6eVl6dW16WkpjdEVJY2pJblIzNzNSc2VLbHVVNW9PMi9YbWgyTEVwamJJUmxXQ3RVSUdSRmZXczltOXBWdURZPQ%3D%3D; intercom-session-cx1ywgf2=Zks4cUlHRG9NTGRzREliWGt1QjgxY2lTSTZkMVlyMkdJdXJEQm1vbDZXWjlHQUNTem0raTk5STd1eis1TytKVi0talUrNU5xVmcvUWNLQ1hZdHM1Mkk3dz09--e679990a71ed0b4830422cecb918125d93cac0de; _dd_s=rum=0&expire=1721404220875',
    origin: "https://stake.com",
    pragma: "no-cache",
    priority: "u=1, i",
    referer: "https://stake.com/casino/games/dice",
    "sec-ch-ua":
      '"Not/A)Brand";v="8", "Chromium";v="126", "Google Chrome";v="126"',
    "sec-ch-ua-arch": '"arm"',
    "sec-ch-ua-bitness": '"64"',
    "sec-ch-ua-full-version": '"126.0.6478.127"',
    "sec-ch-ua-full-version-list":
      '"Not/A)Brand";v="8.0.0.0", "Chromium";v="126.0.6478.127", "Google Chrome";v="126.0.6478.127"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-model": '""',
    "sec-ch-ua-platform": '"macOS"',
    "sec-ch-ua-platform-version": '"14.5.0"',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "user-agent":
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    "x-access-token":
      "8396bfe66f2f516fc05664fb95ca805c673e01f8c652f0fc57f69d7e7defd31793b0299f750f5c6ed660a328cdfe55a5",
    "x-lockdown-token": "s5MNWtjTM5TvCMkAzxov",
  };

  const data = {
    query: `mutation DiceRoll($amount: Float!, $target: Float!, $condition: CasinoGameDiceConditionEnum!, $currency: CurrencyEnum!, $identifier: String!) {
      diceRoll(
        amount: $amount
        target: $target
        condition: $condition
        currency: $currency
        identifier: $identifier
      ) {
        ...CasinoBet
        state {
          ...CasinoGameDice
        }
      }
    }

    fragment CasinoBet on CasinoBet {
      id
      active
      payoutMultiplier
      amountMultiplier
      amount
      payout
      updatedAt
      currency
      game
      user {
        id
        name
      }
    }

    fragment CasinoGameDice on CasinoGameDice {
      result
      target
      condition
    }`,
    variables: {
      target: 50.5,
      condition: "above",
      identifier: "e707N7u0WCk_gFTxyzG7h",
      amount: amount || 0.0,
      currency: "btc",
    },
  };

  try {
    const response = await axios.post(url, data, { headers });
    return response.data.data;
  } catch (error) {
    console.error(error);
  }
}
const DEFAULT_AMOUNT = 0.0;
async function main() {
  let amount = DEFAULT_AMOUNT;
  while (true) {
    console.log(`Amount: ${amount}`);
    try {
      const response = await sendRequest(amount);
      if (response) {
        console.log("Response: ", response);
        const diceRoll = response.diceRoll;

        if (diceRoll.state.result < 50.5) {
          console.log("Lost");
          amount = amount * 2;
        } else {
          console.log("Won");
          amount = 0.1;
        }
      } else {
        console.log("Response from sendRequest is undefined");
        // Decide what to do when response is undefined, e.g., retry or handle error
      }
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Sleep for 1 second
    } catch (error) {
      console.error("Error in main:", error);
      // Handle error, decide whether to retry or exit the loop
    }
  }
}

main();
