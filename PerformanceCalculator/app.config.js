window.PerformanceCalculator = $.extend(true, window.PerformanceCalculator, {
  "config": {
    "defaultLayout": "slideout",
    "navigation": [
      {
        "title": "Dati di Produzione",
        "action": "#variables",
        "icon": "clock"
      },
      {
        "title": "Statistiche",
        "action": "#statistics",
        "icon": "percent"
      },
      {
        "title": "Velocita'",
        "action": "#speedloss",
        "icon": "runner"
      },
      {
        "title": "Impostazioni",
        "action": "#settings",
        "icon": "preferences"
      },
      {
          "title": "Informazioni",
          "action": "#about",
          "icon": "info"
      }
      /*
      {
        "title": "orders",
        "action": "#orders",
        "icon": "orders"
      }
      */
    ]
  }
});