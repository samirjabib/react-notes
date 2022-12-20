module.exports = { //Nos permite usar las nuevas importaciones con jest para los test
    presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
  };