//Controllo del localStorage per la presenza di variabili già in memoria da sessioni precedenti
if (localStorage.getItem('target_efficiency')) {
    var gTargetEfficiency = localStorage.getItem('target_efficiency');
}
else {
    var gTargetEfficiency = 70;         // %
}

if (localStorage.getItem('target_performance')) {
    var gTargetPerformance = localStorage.getItem('target_performance');
}
else {
    var gTargetPerformance = 70;         // %
}

if (localStorage.getItem('target_speed_loss')) {
    var gTargetSpeedLoss = localStorage.getItem('target_speed_loss');
}
else {
    var gTargetSpeedLoss = 20;         // %
}

// Quantità di tempo pianificata per la conclusione di un ciclo di produzione o 
// per la produzione dell'intera quantità di un ordine
var gTargetPO = 0;
// Quantità di tempo di produzione effettiva, depurata dai downtime programmati 
// e non relativi al PO stesso
var gEffectivePO = 0;

// Quantità di tempo per le fermate programmate e relative allo specifico PO
var gDownTimePO = 0;
// Quantità di tempo per le fermate programmate e non relative allo specifico PO
var gDownTimeNPO = 0;
// Quantità di tempo per le fermate non programmate e non relative allo specifico PO
var gBreakDownPO = 0;

var gDownTimeTotal = gDownTimeNPO + gDownTimePO;


// Calcolo del DownTime Totale
function CalculateDownTimeTotal() {
    gDownTimeTotal = gDownTimePO + gDownTimeNPO;
};

var gPerformance = 0;
var gEfficiency = 0;

// Calcolo Performance
function CalculatePerformance() {
    if (gEffectivePO !== 0) {
        gPerformance = (gTargetPO / gEffectivePO) * 100;
    }
    else {
        gPerformance = 0;
    }
};

// Calcolo Efficienza
function CalculateEfficiency() {
    if ((gEffectivePO - gDownTimePO) !== 0) {
        gEfficiency = gTargetPO / (gEffectivePO - gDownTimePO) * 100;
    }
    else {
        gEfficiency = 0;        
    }
};

var gSpeedLoss = 0;
var gSpeedLossPercent = 0;

// Calcolo perdita di velocità
function CalculateSpeedLoss() {
    gSpeedLoss = gEffectivePO - gTargetPO - gDownTimePO - gBreakDownPO;
    gSpeedLossPercent = gSpeedLoss / gEffectivePO * 100;
};