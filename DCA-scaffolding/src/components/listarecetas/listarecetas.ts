import { addObserver, appState } from "../../store";

export default class ListaRecetas extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        addObserver(this)
    }

    connectedCallback() {
        this.render()
    }

    render() {
        if(this.shadowRoot)this.shadowRoot.innerHTML = "";

        appState.recipes.forEach((x)=>{

            const xContainer = this.ownerDocument.createElement('figure')

            const xReceta = this.ownerDocument.createElement('h3');
            xReceta.textContent = x.receta
            
            const xIngrediente = this.ownerDocument.createElement('h2')
            xIngrediente.textContent = x.ingrediente

            xContainer.appendChild(xReceta);
            xContainer.appendChild(xIngrediente);
            this.shadowRoot?.appendChild(xContainer);


            this.shadowRoot?.appendChild(xReceta);
        })
        }

    

       
}

customElements.define('lista-recetas', ListaRecetas)