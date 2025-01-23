import {
  CdkConnectedOverlay,
  CdkOverlayOrigin,
  OverlayModule
} from "./chunk-USXPNP7C.js";
import "./chunk-RF2KPT6N.js";
import {
  ViewportRuler
} from "./chunk-OAHMGABU.js";
import {
  FormGroupDirective,
  FormsModule,
  NgControl,
  NgForm,
  ReactiveFormsModule
} from "./chunk-CCMPVCAV.js";
import "./chunk-TU6OTQHN.js";
import "./chunk-G4JUAUB5.js";
import "./chunk-OSPFHYVM.js";
import {
  CommonModule,
  NgTemplateOutlet
} from "./chunk-2FAAYIQQ.js";
import "./chunk-VFR2JGWI.js";
import {
  Attribute,
  ChangeDetectorRef,
  Component,
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Injectable,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  Optional,
  Output,
  Self,
  TemplateRef,
  ViewChild,
  ViewChildren,
  booleanAttribute,
  numberAttribute,
  setClassMetadata,
  ɵɵInputTransformsFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcomponentInstance,
  ɵɵconditional,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵhostProperty,
  ɵɵinjectAttribute,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-HU5IYYZU.js";
import {
  fromEvent
} from "./chunk-SG3BCSKH.js";
import "./chunk-SAVXX6OM.js";
import {
  Subject,
  filter,
  map,
  mergeMap,
  of,
  tap,
  throttleTime
} from "./chunk-PQ7O3X3G.js";
import "./chunk-CJNMZQC3.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-KYD7LGVA.js";

// node_modules/ngx-infinite-scroll/fesm2022/ngx-infinite-scroll.mjs
var _NgxInfiniteScrollService = class _NgxInfiniteScrollService {
  constructor() {
  }
};
_NgxInfiniteScrollService.ɵfac = function NgxInfiniteScrollService_Factory(t) {
  return new (t || _NgxInfiniteScrollService)();
};
_NgxInfiniteScrollService.ɵprov = ɵɵdefineInjectable({
  token: _NgxInfiniteScrollService,
  factory: _NgxInfiniteScrollService.ɵfac,
  providedIn: "root"
});
var NgxInfiniteScrollService = _NgxInfiniteScrollService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgxInfiniteScrollService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
function resolveContainerElement(selector, scrollWindow, defaultElement, fromRoot) {
  const hasWindow = window && !!window.document && window.document.documentElement;
  let container = hasWindow && scrollWindow ? window : defaultElement;
  if (selector) {
    const containerIsString = selector && hasWindow && typeof selector === "string";
    container = containerIsString ? findElement(selector, defaultElement.nativeElement, fromRoot) : selector;
    if (!container) {
      throw new Error("ngx-infinite-scroll {resolveContainerElement()}: selector for");
    }
  }
  return container;
}
function findElement(selector, customRoot, fromRoot) {
  const rootEl = fromRoot ? window.document : customRoot;
  return rootEl.querySelector(selector);
}
function inputPropChanged(prop) {
  return prop && !prop.firstChange;
}
function hasWindowDefined() {
  return typeof window !== "undefined";
}
var VerticalProps = {
  clientHeight: "clientHeight",
  offsetHeight: "offsetHeight",
  scrollHeight: "scrollHeight",
  pageYOffset: "pageYOffset",
  offsetTop: "offsetTop",
  scrollTop: "scrollTop",
  top: "top"
};
var HorizontalProps = {
  clientHeight: "clientWidth",
  offsetHeight: "offsetWidth",
  scrollHeight: "scrollWidth",
  pageYOffset: "pageXOffset",
  offsetTop: "offsetLeft",
  scrollTop: "scrollLeft",
  top: "left"
};
var AxisResolver = class {
  constructor(vertical = true) {
    this.vertical = vertical;
    this.propsMap = vertical ? VerticalProps : HorizontalProps;
  }
  clientHeightKey() {
    return this.propsMap.clientHeight;
  }
  offsetHeightKey() {
    return this.propsMap.offsetHeight;
  }
  scrollHeightKey() {
    return this.propsMap.scrollHeight;
  }
  pageYOffsetKey() {
    return this.propsMap.pageYOffset;
  }
  offsetTopKey() {
    return this.propsMap.offsetTop;
  }
  scrollTopKey() {
    return this.propsMap.scrollTop;
  }
  topKey() {
    return this.propsMap.top;
  }
};
function shouldTriggerEvents(alwaysCallback, shouldFireScrollEvent2, isTriggeredCurrentTotal) {
  if (alwaysCallback && shouldFireScrollEvent2) {
    return true;
  }
  if (!isTriggeredCurrentTotal && shouldFireScrollEvent2) {
    return true;
  }
  return false;
}
function createResolver({
  windowElement,
  axis
}) {
  return createResolverWithContainer({
    axis,
    isWindow: isElementWindow(windowElement)
  }, windowElement);
}
function createResolverWithContainer(resolver, windowElement) {
  const container = resolver.isWindow || windowElement && !windowElement.nativeElement ? windowElement : windowElement.nativeElement;
  return __spreadProps(__spreadValues({}, resolver), {
    container
  });
}
function isElementWindow(windowElement) {
  const isWindow = ["Window", "global"].some((obj) => Object.prototype.toString.call(windowElement).includes(obj));
  return isWindow;
}
function getDocumentElement(isContainerWindow, windowElement) {
  return isContainerWindow ? windowElement.document.documentElement : null;
}
function calculatePoints(element, resolver) {
  const height = extractHeightForElement(resolver);
  return resolver.isWindow ? calculatePointsForWindow(height, element, resolver) : calculatePointsForElement(height, element, resolver);
}
function calculatePointsForWindow(height, element, resolver) {
  const {
    axis,
    container,
    isWindow
  } = resolver;
  const {
    offsetHeightKey,
    clientHeightKey
  } = extractHeightPropKeys(axis);
  const scrolled = height + getElementPageYOffset(getDocumentElement(isWindow, container), axis, isWindow);
  const nativeElementHeight = getElementHeight(element.nativeElement, isWindow, offsetHeightKey, clientHeightKey);
  const totalToScroll = getElementOffsetTop(element.nativeElement, axis, isWindow) + nativeElementHeight;
  return {
    height,
    scrolled,
    totalToScroll,
    isWindow
  };
}
function calculatePointsForElement(height, element, resolver) {
  const {
    axis,
    container
  } = resolver;
  const scrolled = container[axis.scrollTopKey()];
  const totalToScroll = container[axis.scrollHeightKey()];
  return {
    height,
    scrolled,
    totalToScroll,
    isWindow: false
  };
}
function extractHeightPropKeys(axis) {
  return {
    offsetHeightKey: axis.offsetHeightKey(),
    clientHeightKey: axis.clientHeightKey()
  };
}
function extractHeightForElement({
  container,
  isWindow,
  axis
}) {
  const {
    offsetHeightKey,
    clientHeightKey
  } = extractHeightPropKeys(axis);
  return getElementHeight(container, isWindow, offsetHeightKey, clientHeightKey);
}
function getElementHeight(elem, isWindow, offsetHeightKey, clientHeightKey) {
  if (isNaN(elem[offsetHeightKey])) {
    const docElem = getDocumentElement(isWindow, elem);
    return docElem ? docElem[clientHeightKey] : 0;
  } else {
    return elem[offsetHeightKey];
  }
}
function getElementOffsetTop(elem, axis, isWindow) {
  const topKey = axis.topKey();
  if (!elem.getBoundingClientRect) {
    return;
  }
  return elem.getBoundingClientRect()[topKey] + getElementPageYOffset(elem, axis, isWindow);
}
function getElementPageYOffset(elem, axis, isWindow) {
  const pageYOffset = axis.pageYOffsetKey();
  const scrollTop = axis.scrollTopKey();
  const offsetTop = axis.offsetTopKey();
  if (isNaN(window.pageYOffset)) {
    return getDocumentElement(isWindow, elem)[scrollTop];
  } else if (elem.ownerDocument) {
    return elem.ownerDocument.defaultView[pageYOffset];
  } else {
    return elem[offsetTop];
  }
}
function shouldFireScrollEvent(container, distance = {
  down: 0,
  up: 0
}, scrollingDown) {
  let remaining;
  let containerBreakpoint;
  if (container.totalToScroll <= 0) {
    return false;
  }
  const scrolledUntilNow = container.isWindow ? container.scrolled : container.height + container.scrolled;
  if (scrollingDown) {
    remaining = (container.totalToScroll - scrolledUntilNow) / container.totalToScroll;
    const distanceDown = distance?.down ? distance.down : 0;
    containerBreakpoint = distanceDown / 10;
  } else {
    const totalHiddenContentHeight = container.scrolled + (container.totalToScroll - scrolledUntilNow);
    remaining = container.scrolled / totalHiddenContentHeight;
    const distanceUp = distance?.up ? distance.up : 0;
    containerBreakpoint = distanceUp / 10;
  }
  const shouldFireEvent = remaining <= containerBreakpoint;
  return shouldFireEvent;
}
function isScrollingDownwards(lastScrollPosition, container) {
  return lastScrollPosition < container.scrolled;
}
function getScrollStats(lastScrollPosition, container, distance) {
  const scrollDown = isScrollingDownwards(lastScrollPosition, container);
  return {
    fire: shouldFireScrollEvent(container, distance, scrollDown),
    scrollDown
  };
}
var ScrollState = class {
  constructor(attrs) {
    this.lastScrollPosition = 0;
    this.lastTotalToScroll = 0;
    this.totalToScroll = 0;
    this.triggered = {
      down: 0,
      up: 0
    };
    Object.assign(this, attrs);
  }
  updateScrollPosition(position) {
    return this.lastScrollPosition = position;
  }
  updateTotalToScroll(totalToScroll) {
    if (this.lastTotalToScroll !== totalToScroll) {
      this.lastTotalToScroll = this.totalToScroll;
      this.totalToScroll = totalToScroll;
    }
  }
  updateScroll(scrolledUntilNow, totalToScroll) {
    this.updateScrollPosition(scrolledUntilNow);
    this.updateTotalToScroll(totalToScroll);
  }
  updateTriggeredFlag(scroll, isScrollingDown) {
    if (isScrollingDown) {
      this.triggered.down = scroll;
    } else {
      this.triggered.up = scroll;
    }
  }
  isTriggeredScroll(totalToScroll, isScrollingDown) {
    return isScrollingDown ? this.triggered.down === totalToScroll : this.triggered.up === totalToScroll;
  }
};
function createScroller(config) {
  const {
    scrollContainer,
    scrollWindow,
    element,
    fromRoot
  } = config;
  const resolver = createResolver({
    axis: new AxisResolver(!config.horizontal),
    windowElement: resolveContainerElement(scrollContainer, scrollWindow, element, fromRoot)
  });
  const scrollState = new ScrollState({
    totalToScroll: calculatePoints(element, resolver).totalToScroll
  });
  const options = {
    container: resolver.container,
    throttle: config.throttle
  };
  const distance = {
    up: config.upDistance,
    down: config.downDistance
  };
  return attachScrollEvent(options).pipe(mergeMap(() => of(calculatePoints(element, resolver))), map((positionStats) => toInfiniteScrollParams(scrollState.lastScrollPosition, positionStats, distance)), tap(({
    stats
  }) => scrollState.updateScroll(stats.scrolled, stats.totalToScroll)), filter(({
    fire,
    scrollDown,
    stats: {
      totalToScroll
    }
  }) => shouldTriggerEvents(config.alwaysCallback, fire, scrollState.isTriggeredScroll(totalToScroll, scrollDown))), tap(({
    scrollDown,
    stats: {
      totalToScroll
    }
  }) => {
    scrollState.updateTriggeredFlag(totalToScroll, scrollDown);
  }), map(toInfiniteScrollAction));
}
function attachScrollEvent(options) {
  let obs = fromEvent(options.container, "scroll");
  if (options.throttle) {
    obs = obs.pipe(throttleTime(options.throttle, void 0, {
      leading: true,
      trailing: true
    }));
  }
  return obs;
}
function toInfiniteScrollParams(lastScrollPosition, stats, distance) {
  const {
    scrollDown,
    fire
  } = getScrollStats(lastScrollPosition, stats, distance);
  return {
    scrollDown,
    fire,
    stats
  };
}
var InfiniteScrollActions = {
  DOWN: "[NGX_ISE] DOWN",
  UP: "[NGX_ISE] UP"
};
function toInfiniteScrollAction(response) {
  const {
    scrollDown,
    stats: {
      scrolled: currentScrollPosition
    }
  } = response;
  return {
    type: scrollDown ? InfiniteScrollActions.DOWN : InfiniteScrollActions.UP,
    payload: {
      currentScrollPosition
    }
  };
}
var _InfiniteScrollDirective = class _InfiniteScrollDirective {
  constructor(element, zone) {
    this.element = element;
    this.zone = zone;
    this.scrolled = new EventEmitter();
    this.scrolledUp = new EventEmitter();
    this.infiniteScrollDistance = 2;
    this.infiniteScrollUpDistance = 1.5;
    this.infiniteScrollThrottle = 150;
    this.infiniteScrollDisabled = false;
    this.infiniteScrollContainer = null;
    this.scrollWindow = true;
    this.immediateCheck = false;
    this.horizontal = false;
    this.alwaysCallback = false;
    this.fromRoot = false;
  }
  ngAfterViewInit() {
    if (!this.infiniteScrollDisabled) {
      this.setup();
    }
  }
  ngOnChanges({
    infiniteScrollContainer,
    infiniteScrollDisabled,
    infiniteScrollDistance
  }) {
    const containerChanged = inputPropChanged(infiniteScrollContainer);
    const disabledChanged = inputPropChanged(infiniteScrollDisabled);
    const distanceChanged = inputPropChanged(infiniteScrollDistance);
    const shouldSetup = !disabledChanged && !this.infiniteScrollDisabled || disabledChanged && !infiniteScrollDisabled.currentValue || distanceChanged;
    if (containerChanged || disabledChanged || distanceChanged) {
      this.destroyScroller();
      if (shouldSetup) {
        this.setup();
      }
    }
  }
  setup() {
    if (hasWindowDefined()) {
      this.zone.runOutsideAngular(() => {
        this.disposeScroller = createScroller({
          fromRoot: this.fromRoot,
          alwaysCallback: this.alwaysCallback,
          disable: this.infiniteScrollDisabled,
          downDistance: this.infiniteScrollDistance,
          element: this.element,
          horizontal: this.horizontal,
          scrollContainer: this.infiniteScrollContainer,
          scrollWindow: this.scrollWindow,
          throttle: this.infiniteScrollThrottle,
          upDistance: this.infiniteScrollUpDistance
        }).subscribe((payload) => this.handleOnScroll(payload));
      });
    }
  }
  handleOnScroll({
    type,
    payload
  }) {
    const emitter = type === InfiniteScrollActions.DOWN ? this.scrolled : this.scrolledUp;
    if (hasObservers(emitter)) {
      this.zone.run(() => emitter.emit(payload));
    }
  }
  ngOnDestroy() {
    this.destroyScroller();
  }
  destroyScroller() {
    if (this.disposeScroller) {
      this.disposeScroller.unsubscribe();
    }
  }
};
_InfiniteScrollDirective.ɵfac = function InfiniteScrollDirective_Factory(t) {
  return new (t || _InfiniteScrollDirective)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
};
_InfiniteScrollDirective.ɵdir = ɵɵdefineDirective({
  type: _InfiniteScrollDirective,
  selectors: [["", "infiniteScroll", ""], ["", "infinite-scroll", ""], ["", "data-infinite-scroll", ""]],
  inputs: {
    infiniteScrollDistance: "infiniteScrollDistance",
    infiniteScrollUpDistance: "infiniteScrollUpDistance",
    infiniteScrollThrottle: "infiniteScrollThrottle",
    infiniteScrollDisabled: "infiniteScrollDisabled",
    infiniteScrollContainer: "infiniteScrollContainer",
    scrollWindow: "scrollWindow",
    immediateCheck: "immediateCheck",
    horizontal: "horizontal",
    alwaysCallback: "alwaysCallback",
    fromRoot: "fromRoot"
  },
  outputs: {
    scrolled: "scrolled",
    scrolledUp: "scrolledUp"
  },
  features: [ɵɵNgOnChangesFeature]
});
var InfiniteScrollDirective = _InfiniteScrollDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfiniteScrollDirective, [{
    type: Directive,
    args: [{
      selector: "[infiniteScroll], [infinite-scroll], [data-infinite-scroll]"
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }], {
    scrolled: [{
      type: Output
    }],
    scrolledUp: [{
      type: Output
    }],
    infiniteScrollDistance: [{
      type: Input
    }],
    infiniteScrollUpDistance: [{
      type: Input
    }],
    infiniteScrollThrottle: [{
      type: Input
    }],
    infiniteScrollDisabled: [{
      type: Input
    }],
    infiniteScrollContainer: [{
      type: Input
    }],
    scrollWindow: [{
      type: Input
    }],
    immediateCheck: [{
      type: Input
    }],
    horizontal: [{
      type: Input
    }],
    alwaysCallback: [{
      type: Input
    }],
    fromRoot: [{
      type: Input
    }]
  });
})();
function hasObservers(emitter) {
  return emitter.observed ?? emitter.observers.length > 0;
}
var _InfiniteScrollModule = class _InfiniteScrollModule {
};
_InfiniteScrollModule.ɵfac = function InfiniteScrollModule_Factory(t) {
  return new (t || _InfiniteScrollModule)();
};
_InfiniteScrollModule.ɵmod = ɵɵdefineNgModule({
  type: _InfiniteScrollModule,
  declarations: [InfiniteScrollDirective],
  exports: [InfiniteScrollDirective]
});
_InfiniteScrollModule.ɵinj = ɵɵdefineInjector({});
var InfiniteScrollModule = _InfiniteScrollModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InfiniteScrollModule, [{
    type: NgModule,
    args: [{
      declarations: [InfiniteScrollDirective],
      exports: [InfiniteScrollDirective],
      imports: [],
      providers: []
    }]
  }], null, null);
})();

// node_modules/ng-select2-component/fesm2022/ng-select2-component.mjs
var _c0 = ["selection"];
var _c1 = ["results"];
var _c2 = ["searchInput"];
var _c3 = ["dropdown"];
var _c4 = ["result"];
function Select2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 13);
  }
}
function Select2_Conditional_8_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1, " ");
    ɵɵelementEnd();
  }
}
function Select2_Conditional_8_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 16);
  }
  if (rf & 2) {
    const ctx_r13 = ɵɵnextContext(3);
    ɵɵproperty("innerHTML", ctx_r13.select2Option.label, ɵɵsanitizeHtml);
  }
}
function Select2_Conditional_8_Conditional_2_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Select2_Conditional_8_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select2_Conditional_8_Conditional_2_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 17);
  }
  if (rf & 2) {
    const ctx_r14 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r14.getTemplate(ctx_r14.select2Option, "option"))("ngTemplateOutletContext", ctx_r14.select2Option);
  }
}
function Select2_Conditional_8_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select2_Conditional_8_Conditional_2_Conditional_0_Template, 1, 1, "span", 16)(1, Select2_Conditional_8_Conditional_2_Conditional_1_Template, 1, 2);
  }
  if (rf & 2) {
    const ctx_r12 = ɵɵnextContext(2);
    ɵɵconditional(0, !ctx_r12.hasTemplate(ctx_r12.select2Option, "option") || ctx_r12.noLabelTemplate ? 0 : 1);
  }
}
function Select2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 14);
    ɵɵtemplate(1, Select2_Conditional_8_Conditional_1_Template, 2, 0, "span")(2, Select2_Conditional_8_Conditional_2_Template, 2, 1);
    ɵɵelementStart(3, "span", 15);
    ɵɵtext(4);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("title", (ctx_r3.select2Option == null ? null : ctx_r3.select2Option.label) || "");
    ɵɵadvance();
    ɵɵconditional(1, !ctx_r3.select2Option ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(2, ctx_r3.select2Option ? 2 : -1);
    ɵɵadvance();
    ɵɵclassProp("select2-selection__placeholder__option", ctx_r3.option);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r3.placeholder);
  }
}
function Select2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 18);
    ɵɵlistener("click", function Select2_Conditional_9_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r17);
      const ctx_r16 = ɵɵnextContext();
      return ɵɵresetView(ctx_r16.reset($event));
    });
    ɵɵtext(1, "×");
    ɵɵelementEnd();
  }
}
function Select2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 19);
  }
}
function Select2_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 15);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r18 = ɵɵnextContext(2);
    ɵɵclassProp("select2-selection__placeholder__option", (ctx_r18.select2Options == null ? null : ctx_r18.select2Options.length) > 0);
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r18.placeholder);
  }
}
function Select2_Conditional_11_For_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "span", 25);
    ɵɵlistener("click", function Select2_Conditional_11_For_3_Conditional_1_Template_span_click_0_listener($event) {
      ɵɵrestoreView(_r31);
      const op_r21 = ɵɵnextContext().$implicit;
      const ctx_r29 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r29.removeSelection($event, op_r21));
    });
    ɵɵtext(1, "×");
    ɵɵelementEnd();
  }
}
function Select2_Conditional_11_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 16);
  }
  if (rf & 2) {
    const op_r21 = ɵɵnextContext().$implicit;
    ɵɵproperty("innerHTML", op_r21.label, ɵɵsanitizeHtml);
  }
}
function Select2_Conditional_11_For_3_Conditional_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Select2_Conditional_11_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select2_Conditional_11_For_3_Conditional_3_ng_container_0_Template, 1, 0, "ng-container", 17);
  }
  if (rf & 2) {
    const op_r21 = ɵɵnextContext().$implicit;
    const ctx_r28 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r28.getTemplate(op_r21, "option"))("ngTemplateOutletContext", op_r21);
  }
}
function Select2_Conditional_11_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 23);
    ɵɵlistener("keydown.enter", function Select2_Conditional_11_For_3_Template_li_keydown_enter_0_listener($event) {
      const restoredCtx = ɵɵrestoreView(_r36);
      const op_r21 = restoredCtx.$implicit;
      const ctx_r35 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r35.removeSelection($event, op_r21));
    });
    ɵɵtemplate(1, Select2_Conditional_11_For_3_Conditional_1_Template, 2, 0, "span", 24)(2, Select2_Conditional_11_For_3_Conditional_2_Template, 1, 1, "span", 16)(3, Select2_Conditional_11_For_3_Conditional_3_Template, 1, 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const op_r21 = ctx.$implicit;
    const ctx_r19 = ɵɵnextContext(2);
    ɵɵproperty("title", op_r21.label);
    ɵɵadvance();
    ɵɵconditional(1, !(ctx_r19.disabled || ctx_r19.readonly) ? 1 : -1);
    ɵɵadvance();
    ɵɵconditional(2, !ctx_r19.hasTemplate(op_r21, "option") || ctx_r19.noLabelTemplate ? 2 : 3);
  }
}
function Select2_Conditional_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 26);
    ɵɵlistener("focus", function Select2_Conditional_11_Conditional_4_Template_li_focus_0_listener($event) {
      ɵɵrestoreView(_r38);
      const ctx_r37 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r37.stopEvent($event));
    })("blur", function Select2_Conditional_11_Conditional_4_Template_li_blur_0_listener($event) {
      ɵɵrestoreView(_r38);
      const ctx_r39 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r39.stopEvent($event));
    });
    ɵɵelementStart(1, "input", 27);
    ɵɵlistener("click", function Select2_Conditional_11_Conditional_4_Template_input_click_1_listener($event) {
      ɵɵrestoreView(_r38);
      const ctx_r40 = ɵɵnextContext(2);
      ctx_r40.toggleOpenAndClose(false, true);
      return ɵɵresetView(ctx_r40.stopEvent($event));
    })("keydown", function Select2_Conditional_11_Conditional_4_Template_input_keydown_1_listener($event) {
      ɵɵrestoreView(_r38);
      const ctx_r41 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r41.keyDown($event, true));
    })("keyup", function Select2_Conditional_11_Conditional_4_Template_input_keyup_1_listener($event) {
      ɵɵrestoreView(_r38);
      const ctx_r42 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r42.searchUpdate($event));
    })("change", function Select2_Conditional_11_Conditional_4_Template_input_change_1_listener($event) {
      ɵɵrestoreView(_r38);
      const ctx_r43 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r43.prevChange($event));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r20 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("id", ctx_r20.id + "-create-field");
  }
}
var _c5 = () => [];
function Select2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul", 20);
    ɵɵtemplate(1, Select2_Conditional_11_Conditional_1_Template, 2, 3, "span", 21);
    ɵɵrepeaterCreate(2, Select2_Conditional_11_For_3_Template, 4, 3, "li", 28, ɵɵcomponentInstance().trackBy);
    ɵɵtemplate(4, Select2_Conditional_11_Conditional_4_Template, 2, 1, "li", 22);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵconditional(1, !ctx_r6.autoCreate ? 1 : -1);
    ɵɵadvance();
    ɵɵrepeater(ctx_r6.option || ɵɵpureFunction0(2, _c5));
    ɵɵadvance(2);
    ɵɵconditional(4, ctx_r6.autoCreate ? 4 : -1);
  }
}
function Select2_Conditional_12_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Select2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select2_Conditional_12_ng_container_0_Template, 1, 0, "ng-container", 29);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r10 = ɵɵreference(17);
    ɵɵproperty("ngTemplateOutlet", _r10);
  }
}
function Select2_ng_template_15_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Select2_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select2_ng_template_15_ng_container_0_Template, 1, 0, "ng-container", 29);
  }
  if (rf & 2) {
    ɵɵnextContext();
    const _r10 = ɵɵreference(17);
    ɵɵproperty("ngTemplateOutlet", _r10);
  }
}
function Select2_ng_template_16_For_10_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "strong", 16);
  }
  if (rf & 2) {
    const groupOrOption_r52 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("innerHTML", groupOrOption_r52.label, ɵɵsanitizeHtml);
    ɵɵattribute("class", "select2-results__group" + (groupOrOption_r52.classes ? " " + groupOrOption_r52.classes : ""));
  }
}
function Select2_ng_template_16_For_10_Conditional_0_Conditional_2_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Select2_ng_template_16_For_10_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select2_ng_template_16_For_10_Conditional_0_Conditional_2_ng_container_0_Template, 1, 0, "ng-container", 17);
  }
  if (rf & 2) {
    const groupOrOption_r52 = ɵɵnextContext(2).$implicit;
    const ctx_r60 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r60.getTemplate(groupOrOption_r52, "group"))("ngTemplateOutletContext", groupOrOption_r52);
  }
}
function Select2_ng_template_16_For_10_Conditional_0_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 47);
  }
  if (rf & 2) {
    const option_r65 = ɵɵnextContext().$implicit;
    ɵɵproperty("innerHTML", option_r65.label, ɵɵsanitizeHtml);
  }
}
function Select2_ng_template_16_For_10_Conditional_0_For_5_Conditional_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Select2_ng_template_16_For_10_Conditional_0_For_5_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select2_ng_template_16_For_10_Conditional_0_For_5_Conditional_3_ng_container_0_Template, 1, 0, "ng-container", 17);
  }
  if (rf & 2) {
    const option_r65 = ɵɵnextContext().$implicit;
    const ctx_r72 = ɵɵnextContext(4);
    ɵɵproperty("ngTemplateOutlet", ctx_r72.getTemplate(option_r65, "option"))("ngTemplateOutletContext", option_r65);
  }
}
function Select2_ng_template_16_For_10_Conditional_0_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 44, 45);
    ɵɵlistener("mouseenter", function Select2_ng_template_16_For_10_Conditional_0_For_5_Template_li_mouseenter_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r77);
      const option_r65 = restoredCtx.$implicit;
      const ctx_r76 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r76.mouseenter(option_r65));
    })("click", function Select2_ng_template_16_For_10_Conditional_0_For_5_Template_li_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r77);
      const option_r65 = restoredCtx.$implicit;
      const ctx_r78 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r78.click(option_r65));
    });
    ɵɵtemplate(2, Select2_ng_template_16_For_10_Conditional_0_For_5_Conditional_2_Template, 1, 1, "div", 46)(3, Select2_ng_template_16_For_10_Conditional_0_For_5_Conditional_3_Template, 1, 2);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const option_r65 = ctx.$implicit;
    const j_r66 = ctx.$index;
    const i_r53 = ɵɵnextContext(2).$index;
    const ctx_r61 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r61.getOptionStyle(option_r65));
    ɵɵproperty("id", option_r65.id || ctx_r61.id + "-option-" + i_r53 + "-" + j_r66);
    ɵɵattribute("aria-selected", ctx_r61.isSelected(option_r65))("aria-disabled", ctx_r61.isDisabled(option_r65));
    ɵɵadvance(2);
    ɵɵconditional(2, !ctx_r61.hasTemplate(option_r65, "option") ? 2 : 3);
  }
}
function Select2_ng_template_16_For_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "li", 42);
    ɵɵtemplate(1, Select2_ng_template_16_For_10_Conditional_0_Conditional_1_Template, 1, 2, "strong", 16)(2, Select2_ng_template_16_For_10_Conditional_0_Conditional_2_Template, 1, 2);
    ɵɵelementStart(3, "ul", 43);
    ɵɵrepeaterCreate(4, Select2_ng_template_16_For_10_Conditional_0_For_5_Template, 4, 6, "li", 48, ɵɵcomponentInstance().trackBy);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const groupOrOption_r52 = ɵɵnextContext().$implicit;
    const ctx_r57 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵconditional(1, !ctx_r57.hasTemplate(groupOrOption_r52, "group") ? 1 : 2);
    ɵɵadvance(3);
    ɵɵrepeater(groupOrOption_r52.options);
  }
}
function Select2_ng_template_16_For_10_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div", 47);
  }
  if (rf & 2) {
    const groupOrOption_r52 = ɵɵnextContext(2).$implicit;
    ɵɵproperty("innerHTML", groupOrOption_r52.label, ɵɵsanitizeHtml);
  }
}
function Select2_ng_template_16_For_10_Conditional_1_Conditional_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Select2_ng_template_16_For_10_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select2_ng_template_16_For_10_Conditional_1_Conditional_3_ng_container_0_Template, 1, 0, "ng-container", 17);
  }
  if (rf & 2) {
    const groupOrOption_r52 = ɵɵnextContext(2).$implicit;
    const ctx_r83 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r83.getTemplate(groupOrOption_r52, "option"))("ngTemplateOutletContext", groupOrOption_r52);
  }
}
function Select2_ng_template_16_For_10_Conditional_1_ng_template_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Select2_ng_template_16_For_10_Conditional_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select2_ng_template_16_For_10_Conditional_1_ng_template_4_ng_container_0_Template, 1, 0, "ng-container", 17);
  }
  if (rf & 2) {
    const groupOrOption_r52 = ɵɵnextContext(2).$implicit;
    const ctx_r84 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r84.getTemplate(groupOrOption_r52, "option"))("ngTemplateOutletContext", groupOrOption_r52);
  }
}
function Select2_ng_template_16_For_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r93 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 44, 45);
    ɵɵlistener("mouseenter", function Select2_ng_template_16_For_10_Conditional_1_Template_li_mouseenter_0_listener() {
      ɵɵrestoreView(_r93);
      const groupOrOption_r52 = ɵɵnextContext().$implicit;
      const ctx_r91 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r91.mouseenter(groupOrOption_r52));
    })("click", function Select2_ng_template_16_For_10_Conditional_1_Template_li_click_0_listener() {
      ɵɵrestoreView(_r93);
      const groupOrOption_r52 = ɵɵnextContext().$implicit;
      const ctx_r94 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r94.click(groupOrOption_r52));
    });
    ɵɵtemplate(2, Select2_ng_template_16_For_10_Conditional_1_Conditional_2_Template, 1, 1, "div", 46)(3, Select2_ng_template_16_For_10_Conditional_1_Conditional_3_Template, 1, 2)(4, Select2_ng_template_16_For_10_Conditional_1_ng_template_4_Template, 1, 2, "ng-template", null, 49, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r96 = ɵɵnextContext();
    const groupOrOption_r52 = ctx_r96.$implicit;
    const i_r53 = ctx_r96.$index;
    const ctx_r58 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r58.getOptionStyle(groupOrOption_r52));
    ɵɵproperty("id", groupOrOption_r52.id || ctx_r58.id + "-option-" + i_r53);
    ɵɵattribute("aria-selected", ctx_r58.isSelected(groupOrOption_r52))("aria-disabled", ctx_r58.isDisabled(groupOrOption_r52));
    ɵɵadvance(2);
    ɵɵconditional(2, !ctx_r58.hasTemplate(groupOrOption_r52, "option") ? 2 : 3);
  }
}
function Select2_ng_template_16_For_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Select2_ng_template_16_For_10_Conditional_0_Template, 6, 1, "li", 41)(1, Select2_ng_template_16_For_10_Conditional_1_Template, 6, 6);
  }
  if (rf & 2) {
    const groupOrOption_r52 = ctx.$implicit;
    ɵɵconditional(0, groupOrOption_r52.options !== void 0 ? 0 : 1);
  }
}
function Select2_ng_template_16_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 50);
  }
  if (rf & 2) {
    const ctx_r50 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r50.noResultMessage, ɵɵsanitizeHtml);
  }
}
function Select2_ng_template_16_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 51);
  }
  if (rf & 2) {
    const ctx_r51 = ɵɵnextContext(2);
    ɵɵproperty("innerHTML", ctx_r51.maxResultsMessage, ɵɵsanitizeHtml);
  }
}
function Select2_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r98 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 30)(1, "div", 31, 32)(3, "div", 33)(4, "input", 34, 35);
    ɵɵlistener("keydown", function Select2_ng_template_16_Template_input_keydown_4_listener($event) {
      ɵɵrestoreView(_r98);
      const ctx_r97 = ɵɵnextContext();
      return ɵɵresetView(ctx_r97.keyDown($event, ctx_r97.autoCreate));
    })("keyup", function Select2_ng_template_16_Template_input_keyup_4_listener($event) {
      ɵɵrestoreView(_r98);
      const ctx_r99 = ɵɵnextContext();
      return ɵɵresetView(ctx_r99.searchUpdate($event));
    })("change", function Select2_ng_template_16_Template_input_change_4_listener($event) {
      ɵɵrestoreView(_r98);
      const ctx_r100 = ɵɵnextContext();
      return ɵɵresetView(ctx_r100.prevChange($event));
    });
    ɵɵelementEnd()();
    ɵɵelementStart(6, "div", 36)(7, "ul", 37, 38);
    ɵɵlistener("scrolled", function Select2_ng_template_16_Template_ul_scrolled_7_listener() {
      ɵɵrestoreView(_r98);
      const ctx_r101 = ɵɵnextContext();
      return ɵɵresetView(ctx_r101.onScroll("down"));
    })("scrolledUp", function Select2_ng_template_16_Template_ul_scrolledUp_7_listener() {
      ɵɵrestoreView(_r98);
      const ctx_r102 = ɵɵnextContext();
      return ɵɵresetView(ctx_r102.onScroll("up"));
    })("keydown", function Select2_ng_template_16_Template_ul_keydown_7_listener($event) {
      ɵɵrestoreView(_r98);
      const ctx_r103 = ɵɵnextContext();
      return ɵɵresetView(ctx_r103.keyDown($event));
    });
    ɵɵrepeaterCreate(9, Select2_ng_template_16_For_10_Template, 2, 1, null, null, ɵɵcomponentInstance().trackBy);
    ɵɵtemplate(11, Select2_ng_template_16_Conditional_11_Template, 1, 1, "li", 39)(12, Select2_ng_template_16_Conditional_12_Template, 1, 1, "li", 40);
    ɵɵelementEnd()()()();
  }
  if (rf & 2) {
    const _r48 = ɵɵreference(8);
    const ctx_r9 = ɵɵnextContext();
    ɵɵclassProp("select2-container--open", ctx_r9.isOpen)("select2-overlay", ctx_r9.overlay)("select2-position-auto", ctx_r9.listPosition === "auto");
    ɵɵadvance();
    ɵɵclassProp("select2-dropdown--below", !ctx_r9.select2above)("select2-dropdown--above", ctx_r9.select2above);
    ɵɵadvance(2);
    ɵɵclassProp("select2-search--hide", ctx_r9.hideSearch());
    ɵɵadvance();
    ɵɵproperty("id", ctx_r9.id + "-search-field")("value", ctx_r9.searchText);
    ɵɵattribute("tabindex", ctx_r9.isOpen ? ctx_r9.tabIndex : "-1");
    ɵɵadvance(3);
    ɵɵstyleProp("max-height", ctx_r9.resultMaxHeight);
    ɵɵproperty("infiniteScrollDisabled", !ctx_r9.infiniteScroll && !ctx_r9.isOpen)("infiniteScrollDistance", ctx_r9.infiniteScrollDistance)("infiniteScrollThrottle", ctx_r9.infiniteScrollThrottle)("infiniteScrollContainer", _r48);
    ɵɵadvance(2);
    ɵɵrepeater(ctx_r9.filteredData);
    ɵɵadvance(2);
    ɵɵconditional(11, !(ctx_r9.filteredData == null ? null : ctx_r9.filteredData.length) && ctx_r9.noResultMessage ? 11 : -1);
    ɵɵadvance();
    ɵɵconditional(12, ctx_r9.maxResultsExceeded ? 12 : -1);
  }
}
var _c6 = [[["select2-label"]], [["select2-hint"]]];
var _c7 = ["select2-label", "select2-hint"];
var timeout = 200;
var unicodePatterns = [{
  l: "a",
  s: /[ⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ]/gi
}, {
  l: "aa",
  s: /ꜳ/gi
}, {
  l: "ae",
  s: /[æǽǣ]/gi
}, {
  l: "ao",
  s: /ꜵ/gi
}, {
  l: "au",
  s: /ꜷ/gi
}, {
  l: "av",
  s: /[ꜹꜻ]/gi
}, {
  l: "ay",
  s: /ꜽ/gi
}, {
  l: "b",
  s: /[ⓑｂḃḅḇƀƃɓ]/gi
}, {
  l: "c",
  s: /[ⓒｃćĉċčçḉƈȼꜿↄ]/gi
}, {
  l: "d",
  s: /[ⓓｄḋďḍḑḓḏđƌɖɗꝺ]/gi
}, {
  l: "dz",
  s: /[ǳǆ]/gi
}, {
  l: "e",
  s: /[ⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ]/gi
}, {
  l: "f",
  s: /[ⓕｆḟƒꝼ]/gi
}, {
  l: "g",
  s: /[ⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ]/gi
}, {
  l: "h",
  s: /[ⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ]/gi
}, {
  l: "hv",
  s: /ƕ/gi
}, {
  l: "i",
  s: /[ⓘｉìíîĩīĭİïḯỉǐȉȋịįḭɨı]/gi
}, {
  l: "j",
  s: /[ⓙｊĵǰɉ]/gi
}, {
  l: "k",
  s: /[ⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ]/gi
}, {
  l: "l",
  s: /[ⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇꝆ]/gi
}, {
  l: "lj",
  s: /ǉ/gi
}, {
  l: "m",
  s: /[ⓜｍḿṁṃɱɯ]/gi
}, {
  l: "n",
  s: /[ⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ]/gi
}, {
  l: "nj",
  s: /ǌ/gi
}, {
  l: "o",
  s: /[ⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔƟꝋꝍɵ]/gi
}, {
  l: "oi",
  s: /ƣ/gi
}, {
  l: "oe",
  s: /œ/gi
}, {
  l: "oo",
  s: /ꝏ/gi
}, {
  l: "ou",
  s: /ȣ/gi
}, {
  l: "p",
  s: /[ⓟｐṕṗƥᵽꝑꝓꝕ]/gi
}, {
  l: "q",
  s: /[ⓠｑɋꝗꝙ]/gi
}, {
  l: "r",
  s: /[ⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ]/gi
}, {
  l: "s",
  s: /[ⓢｓßẞśṥŝṡšṧṣṩșşȿꞩꞅẛ]/gi
}, {
  l: "t",
  s: /[ⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ]/gi
}, {
  l: "tz",
  s: /ꜩ/gi
}, {
  l: "u",
  s: /[ⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ]/gi
}, {
  l: "v",
  s: /[ⓥｖṽṿʋꝟʌ]/gi
}, {
  l: "vy",
  s: /ꝡ/gi
}, {
  l: "w",
  s: /[ⓦｗẁẃŵẇẅẘẉⱳ]/gi
}, {
  l: "x",
  s: /[ⓧｘẋẍ]/gi
}, {
  l: "y",
  s: /[ⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ]/gi
}, {
  l: "z",
  s: /[ⓩｚźẑżžẓẕƶȥɀⱬꝣ]/gi
}];
var defaultMinCountForSearch = 6;
var protectRegexp = new RegExp("[\\-\\[\\]\\/\\{\\}\\(\\)\\*\\+\\?\\.\\\\\\^\\$\\|]", "g");
var Select2Utils = class _Select2Utils {
  static getOptionByValue(data, value) {
    if (Array.isArray(data)) {
      for (const groupOrOption of data) {
        const options = groupOrOption.options;
        if (options) {
          for (const option of options) {
            if (option.value === value) {
              return option;
            }
          }
        } else if (groupOrOption.value === value) {
          return groupOrOption;
        }
      }
    }
    return void 0;
  }
  static getOptionsByValue(data, value, multiple) {
    if (multiple) {
      const values = Array.isArray(value) ? value : [];
      const result = [];
      for (const v of values) {
        const option = _Select2Utils.getOptionByValue(data, v);
        if (option) {
          result.push(option);
        }
      }
      return result;
    }
    return _Select2Utils.getOptionByValue(data, value);
  }
  static getFirstAvailableOption(data) {
    if (Array.isArray(data)) {
      for (const groupOrOption of data) {
        const options = groupOrOption.options;
        if (options) {
          for (const option of options) {
            if (!option.disabled) {
              return option.value;
            }
          }
        } else {
          const option = groupOrOption;
          if (!option.disabled) {
            return option.value;
          }
        }
      }
    }
    return null;
  }
  static valueIsNotInFilteredData(filteredData, value) {
    if (_Select2Utils.isNullOrUndefined(value)) {
      return true;
    }
    for (const groupOrOption of filteredData) {
      const options = groupOrOption.options;
      if (options) {
        for (const option of options) {
          if (option.value === value) {
            return false;
          }
        }
      } else if (groupOrOption.value === value) {
        return false;
      }
    }
    return true;
  }
  static getPreviousOption(filteredData, hoveringValue) {
    let findIt = _Select2Utils.isNullOrUndefined(hoveringValue);
    for (let i = filteredData.length - 1; i >= 0; i--) {
      const groupOrOption = filteredData[i];
      const options = groupOrOption.options;
      if (options) {
        for (let j = options.length - 1; j >= 0; j--) {
          const option = options[j];
          if (findIt && !option.disabled && !option.hide) {
            return option;
          }
          if (!findIt) {
            findIt = option.value === hoveringValue;
          }
        }
      } else {
        const option = groupOrOption;
        if (findIt && !option.disabled && !option.hide) {
          return option;
        }
        if (!findIt) {
          findIt = option.value === hoveringValue;
        }
      }
    }
    return null;
  }
  static getNextOption(filteredData, hoveringValue) {
    let findIt = _Select2Utils.isNullOrUndefined(hoveringValue);
    for (const groupOrOption of filteredData) {
      const options = groupOrOption.options;
      if (options) {
        for (const option of options) {
          if (findIt) {
            if (!option.disabled && !option.hide) {
              return option;
            }
          } else if (!findIt) {
            findIt = option.value === hoveringValue;
          }
        }
      } else {
        const option = groupOrOption;
        if (findIt) {
          if (!option.disabled && !option.hide) {
            return option;
          }
        } else if (!findIt) {
          findIt = option.value === hoveringValue;
        }
      }
    }
    return null;
  }
  static getReduceData(data, maxResults = 0) {
    if (maxResults > 0) {
      let counter = 0;
      const result = [];
      for (const groupOrOption of data) {
        const options = groupOrOption.options;
        if (options) {
          const group = __spreadProps(__spreadValues({}, groupOrOption), {
            options: []
          });
          result.push(group);
          for (const item of options) {
            group.options.push(item);
            counter++;
            if (counter === maxResults) {
              return {
                result,
                reduce: true
              };
            }
          }
        } else {
          result.push(groupOrOption);
          counter++;
        }
        if (counter === maxResults) {
          return {
            result,
            reduce: true
          };
        }
      }
      return {
        result,
        reduce: false
      };
    } else {
      return {
        result: data,
        reduce: false
      };
    }
  }
  static getFilteredData(data, searchText, editPattern) {
    if (searchText) {
      const result = [];
      for (const groupOrOption of data) {
        const options = groupOrOption.options;
        if (options) {
          if (options.some((group) => _Select2Utils.containSearchText(group.label, searchText, editPattern))) {
            const filteredOptions = options.filter((group) => _Select2Utils.containSearchText(group.label, searchText, editPattern));
            result.push(__spreadProps(__spreadValues({}, groupOrOption), {
              options: filteredOptions
            }));
          }
        } else if (_Select2Utils.containSearchText(groupOrOption.label, searchText, editPattern)) {
          result.push(groupOrOption);
        }
      }
      return result;
    } else {
      return data;
    }
  }
  static getFilteredSelectedData(data, selectedOptions) {
    const result = [];
    for (const groupOrOption of data) {
      const options = groupOrOption.options;
      if (options) {
        const filteredOptions = options.filter((group) => _Select2Utils.isSelected(selectedOptions, group, true) === "false");
        if (filteredOptions.length) {
          result.push(__spreadProps(__spreadValues({}, groupOrOption), {
            options: filteredOptions
          }));
        }
      } else if (_Select2Utils.isSelected(selectedOptions, groupOrOption, true) === "false") {
        result.push(groupOrOption);
      }
    }
    return result;
  }
  static isSearchboxHiddex(data, minCountForSearch) {
    if (minCountForSearch === "" || minCountForSearch === void 0 || minCountForSearch === null || isNaN(+minCountForSearch)) {
      minCountForSearch = defaultMinCountForSearch;
    }
    const optionCount = _Select2Utils.getOptionsCount(data);
    return optionCount < +minCountForSearch;
  }
  static isSelected(options, option, multiple) {
    return multiple ? options && options.some((op) => op.value === option.value) ? "true" : "false" : options && option.value === options.value ? "true" : "false";
  }
  static removeSelection(options, option) {
    for (let i = 0; i < options.length; i++) {
      if (options[i].value === option.value) {
        options.splice(i, 1);
        return;
      }
    }
  }
  static getOptionsCount(data) {
    let count = 0;
    if (Array.isArray(data)) {
      for (const groupOrOption of data) {
        const options = groupOrOption.options;
        count += options ? options.length : 1;
      }
    }
    return count;
  }
  static isNullOrUndefined(value) {
    return value === null || value === void 0;
  }
  static containSearchText(label, searchText, editPattern) {
    return searchText ? _Select2Utils.formatSansUnicode(label).match(new RegExp(_Select2Utils.formatPattern(searchText, editPattern), "i")) !== null : true;
  }
  static protectPattern(str) {
    return str.replace(protectRegexp, "\\$&");
  }
  static formatSansUnicode(str) {
    for (const unicodePattern of unicodePatterns) {
      str = str.replace(unicodePattern.s, unicodePattern.l);
    }
    return str;
  }
  static formatPattern(str, editPattern) {
    str = _Select2Utils.formatSansUnicode(_Select2Utils.protectPattern(str));
    if (editPattern && typeof editPattern === "function") {
      str = editPattern(str);
    }
    return str;
  }
};
var nextUniqueId = 0;
var displaySearchStatusList = ["default", "hidden", "always"];
var _Select2 = class _Select2 {
  /** data of options & optiongrps */
  set data(data) {
    this._data = data;
    this.updateFilteredData(true);
  }
  get multiple() {
    return this._multiple;
  }
  set multiple(value) {
    this._multiple = value;
    this.ngOnInit();
  }
  /** minimal data of show the search field */
  get minCountForSearch() {
    return this._minCountForSearch;
  }
  set minCountForSearch(value) {
    this._minCountForSearch = value;
    this.updateSearchBox();
  }
  /** Unique id of the element. */
  get id() {
    return this._id;
  }
  set id(value) {
    this._id = value || this._uid;
  }
  /** Whether selected items should be hidden. */
  get disabled() {
    return this._control ? this._control.disabled : this._disabled;
  }
  set disabled(value) {
    this._disabled = value;
  }
  /** The input element's value. */
  get value() {
    return this._value;
  }
  set value(value) {
    if (this.testValueChange(this._value, value)) {
      setTimeout(() => {
        this._value = value;
        this.writeValue(value);
      }, 10);
    }
  }
  /** Tab index for the select2 element. */
  get tabIndex() {
    return this.disabled ? -1 : this._tabIndex;
  }
  set tabIndex(value) {
    this._tabIndex = value;
  }
  get select2Options() {
    return this.multiple ? this.option : null;
  }
  get select2Option() {
    return this.multiple ? null : this.option;
  }
  get searchText() {
    return this.innerSearchText;
  }
  set searchText(text) {
    this.innerSearchText = text;
  }
  get ariaInvalid() {
    return this._isErrorState();
  }
  get classMaterial() {
    return this.styleMode === "material";
  }
  get classNostyle() {
    return this.styleMode === "noStyle";
  }
  get select2above() {
    return !this.overlay ? this.listPosition === "above" : this._isAbobeOverlay();
  }
  get _positions() {
    return this.listPosition === "auto" ? void 0 : null;
  }
  get resultsElement() {
    return this.resultContainer?.nativeElement;
  }
  constructor(_viewportRuler, _changeDetectorRef, _parentForm, _parentFormGroup, _control, tabIndex) {
    this._viewportRuler = _viewportRuler;
    this._changeDetectorRef = _changeDetectorRef;
    this._parentForm = _parentForm;
    this._parentFormGroup = _parentFormGroup;
    this._control = _control;
    this.minCharForSearch = 0;
    this.limitSelection = 0;
    this.listPosition = "below";
    this.overlay = false;
    this.styleMode = "default";
    this.maxResults = 0;
    this.maxResultsMessage = "Too many results…";
    this.infiniteScrollDistance = 1.5;
    this.infiniteScrollThrottle = 150;
    this.infiniteScroll = false;
    this.autoCreate = false;
    this.noLabelTemplate = false;
    this.resultMaxHeight = "200px";
    this.customSearchEnabled = false;
    this.required = false;
    this.hideSelectedItems = false;
    this.readonly = false;
    this.resettable = false;
    this.update = new EventEmitter();
    this.autoCreateItem = new EventEmitter();
    this.open = new EventEmitter();
    this.close = new EventEmitter();
    this.focus = new EventEmitter();
    this.blur = new EventEmitter();
    this.search = new EventEmitter();
    this.scroll = new EventEmitter();
    this.removeOption = new EventEmitter();
    this.option = null;
    this.isOpen = false;
    this.focused = false;
    this.hoveringValue = null;
    this.innerSearchText = "";
    this._stateChanges = new Subject();
    this._disabled = false;
    this._multiple = false;
    this._uid = `select2-${nextUniqueId++}`;
    this._onTouched = () => {
    };
    this._onChange = () => {
    };
    this.id = this.id;
    this._tabIndex = parseInt(tabIndex, 10) || 0;
    if (this._control) {
      this._control.valueAccessor = this;
    }
  }
  clickDetection(e) {
    if (this.isOpen && focus) {
      const target = e.target;
      if (!this.ifParentContainsClass(target, "selection")) {
        if (!this.ifParentContainsClass(target, "select2-dropdown")) {
          this.toggleOpenAndClose();
        }
        if (!this.ifParentContainsId(target, this._id)) {
          this.clickExit();
        }
      } else if (!this.ifParentContainsId(target, this._id)) {
        this.toggleOpenAndClose();
        this.clickExit();
      }
    }
  }
  ngOnInit() {
    this._viewportRuler.change(100).subscribe(() => {
      if (this.isOpen) {
        this.triggerRect();
      }
    });
    const option = Select2Utils.getOptionsByValue(this._data, this._control ? this._control.value : this.value, this.multiple);
    if (option !== null) {
      this.option = option;
    }
    if (!Array.isArray(option)) {
      this.hoveringValue = this.value;
    }
    this.updateSearchBox();
  }
  ngAfterViewInit() {
    this.cdkConnectedOverlay.positionChange.subscribe((posChange) => {
      if (this.listPosition === "auto" && posChange.connectionPair?.originY && this._overlayPosition !== posChange.connectionPair.originY) {
        this.triggerRect();
        this._overlayPosition = posChange.connectionPair.originY;
        this._changeDetectorRef.detectChanges();
      }
    });
    this.selectionElement = this.selection.nativeElement;
    this.triggerRect();
  }
  ngDoCheck() {
    this.updateSearchBox();
    this._dirtyCheckNativeValue();
    if (this._triggerRect) {
      if (this.overlayWidth !== this._triggerRect.width) {
        this.overlayWidth = this._triggerRect.width;
      }
      if (this._dropdownRect?.height > 0 && this.overlayHeight !== this._dropdownRect.height) {
        this.overlayHeight = this.listPosition === "auto" ? this._dropdownRect.height : 0;
      }
    }
  }
  updateSearchBox() {
    const hidden = this.customSearchEnabled ? false : Select2Utils.isSearchboxHiddex(this._data, this._minCountForSearch);
    if (this.isSearchboxHidden !== hidden) {
      this.isSearchboxHidden = hidden;
    }
  }
  hideSearch() {
    const displaySearchStatus = displaySearchStatusList.indexOf(this.displaySearchStatus) > -1 ? this.displaySearchStatus : "default";
    return displaySearchStatus === "default" && this.isSearchboxHidden || displaySearchStatus === "hidden";
  }
  getOptionStyle(option) {
    return "select2-results__option " + (option.hide ? "select2-results__option--hide " : "") + (option.value === this.hoveringValue ? "select2-results__option--highlighted " : "") + (option.classes || "");
  }
  mouseenter(option) {
    if (!option.disabled) {
      this.hoveringValue = option.value;
    }
  }
  click(option) {
    if (this.testSelection(option)) {
      this.select(option);
    }
  }
  reset(event) {
    this.select(this.resetSelectedValue !== void 0 ? Select2Utils.getOptionByValue(this._data, this.resetSelectedValue) ?? null : null);
    this.stopEvent(event);
  }
  prevChange(event) {
    event.stopPropagation();
  }
  stopEvent(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  toggleOpenAndClose(focus2 = true, open, event) {
    if (this.disabled) {
      return;
    }
    this._focus(focus2);
    const changeEmit = this.isOpen !== (open ?? !this.isOpen);
    this.isOpen = open ?? !this.isOpen;
    if (this.isOpen) {
      if (!this.isSearchboxHidden) {
        this.innerSearchText = "";
        this.updateFilteredData();
        this._focusSearchboxOrResultsElement(focus2);
      }
      if (this.isSearchboxHidden && !changeEmit && event) {
        this.keyDown(event);
      } else {
        setTimeout(() => {
          if (this.option) {
            const option = Array.isArray(this.option) ? this.option[0] : this.option;
            this.updateScrollFromOption(option);
          } else if (this.resultsElement) {
            this.resultsElement.scrollTop = 0;
          }
          setTimeout(() => {
            this.triggerRect();
            this.cdkConnectedOverlay?.overlayRef?.updatePosition();
          }, 100);
        });
      }
      if (changeEmit) {
        this.open.emit(this);
      }
    } else if (changeEmit) {
      this.close.emit(this);
    }
    this._changeDetectorRef.markForCheck();
  }
  hasTemplate(option, defaut) {
    return this.templates instanceof TemplateRef || this.templates?.[option.templateId] instanceof TemplateRef || this.templates?.[defaut] instanceof TemplateRef;
  }
  getTemplate(option, defaut) {
    return this.hasTemplate(option, defaut) ? this.templates[option.templateId] || this.templates[defaut] || this.templates : void 0;
  }
  triggerRect() {
    this._triggerRect = this.selectionElement.getBoundingClientRect();
    this._dropdownRect = this.dropdown?.nativeElement ? this.dropdown.nativeElement.getBoundingClientRect() : void 0;
  }
  testSelection(option) {
    if (option.disabled) {
      return false;
    }
    return !this.multiple || !this.limitSelection || Array.isArray(this._value) && this._value.length < this.limitSelection;
  }
  testValueChange(value1, value2) {
    if ((value1 === null || value1 === void 0) && (value2 === null || value2 === void 0) || value1 === value2) {
      return false;
    }
    if (this.multiple && value1?.length && value2?.length && value1.length === value2.length) {
      for (const e1 of value1) {
        const test = value2.indexOf(e1) > -1;
        if (!test) {
          return true;
        }
      }
      return false;
    }
    return true;
  }
  updateFilteredData(writeValue = false) {
    setTimeout(() => {
      let result = this._data;
      if (this.multiple && this.hideSelectedItems) {
        result = Select2Utils.getFilteredSelectedData(result, this.option);
      }
      if (!this.customSearchEnabled && this.searchText && this.searchText.length >= +this.minCharForSearch) {
        result = Select2Utils.getFilteredData(result, this.searchText, this.editPattern);
      }
      if (this.maxResults > 0) {
        const data = Select2Utils.getReduceData(result, +this.maxResults);
        result = data.result;
        this.maxResultsExceeded = data.reduce;
      } else {
        this.maxResultsExceeded = false;
      }
      if (Select2Utils.valueIsNotInFilteredData(result, this.hoveringValue)) {
        this.hoveringValue = Select2Utils.getFirstAvailableOption(result);
      }
      if (writeValue) {
        this.writeValue(this._control ? this._control.value : this.value);
      }
      this.filteredData = result;
      this._changeDetectorRef.markForCheck();
    });
  }
  clickExit() {
    this._focus(false);
  }
  ifParentContainsClass(element, cssClass) {
    return this.getParentElementByClass(element, cssClass) !== null;
  }
  ifParentContainsId(element, id) {
    return this.getParentElementById(element, id) !== null;
  }
  getParentElementByClass(element, cssClass) {
    return this.containClasses(element, cssClass.trim().split(/\s+/)) ? element : element.parentElement ? this.getParentElementByClass(element.parentElement, cssClass) : null;
  }
  getParentElementById(element, id) {
    return element.id === id ? element : element.parentElement ? this.getParentElementById(element.parentElement, id) : null;
  }
  containClasses(element, cssClasses) {
    if (!element.classList) {
      return false;
    }
    for (const cssClass of cssClasses) {
      if (!element.classList.contains(cssClass)) {
        return false;
      }
    }
    return true;
  }
  focusin() {
    if (!this.disabled) {
      this._focus(true);
    }
  }
  focusout() {
    if (this.selectionElement && !this.selectionElement.classList.contains("select2-focused")) {
      this._focus(false);
      this._onTouched();
    }
  }
  select(option) {
    let value;
    if (option !== null && option !== void 0) {
      if (this.multiple) {
        const options = this.option;
        const index = options.findIndex((op) => op.value === option.value);
        if (index === -1) {
          options.push(option);
        } else {
          options.splice(index, 1);
        }
        value = this.option.map((op) => op.value);
      } else {
        this.option = option;
        if (this.isOpen) {
          this.isOpen = false;
          this.close.emit(this);
          this.selectionElement?.focus();
        }
        value = this.option.value;
      }
    } else {
      this.option = null;
    }
    if (this.multiple && this.hideSelectedItems) {
      this.updateFilteredData();
    }
    if (this._control) {
      this._onChange(value);
    } else {
      this._value = value;
    }
    this.update.emit({
      component: this,
      value,
      options: Array.isArray(this.option) ? this.option : this.option ? [this.option] : null
    });
  }
  keyDown(event, create = false) {
    if (create && this._testKey(event, ["Enter", 13])) {
      this.createAndAdd(event);
    } else if (this._testKey(event, ["ArrowDown", 40])) {
      this.moveDown();
      event.preventDefault();
    } else if (this._testKey(event, ["ArrowUp", 38])) {
      this.moveUp();
      event.preventDefault();
    } else if (this._testKey(event, ["Enter", 13])) {
      this.selectByEnter();
      event.preventDefault();
    } else if (this._testKey(event, ["Escape", "Tab", 9, 27]) && this.isOpen) {
      this.toggleOpenAndClose();
      this._focus(false);
    }
  }
  openKey(event, create = false) {
    if (create && this._testKey(event, ["Enter", 13])) {
      this.createAndAdd(event);
    } else if (this._testKey(event, ["ArrowDown", "ArrowUp", "Enter", 40, 38, 13])) {
      this.toggleOpenAndClose(true, true, event);
      event.preventDefault();
    } else if (this._testKey(event, ["Escape", "Tab", 9, 27])) {
      if (this.isOpen) {
        this.toggleOpenAndClose(false);
        this._onTouched();
        event.preventDefault();
      } else {
        this._focus(false);
      }
    }
  }
  searchUpdate(e) {
    this.searchText = e.target.value;
    if (!this.customSearchEnabled) {
      this.updateFilteredData();
    } else {
      this.search.emit({
        component: this,
        value: this._value,
        search: this.searchText,
        data: this._data,
        filteredData: (data) => {
          this.filteredData = data;
          this._changeDetectorRef.markForCheck();
        }
      });
    }
  }
  trackBy(_index, item) {
    return item.value;
  }
  isSelected(option) {
    return Select2Utils.isSelected(this.option, option, this.multiple);
  }
  isDisabled(option) {
    return option.disabled ? "true" : "false";
  }
  removeSelection(e, option) {
    Select2Utils.removeSelection(this.option, option);
    if (this.multiple && this.hideSelectedItems) {
      this.updateFilteredData();
    }
    const value = this.option.map((op) => op.value);
    if (this._control) {
      this._onChange(value);
    } else {
      this._value = value;
    }
    this.update.emit({
      component: this,
      value,
      options: Array.isArray(this.option) ? this.option : this.option ? [this.option] : null
    });
    this.removeOption.emit({
      component: this,
      value,
      removedOption: option
    });
    e.preventDefault();
    e.stopPropagation();
    if (this.isOpen) {
      this._focusSearchboxOrResultsElement();
    }
  }
  /**
   * Sets the model value. Implemented as part of ControlValueAccessor.
   * @param value
   */
  writeValue(value) {
    this._setSelectionByValue(value);
  }
  /**
   * Saves a callback function to be invoked when the select's value
   * changes from user input. Part of the ControlValueAccessor interface
   * required to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the value changes.
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /**
   * Saves a callback function to be invoked when the select is blurred
   * by the user. Part of the ControlValueAccessor interface required
   * to integrate with Angular's core forms API.
   *
   * @param fn Callback to be triggered when the component has been touched.
   */
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  /**
   * Sets whether the component should be disabled.
   * Implemented as part of ControlValueAccessor.
   * @param isDisabled
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  onScroll(way) {
    this.scroll.emit({
      component: this,
      way,
      search: this.innerSearchText,
      data: this._data
    });
  }
  _isErrorState() {
    const isInvalid = this._control?.invalid;
    const isTouched = this._control?.touched;
    const isSubmitted = this._parentFormGroup?.submitted || this._parentForm?.submitted;
    return !!(isInvalid && (isTouched || isSubmitted));
  }
  addItem(value) {
    let item = Select2Utils.getOptionByValue(this._data, value);
    if (!item) {
      item = {
        value,
        label: value
      };
      this._data.push(item);
    }
    return item;
  }
  createAndAdd(e) {
    const value = e.target.value;
    if (value.trim()) {
      const item = this.addItem(value.trim());
      this.click(item);
      e.target.value = "";
      this.autoCreateItem.emit({
        value: item,
        component: this,
        options: Array.isArray(this.option) ? this.option : this.option ? [this.option] : null
      });
    }
    this.stopEvent(e);
  }
  moveUp() {
    this.updateScrollFromOption(Select2Utils.getPreviousOption(this.filteredData, this.hoveringValue));
  }
  moveDown() {
    this.updateScrollFromOption(Select2Utils.getNextOption(this.filteredData, this.hoveringValue));
  }
  updateScrollFromOption(option) {
    if (option) {
      this.hoveringValue = option.value;
      const domElement = this.results.find((r) => r.nativeElement.innerText.trim() === option.label);
      if (domElement && this.resultsElement) {
        this.resultsElement.scrollTop = 0;
        const listClientRect = this.resultsElement.getBoundingClientRect();
        const optionClientRect = domElement.nativeElement.getBoundingClientRect();
        this.resultsElement.scrollTop = optionClientRect.top - listClientRect.top;
      }
    }
  }
  selectByEnter() {
    if (this.hoveringValue) {
      const option = Select2Utils.getOptionByValue(this._data, this.hoveringValue);
      this.select(option);
    }
  }
  _testKey(event, refs = []) {
    return this._isKey(this._getKey(event), refs);
  }
  _getKey(event) {
    let code;
    if (event.key !== void 0) {
      code = event.key;
    } else if (event["keyIdentifier"] !== void 0) {
      code = event["keyIdentifier"];
    } else if (event["keyCode"] !== void 0) {
      code = event["keyCode"];
    } else {
      event.preventDefault();
    }
    return code;
  }
  _isKey(code, refs = []) {
    return refs && refs.length > 0 ? refs.indexOf(code) !== -1 : false;
  }
  /**
   * Sets the selected option based on a value. If no option can be
   * found with the designated value, the select trigger is cleared.
   */
  _setSelectionByValue(value) {
    if (this.option || value !== void 0 && value !== null) {
      const isArray = Array.isArray(value);
      if (this.multiple && value && !isArray) {
        throw new Error("Non array value.");
      } else if (this._data) {
        if (this.multiple) {
          this.option = [];
          if (isArray) {
            const selectedValues = Select2Utils.getOptionsByValue(this._data, value, this.multiple);
            selectedValues.map((item) => this.select(item));
          }
        } else {
          this.select(Select2Utils.getOptionByValue(this._data, value));
        }
      } else if (this._control) {
        this._control.viewToModelUpdate(value);
      }
      this._changeDetectorRef.markForCheck();
    }
  }
  /** Does some manual dirty checking on the native input `value` property. */
  _dirtyCheckNativeValue() {
    const newValue = this.value;
    if (this._previousNativeValue !== newValue) {
      this._previousNativeValue = newValue;
      this._stateChanges.next();
    }
  }
  _focusSearchboxOrResultsElement(focus2 = true) {
    if (!this.isSearchboxHidden) {
      setTimeout(() => {
        if (this.searchInput && this.searchInput.nativeElement && focus2) {
          this.searchInput.nativeElement.focus();
        }
      });
      if (this.resultsElement && focus2) {
        this.resultsElement.focus();
      }
    }
  }
  _focus(state) {
    if (!state && this.focused) {
      this.focused = state;
      this.blur.emit(this);
    } else if (state && !this.focused) {
      this.focused = state;
      this.focus.emit(this);
    }
  }
  _isAbobeOverlay() {
    return this.overlay && this._overlayPosition && this.listPosition === "auto" ? this._overlayPosition === "top" : this.listPosition === "above";
  }
};
_Select2.ɵfac = function Select2_Factory(t) {
  return new (t || _Select2)(ɵɵdirectiveInject(ViewportRuler), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(NgForm, 8), ɵɵdirectiveInject(FormGroupDirective, 8), ɵɵdirectiveInject(NgControl, 10), ɵɵinjectAttribute("tabindex"));
};
_Select2.ɵcmp = ɵɵdefineComponent({
  type: _Select2,
  selectors: [["select2"]],
  viewQuery: function Select2_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(CdkConnectedOverlay, 5);
      ɵɵviewQuery(_c0, 7);
      ɵɵviewQuery(_c1, 5);
      ɵɵviewQuery(_c2, 5);
      ɵɵviewQuery(_c3, 5);
      ɵɵviewQuery(_c4, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cdkConnectedOverlay = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.selection = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resultContainer = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.searchInput = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dropdown = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.results = _t);
    }
  },
  hostVars: 8,
  hostBindings: function Select2_HostBindings(rf, ctx) {
    if (rf & 1) {
      ɵɵlistener("click", function Select2_click_HostBindingHandler($event) {
        return ctx.clickDetection($event);
      }, false, ɵɵresolveDocument);
    }
    if (rf & 2) {
      ɵɵhostProperty("id", ctx.id);
      ɵɵattribute("aria-invalid", ctx.ariaInvalid);
      ɵɵclassProp("material", ctx.classMaterial)("nostyle", ctx.classNostyle)("select2-above", ctx.select2above);
    }
  },
  inputs: {
    data: "data",
    minCharForSearch: [InputFlags.HasDecoratorInputTransform, "minCharForSearch", "minCharForSearch", numberAttribute],
    displaySearchStatus: "displaySearchStatus",
    placeholder: "placeholder",
    limitSelection: [InputFlags.HasDecoratorInputTransform, "limitSelection", "limitSelection", numberAttribute],
    listPosition: "listPosition",
    multiple: [InputFlags.HasDecoratorInputTransform, "multiple", "multiple", booleanAttribute],
    overlay: [InputFlags.HasDecoratorInputTransform, "overlay", "overlay", booleanAttribute],
    styleMode: "styleMode",
    noResultMessage: "noResultMessage",
    maxResults: [InputFlags.HasDecoratorInputTransform, "maxResults", "maxResults", numberAttribute],
    maxResultsMessage: "maxResultsMessage",
    infiniteScrollDistance: [InputFlags.HasDecoratorInputTransform, "infiniteScrollDistance", "infiniteScrollDistance", numberAttribute],
    infiniteScrollThrottle: [InputFlags.HasDecoratorInputTransform, "infiniteScrollThrottle", "infiniteScrollThrottle", numberAttribute],
    infiniteScroll: [InputFlags.HasDecoratorInputTransform, "infiniteScroll", "infiniteScroll", booleanAttribute],
    autoCreate: [InputFlags.HasDecoratorInputTransform, "autoCreate", "autoCreate", booleanAttribute],
    noLabelTemplate: [InputFlags.HasDecoratorInputTransform, "noLabelTemplate", "noLabelTemplate", booleanAttribute],
    editPattern: "editPattern",
    templates: "templates",
    resultMaxHeight: "resultMaxHeight",
    customSearchEnabled: [InputFlags.HasDecoratorInputTransform, "customSearchEnabled", "customSearchEnabled", booleanAttribute],
    minCountForSearch: [InputFlags.HasDecoratorInputTransform, "minCountForSearch", "minCountForSearch", numberAttribute],
    id: "id",
    required: [InputFlags.HasDecoratorInputTransform, "required", "required", booleanAttribute],
    disabled: [InputFlags.HasDecoratorInputTransform, "disabled", "disabled", booleanAttribute],
    hideSelectedItems: [InputFlags.HasDecoratorInputTransform, "hideSelectedItems", "hideSelectedItems", booleanAttribute],
    readonly: [InputFlags.HasDecoratorInputTransform, "readonly", "readonly", booleanAttribute],
    value: "value",
    tabIndex: [InputFlags.HasDecoratorInputTransform, "tabIndex", "tabIndex", numberAttribute],
    resettable: [InputFlags.HasDecoratorInputTransform, "resettable", "resettable", booleanAttribute],
    resetSelectedValue: "resetSelectedValue"
  },
  outputs: {
    update: "update",
    autoCreateItem: "autoCreateItem",
    open: "open",
    close: "close",
    focus: "focus",
    blur: "blur",
    search: "search",
    scroll: "scroll",
    removeOption: "removeOption"
  },
  features: [ɵɵInputTransformsFeature],
  ngContentSelectors: _c7,
  decls: 18,
  vars: 28,
  consts: [[1, "select2-label", 3, "click"], ["class", "select2-required"], [1, "select2", "select2-container", "select2-container--default"], ["cdkOverlayOrigin", "", 1, "selection", 3, "tabindex", "click", "focus", "blur", "keydown"], ["selection", "", "trigger", "cdkOverlayOrigin"], ["role", "combobox", 1, "select2-selection"], ["class", "select2-selection__rendered", 3, "title"], ["class", "select2-selection__reset", "role", "presentation"], ["class", "select2-selection__arrow", "role", "presentation"], ["class", "select2-selection__rendered"], [1, "select2-subscript-wrapper"], ["cdkConnectedOverlay", "", "cdkConnectedOverlayHasBackdrop", "", "cdkConnectedOverlayBackdropClass", "select2-overlay-backdrop", 3, "cdkConnectedOverlayOrigin", "cdkConnectedOverlayOpen", "cdkConnectedOverlayMinWidth", "cdkConnectedOverlayHeight", "cdkConnectedOverlayPositions", "backdropClick"], ["containerTemplate", ""], [1, "select2-required"], [1, "select2-selection__rendered", 3, "title"], [1, "select2-selection__placeholder"], [3, "innerHTML"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "presentation", 1, "select2-selection__reset", 3, "click"], ["role", "presentation", 1, "select2-selection__arrow"], [1, "select2-selection__rendered"], ["class", "select2-selection__placeholder", 3, "select2-selection__placeholder__option"], ["class", "select2-selection__auto-create"], ["tabindex", "0", 1, "select2-selection__choice", 3, "title", "keydown.enter"], ["class", "select2-selection__choice__remove", "role", "presentation"], ["role", "presentation", 1, "select2-selection__choice__remove", 3, "click"], [1, "select2-selection__auto-create", 3, "focus", "blur"], ["type", "search", "role", "textbox", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "spellcheck", "false", 1, "select2-create__field", 3, "id", "click", "keydown", "keyup", "change"], ["class", "select2-selection__choice", "tabindex", "0", 3, "title"], [4, "ngTemplateOutlet"], [1, "select2-container", "select2-container--default", "select2-container-dropdown"], [1, "select2-dropdown"], ["dropdown", ""], [1, "select2-search", "select2-search--dropdown"], ["type", "search", "role", "textbox", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "spellcheck", "false", 1, "select2-search__field", 3, "id", "value", "keydown", "keyup", "change"], ["searchInput", ""], [1, "select2-results"], ["role", "tree", "tabindex", "-1", "infiniteScroll", "", 1, "select2-results__options", 3, "infiniteScrollDisabled", "infiniteScrollDistance", "infiniteScrollThrottle", "infiniteScrollContainer", "scrolled", "scrolledUp", "keydown"], ["results", ""], ["class", "select2-no-result select2-results__option", 3, "innerHTML"], ["class", "select2-too-much-result select2-results__option", 3, "innerHTML"], ["class", "select2-results__option", "role", "group"], ["role", "group", 1, "select2-results__option"], [1, "select2-results__options", "select2-results__options--nested"], ["role", "treeitem", 3, "id", "mouseenter", "click"], ["result", ""], ["class", "select2-label-content", 3, "innerHTML"], [1, "select2-label-content", 3, "innerHTML"], ["role", "treeitem", 3, "id", "class"], ["li", ""], [1, "select2-no-result", "select2-results__option", 3, "innerHTML"], [1, "select2-too-much-result", "select2-results__option", 3, "innerHTML"]],
  template: function Select2_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef(_c6);
      ɵɵelementStart(0, "div", 0);
      ɵɵlistener("click", function Select2_Template_div_click_0_listener() {
        return ctx.toggleOpenAndClose();
      });
      ɵɵprojection(1);
      ɵɵtemplate(2, Select2_Conditional_2_Template, 1, 0, "span", 1);
      ɵɵelementEnd();
      ɵɵelementStart(3, "div", 2)(4, "div", 3, 4);
      ɵɵlistener("click", function Select2_Template_div_click_4_listener() {
        return ctx.toggleOpenAndClose();
      })("focus", function Select2_Template_div_focus_4_listener() {
        return ctx.focusin();
      })("blur", function Select2_Template_div_blur_4_listener() {
        return ctx.focusout();
      })("keydown", function Select2_Template_div_keydown_4_listener($event) {
        return ctx.openKey($event);
      });
      ɵɵelementStart(7, "div", 5);
      ɵɵtemplate(8, Select2_Conditional_8_Template, 5, 6, "span", 6)(9, Select2_Conditional_9_Template, 2, 0, "span", 7)(10, Select2_Conditional_10_Template, 1, 0, "span", 8)(11, Select2_Conditional_11_Template, 5, 3, "ul", 9);
      ɵɵelementEnd()();
      ɵɵtemplate(12, Select2_Conditional_12_Template, 1, 1, "ng-container");
      ɵɵelementStart(13, "div", 10);
      ɵɵprojection(14, 1);
      ɵɵelementEnd()();
      ɵɵtemplate(15, Select2_ng_template_15_Template, 1, 1, "ng-template", 11);
      ɵɵlistener("backdropClick", function Select2_Template_ng_template_backdropClick_15_listener() {
        return ctx.toggleOpenAndClose();
      });
      ɵɵtemplate(16, Select2_ng_template_16_Template, 13, 23, "ng-template", null, 12, ɵɵtemplateRefExtractor);
    }
    if (rf & 2) {
      const _r2 = ɵɵreference(6);
      ɵɵadvance(2);
      ɵɵconditional(2, ctx.required ? 2 : -1);
      ɵɵadvance();
      ɵɵclassProp("select2-container--focus", ctx.focused)("select2-container--below", !ctx.select2above)("select2-container--above", ctx.select2above)("select2-container--open", ctx.isOpen)("select2-container--disabled", ctx.disabled);
      ɵɵadvance();
      ɵɵclassProp("select2-focused", ctx.focused);
      ɵɵproperty("tabindex", !ctx.isOpen ? ctx.tabIndex : "-1");
      ɵɵadvance(3);
      ɵɵclassProp("select2-selection--multiple", ctx.multiple)("select2-selection--single", !ctx.multiple);
      ɵɵadvance();
      ɵɵconditional(8, !ctx.multiple ? 8 : -1);
      ɵɵadvance();
      ɵɵconditional(9, !ctx.multiple && ctx.resettable && ctx.resetSelectedValue !== ctx.value && ctx.select2Option && !(ctx.disabled || ctx.readonly) ? 9 : -1);
      ɵɵadvance();
      ɵɵconditional(10, !ctx.multiple ? 10 : -1);
      ɵɵadvance();
      ɵɵconditional(11, ctx.multiple ? 11 : -1);
      ɵɵadvance();
      ɵɵconditional(12, !ctx.overlay ? 12 : -1);
      ɵɵadvance(3);
      ɵɵproperty("cdkConnectedOverlayOrigin", _r2)("cdkConnectedOverlayOpen", ctx.isOpen && ctx.overlay)("cdkConnectedOverlayMinWidth", ctx.overlayWidth)("cdkConnectedOverlayHeight", ctx.overlayHeight)("cdkConnectedOverlayPositions", ctx._positions);
    }
  },
  dependencies: [NgTemplateOutlet, CdkConnectedOverlay, CdkOverlayOrigin, InfiniteScrollDirective],
  styles: ['.select2-label[_ngcontent-%COMP%]{color:var(--select2-label-text-color, #000)}.select2-container[_ngcontent-%COMP%]{box-sizing:border-box;display:inline-block;margin:0;position:relative;vertical-align:middle;width:100%}.select2-container[_ngcontent-%COMP%]   .select2-container-dropdown[_ngcontent-%COMP%]{position:absolute;width:0px;opacity:0}.select2-container[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]{box-sizing:border-box;cursor:pointer;display:block;height:var(--select2-single-height, 28px);-webkit-user-select:none;user-select:none}.select2-container[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%]{display:block;padding:var(--select2-selection-padding, 0 0 0 8px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1 1 auto}.select2-container[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__clear[_ngcontent-%COMP%]{position:relative}.select2-container[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{box-sizing:border-box;cursor:pointer;display:block;min-height:var(--select2-multiple-height, 28px);-webkit-user-select:none;user-select:none}.select2-container[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%]{display:inline-flex;overflow:hidden;padding-left:8px;padding-bottom:2px;text-overflow:ellipsis;white-space:nowrap;flex-wrap:wrap;gap:var(--select2-selection-multiple-gap, 2px 5px)}.select2-container[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%]   .select2-selection__auto-create[_ngcontent-%COMP%]{flex:1 1 150px;min-width:150px;display:flex}.select2-container[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%]   .select2-create__field[_ngcontent-%COMP%]{width:100%;border:0}.select2-container[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%]   .select2-create__field[_ngcontent-%COMP%]:focus{border:0;outline:0}.select2-container[_ngcontent-%COMP%]   .select2-search--inline[_ngcontent-%COMP%]{float:left}.select2-container[_ngcontent-%COMP%]   .select2-search--inline[_ngcontent-%COMP%]   .select2-search__field[_ngcontent-%COMP%]{box-sizing:border-box;border:none;font-size:100%;margin-top:5px;padding:0}.select2-container[_ngcontent-%COMP%]   .select2-search--inline[_ngcontent-%COMP%]   .select2-search__field[_ngcontent-%COMP%]::-webkit-search-cancel-button{-webkit-appearance:none}.select2-dropdown[_ngcontent-%COMP%]{background:var(--select2-dropdown-background, white);border:1px solid var(--select2-dropdown-border-color, #aaa);border-radius:var(--select2-selection-border-radius, 4px);box-sizing:border-box;display:block;position:absolute;width:100%;z-index:1051;height:0;overflow:hidden}.select2-dropdown[_ngcontent-%COMP%]   .select2-label-content[_ngcontent-%COMP%]{display:contents}.select2-results[_ngcontent-%COMP%]{display:block}.select2-results__options[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0}.select2-results__option[_ngcontent-%COMP%]{padding:var(--select2-option-padding, 6px);-webkit-user-select:none;user-select:none;color:var(--select2-option-text-color, #000)}.select2-results__option[aria-selected][_ngcontent-%COMP%]{cursor:pointer}.select2-container.select2-container-dropdown.select2-container--open[_ngcontent-%COMP%]{width:100%;opacity:1}.select2-container--open[_ngcontent-%COMP%]   .select2-dropdown[_ngcontent-%COMP%]{overflow:auto;height:auto}.select2-container--open[_ngcontent-%COMP%]   .select2-dropdown--above[_ngcontent-%COMP%]{border-bottom:none;border-bottom-left-radius:0;border-bottom-right-radius:0;bottom:27px;display:flex;flex-direction:column-reverse}.select2-container--open[_ngcontent-%COMP%]   .select2-dropdown--below[_ngcontent-%COMP%]{border-top:none;border-top-left-radius:0;border-top-right-radius:0}.select2-search--dropdown[_ngcontent-%COMP%]{display:block;padding:4px}.select2-search--dropdown[_ngcontent-%COMP%]   .select2-search__field[_ngcontent-%COMP%]{padding:4px;width:100%;box-sizing:border-box}.select2-search--dropdown[_ngcontent-%COMP%]   .select2-search__field[_ngcontent-%COMP%]::-webkit-search-cancel-button{-webkit-appearance:none}.select2-search--dropdown.select2-search--hide[_ngcontent-%COMP%]{display:none}.select2-close-mask[_ngcontent-%COMP%]{border:0;margin:0;padding:0;display:block;position:fixed;left:0;top:0;min-height:100%;min-width:100%;height:auto;width:auto;opacity:0;z-index:99}.select2-required[_ngcontent-%COMP%]:before{content:"*";color:var(--select2-required-color, red)}.select2-hidden-accessible[_ngcontent-%COMP%]{border:0!important;clip:rect(0 0 0 0)!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;width:1px!important}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]{background:var(--select2-selection-background, #fff);border:1px solid var(--select2-selection-border-color, #aaa);border-radius:var(--select2-selection-border-radius, 4px);display:flex}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%]{color:var(--select2-selection-text-color, #111);line-height:var(--select2-selection-line-height, 28px)}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__clear[_ngcontent-%COMP%]{cursor:pointer;float:right;font-weight:700}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__placeholder[_ngcontent-%COMP%]{color:var(--select2-placeholder-color, #999)}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__placeholder[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{overflow:hidden;white-space:nowrap;text-overflow:var(--select2-placeholder-overflow, ellipsis)}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__placeholder__option[_ngcontent-%COMP%]{display:none}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__reset[_ngcontent-%COMP%], .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__arrow[_ngcontent-%COMP%]{display:flex;width:20px;align-items:center;justify-content:center}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__arrow[_ngcontent-%COMP%]:before{content:" ";border-color:var(--select2-arrow-color, #888) transparent;border-style:solid;border-width:5px 4px 0;height:0;width:0}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__reset[_ngcontent-%COMP%]{color:var(--select2-reset-color, #999)}.select2-container--default.select2-container--disabled[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]{background:var(--select2-selection-disabled-background, #eee);cursor:default}.select2-container--default.select2-container--disabled[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__clear[_ngcontent-%COMP%]{display:none}.select2-container--default.select2-container--open[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__arrow[_ngcontent-%COMP%]:before{border-color:transparent transparent var(--select2-arrow-color, #888);border-width:0 4px 5px}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{background:var(--select2-selection-background, #fff);border:1px solid var(--select2-selection-border-color, #aaa);border-radius:var(--select2-selection-border-radius, 4px);cursor:text;display:flex}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%]{flex:1 1 auto;box-sizing:border-box;list-style:none;margin:0;padding:var(--select2-selection-multiple-padding, 2px 5px);width:100%;min-height:1em;align-items:center}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;line-height:var(--select2-selection-choice-line-height, 20px)}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__placeholder[_ngcontent-%COMP%]{display:block;width:100%;color:var(--select2-placeholder-color, #999);margin-top:5px;float:left;overflow:hidden;white-space:nowrap;text-overflow:var(--select2-placeholder-overflow, ellipsis)}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__placeholder__option[_ngcontent-%COMP%]{display:none}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__clear[_ngcontent-%COMP%]{cursor:pointer;float:right;font-weight:700;margin-top:5px;margin-right:10px}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__choice[_ngcontent-%COMP%]{color:var(--select2-selection-choice-text-color, #000);background:var(--select2-selection-choice-background, #e4e4e4);border:1px solid var(--select2-selection-choice-border-color, #aaa);border-radius:var(--select2-selection-border-radius, 4px);cursor:default;padding:0 5px}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__choice__remove[_ngcontent-%COMP%]{color:var(--select2-selection-choice-close-color, #999);cursor:pointer;display:inline-block;font-weight:700;margin-right:2px}.select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__choice__remove[_ngcontent-%COMP%]:hover{color:var(--select2-selection-choice-hover-close-color, #333)}.select2-container--default.select2-container--focused[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{border:solid var(--select2-selection-focus-border-color, #000) 1px;outline:none}.select2-container--default[_ngcontent-%COMP%]:not(.select2-container--open)   .select2-focused[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .select2-container--default[_ngcontent-%COMP%]:not(.select2-container--open)   .select2-focused[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{border:solid var(--select2-selection-focus-border-color, #000) 1px;outline:none}.select2-container--default.select2-container--disabled[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{background:var(--select2-selection-disabled-background, #eee);cursor:default}.select2-container--default.select2-container--disabled[_ngcontent-%COMP%]   .select2-selection__choice__remove[_ngcontent-%COMP%]{display:none}.select2-container--default.select2-container--open.select2-container--above[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .select2-container--default.select2-container--open.select2-container--above[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{border-top-left-radius:0;border-top-right-radius:0}.select2-container--default.select2-container--open.select2-container--below[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .select2-container--default.select2-container--open.select2-container--below[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{border-bottom-left-radius:0;border-bottom-right-radius:0}.select2-container--default[_ngcontent-%COMP%]   .select2-search--dropdown[_ngcontent-%COMP%]   .select2-search__field[_ngcontent-%COMP%]{border:1px solid var(--select2-search-border-color, #aaa);background:1px solid var(--select2-search-background, #fff);border-radius:var(--select2-search-border-radius, 0px)}.select2-container--default[_ngcontent-%COMP%]   .select2-search--inline[_ngcontent-%COMP%]   .select2-search__field[_ngcontent-%COMP%]{background:transparent;border:none;outline:none;box-shadow:none;-webkit-appearance:textfield}.select2-container--default[_ngcontent-%COMP%]   .select2-results[_ngcontent-%COMP%] > .select2-results__options[_ngcontent-%COMP%]{overflow-y:auto}.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[role=group][_ngcontent-%COMP%]{padding:0}.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[aria-disabled=true][_ngcontent-%COMP%]{color:var(--select2-option-disabled-text-color, #999);background:var(--select2-option-disabled-background, transparent)}.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[aria-selected=true][_ngcontent-%COMP%]{color:var(--select2-option-selected-text-color, #000);background:var(--select2-option-selected-background, #ddd)}.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]{padding-left:1em}.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__group[_ngcontent-%COMP%]{padding-left:0}.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]{margin-left:-1em;padding-left:2em}.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]{margin-left:-2em;padding-left:3em}.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]{margin-left:-3em;padding-left:4em}.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]{margin-left:-4em;padding-left:5em}.select2-container--default[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]   .select2-results__option[_ngcontent-%COMP%]{margin-left:-5em;padding-left:6em}.select2-container--default[_ngcontent-%COMP%]   .select2-results__option--highlighted[aria-selected][_ngcontent-%COMP%]{background:var(--select2-option-highlighted-background, #5897fb);color:var(--select2-option-highlighted-text-color, #fff)}.select2-container--default[_ngcontent-%COMP%]   .select2-results__option--hide[_ngcontent-%COMP%]{display:none}.select2-container--default[_ngcontent-%COMP%]   .select2-results__group[_ngcontent-%COMP%]{cursor:default;display:block;padding:6px;color:var(--select2-option-group-text-color, gray);background:var(--select2-option-group-background, transparent)}.select2-no-result[_ngcontent-%COMP%]{color:var(--select2-no-result-color, #888);font-style:var(--select2-no-result-font-style, italic)}.select2-too-much-result[_ngcontent-%COMP%]{color:var(--select2-too-much-result-color, #888);font-style:var(--select2-too-much-font-style, italic)}.nostyle[_nghost-%COMP%]   .select2-dropdown[_ngcontent-%COMP%]{border-color:transparent}.nostyle[_nghost-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .nostyle[_nghost-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{background:transparent;border-color:transparent}.nostyle[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-focused[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .nostyle[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-focused[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%], .nostyle[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]:not(.select2-container--open)   .select2-focused[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .nostyle[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]:not(.select2-container--open)   .select2-focused[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{background:transparent;border-color:transparent}.material[_nghost-%COMP%]{display:inline-block;width:300px}.material[_nghost-%COMP%] > .select2-container[_ngcontent-%COMP%]{padding-bottom:1.29688em;vertical-align:inherit}.material[_nghost-%COMP%] > .select2-container[_ngcontent-%COMP%]   .selection[_ngcontent-%COMP%]{padding:.4375em 0;border-top:.84375em solid transparent;display:inline-flex;align-items:baseline;width:100%;height:auto}.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{width:100%;border:0;border-radius:0;height:24px;box-sizing:border-box}.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]:before, .material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]:before{content:" ";display:block;position:absolute;bottom:1.65em;background:var(--select2-material-underline, #ddd);height:1px;width:100%}.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]:after, .material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]:after{content:" ";display:block;position:absolute;bottom:1.63em;background:var(--select2-material-underline-active, #5a419e);height:2px;width:0%;left:50%;transition:none}.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%], .material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__rendered[_ngcontent-%COMP%]{padding-left:1px;line-height:inherit}.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]   .select2-selection__placeholder[_ngcontent-%COMP%], .material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]   .select2-selection__placeholder[_ngcontent-%COMP%]{display:block;color:var(--select2-material-placeholder-color, rgba(0, 0, 0, .38));transition:transform .3s;position:absolute;transform-origin:0 21px;left:0;top:20px}.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-container--open[_ngcontent-%COMP%]{left:0;bottom:1.6em}.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection__placeholder__option[_ngcontent-%COMP%]{transform:translateY(-1.5em) scale(.75) perspective(100px) translateZ(.001px);width:133.33333%}.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection__arrow[_ngcontent-%COMP%]{top:20px}.material[_nghost-%COMP%]   .select2-container--default.select2-container--open[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]:after, .material[_nghost-%COMP%]   .select2-container--default.select2-container--open[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]:after, .material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-focused[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]:after, .material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-focused[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]:after{transition:width .3s cubic-bezier(.12,1,.77,1),left .3s cubic-bezier(.12,1,.77,1);width:100%;left:0%}.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-dropdown[_ngcontent-%COMP%]{border-radius:0;border:0;box-shadow:0 5px 5px #00000080}.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-results__option[aria-selected=true][_ngcontent-%COMP%], .material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-results__option--highlighted[aria-selected][_ngcontent-%COMP%]{background:var(--select2-material-option-selected-background, rgba(0, 0, 0, .04));color:var(--select2-material-option-highlighted-text-color, #000)}.material[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-results__option[aria-selected=true][_ngcontent-%COMP%]{color:var(--select2-material-option-selected-text-color, #ff5722)}.material[_nghost-%COMP%]   .select2-container--default.select2-container--disabled[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .material[_nghost-%COMP%]   .select2-container--default.select2-container--disabled[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{background:transparent}.material[_nghost-%COMP%]   .select2-container--default.select2-container--disabled[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]:before, .material[_nghost-%COMP%]   .select2-container--default.select2-container--disabled[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]:before{background:var(--select2-material-underline-disabled, linear-gradient(to right, rgba(0, 0, 0, .26) 0, rgba(0, 0, 0, .26) 33%, transparent 0));background-size:4px 1px;background-repeat:repeat-x;background-position:0 bottom}.material.ng-invalid.ng-touched[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]:before, .material.ng-invalid.ng-touched[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%]:after, .material.ng-invalid.ng-touched[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]:before, .material.ng-invalid.ng-touched[_nghost-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]:after{background:var(--select2-material-underline-invalid, red)}.material[_nghost-%COMP%]:not(.select2-container--open)   .select2-focused[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], .material[_nghost-%COMP%]:not(.select2-container--open)   .select2-focused[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{border:0}.material[_nghost-%COMP%]   .select2-subscript-wrapper[_ngcontent-%COMP%]{position:absolute;top:calc(100% - 1.72917em);font-size:75%;color:var(--select2-hint-text-color, #888)}  .select2-overlay-backdrop{background:var(--select2-overlay-backdrop, transparent)}  .cdk-overlay-container .select2-container .select2-dropdown.select2-dropdown--above{bottom:28px}  .cdk-overlay-container .select2-container--open.select2-position-auto .select2-dropdown{margin-bottom:28px}  .cdk-overlay-container .select2-container--open.select2-position-auto .select2-dropdown.select2-dropdown--above{bottom:0;margin-bottom:0;margin-top:28px}@supports (-moz-appearance: none){select2.material[_ngcontent-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--single[_ngcontent-%COMP%], select2.material[_ngcontent-%COMP%]   .select2-container--default[_ngcontent-%COMP%]   .select2-selection--multiple[_ngcontent-%COMP%]{height:26px}}']
});
var Select2 = _Select2;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Select2, [{
    type: Component,
    args: [{
      selector: "select2",
      template: `<div class="select2-label" (click)="toggleOpenAndClose()">
    <ng-content select="select2-label"></ng-content>
    @if (required) {
        <span class="select2-required"></span>
    }
</div>

<div
    class="select2 select2-container select2-container--default"
    [class.select2-container--focus]="focused"
    [class.select2-container--below]="!select2above"
    [class.select2-container--above]="select2above"
    [class.select2-container--open]="isOpen"
    [class.select2-container--disabled]="disabled"
>
    <div
        class="selection"
        #selection
        #trigger="cdkOverlayOrigin"
        [tabindex]="!this.isOpen ? tabIndex : '-1'"
        (click)="toggleOpenAndClose()"
        (focus)="focusin()"
        (blur)="focusout()"
        (keydown)="openKey($event)"
        cdkOverlayOrigin
        [class.select2-focused]="focused"
    >
        <div
            class="select2-selection"
            [class.select2-selection--multiple]="multiple"
            [class.select2-selection--single]="!multiple"
            role="combobox"
        >
            @if (!multiple) {
                <span class="select2-selection__rendered" [title]="select2Option?.label || ''">
                    @if (!select2Option) {
                        <span>&nbsp;</span>
                    }
                    @if (select2Option) {
                        @if (!hasTemplate(select2Option, 'option') || noLabelTemplate) {
                            <span [innerHTML]="select2Option.label"></span>
                        } @else {
                            <ng-container
                                *ngTemplateOutlet="getTemplate(select2Option, 'option'); context: select2Option"
                            >
                            </ng-container>
                        }
                    }
                    <span
                        [class.select2-selection__placeholder__option]="option"
                        class="select2-selection__placeholder"
                        >{{ placeholder }}</span
                    >
                </span>
            }
            @if (!multiple && resettable && resetSelectedValue !== value && select2Option && !(disabled || readonly)) {
                <span (click)="reset($event)" class="select2-selection__reset" role="presentation">×</span>
            }
            @if (!multiple) {
                <span class="select2-selection__arrow" role="presentation"> </span>
            }
            @if (multiple) {
                <ul class="select2-selection__rendered">
                    @if (!autoCreate) {
                        <span
                            [class.select2-selection__placeholder__option]="select2Options?.length > 0"
                            class="select2-selection__placeholder"
                            >{{ placeholder }}</span
                        >
                    }
                    @for (op of option || []; track trackBy($index, op)) {
                        <li
                            class="select2-selection__choice"
                            [title]="op.label"
                            tabindex="0"
                            (keydown.enter)="removeSelection($event, op)"
                        >
                            @if (!(disabled || readonly)) {
                                <span
                                    (click)="removeSelection($event, op)"
                                    class="select2-selection__choice__remove"
                                    role="presentation"
                                    >×</span
                                >
                            }
                            @if (!hasTemplate(op, 'option') || noLabelTemplate) {
                                <span [innerHTML]="op.label"></span>
                            } @else {
                                <ng-container *ngTemplateOutlet="getTemplate(op, 'option'); context: op"></ng-container>
                            }
                        </li>
                    }
                    @if (autoCreate) {
                        <li
                            class="select2-selection__auto-create"
                            (focus)="stopEvent($event)"
                            (blur)="stopEvent($event)"
                        >
                            <input
                                [id]="id + '-create-field'"
                                (click)="toggleOpenAndClose(false, true); stopEvent($event)"
                                (keydown)="keyDown($event, true)"
                                (keyup)="searchUpdate($event)"
                                (change)="prevChange($event)"
                                class="select2-create__field"
                                type="search"
                                role="textbox"
                                autocomplete="off"
                                autocorrect="off"
                                autocapitalize="off"
                                spellcheck="false"
                            />
                        </li>
                    }
                </ul>
            }
        </div>
    </div>
    @if (!overlay) {
        <ng-container *ngTemplateOutlet="containerTemplate"></ng-container>
    }

    <div class="select2-subscript-wrapper">
        <ng-content select="select2-hint"></ng-content>
    </div>
</div>

<ng-template
    cdkConnectedOverlay
    cdkConnectedOverlayHasBackdrop
    cdkConnectedOverlayBackdropClass="select2-overlay-backdrop"
    [cdkConnectedOverlayOrigin]="trigger"
    [cdkConnectedOverlayOpen]="this.isOpen && overlay"
    [cdkConnectedOverlayMinWidth]="overlayWidth"
    [cdkConnectedOverlayHeight]="overlayHeight"
    [cdkConnectedOverlayPositions]="_positions"
    (backdropClick)="toggleOpenAndClose()"
>
    <ng-container *ngTemplateOutlet="containerTemplate"></ng-container>
</ng-template>

<ng-template #containerTemplate>
    <div
        class="select2-container select2-container--default select2-container-dropdown"
        [class.select2-container--open]="isOpen"
        [class.select2-overlay]="overlay"
        [class.select2-position-auto]="listPosition === 'auto'"
    >
        <div
            #dropdown
            class="select2-dropdown"
            [class.select2-dropdown--below]="!select2above"
            [class.select2-dropdown--above]="select2above"
        >
            <div class="select2-search select2-search--dropdown" [class.select2-search--hide]="hideSearch()">
                <input
                    #searchInput
                    [id]="id + '-search-field'"
                    [value]="searchText"
                    (keydown)="keyDown($event, autoCreate)"
                    (keyup)="searchUpdate($event)"
                    (change)="prevChange($event)"
                    class="select2-search__field"
                    type="search"
                    role="textbox"
                    autocomplete="off"
                    autocorrect="off"
                    autocapitalize="off"
                    spellcheck="false"
                    [attr.tabindex]="this.isOpen ? tabIndex : '-1'"
                />
            </div>
            <div class="select2-results">
                <ul
                    #results
                    class="select2-results__options"
                    [style.max-height]="resultMaxHeight"
                    role="tree"
                    tabindex="-1"
                    infiniteScroll
                    [infiniteScrollDisabled]="!infiniteScroll && !isOpen"
                    [infiniteScrollDistance]="infiniteScrollDistance"
                    [infiniteScrollThrottle]="infiniteScrollThrottle"
                    [infiniteScrollContainer]="results"
                    (scrolled)="onScroll('down')"
                    (scrolledUp)="onScroll('up')"
                    (keydown)="keyDown($event)"
                >
                    @for (groupOrOption of filteredData; track trackBy(i, groupOrOption); let i = $index) {
                        @if (groupOrOption.options !== undefined) {
                            <li class="select2-results__option" role="group">
                                @if (!hasTemplate(groupOrOption, 'group')) {
                                    <strong
                                        [attr.class]="
                                            'select2-results__group' +
                                            (groupOrOption.classes ? ' ' + groupOrOption.classes : '')
                                        "
                                        [innerHTML]="groupOrOption.label"
                                    ></strong>
                                } @else {
                                    <ng-container
                                        *ngTemplateOutlet="getTemplate(groupOrOption, 'group'); context: groupOrOption"
                                    >
                                    </ng-container>
                                }
                                <ul class="select2-results__options select2-results__options--nested">
                                    @for (option of groupOrOption.options; track trackBy(j, option); let j = $index) {
                                        <li
                                            #result
                                            [id]="option.id || id + '-option-' + i + '-' + j"
                                            [class]="getOptionStyle(option)"
                                            role="treeitem"
                                            [attr.aria-selected]="isSelected(option)"
                                            [attr.aria-disabled]="isDisabled(option)"
                                            (mouseenter)="mouseenter(option)"
                                            (click)="click(option)"
                                        >
                                            @if (!hasTemplate(option, 'option')) {
                                                <div class="select2-label-content" [innerHTML]="option.label"></div>
                                            } @else {
                                                <ng-container
                                                    *ngTemplateOutlet="getTemplate(option, 'option'); context: option"
                                                >
                                                </ng-container>
                                            }
                                        </li>
                                    }
                                </ul>
                            </li>
                        } @else {
                            <li
                                #result
                                [id]="groupOrOption.id || id + '-option-' + i"
                                [class]="getOptionStyle(groupOrOption)"
                                role="treeitem"
                                [attr.aria-selected]="isSelected(groupOrOption)"
                                [attr.aria-disabled]="isDisabled(groupOrOption)"
                                (mouseenter)="mouseenter(groupOrOption)"
                                (click)="click(groupOrOption)"
                            >
                                @if (!hasTemplate(groupOrOption, 'option')) {
                                    <div [innerHTML]="groupOrOption.label" class="select2-label-content"></div>
                                } @else {
                                    <ng-container
                                        *ngTemplateOutlet="getTemplate(groupOrOption, 'option'); context: groupOrOption"
                                    >
                                    </ng-container>
                                }
                                <ng-template #li>
                                    <ng-container
                                        *ngTemplateOutlet="getTemplate(groupOrOption, 'option'); context: groupOrOption"
                                    >
                                    </ng-container>
                                </ng-template>
                            </li>
                        }
                    }
                    @if (!filteredData?.length && noResultMessage) {
                        <li class="select2-no-result select2-results__option" [innerHTML]="noResultMessage"></li>
                    }
                    @if (maxResultsExceeded) {
                        <li
                            class="select2-too-much-result select2-results__option"
                            [innerHTML]="maxResultsMessage"
                        ></li>
                    }
                </ul>
            </div>
        </div>
    </div>
</ng-template>
`,
      styles: ['.select2-label{color:var(--select2-label-text-color, #000)}.select2-container{box-sizing:border-box;display:inline-block;margin:0;position:relative;vertical-align:middle;width:100%}.select2-container .select2-container-dropdown{position:absolute;width:0px;opacity:0}.select2-container .select2-selection--single{box-sizing:border-box;cursor:pointer;display:block;height:var(--select2-single-height, 28px);-webkit-user-select:none;user-select:none}.select2-container .select2-selection--single .select2-selection__rendered{display:block;padding:var(--select2-selection-padding, 0 0 0 8px);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1 1 auto}.select2-container .select2-selection--single .select2-selection__clear{position:relative}.select2-container .select2-selection--multiple{box-sizing:border-box;cursor:pointer;display:block;min-height:var(--select2-multiple-height, 28px);-webkit-user-select:none;user-select:none}.select2-container .select2-selection--multiple .select2-selection__rendered{display:inline-flex;overflow:hidden;padding-left:8px;padding-bottom:2px;text-overflow:ellipsis;white-space:nowrap;flex-wrap:wrap;gap:var(--select2-selection-multiple-gap, 2px 5px)}.select2-container .select2-selection--multiple .select2-selection__rendered .select2-selection__auto-create{flex:1 1 150px;min-width:150px;display:flex}.select2-container .select2-selection--multiple .select2-selection__rendered .select2-create__field{width:100%;border:0}.select2-container .select2-selection--multiple .select2-selection__rendered .select2-create__field:focus{border:0;outline:0}.select2-container .select2-search--inline{float:left}.select2-container .select2-search--inline .select2-search__field{box-sizing:border-box;border:none;font-size:100%;margin-top:5px;padding:0}.select2-container .select2-search--inline .select2-search__field::-webkit-search-cancel-button{-webkit-appearance:none}.select2-dropdown{background:var(--select2-dropdown-background, white);border:1px solid var(--select2-dropdown-border-color, #aaa);border-radius:var(--select2-selection-border-radius, 4px);box-sizing:border-box;display:block;position:absolute;width:100%;z-index:1051;height:0;overflow:hidden}.select2-dropdown .select2-label-content{display:contents}.select2-results{display:block}.select2-results__options{list-style:none;margin:0;padding:0}.select2-results__option{padding:var(--select2-option-padding, 6px);-webkit-user-select:none;user-select:none;color:var(--select2-option-text-color, #000)}.select2-results__option[aria-selected]{cursor:pointer}.select2-container.select2-container-dropdown.select2-container--open{width:100%;opacity:1}.select2-container--open .select2-dropdown{overflow:auto;height:auto}.select2-container--open .select2-dropdown--above{border-bottom:none;border-bottom-left-radius:0;border-bottom-right-radius:0;bottom:27px;display:flex;flex-direction:column-reverse}.select2-container--open .select2-dropdown--below{border-top:none;border-top-left-radius:0;border-top-right-radius:0}.select2-search--dropdown{display:block;padding:4px}.select2-search--dropdown .select2-search__field{padding:4px;width:100%;box-sizing:border-box}.select2-search--dropdown .select2-search__field::-webkit-search-cancel-button{-webkit-appearance:none}.select2-search--dropdown.select2-search--hide{display:none}.select2-close-mask{border:0;margin:0;padding:0;display:block;position:fixed;left:0;top:0;min-height:100%;min-width:100%;height:auto;width:auto;opacity:0;z-index:99}.select2-required:before{content:"*";color:var(--select2-required-color, red)}.select2-hidden-accessible{border:0!important;clip:rect(0 0 0 0)!important;height:1px!important;margin:-1px!important;overflow:hidden!important;padding:0!important;position:absolute!important;width:1px!important}.select2-container--default .select2-selection--single{background:var(--select2-selection-background, #fff);border:1px solid var(--select2-selection-border-color, #aaa);border-radius:var(--select2-selection-border-radius, 4px);display:flex}.select2-container--default .select2-selection--single .select2-selection__rendered{color:var(--select2-selection-text-color, #111);line-height:var(--select2-selection-line-height, 28px)}.select2-container--default .select2-selection--single .select2-selection__clear{cursor:pointer;float:right;font-weight:700}.select2-container--default .select2-selection--single .select2-selection__placeholder{color:var(--select2-placeholder-color, #999)}.select2-container--default .select2-selection--single .select2-selection__placeholder span{overflow:hidden;white-space:nowrap;text-overflow:var(--select2-placeholder-overflow, ellipsis)}.select2-container--default .select2-selection--single .select2-selection__placeholder__option{display:none}.select2-container--default .select2-selection--single .select2-selection__reset,.select2-container--default .select2-selection--single .select2-selection__arrow{display:flex;width:20px;align-items:center;justify-content:center}.select2-container--default .select2-selection--single .select2-selection__arrow:before{content:" ";border-color:var(--select2-arrow-color, #888) transparent;border-style:solid;border-width:5px 4px 0;height:0;width:0}.select2-container--default .select2-selection--single .select2-selection__reset{color:var(--select2-reset-color, #999)}.select2-container--default.select2-container--disabled .select2-selection--single{background:var(--select2-selection-disabled-background, #eee);cursor:default}.select2-container--default.select2-container--disabled .select2-selection--single .select2-selection__clear{display:none}.select2-container--default.select2-container--open .select2-selection--single .select2-selection__arrow:before{border-color:transparent transparent var(--select2-arrow-color, #888);border-width:0 4px 5px}.select2-container--default .select2-selection--multiple{background:var(--select2-selection-background, #fff);border:1px solid var(--select2-selection-border-color, #aaa);border-radius:var(--select2-selection-border-radius, 4px);cursor:text;display:flex}.select2-container--default .select2-selection--multiple .select2-selection__rendered{flex:1 1 auto;box-sizing:border-box;list-style:none;margin:0;padding:var(--select2-selection-multiple-padding, 2px 5px);width:100%;min-height:1em;align-items:center}.select2-container--default .select2-selection--multiple .select2-selection__rendered li{list-style:none;line-height:var(--select2-selection-choice-line-height, 20px)}.select2-container--default .select2-selection--multiple .select2-selection__placeholder{display:block;width:100%;color:var(--select2-placeholder-color, #999);margin-top:5px;float:left;overflow:hidden;white-space:nowrap;text-overflow:var(--select2-placeholder-overflow, ellipsis)}.select2-container--default .select2-selection--multiple .select2-selection__placeholder__option{display:none}.select2-container--default .select2-selection--multiple .select2-selection__clear{cursor:pointer;float:right;font-weight:700;margin-top:5px;margin-right:10px}.select2-container--default .select2-selection--multiple .select2-selection__choice{color:var(--select2-selection-choice-text-color, #000);background:var(--select2-selection-choice-background, #e4e4e4);border:1px solid var(--select2-selection-choice-border-color, #aaa);border-radius:var(--select2-selection-border-radius, 4px);cursor:default;padding:0 5px}.select2-container--default .select2-selection--multiple .select2-selection__choice__remove{color:var(--select2-selection-choice-close-color, #999);cursor:pointer;display:inline-block;font-weight:700;margin-right:2px}.select2-container--default .select2-selection--multiple .select2-selection__choice__remove:hover{color:var(--select2-selection-choice-hover-close-color, #333)}.select2-container--default.select2-container--focused .select2-selection--multiple{border:solid var(--select2-selection-focus-border-color, #000) 1px;outline:none}.select2-container--default:not(.select2-container--open) .select2-focused .select2-selection--single,.select2-container--default:not(.select2-container--open) .select2-focused .select2-selection--multiple{border:solid var(--select2-selection-focus-border-color, #000) 1px;outline:none}.select2-container--default.select2-container--disabled .select2-selection--multiple{background:var(--select2-selection-disabled-background, #eee);cursor:default}.select2-container--default.select2-container--disabled .select2-selection__choice__remove{display:none}.select2-container--default.select2-container--open.select2-container--above .select2-selection--single,.select2-container--default.select2-container--open.select2-container--above .select2-selection--multiple{border-top-left-radius:0;border-top-right-radius:0}.select2-container--default.select2-container--open.select2-container--below .select2-selection--single,.select2-container--default.select2-container--open.select2-container--below .select2-selection--multiple{border-bottom-left-radius:0;border-bottom-right-radius:0}.select2-container--default .select2-search--dropdown .select2-search__field{border:1px solid var(--select2-search-border-color, #aaa);background:1px solid var(--select2-search-background, #fff);border-radius:var(--select2-search-border-radius, 0px)}.select2-container--default .select2-search--inline .select2-search__field{background:transparent;border:none;outline:none;box-shadow:none;-webkit-appearance:textfield}.select2-container--default .select2-results>.select2-results__options{overflow-y:auto}.select2-container--default .select2-results__option[role=group]{padding:0}.select2-container--default .select2-results__option[aria-disabled=true]{color:var(--select2-option-disabled-text-color, #999);background:var(--select2-option-disabled-background, transparent)}.select2-container--default .select2-results__option[aria-selected=true]{color:var(--select2-option-selected-text-color, #000);background:var(--select2-option-selected-background, #ddd)}.select2-container--default .select2-results__option .select2-results__option{padding-left:1em}.select2-container--default .select2-results__option .select2-results__option .select2-results__group{padding-left:0}.select2-container--default .select2-results__option .select2-results__option .select2-results__option{margin-left:-1em;padding-left:2em}.select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option{margin-left:-2em;padding-left:3em}.select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option{margin-left:-3em;padding-left:4em}.select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option{margin-left:-4em;padding-left:5em}.select2-container--default .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option .select2-results__option{margin-left:-5em;padding-left:6em}.select2-container--default .select2-results__option--highlighted[aria-selected]{background:var(--select2-option-highlighted-background, #5897fb);color:var(--select2-option-highlighted-text-color, #fff)}.select2-container--default .select2-results__option--hide{display:none}.select2-container--default .select2-results__group{cursor:default;display:block;padding:6px;color:var(--select2-option-group-text-color, gray);background:var(--select2-option-group-background, transparent)}.select2-no-result{color:var(--select2-no-result-color, #888);font-style:var(--select2-no-result-font-style, italic)}.select2-too-much-result{color:var(--select2-too-much-result-color, #888);font-style:var(--select2-too-much-font-style, italic)}:host.nostyle .select2-dropdown{border-color:transparent}:host.nostyle .select2-selection--single,:host.nostyle .select2-selection--multiple{background:transparent;border-color:transparent}:host.nostyle .select2-container--default .select2-focused .select2-selection--single,:host.nostyle .select2-container--default .select2-focused .select2-selection--multiple,:host.nostyle .select2-container--default:not(.select2-container--open) .select2-focused .select2-selection--single,:host.nostyle .select2-container--default:not(.select2-container--open) .select2-focused .select2-selection--multiple{background:transparent;border-color:transparent}:host.material{display:inline-block;width:300px}:host.material>.select2-container{padding-bottom:1.29688em;vertical-align:inherit}:host.material>.select2-container .selection{padding:.4375em 0;border-top:.84375em solid transparent;display:inline-flex;align-items:baseline;width:100%;height:auto}:host.material .select2-container--default .select2-selection--single,:host.material .select2-container--default .select2-selection--multiple{width:100%;border:0;border-radius:0;height:24px;box-sizing:border-box}:host.material .select2-container--default .select2-selection--single:before,:host.material .select2-container--default .select2-selection--multiple:before{content:" ";display:block;position:absolute;bottom:1.65em;background:var(--select2-material-underline, #ddd);height:1px;width:100%}:host.material .select2-container--default .select2-selection--single:after,:host.material .select2-container--default .select2-selection--multiple:after{content:" ";display:block;position:absolute;bottom:1.63em;background:var(--select2-material-underline-active, #5a419e);height:2px;width:0%;left:50%;transition:none}:host.material .select2-container--default .select2-selection--single .select2-selection__rendered,:host.material .select2-container--default .select2-selection--multiple .select2-selection__rendered{padding-left:1px;line-height:inherit}:host.material .select2-container--default .select2-selection--single .select2-selection__placeholder,:host.material .select2-container--default .select2-selection--multiple .select2-selection__placeholder{display:block;color:var(--select2-material-placeholder-color, rgba(0, 0, 0, .38));transition:transform .3s;position:absolute;transform-origin:0 21px;left:0;top:20px}:host.material .select2-container--default .select2-container--open{left:0;bottom:1.6em}:host.material .select2-container--default .select2-selection__placeholder__option{transform:translateY(-1.5em) scale(.75) perspective(100px) translateZ(.001px);width:133.33333%}:host.material .select2-container--default .select2-selection__arrow{top:20px}:host.material .select2-container--default.select2-container--open .select2-selection--single:after,:host.material .select2-container--default.select2-container--open .select2-selection--multiple:after,:host.material .select2-container--default .select2-focused .select2-selection--single:after,:host.material .select2-container--default .select2-focused .select2-selection--multiple:after{transition:width .3s cubic-bezier(.12,1,.77,1),left .3s cubic-bezier(.12,1,.77,1);width:100%;left:0%}:host.material .select2-container--default .select2-dropdown{border-radius:0;border:0;box-shadow:0 5px 5px #00000080}:host.material .select2-container--default .select2-results__option[aria-selected=true],:host.material .select2-container--default .select2-results__option--highlighted[aria-selected]{background:var(--select2-material-option-selected-background, rgba(0, 0, 0, .04));color:var(--select2-material-option-highlighted-text-color, #000)}:host.material .select2-container--default .select2-results__option[aria-selected=true]{color:var(--select2-material-option-selected-text-color, #ff5722)}:host.material .select2-container--default.select2-container--disabled .select2-selection--single,:host.material .select2-container--default.select2-container--disabled .select2-selection--multiple{background:transparent}:host.material .select2-container--default.select2-container--disabled .select2-selection--single:before,:host.material .select2-container--default.select2-container--disabled .select2-selection--multiple:before{background:var(--select2-material-underline-disabled, linear-gradient(to right, rgba(0, 0, 0, .26) 0, rgba(0, 0, 0, .26) 33%, transparent 0));background-size:4px 1px;background-repeat:repeat-x;background-position:0 bottom}:host.material.ng-invalid.ng-touched .select2-container--default .select2-selection--single:before,:host.material.ng-invalid.ng-touched .select2-container--default .select2-selection--single:after,:host.material.ng-invalid.ng-touched .select2-container--default .select2-selection--multiple:before,:host.material.ng-invalid.ng-touched .select2-container--default .select2-selection--multiple:after{background:var(--select2-material-underline-invalid, red)}:host.material:not(.select2-container--open) .select2-focused .select2-selection--single,:host.material:not(.select2-container--open) .select2-focused .select2-selection--multiple{border:0}:host.material .select2-subscript-wrapper{position:absolute;top:calc(100% - 1.72917em);font-size:75%;color:var(--select2-hint-text-color, #888)}::ng-deep .select2-overlay-backdrop{background:var(--select2-overlay-backdrop, transparent)}::ng-deep .cdk-overlay-container .select2-container .select2-dropdown.select2-dropdown--above{bottom:28px}::ng-deep .cdk-overlay-container .select2-container--open.select2-position-auto .select2-dropdown{margin-bottom:28px}::ng-deep .cdk-overlay-container .select2-container--open.select2-position-auto .select2-dropdown.select2-dropdown--above{bottom:0;margin-bottom:0;margin-top:28px}@supports (-moz-appearance: none){select2.material .select2-container--default .select2-selection--single,select2.material .select2-container--default .select2-selection--multiple{height:26px}}\n']
    }]
  }], () => [{
    type: ViewportRuler
  }, {
    type: ChangeDetectorRef
  }, {
    type: NgForm,
    decorators: [{
      type: Optional
    }]
  }, {
    type: FormGroupDirective,
    decorators: [{
      type: Optional
    }]
  }, {
    type: NgControl,
    decorators: [{
      type: Self
    }, {
      type: Optional
    }]
  }, {
    type: void 0,
    decorators: [{
      type: Attribute,
      args: ["tabindex"]
    }]
  }], {
    data: [{
      type: Input,
      args: [{
        required: true
      }]
    }],
    minCharForSearch: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    displaySearchStatus: [{
      type: Input
    }],
    placeholder: [{
      type: Input
    }],
    limitSelection: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    listPosition: [{
      type: Input
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    overlay: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    styleMode: [{
      type: Input
    }],
    noResultMessage: [{
      type: Input
    }],
    maxResults: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    maxResultsMessage: [{
      type: Input
    }],
    infiniteScrollDistance: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    infiniteScrollThrottle: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    infiniteScroll: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoCreate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    noLabelTemplate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    editPattern: [{
      type: Input
    }],
    templates: [{
      type: Input
    }],
    resultMaxHeight: [{
      type: Input
    }],
    customSearchEnabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    minCountForSearch: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    id: [{
      type: Input
    }, {
      type: HostBinding,
      args: ["id"]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideSelectedItems: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    resettable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    resetSelectedValue: [{
      type: Input
    }],
    update: [{
      type: Output
    }],
    autoCreateItem: [{
      type: Output
    }],
    open: [{
      type: Output
    }],
    close: [{
      type: Output
    }],
    focus: [{
      type: Output
    }],
    blur: [{
      type: Output
    }],
    search: [{
      type: Output
    }],
    scroll: [{
      type: Output
    }],
    removeOption: [{
      type: Output
    }],
    ariaInvalid: [{
      type: HostBinding,
      args: ["attr.aria-invalid"]
    }],
    classMaterial: [{
      type: HostBinding,
      args: ["class.material"]
    }],
    classNostyle: [{
      type: HostBinding,
      args: ["class.nostyle"]
    }],
    select2above: [{
      type: HostBinding,
      args: ["class.select2-above"]
    }],
    cdkConnectedOverlay: [{
      type: ViewChild,
      args: [CdkConnectedOverlay]
    }],
    selection: [{
      type: ViewChild,
      args: ["selection", {
        static: true
      }]
    }],
    resultContainer: [{
      type: ViewChild,
      args: ["results"]
    }],
    results: [{
      type: ViewChildren,
      args: ["result"]
    }],
    searchInput: [{
      type: ViewChild,
      args: ["searchInput"]
    }],
    dropdown: [{
      type: ViewChild,
      args: ["dropdown"]
    }],
    clickDetection: [{
      type: HostListener,
      args: ["document:click", ["$event"]]
    }]
  });
})();
var _Select2Hint = class _Select2Hint {
};
_Select2Hint.ɵfac = function Select2Hint_Factory(t) {
  return new (t || _Select2Hint)();
};
_Select2Hint.ɵdir = ɵɵdefineDirective({
  type: _Select2Hint,
  selectors: [["select2-hint"]]
});
var Select2Hint = _Select2Hint;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Select2Hint, [{
    type: Directive,
    args: [{
      selector: "select2-hint"
    }]
  }], null, null);
})();
var _Select2Label = class _Select2Label {
};
_Select2Label.ɵfac = function Select2Label_Factory(t) {
  return new (t || _Select2Label)();
};
_Select2Label.ɵdir = ɵɵdefineDirective({
  type: _Select2Label,
  selectors: [["select2-label"]]
});
var Select2Label = _Select2Label;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Select2Label, [{
    type: Directive,
    args: [{
      selector: "select2-label"
    }]
  }], null, null);
})();
var _Select2Module = class _Select2Module {
};
_Select2Module.ɵfac = function Select2Module_Factory(t) {
  return new (t || _Select2Module)();
};
_Select2Module.ɵmod = ɵɵdefineNgModule({
  type: _Select2Module,
  declarations: [Select2Hint, Select2Label, Select2],
  imports: [CommonModule, FormsModule, OverlayModule, ReactiveFormsModule, InfiniteScrollModule],
  exports: [FormsModule, ReactiveFormsModule, Select2Hint, Select2Label, Select2]
});
_Select2Module.ɵinj = ɵɵdefineInjector({
  imports: [CommonModule, FormsModule, OverlayModule, ReactiveFormsModule, InfiniteScrollModule, FormsModule, ReactiveFormsModule]
});
var Select2Module = _Select2Module;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Select2Module, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, FormsModule, OverlayModule, ReactiveFormsModule, InfiniteScrollModule],
      declarations: [Select2Hint, Select2Label, Select2],
      exports: [FormsModule, ReactiveFormsModule, Select2Hint, Select2Label, Select2]
    }]
  }], null, null);
})();
export {
  Select2,
  Select2Hint,
  Select2Label,
  Select2Module,
  Select2Utils,
  defaultMinCountForSearch,
  protectRegexp,
  timeout,
  unicodePatterns
};
//# sourceMappingURL=ng-select2-component.js.map
