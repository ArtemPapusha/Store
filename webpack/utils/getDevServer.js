const { PORT } = require('./constants');

module.exports = function() {
	return {
		port: PORT,
		open: true
	}
}
