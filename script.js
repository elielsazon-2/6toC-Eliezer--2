let btn = document.getElementById('btn')

btn.addEventListener('mouseover', random)

function random(){
    if(btn.classList.contains('btnrandom')) {
        btn.classList.replace('btnrandom', 'move1')
    }
    else if (btn.classList.contains('move1')) {
        btn.classList.replace('move1', 'move2')
    }
    else if (btn.classList.contains('move2')) {
        btn.classList.replace('move2', 'move3')
    }
    else if (btn.classList.contains('move3')) {
        btn.classList.replace('move3', 'move4')
    }
    else if (btn.classList.contains('move4')) {
        btn.classList.replace('move4', 'btnrandom')
    }
}