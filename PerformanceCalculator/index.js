window.PerformanceCalculator = window.PerformanceCalculator || {};

$(function() {
    PerformanceCalculator.app = new DevExpress.framework.html.HtmlApplication({
        namespace: PerformanceCalculator,
        defaultLayout: PerformanceCalculator.config.defaultLayout,
        navigation: PerformanceCalculator.config.navigation
    });
    PerformanceCalculator.app.router.register(":view/:id", { view: "variables", id: undefined });
    PerformanceCalculator.app.navigate();
});



