const client = new tmi.Client({
  channels: ["itnarog"],
});

client.connect();

$("#myaudio")[0].play();

client.on("message", (channel, tags, message, self) => {
  console.log(`${tags["display-name"]}: ${message}`);

  if (localStorage.getItem(`* ${tags["display-name"]}`) === null) {
    $("#myaudio")[0].play();
    localStorage.setItem(`* ${tags["display-name"]}`, Date().toString());
  }

  const uy = `${tags["display-name"]}: ${message}\n`;
  const old = document.getElementById("nick").innerText;

  document.getElementById("nick").innerText = uy;
  document.getElementById("nick").innerText += old;

});
