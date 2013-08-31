PerformanceCalculator.settings = function (params) {

    var viewModel = {
        // Variabili associate ai controlli
        targetEfficiency: ko.observable(gTargetEfficiency),
        targetPerformance: ko.observable(gTargetPerformance),
        targetSpeedLoss: ko.observable(gTargetSpeedLoss),

        targetEfficiency_focusOut: function () {
            gTargetEfficiency = this.targetEfficiency();
            //Salvo il valore modificato della gVariabile nel localStorage associandolo alla stessa key ad ogni modifica

            localStorage.setItem('target_efficiency', JSON.stringify(gTargetEfficiency));
        },
        targetPerformance_focusOut: function () {
            gTargetPerformance = this.targetPerformance();

            localStorage.setItem('target_performance', JSON.stringify(gTargetPerformance));
        },
        targetSpeedLoss_focusOut: function () {
            gTargetSpeedLoss = this.targetSpeedLoss();

            localStorage.setItem('target_speed_loss', JSON.stringify(gTargetSpeedLoss));
        },

    };
    
    return viewModel;
};