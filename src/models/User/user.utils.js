const Task = require('../Task/Task');

async function deletesUsersTasks(next) {

  await Task.deleteMany({ owner: this.id });

  next();

}

module.exports = {
  deletesUsersTasks
};
