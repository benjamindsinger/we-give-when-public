export default {

  registerEvent: function (eventName, eventData) {
    if (window.location.origin === "http://localhost:3000") return null;

    mixpanel.track(eventName, eventData);
  }

}
