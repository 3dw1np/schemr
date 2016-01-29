var config = require('../config/global');

module.exports = {
	/**
	 * get hours and minutes
	 *
	 * @method getTime
	 * @return string
	 */
  getTime: function() {
  	var date = new Date();
  	var hours = date.getHours();
  	var minutes = date.getMinutes();
    
    return hours + ':' + minutes;
  }

}