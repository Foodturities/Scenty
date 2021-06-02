import html from "./home.html";
import "./home.css";

export default class ViewHome extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = html;
  }
}
