const LoaderOptionsPlugin = require("../../lib/LoaderOptionsPlugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
	// mode: "development || "production",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: "css-loader"
				})
			},
			{ test: /\.png$/, loader: "file-loader" }
		]
	},
	plugins: [
		new ExtractTextPlugin({
			filename: "style.css"
		}),
		// Temporary workaround for the file-loader
		new LoaderOptionsPlugin({
			options: {}
		})
	],
	optimization: {
		occurrenceOrder: true // To keep filename consistent between different modes (for example building only)
	}
};
