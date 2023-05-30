import { dispatch } from "../../store";
import { saveRecipes } from "../../store/actions";
import { Recipe } from "../../types/recipes";

const fd: Recipe = {
    receta:"",
    ingrediente:"",
}

export default class Recipes extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const lReceta = this.ownerDocument.createElement('label');
        lReceta.textContent = "Ingrese nombre de la receta"

        const receta = this.ownerDocument.createElement('input');
        receta.addEventListener("change", (e: any) => {
            console.log(e.target.value)
            fd.receta = (e.target.value)
        })


        const lIngrediente = this.ownerDocument.createElement('label');
        lIngrediente.textContent = "Ingredientes"

        const ingrediente = this.ownerDocument.createElement('input');
        ingrediente.addEventListener("change", (e: any) => {
            console.log(e.target.value)
            fd.ingrediente = (e.target.value)
        })

        const btn = this.ownerDocument.createElement('button');
        btn.textContent = "Publicar"
        btn.addEventListener("click", async () => {
            console.log(fd)
            dispatch(await saveRecipes(fd))
        })

        this.shadowRoot?.appendChild(lReceta);
        this.shadowRoot?.appendChild(receta);
        this.shadowRoot?.appendChild(lIngrediente);
        this.shadowRoot?.appendChild(ingrediente);
        this.shadowRoot?.appendChild(btn);
    }
}

customElements.define('app-recipe', Recipes )