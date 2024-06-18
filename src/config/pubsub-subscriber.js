const { PubSub } = require('@google-cloud/pubsub');
const { pubSub } = require('./config');

class PubSubSubscriber {
  client = new PubSub();

  async listenForMessages() {
    return new Promise((_resolve, reject) => {
      const subscription = this.client.subscription(pubSub.subscriptionId);

      const messageHandler = (message) => {
        console.log(
          'message: ' +
            JSON.stringify({
              id: message.id,
              deliveryAttempt: message.deliveryAttempt,
              attributes: message.attributes,
              publishTime: message.publishTime,
              differenceSeconds: (new Date() - message.publishTime) / 1000
            })
        );
        message.nack();
      };

      subscription.on('message', messageHandler);

      subscription.on('error', (message) => {
        reject(message);
      });

      subscription.on('close', () => {
        reject('Closed channel');
      });
    });
  }
}

module.exports = { PubSubSubscriber };
