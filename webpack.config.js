module.exports = {
entry: ['babel-polyfill', './src/app.js'],
output: {
path: '/home/ivan/Chlamydae/projja/dist/',
filename: 'app.js',
publicPath: '/'
},
devServer: {
inline: true,
port: 3000,
contentBase: '/home/ivan/Chlamydae/projja/dist/'
},
module: {
loaders: [
{
test: /.js$/,
exclude: /(node_modules|bower_components)/,
loader: 'babel-loader',
query: {
presets: ['es2015', 'stage-0', 'react']
}
}
]
}
}