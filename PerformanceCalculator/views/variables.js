PerformanceCalculator.variables = function (params) {

    var viewModel = {
        // Variabili associate ai controlli
        targetPO: ko.observable(gTargetPO),
        effectivePO: ko.observable(gEffectivePO),
        downTimePO: ko.observable(gDownTimePO),
        downTimeNPO: ko.observable(gDownTimeNPO),
        breakDownNPO: ko.observable(gBreakDownPO),
        downTimeTotal: ko.observable(gDownTimeTotal),

        RefreshStopChart: function () {
            $("#chStops").dxPieChart({
                dataSource:
                [{ arg: 'Dt. PO', val: gDownTimePO },
                    { arg: 'Dt. NPO', val: gDownTimeNPO },
                    { arg: 'BD', val: gBreakDownPO }], series: {}
            })
        },

        downTimePO_focusOut: function () {
            gDownTimePO = this.downTimePO();
            CalculateDownTimeTotal();
            this.downTimeTotal(gDownTimeTotal);
            this.RefreshStopChart();
        },
        downTimeNPO_focusOut: function () {
            gDownTimeNPO = this.downTimeNPO();
            CalculateDownTimeTotal();
            this.downTimeTotal(gDownTimeTotal);
            this.RefreshStopChart();
        },
        targetPO_focusOut: function () {
            gTargetPO = this.targetPO();
        },
        effectivePO_focusOut: function () {
            gEffectivePO = this.effectivePO();
        },
        breakDownNPO_focusOut: function () {
            gBreakDownPO = this.breakDownNPO();
            this.RefreshStopChart();
        }

    };

    return viewModel;
};