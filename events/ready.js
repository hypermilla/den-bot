const botspeech = require("../modules/botspeech.js");

module.exports = (client) => {

  let num = -1;
  setPresence(client, 0);
  setInterval(() => {
    setPresence(client, ++num%4);
  }, 120 * 1000);

  return console.log("I am ready!");
};

const setPresence = async (client, num) => {

  switch (num)
  {
    case 0:
      await client.user.setActivity(botspeech.presenceSmiles.replace(/{{count}}/, client.guilds.cache.size), { type:"PLAYING" })
        .then()
        .catch(console.error);
      return;
    case 1:
      await client.user.setActivity(botspeech.presenceChannels.replace(/{{count}}/, client.channels.cache.size), { type:"WATCHING" })
        .then()
        .catch(console.error);
      return;
    case 2:
      await client.user.setActivity(botspeech.presenceUsers.replace(/{{count}}/, client.users.cache.size), { type:"PLAYING" })
        .then()
        .catch(console.error);
      return;
    case 3:
      await client.user.setActivity(botspeech.presenceInvite, { type:"LISTENING" })
        .then()
        .catch(console.error);
      return;
  }
};