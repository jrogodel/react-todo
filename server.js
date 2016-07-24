var chokidar = require('chokidar');
var config = require('./webpack.config.js');
var express = require('express');
var path = require('path');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var compiler = webpack(config);
var app = express();

// Serve hot-reloading bundle to client
app.use(webpackDevMiddleware(compiler, {
	noInfo: true, publicPath: config.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

// Include server routes as a middleware
app.use(function(req, res, next) {
  require('./server/app')(req, res, next);
});

app.use(express.static('./build'));

app.use(function (req, res) {
    res.sendFile(path.resolve('./index.html'));
});

// Do "hot-reloading" of express stuff on the server
// Throw away cached modules and re-require next time
// Ensure there's no important state in there!
const watcher = chokidar.watch('./server');

watcher.on('ready', function() {
  watcher.on('all', function() {
    console.log("Clearing /server/ module cache from server");
    Object.keys(require.cache).forEach(function(id) {
      if (/[\/\\]server[\/\\]/.test(id)) delete require.cache[id];
    });
  });
});

// Do "hot-reloading" of react stuff on the server
// Throw away the cached client modules and let them be re-required next time
compiler.plugin('done', function() {
  console.log("Clearing /client/ module cache from server");
  Object.keys(require.cache).forEach(function(id) {
    if (/[\/\\]client[\/\\]/.test(id)) delete require.cache[id];
  });
});

// Configure server address
const server = http.createServer(app);
server.listen(3000, 'localhost', function(err) {
  if (err) throw err;

  const addr = server.address();

  console.log('Listening at http://%s:%d', addr.address, addr.port);
});
