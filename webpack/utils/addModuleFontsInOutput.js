const path = require('path');
const fs = require('fs');

const { PATH_FULL_FOR_SRC, fONT_FORMATS } = require('./constants');

module.exports = function() {
	const fontsPath = path.resolve(__dirname, `${PATH_FULL_FOR_SRC}/assets/fonts`);

	// Check if the directory exists
	if (!fs.existsSync(fontsPath)) {
		console.error(`Error: The directory ${fontsPath} does not exist.`);
		return [];
	}

	// Read the files in the directory
	const fontFiles = fs.readdirSync(fontsPath);

	const output = {}

	fontFiles.forEach(item => {
		const [name, extension] = item.split('.');

		if (fONT_FORMATS.includes(extension)) {
			output[name] = `./src/assets/fonts/${name}.${extension}`;
		}
	});

	return output;
}
