const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢'],
}

const phrase = ['很簡單', '很容易', '很快', '很正常']

const getId = num => Math.floor(Math.random() * num)

const trashTalk = selection => {
  const element = task[selection]
  const taskid = getId(element.length)
  const phraseId = getId(phrase.length)
  let target = ''
  switch (selection) {
    case 'engineer':
      target = '工程師'
      break
    case 'designer':
      target = '設計師'
      break
    case 'entrepreneur':
      target = '創業家'
      break
  }
  return `身為一個${target}，${element[taskid]}，應該${phrase[phraseId]}吧！`
}

module.exports = trashTalk
