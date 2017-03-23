/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 19);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export toArray */
/* harmony export (immutable) */ __webpack_exports__["k"] = isStatefulComponent;
/* harmony export (immutable) */ __webpack_exports__["g"] = isStringOrNumber;
/* harmony export (immutable) */ __webpack_exports__["h"] = isNullOrUndef;
/* harmony export (immutable) */ __webpack_exports__["e"] = isInvalid;
/* harmony export (immutable) */ __webpack_exports__["r"] = isFunction;
/* harmony export (immutable) */ __webpack_exports__["q"] = isAttrAnEvent;
/* harmony export (immutable) */ __webpack_exports__["j"] = isString;
/* harmony export (immutable) */ __webpack_exports__["c"] = isNumber;
/* harmony export (immutable) */ __webpack_exports__["d"] = isNull;
/* unused harmony export isTrue */
/* harmony export (immutable) */ __webpack_exports__["i"] = isUndefined;
/* harmony export (immutable) */ __webpack_exports__["p"] = isObject;
/* harmony export (immutable) */ __webpack_exports__["m"] = throwError;
/* harmony export (immutable) */ __webpack_exports__["a"] = warning;
/* harmony export (immutable) */ __webpack_exports__["l"] = combineFrom;
/* harmony export (immutable) */ __webpack_exports__["o"] = Lifecycle;
const NO_OP = '$NO_OP';
/* harmony export (immutable) */ __webpack_exports__["b"] = NO_OP;

const ERROR_MSG = 'a runtime error occured! Use Inferno in development environment to find the error.';
/* harmony export (immutable) */ __webpack_exports__["s"] = ERROR_MSG;

const isBrowser = typeof window !== 'undefined' && window.document;
/* harmony export (immutable) */ __webpack_exports__["n"] = isBrowser;

function toArray(children) {
    return isArray(children) ? children : (children ? [children] : children);
}
// this is MUCH faster than .constructor === Array and instanceof Array
// in Node 7 and the later versions of V8, slower in older versions though
const isArray = Array.isArray;
/* harmony export (immutable) */ __webpack_exports__["f"] = isArray;

function isStatefulComponent(o) {
    return !isUndefined(o.prototype) && !isUndefined(o.prototype.render);
}
function isStringOrNumber(obj) {
    const type = typeof obj;
    return type === 'string' || type === 'number';
}
function isNullOrUndef(obj) {
    return isUndefined(obj) || isNull(obj);
}
function isInvalid(obj) {
    return isNull(obj) || obj === false || isTrue(obj) || isUndefined(obj);
}
function isFunction(obj) {
    return typeof obj === 'function';
}
function isAttrAnEvent(attr) {
    return attr[0] === 'o' && attr[1] === 'n';
}
function isString(obj) {
    return typeof obj === 'string';
}
function isNumber(obj) {
    return typeof obj === 'number';
}
function isNull(obj) {
    return obj === null;
}
function isTrue(obj) {
    return obj === true;
}
function isUndefined(obj) {
    return obj === undefined;
}
function isObject(o) {
    return typeof o === 'object';
}
function throwError(message) {
    if (!message) {
        message = ERROR_MSG;
    }
    throw new Error(`Inferno Error: ${message}`);
}
function warning(message) {
    console.warn(message);
}
function combineFrom(first, second) {
    const obj = {};
    let key;
    if (first) {
        for (key in first) {
            obj[key] = first[key];
        }
    }
    if (second) {
        for (key in second) {
            obj[key] = second[key];
        }
    }
    return obj;
}
function Lifecycle() {
    this.listeners = [];
}
Lifecycle.prototype.addListener = function addListener(callback) {
    this.listeners.push(callback);
};
Lifecycle.prototype.trigger = function trigger() {
    const listeners = this.listeners;
    for (let i = 0, len = listeners.length; i < len; i++) {
        listeners[i]();
    }
};


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_shared__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_options__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_VNodes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mounting__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__patching__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rendering__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__unmounting__ = __webpack_require__(13);
/* harmony export (immutable) */ __webpack_exports__["m"] = createClassComponentInstance;
/* harmony export (immutable) */ __webpack_exports__["c"] = replaceLastChildAndUnmount;
/* harmony export (immutable) */ __webpack_exports__["b"] = replaceVNode;
/* harmony export (immutable) */ __webpack_exports__["n"] = createFunctionalComponentInput;
/* harmony export (immutable) */ __webpack_exports__["f"] = setTextContent;
/* harmony export (immutable) */ __webpack_exports__["g"] = updateTextContent;
/* harmony export (immutable) */ __webpack_exports__["j"] = appendChild;
/* harmony export (immutable) */ __webpack_exports__["k"] = insertOrAppend;
/* harmony export (immutable) */ __webpack_exports__["l"] = documentCreateElement;
/* harmony export (immutable) */ __webpack_exports__["e"] = replaceWithNewNode;
/* harmony export (immutable) */ __webpack_exports__["i"] = replaceChild;
/* harmony export (immutable) */ __webpack_exports__["o"] = removeChild;
/* harmony export (immutable) */ __webpack_exports__["d"] = removeAllChildren;
/* unused harmony export removeChildren */
/* harmony export (immutable) */ __webpack_exports__["h"] = isKeyed;








// We need EMPTY_OBJ defined in one place.
// Its used for comparison so we cant inline it into shared
const EMPTY_OBJ = {};
/* harmony export (immutable) */ __webpack_exports__["a"] = EMPTY_OBJ;

if (process.env.NODE_ENV !== 'production') {
    Object.freeze(EMPTY_OBJ);
}
function createClassComponentInstance(vNode, Component, props, context, isSVG) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["i" /* isUndefined */])(context)) {
        context = EMPTY_OBJ; // Context should not be mutable
    }
    const instance = new Component(props, context);
    instance.context = context;
    if (instance.props === EMPTY_OBJ) {
        instance.props = props;
    }
    instance._patch = __WEBPACK_IMPORTED_MODULE_5__patching__["a" /* patch */];
    if (__WEBPACK_IMPORTED_MODULE_1__core_options__["a" /* default */].findDOMNodeEnabled) {
        instance._componentToDOMNodeMap = __WEBPACK_IMPORTED_MODULE_6__rendering__["d" /* componentToDOMNodeMap */];
    }
    instance._unmounted = false;
    instance._pendingSetState = true;
    instance._isSVG = isSVG;
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["i" /* isUndefined */])(instance.componentWillMount)) {
        instance.componentWillMount();
    }
    let childContext;
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["i" /* isUndefined */])(instance.getChildContext)) {
        childContext = instance.getChildContext();
    }
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(childContext)) {
        instance._childContext = context;
    }
    else {
        instance._childContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["l" /* combineFrom */])(context, childContext);
    }
    __WEBPACK_IMPORTED_MODULE_1__core_options__["a" /* default */].beforeRender && __WEBPACK_IMPORTED_MODULE_1__core_options__["a" /* default */].beforeRender(instance);
    let input = instance.render(props, instance.state, context);
    __WEBPACK_IMPORTED_MODULE_1__core_options__["a" /* default */].afterRender && __WEBPACK_IMPORTED_MODULE_1__core_options__["a" /* default */].afterRender(instance);
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["f" /* isArray */])(input)) {
        if (process.env.NODE_ENV !== 'production') {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])();
    }
    else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["e" /* isInvalid */])(input)) {
        input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["f" /* createVoidVNode */])();
    }
    else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["g" /* isStringOrNumber */])(input)) {
        input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["c" /* createTextVNode */])(input, null);
    }
    else {
        if (input.dom) {
            input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["e" /* directClone */])(input);
        }
        if (input.flags & 28 /* Component */) {
            // if we have an input that is also a component, we run into a tricky situation
            // where the root vNode needs to always have the correct DOM entry
            // so we break monomorphism on our input and supply it our vNode as parentVNode
            // we can optimise this in the future, but this gets us out of a lot of issues
            input.parentVNode = vNode;
        }
    }
    instance._pendingSetState = false;
    instance._lastInput = input;
    return instance;
}
function replaceLastChildAndUnmount(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling) {
    replaceVNode(parentDom, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__mounting__["a" /* mount */])(nextInput, null, lifecycle, context, isSVG), lastInput, lifecycle, isRecycling);
}
function replaceVNode(parentDom, dom, vNode, lifecycle, isRecycling) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__unmounting__["a" /* unmount */])(vNode, null, lifecycle, false, isRecycling);
    replaceChild(parentDom, dom, vNode.dom);
}
function createFunctionalComponentInput(vNode, component, props, context) {
    let input = component(props, context);
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["f" /* isArray */])(input)) {
        if (process.env.NODE_ENV !== 'production') {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])();
    }
    else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["e" /* isInvalid */])(input)) {
        input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["f" /* createVoidVNode */])();
    }
    else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["g" /* isStringOrNumber */])(input)) {
        input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["c" /* createTextVNode */])(input, null);
    }
    else {
        if (input.dom) {
            input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["e" /* directClone */])(input);
        }
        if (input.flags & 28 /* Component */) {
            // if we have an input that is also a component, we run into a tricky situation
            // where the root vNode needs to always have the correct DOM entry
            // so we break monomorphism on our input and supply it our vNode as parentVNode
            // we can optimise this in the future, but this gets us out of a lot of issues
            input.parentVNode = vNode;
        }
    }
    return input;
}
function setTextContent(dom, text) {
    if (text !== '') {
        dom.textContent = text;
    }
    else {
        dom.appendChild(document.createTextNode(''));
    }
}
function updateTextContent(dom, text) {
    dom.firstChild.nodeValue = text;
}
function appendChild(parentDom, dom) {
    parentDom.appendChild(dom);
}
function insertOrAppend(parentDom, newNode, nextNode) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(nextNode)) {
        appendChild(parentDom, newNode);
    }
    else {
        parentDom.insertBefore(newNode, nextNode);
    }
}
function documentCreateElement(tag, isSVG) {
    if (isSVG === true) {
        return document.createElementNS(__WEBPACK_IMPORTED_MODULE_3__constants__["g" /* svgNS */], tag);
    }
    else {
        return document.createElement(tag);
    }
}
function replaceWithNewNode(lastNode, nextNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__unmounting__["a" /* unmount */])(lastNode, null, lifecycle, false, isRecycling);
    const dom = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__mounting__["a" /* mount */])(nextNode, null, lifecycle, context, isSVG);
    nextNode.dom = dom;
    replaceChild(parentDom, dom, lastNode.dom);
}
function replaceChild(parentDom, nextDom, lastDom) {
    if (!parentDom) {
        parentDom = lastDom.parentNode;
    }
    parentDom.replaceChild(nextDom, lastDom);
}
function removeChild(parentDom, dom) {
    parentDom.removeChild(dom);
}
function removeAllChildren(dom, children, lifecycle, isRecycling) {
    dom.textContent = '';
    if (!__WEBPACK_IMPORTED_MODULE_1__core_options__["a" /* default */].recyclingEnabled || (__WEBPACK_IMPORTED_MODULE_1__core_options__["a" /* default */].recyclingEnabled && !isRecycling)) {
        removeChildren(null, children, lifecycle, isRecycling);
    }
}
function removeChildren(dom, children, lifecycle, isRecycling) {
    for (let i = 0, len = children.length; i < len; i++) {
        const child = children[i];
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["e" /* isInvalid */])(child)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__unmounting__["a" /* unmount */])(child, dom, lifecycle, true, isRecycling);
        }
    }
}
function isKeyed(lastChildren, nextChildren) {
    return nextChildren.length && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(nextChildren[0]) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(nextChildren[0].key)
        && lastChildren.length && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(lastChildren[0]) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(lastChildren[0].key);
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    recyclingEnabled: false,
    findDOMNodeEnabled: false,
    roots: null,
    createVNode: null,
    beforeRender: null,
    afterRender: null,
    afterMount: null,
    afterUpdate: null,
    beforeUnmount: null
});


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_shared__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__normalization__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__options__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__DOM_utils__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = createVNode;
/* harmony export (immutable) */ __webpack_exports__["e"] = directClone;
/* harmony export (immutable) */ __webpack_exports__["b"] = cloneVNode;
/* harmony export (immutable) */ __webpack_exports__["f"] = createVoidVNode;
/* harmony export (immutable) */ __webpack_exports__["c"] = createTextVNode;
/* harmony export (immutable) */ __webpack_exports__["d"] = isVNode;




function createVNode(flags, type, props, children, events, key, ref, noNormalise) {
    if (flags & 16 /* ComponentUnknown */) {
        flags = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["k" /* isStatefulComponent */])(type) ? 4 /* ComponentClass */ : 8 /* ComponentFunction */;
    }
    const vNode = {
        children: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["i" /* isUndefined */])(children) ? null : children,
        dom: null,
        events: events || null,
        flags,
        key: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["i" /* isUndefined */])(key) ? null : key,
        props: props || null,
        ref: ref || null,
        type
    };
    if (!noNormalise) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__normalization__["a" /* normalize */])(vNode);
    }
    if (__WEBPACK_IMPORTED_MODULE_2__options__["a" /* default */].createVNode) {
        __WEBPACK_IMPORTED_MODULE_2__options__["a" /* default */].createVNode(vNode);
    }
    return vNode;
}
function directClone(vNodeToClone) {
    let newVNode;
    const flags = vNodeToClone.flags;
    if (flags & 28 /* Component */) {
        let props;
        const propsToClone = vNodeToClone.props;
        if (!propsToClone) {
            props = __WEBPACK_IMPORTED_MODULE_3__DOM_utils__["a" /* EMPTY_OBJ */];
        }
        else {
            props = {};
            for (let key in propsToClone) {
                props[key] = propsToClone[key];
            }
        }
        newVNode = createVNode(flags, vNodeToClone.type, props, null, vNodeToClone.events, vNodeToClone.key, vNodeToClone.ref, true);
        const newProps = newVNode.props;
        if (newProps) {
            const newChildren = newProps.children;
            // we need to also clone component children that are in props
            // as the children may also have been hoisted
            if (newChildren) {
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["f" /* isArray */])(newChildren)) {
                    const len = newChildren.length;
                    if (len > 0) {
                        const tmpArray = [];
                        for (let i = 0; i < len; i++) {
                            const child = newChildren[i];
                            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["g" /* isStringOrNumber */])(child)) {
                                tmpArray.push(child);
                            }
                            else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["e" /* isInvalid */])(child) && isVNode(child)) {
                                tmpArray.push(directClone(child));
                            }
                        }
                        newProps.children = tmpArray;
                    }
                }
                else if (isVNode(newChildren)) {
                    newProps.children = directClone(newChildren);
                }
            }
        }
        newVNode.children = null;
    }
    else if (flags & 3970 /* Element */) {
        const children = vNodeToClone.children;
        let props;
        const propsToClone = vNodeToClone.props;
        if (!propsToClone) {
            props = __WEBPACK_IMPORTED_MODULE_3__DOM_utils__["a" /* EMPTY_OBJ */];
        }
        else {
            props = {};
            for (let key in propsToClone) {
                props[key] = propsToClone[key];
            }
        }
        newVNode = createVNode(flags, vNodeToClone.type, props, children, vNodeToClone.events, vNodeToClone.key, vNodeToClone.ref, !children);
    }
    else if (flags & 1 /* Text */) {
        newVNode = createTextVNode(vNodeToClone.children, vNodeToClone.key);
    }
    return newVNode;
}
/*
 directClone is preferred over cloneVNode and used internally also.
 This function makes Inferno backwards compatible.
 And can be tree-shaked by modern bundlers

 Would be nice to combine this with directClone but could not do it without breaking change
 */
function cloneVNode(vNodeToClone, props, ..._children) {
    let children = _children;
    const childrenLen = _children.length;
    if (childrenLen > 0 && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["i" /* isUndefined */])(_children[0])) {
        if (!props) {
            props = {};
        }
        if (childrenLen === 1) {
            children = _children[0];
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["i" /* isUndefined */])(children)) {
            props.children = children;
        }
    }
    let newVNode;
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["f" /* isArray */])(vNodeToClone)) {
        const tmpArray = [];
        for (let i = 0, len = vNodeToClone.length; i < len; i++) {
            tmpArray.push(directClone(vNodeToClone[i]));
        }
        newVNode = tmpArray;
    }
    else {
        const flags = vNodeToClone.flags;
        const events = vNodeToClone.events || (props && props.events) || null;
        const key = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(vNodeToClone.key) ? vNodeToClone.key : (props ? props.key : null);
        const ref = vNodeToClone.ref || (props ? props.ref : null);
        if (flags & 28 /* Component */) {
            newVNode = createVNode(flags, vNodeToClone.type, (!vNodeToClone.props && !props) ? __WEBPACK_IMPORTED_MODULE_3__DOM_utils__["a" /* EMPTY_OBJ */] : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["l" /* combineFrom */])(vNodeToClone.props, props), null, events, key, ref, true);
            const newProps = newVNode.props;
            if (newProps) {
                const newChildren = newProps.children;
                // we need to also clone component children that are in props
                // as the children may also have been hoisted
                if (newChildren) {
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["f" /* isArray */])(newChildren)) {
                        const len = newChildren.length;
                        if (len > 0) {
                            const tmpArray = [];
                            for (let i = 0; i < len; i++) {
                                const child = newChildren[i];
                                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["g" /* isStringOrNumber */])(child)) {
                                    tmpArray.push(child);
                                }
                                else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["e" /* isInvalid */])(child) && isVNode(child)) {
                                    tmpArray.push(directClone(child));
                                }
                            }
                            newProps.children = tmpArray;
                        }
                    }
                    else if (isVNode(newChildren)) {
                        newProps.children = directClone(newChildren);
                    }
                }
            }
            newVNode.children = null;
        }
        else if (flags & 3970 /* Element */) {
            children = (props && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["i" /* isUndefined */])(props.children)) ? props.children : vNodeToClone.children;
            newVNode = createVNode(flags, vNodeToClone.type, (!vNodeToClone.props && !props) ? __WEBPACK_IMPORTED_MODULE_3__DOM_utils__["a" /* EMPTY_OBJ */] : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["l" /* combineFrom */])(vNodeToClone.props, props), children, events, key, ref, !children);
        }
        else if (flags & 1 /* Text */) {
            newVNode = createTextVNode(vNodeToClone.children, key);
        }
    }
    return newVNode;
}
function createVoidVNode() {
    return createVNode(4096 /* Void */);
}
function createTextVNode(text, key) {
    return createVNode(1 /* Text */, null, null, text, null, key);
}
function isVNode(o) {
    return !!o.flags;
}


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_shared__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_options__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_VNodes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__events_delegation__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mounting__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rendering__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__unmounting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__wrappers_processElement__ = __webpack_require__(7);
/* harmony export (immutable) */ __webpack_exports__["a"] = patch;
/* harmony export (immutable) */ __webpack_exports__["d"] = patchElement;
/* harmony export (immutable) */ __webpack_exports__["e"] = patchComponent;
/* unused harmony export patchText */
/* unused harmony export patchVoid */
/* unused harmony export patchNonKeyedChildren */
/* unused harmony export patchKeyedChildren */
/* harmony export (immutable) */ __webpack_exports__["b"] = patchProp;
/* unused harmony export patchEvents */
/* harmony export (immutable) */ __webpack_exports__["c"] = patchEvent;
/* unused harmony export patchStyle */










function patch(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    if (lastVNode !== nextVNode) {
        const lastFlags = lastVNode.flags;
        const nextFlags = nextVNode.flags;
        if (nextFlags & 28 /* Component */) {
            if (lastFlags & 28 /* Component */) {
                patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, nextFlags & 4 /* ComponentClass */, isRecycling);
            }
            else {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["b" /* replaceVNode */])(parentDom, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__mounting__["b" /* mountComponent */])(nextVNode, null, lifecycle, context, isSVG, nextFlags & 4 /* ComponentClass */), lastVNode, lifecycle, isRecycling);
            }
        }
        else if (nextFlags & 3970 /* Element */) {
            if (lastFlags & 3970 /* Element */) {
                patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
            }
            else {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["b" /* replaceVNode */])(parentDom, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__mounting__["c" /* mountElement */])(nextVNode, null, lifecycle, context, isSVG), lastVNode, lifecycle, isRecycling);
            }
        }
        else if (nextFlags & 1 /* Text */) {
            if (lastFlags & 1 /* Text */) {
                patchText(lastVNode, nextVNode);
            }
            else {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["b" /* replaceVNode */])(parentDom, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__mounting__["d" /* mountText */])(nextVNode, null), lastVNode, lifecycle, isRecycling);
            }
        }
        else if (nextFlags & 4096 /* Void */) {
            if (lastFlags & 4096 /* Void */) {
                patchVoid(lastVNode, nextVNode);
            }
            else {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["b" /* replaceVNode */])(parentDom, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__mounting__["e" /* mountVoid */])(nextVNode, null), lastVNode, lifecycle, isRecycling);
            }
        }
        else {
            // Error case: mount new one replacing old one
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["c" /* replaceLastChildAndUnmount */])(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
        }
    }
}
function unmountChildren(children, dom, lifecycle, isRecycling) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["d" /* isVNode */])(children)) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__unmounting__["a" /* unmount */])(children, dom, lifecycle, true, isRecycling);
    }
    else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["f" /* isArray */])(children)) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["d" /* removeAllChildren */])(dom, children, lifecycle, isRecycling);
    }
    else {
        dom.textContent = '';
    }
}
function patchElement(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling) {
    const nextTag = nextVNode.type;
    const lastTag = lastVNode.type;
    if (lastTag !== nextTag) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["e" /* replaceWithNewNode */])(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
    }
    else {
        const dom = lastVNode.dom;
        const lastProps = lastVNode.props;
        const nextProps = nextVNode.props;
        const lastChildren = lastVNode.children;
        const nextChildren = nextVNode.children;
        const lastFlags = lastVNode.flags;
        const nextFlags = nextVNode.flags;
        const nextRef = nextVNode.ref;
        const lastEvents = lastVNode.events;
        const nextEvents = nextVNode.events;
        nextVNode.dom = dom;
        if (isSVG || (nextFlags & 128 /* SvgElement */)) {
            isSVG = true;
        }
        if (lastChildren !== nextChildren) {
            patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
        let hasControlledValue = false;
        if (!(nextFlags & 2 /* HtmlElement */)) {
            hasControlledValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__wrappers_processElement__["a" /* default */])(nextFlags, nextVNode, dom, false);
        }
        // inlined patchProps  -- starts --
        if (lastProps !== nextProps) {
            const lastPropsOrEmpty = lastProps || __WEBPACK_IMPORTED_MODULE_6__utils__["a" /* EMPTY_OBJ */];
            const nextPropsOrEmpty = nextProps || __WEBPACK_IMPORTED_MODULE_6__utils__["a" /* EMPTY_OBJ */];
            if (nextPropsOrEmpty !== __WEBPACK_IMPORTED_MODULE_6__utils__["a" /* EMPTY_OBJ */]) {
                for (let prop in nextPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    const nextValue = nextPropsOrEmpty[prop];
                    const lastValue = lastPropsOrEmpty[prop];
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(nextValue)) {
                        removeProp(prop, nextValue, dom);
                    }
                    else {
                        patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue);
                    }
                }
            }
            if (lastPropsOrEmpty !== __WEBPACK_IMPORTED_MODULE_6__utils__["a" /* EMPTY_OBJ */]) {
                for (let prop in lastPropsOrEmpty) {
                    // do not add a hasOwnProperty check here, it affects performance
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(nextPropsOrEmpty[prop])) {
                        removeProp(prop, lastPropsOrEmpty[prop], dom);
                    }
                }
            }
        }
        // inlined patchProps  -- ends --
        if (lastEvents !== nextEvents) {
            patchEvents(lastEvents, nextEvents, dom);
        }
        if (nextRef) {
            if (lastVNode.ref !== nextRef || isRecycling) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__mounting__["f" /* mountRef */])(dom, nextRef, lifecycle);
            }
        }
    }
}
function patchChildren(lastFlags, nextFlags, lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
    let patchArray = false;
    let patchKeyed = false;
    if (nextFlags & 64 /* HasNonKeyedChildren */) {
        patchArray = true;
    }
    else if ((lastFlags & 32 /* HasKeyedChildren */) && (nextFlags & 32 /* HasKeyedChildren */)) {
        patchKeyed = true;
        patchArray = true;
    }
    else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["e" /* isInvalid */])(nextChildren)) {
        unmountChildren(lastChildren, dom, lifecycle, isRecycling);
    }
    else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["e" /* isInvalid */])(lastChildren)) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["g" /* isStringOrNumber */])(nextChildren)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["f" /* setTextContent */])(dom, nextChildren);
        }
        else {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["f" /* isArray */])(nextChildren)) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__mounting__["g" /* mountArrayChildren */])(nextChildren, dom, lifecycle, context, isSVG);
            }
            else {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__mounting__["a" /* mount */])(nextChildren, dom, lifecycle, context, isSVG);
            }
        }
    }
    else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["g" /* isStringOrNumber */])(nextChildren)) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["g" /* isStringOrNumber */])(lastChildren)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["g" /* updateTextContent */])(dom, nextChildren);
        }
        else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["f" /* setTextContent */])(dom, nextChildren);
        }
    }
    else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["f" /* isArray */])(nextChildren)) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["f" /* isArray */])(lastChildren)) {
            patchArray = true;
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["h" /* isKeyed */])(lastChildren, nextChildren)) {
                patchKeyed = true;
            }
        }
        else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__mounting__["g" /* mountArrayChildren */])(nextChildren, dom, lifecycle, context, isSVG);
        }
    }
    else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["f" /* isArray */])(lastChildren)) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["d" /* removeAllChildren */])(dom, lastChildren, lifecycle, isRecycling);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__mounting__["a" /* mount */])(nextChildren, dom, lifecycle, context, isSVG);
    }
    else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["d" /* isVNode */])(nextChildren)) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["d" /* isVNode */])(lastChildren)) {
            patch(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
        else {
            unmountChildren(lastChildren, dom, lifecycle, isRecycling);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__mounting__["a" /* mount */])(nextChildren, dom, lifecycle, context, isSVG);
        }
    }
    if (patchArray) {
        if (patchKeyed) {
            patchKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
        else {
            patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling);
        }
    }
}
function patchComponent(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isClass, isRecycling) {
    const lastType = lastVNode.type;
    const nextType = nextVNode.type;
    const lastKey = lastVNode.key;
    const nextKey = nextVNode.key;
    if (lastType !== nextType || lastKey !== nextKey) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["e" /* replaceWithNewNode */])(lastVNode, nextVNode, parentDom, lifecycle, context, isSVG, isRecycling);
        return false;
    }
    else {
        const nextProps = nextVNode.props || __WEBPACK_IMPORTED_MODULE_6__utils__["a" /* EMPTY_OBJ */];
        if (isClass) {
            const instance = lastVNode.children;
            if (instance._unmounted) {
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["d" /* isNull */])(parentDom)) {
                    return true;
                }
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["i" /* replaceChild */])(parentDom, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__mounting__["b" /* mountComponent */])(nextVNode, null, lifecycle, context, isSVG, nextVNode.flags & 4 /* ComponentClass */), lastVNode.dom);
            }
            else {
                const lastState = instance.state;
                const nextState = instance.state;
                const lastProps = instance.props;
                let childContext;
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["i" /* isUndefined */])(instance.getChildContext)) {
                    childContext = instance.getChildContext();
                }
                nextVNode.children = instance;
                instance._isSVG = isSVG;
                instance._syncSetState = false;
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(childContext)) {
                    childContext = context;
                }
                else {
                    childContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["l" /* combineFrom */])(context, childContext);
                }
                const lastInput = instance._lastInput;
                let nextInput = instance._updateComponent(lastState, nextState, lastProps, nextProps, context, false, false);
                let didUpdate = true;
                instance._childContext = childContext;
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["e" /* isInvalid */])(nextInput)) {
                    nextInput = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["f" /* createVoidVNode */])();
                }
                else if (nextInput === __WEBPACK_IMPORTED_MODULE_0_inferno_shared__["b" /* NO_OP */]) {
                    nextInput = lastInput;
                    didUpdate = false;
                }
                else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["g" /* isStringOrNumber */])(nextInput)) {
                    nextInput = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["c" /* createTextVNode */])(nextInput, null);
                }
                else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["f" /* isArray */])(nextInput)) {
                    if (process.env.NODE_ENV !== 'production') {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
                    }
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])();
                }
                else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["p" /* isObject */])(nextInput) && nextInput.dom) {
                    nextInput = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["e" /* directClone */])(nextInput);
                }
                if (nextInput.flags & 28 /* Component */) {
                    nextInput.parentVNode = nextVNode;
                }
                else if (lastInput.flags & 28 /* Component */) {
                    lastInput.parentVNode = nextVNode;
                }
                instance._lastInput = nextInput;
                instance._vNode = nextVNode;
                if (didUpdate) {
                    patch(lastInput, nextInput, parentDom, lifecycle, childContext, isSVG, isRecycling);
                    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["i" /* isUndefined */])(instance.componentDidUpdate)) {
                        instance.componentDidUpdate(lastProps, lastState);
                    }
                    __WEBPACK_IMPORTED_MODULE_1__core_options__["a" /* default */].afterUpdate && __WEBPACK_IMPORTED_MODULE_1__core_options__["a" /* default */].afterUpdate(nextVNode);
                    __WEBPACK_IMPORTED_MODULE_1__core_options__["a" /* default */].findDOMNodeEnabled && __WEBPACK_IMPORTED_MODULE_7__rendering__["d" /* componentToDOMNodeMap */].set(instance, nextInput.dom);
                }
                instance._syncSetState = true;
                nextVNode.dom = nextInput.dom;
            }
        }
        else {
            let shouldUpdate = true;
            const lastProps = lastVNode.props;
            const nextHooks = nextVNode.ref;
            const nextHooksDefined = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(nextHooks);
            const lastInput = lastVNode.children;
            let nextInput = lastInput;
            nextVNode.dom = lastVNode.dom;
            nextVNode.children = lastInput;
            if (lastKey !== nextKey) {
                shouldUpdate = true;
            }
            else {
                if (nextHooksDefined && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(nextHooks.onComponentShouldUpdate)) {
                    shouldUpdate = nextHooks.onComponentShouldUpdate(lastProps, nextProps);
                }
            }
            if (shouldUpdate !== false) {
                if (nextHooksDefined && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(nextHooks.onComponentWillUpdate)) {
                    nextHooks.onComponentWillUpdate(lastProps, nextProps);
                }
                nextInput = nextType(nextProps, context);
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["e" /* isInvalid */])(nextInput)) {
                    nextInput = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["f" /* createVoidVNode */])();
                }
                else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["g" /* isStringOrNumber */])(nextInput) && nextInput !== __WEBPACK_IMPORTED_MODULE_0_inferno_shared__["b" /* NO_OP */]) {
                    nextInput = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["c" /* createTextVNode */])(nextInput, null);
                }
                else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["f" /* isArray */])(nextInput)) {
                    if (process.env.NODE_ENV !== 'production') {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
                    }
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])();
                }
                else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["p" /* isObject */])(nextInput) && nextInput.dom) {
                    nextInput = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["e" /* directClone */])(nextInput);
                }
                if (nextInput !== __WEBPACK_IMPORTED_MODULE_0_inferno_shared__["b" /* NO_OP */]) {
                    patch(lastInput, nextInput, parentDom, lifecycle, context, isSVG, isRecycling);
                    nextVNode.children = nextInput;
                    if (nextHooksDefined && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(nextHooks.onComponentDidUpdate)) {
                        nextHooks.onComponentDidUpdate(lastProps, nextProps);
                    }
                    nextVNode.dom = nextInput.dom;
                }
            }
            if (nextInput.flags & 28 /* Component */) {
                nextInput.parentVNode = nextVNode;
            }
            else if (lastInput.flags & 28 /* Component */) {
                lastInput.parentVNode = nextVNode;
            }
        }
    }
    return false;
}
function patchText(lastVNode, nextVNode) {
    const nextText = nextVNode.children;
    const dom = lastVNode.dom;
    nextVNode.dom = dom;
    if (lastVNode.children !== nextText) {
        dom.nodeValue = nextText;
    }
}
function patchVoid(lastVNode, nextVNode) {
    nextVNode.dom = lastVNode.dom;
}
function patchNonKeyedChildren(lastChildren, nextChildren, dom, lifecycle, context, isSVG, isRecycling) {
    const lastChildrenLength = lastChildren.length;
    const nextChildrenLength = nextChildren.length;
    const commonLength = lastChildrenLength > nextChildrenLength ? nextChildrenLength : lastChildrenLength;
    let i = 0;
    for (; i < commonLength; i++) {
        let nextChild = nextChildren[i];
        if (nextChild.dom) {
            nextChild = nextChildren[i] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["e" /* directClone */])(nextChild);
        }
        patch(lastChildren[i], nextChild, dom, lifecycle, context, isSVG, isRecycling);
    }
    if (lastChildrenLength < nextChildrenLength) {
        for (i = commonLength; i < nextChildrenLength; i++) {
            let nextChild = nextChildren[i];
            if (nextChild.dom) {
                nextChild = nextChildren[i] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["e" /* directClone */])(nextChild);
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["j" /* appendChild */])(dom, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__mounting__["a" /* mount */])(nextChild, null, lifecycle, context, isSVG));
        }
    }
    else if (nextChildrenLength === 0) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["d" /* removeAllChildren */])(dom, lastChildren, lifecycle, isRecycling);
    }
    else if (lastChildrenLength > nextChildrenLength) {
        for (i = commonLength; i < lastChildrenLength; i++) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__unmounting__["a" /* unmount */])(lastChildren[i], dom, lifecycle, false, isRecycling);
        }
    }
}
function patchKeyedChildren(a, b, dom, lifecycle, context, isSVG, isRecycling) {
    let aLength = a.length;
    let bLength = b.length;
    let aEnd = aLength - 1;
    let bEnd = bLength - 1;
    let aStart = 0;
    let bStart = 0;
    let i;
    let j;
    let aNode;
    let bNode;
    let nextNode;
    let nextPos;
    let node;
    if (aLength === 0) {
        if (bLength !== 0) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__mounting__["g" /* mountArrayChildren */])(b, dom, lifecycle, context, isSVG);
        }
        return;
    }
    else if (bLength === 0) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["d" /* removeAllChildren */])(dom, a, lifecycle, isRecycling);
        return;
    }
    let aStartNode = a[aStart];
    let bStartNode = b[bStart];
    let aEndNode = a[aEnd];
    let bEndNode = b[bEnd];
    if (bStartNode.dom) {
        b[bStart] = bStartNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["e" /* directClone */])(bStartNode);
    }
    if (bEndNode.dom) {
        b[bEnd] = bEndNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["e" /* directClone */])(bEndNode);
    }
    // Step 1
    /* eslint no-constant-condition: 0 */
    outer: while (true) {
        // Sync nodes with the same key at the beginning.
        while (aStartNode.key === bStartNode.key) {
            patch(aStartNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
            aStart++;
            bStart++;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aStartNode = a[aStart];
            bStartNode = b[bStart];
            if (bStartNode.dom) {
                b[bStart] = bStartNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["e" /* directClone */])(bStartNode);
            }
        }
        // Sync nodes with the same key at the end.
        while (aEndNode.key === bEndNode.key) {
            patch(aEndNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
            aEnd--;
            bEnd--;
            if (aStart > aEnd || bStart > bEnd) {
                break outer;
            }
            aEndNode = a[aEnd];
            bEndNode = b[bEnd];
            if (bEndNode.dom) {
                b[bEnd] = bEndNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["e" /* directClone */])(bEndNode);
            }
        }
        // Move and sync nodes from right to left.
        if (aEndNode.key === bStartNode.key) {
            patch(aEndNode, bStartNode, dom, lifecycle, context, isSVG, isRecycling);
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["k" /* insertOrAppend */])(dom, bStartNode.dom, aStartNode.dom);
            aEnd--;
            bStart++;
            aEndNode = a[aEnd];
            bStartNode = b[bStart];
            if (bStartNode.dom) {
                b[bStart] = bStartNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["e" /* directClone */])(bStartNode);
            }
            continue;
        }
        // Move and sync nodes from left to right.
        if (aStartNode.key === bEndNode.key) {
            patch(aStartNode, bEndNode, dom, lifecycle, context, isSVG, isRecycling);
            nextPos = bEnd + 1;
            nextNode = nextPos < b.length ? b[nextPos].dom : null;
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["k" /* insertOrAppend */])(dom, bEndNode.dom, nextNode);
            aStart++;
            bEnd--;
            aStartNode = a[aStart];
            bEndNode = b[bEnd];
            if (bEndNode.dom) {
                b[bEnd] = bEndNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["e" /* directClone */])(bEndNode);
            }
            continue;
        }
        break;
    }
    if (aStart > aEnd) {
        if (bStart <= bEnd) {
            nextPos = bEnd + 1;
            nextNode = nextPos < b.length ? b[nextPos].dom : null;
            while (bStart <= bEnd) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["e" /* directClone */])(node);
                }
                bStart++;
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["k" /* insertOrAppend */])(dom, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__mounting__["a" /* mount */])(node, null, lifecycle, context, isSVG), nextNode);
            }
        }
    }
    else if (bStart > bEnd) {
        while (aStart <= aEnd) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__unmounting__["a" /* unmount */])(a[aStart++], dom, lifecycle, false, isRecycling);
        }
    }
    else {
        aLength = aEnd - aStart + 1;
        bLength = bEnd - bStart + 1;
        const sources = new Array(bLength);
        // Mark all nodes as inserted.
        for (i = 0; i < bLength; i++) {
            sources[i] = -1;
        }
        let moved = false;
        let pos = 0;
        let patched = 0;
        // When sizes are small, just loop them through
        if ((bLength <= 4) || (aLength * bLength <= 16)) {
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLength) {
                    for (j = bStart; j <= bEnd; j++) {
                        bNode = b[j];
                        if (aNode.key === bNode.key) {
                            sources[j - bStart] = i;
                            if (pos > j) {
                                moved = true;
                            }
                            else {
                                pos = j;
                            }
                            if (bNode.dom) {
                                b[j] = bNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["e" /* directClone */])(bNode);
                            }
                            patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                            patched++;
                            a[i] = null;
                            break;
                        }
                    }
                }
            }
        }
        else {
            const keyIndex = new Map();
            // Map keys by their index in array
            for (i = bStart; i <= bEnd; i++) {
                keyIndex.set(b[i].key, i);
            }
            // Try to patch same keys
            for (i = aStart; i <= aEnd; i++) {
                aNode = a[i];
                if (patched < bLength) {
                    j = keyIndex.get(aNode.key);
                    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["i" /* isUndefined */])(j)) {
                        bNode = b[j];
                        sources[j - bStart] = i;
                        if (pos > j) {
                            moved = true;
                        }
                        else {
                            pos = j;
                        }
                        if (bNode.dom) {
                            b[j] = bNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["e" /* directClone */])(bNode);
                        }
                        patch(aNode, bNode, dom, lifecycle, context, isSVG, isRecycling);
                        patched++;
                        a[i] = null;
                    }
                }
            }
        }
        // fast-path: if nothing patched remove all old and add all new
        if (aLength === a.length && patched === 0) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["d" /* removeAllChildren */])(dom, a, lifecycle, isRecycling);
            while (bStart < bLength) {
                node = b[bStart];
                if (node.dom) {
                    b[bStart] = node = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["e" /* directClone */])(node);
                }
                bStart++;
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["k" /* insertOrAppend */])(dom, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__mounting__["a" /* mount */])(node, null, lifecycle, context, isSVG), null);
            }
        }
        else {
            i = aLength - patched;
            while (i > 0) {
                aNode = a[aStart++];
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["d" /* isNull */])(aNode)) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__unmounting__["a" /* unmount */])(aNode, dom, lifecycle, true, isRecycling);
                    i--;
                }
            }
            if (moved) {
                const seq = lis_algorithm(sources);
                j = seq.length - 1;
                for (i = bLength - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["e" /* directClone */])(node);
                        }
                        nextPos = pos + 1;
                        nextNode = nextPos < b.length ? b[nextPos].dom : null;
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["k" /* insertOrAppend */])(dom, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__mounting__["a" /* mount */])(node, dom, lifecycle, context, isSVG), nextNode);
                    }
                    else {
                        if (j < 0 || i !== seq[j]) {
                            pos = i + bStart;
                            node = b[pos];
                            nextPos = pos + 1;
                            nextNode = nextPos < b.length ? b[nextPos].dom : null;
                            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["k" /* insertOrAppend */])(dom, node.dom, nextNode);
                        }
                        else {
                            j--;
                        }
                    }
                }
            }
            else if (patched !== bLength) {
                // when patched count doesn't match b length we need to insert those new ones
                // loop backwards so we can use insertBefore
                for (i = bLength - 1; i >= 0; i--) {
                    if (sources[i] === -1) {
                        pos = i + bStart;
                        node = b[pos];
                        if (node.dom) {
                            b[pos] = node = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["e" /* directClone */])(node);
                        }
                        nextPos = pos + 1;
                        nextNode = nextPos < b.length ? b[nextPos].dom : null;
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["k" /* insertOrAppend */])(dom, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__mounting__["a" /* mount */])(node, null, lifecycle, context, isSVG), nextNode);
                    }
                }
            }
        }
    }
}
// // https://en.wikipedia.org/wiki/Longest_increasing_subsequence
function lis_algorithm(arr) {
    const p = arr.slice(0);
    const result = [0];
    let i;
    let j;
    let u;
    let v;
    let c;
    const len = arr.length;
    for (i = 0; i < len; i++) {
        let arrI = arr[i];
        if (arrI === -1) {
            continue;
        }
        j = result[result.length - 1];
        if (arr[j] < arrI) {
            p[i] = j;
            result.push(i);
            continue;
        }
        u = 0;
        v = result.length - 1;
        while (u < v) {
            c = ((u + v) / 2) | 0;
            if (arr[result[c]] < arrI) {
                u = c + 1;
            }
            else {
                v = c;
            }
        }
        if (arrI < arr[result[u]]) {
            if (u > 0) {
                p[i] = result[u - 1];
            }
            result[u] = i;
        }
    }
    u = result.length;
    v = result[u - 1];
    while (u-- > 0) {
        result[u] = v;
        v = p[v];
    }
    return result;
}
function patchProp(prop, lastValue, nextValue, dom, isSVG, hasControlledValue) {
    if (prop in __WEBPACK_IMPORTED_MODULE_3__constants__["a" /* skipProps */] || (hasControlledValue && prop === 'value')) {
        return;
    }
    else if (prop in __WEBPACK_IMPORTED_MODULE_3__constants__["b" /* booleanProps */]) {
        prop = prop === 'autoFocus' ? prop.toLowerCase() : prop;
        dom[prop] = !!nextValue;
    }
    else if (prop in __WEBPACK_IMPORTED_MODULE_3__constants__["c" /* strictProps */]) {
        const value = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(nextValue) ? '' : nextValue;
        if (dom[prop] !== value) {
            dom[prop] = value;
        }
    }
    else if (lastValue !== nextValue) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["q" /* isAttrAnEvent */])(prop)) {
            patchEvent(prop, lastValue, nextValue, dom);
        }
        else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(nextValue)) {
            dom.removeAttribute(prop);
        }
        else if (prop === 'className') {
            if (isSVG) {
                dom.setAttribute('class', nextValue);
            }
            else {
                dom.className = nextValue;
            }
        }
        else if (prop === 'style') {
            patchStyle(lastValue, nextValue, dom);
        }
        else if (prop === 'dangerouslySetInnerHTML') {
            const lastHtml = lastValue && lastValue.__html;
            const nextHtml = nextValue && nextValue.__html;
            if (lastHtml !== nextHtml) {
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(nextHtml)) {
                    dom.innerHTML = nextHtml;
                }
            }
        }
        else {
            const ns = isSVG ? __WEBPACK_IMPORTED_MODULE_3__constants__["d" /* namespaces */][prop] : false;
            if (ns) {
                dom.setAttributeNS(ns, prop, nextValue);
            }
            else {
                dom.setAttribute(prop, nextValue);
            }
        }
    }
}
function patchEvents(lastEvents, nextEvents, dom) {
    lastEvents = lastEvents || __WEBPACK_IMPORTED_MODULE_6__utils__["a" /* EMPTY_OBJ */];
    nextEvents = nextEvents || __WEBPACK_IMPORTED_MODULE_6__utils__["a" /* EMPTY_OBJ */];
    if (nextEvents !== __WEBPACK_IMPORTED_MODULE_6__utils__["a" /* EMPTY_OBJ */]) {
        for (let name in nextEvents) {
            // do not add a hasOwnProperty check here, it affects performance
            patchEvent(name, lastEvents[name], nextEvents[name], dom);
        }
    }
    if (lastEvents !== __WEBPACK_IMPORTED_MODULE_6__utils__["a" /* EMPTY_OBJ */]) {
        for (let name in lastEvents) {
            // do not add a hasOwnProperty check here, it affects performance
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(nextEvents[name])) {
                patchEvent(name, lastEvents[name], null, dom);
            }
        }
    }
}
function patchEvent(name, lastValue, nextValue, dom) {
    if (lastValue !== nextValue) {
        const nameLowerCase = name.toLowerCase();
        const domEvent = dom[nameLowerCase];
        // if the function is wrapped, that means it's been controlled by a wrapper
        if (domEvent && domEvent.wrapped) {
            return;
        }
        if (__WEBPACK_IMPORTED_MODULE_3__constants__["e" /* delegatedProps */][name]) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__events_delegation__["a" /* handleEvent */])(name, lastValue, nextValue, dom);
        }
        else {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["r" /* isFunction */])(nextValue) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(nextValue)) {
                const linkEvent = nextValue.event;
                if (linkEvent && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["r" /* isFunction */])(linkEvent)) {
                    if (!dom._data) {
                        dom[nameLowerCase] = function (e) {
                            linkEvent(e.currentTarget._data, e);
                        };
                    }
                    dom._data = nextValue.data;
                }
                else {
                    if (process.env.NODE_ENV !== 'production') {
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])(`an event on a VNode "${name}". was not a function or a valid linkEvent.`);
                    }
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])();
                }
            }
            else {
                dom[nameLowerCase] = nextValue;
            }
        }
    }
}
// We are assuming here that we come from patchProp routine
// -nextAttrValue cannot be null or undefined
function patchStyle(lastAttrValue, nextAttrValue, dom) {
    const domStyle = dom.style;
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["j" /* isString */])(nextAttrValue)) {
        domStyle.cssText = nextAttrValue;
        return;
    }
    for (const style in nextAttrValue) {
        // do not add a hasOwnProperty check here, it affects performance
        const value = nextAttrValue[style];
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["c" /* isNumber */])(value) || style in __WEBPACK_IMPORTED_MODULE_3__constants__["f" /* isUnitlessNumber */]) {
            domStyle[style] = value;
        }
        else {
            domStyle[style] = value + 'px';
        }
    }
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(lastAttrValue)) {
        for (let style in lastAttrValue) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(nextAttrValue[style])) {
                domStyle[style] = '';
            }
        }
    }
}
function removeProp(prop, lastValue, dom) {
    if (prop === 'className') {
        dom.removeAttribute('class');
    }
    else if (prop === 'value') {
        dom.value = '';
    }
    else if (prop === 'style') {
        dom.removeAttribute('style');
    }
    else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["q" /* isAttrAnEvent */])(prop)) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__events_delegation__["a" /* handleEvent */])(name, lastValue, null, dom);
    }
    else {
        dom.removeAttribute(prop);
    }
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_shared__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_options__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_VNodes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hydration__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mounting__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__patching__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__unmounting__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["b"] = findDOMNode;
/* harmony export (immutable) */ __webpack_exports__["a"] = render;
/* harmony export (immutable) */ __webpack_exports__["c"] = createRenderer;








// rather than use a Map, like we did before, we can use an array here
// given there shouldn't be THAT many roots on the page, the difference
// in performance is huge: https://esbench.com/bench/5802a691330ab09900a1a2da
const roots = [];
/* unused harmony export roots */

const componentToDOMNodeMap = new Map();
/* harmony export (immutable) */ __webpack_exports__["d"] = componentToDOMNodeMap;

__WEBPACK_IMPORTED_MODULE_1__core_options__["a" /* default */].roots = roots;
function findDOMNode(ref) {
    if (!__WEBPACK_IMPORTED_MODULE_1__core_options__["a" /* default */].findDOMNodeEnabled) {
        if (process.env.NODE_ENV !== 'production') {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])('findDOMNode() has been disabled, use Inferno.options.findDOMNodeEnabled = true; enabled findDOMNode(). Warning this can significantly impact performance!');
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])();
    }
    const dom = ref && ref.nodeType ? ref : null;
    return componentToDOMNodeMap.get(ref) || dom;
}
function getRoot(dom) {
    for (let i = 0, len = roots.length; i < len; i++) {
        const root = roots[i];
        if (root.dom === dom) {
            return root;
        }
    }
    return null;
}
function setRoot(dom, input, lifecycle) {
    const root = {
        dom,
        input,
        lifecycle
    };
    roots.push(root);
    return root;
}
function removeRoot(root) {
    for (let i = 0, len = roots.length; i < len; i++) {
        if (roots[i] === root) {
            roots.splice(i, 1);
            return;
        }
    }
}
if (process.env.NODE_ENV !== 'production') {
    if (__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["n" /* isBrowser */] && document.body === null) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["a" /* warning */])('Inferno warning: you cannot initialize inferno without "document.body". Wait on "DOMContentLoaded" event, add script to bottom of body, or use async/defer attributes on script tag.');
    }
}
const documentBody = __WEBPACK_IMPORTED_MODULE_0_inferno_shared__["n" /* isBrowser */] ? document.body : null;
function render(input, parentDom) {
    if (documentBody === parentDom) {
        if (process.env.NODE_ENV !== 'production') {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])('you cannot render() to the "document.body". Use an empty element as a container instead.');
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])();
    }
    if (input === __WEBPACK_IMPORTED_MODULE_0_inferno_shared__["b" /* NO_OP */]) {
        return;
    }
    let root = getRoot(parentDom);
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["d" /* isNull */])(root)) {
        const lifecycle = new __WEBPACK_IMPORTED_MODULE_0_inferno_shared__["o" /* Lifecycle */]();
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["e" /* isInvalid */])(input)) {
            if (input.dom) {
                input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["e" /* directClone */])(input);
            }
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__hydration__["a" /* default */])(input, parentDom, lifecycle)) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__mounting__["a" /* mount */])(input, parentDom, lifecycle, __WEBPACK_IMPORTED_MODULE_7__utils__["a" /* EMPTY_OBJ */], false);
            }
            root = setRoot(parentDom, input, lifecycle);
            lifecycle.trigger();
        }
    }
    else {
        const lifecycle = root.lifecycle;
        lifecycle.listeners = [];
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(input)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__unmounting__["a" /* unmount */])(root.input, parentDom, lifecycle, false, false);
            removeRoot(root);
        }
        else {
            if (input.dom) {
                input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["e" /* directClone */])(input);
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__patching__["a" /* patch */])(root.input, input, parentDom, lifecycle, __WEBPACK_IMPORTED_MODULE_7__utils__["a" /* EMPTY_OBJ */], false, false);
        }
        lifecycle.trigger();
        root.input = input;
    }
    if (root) {
        const rootInput = root.input;
        if (rootInput && (rootInput.flags & 28 /* Component */)) {
            return rootInput.children;
        }
    }
}
function createRenderer(parentDom) {
    return function renderer(lastInput, nextInput) {
        if (!parentDom) {
            parentDom = lastInput;
        }
        render(nextInput, parentDom);
    };
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__InputWrapper__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__SelectWrapper__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TextareaWrapper__ = __webpack_require__(27);
/* harmony export (immutable) */ __webpack_exports__["a"] = processElement;



const wrappers = new Map();
/* harmony export (immutable) */ __webpack_exports__["b"] = wrappers;

function processElement(flags, vNode, dom, mounting) {
    if (flags & 512 /* InputElement */) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__InputWrapper__["a" /* processInput */])(vNode, dom);
    }
    if (flags & 2048 /* SelectElement */) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__SelectWrapper__["a" /* processSelect */])(vNode, dom, mounting);
    }
    if (flags & 1024 /* TextareaElement */) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__TextareaWrapper__["a" /* processTextarea */])(vNode, dom, mounting);
    }
    return false;
}


/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_shared__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = createElement;


const componentHooks = {
    onComponentWillMount: true,
    onComponentDidMount: true,
    onComponentWillUnmount: true,
    onComponentShouldUpdate: true,
    onComponentWillUpdate: true,
    onComponentDidUpdate: true
};
function createElement(name, props, ..._children) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["e" /* isInvalid */])(name) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["p" /* isObject */])(name)) {
        throw new Error('Inferno Error: createElement() name parameter cannot be undefined, null, false or true, It must be a string, class or function.');
    }
    let children = _children;
    let ref = null;
    let key = null;
    let events = null;
    let flags = 0;
    if (_children) {
        if (_children.length === 1) {
            children = _children[0];
        }
        else if (_children.length === 0) {
            children = undefined;
        }
    }
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["j" /* isString */])(name)) {
        switch (name) {
            case 'svg':
                flags = 128 /* SvgElement */;
                break;
            case 'input':
                flags = 512 /* InputElement */;
                break;
            case 'textarea':
                flags = 1024 /* TextareaElement */;
                break;
            case 'select':
                flags = 2048 /* SelectElement */;
                break;
            default:
                flags = 2 /* HtmlElement */;
                break;
        }
        /*
         This fixes de-optimisation:
         uses object Keys for looping props to avoid deleting props of looped object
         */
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["h" /* isNullOrUndef */])(props)) {
            const propKeys = Object.keys(props);
            for (let i = 0, len = propKeys.length; i < len; i++) {
                const propKey = propKeys[i];
                if (propKey === 'key') {
                    key = props.key;
                    delete props.key;
                }
                else if (propKey === 'children' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["i" /* isUndefined */])(children)) {
                    children = props.children; // always favour children args, default to props
                }
                else if (propKey === 'ref') {
                    ref = props.ref;
                }
                else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["q" /* isAttrAnEvent */])(propKey)) {
                    if (!events) {
                        events = {};
                    }
                    events[propKey] = props[propKey];
                    delete props[propKey];
                }
            }
        }
    }
    else {
        flags = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["k" /* isStatefulComponent */])(name) ? 4 /* ComponentClass */ : 8 /* ComponentFunction */;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["i" /* isUndefined */])(children)) {
            if (!props) {
                props = {};
            }
            props.children = children;
            children = null;
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["h" /* isNullOrUndef */])(props)) {
            /*
             This fixes de-optimisation:
             uses object Keys for looping props to avoid deleting props of looped object
             */
            const propKeys = Object.keys(props);
            for (let i = 0, len = propKeys.length; i < len; i++) {
                const propKey = propKeys[i];
                if (componentHooks[propKey]) {
                    if (!ref) {
                        ref = {};
                    }
                    ref[propKey] = props[propKey];
                }
                else if (propKey === 'key') {
                    key = props.key;
                    delete props.key;
                }
            }
        }
    }
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createVNode */])(flags, name, props, children, events, key, ref);
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const xlinkNS = 'http://www.w3.org/1999/xlink';
/* unused harmony export xlinkNS */

const xmlNS = 'http://www.w3.org/XML/1998/namespace';
/* unused harmony export xmlNS */

const svgNS = 'http://www.w3.org/2000/svg';
/* harmony export (immutable) */ __webpack_exports__["g"] = svgNS;

const TRUE = true;
const strictProps = Object.create(null);
/* harmony export (immutable) */ __webpack_exports__["c"] = strictProps;

strictProps.volume = TRUE;
strictProps.defaultChecked = TRUE;
Object.freeze(strictProps);
const booleanProps = Object.create(null);
/* harmony export (immutable) */ __webpack_exports__["b"] = booleanProps;

booleanProps.muted = TRUE;
booleanProps.scoped = TRUE;
booleanProps.loop = TRUE;
booleanProps.open = TRUE;
booleanProps.checked = TRUE;
booleanProps.default = TRUE;
booleanProps.capture = TRUE;
booleanProps.disabled = TRUE;
booleanProps.readOnly = TRUE;
booleanProps.required = TRUE;
booleanProps.autoplay = TRUE;
booleanProps.controls = TRUE;
booleanProps.seamless = TRUE;
booleanProps.reversed = TRUE;
booleanProps.allowfullscreen = TRUE;
booleanProps.novalidate = TRUE;
booleanProps.hidden = TRUE;
booleanProps.autoFocus = TRUE;
Object.freeze(booleanProps);
const namespaces = Object.create(null);
/* harmony export (immutable) */ __webpack_exports__["d"] = namespaces;

namespaces['xlink:href'] = xlinkNS;
namespaces['xlink:arcrole'] = xlinkNS;
namespaces['xlink:actuate'] = xlinkNS;
namespaces['xlink:show'] = xlinkNS;
namespaces['xlink:role'] = xlinkNS;
namespaces['xlink:title'] = xlinkNS;
namespaces['xlink:type'] = xlinkNS;
namespaces['xml:base'] = xmlNS;
namespaces['xml:lang'] = xmlNS;
namespaces['xml:space'] = xmlNS;
Object.freeze(namespaces);
const isUnitlessNumber = Object.create(null);
/* harmony export (immutable) */ __webpack_exports__["f"] = isUnitlessNumber;

isUnitlessNumber.animationIterationCount = TRUE;
isUnitlessNumber.borderImageOutset = TRUE;
isUnitlessNumber.borderImageSlice = TRUE;
isUnitlessNumber.borderImageWidth = TRUE;
isUnitlessNumber.boxFlex = TRUE;
isUnitlessNumber.boxFlexGroup = TRUE;
isUnitlessNumber.boxOrdinalGroup = TRUE;
isUnitlessNumber.columnCount = TRUE;
isUnitlessNumber.flex = TRUE;
isUnitlessNumber.flexGrow = TRUE;
isUnitlessNumber.flexPositive = TRUE;
isUnitlessNumber.flexShrink = TRUE;
isUnitlessNumber.flexNegative = TRUE;
isUnitlessNumber.flexOrder = TRUE;
isUnitlessNumber.gridRow = TRUE;
isUnitlessNumber.gridColumn = TRUE;
isUnitlessNumber.fontWeight = TRUE;
isUnitlessNumber.lineClamp = TRUE;
isUnitlessNumber.lineHeight = TRUE;
isUnitlessNumber.opacity = TRUE;
isUnitlessNumber.order = TRUE;
isUnitlessNumber.orphans = TRUE;
isUnitlessNumber.tabSize = TRUE;
isUnitlessNumber.widows = TRUE;
isUnitlessNumber.zIndex = TRUE;
isUnitlessNumber.zoom = TRUE;
isUnitlessNumber.fillOpacity = TRUE;
isUnitlessNumber.floodOpacity = TRUE;
isUnitlessNumber.stopOpacity = TRUE;
isUnitlessNumber.strokeDasharray = TRUE;
isUnitlessNumber.strokeDashoffset = TRUE;
isUnitlessNumber.strokeMiterlimit = TRUE;
isUnitlessNumber.strokeOpacity = TRUE;
isUnitlessNumber.strokeWidth = TRUE;
Object.freeze(isUnitlessNumber);
const skipProps = Object.create(null);
/* harmony export (immutable) */ __webpack_exports__["a"] = skipProps;

skipProps.children = TRUE;
skipProps.childrenType = TRUE;
skipProps.defaultValue = TRUE;
skipProps.ref = TRUE;
skipProps.key = TRUE;
skipProps.selected = TRUE;
skipProps.checked = TRUE;
skipProps.multiple = TRUE;
Object.freeze(skipProps);
const delegatedProps = Object.create(null);
/* harmony export (immutable) */ __webpack_exports__["e"] = delegatedProps;

delegatedProps.onClick = TRUE;
delegatedProps.onMouseDown = TRUE;
delegatedProps.onMouseUp = TRUE;
delegatedProps.onMouseMove = TRUE;
delegatedProps.onSubmit = TRUE;
delegatedProps.onDblClick = TRUE;
delegatedProps.onKeyDown = TRUE;
delegatedProps.onKeyUp = TRUE;
delegatedProps.onKeyPress = TRUE;
Object.freeze(delegatedProps);


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_shared__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_options__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_VNodes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__patching__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recycling__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rendering__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wrappers_processElement__ = __webpack_require__(7);
/* harmony export (immutable) */ __webpack_exports__["a"] = mount;
/* harmony export (immutable) */ __webpack_exports__["d"] = mountText;
/* harmony export (immutable) */ __webpack_exports__["e"] = mountVoid;
/* harmony export (immutable) */ __webpack_exports__["c"] = mountElement;
/* harmony export (immutable) */ __webpack_exports__["g"] = mountArrayChildren;
/* harmony export (immutable) */ __webpack_exports__["b"] = mountComponent;
/* harmony export (immutable) */ __webpack_exports__["h"] = mountClassComponentCallbacks;
/* harmony export (immutable) */ __webpack_exports__["i"] = mountFunctionalComponentCallbacks;
/* harmony export (immutable) */ __webpack_exports__["f"] = mountRef;








function mount(vNode, parentDom, lifecycle, context, isSVG) {
    const flags = vNode.flags;
    if (flags & 3970 /* Element */) {
        return mountElement(vNode, parentDom, lifecycle, context, isSVG);
    }
    else if (flags & 28 /* Component */) {
        return mountComponent(vNode, parentDom, lifecycle, context, isSVG, flags & 4 /* ComponentClass */);
    }
    else if (flags & 4096 /* Void */) {
        return mountVoid(vNode, parentDom);
    }
    else if (flags & 1 /* Text */) {
        return mountText(vNode, parentDom);
    }
    else {
        if (process.env.NODE_ENV !== 'production') {
            if (typeof vNode === 'object') {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])(`mount() received an object that's not a valid VNode, you should stringify it first. Object: "${JSON.stringify(vNode)}".`);
            }
            else {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])(`mount() expects a valid VNode, instead it received an object with the type "${typeof vNode}".`);
            }
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])();
    }
}
function mountText(vNode, parentDom) {
    const dom = document.createTextNode(vNode.children);
    vNode.dom = dom;
    if (parentDom) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["j" /* appendChild */])(parentDom, dom);
    }
    return dom;
}
function mountVoid(vNode, parentDom) {
    const dom = document.createTextNode('');
    vNode.dom = dom;
    if (parentDom) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["j" /* appendChild */])(parentDom, dom);
    }
    return dom;
}
function mountElement(vNode, parentDom, lifecycle, context, isSVG) {
    if (__WEBPACK_IMPORTED_MODULE_1__core_options__["a" /* default */].recyclingEnabled) {
        const dom = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__recycling__["a" /* recycleElement */])(vNode, lifecycle, context, isSVG);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["d" /* isNull */])(dom)) {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["d" /* isNull */])(parentDom)) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["j" /* appendChild */])(parentDom, dom);
            }
            return dom;
        }
    }
    const flags = vNode.flags;
    if (isSVG || (flags & 128 /* SvgElement */)) {
        isSVG = true;
    }
    const dom = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["l" /* documentCreateElement */])(vNode.type, isSVG);
    const children = vNode.children;
    const props = vNode.props;
    const events = vNode.events;
    const ref = vNode.ref;
    vNode.dom = dom;
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["e" /* isInvalid */])(children)) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["g" /* isStringOrNumber */])(children)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["f" /* setTextContent */])(dom, children);
        }
        else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["f" /* isArray */])(children)) {
            mountArrayChildren(children, dom, lifecycle, context, isSVG);
        }
        else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["d" /* isVNode */])(children)) {
            mount(children, dom, lifecycle, context, isSVG);
        }
    }
    let hasControlledValue = false;
    if (!(flags & 2 /* HtmlElement */)) {
        hasControlledValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__wrappers_processElement__["a" /* default */])(flags, vNode, dom, true);
    }
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["d" /* isNull */])(props)) {
        for (let prop in props) {
            // do not add a hasOwnProperty check here, it affects performance
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__patching__["b" /* patchProp */])(prop, null, props[prop], dom, isSVG, hasControlledValue);
        }
    }
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["d" /* isNull */])(events)) {
        for (let name in events) {
            // do not add a hasOwnProperty check here, it affects performance
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__patching__["c" /* patchEvent */])(name, null, events[name], dom);
        }
    }
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["d" /* isNull */])(ref)) {
        mountRef(dom, ref, lifecycle);
    }
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["d" /* isNull */])(parentDom)) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["j" /* appendChild */])(parentDom, dom);
    }
    return dom;
}
function mountArrayChildren(children, dom, lifecycle, context, isSVG) {
    for (let i = 0, len = children.length; i < len; i++) {
        let child = children[i];
        // Verify can string/number be here. might cause de-opt. - Normalization takes care of it.
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["e" /* isInvalid */])(child)) {
            if (child.dom) {
                children[i] = child = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__core_VNodes__["e" /* directClone */])(child);
            }
            mount(children[i], dom, lifecycle, context, isSVG);
        }
    }
}
function mountComponent(vNode, parentDom, lifecycle, context, isSVG, isClass) {
    if (__WEBPACK_IMPORTED_MODULE_1__core_options__["a" /* default */].recyclingEnabled) {
        const dom = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__recycling__["b" /* recycleComponent */])(vNode, lifecycle, context, isSVG);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["d" /* isNull */])(dom)) {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["d" /* isNull */])(parentDom)) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["j" /* appendChild */])(parentDom, dom);
            }
            return dom;
        }
    }
    const type = vNode.type;
    const props = vNode.props || __WEBPACK_IMPORTED_MODULE_6__utils__["a" /* EMPTY_OBJ */];
    const ref = vNode.ref;
    let dom;
    if (isClass) {
        const instance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["m" /* createClassComponentInstance */])(vNode, type, props, context, isSVG);
        const input = instance._lastInput;
        instance._vNode = vNode;
        vNode.dom = dom = mount(input, null, lifecycle, instance._childContext, isSVG);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["d" /* isNull */])(parentDom)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["j" /* appendChild */])(parentDom, dom);
        }
        mountClassComponentCallbacks(vNode, ref, instance, lifecycle);
        __WEBPACK_IMPORTED_MODULE_1__core_options__["a" /* default */].findDOMNodeEnabled && __WEBPACK_IMPORTED_MODULE_5__rendering__["d" /* componentToDOMNodeMap */].set(instance, dom);
        vNode.children = instance;
    }
    else {
        const input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["n" /* createFunctionalComponentInput */])(vNode, type, props, context);
        vNode.dom = dom = mount(input, null, lifecycle, context, isSVG);
        vNode.children = input;
        mountFunctionalComponentCallbacks(ref, dom, lifecycle);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["d" /* isNull */])(parentDom)) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["j" /* appendChild */])(parentDom, dom);
        }
    }
    return dom;
}
function mountClassComponentCallbacks(vNode, ref, instance, lifecycle) {
    if (ref) {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["r" /* isFunction */])(ref)) {
            ref(instance);
        }
        else {
            if (process.env.NODE_ENV !== 'production') {
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["g" /* isStringOrNumber */])(ref)) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
                }
                else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["p" /* isObject */])(ref) && (vNode.flags & 4 /* ComponentClass */)) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])('functional component lifecycle events are not supported on ES2015 class components.');
                }
                else {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])(`a bad value for "ref" was used on component: "${JSON.stringify(ref)}"`);
                }
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])();
        }
    }
    const cDM = instance.componentDidMount;
    const afterMount = __WEBPACK_IMPORTED_MODULE_1__core_options__["a" /* default */].afterMount;
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["i" /* isUndefined */])(cDM) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["d" /* isNull */])(afterMount)) {
        lifecycle.addListener(() => {
            afterMount && afterMount(vNode);
            cDM && instance.componentDidMount();
            instance._syncSetState = true;
        });
    }
    else {
        instance._syncSetState = true;
    }
}
function mountFunctionalComponentCallbacks(ref, dom, lifecycle) {
    if (ref) {
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(ref.onComponentWillMount)) {
            ref.onComponentWillMount();
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(ref.onComponentDidMount)) {
            lifecycle.addListener(() => ref.onComponentDidMount(dom));
        }
    }
}
function mountRef(dom, value, lifecycle) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["r" /* isFunction */])(value)) {
        lifecycle.addListener(() => value(dom));
    }
    else {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["e" /* isInvalid */])(value)) {
            return;
        }
        if (process.env.NODE_ENV !== 'production') {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])();
    }
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_shared__ = __webpack_require__(0);
// Make sure u use EMPTY_OBJ from 'inferno', otherwise it'll be a different reference


let noOp = __WEBPACK_IMPORTED_MODULE_1_inferno_shared__["s" /* ERROR_MSG */];
if (process.env.NODE_ENV !== 'production') {
    noOp = 'Inferno Error: Can only update a mounted or mounting component. This usually means you called setState() or forceUpdate() on an unmounted component. This is a no-op.';
}
const componentCallbackQueue = new Map();
// when a components root VNode is also a component, we can run into issues
// this will recursively look for vNode.parentNode if the VNode is a component
function updateParentComponentVNodes(vNode, dom) {
    if (vNode.flags & 28 /* Component */) {
        const parentVNode = vNode.parentVNode;
        if (parentVNode) {
            parentVNode.dom = dom;
            updateParentComponentVNodes(parentVNode, dom);
        }
    }
}
const resolvedPromise = Promise.resolve();
function addToQueue(component, force, callback) {
    // TODO this function needs to be revised and improved on
    let queue = componentCallbackQueue.get(component);
    if (!queue) {
        queue = [];
        componentCallbackQueue.set(component, queue);
        resolvedPromise.then(() => {
            componentCallbackQueue.delete(component);
            applyState(component, force, () => {
                for (let i = 0, len = queue.length; i < len; i++) {
                    queue[i]();
                }
            });
        });
    }
    if (callback) {
        queue.push(callback);
    }
}
function queueStateChanges(component, newState, callback, sync) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["r" /* isFunction */])(newState)) {
        newState = newState(component.state, component.props, component.context);
    }
    for (let stateKey in newState) {
        component._pendingState[stateKey] = newState[stateKey];
    }
    if (!component._pendingSetState && __WEBPACK_IMPORTED_MODULE_1_inferno_shared__["n" /* isBrowser */] && !(sync && component._blockRender)) {
        if (sync || component._blockRender) {
            component._pendingSetState = true;
            applyState(component, false, callback);
        }
        else {
            addToQueue(component, false, callback);
        }
    }
    else {
        const pending = component._pendingState;
        const state = component.state;
        for (const key in pending) {
            state[key] = pending[key];
        }
        component._pendingState = {};
    }
}
function applyState(component, force, callback) {
    if ((!component._deferSetState || force) && !component._blockRender && !component._unmounted) {
        component._pendingSetState = false;
        const pendingState = component._pendingState;
        const prevState = component.state;
        const nextState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["l" /* combineFrom */])(prevState, pendingState);
        const props = component.props;
        const context = component.context;
        component._pendingState = {};
        let nextInput = component._updateComponent(prevState, nextState, props, props, context, force, true);
        let didUpdate = true;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["e" /* isInvalid */])(nextInput)) {
            nextInput = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createVNode */])(4096 /* Void */);
        }
        else if (nextInput === __WEBPACK_IMPORTED_MODULE_1_inferno_shared__["b" /* NO_OP */]) {
            nextInput = component._lastInput;
            didUpdate = false;
        }
        else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["g" /* isStringOrNumber */])(nextInput)) {
            nextInput = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["b" /* createVNode */])(1 /* Text */, null, null, nextInput);
        }
        else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["f" /* isArray */])(nextInput)) {
            if (process.env.NODE_ENV !== 'production') {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["m" /* throwError */])('a valid Inferno VNode (or null) must be returned from a component render. You may have returned an array or an invalid object.');
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["m" /* throwError */])();
        }
        const lastInput = component._lastInput;
        const vNode = component._vNode;
        const parentDom = (lastInput.dom && lastInput.dom.parentNode) || (lastInput.dom = vNode.dom);
        component._lastInput = nextInput;
        if (didUpdate) {
            let childContext, subLifecycle = component._lifecycle;
            if (!subLifecycle) {
                subLifecycle = new __WEBPACK_IMPORTED_MODULE_1_inferno_shared__["o" /* Lifecycle */]();
            }
            else {
                subLifecycle.listeners = [];
            }
            component._lifecycle = subLifecycle;
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["i" /* isUndefined */])(component.getChildContext)) {
                childContext = component.getChildContext();
            }
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["h" /* isNullOrUndef */])(childContext)) {
                childContext = component._childContext;
            }
            else {
                childContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["l" /* combineFrom */])(context, childContext);
            }
            component._patch(lastInput, nextInput, parentDom, subLifecycle, childContext, component._isSVG, false);
            subLifecycle.trigger();
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["i" /* isUndefined */])(component.componentDidUpdate)) {
                component.componentDidUpdate(props, prevState, context);
            }
            __WEBPACK_IMPORTED_MODULE_0_inferno__["c" /* options */].afterUpdate && __WEBPACK_IMPORTED_MODULE_0_inferno__["c" /* options */].afterUpdate(vNode);
        }
        const dom = vNode.dom = nextInput.dom;
        const componentToDOMNodeMap = component._componentToDOMNodeMap;
        componentToDOMNodeMap && componentToDOMNodeMap.set(component, nextInput.dom);
        updateParentComponentVNodes(vNode, dom);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["h" /* isNullOrUndef */])(callback)) {
            callback();
        }
    }
    else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["h" /* isNullOrUndef */])(callback)) {
        if (component._blockRender) {
            component.state = component._pendingState;
            component._pendingState = {};
        }
        callback();
    }
}
class Component {
    constructor(props, context) {
        this.state = {};
        this._blockRender = false;
        this._ignoreSetState = false;
        this._blockSetState = false;
        this._deferSetState = false;
        this._pendingSetState = false;
        this._syncSetState = true;
        this._pendingState = {};
        this._lastInput = null;
        this._vNode = null;
        this._unmounted = false;
        this._lifecycle = null;
        this._childContext = null;
        this._patch = null;
        this._isSVG = false;
        this._componentToDOMNodeMap = null;
        /** @type {object} */
        this.props = props || __WEBPACK_IMPORTED_MODULE_0_inferno__["d" /* EMPTY_OBJ */];
        /** @type {object} */
        this.context = context || __WEBPACK_IMPORTED_MODULE_0_inferno__["d" /* EMPTY_OBJ */]; // context should not be mutable
    }
    render(nextProps, nextState, nextContext) { }
    forceUpdate(callback) {
        if (this._unmounted) {
            return;
        }
        __WEBPACK_IMPORTED_MODULE_1_inferno_shared__["n" /* isBrowser */] && applyState(this, true, callback);
    }
    setState(newState, callback) {
        if (this._unmounted) {
            return;
        }
        if (!this._blockSetState) {
            if (!this._ignoreSetState) {
                queueStateChanges(this, newState, callback, callback ? false : this._syncSetState);
            }
        }
        else {
            if (process.env.NODE_ENV !== 'production') {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["m" /* throwError */])('cannot update state via setState() in componentWillUpdate().');
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["m" /* throwError */])();
        }
    }
    setStateSync(newState) {
        if (this._unmounted) {
            return;
        }
        if (!this._blockSetState) {
            if (!this._ignoreSetState) {
                queueStateChanges(this, newState, null, true);
            }
        }
        else {
            if (process.env.NODE_ENV !== 'production') {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["m" /* throwError */])('cannot update state via setState() in componentWillUpdate().');
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["m" /* throwError */])();
        }
    }
    _updateComponent(prevState, nextState, prevProps, nextProps, context, force, fromSetState) {
        if (this._unmounted === true) {
            if (process.env.NODE_ENV !== 'production') {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["m" /* throwError */])(noOp);
            }
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["m" /* throwError */])();
        }
        if ((prevProps !== nextProps || nextProps === __WEBPACK_IMPORTED_MODULE_0_inferno__["d" /* EMPTY_OBJ */]) || prevState !== nextState || force) {
            if (prevProps !== nextProps || nextProps === __WEBPACK_IMPORTED_MODULE_0_inferno__["d" /* EMPTY_OBJ */]) {
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["i" /* isUndefined */])(this.componentWillReceiveProps) && !fromSetState) {
                    this._blockRender = true;
                    this.componentWillReceiveProps(nextProps, context);
                    this._blockRender = false;
                }
                if (this._pendingSetState) {
                    nextState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["l" /* combineFrom */])(nextState, this._pendingState);
                    this._pendingSetState = false;
                    this._pendingState = {};
                }
            }
            /* Update if scu is not defined, or it returns truthy value or force */
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["i" /* isUndefined */])(this.shouldComponentUpdate) || this.shouldComponentUpdate(nextProps, nextState, context) || force) {
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_shared__["i" /* isUndefined */])(this.componentWillUpdate)) {
                    this._blockSetState = true;
                    this.componentWillUpdate(nextProps, nextState, context);
                    this._blockSetState = false;
                }
                this.props = nextProps;
                this.state = nextState;
                this.context = context;
                __WEBPACK_IMPORTED_MODULE_0_inferno__["c" /* options */].beforeRender && __WEBPACK_IMPORTED_MODULE_0_inferno__["c" /* options */].beforeRender(this);
                const render = this.render(nextProps, nextState, context);
                __WEBPACK_IMPORTED_MODULE_0_inferno__["c" /* options */].afterRender && __WEBPACK_IMPORTED_MODULE_0_inferno__["c" /* options */].afterRender(this);
                return render;
            }
            else {
                this.props = nextProps;
                this.state = nextState;
                this.context = context;
            }
        }
        return __WEBPACK_IMPORTED_MODULE_1_inferno_shared__["b" /* NO_OP */];
    }
}
/* harmony export (immutable) */ __webpack_exports__["a"] = Component;


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_shared__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_VNodes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DOM_events_linkEvent__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__core_options__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DOM_rendering__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DOM_utils__ = __webpack_require__(1);
/* unused harmony reexport linkEvent */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__core_VNodes__["a"]; });
/* unused harmony reexport cloneVNode */
/* unused harmony reexport NO_OP */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__DOM_utils__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_4__DOM_rendering__["a"]; });
/* unused harmony reexport findDOMNode */
/* unused harmony reexport createRenderer */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_3__core_options__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DOM_constants__ = __webpack_require__(9);
/* unused harmony reexport internal_isUnitlessNumber */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__core_normalization__ = __webpack_require__(15);
/* unused harmony reexport internal_normalize */






if (process.env.NODE_ENV !== 'production') {
    const testFunc = function testFn() { };
    if ((testFunc.name || testFunc.toString()).indexOf('testFn') === -1) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["a" /* warning */])(('It looks like you\'re using a minified copy of the development build ' +
            'of Inferno. When deploying Inferno apps to production, make sure to use ' +
            'the production build which skips development warnings and is faster. ' +
            'See http://infernojs.org for more details.'));
    }
}
// This will be replaced by rollup
const version = 'VERSION';
/* unused harmony export version */

// we duplicate it so it plays nicely with different module loading systems
/* unused harmony default export */ var _unused_webpack_default_export = ({
    linkEvent: __WEBPACK_IMPORTED_MODULE_2__DOM_events_linkEvent__["a" /* default */],
    // core shapes
    createVNode: __WEBPACK_IMPORTED_MODULE_1__core_VNodes__["a" /* createVNode */],
    // cloning
    cloneVNode: __WEBPACK_IMPORTED_MODULE_1__core_VNodes__["b" /* cloneVNode */],
    // used to shared common items between Inferno libs
    NO_OP: __WEBPACK_IMPORTED_MODULE_0_inferno_shared__["b" /* NO_OP */],
    EMPTY_OBJ: __WEBPACK_IMPORTED_MODULE_5__DOM_utils__["a" /* EMPTY_OBJ */],
    // DOM
    render: __WEBPACK_IMPORTED_MODULE_4__DOM_rendering__["a" /* render */],
    findDOMNode: __WEBPACK_IMPORTED_MODULE_4__DOM_rendering__["b" /* findDOMNode */],
    createRenderer: __WEBPACK_IMPORTED_MODULE_4__DOM_rendering__["c" /* createRenderer */],
    options: __WEBPACK_IMPORTED_MODULE_3__core_options__["a" /* default */],
    version
});

// Internal stuff that only core inferno-* packages use

// Mainly for testing


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_shared__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_options__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__patching__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__recycling__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rendering__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = unmount;
/* unused harmony export unmountComponent */
/* unused harmony export unmountElement */






function unmount(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    const flags = vNode.flags;
    if (flags & 28 /* Component */) {
        unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling);
    }
    else if (flags & 3970 /* Element */) {
        unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling);
    }
    else if (flags & (1 /* Text */ | 4096 /* Void */)) {
        unmountVoidOrText(vNode, parentDom);
    }
}
function unmountVoidOrText(vNode, parentDom) {
    if (parentDom) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["o" /* removeChild */])(parentDom, vNode.dom);
    }
}
function unmountComponent(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    const instance = vNode.children;
    const flags = vNode.flags;
    const isStatefulComponent = flags & 4 /* ComponentClass */;
    const ref = vNode.ref;
    const dom = vNode.dom;
    if (!isRecycling) {
        if (isStatefulComponent) {
            if (!instance._unmounted) {
                instance._ignoreSetState = true;
                __WEBPACK_IMPORTED_MODULE_1__core_options__["a" /* default */].beforeUnmount && __WEBPACK_IMPORTED_MODULE_1__core_options__["a" /* default */].beforeUnmount(vNode);
                instance.componentWillUnmount && instance.componentWillUnmount();
                if (ref && !isRecycling) {
                    ref(null);
                }
                instance._unmounted = true;
                __WEBPACK_IMPORTED_MODULE_1__core_options__["a" /* default */].findDOMNodeEnabled && __WEBPACK_IMPORTED_MODULE_4__rendering__["d" /* componentToDOMNodeMap */].delete(instance);
                unmount(instance._lastInput, null, instance._lifecycle, false, isRecycling);
            }
        }
        else {
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(ref)) {
                if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(ref.onComponentWillUnmount)) {
                    ref.onComponentWillUnmount(dom);
                }
            }
            unmount(instance, null, lifecycle, false, isRecycling);
        }
    }
    if (parentDom) {
        let lastInput = instance._lastInput;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(lastInput)) {
            lastInput = instance;
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["o" /* removeChild */])(parentDom, dom);
    }
    if (__WEBPACK_IMPORTED_MODULE_1__core_options__["a" /* default */].recyclingEnabled && !isStatefulComponent && (parentDom || canRecycle)) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__recycling__["c" /* poolComponent */])(vNode);
    }
}
function unmountElement(vNode, parentDom, lifecycle, canRecycle, isRecycling) {
    const dom = vNode.dom;
    const ref = vNode.ref;
    const events = vNode.events;
    if (ref && !isRecycling) {
        unmountRef(ref);
    }
    const children = vNode.children;
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(children)) {
        unmountChildren(children, lifecycle, isRecycling);
    }
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["d" /* isNull */])(events)) {
        for (let name in events) {
            // do not add a hasOwnProperty check here, it affects performance
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__patching__["c" /* patchEvent */])(name, events[name], null, dom);
            events[name] = null;
        }
    }
    if (parentDom) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils__["o" /* removeChild */])(parentDom, dom);
    }
    if (__WEBPACK_IMPORTED_MODULE_1__core_options__["a" /* default */].recyclingEnabled && (parentDom || canRecycle)) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__recycling__["d" /* poolElement */])(vNode);
    }
}
function unmountChildren(children, lifecycle, isRecycling) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["f" /* isArray */])(children)) {
        for (let i = 0, len = children.length; i < len; i++) {
            const child = children[i];
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["e" /* isInvalid */])(child) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["p" /* isObject */])(child)) {
                unmount(child, null, lifecycle, false, isRecycling);
            }
        }
    }
    else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["p" /* isObject */])(children)) {
        unmount(children, null, lifecycle, false, isRecycling);
    }
}
function unmountRef(ref) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["r" /* isFunction */])(ref)) {
        ref(null);
    }
    else {
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["e" /* isInvalid */])(ref)) {
            return;
        }
        if (process.env.NODE_ENV !== 'production') {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])('string "refs" are not supported in Inferno 1.0. Use callback "refs" instead.');
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])();
    }
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_shared__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__patching__ = __webpack_require__(5);
/* harmony export (immutable) */ __webpack_exports__["a"] = recycleElement;
/* harmony export (immutable) */ __webpack_exports__["d"] = poolElement;
/* harmony export (immutable) */ __webpack_exports__["b"] = recycleComponent;
/* harmony export (immutable) */ __webpack_exports__["c"] = poolComponent;


const componentPools = new Map();
const elementPools = new Map();
function recycleElement(vNode, lifecycle, context, isSVG) {
    const tag = vNode.type;
    const pools = elementPools.get(tag);
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["i" /* isUndefined */])(pools)) {
        const key = vNode.key;
        const pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["i" /* isUndefined */])(pool)) {
            const recycledVNode = pool.pop();
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["i" /* isUndefined */])(recycledVNode)) {
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__patching__["d" /* patchElement */])(recycledVNode, vNode, null, lifecycle, context, isSVG, true);
                return vNode.dom;
            }
        }
    }
    return null;
}
function poolElement(vNode) {
    const tag = vNode.type;
    const key = vNode.key;
    let pools = elementPools.get(tag);
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["i" /* isUndefined */])(pools)) {
        pools = {
            nonKeyed: [],
            keyed: new Map()
        };
        elementPools.set(tag, pools);
    }
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["d" /* isNull */])(key)) {
        pools.nonKeyed.push(vNode);
    }
    else {
        let pool = pools.keyed.get(key);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["i" /* isUndefined */])(pool)) {
            pool = [];
            pools.keyed.set(key, pool);
        }
        pool.push(vNode);
    }
}
function recycleComponent(vNode, lifecycle, context, isSVG) {
    const type = vNode.type;
    const pools = componentPools.get(type);
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["i" /* isUndefined */])(pools)) {
        const key = vNode.key;
        const pool = key === null ? pools.nonKeyed : pools.keyed.get(key);
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["i" /* isUndefined */])(pool)) {
            const recycledVNode = pool.pop();
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["i" /* isUndefined */])(recycledVNode)) {
                const flags = vNode.flags;
                const failed = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__patching__["e" /* patchComponent */])(recycledVNode, vNode, null, lifecycle, context, isSVG, flags & 4 /* ComponentClass */, true);
                if (!failed) {
                    return vNode.dom;
                }
            }
        }
    }
    return null;
}
function poolComponent(vNode) {
    const hooks = vNode.ref;
    const nonRecycleHooks = hooks && (hooks.onComponentWillMount ||
        hooks.onComponentWillUnmount ||
        hooks.onComponentDidMount ||
        hooks.onComponentWillUpdate ||
        hooks.onComponentDidUpdate);
    if (nonRecycleHooks) {
        return;
    }
    const type = vNode.type;
    const key = vNode.key;
    let pools = componentPools.get(type);
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["i" /* isUndefined */])(pools)) {
        pools = {
            nonKeyed: [],
            keyed: new Map()
        };
        componentPools.set(type, pools);
    }
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["d" /* isNull */])(key)) {
        pools.nonKeyed.push(vNode);
    }
    else {
        let pool = pools.keyed.get(key);
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["i" /* isUndefined */])(pool)) {
            pool = [];
            pools.keyed.set(key, pool);
        }
        pool.push(vNode);
    }
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_shared__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VNodes__ = __webpack_require__(4);
/* unused harmony export normalizeVNodes */
/* harmony export (immutable) */ __webpack_exports__["a"] = normalize;


function applyKey(key, vNode) {
    vNode.key = key;
    return vNode;
}
function applyKeyIfMissing(key, vNode) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["c" /* isNumber */])(key)) {
        key = `.${key}`;
    }
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["d" /* isNull */])(vNode.key) || vNode.key[0] === '.') {
        return applyKey(key, vNode);
    }
    return vNode;
}
function applyKeyPrefix(key, vNode) {
    vNode.key = key + vNode.key;
    return vNode;
}
function _normalizeVNodes(nodes, result, index, currentKey) {
    for (let len = nodes.length; index < len; index++) {
        let n = nodes[index];
        const key = `${currentKey}.${index}`;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["e" /* isInvalid */])(n)) {
            if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["f" /* isArray */])(n)) {
                _normalizeVNodes(n, result, 0, key);
            }
            else {
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["g" /* isStringOrNumber */])(n)) {
                    n = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__VNodes__["c" /* createTextVNode */])(n, null);
                }
                else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__VNodes__["d" /* isVNode */])(n) && n.dom || (n.key && n.key[0] === '.')) {
                    n = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__VNodes__["e" /* directClone */])(n);
                }
                if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["d" /* isNull */])(n.key) || n.key[0] === '.') {
                    n = applyKey(key, n);
                }
                else {
                    n = applyKeyPrefix(currentKey, n);
                }
                result.push(n);
            }
        }
    }
}
function normalizeVNodes(nodes) {
    let newNodes;
    // we assign $ which basically means we've flagged this array for future note
    // if it comes back again, we need to clone it, as people are using it
    // in an immutable way
    // tslint:disable
    if (nodes['$']) {
        nodes = nodes.slice();
    }
    else {
        nodes['$'] = true;
    }
    // tslint:enable
    for (let i = 0, len = nodes.length; i < len; i++) {
        const n = nodes[i];
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["e" /* isInvalid */])(n) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["f" /* isArray */])(n)) {
            const result = (newNodes || nodes).slice(0, i);
            _normalizeVNodes(nodes, result, i, ``);
            return result;
        }
        else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["g" /* isStringOrNumber */])(n)) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(applyKeyIfMissing(i, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__VNodes__["c" /* createTextVNode */])(n, null)));
        }
        else if ((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__VNodes__["d" /* isVNode */])(n) && n.dom) || (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["d" /* isNull */])(n.key) && !(n.flags & 64 /* HasNonKeyedChildren */))) {
            if (!newNodes) {
                newNodes = nodes.slice(0, i);
            }
            newNodes.push(applyKeyIfMissing(i, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__VNodes__["e" /* directClone */])(n)));
        }
        else if (newNodes) {
            newNodes.push(applyKeyIfMissing(i, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__VNodes__["e" /* directClone */])(n)));
        }
    }
    return newNodes || nodes;
}
function normalizeChildren(children) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["f" /* isArray */])(children)) {
        return normalizeVNodes(children);
    }
    else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__VNodes__["d" /* isVNode */])(children) && children.dom) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__VNodes__["e" /* directClone */])(children);
    }
    return children;
}
function normalizeProps(vNode, props, children) {
    if (!(vNode.flags & 28 /* Component */) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(children) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(props.children)) {
        vNode.children = props.children;
    }
    if (props.ref) {
        vNode.ref = props.ref;
        delete props.ref;
    }
    if (props.events) {
        vNode.events = props.events;
    }
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(props.key)) {
        vNode.key = props.key;
        delete props.key;
    }
}
function normalizeElement(type, vNode) {
    if (type === 'svg') {
        vNode.flags = 128 /* SvgElement */;
    }
    else if (type === 'input') {
        vNode.flags = 512 /* InputElement */;
    }
    else if (type === 'select') {
        vNode.flags = 2048 /* SelectElement */;
    }
    else if (type === 'textarea') {
        vNode.flags = 1024 /* TextareaElement */;
    }
    else if (type === 'media') {
        vNode.flags = 256 /* MediaElement */;
    }
    else {
        vNode.flags = 2 /* HtmlElement */;
    }
}
function normalize(vNode) {
    let props = vNode.props;
    let children = vNode.children;
    // convert a wrongly created type back to element
    // Primitive node doesn't have defaultProps, only Component
    if (vNode.flags & 28 /* Component */) {
        // set default props
        const type = vNode.type;
        const defaultProps = type.defaultProps;
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(defaultProps)) {
            if (!props) {
                props = vNode.props = defaultProps; // Create new object if only defaultProps given
            }
            else {
                for (let prop in defaultProps) {
                    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["i" /* isUndefined */])(props[prop])) {
                        props[prop] = defaultProps[prop];
                    }
                }
            }
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["j" /* isString */])(type)) {
            normalizeElement(type, vNode);
            if (props && props.children) {
                vNode.children = props.children;
                children = props.children;
            }
        }
    }
    if (props) {
        normalizeProps(vNode, props, children);
    }
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["e" /* isInvalid */])(children)) {
        vNode.children = normalizeChildren(children);
    }
    if (props && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["e" /* isInvalid */])(props.children)) {
        props.children = normalizeChildren(props.children);
    }
    if (process.env.NODE_ENV !== 'production') {
        // This code will be stripped out from production CODE
        // It will help users to track errors in their applications.
        const verifyKeys = function (vNodes) {
            const keyValues = vNodes.map(function (vnode) { return vnode.key; });
            keyValues.some(function (item, idx) {
                const hasDuplicate = keyValues.indexOf(item) !== idx;
                if (hasDuplicate) {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["a" /* warning */])('Inferno normalisation(...): Encountered two children with same key, all keys must be unique within its siblings. Duplicated key is:' + item);
                }
                return hasDuplicate;
            });
        };
        if (vNode.children && Array.isArray(vNode.children)) {
            verifyKeys(vNode.children);
        }
    }
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const compose = (...funcs) => {
    if (funcs.length === 0) {
        return arg => arg;
    }

    if (funcs.length === 1) {
        return funcs[0];
    }

    return funcs.reduce((a, b) => (...args) => a(b(...args)));
};

/* harmony default export */ __webpack_exports__["a"] = (compose);

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__withPropsOnChange_js__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_js__ = __webpack_require__(20);




const withCalendar = () => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__withPropsOnChange_js__["a" /* default */])(['year', 'month'], props => {
    const prevYear = props.month === 0 ? props.year - 1 : props.year;
    const nextYear = props.month === 11 ? props.year + 1 : props.year;
    const prevMonth = props.month === 0 ? 11 : props.month - 1;
    const nextMonth = props.month === 11 ? 0 : props.month + 1;
    const prevDaysCount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["a" /* getDaysOfMonth */])(prevYear, prevMonth);
    const currDaysCount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["a" /* getDaysOfMonth */])(props.year, props.month);
    const weekDay = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_js__["b" /* getWeekDay */])(props.year, props.month, 1);
    const nextDaysCount = 42 - currDaysCount - weekDay;
    return {
        week: [0, 1, 2, 3, 4, 5, 6],
        days: [...Array(weekDay).fill(0).map((d, i) => ({
            prevMonth: true,
            year: prevYear,
            month: prevMonth,
            day: i + prevDaysCount - weekDay + 1
        })), ...Array(currDaysCount).fill(0).map((d, i) => ({
            currentMonth: true,
            year: props.year,
            month: props.month,
            day: i + 1
        })), ...Array(nextDaysCount).fill(0).map((d, i) => ({
            nextMonth: true,
            year: nextYear,
            month: nextMonth,
            day: i + 1
        }))]
    };
});

/* harmony default export */ __webpack_exports__["a"] = (withCalendar);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(11);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




const withHandlers = handlers => BaseComponent => class extends __WEBPACK_IMPORTED_MODULE_1_inferno_component__["a" /* default */] {
    constructor(props) {
        super(props);
        this.handlers = Object.keys(handlers).reduce((acc, key) => {
            acc[key] = (...args) => handlers[key](this.props, ...args);
            return acc;
        }, {});
    }

    render(props) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__["a" /* default */])(BaseComponent, _extends({}, props, this.handlers));
    }
};

/* harmony default export */ __webpack_exports__["a"] = (withHandlers);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_create_element__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_inferno_component__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__compose_js__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__withCalendar_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__withHandlers_js__ = __webpack_require__(18);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };








const Day = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__withHandlers_js__["a" /* default */])({
    selectDay: props => props.dispatch({
        type: 'SELECT_DAY',
        year: props.year,
        month: props.month,
        day: props.day
    })
})(props => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* default */])(
    'div',
    { style: { width: 32, height: 20, border: '1px solid', color: props.currentMonth ? '#000' : '#999' },
        onClick: props.selectDay },
    props.day
));

const weekNames = {
    0: 'Sun',
    1: 'Mon',
    2: 'Tue',
    3: 'Wed',
    4: 'Thu',
    5: 'Fri',
    6: 'Sat'
};

const Calendar = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__compose_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__withHandlers_js__["a" /* default */])({
    prevMonth: props => props.dispatch({
        type: 'PREV_MONTH'
    }),
    nextMonth: props => props.dispatch({
        type: 'NEXT_MONTH'
    })
}), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__withCalendar_js__["a" /* default */])()(props => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* default */])(
    'div',
    null,
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* default */])(
        'div',
        { style: { display: 'flex' } },
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* default */])(
            'div',
            { onClick: props.prevMonth },
            'Prev'
        ),
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* default */])(
            'div',
            { onClick: props.nextMonth },
            'Next'
        )
    ),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* default */])(
        'div',
        null,
        props.year,
        ' ',
        props.month + 1
    ),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* default */])(
        'div',
        { style: { display: 'flex', marginBottom: 2 } },
        props.week.map(day => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* default */])(
            'div',
            { style: { width: 32, height: 20, border: '1px solid', color: '#999' } },
            weekNames[day]
        ))
    ),
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* default */])(
        'div',
        { style: { display: 'flex', flexFlow: 'wrap', width: 238 } },
        props.days.map(item => __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* default */])(Day, _extends({}, item, { dispatch: props.dispatch })))
    )
)));

class App extends __WEBPACK_IMPORTED_MODULE_2_inferno_component__["a" /* default */] {
    constructor(props) {
        super(props);
        this.state = {
            year: 2417,
            month: 1
        };
        this.dispatch = this.dispatch.bind(this);
    }

    dispatch(action) {
        console.log(action);
        this.setState(state => {
            switch (action.type) {
                case 'PREV_MONTH':
                    return {
                        year: state.month === 0 ? state.year - 1 : state.year,
                        month: state.month === 0 ? 11 : state.month - 1
                    };
                case 'NEXT_MONTH':
                    return {
                        year: state.month === 11 ? state.year + 1 : state.year,
                        month: state.month === 11 ? 0 : state.month + 1
                    };
            }
        });
    }

    render(props, state) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* default */])(Calendar, {
            year: state.year,
            month: state.month,
            dispatch: this.dispatch });
    }
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno__["a" /* render */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_inferno_create_element__["a" /* default */])(App, null), document.body.appendChild(document.createElement('div')));

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const isLeapYear = year => year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;

const getDaysOfFebruary = year => isLeapYear(year) ? 29 : 28;

const getDaysOfMonth = (year, month) => month === 0 && 31 || month === 1 && getDaysOfFebruary(year) || month === 2 && 31 || month === 3 && 30 || month === 4 && 31 || month === 5 && 30 || month === 6 && 31 || month === 7 && 31 || month === 8 && 30 || month === 9 && 31 || month === 10 && 30 || month === 11 && 31 || -1;
/* harmony export (immutable) */ __webpack_exports__["a"] = getDaysOfMonth;


// Gauss's algorithm
const getFirstWeekday = year => (1 + 5 * ((year - 1) % 4) + 4 * ((year - 1) % 100) + 6 * ((year - 1) % 400)) % 7;

const getOrdinalDay = (year, month, day) => (month === 1 && 31 || month === 2 && 59 || month === 3 && 90 || month === 4 && 120 || month === 5 && 151 || month === 6 && 181 || month === 7 && 212 || month === 8 && 243 || month === 9 && 273 || month === 10 && 304 || month === 11 && 334 || 0) + (isLeapYear(year) && month > 1 ? 1 : 0) + day - 1;

const getWeekDay = (year, month, day) => (getFirstWeekday(year) + getOrdinalDay(year, month, day)) % 7;
/* harmony export (immutable) */ __webpack_exports__["b"] = getWeekDay;


/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_create_element__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_inferno_component__ = __webpack_require__(11);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };




const withPropsOnChange = (propsKeys, mapProps) => BaseComponent => class extends __WEBPACK_IMPORTED_MODULE_1_inferno_component__["a" /* default */] {
    constructor(props) {
        super(props);
        this.computedProps = mapProps(props);
    }

    componentWillReceiveProps(nextProps) {
        if (propsKeys.some(propKey => this.props[propKey] !== nextProps[propKey])) {
            this.computedProps = mapProps(nextProps);
        }
    }

    render(props) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_create_element__["a" /* default */])(BaseComponent, _extends({}, props, this.computedProps));
    }
};

/* harmony default export */ __webpack_exports__["a"] = (withPropsOnChange);

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_shared__ = __webpack_require__(0);
/* harmony export (immutable) */ __webpack_exports__["a"] = handleEvent;

const isiOS = __WEBPACK_IMPORTED_MODULE_0_inferno_shared__["n" /* isBrowser */] && !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
const delegatedEvents = new Map();
function handleEvent(name, lastEvent, nextEvent, dom) {
    let delegatedRoots = delegatedEvents.get(name);
    if (nextEvent) {
        if (!delegatedRoots) {
            delegatedRoots = { items: new Map(), count: 0, docEvent: null };
            delegatedRoots.docEvent = attachEventToDocument(name, delegatedRoots);
            delegatedEvents.set(name, delegatedRoots);
        }
        if (!lastEvent) {
            delegatedRoots.count++;
            if (isiOS && name === 'onClick') {
                trapClickOnNonInteractiveElement(dom);
            }
        }
        delegatedRoots.items.set(dom, nextEvent);
    }
    else if (delegatedRoots) {
        if (delegatedRoots.items.has(dom)) {
            delegatedRoots.count--;
            delegatedRoots.items.delete(dom);
            if (delegatedRoots.count === 0) {
                document.removeEventListener(normalizeEventName(name), delegatedRoots.docEvent);
                delegatedEvents.delete(name);
            }
        }
    }
}
function dispatchEvent(event, dom, items, count, eventData) {
    const eventsToTrigger = items.get(dom);
    if (eventsToTrigger) {
        count--;
        // linkEvent object
        eventData.dom = dom;
        if (eventsToTrigger.event) {
            eventsToTrigger.event(eventsToTrigger.data, event);
        }
        else {
            eventsToTrigger(event);
        }
        if (eventData.stopPropagation) {
            return;
        }
    }
    if (count > 0) {
        const parentDom = dom.parentNode;
        // Html Nodes can be nested fe: span inside button in that scenario browser does not handle disabled attribute on parent,
        // because the event listener is on document.body
        if (parentDom && parentDom.disabled !== true || parentDom === document.body) {
            dispatchEvent(event, parentDom, items, count, eventData);
        }
    }
}
function normalizeEventName(name) {
    return name.substr(2).toLowerCase();
}
function attachEventToDocument(name, delegatedRoots) {
    const docEvent = (event) => {
        const eventData = {
            stopPropagation: false,
            dom: document
        };
        // we have to do this as some browsers recycle the same Event between calls
        // so we need to make the property configurable
        Object.defineProperty(event, 'currentTarget', {
            configurable: true,
            get() {
                return eventData.dom;
            }
        });
        event.stopPropagation = () => {
            eventData.stopPropagation = true;
        };
        const count = delegatedRoots.count;
        if (count > 0) {
            dispatchEvent(event, event.target, delegatedRoots.items, count, eventData);
        }
    };
    document.addEventListener(normalizeEventName(name), docEvent);
    return docEvent;
}
function emptyFn() { }
function trapClickOnNonInteractiveElement(dom) {
    // Mobile Safari does not fire properly bubble click events on
    // non-interactive elements, which means delegated click listeners do not
    // fire. The workaround for this bug involves attaching an empty click
    // listener on the target node.
    // http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
    // Just set it using the onclick property so that we don't have to manage any
    // bookkeeping for it. Not sure if we need to clear it when the listener is
    // removed.
    // TODO: Only do this for the relevant Safaris maybe?
    dom.onclick = emptyFn;
}


/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = linkEvent;
function linkEvent(data, event) {
    return { data, event };
}


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_shared__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_options__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constants__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mounting__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__patching__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rendering__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__wrappers_processElement__ = __webpack_require__(7);
/* unused harmony export normalizeChildNodes */
/* harmony export (immutable) */ __webpack_exports__["a"] = hydrateRoot;








function normalizeChildNodes(parentDom) {
    let dom = parentDom.firstChild;
    while (dom) {
        if (dom.nodeType === 8) {
            if (dom.data === '!') {
                const placeholder = document.createTextNode('');
                parentDom.replaceChild(placeholder, dom);
                dom = dom.nextSibling;
            }
            else {
                const lastDom = dom.previousSibling;
                parentDom.removeChild(dom);
                dom = lastDom || parentDom.firstChild;
            }
        }
        else {
            dom = dom.nextSibling;
        }
    }
}
function hydrateComponent(vNode, dom, lifecycle, context, isSVG, isClass) {
    const type = vNode.type;
    const ref = vNode.ref;
    vNode.dom = dom;
    const props = vNode.props || __WEBPACK_IMPORTED_MODULE_6__utils__["a" /* EMPTY_OBJ */];
    if (isClass) {
        const _isSVG = dom.namespaceURI === __WEBPACK_IMPORTED_MODULE_2__constants__["g" /* svgNS */];
        const instance = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["m" /* createClassComponentInstance */])(vNode, type, props, context, _isSVG);
        const input = instance._lastInput;
        instance._vComponent = vNode;
        instance._vNode = vNode;
        hydrate(input, dom, lifecycle, instance._childContext, _isSVG);
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__mounting__["h" /* mountClassComponentCallbacks */])(vNode, ref, instance, lifecycle);
        __WEBPACK_IMPORTED_MODULE_1__core_options__["a" /* default */].findDOMNodeEnabled && __WEBPACK_IMPORTED_MODULE_5__rendering__["d" /* componentToDOMNodeMap */].set(instance, dom);
        vNode.children = instance;
    }
    else {
        const input = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["n" /* createFunctionalComponentInput */])(vNode, type, props, context);
        hydrate(input, dom, lifecycle, context, isSVG);
        vNode.children = input;
        vNode.dom = input.dom;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__mounting__["i" /* mountFunctionalComponentCallbacks */])(ref, dom, lifecycle);
    }
    return dom;
}
function hydrateElement(vNode, dom, lifecycle, context, isSVG) {
    const children = vNode.children;
    const props = vNode.props;
    const events = vNode.events;
    const flags = vNode.flags;
    const ref = vNode.ref;
    if (isSVG || (flags & 128 /* SvgElement */)) {
        isSVG = true;
    }
    if (dom.nodeType !== 1 || dom.tagName.toLowerCase() !== vNode.type) {
        if (process.env.NODE_ENV !== 'production') {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["a" /* warning */])('Inferno hydration: Server-side markup doesn\'t match client-side markup or Initial render target is not empty');
        }
        const newDom = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__mounting__["c" /* mountElement */])(vNode, null, lifecycle, context, isSVG);
        vNode.dom = newDom;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["i" /* replaceChild */])(dom.parentNode, newDom, dom);
        return newDom;
    }
    vNode.dom = dom;
    if (children) {
        hydrateChildren(children, dom, lifecycle, context, isSVG);
    }
    let hasControlledValue = false;
    if (!(flags & 2 /* HtmlElement */)) {
        hasControlledValue = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__wrappers_processElement__["a" /* default */])(flags, vNode, dom, false);
    }
    if (props) {
        for (let prop in props) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__patching__["b" /* patchProp */])(prop, null, props[prop], dom, isSVG, hasControlledValue);
        }
    }
    if (events) {
        for (let name in events) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__patching__["c" /* patchEvent */])(name, null, events[name], dom);
        }
    }
    if (ref) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__mounting__["f" /* mountRef */])(dom, ref, lifecycle);
    }
    return dom;
}
function hydrateChildren(children, parentDom, lifecycle, context, isSVG) {
    normalizeChildNodes(parentDom);
    let dom = parentDom.firstChild;
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["f" /* isArray */])(children)) {
        for (let i = 0, len = children.length; i < len; i++) {
            const child = children[i];
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["d" /* isNull */])(child) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["p" /* isObject */])(child)) {
                if (dom) {
                    dom = hydrate(child, dom, lifecycle, context, isSVG);
                    dom = dom.nextSibling;
                }
                else {
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__mounting__["a" /* mount */])(child, parentDom, lifecycle, context, isSVG);
                }
            }
        }
    }
    else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["g" /* isStringOrNumber */])(children)) {
        if (dom && dom.nodeType === 3) {
            if (dom.nodeValue !== children) {
                dom.nodeValue = children;
            }
        }
        else if (children) {
            parentDom.textContent = children;
        }
        dom = dom.nextSibling;
    }
    else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["p" /* isObject */])(children)) {
        hydrate(children, dom, lifecycle, context, isSVG);
        dom = dom.nextSibling;
    }
    // clear any other DOM nodes, there should be only a single entry for the root
    while (dom) {
        const nextSibling = dom.nextSibling;
        parentDom.removeChild(dom);
        dom = nextSibling;
    }
}
function hydrateText(vNode, dom) {
    if (dom.nodeType !== 3) {
        const newDom = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__mounting__["d" /* mountText */])(vNode, null);
        vNode.dom = newDom;
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils__["i" /* replaceChild */])(dom.parentNode, newDom, dom);
        return newDom;
    }
    const text = vNode.children;
    if (dom.nodeValue !== text) {
        dom.nodeValue = text;
    }
    vNode.dom = dom;
    return dom;
}
function hydrateVoid(vNode, dom) {
    vNode.dom = dom;
    return dom;
}
function hydrate(vNode, dom, lifecycle, context, isSVG) {
    const flags = vNode.flags;
    if (flags & 28 /* Component */) {
        return hydrateComponent(vNode, dom, lifecycle, context, isSVG, flags & 4 /* ComponentClass */);
    }
    else if (flags & 3970 /* Element */) {
        return hydrateElement(vNode, dom, lifecycle, context, isSVG);
    }
    else if (flags & 1 /* Text */) {
        return hydrateText(vNode, dom);
    }
    else if (flags & 4096 /* Void */) {
        return hydrateVoid(vNode, dom);
    }
    else {
        if (process.env.NODE_ENV !== 'production') {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])(`hydrate() expects a valid VNode, instead it received an object with the type "${typeof vNode}".`);
        }
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["m" /* throwError */])();
    }
}
function hydrateRoot(input, parentDom, lifecycle) {
    let dom = parentDom && parentDom.firstChild;
    if (dom) {
        hydrate(input, dom, lifecycle, __WEBPACK_IMPORTED_MODULE_6__utils__["a" /* EMPTY_OBJ */], false);
        dom = parentDom.firstChild;
        // clear any other DOM nodes, there should be only a single entry for the root
        while (dom = dom.nextSibling) {
            parentDom.removeChild(dom);
        }
        return true;
    }
    return false;
}

/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(2)))

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_shared__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__processElement__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = processInput;
/* unused harmony export applyValue */



function isCheckedType(type) {
    return type === 'checkbox' || type === 'radio';
}
function isControlled(props) {
    const usesChecked = isCheckedType(props.type);
    return usesChecked ? !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(props.checked) : !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(props.value);
}
function onTextInputChange(e) {
    let vNode = this.vNode;
    const events = vNode.events || __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* EMPTY_OBJ */];
    const dom = vNode.dom;
    if (events.onInput) {
        const event = events.onInput;
        if (event.event) {
            event.event(event.data, e);
        }
        else {
            event(e);
        }
    }
    else if (events.oninput) {
        events.oninput(e);
    }
    // the user may have updated the vNode from the above onInput events
    // so we need to get it from the context of `this` again
    applyValue(this.vNode, dom);
}
function wrappedOnChange(e) {
    let vNode = this.vNode;
    const events = vNode.events || __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* EMPTY_OBJ */];
    const event = events.onChange;
    if (event.event) {
        event.event(event.data, e);
    }
    else {
        event(e);
    }
}
function onCheckboxChange(e) {
    const vNode = this.vNode;
    const events = vNode.events || __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* EMPTY_OBJ */];
    const dom = vNode.dom;
    if (events.onClick) {
        const event = events.onClick;
        if (event.event) {
            event.event(event.data, e);
        }
        else {
            event(e);
        }
    }
    else if (events.onclick) {
        events.onclick(e);
    }
    // the user may have updated the vNode from the above onClick events
    // so we need to get it from the context of `this` again
    applyValue(this.vNode, dom);
}
function handleAssociatedRadioInputs(name) {
    const inputs = document.querySelectorAll(`input[type="radio"][name="${name}"]`);
    [].forEach.call(inputs, (dom) => {
        const inputWrapper = __WEBPACK_IMPORTED_MODULE_1__processElement__["b" /* wrappers */].get(dom);
        if (inputWrapper) {
            const props = inputWrapper.vNode.props;
            if (props) {
                dom.checked = inputWrapper.vNode.props.checked;
            }
        }
    });
}
function processInput(vNode, dom) {
    const props = vNode.props || __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* EMPTY_OBJ */];
    applyValue(vNode, dom);
    if (isControlled(props)) {
        let inputWrapper = __WEBPACK_IMPORTED_MODULE_1__processElement__["b" /* wrappers */].get(dom);
        if (!inputWrapper) {
            inputWrapper = {
                vNode
            };
            if (isCheckedType(props.type)) {
                dom.onclick = onCheckboxChange.bind(inputWrapper);
                dom.onclick.wrapped = true;
            }
            else {
                dom.oninput = onTextInputChange.bind(inputWrapper);
                dom.oninput.wrapped = true;
            }
            if (props.onChange) {
                dom.onchange = wrappedOnChange.bind(inputWrapper);
                dom.onchange.wrapped = true;
            }
            __WEBPACK_IMPORTED_MODULE_1__processElement__["b" /* wrappers */].set(dom, inputWrapper);
        }
        inputWrapper.vNode = vNode;
        return true;
    }
    return false;
}
function applyValue(vNode, dom) {
    const props = vNode.props || __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* EMPTY_OBJ */];
    const type = props.type;
    const value = props.value;
    const checked = props.checked;
    const multiple = props.multiple;
    const defaultValue = props.defaultValue;
    const hasValue = !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(value);
    if (type && type !== dom.type) {
        dom.type = type;
    }
    if (multiple && multiple !== dom.multiple) {
        dom.multiple = multiple;
    }
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(defaultValue) && !hasValue) {
        dom.defaultValue = defaultValue + '';
    }
    if (isCheckedType(type)) {
        if (hasValue) {
            dom.value = value;
        }
        if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(checked)) {
            dom.checked = checked;
        }
        if (type === 'radio' && props.name) {
            handleAssociatedRadioInputs(props.name);
        }
    }
    else {
        if (hasValue && dom.value !== value) {
            dom.value = value;
        }
        else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(checked)) {
            dom.checked = checked;
        }
    }
}


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_shared__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_VNodes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__processElement__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = processSelect;
/* unused harmony export applyValue */




function isControlled(props) {
    return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(props.value);
}
function updateChildOptionGroup(vNode, value) {
    const type = vNode.type;
    if (type === 'optgroup') {
        const children = vNode.children;
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["f" /* isArray */])(children)) {
            for (let i = 0, len = children.length; i < len; i++) {
                updateChildOption(children[i], value);
            }
        }
        else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_VNodes__["d" /* isVNode */])(children)) {
            updateChildOption(children, value);
        }
    }
    else {
        updateChildOption(vNode, value);
    }
}
function updateChildOption(vNode, value) {
    const props = vNode.props || __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* EMPTY_OBJ */];
    const dom = vNode.dom;
    // we do this as multiple may have changed
    dom.value = props.value;
    if ((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["f" /* isArray */])(value) && value.indexOf(props.value) !== -1) || props.value === value) {
        dom.selected = true;
    }
    else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(value) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(props.selected)) {
        dom.selected = props.selected || false;
    }
}
function onSelectChange(e) {
    const vNode = this.vNode;
    const events = vNode.events || __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* EMPTY_OBJ */];
    const dom = vNode.dom;
    if (events.onChange) {
        const event = events.onChange;
        if (event.event) {
            event.event(event.data, e);
        }
        else {
            event(e);
        }
    }
    else if (events.onchange) {
        events.onchange(e);
    }
    // the user may have updated the vNode from the above onChange events
    // so we need to get it from the context of `this` again
    applyValue(this.vNode, dom, false);
}
function processSelect(vNode, dom, mounting) {
    const props = vNode.props || __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* EMPTY_OBJ */];
    applyValue(vNode, dom, mounting);
    if (isControlled(props)) {
        let selectWrapper = __WEBPACK_IMPORTED_MODULE_2__processElement__["b" /* wrappers */].get(dom);
        if (!selectWrapper) {
            selectWrapper = {
                vNode
            };
            dom.onchange = onSelectChange.bind(selectWrapper);
            dom.onchange.wrapped = true;
            __WEBPACK_IMPORTED_MODULE_2__processElement__["b" /* wrappers */].set(dom, selectWrapper);
        }
        selectWrapper.vNode = vNode;
        return true;
    }
    return false;
}
function applyValue(vNode, dom, mounting) {
    const props = vNode.props || __WEBPACK_IMPORTED_MODULE_3__utils__["a" /* EMPTY_OBJ */];
    if (props.multiple !== dom.multiple) {
        dom.multiple = props.multiple;
    }
    const children = vNode.children;
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["e" /* isInvalid */])(children)) {
        let value = props.value;
        if (mounting && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(value)) {
            value = props.defaultValue;
        }
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["f" /* isArray */])(children)) {
            for (let i = 0, len = children.length; i < len; i++) {
                updateChildOptionGroup(children[i], value);
            }
        }
        else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_VNodes__["d" /* isVNode */])(children)) {
            updateChildOptionGroup(children, value);
        }
    }
}


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_inferno_shared__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__processElement__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(1);
/* harmony export (immutable) */ __webpack_exports__["a"] = processTextarea;
/* unused harmony export applyValue */



function isControlled(props) {
    return !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(props.value);
}
function wrappedOnChange(e) {
    let vNode = this.vNode;
    const events = vNode.events || __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* EMPTY_OBJ */];
    const event = events.onChange;
    if (event.event) {
        event.event(event.data, e);
    }
    else {
        event(e);
    }
}
function onTextareaInputChange(e) {
    let vNode = this.vNode;
    const events = vNode.events || __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* EMPTY_OBJ */];
    const dom = vNode.dom;
    if (events.onInput) {
        const event = events.onInput;
        if (event.event) {
            event.event(event.data, e);
        }
        else {
            event(e);
        }
    }
    else if (events.oninput) {
        events.oninput(e);
    }
    // the user may have updated the vNode from the above onInput events
    // so we need to get it from the context of `this` again
    applyValue(this.vNode, dom, false);
}
function processTextarea(vNode, dom, mounting) {
    const props = vNode.props || __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* EMPTY_OBJ */];
    applyValue(vNode, dom, mounting);
    let textareaWrapper = __WEBPACK_IMPORTED_MODULE_1__processElement__["b" /* wrappers */].get(dom);
    if (isControlled(props)) {
        if (!textareaWrapper) {
            textareaWrapper = {
                vNode
            };
            dom.oninput = onTextareaInputChange.bind(textareaWrapper);
            dom.oninput.wrapped = true;
            if (props.onChange) {
                dom.onchange = wrappedOnChange.bind(textareaWrapper);
                dom.onchange.wrapped = true;
            }
            __WEBPACK_IMPORTED_MODULE_1__processElement__["b" /* wrappers */].set(dom, textareaWrapper);
        }
        textareaWrapper.vNode = vNode;
        return true;
    }
    return false;
}
function applyValue(vNode, dom, mounting) {
    const props = vNode.props || __WEBPACK_IMPORTED_MODULE_2__utils__["a" /* EMPTY_OBJ */];
    const value = props.value;
    const domValue = dom.value;
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(value)) {
        if (mounting) {
            const defaultValue = props.defaultValue;
            if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_inferno_shared__["h" /* isNullOrUndef */])(defaultValue)) {
                if (defaultValue !== domValue) {
                    dom.value = defaultValue;
                }
            }
            else if (domValue !== '') {
                dom.value = '';
            }
        }
    }
    else {
        /* There is value so keep it controlled */
        if (domValue !== value) {
            dom.value = value;
        }
    }
}


/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgODExZjJmZDFjMTYyYTU1ZTczNWYiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vLXNoYXJlZC9kaXN0LWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaW5mZXJuby9kaXN0LWVzL0RPTS91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9jb3JlL29wdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvY29yZS9WTm9kZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL3BhdGNoaW5nLmpzIiwid2VicGFjazovLy8uL34vaW5mZXJuby9kaXN0LWVzL0RPTS9yZW5kZXJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL3dyYXBwZXJzL3Byb2Nlc3NFbGVtZW50LmpzIiwid2VicGFjazovLy8uL34vaW5mZXJuby1jcmVhdGUtZWxlbWVudC9kaXN0LWVzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaW5mZXJuby9kaXN0LWVzL0RPTS9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL21vdW50aW5nLmpzIiwid2VicGFjazovLy8uL34vaW5mZXJuby1jb21wb25lbnQvZGlzdC1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9ET00vdW5tb3VudGluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9ET00vcmVjeWNsaW5nLmpzIiwid2VicGFjazovLy8uL34vaW5mZXJuby9kaXN0LWVzL2NvcmUvbm9ybWFsaXphdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9zZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2l0aENhbGVuZGFyLmpzIiwid2VicGFjazovLy8uL3NyYy93aXRoSGFuZGxlcnMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL3NyYy93aXRoUHJvcHNPbkNoYW5nZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9ET00vZXZlbnRzL2RlbGVnYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL2V2ZW50cy9saW5rRXZlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL2h5ZHJhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2luZmVybm8vZGlzdC1lcy9ET00vd3JhcHBlcnMvSW5wdXRXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL34vaW5mZXJuby9kaXN0LWVzL0RPTS93cmFwcGVycy9TZWxlY3RXcmFwcGVyLmpzIiwid2VicGFjazovLy8uL34vaW5mZXJuby9kaXN0LWVzL0RPTS93cmFwcGVycy9UZXh0YXJlYVdyYXBwZXIuanMiXSwibmFtZXMiOlsiY29tcG9zZSIsImZ1bmNzIiwibGVuZ3RoIiwiYXJnIiwicmVkdWNlIiwiYSIsImIiLCJhcmdzIiwid2l0aENhbGVuZGFyIiwid2l0aFByb3BzT25DaGFuZ2UiLCJwcm9wcyIsInByZXZZZWFyIiwibW9udGgiLCJ5ZWFyIiwibmV4dFllYXIiLCJwcmV2TW9udGgiLCJuZXh0TW9udGgiLCJwcmV2RGF5c0NvdW50IiwiZ2V0RGF5c09mTW9udGgiLCJjdXJyRGF5c0NvdW50Iiwid2Vla0RheSIsImdldFdlZWtEYXkiLCJuZXh0RGF5c0NvdW50Iiwid2VlayIsImRheXMiLCJBcnJheSIsImZpbGwiLCJtYXAiLCJkIiwiaSIsImRheSIsImN1cnJlbnRNb250aCIsIndpdGhIYW5kbGVycyIsImhhbmRsZXJzIiwiQmFzZUNvbXBvbmVudCIsImNvbnN0cnVjdG9yIiwiT2JqZWN0Iiwia2V5cyIsImFjYyIsImtleSIsInJlbmRlciIsIkRheSIsInNlbGVjdERheSIsImRpc3BhdGNoIiwidHlwZSIsIndpZHRoIiwiaGVpZ2h0IiwiYm9yZGVyIiwiY29sb3IiLCJ3ZWVrTmFtZXMiLCJDYWxlbmRhciIsImRpc3BsYXkiLCJtYXJnaW5Cb3R0b20iLCJmbGV4RmxvdyIsIml0ZW0iLCJBcHAiLCJzdGF0ZSIsImJpbmQiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwic2V0U3RhdGUiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJpc0xlYXBZZWFyIiwiZ2V0RGF5c09mRmVicnVhcnkiLCJnZXRGaXJzdFdlZWtkYXkiLCJnZXRPcmRpbmFsRGF5IiwicHJvcHNLZXlzIiwibWFwUHJvcHMiLCJjb21wdXRlZFByb3BzIiwiY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyIsIm5leHRQcm9wcyIsInNvbWUiLCJwcm9wS2V5Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsbURBQTJDLGNBQWM7O0FBRXpEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxTQUFTO0FBQ3BEO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pGb0c7QUFDcEc7QUFDd0Q7QUFDeEM7QUFDQTtBQUNBO0FBQ2dCO0FBQ2Q7QUFDbEI7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLFNBQVM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM0tBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFVBQVU7Ozs7Ozs7O0FDbkx0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWNkc7QUFDekY7QUFDcEI7QUFDb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELFNBQVM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLFNBQVM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUs0SztBQUM1SztBQUNpRTtBQUM0QjtBQUN2RTtBQUM0RTtBQUMwRjtBQUM1SjtBQUNkO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsa0JBQWtCO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHdCQUF3QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHdCQUF3QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsYUFBYTtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixXQUFXO0FBQ3ZDO0FBQ0E7QUFDQSxvQ0FBb0MsV0FBVztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsV0FBVztBQUN2QztBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsV0FBVztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxRQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxRQUFRO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxTQUFTO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMElBQTJELEtBQUs7QUFDaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqekI2RjtBQUM3RjtBQUNzQjtBQUN0QjtBQUNnQjtBQUNBO0FBQ0U7QUFDRTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNMQUF1RztBQUN2RztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QyxTQUFTO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsU0FBUztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlHdUI7QUFDQztBQUNFO0FBQzFCO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNmc0I7QUFDa0Y7QUFDeEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsU0FBUztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxTQUFTO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hHcUg7QUFDckg7QUFDK0I7QUFDQztBQUNXO0FBQ1g7QUFDc0c7QUFDdEk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsME1BQTJILHNCQUFzQjtBQUNqSjtBQUNBO0FBQ0EseUxBQTBHLGFBQWE7QUFDdkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDQUEwQyxTQUFTO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0pBQWdGLG9CQUFvQjtBQUNwRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2xOQTtBQUFBO0FBQzBDO0FBQzhHO0FBQ3hKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtREFBbUQsU0FBUztBQUM1RDtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsT0FBTztBQUMxQjtBQUNBLG1CQUFtQixPQUFPO0FBQzFCLDZGQUE0QztBQUM1QztBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqUHlCO0FBQ1M7QUFDbEM7QUFDQTtBQUM4QztBQUMxQjtBQUNwQjtBQUNBLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7MEVBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFXQTtBQUNBO0FBQ3dEO0FBQ3hEO0FBQzBDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRDRDO0FBQ3RGO0FBQ3FCO0FBQ2dCO0FBQ0w7QUFDVjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsU0FBUztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2xIOEI7QUFDUztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM3RmdIO0FBQ2hFO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixJQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsYUFBYTtBQUM3QztBQUNBLHVCQUF1QixXQUFXLEdBQUcsTUFBTTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLFNBQVM7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFtRDtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyREFBMkQsa0JBQWtCLEVBQUU7QUFDL0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdkxBLE1BQU1BLFVBQVUsQ0FBQyxHQUFHQyxLQUFKLEtBQWM7QUFDMUIsUUFBSUEsTUFBTUMsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUNwQixlQUFPQyxPQUFPQSxHQUFkO0FBQ0g7O0FBRUQsUUFBSUYsTUFBTUMsTUFBTixLQUFpQixDQUFyQixFQUF3QjtBQUNwQixlQUFPRCxNQUFNLENBQU4sQ0FBUDtBQUNIOztBQUVELFdBQU9BLE1BQU1HLE1BQU4sQ0FBYSxDQUFDQyxDQUFELEVBQUlDLENBQUosS0FBVSxDQUFDLEdBQUdDLElBQUosS0FBYUYsRUFBRUMsRUFBRSxHQUFHQyxJQUFMLENBQUYsQ0FBcEMsQ0FBUDtBQUNILENBVkQ7O0FBWUEseURBQWVQLE9BQWYsRTs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNUSxlQUFlLE1BQU0sNkZBQUFDLENBQWtCLENBQUMsTUFBRCxFQUFTLE9BQVQsQ0FBbEIsRUFBcUNDLFNBQVM7QUFDckUsVUFBTUMsV0FBV0QsTUFBTUUsS0FBTixLQUFnQixDQUFoQixHQUFvQkYsTUFBTUcsSUFBTixHQUFhLENBQWpDLEdBQXFDSCxNQUFNRyxJQUE1RDtBQUNBLFVBQU1DLFdBQVdKLE1BQU1FLEtBQU4sS0FBZ0IsRUFBaEIsR0FBcUJGLE1BQU1HLElBQU4sR0FBYSxDQUFsQyxHQUFzQ0gsTUFBTUcsSUFBN0Q7QUFDQSxVQUFNRSxZQUFZTCxNQUFNRSxLQUFOLEtBQWdCLENBQWhCLEdBQW9CLEVBQXBCLEdBQXlCRixNQUFNRSxLQUFOLEdBQWMsQ0FBekQ7QUFDQSxVQUFNSSxZQUFZTixNQUFNRSxLQUFOLEtBQWdCLEVBQWhCLEdBQXFCLENBQXJCLEdBQXlCRixNQUFNRSxLQUFOLEdBQWMsQ0FBekQ7QUFDQSxVQUFNSyxnQkFBZ0Isd0ZBQUFDLENBQWVQLFFBQWYsRUFBeUJJLFNBQXpCLENBQXRCO0FBQ0EsVUFBTUksZ0JBQWdCLHdGQUFBRCxDQUFlUixNQUFNRyxJQUFyQixFQUEyQkgsTUFBTUUsS0FBakMsQ0FBdEI7QUFDQSxVQUFNUSxVQUFVLG9GQUFBQyxDQUFXWCxNQUFNRyxJQUFqQixFQUF1QkgsTUFBTUUsS0FBN0IsRUFBb0MsQ0FBcEMsQ0FBaEI7QUFDQSxVQUFNVSxnQkFBZ0IsS0FBS0gsYUFBTCxHQUFxQkMsT0FBM0M7QUFDQSxXQUFPO0FBQ0hHLGNBQU0sQ0FBQyxDQUFELEVBQUksQ0FBSixFQUFPLENBQVAsRUFBVSxDQUFWLEVBQWEsQ0FBYixFQUFnQixDQUFoQixFQUFtQixDQUFuQixDQURIO0FBRUhDLGNBQU0sQ0FDRixHQUFHQyxNQUFNTCxPQUFOLEVBQWVNLElBQWYsQ0FBb0IsQ0FBcEIsRUFBdUJDLEdBQXZCLENBQTJCLENBQUNDLENBQUQsRUFBSUMsQ0FBSixNQUFXO0FBQ3JDZCx1QkFBVyxJQUQwQjtBQUVyQ0Ysa0JBQU1GLFFBRitCO0FBR3JDQyxtQkFBT0csU0FIOEI7QUFJckNlLGlCQUFLRCxJQUFJWixhQUFKLEdBQW9CRyxPQUFwQixHQUE4QjtBQUpFLFNBQVgsQ0FBM0IsQ0FERCxFQU9GLEdBQUdLLE1BQU1OLGFBQU4sRUFBcUJPLElBQXJCLENBQTBCLENBQTFCLEVBQTZCQyxHQUE3QixDQUFpQyxDQUFDQyxDQUFELEVBQUlDLENBQUosTUFBVztBQUMzQ0UsMEJBQWMsSUFENkI7QUFFM0NsQixrQkFBTUgsTUFBTUcsSUFGK0I7QUFHM0NELG1CQUFPRixNQUFNRSxLQUg4QjtBQUkzQ2tCLGlCQUFLRCxJQUFJO0FBSmtDLFNBQVgsQ0FBakMsQ0FQRCxFQWFGLEdBQUdKLE1BQU1ILGFBQU4sRUFBcUJJLElBQXJCLENBQTBCLENBQTFCLEVBQTZCQyxHQUE3QixDQUFpQyxDQUFDQyxDQUFELEVBQUlDLENBQUosTUFBVztBQUMzQ2IsdUJBQVcsSUFEZ0M7QUFFM0NILGtCQUFNQyxRQUZxQztBQUczQ0YsbUJBQU9JLFNBSG9DO0FBSTNDYyxpQkFBS0QsSUFBSTtBQUprQyxTQUFYLENBQWpDLENBYkQ7QUFGSCxLQUFQO0FBdUJILENBaEMwQixDQUEzQjs7QUFrQ0EseURBQWVyQixZQUFmLEU7Ozs7Ozs7Ozs7O0FDdENBO0FBQ0E7O0FBRUEsTUFBTXdCLGVBQWVDLFlBQVlDLGlCQUFpQixjQUFjLGtFQUFkLENBQXdCO0FBQ3RFQyxnQkFBWXpCLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0EsYUFBS3VCLFFBQUwsR0FBZ0JHLE9BQU9DLElBQVAsQ0FBWUosUUFBWixFQUFzQjdCLE1BQXRCLENBQTZCLENBQUNrQyxHQUFELEVBQU1DLEdBQU4sS0FBYztBQUN2REQsZ0JBQUlDLEdBQUosSUFBVyxDQUFDLEdBQUdoQyxJQUFKLEtBQWEwQixTQUFTTSxHQUFULEVBQWMsS0FBSzdCLEtBQW5CLEVBQTBCLEdBQUdILElBQTdCLENBQXhCO0FBQ0EsbUJBQU8rQixHQUFQO0FBQ0gsU0FIZSxFQUdiLEVBSGEsQ0FBaEI7QUFJSDs7QUFFREUsV0FBTzlCLEtBQVAsRUFBYztBQUNWLGVBQU8sK0ZBQUMsYUFBRCxlQUFtQkEsS0FBbkIsRUFBOEIsS0FBS3VCLFFBQW5DLEVBQVA7QUFDSDtBQVhxRSxDQUExRTs7QUFjQSx5REFBZUQsWUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNUyxNQUFNLHdGQUFBVCxDQUFhO0FBQ3JCVSxlQUFXaEMsU0FBU0EsTUFBTWlDLFFBQU4sQ0FBZTtBQUMvQkMsY0FBTSxZQUR5QjtBQUUvQi9CLGNBQU1ILE1BQU1HLElBRm1CO0FBRy9CRCxlQUFPRixNQUFNRSxLQUhrQjtBQUkvQmtCLGFBQUtwQixNQUFNb0I7QUFKb0IsS0FBZjtBQURDLENBQWIsRUFPVHBCLFNBQ0M7QUFBQTtBQUFBLE1BQUssT0FBTyxFQUFFbUMsT0FBTyxFQUFULEVBQWFDLFFBQVEsRUFBckIsRUFBeUJDLFFBQVEsV0FBakMsRUFBOENDLE9BQU90QyxNQUFNcUIsWUFBTixHQUFxQixNQUFyQixHQUE4QixNQUFuRixFQUFaO0FBQ0ksaUJBQVNyQixNQUFNZ0MsU0FEbkI7QUFFS2hDLFVBQU1vQjtBQUZYLENBUlEsQ0FBWjs7QUFjQSxNQUFNbUIsWUFBWTtBQUNkLE9BQUcsS0FEVztBQUVkLE9BQUcsS0FGVztBQUdkLE9BQUcsS0FIVztBQUlkLE9BQUcsS0FKVztBQUtkLE9BQUcsS0FMVztBQU1kLE9BQUcsS0FOVztBQU9kLE9BQUc7QUFQVyxDQUFsQjs7QUFVQSxNQUFNQyxXQUFXLG1GQUFBbEQsQ0FDYix3RkFBQWdDLENBQWE7QUFDVGpCLGVBQVdMLFNBQVNBLE1BQU1pQyxRQUFOLENBQWU7QUFDL0JDLGNBQU07QUFEeUIsS0FBZixDQURYO0FBSVQ1QixlQUFXTixTQUFTQSxNQUFNaUMsUUFBTixDQUFlO0FBQy9CQyxjQUFNO0FBRHlCLEtBQWY7QUFKWCxDQUFiLENBRGEsRUFTYix3RkFBQXBDLEdBQWVFLFNBQ1g7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBLFVBQUssT0FBTyxFQUFFeUMsU0FBUyxNQUFYLEVBQVo7QUFDSTtBQUFBO0FBQUEsY0FBSyxTQUFTekMsTUFBTUssU0FBcEI7QUFBQTtBQUFBLFNBREo7QUFFSTtBQUFBO0FBQUEsY0FBSyxTQUFTTCxNQUFNTSxTQUFwQjtBQUFBO0FBQUE7QUFGSixLQURKO0FBS0k7QUFBQTtBQUFBO0FBQ0tOLGNBQU1HLElBRFg7QUFBQTtBQUNrQkgsY0FBTUUsS0FBTixHQUFjO0FBRGhDLEtBTEo7QUFRSTtBQUFBO0FBQUEsVUFBSyxPQUFPLEVBQUV1QyxTQUFTLE1BQVgsRUFBbUJDLGNBQWMsQ0FBakMsRUFBWjtBQUNLMUMsY0FBTWEsSUFBTixDQUFXSSxHQUFYLENBQWVHLE9BQ1o7QUFBQTtBQUFBLGNBQUssT0FBTyxFQUFFZSxPQUFPLEVBQVQsRUFBYUMsUUFBUSxFQUFyQixFQUF5QkMsUUFBUSxXQUFqQyxFQUE4Q0MsT0FBTyxNQUFyRCxFQUFaO0FBQ0tDLHNCQUFVbkIsR0FBVjtBQURMLFNBREg7QUFETCxLQVJKO0FBZUk7QUFBQTtBQUFBLFVBQUssT0FBTyxFQUFFcUIsU0FBUyxNQUFYLEVBQW1CRSxVQUFVLE1BQTdCLEVBQXFDUixPQUFPLEdBQTVDLEVBQVo7QUFDS25DLGNBQU1jLElBQU4sQ0FBV0csR0FBWCxDQUFlMkIsUUFDWiwrRkFBQyxHQUFELGVBQVNBLElBQVQsSUFBZSxVQUFVNUMsTUFBTWlDLFFBQS9CLElBREg7QUFETDtBQWZKLENBREosQ0FUYSxDQUFqQjs7QUFrQ0EsTUFBTVksR0FBTixTQUFrQixrRUFBbEIsQ0FBNEI7QUFDeEJwQixnQkFBWXpCLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0EsYUFBSzhDLEtBQUwsR0FBYTtBQUNUM0Msa0JBQU0sSUFERztBQUVURCxtQkFBTztBQUZFLFNBQWI7QUFJQSxhQUFLK0IsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNjLElBQWQsQ0FBbUIsSUFBbkIsQ0FBaEI7QUFDSDs7QUFFRGQsYUFBU2UsTUFBVCxFQUFpQjtBQUNiQyxnQkFBUUMsR0FBUixDQUFZRixNQUFaO0FBQ0EsYUFBS0csUUFBTCxDQUFjTCxTQUFTO0FBQ25CLG9CQUFRRSxPQUFPZCxJQUFmO0FBQ0kscUJBQUssWUFBTDtBQUNJLDJCQUFPO0FBQ0gvQiw4QkFBTTJDLE1BQU01QyxLQUFOLEtBQWdCLENBQWhCLEdBQW9CNEMsTUFBTTNDLElBQU4sR0FBYSxDQUFqQyxHQUFxQzJDLE1BQU0zQyxJQUQ5QztBQUVIRCwrQkFBTzRDLE1BQU01QyxLQUFOLEtBQWdCLENBQWhCLEdBQW9CLEVBQXBCLEdBQXlCNEMsTUFBTTVDLEtBQU4sR0FBYztBQUYzQyxxQkFBUDtBQUlKLHFCQUFLLFlBQUw7QUFDSSwyQkFBTztBQUNIQyw4QkFBTTJDLE1BQU01QyxLQUFOLEtBQWdCLEVBQWhCLEdBQXFCNEMsTUFBTTNDLElBQU4sR0FBYSxDQUFsQyxHQUFzQzJDLE1BQU0zQyxJQUQvQztBQUVIRCwrQkFBTzRDLE1BQU01QyxLQUFOLEtBQWdCLEVBQWhCLEdBQXFCLENBQXJCLEdBQXlCNEMsTUFBTTVDLEtBQU4sR0FBYztBQUYzQyxxQkFBUDtBQVBSO0FBWUgsU0FiRDtBQWNIOztBQUVENEIsV0FBTzlCLEtBQVAsRUFBYzhDLEtBQWQsRUFBcUI7QUFDakIsZUFDSSwrRkFBQyxRQUFEO0FBQ0ksa0JBQU1BLE1BQU0zQyxJQURoQjtBQUVJLG1CQUFPMkMsTUFBTTVDLEtBRmpCO0FBR0ksc0JBQVUsS0FBSytCLFFBSG5CLEdBREo7QUFNSDtBQW5DdUI7O0FBc0M1Qiw4RUFBQUgsQ0FBTywrRkFBQyxHQUFELE9BQVAsRUFBZ0JzQixTQUFTQyxJQUFULENBQWNDLFdBQWQsQ0FBMEJGLFNBQVNHLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBMUIsQ0FBaEIsRTs7Ozs7OztBQ3ZHQSxNQUFNQyxhQUFhckQsUUFDZkEsT0FBTyxHQUFQLEtBQWUsQ0FBZixJQUFvQkEsT0FBTyxDQUFQLEtBQWEsQ0FBYixJQUFrQkEsT0FBTyxHQUFQLEtBQWUsQ0FEekQ7O0FBR0EsTUFBTXNELG9CQUFvQnRELFFBQ3RCcUQsV0FBV3JELElBQVgsSUFBbUIsRUFBbkIsR0FBd0IsRUFENUI7O0FBR08sTUFBTUssaUJBQWlCLENBQUNMLElBQUQsRUFBT0QsS0FBUCxLQUMxQkEsVUFBVSxDQUFWLElBQWUsRUFBZixJQUNBQSxVQUFVLENBQVYsSUFBZXVELGtCQUFrQnRELElBQWxCLENBRGYsSUFFQUQsVUFBVSxDQUFWLElBQWUsRUFGZixJQUdBQSxVQUFVLENBQVYsSUFBZSxFQUhmLElBSUFBLFVBQVUsQ0FBVixJQUFlLEVBSmYsSUFLQUEsVUFBVSxDQUFWLElBQWUsRUFMZixJQU1BQSxVQUFVLENBQVYsSUFBZSxFQU5mLElBT0FBLFVBQVUsQ0FBVixJQUFlLEVBUGYsSUFRQUEsVUFBVSxDQUFWLElBQWUsRUFSZixJQVNBQSxVQUFVLENBQVYsSUFBZSxFQVRmLElBVUFBLFVBQVUsRUFBVixJQUFnQixFQVZoQixJQVdBQSxVQUFVLEVBQVYsSUFBZ0IsRUFYaEIsSUFZQSxDQUFDLENBYkU7QUFBQTtBQUFBOztBQWdCUDtBQUNBLE1BQU13RCxrQkFBa0J2RCxRQUNwQixDQUFDLElBQUksS0FBSyxDQUFDQSxPQUFPLENBQVIsSUFBYSxDQUFsQixDQUFKLEdBQTJCLEtBQUssQ0FBQ0EsT0FBTyxDQUFSLElBQWEsR0FBbEIsQ0FBM0IsR0FBb0QsS0FBSyxDQUFDQSxPQUFPLENBQVIsSUFBYSxHQUFsQixDQUFyRCxJQUErRSxDQURuRjs7QUFHQSxNQUFNd0QsZ0JBQWdCLENBQUN4RCxJQUFELEVBQU9ELEtBQVAsRUFBY2tCLEdBQWQsS0FBc0IsQ0FDeENsQixVQUFVLENBQVYsSUFBZSxFQUFmLElBQ0FBLFVBQVUsQ0FBVixJQUFlLEVBRGYsSUFFQUEsVUFBVSxDQUFWLElBQWUsRUFGZixJQUdBQSxVQUFVLENBQVYsSUFBZSxHQUhmLElBSUFBLFVBQVUsQ0FBVixJQUFlLEdBSmYsSUFLQUEsVUFBVSxDQUFWLElBQWUsR0FMZixJQU1BQSxVQUFVLENBQVYsSUFBZSxHQU5mLElBT0FBLFVBQVUsQ0FBVixJQUFlLEdBUGYsSUFRQUEsVUFBVSxDQUFWLElBQWUsR0FSZixJQVNBQSxVQUFVLEVBQVYsSUFBZ0IsR0FUaEIsSUFVQUEsVUFBVSxFQUFWLElBQWdCLEdBVmhCLElBV0EsQ0Fad0MsS0FhdkNzRCxXQUFXckQsSUFBWCxLQUFvQkQsUUFBUSxDQUE1QixHQUFnQyxDQUFoQyxHQUFvQyxDQWJHLElBYUVrQixHQWJGLEdBYVEsQ0FicEQ7O0FBZU8sTUFBTVQsYUFBYSxDQUFDUixJQUFELEVBQU9ELEtBQVAsRUFBY2tCLEdBQWQsS0FDdEIsQ0FBQ3NDLGdCQUFnQnZELElBQWhCLElBQXdCd0QsY0FBY3hELElBQWQsRUFBb0JELEtBQXBCLEVBQTJCa0IsR0FBM0IsQ0FBekIsSUFBNEQsQ0FEekQsQzs7Ozs7Ozs7Ozs7OztBQ3pDUDtBQUNBOztBQUVBLE1BQU1yQixvQkFBb0IsQ0FBQzZELFNBQUQsRUFBWUMsUUFBWixLQUF5QnJDLGlCQUFpQixjQUFjLGtFQUFkLENBQXdCO0FBQ3hGQyxnQkFBWXpCLEtBQVosRUFBbUI7QUFDZixjQUFNQSxLQUFOO0FBQ0EsYUFBSzhELGFBQUwsR0FBcUJELFNBQVM3RCxLQUFULENBQXJCO0FBQ0g7O0FBRUQrRCw4QkFBMEJDLFNBQTFCLEVBQXFDO0FBQ2pDLFlBQUlKLFVBQVVLLElBQVYsQ0FBZUMsV0FBVyxLQUFLbEUsS0FBTCxDQUFXa0UsT0FBWCxNQUF3QkYsVUFBVUUsT0FBVixDQUFsRCxDQUFKLEVBQTJFO0FBQ3ZFLGlCQUFLSixhQUFMLEdBQXFCRCxTQUFTRyxTQUFULENBQXJCO0FBQ0g7QUFDSjs7QUFFRGxDLFdBQU85QixLQUFQLEVBQWM7QUFDVixlQUFPLCtGQUFDLGFBQUQsZUFBbUJBLEtBQW5CLEVBQThCLEtBQUs4RCxhQUFuQyxFQUFQO0FBQ0g7QUFkdUYsQ0FBNUY7O0FBaUJBLHlEQUFlL0QsaUJBQWYsRTs7Ozs7Ozs7O0FDcEJvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMvRkE7QUFDQSxZQUFZO0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0YyRTtBQUMzRTtBQUNnQjtBQUNvRztBQUNwRjtBQUNBO0FBQ2dFO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDLFNBQVM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVMQUF3RyxhQUFhO0FBQ3JIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDeEx3QjtBQUNMO0FBQ0M7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFQUEwRSxLQUFLO0FBQy9FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3pJNEM7QUFDMUI7QUFDQztBQUNDO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsU0FBUztBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxTQUFTO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM5RndCO0FBQ0w7QUFDQztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9ueSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAxOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgODExZjJmZDFjMTYyYTU1ZTczNWYiLCJleHBvcnQgY29uc3QgTk9fT1AgPSAnJE5PX09QJztcbmV4cG9ydCBjb25zdCBFUlJPUl9NU0cgPSAnYSBydW50aW1lIGVycm9yIG9jY3VyZWQhIFVzZSBJbmZlcm5vIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50IHRvIGZpbmQgdGhlIGVycm9yLic7XG5leHBvcnQgY29uc3QgaXNCcm93c2VyID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50O1xuZXhwb3J0IGZ1bmN0aW9uIHRvQXJyYXkoY2hpbGRyZW4pIHtcbiAgICByZXR1cm4gaXNBcnJheShjaGlsZHJlbikgPyBjaGlsZHJlbiA6IChjaGlsZHJlbiA/IFtjaGlsZHJlbl0gOiBjaGlsZHJlbik7XG59XG4vLyB0aGlzIGlzIE1VQ0ggZmFzdGVyIHRoYW4gLmNvbnN0cnVjdG9yID09PSBBcnJheSBhbmQgaW5zdGFuY2VvZiBBcnJheVxuLy8gaW4gTm9kZSA3IGFuZCB0aGUgbGF0ZXIgdmVyc2lvbnMgb2YgVjgsIHNsb3dlciBpbiBvbGRlciB2ZXJzaW9ucyB0aG91Z2hcbmV4cG9ydCBjb25zdCBpc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbmV4cG9ydCBmdW5jdGlvbiBpc1N0YXRlZnVsQ29tcG9uZW50KG8pIHtcbiAgICByZXR1cm4gIWlzVW5kZWZpbmVkKG8ucHJvdG90eXBlKSAmJiAhaXNVbmRlZmluZWQoby5wcm90b3R5cGUucmVuZGVyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1N0cmluZ09yTnVtYmVyKG9iaikge1xuICAgIGNvbnN0IHR5cGUgPSB0eXBlb2Ygb2JqO1xuICAgIHJldHVybiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc051bGxPclVuZGVmKG9iaikge1xuICAgIHJldHVybiBpc1VuZGVmaW5lZChvYmopIHx8IGlzTnVsbChvYmopO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzSW52YWxpZChvYmopIHtcbiAgICByZXR1cm4gaXNOdWxsKG9iaikgfHwgb2JqID09PSBmYWxzZSB8fCBpc1RydWUob2JqKSB8fCBpc1VuZGVmaW5lZChvYmopO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbic7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNBdHRyQW5FdmVudChhdHRyKSB7XG4gICAgcmV0dXJuIGF0dHJbMF0gPT09ICdvJyAmJiBhdHRyWzFdID09PSAnbic7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNTdHJpbmcob2JqKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdzdHJpbmcnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGlzTnVtYmVyKG9iaikge1xuICAgIHJldHVybiB0eXBlb2Ygb2JqID09PSAnbnVtYmVyJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc051bGwob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gbnVsbDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1RydWUob2JqKSB7XG4gICAgcmV0dXJuIG9iaiA9PT0gdHJ1ZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpc1VuZGVmaW5lZChvYmopIHtcbiAgICByZXR1cm4gb2JqID09PSB1bmRlZmluZWQ7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNPYmplY3Qobykge1xuICAgIHJldHVybiB0eXBlb2YgbyA9PT0gJ29iamVjdCc7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhyb3dFcnJvcihtZXNzYWdlKSB7XG4gICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICAgIG1lc3NhZ2UgPSBFUlJPUl9NU0c7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgSW5mZXJubyBFcnJvcjogJHttZXNzYWdlfWApO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5pbmcobWVzc2FnZSkge1xuICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjb21iaW5lRnJvbShmaXJzdCwgc2Vjb25kKSB7XG4gICAgY29uc3Qgb2JqID0ge307XG4gICAgbGV0IGtleTtcbiAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgZm9yIChrZXkgaW4gZmlyc3QpIHtcbiAgICAgICAgICAgIG9ialtrZXldID0gZmlyc3Rba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoc2Vjb25kKSB7XG4gICAgICAgIGZvciAoa2V5IGluIHNlY29uZCkge1xuICAgICAgICAgICAgb2JqW2tleV0gPSBzZWNvbmRba2V5XTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xufVxuZXhwb3J0IGZ1bmN0aW9uIExpZmVjeWNsZSgpIHtcbiAgICB0aGlzLmxpc3RlbmVycyA9IFtdO1xufVxuTGlmZWN5Y2xlLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5saXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XG59O1xuTGlmZWN5Y2xlLnByb3RvdHlwZS50cmlnZ2VyID0gZnVuY3Rpb24gdHJpZ2dlcigpIHtcbiAgICBjb25zdCBsaXN0ZW5lcnMgPSB0aGlzLmxpc3RlbmVycztcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGxpc3RlbmVyc1tpXSgpO1xuICAgIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5mZXJuby1zaGFyZWQvZGlzdC1lcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBpc0FycmF5LCBpc0ludmFsaWQsIGlzTnVsbE9yVW5kZWYsIGlzU3RyaW5nT3JOdW1iZXIsIGlzVW5kZWZpbmVkLCB0aHJvd0Vycm9yLCBjb21iaW5lRnJvbSB9IGZyb20gJ2luZmVybm8tc2hhcmVkJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL2NvcmUvb3B0aW9ucyc7XG5pbXBvcnQgeyBkaXJlY3RDbG9uZSwgY3JlYXRlVGV4dFZOb2RlLCBjcmVhdGVWb2lkVk5vZGUgfSBmcm9tICcuLi9jb3JlL1ZOb2Rlcyc7XG5pbXBvcnQgeyBzdmdOUyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IG1vdW50IH0gZnJvbSAnLi9tb3VudGluZyc7XG5pbXBvcnQgeyBwYXRjaCB9IGZyb20gJy4vcGF0Y2hpbmcnO1xuaW1wb3J0IHsgY29tcG9uZW50VG9ET01Ob2RlTWFwIH0gZnJvbSAnLi9yZW5kZXJpbmcnO1xuaW1wb3J0IHsgdW5tb3VudCB9IGZyb20gJy4vdW5tb3VudGluZyc7XG4vLyBXZSBuZWVkIEVNUFRZX09CSiBkZWZpbmVkIGluIG9uZSBwbGFjZS5cbi8vIEl0cyB1c2VkIGZvciBjb21wYXJpc29uIHNvIHdlIGNhbnQgaW5saW5lIGl0IGludG8gc2hhcmVkXG5leHBvcnQgY29uc3QgRU1QVFlfT0JKID0ge307XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIE9iamVjdC5mcmVlemUoRU1QVFlfT0JKKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDbGFzc0NvbXBvbmVudEluc3RhbmNlKHZOb2RlLCBDb21wb25lbnQsIHByb3BzLCBjb250ZXh0LCBpc1NWRykge1xuICAgIGlmIChpc1VuZGVmaW5lZChjb250ZXh0KSkge1xuICAgICAgICBjb250ZXh0ID0gRU1QVFlfT0JKOyAvLyBDb250ZXh0IHNob3VsZCBub3QgYmUgbXV0YWJsZVxuICAgIH1cbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDb21wb25lbnQocHJvcHMsIGNvbnRleHQpO1xuICAgIGluc3RhbmNlLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIGlmIChpbnN0YW5jZS5wcm9wcyA9PT0gRU1QVFlfT0JKKSB7XG4gICAgICAgIGluc3RhbmNlLnByb3BzID0gcHJvcHM7XG4gICAgfVxuICAgIGluc3RhbmNlLl9wYXRjaCA9IHBhdGNoO1xuICAgIGlmIChvcHRpb25zLmZpbmRET01Ob2RlRW5hYmxlZCkge1xuICAgICAgICBpbnN0YW5jZS5fY29tcG9uZW50VG9ET01Ob2RlTWFwID0gY29tcG9uZW50VG9ET01Ob2RlTWFwO1xuICAgIH1cbiAgICBpbnN0YW5jZS5fdW5tb3VudGVkID0gZmFsc2U7XG4gICAgaW5zdGFuY2UuX3BlbmRpbmdTZXRTdGF0ZSA9IHRydWU7XG4gICAgaW5zdGFuY2UuX2lzU1ZHID0gaXNTVkc7XG4gICAgaWYgKCFpc1VuZGVmaW5lZChpbnN0YW5jZS5jb21wb25lbnRXaWxsTW91bnQpKSB7XG4gICAgICAgIGluc3RhbmNlLmNvbXBvbmVudFdpbGxNb3VudCgpO1xuICAgIH1cbiAgICBsZXQgY2hpbGRDb250ZXh0O1xuICAgIGlmICghaXNVbmRlZmluZWQoaW5zdGFuY2UuZ2V0Q2hpbGRDb250ZXh0KSkge1xuICAgICAgICBjaGlsZENvbnRleHQgPSBpbnN0YW5jZS5nZXRDaGlsZENvbnRleHQoKTtcbiAgICB9XG4gICAgaWYgKGlzTnVsbE9yVW5kZWYoY2hpbGRDb250ZXh0KSkge1xuICAgICAgICBpbnN0YW5jZS5fY2hpbGRDb250ZXh0ID0gY29udGV4dDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGluc3RhbmNlLl9jaGlsZENvbnRleHQgPSBjb21iaW5lRnJvbShjb250ZXh0LCBjaGlsZENvbnRleHQpO1xuICAgIH1cbiAgICBvcHRpb25zLmJlZm9yZVJlbmRlciAmJiBvcHRpb25zLmJlZm9yZVJlbmRlcihpbnN0YW5jZSk7XG4gICAgbGV0IGlucHV0ID0gaW5zdGFuY2UucmVuZGVyKHByb3BzLCBpbnN0YW5jZS5zdGF0ZSwgY29udGV4dCk7XG4gICAgb3B0aW9ucy5hZnRlclJlbmRlciAmJiBvcHRpb25zLmFmdGVyUmVuZGVyKGluc3RhbmNlKTtcbiAgICBpZiAoaXNBcnJheShpbnB1dCkpIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoJ2EgdmFsaWQgSW5mZXJubyBWTm9kZSAob3IgbnVsbCkgbXVzdCBiZSByZXR1cm5lZCBmcm9tIGEgY29tcG9uZW50IHJlbmRlci4gWW91IG1heSBoYXZlIHJldHVybmVkIGFuIGFycmF5IG9yIGFuIGludmFsaWQgb2JqZWN0LicpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNJbnZhbGlkKGlucHV0KSkge1xuICAgICAgICBpbnB1dCA9IGNyZWF0ZVZvaWRWTm9kZSgpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyKGlucHV0KSkge1xuICAgICAgICBpbnB1dCA9IGNyZWF0ZVRleHRWTm9kZShpbnB1dCwgbnVsbCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAoaW5wdXQuZG9tKSB7XG4gICAgICAgICAgICBpbnB1dCA9IGRpcmVjdENsb25lKGlucHV0KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5wdXQuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgIC8vIGlmIHdlIGhhdmUgYW4gaW5wdXQgdGhhdCBpcyBhbHNvIGEgY29tcG9uZW50LCB3ZSBydW4gaW50byBhIHRyaWNreSBzaXR1YXRpb25cbiAgICAgICAgICAgIC8vIHdoZXJlIHRoZSByb290IHZOb2RlIG5lZWRzIHRvIGFsd2F5cyBoYXZlIHRoZSBjb3JyZWN0IERPTSBlbnRyeVxuICAgICAgICAgICAgLy8gc28gd2UgYnJlYWsgbW9ub21vcnBoaXNtIG9uIG91ciBpbnB1dCBhbmQgc3VwcGx5IGl0IG91ciB2Tm9kZSBhcyBwYXJlbnRWTm9kZVxuICAgICAgICAgICAgLy8gd2UgY2FuIG9wdGltaXNlIHRoaXMgaW4gdGhlIGZ1dHVyZSwgYnV0IHRoaXMgZ2V0cyB1cyBvdXQgb2YgYSBsb3Qgb2YgaXNzdWVzXG4gICAgICAgICAgICBpbnB1dC5wYXJlbnRWTm9kZSA9IHZOb2RlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluc3RhbmNlLl9wZW5kaW5nU2V0U3RhdGUgPSBmYWxzZTtcbiAgICBpbnN0YW5jZS5fbGFzdElucHV0ID0gaW5wdXQ7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VMYXN0Q2hpbGRBbmRVbm1vdW50KGxhc3RJbnB1dCwgbmV4dElucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKSB7XG4gICAgcmVwbGFjZVZOb2RlKHBhcmVudERvbSwgbW91bnQobmV4dElucHV0LCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSwgbGFzdElucHV0LCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlVk5vZGUocGFyZW50RG9tLCBkb20sIHZOb2RlLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKSB7XG4gICAgdW5tb3VudCh2Tm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgIHJlcGxhY2VDaGlsZChwYXJlbnREb20sIGRvbSwgdk5vZGUuZG9tKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50SW5wdXQodk5vZGUsIGNvbXBvbmVudCwgcHJvcHMsIGNvbnRleHQpIHtcbiAgICBsZXQgaW5wdXQgPSBjb21wb25lbnQocHJvcHMsIGNvbnRleHQpO1xuICAgIGlmIChpc0FycmF5KGlucHV0KSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcignYSB2YWxpZCBJbmZlcm5vIFZOb2RlIChvciBudWxsKSBtdXN0IGJlIHJldHVybmVkIGZyb20gYSBjb21wb25lbnQgcmVuZGVyLiBZb3UgbWF5IGhhdmUgcmV0dXJuZWQgYW4gYXJyYXkgb3IgYW4gaW52YWxpZCBvYmplY3QuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0ludmFsaWQoaW5wdXQpKSB7XG4gICAgICAgIGlucHV0ID0gY3JlYXRlVm9pZFZOb2RlKCk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIoaW5wdXQpKSB7XG4gICAgICAgIGlucHV0ID0gY3JlYXRlVGV4dFZOb2RlKGlucHV0LCBudWxsKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChpbnB1dC5kb20pIHtcbiAgICAgICAgICAgIGlucHV0ID0gZGlyZWN0Q2xvbmUoaW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbnB1dC5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAgICAgLy8gaWYgd2UgaGF2ZSBhbiBpbnB1dCB0aGF0IGlzIGFsc28gYSBjb21wb25lbnQsIHdlIHJ1biBpbnRvIGEgdHJpY2t5IHNpdHVhdGlvblxuICAgICAgICAgICAgLy8gd2hlcmUgdGhlIHJvb3Qgdk5vZGUgbmVlZHMgdG8gYWx3YXlzIGhhdmUgdGhlIGNvcnJlY3QgRE9NIGVudHJ5XG4gICAgICAgICAgICAvLyBzbyB3ZSBicmVhayBtb25vbW9ycGhpc20gb24gb3VyIGlucHV0IGFuZCBzdXBwbHkgaXQgb3VyIHZOb2RlIGFzIHBhcmVudFZOb2RlXG4gICAgICAgICAgICAvLyB3ZSBjYW4gb3B0aW1pc2UgdGhpcyBpbiB0aGUgZnV0dXJlLCBidXQgdGhpcyBnZXRzIHVzIG91dCBvZiBhIGxvdCBvZiBpc3N1ZXNcbiAgICAgICAgICAgIGlucHV0LnBhcmVudFZOb2RlID0gdk5vZGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGlucHV0O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldFRleHRDb250ZW50KGRvbSwgdGV4dCkge1xuICAgIGlmICh0ZXh0ICE9PSAnJykge1xuICAgICAgICBkb20udGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgZG9tLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVRleHRDb250ZW50KGRvbSwgdGV4dCkge1xuICAgIGRvbS5maXJzdENoaWxkLm5vZGVWYWx1ZSA9IHRleHQ7XG59XG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBkb20pIHtcbiAgICBwYXJlbnREb20uYXBwZW5kQ2hpbGQoZG9tKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRPckFwcGVuZChwYXJlbnREb20sIG5ld05vZGUsIG5leHROb2RlKSB7XG4gICAgaWYgKGlzTnVsbE9yVW5kZWYobmV4dE5vZGUpKSB7XG4gICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgbmV3Tm9kZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBwYXJlbnREb20uaW5zZXJ0QmVmb3JlKG5ld05vZGUsIG5leHROb2RlKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZG9jdW1lbnRDcmVhdGVFbGVtZW50KHRhZywgaXNTVkcpIHtcbiAgICBpZiAoaXNTVkcgPT09IHRydWUpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhzdmdOUywgdGFnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHJlcGxhY2VXaXRoTmV3Tm9kZShsYXN0Tm9kZSwgbmV4dE5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpIHtcbiAgICB1bm1vdW50KGxhc3ROb2RlLCBudWxsLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgY29uc3QgZG9tID0gbW91bnQobmV4dE5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgIG5leHROb2RlLmRvbSA9IGRvbTtcbiAgICByZXBsYWNlQ2hpbGQocGFyZW50RG9tLCBkb20sIGxhc3ROb2RlLmRvbSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUNoaWxkKHBhcmVudERvbSwgbmV4dERvbSwgbGFzdERvbSkge1xuICAgIGlmICghcGFyZW50RG9tKSB7XG4gICAgICAgIHBhcmVudERvbSA9IGxhc3REb20ucGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcGFyZW50RG9tLnJlcGxhY2VDaGlsZChuZXh0RG9tLCBsYXN0RG9tKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDaGlsZChwYXJlbnREb20sIGRvbSkge1xuICAgIHBhcmVudERvbS5yZW1vdmVDaGlsZChkb20pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUFsbENoaWxkcmVuKGRvbSwgY2hpbGRyZW4sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICBkb20udGV4dENvbnRlbnQgPSAnJztcbiAgICBpZiAoIW9wdGlvbnMucmVjeWNsaW5nRW5hYmxlZCB8fCAob3B0aW9ucy5yZWN5Y2xpbmdFbmFibGVkICYmICFpc1JlY3ljbGluZykpIHtcbiAgICAgICAgcmVtb3ZlQ2hpbGRyZW4obnVsbCwgY2hpbGRyZW4sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVDaGlsZHJlbihkb20sIGNoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgIGlmICghaXNJbnZhbGlkKGNoaWxkKSkge1xuICAgICAgICAgICAgdW5tb3VudChjaGlsZCwgZG9tLCBsaWZlY3ljbGUsIHRydWUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBpc0tleWVkKGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuKSB7XG4gICAgcmV0dXJuIG5leHRDaGlsZHJlbi5sZW5ndGggJiYgIWlzTnVsbE9yVW5kZWYobmV4dENoaWxkcmVuWzBdKSAmJiAhaXNOdWxsT3JVbmRlZihuZXh0Q2hpbGRyZW5bMF0ua2V5KVxuICAgICAgICAmJiBsYXN0Q2hpbGRyZW4ubGVuZ3RoICYmICFpc051bGxPclVuZGVmKGxhc3RDaGlsZHJlblswXSkgJiYgIWlzTnVsbE9yVW5kZWYobGFzdENoaWxkcmVuWzBdLmtleSk7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL0RPTS91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvLyBzaGltIGZvciB1c2luZyBwcm9jZXNzIGluIGJyb3dzZXJcbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuZnVuY3Rpb24gZGVmYXVsdFNldFRpbW91dCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbmZ1bmN0aW9uIGRlZmF1bHRDbGVhclRpbWVvdXQgKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY2xlYXJUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG4oZnVuY3Rpb24gKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2xlYXJUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBkZWZhdWx0Q2xlYXJUaW1lb3V0O1xuICAgIH1cbn0gKCkpXG5mdW5jdGlvbiBydW5UaW1lb3V0KGZ1bikge1xuICAgIGlmIChjYWNoZWRTZXRUaW1lb3V0ID09PSBzZXRUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICAvLyBpZiBzZXRUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkU2V0VGltZW91dCA9PT0gZGVmYXVsdFNldFRpbW91dCB8fCAhY2FjaGVkU2V0VGltZW91dCkgJiYgc2V0VGltZW91dCkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dChmdW4sIDApO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZnVuLCAwKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yXG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKHRoaXMsIGZ1biwgMCk7XG4gICAgICAgIH1cbiAgICB9XG5cblxufVxuZnVuY3Rpb24gcnVuQ2xlYXJUaW1lb3V0KG1hcmtlcikge1xuICAgIGlmIChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGNsZWFyVGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICAvLyBpZiBjbGVhclRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRDbGVhclRpbWVvdXQgPT09IGRlZmF1bHRDbGVhclRpbWVvdXQgfHwgIWNhY2hlZENsZWFyVGltZW91dCkgJiYgY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCAgdHJ1c3QgdGhlIGdsb2JhbCBvYmplY3Qgd2hlbiBjYWxsZWQgbm9ybWFsbHlcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbChudWxsLCBtYXJrZXIpO1xuICAgICAgICB9IGNhdGNoIChlKXtcbiAgICAgICAgICAgIC8vIHNhbWUgYXMgYWJvdmUgYnV0IHdoZW4gaXQncyBhIHZlcnNpb24gb2YgSS5FLiB0aGF0IG11c3QgaGF2ZSB0aGUgZ2xvYmFsIG9iamVjdCBmb3IgJ3RoaXMnLCBob3BmdWxseSBvdXIgY29udGV4dCBjb3JyZWN0IG90aGVyd2lzZSBpdCB3aWxsIHRocm93IGEgZ2xvYmFsIGVycm9yLlxuICAgICAgICAgICAgLy8gU29tZSB2ZXJzaW9ucyBvZiBJLkUuIGhhdmUgZGlmZmVyZW50IHJ1bGVzIGZvciBjbGVhclRpbWVvdXQgdnMgc2V0VGltZW91dFxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKHRoaXMsIG1hcmtlcik7XG4gICAgICAgIH1cbiAgICB9XG5cblxuXG59XG52YXIgcXVldWUgPSBbXTtcbnZhciBkcmFpbmluZyA9IGZhbHNlO1xudmFyIGN1cnJlbnRRdWV1ZTtcbnZhciBxdWV1ZUluZGV4ID0gLTE7XG5cbmZ1bmN0aW9uIGNsZWFuVXBOZXh0VGljaygpIHtcbiAgICBpZiAoIWRyYWluaW5nIHx8ICFjdXJyZW50UXVldWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIGlmIChjdXJyZW50UXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXVlID0gY3VycmVudFF1ZXVlLmNvbmNhdChxdWV1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgIH1cbiAgICBpZiAocXVldWUubGVuZ3RoKSB7XG4gICAgICAgIGRyYWluUXVldWUoKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRyYWluUXVldWUoKSB7XG4gICAgaWYgKGRyYWluaW5nKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHRpbWVvdXQgPSBydW5UaW1lb3V0KGNsZWFuVXBOZXh0VGljayk7XG4gICAgZHJhaW5pbmcgPSB0cnVlO1xuXG4gICAgdmFyIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB3aGlsZShsZW4pIHtcbiAgICAgICAgY3VycmVudFF1ZXVlID0gcXVldWU7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIHdoaWxlICgrK3F1ZXVlSW5kZXggPCBsZW4pIHtcbiAgICAgICAgICAgIGlmIChjdXJyZW50UXVldWUpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVldWVbcXVldWVJbmRleF0ucnVuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcXVldWVJbmRleCA9IC0xO1xuICAgICAgICBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgfVxuICAgIGN1cnJlbnRRdWV1ZSA9IG51bGw7XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBydW5DbGVhclRpbWVvdXQodGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBydW5UaW1lb3V0KGRyYWluUXVldWUpO1xuICAgIH1cbn07XG5cbi8vIHY4IGxpa2VzIHByZWRpY3RpYmxlIG9iamVjdHNcbmZ1bmN0aW9uIEl0ZW0oZnVuLCBhcnJheSkge1xuICAgIHRoaXMuZnVuID0gZnVuO1xuICAgIHRoaXMuYXJyYXkgPSBhcnJheTtcbn1cbkl0ZW0ucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLmZ1bi5hcHBseShudWxsLCB0aGlzLmFycmF5KTtcbn07XG5wcm9jZXNzLnRpdGxlID0gJ2Jyb3dzZXInO1xucHJvY2Vzcy5icm93c2VyID0gdHJ1ZTtcbnByb2Nlc3MuZW52ID0ge307XG5wcm9jZXNzLmFyZ3YgPSBbXTtcbnByb2Nlc3MudmVyc2lvbiA9ICcnOyAvLyBlbXB0eSBzdHJpbmcgdG8gYXZvaWQgcmVnZXhwIGlzc3Vlc1xucHJvY2Vzcy52ZXJzaW9ucyA9IHt9O1xuXG5mdW5jdGlvbiBub29wKCkge31cblxucHJvY2Vzcy5vbiA9IG5vb3A7XG5wcm9jZXNzLmFkZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3Mub25jZSA9IG5vb3A7XG5wcm9jZXNzLm9mZiA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUxpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlQWxsTGlzdGVuZXJzID0gbm9vcDtcbnByb2Nlc3MuZW1pdCA9IG5vb3A7XG5cbnByb2Nlc3MuYmluZGluZyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmJpbmRpbmcgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcblxucHJvY2Vzcy5jd2QgPSBmdW5jdGlvbiAoKSB7IHJldHVybiAnLycgfTtcbnByb2Nlc3MuY2hkaXIgPSBmdW5jdGlvbiAoZGlyKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdwcm9jZXNzLmNoZGlyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5wcm9jZXNzLnVtYXNrID0gZnVuY3Rpb24oKSB7IHJldHVybiAwOyB9O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Byb2Nlc3MvYnJvd3Nlci5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJleHBvcnQgZGVmYXVsdCB7XG4gICAgcmVjeWNsaW5nRW5hYmxlZDogZmFsc2UsXG4gICAgZmluZERPTU5vZGVFbmFibGVkOiBmYWxzZSxcbiAgICByb290czogbnVsbCxcbiAgICBjcmVhdGVWTm9kZTogbnVsbCxcbiAgICBiZWZvcmVSZW5kZXI6IG51bGwsXG4gICAgYWZ0ZXJSZW5kZXI6IG51bGwsXG4gICAgYWZ0ZXJNb3VudDogbnVsbCxcbiAgICBhZnRlclVwZGF0ZTogbnVsbCxcbiAgICBiZWZvcmVVbm1vdW50OiBudWxsXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2luZmVybm8vZGlzdC1lcy9jb3JlL29wdGlvbnMuanNcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNJbnZhbGlkLCBpc051bGxPclVuZGVmLCBpc1N0YXRlZnVsQ29tcG9uZW50LCBpc1VuZGVmaW5lZCwgaXNTdHJpbmdPck51bWJlciwgY29tYmluZUZyb20gfSBmcm9tICdpbmZlcm5vLXNoYXJlZCc7XG5pbXBvcnQgeyBub3JtYWxpemUgfSBmcm9tICcuL25vcm1hbGl6YXRpb24nO1xuaW1wb3J0IG9wdGlvbnMgZnJvbSAnLi9vcHRpb25zJztcbmltcG9ydCB7IEVNUFRZX09CSiB9IGZyb20gJy4uL0RPTS91dGlscyc7XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVk5vZGUoZmxhZ3MsIHR5cGUsIHByb3BzLCBjaGlsZHJlbiwgZXZlbnRzLCBrZXksIHJlZiwgbm9Ob3JtYWxpc2UpIHtcbiAgICBpZiAoZmxhZ3MgJiAxNiAvKiBDb21wb25lbnRVbmtub3duICovKSB7XG4gICAgICAgIGZsYWdzID0gaXNTdGF0ZWZ1bENvbXBvbmVudCh0eXBlKSA/IDQgLyogQ29tcG9uZW50Q2xhc3MgKi8gOiA4IC8qIENvbXBvbmVudEZ1bmN0aW9uICovO1xuICAgIH1cbiAgICBjb25zdCB2Tm9kZSA9IHtcbiAgICAgICAgY2hpbGRyZW46IGlzVW5kZWZpbmVkKGNoaWxkcmVuKSA/IG51bGwgOiBjaGlsZHJlbixcbiAgICAgICAgZG9tOiBudWxsLFxuICAgICAgICBldmVudHM6IGV2ZW50cyB8fCBudWxsLFxuICAgICAgICBmbGFncyxcbiAgICAgICAga2V5OiBpc1VuZGVmaW5lZChrZXkpID8gbnVsbCA6IGtleSxcbiAgICAgICAgcHJvcHM6IHByb3BzIHx8IG51bGwsXG4gICAgICAgIHJlZjogcmVmIHx8IG51bGwsXG4gICAgICAgIHR5cGVcbiAgICB9O1xuICAgIGlmICghbm9Ob3JtYWxpc2UpIHtcbiAgICAgICAgbm9ybWFsaXplKHZOb2RlKTtcbiAgICB9XG4gICAgaWYgKG9wdGlvbnMuY3JlYXRlVk5vZGUpIHtcbiAgICAgICAgb3B0aW9ucy5jcmVhdGVWTm9kZSh2Tm9kZSk7XG4gICAgfVxuICAgIHJldHVybiB2Tm9kZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RDbG9uZSh2Tm9kZVRvQ2xvbmUpIHtcbiAgICBsZXQgbmV3Vk5vZGU7XG4gICAgY29uc3QgZmxhZ3MgPSB2Tm9kZVRvQ2xvbmUuZmxhZ3M7XG4gICAgaWYgKGZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgIGxldCBwcm9wcztcbiAgICAgICAgY29uc3QgcHJvcHNUb0Nsb25lID0gdk5vZGVUb0Nsb25lLnByb3BzO1xuICAgICAgICBpZiAoIXByb3BzVG9DbG9uZSkge1xuICAgICAgICAgICAgcHJvcHMgPSBFTVBUWV9PQko7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwcm9wcyA9IHt9O1xuICAgICAgICAgICAgZm9yIChsZXQga2V5IGluIHByb3BzVG9DbG9uZSkge1xuICAgICAgICAgICAgICAgIHByb3BzW2tleV0gPSBwcm9wc1RvQ2xvbmVba2V5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBuZXdWTm9kZSA9IGNyZWF0ZVZOb2RlKGZsYWdzLCB2Tm9kZVRvQ2xvbmUudHlwZSwgcHJvcHMsIG51bGwsIHZOb2RlVG9DbG9uZS5ldmVudHMsIHZOb2RlVG9DbG9uZS5rZXksIHZOb2RlVG9DbG9uZS5yZWYsIHRydWUpO1xuICAgICAgICBjb25zdCBuZXdQcm9wcyA9IG5ld1ZOb2RlLnByb3BzO1xuICAgICAgICBpZiAobmV3UHJvcHMpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld0NoaWxkcmVuID0gbmV3UHJvcHMuY2hpbGRyZW47XG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGFsc28gY2xvbmUgY29tcG9uZW50IGNoaWxkcmVuIHRoYXQgYXJlIGluIHByb3BzXG4gICAgICAgICAgICAvLyBhcyB0aGUgY2hpbGRyZW4gbWF5IGFsc28gaGF2ZSBiZWVuIGhvaXN0ZWRcbiAgICAgICAgICAgIGlmIChuZXdDaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGlmIChpc0FycmF5KG5ld0NoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsZW4gPSBuZXdDaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsZW4gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0bXBBcnJheSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gbmV3Q2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nT3JOdW1iZXIoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcEFycmF5LnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghaXNJbnZhbGlkKGNoaWxkKSAmJiBpc1ZOb2RlKGNoaWxkKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXBBcnJheS5wdXNoKGRpcmVjdENsb25lKGNoaWxkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvcHMuY2hpbGRyZW4gPSB0bXBBcnJheTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc1ZOb2RlKG5ld0NoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgICAgICBuZXdQcm9wcy5jaGlsZHJlbiA9IGRpcmVjdENsb25lKG5ld0NoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbmV3Vk5vZGUuY2hpbGRyZW4gPSBudWxsO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFncyAmIDM5NzAgLyogRWxlbWVudCAqLykge1xuICAgICAgICBjb25zdCBjaGlsZHJlbiA9IHZOb2RlVG9DbG9uZS5jaGlsZHJlbjtcbiAgICAgICAgbGV0IHByb3BzO1xuICAgICAgICBjb25zdCBwcm9wc1RvQ2xvbmUgPSB2Tm9kZVRvQ2xvbmUucHJvcHM7XG4gICAgICAgIGlmICghcHJvcHNUb0Nsb25lKSB7XG4gICAgICAgICAgICBwcm9wcyA9IEVNUFRZX09CSjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHByb3BzID0ge307XG4gICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gcHJvcHNUb0Nsb25lKSB7XG4gICAgICAgICAgICAgICAgcHJvcHNba2V5XSA9IHByb3BzVG9DbG9uZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG5ld1ZOb2RlID0gY3JlYXRlVk5vZGUoZmxhZ3MsIHZOb2RlVG9DbG9uZS50eXBlLCBwcm9wcywgY2hpbGRyZW4sIHZOb2RlVG9DbG9uZS5ldmVudHMsIHZOb2RlVG9DbG9uZS5rZXksIHZOb2RlVG9DbG9uZS5yZWYsICFjaGlsZHJlbik7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgMSAvKiBUZXh0ICovKSB7XG4gICAgICAgIG5ld1ZOb2RlID0gY3JlYXRlVGV4dFZOb2RlKHZOb2RlVG9DbG9uZS5jaGlsZHJlbiwgdk5vZGVUb0Nsb25lLmtleSk7XG4gICAgfVxuICAgIHJldHVybiBuZXdWTm9kZTtcbn1cbi8qXG4gZGlyZWN0Q2xvbmUgaXMgcHJlZmVycmVkIG92ZXIgY2xvbmVWTm9kZSBhbmQgdXNlZCBpbnRlcm5hbGx5IGFsc28uXG4gVGhpcyBmdW5jdGlvbiBtYWtlcyBJbmZlcm5vIGJhY2t3YXJkcyBjb21wYXRpYmxlLlxuIEFuZCBjYW4gYmUgdHJlZS1zaGFrZWQgYnkgbW9kZXJuIGJ1bmRsZXJzXG5cbiBXb3VsZCBiZSBuaWNlIHRvIGNvbWJpbmUgdGhpcyB3aXRoIGRpcmVjdENsb25lIGJ1dCBjb3VsZCBub3QgZG8gaXQgd2l0aG91dCBicmVha2luZyBjaGFuZ2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsb25lVk5vZGUodk5vZGVUb0Nsb25lLCBwcm9wcywgLi4uX2NoaWxkcmVuKSB7XG4gICAgbGV0IGNoaWxkcmVuID0gX2NoaWxkcmVuO1xuICAgIGNvbnN0IGNoaWxkcmVuTGVuID0gX2NoaWxkcmVuLmxlbmd0aDtcbiAgICBpZiAoY2hpbGRyZW5MZW4gPiAwICYmICFpc1VuZGVmaW5lZChfY2hpbGRyZW5bMF0pKSB7XG4gICAgICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgICAgIHByb3BzID0ge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoaWxkcmVuTGVuID09PSAxKSB7XG4gICAgICAgICAgICBjaGlsZHJlbiA9IF9jaGlsZHJlblswXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgbmV3Vk5vZGU7XG4gICAgaWYgKGlzQXJyYXkodk5vZGVUb0Nsb25lKSkge1xuICAgICAgICBjb25zdCB0bXBBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gdk5vZGVUb0Nsb25lLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICB0bXBBcnJheS5wdXNoKGRpcmVjdENsb25lKHZOb2RlVG9DbG9uZVtpXSkpO1xuICAgICAgICB9XG4gICAgICAgIG5ld1ZOb2RlID0gdG1wQXJyYXk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBmbGFncyA9IHZOb2RlVG9DbG9uZS5mbGFncztcbiAgICAgICAgY29uc3QgZXZlbnRzID0gdk5vZGVUb0Nsb25lLmV2ZW50cyB8fCAocHJvcHMgJiYgcHJvcHMuZXZlbnRzKSB8fCBudWxsO1xuICAgICAgICBjb25zdCBrZXkgPSAhaXNOdWxsT3JVbmRlZih2Tm9kZVRvQ2xvbmUua2V5KSA/IHZOb2RlVG9DbG9uZS5rZXkgOiAocHJvcHMgPyBwcm9wcy5rZXkgOiBudWxsKTtcbiAgICAgICAgY29uc3QgcmVmID0gdk5vZGVUb0Nsb25lLnJlZiB8fCAocHJvcHMgPyBwcm9wcy5yZWYgOiBudWxsKTtcbiAgICAgICAgaWYgKGZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICBuZXdWTm9kZSA9IGNyZWF0ZVZOb2RlKGZsYWdzLCB2Tm9kZVRvQ2xvbmUudHlwZSwgKCF2Tm9kZVRvQ2xvbmUucHJvcHMgJiYgIXByb3BzKSA/IEVNUFRZX09CSiA6IGNvbWJpbmVGcm9tKHZOb2RlVG9DbG9uZS5wcm9wcywgcHJvcHMpLCBudWxsLCBldmVudHMsIGtleSwgcmVmLCB0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IG5ld1Byb3BzID0gbmV3Vk5vZGUucHJvcHM7XG4gICAgICAgICAgICBpZiAobmV3UHJvcHMpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdDaGlsZHJlbiA9IG5ld1Byb3BzLmNoaWxkcmVuO1xuICAgICAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gYWxzbyBjbG9uZSBjb21wb25lbnQgY2hpbGRyZW4gdGhhdCBhcmUgaW4gcHJvcHNcbiAgICAgICAgICAgICAgICAvLyBhcyB0aGUgY2hpbGRyZW4gbWF5IGFsc28gaGF2ZSBiZWVuIGhvaXN0ZWRcbiAgICAgICAgICAgICAgICBpZiAobmV3Q2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQXJyYXkobmV3Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsZW4gPSBuZXdDaGlsZHJlbi5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobGVuID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRtcEFycmF5ID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IG5ld0NoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNTdHJpbmdPck51bWJlcihjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcEFycmF5LnB1c2goY2hpbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKCFpc0ludmFsaWQoY2hpbGQpICYmIGlzVk5vZGUoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bXBBcnJheS5wdXNoKGRpcmVjdENsb25lKGNoaWxkKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvcHMuY2hpbGRyZW4gPSB0bXBBcnJheTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChpc1ZOb2RlKG5ld0NoaWxkcmVuKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmV3UHJvcHMuY2hpbGRyZW4gPSBkaXJlY3RDbG9uZShuZXdDaGlsZHJlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdWTm9kZS5jaGlsZHJlbiA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZmxhZ3MgJiAzOTcwIC8qIEVsZW1lbnQgKi8pIHtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gKHByb3BzICYmICFpc1VuZGVmaW5lZChwcm9wcy5jaGlsZHJlbikpID8gcHJvcHMuY2hpbGRyZW4gOiB2Tm9kZVRvQ2xvbmUuY2hpbGRyZW47XG4gICAgICAgICAgICBuZXdWTm9kZSA9IGNyZWF0ZVZOb2RlKGZsYWdzLCB2Tm9kZVRvQ2xvbmUudHlwZSwgKCF2Tm9kZVRvQ2xvbmUucHJvcHMgJiYgIXByb3BzKSA/IEVNUFRZX09CSiA6IGNvbWJpbmVGcm9tKHZOb2RlVG9DbG9uZS5wcm9wcywgcHJvcHMpLCBjaGlsZHJlbiwgZXZlbnRzLCBrZXksIHJlZiwgIWNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChmbGFncyAmIDEgLyogVGV4dCAqLykge1xuICAgICAgICAgICAgbmV3Vk5vZGUgPSBjcmVhdGVUZXh0Vk5vZGUodk5vZGVUb0Nsb25lLmNoaWxkcmVuLCBrZXkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXdWTm9kZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVWb2lkVk5vZGUoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVZOb2RlKDQwOTYgLyogVm9pZCAqLyk7XG59XG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVGV4dFZOb2RlKHRleHQsIGtleSkge1xuICAgIHJldHVybiBjcmVhdGVWTm9kZSgxIC8qIFRleHQgKi8sIG51bGwsIG51bGwsIHRleHQsIG51bGwsIGtleSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaXNWTm9kZShvKSB7XG4gICAgcmV0dXJuICEhby5mbGFncztcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmZlcm5vL2Rpc3QtZXMvY29yZS9WTm9kZXMuanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNBdHRyQW5FdmVudCwgaXNGdW5jdGlvbiwgaXNJbnZhbGlkLCBpc051bGwsIGlzTnVsbE9yVW5kZWYsIGlzTnVtYmVyLCBpc09iamVjdCwgaXNTdHJpbmcsIGlzU3RyaW5nT3JOdW1iZXIsIGlzVW5kZWZpbmVkLCBOT19PUCwgdGhyb3dFcnJvciwgY29tYmluZUZyb20gfSBmcm9tICdpbmZlcm5vLXNoYXJlZCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuLi9jb3JlL29wdGlvbnMnO1xuaW1wb3J0IHsgZGlyZWN0Q2xvbmUsIGNyZWF0ZVRleHRWTm9kZSwgY3JlYXRlVm9pZFZOb2RlLCBpc1ZOb2RlIH0gZnJvbSAnLi4vY29yZS9WTm9kZXMnO1xuaW1wb3J0IHsgYm9vbGVhblByb3BzLCBkZWxlZ2F0ZWRQcm9wcywgaXNVbml0bGVzc051bWJlciwgbmFtZXNwYWNlcywgc2tpcFByb3BzLCBzdHJpY3RQcm9wcyB9IGZyb20gJy4vY29uc3RhbnRzJztcbmltcG9ydCB7IGhhbmRsZUV2ZW50IH0gZnJvbSAnLi9ldmVudHMvZGVsZWdhdGlvbic7XG5pbXBvcnQgeyBtb3VudCwgbW91bnRBcnJheUNoaWxkcmVuLCBtb3VudENvbXBvbmVudCwgbW91bnRFbGVtZW50LCBtb3VudFJlZiwgbW91bnRUZXh0LCBtb3VudFZvaWQgfSBmcm9tICcuL21vdW50aW5nJztcbmltcG9ydCB7IGFwcGVuZENoaWxkLCBpbnNlcnRPckFwcGVuZCwgaXNLZXllZCwgcmVtb3ZlQWxsQ2hpbGRyZW4sIHJlcGxhY2VDaGlsZCwgcmVwbGFjZUxhc3RDaGlsZEFuZFVubW91bnQsIHJlcGxhY2VWTm9kZSwgcmVwbGFjZVdpdGhOZXdOb2RlLCBzZXRUZXh0Q29udGVudCwgdXBkYXRlVGV4dENvbnRlbnQsIEVNUFRZX09CSiB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHsgY29tcG9uZW50VG9ET01Ob2RlTWFwIH0gZnJvbSAnLi9yZW5kZXJpbmcnO1xuaW1wb3J0IHsgdW5tb3VudCB9IGZyb20gJy4vdW5tb3VudGluZyc7XG5pbXBvcnQgcHJvY2Vzc0VsZW1lbnQgZnJvbSAnLi93cmFwcGVycy9wcm9jZXNzRWxlbWVudCc7XG5leHBvcnQgZnVuY3Rpb24gcGF0Y2gobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpIHtcbiAgICBpZiAobGFzdFZOb2RlICE9PSBuZXh0Vk5vZGUpIHtcbiAgICAgICAgY29uc3QgbGFzdEZsYWdzID0gbGFzdFZOb2RlLmZsYWdzO1xuICAgICAgICBjb25zdCBuZXh0RmxhZ3MgPSBuZXh0Vk5vZGUuZmxhZ3M7XG4gICAgICAgIGlmIChuZXh0RmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgIGlmIChsYXN0RmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgICAgICAgICBwYXRjaENvbXBvbmVudChsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBuZXh0RmxhZ3MgJiA0IC8qIENvbXBvbmVudENsYXNzICovLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlVk5vZGUocGFyZW50RG9tLCBtb3VudENvbXBvbmVudChuZXh0Vk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIG5leHRGbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8pLCBsYXN0Vk5vZGUsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKG5leHRGbGFncyAmIDM5NzAgLyogRWxlbWVudCAqLykge1xuICAgICAgICAgICAgaWYgKGxhc3RGbGFncyAmIDM5NzAgLyogRWxlbWVudCAqLykge1xuICAgICAgICAgICAgICAgIHBhdGNoRWxlbWVudChsYXN0Vk5vZGUsIG5leHRWTm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXBsYWNlVk5vZGUocGFyZW50RG9tLCBtb3VudEVsZW1lbnQobmV4dFZOb2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSwgbGFzdFZOb2RlLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXh0RmxhZ3MgJiAxIC8qIFRleHQgKi8pIHtcbiAgICAgICAgICAgIGlmIChsYXN0RmxhZ3MgJiAxIC8qIFRleHQgKi8pIHtcbiAgICAgICAgICAgICAgICBwYXRjaFRleHQobGFzdFZOb2RlLCBuZXh0Vk5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVwbGFjZVZOb2RlKHBhcmVudERvbSwgbW91bnRUZXh0KG5leHRWTm9kZSwgbnVsbCksIGxhc3RWTm9kZSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV4dEZsYWdzICYgNDA5NiAvKiBWb2lkICovKSB7XG4gICAgICAgICAgICBpZiAobGFzdEZsYWdzICYgNDA5NiAvKiBWb2lkICovKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hWb2lkKGxhc3RWTm9kZSwgbmV4dFZOb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlcGxhY2VWTm9kZShwYXJlbnREb20sIG1vdW50Vm9pZChuZXh0Vk5vZGUsIG51bGwpLCBsYXN0Vk5vZGUsIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gRXJyb3IgY2FzZTogbW91bnQgbmV3IG9uZSByZXBsYWNpbmcgb2xkIG9uZVxuICAgICAgICAgICAgcmVwbGFjZUxhc3RDaGlsZEFuZFVubW91bnQobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gdW5tb3VudENoaWxkcmVuKGNoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICBpZiAoaXNWTm9kZShjaGlsZHJlbikpIHtcbiAgICAgICAgdW5tb3VudChjaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIHRydWUsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNBcnJheShjaGlsZHJlbikpIHtcbiAgICAgICAgcmVtb3ZlQWxsQ2hpbGRyZW4oZG9tLCBjaGlsZHJlbiwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb20udGV4dENvbnRlbnQgPSAnJztcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hFbGVtZW50KGxhc3RWTm9kZSwgbmV4dFZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKSB7XG4gICAgY29uc3QgbmV4dFRhZyA9IG5leHRWTm9kZS50eXBlO1xuICAgIGNvbnN0IGxhc3RUYWcgPSBsYXN0Vk5vZGUudHlwZTtcbiAgICBpZiAobGFzdFRhZyAhPT0gbmV4dFRhZykge1xuICAgICAgICByZXBsYWNlV2l0aE5ld05vZGUobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgZG9tID0gbGFzdFZOb2RlLmRvbTtcbiAgICAgICAgY29uc3QgbGFzdFByb3BzID0gbGFzdFZOb2RlLnByb3BzO1xuICAgICAgICBjb25zdCBuZXh0UHJvcHMgPSBuZXh0Vk5vZGUucHJvcHM7XG4gICAgICAgIGNvbnN0IGxhc3RDaGlsZHJlbiA9IGxhc3RWTm9kZS5jaGlsZHJlbjtcbiAgICAgICAgY29uc3QgbmV4dENoaWxkcmVuID0gbmV4dFZOb2RlLmNoaWxkcmVuO1xuICAgICAgICBjb25zdCBsYXN0RmxhZ3MgPSBsYXN0Vk5vZGUuZmxhZ3M7XG4gICAgICAgIGNvbnN0IG5leHRGbGFncyA9IG5leHRWTm9kZS5mbGFncztcbiAgICAgICAgY29uc3QgbmV4dFJlZiA9IG5leHRWTm9kZS5yZWY7XG4gICAgICAgIGNvbnN0IGxhc3RFdmVudHMgPSBsYXN0Vk5vZGUuZXZlbnRzO1xuICAgICAgICBjb25zdCBuZXh0RXZlbnRzID0gbmV4dFZOb2RlLmV2ZW50cztcbiAgICAgICAgbmV4dFZOb2RlLmRvbSA9IGRvbTtcbiAgICAgICAgaWYgKGlzU1ZHIHx8IChuZXh0RmxhZ3MgJiAxMjggLyogU3ZnRWxlbWVudCAqLykpIHtcbiAgICAgICAgICAgIGlzU1ZHID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobGFzdENoaWxkcmVuICE9PSBuZXh0Q2hpbGRyZW4pIHtcbiAgICAgICAgICAgIHBhdGNoQ2hpbGRyZW4obGFzdEZsYWdzLCBuZXh0RmxhZ3MsIGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaGFzQ29udHJvbGxlZFZhbHVlID0gZmFsc2U7XG4gICAgICAgIGlmICghKG5leHRGbGFncyAmIDIgLyogSHRtbEVsZW1lbnQgKi8pKSB7XG4gICAgICAgICAgICBoYXNDb250cm9sbGVkVmFsdWUgPSBwcm9jZXNzRWxlbWVudChuZXh0RmxhZ3MsIG5leHRWTm9kZSwgZG9tLCBmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gaW5saW5lZCBwYXRjaFByb3BzICAtLSBzdGFydHMgLS1cbiAgICAgICAgaWYgKGxhc3RQcm9wcyAhPT0gbmV4dFByb3BzKSB7XG4gICAgICAgICAgICBjb25zdCBsYXN0UHJvcHNPckVtcHR5ID0gbGFzdFByb3BzIHx8IEVNUFRZX09CSjtcbiAgICAgICAgICAgIGNvbnN0IG5leHRQcm9wc09yRW1wdHkgPSBuZXh0UHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgICAgICAgICAgaWYgKG5leHRQcm9wc09yRW1wdHkgIT09IEVNUFRZX09CSikge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHByb3AgaW4gbmV4dFByb3BzT3JFbXB0eSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBkbyBub3QgYWRkIGEgaGFzT3duUHJvcGVydHkgY2hlY2sgaGVyZSwgaXQgYWZmZWN0cyBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXh0VmFsdWUgPSBuZXh0UHJvcHNPckVtcHR5W3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsYXN0VmFsdWUgPSBsYXN0UHJvcHNPckVtcHR5W3Byb3BdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZihuZXh0VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVQcm9wKHByb3AsIG5leHRWYWx1ZSwgZG9tKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGNoUHJvcChwcm9wLCBsYXN0VmFsdWUsIG5leHRWYWx1ZSwgZG9tLCBpc1NWRywgaGFzQ29udHJvbGxlZFZhbHVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChsYXN0UHJvcHNPckVtcHR5ICE9PSBFTVBUWV9PQkopIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGxhc3RQcm9wc09yRW1wdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzTnVsbE9yVW5kZWYobmV4dFByb3BzT3JFbXB0eVtwcm9wXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVByb3AocHJvcCwgbGFzdFByb3BzT3JFbXB0eVtwcm9wXSwgZG9tKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBpbmxpbmVkIHBhdGNoUHJvcHMgIC0tIGVuZHMgLS1cbiAgICAgICAgaWYgKGxhc3RFdmVudHMgIT09IG5leHRFdmVudHMpIHtcbiAgICAgICAgICAgIHBhdGNoRXZlbnRzKGxhc3RFdmVudHMsIG5leHRFdmVudHMsIGRvbSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5leHRSZWYpIHtcbiAgICAgICAgICAgIGlmIChsYXN0Vk5vZGUucmVmICE9PSBuZXh0UmVmIHx8IGlzUmVjeWNsaW5nKSB7XG4gICAgICAgICAgICAgICAgbW91bnRSZWYoZG9tLCBuZXh0UmVmLCBsaWZlY3ljbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gcGF0Y2hDaGlsZHJlbihsYXN0RmxhZ3MsIG5leHRGbGFncywgbGFzdENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpIHtcbiAgICBsZXQgcGF0Y2hBcnJheSA9IGZhbHNlO1xuICAgIGxldCBwYXRjaEtleWVkID0gZmFsc2U7XG4gICAgaWYgKG5leHRGbGFncyAmIDY0IC8qIEhhc05vbktleWVkQ2hpbGRyZW4gKi8pIHtcbiAgICAgICAgcGF0Y2hBcnJheSA9IHRydWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKChsYXN0RmxhZ3MgJiAzMiAvKiBIYXNLZXllZENoaWxkcmVuICovKSAmJiAobmV4dEZsYWdzICYgMzIgLyogSGFzS2V5ZWRDaGlsZHJlbiAqLykpIHtcbiAgICAgICAgcGF0Y2hLZXllZCA9IHRydWU7XG4gICAgICAgIHBhdGNoQXJyYXkgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0ludmFsaWQobmV4dENoaWxkcmVuKSkge1xuICAgICAgICB1bm1vdW50Q2hpbGRyZW4obGFzdENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgaXNSZWN5Y2xpbmcpO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0ludmFsaWQobGFzdENoaWxkcmVuKSkge1xuICAgICAgICBpZiAoaXNTdHJpbmdPck51bWJlcihuZXh0Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudChkb20sIG5leHRDaGlsZHJlbik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaXNBcnJheShuZXh0Q2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgbW91bnRBcnJheUNoaWxkcmVuKG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vdW50KG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyKG5leHRDaGlsZHJlbikpIHtcbiAgICAgICAgaWYgKGlzU3RyaW5nT3JOdW1iZXIobGFzdENoaWxkcmVuKSkge1xuICAgICAgICAgICAgdXBkYXRlVGV4dENvbnRlbnQoZG9tLCBuZXh0Q2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdW5tb3VudENoaWxkcmVuKGxhc3RDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIHNldFRleHRDb250ZW50KGRvbSwgbmV4dENoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChpc0FycmF5KG5leHRDaGlsZHJlbikpIHtcbiAgICAgICAgaWYgKGlzQXJyYXkobGFzdENoaWxkcmVuKSkge1xuICAgICAgICAgICAgcGF0Y2hBcnJheSA9IHRydWU7XG4gICAgICAgICAgICBpZiAoaXNLZXllZChsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbikpIHtcbiAgICAgICAgICAgICAgICBwYXRjaEtleWVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHVubW91bnRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBtb3VudEFycmF5Q2hpbGRyZW4obmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGlzQXJyYXkobGFzdENoaWxkcmVuKSkge1xuICAgICAgICByZW1vdmVBbGxDaGlsZHJlbihkb20sIGxhc3RDaGlsZHJlbiwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIG1vdW50KG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNWTm9kZShuZXh0Q2hpbGRyZW4pKSB7XG4gICAgICAgIGlmIChpc1ZOb2RlKGxhc3RDaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHBhdGNoKGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHVubW91bnRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBtb3VudChuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhdGNoQXJyYXkpIHtcbiAgICAgICAgaWYgKHBhdGNoS2V5ZWQpIHtcbiAgICAgICAgICAgIHBhdGNoS2V5ZWRDaGlsZHJlbihsYXN0Q2hpbGRyZW4sIG5leHRDaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBwYXRjaE5vbktleWVkQ2hpbGRyZW4obGFzdENoaWxkcmVuLCBuZXh0Q2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoQ29tcG9uZW50KGxhc3RWTm9kZSwgbmV4dFZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzQ2xhc3MsIGlzUmVjeWNsaW5nKSB7XG4gICAgY29uc3QgbGFzdFR5cGUgPSBsYXN0Vk5vZGUudHlwZTtcbiAgICBjb25zdCBuZXh0VHlwZSA9IG5leHRWTm9kZS50eXBlO1xuICAgIGNvbnN0IGxhc3RLZXkgPSBsYXN0Vk5vZGUua2V5O1xuICAgIGNvbnN0IG5leHRLZXkgPSBuZXh0Vk5vZGUua2V5O1xuICAgIGlmIChsYXN0VHlwZSAhPT0gbmV4dFR5cGUgfHwgbGFzdEtleSAhPT0gbmV4dEtleSkge1xuICAgICAgICByZXBsYWNlV2l0aE5ld05vZGUobGFzdFZOb2RlLCBuZXh0Vk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBuZXh0UHJvcHMgPSBuZXh0Vk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgICAgICBpZiAoaXNDbGFzcykge1xuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBsYXN0Vk5vZGUuY2hpbGRyZW47XG4gICAgICAgICAgICBpZiAoaW5zdGFuY2UuX3VubW91bnRlZCkge1xuICAgICAgICAgICAgICAgIGlmIChpc051bGwocGFyZW50RG9tKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVwbGFjZUNoaWxkKHBhcmVudERvbSwgbW91bnRDb21wb25lbnQobmV4dFZOb2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBuZXh0Vk5vZGUuZmxhZ3MgJiA0IC8qIENvbXBvbmVudENsYXNzICovKSwgbGFzdFZOb2RlLmRvbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0U3RhdGUgPSBpbnN0YW5jZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBuZXh0U3RhdGUgPSBpbnN0YW5jZS5zdGF0ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBsYXN0UHJvcHMgPSBpbnN0YW5jZS5wcm9wcztcbiAgICAgICAgICAgICAgICBsZXQgY2hpbGRDb250ZXh0O1xuICAgICAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQoaW5zdGFuY2UuZ2V0Q2hpbGRDb250ZXh0KSkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENvbnRleHQgPSBpbnN0YW5jZS5nZXRDaGlsZENvbnRleHQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbmV4dFZOb2RlLmNoaWxkcmVuID0gaW5zdGFuY2U7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuX2lzU1ZHID0gaXNTVkc7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuX3N5bmNTZXRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGlmIChpc051bGxPclVuZGVmKGNoaWxkQ29udGV4dCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQ29udGV4dCA9IGNvbWJpbmVGcm9tKGNvbnRleHQsIGNoaWxkQ29udGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3RJbnB1dCA9IGluc3RhbmNlLl9sYXN0SW5wdXQ7XG4gICAgICAgICAgICAgICAgbGV0IG5leHRJbnB1dCA9IGluc3RhbmNlLl91cGRhdGVDb21wb25lbnQobGFzdFN0YXRlLCBuZXh0U3RhdGUsIGxhc3RQcm9wcywgbmV4dFByb3BzLCBjb250ZXh0LCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGxldCBkaWRVcGRhdGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLl9jaGlsZENvbnRleHQgPSBjaGlsZENvbnRleHQ7XG4gICAgICAgICAgICAgICAgaWYgKGlzSW52YWxpZChuZXh0SW5wdXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dCA9IGNyZWF0ZVZvaWRWTm9kZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChuZXh0SW5wdXQgPT09IE5PX09QKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dCA9IGxhc3RJbnB1dDtcbiAgICAgICAgICAgICAgICAgICAgZGlkVXBkYXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIobmV4dElucHV0KSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SW5wdXQgPSBjcmVhdGVUZXh0Vk5vZGUobmV4dElucHV0LCBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNBcnJheShuZXh0SW5wdXQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCdhIHZhbGlkIEluZmVybm8gVk5vZGUgKG9yIG51bGwpIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBhIGNvbXBvbmVudCByZW5kZXIuIFlvdSBtYXkgaGF2ZSByZXR1cm5lZCBhbiBhcnJheSBvciBhbiBpbnZhbGlkIG9iamVjdC4nKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzT2JqZWN0KG5leHRJbnB1dCkgJiYgbmV4dElucHV0LmRvbSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SW5wdXQgPSBkaXJlY3RDbG9uZShuZXh0SW5wdXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobmV4dElucHV0LmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRJbnB1dC5wYXJlbnRWTm9kZSA9IG5leHRWTm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobGFzdElucHV0LmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgICAgICAgICAgICAgIGxhc3RJbnB1dC5wYXJlbnRWTm9kZSA9IG5leHRWTm9kZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuX2xhc3RJbnB1dCA9IG5leHRJbnB1dDtcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5fdk5vZGUgPSBuZXh0Vk5vZGU7XG4gICAgICAgICAgICAgICAgaWYgKGRpZFVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRjaChsYXN0SW5wdXQsIG5leHRJbnB1dCwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNoaWxkQ29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChpbnN0YW5jZS5jb21wb25lbnREaWRVcGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZS5jb21wb25lbnREaWRVcGRhdGUobGFzdFByb3BzLCBsYXN0U3RhdGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnMuYWZ0ZXJVcGRhdGUgJiYgb3B0aW9ucy5hZnRlclVwZGF0ZShuZXh0Vk5vZGUpO1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmZpbmRET01Ob2RlRW5hYmxlZCAmJiBjb21wb25lbnRUb0RPTU5vZGVNYXAuc2V0KGluc3RhbmNlLCBuZXh0SW5wdXQuZG9tKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuX3N5bmNTZXRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbmV4dFZOb2RlLmRvbSA9IG5leHRJbnB1dC5kb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBsZXQgc2hvdWxkVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RQcm9wcyA9IGxhc3RWTm9kZS5wcm9wcztcbiAgICAgICAgICAgIGNvbnN0IG5leHRIb29rcyA9IG5leHRWTm9kZS5yZWY7XG4gICAgICAgICAgICBjb25zdCBuZXh0SG9va3NEZWZpbmVkID0gIWlzTnVsbE9yVW5kZWYobmV4dEhvb2tzKTtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RJbnB1dCA9IGxhc3RWTm9kZS5jaGlsZHJlbjtcbiAgICAgICAgICAgIGxldCBuZXh0SW5wdXQgPSBsYXN0SW5wdXQ7XG4gICAgICAgICAgICBuZXh0Vk5vZGUuZG9tID0gbGFzdFZOb2RlLmRvbTtcbiAgICAgICAgICAgIG5leHRWTm9kZS5jaGlsZHJlbiA9IGxhc3RJbnB1dDtcbiAgICAgICAgICAgIGlmIChsYXN0S2V5ICE9PSBuZXh0S2V5KSB7XG4gICAgICAgICAgICAgICAgc2hvdWxkVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChuZXh0SG9va3NEZWZpbmVkICYmICFpc051bGxPclVuZGVmKG5leHRIb29rcy5vbkNvbXBvbmVudFNob3VsZFVwZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgc2hvdWxkVXBkYXRlID0gbmV4dEhvb2tzLm9uQ29tcG9uZW50U2hvdWxkVXBkYXRlKGxhc3RQcm9wcywgbmV4dFByb3BzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2hvdWxkVXBkYXRlICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChuZXh0SG9va3NEZWZpbmVkICYmICFpc051bGxPclVuZGVmKG5leHRIb29rcy5vbkNvbXBvbmVudFdpbGxVcGRhdGUpKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRIb29rcy5vbkNvbXBvbmVudFdpbGxVcGRhdGUobGFzdFByb3BzLCBuZXh0UHJvcHMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBuZXh0SW5wdXQgPSBuZXh0VHlwZShuZXh0UHJvcHMsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgIGlmIChpc0ludmFsaWQobmV4dElucHV0KSkge1xuICAgICAgICAgICAgICAgICAgICBuZXh0SW5wdXQgPSBjcmVhdGVWb2lkVk5vZGUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihuZXh0SW5wdXQpICYmIG5leHRJbnB1dCAhPT0gTk9fT1ApIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0ID0gY3JlYXRlVGV4dFZOb2RlKG5leHRJbnB1dCwgbnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzQXJyYXkobmV4dElucHV0KSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcignYSB2YWxpZCBJbmZlcm5vIFZOb2RlIChvciBudWxsKSBtdXN0IGJlIHJldHVybmVkIGZyb20gYSBjb21wb25lbnQgcmVuZGVyLiBZb3UgbWF5IGhhdmUgcmV0dXJuZWQgYW4gYXJyYXkgb3IgYW4gaW52YWxpZCBvYmplY3QuJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc09iamVjdChuZXh0SW5wdXQpICYmIG5leHRJbnB1dC5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dElucHV0ID0gZGlyZWN0Q2xvbmUobmV4dElucHV0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG5leHRJbnB1dCAhPT0gTk9fT1ApIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0Y2gobGFzdElucHV0LCBuZXh0SW5wdXQsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgICAgICAgICBuZXh0Vk5vZGUuY2hpbGRyZW4gPSBuZXh0SW5wdXQ7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXh0SG9va3NEZWZpbmVkICYmICFpc051bGxPclVuZGVmKG5leHRIb29rcy5vbkNvbXBvbmVudERpZFVwZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHRIb29rcy5vbkNvbXBvbmVudERpZFVwZGF0ZShsYXN0UHJvcHMsIG5leHRQcm9wcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbmV4dFZOb2RlLmRvbSA9IG5leHRJbnB1dC5kb207XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5leHRJbnB1dC5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAgICAgICAgIG5leHRJbnB1dC5wYXJlbnRWTm9kZSA9IG5leHRWTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGxhc3RJbnB1dC5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykge1xuICAgICAgICAgICAgICAgIGxhc3RJbnB1dC5wYXJlbnRWTm9kZSA9IG5leHRWTm9kZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hUZXh0KGxhc3RWTm9kZSwgbmV4dFZOb2RlKSB7XG4gICAgY29uc3QgbmV4dFRleHQgPSBuZXh0Vk5vZGUuY2hpbGRyZW47XG4gICAgY29uc3QgZG9tID0gbGFzdFZOb2RlLmRvbTtcbiAgICBuZXh0Vk5vZGUuZG9tID0gZG9tO1xuICAgIGlmIChsYXN0Vk5vZGUuY2hpbGRyZW4gIT09IG5leHRUZXh0KSB7XG4gICAgICAgIGRvbS5ub2RlVmFsdWUgPSBuZXh0VGV4dDtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hWb2lkKGxhc3RWTm9kZSwgbmV4dFZOb2RlKSB7XG4gICAgbmV4dFZOb2RlLmRvbSA9IGxhc3RWTm9kZS5kb207XG59XG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hOb25LZXllZENoaWxkcmVuKGxhc3RDaGlsZHJlbiwgbmV4dENoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKSB7XG4gICAgY29uc3QgbGFzdENoaWxkcmVuTGVuZ3RoID0gbGFzdENoaWxkcmVuLmxlbmd0aDtcbiAgICBjb25zdCBuZXh0Q2hpbGRyZW5MZW5ndGggPSBuZXh0Q2hpbGRyZW4ubGVuZ3RoO1xuICAgIGNvbnN0IGNvbW1vbkxlbmd0aCA9IGxhc3RDaGlsZHJlbkxlbmd0aCA+IG5leHRDaGlsZHJlbkxlbmd0aCA/IG5leHRDaGlsZHJlbkxlbmd0aCA6IGxhc3RDaGlsZHJlbkxlbmd0aDtcbiAgICBsZXQgaSA9IDA7XG4gICAgZm9yICg7IGkgPCBjb21tb25MZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgbmV4dENoaWxkID0gbmV4dENoaWxkcmVuW2ldO1xuICAgICAgICBpZiAobmV4dENoaWxkLmRvbSkge1xuICAgICAgICAgICAgbmV4dENoaWxkID0gbmV4dENoaWxkcmVuW2ldID0gZGlyZWN0Q2xvbmUobmV4dENoaWxkKTtcbiAgICAgICAgfVxuICAgICAgICBwYXRjaChsYXN0Q2hpbGRyZW5baV0sIG5leHRDaGlsZCwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGlmIChsYXN0Q2hpbGRyZW5MZW5ndGggPCBuZXh0Q2hpbGRyZW5MZW5ndGgpIHtcbiAgICAgICAgZm9yIChpID0gY29tbW9uTGVuZ3RoOyBpIDwgbmV4dENoaWxkcmVuTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBuZXh0Q2hpbGQgPSBuZXh0Q2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAobmV4dENoaWxkLmRvbSkge1xuICAgICAgICAgICAgICAgIG5leHRDaGlsZCA9IG5leHRDaGlsZHJlbltpXSA9IGRpcmVjdENsb25lKG5leHRDaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhcHBlbmRDaGlsZChkb20sIG1vdW50KG5leHRDaGlsZCwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKG5leHRDaGlsZHJlbkxlbmd0aCA9PT0gMCkge1xuICAgICAgICByZW1vdmVBbGxDaGlsZHJlbihkb20sIGxhc3RDaGlsZHJlbiwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGxhc3RDaGlsZHJlbkxlbmd0aCA+IG5leHRDaGlsZHJlbkxlbmd0aCkge1xuICAgICAgICBmb3IgKGkgPSBjb21tb25MZW5ndGg7IGkgPCBsYXN0Q2hpbGRyZW5MZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdW5tb3VudChsYXN0Q2hpbGRyZW5baV0sIGRvbSwgbGlmZWN5Y2xlLCBmYWxzZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoS2V5ZWRDaGlsZHJlbihhLCBiLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzUmVjeWNsaW5nKSB7XG4gICAgbGV0IGFMZW5ndGggPSBhLmxlbmd0aDtcbiAgICBsZXQgYkxlbmd0aCA9IGIubGVuZ3RoO1xuICAgIGxldCBhRW5kID0gYUxlbmd0aCAtIDE7XG4gICAgbGV0IGJFbmQgPSBiTGVuZ3RoIC0gMTtcbiAgICBsZXQgYVN0YXJ0ID0gMDtcbiAgICBsZXQgYlN0YXJ0ID0gMDtcbiAgICBsZXQgaTtcbiAgICBsZXQgajtcbiAgICBsZXQgYU5vZGU7XG4gICAgbGV0IGJOb2RlO1xuICAgIGxldCBuZXh0Tm9kZTtcbiAgICBsZXQgbmV4dFBvcztcbiAgICBsZXQgbm9kZTtcbiAgICBpZiAoYUxlbmd0aCA9PT0gMCkge1xuICAgICAgICBpZiAoYkxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgICAgbW91bnRBcnJheUNoaWxkcmVuKGIsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBlbHNlIGlmIChiTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJlbW92ZUFsbENoaWxkcmVuKGRvbSwgYSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgbGV0IGFTdGFydE5vZGUgPSBhW2FTdGFydF07XG4gICAgbGV0IGJTdGFydE5vZGUgPSBiW2JTdGFydF07XG4gICAgbGV0IGFFbmROb2RlID0gYVthRW5kXTtcbiAgICBsZXQgYkVuZE5vZGUgPSBiW2JFbmRdO1xuICAgIGlmIChiU3RhcnROb2RlLmRvbSkge1xuICAgICAgICBiW2JTdGFydF0gPSBiU3RhcnROb2RlID0gZGlyZWN0Q2xvbmUoYlN0YXJ0Tm9kZSk7XG4gICAgfVxuICAgIGlmIChiRW5kTm9kZS5kb20pIHtcbiAgICAgICAgYltiRW5kXSA9IGJFbmROb2RlID0gZGlyZWN0Q2xvbmUoYkVuZE5vZGUpO1xuICAgIH1cbiAgICAvLyBTdGVwIDFcbiAgICAvKiBlc2xpbnQgbm8tY29uc3RhbnQtY29uZGl0aW9uOiAwICovXG4gICAgb3V0ZXI6IHdoaWxlICh0cnVlKSB7XG4gICAgICAgIC8vIFN5bmMgbm9kZXMgd2l0aCB0aGUgc2FtZSBrZXkgYXQgdGhlIGJlZ2lubmluZy5cbiAgICAgICAgd2hpbGUgKGFTdGFydE5vZGUua2V5ID09PSBiU3RhcnROb2RlLmtleSkge1xuICAgICAgICAgICAgcGF0Y2goYVN0YXJ0Tm9kZSwgYlN0YXJ0Tm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBhU3RhcnQrKztcbiAgICAgICAgICAgIGJTdGFydCsrO1xuICAgICAgICAgICAgaWYgKGFTdGFydCA+IGFFbmQgfHwgYlN0YXJ0ID4gYkVuZCkge1xuICAgICAgICAgICAgICAgIGJyZWFrIG91dGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYVN0YXJ0Tm9kZSA9IGFbYVN0YXJ0XTtcbiAgICAgICAgICAgIGJTdGFydE5vZGUgPSBiW2JTdGFydF07XG4gICAgICAgICAgICBpZiAoYlN0YXJ0Tm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICBiW2JTdGFydF0gPSBiU3RhcnROb2RlID0gZGlyZWN0Q2xvbmUoYlN0YXJ0Tm9kZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gU3luYyBub2RlcyB3aXRoIHRoZSBzYW1lIGtleSBhdCB0aGUgZW5kLlxuICAgICAgICB3aGlsZSAoYUVuZE5vZGUua2V5ID09PSBiRW5kTm9kZS5rZXkpIHtcbiAgICAgICAgICAgIHBhdGNoKGFFbmROb2RlLCBiRW5kTm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBhRW5kLS07XG4gICAgICAgICAgICBiRW5kLS07XG4gICAgICAgICAgICBpZiAoYVN0YXJ0ID4gYUVuZCB8fCBiU3RhcnQgPiBiRW5kKSB7XG4gICAgICAgICAgICAgICAgYnJlYWsgb3V0ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhRW5kTm9kZSA9IGFbYUVuZF07XG4gICAgICAgICAgICBiRW5kTm9kZSA9IGJbYkVuZF07XG4gICAgICAgICAgICBpZiAoYkVuZE5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgYltiRW5kXSA9IGJFbmROb2RlID0gZGlyZWN0Q2xvbmUoYkVuZE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE1vdmUgYW5kIHN5bmMgbm9kZXMgZnJvbSByaWdodCB0byBsZWZ0LlxuICAgICAgICBpZiAoYUVuZE5vZGUua2V5ID09PSBiU3RhcnROb2RlLmtleSkge1xuICAgICAgICAgICAgcGF0Y2goYUVuZE5vZGUsIGJTdGFydE5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRywgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgaW5zZXJ0T3JBcHBlbmQoZG9tLCBiU3RhcnROb2RlLmRvbSwgYVN0YXJ0Tm9kZS5kb20pO1xuICAgICAgICAgICAgYUVuZC0tO1xuICAgICAgICAgICAgYlN0YXJ0Kys7XG4gICAgICAgICAgICBhRW5kTm9kZSA9IGFbYUVuZF07XG4gICAgICAgICAgICBiU3RhcnROb2RlID0gYltiU3RhcnRdO1xuICAgICAgICAgICAgaWYgKGJTdGFydE5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgYltiU3RhcnRdID0gYlN0YXJ0Tm9kZSA9IGRpcmVjdENsb25lKGJTdGFydE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gTW92ZSBhbmQgc3luYyBub2RlcyBmcm9tIGxlZnQgdG8gcmlnaHQuXG4gICAgICAgIGlmIChhU3RhcnROb2RlLmtleSA9PT0gYkVuZE5vZGUua2V5KSB7XG4gICAgICAgICAgICBwYXRjaChhU3RhcnROb2RlLCBiRW5kTm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICBuZXh0UG9zID0gYkVuZCArIDE7XG4gICAgICAgICAgICBuZXh0Tm9kZSA9IG5leHRQb3MgPCBiLmxlbmd0aCA/IGJbbmV4dFBvc10uZG9tIDogbnVsbDtcbiAgICAgICAgICAgIGluc2VydE9yQXBwZW5kKGRvbSwgYkVuZE5vZGUuZG9tLCBuZXh0Tm9kZSk7XG4gICAgICAgICAgICBhU3RhcnQrKztcbiAgICAgICAgICAgIGJFbmQtLTtcbiAgICAgICAgICAgIGFTdGFydE5vZGUgPSBhW2FTdGFydF07XG4gICAgICAgICAgICBiRW5kTm9kZSA9IGJbYkVuZF07XG4gICAgICAgICAgICBpZiAoYkVuZE5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgYltiRW5kXSA9IGJFbmROb2RlID0gZGlyZWN0Q2xvbmUoYkVuZE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChhU3RhcnQgPiBhRW5kKSB7XG4gICAgICAgIGlmIChiU3RhcnQgPD0gYkVuZCkge1xuICAgICAgICAgICAgbmV4dFBvcyA9IGJFbmQgKyAxO1xuICAgICAgICAgICAgbmV4dE5vZGUgPSBuZXh0UG9zIDwgYi5sZW5ndGggPyBiW25leHRQb3NdLmRvbSA6IG51bGw7XG4gICAgICAgICAgICB3aGlsZSAoYlN0YXJ0IDw9IGJFbmQpIHtcbiAgICAgICAgICAgICAgICBub2RlID0gYltiU3RhcnRdO1xuICAgICAgICAgICAgICAgIGlmIChub2RlLmRvbSkge1xuICAgICAgICAgICAgICAgICAgICBiW2JTdGFydF0gPSBub2RlID0gZGlyZWN0Q2xvbmUobm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJTdGFydCsrO1xuICAgICAgICAgICAgICAgIGluc2VydE9yQXBwZW5kKGRvbSwgbW91bnQobm9kZSwgbnVsbCwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyksIG5leHROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChiU3RhcnQgPiBiRW5kKSB7XG4gICAgICAgIHdoaWxlIChhU3RhcnQgPD0gYUVuZCkge1xuICAgICAgICAgICAgdW5tb3VudChhW2FTdGFydCsrXSwgZG9tLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGFMZW5ndGggPSBhRW5kIC0gYVN0YXJ0ICsgMTtcbiAgICAgICAgYkxlbmd0aCA9IGJFbmQgLSBiU3RhcnQgKyAxO1xuICAgICAgICBjb25zdCBzb3VyY2VzID0gbmV3IEFycmF5KGJMZW5ndGgpO1xuICAgICAgICAvLyBNYXJrIGFsbCBub2RlcyBhcyBpbnNlcnRlZC5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgc291cmNlc1tpXSA9IC0xO1xuICAgICAgICB9XG4gICAgICAgIGxldCBtb3ZlZCA9IGZhbHNlO1xuICAgICAgICBsZXQgcG9zID0gMDtcbiAgICAgICAgbGV0IHBhdGNoZWQgPSAwO1xuICAgICAgICAvLyBXaGVuIHNpemVzIGFyZSBzbWFsbCwganVzdCBsb29wIHRoZW0gdGhyb3VnaFxuICAgICAgICBpZiAoKGJMZW5ndGggPD0gNCkgfHwgKGFMZW5ndGggKiBiTGVuZ3RoIDw9IDE2KSkge1xuICAgICAgICAgICAgZm9yIChpID0gYVN0YXJ0OyBpIDw9IGFFbmQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGFOb2RlID0gYVtpXTtcbiAgICAgICAgICAgICAgICBpZiAocGF0Y2hlZCA8IGJMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChqID0gYlN0YXJ0OyBqIDw9IGJFbmQ7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYk5vZGUgPSBiW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFOb2RlLmtleSA9PT0gYk5vZGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc291cmNlc1tqIC0gYlN0YXJ0XSA9IGk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcyA+IGopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW92ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gajtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJOb2RlLmRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiW2pdID0gYk5vZGUgPSBkaXJlY3RDbG9uZShiTm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhdGNoKGFOb2RlLCBiTm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2hlZCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFbaV0gPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qga2V5SW5kZXggPSBuZXcgTWFwKCk7XG4gICAgICAgICAgICAvLyBNYXAga2V5cyBieSB0aGVpciBpbmRleCBpbiBhcnJheVxuICAgICAgICAgICAgZm9yIChpID0gYlN0YXJ0OyBpIDw9IGJFbmQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGtleUluZGV4LnNldChiW2ldLmtleSwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBUcnkgdG8gcGF0Y2ggc2FtZSBrZXlzXG4gICAgICAgICAgICBmb3IgKGkgPSBhU3RhcnQ7IGkgPD0gYUVuZDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYU5vZGUgPSBhW2ldO1xuICAgICAgICAgICAgICAgIGlmIChwYXRjaGVkIDwgYkxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICBqID0ga2V5SW5kZXguZ2V0KGFOb2RlLmtleSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQoaikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJOb2RlID0gYltqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZXNbaiAtIGJTdGFydF0gPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBvcyA+IGopIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3MgPSBqO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJOb2RlLmRvbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJbal0gPSBiTm9kZSA9IGRpcmVjdENsb25lKGJOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGNoKGFOb2RlLCBiTm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRjaGVkKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBhW2ldID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBmYXN0LXBhdGg6IGlmIG5vdGhpbmcgcGF0Y2hlZCByZW1vdmUgYWxsIG9sZCBhbmQgYWRkIGFsbCBuZXdcbiAgICAgICAgaWYgKGFMZW5ndGggPT09IGEubGVuZ3RoICYmIHBhdGNoZWQgPT09IDApIHtcbiAgICAgICAgICAgIHJlbW92ZUFsbENoaWxkcmVuKGRvbSwgYSwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB3aGlsZSAoYlN0YXJ0IDwgYkxlbmd0aCkge1xuICAgICAgICAgICAgICAgIG5vZGUgPSBiW2JTdGFydF07XG4gICAgICAgICAgICAgICAgaWYgKG5vZGUuZG9tKSB7XG4gICAgICAgICAgICAgICAgICAgIGJbYlN0YXJ0XSA9IG5vZGUgPSBkaXJlY3RDbG9uZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYlN0YXJ0Kys7XG4gICAgICAgICAgICAgICAgaW5zZXJ0T3JBcHBlbmQoZG9tLCBtb3VudChub2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSwgbnVsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpID0gYUxlbmd0aCAtIHBhdGNoZWQ7XG4gICAgICAgICAgICB3aGlsZSAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICBhTm9kZSA9IGFbYVN0YXJ0KytdO1xuICAgICAgICAgICAgICAgIGlmICghaXNOdWxsKGFOb2RlKSkge1xuICAgICAgICAgICAgICAgICAgICB1bm1vdW50KGFOb2RlLCBkb20sIGxpZmVjeWNsZSwgdHJ1ZSwgaXNSZWN5Y2xpbmcpO1xuICAgICAgICAgICAgICAgICAgICBpLS07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG1vdmVkKSB7XG4gICAgICAgICAgICAgICAgY29uc3Qgc2VxID0gbGlzX2FsZ29yaXRobShzb3VyY2VzKTtcbiAgICAgICAgICAgICAgICBqID0gc2VxLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgZm9yIChpID0gYkxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2VzW2ldID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gaSArIGJTdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBiW3Bvc107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiW3Bvc10gPSBub2RlID0gZGlyZWN0Q2xvbmUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zID0gcG9zICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHROb2RlID0gbmV4dFBvcyA8IGIubGVuZ3RoID8gYltuZXh0UG9zXS5kb20gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0T3JBcHBlbmQoZG9tLCBtb3VudChub2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpLCBuZXh0Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaiA8IDAgfHwgaSAhPT0gc2VxW2pdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gaSArIGJTdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gYltwb3NdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHRQb3MgPSBwb3MgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHROb2RlID0gbmV4dFBvcyA8IGIubGVuZ3RoID8gYltuZXh0UG9zXS5kb20gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc2VydE9yQXBwZW5kKGRvbSwgbm9kZS5kb20sIG5leHROb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGotLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhdGNoZWQgIT09IGJMZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHBhdGNoZWQgY291bnQgZG9lc24ndCBtYXRjaCBiIGxlbmd0aCB3ZSBuZWVkIHRvIGluc2VydCB0aG9zZSBuZXcgb25lc1xuICAgICAgICAgICAgICAgIC8vIGxvb3AgYmFja3dhcmRzIHNvIHdlIGNhbiB1c2UgaW5zZXJ0QmVmb3JlXG4gICAgICAgICAgICAgICAgZm9yIChpID0gYkxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzb3VyY2VzW2ldID09PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcG9zID0gaSArIGJTdGFydDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBiW3Bvc107XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobm9kZS5kb20pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiW3Bvc10gPSBub2RlID0gZGlyZWN0Q2xvbmUobm9kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBuZXh0UG9zID0gcG9zICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5leHROb2RlID0gbmV4dFBvcyA8IGIubGVuZ3RoID8gYltuZXh0UG9zXS5kb20gOiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zZXJ0T3JBcHBlbmQoZG9tLCBtb3VudChub2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSwgbmV4dE5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLy8gLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTG9uZ2VzdF9pbmNyZWFzaW5nX3N1YnNlcXVlbmNlXG5mdW5jdGlvbiBsaXNfYWxnb3JpdGhtKGFycikge1xuICAgIGNvbnN0IHAgPSBhcnIuc2xpY2UoMCk7XG4gICAgY29uc3QgcmVzdWx0ID0gWzBdO1xuICAgIGxldCBpO1xuICAgIGxldCBqO1xuICAgIGxldCB1O1xuICAgIGxldCB2O1xuICAgIGxldCBjO1xuICAgIGNvbnN0IGxlbiA9IGFyci5sZW5ndGg7XG4gICAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGxldCBhcnJJID0gYXJyW2ldO1xuICAgICAgICBpZiAoYXJySSA9PT0gLTEpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGogPSByZXN1bHRbcmVzdWx0Lmxlbmd0aCAtIDFdO1xuICAgICAgICBpZiAoYXJyW2pdIDwgYXJySSkge1xuICAgICAgICAgICAgcFtpXSA9IGo7XG4gICAgICAgICAgICByZXN1bHQucHVzaChpKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHUgPSAwO1xuICAgICAgICB2ID0gcmVzdWx0Lmxlbmd0aCAtIDE7XG4gICAgICAgIHdoaWxlICh1IDwgdikge1xuICAgICAgICAgICAgYyA9ICgodSArIHYpIC8gMikgfCAwO1xuICAgICAgICAgICAgaWYgKGFycltyZXN1bHRbY11dIDwgYXJySSkge1xuICAgICAgICAgICAgICAgIHUgPSBjICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHYgPSBjO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChhcnJJIDwgYXJyW3Jlc3VsdFt1XV0pIHtcbiAgICAgICAgICAgIGlmICh1ID4gMCkge1xuICAgICAgICAgICAgICAgIHBbaV0gPSByZXN1bHRbdSAtIDFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0W3VdID0gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1ID0gcmVzdWx0Lmxlbmd0aDtcbiAgICB2ID0gcmVzdWx0W3UgLSAxXTtcbiAgICB3aGlsZSAodS0tID4gMCkge1xuICAgICAgICByZXN1bHRbdV0gPSB2O1xuICAgICAgICB2ID0gcFt2XTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXRjaFByb3AocHJvcCwgbGFzdFZhbHVlLCBuZXh0VmFsdWUsIGRvbSwgaXNTVkcsIGhhc0NvbnRyb2xsZWRWYWx1ZSkge1xuICAgIGlmIChwcm9wIGluIHNraXBQcm9wcyB8fCAoaGFzQ29udHJvbGxlZFZhbHVlICYmIHByb3AgPT09ICd2YWx1ZScpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZWxzZSBpZiAocHJvcCBpbiBib29sZWFuUHJvcHMpIHtcbiAgICAgICAgcHJvcCA9IHByb3AgPT09ICdhdXRvRm9jdXMnID8gcHJvcC50b0xvd2VyQ2FzZSgpIDogcHJvcDtcbiAgICAgICAgZG9tW3Byb3BdID0gISFuZXh0VmFsdWU7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3AgaW4gc3RyaWN0UHJvcHMpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBpc051bGxPclVuZGVmKG5leHRWYWx1ZSkgPyAnJyA6IG5leHRWYWx1ZTtcbiAgICAgICAgaWYgKGRvbVtwcm9wXSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGRvbVtwcm9wXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGxhc3RWYWx1ZSAhPT0gbmV4dFZhbHVlKSB7XG4gICAgICAgIGlmIChpc0F0dHJBbkV2ZW50KHByb3ApKSB7XG4gICAgICAgICAgICBwYXRjaEV2ZW50KHByb3AsIGxhc3RWYWx1ZSwgbmV4dFZhbHVlLCBkb20pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzTnVsbE9yVW5kZWYobmV4dFZhbHVlKSkge1xuICAgICAgICAgICAgZG9tLnJlbW92ZUF0dHJpYnV0ZShwcm9wKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wID09PSAnY2xhc3NOYW1lJykge1xuICAgICAgICAgICAgaWYgKGlzU1ZHKSB7XG4gICAgICAgICAgICAgICAgZG9tLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCBuZXh0VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9tLmNsYXNzTmFtZSA9IG5leHRWYWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wID09PSAnc3R5bGUnKSB7XG4gICAgICAgICAgICBwYXRjaFN0eWxlKGxhc3RWYWx1ZSwgbmV4dFZhbHVlLCBkb20pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3AgPT09ICdkYW5nZXJvdXNseVNldElubmVySFRNTCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RIdG1sID0gbGFzdFZhbHVlICYmIGxhc3RWYWx1ZS5fX2h0bWw7XG4gICAgICAgICAgICBjb25zdCBuZXh0SHRtbCA9IG5leHRWYWx1ZSAmJiBuZXh0VmFsdWUuX19odG1sO1xuICAgICAgICAgICAgaWYgKGxhc3RIdG1sICE9PSBuZXh0SHRtbCkge1xuICAgICAgICAgICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihuZXh0SHRtbCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tLmlubmVySFRNTCA9IG5leHRIdG1sO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG5zID0gaXNTVkcgPyBuYW1lc3BhY2VzW3Byb3BdIDogZmFsc2U7XG4gICAgICAgICAgICBpZiAobnMpIHtcbiAgICAgICAgICAgICAgICBkb20uc2V0QXR0cmlidXRlTlMobnMsIHByb3AsIG5leHRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkb20uc2V0QXR0cmlidXRlKHByb3AsIG5leHRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcGF0Y2hFdmVudHMobGFzdEV2ZW50cywgbmV4dEV2ZW50cywgZG9tKSB7XG4gICAgbGFzdEV2ZW50cyA9IGxhc3RFdmVudHMgfHwgRU1QVFlfT0JKO1xuICAgIG5leHRFdmVudHMgPSBuZXh0RXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICBpZiAobmV4dEV2ZW50cyAhPT0gRU1QVFlfT0JKKSB7XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gbmV4dEV2ZW50cykge1xuICAgICAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgIHBhdGNoRXZlbnQobmFtZSwgbGFzdEV2ZW50c1tuYW1lXSwgbmV4dEV2ZW50c1tuYW1lXSwgZG9tKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAobGFzdEV2ZW50cyAhPT0gRU1QVFlfT0JKKSB7XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gbGFzdEV2ZW50cykge1xuICAgICAgICAgICAgLy8gZG8gbm90IGFkZCBhIGhhc093blByb3BlcnR5IGNoZWNrIGhlcmUsIGl0IGFmZmVjdHMgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgIGlmIChpc051bGxPclVuZGVmKG5leHRFdmVudHNbbmFtZV0pKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hFdmVudChuYW1lLCBsYXN0RXZlbnRzW25hbWVdLCBudWxsLCBkb20pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoRXZlbnQobmFtZSwgbGFzdFZhbHVlLCBuZXh0VmFsdWUsIGRvbSkge1xuICAgIGlmIChsYXN0VmFsdWUgIT09IG5leHRWYWx1ZSkge1xuICAgICAgICBjb25zdCBuYW1lTG93ZXJDYXNlID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBkb21FdmVudCA9IGRvbVtuYW1lTG93ZXJDYXNlXTtcbiAgICAgICAgLy8gaWYgdGhlIGZ1bmN0aW9uIGlzIHdyYXBwZWQsIHRoYXQgbWVhbnMgaXQncyBiZWVuIGNvbnRyb2xsZWQgYnkgYSB3cmFwcGVyXG4gICAgICAgIGlmIChkb21FdmVudCAmJiBkb21FdmVudC53cmFwcGVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRlbGVnYXRlZFByb3BzW25hbWVdKSB7XG4gICAgICAgICAgICBoYW5kbGVFdmVudChuYW1lLCBsYXN0VmFsdWUsIG5leHRWYWx1ZSwgZG9tKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaXNGdW5jdGlvbihuZXh0VmFsdWUpICYmICFpc051bGxPclVuZGVmKG5leHRWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBsaW5rRXZlbnQgPSBuZXh0VmFsdWUuZXZlbnQ7XG4gICAgICAgICAgICAgICAgaWYgKGxpbmtFdmVudCAmJiBpc0Z1bmN0aW9uKGxpbmtFdmVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkb20uX2RhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbVtuYW1lTG93ZXJDYXNlXSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua0V2ZW50KGUuY3VycmVudFRhcmdldC5fZGF0YSwgZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGRvbS5fZGF0YSA9IG5leHRWYWx1ZS5kYXRhO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93RXJyb3IoYGFuIGV2ZW50IG9uIGEgVk5vZGUgXCIke25hbWV9XCIuIHdhcyBub3QgYSBmdW5jdGlvbiBvciBhIHZhbGlkIGxpbmtFdmVudC5gKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZG9tW25hbWVMb3dlckNhc2VdID0gbmV4dFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLy8gV2UgYXJlIGFzc3VtaW5nIGhlcmUgdGhhdCB3ZSBjb21lIGZyb20gcGF0Y2hQcm9wIHJvdXRpbmVcbi8vIC1uZXh0QXR0clZhbHVlIGNhbm5vdCBiZSBudWxsIG9yIHVuZGVmaW5lZFxuZXhwb3J0IGZ1bmN0aW9uIHBhdGNoU3R5bGUobGFzdEF0dHJWYWx1ZSwgbmV4dEF0dHJWYWx1ZSwgZG9tKSB7XG4gICAgY29uc3QgZG9tU3R5bGUgPSBkb20uc3R5bGU7XG4gICAgaWYgKGlzU3RyaW5nKG5leHRBdHRyVmFsdWUpKSB7XG4gICAgICAgIGRvbVN0eWxlLmNzc1RleHQgPSBuZXh0QXR0clZhbHVlO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGZvciAoY29uc3Qgc3R5bGUgaW4gbmV4dEF0dHJWYWx1ZSkge1xuICAgICAgICAvLyBkbyBub3QgYWRkIGEgaGFzT3duUHJvcGVydHkgY2hlY2sgaGVyZSwgaXQgYWZmZWN0cyBwZXJmb3JtYW5jZVxuICAgICAgICBjb25zdCB2YWx1ZSA9IG5leHRBdHRyVmFsdWVbc3R5bGVdO1xuICAgICAgICBpZiAoIWlzTnVtYmVyKHZhbHVlKSB8fCBzdHlsZSBpbiBpc1VuaXRsZXNzTnVtYmVyKSB7XG4gICAgICAgICAgICBkb21TdHlsZVtzdHlsZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRvbVN0eWxlW3N0eWxlXSA9IHZhbHVlICsgJ3B4JztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWlzTnVsbE9yVW5kZWYobGFzdEF0dHJWYWx1ZSkpIHtcbiAgICAgICAgZm9yIChsZXQgc3R5bGUgaW4gbGFzdEF0dHJWYWx1ZSkge1xuICAgICAgICAgICAgaWYgKGlzTnVsbE9yVW5kZWYobmV4dEF0dHJWYWx1ZVtzdHlsZV0pKSB7XG4gICAgICAgICAgICAgICAgZG9tU3R5bGVbc3R5bGVdID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiByZW1vdmVQcm9wKHByb3AsIGxhc3RWYWx1ZSwgZG9tKSB7XG4gICAgaWYgKHByb3AgPT09ICdjbGFzc05hbWUnKSB7XG4gICAgICAgIGRvbS5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3AgPT09ICd2YWx1ZScpIHtcbiAgICAgICAgZG9tLnZhbHVlID0gJyc7XG4gICAgfVxuICAgIGVsc2UgaWYgKHByb3AgPT09ICdzdHlsZScpIHtcbiAgICAgICAgZG9tLnJlbW92ZUF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNBdHRyQW5FdmVudChwcm9wKSkge1xuICAgICAgICBoYW5kbGVFdmVudChuYW1lLCBsYXN0VmFsdWUsIG51bGwsIGRvbSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkb20ucmVtb3ZlQXR0cmlidXRlKHByb3ApO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL3BhdGNoaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGlzQnJvd3NlciwgaXNJbnZhbGlkLCBpc051bGwsIGlzTnVsbE9yVW5kZWYsIExpZmVjeWNsZSwgTk9fT1AsIHRocm93RXJyb3IsIHdhcm5pbmcgfSBmcm9tICdpbmZlcm5vLXNoYXJlZCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuLi9jb3JlL29wdGlvbnMnO1xuaW1wb3J0IHsgZGlyZWN0Q2xvbmUgfSBmcm9tICcuLi9jb3JlL1ZOb2Rlcyc7XG5pbXBvcnQgaHlkcmF0ZVJvb3QgZnJvbSAnLi9oeWRyYXRpb24nO1xuaW1wb3J0IHsgbW91bnQgfSBmcm9tICcuL21vdW50aW5nJztcbmltcG9ydCB7IHBhdGNoIH0gZnJvbSAnLi9wYXRjaGluZyc7XG5pbXBvcnQgeyB1bm1vdW50IH0gZnJvbSAnLi91bm1vdW50aW5nJztcbmltcG9ydCB7IEVNUFRZX09CSiB9IGZyb20gJy4vdXRpbHMnO1xuLy8gcmF0aGVyIHRoYW4gdXNlIGEgTWFwLCBsaWtlIHdlIGRpZCBiZWZvcmUsIHdlIGNhbiB1c2UgYW4gYXJyYXkgaGVyZVxuLy8gZ2l2ZW4gdGhlcmUgc2hvdWxkbid0IGJlIFRIQVQgbWFueSByb290cyBvbiB0aGUgcGFnZSwgdGhlIGRpZmZlcmVuY2Vcbi8vIGluIHBlcmZvcm1hbmNlIGlzIGh1Z2U6IGh0dHBzOi8vZXNiZW5jaC5jb20vYmVuY2gvNTgwMmE2OTEzMzBhYjA5OTAwYTFhMmRhXG5leHBvcnQgY29uc3Qgcm9vdHMgPSBbXTtcbmV4cG9ydCBjb25zdCBjb21wb25lbnRUb0RPTU5vZGVNYXAgPSBuZXcgTWFwKCk7XG5vcHRpb25zLnJvb3RzID0gcm9vdHM7XG5leHBvcnQgZnVuY3Rpb24gZmluZERPTU5vZGUocmVmKSB7XG4gICAgaWYgKCFvcHRpb25zLmZpbmRET01Ob2RlRW5hYmxlZCkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcignZmluZERPTU5vZGUoKSBoYXMgYmVlbiBkaXNhYmxlZCwgdXNlIEluZmVybm8ub3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQgPSB0cnVlOyBlbmFibGVkIGZpbmRET01Ob2RlKCkuIFdhcm5pbmcgdGhpcyBjYW4gc2lnbmlmaWNhbnRseSBpbXBhY3QgcGVyZm9ybWFuY2UhJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgIH1cbiAgICBjb25zdCBkb20gPSByZWYgJiYgcmVmLm5vZGVUeXBlID8gcmVmIDogbnVsbDtcbiAgICByZXR1cm4gY29tcG9uZW50VG9ET01Ob2RlTWFwLmdldChyZWYpIHx8IGRvbTtcbn1cbmZ1bmN0aW9uIGdldFJvb3QoZG9tKSB7XG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHJvb3RzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHJvb3QgPSByb290c1tpXTtcbiAgICAgICAgaWYgKHJvb3QuZG9tID09PSBkb20pIHtcbiAgICAgICAgICAgIHJldHVybiByb290O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZnVuY3Rpb24gc2V0Um9vdChkb20sIGlucHV0LCBsaWZlY3ljbGUpIHtcbiAgICBjb25zdCByb290ID0ge1xuICAgICAgICBkb20sXG4gICAgICAgIGlucHV0LFxuICAgICAgICBsaWZlY3ljbGVcbiAgICB9O1xuICAgIHJvb3RzLnB1c2gocm9vdCk7XG4gICAgcmV0dXJuIHJvb3Q7XG59XG5mdW5jdGlvbiByZW1vdmVSb290KHJvb3QpIHtcbiAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gcm9vdHMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgaWYgKHJvb3RzW2ldID09PSByb290KSB7XG4gICAgICAgICAgICByb290cy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG59XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChpc0Jyb3dzZXIgJiYgZG9jdW1lbnQuYm9keSA9PT0gbnVsbCkge1xuICAgICAgICB3YXJuaW5nKCdJbmZlcm5vIHdhcm5pbmc6IHlvdSBjYW5ub3QgaW5pdGlhbGl6ZSBpbmZlcm5vIHdpdGhvdXQgXCJkb2N1bWVudC5ib2R5XCIuIFdhaXQgb24gXCJET01Db250ZW50TG9hZGVkXCIgZXZlbnQsIGFkZCBzY3JpcHQgdG8gYm90dG9tIG9mIGJvZHksIG9yIHVzZSBhc3luYy9kZWZlciBhdHRyaWJ1dGVzIG9uIHNjcmlwdCB0YWcuJyk7XG4gICAgfVxufVxuY29uc3QgZG9jdW1lbnRCb2R5ID0gaXNCcm93c2VyID8gZG9jdW1lbnQuYm9keSA6IG51bGw7XG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyKGlucHV0LCBwYXJlbnREb20pIHtcbiAgICBpZiAoZG9jdW1lbnRCb2R5ID09PSBwYXJlbnREb20pIHtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoJ3lvdSBjYW5ub3QgcmVuZGVyKCkgdG8gdGhlIFwiZG9jdW1lbnQuYm9keVwiLiBVc2UgYW4gZW1wdHkgZWxlbWVudCBhcyBhIGNvbnRhaW5lciBpbnN0ZWFkLicpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG4gICAgaWYgKGlucHV0ID09PSBOT19PUCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCByb290ID0gZ2V0Um9vdChwYXJlbnREb20pO1xuICAgIGlmIChpc051bGwocm9vdCkpIHtcbiAgICAgICAgY29uc3QgbGlmZWN5Y2xlID0gbmV3IExpZmVjeWNsZSgpO1xuICAgICAgICBpZiAoIWlzSW52YWxpZChpbnB1dCkpIHtcbiAgICAgICAgICAgIGlmIChpbnB1dC5kb20pIHtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IGRpcmVjdENsb25lKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaHlkcmF0ZVJvb3QoaW5wdXQsIHBhcmVudERvbSwgbGlmZWN5Y2xlKSkge1xuICAgICAgICAgICAgICAgIG1vdW50KGlucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSwgRU1QVFlfT0JKLCBmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByb290ID0gc2V0Um9vdChwYXJlbnREb20sIGlucHV0LCBsaWZlY3ljbGUpO1xuICAgICAgICAgICAgbGlmZWN5Y2xlLnRyaWdnZXIoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgbGlmZWN5Y2xlID0gcm9vdC5saWZlY3ljbGU7XG4gICAgICAgIGxpZmVjeWNsZS5saXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgaWYgKGlzTnVsbE9yVW5kZWYoaW5wdXQpKSB7XG4gICAgICAgICAgICB1bm1vdW50KHJvb3QuaW5wdXQsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICAgICAgcmVtb3ZlUm9vdChyb290KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpbnB1dC5kb20pIHtcbiAgICAgICAgICAgICAgICBpbnB1dCA9IGRpcmVjdENsb25lKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHBhdGNoKHJvb3QuaW5wdXQsIGlucHV0LCBwYXJlbnREb20sIGxpZmVjeWNsZSwgRU1QVFlfT0JKLCBmYWxzZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGxpZmVjeWNsZS50cmlnZ2VyKCk7XG4gICAgICAgIHJvb3QuaW5wdXQgPSBpbnB1dDtcbiAgICB9XG4gICAgaWYgKHJvb3QpIHtcbiAgICAgICAgY29uc3Qgcm9vdElucHV0ID0gcm9vdC5pbnB1dDtcbiAgICAgICAgaWYgKHJvb3RJbnB1dCAmJiAocm9vdElucHV0LmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJvb3RJbnB1dC5jaGlsZHJlbjtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVSZW5kZXJlcihwYXJlbnREb20pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVuZGVyZXIobGFzdElucHV0LCBuZXh0SW5wdXQpIHtcbiAgICAgICAgaWYgKCFwYXJlbnREb20pIHtcbiAgICAgICAgICAgIHBhcmVudERvbSA9IGxhc3RJbnB1dDtcbiAgICAgICAgfVxuICAgICAgICByZW5kZXIobmV4dElucHV0LCBwYXJlbnREb20pO1xuICAgIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL0RPTS9yZW5kZXJpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgcHJvY2Vzc0lucHV0IH0gZnJvbSAnLi9JbnB1dFdyYXBwZXInO1xuaW1wb3J0IHsgcHJvY2Vzc1NlbGVjdCB9IGZyb20gJy4vU2VsZWN0V3JhcHBlcic7XG5pbXBvcnQgeyBwcm9jZXNzVGV4dGFyZWEgfSBmcm9tICcuL1RleHRhcmVhV3JhcHBlcic7XG5leHBvcnQgY29uc3Qgd3JhcHBlcnMgPSBuZXcgTWFwKCk7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwcm9jZXNzRWxlbWVudChmbGFncywgdk5vZGUsIGRvbSwgbW91bnRpbmcpIHtcbiAgICBpZiAoZmxhZ3MgJiA1MTIgLyogSW5wdXRFbGVtZW50ICovKSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzSW5wdXQodk5vZGUsIGRvbSk7XG4gICAgfVxuICAgIGlmIChmbGFncyAmIDIwNDggLyogU2VsZWN0RWxlbWVudCAqLykge1xuICAgICAgICByZXR1cm4gcHJvY2Vzc1NlbGVjdCh2Tm9kZSwgZG9tLCBtb3VudGluZyk7XG4gICAgfVxuICAgIGlmIChmbGFncyAmIDEwMjQgLyogVGV4dGFyZWFFbGVtZW50ICovKSB7XG4gICAgICAgIHJldHVybiBwcm9jZXNzVGV4dGFyZWEodk5vZGUsIGRvbSwgbW91bnRpbmcpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL0RPTS93cmFwcGVycy9wcm9jZXNzRWxlbWVudC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBjcmVhdGVWTm9kZSB9IGZyb20gJ2luZmVybm8nO1xuaW1wb3J0IHsgaXNBdHRyQW5FdmVudCwgaXNJbnZhbGlkLCBpc051bGxPclVuZGVmLCBpc09iamVjdCwgaXNTdGF0ZWZ1bENvbXBvbmVudCwgaXNTdHJpbmcsIGlzVW5kZWZpbmVkIH0gZnJvbSAnaW5mZXJuby1zaGFyZWQnO1xuY29uc3QgY29tcG9uZW50SG9va3MgPSB7XG4gICAgb25Db21wb25lbnRXaWxsTW91bnQ6IHRydWUsXG4gICAgb25Db21wb25lbnREaWRNb3VudDogdHJ1ZSxcbiAgICBvbkNvbXBvbmVudFdpbGxVbm1vdW50OiB0cnVlLFxuICAgIG9uQ29tcG9uZW50U2hvdWxkVXBkYXRlOiB0cnVlLFxuICAgIG9uQ29tcG9uZW50V2lsbFVwZGF0ZTogdHJ1ZSxcbiAgICBvbkNvbXBvbmVudERpZFVwZGF0ZTogdHJ1ZVxufTtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQobmFtZSwgcHJvcHMsIC4uLl9jaGlsZHJlbikge1xuICAgIGlmIChpc0ludmFsaWQobmFtZSkgfHwgaXNPYmplY3QobmFtZSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdJbmZlcm5vIEVycm9yOiBjcmVhdGVFbGVtZW50KCkgbmFtZSBwYXJhbWV0ZXIgY2Fubm90IGJlIHVuZGVmaW5lZCwgbnVsbCwgZmFsc2Ugb3IgdHJ1ZSwgSXQgbXVzdCBiZSBhIHN0cmluZywgY2xhc3Mgb3IgZnVuY3Rpb24uJyk7XG4gICAgfVxuICAgIGxldCBjaGlsZHJlbiA9IF9jaGlsZHJlbjtcbiAgICBsZXQgcmVmID0gbnVsbDtcbiAgICBsZXQga2V5ID0gbnVsbDtcbiAgICBsZXQgZXZlbnRzID0gbnVsbDtcbiAgICBsZXQgZmxhZ3MgPSAwO1xuICAgIGlmIChfY2hpbGRyZW4pIHtcbiAgICAgICAgaWYgKF9jaGlsZHJlbi5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gX2NoaWxkcmVuWzBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKF9jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpc1N0cmluZyhuYW1lKSkge1xuICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3N2Zyc6XG4gICAgICAgICAgICAgICAgZmxhZ3MgPSAxMjggLyogU3ZnRWxlbWVudCAqLztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2lucHV0JzpcbiAgICAgICAgICAgICAgICBmbGFncyA9IDUxMiAvKiBJbnB1dEVsZW1lbnQgKi87XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd0ZXh0YXJlYSc6XG4gICAgICAgICAgICAgICAgZmxhZ3MgPSAxMDI0IC8qIFRleHRhcmVhRWxlbWVudCAqLztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgICAgICAgZmxhZ3MgPSAyMDQ4IC8qIFNlbGVjdEVsZW1lbnQgKi87XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGZsYWdzID0gMiAvKiBIdG1sRWxlbWVudCAqLztcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvKlxuICAgICAgICAgVGhpcyBmaXhlcyBkZS1vcHRpbWlzYXRpb246XG4gICAgICAgICB1c2VzIG9iamVjdCBLZXlzIGZvciBsb29waW5nIHByb3BzIHRvIGF2b2lkIGRlbGV0aW5nIHByb3BzIG9mIGxvb3BlZCBvYmplY3RcbiAgICAgICAgICovXG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihwcm9wcykpIHtcbiAgICAgICAgICAgIGNvbnN0IHByb3BLZXlzID0gT2JqZWN0LmtleXMocHJvcHMpO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHByb3BLZXlzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvcEtleSA9IHByb3BLZXlzW2ldO1xuICAgICAgICAgICAgICAgIGlmIChwcm9wS2V5ID09PSAna2V5Jykge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBwcm9wcy5rZXk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwcm9wcy5rZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb3BLZXkgPT09ICdjaGlsZHJlbicgJiYgaXNVbmRlZmluZWQoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47IC8vIGFsd2F5cyBmYXZvdXIgY2hpbGRyZW4gYXJncywgZGVmYXVsdCB0byBwcm9wc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9wS2V5ID09PSAncmVmJykge1xuICAgICAgICAgICAgICAgICAgICByZWYgPSBwcm9wcy5yZWY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKGlzQXR0ckFuRXZlbnQocHJvcEtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFldmVudHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50cyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50c1twcm9wS2V5XSA9IHByb3BzW3Byb3BLZXldO1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgcHJvcHNbcHJvcEtleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBmbGFncyA9IGlzU3RhdGVmdWxDb21wb25lbnQobmFtZSkgPyA0IC8qIENvbXBvbmVudENsYXNzICovIDogOCAvKiBDb21wb25lbnRGdW5jdGlvbiAqLztcbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChjaGlsZHJlbikpIHtcbiAgICAgICAgICAgIGlmICghcHJvcHMpIHtcbiAgICAgICAgICAgICAgICBwcm9wcyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJvcHMuY2hpbGRyZW4gPSBjaGlsZHJlbjtcbiAgICAgICAgICAgIGNoaWxkcmVuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYocHJvcHMpKSB7XG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgIFRoaXMgZml4ZXMgZGUtb3B0aW1pc2F0aW9uOlxuICAgICAgICAgICAgIHVzZXMgb2JqZWN0IEtleXMgZm9yIGxvb3BpbmcgcHJvcHMgdG8gYXZvaWQgZGVsZXRpbmcgcHJvcHMgb2YgbG9vcGVkIG9iamVjdFxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjb25zdCBwcm9wS2V5cyA9IE9iamVjdC5rZXlzKHByb3BzKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBwcm9wS2V5cy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb3BLZXkgPSBwcm9wS2V5c1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoY29tcG9uZW50SG9va3NbcHJvcEtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZiA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJlZltwcm9wS2V5XSA9IHByb3BzW3Byb3BLZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChwcm9wS2V5ID09PSAna2V5Jykge1xuICAgICAgICAgICAgICAgICAgICBrZXkgPSBwcm9wcy5rZXk7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwcm9wcy5rZXk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBjcmVhdGVWTm9kZShmbGFncywgbmFtZSwgcHJvcHMsIGNoaWxkcmVuLCBldmVudHMsIGtleSwgcmVmKTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmZlcm5vLWNyZWF0ZS1lbGVtZW50L2Rpc3QtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGNvbnN0IHhsaW5rTlMgPSAnaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayc7XG5leHBvcnQgY29uc3QgeG1sTlMgPSAnaHR0cDovL3d3dy53My5vcmcvWE1MLzE5OTgvbmFtZXNwYWNlJztcbmV4cG9ydCBjb25zdCBzdmdOUyA9ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Zyc7XG5jb25zdCBUUlVFID0gdHJ1ZTtcbmV4cG9ydCBjb25zdCBzdHJpY3RQcm9wcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5zdHJpY3RQcm9wcy52b2x1bWUgPSBUUlVFO1xuc3RyaWN0UHJvcHMuZGVmYXVsdENoZWNrZWQgPSBUUlVFO1xuT2JqZWN0LmZyZWV6ZShzdHJpY3RQcm9wcyk7XG5leHBvcnQgY29uc3QgYm9vbGVhblByb3BzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbmJvb2xlYW5Qcm9wcy5tdXRlZCA9IFRSVUU7XG5ib29sZWFuUHJvcHMuc2NvcGVkID0gVFJVRTtcbmJvb2xlYW5Qcm9wcy5sb29wID0gVFJVRTtcbmJvb2xlYW5Qcm9wcy5vcGVuID0gVFJVRTtcbmJvb2xlYW5Qcm9wcy5jaGVja2VkID0gVFJVRTtcbmJvb2xlYW5Qcm9wcy5kZWZhdWx0ID0gVFJVRTtcbmJvb2xlYW5Qcm9wcy5jYXB0dXJlID0gVFJVRTtcbmJvb2xlYW5Qcm9wcy5kaXNhYmxlZCA9IFRSVUU7XG5ib29sZWFuUHJvcHMucmVhZE9ubHkgPSBUUlVFO1xuYm9vbGVhblByb3BzLnJlcXVpcmVkID0gVFJVRTtcbmJvb2xlYW5Qcm9wcy5hdXRvcGxheSA9IFRSVUU7XG5ib29sZWFuUHJvcHMuY29udHJvbHMgPSBUUlVFO1xuYm9vbGVhblByb3BzLnNlYW1sZXNzID0gVFJVRTtcbmJvb2xlYW5Qcm9wcy5yZXZlcnNlZCA9IFRSVUU7XG5ib29sZWFuUHJvcHMuYWxsb3dmdWxsc2NyZWVuID0gVFJVRTtcbmJvb2xlYW5Qcm9wcy5ub3ZhbGlkYXRlID0gVFJVRTtcbmJvb2xlYW5Qcm9wcy5oaWRkZW4gPSBUUlVFO1xuYm9vbGVhblByb3BzLmF1dG9Gb2N1cyA9IFRSVUU7XG5PYmplY3QuZnJlZXplKGJvb2xlYW5Qcm9wcyk7XG5leHBvcnQgY29uc3QgbmFtZXNwYWNlcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5uYW1lc3BhY2VzWyd4bGluazpocmVmJ10gPSB4bGlua05TO1xubmFtZXNwYWNlc1sneGxpbms6YXJjcm9sZSddID0geGxpbmtOUztcbm5hbWVzcGFjZXNbJ3hsaW5rOmFjdHVhdGUnXSA9IHhsaW5rTlM7XG5uYW1lc3BhY2VzWyd4bGluazpzaG93J10gPSB4bGlua05TO1xubmFtZXNwYWNlc1sneGxpbms6cm9sZSddID0geGxpbmtOUztcbm5hbWVzcGFjZXNbJ3hsaW5rOnRpdGxlJ10gPSB4bGlua05TO1xubmFtZXNwYWNlc1sneGxpbms6dHlwZSddID0geGxpbmtOUztcbm5hbWVzcGFjZXNbJ3htbDpiYXNlJ10gPSB4bWxOUztcbm5hbWVzcGFjZXNbJ3htbDpsYW5nJ10gPSB4bWxOUztcbm5hbWVzcGFjZXNbJ3htbDpzcGFjZSddID0geG1sTlM7XG5PYmplY3QuZnJlZXplKG5hbWVzcGFjZXMpO1xuZXhwb3J0IGNvbnN0IGlzVW5pdGxlc3NOdW1iZXIgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuaXNVbml0bGVzc051bWJlci5hbmltYXRpb25JdGVyYXRpb25Db3VudCA9IFRSVUU7XG5pc1VuaXRsZXNzTnVtYmVyLmJvcmRlckltYWdlT3V0c2V0ID0gVFJVRTtcbmlzVW5pdGxlc3NOdW1iZXIuYm9yZGVySW1hZ2VTbGljZSA9IFRSVUU7XG5pc1VuaXRsZXNzTnVtYmVyLmJvcmRlckltYWdlV2lkdGggPSBUUlVFO1xuaXNVbml0bGVzc051bWJlci5ib3hGbGV4ID0gVFJVRTtcbmlzVW5pdGxlc3NOdW1iZXIuYm94RmxleEdyb3VwID0gVFJVRTtcbmlzVW5pdGxlc3NOdW1iZXIuYm94T3JkaW5hbEdyb3VwID0gVFJVRTtcbmlzVW5pdGxlc3NOdW1iZXIuY29sdW1uQ291bnQgPSBUUlVFO1xuaXNVbml0bGVzc051bWJlci5mbGV4ID0gVFJVRTtcbmlzVW5pdGxlc3NOdW1iZXIuZmxleEdyb3cgPSBUUlVFO1xuaXNVbml0bGVzc051bWJlci5mbGV4UG9zaXRpdmUgPSBUUlVFO1xuaXNVbml0bGVzc051bWJlci5mbGV4U2hyaW5rID0gVFJVRTtcbmlzVW5pdGxlc3NOdW1iZXIuZmxleE5lZ2F0aXZlID0gVFJVRTtcbmlzVW5pdGxlc3NOdW1iZXIuZmxleE9yZGVyID0gVFJVRTtcbmlzVW5pdGxlc3NOdW1iZXIuZ3JpZFJvdyA9IFRSVUU7XG5pc1VuaXRsZXNzTnVtYmVyLmdyaWRDb2x1bW4gPSBUUlVFO1xuaXNVbml0bGVzc051bWJlci5mb250V2VpZ2h0ID0gVFJVRTtcbmlzVW5pdGxlc3NOdW1iZXIubGluZUNsYW1wID0gVFJVRTtcbmlzVW5pdGxlc3NOdW1iZXIubGluZUhlaWdodCA9IFRSVUU7XG5pc1VuaXRsZXNzTnVtYmVyLm9wYWNpdHkgPSBUUlVFO1xuaXNVbml0bGVzc051bWJlci5vcmRlciA9IFRSVUU7XG5pc1VuaXRsZXNzTnVtYmVyLm9ycGhhbnMgPSBUUlVFO1xuaXNVbml0bGVzc051bWJlci50YWJTaXplID0gVFJVRTtcbmlzVW5pdGxlc3NOdW1iZXIud2lkb3dzID0gVFJVRTtcbmlzVW5pdGxlc3NOdW1iZXIuekluZGV4ID0gVFJVRTtcbmlzVW5pdGxlc3NOdW1iZXIuem9vbSA9IFRSVUU7XG5pc1VuaXRsZXNzTnVtYmVyLmZpbGxPcGFjaXR5ID0gVFJVRTtcbmlzVW5pdGxlc3NOdW1iZXIuZmxvb2RPcGFjaXR5ID0gVFJVRTtcbmlzVW5pdGxlc3NOdW1iZXIuc3RvcE9wYWNpdHkgPSBUUlVFO1xuaXNVbml0bGVzc051bWJlci5zdHJva2VEYXNoYXJyYXkgPSBUUlVFO1xuaXNVbml0bGVzc051bWJlci5zdHJva2VEYXNob2Zmc2V0ID0gVFJVRTtcbmlzVW5pdGxlc3NOdW1iZXIuc3Ryb2tlTWl0ZXJsaW1pdCA9IFRSVUU7XG5pc1VuaXRsZXNzTnVtYmVyLnN0cm9rZU9wYWNpdHkgPSBUUlVFO1xuaXNVbml0bGVzc051bWJlci5zdHJva2VXaWR0aCA9IFRSVUU7XG5PYmplY3QuZnJlZXplKGlzVW5pdGxlc3NOdW1iZXIpO1xuZXhwb3J0IGNvbnN0IHNraXBQcm9wcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5za2lwUHJvcHMuY2hpbGRyZW4gPSBUUlVFO1xuc2tpcFByb3BzLmNoaWxkcmVuVHlwZSA9IFRSVUU7XG5za2lwUHJvcHMuZGVmYXVsdFZhbHVlID0gVFJVRTtcbnNraXBQcm9wcy5yZWYgPSBUUlVFO1xuc2tpcFByb3BzLmtleSA9IFRSVUU7XG5za2lwUHJvcHMuc2VsZWN0ZWQgPSBUUlVFO1xuc2tpcFByb3BzLmNoZWNrZWQgPSBUUlVFO1xuc2tpcFByb3BzLm11bHRpcGxlID0gVFJVRTtcbk9iamVjdC5mcmVlemUoc2tpcFByb3BzKTtcbmV4cG9ydCBjb25zdCBkZWxlZ2F0ZWRQcm9wcyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5kZWxlZ2F0ZWRQcm9wcy5vbkNsaWNrID0gVFJVRTtcbmRlbGVnYXRlZFByb3BzLm9uTW91c2VEb3duID0gVFJVRTtcbmRlbGVnYXRlZFByb3BzLm9uTW91c2VVcCA9IFRSVUU7XG5kZWxlZ2F0ZWRQcm9wcy5vbk1vdXNlTW92ZSA9IFRSVUU7XG5kZWxlZ2F0ZWRQcm9wcy5vblN1Ym1pdCA9IFRSVUU7XG5kZWxlZ2F0ZWRQcm9wcy5vbkRibENsaWNrID0gVFJVRTtcbmRlbGVnYXRlZFByb3BzLm9uS2V5RG93biA9IFRSVUU7XG5kZWxlZ2F0ZWRQcm9wcy5vbktleVVwID0gVFJVRTtcbmRlbGVnYXRlZFByb3BzLm9uS2V5UHJlc3MgPSBUUlVFO1xuT2JqZWN0LmZyZWV6ZShkZWxlZ2F0ZWRQcm9wcyk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL0RPTS9jb25zdGFudHMuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IHsgaXNBcnJheSwgaXNGdW5jdGlvbiwgaXNJbnZhbGlkLCBpc051bGwsIGlzT2JqZWN0LCBpc1N0cmluZ09yTnVtYmVyLCBpc1VuZGVmaW5lZCwgdGhyb3dFcnJvciwgaXNOdWxsT3JVbmRlZiB9IGZyb20gJ2luZmVybm8tc2hhcmVkJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL2NvcmUvb3B0aW9ucyc7XG5pbXBvcnQgeyBkaXJlY3RDbG9uZSwgaXNWTm9kZSB9IGZyb20gJy4uL2NvcmUvVk5vZGVzJztcbmltcG9ydCB7IHBhdGNoRXZlbnQsIHBhdGNoUHJvcCB9IGZyb20gJy4vcGF0Y2hpbmcnO1xuaW1wb3J0IHsgcmVjeWNsZUNvbXBvbmVudCwgcmVjeWNsZUVsZW1lbnQgfSBmcm9tICcuL3JlY3ljbGluZyc7XG5pbXBvcnQgeyBjb21wb25lbnRUb0RPTU5vZGVNYXAgfSBmcm9tICcuL3JlbmRlcmluZyc7XG5pbXBvcnQgeyBhcHBlbmRDaGlsZCwgY3JlYXRlQ2xhc3NDb21wb25lbnRJbnN0YW5jZSwgY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudElucHV0LCBkb2N1bWVudENyZWF0ZUVsZW1lbnQsIHNldFRleHRDb250ZW50LCBFTVBUWV9PQkogfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCBwcm9jZXNzRWxlbWVudCBmcm9tICcuL3dyYXBwZXJzL3Byb2Nlc3NFbGVtZW50JztcbmV4cG9ydCBmdW5jdGlvbiBtb3VudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKSB7XG4gICAgY29uc3QgZmxhZ3MgPSB2Tm9kZS5mbGFncztcbiAgICBpZiAoZmxhZ3MgJiAzOTcwIC8qIEVsZW1lbnQgKi8pIHtcbiAgICAgICAgcmV0dXJuIG1vdW50RWxlbWVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgcmV0dXJuIG1vdW50Q29tcG9uZW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgNDA5NiAvKiBWb2lkICovKSB7XG4gICAgICAgIHJldHVybiBtb3VudFZvaWQodk5vZGUsIHBhcmVudERvbSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgMSAvKiBUZXh0ICovKSB7XG4gICAgICAgIHJldHVybiBtb3VudFRleHQodk5vZGUsIHBhcmVudERvbSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2Tm9kZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKGBtb3VudCgpIHJlY2VpdmVkIGFuIG9iamVjdCB0aGF0J3Mgbm90IGEgdmFsaWQgVk5vZGUsIHlvdSBzaG91bGQgc3RyaW5naWZ5IGl0IGZpcnN0LiBPYmplY3Q6IFwiJHtKU09OLnN0cmluZ2lmeSh2Tm9kZSl9XCIuYCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKGBtb3VudCgpIGV4cGVjdHMgYSB2YWxpZCBWTm9kZSwgaW5zdGVhZCBpdCByZWNlaXZlZCBhbiBvYmplY3Qgd2l0aCB0aGUgdHlwZSBcIiR7dHlwZW9mIHZOb2RlfVwiLmApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbW91bnRUZXh0KHZOb2RlLCBwYXJlbnREb20pIHtcbiAgICBjb25zdCBkb20gPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh2Tm9kZS5jaGlsZHJlbik7XG4gICAgdk5vZGUuZG9tID0gZG9tO1xuICAgIGlmIChwYXJlbnREb20pIHtcbiAgICAgICAgYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50Vm9pZCh2Tm9kZSwgcGFyZW50RG9tKSB7XG4gICAgY29uc3QgZG9tID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIHZOb2RlLmRvbSA9IGRvbTtcbiAgICBpZiAocGFyZW50RG9tKSB7XG4gICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tKTtcbiAgICB9XG4gICAgcmV0dXJuIGRvbTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtb3VudEVsZW1lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIGlmIChvcHRpb25zLnJlY3ljbGluZ0VuYWJsZWQpIHtcbiAgICAgICAgY29uc3QgZG9tID0gcmVjeWNsZUVsZW1lbnQodk5vZGUsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICBpZiAoIWlzTnVsbChkb20pKSB7XG4gICAgICAgICAgICBpZiAoIWlzTnVsbChwYXJlbnREb20pKSB7XG4gICAgICAgICAgICAgICAgYXBwZW5kQ2hpbGQocGFyZW50RG9tLCBkb20pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGRvbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBmbGFncyA9IHZOb2RlLmZsYWdzO1xuICAgIGlmIChpc1NWRyB8fCAoZmxhZ3MgJiAxMjggLyogU3ZnRWxlbWVudCAqLykpIHtcbiAgICAgICAgaXNTVkcgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBkb20gPSBkb2N1bWVudENyZWF0ZUVsZW1lbnQodk5vZGUudHlwZSwgaXNTVkcpO1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdk5vZGUuY2hpbGRyZW47XG4gICAgY29uc3QgcHJvcHMgPSB2Tm9kZS5wcm9wcztcbiAgICBjb25zdCBldmVudHMgPSB2Tm9kZS5ldmVudHM7XG4gICAgY29uc3QgcmVmID0gdk5vZGUucmVmO1xuICAgIHZOb2RlLmRvbSA9IGRvbTtcbiAgICBpZiAoIWlzSW52YWxpZChjaGlsZHJlbikpIHtcbiAgICAgICAgaWYgKGlzU3RyaW5nT3JOdW1iZXIoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBzZXRUZXh0Q29udGVudChkb20sIGNoaWxkcmVuKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgbW91bnRBcnJheUNoaWxkcmVuKGNoaWxkcmVuLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzVk5vZGUoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICBtb3VudChjaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBsZXQgaGFzQ29udHJvbGxlZFZhbHVlID0gZmFsc2U7XG4gICAgaWYgKCEoZmxhZ3MgJiAyIC8qIEh0bWxFbGVtZW50ICovKSkge1xuICAgICAgICBoYXNDb250cm9sbGVkVmFsdWUgPSBwcm9jZXNzRWxlbWVudChmbGFncywgdk5vZGUsIGRvbSwgdHJ1ZSk7XG4gICAgfVxuICAgIGlmICghaXNOdWxsKHByb3BzKSkge1xuICAgICAgICBmb3IgKGxldCBwcm9wIGluIHByb3BzKSB7XG4gICAgICAgICAgICAvLyBkbyBub3QgYWRkIGEgaGFzT3duUHJvcGVydHkgY2hlY2sgaGVyZSwgaXQgYWZmZWN0cyBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgcGF0Y2hQcm9wKHByb3AsIG51bGwsIHByb3BzW3Byb3BdLCBkb20sIGlzU1ZHLCBoYXNDb250cm9sbGVkVmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghaXNOdWxsKGV2ZW50cykpIHtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBldmVudHMpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICBwYXRjaEV2ZW50KG5hbWUsIG51bGwsIGV2ZW50c1tuYW1lXSwgZG9tKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWlzTnVsbChyZWYpKSB7XG4gICAgICAgIG1vdW50UmVmKGRvbSwgcmVmLCBsaWZlY3ljbGUpO1xuICAgIH1cbiAgICBpZiAoIWlzTnVsbChwYXJlbnREb20pKSB7XG4gICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tKTtcbiAgICB9XG4gICAgcmV0dXJuIGRvbTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtb3VudEFycmF5Q2hpbGRyZW4oY2hpbGRyZW4sIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBsZXQgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgLy8gVmVyaWZ5IGNhbiBzdHJpbmcvbnVtYmVyIGJlIGhlcmUuIG1pZ2h0IGNhdXNlIGRlLW9wdC4gLSBOb3JtYWxpemF0aW9uIHRha2VzIGNhcmUgb2YgaXQuXG4gICAgICAgIGlmICghaXNJbnZhbGlkKGNoaWxkKSkge1xuICAgICAgICAgICAgaWYgKGNoaWxkLmRvbSkge1xuICAgICAgICAgICAgICAgIGNoaWxkcmVuW2ldID0gY2hpbGQgPSBkaXJlY3RDbG9uZShjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb3VudChjaGlsZHJlbltpXSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBtb3VudENvbXBvbmVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCBpc0NsYXNzKSB7XG4gICAgaWYgKG9wdGlvbnMucmVjeWNsaW5nRW5hYmxlZCkge1xuICAgICAgICBjb25zdCBkb20gPSByZWN5Y2xlQ29tcG9uZW50KHZOb2RlLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgaWYgKCFpc051bGwoZG9tKSkge1xuICAgICAgICAgICAgaWYgKCFpc051bGwocGFyZW50RG9tKSkge1xuICAgICAgICAgICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkb207XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3QgdHlwZSA9IHZOb2RlLnR5cGU7XG4gICAgY29uc3QgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgY29uc3QgcmVmID0gdk5vZGUucmVmO1xuICAgIGxldCBkb207XG4gICAgaWYgKGlzQ2xhc3MpIHtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBjcmVhdGVDbGFzc0NvbXBvbmVudEluc3RhbmNlKHZOb2RlLCB0eXBlLCBwcm9wcywgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGluc3RhbmNlLl9sYXN0SW5wdXQ7XG4gICAgICAgIGluc3RhbmNlLl92Tm9kZSA9IHZOb2RlO1xuICAgICAgICB2Tm9kZS5kb20gPSBkb20gPSBtb3VudChpbnB1dCwgbnVsbCwgbGlmZWN5Y2xlLCBpbnN0YW5jZS5fY2hpbGRDb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIGlmICghaXNOdWxsKHBhcmVudERvbSkpIHtcbiAgICAgICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tKTtcbiAgICAgICAgfVxuICAgICAgICBtb3VudENsYXNzQ29tcG9uZW50Q2FsbGJhY2tzKHZOb2RlLCByZWYsIGluc3RhbmNlLCBsaWZlY3ljbGUpO1xuICAgICAgICBvcHRpb25zLmZpbmRET01Ob2RlRW5hYmxlZCAmJiBjb21wb25lbnRUb0RPTU5vZGVNYXAuc2V0KGluc3RhbmNlLCBkb20pO1xuICAgICAgICB2Tm9kZS5jaGlsZHJlbiA9IGluc3RhbmNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc3QgaW5wdXQgPSBjcmVhdGVGdW5jdGlvbmFsQ29tcG9uZW50SW5wdXQodk5vZGUsIHR5cGUsIHByb3BzLCBjb250ZXh0KTtcbiAgICAgICAgdk5vZGUuZG9tID0gZG9tID0gbW91bnQoaW5wdXQsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB2Tm9kZS5jaGlsZHJlbiA9IGlucHV0O1xuICAgICAgICBtb3VudEZ1bmN0aW9uYWxDb21wb25lbnRDYWxsYmFja3MocmVmLCBkb20sIGxpZmVjeWNsZSk7XG4gICAgICAgIGlmICghaXNOdWxsKHBhcmVudERvbSkpIHtcbiAgICAgICAgICAgIGFwcGVuZENoaWxkKHBhcmVudERvbSwgZG9tKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gZG9tO1xufVxuZXhwb3J0IGZ1bmN0aW9uIG1vdW50Q2xhc3NDb21wb25lbnRDYWxsYmFja3Modk5vZGUsIHJlZiwgaW5zdGFuY2UsIGxpZmVjeWNsZSkge1xuICAgIGlmIChyZWYpIHtcbiAgICAgICAgaWYgKGlzRnVuY3Rpb24ocmVmKSkge1xuICAgICAgICAgICAgcmVmKGluc3RhbmNlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzU3RyaW5nT3JOdW1iZXIocmVmKSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCdzdHJpbmcgXCJyZWZzXCIgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gSW5mZXJubyAxLjAuIFVzZSBjYWxsYmFjayBcInJlZnNcIiBpbnN0ZWFkLicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc09iamVjdChyZWYpICYmICh2Tm9kZS5mbGFncyAmIDQgLyogQ29tcG9uZW50Q2xhc3MgKi8pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93RXJyb3IoJ2Z1bmN0aW9uYWwgY29tcG9uZW50IGxpZmVjeWNsZSBldmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgb24gRVMyMDE1IGNsYXNzIGNvbXBvbmVudHMuJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKGBhIGJhZCB2YWx1ZSBmb3IgXCJyZWZcIiB3YXMgdXNlZCBvbiBjb21wb25lbnQ6IFwiJHtKU09OLnN0cmluZ2lmeShyZWYpfVwiYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IGNETSA9IGluc3RhbmNlLmNvbXBvbmVudERpZE1vdW50O1xuICAgIGNvbnN0IGFmdGVyTW91bnQgPSBvcHRpb25zLmFmdGVyTW91bnQ7XG4gICAgaWYgKCFpc1VuZGVmaW5lZChjRE0pIHx8ICFpc051bGwoYWZ0ZXJNb3VudCkpIHtcbiAgICAgICAgbGlmZWN5Y2xlLmFkZExpc3RlbmVyKCgpID0+IHtcbiAgICAgICAgICAgIGFmdGVyTW91bnQgJiYgYWZ0ZXJNb3VudCh2Tm9kZSk7XG4gICAgICAgICAgICBjRE0gJiYgaW5zdGFuY2UuY29tcG9uZW50RGlkTW91bnQoKTtcbiAgICAgICAgICAgIGluc3RhbmNlLl9zeW5jU2V0U3RhdGUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGluc3RhbmNlLl9zeW5jU2V0U3RhdGUgPSB0cnVlO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBtb3VudEZ1bmN0aW9uYWxDb21wb25lbnRDYWxsYmFja3MocmVmLCBkb20sIGxpZmVjeWNsZSkge1xuICAgIGlmIChyZWYpIHtcbiAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKHJlZi5vbkNvbXBvbmVudFdpbGxNb3VudCkpIHtcbiAgICAgICAgICAgIHJlZi5vbkNvbXBvbmVudFdpbGxNb3VudCgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihyZWYub25Db21wb25lbnREaWRNb3VudCkpIHtcbiAgICAgICAgICAgIGxpZmVjeWNsZS5hZGRMaXN0ZW5lcigoKSA9PiByZWYub25Db21wb25lbnREaWRNb3VudChkb20pKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBtb3VudFJlZihkb20sIHZhbHVlLCBsaWZlY3ljbGUpIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgICAgbGlmZWN5Y2xlLmFkZExpc3RlbmVyKCgpID0+IHZhbHVlKGRvbSkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGlzSW52YWxpZCh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcignc3RyaW5nIFwicmVmc1wiIGFyZSBub3Qgc3VwcG9ydGVkIGluIEluZmVybm8gMS4wLiBVc2UgY2FsbGJhY2sgXCJyZWZzXCIgaW5zdGVhZC4nKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2luZmVybm8vZGlzdC1lcy9ET00vbW91bnRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8vIE1ha2Ugc3VyZSB1IHVzZSBFTVBUWV9PQkogZnJvbSAnaW5mZXJubycsIG90aGVyd2lzZSBpdCdsbCBiZSBhIGRpZmZlcmVudCByZWZlcmVuY2VcbmltcG9ydCB7IEVNUFRZX09CSiwgY3JlYXRlVk5vZGUsIG9wdGlvbnMgfSBmcm9tICdpbmZlcm5vJztcbmltcG9ydCB7IEVSUk9SX01TRywgaXNBcnJheSwgaXNCcm93c2VyLCBpc0Z1bmN0aW9uLCBpc0ludmFsaWQsIGlzTnVsbE9yVW5kZWYsIGlzU3RyaW5nT3JOdW1iZXIsIExpZmVjeWNsZSwgTk9fT1AsIHRocm93RXJyb3IsIGNvbWJpbmVGcm9tLCBpc1VuZGVmaW5lZCB9IGZyb20gJ2luZmVybm8tc2hhcmVkJztcbmxldCBub09wID0gRVJST1JfTVNHO1xuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBub09wID0gJ0luZmVybm8gRXJyb3I6IENhbiBvbmx5IHVwZGF0ZSBhIG1vdW50ZWQgb3IgbW91bnRpbmcgY29tcG9uZW50LiBUaGlzIHVzdWFsbHkgbWVhbnMgeW91IGNhbGxlZCBzZXRTdGF0ZSgpIG9yIGZvcmNlVXBkYXRlKCkgb24gYW4gdW5tb3VudGVkIGNvbXBvbmVudC4gVGhpcyBpcyBhIG5vLW9wLic7XG59XG5jb25zdCBjb21wb25lbnRDYWxsYmFja1F1ZXVlID0gbmV3IE1hcCgpO1xuLy8gd2hlbiBhIGNvbXBvbmVudHMgcm9vdCBWTm9kZSBpcyBhbHNvIGEgY29tcG9uZW50LCB3ZSBjYW4gcnVuIGludG8gaXNzdWVzXG4vLyB0aGlzIHdpbGwgcmVjdXJzaXZlbHkgbG9vayBmb3Igdk5vZGUucGFyZW50Tm9kZSBpZiB0aGUgVk5vZGUgaXMgYSBjb21wb25lbnRcbmZ1bmN0aW9uIHVwZGF0ZVBhcmVudENvbXBvbmVudFZOb2Rlcyh2Tm9kZSwgZG9tKSB7XG4gICAgaWYgKHZOb2RlLmZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgIGNvbnN0IHBhcmVudFZOb2RlID0gdk5vZGUucGFyZW50Vk5vZGU7XG4gICAgICAgIGlmIChwYXJlbnRWTm9kZSkge1xuICAgICAgICAgICAgcGFyZW50Vk5vZGUuZG9tID0gZG9tO1xuICAgICAgICAgICAgdXBkYXRlUGFyZW50Q29tcG9uZW50Vk5vZGVzKHBhcmVudFZOb2RlLCBkb20pO1xuICAgICAgICB9XG4gICAgfVxufVxuY29uc3QgcmVzb2x2ZWRQcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG5mdW5jdGlvbiBhZGRUb1F1ZXVlKGNvbXBvbmVudCwgZm9yY2UsIGNhbGxiYWNrKSB7XG4gICAgLy8gVE9ETyB0aGlzIGZ1bmN0aW9uIG5lZWRzIHRvIGJlIHJldmlzZWQgYW5kIGltcHJvdmVkIG9uXG4gICAgbGV0IHF1ZXVlID0gY29tcG9uZW50Q2FsbGJhY2tRdWV1ZS5nZXQoY29tcG9uZW50KTtcbiAgICBpZiAoIXF1ZXVlKSB7XG4gICAgICAgIHF1ZXVlID0gW107XG4gICAgICAgIGNvbXBvbmVudENhbGxiYWNrUXVldWUuc2V0KGNvbXBvbmVudCwgcXVldWUpO1xuICAgICAgICByZXNvbHZlZFByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBjb21wb25lbnRDYWxsYmFja1F1ZXVlLmRlbGV0ZShjb21wb25lbnQpO1xuICAgICAgICAgICAgYXBwbHlTdGF0ZShjb21wb25lbnQsIGZvcmNlLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHF1ZXVlLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXVlW2ldKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgcXVldWUucHVzaChjYWxsYmFjayk7XG4gICAgfVxufVxuZnVuY3Rpb24gcXVldWVTdGF0ZUNoYW5nZXMoY29tcG9uZW50LCBuZXdTdGF0ZSwgY2FsbGJhY2ssIHN5bmMpIHtcbiAgICBpZiAoaXNGdW5jdGlvbihuZXdTdGF0ZSkpIHtcbiAgICAgICAgbmV3U3RhdGUgPSBuZXdTdGF0ZShjb21wb25lbnQuc3RhdGUsIGNvbXBvbmVudC5wcm9wcywgY29tcG9uZW50LmNvbnRleHQpO1xuICAgIH1cbiAgICBmb3IgKGxldCBzdGF0ZUtleSBpbiBuZXdTdGF0ZSkge1xuICAgICAgICBjb21wb25lbnQuX3BlbmRpbmdTdGF0ZVtzdGF0ZUtleV0gPSBuZXdTdGF0ZVtzdGF0ZUtleV07XG4gICAgfVxuICAgIGlmICghY29tcG9uZW50Ll9wZW5kaW5nU2V0U3RhdGUgJiYgaXNCcm93c2VyICYmICEoc3luYyAmJiBjb21wb25lbnQuX2Jsb2NrUmVuZGVyKSkge1xuICAgICAgICBpZiAoc3luYyB8fCBjb21wb25lbnQuX2Jsb2NrUmVuZGVyKSB7XG4gICAgICAgICAgICBjb21wb25lbnQuX3BlbmRpbmdTZXRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICBhcHBseVN0YXRlKGNvbXBvbmVudCwgZmFsc2UsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGFkZFRvUXVldWUoY29tcG9uZW50LCBmYWxzZSwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zdCBwZW5kaW5nID0gY29tcG9uZW50Ll9wZW5kaW5nU3RhdGU7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gY29tcG9uZW50LnN0YXRlO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBwZW5kaW5nKSB7XG4gICAgICAgICAgICBzdGF0ZVtrZXldID0gcGVuZGluZ1trZXldO1xuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudC5fcGVuZGluZ1N0YXRlID0ge307XG4gICAgfVxufVxuZnVuY3Rpb24gYXBwbHlTdGF0ZShjb21wb25lbnQsIGZvcmNlLCBjYWxsYmFjaykge1xuICAgIGlmICgoIWNvbXBvbmVudC5fZGVmZXJTZXRTdGF0ZSB8fCBmb3JjZSkgJiYgIWNvbXBvbmVudC5fYmxvY2tSZW5kZXIgJiYgIWNvbXBvbmVudC5fdW5tb3VudGVkKSB7XG4gICAgICAgIGNvbXBvbmVudC5fcGVuZGluZ1NldFN0YXRlID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IHBlbmRpbmdTdGF0ZSA9IGNvbXBvbmVudC5fcGVuZGluZ1N0YXRlO1xuICAgICAgICBjb25zdCBwcmV2U3RhdGUgPSBjb21wb25lbnQuc3RhdGU7XG4gICAgICAgIGNvbnN0IG5leHRTdGF0ZSA9IGNvbWJpbmVGcm9tKHByZXZTdGF0ZSwgcGVuZGluZ1N0YXRlKTtcbiAgICAgICAgY29uc3QgcHJvcHMgPSBjb21wb25lbnQucHJvcHM7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBjb21wb25lbnQuY29udGV4dDtcbiAgICAgICAgY29tcG9uZW50Ll9wZW5kaW5nU3RhdGUgPSB7fTtcbiAgICAgICAgbGV0IG5leHRJbnB1dCA9IGNvbXBvbmVudC5fdXBkYXRlQ29tcG9uZW50KHByZXZTdGF0ZSwgbmV4dFN0YXRlLCBwcm9wcywgcHJvcHMsIGNvbnRleHQsIGZvcmNlLCB0cnVlKTtcbiAgICAgICAgbGV0IGRpZFVwZGF0ZSA9IHRydWU7XG4gICAgICAgIGlmIChpc0ludmFsaWQobmV4dElucHV0KSkge1xuICAgICAgICAgICAgbmV4dElucHV0ID0gY3JlYXRlVk5vZGUoNDA5NiAvKiBWb2lkICovKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChuZXh0SW5wdXQgPT09IE5PX09QKSB7XG4gICAgICAgICAgICBuZXh0SW5wdXQgPSBjb21wb25lbnQuX2xhc3RJbnB1dDtcbiAgICAgICAgICAgIGRpZFVwZGF0ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzU3RyaW5nT3JOdW1iZXIobmV4dElucHV0KSkge1xuICAgICAgICAgICAgbmV4dElucHV0ID0gY3JlYXRlVk5vZGUoMSAvKiBUZXh0ICovLCBudWxsLCBudWxsLCBuZXh0SW5wdXQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzQXJyYXkobmV4dElucHV0KSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCdhIHZhbGlkIEluZmVybm8gVk5vZGUgKG9yIG51bGwpIG11c3QgYmUgcmV0dXJuZWQgZnJvbSBhIGNvbXBvbmVudCByZW5kZXIuIFlvdSBtYXkgaGF2ZSByZXR1cm5lZCBhbiBhcnJheSBvciBhbiBpbnZhbGlkIG9iamVjdC4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93RXJyb3IoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsYXN0SW5wdXQgPSBjb21wb25lbnQuX2xhc3RJbnB1dDtcbiAgICAgICAgY29uc3Qgdk5vZGUgPSBjb21wb25lbnQuX3ZOb2RlO1xuICAgICAgICBjb25zdCBwYXJlbnREb20gPSAobGFzdElucHV0LmRvbSAmJiBsYXN0SW5wdXQuZG9tLnBhcmVudE5vZGUpIHx8IChsYXN0SW5wdXQuZG9tID0gdk5vZGUuZG9tKTtcbiAgICAgICAgY29tcG9uZW50Ll9sYXN0SW5wdXQgPSBuZXh0SW5wdXQ7XG4gICAgICAgIGlmIChkaWRVcGRhdGUpIHtcbiAgICAgICAgICAgIGxldCBjaGlsZENvbnRleHQsIHN1YkxpZmVjeWNsZSA9IGNvbXBvbmVudC5fbGlmZWN5Y2xlO1xuICAgICAgICAgICAgaWYgKCFzdWJMaWZlY3ljbGUpIHtcbiAgICAgICAgICAgICAgICBzdWJMaWZlY3ljbGUgPSBuZXcgTGlmZWN5Y2xlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdWJMaWZlY3ljbGUubGlzdGVuZXJzID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb21wb25lbnQuX2xpZmVjeWNsZSA9IHN1YkxpZmVjeWNsZTtcbiAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQoY29tcG9uZW50LmdldENoaWxkQ29udGV4dCkpIHtcbiAgICAgICAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb21wb25lbnQuZ2V0Q2hpbGRDb250ZXh0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZihjaGlsZENvbnRleHQpKSB7XG4gICAgICAgICAgICAgICAgY2hpbGRDb250ZXh0ID0gY29tcG9uZW50Ll9jaGlsZENvbnRleHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGlsZENvbnRleHQgPSBjb21iaW5lRnJvbShjb250ZXh0LCBjaGlsZENvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcG9uZW50Ll9wYXRjaChsYXN0SW5wdXQsIG5leHRJbnB1dCwgcGFyZW50RG9tLCBzdWJMaWZlY3ljbGUsIGNoaWxkQ29udGV4dCwgY29tcG9uZW50Ll9pc1NWRywgZmFsc2UpO1xuICAgICAgICAgICAgc3ViTGlmZWN5Y2xlLnRyaWdnZXIoKTtcbiAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQoY29tcG9uZW50LmNvbXBvbmVudERpZFVwZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuY29tcG9uZW50RGlkVXBkYXRlKHByb3BzLCBwcmV2U3RhdGUsIGNvbnRleHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3B0aW9ucy5hZnRlclVwZGF0ZSAmJiBvcHRpb25zLmFmdGVyVXBkYXRlKHZOb2RlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkb20gPSB2Tm9kZS5kb20gPSBuZXh0SW5wdXQuZG9tO1xuICAgICAgICBjb25zdCBjb21wb25lbnRUb0RPTU5vZGVNYXAgPSBjb21wb25lbnQuX2NvbXBvbmVudFRvRE9NTm9kZU1hcDtcbiAgICAgICAgY29tcG9uZW50VG9ET01Ob2RlTWFwICYmIGNvbXBvbmVudFRvRE9NTm9kZU1hcC5zZXQoY29tcG9uZW50LCBuZXh0SW5wdXQuZG9tKTtcbiAgICAgICAgdXBkYXRlUGFyZW50Q29tcG9uZW50Vk5vZGVzKHZOb2RlLCBkb20pO1xuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYoY2FsbGJhY2spKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKCFpc051bGxPclVuZGVmKGNhbGxiYWNrKSkge1xuICAgICAgICBpZiAoY29tcG9uZW50Ll9ibG9ja1JlbmRlcikge1xuICAgICAgICAgICAgY29tcG9uZW50LnN0YXRlID0gY29tcG9uZW50Ll9wZW5kaW5nU3RhdGU7XG4gICAgICAgICAgICBjb21wb25lbnQuX3BlbmRpbmdTdGF0ZSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgY29udGV4dCkge1xuICAgICAgICB0aGlzLnN0YXRlID0ge307XG4gICAgICAgIHRoaXMuX2Jsb2NrUmVuZGVyID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2lnbm9yZVNldFN0YXRlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2Jsb2NrU2V0U3RhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fZGVmZXJTZXRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9wZW5kaW5nU2V0U3RhdGUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fc3luY1NldFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fcGVuZGluZ1N0YXRlID0ge307XG4gICAgICAgIHRoaXMuX2xhc3RJbnB1dCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3ZOb2RlID0gbnVsbDtcbiAgICAgICAgdGhpcy5fdW5tb3VudGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX2xpZmVjeWNsZSA9IG51bGw7XG4gICAgICAgIHRoaXMuX2NoaWxkQ29udGV4dCA9IG51bGw7XG4gICAgICAgIHRoaXMuX3BhdGNoID0gbnVsbDtcbiAgICAgICAgdGhpcy5faXNTVkcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fY29tcG9uZW50VG9ET01Ob2RlTWFwID0gbnVsbDtcbiAgICAgICAgLyoqIEB0eXBlIHtvYmplY3R9ICovXG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgICAgIC8qKiBAdHlwZSB7b2JqZWN0fSAqL1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0IHx8IEVNUFRZX09CSjsgLy8gY29udGV4dCBzaG91bGQgbm90IGJlIG11dGFibGVcbiAgICB9XG4gICAgcmVuZGVyKG5leHRQcm9wcywgbmV4dFN0YXRlLCBuZXh0Q29udGV4dCkgeyB9XG4gICAgZm9yY2VVcGRhdGUoY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHRoaXMuX3VubW91bnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlzQnJvd3NlciAmJiBhcHBseVN0YXRlKHRoaXMsIHRydWUsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgc2V0U3RhdGUobmV3U3RhdGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0aGlzLl91bm1vdW50ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMuX2Jsb2NrU2V0U3RhdGUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5faWdub3JlU2V0U3RhdGUpIHtcbiAgICAgICAgICAgICAgICBxdWV1ZVN0YXRlQ2hhbmdlcyh0aGlzLCBuZXdTdGF0ZSwgY2FsbGJhY2ssIGNhbGxiYWNrID8gZmFsc2UgOiB0aGlzLl9zeW5jU2V0U3RhdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKCdjYW5ub3QgdXBkYXRlIHN0YXRlIHZpYSBzZXRTdGF0ZSgpIGluIGNvbXBvbmVudFdpbGxVcGRhdGUoKS4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93RXJyb3IoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRTdGF0ZVN5bmMobmV3U3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX3VubW91bnRlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGhpcy5fYmxvY2tTZXRTdGF0ZSkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pZ25vcmVTZXRTdGF0ZSkge1xuICAgICAgICAgICAgICAgIHF1ZXVlU3RhdGVDaGFuZ2VzKHRoaXMsIG5ld1N0YXRlLCBudWxsLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3dFcnJvcignY2Fubm90IHVwZGF0ZSBzdGF0ZSB2aWEgc2V0U3RhdGUoKSBpbiBjb21wb25lbnRXaWxsVXBkYXRlKCkuJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvd0Vycm9yKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgX3VwZGF0ZUNvbXBvbmVudChwcmV2U3RhdGUsIG5leHRTdGF0ZSwgcHJldlByb3BzLCBuZXh0UHJvcHMsIGNvbnRleHQsIGZvcmNlLCBmcm9tU2V0U3RhdGUpIHtcbiAgICAgICAgaWYgKHRoaXMuX3VubW91bnRlZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKG5vT3ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgocHJldlByb3BzICE9PSBuZXh0UHJvcHMgfHwgbmV4dFByb3BzID09PSBFTVBUWV9PQkopIHx8IHByZXZTdGF0ZSAhPT0gbmV4dFN0YXRlIHx8IGZvcmNlKSB7XG4gICAgICAgICAgICBpZiAocHJldlByb3BzICE9PSBuZXh0UHJvcHMgfHwgbmV4dFByb3BzID09PSBFTVBUWV9PQkopIHtcbiAgICAgICAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHRoaXMuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcykgJiYgIWZyb21TZXRTdGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja1JlbmRlciA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyhuZXh0UHJvcHMsIGNvbnRleHQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja1JlbmRlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcGVuZGluZ1NldFN0YXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5leHRTdGF0ZSA9IGNvbWJpbmVGcm9tKG5leHRTdGF0ZSwgdGhpcy5fcGVuZGluZ1N0YXRlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcGVuZGluZ1NldFN0YXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3BlbmRpbmdTdGF0ZSA9IHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8qIFVwZGF0ZSBpZiBzY3UgaXMgbm90IGRlZmluZWQsIG9yIGl0IHJldHVybnMgdHJ1dGh5IHZhbHVlIG9yIGZvcmNlICovXG4gICAgICAgICAgICBpZiAoaXNVbmRlZmluZWQodGhpcy5zaG91bGRDb21wb25lbnRVcGRhdGUpIHx8IHRoaXMuc2hvdWxkQ29tcG9uZW50VXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlLCBjb250ZXh0KSB8fCBmb3JjZSkge1xuICAgICAgICAgICAgICAgIGlmICghaXNVbmRlZmluZWQodGhpcy5jb21wb25lbnRXaWxsVXBkYXRlKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9ibG9ja1NldFN0YXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRXaWxsVXBkYXRlKG5leHRQcm9wcywgbmV4dFN0YXRlLCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYmxvY2tTZXRTdGF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzID0gbmV4dFByb3BzO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmJlZm9yZVJlbmRlciAmJiBvcHRpb25zLmJlZm9yZVJlbmRlcih0aGlzKTtcbiAgICAgICAgICAgICAgICBjb25zdCByZW5kZXIgPSB0aGlzLnJlbmRlcihuZXh0UHJvcHMsIG5leHRTdGF0ZSwgY29udGV4dCk7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5hZnRlclJlbmRlciAmJiBvcHRpb25zLmFmdGVyUmVuZGVyKHRoaXMpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BzID0gbmV4dFByb3BzO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSBuZXh0U3RhdGU7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTk9fT1A7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2luZmVybm8tY29tcG9uZW50L2Rpc3QtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IHdhcm5pbmcsIE5PX09QIH0gZnJvbSAnaW5mZXJuby1zaGFyZWQnO1xuaW1wb3J0IHsgY3JlYXRlVk5vZGUsIGNsb25lVk5vZGUgfSBmcm9tICcuL2NvcmUvVk5vZGVzJztcbmltcG9ydCBsaW5rRXZlbnQgZnJvbSAnLi9ET00vZXZlbnRzL2xpbmtFdmVudCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuL2NvcmUvb3B0aW9ucyc7XG5pbXBvcnQgeyByZW5kZXIsIGZpbmRET01Ob2RlLCBjcmVhdGVSZW5kZXJlciB9IGZyb20gJy4vRE9NL3JlbmRlcmluZyc7XG5pbXBvcnQgeyBFTVBUWV9PQkogfSBmcm9tICcuL0RPTS91dGlscyc7XG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IHRlc3RGdW5jID0gZnVuY3Rpb24gdGVzdEZuKCkgeyB9O1xuICAgIGlmICgodGVzdEZ1bmMubmFtZSB8fCB0ZXN0RnVuYy50b1N0cmluZygpKS5pbmRleE9mKCd0ZXN0Rm4nKSA9PT0gLTEpIHtcbiAgICAgICAgd2FybmluZygoJ0l0IGxvb2tzIGxpa2UgeW91XFwncmUgdXNpbmcgYSBtaW5pZmllZCBjb3B5IG9mIHRoZSBkZXZlbG9wbWVudCBidWlsZCAnICtcbiAgICAgICAgICAgICdvZiBJbmZlcm5vLiBXaGVuIGRlcGxveWluZyBJbmZlcm5vIGFwcHMgdG8gcHJvZHVjdGlvbiwgbWFrZSBzdXJlIHRvIHVzZSAnICtcbiAgICAgICAgICAgICd0aGUgcHJvZHVjdGlvbiBidWlsZCB3aGljaCBza2lwcyBkZXZlbG9wbWVudCB3YXJuaW5ncyBhbmQgaXMgZmFzdGVyLiAnICtcbiAgICAgICAgICAgICdTZWUgaHR0cDovL2luZmVybm9qcy5vcmcgZm9yIG1vcmUgZGV0YWlscy4nKSk7XG4gICAgfVxufVxuLy8gVGhpcyB3aWxsIGJlIHJlcGxhY2VkIGJ5IHJvbGx1cFxuZXhwb3J0IGNvbnN0IHZlcnNpb24gPSAnVkVSU0lPTic7XG4vLyB3ZSBkdXBsaWNhdGUgaXQgc28gaXQgcGxheXMgbmljZWx5IHdpdGggZGlmZmVyZW50IG1vZHVsZSBsb2FkaW5nIHN5c3RlbXNcbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBsaW5rRXZlbnQsXG4gICAgLy8gY29yZSBzaGFwZXNcbiAgICBjcmVhdGVWTm9kZSxcbiAgICAvLyBjbG9uaW5nXG4gICAgY2xvbmVWTm9kZSxcbiAgICAvLyB1c2VkIHRvIHNoYXJlZCBjb21tb24gaXRlbXMgYmV0d2VlbiBJbmZlcm5vIGxpYnNcbiAgICBOT19PUCxcbiAgICBFTVBUWV9PQkosXG4gICAgLy8gRE9NXG4gICAgcmVuZGVyLFxuICAgIGZpbmRET01Ob2RlLFxuICAgIGNyZWF0ZVJlbmRlcmVyLFxuICAgIG9wdGlvbnMsXG4gICAgdmVyc2lvblxufTtcbmV4cG9ydCB7IFxuLy8gUHVibGljIG1ldGhvZHNcbmxpbmtFdmVudCwgXG4vLyBjb3JlIHNoYXBlc1xuY3JlYXRlVk5vZGUsIFxuLy8gY2xvbmluZ1xuY2xvbmVWTm9kZSwgXG4vLyB1c2VkIHRvIHNoYXJlZCBjb21tb24gaXRlbXMgYmV0d2VlbiBJbmZlcm5vIGxpYnNcbk5PX09QLCBFTVBUWV9PQkosIFxuLy8gRE9NXG5yZW5kZXIsIGZpbmRET01Ob2RlLCBjcmVhdGVSZW5kZXJlciwgb3B0aW9ucyB9O1xuLy8gSW50ZXJuYWwgc3R1ZmYgdGhhdCBvbmx5IGNvcmUgaW5mZXJuby0qIHBhY2thZ2VzIHVzZVxuZXhwb3J0IHsgaXNVbml0bGVzc051bWJlciBhcyBpbnRlcm5hbF9pc1VuaXRsZXNzTnVtYmVyIH0gZnJvbSAnLi9ET00vY29uc3RhbnRzJztcbi8vIE1haW5seSBmb3IgdGVzdGluZ1xuZXhwb3J0IHsgbm9ybWFsaXplIGFzIGludGVybmFsX25vcm1hbGl6ZSB9IGZyb20gJy4vY29yZS9ub3JtYWxpemF0aW9uJztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmZlcm5vL2Rpc3QtZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGlzQXJyYXksIGlzRnVuY3Rpb24sIGlzSW52YWxpZCwgaXNOdWxsLCBpc051bGxPclVuZGVmLCBpc09iamVjdCwgdGhyb3dFcnJvciB9IGZyb20gJ2luZmVybm8tc2hhcmVkJztcbmltcG9ydCBvcHRpb25zIGZyb20gJy4uL2NvcmUvb3B0aW9ucyc7XG5pbXBvcnQgeyBwYXRjaEV2ZW50IH0gZnJvbSAnLi9wYXRjaGluZyc7XG5pbXBvcnQgeyBwb29sQ29tcG9uZW50LCBwb29sRWxlbWVudCB9IGZyb20gJy4vcmVjeWNsaW5nJztcbmltcG9ydCB7IGNvbXBvbmVudFRvRE9NTm9kZU1hcCB9IGZyb20gJy4vcmVuZGVyaW5nJztcbmltcG9ydCB7IHJlbW92ZUNoaWxkIH0gZnJvbSAnLi91dGlscyc7XG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNhblJlY3ljbGUsIGlzUmVjeWNsaW5nKSB7XG4gICAgY29uc3QgZmxhZ3MgPSB2Tm9kZS5mbGFncztcbiAgICBpZiAoZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgdW5tb3VudENvbXBvbmVudCh2Tm9kZSwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNhblJlY3ljbGUsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiAzOTcwIC8qIEVsZW1lbnQgKi8pIHtcbiAgICAgICAgdW5tb3VudEVsZW1lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjYW5SZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgKDEgLyogVGV4dCAqLyB8IDQwOTYgLyogVm9pZCAqLykpIHtcbiAgICAgICAgdW5tb3VudFZvaWRPclRleHQodk5vZGUsIHBhcmVudERvbSk7XG4gICAgfVxufVxuZnVuY3Rpb24gdW5tb3VudFZvaWRPclRleHQodk5vZGUsIHBhcmVudERvbSkge1xuICAgIGlmIChwYXJlbnREb20pIHtcbiAgICAgICAgcmVtb3ZlQ2hpbGQocGFyZW50RG9tLCB2Tm9kZS5kb20pO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiB1bm1vdW50Q29tcG9uZW50KHZOb2RlLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY2FuUmVjeWNsZSwgaXNSZWN5Y2xpbmcpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IHZOb2RlLmNoaWxkcmVuO1xuICAgIGNvbnN0IGZsYWdzID0gdk5vZGUuZmxhZ3M7XG4gICAgY29uc3QgaXNTdGF0ZWZ1bENvbXBvbmVudCA9IGZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLztcbiAgICBjb25zdCByZWYgPSB2Tm9kZS5yZWY7XG4gICAgY29uc3QgZG9tID0gdk5vZGUuZG9tO1xuICAgIGlmICghaXNSZWN5Y2xpbmcpIHtcbiAgICAgICAgaWYgKGlzU3RhdGVmdWxDb21wb25lbnQpIHtcbiAgICAgICAgICAgIGlmICghaW5zdGFuY2UuX3VubW91bnRlZCkge1xuICAgICAgICAgICAgICAgIGluc3RhbmNlLl9pZ25vcmVTZXRTdGF0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5iZWZvcmVVbm1vdW50ICYmIG9wdGlvbnMuYmVmb3JlVW5tb3VudCh2Tm9kZSk7XG4gICAgICAgICAgICAgICAgaW5zdGFuY2UuY29tcG9uZW50V2lsbFVubW91bnQgJiYgaW5zdGFuY2UuY29tcG9uZW50V2lsbFVubW91bnQoKTtcbiAgICAgICAgICAgICAgICBpZiAocmVmICYmICFpc1JlY3ljbGluZykge1xuICAgICAgICAgICAgICAgICAgICByZWYobnVsbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGluc3RhbmNlLl91bm1vdW50ZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuZmluZERPTU5vZGVFbmFibGVkICYmIGNvbXBvbmVudFRvRE9NTm9kZU1hcC5kZWxldGUoaW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIHVubW91bnQoaW5zdGFuY2UuX2xhc3RJbnB1dCwgbnVsbCwgaW5zdGFuY2UuX2xpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICghaXNOdWxsT3JVbmRlZihyZWYpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFpc051bGxPclVuZGVmKHJlZi5vbkNvbXBvbmVudFdpbGxVbm1vdW50KSkge1xuICAgICAgICAgICAgICAgICAgICByZWYub25Db21wb25lbnRXaWxsVW5tb3VudChkb20pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVubW91bnQoaW5zdGFuY2UsIG51bGwsIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocGFyZW50RG9tKSB7XG4gICAgICAgIGxldCBsYXN0SW5wdXQgPSBpbnN0YW5jZS5fbGFzdElucHV0O1xuICAgICAgICBpZiAoaXNOdWxsT3JVbmRlZihsYXN0SW5wdXQpKSB7XG4gICAgICAgICAgICBsYXN0SW5wdXQgPSBpbnN0YW5jZTtcbiAgICAgICAgfVxuICAgICAgICByZW1vdmVDaGlsZChwYXJlbnREb20sIGRvbSk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnJlY3ljbGluZ0VuYWJsZWQgJiYgIWlzU3RhdGVmdWxDb21wb25lbnQgJiYgKHBhcmVudERvbSB8fCBjYW5SZWN5Y2xlKSkge1xuICAgICAgICBwb29sQ29tcG9uZW50KHZOb2RlKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gdW5tb3VudEVsZW1lbnQodk5vZGUsIHBhcmVudERvbSwgbGlmZWN5Y2xlLCBjYW5SZWN5Y2xlLCBpc1JlY3ljbGluZykge1xuICAgIGNvbnN0IGRvbSA9IHZOb2RlLmRvbTtcbiAgICBjb25zdCByZWYgPSB2Tm9kZS5yZWY7XG4gICAgY29uc3QgZXZlbnRzID0gdk5vZGUuZXZlbnRzO1xuICAgIGlmIChyZWYgJiYgIWlzUmVjeWNsaW5nKSB7XG4gICAgICAgIHVubW91bnRSZWYocmVmKTtcbiAgICB9XG4gICAgY29uc3QgY2hpbGRyZW4gPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICBpZiAoIWlzTnVsbE9yVW5kZWYoY2hpbGRyZW4pKSB7XG4gICAgICAgIHVubW91bnRDaGlsZHJlbihjaGlsZHJlbiwgbGlmZWN5Y2xlLCBpc1JlY3ljbGluZyk7XG4gICAgfVxuICAgIGlmICghaXNOdWxsKGV2ZW50cykpIHtcbiAgICAgICAgZm9yIChsZXQgbmFtZSBpbiBldmVudHMpIHtcbiAgICAgICAgICAgIC8vIGRvIG5vdCBhZGQgYSBoYXNPd25Qcm9wZXJ0eSBjaGVjayBoZXJlLCBpdCBhZmZlY3RzIHBlcmZvcm1hbmNlXG4gICAgICAgICAgICBwYXRjaEV2ZW50KG5hbWUsIGV2ZW50c1tuYW1lXSwgbnVsbCwgZG9tKTtcbiAgICAgICAgICAgIGV2ZW50c1tuYW1lXSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmVudERvbSkge1xuICAgICAgICByZW1vdmVDaGlsZChwYXJlbnREb20sIGRvbSk7XG4gICAgfVxuICAgIGlmIChvcHRpb25zLnJlY3ljbGluZ0VuYWJsZWQgJiYgKHBhcmVudERvbSB8fCBjYW5SZWN5Y2xlKSkge1xuICAgICAgICBwb29sRWxlbWVudCh2Tm9kZSk7XG4gICAgfVxufVxuZnVuY3Rpb24gdW5tb3VudENoaWxkcmVuKGNoaWxkcmVuLCBsaWZlY3ljbGUsIGlzUmVjeWNsaW5nKSB7XG4gICAgaWYgKGlzQXJyYXkoY2hpbGRyZW4pKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmICghaXNJbnZhbGlkKGNoaWxkKSAmJiBpc09iamVjdChjaGlsZCkpIHtcbiAgICAgICAgICAgICAgICB1bm1vdW50KGNoaWxkLCBudWxsLCBsaWZlY3ljbGUsIGZhbHNlLCBpc1JlY3ljbGluZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYmplY3QoY2hpbGRyZW4pKSB7XG4gICAgICAgIHVubW91bnQoY2hpbGRyZW4sIG51bGwsIGxpZmVjeWNsZSwgZmFsc2UsIGlzUmVjeWNsaW5nKTtcbiAgICB9XG59XG5mdW5jdGlvbiB1bm1vdW50UmVmKHJlZikge1xuICAgIGlmIChpc0Z1bmN0aW9uKHJlZikpIHtcbiAgICAgICAgcmVmKG51bGwpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKGlzSW52YWxpZChyZWYpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93RXJyb3IoJ3N0cmluZyBcInJlZnNcIiBhcmUgbm90IHN1cHBvcnRlZCBpbiBJbmZlcm5vIDEuMC4gVXNlIGNhbGxiYWNrIFwicmVmc1wiIGluc3RlYWQuJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3dFcnJvcigpO1xuICAgIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL3VubW91bnRpbmcuanNcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGlzTnVsbCwgaXNVbmRlZmluZWQgfSBmcm9tICdpbmZlcm5vLXNoYXJlZCc7XG5pbXBvcnQgeyBwYXRjaENvbXBvbmVudCwgcGF0Y2hFbGVtZW50IH0gZnJvbSAnLi9wYXRjaGluZyc7XG5jb25zdCBjb21wb25lbnRQb29scyA9IG5ldyBNYXAoKTtcbmNvbnN0IGVsZW1lbnRQb29scyA9IG5ldyBNYXAoKTtcbmV4cG9ydCBmdW5jdGlvbiByZWN5Y2xlRWxlbWVudCh2Tm9kZSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIGNvbnN0IHRhZyA9IHZOb2RlLnR5cGU7XG4gICAgY29uc3QgcG9vbHMgPSBlbGVtZW50UG9vbHMuZ2V0KHRhZyk7XG4gICAgaWYgKCFpc1VuZGVmaW5lZChwb29scykpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gdk5vZGUua2V5O1xuICAgICAgICBjb25zdCBwb29sID0ga2V5ID09PSBudWxsID8gcG9vbHMubm9uS2V5ZWQgOiBwb29scy5rZXllZC5nZXQoa2V5KTtcbiAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChwb29sKSkge1xuICAgICAgICAgICAgY29uc3QgcmVjeWNsZWRWTm9kZSA9IHBvb2wucG9wKCk7XG4gICAgICAgICAgICBpZiAoIWlzVW5kZWZpbmVkKHJlY3ljbGVkVk5vZGUpKSB7XG4gICAgICAgICAgICAgICAgcGF0Y2hFbGVtZW50KHJlY3ljbGVkVk5vZGUsIHZOb2RlLCBudWxsLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHLCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdk5vZGUuZG9tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHBvb2xFbGVtZW50KHZOb2RlKSB7XG4gICAgY29uc3QgdGFnID0gdk5vZGUudHlwZTtcbiAgICBjb25zdCBrZXkgPSB2Tm9kZS5rZXk7XG4gICAgbGV0IHBvb2xzID0gZWxlbWVudFBvb2xzLmdldCh0YWcpO1xuICAgIGlmIChpc1VuZGVmaW5lZChwb29scykpIHtcbiAgICAgICAgcG9vbHMgPSB7XG4gICAgICAgICAgICBub25LZXllZDogW10sXG4gICAgICAgICAgICBrZXllZDogbmV3IE1hcCgpXG4gICAgICAgIH07XG4gICAgICAgIGVsZW1lbnRQb29scy5zZXQodGFnLCBwb29scyk7XG4gICAgfVxuICAgIGlmIChpc051bGwoa2V5KSkge1xuICAgICAgICBwb29scy5ub25LZXllZC5wdXNoKHZOb2RlKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGxldCBwb29sID0gcG9vbHMua2V5ZWQuZ2V0KGtleSk7XG4gICAgICAgIGlmIChpc1VuZGVmaW5lZChwb29sKSkge1xuICAgICAgICAgICAgcG9vbCA9IFtdO1xuICAgICAgICAgICAgcG9vbHMua2V5ZWQuc2V0KGtleSwgcG9vbCk7XG4gICAgICAgIH1cbiAgICAgICAgcG9vbC5wdXNoKHZOb2RlKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gcmVjeWNsZUNvbXBvbmVudCh2Tm9kZSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIGNvbnN0IHR5cGUgPSB2Tm9kZS50eXBlO1xuICAgIGNvbnN0IHBvb2xzID0gY29tcG9uZW50UG9vbHMuZ2V0KHR5cGUpO1xuICAgIGlmICghaXNVbmRlZmluZWQocG9vbHMpKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IHZOb2RlLmtleTtcbiAgICAgICAgY29uc3QgcG9vbCA9IGtleSA9PT0gbnVsbCA/IHBvb2xzLm5vbktleWVkIDogcG9vbHMua2V5ZWQuZ2V0KGtleSk7XG4gICAgICAgIGlmICghaXNVbmRlZmluZWQocG9vbCkpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3ljbGVkVk5vZGUgPSBwb29sLnBvcCgpO1xuICAgICAgICAgICAgaWYgKCFpc1VuZGVmaW5lZChyZWN5Y2xlZFZOb2RlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZsYWdzID0gdk5vZGUuZmxhZ3M7XG4gICAgICAgICAgICAgICAgY29uc3QgZmFpbGVkID0gcGF0Y2hDb21wb25lbnQocmVjeWNsZWRWTm9kZSwgdk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLywgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCFmYWlsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZOb2RlLmRvbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59XG5leHBvcnQgZnVuY3Rpb24gcG9vbENvbXBvbmVudCh2Tm9kZSkge1xuICAgIGNvbnN0IGhvb2tzID0gdk5vZGUucmVmO1xuICAgIGNvbnN0IG5vblJlY3ljbGVIb29rcyA9IGhvb2tzICYmIChob29rcy5vbkNvbXBvbmVudFdpbGxNb3VudCB8fFxuICAgICAgICBob29rcy5vbkNvbXBvbmVudFdpbGxVbm1vdW50IHx8XG4gICAgICAgIGhvb2tzLm9uQ29tcG9uZW50RGlkTW91bnQgfHxcbiAgICAgICAgaG9va3Mub25Db21wb25lbnRXaWxsVXBkYXRlIHx8XG4gICAgICAgIGhvb2tzLm9uQ29tcG9uZW50RGlkVXBkYXRlKTtcbiAgICBpZiAobm9uUmVjeWNsZUhvb2tzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgdHlwZSA9IHZOb2RlLnR5cGU7XG4gICAgY29uc3Qga2V5ID0gdk5vZGUua2V5O1xuICAgIGxldCBwb29scyA9IGNvbXBvbmVudFBvb2xzLmdldCh0eXBlKTtcbiAgICBpZiAoaXNVbmRlZmluZWQocG9vbHMpKSB7XG4gICAgICAgIHBvb2xzID0ge1xuICAgICAgICAgICAgbm9uS2V5ZWQ6IFtdLFxuICAgICAgICAgICAga2V5ZWQ6IG5ldyBNYXAoKVxuICAgICAgICB9O1xuICAgICAgICBjb21wb25lbnRQb29scy5zZXQodHlwZSwgcG9vbHMpO1xuICAgIH1cbiAgICBpZiAoaXNOdWxsKGtleSkpIHtcbiAgICAgICAgcG9vbHMubm9uS2V5ZWQucHVzaCh2Tm9kZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBsZXQgcG9vbCA9IHBvb2xzLmtleWVkLmdldChrZXkpO1xuICAgICAgICBpZiAoaXNVbmRlZmluZWQocG9vbCkpIHtcbiAgICAgICAgICAgIHBvb2wgPSBbXTtcbiAgICAgICAgICAgIHBvb2xzLmtleWVkLnNldChrZXksIHBvb2wpO1xuICAgICAgICB9XG4gICAgICAgIHBvb2wucHVzaCh2Tm9kZSk7XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2luZmVybm8vZGlzdC1lcy9ET00vcmVjeWNsaW5nLmpzXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBpc0FycmF5LCBpc0ludmFsaWQsIGlzTnVsbCwgaXNOdWxsT3JVbmRlZiwgaXNOdW1iZXIsIGlzU3RyaW5nLCBpc1N0cmluZ09yTnVtYmVyLCB3YXJuaW5nLCBpc1VuZGVmaW5lZCB9IGZyb20gJ2luZmVybm8tc2hhcmVkJztcbmltcG9ydCB7IGRpcmVjdENsb25lLCBjcmVhdGVUZXh0Vk5vZGUsIGlzVk5vZGUgfSBmcm9tICcuL1ZOb2Rlcyc7XG5mdW5jdGlvbiBhcHBseUtleShrZXksIHZOb2RlKSB7XG4gICAgdk5vZGUua2V5ID0ga2V5O1xuICAgIHJldHVybiB2Tm9kZTtcbn1cbmZ1bmN0aW9uIGFwcGx5S2V5SWZNaXNzaW5nKGtleSwgdk5vZGUpIHtcbiAgICBpZiAoaXNOdW1iZXIoa2V5KSkge1xuICAgICAgICBrZXkgPSBgLiR7a2V5fWA7XG4gICAgfVxuICAgIGlmIChpc051bGwodk5vZGUua2V5KSB8fCB2Tm9kZS5rZXlbMF0gPT09ICcuJykge1xuICAgICAgICByZXR1cm4gYXBwbHlLZXkoa2V5LCB2Tm9kZSk7XG4gICAgfVxuICAgIHJldHVybiB2Tm9kZTtcbn1cbmZ1bmN0aW9uIGFwcGx5S2V5UHJlZml4KGtleSwgdk5vZGUpIHtcbiAgICB2Tm9kZS5rZXkgPSBrZXkgKyB2Tm9kZS5rZXk7XG4gICAgcmV0dXJuIHZOb2RlO1xufVxuZnVuY3Rpb24gX25vcm1hbGl6ZVZOb2Rlcyhub2RlcywgcmVzdWx0LCBpbmRleCwgY3VycmVudEtleSkge1xuICAgIGZvciAobGV0IGxlbiA9IG5vZGVzLmxlbmd0aDsgaW5kZXggPCBsZW47IGluZGV4KyspIHtcbiAgICAgICAgbGV0IG4gPSBub2Rlc1tpbmRleF07XG4gICAgICAgIGNvbnN0IGtleSA9IGAke2N1cnJlbnRLZXl9LiR7aW5kZXh9YDtcbiAgICAgICAgaWYgKCFpc0ludmFsaWQobikpIHtcbiAgICAgICAgICAgIGlmIChpc0FycmF5KG4pKSB7XG4gICAgICAgICAgICAgICAgX25vcm1hbGl6ZVZOb2RlcyhuLCByZXN1bHQsIDAsIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNTdHJpbmdPck51bWJlcihuKSkge1xuICAgICAgICAgICAgICAgICAgICBuID0gY3JlYXRlVGV4dFZOb2RlKG4sIG51bGwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChpc1ZOb2RlKG4pICYmIG4uZG9tIHx8IChuLmtleSAmJiBuLmtleVswXSA9PT0gJy4nKSkge1xuICAgICAgICAgICAgICAgICAgICBuID0gZGlyZWN0Q2xvbmUobik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc051bGwobi5rZXkpIHx8IG4ua2V5WzBdID09PSAnLicpIHtcbiAgICAgICAgICAgICAgICAgICAgbiA9IGFwcGx5S2V5KGtleSwgbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuID0gYXBwbHlLZXlQcmVmaXgoY3VycmVudEtleSwgbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZVZOb2Rlcyhub2Rlcykge1xuICAgIGxldCBuZXdOb2RlcztcbiAgICAvLyB3ZSBhc3NpZ24gJCB3aGljaCBiYXNpY2FsbHkgbWVhbnMgd2UndmUgZmxhZ2dlZCB0aGlzIGFycmF5IGZvciBmdXR1cmUgbm90ZVxuICAgIC8vIGlmIGl0IGNvbWVzIGJhY2sgYWdhaW4sIHdlIG5lZWQgdG8gY2xvbmUgaXQsIGFzIHBlb3BsZSBhcmUgdXNpbmcgaXRcbiAgICAvLyBpbiBhbiBpbW11dGFibGUgd2F5XG4gICAgLy8gdHNsaW50OmRpc2FibGVcbiAgICBpZiAobm9kZXNbJyQnXSkge1xuICAgICAgICBub2RlcyA9IG5vZGVzLnNsaWNlKCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBub2Rlc1snJCddID0gdHJ1ZTtcbiAgICB9XG4gICAgLy8gdHNsaW50OmVuYWJsZVxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSBub2Rlcy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBjb25zdCBuID0gbm9kZXNbaV07XG4gICAgICAgIGlmIChpc0ludmFsaWQobikgfHwgaXNBcnJheShuKSkge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gKG5ld05vZGVzIHx8IG5vZGVzKS5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgIF9ub3JtYWxpemVWTm9kZXMobm9kZXMsIHJlc3VsdCwgaSwgYGApO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1N0cmluZ09yTnVtYmVyKG4pKSB7XG4gICAgICAgICAgICBpZiAoIW5ld05vZGVzKSB7XG4gICAgICAgICAgICAgICAgbmV3Tm9kZXMgPSBub2Rlcy5zbGljZSgwLCBpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5ld05vZGVzLnB1c2goYXBwbHlLZXlJZk1pc3NpbmcoaSwgY3JlYXRlVGV4dFZOb2RlKG4sIG51bGwpKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoKGlzVk5vZGUobikgJiYgbi5kb20pIHx8IChpc051bGwobi5rZXkpICYmICEobi5mbGFncyAmIDY0IC8qIEhhc05vbktleWVkQ2hpbGRyZW4gKi8pKSkge1xuICAgICAgICAgICAgaWYgKCFuZXdOb2Rlcykge1xuICAgICAgICAgICAgICAgIG5ld05vZGVzID0gbm9kZXMuc2xpY2UoMCwgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXdOb2Rlcy5wdXNoKGFwcGx5S2V5SWZNaXNzaW5nKGksIGRpcmVjdENsb25lKG4pKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobmV3Tm9kZXMpIHtcbiAgICAgICAgICAgIG5ld05vZGVzLnB1c2goYXBwbHlLZXlJZk1pc3NpbmcoaSwgZGlyZWN0Q2xvbmUobikpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmV3Tm9kZXMgfHwgbm9kZXM7XG59XG5mdW5jdGlvbiBub3JtYWxpemVDaGlsZHJlbihjaGlsZHJlbikge1xuICAgIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICByZXR1cm4gbm9ybWFsaXplVk5vZGVzKGNoaWxkcmVuKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNWTm9kZShjaGlsZHJlbikgJiYgY2hpbGRyZW4uZG9tKSB7XG4gICAgICAgIHJldHVybiBkaXJlY3RDbG9uZShjaGlsZHJlbik7XG4gICAgfVxuICAgIHJldHVybiBjaGlsZHJlbjtcbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZVByb3BzKHZOb2RlLCBwcm9wcywgY2hpbGRyZW4pIHtcbiAgICBpZiAoISh2Tm9kZS5mbGFncyAmIDI4IC8qIENvbXBvbmVudCAqLykgJiYgaXNOdWxsT3JVbmRlZihjaGlsZHJlbikgJiYgIWlzTnVsbE9yVW5kZWYocHJvcHMuY2hpbGRyZW4pKSB7XG4gICAgICAgIHZOb2RlLmNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW47XG4gICAgfVxuICAgIGlmIChwcm9wcy5yZWYpIHtcbiAgICAgICAgdk5vZGUucmVmID0gcHJvcHMucmVmO1xuICAgICAgICBkZWxldGUgcHJvcHMucmVmO1xuICAgIH1cbiAgICBpZiAocHJvcHMuZXZlbnRzKSB7XG4gICAgICAgIHZOb2RlLmV2ZW50cyA9IHByb3BzLmV2ZW50cztcbiAgICB9XG4gICAgaWYgKCFpc051bGxPclVuZGVmKHByb3BzLmtleSkpIHtcbiAgICAgICAgdk5vZGUua2V5ID0gcHJvcHMua2V5O1xuICAgICAgICBkZWxldGUgcHJvcHMua2V5O1xuICAgIH1cbn1cbmZ1bmN0aW9uIG5vcm1hbGl6ZUVsZW1lbnQodHlwZSwgdk5vZGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ3N2ZycpIHtcbiAgICAgICAgdk5vZGUuZmxhZ3MgPSAxMjggLyogU3ZnRWxlbWVudCAqLztcbiAgICB9XG4gICAgZWxzZSBpZiAodHlwZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICB2Tm9kZS5mbGFncyA9IDUxMiAvKiBJbnB1dEVsZW1lbnQgKi87XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdzZWxlY3QnKSB7XG4gICAgICAgIHZOb2RlLmZsYWdzID0gMjA0OCAvKiBTZWxlY3RFbGVtZW50ICovO1xuICAgIH1cbiAgICBlbHNlIGlmICh0eXBlID09PSAndGV4dGFyZWEnKSB7XG4gICAgICAgIHZOb2RlLmZsYWdzID0gMTAyNCAvKiBUZXh0YXJlYUVsZW1lbnQgKi87XG4gICAgfVxuICAgIGVsc2UgaWYgKHR5cGUgPT09ICdtZWRpYScpIHtcbiAgICAgICAgdk5vZGUuZmxhZ3MgPSAyNTYgLyogTWVkaWFFbGVtZW50ICovO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdk5vZGUuZmxhZ3MgPSAyIC8qIEh0bWxFbGVtZW50ICovO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemUodk5vZGUpIHtcbiAgICBsZXQgcHJvcHMgPSB2Tm9kZS5wcm9wcztcbiAgICBsZXQgY2hpbGRyZW4gPSB2Tm9kZS5jaGlsZHJlbjtcbiAgICAvLyBjb252ZXJ0IGEgd3JvbmdseSBjcmVhdGVkIHR5cGUgYmFjayB0byBlbGVtZW50XG4gICAgLy8gUHJpbWl0aXZlIG5vZGUgZG9lc24ndCBoYXZlIGRlZmF1bHRQcm9wcywgb25seSBDb21wb25lbnRcbiAgICBpZiAodk5vZGUuZmxhZ3MgJiAyOCAvKiBDb21wb25lbnQgKi8pIHtcbiAgICAgICAgLy8gc2V0IGRlZmF1bHQgcHJvcHNcbiAgICAgICAgY29uc3QgdHlwZSA9IHZOb2RlLnR5cGU7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRQcm9wcyA9IHR5cGUuZGVmYXVsdFByb3BzO1xuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYoZGVmYXVsdFByb3BzKSkge1xuICAgICAgICAgICAgaWYgKCFwcm9wcykge1xuICAgICAgICAgICAgICAgIHByb3BzID0gdk5vZGUucHJvcHMgPSBkZWZhdWx0UHJvcHM7IC8vIENyZWF0ZSBuZXcgb2JqZWN0IGlmIG9ubHkgZGVmYXVsdFByb3BzIGdpdmVuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwcm9wIGluIGRlZmF1bHRQcm9wcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNVbmRlZmluZWQocHJvcHNbcHJvcF0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wc1twcm9wXSA9IGRlZmF1bHRQcm9wc1twcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNTdHJpbmcodHlwZSkpIHtcbiAgICAgICAgICAgIG5vcm1hbGl6ZUVsZW1lbnQodHlwZSwgdk5vZGUpO1xuICAgICAgICAgICAgaWYgKHByb3BzICYmIHByb3BzLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbjtcbiAgICAgICAgICAgICAgICBjaGlsZHJlbiA9IHByb3BzLmNoaWxkcmVuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwcm9wcykge1xuICAgICAgICBub3JtYWxpemVQcm9wcyh2Tm9kZSwgcHJvcHMsIGNoaWxkcmVuKTtcbiAgICB9XG4gICAgaWYgKCFpc0ludmFsaWQoY2hpbGRyZW4pKSB7XG4gICAgICAgIHZOb2RlLmNoaWxkcmVuID0gbm9ybWFsaXplQ2hpbGRyZW4oY2hpbGRyZW4pO1xuICAgIH1cbiAgICBpZiAocHJvcHMgJiYgIWlzSW52YWxpZChwcm9wcy5jaGlsZHJlbikpIHtcbiAgICAgICAgcHJvcHMuY2hpbGRyZW4gPSBub3JtYWxpemVDaGlsZHJlbihwcm9wcy5jaGlsZHJlbik7XG4gICAgfVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIC8vIFRoaXMgY29kZSB3aWxsIGJlIHN0cmlwcGVkIG91dCBmcm9tIHByb2R1Y3Rpb24gQ09ERVxuICAgICAgICAvLyBJdCB3aWxsIGhlbHAgdXNlcnMgdG8gdHJhY2sgZXJyb3JzIGluIHRoZWlyIGFwcGxpY2F0aW9ucy5cbiAgICAgICAgY29uc3QgdmVyaWZ5S2V5cyA9IGZ1bmN0aW9uICh2Tm9kZXMpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleVZhbHVlcyA9IHZOb2Rlcy5tYXAoZnVuY3Rpb24gKHZub2RlKSB7IHJldHVybiB2bm9kZS5rZXk7IH0pO1xuICAgICAgICAgICAga2V5VmFsdWVzLnNvbWUoZnVuY3Rpb24gKGl0ZW0sIGlkeCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGhhc0R1cGxpY2F0ZSA9IGtleVZhbHVlcy5pbmRleE9mKGl0ZW0pICE9PSBpZHg7XG4gICAgICAgICAgICAgICAgaWYgKGhhc0R1cGxpY2F0ZSkge1xuICAgICAgICAgICAgICAgICAgICB3YXJuaW5nKCdJbmZlcm5vIG5vcm1hbGlzYXRpb24oLi4uKTogRW5jb3VudGVyZWQgdHdvIGNoaWxkcmVuIHdpdGggc2FtZSBrZXksIGFsbCBrZXlzIG11c3QgYmUgdW5pcXVlIHdpdGhpbiBpdHMgc2libGluZ3MuIER1cGxpY2F0ZWQga2V5IGlzOicgKyBpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGhhc0R1cGxpY2F0ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodk5vZGUuY2hpbGRyZW4gJiYgQXJyYXkuaXNBcnJheSh2Tm9kZS5jaGlsZHJlbikpIHtcbiAgICAgICAgICAgIHZlcmlmeUtleXModk5vZGUuY2hpbGRyZW4pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2luZmVybm8vZGlzdC1lcy9jb3JlL25vcm1hbGl6YXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGNvbXBvc2UgPSAoLi4uZnVuY3MpID0+IHtcclxuICAgIGlmIChmdW5jcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm4gYXJnID0+IGFyZztcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZnVuY3MubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmNzWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmdW5jcy5yZWR1Y2UoKGEsIGIpID0+ICguLi5hcmdzKSA9PiBhKGIoLi4uYXJncykpKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvc2U7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb21wb3NlLmpzIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnaW5mZXJuby1jcmVhdGUtZWxlbWVudCc7XHJcbmltcG9ydCB3aXRoUHJvcHNPbkNoYW5nZSBmcm9tICcuL3dpdGhQcm9wc09uQ2hhbmdlLmpzJztcclxuaW1wb3J0IHsgZ2V0RGF5c09mTW9udGgsIGdldFdlZWtEYXkgfSBmcm9tICcuL3V0aWxzLmpzJztcclxuXHJcbmNvbnN0IHdpdGhDYWxlbmRhciA9ICgpID0+IHdpdGhQcm9wc09uQ2hhbmdlKFsneWVhcicsICdtb250aCddLCBwcm9wcyA9PiB7XHJcbiAgICBjb25zdCBwcmV2WWVhciA9IHByb3BzLm1vbnRoID09PSAwID8gcHJvcHMueWVhciAtIDEgOiBwcm9wcy55ZWFyO1xyXG4gICAgY29uc3QgbmV4dFllYXIgPSBwcm9wcy5tb250aCA9PT0gMTEgPyBwcm9wcy55ZWFyICsgMSA6IHByb3BzLnllYXI7XHJcbiAgICBjb25zdCBwcmV2TW9udGggPSBwcm9wcy5tb250aCA9PT0gMCA/IDExIDogcHJvcHMubW9udGggLSAxO1xyXG4gICAgY29uc3QgbmV4dE1vbnRoID0gcHJvcHMubW9udGggPT09IDExID8gMCA6IHByb3BzLm1vbnRoICsgMTtcclxuICAgIGNvbnN0IHByZXZEYXlzQ291bnQgPSBnZXREYXlzT2ZNb250aChwcmV2WWVhciwgcHJldk1vbnRoKTtcclxuICAgIGNvbnN0IGN1cnJEYXlzQ291bnQgPSBnZXREYXlzT2ZNb250aChwcm9wcy55ZWFyLCBwcm9wcy5tb250aCk7XHJcbiAgICBjb25zdCB3ZWVrRGF5ID0gZ2V0V2Vla0RheShwcm9wcy55ZWFyLCBwcm9wcy5tb250aCwgMSk7XHJcbiAgICBjb25zdCBuZXh0RGF5c0NvdW50ID0gNDIgLSBjdXJyRGF5c0NvdW50IC0gd2Vla0RheTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgd2VlazogWzAsIDEsIDIsIDMsIDQsIDUsIDZdLFxyXG4gICAgICAgIGRheXM6IFtcclxuICAgICAgICAgICAgLi4uQXJyYXkod2Vla0RheSkuZmlsbCgwKS5tYXAoKGQsIGkpID0+ICh7XHJcbiAgICAgICAgICAgICAgICBwcmV2TW9udGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB5ZWFyOiBwcmV2WWVhcixcclxuICAgICAgICAgICAgICAgIG1vbnRoOiBwcmV2TW9udGgsXHJcbiAgICAgICAgICAgICAgICBkYXk6IGkgKyBwcmV2RGF5c0NvdW50IC0gd2Vla0RheSArIDFcclxuICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAuLi5BcnJheShjdXJyRGF5c0NvdW50KS5maWxsKDApLm1hcCgoZCwgaSkgPT4gKHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRNb250aDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHllYXI6IHByb3BzLnllYXIsXHJcbiAgICAgICAgICAgICAgICBtb250aDogcHJvcHMubW9udGgsXHJcbiAgICAgICAgICAgICAgICBkYXk6IGkgKyAxXHJcbiAgICAgICAgICAgIH0pKSxcclxuICAgICAgICAgICAgLi4uQXJyYXkobmV4dERheXNDb3VudCkuZmlsbCgwKS5tYXAoKGQsIGkpID0+ICh7XHJcbiAgICAgICAgICAgICAgICBuZXh0TW9udGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB5ZWFyOiBuZXh0WWVhcixcclxuICAgICAgICAgICAgICAgIG1vbnRoOiBuZXh0TW9udGgsXHJcbiAgICAgICAgICAgICAgICBkYXk6IGkgKyAxXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIF1cclxuICAgIH07XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aENhbGVuZGFyO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvd2l0aENhbGVuZGFyLmpzIiwiaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnaW5mZXJuby1jcmVhdGUtZWxlbWVudCc7XHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnaW5mZXJuby1jb21wb25lbnQnO1xyXG5cclxuY29uc3Qgd2l0aEhhbmRsZXJzID0gaGFuZGxlcnMgPT4gQmFzZUNvbXBvbmVudCA9PiBjbGFzcyBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLmhhbmRsZXJzID0gT2JqZWN0LmtleXMoaGFuZGxlcnMpLnJlZHVjZSgoYWNjLCBrZXkpID0+IHtcclxuICAgICAgICAgICAgYWNjW2tleV0gPSAoLi4uYXJncykgPT4gaGFuZGxlcnNba2V5XSh0aGlzLnByb3BzLCAuLi5hcmdzKTtcclxuICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICB9LCB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHByb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuIDxCYXNlQ29tcG9uZW50IHsuLi5wcm9wc30gey4uLnRoaXMuaGFuZGxlcnN9IC8+XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoSGFuZGxlcnM7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy93aXRoSGFuZGxlcnMuanMiLCJpbXBvcnQgeyByZW5kZXIgfSBmcm9tICdpbmZlcm5vJztcclxuaW1wb3J0IGNyZWF0ZUVsZW1lbnQgZnJvbSAnaW5mZXJuby1jcmVhdGUtZWxlbWVudCc7XHJcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnaW5mZXJuby1jb21wb25lbnQnO1xyXG5pbXBvcnQgY29tcG9zZSBmcm9tICcuL2NvbXBvc2UuanMnO1xyXG5pbXBvcnQgd2l0aENhbGVuZGFyIGZyb20gJy4vd2l0aENhbGVuZGFyLmpzJztcclxuaW1wb3J0IHdpdGhIYW5kbGVycyBmcm9tICcuL3dpdGhIYW5kbGVycy5qcyc7XHJcblxyXG5jb25zdCBEYXkgPSB3aXRoSGFuZGxlcnMoe1xyXG4gICAgc2VsZWN0RGF5OiBwcm9wcyA9PiBwcm9wcy5kaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogJ1NFTEVDVF9EQVknLFxyXG4gICAgICAgIHllYXI6IHByb3BzLnllYXIsXHJcbiAgICAgICAgbW9udGg6IHByb3BzLm1vbnRoLFxyXG4gICAgICAgIGRheTogcHJvcHMuZGF5XHJcbiAgICB9KVxyXG59KShwcm9wcyA9PlxyXG4gICAgPGRpdiBzdHlsZT17eyB3aWR0aDogMzIsIGhlaWdodDogMjAsIGJvcmRlcjogJzFweCBzb2xpZCcsIGNvbG9yOiBwcm9wcy5jdXJyZW50TW9udGggPyAnIzAwMCcgOiAnIzk5OScgfX1cclxuICAgICAgICBvbkNsaWNrPXtwcm9wcy5zZWxlY3REYXl9PlxyXG4gICAgICAgIHtwcm9wcy5kYXl9XHJcbiAgICA8L2Rpdj5cclxuKTtcclxuXHJcbmNvbnN0IHdlZWtOYW1lcyA9IHtcclxuICAgIDA6ICdTdW4nLFxyXG4gICAgMTogJ01vbicsXHJcbiAgICAyOiAnVHVlJyxcclxuICAgIDM6ICdXZWQnLFxyXG4gICAgNDogJ1RodScsXHJcbiAgICA1OiAnRnJpJyxcclxuICAgIDY6ICdTYXQnXHJcbn07XHJcblxyXG5jb25zdCBDYWxlbmRhciA9IGNvbXBvc2UoXHJcbiAgICB3aXRoSGFuZGxlcnMoe1xyXG4gICAgICAgIHByZXZNb250aDogcHJvcHMgPT4gcHJvcHMuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiAnUFJFVl9NT05USCdcclxuICAgICAgICB9KSxcclxuICAgICAgICBuZXh0TW9udGg6IHByb3BzID0+IHByb3BzLmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogJ05FWFRfTU9OVEgnXHJcbiAgICAgICAgfSlcclxuICAgIH0pLFxyXG4gICAgd2l0aENhbGVuZGFyKCkocHJvcHMgPT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JyB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgb25DbGljaz17cHJvcHMucHJldk1vbnRofT5QcmV2PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3Byb3BzLm5leHRNb250aH0+TmV4dDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy55ZWFyfSB7cHJvcHMubW9udGggKyAxfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIG1hcmdpbkJvdHRvbTogMiB9fT5cclxuICAgICAgICAgICAgICAgIHtwcm9wcy53ZWVrLm1hcChkYXkgPT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiAzMiwgaGVpZ2h0OiAyMCwgYm9yZGVyOiAnMXB4IHNvbGlkJywgY29sb3I6ICcjOTk5JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3dlZWtOYW1lc1tkYXldfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RmxvdzogJ3dyYXAnLCB3aWR0aDogMjM4IH19PlxyXG4gICAgICAgICAgICAgICAge3Byb3BzLmRheXMubWFwKGl0ZW0gPT5cclxuICAgICAgICAgICAgICAgICAgICA8RGF5IHsuLi5pdGVtfSBkaXNwYXRjaD17cHJvcHMuZGlzcGF0Y2h9IC8+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxuKTtcclxuXHJcbmNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgICAgIHN1cGVyKHByb3BzKTtcclxuICAgICAgICB0aGlzLnN0YXRlID0ge1xyXG4gICAgICAgICAgICB5ZWFyOiAyNDE3LFxyXG4gICAgICAgICAgICBtb250aDogMVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaCA9IHRoaXMuZGlzcGF0Y2guYmluZCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaChhY3Rpb24pIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24pO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUgPT4ge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdQUkVWX01PTlRIJzpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB5ZWFyOiBzdGF0ZS5tb250aCA9PT0gMCA/IHN0YXRlLnllYXIgLSAxIDogc3RhdGUueWVhcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbW9udGg6IHN0YXRlLm1vbnRoID09PSAwID8gMTEgOiBzdGF0ZS5tb250aCAtIDFcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnTkVYVF9NT05USCc6XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeWVhcjogc3RhdGUubW9udGggPT09IDExID8gc3RhdGUueWVhciArIDEgOiBzdGF0ZS55ZWFyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb250aDogc3RhdGUubW9udGggPT09IDExID8gMCA6IHN0YXRlLm1vbnRoICsgMVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihwcm9wcywgc3RhdGUpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8Q2FsZW5kYXJcclxuICAgICAgICAgICAgICAgIHllYXI9e3N0YXRlLnllYXJ9XHJcbiAgICAgICAgICAgICAgICBtb250aD17c3RhdGUubW9udGh9XHJcbiAgICAgICAgICAgICAgICBkaXNwYXRjaD17dGhpcy5kaXNwYXRjaH0gLz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG5yZW5kZXIoPEFwcCAvPiwgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSkpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvZXhhbXBsZS5qcyIsImNvbnN0IGlzTGVhcFllYXIgPSB5ZWFyID0+XHJcbiAgICB5ZWFyICUgNDAwID09PSAwIHx8IHllYXIgJSA0ID09PSAwICYmIHllYXIgJSAxMDAgIT09IDA7XHJcblxyXG5jb25zdCBnZXREYXlzT2ZGZWJydWFyeSA9IHllYXIgPT5cclxuICAgIGlzTGVhcFllYXIoeWVhcikgPyAyOSA6IDI4O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldERheXNPZk1vbnRoID0gKHllYXIsIG1vbnRoKSA9PiAoXHJcbiAgICBtb250aCA9PT0gMCAmJiAzMSB8fFxyXG4gICAgbW9udGggPT09IDEgJiYgZ2V0RGF5c09mRmVicnVhcnkoeWVhcikgfHxcclxuICAgIG1vbnRoID09PSAyICYmIDMxIHx8XHJcbiAgICBtb250aCA9PT0gMyAmJiAzMCB8fFxyXG4gICAgbW9udGggPT09IDQgJiYgMzEgfHxcclxuICAgIG1vbnRoID09PSA1ICYmIDMwIHx8XHJcbiAgICBtb250aCA9PT0gNiAmJiAzMSB8fFxyXG4gICAgbW9udGggPT09IDcgJiYgMzEgfHxcclxuICAgIG1vbnRoID09PSA4ICYmIDMwIHx8XHJcbiAgICBtb250aCA9PT0gOSAmJiAzMSB8fFxyXG4gICAgbW9udGggPT09IDEwICYmIDMwIHx8XHJcbiAgICBtb250aCA9PT0gMTEgJiYgMzEgfHxcclxuICAgIC0xXHJcbik7XHJcblxyXG4vLyBHYXVzcydzIGFsZ29yaXRobVxyXG5jb25zdCBnZXRGaXJzdFdlZWtkYXkgPSB5ZWFyID0+XHJcbiAgICAoMSArIDUgKiAoKHllYXIgLSAxKSAlIDQpICsgNCAqICgoeWVhciAtIDEpICUgMTAwKSArIDYgKiAoKHllYXIgLSAxKSAlIDQwMCkpICUgNztcclxuXHJcbmNvbnN0IGdldE9yZGluYWxEYXkgPSAoeWVhciwgbW9udGgsIGRheSkgPT4gKFxyXG4gICAgbW9udGggPT09IDEgJiYgMzEgfHxcclxuICAgIG1vbnRoID09PSAyICYmIDU5IHx8XHJcbiAgICBtb250aCA9PT0gMyAmJiA5MCB8fFxyXG4gICAgbW9udGggPT09IDQgJiYgMTIwIHx8XHJcbiAgICBtb250aCA9PT0gNSAmJiAxNTEgfHxcclxuICAgIG1vbnRoID09PSA2ICYmIDE4MSB8fFxyXG4gICAgbW9udGggPT09IDcgJiYgMjEyIHx8XHJcbiAgICBtb250aCA9PT0gOCAmJiAyNDMgfHxcclxuICAgIG1vbnRoID09PSA5ICYmIDI3MyB8fFxyXG4gICAgbW9udGggPT09IDEwICYmIDMwNCB8fFxyXG4gICAgbW9udGggPT09IDExICYmIDMzNCB8fFxyXG4gICAgMFxyXG4pICsgKGlzTGVhcFllYXIoeWVhcikgJiYgbW9udGggPiAxID8gMSA6IDApICsgZGF5IC0gMTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRXZWVrRGF5ID0gKHllYXIsIG1vbnRoLCBkYXkpID0+XHJcbiAgICAoZ2V0Rmlyc3RXZWVrZGF5KHllYXIpICsgZ2V0T3JkaW5hbERheSh5ZWFyLCBtb250aCwgZGF5KSkgJSA3O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMuanMiLCJpbXBvcnQgY3JlYXRlRWxlbWVudCBmcm9tICdpbmZlcm5vLWNyZWF0ZS1lbGVtZW50JztcclxuaW1wb3J0IENvbXBvbmVudCBmcm9tICdpbmZlcm5vLWNvbXBvbmVudCc7XHJcblxyXG5jb25zdCB3aXRoUHJvcHNPbkNoYW5nZSA9IChwcm9wc0tleXMsIG1hcFByb3BzKSA9PiBCYXNlQ29tcG9uZW50ID0+IGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuY29tcHV0ZWRQcm9wcyA9IG1hcFByb3BzKHByb3BzKTtcclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzKG5leHRQcm9wcykge1xyXG4gICAgICAgIGlmIChwcm9wc0tleXMuc29tZShwcm9wS2V5ID0+IHRoaXMucHJvcHNbcHJvcEtleV0gIT09IG5leHRQcm9wc1twcm9wS2V5XSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jb21wdXRlZFByb3BzID0gbWFwUHJvcHMobmV4dFByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKHByb3BzKSB7XHJcbiAgICAgICAgcmV0dXJuIDxCYXNlQ29tcG9uZW50IHsuLi5wcm9wc30gey4uLnRoaXMuY29tcHV0ZWRQcm9wc30gLz47XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUHJvcHNPbkNoYW5nZTtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3dpdGhQcm9wc09uQ2hhbmdlLmpzIiwiaW1wb3J0IHsgaXNCcm93c2VyIH0gZnJvbSAnaW5mZXJuby1zaGFyZWQnO1xuY29uc3QgaXNpT1MgPSBpc0Jyb3dzZXIgJiYgISFuYXZpZ2F0b3IucGxhdGZvcm0gJiYgL2lQYWR8aVBob25lfGlQb2QvLnRlc3QobmF2aWdhdG9yLnBsYXRmb3JtKTtcbmNvbnN0IGRlbGVnYXRlZEV2ZW50cyA9IG5ldyBNYXAoKTtcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGVFdmVudChuYW1lLCBsYXN0RXZlbnQsIG5leHRFdmVudCwgZG9tKSB7XG4gICAgbGV0IGRlbGVnYXRlZFJvb3RzID0gZGVsZWdhdGVkRXZlbnRzLmdldChuYW1lKTtcbiAgICBpZiAobmV4dEV2ZW50KSB7XG4gICAgICAgIGlmICghZGVsZWdhdGVkUm9vdHMpIHtcbiAgICAgICAgICAgIGRlbGVnYXRlZFJvb3RzID0geyBpdGVtczogbmV3IE1hcCgpLCBjb3VudDogMCwgZG9jRXZlbnQ6IG51bGwgfTtcbiAgICAgICAgICAgIGRlbGVnYXRlZFJvb3RzLmRvY0V2ZW50ID0gYXR0YWNoRXZlbnRUb0RvY3VtZW50KG5hbWUsIGRlbGVnYXRlZFJvb3RzKTtcbiAgICAgICAgICAgIGRlbGVnYXRlZEV2ZW50cy5zZXQobmFtZSwgZGVsZWdhdGVkUm9vdHMpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghbGFzdEV2ZW50KSB7XG4gICAgICAgICAgICBkZWxlZ2F0ZWRSb290cy5jb3VudCsrO1xuICAgICAgICAgICAgaWYgKGlzaU9TICYmIG5hbWUgPT09ICdvbkNsaWNrJykge1xuICAgICAgICAgICAgICAgIHRyYXBDbGlja09uTm9uSW50ZXJhY3RpdmVFbGVtZW50KGRvbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGVsZWdhdGVkUm9vdHMuaXRlbXMuc2V0KGRvbSwgbmV4dEV2ZW50KTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZGVsZWdhdGVkUm9vdHMpIHtcbiAgICAgICAgaWYgKGRlbGVnYXRlZFJvb3RzLml0ZW1zLmhhcyhkb20pKSB7XG4gICAgICAgICAgICBkZWxlZ2F0ZWRSb290cy5jb3VudC0tO1xuICAgICAgICAgICAgZGVsZWdhdGVkUm9vdHMuaXRlbXMuZGVsZXRlKGRvbSk7XG4gICAgICAgICAgICBpZiAoZGVsZWdhdGVkUm9vdHMuY291bnQgPT09IDApIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKG5vcm1hbGl6ZUV2ZW50TmFtZShuYW1lKSwgZGVsZWdhdGVkUm9vdHMuZG9jRXZlbnQpO1xuICAgICAgICAgICAgICAgIGRlbGVnYXRlZEV2ZW50cy5kZWxldGUobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGV2ZW50LCBkb20sIGl0ZW1zLCBjb3VudCwgZXZlbnREYXRhKSB7XG4gICAgY29uc3QgZXZlbnRzVG9UcmlnZ2VyID0gaXRlbXMuZ2V0KGRvbSk7XG4gICAgaWYgKGV2ZW50c1RvVHJpZ2dlcikge1xuICAgICAgICBjb3VudC0tO1xuICAgICAgICAvLyBsaW5rRXZlbnQgb2JqZWN0XG4gICAgICAgIGV2ZW50RGF0YS5kb20gPSBkb207XG4gICAgICAgIGlmIChldmVudHNUb1RyaWdnZXIuZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50c1RvVHJpZ2dlci5ldmVudChldmVudHNUb1RyaWdnZXIuZGF0YSwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZlbnRzVG9UcmlnZ2VyKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXZlbnREYXRhLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgY29uc3QgcGFyZW50RG9tID0gZG9tLnBhcmVudE5vZGU7XG4gICAgICAgIC8vIEh0bWwgTm9kZXMgY2FuIGJlIG5lc3RlZCBmZTogc3BhbiBpbnNpZGUgYnV0dG9uIGluIHRoYXQgc2NlbmFyaW8gYnJvd3NlciBkb2VzIG5vdCBoYW5kbGUgZGlzYWJsZWQgYXR0cmlidXRlIG9uIHBhcmVudCxcbiAgICAgICAgLy8gYmVjYXVzZSB0aGUgZXZlbnQgbGlzdGVuZXIgaXMgb24gZG9jdW1lbnQuYm9keVxuICAgICAgICBpZiAocGFyZW50RG9tICYmIHBhcmVudERvbS5kaXNhYmxlZCAhPT0gdHJ1ZSB8fCBwYXJlbnREb20gPT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZXZlbnQsIHBhcmVudERvbSwgaXRlbXMsIGNvdW50LCBldmVudERhdGEpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gbm9ybWFsaXplRXZlbnROYW1lKG5hbWUpIHtcbiAgICByZXR1cm4gbmFtZS5zdWJzdHIoMikudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIGF0dGFjaEV2ZW50VG9Eb2N1bWVudChuYW1lLCBkZWxlZ2F0ZWRSb290cykge1xuICAgIGNvbnN0IGRvY0V2ZW50ID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IGV2ZW50RGF0YSA9IHtcbiAgICAgICAgICAgIHN0b3BQcm9wYWdhdGlvbjogZmFsc2UsXG4gICAgICAgICAgICBkb206IGRvY3VtZW50XG4gICAgICAgIH07XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gZG8gdGhpcyBhcyBzb21lIGJyb3dzZXJzIHJlY3ljbGUgdGhlIHNhbWUgRXZlbnQgYmV0d2VlbiBjYWxsc1xuICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIG1ha2UgdGhlIHByb3BlcnR5IGNvbmZpZ3VyYWJsZVxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXZlbnQsICdjdXJyZW50VGFyZ2V0Jywge1xuICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgZ2V0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmVudERhdGEuZG9tO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uID0gKCkgPT4ge1xuICAgICAgICAgICAgZXZlbnREYXRhLnN0b3BQcm9wYWdhdGlvbiA9IHRydWU7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGNvdW50ID0gZGVsZWdhdGVkUm9vdHMuY291bnQ7XG4gICAgICAgIGlmIChjb3VudCA+IDApIHtcbiAgICAgICAgICAgIGRpc3BhdGNoRXZlbnQoZXZlbnQsIGV2ZW50LnRhcmdldCwgZGVsZWdhdGVkUm9vdHMuaXRlbXMsIGNvdW50LCBldmVudERhdGEpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKG5vcm1hbGl6ZUV2ZW50TmFtZShuYW1lKSwgZG9jRXZlbnQpO1xuICAgIHJldHVybiBkb2NFdmVudDtcbn1cbmZ1bmN0aW9uIGVtcHR5Rm4oKSB7IH1cbmZ1bmN0aW9uIHRyYXBDbGlja09uTm9uSW50ZXJhY3RpdmVFbGVtZW50KGRvbSkge1xuICAgIC8vIE1vYmlsZSBTYWZhcmkgZG9lcyBub3QgZmlyZSBwcm9wZXJseSBidWJibGUgY2xpY2sgZXZlbnRzIG9uXG4gICAgLy8gbm9uLWludGVyYWN0aXZlIGVsZW1lbnRzLCB3aGljaCBtZWFucyBkZWxlZ2F0ZWQgY2xpY2sgbGlzdGVuZXJzIGRvIG5vdFxuICAgIC8vIGZpcmUuIFRoZSB3b3JrYXJvdW5kIGZvciB0aGlzIGJ1ZyBpbnZvbHZlcyBhdHRhY2hpbmcgYW4gZW1wdHkgY2xpY2tcbiAgICAvLyBsaXN0ZW5lciBvbiB0aGUgdGFyZ2V0IG5vZGUuXG4gICAgLy8gaHR0cDovL3d3dy5xdWlya3Ntb2RlLm9yZy9ibG9nL2FyY2hpdmVzLzIwMTAvMDkvY2xpY2tfZXZlbnRfZGVsLmh0bWxcbiAgICAvLyBKdXN0IHNldCBpdCB1c2luZyB0aGUgb25jbGljayBwcm9wZXJ0eSBzbyB0aGF0IHdlIGRvbid0IGhhdmUgdG8gbWFuYWdlIGFueVxuICAgIC8vIGJvb2trZWVwaW5nIGZvciBpdC4gTm90IHN1cmUgaWYgd2UgbmVlZCB0byBjbGVhciBpdCB3aGVuIHRoZSBsaXN0ZW5lciBpc1xuICAgIC8vIHJlbW92ZWQuXG4gICAgLy8gVE9ETzogT25seSBkbyB0aGlzIGZvciB0aGUgcmVsZXZhbnQgU2FmYXJpcyBtYXliZT9cbiAgICBkb20ub25jbGljayA9IGVtcHR5Rm47XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL0RPTS9ldmVudHMvZGVsZWdhdGlvbi5qc1xuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlua0V2ZW50KGRhdGEsIGV2ZW50KSB7XG4gICAgcmV0dXJuIHsgZGF0YSwgZXZlbnQgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pbmZlcm5vL2Rpc3QtZXMvRE9NL2V2ZW50cy9saW5rRXZlbnQuanNcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGlzQXJyYXksIGlzTnVsbCwgaXNPYmplY3QsIGlzU3RyaW5nT3JOdW1iZXIsIHRocm93RXJyb3IsIHdhcm5pbmcgfSBmcm9tICdpbmZlcm5vLXNoYXJlZCc7XG5pbXBvcnQgb3B0aW9ucyBmcm9tICcuLi9jb3JlL29wdGlvbnMnO1xuaW1wb3J0IHsgc3ZnTlMgfSBmcm9tICcuL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBtb3VudCwgbW91bnRDbGFzc0NvbXBvbmVudENhbGxiYWNrcywgbW91bnRFbGVtZW50LCBtb3VudEZ1bmN0aW9uYWxDb21wb25lbnRDYWxsYmFja3MsIG1vdW50UmVmLCBtb3VudFRleHQgfSBmcm9tICcuL21vdW50aW5nJztcbmltcG9ydCB7IHBhdGNoRXZlbnQsIHBhdGNoUHJvcCB9IGZyb20gJy4vcGF0Y2hpbmcnO1xuaW1wb3J0IHsgY29tcG9uZW50VG9ET01Ob2RlTWFwIH0gZnJvbSAnLi9yZW5kZXJpbmcnO1xuaW1wb3J0IHsgY3JlYXRlQ2xhc3NDb21wb25lbnRJbnN0YW5jZSwgY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudElucHV0LCByZXBsYWNlQ2hpbGQsIEVNUFRZX09CSiB9IGZyb20gJy4vdXRpbHMnO1xuaW1wb3J0IHByb2Nlc3NFbGVtZW50IGZyb20gJy4vd3JhcHBlcnMvcHJvY2Vzc0VsZW1lbnQnO1xuZXhwb3J0IGZ1bmN0aW9uIG5vcm1hbGl6ZUNoaWxkTm9kZXMocGFyZW50RG9tKSB7XG4gICAgbGV0IGRvbSA9IHBhcmVudERvbS5maXJzdENoaWxkO1xuICAgIHdoaWxlIChkb20pIHtcbiAgICAgICAgaWYgKGRvbS5ub2RlVHlwZSA9PT0gOCkge1xuICAgICAgICAgICAgaWYgKGRvbS5kYXRhID09PSAnIScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwbGFjZWhvbGRlciA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICAgICAgICAgICAgICBwYXJlbnREb20ucmVwbGFjZUNoaWxkKHBsYWNlaG9sZGVyLCBkb20pO1xuICAgICAgICAgICAgICAgIGRvbSA9IGRvbS5uZXh0U2libGluZztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IGxhc3REb20gPSBkb20ucHJldmlvdXNTaWJsaW5nO1xuICAgICAgICAgICAgICAgIHBhcmVudERvbS5yZW1vdmVDaGlsZChkb20pO1xuICAgICAgICAgICAgICAgIGRvbSA9IGxhc3REb20gfHwgcGFyZW50RG9tLmZpcnN0Q2hpbGQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkb20gPSBkb20ubmV4dFNpYmxpbmc7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBoeWRyYXRlQ29tcG9uZW50KHZOb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGlzQ2xhc3MpIHtcbiAgICBjb25zdCB0eXBlID0gdk5vZGUudHlwZTtcbiAgICBjb25zdCByZWYgPSB2Tm9kZS5yZWY7XG4gICAgdk5vZGUuZG9tID0gZG9tO1xuICAgIGNvbnN0IHByb3BzID0gdk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIGlmIChpc0NsYXNzKSB7XG4gICAgICAgIGNvbnN0IF9pc1NWRyA9IGRvbS5uYW1lc3BhY2VVUkkgPT09IHN2Z05TO1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IGNyZWF0ZUNsYXNzQ29tcG9uZW50SW5zdGFuY2Uodk5vZGUsIHR5cGUsIHByb3BzLCBjb250ZXh0LCBfaXNTVkcpO1xuICAgICAgICBjb25zdCBpbnB1dCA9IGluc3RhbmNlLl9sYXN0SW5wdXQ7XG4gICAgICAgIGluc3RhbmNlLl92Q29tcG9uZW50ID0gdk5vZGU7XG4gICAgICAgIGluc3RhbmNlLl92Tm9kZSA9IHZOb2RlO1xuICAgICAgICBoeWRyYXRlKGlucHV0LCBkb20sIGxpZmVjeWNsZSwgaW5zdGFuY2UuX2NoaWxkQ29udGV4dCwgX2lzU1ZHKTtcbiAgICAgICAgbW91bnRDbGFzc0NvbXBvbmVudENhbGxiYWNrcyh2Tm9kZSwgcmVmLCBpbnN0YW5jZSwgbGlmZWN5Y2xlKTtcbiAgICAgICAgb3B0aW9ucy5maW5kRE9NTm9kZUVuYWJsZWQgJiYgY29tcG9uZW50VG9ET01Ob2RlTWFwLnNldChpbnN0YW5jZSwgZG9tKTtcbiAgICAgICAgdk5vZGUuY2hpbGRyZW4gPSBpbnN0YW5jZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnN0IGlucHV0ID0gY3JlYXRlRnVuY3Rpb25hbENvbXBvbmVudElucHV0KHZOb2RlLCB0eXBlLCBwcm9wcywgY29udGV4dCk7XG4gICAgICAgIGh5ZHJhdGUoaW5wdXQsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRyk7XG4gICAgICAgIHZOb2RlLmNoaWxkcmVuID0gaW5wdXQ7XG4gICAgICAgIHZOb2RlLmRvbSA9IGlucHV0LmRvbTtcbiAgICAgICAgbW91bnRGdW5jdGlvbmFsQ29tcG9uZW50Q2FsbGJhY2tzKHJlZiwgZG9tLCBsaWZlY3ljbGUpO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xufVxuZnVuY3Rpb24gaHlkcmF0ZUVsZW1lbnQodk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIGNvbnN0IGNoaWxkcmVuID0gdk5vZGUuY2hpbGRyZW47XG4gICAgY29uc3QgcHJvcHMgPSB2Tm9kZS5wcm9wcztcbiAgICBjb25zdCBldmVudHMgPSB2Tm9kZS5ldmVudHM7XG4gICAgY29uc3QgZmxhZ3MgPSB2Tm9kZS5mbGFncztcbiAgICBjb25zdCByZWYgPSB2Tm9kZS5yZWY7XG4gICAgaWYgKGlzU1ZHIHx8IChmbGFncyAmIDEyOCAvKiBTdmdFbGVtZW50ICovKSkge1xuICAgICAgICBpc1NWRyA9IHRydWU7XG4gICAgfVxuICAgIGlmIChkb20ubm9kZVR5cGUgIT09IDEgfHwgZG9tLnRhZ05hbWUudG9Mb3dlckNhc2UoKSAhPT0gdk5vZGUudHlwZSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgd2FybmluZygnSW5mZXJubyBoeWRyYXRpb246IFNlcnZlci1zaWRlIG1hcmt1cCBkb2VzblxcJ3QgbWF0Y2ggY2xpZW50LXNpZGUgbWFya3VwIG9yIEluaXRpYWwgcmVuZGVyIHRhcmdldCBpcyBub3QgZW1wdHknKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBuZXdEb20gPSBtb3VudEVsZW1lbnQodk5vZGUsIG51bGwsIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICB2Tm9kZS5kb20gPSBuZXdEb207XG4gICAgICAgIHJlcGxhY2VDaGlsZChkb20ucGFyZW50Tm9kZSwgbmV3RG9tLCBkb20pO1xuICAgICAgICByZXR1cm4gbmV3RG9tO1xuICAgIH1cbiAgICB2Tm9kZS5kb20gPSBkb207XG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgIGh5ZHJhdGVDaGlsZHJlbihjaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICB9XG4gICAgbGV0IGhhc0NvbnRyb2xsZWRWYWx1ZSA9IGZhbHNlO1xuICAgIGlmICghKGZsYWdzICYgMiAvKiBIdG1sRWxlbWVudCAqLykpIHtcbiAgICAgICAgaGFzQ29udHJvbGxlZFZhbHVlID0gcHJvY2Vzc0VsZW1lbnQoZmxhZ3MsIHZOb2RlLCBkb20sIGZhbHNlKTtcbiAgICB9XG4gICAgaWYgKHByb3BzKSB7XG4gICAgICAgIGZvciAobGV0IHByb3AgaW4gcHJvcHMpIHtcbiAgICAgICAgICAgIHBhdGNoUHJvcChwcm9wLCBudWxsLCBwcm9wc1twcm9wXSwgZG9tLCBpc1NWRywgaGFzQ29udHJvbGxlZFZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoZXZlbnRzKSB7XG4gICAgICAgIGZvciAobGV0IG5hbWUgaW4gZXZlbnRzKSB7XG4gICAgICAgICAgICBwYXRjaEV2ZW50KG5hbWUsIG51bGwsIGV2ZW50c1tuYW1lXSwgZG9tKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAocmVmKSB7XG4gICAgICAgIG1vdW50UmVmKGRvbSwgcmVmLCBsaWZlY3ljbGUpO1xuICAgIH1cbiAgICByZXR1cm4gZG9tO1xufVxuZnVuY3Rpb24gaHlkcmF0ZUNoaWxkcmVuKGNoaWxkcmVuLCBwYXJlbnREb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpIHtcbiAgICBub3JtYWxpemVDaGlsZE5vZGVzKHBhcmVudERvbSk7XG4gICAgbGV0IGRvbSA9IHBhcmVudERvbS5maXJzdENoaWxkO1xuICAgIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbGVuID0gY2hpbGRyZW4ubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoIWlzTnVsbChjaGlsZCkgJiYgaXNPYmplY3QoY2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRvbSkge1xuICAgICAgICAgICAgICAgICAgICBkb20gPSBoeWRyYXRlKGNoaWxkLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcpO1xuICAgICAgICAgICAgICAgICAgICBkb20gPSBkb20ubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtb3VudChjaGlsZCwgcGFyZW50RG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoaXNTdHJpbmdPck51bWJlcihjaGlsZHJlbikpIHtcbiAgICAgICAgaWYgKGRvbSAmJiBkb20ubm9kZVR5cGUgPT09IDMpIHtcbiAgICAgICAgICAgIGlmIChkb20ubm9kZVZhbHVlICE9PSBjaGlsZHJlbikge1xuICAgICAgICAgICAgICAgIGRvbS5ub2RlVmFsdWUgPSBjaGlsZHJlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChjaGlsZHJlbikge1xuICAgICAgICAgICAgcGFyZW50RG9tLnRleHRDb250ZW50ID0gY2hpbGRyZW47XG4gICAgICAgIH1cbiAgICAgICAgZG9tID0gZG9tLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc09iamVjdChjaGlsZHJlbikpIHtcbiAgICAgICAgaHlkcmF0ZShjaGlsZHJlbiwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICAgICAgZG9tID0gZG9tLm5leHRTaWJsaW5nO1xuICAgIH1cbiAgICAvLyBjbGVhciBhbnkgb3RoZXIgRE9NIG5vZGVzLCB0aGVyZSBzaG91bGQgYmUgb25seSBhIHNpbmdsZSBlbnRyeSBmb3IgdGhlIHJvb3RcbiAgICB3aGlsZSAoZG9tKSB7XG4gICAgICAgIGNvbnN0IG5leHRTaWJsaW5nID0gZG9tLm5leHRTaWJsaW5nO1xuICAgICAgICBwYXJlbnREb20ucmVtb3ZlQ2hpbGQoZG9tKTtcbiAgICAgICAgZG9tID0gbmV4dFNpYmxpbmc7XG4gICAgfVxufVxuZnVuY3Rpb24gaHlkcmF0ZVRleHQodk5vZGUsIGRvbSkge1xuICAgIGlmIChkb20ubm9kZVR5cGUgIT09IDMpIHtcbiAgICAgICAgY29uc3QgbmV3RG9tID0gbW91bnRUZXh0KHZOb2RlLCBudWxsKTtcbiAgICAgICAgdk5vZGUuZG9tID0gbmV3RG9tO1xuICAgICAgICByZXBsYWNlQ2hpbGQoZG9tLnBhcmVudE5vZGUsIG5ld0RvbSwgZG9tKTtcbiAgICAgICAgcmV0dXJuIG5ld0RvbTtcbiAgICB9XG4gICAgY29uc3QgdGV4dCA9IHZOb2RlLmNoaWxkcmVuO1xuICAgIGlmIChkb20ubm9kZVZhbHVlICE9PSB0ZXh0KSB7XG4gICAgICAgIGRvbS5ub2RlVmFsdWUgPSB0ZXh0O1xuICAgIH1cbiAgICB2Tm9kZS5kb20gPSBkb207XG4gICAgcmV0dXJuIGRvbTtcbn1cbmZ1bmN0aW9uIGh5ZHJhdGVWb2lkKHZOb2RlLCBkb20pIHtcbiAgICB2Tm9kZS5kb20gPSBkb207XG4gICAgcmV0dXJuIGRvbTtcbn1cbmZ1bmN0aW9uIGh5ZHJhdGUodk5vZGUsIGRvbSwgbGlmZWN5Y2xlLCBjb250ZXh0LCBpc1NWRykge1xuICAgIGNvbnN0IGZsYWdzID0gdk5vZGUuZmxhZ3M7XG4gICAgaWYgKGZsYWdzICYgMjggLyogQ29tcG9uZW50ICovKSB7XG4gICAgICAgIHJldHVybiBoeWRyYXRlQ29tcG9uZW50KHZOb2RlLCBkb20sIGxpZmVjeWNsZSwgY29udGV4dCwgaXNTVkcsIGZsYWdzICYgNCAvKiBDb21wb25lbnRDbGFzcyAqLyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGZsYWdzICYgMzk3MCAvKiBFbGVtZW50ICovKSB7XG4gICAgICAgIHJldHVybiBoeWRyYXRlRWxlbWVudCh2Tm9kZSwgZG9tLCBsaWZlY3ljbGUsIGNvbnRleHQsIGlzU1ZHKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoZmxhZ3MgJiAxIC8qIFRleHQgKi8pIHtcbiAgICAgICAgcmV0dXJuIGh5ZHJhdGVUZXh0KHZOb2RlLCBkb20pO1xuICAgIH1cbiAgICBlbHNlIGlmIChmbGFncyAmIDQwOTYgLyogVm9pZCAqLykge1xuICAgICAgICByZXR1cm4gaHlkcmF0ZVZvaWQodk5vZGUsIGRvbSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgdGhyb3dFcnJvcihgaHlkcmF0ZSgpIGV4cGVjdHMgYSB2YWxpZCBWTm9kZSwgaW5zdGVhZCBpdCByZWNlaXZlZCBhbiBvYmplY3Qgd2l0aCB0aGUgdHlwZSBcIiR7dHlwZW9mIHZOb2RlfVwiLmApO1xuICAgICAgICB9XG4gICAgICAgIHRocm93RXJyb3IoKTtcbiAgICB9XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoeWRyYXRlUm9vdChpbnB1dCwgcGFyZW50RG9tLCBsaWZlY3ljbGUpIHtcbiAgICBsZXQgZG9tID0gcGFyZW50RG9tICYmIHBhcmVudERvbS5maXJzdENoaWxkO1xuICAgIGlmIChkb20pIHtcbiAgICAgICAgaHlkcmF0ZShpbnB1dCwgZG9tLCBsaWZlY3ljbGUsIEVNUFRZX09CSiwgZmFsc2UpO1xuICAgICAgICBkb20gPSBwYXJlbnREb20uZmlyc3RDaGlsZDtcbiAgICAgICAgLy8gY2xlYXIgYW55IG90aGVyIERPTSBub2RlcywgdGhlcmUgc2hvdWxkIGJlIG9ubHkgYSBzaW5nbGUgZW50cnkgZm9yIHRoZSByb290XG4gICAgICAgIHdoaWxlIChkb20gPSBkb20ubmV4dFNpYmxpbmcpIHtcbiAgICAgICAgICAgIHBhcmVudERvbS5yZW1vdmVDaGlsZChkb20pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL0RPTS9oeWRyYXRpb24uanNcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCB7IGlzTnVsbE9yVW5kZWYgfSBmcm9tICdpbmZlcm5vLXNoYXJlZCc7XG5pbXBvcnQgeyB3cmFwcGVycyB9IGZyb20gJy4vcHJvY2Vzc0VsZW1lbnQnO1xuaW1wb3J0IHsgRU1QVFlfT0JKIH0gZnJvbSAnLi4vdXRpbHMnO1xuZnVuY3Rpb24gaXNDaGVja2VkVHlwZSh0eXBlKSB7XG4gICAgcmV0dXJuIHR5cGUgPT09ICdjaGVja2JveCcgfHwgdHlwZSA9PT0gJ3JhZGlvJztcbn1cbmZ1bmN0aW9uIGlzQ29udHJvbGxlZChwcm9wcykge1xuICAgIGNvbnN0IHVzZXNDaGVja2VkID0gaXNDaGVja2VkVHlwZShwcm9wcy50eXBlKTtcbiAgICByZXR1cm4gdXNlc0NoZWNrZWQgPyAhaXNOdWxsT3JVbmRlZihwcm9wcy5jaGVja2VkKSA6ICFpc051bGxPclVuZGVmKHByb3BzLnZhbHVlKTtcbn1cbmZ1bmN0aW9uIG9uVGV4dElucHV0Q2hhbmdlKGUpIHtcbiAgICBsZXQgdk5vZGUgPSB0aGlzLnZOb2RlO1xuICAgIGNvbnN0IGV2ZW50cyA9IHZOb2RlLmV2ZW50cyB8fCBFTVBUWV9PQko7XG4gICAgY29uc3QgZG9tID0gdk5vZGUuZG9tO1xuICAgIGlmIChldmVudHMub25JbnB1dCkge1xuICAgICAgICBjb25zdCBldmVudCA9IGV2ZW50cy5vbklucHV0O1xuICAgICAgICBpZiAoZXZlbnQuZXZlbnQpIHtcbiAgICAgICAgICAgIGV2ZW50LmV2ZW50KGV2ZW50LmRhdGEsIGUpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZXZlbnQoZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAoZXZlbnRzLm9uaW5wdXQpIHtcbiAgICAgICAgZXZlbnRzLm9uaW5wdXQoZSk7XG4gICAgfVxuICAgIC8vIHRoZSB1c2VyIG1heSBoYXZlIHVwZGF0ZWQgdGhlIHZOb2RlIGZyb20gdGhlIGFib3ZlIG9uSW5wdXQgZXZlbnRzXG4gICAgLy8gc28gd2UgbmVlZCB0byBnZXQgaXQgZnJvbSB0aGUgY29udGV4dCBvZiBgdGhpc2AgYWdhaW5cbiAgICBhcHBseVZhbHVlKHRoaXMudk5vZGUsIGRvbSk7XG59XG5mdW5jdGlvbiB3cmFwcGVkT25DaGFuZ2UoZSkge1xuICAgIGxldCB2Tm9kZSA9IHRoaXMudk5vZGU7XG4gICAgY29uc3QgZXZlbnRzID0gdk5vZGUuZXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICBjb25zdCBldmVudCA9IGV2ZW50cy5vbkNoYW5nZTtcbiAgICBpZiAoZXZlbnQuZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuZXZlbnQoZXZlbnQuZGF0YSwgZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBldmVudChlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBvbkNoZWNrYm94Q2hhbmdlKGUpIHtcbiAgICBjb25zdCB2Tm9kZSA9IHRoaXMudk5vZGU7XG4gICAgY29uc3QgZXZlbnRzID0gdk5vZGUuZXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICBjb25zdCBkb20gPSB2Tm9kZS5kb207XG4gICAgaWYgKGV2ZW50cy5vbkNsaWNrKSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzLm9uQ2xpY2s7XG4gICAgICAgIGlmIChldmVudC5ldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuZXZlbnQoZXZlbnQuZGF0YSwgZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudChlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudHMub25jbGljaykge1xuICAgICAgICBldmVudHMub25jbGljayhlKTtcbiAgICB9XG4gICAgLy8gdGhlIHVzZXIgbWF5IGhhdmUgdXBkYXRlZCB0aGUgdk5vZGUgZnJvbSB0aGUgYWJvdmUgb25DbGljayBldmVudHNcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIGdldCBpdCBmcm9tIHRoZSBjb250ZXh0IG9mIGB0aGlzYCBhZ2FpblxuICAgIGFwcGx5VmFsdWUodGhpcy52Tm9kZSwgZG9tKTtcbn1cbmZ1bmN0aW9uIGhhbmRsZUFzc29jaWF0ZWRSYWRpb0lucHV0cyhuYW1lKSB7XG4gICAgY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgaW5wdXRbdHlwZT1cInJhZGlvXCJdW25hbWU9XCIke25hbWV9XCJdYCk7XG4gICAgW10uZm9yRWFjaC5jYWxsKGlucHV0cywgKGRvbSkgPT4ge1xuICAgICAgICBjb25zdCBpbnB1dFdyYXBwZXIgPSB3cmFwcGVycy5nZXQoZG9tKTtcbiAgICAgICAgaWYgKGlucHV0V3JhcHBlcikge1xuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBpbnB1dFdyYXBwZXIudk5vZGUucHJvcHM7XG4gICAgICAgICAgICBpZiAocHJvcHMpIHtcbiAgICAgICAgICAgICAgICBkb20uY2hlY2tlZCA9IGlucHV0V3JhcHBlci52Tm9kZS5wcm9wcy5jaGVja2VkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc0lucHV0KHZOb2RlLCBkb20pIHtcbiAgICBjb25zdCBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICBhcHBseVZhbHVlKHZOb2RlLCBkb20pO1xuICAgIGlmIChpc0NvbnRyb2xsZWQocHJvcHMpKSB7XG4gICAgICAgIGxldCBpbnB1dFdyYXBwZXIgPSB3cmFwcGVycy5nZXQoZG9tKTtcbiAgICAgICAgaWYgKCFpbnB1dFdyYXBwZXIpIHtcbiAgICAgICAgICAgIGlucHV0V3JhcHBlciA9IHtcbiAgICAgICAgICAgICAgICB2Tm9kZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChpc0NoZWNrZWRUeXBlKHByb3BzLnR5cGUpKSB7XG4gICAgICAgICAgICAgICAgZG9tLm9uY2xpY2sgPSBvbkNoZWNrYm94Q2hhbmdlLmJpbmQoaW5wdXRXcmFwcGVyKTtcbiAgICAgICAgICAgICAgICBkb20ub25jbGljay53cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRvbS5vbmlucHV0ID0gb25UZXh0SW5wdXRDaGFuZ2UuYmluZChpbnB1dFdyYXBwZXIpO1xuICAgICAgICAgICAgICAgIGRvbS5vbmlucHV0LndyYXBwZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHByb3BzLm9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgZG9tLm9uY2hhbmdlID0gd3JhcHBlZE9uQ2hhbmdlLmJpbmQoaW5wdXRXcmFwcGVyKTtcbiAgICAgICAgICAgICAgICBkb20ub25jaGFuZ2Uud3JhcHBlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3cmFwcGVycy5zZXQoZG9tLCBpbnB1dFdyYXBwZXIpO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0V3JhcHBlci52Tm9kZSA9IHZOb2RlO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFwcGx5VmFsdWUodk5vZGUsIGRvbSkge1xuICAgIGNvbnN0IHByb3BzID0gdk5vZGUucHJvcHMgfHwgRU1QVFlfT0JKO1xuICAgIGNvbnN0IHR5cGUgPSBwcm9wcy50eXBlO1xuICAgIGNvbnN0IHZhbHVlID0gcHJvcHMudmFsdWU7XG4gICAgY29uc3QgY2hlY2tlZCA9IHByb3BzLmNoZWNrZWQ7XG4gICAgY29uc3QgbXVsdGlwbGUgPSBwcm9wcy5tdWx0aXBsZTtcbiAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWU7XG4gICAgY29uc3QgaGFzVmFsdWUgPSAhaXNOdWxsT3JVbmRlZih2YWx1ZSk7XG4gICAgaWYgKHR5cGUgJiYgdHlwZSAhPT0gZG9tLnR5cGUpIHtcbiAgICAgICAgZG9tLnR5cGUgPSB0eXBlO1xuICAgIH1cbiAgICBpZiAobXVsdGlwbGUgJiYgbXVsdGlwbGUgIT09IGRvbS5tdWx0aXBsZSkge1xuICAgICAgICBkb20ubXVsdGlwbGUgPSBtdWx0aXBsZTtcbiAgICB9XG4gICAgaWYgKCFpc051bGxPclVuZGVmKGRlZmF1bHRWYWx1ZSkgJiYgIWhhc1ZhbHVlKSB7XG4gICAgICAgIGRvbS5kZWZhdWx0VmFsdWUgPSBkZWZhdWx0VmFsdWUgKyAnJztcbiAgICB9XG4gICAgaWYgKGlzQ2hlY2tlZFR5cGUodHlwZSkpIHtcbiAgICAgICAgaWYgKGhhc1ZhbHVlKSB7XG4gICAgICAgICAgICBkb20udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYoY2hlY2tlZCkpIHtcbiAgICAgICAgICAgIGRvbS5jaGVja2VkID0gY2hlY2tlZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZSA9PT0gJ3JhZGlvJyAmJiBwcm9wcy5uYW1lKSB7XG4gICAgICAgICAgICBoYW5kbGVBc3NvY2lhdGVkUmFkaW9JbnB1dHMocHJvcHMubmFtZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmIChoYXNWYWx1ZSAmJiBkb20udmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgICBkb20udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICghaXNOdWxsT3JVbmRlZihjaGVja2VkKSkge1xuICAgICAgICAgICAgZG9tLmNoZWNrZWQgPSBjaGVja2VkO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2luZmVybm8vZGlzdC1lcy9ET00vd3JhcHBlcnMvSW5wdXRXcmFwcGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBpc0FycmF5LCBpc0ludmFsaWQsIGlzTnVsbE9yVW5kZWYgfSBmcm9tICdpbmZlcm5vLXNoYXJlZCc7XG5pbXBvcnQgeyBpc1ZOb2RlIH0gZnJvbSAnLi4vLi4vY29yZS9WTm9kZXMnO1xuaW1wb3J0IHsgd3JhcHBlcnMgfSBmcm9tICcuL3Byb2Nlc3NFbGVtZW50JztcbmltcG9ydCB7IEVNUFRZX09CSiB9IGZyb20gJy4uL3V0aWxzJztcbmZ1bmN0aW9uIGlzQ29udHJvbGxlZChwcm9wcykge1xuICAgIHJldHVybiAhaXNOdWxsT3JVbmRlZihwcm9wcy52YWx1ZSk7XG59XG5mdW5jdGlvbiB1cGRhdGVDaGlsZE9wdGlvbkdyb3VwKHZOb2RlLCB2YWx1ZSkge1xuICAgIGNvbnN0IHR5cGUgPSB2Tm9kZS50eXBlO1xuICAgIGlmICh0eXBlID09PSAnb3B0Z3JvdXAnKSB7XG4gICAgICAgIGNvbnN0IGNoaWxkcmVuID0gdk5vZGUuY2hpbGRyZW47XG4gICAgICAgIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ2hpbGRPcHRpb24oY2hpbGRyZW5baV0sIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpc1ZOb2RlKGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgdXBkYXRlQ2hpbGRPcHRpb24oY2hpbGRyZW4sIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdXBkYXRlQ2hpbGRPcHRpb24odk5vZGUsIHZhbHVlKTtcbiAgICB9XG59XG5mdW5jdGlvbiB1cGRhdGVDaGlsZE9wdGlvbih2Tm9kZSwgdmFsdWUpIHtcbiAgICBjb25zdCBwcm9wcyA9IHZOb2RlLnByb3BzIHx8IEVNUFRZX09CSjtcbiAgICBjb25zdCBkb20gPSB2Tm9kZS5kb207XG4gICAgLy8gd2UgZG8gdGhpcyBhcyBtdWx0aXBsZSBtYXkgaGF2ZSBjaGFuZ2VkXG4gICAgZG9tLnZhbHVlID0gcHJvcHMudmFsdWU7XG4gICAgaWYgKChpc0FycmF5KHZhbHVlKSAmJiB2YWx1ZS5pbmRleE9mKHByb3BzLnZhbHVlKSAhPT0gLTEpIHx8IHByb3BzLnZhbHVlID09PSB2YWx1ZSkge1xuICAgICAgICBkb20uc2VsZWN0ZWQgPSB0cnVlO1xuICAgIH1cbiAgICBlbHNlIGlmICghaXNOdWxsT3JVbmRlZih2YWx1ZSkgfHwgIWlzTnVsbE9yVW5kZWYocHJvcHMuc2VsZWN0ZWQpKSB7XG4gICAgICAgIGRvbS5zZWxlY3RlZCA9IHByb3BzLnNlbGVjdGVkIHx8IGZhbHNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIG9uU2VsZWN0Q2hhbmdlKGUpIHtcbiAgICBjb25zdCB2Tm9kZSA9IHRoaXMudk5vZGU7XG4gICAgY29uc3QgZXZlbnRzID0gdk5vZGUuZXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICBjb25zdCBkb20gPSB2Tm9kZS5kb207XG4gICAgaWYgKGV2ZW50cy5vbkNoYW5nZSkge1xuICAgICAgICBjb25zdCBldmVudCA9IGV2ZW50cy5vbkNoYW5nZTtcbiAgICAgICAgaWYgKGV2ZW50LmV2ZW50KSB7XG4gICAgICAgICAgICBldmVudC5ldmVudChldmVudC5kYXRhLCBlKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGV2ZW50KGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKGV2ZW50cy5vbmNoYW5nZSkge1xuICAgICAgICBldmVudHMub25jaGFuZ2UoZSk7XG4gICAgfVxuICAgIC8vIHRoZSB1c2VyIG1heSBoYXZlIHVwZGF0ZWQgdGhlIHZOb2RlIGZyb20gdGhlIGFib3ZlIG9uQ2hhbmdlIGV2ZW50c1xuICAgIC8vIHNvIHdlIG5lZWQgdG8gZ2V0IGl0IGZyb20gdGhlIGNvbnRleHQgb2YgYHRoaXNgIGFnYWluXG4gICAgYXBwbHlWYWx1ZSh0aGlzLnZOb2RlLCBkb20sIGZhbHNlKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwcm9jZXNzU2VsZWN0KHZOb2RlLCBkb20sIG1vdW50aW5nKSB7XG4gICAgY29uc3QgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgYXBwbHlWYWx1ZSh2Tm9kZSwgZG9tLCBtb3VudGluZyk7XG4gICAgaWYgKGlzQ29udHJvbGxlZChwcm9wcykpIHtcbiAgICAgICAgbGV0IHNlbGVjdFdyYXBwZXIgPSB3cmFwcGVycy5nZXQoZG9tKTtcbiAgICAgICAgaWYgKCFzZWxlY3RXcmFwcGVyKSB7XG4gICAgICAgICAgICBzZWxlY3RXcmFwcGVyID0ge1xuICAgICAgICAgICAgICAgIHZOb2RlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZG9tLm9uY2hhbmdlID0gb25TZWxlY3RDaGFuZ2UuYmluZChzZWxlY3RXcmFwcGVyKTtcbiAgICAgICAgICAgIGRvbS5vbmNoYW5nZS53cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHdyYXBwZXJzLnNldChkb20sIHNlbGVjdFdyYXBwZXIpO1xuICAgICAgICB9XG4gICAgICAgIHNlbGVjdFdyYXBwZXIudk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVZhbHVlKHZOb2RlLCBkb20sIG1vdW50aW5nKSB7XG4gICAgY29uc3QgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgaWYgKHByb3BzLm11bHRpcGxlICE9PSBkb20ubXVsdGlwbGUpIHtcbiAgICAgICAgZG9tLm11bHRpcGxlID0gcHJvcHMubXVsdGlwbGU7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkcmVuID0gdk5vZGUuY2hpbGRyZW47XG4gICAgaWYgKCFpc0ludmFsaWQoY2hpbGRyZW4pKSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IHByb3BzLnZhbHVlO1xuICAgICAgICBpZiAobW91bnRpbmcgJiYgaXNOdWxsT3JVbmRlZih2YWx1ZSkpIHtcbiAgICAgICAgICAgIHZhbHVlID0gcHJvcHMuZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0FycmF5KGNoaWxkcmVuKSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IGNoaWxkcmVuLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ2hpbGRPcHRpb25Hcm91cChjaGlsZHJlbltpXSwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGlzVk5vZGUoY2hpbGRyZW4pKSB7XG4gICAgICAgICAgICB1cGRhdGVDaGlsZE9wdGlvbkdyb3VwKGNoaWxkcmVuLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaW5mZXJuby9kaXN0LWVzL0RPTS93cmFwcGVycy9TZWxlY3RXcmFwcGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgeyBpc051bGxPclVuZGVmIH0gZnJvbSAnaW5mZXJuby1zaGFyZWQnO1xuaW1wb3J0IHsgd3JhcHBlcnMgfSBmcm9tICcuL3Byb2Nlc3NFbGVtZW50JztcbmltcG9ydCB7IEVNUFRZX09CSiB9IGZyb20gJy4uL3V0aWxzJztcbmZ1bmN0aW9uIGlzQ29udHJvbGxlZChwcm9wcykge1xuICAgIHJldHVybiAhaXNOdWxsT3JVbmRlZihwcm9wcy52YWx1ZSk7XG59XG5mdW5jdGlvbiB3cmFwcGVkT25DaGFuZ2UoZSkge1xuICAgIGxldCB2Tm9kZSA9IHRoaXMudk5vZGU7XG4gICAgY29uc3QgZXZlbnRzID0gdk5vZGUuZXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICBjb25zdCBldmVudCA9IGV2ZW50cy5vbkNoYW5nZTtcbiAgICBpZiAoZXZlbnQuZXZlbnQpIHtcbiAgICAgICAgZXZlbnQuZXZlbnQoZXZlbnQuZGF0YSwgZSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBldmVudChlKTtcbiAgICB9XG59XG5mdW5jdGlvbiBvblRleHRhcmVhSW5wdXRDaGFuZ2UoZSkge1xuICAgIGxldCB2Tm9kZSA9IHRoaXMudk5vZGU7XG4gICAgY29uc3QgZXZlbnRzID0gdk5vZGUuZXZlbnRzIHx8IEVNUFRZX09CSjtcbiAgICBjb25zdCBkb20gPSB2Tm9kZS5kb207XG4gICAgaWYgKGV2ZW50cy5vbklucHV0KSB7XG4gICAgICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzLm9uSW5wdXQ7XG4gICAgICAgIGlmIChldmVudC5ldmVudCkge1xuICAgICAgICAgICAgZXZlbnQuZXZlbnQoZXZlbnQuZGF0YSwgZSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBldmVudChlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmIChldmVudHMub25pbnB1dCkge1xuICAgICAgICBldmVudHMub25pbnB1dChlKTtcbiAgICB9XG4gICAgLy8gdGhlIHVzZXIgbWF5IGhhdmUgdXBkYXRlZCB0aGUgdk5vZGUgZnJvbSB0aGUgYWJvdmUgb25JbnB1dCBldmVudHNcbiAgICAvLyBzbyB3ZSBuZWVkIHRvIGdldCBpdCBmcm9tIHRoZSBjb250ZXh0IG9mIGB0aGlzYCBhZ2FpblxuICAgIGFwcGx5VmFsdWUodGhpcy52Tm9kZSwgZG9tLCBmYWxzZSk7XG59XG5leHBvcnQgZnVuY3Rpb24gcHJvY2Vzc1RleHRhcmVhKHZOb2RlLCBkb20sIG1vdW50aW5nKSB7XG4gICAgY29uc3QgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgYXBwbHlWYWx1ZSh2Tm9kZSwgZG9tLCBtb3VudGluZyk7XG4gICAgbGV0IHRleHRhcmVhV3JhcHBlciA9IHdyYXBwZXJzLmdldChkb20pO1xuICAgIGlmIChpc0NvbnRyb2xsZWQocHJvcHMpKSB7XG4gICAgICAgIGlmICghdGV4dGFyZWFXcmFwcGVyKSB7XG4gICAgICAgICAgICB0ZXh0YXJlYVdyYXBwZXIgPSB7XG4gICAgICAgICAgICAgICAgdk5vZGVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkb20ub25pbnB1dCA9IG9uVGV4dGFyZWFJbnB1dENoYW5nZS5iaW5kKHRleHRhcmVhV3JhcHBlcik7XG4gICAgICAgICAgICBkb20ub25pbnB1dC53cmFwcGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChwcm9wcy5vbkNoYW5nZSkge1xuICAgICAgICAgICAgICAgIGRvbS5vbmNoYW5nZSA9IHdyYXBwZWRPbkNoYW5nZS5iaW5kKHRleHRhcmVhV3JhcHBlcik7XG4gICAgICAgICAgICAgICAgZG9tLm9uY2hhbmdlLndyYXBwZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd3JhcHBlcnMuc2V0KGRvbSwgdGV4dGFyZWFXcmFwcGVyKTtcbiAgICAgICAgfVxuICAgICAgICB0ZXh0YXJlYVdyYXBwZXIudk5vZGUgPSB2Tm9kZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhcHBseVZhbHVlKHZOb2RlLCBkb20sIG1vdW50aW5nKSB7XG4gICAgY29uc3QgcHJvcHMgPSB2Tm9kZS5wcm9wcyB8fCBFTVBUWV9PQko7XG4gICAgY29uc3QgdmFsdWUgPSBwcm9wcy52YWx1ZTtcbiAgICBjb25zdCBkb21WYWx1ZSA9IGRvbS52YWx1ZTtcbiAgICBpZiAoaXNOdWxsT3JVbmRlZih2YWx1ZSkpIHtcbiAgICAgICAgaWYgKG1vdW50aW5nKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSBwcm9wcy5kZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICBpZiAoIWlzTnVsbE9yVW5kZWYoZGVmYXVsdFZhbHVlKSkge1xuICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0VmFsdWUgIT09IGRvbVZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGRvbS52YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkb21WYWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBkb20udmFsdWUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLyogVGhlcmUgaXMgdmFsdWUgc28ga2VlcCBpdCBjb250cm9sbGVkICovXG4gICAgICAgIGlmIChkb21WYWx1ZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIGRvbS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2luZmVybm8vZGlzdC1lcy9ET00vd3JhcHBlcnMvVGV4dGFyZWFXcmFwcGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9