var config = require('../config/global');

var logService = require('../services/logService'),
    request    = require('request');


module.exports = {
  /**
	 * Get the temperature of the day and execute a callback
   *
	 * @method getTemperature
	 * @param float lat
	 * @param float lng
	 * @param {} callback
	 * @return
	 */
  getTemperature: function(callback) {
    var url = config.openWeather.url + '&lang=' + config.openWeather.lang + '&units=' + config.openWeather.units + '&lat=' + config.openWeather.lat.toString() + '&lon=' + config.openWeather.lng.toString() + '&APPID=' + config.openWeather.apiKey;

    request(url, function(error, response, body) {
      try {
        var jsonResult = JSON.parse(body);
        var temp = jsonResult.list[0].temp.day;
        if(callback)
          callback(temp);
      }
      catch(e) {
        logService.output('ERROR - Fail to parse JSON from openWeather ' + e);
      }
    });
  }

}
