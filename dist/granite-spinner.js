var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { html, LitElement, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { styleMap } from "lit/directives/style-map";
let GraniteSpinner = class GraniteSpinner extends LitElement {
    constructor() {
        super(...arguments);
        /** If true spinner is shown. */
        this.active = false;
        /** If true, spinner is positioned as absolute; if false, spinner is positionned as relative. */
        this.hover = false;
        /** Spinner size. */
        this.size = 100;
        /** Spinner colour. */
        this.color = "#28b6d8";
        /** Spinner line width, in CSS units. */
        this.lineWidth = "1.5em";
        /** Minimum container height. */
        this.containerHeight = 150;
    }
    /** Styles for the shadow DOM. */
    static get styles() {
        return [
            css `
          :host {
            display: block;
            position: relative;
            width: 100%;
          }

          #spinnerContainer {
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            width: 100%;
          }

          #spinner {
            margin: 60px auto;
            font-size: 10px;
            position: relative;
            text-indent: -9999em;

            border: 1.5em solid rgba(210,210,210, 1);
            border-left: 1.5em solid #28b6d8;
            -webkit-transform: translateZ(0);
            -ms-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-animation: load8 1.25s infinite linear;
            animation: load8 1.25s infinite linear;
          }

          #spinner,
          #spinner:after {
            border-radius: 50%;
          }

          @-webkit-keyframes load8 {
            0% {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
            }
            100% {
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }
          @keyframes load8 {
            0% {
              -webkit-transform: rotate(0deg);
              transform: rotate(0deg);
            }
            100% {
              -webkit-transform: rotate(360deg);
              transform: rotate(360deg);
            }
          }
          `
        ];
    }
    render() {
        if (!this.active) {
            return html ``;
        }
        const containerStyle = {
            position: this.hover ? "absolute" : "relative",
            minWidth: `${this.size}px`,
            minHeight: `${this.size}px`,
            height: `${Math.max(this.size, this.containerHeight, 200)}px`
        };
        const spinnerDimensions = {
            width: this.size ? `${this.size}px` : `10em`,
            height: this.size ? `${this.size}px` : `10em`
        };
        const spinnerStyle = {
            borderLeftColor: this.color,
            borderWidth: this.lineWidth,
            ...spinnerDimensions
        };
        return html `<div id="spinnerContainer" style=${styleMap(containerStyle)}>
              <div id="spinner" style=${styleMap(spinnerStyle)}></div>
              <div style=${styleMap(spinnerDimensions)}></div>
            </div>`;
    }
};
__decorate([
    property({ type: Boolean, attribute: "active", reflect: true })
], GraniteSpinner.prototype, "active", void 0);
__decorate([
    property({ type: Boolean, attribute: "hover", reflect: true })
], GraniteSpinner.prototype, "hover", void 0);
__decorate([
    property({ type: Number, attribute: "size" })
], GraniteSpinner.prototype, "size", void 0);
__decorate([
    property({ type: String, attribute: "color" })
], GraniteSpinner.prototype, "color", void 0);
__decorate([
    property({ type: String, attribute: "lineWidth" })
], GraniteSpinner.prototype, "lineWidth", void 0);
__decorate([
    property({ type: Number, attribute: "containerHeight" })
], GraniteSpinner.prototype, "containerHeight", void 0);
GraniteSpinner = __decorate([
    customElement("granite-spinner")
], GraniteSpinner);
export { GraniteSpinner };
//# sourceMappingURL=granite-spinner.js.map