(() => {
  const params = new URLSearchParams(window.location.search);
  const sessionKey = "ronaldo_rocha_session_id";
  let sessionId = sessionStorage.getItem(sessionKey);

  if (!sessionId) {
    sessionId = crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
    sessionStorage.setItem(sessionKey, sessionId);
  }

  const utm = {
    utm_source: params.get("utm_source") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_campaign: params.get("utm_campaign") || ""
  };

  window.dataLayer = window.dataLayer || [];

  function track(eventName, payload = {}) {
    const eventPayload = {
      event: eventName,
      event_name: eventName,
      event_category: payload.event_category || "site",
      event_label: payload.label || "",
      service_name: payload.service_name || "",
      region_name: payload.region_name || "",
      page_url: window.location.href,
      page_name: document.body?.dataset.page || "",
      session_id: sessionId,
      created_at: new Date().toISOString(),
      ...utm
    };

    window.dataLayer.push(eventPayload);

    const stored = JSON.parse(localStorage.getItem("ronaldo_rocha_analytics_events") || "[]");
    stored.unshift(eventPayload);
    localStorage.setItem("ronaldo_rocha_analytics_events", JSON.stringify(stored.slice(0, 200)));
  }

  window.RonaldoAnalytics = { track, sessionId, utm };
  window.VeraAnalytics = window.RonaldoAnalytics;
  track("page_view", { label: document.title });
})();
