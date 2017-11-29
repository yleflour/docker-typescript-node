import * as builder from 'botbuilder';

const connector = new builder.ChatConnector({
  appId: process.env.MICROSOFT_APP_ID,
  appPassword: process.env.MICROSOFT_APP_PASSWORD
});

const bot = new builder.UniversalBot(connector);  

bot.dialog('/', (session) => {
  session.send('Hello World');
});

export default connector;
