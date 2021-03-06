// modeled after https://github.com/angular/angular/blob/cee2318110eeea115e5f6fc5bfc814cbaa7d90d8/modules/angular2/test/common/directives/ng_for_spec.ts
import { it, iit, describe, expect, inject, beforeEachProviders } from '@angular/core/testing';
import { TestComponentBuilder } from '@angular/compiler/testing';
import {Component, ViewChild, TemplateRef} from '@angular/core';
import * as Infragistics from '../../../src/igniteui.angular2';

export function main() {
    describe('Infragistics Angular2 SplitButton', () => {
        it('should initialize correctly', inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
            var template = '<div><ig-split-button widgetId="splButton" [(options)]="opts"></ig-split-button></div>';
            return tcb.overrideTemplate(TestComponent, template)
                .createAsync(TestComponent)
                .then((fixture) => {
                    fixture.detectChanges();
                    expect(fixture.debugElement.componentInstance.viewChild).toBeAnInstanceOf(Infragistics.IgSplitButtonComponent);
                });
        }));

    });
}

@Component({
    selector: 'test-cmp',
    template: '<div></div>', //"Component 'TestComponent' must have either 'template' or 'templateUrl' set."
    directives: [Infragistics.IgSplitButtonComponent]
})
class TestComponent {
    private opts: any;

    @ViewChild(Infragistics.IgSplitButtonComponent) public viewChild: Infragistics.IgSplitButtonComponent;

    constructor() {
        this.opts = {
            items: [{
                name: "InsertUnorderedList",
                label: "Bullets",
                icon: "ui-igbutton-unorderedlist"
            }, {
                    name: "InsertOrderedList",
                    label: "Numbering",
                    icon: "ui-igbutton-orderedlist"
                }],
            defaultItemName: "InsertUnorderedList"
        };
    }
}