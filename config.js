var config = {
  mongoURL: process.env.MONGO_URL || 'MLAB OR MONGO URLL HERE',
  //DELETED: mongodb://localhost:27017/mernstack
  port: process.env.PORT || 8000,
};

module.exports = config;