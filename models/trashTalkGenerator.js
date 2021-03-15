const task = {
  engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
  designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
  entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢'],
}

const phrase = ['很簡單', '很容易', '很快', '很正常']

const getId = num => Math.floor(Math.random() * num)

const trashTalk = selection => {
  const target = task[selection]
  const taskid = getId(target.length)
  const phraseId = getId(phrase.length)
  return `${target[taskid]}，應該${phrase[phraseId]}吧！`
}

module.exports = trashTalk
