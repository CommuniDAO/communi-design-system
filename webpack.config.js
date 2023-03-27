const path = require('path');
const currentPath = path.join(__dirname);

module.exports = {
  mode: 'production',
  entry: './src/index.ts',
  devServer: {
    contentBase: './src'
  },  
  output: {
    path: path.resolve(currentPath, 'lib'),
    filename: '[name]/[name].js',    
  },
  resolve: {
    fallback: {
      "crypto": require.resolve("crypto-browserify")
    },
    extensions: ['*', '.ts', '.tsx', '.js', '.jsx', '.json', '.css'],
    alias: {
      '~/styles': path.resolve(currentPath, 'styles'),
      '~/src': path.resolve(currentPath, 'src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.tsx?/,
        exclude: /node_modules/,
        use: 'ts-loader'
      },
      {
        test: /\.css$/,
        use: ['postcss-loader']
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader']
      }
    ]
  }
};
