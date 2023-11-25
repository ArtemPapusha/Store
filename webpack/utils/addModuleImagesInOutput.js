const path = require('path');
const fs = require('fs');

const { PATH_FULL_FOR_SRC, IMAGE_FORMATS } = require('./constants');

module.exports = function() {
	const imagesPath = path.resolve(__dirname, `${PATH_FULL_FOR_SRC}/assets/images`);

	// Check if the directory exists
	if (!fs.existsSync(imagesPath)) {
		console.error(`Error: The directory ${imagesPath} does not exist.`);
		return [];
	}

	// Read the files in the directory
	const imageFiles = fs.readdirSync(imagesPath);

	const output = {}

	imageFiles.forEach(item => {
		const [name, extension] = item.split('.');

		if (IMAGE_FORMATS.includes(extension)) {
			output[name] = `./src/assets/images/${name}.${extension}`;
		}
	});

	return output;
}
