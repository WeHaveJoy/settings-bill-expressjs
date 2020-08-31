// var moment = require('moment');
// moment().format();
module.exports = function () {

    let theSettings;
    // let callCost = 0;
    // let smsCost = 0;
    // let warningLevel;
    // let criticalLevel;

    // let totalCallCost = 0;
    // let totalSmsCost = 0;

    actionsList = [];

    function getTotalCallCost() {
        return getTotals("call");
    }

    function getTotalSmsCost() {
        return getTotals("sms");
    }

    function setSettings(settings) {
        //console.log(theSettings);
        //let price = 0;
        theSettings = settings;
        // totalCallCost = callCost + settings;
        // smsCost = smsCost + settings;
        // theWarningLevel = settings;
        // theCriticalLevel = settings;
    }

    function hasReachedCriticalLevel() {
        if(theSettings){
              return totals() >= theSettings.criticalLevel;
    }
}
    function hasReachedWarningLevel() {
        if(theSettings){
         return totals() >= theSettings.warningLevel && totals() < theSettings.criticalLevel;
    }
}

    function styleColor() {
        if (hasReachedCriticalLevel()) {
            return "danger"
        } else if (hasReachedWarningLevel()) {
            return "warning"
        }
    }

    function getSettings() {
        return theSettings;

        // return {
        //     theSettings,
        //     callCost,
        //     smsCost,
        //     warningLevel,
        //     criticalLevel
        // }
    }

    function totals() {
        return getTotals("call") + getTotals("sms");
    }

    function actionsFor(type) {
                return actionsList.filter((action) => action.type === type);
            }
        
function actions(){
    return actionsList;
}

function getTotals(type){
    let total = 0;
    for(var i= 0; i< actionsList.length; i++){
        if(actionsList[i].type == type){
            total += actionsList[i].cost;
        }
    }
    return total;

}

    function recordAction(action) {
        if(!hasReachedCriticalLevel()){
            let cost = 0;
            if (action === 'call') {
                cost = Number(theSettings.callCost);
            } else if (action === 'sms') {
                cost = Number(theSettings.smsCost);
            }
    
            actionsList.push({
                type: action,
                cost,
                // timestamp: moment.startOf('ss').fromNow()
            });
        }
       
    }

    return {
        getSettings,
        totals,
        setSettings,
        recordAction,
        getTotalCallCost,
        getTotalSmsCost,
        hasReachedCriticalLevel,
        hasReachedWarningLevel,
        styleColor,
        actionsFor,
        actions,
    getTotals
    }
}