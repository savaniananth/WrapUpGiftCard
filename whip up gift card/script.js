function generate(){
    const num = document.getElementById('number').ariaValueMax;
    for(let i=1;i<=num;i++){
        const parent1 = document.getElementById("output");
        const child1 = document.createElement("div");
        child1.setAttribute("class","gift");
        child1.innerHTML = i;
        parent1.appendChild(child1);
    }
}