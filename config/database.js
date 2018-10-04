if (process.env.NODE_ENV === 'production') {
  module.exports = {mongoURI: "mongodb://xraybrain:jude6053@ds229552.mlab.com:29552/vidjot-prod"}
} else {
  module.exports = {mongoURI: "mongodb://127.0.0.1:27017/vidjot-dev"}
}