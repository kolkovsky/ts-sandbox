"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const button_creator_1 = require("./button-creator");
const table_creator_1 = require("./table-creator");
class Main {
    static runMain() {
        const componentCreator = new button_creator_1.ButtonCreator();
        const buttonCreator = document.getElementById("button-creator");
        if (buttonCreator) {
            buttonCreator.addEventListener("click", (event) => {
                componentCreator.initComponent();
            });
        }
        const tableCreator = new table_creator_1.TableCreator();
        const table = document.getElementById("table-creator");
        if (table) {
            table.addEventListener("click", (event) => {
                tableCreator.initComponent();
            });
        }
    }
}
exports.Main = Main;
//# sourceMappingURL=main.js.map