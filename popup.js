const showMessage = function (text) {
  var message = document.getElementById("message");
  message.innerHTML = text;
  message.style.display = "block";
  setTimeout(() => (message.style.display = "none"), 5000);
};

document.addEventListener("DOMContentLoaded", function () {
  var algoStatus = false;
  var toggleBtn = document.getElementById("toggleBtn");
  var startedAt = document.getElementById("startedAt");

  chrome.storage.sync.get(["algoStatus", "startedAt"], function (result) {
    if (Object.keys(result).length) {
      algoStatus = result.algoStatus;
      toggleBtn.innerHTML = algoStatus ? "STOP" : "START";
      if (algoStatus) {
        startedAt.innerHTML = "Started At: " + result.startedAt;
        startedAt.style.display = "block";
      }
    } else {
      toggleBtn.innerHTML = "START";
    }
    toggleBtn.style.display = "block";
  });

  toggleBtn.addEventListener("click", function (e) {
    algoStatus = !algoStatus;
    toggleBtn.innerHTML = algoStatus ? "STOP" : "START";
    chrome.storage.sync.set({
      startedAt: new Date().toLocaleString(),
      algoStatus,
    });
    if (algoStatus) {
      startedAt.innerHTML = "Started At: " + new Date().toLocaleString();
      startedAt.style.display = "block";
    } else {
      startedAt.innerHTML = "";
      startedAt.style.display = "none";
    }
    showMessage((algoStatus ? "started" : "stopped") + " successfully");
  });
});
