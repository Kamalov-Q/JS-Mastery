// Advanced Logger system with closures
function createLogger(level = "info") {
  const logs = []; //Private Storage

  const levels = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  };

  function shouldLog(messageLevel) {
    return levels[messageLevel] >= levels[level];
  }

  function log(message, messageLevel = "info") {
    if (!shouldLog(messageLevel)) return;

    const entry = {
      message,
      level: messageLevel,
      time: new Date().toISOString(),
    };

    logs.push(entry);
    console.log(`[${messageLevel.toUpperCase()}] ${message}`);
  }

  return {
    debug(msg) {
      log(msg, "debug");
    },

    info(msg) {
      log(msg, "info");
    },

    warn(msg) {
      log(msg, "warn");
    },

    error(msg) {
      log(msg, "error");
    },

    getLogs() {
      return logs;
    },

    clearLogs() {
      logs.length = 0;
    },
  };
}

// Usage
const logger = createLogger("info");

logger.debug("This will NOT show");
logger.info("App started");
logger.warn("Low memory");
logger.error("Crash detected");
