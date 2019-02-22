module.exports = [
  {
    name: 'ID',
    type: 'input',
    message: 'Input CEP ID(like:com.adobe.starter-cep)',
    validate: (n) => {
      return !!n
    }
  },
  {
    name: 'name',
    type: 'input',
    message: 'Input CEP-Plugin Name(like:筷子智图)',
    validate: (n) => {
      return !!n
    }
  },
  {
    name: 'port',
    type: 'input',
    message: 'Input DevServer Port to debugger(default: 8089)',
    default: '8089',
    validate: (n) => {
      return !isNaN(+n)
    }
  }
]
