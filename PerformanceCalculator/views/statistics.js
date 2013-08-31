PerformanceCalculator.statistics = function (params) {

    var viewModel = {
        // Variabili associate ai controlli
        efficiency: ko.observable(gEfficiency),
        performance: ko.observable(gPerformance),

        // Opzioni per la percentuale di Efficienza
        efficiencyGaugeOptions: {
            scale: {
                startValue: 0,
                endValue: 100,
                majorTick: {
                    showCalculatedTicks: false,
                    customTickValues: [0, 25, 50, 75, 100]
                }
            }
        },

        // Opzioni per la percentuale di Performance
        performanceGaugeOptions: {
            scale: {
                startValue: 0,
                endValue: 100,
                majorTick: {
                    showCalculatedTicks: false,
                    customTickValues: [0, 25, 50, 75, 100]
                }
            }
        },

        // Opzioni per la percentuale di DownTime
        downTimePercentGaugeOptions: {
            scale: {
                startValue: 0,
                endValue: 100,
                majorTick: {
                    showCalculatedTicks: false,
                    customTickValues: [0, 25, 50, 75, 100]
                }
            }
        },

        // Opzioni per la percentuale di BreakDown
        breakDownPercentGaugeOptions: {
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
            CalculatePerformance();
            CalculateEfficiency();
            this.efficiency(gEfficiency);
            this.performance(gPerformance);
            $("#lgEfficiency").dxLinearGauge({
                rangeContainer: {
                    ranges: [
                        { startValue: 0, endValue: gTargetEfficiency, color: '#E19094' },
                        { startValue: gTargetEfficiency, endValue: 100, color: '#A6C567' }]
                },
                markers: [{ value: gEfficiency }]
            });
            $("#lgPerformance").dxLinearGauge({
                rangeContainer: {
                    ranges: [
                        { startValue: 0, endValue: gTargetPerformance, color: '#E19094' },
                        { startValue: gTargetPerformance, endValue: 100, color: '#A6C567' }]
                },
                markers: [{ value: gPerformance }]
            });

            var downtimePercent = 0;
            var breakdownPercent = 0;
            if (gEffectivePO !== 0) {
                downtimePercent = gDownTimeTotal / gEffectivePO * 100;
                breakdownPercent = gBreakDownPO / gEffectivePO * 100;
            }           

            $("#lgDownTimePercent").dxLinearGauge({
                markers: [{ value: downtimePercent }]
            });
            $("#lgBreakDownPercent").dxLinearGauge({
                markers: [{ value: breakdownPercent }]
            });
        },

    };

    return viewModel;
};