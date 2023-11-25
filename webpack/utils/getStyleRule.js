const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function () {
	return {
		test: /\.s?css$/i,
		use: [
			MiniCssExtractPlugin.loader,
			{
				loader: 'css-loader',
				options: { url: false }
			},
			"postcss-loader",
			"sass-loader",
		],
	};
}
