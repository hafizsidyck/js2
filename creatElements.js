function createaSection() {
    const newSection = document.createElement("section");
    console.log(newSection);
    const body = document.querySelector("body");

    //section
    //const newSection = document.createElement("section");
    //console.log(newSection);
    
    //const body = document.querySelector("body");
    
    //h2
    
    const newH2 = document.createElement("h2");
    newH2.textContent = "section 3";
    newSection.appendChild(newH2);
    
    //p
    
    const newP = document.createElement("p");
    newP.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi, nam nobis eum harum aut adipisci, cumque repellat modi facilis, mollitia dolores. Eos, nam ducimus? Accusantium, nisi dolor. Accusamus, doloribus similique!"
    newSection.appendChild(newP);
    
    body.appendChild(newSection);
}