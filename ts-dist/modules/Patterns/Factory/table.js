"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Table {
    render() {
        const tableElement = document.createElement("table");
        tableElement.createCaption().innerHTML = "My Table";
        document.body.appendChild(tableElement);
        console.log(tableElement);
    }
}
exports.Table = Table;
//# sourceMappingURL=table.js.map