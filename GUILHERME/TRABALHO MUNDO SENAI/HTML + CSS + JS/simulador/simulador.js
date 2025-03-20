const elementosContainer = document.getElementById("elementos");
const areaReacao = document.getElementById("area-reacao");
const resultado = document.getElementById("resultado");
const verificarBtn = document.getElementById("verificar");

const grupos = {
    l1: ["H", "Li", "Na", "K", "Rb", "Cs", "Fr"],
    l2: ["Be", "Mg", "Ca", "Sr", "Ba", "Ra"],
    l3: ["Sc", "Y"],
    l4: ["Ti", "Zr", "Hf", "Rf"],
    l5: ["V", "Nb", "Ta", "Db"],
    l6: ["Cr", "Mo", "W", "Sg"],
    l7: ["Mn", "Tc", "Re", "Bh"],
    l8: ["Fe", "Ru", "Os", "Hs"],
    l9: ["Co", "Rh", "Ir", "Mt"],
    l10: ["Ni", "Pd", "Pt", "Ds"],
    l11: ["Cu", "Ag", "Au", "Rg"],
    l12: ["Zn", "Cd", "Hg", "Cn"],
    l13: ["B", "Al", "Ga", "In", "Tl", "Nh"],
    l14: ["C", "Si", "Ge", "Sn", "Pb", "Fl"],
    l15: ["N", "P", "As", "Sb", "Bi", "Mc"],
    l16: ["O", "S", "Se", "Te", "Po", "Lv"],
    l17: ["F", "Cl", "Br", "I", "At", "Ts"],
    l18: ["He", "Ne", "Ar", "Kr", "Xe", "Rn", "Og"]
};

const reacoes = {
    "H,H,O": "Forma H₂O (Água)",
    "Na,Cl": "Forma NaCl (Sal de Cozinha)",
    "C,O,O": "Forma CO₂ (Dióxido de Carbono)",
    "Fe,Fe,O,O,O": "Forma Fe₂O₃ (Ferrugem)",
    "Ca,C,O,O,O": "Forma CaCO₃ (Calcário)",
    "H,H,O,O": "Forma H₂O₂ (Peróxido de Hidrogênio)",
    "N,H,H,H": "Forma NH₃ (Amônia)",
    "C,H,H,H,H": "Forma CH₄ (Metano)",
    "C,O": "Forma CO (Monóxido de Carbono)",
    "S,O,O,O": "Forma SO₃ (Trióxido de Enxofre)"
};

// Criar o container para os grupos
const gruposContainer = document.createElement("div");
gruposContainer.classList.add("grupos");
elementosContainer.appendChild(gruposContainer);

// Adiciona os elementos ao container
Object.entries(grupos).forEach(([grupo, elementos]) => {
    let grupoDiv = document.createElement("div");
    grupoDiv.classList.add("grupo");

    elementos.reverse().forEach(simbolo => {  // Inverter para alinhar pela base
        let div = document.createElement("div");
        div.classList.add("elemento", grupo);
        div.textContent = simbolo;
        div.setAttribute("draggable", true);
        div.dataset.simbolo = simbolo;

        div.addEventListener("dragstart", e => {
            e.dataTransfer.setData("text", simbolo);
        });

        grupoDiv.appendChild(div);
    });

    gruposContainer.appendChild(grupoDiv);
});

// Permitir soltar elementos na área de reação
areaReacao.addEventListener("dragover", e => e.preventDefault());

areaReacao.addEventListener("drop", e => {
    e.preventDefault();
    let simbolo = e.dataTransfer.getData("text");
    let item = document.createElement("div");
    item.classList.add("elemento");
    item.textContent = simbolo;
    item.dataset.simbolo = simbolo;

    // Remover elemento ao clicar
    item.addEventListener("click", () => item.remove());

    areaReacao.appendChild(item);
});

// Verificar reações químicas
verificarBtn.addEventListener("click", () => {
    let elementosNaReacao = Array.from(areaReacao.children).map(el => el.dataset.simbolo);
    let combinacao = elementosNaReacao.sort().join(",");
    resultado.textContent = reacoes[combinacao] || "Nenhuma reação encontrada.";
});
