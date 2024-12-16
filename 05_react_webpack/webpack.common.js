const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");
const HtmlPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

module.exports = {
    entry: {
        popup: path.resolve("./src/popup/popup.tsx"),
        options: path.resolve("./src/options/options.tsx"),
        background: path.resolve("./src/background/background.ts"),
        contentScript: path.resolve("./src/contentScript/contentScript.ts")

    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/,
            },
            {
                use: ["style-loader", "css-loader"],
                test: /\.css$/i
            }, 
            {
                type: "asset/resource",
                test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|eot|ttf)$/
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),
        new CopyPlugin({
            patterns: [
                { from: path.resolve("src/static"),
                 to: path.resolve("dist") 
                },
            ],
        }),
        ...getHtmlPlugin(["popup", "options"]),
    ],
    resolve: {
        extensions: [".tsx", ".ts", ".js"],
    },
    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
    },
}

function getHtmlPlugin(chunks) {
    return chunks.map((chunk) => new HtmlPlugin({
        title: "React Webpack Extension",
        filename: `${chunk}.html`,
        chunks: [chunk]
    }))
}