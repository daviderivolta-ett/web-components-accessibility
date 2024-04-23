export class CustomComp extends HTMLElement {
    public shadowRoot: ShadowRoot;
    private template: HTMLTemplateElement = document.createElement('template');

    constructor() {
        super();

        this.shadowRoot = this.attachShadow({ mode: 'closed' });

        this.template.id = 'custom-comp';
        this.template.innerHTML =
            `
            <div>
                <h1><slot name="custom-comp-title">Sono un titolo</slot></h1>
                <h2><slot name="custom-comp-subtitle">Sono un sottotitolo</slot></h2>
                <button><slot name="custom-comp-btn">Sono un pulsante</slot></button>
            </div>
            `
            ;

        this.shadowRoot.appendChild(this.template.content.cloneNode(true));
    }

    public connectedCallback(): void {
        this.render();
    }

    private render(): void {
        this.innerHTML =
            `
            <span slot="custom-comp-title">Titolo custom</span>
            <span slot="custom-comp-subtitle">Sottotitolo custom</span>
            <span slot="custom-comp-btn">Pulsante custom</span>
            `
            ;
    }
}

customElements.define('custom-comp', CustomComp);