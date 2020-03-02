import {Component} from "./component";

/*
* This pattern called Fabric Method
* */
export abstract class ComponentCreator {

    public initComponent() {
        let component: Component = this.createComponent();
        component.render();
        setTimeout(() => {
            component.delete();
        }, 3000)
    }

    abstract createComponent(): Component;
}
