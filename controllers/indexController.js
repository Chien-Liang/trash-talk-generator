const speak = require('../models/trashTalkGenerator')

exports.getIndex = (req, res) => {
  res.render('index')
}

exports.postSelection = (req, res) => {
  const selection = req.body.selection
  const speech = speak.trashTalk(selection)
  res.render('index', {
    engineer: speak.engineer,
    designer: speak.designer,
    entrepreneur: speak.entrepreneur,
    speech,
  })
}
