const list = document.getElementById('list');
const button = document.getElementById('button');


button.addEventListener("click",() => {
    list.classList.toggle("toggle")
    button.classList.toggle("toggle")
})