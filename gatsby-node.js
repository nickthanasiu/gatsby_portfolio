/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
    actions.setWebpackConfig({
        resolve: {
            alias: {
                "~components": path.resolve(__dirname, "src/components"),
                "~context": path.resolve(__dirname, "src/context"),
                "~styles": path.resolve(__dirname, "src/styles"),
                "~images": path.resolve(__dirname, "src/images"),
                'react-dom': '@hot-loader/react-dom' ,
            }
        }
    })
}