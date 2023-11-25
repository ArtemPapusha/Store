const path = require('path');

module.exports = function() {
	return {
		'@': path.resolve(__dirname + '/../../', 'src'),
		'~': path.resolve(__dirname + '/../../', 'src/scss'),
	}
};
