
const client = new tmi.Client({
	channels: [ 'itnarog' ]
});

client.connect();

client.on('message', (channel, tags, message, self) => {
  $("#myAudioElement")[0].play();
	console.log(`${tags['display-name']}: ${message}`);
});
