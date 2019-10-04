const mongoose = require('mongoose');

const configure = () => mongoose.connect(
  'mongodb+srv://omnistack:omnistack@omnistack-dr4b5.mongodb.net/semana09?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

module.exports = {
  configure
};
