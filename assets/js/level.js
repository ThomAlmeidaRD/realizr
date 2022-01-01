'use strict'

var str_level = document.getElementById('my-level')
var str_xp = document.getElementById('level-progress')

var xp = 0
var meta_xp = 5
var level = 0


var tier_levels = ['bronze', 'prata', 'ouro']
var str_tier_level = document.getElementById('tier-name')

function verifyTier() {
    //verificar tier
    if (level >= 5 & level <= 15) {
        //bronze
    } else if (level >= 15 & level <= 25) {
        //prata
    } else if (level >= 25 & level <= 35) {
        //ouro
    }

    function levelUp() {

        if (xp >= meta_xp) {

            //Aumentar nível 
            level++
            console.log('Novo Nível: ' + level + ', xp: ' + xp)

            //Aumentar gradualmente a meta de xp e levelcap 
            meta_xp = meta_xp * 1.6
            console.log('Nova Meta de XP: ' + meta_xp)

            //reposta visual
            str_level.innerText = level

        }
    }