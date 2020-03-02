"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Button {
    constructor() {
        this.componentName = "ButtonComponent";
    }
    render() {
        const buttonElement = document.createElement("button");
        buttonElement.innerHTML = "Click me";
        document.body.appendChild(buttonElement);
        console.log(this.componentName);
    }
}
exports.Button = Button;
//# sourceMappingURL=button.js.map