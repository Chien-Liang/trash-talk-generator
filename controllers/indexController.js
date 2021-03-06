const speak = require('../models/trashTalkGenerator')

exports.getIndex = (req, res) => {
  res.render('index')
}

exports.postSelection = (req, res) => {
  const selection = req.body.selection
  const speech = speak.trashTalk(selection)
  const engineer = selection === 'engineer'
  const designer = selection === 'designer'
  const entrepreneur = selection === 'entrepreneur'
  res.render('index', { engineer, designer, entrepreneur, speech })
}
