var config = require('../config/global');

var logService     = require('../services/logService'),
    speakService   = require('../services/speakService'),
    weatherService = require('../services/weatherService');


var date = new Date();

weatherService.getTemperature(function(temp) {
  var temp = Math.round(temp);
  speakService.say('Bonjour' + config.env.username +', il est ' + date.getHours() + ' heures et dehors il fait ' + temp + 'degres');
});

// Force exit process
setTimeout(function() {
  process.exit();
}, 10000);
