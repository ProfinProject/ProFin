import {
  COMPOSITION_BUFFER_MODE,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  MinLengthValidator,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  ɵNgNoValidate
} from "./chunk-CCMPVCAV.js";
import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger
} from "./chunk-MJEVXQAX.js";
import {
  AsyncPipe,
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgSwitch,
  NgSwitchCase,
  NgSwitchDefault,
  NgTemplateOutlet
} from "./chunk-2FAAYIQQ.js";
import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Injectable,
  Injector,
  Input,
  NgModule,
  Output,
  Pipe,
  Renderer2,
  TemplateRef,
  ViewChild,
  ViewChildren,
  forwardRef,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMapInterpolate1,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpropertyInterpolate,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-HU5IYYZU.js";
import "./chunk-SG3BCSKH.js";
import "./chunk-SAVXX6OM.js";
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  first,
  map
} from "./chunk-PQ7O3X3G.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-KYD7LGVA.js";

// node_modules/ng2-material-dropdown/fesm2020/ng2-material-dropdown.mjs
function Ng2DropdownButton_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 3);
    ɵɵnamespaceSVG();
    ɵɵelementStart(1, "svg", 4);
    ɵɵelement(2, "path", 5)(3, "g")(4, "g")(5, "g")(6, "g")(7, "g")(8, "g");
    ɵɵelementEnd()();
  }
}
var _c0 = ["*"];
function Ng2DropdownMenu_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 2);
    ɵɵlistener("click", function Ng2DropdownMenu_div_3_Template_div_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.hide());
    });
    ɵɵelementEnd();
  }
}
var _c1 = [[["ng2-dropdown-button"]], [["ng2-dropdown-menu"]]];
var _c2 = ["ng2-dropdown-button", "ng2-dropdown-menu"];
var Ng2DropdownButton = class {
  constructor(element) {
    this.element = element;
    this.onMenuToggled = new EventEmitter();
    this.showCaret = true;
  }
  /**
   * @name toggleMenu
   * @desc emits event to toggle menu
   */
  toggleMenu() {
    this.onMenuToggled.emit(true);
  }
  /**
   * @name getPosition
   * @desc returns position of the button
   */
  getPosition() {
    return this.element.nativeElement.getBoundingClientRect();
  }
};
Ng2DropdownButton.ɵfac = function Ng2DropdownButton_Factory(t) {
  return new (t || Ng2DropdownButton)(ɵɵdirectiveInject(ElementRef));
};
Ng2DropdownButton.ɵcmp = ɵɵdefineComponent({
  type: Ng2DropdownButton,
  selectors: [["ng2-dropdown-button"]],
  inputs: {
    showCaret: "showCaret"
  },
  outputs: {
    onMenuToggled: "onMenuToggled"
  },
  ngContentSelectors: _c0,
  decls: 4,
  vars: 1,
  consts: [["type", "button", "tabindex", "0s", 1, "ng2-dropdown-button", 3, "click"], [1, "ng2-dropdown-button__label"], ["class", "ng2-dropdown-button__caret", 4, "ngIf"], [1, "ng2-dropdown-button__caret"], ["enable-background", "new 0 0 32 32", "height", "16px", "id", "Слой_1", "version", "1.1", "viewBox", "0 0 32 32", "width", "16px", 0, "xml", "space", "preserve", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink"], ["d", "M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z", "fill", "#121313", "id", "Expand_More"]],
  template: function Ng2DropdownButton_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "button", 0);
      ɵɵlistener("click", function Ng2DropdownButton_Template_button_click_0_listener() {
        return ctx.toggleMenu();
      });
      ɵɵelementStart(1, "span", 1);
      ɵɵprojection(2);
      ɵɵelementEnd();
      ɵɵtemplate(3, Ng2DropdownButton_span_3_Template, 9, 0, "span", 2);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance(3);
      ɵɵproperty("ngIf", ctx.showCaret);
    }
  },
  dependencies: [NgIf],
  styles: [".ng2-dropdown-button[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,Helvetica,Arial;background:#fff;padding:.45rem .25rem;font-size:14px;letter-spacing:.08rem;color:#444;outline:0;cursor:pointer;font-weight:400;border:none;border-bottom:1px solid #efefef;text-align:left;min-width:100px;width:100%;display:flex;flex-direction:row;max-width:150px}.ng2-dropdown-button[_ngcontent-%COMP%]:hover{color:#222}.ng2-dropdown-button[_ngcontent-%COMP%]:active, .ng2-dropdown-button[_ngcontent-%COMP%]:focus{color:#222;border-bottom:2px solid #2196F3}.ng2-dropdown-button__label[_ngcontent-%COMP%]{flex:1 1 95%}.ng2-dropdown-button__caret[_ngcontent-%COMP%]{width:12px;height:12px;display:flex;flex:1 1 6%}.ng2-dropdown-button--icon[_nghost-%COMP%]   .ng2-dropdown-button[_ngcontent-%COMP%], .ng2-dropdown-button--icon   [_nghost-%COMP%]   .ng2-dropdown-button[_ngcontent-%COMP%]{border:none;min-width:40px;width:40px;border-radius:100%;transition:all .2s;text-align:center;height:40px;padding:.5em}.ng2-dropdown-button--icon[_nghost-%COMP%]   .ng2-dropdown-button[_ngcontent-%COMP%]:active, .ng2-dropdown-button--icon   [_nghost-%COMP%]   .ng2-dropdown-button[_ngcontent-%COMP%]:active{background:rgba(0,0,0,.2)}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Ng2DropdownButton, [{
    type: Component,
    args: [{
      selector: "ng2-dropdown-button",
      template: `<button class='ng2-dropdown-button' type="button" (click)="toggleMenu()" tabindex="0s">
    <span class="ng2-dropdown-button__label">
        <ng-content></ng-content>
    </span>

    <span class="ng2-dropdown-button__caret" *ngIf="showCaret">
        <svg enable-background="new 0 0 32 32" height="16px" id="Слой_1" version="1.1" viewBox="0 0 32 32" width="16px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M24.285,11.284L16,19.571l-8.285-8.288c-0.395-0.395-1.034-0.395-1.429,0  c-0.394,0.395-0.394,1.035,0,1.43l8.999,9.002l0,0l0,0c0.394,0.395,1.034,0.395,1.428,0l8.999-9.002  c0.394-0.395,0.394-1.036,0-1.431C25.319,10.889,24.679,10.889,24.285,11.284z" fill="#121313" id="Expand_More"/><g/><g/><g/><g/><g/><g/></svg>
    </span>
</button>
`,
      styles: [".ng2-dropdown-button{font-family:Roboto,Helvetica Neue,Helvetica,Arial;background:#fff;padding:.45rem .25rem;font-size:14px;letter-spacing:.08rem;color:#444;outline:0;cursor:pointer;font-weight:400;border:none;border-bottom:1px solid #efefef;text-align:left;min-width:100px;width:100%;display:flex;flex-direction:row;max-width:150px}.ng2-dropdown-button:hover{color:#222}.ng2-dropdown-button:active,.ng2-dropdown-button:focus{color:#222;border-bottom:2px solid #2196F3}.ng2-dropdown-button__label{flex:1 1 95%}.ng2-dropdown-button__caret{width:12px;height:12px;display:flex;flex:1 1 6%}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button{border:none;min-width:40px;width:40px;border-radius:100%;transition:all .2s;text-align:center;height:40px;padding:.5em}:host-context(.ng2-dropdown-button--icon) .ng2-dropdown-button:active{background:rgba(0,0,0,.2)}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, {
    onMenuToggled: [{
      type: Output
    }],
    showCaret: [{
      type: Input
    }]
  });
})();
var KEYS = {
  BACKSPACE: 9,
  PREV: 38,
  NEXT: 40,
  ENTER: 13,
  ESCAPE: 27
};
var onSwitchNext = (index, items, state2) => {
  if (index < items.length - 1) {
    state2.select(items[index + 1], true);
  }
};
var onSwitchPrev = (index, items, state2) => {
  if (index > 0) {
    state2.select(items[index - 1], true);
  }
};
var onBackspace = (index, items, state2) => {
  if (index < items.length - 1) {
    state2.select(items[index + 1], true);
  } else {
    state2.select(items[0], true);
  }
};
function onEscape() {
  this.hide();
}
var onItemClicked = (index, items, state2) => {
  return state2.selectedItem ? state2.selectedItem.click() : void 0;
};
var ACTIONS = {
  [KEYS.BACKSPACE]: onBackspace,
  [KEYS.PREV]: onSwitchPrev,
  [KEYS.NEXT]: onSwitchNext,
  [KEYS.ENTER]: onItemClicked,
  [KEYS.ESCAPE]: onEscape
};
function arrowKeysHandler(event) {
  if ([38, 40].indexOf(event.keyCode) > -1) {
    event.preventDefault();
  }
}
var Ng2DropdownState = class {
  constructor() {
    this.onItemSelected = new EventEmitter();
    this.onItemClicked = new EventEmitter();
    this.onItemDestroyed = new EventEmitter();
  }
  /**
   * @name selectedItem
   * @desc getter for _selectedItem
   */
  get selectedItem() {
    return this._selectedItem;
  }
  /**
   * @name selects a menu item and emits event
   * @param item
   */
  select(item, dispatchEvent = true) {
    this._selectedItem = item;
    if (!dispatchEvent || !item) {
      return;
    }
    item.focus();
    this.onItemSelected.emit(item);
  }
  /**
   * @name unselect
   * @desc sets _selectedItem as undefined
   */
  unselect() {
    this._selectedItem = void 0;
  }
};
var DropdownStateService = class {
  constructor() {
    this.menuState = {
      isVisible: false,
      toString() {
        return this.isVisible === true ? "visible" : "hidden";
      }
    };
    this.dropdownState = new Ng2DropdownState();
  }
};
DropdownStateService.ɵfac = function DropdownStateService_Factory(t) {
  return new (t || DropdownStateService)();
};
DropdownStateService.ɵprov = ɵɵdefineInjectable({
  token: DropdownStateService,
  factory: DropdownStateService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DropdownStateService, [{
    type: Injectable
  }], null, null);
})();
var Ng2MenuItem = class {
  constructor(state2, element) {
    this.state = state2;
    this.element = element;
    this.preventClose = false;
  }
  ngOnDestroy() {
    this.state.dropdownState.onItemDestroyed.emit(this);
  }
  /**
   * @name isSelected
   * @desc returns current selected item
   */
  get isSelected() {
    return this === this.state.dropdownState.selectedItem;
  }
  /**
   * @name click
   * @desc emits select event
   */
  select($event) {
    this.state.dropdownState.select(this, true);
    if ($event) {
      $event.stopPropagation();
      $event.preventDefault();
    }
  }
  /**
   * @name click
   * @desc emits click event
   */
  click() {
    this.state.dropdownState.onItemClicked.emit(this);
  }
  /**
   * @name focus
   */
  focus() {
    this.element.nativeElement.children[0].focus();
  }
};
Ng2MenuItem.ɵfac = function Ng2MenuItem_Factory(t) {
  return new (t || Ng2MenuItem)(ɵɵdirectiveInject(DropdownStateService), ɵɵdirectiveInject(ElementRef));
};
Ng2MenuItem.ɵcmp = ɵɵdefineComponent({
  type: Ng2MenuItem,
  selectors: [["ng2-menu-item"]],
  inputs: {
    preventClose: "preventClose",
    value: "value"
  },
  ngContentSelectors: _c0,
  decls: 2,
  vars: 2,
  consts: [["role", "button", "tabindex", "0", 1, "ng2-menu-item", 3, "keydown.enter", "click", "mouseover"]],
  template: function Ng2MenuItem_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("keydown.enter", function Ng2MenuItem_Template_div_keydown_enter_0_listener() {
        return ctx.click();
      })("click", function Ng2MenuItem_Template_div_click_0_listener() {
        return ctx.click();
      })("mouseover", function Ng2MenuItem_Template_div_mouseover_0_listener() {
        return ctx.select();
      });
      ɵɵprojection(1);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵclassProp("ng2-menu-item--selected", ctx.isSelected);
    }
  },
  styles: [".ng2-menu-item[_ngcontent-%COMP%]{font-family:Roboto,Helvetica Neue,Helvetica,Arial;background:#fff;color:#000000de;cursor:pointer;font-size:.9em;text-transform:none;font-weight:400;letter-spacing:.03em;height:48px;line-height:48px;padding:.3em 1.25rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition:background .25s}.ng2-menu-item--selected[_ngcontent-%COMP%]{background:rgba(158,158,158,.2);outline:0}.ng2-menu-item[_ngcontent-%COMP%]:focus{outline:0}.ng2-menu-item[_ngcontent-%COMP%]:active{background:rgba(158,158,158,.4)}ng2-menu-item[_nghost-%COMP%]     [ng2-menu-item-icon]{vertical-align:middle;font-size:28px;width:1.5em;height:30px;color:#00000070}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Ng2MenuItem, [{
    type: Component,
    args: [{
      selector: "ng2-menu-item",
      template: `
        <div
            class="ng2-menu-item"
            role="button"
            tabindex="0"
            [class.ng2-menu-item--selected]="isSelected"
            (keydown.enter)="click()"
            (click)="click()"
            (mouseover)="select()"
        >
            <ng-content></ng-content>
        </div>
    `,
      styles: [".ng2-menu-item{font-family:Roboto,Helvetica Neue,Helvetica,Arial;background:#fff;color:#000000de;cursor:pointer;font-size:.9em;text-transform:none;font-weight:400;letter-spacing:.03em;height:48px;line-height:48px;padding:.3em 1.25rem;text-overflow:ellipsis;white-space:nowrap;overflow:hidden;transition:background .25s}.ng2-menu-item--selected{background:rgba(158,158,158,.2);outline:0}.ng2-menu-item:focus{outline:0}.ng2-menu-item:active{background:rgba(158,158,158,.4)}:host(ng2-menu-item) ::ng-deep [ng2-menu-item-icon]{vertical-align:middle;font-size:28px;width:1.5em;height:30px;color:#00000070}\n"]
    }]
  }], function() {
    return [{
      type: DropdownStateService
    }, {
      type: ElementRef
    }];
  }, {
    preventClose: [{
      type: Input
    }],
    value: [{
      type: Input
    }]
  });
})();
var Ng2DropdownMenu = class {
  constructor(dropdownState, element, renderer) {
    this.dropdownState = dropdownState;
    this.element = element;
    this.renderer = renderer;
    this.width = 4;
    this.focusFirstElement = true;
    this.appendToBody = true;
    this.zIndex = 1e3;
    this.listeners = {
      arrowHandler: void 0,
      handleKeypress: void 0
    };
  }
  /**
   * @name show
   * @shows menu and selects first item
   */
  show(position, dynamic = true) {
    const dc = typeof document !== "undefined" ? document : void 0;
    const wd = typeof window !== "undefined" ? window : void 0;
    if (!this.dropdownState.menuState.isVisible) {
      this.listeners.handleKeypress = this.renderer.listen(dc.body, "keydown", this.handleKeypress.bind(this));
      this.listeners.arrowHandler = this.renderer.listen(wd, "keydown", arrowKeysHandler);
    }
    this.dropdownState.menuState.isVisible = true;
    if (position) {
      this.updatePosition(position, dynamic);
    }
  }
  /**
   * @name hide
   * @desc hides menu
   */
  hide() {
    this.dropdownState.menuState.isVisible = false;
    this.dropdownState.dropdownState.unselect();
    this.listeners.arrowHandler && this.listeners.arrowHandler();
    this.listeners.handleKeypress && this.listeners.handleKeypress();
  }
  /**
   * @name updatePosition
   * @desc updates the menu position every time it is toggled
   * @param position {ClientRect}
   * @param dynamic {boolean}
   */
  updatePosition(position, dynamic) {
    this.position = position;
    this.updateOnChange(dynamic);
  }
  /**
   * @name handleKeypress
   * @desc executes functions on keyPress based on the key pressed
   * @param $event
   */
  handleKeypress($event) {
    const key = $event.keyCode;
    const items = this.items.toArray();
    const index = items.indexOf(this.dropdownState.dropdownState.selectedItem);
    if (!ACTIONS.hasOwnProperty(key)) {
      return;
    }
    ACTIONS[key].call(this, index, items, this.dropdownState.dropdownState);
  }
  /**
   * @name getMenuElement
   */
  getMenuElement() {
    return this.element.nativeElement.children[0];
  }
  /**
   * @name calcPositionOffset
   * @param position
   */
  calcPositionOffset(position) {
    const wd = typeof window !== "undefined" ? window : void 0;
    const dc = typeof document !== "undefined" ? document : void 0;
    if (!wd || !dc || !position) {
      return;
    }
    const element = this.getMenuElement();
    const supportPageOffset = wd.pageXOffset !== void 0;
    const isCSS1Compat = (dc.compatMode || "") === "CSS1Compat";
    const x = supportPageOffset ? wd.pageXOffset : isCSS1Compat ? dc.documentElement.scrollLeft : dc.body.scrollLeft;
    const y = supportPageOffset ? wd.pageYOffset : isCSS1Compat ? dc.documentElement.scrollTop : dc.body.scrollTop;
    let {
      top,
      left
    } = this.applyOffset(`${position.top + (this.appendToBody ? y - 15 : 0)}px`, `${position.left + x - 5}px`);
    const clientWidth = element.clientWidth;
    const clientHeight = element.clientHeight;
    const marginFromBottom = parseInt(top) + clientHeight + (this.appendToBody ? 0 : y - 15);
    const marginFromRight = parseInt(left) + clientWidth;
    const windowScrollHeight = wd.innerHeight + wd.scrollY;
    const windowScrollWidth = wd.innerWidth + wd.scrollX;
    if (marginFromBottom >= windowScrollHeight) {
      top = `${parseInt(top.replace("px", "")) - clientHeight}px`;
    }
    if (marginFromRight >= windowScrollWidth) {
      const marginRight = marginFromRight - windowScrollWidth + 30;
      left = `${parseInt(left.replace("px", "")) - marginRight}px`;
    }
    return {
      top,
      left
    };
  }
  applyOffset(top, left) {
    if (!this.offset) {
      return {
        top,
        left
      };
    }
    const offset = this.offset.split(" ");
    if (!offset[1]) {
      offset[1] = "0";
    }
    top = `${parseInt(top.replace("px", "")) + parseInt(offset[0])}px`;
    left = `${parseInt(left.replace("px", "")) + parseInt(offset[1])}px`;
    return {
      top,
      left
    };
  }
  ngOnInit() {
    const dc = typeof document !== "undefined" ? document : void 0;
    if (this.appendToBody) {
      dc.body.appendChild(this.element.nativeElement);
    }
  }
  updateOnChange(dynamic = true) {
    const element = this.getMenuElement();
    const position = this.calcPositionOffset(this.position);
    if (position) {
      this.renderer.setStyle(element, "top", position.top.toString());
      this.renderer.setStyle(element, "left", position.left.toString());
    }
    if (this.focusFirstElement && this.items.first && !this.dropdownState.dropdownState.selectedItem) {
      this.dropdownState.dropdownState.select(this.items.first, false);
    }
  }
  ngOnDestroy() {
    const elem = this.element.nativeElement;
    elem.parentNode.removeChild(elem);
    if (this.listeners.handleKeypress) {
      this.listeners.handleKeypress();
    }
  }
};
Ng2DropdownMenu.ɵfac = function Ng2DropdownMenu_Factory(t) {
  return new (t || Ng2DropdownMenu)(ɵɵdirectiveInject(DropdownStateService), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2));
};
Ng2DropdownMenu.ɵcmp = ɵɵdefineComponent({
  type: Ng2DropdownMenu,
  selectors: [["ng2-dropdown-menu"]],
  contentQueries: function Ng2DropdownMenu_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, Ng2MenuItem, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.items = _t);
    }
  },
  inputs: {
    width: "width",
    focusFirstElement: "focusFirstElement",
    offset: "offset",
    appendToBody: "appendToBody",
    zIndex: "zIndex"
  },
  ngContentSelectors: _c0,
  decls: 4,
  vars: 12,
  consts: [[1, "ng2-dropdown-menu__options-container"], ["class", "ng2-dropdown-backdrop", 3, "click", 4, "ngIf"], [1, "ng2-dropdown-backdrop", 3, "click"]],
  template: function Ng2DropdownMenu_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div")(1, "div", 0);
      ɵɵprojection(2);
      ɵɵelementEnd()();
      ɵɵtemplate(3, Ng2DropdownMenu_div_3_Template, 1, 0, "div", 1);
    }
    if (rf & 2) {
      ɵɵclassMapInterpolate1("ng2-dropdown-menu ng2-dropdown-menu---width--", ctx.width, "");
      ɵɵstyleProp("z-index", ctx.zIndex);
      ɵɵclassProp("ng2-dropdown-menu--inside-element", !ctx.appendToBody)("ng2-dropdown-menu--open", ctx.dropdownState.menuState.isVisible);
      ɵɵproperty("@fade", ctx.dropdownState.menuState.toString());
      ɵɵadvance();
      ɵɵproperty("@opacity", ctx.dropdownState.menuState.toString());
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.dropdownState.menuState.isVisible);
    }
  },
  dependencies: [NgIf],
  styles: ["[_nghost-%COMP%]{display:block}.ng2-dropdown-menu[_ngcontent-%COMP%]{overflow-y:auto;box-shadow:0 1px 2px #0000004d;position:absolute;padding:.5em 0;background:#fff;border-radius:1px;max-height:400px;width:260px;min-height:0;display:block}.ng2-dropdown-menu.ng2-dropdown-menu--inside-element[_ngcontent-%COMP%]{position:fixed}.ng2-dropdown-menu.ng2-dropdown-menu--width--2[_ngcontent-%COMP%]{width:200px}.ng2-dropdown-menu.ng2-dropdown-menu--width--4[_ngcontent-%COMP%]{width:260px}.ng2-dropdown-menu.ng2-dropdown-menu--width--6[_ngcontent-%COMP%]{width:320px}.ng2-dropdown-backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;overflow:hidden}[_nghost-%COMP%]     .ng2-menu-divider{height:1px;min-height:1px;max-height:1px;width:100%;display:block;background:#f9f9f9}"],
  data: {
    animation: [trigger("fade", [state("visible", style({
      opacity: 1,
      height: "*",
      width: "*"
    })), state("hidden", style({
      opacity: 0,
      overflow: "hidden",
      height: 0,
      width: 0
    })), transition("hidden => visible", [animate("250ms ease-in", style({
      opacity: 1,
      height: "*",
      width: "*"
    }))]), transition("visible => hidden", [animate("350ms ease-out", style({
      opacity: 0,
      width: 0,
      height: 0
    }))])]), trigger("opacity", [transition("hidden => visible", [animate("450ms ease-in", keyframes([style({
      opacity: 0,
      offset: 0
    }), style({
      opacity: 1,
      offset: 1
    })]))]), transition("visible => hidden", [animate("250ms ease-out", keyframes([style({
      opacity: 1,
      offset: 0
    }), style({
      opacity: 0.5,
      offset: 0.3
    }), style({
      opacity: 0,
      offset: 1
    })]))])])]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Ng2DropdownMenu, [{
    type: Component,
    args: [{
      selector: "ng2-dropdown-menu",
      template: `
        <!-- MENU -->
        <div
            class="ng2-dropdown-menu ng2-dropdown-menu---width--{{ width }}"
            [class.ng2-dropdown-menu--inside-element]="!appendToBody"
            [class.ng2-dropdown-menu--open]="dropdownState.menuState.isVisible"
            [style.z-index]="zIndex"
            [@fade]="dropdownState.menuState.toString()"
        >
            <div
                class="ng2-dropdown-menu__options-container"
                [@opacity]="dropdownState.menuState.toString()"
            >
                <ng-content></ng-content>
            </div>
        </div>

        <!-- BACKDROP -->
        <div
            class="ng2-dropdown-backdrop"
            *ngIf="dropdownState.menuState.isVisible"
            (click)="hide()"
        ></div>
    `,
      animations: [trigger("fade", [state("visible", style({
        opacity: 1,
        height: "*",
        width: "*"
      })), state("hidden", style({
        opacity: 0,
        overflow: "hidden",
        height: 0,
        width: 0
      })), transition("hidden => visible", [animate("250ms ease-in", style({
        opacity: 1,
        height: "*",
        width: "*"
      }))]), transition("visible => hidden", [animate("350ms ease-out", style({
        opacity: 0,
        width: 0,
        height: 0
      }))])]), trigger("opacity", [transition("hidden => visible", [animate("450ms ease-in", keyframes([style({
        opacity: 0,
        offset: 0
      }), style({
        opacity: 1,
        offset: 1
      })]))]), transition("visible => hidden", [animate("250ms ease-out", keyframes([style({
        opacity: 1,
        offset: 0
      }), style({
        opacity: 0.5,
        offset: 0.3
      }), style({
        opacity: 0,
        offset: 1
      })]))])])],
      styles: [":host{display:block}.ng2-dropdown-menu{overflow-y:auto;box-shadow:0 1px 2px #0000004d;position:absolute;padding:.5em 0;background:#fff;border-radius:1px;max-height:400px;width:260px;min-height:0;display:block}.ng2-dropdown-menu.ng2-dropdown-menu--inside-element{position:fixed}.ng2-dropdown-menu.ng2-dropdown-menu--width--2{width:200px}.ng2-dropdown-menu.ng2-dropdown-menu--width--4{width:260px}.ng2-dropdown-menu.ng2-dropdown-menu--width--6{width:320px}.ng2-dropdown-backdrop{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;overflow:hidden}:host ::ng-deep .ng2-menu-divider{height:1px;min-height:1px;max-height:1px;width:100%;display:block;background:#f9f9f9}\n"]
    }]
  }], function() {
    return [{
      type: DropdownStateService
    }, {
      type: ElementRef
    }, {
      type: Renderer2
    }];
  }, {
    width: [{
      type: Input
    }],
    focusFirstElement: [{
      type: Input
    }],
    offset: [{
      type: Input
    }],
    appendToBody: [{
      type: Input
    }],
    zIndex: [{
      type: Input
    }],
    items: [{
      type: ContentChildren,
      args: [Ng2MenuItem, {
        descendants: true
      }]
    }]
  });
})();
var Ng2Dropdown = class {
  constructor(state2) {
    this.state = state2;
    this.dynamicUpdate = true;
    this.onItemClicked = new EventEmitter();
    this.onItemSelected = new EventEmitter();
    this.onShow = new EventEmitter();
    this.onHide = new EventEmitter();
  }
  ngOnInit() {
    this.state.dropdownState.onItemClicked.subscribe((item) => {
      this.onItemClicked.emit(item);
      if (item.preventClose) {
        return;
      }
      this.hide.call(this);
    });
    if (this.button) {
      this.button.onMenuToggled.subscribe(() => {
        this.toggleMenu();
      });
    }
    this.state.dropdownState.onItemSelected.subscribe((item) => {
      this.onItemSelected.emit(item);
    });
    this.state.dropdownState.onItemDestroyed.subscribe((item) => {
      let newSelectedItem;
      const items = this.menu.items.toArray();
      if (item !== this.state.dropdownState.selectedItem) {
        return;
      }
      if (this.menu.focusFirstElement) {
        newSelectedItem = item === items[0] && items.length > 1 ? items[1] : items[0];
      }
      this.state.dropdownState.select(newSelectedItem);
    });
  }
  /**
   * @name toggleMenu
   * @desc toggles menu visibility
   */
  toggleMenu(position = this.button.getPosition()) {
    this.state.menuState.isVisible ? this.hide() : this.show(position);
  }
  /**
   * - hides dropdown
   * @name hide
   */
  hide() {
    this.menu.hide();
    this.onHide.emit(this);
  }
  /**
   * - shows dropdown
   * @name show
   * @param position
   */
  show(position = this.button.getPosition()) {
    this.menu.show(position, this.dynamicUpdate);
    this.onShow.emit(this);
  }
  /**
   * @name scrollListener
   */
  scrollListener() {
    if (this.button && this.dynamicUpdate) {
      this.menu.updatePosition(this.button.getPosition(), true);
    }
  }
};
Ng2Dropdown.ɵfac = function Ng2Dropdown_Factory(t) {
  return new (t || Ng2Dropdown)(ɵɵdirectiveInject(DropdownStateService));
};
Ng2Dropdown.ɵcmp = ɵɵdefineComponent({
  type: Ng2Dropdown,
  selectors: [["ng2-dropdown"]],
  contentQueries: function Ng2Dropdown_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, Ng2DropdownButton, 7);
      ɵɵcontentQuery(dirIndex, Ng2DropdownMenu, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.button = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.menu = _t.first);
    }
  },
  hostBindings: function Ng2Dropdown_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("scroll", function Ng2Dropdown_scroll_HostBindingHandler() {
        return ctx.scrollListener();
      }, false, ɵɵresolveWindow);
    }
  },
  inputs: {
    dynamicUpdate: "dynamicUpdate"
  },
  outputs: {
    onItemClicked: "onItemClicked",
    onItemSelected: "onItemSelected",
    onShow: "onShow",
    onHide: "onHide"
  },
  features: [ɵɵProvidersFeature([DropdownStateService])],
  ngContentSelectors: _c2,
  decls: 3,
  vars: 0,
  consts: [[1, "ng2-dropdown-container"]],
  template: function Ng2Dropdown_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c1);
      ɵɵelementStart(0, "div", 0);
      ɵɵprojection(1);
      ɵɵprojection(2, 1);
      ɵɵelementEnd();
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Ng2Dropdown, [{
    type: Component,
    args: [{
      selector: "ng2-dropdown",
      template: `
        <div class="ng2-dropdown-container">
            <ng-content select="ng2-dropdown-button"></ng-content>
            <ng-content select="ng2-dropdown-menu"></ng-content>
        </div>
    `,
      providers: [DropdownStateService]
    }]
  }], function() {
    return [{
      type: DropdownStateService
    }];
  }, {
    button: [{
      type: ContentChild,
      args: [Ng2DropdownButton, {
        static: true
      }]
    }],
    menu: [{
      type: ContentChild,
      args: [Ng2DropdownMenu, {
        static: true
      }]
    }],
    dynamicUpdate: [{
      type: Input
    }],
    onItemClicked: [{
      type: Output
    }],
    onItemSelected: [{
      type: Output
    }],
    onShow: [{
      type: Output
    }],
    onHide: [{
      type: Output
    }],
    scrollListener: [{
      type: HostListener,
      args: ["window:scroll"]
    }]
  });
})();
var Ng2DropdownModule = class {
};
Ng2DropdownModule.ɵfac = function Ng2DropdownModule_Factory(t) {
  return new (t || Ng2DropdownModule)();
};
Ng2DropdownModule.ɵmod = ɵɵdefineNgModule({
  type: Ng2DropdownModule,
  declarations: [Ng2Dropdown, Ng2MenuItem, Ng2DropdownButton, Ng2DropdownMenu],
  imports: [CommonModule],
  exports: [Ng2MenuItem, Ng2DropdownButton, Ng2DropdownMenu, Ng2Dropdown]
});
Ng2DropdownModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Ng2DropdownModule, [{
    type: NgModule,
    args: [{
      exports: [Ng2MenuItem, Ng2DropdownButton, Ng2DropdownMenu, Ng2Dropdown],
      declarations: [Ng2Dropdown, Ng2MenuItem, Ng2DropdownButton, Ng2DropdownMenu],
      imports: [CommonModule]
    }]
  }], null, null);
})();

// node_modules/ngx-chips/fesm2020/ngx-chips.mjs
var _c02 = ["input"];
function TagComponent_div_1_ng_template_1_Template(rf, ctx) {
}
var _c12 = (a0, a1) => ({
  item: a0,
  index: a1
});
function TagComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, TagComponent_div_1_ng_template_1_Template, 0, 0, "ng-template", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵattribute("contenteditable", ctx_r0.editing);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutletContext", ɵɵpureFunction2(3, _c12, ctx_r0.model, ctx_r0.index))("ngTemplateOutlet", ctx_r0.template);
  }
}
function TagComponent_div_2_delete_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "delete-icon", 8);
    ɵɵlistener("click", function TagComponent_div_2_delete_icon_3_Template_delete_icon_click_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r5 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r5.remove($event));
    });
    ɵɵelementEnd();
  }
}
function TagComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5)(1, "div", 6);
    ɵɵlistener("keydown.enter", function TagComponent_div_2_Template_div_keydown_enter_1_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.disableEditMode($event));
    })("keydown.escape", function TagComponent_div_2_Template_div_keydown_escape_1_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.disableEditMode($event));
    })("click", function TagComponent_div_2_Template_div_click_1_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r10 = ɵɵnextContext();
      return ɵɵresetView(ctx_r10.editing ? $event.stopPropagation() : void 0);
    })("blur", function TagComponent_div_2_Template_div_blur_1_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r11 = ɵɵnextContext();
      return ɵɵresetView(ctx_r11.onBlurred($event));
    });
    ɵɵtext(2);
    ɵɵelementEnd();
    ɵɵtemplate(3, TagComponent_div_2_delete_icon_3_Template, 1, 0, "delete-icon", 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵattribute("contenteditable", ctx_r1.editing)("title", ctx_r1.getDisplayValue(ctx_r1.model));
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.getDisplayValue(ctx_r1.model), " ");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isDeleteIconVisible());
  }
}
function TagComponent_tag_ripple_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "tag-ripple", 9);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("state", ctx_r2.rippleState);
    ɵɵattribute("tabindex", -1);
  }
}
function TagInputDropdown_ng2_menu_item_2_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 6);
    ɵɵpipe(1, "highlight");
  }
  if (rf & 2) {
    const item_r1 = ɵɵnextContext().$implicit;
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ɵɵpipeBind2(1, 1, item_r1[ctx_r4.displayBy], ctx_r4.tagInput.inputForm.value.value), ɵɵsanitizeHtml);
  }
}
function TagInputDropdown_ng2_menu_item_2_2_ng_template_0_Template(rf, ctx) {
}
var _c22 = (a0, a1, a2) => ({
  item: a0,
  index: a1,
  last: a2
});
function TagInputDropdown_ng2_menu_item_2_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, TagInputDropdown_ng2_menu_item_2_2_ng_template_0_Template, 0, 0, "ng-template", 7);
  }
  if (rf & 2) {
    const ctx_r8 = ɵɵnextContext();
    const item_r1 = ctx_r8.$implicit;
    const index_r2 = ctx_r8.index;
    const last_r3 = ctx_r8.last;
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r5.templates.first)("ngTemplateOutletContext", ɵɵpureFunction3(2, _c22, item_r1, index_r2, last_r3));
  }
}
function TagInputDropdown_ng2_menu_item_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ng2-menu-item", 3);
    ɵɵtemplate(1, TagInputDropdown_ng2_menu_item_2_span_1_Template, 2, 4, "span", 4)(2, TagInputDropdown_ng2_menu_item_2_2_Template, 1, 6, null, 5);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("value", item_r1)("ngSwitch", !!ctx_r0.templates.length);
    ɵɵadvance();
    ɵɵproperty("ngSwitchCase", false);
  }
}
function TagInputComponent_tag_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "tag", 6);
    ɵɵlistener("onSelect", function TagInputComponent_tag_2_Template_tag_onSelect_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r6);
      const item_r3 = restoredCtx.$implicit;
      const ctx_r5 = ɵɵnextContext();
      return ɵɵresetView(ctx_r5.selectItem(item_r3));
    })("onRemove", function TagInputComponent_tag_2_Template_tag_onRemove_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r6);
      const item_r3 = restoredCtx.$implicit;
      const i_r4 = restoredCtx.index;
      const ctx_r7 = ɵɵnextContext();
      return ɵɵresetView(ctx_r7.onRemoveRequested(item_r3, i_r4));
    })("onKeyDown", function TagInputComponent_tag_2_Template_tag_onKeyDown_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r8 = ɵɵnextContext();
      return ɵɵresetView(ctx_r8.handleKeydown($event));
    })("onTagEdited", function TagInputComponent_tag_2_Template_tag_onTagEdited_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r9 = ɵɵnextContext();
      return ɵɵresetView(ctx_r9.updateEditedTag($event));
    })("onBlur", function TagInputComponent_tag_2_Template_tag_onBlur_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r6);
      const i_r4 = restoredCtx.index;
      const ctx_r10 = ɵɵnextContext();
      return ɵɵresetView(ctx_r10.onTagBlurred($event, i_r4));
    })("dragstart", function TagInputComponent_tag_2_Template_tag_dragstart_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r6);
      const item_r3 = restoredCtx.$implicit;
      const i_r4 = restoredCtx.index;
      const ctx_r11 = ɵɵnextContext();
      return ɵɵresetView(ctx_r11.dragZone ? ctx_r11.onDragStarted($event, item_r3, i_r4) : void 0);
    })("drop", function TagInputComponent_tag_2_Template_tag_drop_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r6);
      const i_r4 = restoredCtx.index;
      const ctx_r12 = ɵɵnextContext();
      return ɵɵresetView(ctx_r12.dragZone ? ctx_r12.onTagDropped($event, i_r4) : void 0);
    })("dragenter", function TagInputComponent_tag_2_Template_tag_dragenter_0_listener($event) {
      ɵɵrestoreView(_r6);
      const ctx_r13 = ɵɵnextContext();
      return ɵɵresetView(ctx_r13.dragZone ? ctx_r13.onDragOver($event) : void 0);
    })("dragover", function TagInputComponent_tag_2_Template_tag_dragover_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r6);
      const i_r4 = restoredCtx.index;
      const ctx_r14 = ɵɵnextContext();
      return ɵɵresetView(ctx_r14.dragZone ? ctx_r14.onDragOver($event, i_r4) : void 0);
    })("dragleave", function TagInputComponent_tag_2_Template_tag_dragleave_0_listener() {
      ɵɵrestoreView(_r6);
      const ctx_r15 = ɵɵnextContext();
      return ɵɵresetView(ctx_r15.dragZone ? ctx_r15.dragProvider.onDragEnd() : void 0);
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r0 = ɵɵnextContext();
    ɵɵpropertyInterpolate("draggable", ctx_r0.editable);
    ɵɵproperty("canAddTag", ctx_r0.isTagValid)("disabled", ctx_r0.disable)("@animation", ctx_r0.animationMetadata)("hasRipple", ctx_r0.ripple)("index", i_r4)("removable", ctx_r0.removable)("editable", ctx_r0.editable)("displayBy", ctx_r0.displayBy)("identifyBy", ctx_r0.identifyBy)("template", !!ctx_r0.hasCustomTemplate() ? ctx_r0.templates.first : void 0)("draggable", ctx_r0.dragZone)("model", item_r3);
    ɵɵattribute("tabindex", 0);
  }
}
function TagInputComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 7);
  }
}
function TagInputComponent_div_6_p_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "p", 10)(1, "span");
    ɵɵtext(2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const error_r17 = ctx.$implicit;
    ɵɵadvance(2);
    ɵɵtextInterpolate(error_r17);
  }
}
function TagInputComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 8);
    ɵɵtemplate(1, TagInputComponent_div_6_p_1_Template, 3, 1, "p", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.theme);
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r2.errors);
  }
}
var _c3 = ["*"];
var escape = (s) => s.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
var HighlightPipe = class {
  /**
   * @name transform
   * @param value {string}
   * @param arg {string}
   */
  transform(value, arg) {
    if (!arg.trim()) {
      return value;
    }
    try {
      const regex = new RegExp(`(${escape(arg)})`, "i");
      return value.replace(regex, "<b>$1</b>");
    } catch (e) {
      return value;
    }
  }
};
HighlightPipe.ɵfac = function HighlightPipe_Factory(t) {
  return new (t || HighlightPipe)();
};
HighlightPipe.ɵpipe = ɵɵdefinePipe({
  name: "highlight",
  type: HighlightPipe,
  pure: true
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HighlightPipe, [{
    type: Pipe,
    args: [{
      name: "highlight"
    }]
  }], null, null);
})();
var PLACEHOLDER = "+ Tag";
var SECONDARY_PLACEHOLDER = "Enter a new tag";
var KEYDOWN = "keydown";
var KEYUP = "keyup";
var MAX_ITEMS_WARNING = "The number of items specified was greater than the property max-items.";
var ACTIONS_KEYS = {
  DELETE: "DELETE",
  SWITCH_PREV: "SWITCH_PREV",
  SWITCH_NEXT: "SWITCH_NEXT",
  TAB: "TAB"
};
var KEY_PRESS_ACTIONS = {
  8: ACTIONS_KEYS.DELETE,
  46: ACTIONS_KEYS.DELETE,
  37: ACTIONS_KEYS.SWITCH_PREV,
  39: ACTIONS_KEYS.SWITCH_NEXT,
  9: ACTIONS_KEYS.TAB
};
var DRAG_AND_DROP_KEY = "Text";
var NEXT = "NEXT";
var PREV = "PREV";
var DragProvider = class {
  constructor() {
    this.state = {
      dragging: false,
      dropping: false,
      index: void 0
    };
  }
  /**
   * @name setDraggedItem
   * @param event
   * @param tag
   */
  setDraggedItem(event, tag) {
    if (event && event.dataTransfer) {
      event.dataTransfer.setData(DRAG_AND_DROP_KEY, JSON.stringify(tag));
    }
  }
  /**
   * @name getDraggedItem
   * @param event
   */
  getDraggedItem(event) {
    if (event && event.dataTransfer) {
      const data = event.dataTransfer.getData(DRAG_AND_DROP_KEY);
      try {
        return JSON.parse(data);
      } catch {
        return;
      }
    }
  }
  /**
   * @name setSender
   * @param sender
   */
  setSender(sender) {
    this.sender = sender;
  }
  /**
   * @name setReceiver
   * @param receiver
   */
  setReceiver(receiver) {
    this.receiver = receiver;
  }
  /**
   * @name onTagDropped
   * @param tag
   * @param indexDragged
   * @param indexDropped
   */
  onTagDropped(tag, indexDragged, indexDropped) {
    this.onDragEnd();
    this.sender.onRemoveRequested(tag, indexDragged);
    this.receiver.onAddingRequested(false, tag, indexDropped);
  }
  /**
   * @name setState
   * @param state
   */
  setState(state2) {
    this.state = __spreadValues(__spreadValues({}, this.state), state2);
  }
  /**
   * @name getState
   * @param key
   */
  getState(key) {
    return key ? this.state[key] : this.state;
  }
  /**
   * @name onDragEnd
   */
  onDragEnd() {
    this.setState({
      dragging: false,
      dropping: false,
      index: void 0
    });
  }
};
DragProvider.ɵfac = function DragProvider_Factory(t) {
  return new (t || DragProvider)();
};
DragProvider.ɵprov = ɵɵdefineInjectable({
  token: DragProvider,
  factory: DragProvider.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DragProvider, [{
    type: Injectable
  }], null, null);
})();
var defaults = {
  tagInput: {
    separatorKeys: [],
    separatorKeyCodes: [],
    maxItems: Infinity,
    placeholder: PLACEHOLDER,
    secondaryPlaceholder: SECONDARY_PLACEHOLDER,
    validators: [],
    asyncValidators: [],
    onlyFromAutocomplete: false,
    errorMessages: {},
    theme: "",
    onTextChangeDebounce: 250,
    inputId: null,
    inputClass: "",
    clearOnBlur: false,
    hideForm: false,
    addOnBlur: false,
    addOnPaste: false,
    pasteSplitPattern: ",",
    blinkIfDupe: true,
    removable: true,
    editable: false,
    allowDupes: false,
    modelAsStrings: false,
    trimTags: true,
    ripple: true,
    tabIndex: "",
    disable: false,
    dragZone: "",
    onRemoving: void 0,
    onAdding: void 0,
    displayBy: "display",
    identifyBy: "value",
    animationDuration: {
      enter: "250ms",
      leave: "150ms"
    }
  },
  dropdown: {
    displayBy: "display",
    identifyBy: "value",
    appendToBody: true,
    offset: "50 0",
    focusFirstElement: false,
    showDropdownIfEmpty: false,
    minimumTextLength: 1,
    limitItemsTo: Infinity,
    keepOpen: true,
    dynamicUpdate: true,
    zIndex: 1e3,
    matchingFn
  }
};
function matchingFn(value, target) {
  const targetValue = target[this.displayBy].toString();
  return targetValue && targetValue.toLowerCase().indexOf(value.toLowerCase()) >= 0;
}
var OptionsProvider = class _OptionsProvider {
  setOptions(options) {
    _OptionsProvider.defaults.tagInput = __spreadValues(__spreadValues({}, defaults.tagInput), options.tagInput);
    _OptionsProvider.defaults.dropdown = __spreadValues(__spreadValues({}, defaults.dropdown), options.dropdown);
  }
};
OptionsProvider.defaults = defaults;
function isObject(obj) {
  return obj === Object(obj);
}
var TagInputAccessor = class {
  constructor() {
    this._items = [];
    this.displayBy = OptionsProvider.defaults.tagInput.displayBy;
    this.identifyBy = OptionsProvider.defaults.tagInput.identifyBy;
  }
  get items() {
    return this._items;
  }
  set items(items) {
    this._items = items;
    this._onChangeCallback(this._items);
  }
  onTouched() {
    this._onTouchedCallback();
  }
  writeValue(items) {
    this._items = items || [];
  }
  registerOnChange(fn) {
    this._onChangeCallback = fn;
  }
  registerOnTouched(fn) {
    this._onTouchedCallback = fn;
  }
  /**
   * @name getItemValue
   * @param item
   * @param fromDropdown
   */
  getItemValue(item, fromDropdown = false) {
    const property = fromDropdown && this.dropdown ? this.dropdown.identifyBy : this.identifyBy;
    return isObject(item) ? item[property] : item;
  }
  /**
   * @name getItemDisplay
   * @param item
   * @param fromDropdown
   */
  getItemDisplay(item, fromDropdown = false) {
    const property = fromDropdown && this.dropdown ? this.dropdown.displayBy : this.displayBy;
    return isObject(item) ? item[property] : item;
  }
  /**
   * @name getItemsWithout
   * @param index
   */
  getItemsWithout(index) {
    return this.items.filter((item, position) => position !== index);
  }
};
TagInputAccessor.ɵfac = function TagInputAccessor_Factory(t) {
  return new (t || TagInputAccessor)();
};
TagInputAccessor.ɵdir = ɵɵdefineDirective({
  type: TagInputAccessor,
  inputs: {
    displayBy: "displayBy",
    identifyBy: "identifyBy"
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagInputAccessor, [{
    type: Directive
  }], null, {
    displayBy: [{
      type: Input
    }],
    identifyBy: [{
      type: Input
    }]
  });
})();
function listen(listenerType, action, condition = true) {
  if (!this.listeners.hasOwnProperty(listenerType)) {
    throw new Error("The event entered may be wrong");
  }
  if (!condition) {
    return;
  }
  this.listeners[listenerType].push(action);
}
var TagInputForm = class {
  constructor() {
    this.onSubmit = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.onKeyup = new EventEmitter();
    this.onKeydown = new EventEmitter();
    this.inputTextChange = new EventEmitter();
    this.validators = [];
    this.asyncValidators = [];
    this.tabindex = "";
    this.disabled = false;
    this.item = new FormControl({
      value: "",
      disabled: this.disabled
    });
  }
  /**
   * @name inputText
   */
  get inputText() {
    return this.item.value;
  }
  /**
   * @name inputText
   * @param text {string}
   */
  set inputText(text) {
    this.item.setValue(text);
    this.inputTextChange.emit(text);
  }
  ngOnInit() {
    this.item.setValidators(this.validators);
    this.item.setAsyncValidators(this.asyncValidators);
    this.form = new FormGroup({
      item: this.item
    });
  }
  ngOnChanges(changes) {
    if (changes.disabled && !changes.disabled.firstChange) {
      if (changes.disabled.currentValue) {
        this.form.controls["item"].disable();
      } else {
        this.form.controls["item"].enable();
      }
    }
  }
  /**
   * @name value
   */
  get value() {
    return this.form.get("item");
  }
  /**
   * @name isInputFocused
   */
  isInputFocused() {
    const doc = typeof document !== "undefined" ? document : void 0;
    return doc ? doc.activeElement === this.input.nativeElement : false;
  }
  /**
   * @name getErrorMessages
   * @param messages
   */
  getErrorMessages(messages) {
    return Object.keys(messages).filter((err) => this.value.hasError(err)).map((err) => messages[err]);
  }
  /**
   * @name hasErrors
   */
  hasErrors() {
    const {
      dirty,
      value,
      valid
    } = this.form;
    return dirty && value.item && !valid;
  }
  /**
   * @name focus
   */
  focus() {
    this.input.nativeElement.focus();
  }
  /**
   * @name blur
   */
  blur() {
    this.input.nativeElement.blur();
  }
  /**
   * @name getElementPosition
   */
  getElementPosition() {
    return this.input.nativeElement.getBoundingClientRect();
  }
  /**
   * - removes input from the component
   * @name destroy
   */
  destroy() {
    const input = this.input.nativeElement;
    input.parentElement.removeChild(input);
  }
  /**
   * @name onKeyDown
   * @param $event
   */
  onKeyDown($event) {
    this.inputText = this.value.value;
    if ($event.key === "Enter") {
      this.submit($event);
    } else {
      return this.onKeydown.emit($event);
    }
  }
  /**
   * @name onKeyUp
   * @param $event
   */
  onKeyUp($event) {
    this.inputText = this.value.value;
    return this.onKeyup.emit($event);
  }
  /**
   * @name submit
   */
  submit($event) {
    $event.preventDefault();
    this.onSubmit.emit($event);
  }
};
TagInputForm.ɵfac = function TagInputForm_Factory(t) {
  return new (t || TagInputForm)();
};
TagInputForm.ɵcmp = ɵɵdefineComponent({
  type: TagInputForm,
  selectors: [["tag-input-form"]],
  viewQuery: function TagInputForm_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
    }
  },
  inputs: {
    placeholder: "placeholder",
    validators: "validators",
    asyncValidators: "asyncValidators",
    inputId: "inputId",
    inputClass: "inputClass",
    tabindex: "tabindex",
    disabled: "disabled",
    inputText: "inputText"
  },
  outputs: {
    onSubmit: "onSubmit",
    onBlur: "onBlur",
    onFocus: "onFocus",
    onKeyup: "onKeyup",
    onKeydown: "onKeydown",
    inputTextChange: "inputTextChange"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 3,
  vars: 8,
  consts: [[3, "formGroup", "ngSubmit"], ["type", "text", "autocomplete", "off", "minlength", "1", "formControlName", "item", 1, "ng2-tag-input__text-input", 3, "tabindex", "ngClass", "focus", "blur", "keydown", "keyup"], ["input", ""]],
  template: function TagInputForm_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "form", 0);
      ɵɵlistener("ngSubmit", function TagInputForm_Template_form_ngSubmit_0_listener($event) {
        return ctx.submit($event);
      });
      ɵɵelementStart(1, "input", 1, 2);
      ɵɵlistener("focus", function TagInputForm_Template_input_focus_1_listener($event) {
        return ctx.onFocus.emit($event);
      })("blur", function TagInputForm_Template_input_blur_1_listener($event) {
        return ctx.onBlur.emit($event);
      })("keydown", function TagInputForm_Template_input_keydown_1_listener($event) {
        return ctx.onKeyDown($event);
      })("keyup", function TagInputForm_Template_input_keyup_1_listener($event) {
        return ctx.onKeyUp($event);
      });
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("formGroup", ctx.form);
      ɵɵadvance();
      ɵɵpropertyInterpolate("tabindex", ctx.disabled ? -1 : ctx.tabindex ? ctx.tabindex : 0);
      ɵɵproperty("ngClass", ctx.inputClass);
      ɵɵattribute("id", ctx.inputId)("placeholder", ctx.placeholder)("aria-label", ctx.placeholder)("tabindex", ctx.tabindex)("disabled", ctx.disabled ? ctx.disabled : null);
    }
  },
  dependencies: [ɵNgNoValidate, NgControlStatusGroup, FormGroupDirective, DefaultValueAccessor, MinLengthValidator, NgControlStatus, FormControlName, NgClass],
  styles: [".dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;box-shadow:none;outline:none;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{box-shadow:inset 0 1px 1px #0006;border:1px solid #ccc}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{box-shadow:inset 0 1px 1px #d9534f}.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:all .25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{border-bottom:2px solid #2196F3}.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:.1em 0}.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.dark.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px #00000013;border-radius:4px}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:.1em 0}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.error-message[_ngcontent-%COMP%]{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{color:#d9534f}.ng2-tag-input__text-input[_ngcontent-%COMP%]{display:inline;vertical-align:middle;border:none;padding:0 .5rem;height:38px;font-size:1em;font-family:Roboto,Helvetica Neue,sans-serif}.ng2-tag-input__text-input[_ngcontent-%COMP%]:focus{outline:0}.ng2-tag-input__text-input[disabled=true][_ngcontent-%COMP%]{opacity:.5;background:#fff}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagInputForm, [{
    type: Component,
    args: [{
      selector: "tag-input-form",
      template: '<!-- form -->\n<form (ngSubmit)="submit($event)" [formGroup]="form">\n    <input #input\n\n           type="text"\n           class="ng2-tag-input__text-input"\n           autocomplete="off"\n           tabindex="{{ disabled ? -1 : tabindex ? tabindex : 0 }}"\n           minlength="1"\n           formControlName="item"\n\n           [ngClass]="inputClass"\n           [attr.id]="inputId"\n           [attr.placeholder]="placeholder"\n           [attr.aria-label]="placeholder"\n           [attr.tabindex]="tabindex"\n           [attr.disabled]="disabled ? disabled : null"\n\n           (focus)="onFocus.emit($event)"\n           (blur)="onBlur.emit($event)"\n           (keydown)="onKeyDown($event)"\n           (keyup)="onKeyUp($event)"\n    />\n</form>\n',
      styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:none;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px #0006;border:1px solid #ccc}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:all .25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196F3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px #00000013;border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.ng2-tag-input__text-input{display:inline;vertical-align:middle;border:none;padding:0 .5rem;height:38px;font-size:1em;font-family:Roboto,Helvetica Neue,sans-serif}.ng2-tag-input__text-input:focus{outline:0}.ng2-tag-input__text-input[disabled=true]{opacity:.5;background:#fff}\n"]
    }]
  }], null, {
    onSubmit: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onKeyup: [{
      type: Output
    }],
    onKeydown: [{
      type: Output
    }],
    inputTextChange: [{
      type: Output
    }],
    placeholder: [{
      type: Input
    }],
    validators: [{
      type: Input
    }],
    asyncValidators: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    inputClass: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    input: [{
      type: ViewChild,
      args: ["input"]
    }],
    inputText: [{
      type: Input
    }]
  });
})();
var TagRipple = class {
  constructor() {
    this.state = "none";
  }
};
TagRipple.ɵfac = function TagRipple_Factory(t) {
  return new (t || TagRipple)();
};
TagRipple.ɵcmp = ɵɵdefineComponent({
  type: TagRipple,
  selectors: [["tag-ripple"]],
  inputs: {
    state: "state"
  },
  decls: 1,
  vars: 1,
  consts: [[1, "tag-ripple"]],
  template: function TagRipple_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelement(0, "div", 0);
    }
    if (rf & 2) {
      ɵɵproperty("@ink", ctx.state);
    }
  },
  styles: ["[_nghost-%COMP%]{width:100%;height:100%;left:0;overflow:hidden;position:absolute}.tag-ripple[_ngcontent-%COMP%]{background:rgba(0,0,0,.1);top:50%;left:50%;height:100%;transform:translate(-50%,-50%);position:absolute}"],
  data: {
    animation: [trigger("ink", [state("none", style({
      width: 0,
      opacity: 0
    })), transition("none => clicked", [animate(300, keyframes([style({
      opacity: 1,
      offset: 0,
      width: "30%",
      borderRadius: "100%"
    }), style({
      opacity: 1,
      offset: 0.5,
      width: "50%"
    }), style({
      opacity: 0.5,
      offset: 1,
      width: "100%",
      borderRadius: "16px"
    })]))])])]
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagRipple, [{
    type: Component,
    args: [{
      selector: "tag-ripple",
      styles: [`
        :host {
            width: 100%;
            height: 100%;
            left: 0;
            overflow: hidden;
            position: absolute;
        }

        .tag-ripple {
            background: rgba(0, 0, 0, 0.1);
            top: 50%;
            left: 50%;
            height: 100%;
            transform: translate(-50%, -50%);
            position: absolute;
        }
    `],
      template: `
        <div class="tag-ripple" [@ink]="state"></div>
    `,
      animations: [trigger("ink", [state("none", style({
        width: 0,
        opacity: 0
      })), transition("none => clicked", [animate(300, keyframes([style({
        opacity: 1,
        offset: 0,
        width: "30%",
        borderRadius: "100%"
      }), style({
        opacity: 1,
        offset: 0.5,
        width: "50%"
      }), style({
        opacity: 0.5,
        offset: 1,
        width: "100%",
        borderRadius: "16px"
      })]))])])]
    }]
  }], null, {
    state: [{
      type: Input
    }]
  });
})();
var DeleteIconComponent = class {
};
DeleteIconComponent.ɵfac = function DeleteIconComponent_Factory(t) {
  return new (t || DeleteIconComponent)();
};
DeleteIconComponent.ɵcmp = ɵɵdefineComponent({
  type: DeleteIconComponent,
  selectors: [["delete-icon"]],
  decls: 3,
  vars: 0,
  consts: [["height", "16px", "viewBox", "0 0 32 32", "width", "16px"], ["d", "M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z", "fill", "#121313"]],
  template: function DeleteIconComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "span");
      ɵɵnamespaceSVG();
      ɵɵelementStart(1, "svg", 0);
      ɵɵelement(2, "path", 1);
      ɵɵelementEnd()();
    }
  },
  styles: [".dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;box-shadow:none;outline:none;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{box-shadow:inset 0 1px 1px #0006;border:1px solid #ccc}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{box-shadow:inset 0 1px 1px #d9534f}.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:all .25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{border-bottom:2px solid #2196F3}.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:.1em 0}.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.dark.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px #00000013;border-radius:4px}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:.1em 0}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.error-message[_ngcontent-%COMP%]{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{color:#d9534f}delete-icon[_nghost-%COMP%]{width:20px;height:16px;transition:all .15s;display:inline-block;text-align:right}delete-icon[_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#444}delete-icon[_nghost-%COMP%]   svg[_ngcontent-%COMP%]{vertical-align:bottom;height:34px}delete-icon[_nghost-%COMP%]:hover{transform:scale(1.5) translateY(-3px)}.dark[_nghost-%COMP%], .dark   [_nghost-%COMP%]{text-align:right}.dark[_nghost-%COMP%]   path[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff}.dark[_nghost-%COMP%]   svg[_ngcontent-%COMP%], .dark   [_nghost-%COMP%]   svg[_ngcontent-%COMP%]{vertical-align:bottom;height:34px}.minimal[_nghost-%COMP%], .minimal   [_nghost-%COMP%]{text-align:right}.minimal[_nghost-%COMP%]   path[_ngcontent-%COMP%], .minimal   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#444}.minimal[_nghost-%COMP%]   svg[_ngcontent-%COMP%], .minimal   [_nghost-%COMP%]   svg[_ngcontent-%COMP%]{vertical-align:bottom;height:34px}.bootstrap[_nghost-%COMP%], .bootstrap   [_nghost-%COMP%]{text-align:right}.bootstrap[_nghost-%COMP%]   path[_ngcontent-%COMP%], .bootstrap   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff}.bootstrap[_nghost-%COMP%]   svg[_ngcontent-%COMP%], .bootstrap   [_nghost-%COMP%]   svg[_ngcontent-%COMP%]{vertical-align:bottom;height:34px}tag:focus[_nghost-%COMP%]   path[_ngcontent-%COMP%], tag:focus   [_nghost-%COMP%]   path[_ngcontent-%COMP%], tag:active[_nghost-%COMP%]   path[_ngcontent-%COMP%], tag:active   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff}.dark   tag:focus[_nghost-%COMP%]   path[_ngcontent-%COMP%], .dark   tag:focus   [_nghost-%COMP%]   path[_ngcontent-%COMP%], .dark   tag:active[_nghost-%COMP%]   path[_ngcontent-%COMP%], .dark   tag:active   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#000}.minimal   tag:focus[_nghost-%COMP%]   path[_ngcontent-%COMP%], .minimal   tag:focus   [_nghost-%COMP%]   path[_ngcontent-%COMP%], .minimal   tag:active[_nghost-%COMP%]   path[_ngcontent-%COMP%], .minimal   tag:active   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#000}.bootstrap   tag:focus[_nghost-%COMP%]   path[_ngcontent-%COMP%], .bootstrap   tag:focus   [_nghost-%COMP%]   path[_ngcontent-%COMP%], .bootstrap   tag:active[_nghost-%COMP%]   path[_ngcontent-%COMP%], .bootstrap   tag:active   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff}.bootstrap3-info[_nghost-%COMP%], .bootstrap3-info   [_nghost-%COMP%]{height:inherit}.bootstrap3-info[_nghost-%COMP%]   path[_ngcontent-%COMP%], .bootstrap3-info   [_nghost-%COMP%]   path[_ngcontent-%COMP%]{fill:#fff}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeleteIconComponent, [{
    type: Component,
    args: [{
      selector: "delete-icon",
      template: '<span>\n    <svg\n        height="16px"\n        viewBox="0 0 32 32"\n        width="16px"\n    >\n        <path\n            d="M17.459,16.014l8.239-8.194c0.395-0.391,0.395-1.024,0-1.414c-0.394-0.391-1.034-0.391-1.428,0  l-8.232,8.187L7.73,6.284c-0.394-0.395-1.034-0.395-1.428,0c-0.394,0.396-0.394,1.037,0,1.432l8.302,8.303l-8.332,8.286  c-0.394,0.391-0.394,1.024,0,1.414c0.394,0.391,1.034,0.391,1.428,0l8.325-8.279l8.275,8.276c0.394,0.395,1.034,0.395,1.428,0  c0.394-0.396,0.394-1.037,0-1.432L17.459,16.014z"\n            fill="#121313"\n        />\n    </svg>\n</span>',
      styles: [".dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:none;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px #0006;border:1px solid #ccc}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:all .25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196F3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px #00000013;border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}:host(delete-icon){width:20px;height:16px;transition:all .15s;display:inline-block;text-align:right}:host(delete-icon) path{fill:#444}:host(delete-icon) svg{vertical-align:bottom;height:34px}:host(delete-icon):hover{transform:scale(1.5) translateY(-3px)}:host-context(.dark){text-align:right}:host-context(.dark) path{fill:#fff}:host-context(.dark) svg{vertical-align:bottom;height:34px}:host-context(.minimal){text-align:right}:host-context(.minimal) path{fill:#444}:host-context(.minimal) svg{vertical-align:bottom;height:34px}:host-context(.bootstrap){text-align:right}:host-context(.bootstrap) path{fill:#fff}:host-context(.bootstrap) svg{vertical-align:bottom;height:34px}:host-context(tag:focus) path,:host-context(tag:active) path{fill:#fff}:host-context(.dark tag:focus) path,:host-context(.dark tag:active) path{fill:#000}:host-context(.minimal tag:focus) path,:host-context(.minimal tag:active) path{fill:#000}:host-context(.bootstrap tag:focus) path,:host-context(.bootstrap tag:active) path{fill:#fff}:host-context(.bootstrap3-info){height:inherit}:host-context(.bootstrap3-info) path{fill:#fff}\n"]
    }]
  }], null, null);
})();
var navigator = typeof window !== "undefined" ? window.navigator : {
  userAgent: "Chrome",
  vendor: "Google Inc"
};
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var TagComponent = class {
  constructor(element, renderer, cdRef) {
    this.element = element;
    this.renderer = renderer;
    this.cdRef = cdRef;
    this.disabled = false;
    this.onSelect = new EventEmitter();
    this.onRemove = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.onKeyDown = new EventEmitter();
    this.onTagEdited = new EventEmitter();
    this.editing = false;
    this.rippleState = "none";
  }
  /**
   * @name readonly {boolean}
   */
  get readonly() {
    return typeof this.model !== "string" && this.model.readonly === true;
  }
  /**
   * @name select
   */
  select($event) {
    if (this.readonly || this.disabled) {
      return;
    }
    if ($event) {
      $event.stopPropagation();
    }
    this.focus();
    this.onSelect.emit(this.model);
  }
  /**
   * @name remove
   */
  remove($event) {
    $event.stopPropagation();
    this.onRemove.emit(this);
  }
  /**
   * @name focus
   */
  focus() {
    this.element.nativeElement.focus();
  }
  move() {
    this.moving = true;
  }
  /**
   * @name keydown
   * @param event
   */
  keydown(event) {
    if (this.editing) {
      if (event.keyCode === 13) {
        return this.disableEditMode(event);
      }
    } else {
      this.onKeyDown.emit({
        event,
        model: this.model
      });
    }
  }
  /**
   * @name blink
   */
  blink() {
    const classList = this.element.nativeElement.classList;
    classList.add("blink");
    setTimeout(() => classList.remove("blink"), 50);
  }
  /**
   * @name toggleEditMode
   */
  toggleEditMode() {
    if (this.editable) {
      return this.editing ? void 0 : this.activateEditMode();
    }
  }
  /**
   * @name onBlurred
   * @param event
   */
  onBlurred(event) {
    if (!this.editable) {
      return;
    }
    this.disableEditMode();
    const value = event.target.innerText;
    const result = typeof this.model === "string" ? value : __spreadProps(__spreadValues({}, this.model), {
      [this.displayBy]: value
    });
    this.onBlur.emit(result);
  }
  /**
   * @name getDisplayValue
   * @param item
   */
  getDisplayValue(item) {
    return typeof item === "string" ? item : item[this.displayBy];
  }
  /**
   * @desc returns whether the ripple is visible or not
   * only works in Chrome
   * @name isRippleVisible
   */
  get isRippleVisible() {
    return !this.readonly && !this.editing && isChrome && this.hasRipple;
  }
  /**
   * @name disableEditMode
   * @param $event
   */
  disableEditMode($event) {
    const classList = this.element.nativeElement.classList;
    const input = this.getContentEditableText();
    this.editing = false;
    classList.remove("tag--editing");
    if (!input) {
      this.setContentEditableText(this.model);
      return;
    }
    this.storeNewValue(input);
    this.cdRef.detectChanges();
    if ($event) {
      $event.preventDefault();
    }
  }
  /**
   * @name isDeleteIconVisible
   */
  isDeleteIconVisible() {
    return !this.readonly && !this.disabled && this.removable && !this.editing;
  }
  /**
   * @name getContentEditableText
   */
  getContentEditableText() {
    const input = this.getContentEditable();
    return input ? input.innerText.trim() : "";
  }
  /**
   * @name setContentEditableText
   * @param model
   */
  setContentEditableText(model) {
    const input = this.getContentEditable();
    const value = this.getDisplayValue(model);
    input.innerText = value;
  }
  /**
   * @name
   */
  activateEditMode() {
    const classList = this.element.nativeElement.classList;
    classList.add("tag--editing");
    this.editing = true;
  }
  /**
   * @name storeNewValue
   * @param input
   */
  storeNewValue(input) {
    const exists = (tag) => {
      return typeof tag === "string" ? tag === input : tag[this.displayBy] === input;
    };
    const hasId = () => {
      return this.model[this.identifyBy] !== this.model[this.displayBy];
    };
    if (exists(this.model)) {
      return;
    }
    const model = typeof this.model === "string" ? input : {
      index: this.index,
      [this.identifyBy]: hasId() ? this.model[this.identifyBy] : input,
      [this.displayBy]: input
    };
    if (this.canAddTag(model)) {
      this.onTagEdited.emit({
        tag: model,
        index: this.index
      });
    } else {
      this.setContentEditableText(this.model);
    }
  }
  /**
   * @name getContentEditable
   */
  getContentEditable() {
    return this.element.nativeElement.querySelector("[contenteditable]");
  }
};
TagComponent.ɵfac = function TagComponent_Factory(t) {
  return new (t || TagComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ChangeDetectorRef));
};
TagComponent.ɵcmp = ɵɵdefineComponent({
  type: TagComponent,
  selectors: [["tag"]],
  viewQuery: function TagComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(TagRipple, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.ripple = _t.first);
    }
  },
  hostVars: 2,
  hostBindings: function TagComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("keydown", function TagComponent_keydown_HostBindingHandler($event) {
        return ctx.keydown($event);
      });
    }
    if (rf & 2) {
      ɵɵclassProp("moving", ctx.moving);
    }
  },
  inputs: {
    model: "model",
    removable: "removable",
    editable: "editable",
    template: "template",
    displayBy: "displayBy",
    identifyBy: "identifyBy",
    index: "index",
    hasRipple: "hasRipple",
    disabled: "disabled",
    canAddTag: "canAddTag"
  },
  outputs: {
    onSelect: "onSelect",
    onRemove: "onRemove",
    onBlur: "onBlur",
    onKeyDown: "onKeyDown",
    onTagEdited: "onTagEdited"
  },
  decls: 4,
  vars: 8,
  consts: [[3, "ngSwitch", "click", "dblclick", "mousedown", "mouseup"], [4, "ngSwitchCase"], ["class", "tag-wrapper", 4, "ngSwitchCase"], [3, "state", 4, "ngIf"], [3, "ngTemplateOutletContext", "ngTemplateOutlet"], [1, "tag-wrapper"], ["spellcheck", "false", 1, "tag__text", "inline", 3, "keydown.enter", "keydown.escape", "click", "blur"], ["aria-label", "Remove tag", "role", "button", 3, "click", 4, "ngIf"], ["aria-label", "Remove tag", "role", "button", 3, "click"], [3, "state"]],
  template: function TagComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("click", function TagComponent_Template_div_click_0_listener($event) {
        return ctx.select($event);
      })("dblclick", function TagComponent_Template_div_dblclick_0_listener() {
        return ctx.toggleEditMode();
      })("mousedown", function TagComponent_Template_div_mousedown_0_listener() {
        return ctx.rippleState = "clicked";
      })("mouseup", function TagComponent_Template_div_mouseup_0_listener() {
        return ctx.rippleState = "none";
      });
      ɵɵtemplate(1, TagComponent_div_1_Template, 2, 6, "div", 1)(2, TagComponent_div_2_Template, 4, 4, "div", 2);
      ɵɵelementEnd();
      ɵɵtemplate(3, TagComponent_tag_ripple_3_Template, 1, 2, "tag-ripple", 3);
    }
    if (rf & 2) {
      ɵɵclassProp("disabled", ctx.disabled);
      ɵɵproperty("ngSwitch", !!ctx.template);
      ɵɵattribute("tabindex", -1)("aria-label", ctx.getDisplayValue(ctx.model));
      ɵɵadvance();
      ɵɵproperty("ngSwitchCase", true);
      ɵɵadvance();
      ɵɵproperty("ngSwitchCase", false);
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.isRippleVisible);
    }
  },
  dependencies: [DeleteIconComponent, TagRipple, NgSwitch, NgSwitchCase, NgTemplateOutlet, NgIf],
  styles: ["[_nghost-%COMP%], [_nghost-%COMP%] > div[_ngcontent-%COMP%], [_nghost-%COMP%] > div[_ngcontent-%COMP%]:focus{outline:0;overflow:hidden;transition:opacity 1s;z-index:1}[_nghost-%COMP%]{max-width:400px}.blink[_nghost-%COMP%]{-webkit-animation:_ngcontent-%COMP%_blink .3s normal forwards ease-in-out;animation:_ngcontent-%COMP%_blink .3s normal forwards ease-in-out}@-webkit-keyframes _ngcontent-%COMP%_blink{0%{opacity:.3}}@keyframes _ngcontent-%COMP%_blink{0%{opacity:.3}}[_nghost-%COMP%]   .disabled[_ngcontent-%COMP%]{cursor:not-allowed}[_nghost-%COMP%]   [contenteditable=true][_ngcontent-%COMP%]{outline:0}.tag-wrapper[_ngcontent-%COMP%]{flex-direction:row;display:flex}.tag__text[_ngcontent-%COMP%]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}"]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagComponent, [{
    type: Component,
    args: [{
      selector: "tag",
      template: `<div (click)="select($event)"
     (dblclick)="toggleEditMode()"
     (mousedown)="rippleState='clicked'"
     (mouseup)="rippleState='none'"
     [ngSwitch]="!!template"
     [class.disabled]="disabled"
     [attr.tabindex]="-1"
     [attr.aria-label]="getDisplayValue(model)">

    <div *ngSwitchCase="true" [attr.contenteditable]="editing">
        <!-- CUSTOM TEMPLATE -->
        <ng-template
            [ngTemplateOutletContext]="{ item: model, index: index }"
            [ngTemplateOutlet]="template">
        </ng-template>
    </div>

    <div *ngSwitchCase="false" class="tag-wrapper">
        <!-- TAG NAME -->
        <div [attr.contenteditable]="editing"
             [attr.title]="getDisplayValue(model)"
             class="tag__text inline"
             spellcheck="false"
             (keydown.enter)="disableEditMode($event)"
             (keydown.escape)="disableEditMode($event)"
             (click)="editing ? $event.stopPropagation() : undefined"
             (blur)="onBlurred($event)">
            {{ getDisplayValue(model) }}
        </div>

        <!-- 'X' BUTTON -->
        <delete-icon
            aria-label="Remove tag"
            role="button"
            (click)="remove($event)"
            *ngIf="isDeleteIconVisible()">
        </delete-icon>
    </div>
</div>

<tag-ripple [state]="rippleState"
            [attr.tabindex]="-1"
            *ngIf="isRippleVisible">
</tag-ripple>
`,
      styles: [":host,:host>div,:host>div:focus{outline:0;overflow:hidden;transition:opacity 1s;z-index:1}:host{max-width:400px}:host.blink{-webkit-animation:blink .3s normal forwards ease-in-out;animation:blink .3s normal forwards ease-in-out}@-webkit-keyframes blink{0%{opacity:.3}}@keyframes blink{0%{opacity:.3}}:host .disabled{cursor:not-allowed}:host [contenteditable=true]{outline:0}.tag-wrapper{flex-direction:row;display:flex}.tag__text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}\n"]
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: Renderer2
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    model: [{
      type: Input
    }],
    removable: [{
      type: Input
    }],
    editable: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    displayBy: [{
      type: Input
    }],
    identifyBy: [{
      type: Input
    }],
    index: [{
      type: Input
    }],
    hasRipple: [{
      type: Input
    }],
    disabled: [{
      type: Input
    }],
    canAddTag: [{
      type: Input
    }],
    onSelect: [{
      type: Output
    }],
    onRemove: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onKeyDown: [{
      type: Output
    }],
    onTagEdited: [{
      type: Output
    }],
    moving: [{
      type: HostBinding,
      args: ["class.moving"]
    }],
    ripple: [{
      type: ViewChild,
      args: [TagRipple]
    }],
    keydown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }]
  });
})();
var animations = [trigger("animation", [state("in", style({
  opacity: 1
})), state("out", style({
  opacity: 0
})), transition(":enter", [animate("{{ enter }}", keyframes([style({
  opacity: 0,
  offset: 0,
  transform: "translate(0px, 20px)"
}), style({
  opacity: 0.3,
  offset: 0.3,
  transform: "translate(0px, -10px)"
}), style({
  opacity: 0.5,
  offset: 0.5,
  transform: "translate(0px, 0px)"
}), style({
  opacity: 0.75,
  offset: 0.75,
  transform: "translate(0px, 5px)"
}), style({
  opacity: 1,
  offset: 1,
  transform: "translate(0px, 0px)"
})]))]), transition(":leave", [animate("{{ leave }}", keyframes([style({
  opacity: 1,
  transform: "translateX(0)",
  offset: 0
}), style({
  opacity: 1,
  transform: "translateX(-15px)",
  offset: 0.7
}), style({
  opacity: 0,
  transform: "translateX(100%)",
  offset: 1
})]))])])];
var TagInputDropdown = class {
  constructor(injector) {
    this.injector = injector;
    this.offset = defaults.dropdown.offset;
    this.focusFirstElement = defaults.dropdown.focusFirstElement;
    this.showDropdownIfEmpty = defaults.dropdown.showDropdownIfEmpty;
    this.minimumTextLength = defaults.dropdown.minimumTextLength;
    this.limitItemsTo = defaults.dropdown.limitItemsTo;
    this.displayBy = defaults.dropdown.displayBy;
    this.identifyBy = defaults.dropdown.identifyBy;
    this.matchingFn = defaults.dropdown.matchingFn;
    this.appendToBody = defaults.dropdown.appendToBody;
    this.keepOpen = defaults.dropdown.keepOpen;
    this.dynamicUpdate = defaults.dropdown.dynamicUpdate;
    this.zIndex = defaults.dropdown.zIndex;
    this.items = [];
    this.tagInput = this.injector.get(TagInputComponent);
    this._autocompleteItems = [];
    this.show = () => {
      const maxItemsReached = this.tagInput.items.length === this.tagInput.maxItems;
      const value = this.getFormValue();
      const hasMinimumText = value.trim().length >= this.minimumTextLength;
      const position = this.calculatePosition();
      const items = this.getMatchingItems(value);
      const hasItems = items.length > 0;
      const isHidden = this.isVisible === false;
      const showDropdownIfEmpty = this.showDropdownIfEmpty && hasItems && !value;
      const isDisabled = this.tagInput.disable;
      const shouldShow = isHidden && (hasItems && hasMinimumText || showDropdownIfEmpty);
      const shouldHide = this.isVisible && !hasItems;
      if (this.autocompleteObservable && hasMinimumText) {
        return this.getItemsFromObservable(value);
      }
      if (!this.showDropdownIfEmpty && !value || maxItemsReached || isDisabled) {
        return this.dropdown.hide();
      }
      this.setItems(items);
      if (shouldShow) {
        this.dropdown.show(position);
      } else if (shouldHide) {
        this.hide();
      }
    };
    this.requestAdding = (item) => __async(this, null, function* () {
      const tag = this.createTagModel(item);
      yield this.tagInput.onAddingRequested(true, tag).catch(() => {
      });
    });
    this.resetItems = () => {
      this.items = [];
    };
    this.getItemsFromObservable = (text) => {
      this.setLoadingState(true);
      const subscribeFn = (data) => {
        this.setLoadingState(false).populateItems(data);
        this.setItems(this.getMatchingItems(text));
        if (this.items.length) {
          this.dropdown.show(this.calculatePosition());
        } else {
          this.dropdown.hide();
        }
      };
      this.autocompleteObservable(text).pipe(first()).subscribe(subscribeFn, () => this.setLoadingState(false));
    };
  }
  /**
   * @name autocompleteItems
   * @param items
   */
  set autocompleteItems(items) {
    this._autocompleteItems = items;
  }
  /**
   * @name autocompleteItems
   * @desc array of items that will populate the autocomplete
   */
  get autocompleteItems() {
    const items = this._autocompleteItems;
    if (!items) {
      return [];
    }
    return items.map((item) => {
      return typeof item === "string" ? {
        [this.displayBy]: item,
        [this.identifyBy]: item
      } : item;
    });
  }
  /**
   * @name ngAfterviewInit
   */
  ngAfterViewInit() {
    this.onItemClicked().subscribe((item) => {
      this.requestAdding(item);
    });
    this.onHide().subscribe(this.resetItems);
    const DEBOUNCE_TIME = 200;
    const KEEP_OPEN = this.keepOpen;
    this.tagInput.onTextChange.asObservable().pipe(distinctUntilChanged(), debounceTime(DEBOUNCE_TIME), filter((value) => {
      if (KEEP_OPEN === false) {
        return value.length > 0;
      }
      return true;
    })).subscribe(this.show);
  }
  /**
   * @name updatePosition
   */
  updatePosition() {
    const position = this.tagInput.inputForm.getElementPosition();
    this.dropdown.menu.updatePosition(position, this.dynamicUpdate);
  }
  /**
   * @name isVisible
   */
  get isVisible() {
    return this.dropdown.menu.dropdownState.menuState.isVisible;
  }
  /**
   * @name onHide
   */
  onHide() {
    return this.dropdown.onHide;
  }
  /**
   * @name onItemClicked
   */
  onItemClicked() {
    return this.dropdown.onItemClicked;
  }
  /**
   * @name selectedItem
   */
  get selectedItem() {
    return this.dropdown.menu.dropdownState.dropdownState.selectedItem;
  }
  /**
   * @name state
   */
  get state() {
    return this.dropdown.menu.dropdownState;
  }
  /**
   * @name hide
   */
  hide() {
    this.resetItems();
    this.dropdown.hide();
  }
  /**
   * @name scrollListener
   */
  scrollListener() {
    if (!this.isVisible || !this.dynamicUpdate) {
      return;
    }
    this.updatePosition();
  }
  /**
   * @name onWindowBlur
   */
  onWindowBlur() {
    this.dropdown.hide();
  }
  /**
   * @name getFormValue
   */
  getFormValue() {
    const formValue = this.tagInput.formValue;
    return formValue ? formValue.toString().trim() : "";
  }
  /**
   * @name calculatePosition
   */
  calculatePosition() {
    return this.tagInput.inputForm.getElementPosition();
  }
  /**
   * @name createTagModel
   * @param item
   */
  createTagModel(item) {
    const display = typeof item.value === "string" ? item.value : item.value[this.displayBy];
    const value = typeof item.value === "string" ? item.value : item.value[this.identifyBy];
    return __spreadProps(__spreadValues({}, item.value), {
      [this.tagInput.displayBy]: display,
      [this.tagInput.identifyBy]: value
    });
  }
  /**
   *
   * @param value {string}
   */
  getMatchingItems(value) {
    if (!value && !this.showDropdownIfEmpty) {
      return [];
    }
    const dupesAllowed = this.tagInput.allowDupes;
    return this.autocompleteItems.filter((item) => {
      const hasValue = dupesAllowed ? false : this.tagInput.tags.some((tag) => {
        const identifyBy = this.tagInput.identifyBy;
        const model = typeof tag.model === "string" ? tag.model : tag.model[identifyBy];
        return model === item[this.identifyBy];
      });
      return this.matchingFn(value, item) && hasValue === false;
    });
  }
  /**
   * @name setItems
   */
  setItems(items) {
    this.items = items.slice(0, this.limitItemsTo || items.length);
  }
  /**
   * @name populateItems
   * @param data
   */
  populateItems(data) {
    this.autocompleteItems = data.map((item) => {
      return typeof item === "string" ? {
        [this.displayBy]: item,
        [this.identifyBy]: item
      } : item;
    });
    return this;
  }
  /**
   * @name setLoadingState
   * @param state
   */
  setLoadingState(state2) {
    this.tagInput.isLoading = state2;
    return this;
  }
};
TagInputDropdown.ɵfac = function TagInputDropdown_Factory(t) {
  return new (t || TagInputDropdown)(ɵɵdirectiveInject(Injector));
};
TagInputDropdown.ɵcmp = ɵɵdefineComponent({
  type: TagInputDropdown,
  selectors: [["tag-input-dropdown"]],
  contentQueries: function TagInputDropdown_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TemplateRef, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  },
  viewQuery: function TagInputDropdown_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(Ng2Dropdown, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdown = _t.first);
    }
  },
  hostBindings: function TagInputDropdown_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("scroll", function TagInputDropdown_scroll_HostBindingHandler() {
        return ctx.scrollListener();
      }, false, ɵɵresolveWindow)("blur", function TagInputDropdown_blur_HostBindingHandler() {
        return ctx.onWindowBlur();
      }, false, ɵɵresolveWindow);
    }
  },
  inputs: {
    offset: "offset",
    focusFirstElement: "focusFirstElement",
    showDropdownIfEmpty: "showDropdownIfEmpty",
    autocompleteObservable: "autocompleteObservable",
    minimumTextLength: "minimumTextLength",
    limitItemsTo: "limitItemsTo",
    displayBy: "displayBy",
    identifyBy: "identifyBy",
    matchingFn: "matchingFn",
    appendToBody: "appendToBody",
    keepOpen: "keepOpen",
    dynamicUpdate: "dynamicUpdate",
    zIndex: "zIndex",
    autocompleteItems: "autocompleteItems"
  },
  decls: 3,
  vars: 6,
  consts: [[3, "dynamicUpdate"], [3, "focusFirstElement", "zIndex", "appendToBody", "offset"], [3, "value", "ngSwitch", 4, "ngFor", "ngForOf"], [3, "value", "ngSwitch"], [3, "innerHTML", 4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "innerHTML"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function TagInputDropdown_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "ng2-dropdown", 0)(1, "ng2-dropdown-menu", 1);
      ɵɵtemplate(2, TagInputDropdown_ng2_menu_item_2_Template, 3, 3, "ng2-menu-item", 2);
      ɵɵelementEnd()();
    }
    if (rf & 2) {
      ɵɵproperty("dynamicUpdate", ctx.dynamicUpdate);
      ɵɵadvance();
      ɵɵproperty("focusFirstElement", ctx.focusFirstElement)("zIndex", ctx.zIndex)("appendToBody", ctx.appendToBody)("offset", ctx.offset);
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.items);
    }
  },
  dependencies: [Ng2Dropdown, Ng2DropdownMenu, Ng2MenuItem, NgForOf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet, HighlightPipe],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagInputDropdown, [{
    type: Component,
    args: [{
      selector: "tag-input-dropdown",
      template: '<ng2-dropdown [dynamicUpdate]="dynamicUpdate">\n    <ng2-dropdown-menu [focusFirstElement]="focusFirstElement"\n                       [zIndex]="zIndex"\n                       [appendToBody]="appendToBody"\n                       [offset]="offset">\n        <ng2-menu-item *ngFor="let item of items; let index = index; let last = last"\n                       [value]="item"\n                       [ngSwitch]="!!templates.length">\n\n            <span *ngSwitchCase="false"\n                  [innerHTML]="item[displayBy] | highlight : tagInput.inputForm.value.value">\n            </span>\n\n            <ng-template *ngSwitchDefault\n                      [ngTemplateOutlet]="templates.first"\n                      [ngTemplateOutletContext]="{ item: item, index: index, last: last }">\n            </ng-template>\n        </ng2-menu-item>\n    </ng2-dropdown-menu>\n</ng2-dropdown>\n'
    }]
  }], function() {
    return [{
      type: Injector
    }];
  }, {
    dropdown: [{
      type: ViewChild,
      args: [Ng2Dropdown]
    }],
    templates: [{
      type: ContentChildren,
      args: [TemplateRef]
    }],
    offset: [{
      type: Input
    }],
    focusFirstElement: [{
      type: Input
    }],
    showDropdownIfEmpty: [{
      type: Input
    }],
    autocompleteObservable: [{
      type: Input
    }],
    minimumTextLength: [{
      type: Input
    }],
    limitItemsTo: [{
      type: Input
    }],
    displayBy: [{
      type: Input
    }],
    identifyBy: [{
      type: Input
    }],
    matchingFn: [{
      type: Input
    }],
    appendToBody: [{
      type: Input
    }],
    keepOpen: [{
      type: Input
    }],
    dynamicUpdate: [{
      type: Input
    }],
    zIndex: [{
      type: Input
    }],
    autocompleteItems: [{
      type: Input
    }],
    scrollListener: [{
      type: HostListener,
      args: ["window:scroll"]
    }],
    onWindowBlur: [{
      type: HostListener,
      args: ["window:blur"]
    }]
  });
})();
var CUSTOM_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => TagInputComponent),
  multi: true
};
var TagInputComponent = class extends TagInputAccessor {
  constructor(renderer, dragProvider) {
    super();
    this.renderer = renderer;
    this.dragProvider = dragProvider;
    this.separatorKeys = defaults.tagInput.separatorKeys;
    this.separatorKeyCodes = defaults.tagInput.separatorKeyCodes;
    this.placeholder = defaults.tagInput.placeholder;
    this.secondaryPlaceholder = defaults.tagInput.secondaryPlaceholder;
    this.maxItems = defaults.tagInput.maxItems;
    this.validators = defaults.tagInput.validators;
    this.asyncValidators = defaults.tagInput.asyncValidators;
    this.onlyFromAutocomplete = defaults.tagInput.onlyFromAutocomplete;
    this.errorMessages = defaults.tagInput.errorMessages;
    this.theme = defaults.tagInput.theme;
    this.onTextChangeDebounce = defaults.tagInput.onTextChangeDebounce;
    this.inputId = defaults.tagInput.inputId;
    this.inputClass = defaults.tagInput.inputClass;
    this.clearOnBlur = defaults.tagInput.clearOnBlur;
    this.hideForm = defaults.tagInput.hideForm;
    this.addOnBlur = defaults.tagInput.addOnBlur;
    this.addOnPaste = defaults.tagInput.addOnPaste;
    this.pasteSplitPattern = defaults.tagInput.pasteSplitPattern;
    this.blinkIfDupe = defaults.tagInput.blinkIfDupe;
    this.removable = defaults.tagInput.removable;
    this.editable = defaults.tagInput.editable;
    this.allowDupes = defaults.tagInput.allowDupes;
    this.modelAsStrings = defaults.tagInput.modelAsStrings;
    this.trimTags = defaults.tagInput.trimTags;
    this.ripple = defaults.tagInput.ripple;
    this.tabindex = defaults.tagInput.tabIndex;
    this.disable = defaults.tagInput.disable;
    this.dragZone = defaults.tagInput.dragZone;
    this.onRemoving = defaults.tagInput.onRemoving;
    this.onAdding = defaults.tagInput.onAdding;
    this.animationDuration = defaults.tagInput.animationDuration;
    this.onAdd = new EventEmitter();
    this.onRemove = new EventEmitter();
    this.onSelect = new EventEmitter();
    this.onFocus = new EventEmitter();
    this.onBlur = new EventEmitter();
    this.onTextChange = new EventEmitter();
    this.onPaste = new EventEmitter();
    this.onValidationError = new EventEmitter();
    this.onTagEdited = new EventEmitter();
    this.isLoading = false;
    this.listeners = {
      [KEYDOWN]: [],
      [KEYUP]: []
    };
    this.inputTextChange = new EventEmitter();
    this.inputTextValue = "";
    this.errors = [];
    this.appendTag = (tag, index = this.items.length) => {
      const items = this.items;
      const model = this.modelAsStrings ? tag[this.identifyBy] : tag;
      this.items = [...items.slice(0, index), model, ...items.slice(index, items.length)];
    };
    this.createTag = (model) => {
      const trim = (val, key) => {
        return typeof val === "string" ? val.trim() : val[key];
      };
      return __spreadProps(__spreadValues({}, typeof model !== "string" ? model : {}), {
        [this.displayBy]: this.trimTags ? trim(model, this.displayBy) : model,
        [this.identifyBy]: this.trimTags ? trim(model, this.identifyBy) : model
      });
    };
    this.isTagValid = (tag, fromAutocomplete = false) => {
      const selectedItem = this.dropdown ? this.dropdown.selectedItem : void 0;
      const value = this.getItemDisplay(tag).trim();
      if (selectedItem && !fromAutocomplete || !value) {
        return false;
      }
      const dupe = this.findDupe(tag, fromAutocomplete);
      if (!this.allowDupes && dupe && this.blinkIfDupe) {
        const model = this.tags.find((item) => {
          return this.getItemValue(item.model) === this.getItemValue(dupe);
        });
        if (model) {
          model.blink();
        }
      }
      const isFromAutocomplete = fromAutocomplete && this.onlyFromAutocomplete;
      const assertions = [
        // 1. there must be no dupe OR dupes are allowed
        !dupe || this.allowDupes,
        // 2. check max items has not been reached
        !this.maxItemsReached,
        // 3. check item comes from autocomplete or onlyFromAutocomplete is false
        isFromAutocomplete || !this.onlyFromAutocomplete
      ];
      return assertions.filter(Boolean).length === assertions.length;
    };
    this.onPasteCallback = (data) => __async(this, null, function* () {
      const getText = () => {
        const isIE = Boolean(window.clipboardData);
        const clipboardData = isIE ? window.clipboardData : data.clipboardData;
        const type = isIE ? "Text" : "text/plain";
        return clipboardData === null ? "" : clipboardData.getData(type) || "";
      };
      const text = getText();
      const requests = text.split(this.pasteSplitPattern).map((item) => {
        const tag = this.createTag(item);
        this.setInputValue(tag[this.displayBy]);
        return this.onAddingRequested(false, tag);
      });
      const resetInput = () => setTimeout(() => this.setInputValue(""), 50);
      Promise.all(requests).then(() => {
        this.onPaste.emit(text);
        resetInput();
      }).catch(resetInput);
    });
  }
  /**
   * @name inputText
   */
  get inputText() {
    return this.inputTextValue;
  }
  /**
   * @name inputText
   * @param text
   */
  set inputText(text) {
    this.inputTextValue = text;
    this.inputTextChange.emit(text);
  }
  /**
   * @desc removes the tab index if it is set - it will be passed through to the input
   * @name tabindexAttr
   */
  get tabindexAttr() {
    return this.tabindex !== "" ? "-1" : "";
  }
  /**
   * @name ngAfterViewInit
   */
  ngAfterViewInit() {
    this.setUpKeypressListeners();
    this.setupSeparatorKeysListener();
    this.setUpInputKeydownListeners();
    if (this.onTextChange.observers.length) {
      this.setUpTextChangeSubscriber();
    }
    if (this.clearOnBlur || this.addOnBlur) {
      this.setUpOnBlurSubscriber();
    }
    if (this.addOnPaste) {
      this.setUpOnPasteListener();
    }
    const statusChanges$ = this.inputForm.form.statusChanges;
    statusChanges$.pipe(filter((status) => status !== "PENDING")).subscribe(() => {
      this.errors = this.inputForm.getErrorMessages(this.errorMessages);
    });
    this.isProgressBarVisible$ = statusChanges$.pipe(map((status) => {
      return status === "PENDING" || this.isLoading;
    }));
    if (this.hideForm) {
      this.inputForm.destroy();
    }
  }
  /**
   * @name ngOnInit
   */
  ngOnInit() {
    const hasReachedMaxItems = this.maxItems !== void 0 && this.items && this.items.length > this.maxItems;
    if (hasReachedMaxItems) {
      this.maxItems = this.items.length;
      console.warn(MAX_ITEMS_WARNING);
    }
    this.editable = this.onlyFromAutocomplete ? false : this.editable;
    this.setAnimationMetadata();
  }
  /**
   * @name onRemoveRequested
   * @param tag
   * @param index
   */
  onRemoveRequested(tag, index) {
    return new Promise((resolve) => {
      const subscribeFn = (model) => {
        this.removeItem(model, index);
        resolve(tag);
      };
      this.onRemoving ? this.onRemoving(tag).pipe(first()).subscribe(subscribeFn) : subscribeFn(tag);
    });
  }
  /**
   * @name onAddingRequested
   * @param fromAutocomplete {boolean}
   * @param tag {TagModel}
   * @param index? {number}
   * @param giveupFocus? {boolean}
   */
  onAddingRequested(fromAutocomplete, tag, index, giveupFocus) {
    return new Promise((resolve, reject) => {
      const subscribeFn = (model) => {
        return this.addItem(fromAutocomplete, model, index, giveupFocus).then(resolve).catch(reject);
      };
      return this.onAdding ? this.onAdding(tag).pipe(first()).subscribe(subscribeFn, reject) : subscribeFn(tag);
    });
  }
  /**
   * @name selectItem
   * @desc selects item passed as parameter as the selected tag
   * @param item
   * @param emit
   */
  selectItem(item, emit = true) {
    const isReadonly = item && typeof item !== "string" && item.readonly;
    if (isReadonly || this.selectedTag === item) {
      return;
    }
    this.selectedTag = item;
    if (emit) {
      this.onSelect.emit(item);
    }
  }
  /**
   * @name fireEvents
   * @desc goes through the list of the events for a given eventName, and fires each of them
   * @param eventName
   * @param $event
   */
  fireEvents(eventName, $event) {
    this.listeners[eventName].forEach((listener) => listener.call(this, $event));
  }
  /**
   * @name handleKeydown
   * @desc handles action when the user hits a keyboard key
   * @param data
   */
  handleKeydown(data) {
    const event = data.event;
    const key = event.keyCode || event.which;
    const shiftKey = event.shiftKey || false;
    switch (KEY_PRESS_ACTIONS[key]) {
      case ACTIONS_KEYS.DELETE:
        if (this.selectedTag && this.removable) {
          const index = this.items.indexOf(this.selectedTag);
          this.onRemoveRequested(this.selectedTag, index);
        }
        break;
      case ACTIONS_KEYS.SWITCH_PREV:
        this.moveToTag(data.model, PREV);
        break;
      case ACTIONS_KEYS.SWITCH_NEXT:
        this.moveToTag(data.model, NEXT);
        break;
      case ACTIONS_KEYS.TAB:
        if (shiftKey) {
          if (this.isFirstTag(data.model)) {
            return;
          }
          this.moveToTag(data.model, PREV);
        } else {
          if (this.isLastTag(data.model) && (this.disable || this.maxItemsReached)) {
            return;
          }
          this.moveToTag(data.model, NEXT);
        }
        break;
      default:
        return;
    }
    event.preventDefault();
  }
  onFormSubmit() {
    return __async(this, null, function* () {
      try {
        yield this.onAddingRequested(false, this.formValue);
      } catch {
        return;
      }
    });
  }
  /**
   * @name setInputValue
   * @param value
   */
  setInputValue(value, emitEvent = true) {
    const control = this.getControl();
    control.setValue(value, {
      emitEvent
    });
  }
  /**
   * @name getControl
   */
  getControl() {
    return this.inputForm.value;
  }
  /**
   * @name focus
   * @param applyFocus
   * @param displayAutocomplete
   */
  focus(applyFocus = false, displayAutocomplete = false) {
    if (this.dragProvider.getState("dragging")) {
      return;
    }
    this.selectItem(void 0, false);
    if (applyFocus) {
      this.inputForm.focus();
      this.onFocus.emit(this.formValue);
    }
  }
  /**
   * @name blur
   */
  blur() {
    this.onTouched();
    this.onBlur.emit(this.formValue);
  }
  /**
   * @name hasErrors
   */
  hasErrors() {
    return !!this.inputForm && this.inputForm.hasErrors();
  }
  /**
   * @name isInputFocused
   */
  isInputFocused() {
    return !!this.inputForm && this.inputForm.isInputFocused();
  }
  /**
   * - this is the one way I found to tell if the template has been passed and it is not
   * the template for the menu item
   * @name hasCustomTemplate
   */
  hasCustomTemplate() {
    const template = this.templates ? this.templates.first : void 0;
    const menuTemplate = this.dropdown && this.dropdown.templates ? this.dropdown.templates.first : void 0;
    return Boolean(template && template !== menuTemplate);
  }
  /**
   * @name maxItemsReached
   */
  get maxItemsReached() {
    return this.maxItems !== void 0 && this.items.length >= this.maxItems;
  }
  /**
   * @name formValue
   */
  get formValue() {
    const form = this.inputForm.value;
    return form ? form.value : "";
  }
  /**3
   * @name onDragStarted
   * @param event
   * @param index
   */
  onDragStarted(event, tag, index) {
    event.stopPropagation();
    const item = {
      zone: this.dragZone,
      tag,
      index
    };
    this.dragProvider.setSender(this);
    this.dragProvider.setDraggedItem(event, item);
    this.dragProvider.setState({
      dragging: true,
      index
    });
  }
  /**
   * @name onDragOver
   * @param event
   */
  onDragOver(event, index) {
    this.dragProvider.setState({
      dropping: true
    });
    this.dragProvider.setReceiver(this);
    event.preventDefault();
  }
  /**
   * @name onTagDropped
   * @param event
   * @param index
   */
  onTagDropped(event, index) {
    const item = this.dragProvider.getDraggedItem(event);
    if (!item || item.zone !== this.dragZone) {
      return;
    }
    this.dragProvider.onTagDropped(item.tag, item.index, index);
    event.preventDefault();
    event.stopPropagation();
  }
  /**
   * @name isDropping
   */
  isDropping() {
    const isReceiver = this.dragProvider.receiver === this;
    const isDropping = this.dragProvider.getState("dropping");
    return Boolean(isReceiver && isDropping);
  }
  /**
   * @name onTagBlurred
   * @param changedElement {TagModel}
   * @param index {number}
   */
  onTagBlurred(changedElement, index) {
    this.items[index] = changedElement;
    this.blur();
  }
  /**
   * @name trackBy
   * @param items
   */
  trackBy(index, item) {
    return item[this.identifyBy];
  }
  /**
   * @name updateEditedTag
   * @param tag
   */
  updateEditedTag(tag) {
    this.onTagEdited.emit(tag);
  }
  /**
   * @name moveToTag
   * @param item
   * @param direction
   */
  moveToTag(item, direction) {
    const isLast = this.isLastTag(item);
    const isFirst = this.isFirstTag(item);
    const stopSwitch = direction === NEXT && isLast || direction === PREV && isFirst;
    if (stopSwitch) {
      this.focus(true);
      return;
    }
    const offset = direction === NEXT ? 1 : -1;
    const index = this.getTagIndex(item) + offset;
    const tag = this.getTagAtIndex(index);
    return tag.select.call(tag);
  }
  /**
   * @name isFirstTag
   * @param item {TagModel}
   */
  isFirstTag(item) {
    return this.tags.first.model === item;
  }
  /**
   * @name isLastTag
   * @param item {TagModel}
   */
  isLastTag(item) {
    return this.tags.last.model === item;
  }
  /**
   * @name getTagIndex
   * @param item
   */
  getTagIndex(item) {
    const tags = this.tags.toArray();
    return tags.findIndex((tag) => tag.model === item);
  }
  /**
   * @name getTagAtIndex
   * @param index
   */
  getTagAtIndex(index) {
    const tags = this.tags.toArray();
    return tags[index];
  }
  /**
   * @name removeItem
   * @desc removes an item from the array of the model
   * @param tag {TagModel}
   * @param index {number}
   */
  removeItem(tag, index) {
    this.items = this.getItemsWithout(index);
    if (this.selectedTag === tag) {
      this.selectItem(void 0, false);
    }
    this.focus(true, false);
    this.onRemove.emit(tag);
  }
  /**
   * @name addItem
   * @desc adds the current text model to the items array
   * @param fromAutocomplete {boolean}
   * @param item {TagModel}
   * @param index? {number}
   * @param giveupFocus? {boolean}
   */
  addItem(fromAutocomplete = false, item, index, giveupFocus) {
    const display = this.getItemDisplay(item);
    const tag = this.createTag(item);
    if (fromAutocomplete) {
      this.setInputValue(this.getItemValue(item, true));
    }
    return new Promise((resolve, reject) => {
      const reset = () => {
        this.setInputValue("");
        if (giveupFocus) {
          this.focus(false, false);
        } else {
          this.focus(true, false);
        }
        resolve(display);
      };
      const appendItem = () => {
        this.appendTag(tag, index);
        this.onAdd.emit(tag);
        if (!this.dropdown) {
          return;
        }
        this.dropdown.hide();
        if (this.dropdown.showDropdownIfEmpty) {
          this.dropdown.show();
        }
      };
      const status = this.inputForm.form.status;
      const isTagValid = this.isTagValid(tag, fromAutocomplete);
      const onValidationError = () => {
        this.onValidationError.emit(tag);
        return reject();
      };
      if (status === "VALID" && isTagValid) {
        appendItem();
        return reset();
      }
      if (status === "INVALID" || !isTagValid) {
        reset();
        return onValidationError();
      }
      if (status === "PENDING") {
        const statusUpdate$ = this.inputForm.form.statusChanges;
        return statusUpdate$.pipe(filter((statusUpdate) => statusUpdate !== "PENDING"), first()).subscribe((statusUpdate) => {
          if (statusUpdate === "VALID" && isTagValid) {
            appendItem();
            return reset();
          } else {
            reset();
            return onValidationError();
          }
        });
      }
    });
  }
  /**
   * @name setupSeparatorKeysListener
   */
  setupSeparatorKeysListener() {
    const useSeparatorKeys = this.separatorKeyCodes.length > 0 || this.separatorKeys.length > 0;
    const listener = ($event) => {
      const hasKeyCode = this.separatorKeyCodes.indexOf($event.keyCode) >= 0;
      const hasKey = this.separatorKeys.indexOf($event.key) >= 0;
      const isIMEProcessing = $event.keyCode === 229;
      if (hasKeyCode || hasKey && !isIMEProcessing) {
        $event.preventDefault();
        this.onAddingRequested(false, this.formValue).catch(() => {
        });
      }
    };
    listen.call(this, KEYDOWN, listener, useSeparatorKeys);
  }
  /**
   * @name setUpKeypressListeners
   */
  setUpKeypressListeners() {
    const listener = ($event) => {
      const isCorrectKey = $event.keyCode === 37 || $event.keyCode === 8;
      if (isCorrectKey && !this.formValue && this.items.length) {
        this.tags.last.select.call(this.tags.last);
      }
    };
    listen.call(this, KEYDOWN, listener);
  }
  /**
   * @name setUpKeydownListeners
   */
  setUpInputKeydownListeners() {
    this.inputForm.onKeydown.subscribe((event) => {
      if (event.key === "Backspace" && this.formValue.trim() === "") {
        event.preventDefault();
      }
    });
  }
  /**
   * @name setUpOnPasteListener
   */
  setUpOnPasteListener() {
    const input = this.inputForm.input.nativeElement;
    this.renderer.listen(input, "paste", (event) => {
      this.onPasteCallback(event);
      event.preventDefault();
      return true;
    });
  }
  /**
   * @name setUpTextChangeSubscriber
   */
  setUpTextChangeSubscriber() {
    this.inputForm.form.valueChanges.pipe(debounceTime(this.onTextChangeDebounce)).subscribe((value) => {
      this.onTextChange.emit(value.item);
    });
  }
  /**
   * @name setUpOnBlurSubscriber
   */
  setUpOnBlurSubscriber() {
    const filterFn = () => {
      const isVisible = this.dropdown && this.dropdown.isVisible;
      return !isVisible && !!this.formValue;
    };
    this.inputForm.onBlur.pipe(debounceTime(100), filter(filterFn)).subscribe(() => {
      const reset = () => this.setInputValue("");
      if (this.addOnBlur) {
        return this.onAddingRequested(false, this.formValue, void 0, true).then(reset).catch(reset);
      }
      reset();
    });
  }
  /**
   * @name findDupe
   * @param tag
   * @param isFromAutocomplete
   */
  findDupe(tag, isFromAutocomplete) {
    const identifyBy = isFromAutocomplete ? this.dropdown.identifyBy : this.identifyBy;
    const id = tag[identifyBy];
    return this.items.find((item) => this.getItemValue(item) === id);
  }
  /**
   * @name setAnimationMetadata
   */
  setAnimationMetadata() {
    this.animationMetadata = {
      value: "in",
      params: __spreadValues({}, this.animationDuration)
    };
  }
};
TagInputComponent.ɵfac = function TagInputComponent_Factory(t) {
  return new (t || TagInputComponent)(ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(DragProvider));
};
TagInputComponent.ɵcmp = ɵɵdefineComponent({
  type: TagInputComponent,
  selectors: [["tag-input"]],
  contentQueries: function TagInputComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, TagInputDropdown, 5);
      ɵɵcontentQuery(dirIndex, TemplateRef, 4);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdown = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
    }
  },
  viewQuery: function TagInputComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(TagInputForm, 5);
      ɵɵviewQuery(TagComponent, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.inputForm = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.tags = _t);
    }
  },
  hostVars: 1,
  hostBindings: function TagInputComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      ɵɵattribute("tabindex", ctx.tabindexAttr);
    }
  },
  inputs: {
    separatorKeys: "separatorKeys",
    separatorKeyCodes: "separatorKeyCodes",
    placeholder: "placeholder",
    secondaryPlaceholder: "secondaryPlaceholder",
    maxItems: "maxItems",
    validators: "validators",
    asyncValidators: "asyncValidators",
    onlyFromAutocomplete: "onlyFromAutocomplete",
    errorMessages: "errorMessages",
    theme: "theme",
    onTextChangeDebounce: "onTextChangeDebounce",
    inputId: "inputId",
    inputClass: "inputClass",
    clearOnBlur: "clearOnBlur",
    hideForm: "hideForm",
    addOnBlur: "addOnBlur",
    addOnPaste: "addOnPaste",
    pasteSplitPattern: "pasteSplitPattern",
    blinkIfDupe: "blinkIfDupe",
    removable: "removable",
    editable: "editable",
    allowDupes: "allowDupes",
    modelAsStrings: "modelAsStrings",
    trimTags: "trimTags",
    inputText: "inputText",
    ripple: "ripple",
    tabindex: "tabindex",
    disable: "disable",
    dragZone: "dragZone",
    onRemoving: "onRemoving",
    onAdding: "onAdding",
    animationDuration: "animationDuration"
  },
  outputs: {
    onAdd: "onAdd",
    onRemove: "onRemove",
    onSelect: "onSelect",
    onFocus: "onFocus",
    onBlur: "onBlur",
    onTextChange: "onTextChange",
    onPaste: "onPaste",
    onValidationError: "onValidationError",
    onTagEdited: "onTagEdited",
    inputTextChange: "inputTextChange"
  },
  features: [ɵɵProvidersFeature([CUSTOM_ACCESSOR]), ɵɵInheritDefinitionFeature],
  ngContentSelectors: _c3,
  decls: 8,
  vars: 27,
  consts: [[1, "ng2-tag-input", 3, "ngClass", "click", "drop", "dragenter", "dragover", "dragend"], [1, "ng2-tags-container"], [3, "draggable", "canAddTag", "disabled", "hasRipple", "index", "removable", "editable", "displayBy", "identifyBy", "template", "model", "onSelect", "onRemove", "onKeyDown", "onTagEdited", "onBlur", "dragstart", "drop", "dragenter", "dragover", "dragleave", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "inputText", "disabled", "validators", "asyncValidators", "hidden", "placeholder", "inputClass", "inputId", "tabindex", "onSubmit", "onBlur", "click", "onKeydown", "onKeyup"], ["class", "progress-bar", 4, "ngIf"], ["class", "error-messages", 3, "ngClass", 4, "ngIf"], [3, "draggable", "canAddTag", "disabled", "hasRipple", "index", "removable", "editable", "displayBy", "identifyBy", "template", "model", "onSelect", "onRemove", "onKeyDown", "onTagEdited", "onBlur", "dragstart", "drop", "dragenter", "dragover", "dragleave"], [1, "progress-bar"], [1, "error-messages", 3, "ngClass"], ["class", "error-message", 4, "ngFor", "ngForOf"], [1, "error-message"]],
  template: function TagInputComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("click", function TagInputComponent_Template_div_click_0_listener() {
        return ctx.focus(true, false);
      })("drop", function TagInputComponent_Template_div_drop_0_listener($event) {
        return ctx.dragZone ? ctx.onTagDropped($event, void 0) : void 0;
      })("dragenter", function TagInputComponent_Template_div_dragenter_0_listener($event) {
        return ctx.dragZone ? ctx.onDragOver($event) : void 0;
      })("dragover", function TagInputComponent_Template_div_dragover_0_listener($event) {
        return ctx.dragZone ? ctx.onDragOver($event) : void 0;
      })("dragend", function TagInputComponent_Template_div_dragend_0_listener() {
        return ctx.dragZone ? ctx.dragProvider.onDragEnd() : void 0;
      });
      ɵɵelementStart(1, "div", 1);
      ɵɵtemplate(2, TagInputComponent_tag_2_Template, 1, 14, "tag", 2);
      ɵɵelementStart(3, "tag-input-form", 3);
      ɵɵlistener("onSubmit", function TagInputComponent_Template_tag_input_form_onSubmit_3_listener() {
        return ctx.onFormSubmit();
      })("onBlur", function TagInputComponent_Template_tag_input_form_onBlur_3_listener() {
        return ctx.blur();
      })("click", function TagInputComponent_Template_tag_input_form_click_3_listener() {
        return ctx.dropdown ? ctx.dropdown.show() : void 0;
      })("onKeydown", function TagInputComponent_Template_tag_input_form_onKeydown_3_listener($event) {
        return ctx.fireEvents("keydown", $event);
      })("onKeyup", function TagInputComponent_Template_tag_input_form_onKeyup_3_listener($event) {
        return ctx.fireEvents("keyup", $event);
      });
      ɵɵelementEnd()();
      ɵɵtemplate(4, TagInputComponent_div_4_Template, 1, 0, "div", 4);
      ɵɵpipe(5, "async");
      ɵɵelementEnd();
      ɵɵtemplate(6, TagInputComponent_div_6_Template, 2, 2, "div", 5);
      ɵɵprojection(7);
    }
    if (rf & 2) {
      ɵɵclassProp("ng2-tag-input--dropping", ctx.isDropping())("ng2-tag-input--disabled", ctx.disable)("ng2-tag-input--loading", ctx.isLoading)("ng2-tag-input--invalid", ctx.hasErrors())("ng2-tag-input--focused", ctx.isInputFocused());
      ɵɵproperty("ngClass", ctx.theme);
      ɵɵattribute("tabindex", -1);
      ɵɵadvance(2);
      ɵɵproperty("ngForOf", ctx.items)("ngForTrackBy", ctx.trackBy);
      ɵɵadvance();
      ɵɵproperty("inputText", ctx.inputText)("disabled", ctx.disable)("validators", ctx.validators)("asyncValidators", ctx.asyncValidators)("hidden", ctx.maxItemsReached)("placeholder", ctx.items.length ? ctx.placeholder : ctx.secondaryPlaceholder)("inputClass", ctx.inputClass)("inputId", ctx.inputId)("tabindex", ctx.tabindex);
      ɵɵadvance();
      ɵɵproperty("ngIf", ɵɵpipeBind1(5, 25, ctx.isProgressBarVisible$));
      ɵɵadvance(2);
      ɵɵproperty("ngIf", ctx.hasErrors());
    }
  },
  dependencies: [TagComponent, TagInputForm, NgClass, NgForOf, NgIf, AsyncPipe],
  styles: ['.dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:none;box-shadow:none;outline:none;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{box-shadow:inset 0 1px 1px #0006;border:1px solid #ccc}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{box-shadow:inset 0 1px 1px #d9534f}.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:all .25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{border-bottom:2px solid #2196F3}.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:.1em 0}.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.dark.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused[_ngcontent-%COMP%]{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px #00000013;border-radius:4px}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping[_ngcontent-%COMP%]{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid[_ngcontent-%COMP%]{border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading[_ngcontent-%COMP%]{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled[_ngcontent-%COMP%]{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   form[_ngcontent-%COMP%]{margin:.1em 0}.bootstrap3-info.ng2-tag-input[_ngcontent-%COMP%]   .ng2-tags-container[_ngcontent-%COMP%]{flex-wrap:wrap;display:flex}.error-message[_ngcontent-%COMP%]{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]{color:#d9534f}.progress-bar[_ngcontent-%COMP%], .progress-bar[_ngcontent-%COMP%]:before{height:2px;width:100%;margin:0}.progress-bar[_ngcontent-%COMP%]{background-color:#2196f3;display:flex;position:absolute;bottom:0}.progress-bar[_ngcontent-%COMP%]:before{background-color:#82c4f8;content:"";-webkit-animation:_ngcontent-%COMP%_running-progress 2s cubic-bezier(.4,0,.2,1) infinite;animation:_ngcontent-%COMP%_running-progress 2s cubic-bezier(.4,0,.2,1) infinite}@-webkit-keyframes _ngcontent-%COMP%_running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}to{margin-left:100%;margin-right:0}}@keyframes _ngcontent-%COMP%_running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}to{margin-left:100%;margin-right:0}}tag[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:400;font-size:1em;letter-spacing:.05rem;color:#444;border-radius:16px;transition:all .3s;margin:.1rem .3rem .1rem 0;padding:.08rem .45rem;height:32px;line-height:34px;background:#efefef;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):focus{background:#2196F3;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):active{background:#0d8aee;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag[_ngcontent-%COMP%]:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#e2e2e2;color:#000;color:initial;box-shadow:0 2px 3px 1px #d4d1d1}tag.readonly[_ngcontent-%COMP%]{cursor:default}tag.readonly[_ngcontent-%COMP%]:focus, tag[_ngcontent-%COMP%]:focus{outline:0}tag.tag--editing[_ngcontent-%COMP%]{background-color:#fff;border:1px solid #ccc;cursor:text}.minimal[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;border-radius:0;background:#f9f9f9;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.minimal[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):focus{background:#d0d0d0;color:#000;color:initial}.minimal[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):active{background:#d0d0d0;color:#000;color:initial}.minimal[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#ececec}.minimal[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]{cursor:default}.minimal[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]:focus, .minimal[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{outline:0}.minimal[_ngcontent-%COMP%]   tag.tag--editing[_ngcontent-%COMP%]{cursor:text}.dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:3px;background:#444;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):focus{background:#efefef;color:#444}.dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#2b2b2b;color:#f9f9f9}.dark[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]{cursor:default}.dark[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]:focus, .dark[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{outline:0}.dark[_ngcontent-%COMP%]   tag.tag--editing[_ngcontent-%COMP%]{cursor:text}.bootstrap[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:.25rem;background:#0275d8;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.bootstrap[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):focus{background:#025aa5}.bootstrap[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):active{background:#025aa5}.bootstrap[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#0267bf;color:#f9f9f9}.bootstrap[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]{cursor:default}.bootstrap[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]:focus, .bootstrap[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{outline:0}.bootstrap[_ngcontent-%COMP%]   tag.tag--editing[_ngcontent-%COMP%]{cursor:text}.bootstrap3-info[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]{display:flex;flex-direction:row;flex-wrap:wrap;font-family:inherit;font-weight:400;font-size:95%;color:#fff;border-radius:.25em;background:#5bc0de;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative;padding:.25em .6em;text-align:center;white-space:nowrap}.bootstrap3-info[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):focus{background:#28a1c5}.bootstrap3-info[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(.readonly):not(.tag--editing):active{background:#28a1c5}.bootstrap3-info[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#46b8da;color:#fff}.bootstrap3-info[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]{cursor:default}.bootstrap3-info[_ngcontent-%COMP%]   tag.readonly[_ngcontent-%COMP%]:focus, .bootstrap3-info[_ngcontent-%COMP%]   tag[_ngcontent-%COMP%]:focus{outline:0}.bootstrap3-info[_ngcontent-%COMP%]   tag.tag--editing[_ngcontent-%COMP%]{cursor:text}[_nghost-%COMP%]{display:block}'],
  data: {
    animation: animations
  }
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagInputComponent, [{
    type: Component,
    args: [{
      selector: "tag-input",
      providers: [CUSTOM_ACCESSOR],
      animations,
      template: `<div
    [ngClass]="theme"
    class="ng2-tag-input"
    (click)="focus(true, false)"
    [attr.tabindex]="-1"
    (drop)="dragZone ? onTagDropped($event, undefined) : undefined"
    (dragenter)="dragZone ? onDragOver($event) : undefined"
    (dragover)="dragZone ? onDragOver($event) : undefined"
    (dragend)="dragZone ? dragProvider.onDragEnd() : undefined"
    [class.ng2-tag-input--dropping]="isDropping()"
    [class.ng2-tag-input--disabled]="disable"
    [class.ng2-tag-input--loading]="isLoading"
    [class.ng2-tag-input--invalid]="hasErrors()"
    [class.ng2-tag-input--focused]="isInputFocused()"
>

    <!-- TAGS -->
    <div class="ng2-tags-container">
        <tag
            *ngFor="let item of items; let i = index; trackBy: trackBy"
            (onSelect)="selectItem(item)"
            (onRemove)="onRemoveRequested(item, i)"
            (onKeyDown)="handleKeydown($event)"
            (onTagEdited)="updateEditedTag($event)"
            (onBlur)="onTagBlurred($event, i)"
            draggable="{{ editable }}"
            (dragstart)="dragZone ? onDragStarted($event, item, i) : undefined"
            (drop)="dragZone ? onTagDropped($event, i) : undefined"
            (dragenter)="dragZone ? onDragOver($event) : undefined"
            (dragover)="dragZone ? onDragOver($event, i) : undefined"
            (dragleave)="dragZone ? dragProvider.onDragEnd() : undefined"
            [canAddTag]="isTagValid"
            [attr.tabindex]="0"
            [disabled]="disable"
            [@animation]="animationMetadata"
            [hasRipple]="ripple"
            [index]="i"
            [removable]="removable"
            [editable]="editable"
            [displayBy]="displayBy"
            [identifyBy]="identifyBy"
            [template]="!!hasCustomTemplate() ? templates.first : undefined"
            [draggable]="dragZone"
            [model]="item"
        >
        </tag>

        <tag-input-form
            (onSubmit)="onFormSubmit()"
            (onBlur)="blur()"
            (click)="dropdown ? dropdown.show() : undefined"
            (onKeydown)="fireEvents('keydown', $event)"
            (onKeyup)="fireEvents('keyup', $event)"
            [inputText]="inputText"
            [disabled]="disable"
            [validators]="validators"
            [asyncValidators]="asyncValidators"
            [hidden]="maxItemsReached"
            [placeholder]="items.length ? placeholder : secondaryPlaceholder"
            [inputClass]="inputClass"
            [inputId]="inputId"
            [tabindex]="tabindex"
        >
        </tag-input-form>
    </div>

    <div
        class="progress-bar"
        *ngIf="isProgressBarVisible$ | async"
    ></div>
</div>

<!-- ERRORS -->
<div
    *ngIf="hasErrors()"
    [ngClass]="theme"
    class="error-messages"
>
    <p
        *ngFor="let error of errors"
        class="error-message"
    >
        <span>{{ error }}</span>
    </p>
</div>
<ng-content></ng-content>
`,
      styles: ['.dark tag:focus{box-shadow:0 0 0 1px #323232}.ng2-tag-input.bootstrap3-info{background-color:#fff;display:inline-block;color:#555;vertical-align:middle;max-width:100%;height:42px;line-height:44px}.ng2-tag-input.bootstrap3-info input{border:none;box-shadow:none;outline:none;background-color:transparent;padding:0 6px;margin:0;width:auto;max-width:inherit}.ng2-tag-input.bootstrap3-info .form-control input::-moz-placeholder{color:#777;opacity:1}.ng2-tag-input.bootstrap3-info .form-control input:-ms-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info .form-control input::-webkit-input-placeholder{color:#777}.ng2-tag-input.bootstrap3-info input:focus{border:none;box-shadow:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--focused{box-shadow:inset 0 1px 1px #0006;border:1px solid #ccc}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{box-shadow:inset 0 1px 1px #d9534f}.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;transition:all .25s;padding:.25rem 0;min-height:32px;cursor:text;border-bottom:2px solid #efefef}.ng2-tag-input:focus{outline:0}.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #2196F3}.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #f44336}.ng2-tag-input.ng2-tag-input--loading{border:none}.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.ng2-tag-input form{margin:.1em 0}.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.minimal.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:1px solid transparent}.minimal.ng2-tag-input:focus{outline:0}.minimal.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.minimal.ng2-tag-input.ng2-tag-input--loading{border:none}.minimal.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.minimal.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.dark.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #444}.dark.ng2-tag-input:focus{outline:0}.dark.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.dark.ng2-tag-input.ng2-tag-input--loading{border:none}.dark.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.dark.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;cursor:text;border-bottom:2px solid #efefef}.bootstrap.ng2-tag-input:focus{outline:0}.bootstrap.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap.ng2-tag-input.ng2-tag-input--focused{border-bottom:2px solid #0275d8}.bootstrap.ng2-tag-input.ng2-tag-input--invalid{border-bottom:2px solid #d9534f}.bootstrap.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.bootstrap3-info.ng2-tag-input{display:block;flex-direction:row;flex-wrap:wrap;position:relative;padding:4px;cursor:text;box-shadow:inset 0 1px 1px #00000013;border-radius:4px}.bootstrap3-info.ng2-tag-input:focus{outline:0}.bootstrap3-info.ng2-tag-input.ng2-tag-input--dropping{opacity:.7}.bootstrap3-info.ng2-tag-input.ng2-tag-input--invalid{border-bottom:1px solid #d9534f}.bootstrap3-info.ng2-tag-input.ng2-tag-input--loading{border:none}.bootstrap3-info.ng2-tag-input.ng2-tag-input--disabled{opacity:.5;cursor:not-allowed}.bootstrap3-info.ng2-tag-input form{margin:.1em 0}.bootstrap3-info.ng2-tag-input .ng2-tags-container{flex-wrap:wrap;display:flex}.error-message{font-size:.8em;color:#f44336;margin:.5em 0 0}.bootstrap .error-message{color:#d9534f}.progress-bar,.progress-bar:before{height:2px;width:100%;margin:0}.progress-bar{background-color:#2196f3;display:flex;position:absolute;bottom:0}.progress-bar:before{background-color:#82c4f8;content:"";-webkit-animation:running-progress 2s cubic-bezier(.4,0,.2,1) infinite;animation:running-progress 2s cubic-bezier(.4,0,.2,1) infinite}@-webkit-keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}to{margin-left:100%;margin-right:0}}@keyframes running-progress{0%{margin-left:0;margin-right:100%}50%{margin-left:25%;margin-right:0}to{margin-left:100%;margin-right:0}}tag{display:flex;flex-direction:row;flex-wrap:wrap;font-family:Roboto,Helvetica Neue,sans-serif;font-weight:400;font-size:1em;letter-spacing:.05rem;color:#444;border-radius:16px;transition:all .3s;margin:.1rem .3rem .1rem 0;padding:.08rem .45rem;height:32px;line-height:34px;background:#efefef;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}tag:not(.readonly):not(.tag--editing):focus{background:#2196F3;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(.readonly):not(.tag--editing):active{background:#0d8aee;color:#fff;box-shadow:0 2px 3px 1px #d4d1d1}tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#e2e2e2;color:#000;color:initial;box-shadow:0 2px 3px 1px #d4d1d1}tag.readonly{cursor:default}tag.readonly:focus,tag:focus{outline:0}tag.tag--editing{background-color:#fff;border:1px solid #ccc;cursor:text}.minimal tag{display:flex;flex-direction:row;flex-wrap:wrap;border-radius:0;background:#f9f9f9;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.minimal tag:not(.readonly):not(.tag--editing):focus{background:#d0d0d0;color:#000;color:initial}.minimal tag:not(.readonly):not(.tag--editing):active{background:#d0d0d0;color:#000;color:initial}.minimal tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#ececec}.minimal tag.readonly{cursor:default}.minimal tag.readonly:focus,.minimal tag:focus{outline:0}.minimal tag.tag--editing{cursor:text}.dark tag{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:3px;background:#444;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.dark tag:not(.readonly):not(.tag--editing):focus{background:#efefef;color:#444}.dark tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#2b2b2b;color:#f9f9f9}.dark tag.readonly{cursor:default}.dark tag.readonly:focus,.dark tag:focus{outline:0}.dark tag.tag--editing{cursor:text}.bootstrap tag{display:flex;flex-direction:row;flex-wrap:wrap;color:#f9f9f9;border-radius:.25rem;background:#0275d8;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative}.bootstrap tag:not(.readonly):not(.tag--editing):focus{background:#025aa5}.bootstrap tag:not(.readonly):not(.tag--editing):active{background:#025aa5}.bootstrap tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#0267bf;color:#f9f9f9}.bootstrap tag.readonly{cursor:default}.bootstrap tag.readonly:focus,.bootstrap tag:focus{outline:0}.bootstrap tag.tag--editing{cursor:text}.bootstrap3-info tag{display:flex;flex-direction:row;flex-wrap:wrap;font-family:inherit;font-weight:400;font-size:95%;color:#fff;border-radius:.25em;background:#5bc0de;-webkit-user-select:none;-moz-user-select:none;user-select:none;overflow:hidden;outline:0;cursor:pointer;position:relative;padding:.25em .6em;text-align:center;white-space:nowrap}.bootstrap3-info tag:not(.readonly):not(.tag--editing):focus{background:#28a1c5}.bootstrap3-info tag:not(.readonly):not(.tag--editing):active{background:#28a1c5}.bootstrap3-info tag:not(:focus):not(.tag--editing):not(:active):not(.readonly):hover{background:#46b8da;color:#fff}.bootstrap3-info tag.readonly{cursor:default}.bootstrap3-info tag.readonly:focus,.bootstrap3-info tag:focus{outline:0}.bootstrap3-info tag.tag--editing{cursor:text}:host{display:block}\n']
    }]
  }], function() {
    return [{
      type: Renderer2
    }, {
      type: DragProvider
    }];
  }, {
    separatorKeys: [{
      type: Input
    }],
    separatorKeyCodes: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    secondaryPlaceholder: [{
      type: Input
    }],
    maxItems: [{
      type: Input
    }],
    validators: [{
      type: Input
    }],
    asyncValidators: [{
      type: Input
    }],
    onlyFromAutocomplete: [{
      type: Input
    }],
    errorMessages: [{
      type: Input
    }],
    theme: [{
      type: Input
    }],
    onTextChangeDebounce: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    inputClass: [{
      type: Input
    }],
    clearOnBlur: [{
      type: Input
    }],
    hideForm: [{
      type: Input
    }],
    addOnBlur: [{
      type: Input
    }],
    addOnPaste: [{
      type: Input
    }],
    pasteSplitPattern: [{
      type: Input
    }],
    blinkIfDupe: [{
      type: Input
    }],
    removable: [{
      type: Input
    }],
    editable: [{
      type: Input
    }],
    allowDupes: [{
      type: Input
    }],
    modelAsStrings: [{
      type: Input
    }],
    trimTags: [{
      type: Input
    }],
    inputText: [{
      type: Input
    }],
    ripple: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    disable: [{
      type: Input
    }],
    dragZone: [{
      type: Input
    }],
    onRemoving: [{
      type: Input
    }],
    onAdding: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }],
    onAdd: [{
      type: Output
    }],
    onRemove: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    onTextChange: [{
      type: Output
    }],
    onPaste: [{
      type: Output
    }],
    onValidationError: [{
      type: Output
    }],
    onTagEdited: [{
      type: Output
    }],
    dropdown: [{
      type: ContentChild,
      args: [TagInputDropdown]
    }],
    templates: [{
      type: ContentChildren,
      args: [TemplateRef, {
        descendants: false
      }]
    }],
    inputForm: [{
      type: ViewChild,
      args: [TagInputForm]
    }],
    tags: [{
      type: ViewChildren,
      args: [TagComponent]
    }],
    inputTextChange: [{
      type: Output
    }],
    tabindexAttr: [{
      type: HostBinding,
      args: ["attr.tabindex"]
    }]
  });
})();
var optionsProvider = new OptionsProvider();
var TagInputModule = class {
  /**
   * @name withDefaults
   * @param options {Options}
   */
  static withDefaults(options) {
    optionsProvider.setOptions(options);
  }
};
TagInputModule.ɵfac = function TagInputModule_Factory(t) {
  return new (t || TagInputModule)();
};
TagInputModule.ɵmod = ɵɵdefineNgModule({
  type: TagInputModule,
  declarations: [TagInputComponent, DeleteIconComponent, TagInputForm, TagComponent, HighlightPipe, TagInputDropdown, TagRipple],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, Ng2DropdownModule],
  exports: [TagInputComponent, DeleteIconComponent, TagInputForm, TagComponent, HighlightPipe, TagInputDropdown, TagRipple]
});
TagInputModule.ɵinj = ɵɵdefineInjector({
  providers: [DragProvider, {
    provide: COMPOSITION_BUFFER_MODE,
    useValue: false
  }],
  imports: [[CommonModule, ReactiveFormsModule, FormsModule, Ng2DropdownModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TagInputModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, ReactiveFormsModule, FormsModule, Ng2DropdownModule],
      declarations: [TagInputComponent, DeleteIconComponent, TagInputForm, TagComponent, HighlightPipe, TagInputDropdown, TagRipple],
      exports: [TagInputComponent, DeleteIconComponent, TagInputForm, TagComponent, HighlightPipe, TagInputDropdown, TagRipple],
      providers: [DragProvider, {
        provide: COMPOSITION_BUFFER_MODE,
        useValue: false
      }]
    }]
  }], null, null);
})();
export {
  DeleteIconComponent,
  HighlightPipe,
  TagComponent,
  TagInputComponent,
  TagInputDropdown,
  TagInputForm,
  TagInputModule,
  TagRipple
};
//# sourceMappingURL=ngx-chips.js.map
