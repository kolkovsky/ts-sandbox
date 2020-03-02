import {ComponentCreator} from "./component-creator";
import {Component} from "./component";
import {Table} from "./table";

export class TableCreator extends ComponentCreator {
    createComponent(): Component {
        return new Table();
    }
}
