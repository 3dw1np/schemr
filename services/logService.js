module.exports = {
  /**
	 * Log the output with a timestamp
   *
	 * @method output
	 * @param string msg
	 * @return
	 */
  output: function(msg) {
    var date = new Date();
    var options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false
    };
    
    console.log(date.toLocaleString("en-US", options) + ': ' + msg);
  }

}
