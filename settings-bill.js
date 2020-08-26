
module.exports = function () {

    let theSettings;
    // let callCost = 0;
    // let smsCost = 0;
    // let warningLevel;
    // let criticalLevel;

    let totalCallCost = 0;
    let totalSmsCost = 0;

    actionsList = [];
    // function setSmsCost() {

    // }

    // function setCallCost() {

    // }

    // function grandTotal() {

    // }
    function getTotalCallCost() {
        return totalCallCost;
    }

    function getTotalSmsCost() {
        return totalSmsCost;
    }

    function setSettings(settings) {
        //console.log(settings);
        //let price = 0;
        theSettings = settings;
        // totalCallCost = callCost + settings;
        // smsCost = smsCost + settings;
        // theWarningLevel = settings;
        // theCriticalLevel = settings;

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
        return totalCallCost + totalSmsCost;
    }

    function recordAction(action) {
        let cost = 0;
        // console.log(action);
        if (action === 'call') {
            totalCallCost = totalCallCost + Number(theSettings.callCost);
            console.log(totalCallCost);
        } else if (action === 'sms') {
            totalSmsCost = totalSmsCost + Number(theSettings.smsCost);
        }

        actionsList.push({
            type: action,
            cost,
            timestamp: new Date()
        });
    }

    return {
        getSettings,
        totals,
        setSettings,
        recordAction,
        getTotalCallCost,
        getTotalSmsCost,
    }

}



