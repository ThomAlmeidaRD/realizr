'use strict'

// Caixa de Texto e Botão adicionar
var textbox = document.getElementById('textbox')

// UL lista de tarefas
var task_list = document.getElementById('task-list')

//Contador
var contador = document.getElementById('contador')
var contador_Tasks = 1

function createTask() {

    if (textbox.value == '') {
        alert('Descreva sua tarefa..')
    } else {

        //criar elemento LI
        var newLI = document.createElement('li')

        //criar elemento div
        var newDIV = document.createElement('div')

        //criar elemento p
        var newP = document.createElement('p')

        //criar elemento br
        var newBR = document.createElement('br')

        //criar elemento h3
        var newH3 = document.createElement('h3')

        // Inserir um dentro do outro

        task_list.appendChild(newLI)

        newLI.appendChild(newDIV)
        newDIV.appendChild(newP)
        newDIV.appendChild(newBR)
        newDIV.appendChild(newH3)

        //atribuindo classes
        newLI.classList.add('task')

        //Conteúdos das variáveis

        newH3.innerText = textbox.value
        newP.innerText = '😴 A fazer'

        //Limpar caixa de texto
        textbox.value = ""

        //Contador de tarefas criadas
        contador.innerText = contador_Tasks++

        // Estado da tarefa

        newH3.addEventListener('click', function () {
            newLI.style.display = 'none'
        })

        newP.addEventListener('click', function () {
            newP.innerText = '😉 Fazendo'
            newP.style.backgroundColor = '#08b329'
        })

        newP.addEventListener('dblclick', function () {
            newP.innerText = '😎 Pronto'
            newP.style.backgroundColor = '#763bf5'
        })

    }

}