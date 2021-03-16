const trashTalk = require('../models/trashTalkGenerator')

exports.getIndex = (req, res) => {
  res.render('index')
}

exports.postSelection = (req, res) => {
  const selection = req.body.selection
  const speech = trashTalk(selection)
  res.render('index', { selection, speech })
}
