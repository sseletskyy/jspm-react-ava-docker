const glob = require('glob')
const path = require('path')
const Module = require('module')
const load = Module._load
Module._load = (name, m) => {
  try {
    return load(name, m)
  } catch (e) {
    // let files = glob(__dirname + '/jspm_packages/**/' + name + '*/', {sync: true})
    let files = glob(path.join(__dirname, 'jspm_packages', '**', `${name}*`), {sync: true})
    // console.log('-------files\n', name);
    if (files.length > 0) return load(files[0], m)
  }
}
