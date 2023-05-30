import "./components/export"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const recipe = this.ownerDocument.createElement('app-recipe');
        const lista = this.ownerDocument.createElement('lista-recetas')
        this.shadowRoot?.appendChild(recipe);
        this.shadowRoot?.appendChild(lista);
    }
}

customElements.define('app-container', AppContainer)