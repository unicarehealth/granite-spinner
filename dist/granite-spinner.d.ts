import { LitElement, CSSResultArray, TemplateResult } from "lit";
export declare class GraniteSpinner extends LitElement {
    /** If true spinner is shown. */
    active: boolean;
    /** If true, spinner is positioned as absolute; if false, spinner is positionned as relative. */
    hover: boolean;
    /** Spinner size. */
    size: number;
    /** Spinner colour. */
    color: string;
    /** Spinner line width, in CSS units. */
    lineWidth: string;
    /** Minimum container height. */
    containerHeight: number;
    /** Styles for the shadow DOM. */
    static get styles(): CSSResultArray;
    render(): TemplateResult;
}
