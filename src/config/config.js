const _ = require('lodash');

const {
  PORT,
  LOG_LEVEL,
  SUBSCRIPTION_ID,
  TOPIC_ID,
  TOPIC_PROJECT_ID,
} = process.env;

module.exports = {
  logLevel: LOG_LEVEL,
  port: !_.isUndefined(PORT) ? parseInt(PORT) : 8080,
  pubSub: {
    projectId: TOPIC_PROJECT_ID,
    topicId: TOPIC_ID,
    subscriptionId: SUBSCRIPTION_ID,
  },
};
