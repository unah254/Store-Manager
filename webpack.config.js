const path = require("path");
module.exports = {
  mode: "development",

  // define entry points
  entry: {
    signup: "./UI/static/js/signup.js",
    login: "./UI/static/js/login.js",
    
  },
  // define output point
  output: {
    path : path.resolve(__dirname, 'public/dist'),
    filename: '[name].bundle.js'
},
module: {
     rules: [
         {
         test: /\.js$/,
         exclude: /node_modules/,
         use:{
             loader: "babel-loader",
             options: {
                 // babel-core && babel-preset-env gets babel setup ready to transpile
                 presets: ["@babel/preset-env"   ]
             }
         }
         }
     ]
}
};
