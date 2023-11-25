const path = require('path');
const fs = require('fs');

const { PATH_FULL_FOR_SRC } = require('./constants');

module.exports = function() {
	const modulesPath = path.resolve(__dirname, `${PATH_FULL_FOR_SRC}/modules`);

	// Check if the directory exists
	if (!fs.existsSync(modulesPath)) {
		console.error(`Error: The directory ${modulesPath} does not exist.`);
		return [];
	}

	// Read the files in the directory
	const moduleFiles = fs.readdirSync(modulesPath);

	const output = {}

	moduleFiles.forEach(item => {
		const [name, extension] = item.split('.');

		if (extension === 'js') {
			output[name] = `./src/modules/${name}.${extension}`;
		}
	});

	return output;
}
