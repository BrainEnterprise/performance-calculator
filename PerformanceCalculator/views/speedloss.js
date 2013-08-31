PerformanceCalculator.speedloss = function (params) {

    var viewModel = {
        speedLoss: ko.observable(gSpeedLoss),
        speedLossPercent: ko.observable(gSpeedLossPercent),

        // Opzioni per la percentuale di Efficienza
        speedLossGaugeOptions: {
            scale: {
                startValue: 0,
                endValue: 100,
                majorTick: {
                    showCalculatedTicks: false,
                    customTickValues: [0, 25, 50, 75, 100]
                }
            }
        },

        viewShown: function () {
            CalculateSpeedLoss();
            this.speedLoss(gSpeedLoss);
            this.speedLossPercent(gSpeedLossPercent);
            $("#lgSpeedLoss").dxLinearGauge({
                rangeContainer: {
                    ranges: [
                        { startValue: 0, endValue: gTargetSpeedLoss, color: '#A6C567' },
                        { startValue: gTargetSpeedLoss, endValue: 100, color: '#E19094' }]
                },
                markers: [{ value: gSpeedLossPercent }]
            });
        }
    };

    return viewModel;
}; 
