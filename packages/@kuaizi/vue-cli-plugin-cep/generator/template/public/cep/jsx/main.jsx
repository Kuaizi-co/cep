var mu, ki
var psActionPlugin

function initApp () {
  // 多个jsx后台程序入口
  $.evalFile(path + "/jsx/json3.js")
  $.evalFile(path + "/jsx/kinase-lib.jsx")
  $.evalFile(path + "/jsx/muclease-lib.jsx")

  $.global.Kinase = Kinase
  $.global.Muclease = Muclease
  mu = new Muclease()
  ki = new Kinase()

  $.evalFile(path + "/jsx/action.jsx")
  psAction = new psAction()
}

