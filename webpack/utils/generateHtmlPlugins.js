const path = require('path');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const { PATH_FULL_FOR_SRC } = require('./constants');

module.exports = function() {
	const templatePath = path.resolve(__dirname, `${PATH_FULL_FOR_SRC}/pages`);

	// Check if the directory exists
	if (!fs.existsSync(templatePath)) {
		console.error(`Error: The directory ${templatePath} does not exist.`);
		return [];
	}

	// Read the files in the directory
	const templateFiles = fs.readdirSync(templatePath);

	return templateFiles.map(item => {
		const parts = item.split('.');
		const name = parts[0];
		const extension = parts[1];

		return new HtmlWebpackPlugin({
			filename: `${name}.${extension}`,
			template: path.resolve(templatePath, `${name}.${extension}`),
			chunks: [name],
			favicon: './src/assets/favicon.ico',
			inject: 'body',
		});
	});
}
