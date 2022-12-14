import { LitElement, html } from 'lit-element';

export class MyElement extends LitElement {


    static get properties() {
        return {
            list: {},
            condition: {},
        };
    }
    constructor() {
        super();
        this.list = ['Peas', 'Carrots', 'Tomatoes'];
        this.condition = true;
    }

    render() {
            return html `
         <p>Render a list:</p>
      <ul>
        ${this.list.map(
          (item, index) => html`
              <li>${index}: ${item}</li>
            `
        )}
      </ul>
        `;
    }
}
customElements.define('my-element', MyElement);