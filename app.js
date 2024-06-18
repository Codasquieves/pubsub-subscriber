'use strict';

require('dotenv').config();

const app = require('express')();
const config = require('./src/config/config');
const { PubSubPublisher } = require('./src/config/pubsub-publisher');
const { PubSubSubscriber } = require('./src/config/pubsub-subscriber');

app.get('/healthz', async(_, res) => {
  res.status(200).end();
});

app.get('/publish', async(_, res) => {
  const data = {
    date: new Date(),
  };

  const publisher = new PubSubPublisher();

  await publisher.publish(data);

  res.json(data);
});

app.listen(config.port, console.log(`Listening on port: ${config.port}`));

const subscriptionConsumer = async() => {
  const subscriber = new PubSubSubscriber();
  return subscriber.listenForMessages();
};

subscriptionConsumer()
  .then(() => {
    console.log('Subscription done');
  })
  .catch((error) => {
    console.log(`Subscription: ${error}`);
  });
