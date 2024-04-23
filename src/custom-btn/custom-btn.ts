export class CustomBtn extends HTMLButtonElement {
    constructor() {
        super();
    }

    public connectedCallback(): void {
        this.setup();
    }

    private setup(): void {
        this.addEventListener('click', () => console.log('Clicked!'));
    }
}

customElements.define('custom-btn', CustomBtn, { extends: 'button' });