const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const SettingsBill = require('./settings-bill');
var moment = require('moment');
moment().format();

const app = express();
const billSettings = SettingsBill();

app.engine('handlebars', exphbs({
    defaultLayout: 'main',
    layoutsDir: "./views/layouts"
}));

app.set('view engine', 'handlebars');

app.use(express.static('public'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.render('index', {
        settings: billSettings.getSettings(),
        totals: billSettings.totals().toFixed(2),
        totalCallCost: billSettings.getTotalCallCost().toFixed(2),
        totalSmsCost: billSettings.getTotalSmsCost().toFixed(2),
        totalStyle: billSettings.styleColor(),
        // moment: billSettings.moment(item.timestamp).fromNow()


    });
});

app.post('/settings', function (req, res) {

    billSettings.setSettings({
        callCost: req.body.callCost,
        smsCost: req.body.smsCost,
        warningLevel: req.body.warningLevel,
        criticalLevel: req.body.criticalLevel
    });
    // Console.log(billSettings.getSettings());
    res.redirect('/');
});


app.post('/action', function (req, res) {
    billSettings.recordAction(req.body.actionType)

    res.redirect('/');
});

app.get('/actions', function (req, res) {
    const listActions = billSettings.actions();
    for(action of listActions){
        action.prettyDate = moment(action.timestamp).fromNow();
    }
    res.render('actions', { actions: listActions });

});

app.get('/actions/:actiontype', function (req, res) {

    const actionType = req.params.actiontype;

    const listActions = billSettings.actionsFor(actionType);
    
    for(action of listActions){
        action.prettyDate = moment(action.timestamp).fromNow();
    }
    res.render('actions', { actions: listActions });
});



const PORT = process.env.PORT || 3011
app.listen(PORT, function () {
    //Console.log("App started at PORT:", PORT)
});

app.post('/settings', function (req, res) {
    let smsCost = req.body.smsCost;
    let callCost = req.body.callCost;
    let warningLevel = req.body.warningLevel;
    let criticalLevel = req.body.criticalLevel;

    var settings = {
        smsCost,
        callCost,
        warningLevel,
        criticalLevel
    };

    // process data
    globalSetings = settings;

    // note that data can be sent to the template
    res.render('home', { settings })
});