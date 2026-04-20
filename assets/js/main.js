const chatTriggers = document.querySelectorAll('[data-open-chat]');

function openZendeskChat() {
  if (typeof window.zE === 'function') {
    window.zE('messenger', 'open');
    return true;
  }

  return false;
}

function openChatWithRetry(maxAttempts = 20, delayMs = 250) {
  let attempts = 0;

  const timer = window.setInterval(() => {
    attempts += 1;

    if (openZendeskChat() || attempts >= maxAttempts) {
      window.clearInterval(timer);
    }
  }, delayMs);
}

chatTriggers.forEach((trigger) => {
  trigger.addEventListener('click', (event) => {
    event.preventDefault();

    const opened = openZendeskChat();
    if (!opened) {
      openChatWithRetry();
    }
  });
});
