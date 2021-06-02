import html from "./tab-related.html";

export default class ViewTabRelated extends HTMLElement {
  connectedCallback() {
    this.innerHTML = html;
  }
}
