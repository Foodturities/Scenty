import html from "./tab-info.html";

export default class ViewTabInfo extends HTMLElement {
  connectedCallback() {
    this.innerHTML = html;
  }
}
