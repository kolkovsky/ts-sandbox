import {Component} from "./component";

export class Button implements Component{
    private component: any;

    render(): void {
        const buttonElement: HTMLButtonElement = document.createElement("button");
        buttonElement.innerHTML = "Click me";
        this.component = document.body.appendChild(buttonElement);
    }

    delete(): void {
        document.body.removeChild(this.component);
    }
}
