export default {

  registerEvent: function (eventName, eventData) {
    if (window.location.origin === "http://localhost:3000") return null;

    window.mixpanel.track(eventName, eventData);
  }

};
