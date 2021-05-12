import { html, LitElement, css, CSSResultArray, TemplateResult } from "lit";
import { customElement, property } from "lit/decorators";
import { styleMap } from "lit/directives/style-map";

@customElement("granite-spinner")
export class GraniteSpinner extends LitElement {

  /** If true spinner is shown. */
  @property({ type: Boolean, attribute: "active", reflect: true })
  active: boolean = false;

  /** If true, spinner is positioned as absolute; if false, spinner is positionned as relative. */
  @property({ type: Boolean, attribute: "hover", reflect: true })
  hover: boolean = false;

  /** Spinner size. */
  @property({ type: Number, attribute: "size" })
  size: number = 100;

  /** Spinner colour. */
  @property({ type: String, attribute: "color" })
  color: string = "#28b6d8";

  /** Spinner line width, in CSS units. */
  @property({ type: String, attribute: "lineWidth" })
  lineWidth: string = "1.5em";

  /** Minimum container height. */
  @property({ type: Number, attribute: "containerHeight" })
  containerHeight: number = 150;

  /** Styles for the shadow DOM. */
  static get styles(): CSSResultArray {
    return [
      css`
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

  render(): TemplateResult {
    if (!this.active) {
      return html``;
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

    return html`<div id="spinnerContainer" style=${styleMap(containerStyle)}>
              <div id="spinner" style=${styleMap(spinnerStyle)}></div>
              <div style=${styleMap(spinnerDimensions)}></div>
            </div>`;
  }
}
