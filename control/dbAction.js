const bgPathModel = require('../schema/bgPathModel');

// 查找数据
async function findData(name) {
  return bgPathModel.findOne({
    name
  }).exec();
}

// 保存数据
async function saveData(name, url) {
  return new Promise((resolve, reject) => {
    let data = new bgPathModel({
      name,
      url
    });
    data.save((err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  })
}


module.exports = {
  findData,
  saveData
}