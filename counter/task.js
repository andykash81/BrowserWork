const counter = document.getElementById('timer');
getCounter();
function getCounter() {
    let timer = setInterval(() => {
        counter.textContent = Number(counter.textContent) - 1;
        if (counter.textContent == 0) {
            clearInterval(timer);
            timer = null;
            return alert('Вы победили в конкурсе!')
        }
    }, 1000);
}