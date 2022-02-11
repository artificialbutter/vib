chrome.runtime.onMessage.addListener(function(message, sender, senderResponse){
    if(message.msg === "image"){
      fetch('https://some-random-api.ml/img/cat')
            .then(response => response.text())
            .then(data => {
              let dataObj = JSON.parse(data);
              senderResponse({data: "https://c.tenor.com/TpclA3AwaXMAAAAC/vibri-dancing.gif", index: message.index});
            })
            .catch(error => console.log("error", error))
        return true;  // Will respond asynchronously.
    }
  });