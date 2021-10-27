'use strict'

var cap = document.getElementById('my-level')
var levelP = document.getElementById('level-progress')

var cont = 0
var level = 0

cap.addEventListener('click', function () {

    cont++
    levelP.style.width = cont + '%'

    if(cont >= 100){
        cont = 0
        levelP.style.width = 0 + '%'
        level++
        cap.innerText = level
    }


})