import {ComponentCreator} from "./component-creator";
import {Component} from "./component";
import {Button} from "./button";

export class ButtonCreator extends ComponentCreator {
    createComponent(): Component {
        return new Button();
    }
}
