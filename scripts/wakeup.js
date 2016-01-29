var config = require('../config/global');

var logService     = require('../services/logService'),
    speakService   = require('../services/speakService'),
    alarmService  = require('../services/alarmService'),
    weatherService = require('../services/weatherService');


weatherService.getTemperature(function(temp) {
  var temp = Math.round(temp);
  speakService.say('Bonjour' + config.env.username +', il est ' + alarmService.getTime() + ' et dehors il fait ' + temp + 'degres');
});

// Force exit process
setTimeout(function() {
  process.exit();
}, 10000);
