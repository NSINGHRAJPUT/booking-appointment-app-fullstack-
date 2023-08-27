const User = require('../models/user');

exports.postAddProduct = (req, res) => {
  const name = req.body.name;
  const number = req.body.number;
  const email = req.body.email;
  User.create({
    Name: name,
    Number: number,
    Email: email
  }).then((user) => {
    res.send(user)
  }).catch(err => console.log(err))
};


exports.postEditProduct = (req, res) => {
  const number = req.body.Number;
  User.findAll({ where: { Number: number } }).then(([user]) => {
    res.send(user)
  }).catch(err => console.log(err))
};

exports.getProducts = (req, res) => {
  User.findAll().then((user) => {
    res.send(user)
  })
};

exports.postDeleteProduct = (req, res) => {
  const number = req.body.Number;
  let obj = {};
  User.findAll({ where: { Number: number } }).then(([user]) => {
    console.log(user)
    obj = { ...user }
    return user.destroy()
  }).then(() => {
    res.redirect(obj);
  }).catch(err => console.log(err))
};
