class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Izazaga Martinez Daniel Alejandro.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
