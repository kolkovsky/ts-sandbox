"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const component_creator_1 = require("./component-creator");
const table_1 = require("./table");
class TableCreator extends component_creator_1.ComponentCreator {
    createComponent() {
        return new table_1.Table();
    }
}
exports.TableCreator = TableCreator;
//# sourceMappingURL=table-creator.js.map