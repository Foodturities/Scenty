import html from "./view-tabs.html";
export default class ViewTabs extends HTMLElement {
  connectedCallback() {
    this.innerHTML = html;
  }
}
