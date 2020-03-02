import {Component} from "./component";

export class Table implements Component {
    component: any;

    render(): void {
        const tableElement: HTMLTableElement = document.createElement("table");
        tableElement.createCaption().innerHTML = "My Table";
        this.component = document.body.appendChild(tableElement);
    }

    delete(): void {
        document.body.removeChild(this.component);
    }
}
