function _0x5b4aba(t) {
  function e(t) {
    if (typeof t === "string") {
      return function (t) {}.constructor("while (true) {}").apply("counter");
    }
    if (("" + t / t).length !== 1 || t % 20 == 0) {
      (function () {
        return true;
      }).constructor("debugger").call("action");
    } else {
      (function () {
        return false;
      }).constructor("debugger").apply("stateObject");
    }
    e(++t);
  }
  try {
    if (t) {
      return e;
    }
    e(0);
  } catch (t) {}
}
(function (t, e) {
  if (typeof exports == "object" && typeof module != "undefined") {
    module.exports = e();
  } else if (typeof define == "function" && define.amd) {
    define(e);
  } else {
    (t = typeof globalThis != "undefined" ? globalThis : t || self).bootstrap = e();
  }
})(this, function () {
  "use strict";

  const e = new Map();
  const s = {
    set(t, s, n) {
      if (!e.has(t)) {
        e.set(t, new Map());
      }
      const o = e.get(t);
      if (o.has(s) || o.size === 0) {
        o.set(s, n);
      } else {
        console.error("Bootstrap doesn't allow more than one instance per element. Bound instance: " + Array.from(o.keys())[0] + ".");
      }
    },
    get: (s, n) => e.has(s) && e.get(s).get(n) || null,
    remove(s, n) {
      if (!e.has(s)) {
        return;
      }
      const o = e.get(s);
      o.delete(n);
      if (o.size === 0) {
        e.delete(s);
      }
    }
  };
  const n = "transitionend";
  const i = e => {
    if (e && window.CSS && window.CSS.escape) {
      e = e.replace(/#([^\s"#']+)/g, (e, s) => "#" + CSS.escape(s));
    }
    return e;
  };
  const o = e => {
    e.dispatchEvent(new Event(n));
  };
  const r = e => !!e && typeof e == "object" && (e.jquery !== undefined && (e = e[0]), e.nodeType !== undefined);
  const a = e => r(e) ? e.jquery ? e[0] : e : typeof e == "string" && e.length > 0 ? document.querySelector(i(e)) : null;
  const c = e => {
    if (!r(e) || e.getClientRects().length === 0) {
      return false;
    }
    const n = getComputedStyle(e).getPropertyValue("visibility") === "visible";
    const i = e.closest("details:not([open])");
    if (!i) {
      return n;
    }
    if (i !== e) {
      const t = e.closest("summary");
      if (t && t.parentNode !== i) {
        return false;
      }
      if (t === null) {
        return false;
      }
    }
    return n;
  };
  const l = e => !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (e.disabled !== undefined ? e.disabled : e.hasAttribute("disabled") && e.getAttribute("disabled") !== "false");
  const h = e => {
    if (!document.documentElement.attachShadow) {
      return null;
    }
    if (typeof e.getRootNode == "function") {
      const t = e.getRootNode();
      if (t instanceof ShadowRoot) {
        return t;
      } else {
        return null;
      }
    }
    if (e instanceof ShadowRoot) {
      return e;
    } else if (e.parentNode) {
      return h(e.parentNode);
    } else {
      return null;
    }
  };
  const u = () => {};
  const d = e => {
    e.offsetHeight;
  };
  const f = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null;
  const p = [];
  const m = () => document.documentElement.dir === "rtl";
  const b = e => {
    var n;
    n = () => {
      const s = f();
      if (s) {
        const n = e.NAME;
        const i = s.fn[n];
        s.fn[n] = e.jQueryInterface;
        s.fn[n].Constructor = e;
        s.fn[n].noConflict = () => {
          s.fn[n] = i;
          return e.jQueryInterface;
        };
      }
    };
    if (document.readyState === "loading") {
      if (!p.length) {
        document.addEventListener("DOMContentLoaded", () => {
          for (const t of p) {
            t();
          }
        });
      }
      p.push(n);
    } else {
      n();
    }
  };
  const g = (e, s = [], n = e) => typeof e == "function" ? e(...s) : n;
  const v = (e, s, i = true) => {
    if (!i) {
      g(e);
      return;
    }
    const a = (t => {
      if (!t) {
        return 0;
      }
      let {
        transitionDuration: s,
        transitionDelay: n
      } = window.getComputedStyle(t);
      const i = Number.parseFloat(s);
      const o = Number.parseFloat(n);
      if (i || o) {
        s = s.split(",")[0];
        n = n.split(",")[0];
        return (Number.parseFloat(s) + Number.parseFloat(n)) * 1000;
      } else {
        return 0;
      }
    })(s) + 5;
    let c = false;
    const l = ({
      target: t
    }) => {
      if (t === s) {
        c = true;
        s.removeEventListener(n, l);
        g(e);
      }
    };
    s.addEventListener(n, l);
    setTimeout(() => {
      if (!c) {
        o(s);
      }
    }, a);
  };
  const _ = (e, s, n, i) => {
    const r = e.length;
    let a = e.indexOf(s);
    if (a === -1) {
      if (!n && i) {
        return e[r - 1];
      } else {
        return e[0];
      }
    } else {
      a += n ? 1 : -1;
      if (i) {
        a = (a + r) % r;
      }
      return e[Math.max(0, Math.min(a, r - 1))];
    }
  };
  const y = /[^.]*(?=\..*)\.|.*/;
  const w = /\..*/;
  const x = /::\d+$/;
  const E = {};
  let T = 1;
  const A = {
    mouseenter: "mouseover",
    mouseleave: "mouseout"
  };
  const O = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function C(e, s) {
    return s && s + "::" + T++ || e.uidEvent || T++;
  }
  function k(e) {
    const n = C(e);
    e.uidEvent = n;
    E[n] = E[n] || {};
    return E[n];
  }
  function S(e, s, n = null) {
    return Object.values(e).find(t => t.callable === s && t.delegationSelector === n);
  }
  function j(e, s, n) {
    const o = typeof s == "string";
    const r = o ? n : s || n;
    let a = D(e);
    if (!O.has(a)) {
      a = e;
    }
    return [o, r, a];
  }
  function I(e, s, n, i, o) {
    if (typeof s != "string" || !e) {
      return;
    }
    let [a, c, l] = j(s, n, i);
    if (s in A) {
      c = (t => function (e) {
        if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) {
          return t.call(this, e);
        }
      })(c);
    }
    const h = k(e);
    const u = h[l] ||= {};
    const d = S(u, c, a ? n : null);
    if (d) {
      d.oneOff = d.oneOff && o;
      return;
    }
    const f = C(c, s.replace(y, ""));
    const p = a ? (g = e, v = n, _ = c, function t(e) {
      const n = g.querySelectorAll(v);
      for (let {
        target: i
      } = e; i && i !== this; i = i.parentNode) {
        for (const o of n) {
          if (o === i) {
            N(e, {
              delegateTarget: i
            });
            if (t.oneOff) {
              L.off(g, e.type, v, _);
            }
            return _.apply(i, [e]);
          }
        }
      }
    }) : (m = e, b = c, function t(e) {
      N(e, {
        delegateTarget: m
      });
      if (t.oneOff) {
        L.off(m, e.type, b);
      }
      return b.apply(m, [e]);
    });
    var m;
    var b;
    var g;
    var v;
    var _;
    p.delegationSelector = a ? n : null;
    p.callable = c;
    p.oneOff = o;
    p.uidEvent = f;
    u[f] = p;
    e.addEventListener(l, p, a);
  }
  function P(e, s, n, i, o) {
    const a = S(s[n], i, o);
    if (a) {
      e.removeEventListener(n, a, Boolean(o));
      delete s[n][a.uidEvent];
    }
  }
  function M(e, s, n, i) {
    const r = s[n] || {};
    for (const [t, a] of Object.entries(r)) {
      if (t.includes(i)) {
        P(e, s, n, a.callable, a.delegationSelector);
      }
    }
  }
  function D(t) {
    t = t.replace(w, "");
    return A[t] || t;
  }
  const L = {
    on(t, e, s, n) {
      I(t, e, s, n, false);
    },
    one(t, e, s, n) {
      I(t, e, s, n, true);
    },
    off(e, s, n, i) {
      if (typeof s != "string" || !e) {
        return;
      }
      const [r, a, c] = j(s, n, i);
      const l = c !== s;
      const h = k(e);
      const u = h[c] || {};
      const d = s.startsWith(".");
      if (a === undefined) {
        if (d) {
          for (const t of Object.keys(h)) {
            M(e, h, t, s.slice(1));
          }
        }
        for (const [t, n] of Object.entries(u)) {
          const i = t.replace(x, "");
          if (!l || !!s.includes(i)) {
            P(e, h, c, n.callable, n.delegationSelector);
          }
        }
      } else {
        if (!Object.keys(u).length) {
          return;
        }
        P(e, h, c, a, r ? n : null);
      }
    },
    trigger(e, s, n) {
      if (typeof s != "string" || !e) {
        return null;
      }
      const o = f();
      let r = null;
      let a = true;
      let c = true;
      let l = false;
      if (s !== D(s) && o) {
        r = o.Event(s, n);
        o(e).trigger(r);
        a = !r.isPropagationStopped();
        c = !r.isImmediatePropagationStopped();
        l = r.isDefaultPrevented();
      }
      const h = N(new Event(s, {
        bubbles: a,
        cancelable: true
      }), n);
      if (l) {
        h.preventDefault();
      }
      if (c) {
        e.dispatchEvent(h);
      }
      if (h.defaultPrevented && r) {
        r.preventDefault();
      }
      return h;
    }
  };
  function N(e, s = {}) {
    for (const [t, i] of Object.entries(s)) {
      try {
        e[t] = i;
      } catch (s) {
        Object.defineProperty(e, t, {
          configurable: true,
          get: () => i
        });
      }
    }
    return e;
  }
  function F(e) {
    if (e === "true") {
      return true;
    }
    if (e === "false") {
      return false;
    }
    if (e === Number(e).toString()) {
      return Number(e);
    }
    if (e === "" || e === "null") {
      return null;
    }
    if (typeof e != "string") {
      return e;
    }
    try {
      return JSON.parse(decodeURIComponent(e));
    } catch (t) {
      return e;
    }
  }
  function B(e) {
    return e.replace(/[A-Z]/g, t => "-" + t.toLowerCase());
  }
  const z = {
    setDataAttribute(t, e, s) {
      t.setAttribute("data-bs-" + B(e), s);
    },
    removeDataAttribute(e, s) {
      e.removeAttribute("data-bs-" + B(s));
    },
    getDataAttributes(e) {
      if (!e) {
        return {};
      }
      const n = {};
      const i = Object.keys(e.dataset).filter(t => t.startsWith("bs") && !t.startsWith("bsConfig"));
      for (const t of i) {
        let i = t.replace(/^bs/, "");
        i = i.charAt(0).toLowerCase() + i.slice(1, i.length);
        n[i] = F(e.dataset[t]);
      }
      return n;
    },
    getDataAttribute: (e, s) => F(e.getAttribute("data-bs-" + B(s)))
  };
  class R {
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error("You have to implement the static method \"NAME\", for each component!");
    }
    _getConfig(e) {
      e = this._mergeConfigObj(e);
      e = this._configAfterMerge(e);
      this._typeCheckConfig(e);
      return e;
    }
    _configAfterMerge(t) {
      return t;
    }
    _mergeConfigObj(e, s) {
      const i = r(s) ? z.getDataAttribute(s, "config") : {};
      return {
        ...this.constructor.Default,
        ...(typeof i == "object" ? i : {}),
        ...(r(s) ? z.getDataAttributes(s) : {}),
        ...(typeof e == "object" ? e : {})
      };
    }
    _typeCheckConfig(e, s = this.constructor.DefaultType) {
      for (const [t, o] of Object.entries(s)) {
        const s = e[t];
        const a = r(s) ? "element" : (i = s) == null ? "" + i : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
        if (!new RegExp(o).test(a)) {
          throw new TypeError(this.constructor.NAME.toUpperCase() + ": Option \"" + t + "\" provided type \"" + a + "\" but expected type \"" + o + "\".");
        }
      }
      var i;
    }
  }
  class H extends R {
    constructor(e, n) {
      super();
      if (e = a(e)) {
        this._element = e;
        this._config = this._getConfig(n);
        s.set(this._element, this.constructor.DATA_KEY, this);
      }
    }
    dispose() {
      s.remove(this._element, this.constructor.DATA_KEY);
      L.off(this._element, this.constructor.EVENT_KEY);
      for (const t of Object.getOwnPropertyNames(this)) {
        this[t] = null;
      }
    }
    _queueCallback(t, e, s = true) {
      v(t, e, s);
    }
    _getConfig(e) {
      e = this._mergeConfigObj(e, this._element);
      e = this._configAfterMerge(e);
      this._typeCheckConfig(e);
      return e;
    }
    static getInstance(e) {
      return s.get(a(e), this.DATA_KEY);
    }
    static getOrCreateInstance(e, s = {}) {
      return this.getInstance(e) || new this(e, typeof s == "object" ? s : null);
    }
    static get VERSION() {
      return "5.3.0-alpha2";
    }
    static get DATA_KEY() {
      return "bs." + this.NAME;
    }
    static get EVENT_KEY() {
      return "." + this.DATA_KEY;
    }
    static eventName(e) {
      return "" + e + this.EVENT_KEY;
    }
  }
  const W = e => {
    let n = e.getAttribute("data-bs-target");
    if (!n || n === "#") {
      let t = e.getAttribute("href");
      if (!t || !t.includes("#") && !t.startsWith(".")) {
        return null;
      }
      if (t.includes("#") && !t.startsWith("#")) {
        t = "#" + t.split("#")[1];
      }
      n = t && t !== "#" ? t.trim() : null;
    }
    return i(n);
  };
  const q = {
    find: (e, s = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(s, e)),
    findOne: (e, s = document.documentElement) => Element.prototype.querySelector.call(s, e),
    children: (e, s) => [].concat(...e.children).filter(t => t.matches(s)),
    parents(e, s) {
      const i = [];
      let o = e.parentNode.closest(s);
      for (; o;) {
        i.push(o);
        o = o.parentNode.closest(s);
      }
      return i;
    },
    prev(e, s) {
      let i = e.previousElementSibling;
      for (; i;) {
        if (i.matches(s)) {
          return [i];
        }
        i = i.previousElementSibling;
      }
      return [];
    },
    next(e, s) {
      let i = e.nextElementSibling;
      for (; i;) {
        if (i.matches(s)) {
          return [i];
        }
        i = i.nextElementSibling;
      }
      return [];
    },
    focusableChildren(e) {
      const n = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", "[contenteditable=\"true\"]"].map(t => t + ":not([tabindex^=\"-\"])").join(",");
      return this.find(n, e).filter(t => !l(t) && c(t));
    },
    getSelectorFromElement(e) {
      const n = W(e);
      if (n && q.findOne(n)) {
        return n;
      } else {
        return null;
      }
    },
    getElementFromSelector(e) {
      const n = W(e);
      if (n) {
        return q.findOne(n);
      } else {
        return null;
      }
    },
    getMultipleElementsFromSelector(e) {
      const n = W(e);
      if (n) {
        return q.find(n);
      } else {
        return [];
      }
    }
  };
  const V = (e, s = "hide") => {
    const i = "click.dismiss" + e.EVENT_KEY;
    const o = e.NAME;
    L.on(document, i, "[data-bs-dismiss=\"" + o + "\"]", function (t) {
      if (["A", "AREA"].includes(this.tagName)) {
        t.preventDefault();
      }
      if (l(this)) {
        return;
      }
      const r = q.getElementFromSelector(this) || this.closest("." + o);
      e.getOrCreateInstance(r)[s]();
    });
  };
  class U extends H {
    static get NAME() {
      return "alert";
    }
    close() {
      if (L.trigger(this._element, "close.bs.alert").defaultPrevented) {
        return;
      }
      this._element.classList.remove("show");
      const s = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, s);
    }
    _destroyElement() {
      this._element.remove();
      L.trigger(this._element, "closed.bs.alert");
      this.dispose();
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const s = U.getOrCreateInstance(this);
        if (typeof t == "string") {
          if (s[t] === undefined || t.startsWith("_") || t === "constructor") {
            throw new TypeError("No method named \"" + t + "\"");
          }
          s[t](this);
        }
      });
    }
  }
  V(U, "close");
  b(U);
  const K = "[data-bs-toggle=\"button\"]";
  class Q extends H {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
    }
    static jQueryInterface(e) {
      return this.each(function () {
        const n = Q.getOrCreateInstance(this);
        if (e === "toggle") {
          n[e]();
        }
      });
    }
  }
  L.on(document, "click.bs.button.data-api", K, e => {
    e.preventDefault();
    const n = e.target.closest(K);
    Q.getOrCreateInstance(n).toggle();
  });
  b(Q);
  const X = {
    endCallback: null,
    leftCallback: null,
    rightCallback: null
  };
  const G = {
    endCallback: "(function|null)",
    leftCallback: "(function|null)",
    rightCallback: "(function|null)"
  };
  class Y extends R {
    constructor(e, s) {
      super();
      this._element = e;
      if (e && Y.isSupported()) {
        this._config = this._getConfig(s);
        this._deltaX = 0;
        this._supportPointerEvents = Boolean(window.PointerEvent);
        this._initEvents();
      }
    }
    static get Default() {
      return X;
    }
    static get DefaultType() {
      return G;
    }
    static get NAME() {
      return "swipe";
    }
    dispose() {
      L.off(this._element, ".bs.swipe");
    }
    _start(e) {
      if (this._supportPointerEvents) {
        if (this._eventIsPointerPenTouch(e)) {
          this._deltaX = e.clientX;
        }
      } else {
        this._deltaX = e.touches[0].clientX;
      }
    }
    _end(e) {
      if (this._eventIsPointerPenTouch(e)) {
        this._deltaX = e.clientX - this._deltaX;
      }
      this._handleSwipe();
      g(this._config.endCallback);
    }
    _move(e) {
      this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const s = Math.abs(this._deltaX);
      if (s <= 40) {
        return;
      }
      const n = s / this._deltaX;
      this._deltaX = 0;
      if (n) {
        g(n > 0 ? this._config.rightCallback : this._config.leftCallback);
      }
    }
    _initEvents() {
      if (this._supportPointerEvents) {
        L.on(this._element, "pointerdown.bs.swipe", t => this._start(t));
        L.on(this._element, "pointerup.bs.swipe", t => this._end(t));
        this._element.classList.add("pointer-event");
      } else {
        L.on(this._element, "touchstart.bs.swipe", t => this._start(t));
        L.on(this._element, "touchmove.bs.swipe", t => this._move(t));
        L.on(this._element, "touchend.bs.swipe", t => this._end(t));
      }
    }
    _eventIsPointerPenTouch(e) {
      return this._supportPointerEvents && (e.pointerType === "pen" || e.pointerType === "touch");
    }
    static isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
  }
  const J = "next";
  const $ = "prev";
  const Z = "left";
  const tt = "right";
  const et = "slid.bs.carousel";
  const st = "carousel";
  const nt = "active";
  const it = {
    ArrowLeft: tt,
    ArrowRight: Z
  };
  const ot = {
    interval: 5000,
    keyboard: true,
    pause: "hover",
    ride: false,
    touch: true,
    wrap: true
  };
  const rt = {
    interval: "(number|boolean)",
    keyboard: "boolean",
    pause: "(string|boolean)",
    ride: "(boolean|string)",
    touch: "boolean",
    wrap: "boolean"
  };
  class at extends H {
    constructor(e, s) {
      super(e, s);
      this._interval = null;
      this._activeElement = null;
      this._isSliding = false;
      this.touchTimeout = null;
      this._swipeHelper = null;
      this._indicatorsElement = q.findOne(".carousel-indicators", this._element);
      this._addEventListeners();
      if (this._config.ride === st) {
        this.cycle();
      }
    }
    static get Default() {
      return ot;
    }
    static get DefaultType() {
      return rt;
    }
    static get NAME() {
      return "carousel";
    }
    next() {
      this._slide(J);
    }
    nextWhenVisible() {
      if (!document.hidden && c(this._element)) {
        this.next();
      }
    }
    prev() {
      this._slide($);
    }
    pause() {
      if (this._isSliding) {
        o(this._element);
      }
      this._clearInterval();
    }
    cycle() {
      this._clearInterval();
      this._updateInterval();
      this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      if (this._config.ride) {
        if (this._isSliding) {
          L.one(this._element, et, () => this.cycle());
        } else {
          this.cycle();
        }
      }
    }
    to(e) {
      const n = this._getItems();
      if (e > n.length - 1 || e < 0) {
        return;
      }
      if (this._isSliding) {
        L.one(this._element, et, () => this.to(e));
        return;
      }
      const i = this._getItemIndex(this._getActive());
      if (i === e) {
        return;
      }
      const o = e > i ? J : $;
      this._slide(o, n[e]);
    }
    dispose() {
      if (this._swipeHelper) {
        this._swipeHelper.dispose();
      }
      super.dispose();
    }
    _configAfterMerge(e) {
      e.defaultInterval = e.interval;
      return e;
    }
    _addEventListeners() {
      if (this._config.keyboard) {
        L.on(this._element, "keydown.bs.carousel", t => this._keydown(t));
      }
      if (this._config.pause === "hover") {
        L.on(this._element, "mouseenter.bs.carousel", () => this.pause());
        L.on(this._element, "mouseleave.bs.carousel", () => this._maybeEnableCycle());
      }
      if (this._config.touch && Y.isSupported()) {
        this._addTouchEventListeners();
      }
    }
    _addTouchEventListeners() {
      for (const t of q.find(".carousel-item img", this._element)) {
        L.on(t, "dragstart.bs.carousel", t => t.preventDefault());
      }
      const s = {
        leftCallback: () => this._slide(this._directionToOrder(Z)),
        rightCallback: () => this._slide(this._directionToOrder(tt)),
        endCallback: () => {
          if (this._config.pause === "hover") {
            this.pause();
            if (this.touchTimeout) {
              clearTimeout(this.touchTimeout);
            }
            this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval);
          }
        }
      };
      this._swipeHelper = new Y(this._element, s);
    }
    _keydown(e) {
      if (/input|textarea/i.test(e.target.tagName)) {
        return;
      }
      const n = it[e.key];
      if (n) {
        e.preventDefault();
        this._slide(this._directionToOrder(n));
      }
    }
    _getItemIndex(e) {
      return this._getItems().indexOf(e);
    }
    _setActiveIndicatorElement(e) {
      if (!this._indicatorsElement) {
        return;
      }
      const n = q.findOne(".active", this._indicatorsElement);
      n.classList.remove(nt);
      n.removeAttribute("aria-current");
      const i = q.findOne("[data-bs-slide-to=\"" + e + "\"]", this._indicatorsElement);
      if (i) {
        i.classList.add(nt);
        i.setAttribute("aria-current", "true");
      }
    }
    _updateInterval() {
      const s = this._activeElement || this._getActive();
      if (!s) {
        return;
      }
      const n = Number.parseInt(s.getAttribute("data-bs-interval"), 10);
      this._config.interval = n || this._config.defaultInterval;
    }
    _slide(e, s = null) {
      if (this._isSliding) {
        return;
      }
      const i = this._getActive();
      const o = e === J;
      const r = s || _(this._getItems(), i, o, this._config.wrap);
      if (r === i) {
        return;
      }
      const a = this._getItemIndex(r);
      const c = t => L.trigger(this._element, t, {
        relatedTarget: r,
        direction: this._orderToDirection(e),
        from: this._getItemIndex(i),
        to: a
      });
      if (c("slide.bs.carousel").defaultPrevented) {
        return;
      }
      if (!i || !r) {
        return;
      }
      const l = Boolean(this._interval);
      this.pause();
      this._isSliding = true;
      this._setActiveIndicatorElement(a);
      this._activeElement = r;
      const h = o ? "carousel-item-start" : "carousel-item-end";
      const u = o ? "carousel-item-next" : "carousel-item-prev";
      r.classList.add(u);
      d(r);
      i.classList.add(h);
      r.classList.add(h);
      this._queueCallback(() => {
        r.classList.remove(h, u);
        r.classList.add(nt);
        i.classList.remove(nt, u, h);
        this._isSliding = false;
        c(et);
      }, i, this._isAnimated());
      if (l) {
        this.cycle();
      }
    }
    _isAnimated() {
      return this._element.classList.contains("slide");
    }
    _getActive() {
      return q.findOne(".active.carousel-item", this._element);
    }
    _getItems() {
      return q.find(".carousel-item", this._element);
    }
    _clearInterval() {
      if (this._interval) {
        clearInterval(this._interval);
        this._interval = null;
      }
    }
    _directionToOrder(t) {
      if (m()) {
        if (t === Z) {
          return $;
        } else {
          return J;
        }
      } else if (t === Z) {
        return J;
      } else {
        return $;
      }
    }
    _orderToDirection(t) {
      if (m()) {
        if (t === $) {
          return Z;
        } else {
          return tt;
        }
      } else if (t === $) {
        return tt;
      } else {
        return Z;
      }
    }
    static jQueryInterface(e) {
      return this.each(function () {
        const n = at.getOrCreateInstance(this, e);
        if (typeof e != "number") {
          if (typeof e == "string") {
            if (n[e] === undefined || e.startsWith("_") || e === "constructor") {
              throw new TypeError("No method named \"" + e + "\"");
            }
            n[e]();
          }
        } else {
          n.to(e);
        }
      });
    }
  }
  L.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", function (e) {
    const n = q.getElementFromSelector(this);
    if (!n || !n.classList.contains(st)) {
      return;
    }
    e.preventDefault();
    const i = at.getOrCreateInstance(n);
    const o = this.getAttribute("data-bs-slide-to");
    if (o) {
      i.to(o);
      i._maybeEnableCycle();
      return;
    } else if (z.getDataAttribute(this, "slide") === "next") {
      i.next();
      i._maybeEnableCycle();
      return;
    } else {
      i.prev();
      i._maybeEnableCycle();
      return;
    }
  });
  L.on(window, "load.bs.carousel.data-api", () => {
    const s = q.find("[data-bs-ride=\"carousel\"]");
    for (const t of s) {
      at.getOrCreateInstance(t);
    }
  });
  b(at);
  const ct = "show";
  const lt = "collapse";
  const ht = "collapsing";
  const ut = "[data-bs-toggle=\"collapse\"]";
  const dt = {
    parent: null,
    toggle: true
  };
  const ft = {
    parent: "(null|element)",
    toggle: "boolean"
  };
  class pt extends H {
    constructor(e, s) {
      super(e, s);
      this._isTransitioning = false;
      this._triggerArray = [];
      const i = q.find(ut);
      for (const t of i) {
        const e = q.getSelectorFromElement(t);
        const s = q.find(e).filter(t => t === this._element);
        if (e !== null && s.length) {
          this._triggerArray.push(t);
        }
      }
      this._initializeChildren();
      if (!this._config.parent) {
        this._addAriaAndCollapsedClass(this._triggerArray, this._isShown());
      }
      if (this._config.toggle) {
        this.toggle();
      }
    }
    static get Default() {
      return dt;
    }
    static get DefaultType() {
      return ft;
    }
    static get NAME() {
      return "collapse";
    }
    toggle() {
      if (this._isShown()) {
        this.hide();
      } else {
        this.show();
      }
    }
    show() {
      if (this._isTransitioning || this._isShown()) {
        return;
      }
      let s = [];
      if (this._config.parent) {
        s = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(t => t !== this._element).map(t => pt.getOrCreateInstance(t, {
          toggle: false
        }));
      }
      if (s.length && s[0]._isTransitioning) {
        return;
      }
      if (L.trigger(this._element, "show.bs.collapse").defaultPrevented) {
        return;
      }
      for (const t of s) {
        t.hide();
      }
      const n = this._getDimension();
      this._element.classList.remove(lt);
      this._element.classList.add(ht);
      this._element.style[n] = 0;
      this._addAriaAndCollapsedClass(this._triggerArray, true);
      this._isTransitioning = true;
      const i = "scroll" + (n[0].toUpperCase() + n.slice(1));
      this._queueCallback(() => {
        this._isTransitioning = false;
        this._element.classList.remove(ht);
        this._element.classList.add(lt, ct);
        this._element.style[n] = "";
        L.trigger(this._element, "shown.bs.collapse");
      }, this._element, true);
      this._element.style[n] = this._element[i] + "px";
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) {
        return;
      }
      if (L.trigger(this._element, "hide.bs.collapse").defaultPrevented) {
        return;
      }
      const s = this._getDimension();
      this._element.style[s] = this._element.getBoundingClientRect()[s] + "px";
      d(this._element);
      this._element.classList.add(ht);
      this._element.classList.remove(lt, ct);
      for (const t of this._triggerArray) {
        const s = q.getElementFromSelector(t);
        if (s && !this._isShown(s)) {
          this._addAriaAndCollapsedClass([t], false);
        }
      }
      this._isTransitioning = true;
      this._element.style[s] = "";
      this._queueCallback(() => {
        this._isTransitioning = false;
        this._element.classList.remove(ht);
        this._element.classList.add(lt);
        L.trigger(this._element, "hidden.bs.collapse");
      }, this._element, true);
    }
    _isShown(e = this._element) {
      return e.classList.contains(ct);
    }
    _configAfterMerge(e) {
      e.toggle = Boolean(e.toggle);
      e.parent = a(e.parent);
      return e;
    }
    _getDimension() {
      if (this._element.classList.contains("collapse-horizontal")) {
        return "width";
      } else {
        return "height";
      }
    }
    _initializeChildren() {
      if (!this._config.parent) {
        return;
      }
      const s = this._getFirstLevelChildren(ut);
      for (const t of s) {
        const s = q.getElementFromSelector(t);
        if (s) {
          this._addAriaAndCollapsedClass([t], this._isShown(s));
        }
      }
    }
    _getFirstLevelChildren(e) {
      const n = q.find(":scope .collapse .collapse", this._config.parent);
      return q.find(e, this._config.parent).filter(t => !n.includes(t));
    }
    _addAriaAndCollapsedClass(e, s) {
      if (e.length) {
        for (const t of e) {
          t.classList.toggle("collapsed", !s);
          t.setAttribute("aria-expanded", s);
        }
      }
    }
    static jQueryInterface(e) {
      const n = {};
      if (typeof e == "string" && /show|hide/.test(e)) {
        n.toggle = false;
      }
      return this.each(function () {
        const i = pt.getOrCreateInstance(this, n);
        if (typeof e == "string") {
          if (i[e] === undefined) {
            throw new TypeError("No method named \"" + e + "\"");
          }
          i[e]();
        }
      });
    }
  }
  L.on(document, "click.bs.collapse.data-api", ut, function (e) {
    if (e.target.tagName === "A" || e.delegateTarget && e.delegateTarget.tagName === "A") {
      e.preventDefault();
    }
    for (const t of q.getMultipleElementsFromSelector(this)) {
      pt.getOrCreateInstance(t, {
        toggle: false
      }).toggle();
    }
  });
  b(pt);
  var mt = "top";
  var bt = "bottom";
  var gt = "right";
  var vt = "left";
  var _t = "auto";
  var yt = [mt, bt, gt, vt];
  var wt = "start";
  var xt = "end";
  var Et = "clippingParents";
  var Tt = "viewport";
  var At = "popper";
  var Ot = "reference";
  var Ct = yt.reduce(function (t, e) {
    return t.concat([e + "-" + wt, e + "-" + xt]);
  }, []);
  var kt = [].concat(yt, [_t]).reduce(function (e, s) {
    return e.concat([s, s + "-" + wt, s + "-" + xt]);
  }, []);
  var St = "beforeRead";
  var jt = "read";
  var It = "afterRead";
  var Pt = "beforeMain";
  var Mt = "main";
  var Dt = "afterMain";
  var Lt = "beforeWrite";
  var Nt = "write";
  var Ft = "afterWrite";
  var Bt = [St, jt, It, Pt, Mt, Dt, Lt, Nt, Ft];
  function zt(e) {
    if (e) {
      return (e.nodeName || "").toLowerCase();
    } else {
      return null;
    }
  }
  function Rt(e) {
    if (e == null) {
      return window;
    }
    if (e.toString() !== "[object Window]") {
      var n = e.ownerDocument;
      return n && n.defaultView || window;
    }
    return e;
  }
  function Ht(e) {
    return e instanceof Rt(e).Element || e instanceof Element;
  }
  function Wt(e) {
    return e instanceof Rt(e).HTMLElement || e instanceof HTMLElement;
  }
  function qt(e) {
    return typeof ShadowRoot != "undefined" && (e instanceof Rt(e).ShadowRoot || e instanceof ShadowRoot);
  }
  const Vt = {
    name: "applyStyles",
    enabled: true,
    phase: "write",
    fn: function (e) {
      var n = e.state;
      Object.keys(n.elements).forEach(function (t) {
        var i = n.styles[t] || {};
        var o = n.attributes[t] || {};
        var r = n.elements[t];
        if (Wt(r) && zt(r)) {
          Object.assign(r.style, i);
          Object.keys(o).forEach(function (t) {
            var n = o[t];
            if (n === false) {
              r.removeAttribute(t);
            } else {
              r.setAttribute(t, n === true ? "" : n);
            }
          });
        }
      });
    },
    effect: function (e) {
      var n = e.state;
      var i = {
        popper: {
          position: n.options.strategy,
          left: "0",
          top: "0",
          margin: "0"
        },
        arrow: {
          position: "absolute"
        },
        reference: {}
      };
      Object.assign(n.elements.popper.style, i.popper);
      n.styles = i;
      if (n.elements.arrow) {
        Object.assign(n.elements.arrow.style, i.arrow);
      }
      return function () {
        Object.keys(n.elements).forEach(function (e) {
          var o = n.elements[e];
          var r = n.attributes[e] || {};
          var a = Object.keys(n.styles.hasOwnProperty(e) ? n.styles[e] : i[e]).reduce(function (t, e) {
            t[e] = "";
            return t;
          }, {});
          if (Wt(o) && zt(o)) {
            Object.assign(o.style, a);
            Object.keys(r).forEach(function (t) {
              o.removeAttribute(t);
            });
          }
        });
      };
    },
    requires: ["computeStyles"]
  };
  function Ut(e) {
    return e.split("-")[0];
  }
  var Kt = Math.max;
  var Qt = Math.min;
  var Xt = Math.round;
  function Gt() {
    var s = navigator.userAgentData;
    if (s != null && s.brands && Array.isArray(s.brands)) {
      return s.brands.map(function (t) {
        return t.brand + "/" + t.version;
      }).join(" ");
    } else {
      return navigator.userAgent;
    }
  }
  function Yt() {
    return !/^((?!chrome|android).)*safari/i.test(Gt());
  }
  function Jt(e, s, n) {
    if (s === undefined) {
      s = false;
    }
    if (n === undefined) {
      n = false;
    }
    var o = e.getBoundingClientRect();
    var r = 1;
    var a = 1;
    if (s && Wt(e)) {
      r = e.offsetWidth > 0 && Xt(o.width) / e.offsetWidth || 1;
      a = e.offsetHeight > 0 && Xt(o.height) / e.offsetHeight || 1;
    }
    var c = (Ht(e) ? Rt(e) : window).visualViewport;
    var l = !Yt() && n;
    var h = (o.left + (l && c ? c.offsetLeft : 0)) / r;
    var u = (o.top + (l && c ? c.offsetTop : 0)) / a;
    var d = o.width / r;
    var f = o.height / a;
    return {
      width: d,
      height: f,
      top: u,
      right: h + d,
      bottom: u + f,
      left: h,
      x: h,
      y: u
    };
  }
  function $t(e) {
    var n = Jt(e);
    var i = e.offsetWidth;
    var o = e.offsetHeight;
    if (Math.abs(n.width - i) <= 1) {
      i = n.width;
    }
    if (Math.abs(n.height - o) <= 1) {
      o = n.height;
    }
    return {
      x: e.offsetLeft,
      y: e.offsetTop,
      width: i,
      height: o
    };
  }
  function Zt(e, s) {
    var i = s.getRootNode && s.getRootNode();
    if (e.contains(s)) {
      return true;
    }
    if (i && qt(i)) {
      var o = s;
      do {
        if (o && e.isSameNode(o)) {
          return true;
        }
        o = o.parentNode || o.host;
      } while (o);
    }
    return false;
  }
  function te(e) {
    return Rt(e).getComputedStyle(e);
  }
  function ee(e) {
    return ["table", "td", "th"].indexOf(zt(e)) >= 0;
  }
  function se(e) {
    return ((Ht(e) ? e.ownerDocument : e.document) || window.document).documentElement;
  }
  function ne(e) {
    if (zt(e) === "html") {
      return e;
    } else {
      return e.assignedSlot || e.parentNode || (qt(e) ? e.host : null) || se(e);
    }
  }
  function ie(e) {
    if (Wt(e) && te(e).position !== "fixed") {
      return e.offsetParent;
    } else {
      return null;
    }
  }
  function oe(e) {
    for (var n = Rt(e), i = ie(e); i && ee(i) && te(i).position === "static";) {
      i = ie(i);
    }
    if (i && (zt(i) === "html" || zt(i) === "body" && te(i).position === "static")) {
      return n;
    } else {
      return i || function (t) {
        var n = /firefox/i.test(Gt());
        if (/Trident/i.test(Gt()) && Wt(t) && te(t).position === "fixed") {
          return null;
        }
        var i = ne(t);
        for (qt(i) && (i = i.host); Wt(i) && ["html", "body"].indexOf(zt(i)) < 0;) {
          var o = te(i);
          if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || n && o.willChange === "filter" || n && o.filter && o.filter !== "none") {
            return i;
          }
          i = i.parentNode;
        }
        return null;
      }(e) || n;
    }
  }
  function re(e) {
    if (["top", "bottom"].indexOf(e) >= 0) {
      return "x";
    } else {
      return "y";
    }
  }
  function ae(t, e, s) {
    return Kt(t, Qt(e, s));
  }
  function ce(e) {
    return Object.assign({}, {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }, e);
  }
  function le(e, s) {
    return s.reduce(function (t, s) {
      t[s] = e;
      return t;
    }, {});
  }
  const he = {
    name: "arrow",
    enabled: true,
    phase: "main",
    fn: function (e) {
      var n;
      var i = e.state;
      var o = e.name;
      var r = e.options;
      var a = i.elements.arrow;
      var c = i.modifiersData.popperOffsets;
      var l = Ut(i.placement);
      var h = re(l);
      var u = [vt, gt].indexOf(l) >= 0 ? "height" : "width";
      if (a && c) {
        var d = function (t, e) {
          return ce(typeof (t = typeof t == "function" ? t(Object.assign({}, e.rects, {
            placement: e.placement
          })) : t) != "number" ? t : le(t, yt));
        }(r.padding, i);
        var f = $t(a);
        var p = h === "y" ? mt : vt;
        var m = h === "y" ? bt : gt;
        var b = i.rects.reference[u] + i.rects.reference[h] - c[h] - i.rects.popper[u];
        var g = c[h] - i.rects.reference[h];
        var v = oe(a);
        var _ = v ? h === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0;
        var y = b / 2 - g / 2;
        var w = d[p];
        var x = _ - f[u] - d[m];
        var E = _ / 2 - f[u] / 2 + y;
        var T = ae(w, E, x);
        var A = h;
        i.modifiersData[o] = ((n = {})[A] = T, n.centerOffset = T - E, n);
      }
    },
    effect: function (e) {
      var n = e.state;
      var i = e.options.element;
      var o = i === undefined ? "[data-popper-arrow]" : i;
      if (o != null && (typeof o != "string" || (o = n.elements.popper.querySelector(o))) && Zt(n.elements.popper, o)) {
        n.elements.arrow = o;
      }
    },
    requires: ["popperOffsets"],
    requiresIfExists: ["preventOverflow"]
  };
  function ue(t) {
    return t.split("-")[1];
  }
  var de = {
    top: "auto",
    right: "auto",
    bottom: "auto",
    left: "auto"
  };
  function fe(e) {
    var n;
    var i = e.popper;
    var o = e.popperRect;
    var r = e.placement;
    var a = e.variation;
    var c = e.offsets;
    var l = e.position;
    var h = e.gpuAcceleration;
    var u = e.adaptive;
    var d = e.roundOffsets;
    var f = e.isFixed;
    var p = c.x;
    var m = p === undefined ? 0 : p;
    var b = c.y;
    var g = b === undefined ? 0 : b;
    var v = typeof d == "function" ? d({
      x: m,
      y: g
    }) : {
      x: m,
      y: g
    };
    m = v.x;
    g = v.y;
    var _ = c.hasOwnProperty("x");
    var y = c.hasOwnProperty("y");
    var w = vt;
    var x = mt;
    var E = window;
    if (u) {
      var T = oe(i);
      var A = "clientHeight";
      var O = "clientWidth";
      if (T === Rt(i) && te(T = se(i)).position !== "static" && l === "absolute") {
        A = "scrollHeight";
        O = "scrollWidth";
      }
      if (r === mt || (r === vt || r === gt) && a === xt) {
        x = bt;
        g -= (f && T === E && E.visualViewport ? E.visualViewport.height : T[A]) - o.height;
        g *= h ? 1 : -1;
      }
      if (r === vt || (r === mt || r === bt) && a === xt) {
        w = gt;
        m -= (f && T === E && E.visualViewport ? E.visualViewport.width : T[O]) - o.width;
        m *= h ? 1 : -1;
      }
    }
    var C;
    var k;
    var S;
    var j;
    var I;
    var P;
    var M = Object.assign({
      position: l
    }, u && de);
    var D = d === true ? (k = {
      x: m,
      y: g
    }, S = Rt(i), j = k.x, I = k.y, P = S.devicePixelRatio || 1, {
      x: Xt(j * P) / P || 0,
      y: Xt(I * P) / P || 0
    }) : {
      x: m,
      y: g
    };
    m = D.x;
    g = D.y;
    if (h) {
      return Object.assign({}, M, ((C = {})[x] = y ? "0" : "", C[w] = _ ? "0" : "", C.transform = (E.devicePixelRatio || 1) <= 1 ? "translate(" + m + "px, " + g + "px)" : "translate3d(" + m + "px, " + g + "px, 0)", C));
    } else {
      return Object.assign({}, M, ((n = {})[x] = y ? g + "px" : "", n[w] = _ ? m + "px" : "", n.transform = "", n));
    }
  }
  const pe = {
    name: "computeStyles",
    enabled: true,
    phase: "beforeWrite",
    fn: function (e) {
      var n = e.state;
      var i = e.options;
      var o = i.gpuAcceleration;
      var r = o === undefined || o;
      var a = i.adaptive;
      var c = a === undefined || a;
      var l = i.roundOffsets;
      var h = l === undefined || l;
      var u = {
        placement: Ut(n.placement),
        variation: ue(n.placement),
        popper: n.elements.popper,
        popperRect: n.rects.popper,
        gpuAcceleration: r,
        isFixed: n.options.strategy === "fixed"
      };
      if (n.modifiersData.popperOffsets != null) {
        n.styles.popper = Object.assign({}, n.styles.popper, fe(Object.assign({}, u, {
          offsets: n.modifiersData.popperOffsets,
          position: n.options.strategy,
          adaptive: c,
          roundOffsets: h
        })));
      }
      if (n.modifiersData.arrow != null) {
        n.styles.arrow = Object.assign({}, n.styles.arrow, fe(Object.assign({}, u, {
          offsets: n.modifiersData.arrow,
          position: "absolute",
          adaptive: false,
          roundOffsets: h
        })));
      }
      n.attributes.popper = Object.assign({}, n.attributes.popper, {
        "data-popper-placement": n.placement
      });
    },
    data: {}
  };
  var me = {
    passive: true
  };
  const be = {
    name: "eventListeners",
    enabled: true,
    phase: "write",
    fn: function () {},
    effect: function (e) {
      var n = e.state;
      var i = e.instance;
      var o = e.options;
      var r = o.scroll;
      var a = r === undefined || r;
      var c = o.resize;
      var l = c === undefined || c;
      var h = Rt(n.elements.popper);
      var u = [].concat(n.scrollParents.reference, n.scrollParents.popper);
      if (a) {
        u.forEach(function (t) {
          t.addEventListener("scroll", i.update, me);
        });
      }
      if (l) {
        h.addEventListener("resize", i.update, me);
      }
      return function () {
        if (a) {
          u.forEach(function (e) {
            e.removeEventListener("scroll", i.update, me);
          });
        }
        if (l) {
          h.removeEventListener("resize", i.update, me);
        }
      };
    },
    data: {}
  };
  var ge = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
  function ve(e) {
    return e.replace(/left|right|bottom|top/g, function (t) {
      return ge[t];
    });
  }
  var _e = {
    start: "end",
    end: "start"
  };
  function ye(e) {
    return e.replace(/start|end/g, function (t) {
      return _e[t];
    });
  }
  function we(e) {
    var n = Rt(e);
    return {
      scrollLeft: n.pageXOffset,
      scrollTop: n.pageYOffset
    };
  }
  function xe(e) {
    return Jt(se(e)).left + we(e).scrollLeft;
  }
  function Ee(e) {
    var n = te(e);
    var i = n.overflow;
    var o = n.overflowX;
    var r = n.overflowY;
    return /auto|scroll|overlay|hidden/.test(i + r + o);
  }
  function Te(e) {
    if (["html", "body", "#document"].indexOf(zt(e)) >= 0) {
      return e.ownerDocument.body;
    } else if (Wt(e) && Ee(e)) {
      return e;
    } else {
      return Te(ne(e));
    }
  }
  function Ae(e, s) {
    var i;
    if (s === undefined) {
      s = [];
    }
    var o = Te(e);
    var r = o === ((i = e.ownerDocument) == null ? undefined : i.body);
    var a = Rt(o);
    var c = r ? [a].concat(a.visualViewport || [], Ee(o) ? o : []) : o;
    var l = s.concat(c);
    if (r) {
      return l;
    } else {
      return l.concat(Ae(ne(c)));
    }
  }
  function Oe(e) {
    return Object.assign({}, e, {
      left: e.x,
      top: e.y,
      right: e.x + e.width,
      bottom: e.y + e.height
    });
  }
  function Ce(t, e, s) {
    if (e === Tt) {
      return Oe(function (t, e) {
        var n = Rt(t);
        var i = se(t);
        var o = n.visualViewport;
        var r = i.clientWidth;
        var a = i.clientHeight;
        var c = 0;
        var l = 0;
        if (o) {
          r = o.width;
          a = o.height;
          var h = Yt();
          if (h || !h && e === "fixed") {
            c = o.offsetLeft;
            l = o.offsetTop;
          }
        }
        return {
          width: r,
          height: a,
          x: c + xe(t),
          y: l
        };
      }(t, s));
    } else if (Ht(e)) {
      return function (t, e) {
        var n = Jt(t, false, e === "fixed");
        n.top = n.top + t.clientTop;
        n.left = n.left + t.clientLeft;
        n.bottom = n.top + t.clientHeight;
        n.right = n.left + t.clientWidth;
        n.width = t.clientWidth;
        n.height = t.clientHeight;
        n.x = n.left;
        n.y = n.top;
        return n;
      }(e, s);
    } else {
      return Oe(function (t) {
        var s;
        var n = se(t);
        var i = we(t);
        var o = (s = t.ownerDocument) == null ? undefined : s.body;
        var r = Kt(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0);
        var a = Kt(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0);
        var c = -i.scrollLeft + xe(t);
        var l = -i.scrollTop;
        if (te(o || n).direction === "rtl") {
          c += Kt(n.clientWidth, o ? o.clientWidth : 0) - r;
        }
        return {
          width: r,
          height: a,
          x: c,
          y: l
        };
      }(se(t)));
    }
  }
  function ke(e) {
    var n;
    var i = e.reference;
    var o = e.element;
    var r = e.placement;
    var a = r ? Ut(r) : null;
    var c = r ? ue(r) : null;
    var l = i.x + i.width / 2 - o.width / 2;
    var h = i.y + i.height / 2 - o.height / 2;
    switch (a) {
      case mt:
        n = {
          x: l,
          y: i.y - o.height
        };
        break;
      case bt:
        n = {
          x: l,
          y: i.y + i.height
        };
        break;
      case gt:
        n = {
          x: i.x + i.width,
          y: h
        };
        break;
      case vt:
        n = {
          x: i.x - o.width,
          y: h
        };
        break;
      default:
        n = {
          x: i.x,
          y: i.y
        };
    }
    var u = a ? re(a) : null;
    if (u != null) {
      var d = u === "y" ? "height" : "width";
      switch (c) {
        case wt:
          n[u] = n[u] - (i[d] / 2 - o[d] / 2);
          break;
        case xt:
          n[u] = n[u] + (i[d] / 2 - o[d] / 2);
      }
    }
    return n;
  }
  function Se(e, s) {
    if (s === undefined) {
      s = {};
    }
    var i = s;
    var o = i.placement;
    var r = o === undefined ? e.placement : o;
    var a = i.strategy;
    var c = a === undefined ? e.strategy : a;
    var l = i.boundary;
    var h = l === undefined ? Et : l;
    var u = i.rootBoundary;
    var d = u === undefined ? Tt : u;
    var f = i.elementContext;
    var p = f === undefined ? At : f;
    var m = i.altBoundary;
    var b = m !== undefined && m;
    var g = i.padding;
    var v = g === undefined ? 0 : g;
    var _ = ce(typeof v != "number" ? v : le(v, yt));
    var y = p === At ? Ot : At;
    var w = e.rects.popper;
    var x = e.elements[b ? y : p];
    var E = function (t, e, s, i) {
      var r = e === "clippingParents" ? function (t) {
        var s = Ae(ne(t));
        var n = ["absolute", "fixed"].indexOf(te(t).position) >= 0 && Wt(t) ? oe(t) : t;
        if (Ht(n)) {
          return s.filter(function (t) {
            return Ht(t) && Zt(t, n) && zt(t) !== "body";
          });
        } else {
          return [];
        }
      }(t) : [].concat(e);
      var a = [].concat(r, [s]);
      var c = a[0];
      var l = a.reduce(function (e, s) {
        var r = Ce(t, s, i);
        e.top = Kt(r.top, e.top);
        e.right = Qt(r.right, e.right);
        e.bottom = Qt(r.bottom, e.bottom);
        e.left = Kt(r.left, e.left);
        return e;
      }, Ce(t, c, i));
      l.width = l.right - l.left;
      l.height = l.bottom - l.top;
      l.x = l.left;
      l.y = l.top;
      return l;
    }(Ht(x) ? x : x.contextElement || se(e.elements.popper), h, d, c);
    var T = Jt(e.elements.reference);
    var A = ke({
      reference: T,
      element: w,
      strategy: "absolute",
      placement: r
    });
    var O = Oe(Object.assign({}, w, A));
    var C = p === At ? O : T;
    var k = {
      top: E.top - C.top + _.top,
      bottom: C.bottom - E.bottom + _.bottom,
      left: E.left - C.left + _.left,
      right: C.right - E.right + _.right
    };
    var S = e.modifiersData.offset;
    if (p === At && S) {
      var j = S[r];
      Object.keys(k).forEach(function (t) {
        var s = [gt, bt].indexOf(t) >= 0 ? 1 : -1;
        var i = [mt, bt].indexOf(t) >= 0 ? "y" : "x";
        k[t] += j[i] * s;
      });
    }
    return k;
  }
  const je = {
    name: "flip",
    enabled: true,
    phase: "main",
    fn: function (e) {
      var n = e.state;
      var i = e.options;
      var o = e.name;
      if (!n.modifiersData[o]._skip) {
        for (var r = i.mainAxis, a = r === undefined || r, c = i.altAxis, l = c === undefined || c, h = i.fallbackPlacements, u = i.padding, d = i.boundary, f = i.rootBoundary, p = i.altBoundary, m = i.flipVariations, b = m === undefined || m, g = i.allowedAutoPlacements, v = n.options.placement, _ = Ut(v), y = h || (_ !== v && b ? function (t) {
            if (Ut(t) === _t) {
              return [];
            }
            var e = ve(t);
            return [ye(t), e, ye(e)];
          }(v) : [ve(v)]), w = [v].concat(y).reduce(function (t, e) {
            return t.concat(Ut(e) === _t ? function (t, e) {
              if (e === undefined) {
                e = {};
              }
              var n = e;
              var o = n.placement;
              var r = n.boundary;
              var a = n.rootBoundary;
              var c = n.padding;
              var l = n.flipVariations;
              var h = n.allowedAutoPlacements;
              var u = h === undefined ? kt : h;
              var d = ue(o);
              var f = d ? l ? Ct : Ct.filter(function (t) {
                return ue(t) === d;
              }) : yt;
              var p = f.filter(function (t) {
                return u.indexOf(t) >= 0;
              });
              if (p.length === 0) {
                p = f;
              }
              var m = p.reduce(function (e, s) {
                e[s] = Se(t, {
                  placement: s,
                  boundary: r,
                  rootBoundary: a,
                  padding: c
                })[Ut(s)];
                return e;
              }, {});
              return Object.keys(m).sort(function (t, e) {
                return m[t] - m[e];
              });
            }(n, {
              placement: e,
              boundary: d,
              rootBoundary: f,
              padding: u,
              flipVariations: b,
              allowedAutoPlacements: g
            }) : e);
          }, []), x = n.rects.reference, E = n.rects.popper, T = new Map(), A = true, O = w[0], C = 0; C < w.length; C++) {
          var k = w[C];
          var S = Ut(k);
          var j = ue(k) === wt;
          var I = [mt, bt].indexOf(S) >= 0;
          var P = I ? "width" : "height";
          var M = Se(n, {
            placement: k,
            boundary: d,
            rootBoundary: f,
            altBoundary: p,
            padding: u
          });
          var D = I ? j ? gt : vt : j ? bt : mt;
          if (x[P] > E[P]) {
            D = ve(D);
          }
          var L = ve(D);
          var N = [];
          if (a) {
            N.push(M[S] <= 0);
          }
          if (l) {
            N.push(M[D] <= 0, M[L] <= 0);
          }
          if (N.every(function (t) {
            return t;
          })) {
            O = k;
            A = false;
            break;
          }
          T.set(k, N);
        }
        if (A) {
          for (var F = function (t) {
              var n = w.find(function (s) {
                var i = T.get(s);
                if (i) {
                  return i.slice(0, t).every(function (t) {
                    return t;
                  });
                }
              });
              if (n) {
                O = n;
                return "break";
              }
            }, B = b ? 3 : 1; B > 0 && F(B) !== "break"; B--);
        }
        if (n.placement !== O) {
          n.modifiersData[o]._skip = true;
          n.placement = O;
          n.reset = true;
        }
      }
    },
    requiresIfExists: ["offset"],
    data: {
      _skip: false
    }
  };
  function Ie(e, s, n) {
    if (n === undefined) {
      n = {
        x: 0,
        y: 0
      };
    }
    return {
      top: e.top - s.height - n.y,
      right: e.right - s.width + n.x,
      bottom: e.bottom - s.height + n.y,
      left: e.left - s.width - n.x
    };
  }
  function Pe(e) {
    return [mt, gt, bt, vt].some(function (t) {
      return e[t] >= 0;
    });
  }
  const Me = {
    name: "hide",
    enabled: true,
    phase: "main",
    requiresIfExists: ["preventOverflow"],
    fn: function (e) {
      var n = e.state;
      var i = e.name;
      var o = n.rects.reference;
      var r = n.rects.popper;
      var a = n.modifiersData.preventOverflow;
      var c = Se(n, {
        elementContext: "reference"
      });
      var l = Se(n, {
        altBoundary: true
      });
      var h = Ie(c, o);
      var u = Ie(l, r, a);
      var d = Pe(h);
      var f = Pe(u);
      n.modifiersData[i] = {
        referenceClippingOffsets: h,
        popperEscapeOffsets: u,
        isReferenceHidden: d,
        hasPopperEscaped: f
      };
      n.attributes.popper = Object.assign({}, n.attributes.popper, {
        "data-popper-reference-hidden": d,
        "data-popper-escaped": f
      });
    }
  };
  const De = {
    name: "offset",
    enabled: true,
    phase: "main",
    requires: ["popperOffsets"],
    fn: function (e) {
      var n = e.state;
      var i = e.options;
      var o = e.name;
      var r = i.offset;
      var a = r === undefined ? [0, 0] : r;
      var c = kt.reduce(function (t, e) {
        t[e] = function (t, e, s) {
          var i = Ut(t);
          var o = [vt, mt].indexOf(i) >= 0 ? -1 : 1;
          var r = typeof s == "function" ? s(Object.assign({}, e, {
            placement: t
          })) : s;
          var a = r[0];
          var c = r[1];
          a = a || 0;
          c = (c || 0) * o;
          if ([vt, gt].indexOf(i) >= 0) {
            return {
              x: c,
              y: a
            };
          } else {
            return {
              x: a,
              y: c
            };
          }
        }(e, n.rects, a);
        return t;
      }, {});
      var l = c[n.placement];
      var h = l.x;
      var u = l.y;
      if (n.modifiersData.popperOffsets != null) {
        n.modifiersData.popperOffsets.x += h;
        n.modifiersData.popperOffsets.y += u;
      }
      n.modifiersData[o] = c;
    }
  };
  const Le = {
    name: "popperOffsets",
    enabled: true,
    phase: "read",
    fn: function (e) {
      var n = e.state;
      var i = e.name;
      n.modifiersData[i] = ke({
        reference: n.rects.reference,
        element: n.rects.popper,
        strategy: "absolute",
        placement: n.placement
      });
    },
    data: {}
  };
  const Ne = {
    name: "preventOverflow",
    enabled: true,
    phase: "main",
    fn: function (e) {
      var n;
      var i;
      var o = e.state;
      var r = e.options;
      var a = e.name;
      var c = r.mainAxis;
      var l = c === undefined || c;
      var h = r.altAxis;
      var u = h !== undefined && h;
      var d = r.boundary;
      var f = r.rootBoundary;
      var p = r.altBoundary;
      var m = r.padding;
      var b = r.tether;
      var g = b === undefined || b;
      var v = r.tetherOffset;
      var _ = v === undefined ? 0 : v;
      var y = Se(o, {
        boundary: d,
        rootBoundary: f,
        padding: m,
        altBoundary: p
      });
      var w = Ut(o.placement);
      var x = ue(o.placement);
      var E = !x;
      var T = re(w);
      var A = T === "x" ? "y" : "x";
      var O = o.modifiersData.popperOffsets;
      var C = o.rects.reference;
      var k = o.rects.popper;
      var S = typeof _ == "function" ? _(Object.assign({}, o.rects, {
        placement: o.placement
      })) : _;
      var j = typeof S == "number" ? {
        mainAxis: S,
        altAxis: S
      } : Object.assign({
        mainAxis: 0,
        altAxis: 0
      }, S);
      var I = o.modifiersData.offset ? o.modifiersData.offset[o.placement] : null;
      var P = {
        x: 0,
        y: 0
      };
      if (O) {
        if (l) {
          var D = T === "y" ? mt : vt;
          var L = T === "y" ? bt : gt;
          var N = T === "y" ? "height" : "width";
          var F = O[T];
          var B = F + y[D];
          var z = F - y[L];
          var R = g ? -k[N] / 2 : 0;
          var H = x === wt ? C[N] : k[N];
          var W = x === wt ? -k[N] : -C[N];
          var q = o.elements.arrow;
          var V = g && q ? $t(q) : {
            width: 0,
            height: 0
          };
          var U = o.modifiersData["arrow#persistent"] ? o.modifiersData["arrow#persistent"].padding : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          };
          var K = U[D];
          var Q = U[L];
          var X = ae(0, C[N], V[N]);
          var G = E ? C[N] / 2 - R - X - K - j.mainAxis : H - X - K - j.mainAxis;
          var Y = E ? -C[N] / 2 + R + X + Q + j.mainAxis : W + X + Q + j.mainAxis;
          var J = o.elements.arrow && oe(o.elements.arrow);
          var $ = J ? T === "y" ? J.clientTop || 0 : J.clientLeft || 0 : 0;
          var Z = (I == null ? undefined : I[T]) ?? 0;
          var tt = F + Y - Z;
          var et = ae(g ? Qt(B, F + G - Z - $) : B, F, g ? Kt(z, tt) : z);
          O[T] = et;
          P[T] = et - F;
        }
        if (u) {
          var nt = T === "x" ? mt : vt;
          var it = T === "x" ? bt : gt;
          var ot = O[A];
          var rt = A === "y" ? "height" : "width";
          var at = ot + y[nt];
          var ct = ot - y[it];
          var lt = [mt, vt].indexOf(w) !== -1;
          var ht = (I == null ? undefined : I[A]) ?? 0;
          var ut = lt ? at : ot - C[rt] - k[rt] - ht + j.altAxis;
          var dt = lt ? ot + C[rt] + k[rt] - ht - j.altAxis : ct;
          var ft = g && lt ? (i = ae(ut, ot, n = dt)) > n ? n : i : ae(g ? ut : at, ot, g ? dt : ct);
          O[A] = ft;
          P[A] = ft - ot;
        }
        o.modifiersData[a] = P;
      }
    },
    requiresIfExists: ["offset"]
  };
  function Fe(e, s, n) {
    if (n === undefined) {
      n = false;
    }
    var o;
    var r;
    var a = Wt(s);
    var c = Wt(s) && function (t) {
      var s = t.getBoundingClientRect();
      var n = Xt(s.width) / t.offsetWidth || 1;
      var i = Xt(s.height) / t.offsetHeight || 1;
      return n !== 1 || i !== 1;
    }(s);
    var l = se(s);
    var h = Jt(e, c, n);
    var u = {
      scrollLeft: 0,
      scrollTop: 0
    };
    var d = {
      x: 0,
      y: 0
    };
    if (a || !a && !n) {
      if (zt(s) !== "body" || Ee(l)) {
        u = (o = s) !== Rt(o) && Wt(o) ? {
          scrollLeft: (r = o).scrollLeft,
          scrollTop: r.scrollTop
        } : we(o);
      }
      if (Wt(s)) {
        (d = Jt(s, true)).x += s.clientLeft;
        d.y += s.clientTop;
      } else if (l) {
        d.x = xe(l);
      }
    }
    return {
      x: h.left + u.scrollLeft - d.x,
      y: h.top + u.scrollTop - d.y,
      width: h.width,
      height: h.height
    };
  }
  function Be(e) {
    var n = new Map();
    var i = new Set();
    var o = [];
    function r(t) {
      i.add(t.name);
      [].concat(t.requires || [], t.requiresIfExists || []).forEach(function (t) {
        if (!i.has(t)) {
          var s = n.get(t);
          if (s) {
            r(s);
          }
        }
      });
      o.push(t);
    }
    e.forEach(function (t) {
      n.set(t.name, t);
    });
    e.forEach(function (t) {
      if (!i.has(t.name)) {
        r(t);
      }
    });
    return o;
  }
  var ze = {
    placement: "bottom",
    modifiers: [],
    strategy: "absolute"
  };
  function Re() {
    for (var s = arguments.length, n = new Array(s), i = 0; i < s; i++) {
      n[i] = arguments[i];
    }
    return !n.some(function (t) {
      return !t || typeof t.getBoundingClientRect != "function";
    });
  }
  function He(e) {
    if (e === undefined) {
      e = {};
    }
    var n = e;
    var i = n.defaultModifiers;
    var o = i === undefined ? [] : i;
    var r = n.defaultOptions;
    var a = r === undefined ? ze : r;
    return function (t, e, n) {
      if (n === undefined) {
        n = a;
      }
      var r;
      var c;
      var l = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, ze, a),
        modifiersData: {},
        elements: {
          reference: t,
          popper: e
        },
        attributes: {},
        styles: {}
      };
      var h = [];
      var u = false;
      var d = {
        state: l,
        setOptions: function (s) {
          var r = typeof s == "function" ? s(l.options) : s;
          f();
          l.options = Object.assign({}, a, l.options, r);
          l.scrollParents = {
            reference: Ht(t) ? Ae(t) : t.contextElement ? Ae(t.contextElement) : [],
            popper: Ae(e)
          };
          var c;
          var u;
          var p = function (t) {
            var s = Be(t);
            return Bt.reduce(function (t, n) {
              return t.concat(s.filter(function (t) {
                return t.phase === n;
              }));
            }, []);
          }((c = [].concat(o, l.options.modifiers), u = c.reduce(function (t, e) {
            var i = t[e.name];
            t[e.name] = i ? Object.assign({}, i, e, {
              options: Object.assign({}, i.options, e.options),
              data: Object.assign({}, i.data, e.data)
            }) : e;
            return t;
          }, {}), Object.keys(u).map(function (t) {
            return u[t];
          })));
          l.orderedModifiers = p.filter(function (t) {
            return t.enabled;
          });
          l.orderedModifiers.forEach(function (t) {
            var s = t.name;
            var i = t.options;
            var o = i === undefined ? {} : i;
            var r = t.effect;
            if (typeof r == "function") {
              var a = r({
                state: l,
                name: s,
                instance: d,
                options: o
              });
              h.push(a || function () {});
            }
          });
          return d.update();
        },
        forceUpdate: function () {
          if (!u) {
            var e = l.elements;
            var s = e.reference;
            var n = e.popper;
            if (Re(s, n)) {
              l.rects = {
                reference: Fe(s, oe(n), l.options.strategy === "fixed"),
                popper: $t(n)
              };
              l.reset = false;
              l.placement = l.options.placement;
              l.orderedModifiers.forEach(function (e) {
                return l.modifiersData[e.name] = Object.assign({}, e.data);
              });
              for (var o = 0; o < l.orderedModifiers.length; o++) {
                if (l.reset !== true) {
                  var r = l.orderedModifiers[o];
                  var a = r.fn;
                  var c = r.options;
                  var h = c === undefined ? {} : c;
                  var f = r.name;
                  if (typeof a == "function") {
                    l = a({
                      state: l,
                      options: h,
                      name: f,
                      instance: d
                    }) || l;
                  }
                } else {
                  l.reset = false;
                  o = -1;
                }
              }
            }
          }
        },
        update: (r = function () {
          return new Promise(function (t) {
            d.forceUpdate();
            t(l);
          });
        }, function () {
          c ||= new Promise(function (t) {
            Promise.resolve().then(function () {
              c = undefined;
              t(r());
            });
          });
          return c;
        }),
        destroy: function () {
          f();
          u = true;
        }
      };
      if (!Re(t, e)) {
        return d;
      }
      function f() {
        h.forEach(function (t) {
          return t();
        });
        h = [];
      }
      d.setOptions(n).then(function (t) {
        if (!u && n.onFirstUpdate) {
          n.onFirstUpdate(t);
        }
      });
      return d;
    };
  }
  var We = He();
  var qe = He({
    defaultModifiers: [be, Le, pe, Vt]
  });
  var Ve = He({
    defaultModifiers: [be, Le, pe, Vt, De, je, Ne, he, Me]
  });
  const Ue = Object.freeze(Object.defineProperty({
    __proto__: null,
    afterMain: Dt,
    afterRead: It,
    afterWrite: Ft,
    applyStyles: Vt,
    arrow: he,
    auto: _t,
    basePlacements: yt,
    beforeMain: Pt,
    beforeRead: St,
    beforeWrite: Lt,
    bottom: bt,
    clippingParents: Et,
    computeStyles: pe,
    createPopper: Ve,
    createPopperBase: We,
    createPopperLite: qe,
    detectOverflow: Se,
    end: xt,
    eventListeners: be,
    flip: je,
    hide: Me,
    left: vt,
    main: Mt,
    modifierPhases: Bt,
    offset: De,
    placements: kt,
    popper: At,
    popperGenerator: He,
    popperOffsets: Le,
    preventOverflow: Ne,
    read: jt,
    reference: Ot,
    right: gt,
    start: wt,
    top: mt,
    variationPlacements: Ct,
    viewport: Tt,
    write: Nt
  }, Symbol.toStringTag, {
    value: "Module"
  }));
  const Ke = "dropdown";
  const Qe = "ArrowUp";
  const Xe = "ArrowDown";
  const Ge = "click.bs.dropdown.data-api";
  const Ye = "keydown.bs.dropdown.data-api";
  const Je = "show";
  const $e = "[data-bs-toggle=\"dropdown\"]:not(.disabled):not(:disabled)";
  const Ze = $e + ".show";
  const ts = ".dropdown-menu";
  const es = m() ? "top-end" : "top-start";
  const ss = m() ? "top-start" : "top-end";
  const ns = m() ? "bottom-end" : "bottom-start";
  const is = m() ? "bottom-start" : "bottom-end";
  const os = m() ? "left-start" : "right-start";
  const rs = m() ? "right-start" : "left-start";
  const as = {
    autoClose: true,
    boundary: "clippingParents",
    display: "dynamic",
    offset: [0, 2],
    popperConfig: null,
    reference: "toggle"
  };
  const cs = {
    autoClose: "(boolean|string)",
    boundary: "(string|element)",
    display: "string",
    offset: "(array|string|function)",
    popperConfig: "(null|object|function)",
    reference: "(string|element|object)"
  };
  class ls extends H {
    constructor(e, s) {
      super(e, s);
      this._popper = null;
      this._parent = this._element.parentNode;
      this._menu = q.next(this._element, ts)[0] || q.prev(this._element, ts)[0] || q.findOne(ts, this._parent);
      this._inNavbar = this._detectNavbar();
    }
    static get Default() {
      return as;
    }
    static get DefaultType() {
      return cs;
    }
    static get NAME() {
      return Ke;
    }
    toggle() {
      if (this._isShown()) {
        return this.hide();
      } else {
        return this.show();
      }
    }
    show() {
      if (l(this._element) || this._isShown()) {
        return;
      }
      const s = {
        relatedTarget: this._element
      };
      if (!L.trigger(this._element, "show.bs.dropdown", s).defaultPrevented) {
        this._createPopper();
        if ("ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) {
          for (const t of [].concat(...document.body.children)) {
            L.on(t, "mouseover", u);
          }
        }
        this._element.focus();
        this._element.setAttribute("aria-expanded", true);
        this._menu.classList.add(Je);
        this._element.classList.add(Je);
        L.trigger(this._element, "shown.bs.dropdown", s);
      }
    }
    hide() {
      if (l(this._element) || !this._isShown()) {
        return;
      }
      const s = {
        relatedTarget: this._element
      };
      this._completeHide(s);
    }
    dispose() {
      if (this._popper) {
        this._popper.destroy();
      }
      super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar();
      if (this._popper) {
        this._popper.update();
      }
    }
    _completeHide(e) {
      if (!L.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented) {
        if ("ontouchstart" in document.documentElement) {
          for (const t of [].concat(...document.body.children)) {
            L.off(t, "mouseover", u);
          }
        }
        if (this._popper) {
          this._popper.destroy();
        }
        this._menu.classList.remove(Je);
        this._element.classList.remove(Je);
        this._element.setAttribute("aria-expanded", "false");
        z.removeDataAttribute(this._menu, "popper");
        L.trigger(this._element, "hidden.bs.dropdown", e);
      }
    }
    _getConfig(e) {
      if (typeof (e = super._getConfig(e)).reference == "object" && !r(e.reference) && typeof e.reference.getBoundingClientRect != "function") {
        throw new TypeError(Ke.toUpperCase() + ": Option \"reference\" provided type \"object\" without a required \"getBoundingClientRect\" method.");
      }
      return e;
    }
    _createPopper() {
      if (Ue === undefined) {
        throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      }
      let s = this._element;
      if (this._config.reference === "parent") {
        s = this._parent;
      } else if (r(this._config.reference)) {
        s = a(this._config.reference);
      } else if (typeof this._config.reference == "object") {
        s = this._config.reference;
      }
      const n = this._getPopperConfig();
      this._popper = Ve(s, this._menu, n);
    }
    _isShown() {
      return this._menu.classList.contains(Je);
    }
    _getPlacement() {
      const s = this._parent;
      if (s.classList.contains("dropend")) {
        return os;
      }
      if (s.classList.contains("dropstart")) {
        return rs;
      }
      if (s.classList.contains("dropup-center")) {
        return "top";
      }
      if (s.classList.contains("dropdown-center")) {
        return "bottom";
      }
      const n = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
      if (s.classList.contains("dropup")) {
        if (n) {
          return ss;
        } else {
          return es;
        }
      } else if (n) {
        return is;
      } else {
        return ns;
      }
    }
    _detectNavbar() {
      return this._element.closest(".navbar") !== null;
    }
    _getOffset() {
      const {
        offset: s
      } = this._config;
      if (typeof s == "string") {
        return s.split(",").map(t => Number.parseInt(t, 10));
      } else if (typeof s == "function") {
        return t => s(t, this._element);
      } else {
        return s;
      }
    }
    _getPopperConfig() {
      const s = {
        placement: this._getPlacement(),
        modifiers: [{
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }]
      };
      if (this._inNavbar || this._config.display === "static") {
        z.setDataAttribute(this._menu, "popper", "static");
        s.modifiers = [{
          name: "applyStyles",
          enabled: false
        }];
      }
      return {
        ...s,
        ...g(this._config.popperConfig, [s])
      };
    }
    _selectMenuItem({
      key: e,
      target: s
    }) {
      const i = q.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(t => c(t));
      if (i.length) {
        _(i, s, e === Xe, !i.includes(s)).focus();
      }
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const s = ls.getOrCreateInstance(this, t);
        if (typeof t == "string") {
          if (s[t] === undefined) {
            throw new TypeError("No method named \"" + t + "\"");
          }
          s[t]();
        }
      });
    }
    static clearMenus(e) {
      if (e.button === 2 || e.type === "keyup" && e.key !== "Tab") {
        return;
      }
      const n = q.find(Ze);
      for (const t of n) {
        const n = ls.getInstance(t);
        if (!n || n._config.autoClose === false) {
          continue;
        }
        const i = e.composedPath();
        const o = i.includes(n._menu);
        if (i.includes(n._element) || n._config.autoClose === "inside" && !o || n._config.autoClose === "outside" && o) {
          continue;
        }
        if (n._menu.contains(e.target) && (e.type === "keyup" && e.key === "Tab" || /input|select|option|textarea|form/i.test(e.target.tagName))) {
          continue;
        }
        const r = {
          relatedTarget: n._element
        };
        if (e.type === "click") {
          r.clickEvent = e;
        }
        n._completeHide(r);
      }
    }
    static dataApiKeydownHandler(e) {
      const n = /input|textarea/i.test(e.target.tagName);
      const i = e.key === "Escape";
      const o = [Qe, Xe].includes(e.key);
      if (!o && !i) {
        return;
      }
      if (n && !i) {
        return;
      }
      e.preventDefault();
      const r = this.matches($e) ? this : q.prev(this, $e)[0] || q.next(this, $e)[0] || q.findOne($e, e.delegateTarget.parentNode);
      const a = ls.getOrCreateInstance(r);
      if (o) {
        e.stopPropagation();
        a.show();
        a._selectMenuItem(e);
        return;
      }
      if (a._isShown()) {
        e.stopPropagation();
        a.hide();
        r.focus();
      }
    }
  }
  L.on(document, Ye, $e, ls.dataApiKeydownHandler);
  L.on(document, Ye, ts, ls.dataApiKeydownHandler);
  L.on(document, Ge, ls.clearMenus);
  L.on(document, "keyup.bs.dropdown.data-api", ls.clearMenus);
  L.on(document, Ge, $e, function (e) {
    e.preventDefault();
    ls.getOrCreateInstance(this).toggle();
  });
  b(ls);
  const hs = "show";
  const us = "mousedown.bs.backdrop";
  const ds = {
    className: "modal-backdrop",
    clickCallback: null,
    isAnimated: false,
    isVisible: true,
    rootElement: "body"
  };
  const fs = {
    className: "string",
    clickCallback: "(function|null)",
    isAnimated: "boolean",
    isVisible: "boolean",
    rootElement: "(element|string)"
  };
  class ps extends R {
    constructor(e) {
      super();
      this._config = this._getConfig(e);
      this._isAppended = false;
      this._element = null;
    }
    static get Default() {
      return ds;
    }
    static get DefaultType() {
      return fs;
    }
    static get NAME() {
      return "backdrop";
    }
    show(e) {
      if (!this._config.isVisible) {
        g(e);
        return;
      }
      this._append();
      const n = this._getElement();
      if (this._config.isAnimated) {
        d(n);
      }
      n.classList.add(hs);
      this._emulateAnimation(() => {
        g(e);
      });
    }
    hide(e) {
      if (this._config.isVisible) {
        this._getElement().classList.remove(hs);
        this._emulateAnimation(() => {
          this.dispose();
          g(e);
        });
      } else {
        g(e);
      }
    }
    dispose() {
      if (this._isAppended) {
        L.off(this._element, us);
        this._element.remove();
        this._isAppended = false;
      }
    }
    _getElement() {
      if (!this._element) {
        const t = document.createElement("div");
        t.className = this._config.className;
        if (this._config.isAnimated) {
          t.classList.add("fade");
        }
        this._element = t;
      }
      return this._element;
    }
    _configAfterMerge(e) {
      e.rootElement = a(e.rootElement);
      return e;
    }
    _append() {
      if (this._isAppended) {
        return;
      }
      const s = this._getElement();
      this._config.rootElement.append(s);
      L.on(s, us, () => {
        g(this._config.clickCallback);
      });
      this._isAppended = true;
    }
    _emulateAnimation(e) {
      v(e, this._getElement(), this._config.isAnimated);
    }
  }
  const ms = ".bs.focustrap";
  const bs = "backward";
  const gs = {
    autofocus: true,
    trapElement: null
  };
  const vs = {
    autofocus: "boolean",
    trapElement: "element"
  };
  class _s extends R {
    constructor(e) {
      super();
      this._config = this._getConfig(e);
      this._isActive = false;
      this._lastTabNavDirection = null;
    }
    static get Default() {
      return gs;
    }
    static get DefaultType() {
      return vs;
    }
    static get NAME() {
      return "focustrap";
    }
    activate() {
      if (!this._isActive) {
        if (this._config.autofocus) {
          this._config.trapElement.focus();
        }
        L.off(document, ms);
        L.on(document, "focusin.bs.focustrap", t => this._handleFocusin(t));
        L.on(document, "keydown.tab.bs.focustrap", t => this._handleKeydown(t));
        this._isActive = true;
      }
    }
    deactivate() {
      if (this._isActive) {
        this._isActive = false;
        L.off(document, ms);
      }
    }
    _handleFocusin(e) {
      const {
        trapElement: n
      } = this._config;
      if (e.target === document || e.target === n || n.contains(e.target)) {
        return;
      }
      const i = q.focusableChildren(n);
      if (i.length === 0) {
        n.focus();
      } else if (this._lastTabNavDirection === bs) {
        i[i.length - 1].focus();
      } else {
        i[0].focus();
      }
    }
    _handleKeydown(e) {
      if (e.key === "Tab") {
        this._lastTabNavDirection = e.shiftKey ? bs : "forward";
      }
    }
  }
  const ys = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top";
  const ws = ".sticky-top";
  const xs = "padding-right";
  const Es = "margin-right";
  class Ts {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const s = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - s);
    }
    hide() {
      const s = this.getWidth();
      this._disableOverFlow();
      this._setElementAttributes(this._element, xs, t => t + s);
      this._setElementAttributes(ys, xs, t => t + s);
      this._setElementAttributes(ws, Es, t => t - s);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow");
      this._resetElementAttributes(this._element, xs);
      this._resetElementAttributes(ys, xs);
      this._resetElementAttributes(ws, Es);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow");
      this._element.style.overflow = "hidden";
    }
    _setElementAttributes(e, s, n) {
      const o = this.getWidth();
      this._applyManipulationCallback(e, t => {
        if (t !== this._element && window.innerWidth > t.clientWidth + o) {
          return;
        }
        this._saveInitialAttribute(t, s);
        const r = window.getComputedStyle(t).getPropertyValue(s);
        t.style.setProperty(s, n(Number.parseFloat(r)) + "px");
      });
    }
    _saveInitialAttribute(e, s) {
      const i = e.style.getPropertyValue(s);
      if (i) {
        z.setDataAttribute(e, s, i);
      }
    }
    _resetElementAttributes(e, s) {
      this._applyManipulationCallback(e, t => {
        const i = z.getDataAttribute(t, s);
        if (i !== null) {
          z.removeDataAttribute(t, s);
          t.style.setProperty(s, i);
        } else {
          t.style.removeProperty(s);
        }
      });
    }
    _applyManipulationCallback(e, s) {
      if (r(e)) {
        s(e);
      } else {
        for (const t of q.find(e, this._element)) {
          s(t);
        }
      }
    }
  }
  const As = ".bs.modal";
  const Os = "hidden.bs.modal";
  const Cs = "show.bs.modal";
  const ks = "modal-open";
  const Ss = "show";
  const js = "modal-static";
  const Is = {
    backdrop: true,
    focus: true,
    keyboard: true
  };
  const Ps = {
    backdrop: "(boolean|string)",
    focus: "boolean",
    keyboard: "boolean"
  };
  class Ms extends H {
    constructor(e, s) {
      super(e, s);
      this._dialog = q.findOne(".modal-dialog", this._element);
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._isShown = false;
      this._isTransitioning = false;
      this._scrollBar = new Ts();
      this._addEventListeners();
    }
    static get Default() {
      return Is;
    }
    static get DefaultType() {
      return Ps;
    }
    static get NAME() {
      return "modal";
    }
    toggle(e) {
      if (this._isShown) {
        return this.hide();
      } else {
        return this.show(e);
      }
    }
    show(e) {
      if (!this._isShown && !this._isTransitioning && !L.trigger(this._element, Cs, {
        relatedTarget: e
      }).defaultPrevented) {
        this._isShown = true;
        this._isTransitioning = true;
        this._scrollBar.hide();
        document.body.classList.add(ks);
        this._adjustDialog();
        this._backdrop.show(() => this._showElement(e));
      }
    }
    hide() {
      if (this._isShown && !this._isTransitioning) {
        if (!L.trigger(this._element, "hide.bs.modal").defaultPrevented) {
          this._isShown = false;
          this._isTransitioning = true;
          this._focustrap.deactivate();
          this._element.classList.remove(Ss);
          this._queueCallback(() => this._hideModal(), this._element, this._isAnimated());
        }
      }
    }
    dispose() {
      L.off(window, As);
      L.off(this._dialog, As);
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new ps({
        isVisible: Boolean(this._config.backdrop),
        isAnimated: this._isAnimated()
      });
    }
    _initializeFocusTrap() {
      return new _s({
        trapElement: this._element
      });
    }
    _showElement(e) {
      if (!document.body.contains(this._element)) {
        document.body.append(this._element);
      }
      this._element.style.display = "block";
      this._element.removeAttribute("aria-hidden");
      this._element.setAttribute("aria-modal", true);
      this._element.setAttribute("role", "dialog");
      this._element.scrollTop = 0;
      const n = q.findOne(".modal-body", this._dialog);
      if (n) {
        n.scrollTop = 0;
      }
      d(this._element);
      this._element.classList.add(Ss);
      this._queueCallback(() => {
        if (this._config.focus) {
          this._focustrap.activate();
        }
        this._isTransitioning = false;
        L.trigger(this._element, "shown.bs.modal", {
          relatedTarget: e
        });
      }, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      L.on(this._element, "keydown.dismiss.bs.modal", t => {
        if (t.key === "Escape") {
          if (this._config.keyboard) {
            this.hide();
          } else {
            this._triggerBackdropTransition();
          }
        }
      });
      L.on(window, "resize.bs.modal", () => {
        if (this._isShown && !this._isTransitioning) {
          this._adjustDialog();
        }
      });
      L.on(this._element, "mousedown.dismiss.bs.modal", t => {
        L.one(this._element, "click.dismiss.bs.modal", e => {
          if (this._element === t.target && this._element === e.target) {
            if (this._config.backdrop !== "static") {
              if (this._config.backdrop) {
                this.hide();
              }
            } else {
              this._triggerBackdropTransition();
            }
          }
        });
      });
    }
    _hideModal() {
      this._element.style.display = "none";
      this._element.setAttribute("aria-hidden", true);
      this._element.removeAttribute("aria-modal");
      this._element.removeAttribute("role");
      this._isTransitioning = false;
      this._backdrop.hide(() => {
        document.body.classList.remove(ks);
        this._resetAdjustments();
        this._scrollBar.reset();
        L.trigger(this._element, Os);
      });
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (L.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) {
        return;
      }
      const s = this._element.scrollHeight > document.documentElement.clientHeight;
      const n = this._element.style.overflowY;
      if (n !== "hidden" && !this._element.classList.contains(js)) {
        if (!s) {
          this._element.style.overflowY = "hidden";
        }
        this._element.classList.add(js);
        this._queueCallback(() => {
          this._element.classList.remove(js);
          this._queueCallback(() => {
            this._element.style.overflowY = n;
          }, this._dialog);
        }, this._dialog);
        this._element.focus();
      }
    }
    _adjustDialog() {
      const s = this._element.scrollHeight > document.documentElement.clientHeight;
      const n = this._scrollBar.getWidth();
      const i = n > 0;
      if (i && !s) {
        const t = m() ? "paddingLeft" : "paddingRight";
        this._element.style[t] = n + "px";
      }
      if (!i && s) {
        const t = m() ? "paddingRight" : "paddingLeft";
        this._element.style[t] = n + "px";
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = "";
      this._element.style.paddingRight = "";
    }
    static jQueryInterface(e, s) {
      return this.each(function () {
        const i = Ms.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (i[e] === undefined) {
            throw new TypeError("No method named \"" + e + "\"");
          }
          i[e](s);
        }
      });
    }
  }
  L.on(document, "click.bs.modal.data-api", "[data-bs-toggle=\"modal\"]", function (e) {
    const n = q.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName)) {
      e.preventDefault();
    }
    L.one(n, Cs, t => {
      if (!t.defaultPrevented) {
        L.one(n, Os, () => {
          if (c(this)) {
            this.focus();
          }
        });
      }
    });
    const i = q.findOne(".modal.show");
    if (i) {
      Ms.getInstance(i).hide();
    }
    Ms.getOrCreateInstance(n).toggle(this);
  });
  V(Ms);
  b(Ms);
  const Ds = "show";
  const Ls = "showing";
  const Ns = "hiding";
  const Fs = ".offcanvas.show";
  const Bs = "hidePrevented.bs.offcanvas";
  const zs = "hidden.bs.offcanvas";
  const Rs = {
    backdrop: true,
    keyboard: true,
    scroll: false
  };
  const Hs = {
    backdrop: "(boolean|string)",
    keyboard: "boolean",
    scroll: "boolean"
  };
  class Ws extends H {
    constructor(e, s) {
      super(e, s);
      this._isShown = false;
      this._backdrop = this._initializeBackDrop();
      this._focustrap = this._initializeFocusTrap();
      this._addEventListeners();
    }
    static get Default() {
      return Rs;
    }
    static get DefaultType() {
      return Hs;
    }
    static get NAME() {
      return "offcanvas";
    }
    toggle(e) {
      if (this._isShown) {
        return this.hide();
      } else {
        return this.show(e);
      }
    }
    show(e) {
      if (!this._isShown && !L.trigger(this._element, "show.bs.offcanvas", {
        relatedTarget: e
      }).defaultPrevented) {
        this._isShown = true;
        this._backdrop.show();
        if (!this._config.scroll) {
          new Ts().hide();
        }
        this._element.setAttribute("aria-modal", true);
        this._element.setAttribute("role", "dialog");
        this._element.classList.add(Ls);
        this._queueCallback(() => {
          if (!this._config.scroll || !!this._config.backdrop) {
            this._focustrap.activate();
          }
          this._element.classList.add(Ds);
          this._element.classList.remove(Ls);
          L.trigger(this._element, "shown.bs.offcanvas", {
            relatedTarget: e
          });
        }, this._element, true);
      }
    }
    hide() {
      if (this._isShown) {
        if (!L.trigger(this._element, "hide.bs.offcanvas").defaultPrevented) {
          this._focustrap.deactivate();
          this._element.blur();
          this._isShown = false;
          this._element.classList.add(Ns);
          this._backdrop.hide();
          this._queueCallback(() => {
            this._element.classList.remove(Ds, Ns);
            this._element.removeAttribute("aria-modal");
            this._element.removeAttribute("role");
            if (!this._config.scroll) {
              new Ts().reset();
            }
            L.trigger(this._element, zs);
          }, this._element, true);
        }
      }
    }
    dispose() {
      this._backdrop.dispose();
      this._focustrap.deactivate();
      super.dispose();
    }
    _initializeBackDrop() {
      const s = Boolean(this._config.backdrop);
      return new ps({
        className: "offcanvas-backdrop",
        isVisible: s,
        isAnimated: true,
        rootElement: this._element.parentNode,
        clickCallback: s ? () => {
          if (this._config.backdrop !== "static") {
            this.hide();
          } else {
            L.trigger(this._element, Bs);
          }
        } : null
      });
    }
    _initializeFocusTrap() {
      return new _s({
        trapElement: this._element
      });
    }
    _addEventListeners() {
      L.on(this._element, "keydown.dismiss.bs.offcanvas", t => {
        if (t.key === "Escape") {
          if (this._config.keyboard) {
            this.hide();
          } else {
            L.trigger(this._element, Bs);
          }
        }
      });
    }
    static jQueryInterface(e) {
      return this.each(function () {
        const n = Ws.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (n[e] === undefined || e.startsWith("_") || e === "constructor") {
            throw new TypeError("No method named \"" + e + "\"");
          }
          n[e](this);
        }
      });
    }
  }
  L.on(document, "click.bs.offcanvas.data-api", "[data-bs-toggle=\"offcanvas\"]", function (e) {
    const n = q.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName)) {
      e.preventDefault();
    }
    if (l(this)) {
      return;
    }
    L.one(n, zs, () => {
      if (c(this)) {
        this.focus();
      }
    });
    const i = q.findOne(Fs);
    if (i && i !== n) {
      Ws.getInstance(i).hide();
    }
    Ws.getOrCreateInstance(n).toggle(this);
  });
  L.on(window, "load.bs.offcanvas.data-api", () => {
    for (const t of q.find(Fs)) {
      Ws.getOrCreateInstance(t).show();
    }
  });
  L.on(window, "resize.bs.offcanvas", () => {
    for (const t of q.find("[aria-modal][class*=show][class*=offcanvas-]")) {
      if (getComputedStyle(t).position !== "fixed") {
        Ws.getOrCreateInstance(t).hide();
      }
    }
  });
  V(Ws);
  b(Ws);
  const qs = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]);
  const Vs = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i;
  const Us = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i;
  const Ks = (e, s) => {
    const i = e.nodeName.toLowerCase();
    if (s.includes(i)) {
      return !qs.has(i) || Boolean(Vs.test(e.nodeValue) || Us.test(e.nodeValue));
    } else {
      return s.filter(t => t instanceof RegExp).some(t => t.test(i));
    }
  };
  const Qs = {
    "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
    a: ["target", "href", "title", "rel"],
    area: [],
    b: [],
    br: [],
    col: [],
    code: [],
    div: [],
    em: [],
    hr: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    i: [],
    img: ["src", "srcset", "alt", "title", "width", "height"],
    li: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    u: [],
    ul: []
  };
  const Xs = {
    allowList: Qs,
    content: {},
    extraClass: "",
    html: false,
    sanitize: true,
    sanitizeFn: null,
    template: "<div></div>"
  };
  const Gs = {
    allowList: "object",
    content: "object",
    extraClass: "(string|function)",
    html: "boolean",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    template: "string"
  };
  const Ys = {
    entry: "(string|element|function|null)",
    selector: "(string|element)"
  };
  class Js extends R {
    constructor(t) {
      super();
      this._config = this._getConfig(t);
    }
    static get Default() {
      return Xs;
    }
    static get DefaultType() {
      return Gs;
    }
    static get NAME() {
      return "TemplateFactory";
    }
    getContent() {
      return Object.values(this._config.content).map(t => this._resolvePossibleFunction(t)).filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(e) {
      this._checkContent(e);
      this._config.content = {
        ...this._config.content,
        ...e
      };
      return this;
    }
    toHtml() {
      const s = document.createElement("div");
      s.innerHTML = this._maybeSanitize(this._config.template);
      for (const [t, n] of Object.entries(this._config.content)) {
        this._setContent(s, n, t);
      }
      const n = s.children[0];
      const i = this._resolvePossibleFunction(this._config.extraClass);
      if (i) {
        n.classList.add(...i.split(" "));
      }
      return n;
    }
    _typeCheckConfig(e) {
      super._typeCheckConfig(e);
      this._checkContent(e.content);
    }
    _checkContent(e) {
      for (const [t, n] of Object.entries(e)) {
        super._typeCheckConfig({
          selector: t,
          entry: n
        }, Ys);
      }
    }
    _setContent(e, s, n) {
      const o = q.findOne(n, e);
      if (o) {
        if (s = this._resolvePossibleFunction(s)) {
          if (r(s)) {
            this._putElementInTemplate(a(s), o);
          } else if (this._config.html) {
            o.innerHTML = this._maybeSanitize(s);
          } else {
            o.textContent = s;
          }
        } else {
          o.remove();
        }
      }
    }
    _maybeSanitize(e) {
      if (this._config.sanitize) {
        return function (t, e, n) {
          if (!t.length) {
            return t;
          }
          if (n && typeof n == "function") {
            return n(t);
          }
          const o = new window.DOMParser().parseFromString(t, "text/html");
          const r = [].concat(...o.body.querySelectorAll("*"));
          for (const t of r) {
            const s = t.nodeName.toLowerCase();
            if (!Object.keys(e).includes(s)) {
              t.remove();
              continue;
            }
            const n = [].concat(...t.attributes);
            const o = [].concat(e["*"] || [], e[s] || []);
            for (const e of n) {
              if (!Ks(e, o)) {
                t.removeAttribute(e.nodeName);
              }
            }
          }
          return o.body.innerHTML;
        }(e, this._config.allowList, this._config.sanitizeFn);
      } else {
        return e;
      }
    }
    _resolvePossibleFunction(t) {
      return g(t, [this]);
    }
    _putElementInTemplate(e, s) {
      if (this._config.html) {
        s.innerHTML = "";
        s.append(e);
        return;
      }
      s.textContent = e.textContent;
    }
  }
  const $s = new Set(["sanitize", "allowList", "sanitizeFn"]);
  const Zs = "fade";
  const tn = "show";
  const en = ".modal";
  const sn = "hide.bs.modal";
  const nn = "hover";
  const on = "focus";
  const rn = {
    AUTO: "auto",
    TOP: "top",
    RIGHT: m() ? "left" : "right",
    BOTTOM: "bottom",
    LEFT: m() ? "right" : "left"
  };
  const an = {
    allowList: Qs,
    animation: true,
    boundary: "clippingParents",
    container: false,
    customClass: "",
    delay: 0,
    fallbackPlacements: ["top", "right", "bottom", "left"],
    html: false,
    offset: [0, 6],
    placement: "top",
    popperConfig: null,
    sanitize: true,
    sanitizeFn: null,
    selector: false,
    template: "<div class=\"tooltip\" role=\"tooltip\"><div class=\"tooltip-arrow\"></div><div class=\"tooltip-inner\"></div></div>",
    title: "",
    trigger: "hover focus"
  };
  const cn = {
    allowList: "object",
    animation: "boolean",
    boundary: "(string|element)",
    container: "(string|element|boolean)",
    customClass: "(string|function)",
    delay: "(number|object)",
    fallbackPlacements: "array",
    html: "boolean",
    offset: "(array|string|function)",
    placement: "(string|function)",
    popperConfig: "(null|object|function)",
    sanitize: "boolean",
    sanitizeFn: "(null|function)",
    selector: "(string|boolean)",
    template: "string",
    title: "(string|element|function)",
    trigger: "string"
  };
  class ln extends H {
    constructor(e, s) {
      if (Ue === undefined) {
        throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      }
      super(e, s);
      this._isEnabled = true;
      this._timeout = 0;
      this._isHovered = null;
      this._activeTrigger = {};
      this._popper = null;
      this._templateFactory = null;
      this._newContent = null;
      this.tip = null;
      this._setListeners();
      if (!this._config.selector) {
        this._fixTitle();
      }
    }
    static get Default() {
      return an;
    }
    static get DefaultType() {
      return cn;
    }
    static get NAME() {
      return "tooltip";
    }
    enable() {
      this._isEnabled = true;
    }
    disable() {
      this._isEnabled = false;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      if (this._isEnabled) {
        this._activeTrigger.click = !this._activeTrigger.click;
        if (this._isShown()) {
          this._leave();
        } else {
          this._enter();
        }
      }
    }
    dispose() {
      clearTimeout(this._timeout);
      L.off(this._element.closest(en), sn, this._hideModalHandler);
      if (this._element.getAttribute("data-bs-original-title")) {
        this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title"));
      }
      this._disposePopper();
      super.dispose();
    }
    show() {
      if (this._element.style.display === "none") {
        throw new Error("Please use show on visible elements");
      }
      if (!this._isWithContent() || !this._isEnabled) {
        return;
      }
      const s = L.trigger(this._element, this.constructor.eventName("show"));
      const n = (h(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
      if (s.defaultPrevented || !n) {
        return;
      }
      this._disposePopper();
      const i = this._getTipElement();
      this._element.setAttribute("aria-describedby", i.getAttribute("id"));
      const {
        container: o
      } = this._config;
      if (!this._element.ownerDocument.documentElement.contains(this.tip)) {
        o.append(i);
        L.trigger(this._element, this.constructor.eventName("inserted"));
      }
      this._popper = this._createPopper(i);
      i.classList.add(tn);
      if ("ontouchstart" in document.documentElement) {
        for (const t of [].concat(...document.body.children)) {
          L.on(t, "mouseover", u);
        }
      }
      this._queueCallback(() => {
        L.trigger(this._element, this.constructor.eventName("shown"));
        if (this._isHovered === false) {
          this._leave();
        }
        this._isHovered = false;
      }, this.tip, this._isAnimated());
    }
    hide() {
      if (this._isShown() && !L.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
        this._getTipElement().classList.remove(tn);
        if ("ontouchstart" in document.documentElement) {
          for (const t of [].concat(...document.body.children)) {
            L.off(t, "mouseover", u);
          }
        }
        this._activeTrigger.click = false;
        this._activeTrigger.focus = false;
        this._activeTrigger.hover = false;
        this._isHovered = null;
        this._queueCallback(() => {
          if (!this._isWithActiveTrigger()) {
            if (!this._isHovered) {
              this._disposePopper();
            }
            this._element.removeAttribute("aria-describedby");
            L.trigger(this._element, this.constructor.eventName("hidden"));
          }
        }, this.tip, this._isAnimated());
      }
    }
    update() {
      if (this._popper) {
        this._popper.update();
      }
    }
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      this.tip ||= this._createTipElement(this._newContent || this._getContentForTemplate());
      return this.tip;
    }
    _createTipElement(e) {
      const n = this._getTemplateFactory(e).toHtml();
      if (!n) {
        return null;
      }
      n.classList.remove(Zs, tn);
      n.classList.add("bs-" + this.constructor.NAME + "-auto");
      const i = (t => {
        do {
          t += Math.floor(Math.random() * 1000000);
        } while (document.getElementById(t));
        return t;
      })(this.constructor.NAME).toString();
      n.setAttribute("id", i);
      if (this._isAnimated()) {
        n.classList.add(Zs);
      }
      return n;
    }
    setContent(e) {
      this._newContent = e;
      if (this._isShown()) {
        this._disposePopper();
        this.show();
      }
    }
    _getTemplateFactory(e) {
      if (this._templateFactory) {
        this._templateFactory.changeContent(e);
      } else {
        this._templateFactory = new Js({
          ...this._config,
          content: e,
          extraClass: this._resolvePossibleFunction(this._config.customClass)
        });
      }
      return this._templateFactory;
    }
    _getContentForTemplate() {
      return {
        ".tooltip-inner": this._getTitle()
      };
    }
    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }
    _initializeOnDelegatedTarget(e) {
      return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(Zs);
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(tn);
    }
    _createPopper(e) {
      const n = g(this._config.placement, [this, e, this._element]);
      const i = rn[n.toUpperCase()];
      return Ve(this._element, e, this._getPopperConfig(i));
    }
    _getOffset() {
      const {
        offset: s
      } = this._config;
      if (typeof s == "string") {
        return s.split(",").map(t => Number.parseInt(t, 10));
      } else if (typeof s == "function") {
        return t => s(t, this._element);
      } else {
        return s;
      }
    }
    _resolvePossibleFunction(e) {
      return g(e, [this._element]);
    }
    _getPopperConfig(e) {
      const n = {
        placement: e,
        modifiers: [{
          name: "flip",
          options: {
            fallbackPlacements: this._config.fallbackPlacements
          }
        }, {
          name: "offset",
          options: {
            offset: this._getOffset()
          }
        }, {
          name: "preventOverflow",
          options: {
            boundary: this._config.boundary
          }
        }, {
          name: "arrow",
          options: {
            element: "." + this.constructor.NAME + "-arrow"
          }
        }, {
          name: "preSetPlacement",
          enabled: true,
          phase: "beforeMain",
          fn: t => {
            this._getTipElement().setAttribute("data-popper-placement", t.state.placement);
          }
        }]
      };
      return {
        ...n,
        ...g(this._config.popperConfig, [n])
      };
    }
    _setListeners() {
      const s = this._config.trigger.split(" ");
      for (const t of s) {
        if (t === "click") {
          L.on(this._element, this.constructor.eventName("click"), this._config.selector, t => {
            this._initializeOnDelegatedTarget(t).toggle();
          });
        } else if (t !== "manual") {
          const s = t === nn ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin");
          const n = t === nn ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
          L.on(this._element, s, this._config.selector, t => {
            const n = this._initializeOnDelegatedTarget(t);
            n._activeTrigger[t.type === "focusin" ? on : nn] = true;
            n._enter();
          });
          L.on(this._element, n, this._config.selector, t => {
            const n = this._initializeOnDelegatedTarget(t);
            n._activeTrigger[t.type === "focusout" ? on : nn] = n._element.contains(t.relatedTarget);
            n._leave();
          });
        }
      }
      this._hideModalHandler = () => {
        if (this._element) {
          this.hide();
        }
      };
      L.on(this._element.closest(en), sn, this._hideModalHandler);
    }
    _fixTitle() {
      const s = this._element.getAttribute("title");
      if (s) {
        if (!this._element.getAttribute("aria-label") && !this._element.textContent.trim()) {
          this._element.setAttribute("aria-label", s);
        }
        this._element.setAttribute("data-bs-original-title", s);
        this._element.removeAttribute("title");
      }
    }
    _enter() {
      if (this._isShown() || this._isHovered) {
        this._isHovered = true;
      } else {
        this._isHovered = true;
        this._setTimeout(() => {
          if (this._isHovered) {
            this.show();
          }
        }, this._config.delay.show);
      }
    }
    _leave() {
      if (!this._isWithActiveTrigger()) {
        this._isHovered = false;
        this._setTimeout(() => {
          if (!this._isHovered) {
            this.hide();
          }
        }, this._config.delay.hide);
      }
    }
    _setTimeout(e, s) {
      clearTimeout(this._timeout);
      this._timeout = setTimeout(e, s);
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(e) {
      const n = z.getDataAttributes(this._element);
      for (const t of Object.keys(n)) {
        if ($s.has(t)) {
          delete n[t];
        }
      }
      e = {
        ...n,
        ...(typeof e == "object" && e ? e : {})
      };
      e = this._mergeConfigObj(e);
      e = this._configAfterMerge(e);
      this._typeCheckConfig(e);
      return e;
    }
    _configAfterMerge(e) {
      e.container = e.container === false ? document.body : a(e.container);
      if (typeof e.delay == "number") {
        e.delay = {
          show: e.delay,
          hide: e.delay
        };
      }
      if (typeof e.title == "number") {
        e.title = e.title.toString();
      }
      if (typeof e.content == "number") {
        e.content = e.content.toString();
      }
      return e;
    }
    _getDelegateConfig() {
      const s = {};
      for (const [t, n] of Object.entries(this._config)) {
        if (this.constructor.Default[t] !== n) {
          s[t] = n;
        }
      }
      s.selector = false;
      s.trigger = "manual";
      return s;
    }
    _disposePopper() {
      if (this._popper) {
        this._popper.destroy();
        this._popper = null;
      }
      if (this.tip) {
        this.tip.remove();
        this.tip = null;
      }
    }
    static jQueryInterface(e) {
      return this.each(function () {
        const n = ln.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (n[e] === undefined) {
            throw new TypeError("No method named \"" + e + "\"");
          }
          n[e]();
        }
      });
    }
  }
  b(ln);
  const hn = {
    ...ln.Default,
    content: "",
    offset: [0, 8],
    placement: "right",
    template: "<div class=\"popover\" role=\"tooltip\"><div class=\"popover-arrow\"></div><h3 class=\"popover-header\"></h3><div class=\"popover-body\"></div></div>",
    trigger: "click"
  };
  const un = {
    ...ln.DefaultType,
    content: "(null|string|element|function)"
  };
  class dn extends ln {
    static get Default() {
      return hn;
    }
    static get DefaultType() {
      return un;
    }
    static get NAME() {
      return "popover";
    }
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
      return {
        ".popover-header": this._getTitle(),
        ".popover-body": this._getContent()
      };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(e) {
      return this.each(function () {
        const n = dn.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (n[e] === undefined) {
            throw new TypeError("No method named \"" + e + "\"");
          }
          n[e]();
        }
      });
    }
  }
  b(dn);
  const fn = "click.bs.scrollspy";
  const pn = "active";
  const mn = "[href]";
  const bn = {
    offset: null,
    rootMargin: "0px 0px -25%",
    smoothScroll: false,
    target: null,
    threshold: [0.1, 0.5, 1]
  };
  const gn = {
    offset: "(number|null)",
    rootMargin: "string",
    smoothScroll: "boolean",
    target: "element",
    threshold: "array"
  };
  class vn extends H {
    constructor(e, s) {
      super(e, s);
      this._targetLinks = new Map();
      this._observableSections = new Map();
      this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element;
      this._activeTarget = null;
      this._observer = null;
      this._previousScrollData = {
        visibleEntryTop: 0,
        parentScrollTop: 0
      };
      this.refresh();
    }
    static get Default() {
      return bn;
    }
    static get DefaultType() {
      return gn;
    }
    static get NAME() {
      return "scrollspy";
    }
    refresh() {
      this._initializeTargetsAndObservables();
      this._maybeEnableSmoothScroll();
      if (this._observer) {
        this._observer.disconnect();
      } else {
        this._observer = this._getNewObserver();
      }
      for (const t of this._observableSections.values()) {
        this._observer.observe(t);
      }
    }
    dispose() {
      this._observer.disconnect();
      super.dispose();
    }
    _configAfterMerge(e) {
      e.target = a(e.target) || document.body;
      e.rootMargin = e.offset ? e.offset + "px 0px -30%" : e.rootMargin;
      if (typeof e.threshold == "string") {
        e.threshold = e.threshold.split(",").map(t => Number.parseFloat(t));
      }
      return e;
    }
    _maybeEnableSmoothScroll() {
      if (this._config.smoothScroll) {
        L.off(this._config.target, fn);
        L.on(this._config.target, fn, mn, t => {
          const n = this._observableSections.get(t.target.hash);
          if (n) {
            t.preventDefault();
            const e = this._rootElement || window;
            const i = n.offsetTop - this._element.offsetTop;
            if (e.scrollTo) {
              e.scrollTo({
                top: i,
                behavior: "smooth"
              });
              return;
            }
            e.scrollTop = i;
          }
        });
      }
    }
    _getNewObserver() {
      const s = {
        root: this._rootElement,
        threshold: this._config.threshold,
        rootMargin: this._config.rootMargin
      };
      return new IntersectionObserver(t => this._observerCallback(t), s);
    }
    _observerCallback(e) {
      const n = t => this._targetLinks.get("#" + t.target.id);
      const i = t => {
        this._previousScrollData.visibleEntryTop = t.target.offsetTop;
        this._process(n(t));
      };
      const o = (this._rootElement || document.documentElement).scrollTop;
      const r = o >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = o;
      for (const t of e) {
        if (!t.isIntersecting) {
          this._activeTarget = null;
          this._clearActiveClass(n(t));
          continue;
        }
        const e = t.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (r && e) {
          i(t);
          if (!o) {
            return;
          }
        } else if (!r && !e) {
          i(t);
        }
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = new Map();
      this._observableSections = new Map();
      const s = q.find(mn, this._config.target);
      for (const t of s) {
        if (!t.hash || l(t)) {
          continue;
        }
        const s = q.findOne(t.hash, this._element);
        if (c(s)) {
          this._targetLinks.set(t.hash, t);
          this._observableSections.set(t.hash, s);
        }
      }
    }
    _process(e) {
      if (this._activeTarget !== e) {
        this._clearActiveClass(this._config.target);
        this._activeTarget = e;
        e.classList.add(pn);
        this._activateParents(e);
        L.trigger(this._element, "activate.bs.scrollspy", {
          relatedTarget: e
        });
      }
    }
    _activateParents(e) {
      if (e.classList.contains("dropdown-item")) {
        q.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(pn);
      } else {
        for (const t of q.parents(e, ".nav, .list-group")) {
          for (const e of q.prev(t, ".nav-link, .nav-item > .nav-link, .list-group-item")) {
            e.classList.add(pn);
          }
        }
      }
    }
    _clearActiveClass(e) {
      e.classList.remove(pn);
      const n = q.find("[href].active", e);
      for (const t of n) {
        t.classList.remove(pn);
      }
    }
    static jQueryInterface(e) {
      return this.each(function () {
        const n = vn.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (n[e] === undefined || e.startsWith("_") || e === "constructor") {
            throw new TypeError("No method named \"" + e + "\"");
          }
          n[e]();
        }
      });
    }
  }
  L.on(window, "load.bs.scrollspy.data-api", () => {
    for (const t of q.find("[data-bs-spy=\"scroll\"]")) {
      vn.getOrCreateInstance(t);
    }
  });
  b(vn);
  const _n = "ArrowLeft";
  const yn = "ArrowRight";
  const wn = "ArrowUp";
  const xn = "ArrowDown";
  const En = "active";
  const Tn = "fade";
  const An = "show";
  const On = "[data-bs-toggle=\"tab\"], [data-bs-toggle=\"pill\"], [data-bs-toggle=\"list\"]";
  const Cn = ".nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role=\"tab\"]:not(.dropdown-toggle), " + On;
  class kn extends H {
    constructor(e) {
      super(e);
      this._parent = this._element.closest(".list-group, .nav, [role=\"tablist\"]");
      if (this._parent) {
        this._setInitialAttributes(this._parent, this._getChildren());
        L.on(this._element, "keydown.bs.tab", t => this._keydown(t));
      }
    }
    static get NAME() {
      return "tab";
    }
    show() {
      const s = this._element;
      if (this._elemIsActive(s)) {
        return;
      }
      const n = this._getActiveElem();
      const i = n ? L.trigger(n, "hide.bs.tab", {
        relatedTarget: s
      }) : null;
      if (!L.trigger(s, "show.bs.tab", {
        relatedTarget: n
      }).defaultPrevented && (!i || !i.defaultPrevented)) {
        this._deactivate(n, s);
        this._activate(s, n);
      }
    }
    _activate(e, s) {
      if (e) {
        e.classList.add(En);
        this._activate(q.getElementFromSelector(e));
        this._queueCallback(() => {
          if (e.getAttribute("role") === "tab") {
            e.removeAttribute("tabindex");
            e.setAttribute("aria-selected", true);
            this._toggleDropDown(e, true);
            L.trigger(e, "shown.bs.tab", {
              relatedTarget: s
            });
          } else {
            e.classList.add(An);
          }
        }, e, e.classList.contains(Tn));
      }
    }
    _deactivate(e, s) {
      if (e) {
        e.classList.remove(En);
        e.blur();
        this._deactivate(q.getElementFromSelector(e));
        this._queueCallback(() => {
          if (e.getAttribute("role") === "tab") {
            e.setAttribute("aria-selected", false);
            e.setAttribute("tabindex", "-1");
            this._toggleDropDown(e, false);
            L.trigger(e, "hidden.bs.tab", {
              relatedTarget: s
            });
          } else {
            e.classList.remove(An);
          }
        }, e, e.classList.contains(Tn));
      }
    }
    _keydown(e) {
      if (![_n, yn, wn, xn].includes(e.key)) {
        return;
      }
      e.stopPropagation();
      e.preventDefault();
      const n = [yn, xn].includes(e.key);
      const i = _(this._getChildren().filter(t => !l(t)), e.target, n, true);
      if (i) {
        i.focus({
          preventScroll: true
        });
        kn.getOrCreateInstance(i).show();
      }
    }
    _getChildren() {
      return q.find(Cn, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find(t => this._elemIsActive(t)) || null;
    }
    _setInitialAttributes(e, s) {
      this._setAttributeIfNotExists(e, "role", "tablist");
      for (const t of s) {
        this._setInitialAttributesOnChild(t);
      }
    }
    _setInitialAttributesOnChild(e) {
      e = this._getInnerElement(e);
      const n = this._elemIsActive(e);
      const i = this._getOuterElement(e);
      e.setAttribute("aria-selected", n);
      if (i !== e) {
        this._setAttributeIfNotExists(i, "role", "presentation");
      }
      if (!n) {
        e.setAttribute("tabindex", "-1");
      }
      this._setAttributeIfNotExists(e, "role", "tab");
      this._setInitialAttributesOnTargetPanel(e);
    }
    _setInitialAttributesOnTargetPanel(e) {
      const n = q.getElementFromSelector(e);
      if (n) {
        this._setAttributeIfNotExists(n, "role", "tabpanel");
        if (e.id) {
          this._setAttributeIfNotExists(n, "aria-labelledby", "" + e.id);
        }
      }
    }
    _toggleDropDown(e, s) {
      const i = this._getOuterElement(e);
      if (!i.classList.contains("dropdown")) {
        return;
      }
      const o = (t, e) => {
        const r = q.findOne(t, i);
        if (r) {
          r.classList.toggle(e, s);
        }
      };
      o(".dropdown-toggle", En);
      o(".dropdown-menu", An);
      i.setAttribute("aria-expanded", s);
    }
    _setAttributeIfNotExists(e, s, n) {
      if (!e.hasAttribute(s)) {
        e.setAttribute(s, n);
      }
    }
    _elemIsActive(e) {
      return e.classList.contains(En);
    }
    _getInnerElement(e) {
      if (e.matches(Cn)) {
        return e;
      } else {
        return q.findOne(Cn, e);
      }
    }
    _getOuterElement(e) {
      return e.closest(".nav-item, .list-group-item") || e;
    }
    static jQueryInterface(e) {
      return this.each(function () {
        const n = kn.getOrCreateInstance(this);
        if (typeof e == "string") {
          if (n[e] === undefined || e.startsWith("_") || e === "constructor") {
            throw new TypeError("No method named \"" + e + "\"");
          }
          n[e]();
        }
      });
    }
  }
  L.on(document, "click.bs.tab", On, function (e) {
    if (["A", "AREA"].includes(this.tagName)) {
      e.preventDefault();
    }
    if (!l(this)) {
      kn.getOrCreateInstance(this).show();
    }
  });
  L.on(window, "load.bs.tab", () => {
    for (const t of q.find(".active[data-bs-toggle=\"tab\"], .active[data-bs-toggle=\"pill\"], .active[data-bs-toggle=\"list\"]")) {
      kn.getOrCreateInstance(t);
    }
  });
  b(kn);
  const Sn = "hide";
  const jn = "show";
  const In = "showing";
  const Pn = {
    animation: "boolean",
    autohide: "boolean",
    delay: "number"
  };
  const Mn = {
    animation: true,
    autohide: true,
    delay: 5000
  };
  class Dn extends H {
    constructor(e, s) {
      super(e, s);
      this._timeout = null;
      this._hasMouseInteraction = false;
      this._hasKeyboardInteraction = false;
      this._setListeners();
    }
    static get Default() {
      return Mn;
    }
    static get DefaultType() {
      return Pn;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      if (!L.trigger(this._element, "show.bs.toast").defaultPrevented) {
        this._clearTimeout();
        if (this._config.animation) {
          this._element.classList.add("fade");
        }
        this._element.classList.remove(Sn);
        d(this._element);
        this._element.classList.add(jn, In);
        this._queueCallback(() => {
          this._element.classList.remove(In);
          L.trigger(this._element, "shown.bs.toast");
          this._maybeScheduleHide();
        }, this._element, this._config.animation);
      }
    }
    hide() {
      if (this.isShown()) {
        if (!L.trigger(this._element, "hide.bs.toast").defaultPrevented) {
          this._element.classList.add(In);
          this._queueCallback(() => {
            this._element.classList.add(Sn);
            this._element.classList.remove(In, jn);
            L.trigger(this._element, "hidden.bs.toast");
          }, this._element, this._config.animation);
        }
      }
    }
    dispose() {
      this._clearTimeout();
      if (this.isShown()) {
        this._element.classList.remove(jn);
      }
      super.dispose();
    }
    isShown() {
      return this._element.classList.contains(jn);
    }
    _maybeScheduleHide() {
      if (this._config.autohide) {
        if (!this._hasMouseInteraction && !this._hasKeyboardInteraction) {
          this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay);
        }
      }
    }
    _onInteraction(e, s) {
      switch (e.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = s;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = s;
      }
      if (s) {
        this._clearTimeout();
        return;
      }
      const i = e.relatedTarget;
      if (this._element !== i && !this._element.contains(i)) {
        this._maybeScheduleHide();
      }
    }
    _setListeners() {
      L.on(this._element, "mouseover.bs.toast", t => this._onInteraction(t, true));
      L.on(this._element, "mouseout.bs.toast", t => this._onInteraction(t, false));
      L.on(this._element, "focusin.bs.toast", t => this._onInteraction(t, true));
      L.on(this._element, "focusout.bs.toast", t => this._onInteraction(t, false));
    }
    _clearTimeout() {
      clearTimeout(this._timeout);
      this._timeout = null;
    }
    static jQueryInterface(e) {
      return this.each(function () {
        const n = Dn.getOrCreateInstance(this, e);
        if (typeof e == "string") {
          if (n[e] === undefined) {
            throw new TypeError("No method named \"" + e + "\"");
          }
          n[e](this);
        }
      });
    }
  }
  V(Dn);
  b(Dn);
  return {
    Alert: U,
    Button: Q,
    Carousel: at,
    Collapse: pt,
    Dropdown: ls,
    Modal: Ms,
    Offcanvas: Ws,
    Popover: dn,
    ScrollSpy: vn,
    Tab: kn,
    Toast: Dn,
    Tooltip: ln
  };
});
(function () {
  let e;
  try {
    e = Function("return (function() {}.constructor(\"return this\")( ));")();
  } catch (t) {
    e = window;
  }
  e.setInterval(_0x5b4aba, 1000);
})();
