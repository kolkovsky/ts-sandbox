import {ComponentCreator} from "./component-creator";
import {ButtonCreator} from "./button-creator";
import {TableCreator} from "./table-creator";

export class Main {
    public static runMain(): void {
        const creatorButton: ComponentCreator = new ButtonCreator();
        const buttonCreator = document.getElementById("button-creator");
        if (buttonCreator) {
            buttonCreator.addEventListener("click", () => {
                creatorButton.initComponent();
            });
        }

        const creatorTable: ComponentCreator = new TableCreator();
        const tableCreator = document.getElementById("table-creator");
        if (tableCreator) {
            tableCreator.addEventListener("click", () => {
                creatorTable.initComponent();
            });
        }
    }
}
