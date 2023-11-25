const path = require('path');

module.exports = function() {
	return {
		filename: 'scripts/[name].js',
		path: path.resolve(__dirname + '/../../', 'dist'),
	}
}
