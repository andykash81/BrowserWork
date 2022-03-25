const deadClick = document.getElementById("dead");
const lostClick = document.getElementById("lost");
for (let i=1; i < 10; i++) {
    let getHole = document.getElementById(`hole${i}`);
    getHole.onclick = () => {
        if (getHole.className.includes("hole_has-mole")) {
            if (deadClick.textContent == '9') {
                alert('Вы победили!');
                deadClick.textContent = 0;
                lostClick.textContent = 0;
            }
            else deadClick.textContent = Number(deadClick.textContent) + 1;
        }
        else {
            if (lostClick.textContent == '4') {
                alert('Вы проиграли. Попробуйте еще.');
                deadClick.textContent = 0;
                lostClick.textContent = 0;
            }
            else lostClick.textContent = Number(lostClick.textContent) + 1;
        }
    }
}

