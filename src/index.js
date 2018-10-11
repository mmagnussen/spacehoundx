import webpack from 'webpack';
import config from '../webpack.config.dev';

const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));