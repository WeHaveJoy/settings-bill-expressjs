let assert = require("assert");
let SettingsBill = require("..//settings-bill");

describe("The Settings bill factory function", function () {

    it("It should be able to set the call cost", function () {
         let billSettings = SettingsBill();
        
         const actionSettings = {
            callCost: 2.20
         };

         billSettings.setSettings(actionSettings);
         const currtSettings = billSettings.getSettings();

         assert.deepEqual(actionSettings, currtSettings);
    })

    
it("It should be able to set the sms cost", function () {
    let billSettings = SettingsBill();
   
    const actionSettings = {
        smsCost: 1.20
    };

    billSettings.setSettings(actionSettings);
    const currtSettings = billSettings.getSettings();

    assert.deepEqual(actionSettings, currtSettings);
})


it("It should be able to set the warning level cost", function () {
    let billSettings = SettingsBill();
   
    const actionSettings = {
        warningLevel: 20
    };

    billSettings.setSettings(actionSettings);
    const currtSettings = billSettings.getSettings();

    assert.deepEqual(actionSettings, currtSettings);
});



it("It should be able to set the Critical level cost", function () {
    let billSettings = SettingsBill();
   
    const actionSettings = {
        criticalLevel: 30

    };

    billSettings.setSettings(actionSettings);
    const currtSettings = billSettings.getSettings();

    assert.deepEqual(actionSettings, currtSettings);
})
});