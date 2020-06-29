import * as Sentry from "@sentry/react";

function init() {
  Sentry.init({
    dsn:
      "https://ea39b69b933e447682ddb2ab8a5d74b4@o413881.ingest.sentry.io/5302428",
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log,
};
