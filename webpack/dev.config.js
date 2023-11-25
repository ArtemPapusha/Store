const generateHtmlPlugins = require('./utils/generateHtmlPlugins');
const getCssPlugins = require('./utils/getCssPlugins');
const addModuleScriptInOutput = require('./utils/addModuleScriptInOutput');
const addModuleFontsInOutput = require("./utils/addModuleFontsInOutput");
const addModuleImagesInOutput = require("./utils/addModuleImagesInOutput");
const getAlias = require('./utils/getAlias');
const getStyleRule = require('./utils/getStyleRule');
const getFontsRule = require('./utils/getFontsRule');
const getImageRule = require('./utils/getImageRule');
const getOutput = require('./utils/getOutput');
const getDevServer = require('./utils/getDevServer');

const config = {
	mode: 'development',
	devServer: getDevServer(),
	output: getOutput(),
	entry: {
		...addModuleScriptInOutput(),
		...addModuleFontsInOutput(),
		...addModuleImagesInOutput(),
	},
	plugins: [
		...generateHtmlPlugins(),
		...getCssPlugins(),
	],
	module: {
		rules: [
			getStyleRule(),
			getFontsRule(),
			getImageRule(),
		],
	},
	resolve: {
		alias: getAlias(),
	},
};

module.exports = config;
