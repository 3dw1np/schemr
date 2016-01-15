var config = require('../config/global');

var mpg321 = require('mpg321'),
    player = mpg321().remote();


module.exports = {
	/**
	 * Use the service google translate to say something
	 *
	 * @method say
	 * @param string tts
	 * @return
	 */
  say: function(tts) {
    var file = 'http://translate.google.com/translate_tts?client=tw-ob&tl=' + config.googleVoice.lang + '&q=' + encodeURIComponent(tts);
    player.play(file);
  }

}
