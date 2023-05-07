import * as dotenv from 'dotenv';
import { merge } from 'webpack-merge';

import common from './webpack.common.js';

dotenv.config();

const { PORT, SOCKETS_ENABLE } = process.env;

const config = {
  mode: 'development',
  optimization: {
    usedExports: true
  },
  devServer: {
    hot: true,
    port: 8000,
    host: '192.168.196.128',
    client: {
      overlay: {
        warnings: false,
        errors: true
      }
    },
    proxy: {
      context: ['/api', '/ws', '/favicon.ico'],
      target: `http://localhost:${PORT || 8080}`,
      ws: SOCKETS_ENABLE === 'true'
    },
    historyApiFallback: true
  }
};

export default merge(common, config);
