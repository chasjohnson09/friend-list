let names = [];
const loadDiv = () => {
    let divCtrl = document.getElementById("ps");
    divCtrl.innerHTML= " ";
    for(let name of names){
        let p = `<p>${name}</p>`;
        divCtrl.innerHTML += p;
    }
}
const addName = () => {
    let nameCtrl = document.getElementById("newname");
    let name = nameCtrl.value;
    names.push(name);
    loadDiv();
}