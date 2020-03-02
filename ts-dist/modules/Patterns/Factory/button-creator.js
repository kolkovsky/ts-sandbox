"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_creator_1 = require("./component-creator");
const button_1 = require("./button");
class ButtonCreator extends component_creator_1.ComponentCreator {
    createComponent() {
        return new button_1.Button();
    }
}
exports.ButtonCreator = ButtonCreator;
//# sourceMappingURL=button-creator.js.map