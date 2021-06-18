import html from "./contacts.html";
import "./contacts.css";

export default class ViewHome extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = html;
  }
}
