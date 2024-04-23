export class CustomDiv extends HTMLElement {
    public shadowRoot: ShadowRoot;

    constructor() {
        super();

        this.shadowRoot = this.attachShadow({ mode: 'closed' });

        // const sheet: CSSStyleSheet = new CSSStyleSheet();
        // sheet.replaceSync(style);
        // this.shadowRoot.adoptedStyleSheets.push(sheet);
    }

    public connectedCallback(): void {
        this.render();
    }

    private render(): void {
        this.shadowRoot.innerHTML =
            `
            <div>
                <h1>Sono un titolo</h1>
                <h2>Sono un sottotitolo</h2>
                <button>Sono un pulsante</button>
            </div>
            <style>
                button {
                    background-color: crimson;
                    color: white;
                }
            </style>
            `
            ;
    }
}

customElements.define('custom-div', CustomDiv);