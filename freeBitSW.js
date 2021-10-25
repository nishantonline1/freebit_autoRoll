console.log("Auto Roll Mounted");

function onLoad() {
  chrome.storage.sync.get(["algoStatus"], function (result) {
    var rollBtn = document.getElementById("free_play_form_button");
    if (rollBtn && result.algoStatus) {
      rollBtn.click();
    }
  });
}

window.onload = function (e) {
  setTimeout(onLoad, 3000);

  // fetch("https://freebitco.in/", {
  //   headers: {
  //     accept: "*/*",
  //     "accept-language": "en-GB,en-US;q=0.9,en;q=0.8,hi;q=0.7",
  //     "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  //     "sec-ch-ua":
  //       '"Google Chrome";v="95", "Chromium";v="95", ";Not A Brand";v="99"',
  //     "sec-ch-ua-mobile": "?0",
  //     "sec-ch-ua-platform": '"macOS"',
  //     "sec-fetch-dest": "empty",
  //     "sec-fetch-mode": "cors",
  //     "sec-fetch-site": "same-origin",
  //     "x-csrf-token": "FcNozEHZNrX6",
  //     "x-requested-with": "XMLHttpRequest",
  //   },
  //   referrer: "https://freebitco.in/?op=home",
  //   referrerPolicy: "strict-origin-when-cross-origin",
  //   body: "csrf_token=FcNozEHZNrX6&op=free_play&fingerprint=e561c59fbd28459f5b2a98eb05bf6334&client_seed=VrnswtcqVa2Pnli0&fingerprint2=2212376579&pwc=0",
  //   method: "POST",
  //   mode: "cors",
  //   credentials: "include",
  // });
};
