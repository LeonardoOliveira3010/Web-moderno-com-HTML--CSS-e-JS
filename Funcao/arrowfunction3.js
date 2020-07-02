let comparaComThis = function(param){
    console.log(this === param)
}
comparaComThis(global)

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global)
comparaComThis(obj)

let comparaComThisArrow = (param) => console.log(this === param)
comparaComThisArrow(global)
comparaComThisArrow(module.exports)
// no caso do arrow o global se torna false, em uma função normal o this (global) se torna true
// para tornar o this no arrow true, deve se utilizar o module.exports

comparaComThisArrow = comparaComThisArrow.bind(obj )
comparaComThisArrow(obj)