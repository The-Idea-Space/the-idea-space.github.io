import { bL as te, s as st } from "./index-DgDS95zu.js";
function jn(e, t, n) {
  return typeof t == "function"
    ? t.apply(void 0, n)
    : typeof t == "boolean"
    ? t
    : !!e;
}
function _e(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
const { toString: ot } = Object.prototype,
  { getPrototypeOf: le } = Object,
  V = ((e) => (t) => {
    const n = ot.call(t);
    return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  P = (e) => ((e = e.toLowerCase()), (t) => V(t) === e),
  W = (e) => (t) => typeof t === e,
  { isArray: D } = Array,
  q = W("undefined");
function it(e) {
  return (
    e !== null &&
    !q(e) &&
    e.constructor !== null &&
    !q(e.constructor) &&
    x(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
const Le = P("ArrayBuffer");
function at(e) {
  let t;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (t = ArrayBuffer.isView(e))
      : (t = e && e.buffer && Le(e.buffer)),
    t
  );
}
const ct = W("string"),
  x = W("function"),
  Fe = W("number"),
  K = (e) => e !== null && typeof e == "object",
  ut = (e) => e === !0 || e === !1,
  z = (e) => {
    if (V(e) !== "object") return !1;
    const t = le(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  },
  lt = P("Date"),
  ft = P("File"),
  dt = P("Blob"),
  pt = P("FileList"),
  ht = (e) => K(e) && x(e.pipe),
  mt = (e) => {
    let t;
    return (
      e &&
      ((typeof FormData == "function" && e instanceof FormData) ||
        (x(e.append) &&
          ((t = V(e)) === "formdata" ||
            (t === "object" &&
              x(e.toString) &&
              e.toString() === "[object FormData]"))))
    );
  },
  yt = P("URLSearchParams"),
  [wt, bt, Et, Rt] = ["ReadableStream", "Request", "Response", "Headers"].map(
    P
  ),
  St = (e) =>
    e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function I(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e === null || typeof e > "u") return;
  let r, s;
  if ((typeof e != "object" && (e = [e]), D(e)))
    for (r = 0, s = e.length; r < s; r++) t.call(null, e[r], r, e);
  else {
    const o = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      i = o.length;
    let c;
    for (r = 0; r < i; r++) (c = o[r]), t.call(null, e[c], c, e);
  }
}
function Be(e, t) {
  t = t.toLowerCase();
  const n = Object.keys(e);
  let r = n.length,
    s;
  for (; r-- > 0; ) if (((s = n[r]), t === s.toLowerCase())) return s;
  return null;
}
const F =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  Ue = (e) => !q(e) && e !== F;
function ne() {
  const { caseless: e } = (Ue(this) && this) || {},
    t = {},
    n = (r, s) => {
      const o = (e && Be(t, s)) || s;
      z(t[o]) && z(r)
        ? (t[o] = ne(t[o], r))
        : z(r)
        ? (t[o] = ne({}, r))
        : D(r)
        ? (t[o] = r.slice())
        : (t[o] = r);
    };
  for (let r = 0, s = arguments.length; r < s; r++)
    arguments[r] && I(arguments[r], n);
  return t;
}
const gt = (e, t, n, { allOwnKeys: r } = {}) => (
    I(
      t,
      (s, o) => {
        n && x(s) ? (e[o] = _e(s, n)) : (e[o] = s);
      },
      { allOwnKeys: r }
    ),
    e
  ),
  Tt = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e),
  Ot = (e, t, n, r) => {
    (e.prototype = Object.create(t.prototype, r)),
      (e.prototype.constructor = e),
      Object.defineProperty(e, "super", { value: t.prototype }),
      n && Object.assign(e.prototype, n);
  },
  At = (e, t, n, r) => {
    let s, o, i;
    const c = {};
    if (((t = t || {}), e == null)) return t;
    do {
      for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
        (i = s[o]), (!r || r(i, e, t)) && !c[i] && ((t[i] = e[i]), (c[i] = !0));
      e = n !== !1 && le(e);
    } while (e && (!n || n(e, t)) && e !== Object.prototype);
    return t;
  },
  xt = (e, t, n) => {
    (e = String(e)),
      (n === void 0 || n > e.length) && (n = e.length),
      (n -= t.length);
    const r = e.indexOf(t, n);
    return r !== -1 && r === n;
  },
  Pt = (e) => {
    if (!e) return null;
    if (D(e)) return e;
    let t = e.length;
    if (!Fe(t)) return null;
    const n = new Array(t);
    for (; t-- > 0; ) n[t] = e[t];
    return n;
  },
  Ct = (
    (e) => (t) =>
      e && t instanceof e
  )(typeof Uint8Array < "u" && le(Uint8Array)),
  Nt = (e, t) => {
    const r = (e && e[Symbol.iterator]).call(e);
    let s;
    for (; (s = r.next()) && !s.done; ) {
      const o = s.value;
      t.call(e, o[0], o[1]);
    }
  },
  _t = (e, t) => {
    let n;
    const r = [];
    for (; (n = e.exec(t)) !== null; ) r.push(n);
    return r;
  },
  Lt = P("HTMLFormElement"),
  Ft = (e) =>
    e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, s) {
      return r.toUpperCase() + s;
    }),
  ye = (
    ({ hasOwnProperty: e }) =>
    (t, n) =>
      e.call(t, n)
  )(Object.prototype),
  Bt = P("RegExp"),
  De = (e, t) => {
    const n = Object.getOwnPropertyDescriptors(e),
      r = {};
    I(n, (s, o) => {
      let i;
      (i = t(s, o, e)) !== !1 && (r[o] = i || s);
    }),
      Object.defineProperties(e, r);
  },
  Ut = (e) => {
    De(e, (t, n) => {
      if (x(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
        return !1;
      const r = e[n];
      if (x(r)) {
        if (((t.enumerable = !1), "writable" in t)) {
          t.writable = !1;
          return;
        }
        t.set ||
          (t.set = () => {
            throw Error("Can not rewrite read-only method '" + n + "'");
          });
      }
    });
  },
  Dt = (e, t) => {
    const n = {},
      r = (s) => {
        s.forEach((o) => {
          n[o] = !0;
        });
      };
    return D(e) ? r(e) : r(String(e).split(t)), n;
  },
  kt = () => {},
  jt = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t),
  Q = "abcdefghijklmnopqrstuvwxyz",
  we = "0123456789",
  ke = { DIGIT: we, ALPHA: Q, ALPHA_DIGIT: Q + Q.toUpperCase() + we },
  qt = (e = 16, t = ke.ALPHA_DIGIT) => {
    let n = "";
    const { length: r } = t;
    for (; e--; ) n += t[(Math.random() * r) | 0];
    return n;
  };
function It(e) {
  return !!(
    e &&
    x(e.append) &&
    e[Symbol.toStringTag] === "FormData" &&
    e[Symbol.iterator]
  );
}
const Ht = (e) => {
    const t = new Array(10),
      n = (r, s) => {
        if (K(r)) {
          if (t.indexOf(r) >= 0) return;
          if (!("toJSON" in r)) {
            t[s] = r;
            const o = D(r) ? [] : {};
            return (
              I(r, (i, c) => {
                const f = n(i, s + 1);
                !q(f) && (o[c] = f);
              }),
              (t[s] = void 0),
              o
            );
          }
        }
        return r;
      };
    return n(e, 0);
  },
  Mt = P("AsyncFunction"),
  zt = (e) => e && (K(e) || x(e)) && x(e.then) && x(e.catch),
  je = ((e, t) =>
    e
      ? setImmediate
      : t
      ? ((n, r) => (
          F.addEventListener(
            "message",
            ({ source: s, data: o }) => {
              s === F && o === n && r.length && r.shift()();
            },
            !1
          ),
          (s) => {
            r.push(s), F.postMessage(n, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (n) => setTimeout(n))(
    typeof setImmediate == "function",
    x(F.postMessage)
  ),
  Jt =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(F)
      : (typeof process < "u" && process.nextTick) || je,
  a = {
    isArray: D,
    isArrayBuffer: Le,
    isBuffer: it,
    isFormData: mt,
    isArrayBufferView: at,
    isString: ct,
    isNumber: Fe,
    isBoolean: ut,
    isObject: K,
    isPlainObject: z,
    isReadableStream: wt,
    isRequest: bt,
    isResponse: Et,
    isHeaders: Rt,
    isUndefined: q,
    isDate: lt,
    isFile: ft,
    isBlob: dt,
    isRegExp: Bt,
    isFunction: x,
    isStream: ht,
    isURLSearchParams: yt,
    isTypedArray: Ct,
    isFileList: pt,
    forEach: I,
    merge: ne,
    extend: gt,
    trim: St,
    stripBOM: Tt,
    inherits: Ot,
    toFlatObject: At,
    kindOf: V,
    kindOfTest: P,
    endsWith: xt,
    toArray: Pt,
    forEachEntry: Nt,
    matchAll: _t,
    isHTMLForm: Lt,
    hasOwnProperty: ye,
    hasOwnProp: ye,
    reduceDescriptors: De,
    freezeMethods: Ut,
    toObjectSet: Dt,
    toCamelCase: Ft,
    noop: kt,
    toFiniteNumber: jt,
    findKey: Be,
    global: F,
    isContextDefined: Ue,
    ALPHABET: ke,
    generateString: qt,
    isSpecCompliantForm: It,
    toJSONObject: Ht,
    isAsyncFn: Mt,
    isThenable: zt,
    setImmediate: je,
    asap: Jt,
  };
function m(e, t, n, r, s) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = e),
    (this.name = "AxiosError"),
    t && (this.code = t),
    n && (this.config = n),
    r && (this.request = r),
    s && ((this.response = s), (this.status = s.status ? s.status : null));
}
a.inherits(m, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: a.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const qe = m.prototype,
  Ie = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL",
].forEach((e) => {
  Ie[e] = { value: e };
});
Object.defineProperties(m, Ie);
Object.defineProperty(qe, "isAxiosError", { value: !0 });
m.from = (e, t, n, r, s, o) => {
  const i = Object.create(qe);
  return (
    a.toFlatObject(
      e,
      i,
      function (f) {
        return f !== Error.prototype;
      },
      (c) => c !== "isAxiosError"
    ),
    m.call(i, e.message, t, n, r, s),
    (i.cause = e),
    (i.name = e.name),
    o && Object.assign(i, o),
    i
  );
};
const vt = null;
function re(e) {
  return a.isPlainObject(e) || a.isArray(e);
}
function He(e) {
  return a.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function be(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (s, o) {
          return (s = He(s)), !n && o ? "[" + s + "]" : s;
        })
        .join(n ? "." : "")
    : t;
}
function $t(e) {
  return a.isArray(e) && !e.some(re);
}
const Vt = a.toFlatObject(a, {}, null, function (t) {
  return /^is[A-Z]/.test(t);
});
function G(e, t, n) {
  if (!a.isObject(e)) throw new TypeError("target must be an object");
  (t = t || new FormData()),
    (n = a.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (y, h) {
        return !a.isUndefined(h[y]);
      }
    ));
  const r = n.metaTokens,
    s = n.visitor || l,
    o = n.dots,
    i = n.indexes,
    f = (n.Blob || (typeof Blob < "u" && Blob)) && a.isSpecCompliantForm(t);
  if (!a.isFunction(s)) throw new TypeError("visitor must be a function");
  function u(p) {
    if (p === null) return "";
    if (a.isDate(p)) return p.toISOString();
    if (!f && a.isBlob(p))
      throw new m("Blob is not supported. Use a Buffer instead.");
    return a.isArrayBuffer(p) || a.isTypedArray(p)
      ? f && typeof Blob == "function"
        ? new Blob([p])
        : Buffer.from(p)
      : p;
  }
  function l(p, y, h) {
    let E = p;
    if (p && !h && typeof p == "object") {
      if (a.endsWith(y, "{}"))
        (y = r ? y : y.slice(0, -2)), (p = JSON.stringify(p));
      else if (
        (a.isArray(p) && $t(p)) ||
        ((a.isFileList(p) || a.endsWith(y, "[]")) && (E = a.toArray(p)))
      )
        return (
          (y = He(y)),
          E.forEach(function (g, C) {
            !(a.isUndefined(g) || g === null) &&
              t.append(
                i === !0 ? be([y], C, o) : i === null ? y : y + "[]",
                u(g)
              );
          }),
          !1
        );
    }
    return re(p) ? !0 : (t.append(be(h, y, o), u(p)), !1);
  }
  const d = [],
    b = Object.assign(Vt, {
      defaultVisitor: l,
      convertValue: u,
      isVisitable: re,
    });
  function R(p, y) {
    if (!a.isUndefined(p)) {
      if (d.indexOf(p) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(p),
        a.forEach(p, function (E, S) {
          (!(a.isUndefined(E) || E === null) &&
            s.call(t, E, a.isString(S) ? S.trim() : S, y, b)) === !0 &&
            R(E, y ? y.concat(S) : [S]);
        }),
        d.pop();
    }
  }
  if (!a.isObject(e)) throw new TypeError("data must be an object");
  return R(e), t;
}
function Ee(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) {
    return t[r];
  });
}
function fe(e, t) {
  (this._pairs = []), e && G(e, this, t);
}
const Me = fe.prototype;
Me.append = function (t, n) {
  this._pairs.push([t, n]);
};
Me.toString = function (t) {
  const n = t
    ? function (r) {
        return t.call(this, r, Ee);
      }
    : Ee;
  return this._pairs
    .map(function (s) {
      return n(s[0]) + "=" + n(s[1]);
    }, "")
    .join("&");
};
function Wt(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function ze(e, t, n) {
  if (!t) return e;
  const r = (n && n.encode) || Wt,
    s = n && n.serialize;
  let o;
  if (
    (s
      ? (o = s(t, n))
      : (o = a.isURLSearchParams(t) ? t.toString() : new fe(t, n).toString(r)),
    o)
  ) {
    const i = e.indexOf("#");
    i !== -1 && (e = e.slice(0, i)),
      (e += (e.indexOf("?") === -1 ? "?" : "&") + o);
  }
  return e;
}
class Re {
  constructor() {
    this.handlers = [];
  }
  use(t, n, r) {
    return (
      this.handlers.push({
        fulfilled: t,
        rejected: n,
        synchronous: r ? r.synchronous : !1,
        runWhen: r ? r.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(t) {
    a.forEach(this.handlers, function (r) {
      r !== null && t(r);
    });
  }
}
const Je = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Kt = typeof URLSearchParams < "u" ? URLSearchParams : fe,
  Gt = typeof FormData < "u" ? FormData : null,
  Xt = typeof Blob < "u" ? Blob : null,
  Qt = {
    isBrowser: !0,
    classes: { URLSearchParams: Kt, FormData: Gt, Blob: Xt },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  de = typeof window < "u" && typeof document < "u",
  se = (typeof navigator == "object" && navigator) || void 0,
  Zt =
    de &&
    (!se || ["ReactNative", "NativeScript", "NS"].indexOf(se.product) < 0),
  Yt =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  en = (de && window.location.href) || "http://localhost",
  tn = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: de,
        hasStandardBrowserEnv: Zt,
        hasStandardBrowserWebWorkerEnv: Yt,
        navigator: se,
        origin: en,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  O = { ...tn, ...Qt };
function nn(e, t) {
  return G(
    e,
    new O.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (n, r, s, o) {
          return O.isNode && a.isBuffer(n)
            ? (this.append(r, n.toString("base64")), !1)
            : o.defaultVisitor.apply(this, arguments);
        },
      },
      t
    )
  );
}
function rn(e) {
  return a
    .matchAll(/\w+|\[(\w*)]/g, e)
    .map((t) => (t[0] === "[]" ? "" : t[1] || t[0]));
}
function sn(e) {
  const t = {},
    n = Object.keys(e);
  let r;
  const s = n.length;
  let o;
  for (r = 0; r < s; r++) (o = n[r]), (t[o] = e[o]);
  return t;
}
function ve(e) {
  function t(n, r, s, o) {
    let i = n[o++];
    if (i === "__proto__") return !0;
    const c = Number.isFinite(+i),
      f = o >= n.length;
    return (
      (i = !i && a.isArray(s) ? s.length : i),
      f
        ? (a.hasOwnProp(s, i) ? (s[i] = [s[i], r]) : (s[i] = r), !c)
        : ((!s[i] || !a.isObject(s[i])) && (s[i] = []),
          t(n, r, s[i], o) && a.isArray(s[i]) && (s[i] = sn(s[i])),
          !c)
    );
  }
  if (a.isFormData(e) && a.isFunction(e.entries)) {
    const n = {};
    return (
      a.forEachEntry(e, (r, s) => {
        t(rn(r), s, n, 0);
      }),
      n
    );
  }
  return null;
}
function on(e, t, n) {
  if (a.isString(e))
    try {
      return (t || JSON.parse)(e), a.trim(e);
    } catch (r) {
      if (r.name !== "SyntaxError") throw r;
    }
  return (0, JSON.stringify)(e);
}
const H = {
  transitional: Je,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (t, n) {
      const r = n.getContentType() || "",
        s = r.indexOf("application/json") > -1,
        o = a.isObject(t);
      if ((o && a.isHTMLForm(t) && (t = new FormData(t)), a.isFormData(t)))
        return s ? JSON.stringify(ve(t)) : t;
      if (
        a.isArrayBuffer(t) ||
        a.isBuffer(t) ||
        a.isStream(t) ||
        a.isFile(t) ||
        a.isBlob(t) ||
        a.isReadableStream(t)
      )
        return t;
      if (a.isArrayBufferView(t)) return t.buffer;
      if (a.isURLSearchParams(t))
        return (
          n.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          t.toString()
        );
      let c;
      if (o) {
        if (r.indexOf("application/x-www-form-urlencoded") > -1)
          return nn(t, this.formSerializer).toString();
        if ((c = a.isFileList(t)) || r.indexOf("multipart/form-data") > -1) {
          const f = this.env && this.env.FormData;
          return G(c ? { "files[]": t } : t, f && new f(), this.formSerializer);
        }
      }
      return o || s ? (n.setContentType("application/json", !1), on(t)) : t;
    },
  ],
  transformResponse: [
    function (t) {
      const n = this.transitional || H.transitional,
        r = n && n.forcedJSONParsing,
        s = this.responseType === "json";
      if (a.isResponse(t) || a.isReadableStream(t)) return t;
      if (t && a.isString(t) && ((r && !this.responseType) || s)) {
        const i = !(n && n.silentJSONParsing) && s;
        try {
          return JSON.parse(t);
        } catch (c) {
          if (i)
            throw c.name === "SyntaxError"
              ? m.from(c, m.ERR_BAD_RESPONSE, this, null, this.response)
              : c;
        }
      }
      return t;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: O.classes.FormData, Blob: O.classes.Blob },
  validateStatus: function (t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
a.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  H.headers[e] = {};
});
const an = a.toObjectSet([
    "age",
    "authorization",
    "content-length",
    "content-type",
    "etag",
    "expires",
    "from",
    "host",
    "if-modified-since",
    "if-unmodified-since",
    "last-modified",
    "location",
    "max-forwards",
    "proxy-authorization",
    "referer",
    "retry-after",
    "user-agent",
  ]),
  cn = (e) => {
    const t = {};
    let n, r, s;
    return (
      e &&
        e
          .split(
            `
`
          )
          .forEach(function (i) {
            (s = i.indexOf(":")),
              (n = i.substring(0, s).trim().toLowerCase()),
              (r = i.substring(s + 1).trim()),
              !(!n || (t[n] && an[n])) &&
                (n === "set-cookie"
                  ? t[n]
                    ? t[n].push(r)
                    : (t[n] = [r])
                  : (t[n] = t[n] ? t[n] + ", " + r : r));
          }),
      t
    );
  },
  Se = Symbol("internals");
function j(e) {
  return e && String(e).trim().toLowerCase();
}
function J(e) {
  return e === !1 || e == null ? e : a.isArray(e) ? e.map(J) : String(e);
}
function un(e) {
  const t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let r;
  for (; (r = n.exec(e)); ) t[r[1]] = r[2];
  return t;
}
const ln = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Z(e, t, n, r, s) {
  if (a.isFunction(r)) return r.call(this, t, n);
  if ((s && (t = n), !!a.isString(t))) {
    if (a.isString(r)) return t.indexOf(r) !== -1;
    if (a.isRegExp(r)) return r.test(t);
  }
}
function fn(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (t, n, r) => n.toUpperCase() + r);
}
function dn(e, t) {
  const n = a.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((r) => {
    Object.defineProperty(e, r + n, {
      value: function (s, o, i) {
        return this[r].call(this, t, s, o, i);
      },
      configurable: !0,
    });
  });
}
class A {
  constructor(t) {
    t && this.set(t);
  }
  set(t, n, r) {
    const s = this;
    function o(c, f, u) {
      const l = j(f);
      if (!l) throw new Error("header name must be a non-empty string");
      const d = a.findKey(s, l);
      (!d || s[d] === void 0 || u === !0 || (u === void 0 && s[d] !== !1)) &&
        (s[d || f] = J(c));
    }
    const i = (c, f) => a.forEach(c, (u, l) => o(u, l, f));
    if (a.isPlainObject(t) || t instanceof this.constructor) i(t, n);
    else if (a.isString(t) && (t = t.trim()) && !ln(t)) i(cn(t), n);
    else if (a.isHeaders(t)) for (const [c, f] of t.entries()) o(f, c, r);
    else t != null && o(n, t, r);
    return this;
  }
  get(t, n) {
    if (((t = j(t)), t)) {
      const r = a.findKey(this, t);
      if (r) {
        const s = this[r];
        if (!n) return s;
        if (n === !0) return un(s);
        if (a.isFunction(n)) return n.call(this, s, r);
        if (a.isRegExp(n)) return n.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, n) {
    if (((t = j(t)), t)) {
      const r = a.findKey(this, t);
      return !!(r && this[r] !== void 0 && (!n || Z(this, this[r], r, n)));
    }
    return !1;
  }
  delete(t, n) {
    const r = this;
    let s = !1;
    function o(i) {
      if (((i = j(i)), i)) {
        const c = a.findKey(r, i);
        c && (!n || Z(r, r[c], c, n)) && (delete r[c], (s = !0));
      }
    }
    return a.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const n = Object.keys(this);
    let r = n.length,
      s = !1;
    for (; r--; ) {
      const o = n[r];
      (!t || Z(this, this[o], o, t, !0)) && (delete this[o], (s = !0));
    }
    return s;
  }
  normalize(t) {
    const n = this,
      r = {};
    return (
      a.forEach(this, (s, o) => {
        const i = a.findKey(r, o);
        if (i) {
          (n[i] = J(s)), delete n[o];
          return;
        }
        const c = t ? fn(o) : String(o).trim();
        c !== o && delete n[o], (n[c] = J(s)), (r[c] = !0);
      }),
      this
    );
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const n = Object.create(null);
    return (
      a.forEach(this, (r, s) => {
        r != null && r !== !1 && (n[s] = t && a.isArray(r) ? r.join(", ") : r);
      }),
      n
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, n]) => t + ": " + n).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...n) {
    const r = new this(t);
    return n.forEach((s) => r.set(s)), r;
  }
  static accessor(t) {
    const r = (this[Se] = this[Se] = { accessors: {} }).accessors,
      s = this.prototype;
    function o(i) {
      const c = j(i);
      r[c] || (dn(s, i), (r[c] = !0));
    }
    return a.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
A.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
a.reduceDescriptors(A.prototype, ({ value: e }, t) => {
  let n = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(r) {
      this[n] = r;
    },
  };
});
a.freezeMethods(A);
function Y(e, t) {
  const n = this || H,
    r = t || n,
    s = A.from(r.headers);
  let o = r.data;
  return (
    a.forEach(e, function (c) {
      o = c.call(n, o, s.normalize(), t ? t.status : void 0);
    }),
    s.normalize(),
    o
  );
}
function $e(e) {
  return !!(e && e.__CANCEL__);
}
function k(e, t, n) {
  m.call(this, e ?? "canceled", m.ERR_CANCELED, t, n),
    (this.name = "CanceledError");
}
a.inherits(k, m, { __CANCEL__: !0 });
function Ve(e, t, n) {
  const r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new m(
          "Request failed with status code " + n.status,
          [m.ERR_BAD_REQUEST, m.ERR_BAD_RESPONSE][
            Math.floor(n.status / 100) - 4
          ],
          n.config,
          n.request,
          n
        )
      );
}
function pn(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return (t && t[1]) || "";
}
function hn(e, t) {
  e = e || 10;
  const n = new Array(e),
    r = new Array(e);
  let s = 0,
    o = 0,
    i;
  return (
    (t = t !== void 0 ? t : 1e3),
    function (f) {
      const u = Date.now(),
        l = r[o];
      i || (i = u), (n[s] = f), (r[s] = u);
      let d = o,
        b = 0;
      for (; d !== s; ) (b += n[d++]), (d = d % e);
      if (((s = (s + 1) % e), s === o && (o = (o + 1) % e), u - i < t)) return;
      const R = l && u - l;
      return R ? Math.round((b * 1e3) / R) : void 0;
    }
  );
}
function mn(e, t) {
  let n = 0,
    r = 1e3 / t,
    s,
    o;
  const i = (u, l = Date.now()) => {
    (n = l), (s = null), o && (clearTimeout(o), (o = null)), e.apply(null, u);
  };
  return [
    (...u) => {
      const l = Date.now(),
        d = l - n;
      d >= r
        ? i(u, l)
        : ((s = u),
          o ||
            (o = setTimeout(() => {
              (o = null), i(s);
            }, r - d)));
    },
    () => s && i(s),
  ];
}
const v = (e, t, n = 3) => {
    let r = 0;
    const s = hn(50, 250);
    return mn((o) => {
      const i = o.loaded,
        c = o.lengthComputable ? o.total : void 0,
        f = i - r,
        u = s(f),
        l = i <= c;
      r = i;
      const d = {
        loaded: i,
        total: c,
        progress: c ? i / c : void 0,
        bytes: f,
        rate: u || void 0,
        estimated: u && c && l ? (c - i) / u : void 0,
        event: o,
        lengthComputable: c != null,
        [t ? "download" : "upload"]: !0,
      };
      e(d);
    }, n);
  },
  ge = (e, t) => {
    const n = e != null;
    return [(r) => t[0]({ lengthComputable: n, total: e, loaded: r }), t[1]];
  },
  Te =
    (e) =>
    (...t) =>
      a.asap(() => e(...t)),
  yn = O.hasStandardBrowserEnv
    ? (function () {
        const t = O.navigator && /(msie|trident)/i.test(O.navigator.userAgent),
          n = document.createElement("a");
        let r;
        function s(o) {
          let i = o;
          return (
            t && (n.setAttribute("href", i), (i = n.href)),
            n.setAttribute("href", i),
            {
              href: n.href,
              protocol: n.protocol ? n.protocol.replace(/:$/, "") : "",
              host: n.host,
              search: n.search ? n.search.replace(/^\?/, "") : "",
              hash: n.hash ? n.hash.replace(/^#/, "") : "",
              hostname: n.hostname,
              port: n.port,
              pathname:
                n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname,
            }
          );
        }
        return (
          (r = s(window.location.href)),
          function (i) {
            const c = a.isString(i) ? s(i) : i;
            return c.protocol === r.protocol && c.host === r.host;
          }
        );
      })()
    : (function () {
        return function () {
          return !0;
        };
      })(),
  wn = O.hasStandardBrowserEnv
    ? {
        write(e, t, n, r, s, o) {
          const i = [e + "=" + encodeURIComponent(t)];
          a.isNumber(n) && i.push("expires=" + new Date(n).toGMTString()),
            a.isString(r) && i.push("path=" + r),
            a.isString(s) && i.push("domain=" + s),
            o === !0 && i.push("secure"),
            (document.cookie = i.join("; "));
        },
        read(e) {
          const t = document.cookie.match(
            new RegExp("(^|;\\s*)(" + e + ")=([^;]*)")
          );
          return t ? decodeURIComponent(t[3]) : null;
        },
        remove(e) {
          this.write(e, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function bn(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function En(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function We(e, t) {
  return e && !bn(t) ? En(e, t) : t;
}
const Oe = (e) => (e instanceof A ? { ...e } : e);
function U(e, t) {
  t = t || {};
  const n = {};
  function r(u, l, d) {
    return a.isPlainObject(u) && a.isPlainObject(l)
      ? a.merge.call({ caseless: d }, u, l)
      : a.isPlainObject(l)
      ? a.merge({}, l)
      : a.isArray(l)
      ? l.slice()
      : l;
  }
  function s(u, l, d) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u)) return r(void 0, u, d);
    } else return r(u, l, d);
  }
  function o(u, l) {
    if (!a.isUndefined(l)) return r(void 0, l);
  }
  function i(u, l) {
    if (a.isUndefined(l)) {
      if (!a.isUndefined(u)) return r(void 0, u);
    } else return r(void 0, l);
  }
  function c(u, l, d) {
    if (d in t) return r(u, l);
    if (d in e) return r(void 0, u);
  }
  const f = {
    url: o,
    method: o,
    data: o,
    baseURL: i,
    transformRequest: i,
    transformResponse: i,
    paramsSerializer: i,
    timeout: i,
    timeoutMessage: i,
    withCredentials: i,
    withXSRFToken: i,
    adapter: i,
    responseType: i,
    xsrfCookieName: i,
    xsrfHeaderName: i,
    onUploadProgress: i,
    onDownloadProgress: i,
    decompress: i,
    maxContentLength: i,
    maxBodyLength: i,
    beforeRedirect: i,
    transport: i,
    httpAgent: i,
    httpsAgent: i,
    cancelToken: i,
    socketPath: i,
    responseEncoding: i,
    validateStatus: c,
    headers: (u, l) => s(Oe(u), Oe(l), !0),
  };
  return (
    a.forEach(Object.keys(Object.assign({}, e, t)), function (l) {
      const d = f[l] || s,
        b = d(e[l], t[l], l);
      (a.isUndefined(b) && d !== c) || (n[l] = b);
    }),
    n
  );
}
const Ke = (e) => {
    const t = U({}, e);
    let {
      data: n,
      withXSRFToken: r,
      xsrfHeaderName: s,
      xsrfCookieName: o,
      headers: i,
      auth: c,
    } = t;
    (t.headers = i = A.from(i)),
      (t.url = ze(We(t.baseURL, t.url), e.params, e.paramsSerializer)),
      c &&
        i.set(
          "Authorization",
          "Basic " +
            btoa(
              (c.username || "") +
                ":" +
                (c.password ? unescape(encodeURIComponent(c.password)) : "")
            )
        );
    let f;
    if (a.isFormData(n)) {
      if (O.hasStandardBrowserEnv || O.hasStandardBrowserWebWorkerEnv)
        i.setContentType(void 0);
      else if ((f = i.getContentType()) !== !1) {
        const [u, ...l] = f
          ? f
              .split(";")
              .map((d) => d.trim())
              .filter(Boolean)
          : [];
        i.setContentType([u || "multipart/form-data", ...l].join("; "));
      }
    }
    if (
      O.hasStandardBrowserEnv &&
      (r && a.isFunction(r) && (r = r(t)), r || (r !== !1 && yn(t.url)))
    ) {
      const u = s && o && wn.read(o);
      u && i.set(s, u);
    }
    return t;
  },
  Rn = typeof XMLHttpRequest < "u",
  Sn =
    Rn &&
    function (e) {
      return new Promise(function (n, r) {
        const s = Ke(e);
        let o = s.data;
        const i = A.from(s.headers).normalize();
        let { responseType: c, onUploadProgress: f, onDownloadProgress: u } = s,
          l,
          d,
          b,
          R,
          p;
        function y() {
          R && R(),
            p && p(),
            s.cancelToken && s.cancelToken.unsubscribe(l),
            s.signal && s.signal.removeEventListener("abort", l);
        }
        let h = new XMLHttpRequest();
        h.open(s.method.toUpperCase(), s.url, !0), (h.timeout = s.timeout);
        function E() {
          if (!h) return;
          const g = A.from(
              "getAllResponseHeaders" in h && h.getAllResponseHeaders()
            ),
            T = {
              data:
                !c || c === "text" || c === "json"
                  ? h.responseText
                  : h.response,
              status: h.status,
              statusText: h.statusText,
              headers: g,
              config: e,
              request: h,
            };
          Ve(
            function (L) {
              n(L), y();
            },
            function (L) {
              r(L), y();
            },
            T
          ),
            (h = null);
        }
        "onloadend" in h
          ? (h.onloadend = E)
          : (h.onreadystatechange = function () {
              !h ||
                h.readyState !== 4 ||
                (h.status === 0 &&
                  !(h.responseURL && h.responseURL.indexOf("file:") === 0)) ||
                setTimeout(E);
            }),
          (h.onabort = function () {
            h &&
              (r(new m("Request aborted", m.ECONNABORTED, e, h)), (h = null));
          }),
          (h.onerror = function () {
            r(new m("Network Error", m.ERR_NETWORK, e, h)), (h = null);
          }),
          (h.ontimeout = function () {
            let C = s.timeout
              ? "timeout of " + s.timeout + "ms exceeded"
              : "timeout exceeded";
            const T = s.transitional || Je;
            s.timeoutErrorMessage && (C = s.timeoutErrorMessage),
              r(
                new m(
                  C,
                  T.clarifyTimeoutError ? m.ETIMEDOUT : m.ECONNABORTED,
                  e,
                  h
                )
              ),
              (h = null);
          }),
          o === void 0 && i.setContentType(null),
          "setRequestHeader" in h &&
            a.forEach(i.toJSON(), function (C, T) {
              h.setRequestHeader(T, C);
            }),
          a.isUndefined(s.withCredentials) ||
            (h.withCredentials = !!s.withCredentials),
          c && c !== "json" && (h.responseType = s.responseType),
          u && (([b, p] = v(u, !0)), h.addEventListener("progress", b)),
          f &&
            h.upload &&
            (([d, R] = v(f)),
            h.upload.addEventListener("progress", d),
            h.upload.addEventListener("loadend", R)),
          (s.cancelToken || s.signal) &&
            ((l = (g) => {
              h &&
                (r(!g || g.type ? new k(null, e, h) : g),
                h.abort(),
                (h = null));
            }),
            s.cancelToken && s.cancelToken.subscribe(l),
            s.signal &&
              (s.signal.aborted ? l() : s.signal.addEventListener("abort", l)));
        const S = pn(s.url);
        if (S && O.protocols.indexOf(S) === -1) {
          r(new m("Unsupported protocol " + S + ":", m.ERR_BAD_REQUEST, e));
          return;
        }
        h.send(o || null);
      });
    },
  gn = (e, t) => {
    const { length: n } = (e = e ? e.filter(Boolean) : []);
    if (t || n) {
      let r = new AbortController(),
        s;
      const o = function (u) {
        if (!s) {
          (s = !0), c();
          const l = u instanceof Error ? u : this.reason;
          r.abort(
            l instanceof m ? l : new k(l instanceof Error ? l.message : l)
          );
        }
      };
      let i =
        t &&
        setTimeout(() => {
          (i = null), o(new m(`timeout ${t} of ms exceeded`, m.ETIMEDOUT));
        }, t);
      const c = () => {
        e &&
          (i && clearTimeout(i),
          (i = null),
          e.forEach((u) => {
            u.unsubscribe
              ? u.unsubscribe(o)
              : u.removeEventListener("abort", o);
          }),
          (e = null));
      };
      e.forEach((u) => u.addEventListener("abort", o));
      const { signal: f } = r;
      return (f.unsubscribe = () => a.asap(c)), f;
    }
  },
  Tn = function* (e, t) {
    let n = e.byteLength;
    if (n < t) {
      yield e;
      return;
    }
    let r = 0,
      s;
    for (; r < n; ) (s = r + t), yield e.slice(r, s), (r = s);
  },
  On = async function* (e, t) {
    for await (const n of An(e)) yield* Tn(n, t);
  },
  An = async function* (e) {
    if (e[Symbol.asyncIterator]) {
      yield* e;
      return;
    }
    const t = e.getReader();
    try {
      for (;;) {
        const { done: n, value: r } = await t.read();
        if (n) break;
        yield r;
      }
    } finally {
      await t.cancel();
    }
  },
  Ae = (e, t, n, r) => {
    const s = On(e, t);
    let o = 0,
      i,
      c = (f) => {
        i || ((i = !0), r && r(f));
      };
    return new ReadableStream(
      {
        async pull(f) {
          try {
            const { done: u, value: l } = await s.next();
            if (u) {
              c(), f.close();
              return;
            }
            let d = l.byteLength;
            if (n) {
              let b = (o += d);
              n(b);
            }
            f.enqueue(new Uint8Array(l));
          } catch (u) {
            throw (c(u), u);
          }
        },
        cancel(f) {
          return c(f), s.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  X =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Ge = X && typeof ReadableStream == "function",
  xn =
    X &&
    (typeof TextEncoder == "function"
      ? (
          (e) => (t) =>
            e.encode(t)
        )(new TextEncoder())
      : async (e) => new Uint8Array(await new Response(e).arrayBuffer())),
  Xe = (e, ...t) => {
    try {
      return !!e(...t);
    } catch {
      return !1;
    }
  },
  Pn =
    Ge &&
    Xe(() => {
      let e = !1;
      const t = new Request(O.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (e = !0), "half";
        },
      }).headers.has("Content-Type");
      return e && !t;
    }),
  xe = 64 * 1024,
  oe = Ge && Xe(() => a.isReadableStream(new Response("").body)),
  $ = { stream: oe && ((e) => e.body) };
X &&
  ((e) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((t) => {
      !$[t] &&
        ($[t] = a.isFunction(e[t])
          ? (n) => n[t]()
          : (n, r) => {
              throw new m(
                `Response type '${t}' is not supported`,
                m.ERR_NOT_SUPPORT,
                r
              );
            });
    });
  })(new Response());
const Cn = async (e) => {
    if (e == null) return 0;
    if (a.isBlob(e)) return e.size;
    if (a.isSpecCompliantForm(e))
      return (
        await new Request(O.origin, { method: "POST", body: e }).arrayBuffer()
      ).byteLength;
    if (a.isArrayBufferView(e) || a.isArrayBuffer(e)) return e.byteLength;
    if ((a.isURLSearchParams(e) && (e = e + ""), a.isString(e)))
      return (await xn(e)).byteLength;
  },
  Nn = async (e, t) => {
    const n = a.toFiniteNumber(e.getContentLength());
    return n ?? Cn(t);
  },
  _n =
    X &&
    (async (e) => {
      let {
        url: t,
        method: n,
        data: r,
        signal: s,
        cancelToken: o,
        timeout: i,
        onDownloadProgress: c,
        onUploadProgress: f,
        responseType: u,
        headers: l,
        withCredentials: d = "same-origin",
        fetchOptions: b,
      } = Ke(e);
      u = u ? (u + "").toLowerCase() : "text";
      let R = gn([s, o && o.toAbortSignal()], i),
        p;
      const y =
        R &&
        R.unsubscribe &&
        (() => {
          R.unsubscribe();
        });
      let h;
      try {
        if (
          f &&
          Pn &&
          n !== "get" &&
          n !== "head" &&
          (h = await Nn(l, r)) !== 0
        ) {
          let T = new Request(t, { method: "POST", body: r, duplex: "half" }),
            N;
          if (
            (a.isFormData(r) &&
              (N = T.headers.get("content-type")) &&
              l.setContentType(N),
            T.body)
          ) {
            const [L, M] = ge(h, v(Te(f)));
            r = Ae(T.body, xe, L, M);
          }
        }
        a.isString(d) || (d = d ? "include" : "omit");
        const E = "credentials" in Request.prototype;
        p = new Request(t, {
          ...b,
          signal: R,
          method: n.toUpperCase(),
          headers: l.normalize().toJSON(),
          body: r,
          duplex: "half",
          credentials: E ? d : void 0,
        });
        let S = await fetch(p);
        const g = oe && (u === "stream" || u === "response");
        if (oe && (c || (g && y))) {
          const T = {};
          ["status", "statusText", "headers"].forEach((me) => {
            T[me] = S[me];
          });
          const N = a.toFiniteNumber(S.headers.get("content-length")),
            [L, M] = (c && ge(N, v(Te(c), !0))) || [];
          S = new Response(
            Ae(S.body, xe, L, () => {
              M && M(), y && y();
            }),
            T
          );
        }
        u = u || "text";
        let C = await $[a.findKey($, u) || "text"](S, e);
        return (
          !g && y && y(),
          await new Promise((T, N) => {
            Ve(T, N, {
              data: C,
              headers: A.from(S.headers),
              status: S.status,
              statusText: S.statusText,
              config: e,
              request: p,
            });
          })
        );
      } catch (E) {
        throw (
          (y && y(),
          E && E.name === "TypeError" && /fetch/i.test(E.message)
            ? Object.assign(new m("Network Error", m.ERR_NETWORK, e, p), {
                cause: E.cause || E,
              })
            : m.from(E, E && E.code, e, p))
        );
      }
    }),
  ie = { http: vt, xhr: Sn, fetch: _n };
a.forEach(ie, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {}
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Pe = (e) => `- ${e}`,
  Ln = (e) => a.isFunction(e) || e === null || e === !1,
  Qe = {
    getAdapter: (e) => {
      e = a.isArray(e) ? e : [e];
      const { length: t } = e;
      let n, r;
      const s = {};
      for (let o = 0; o < t; o++) {
        n = e[o];
        let i;
        if (
          ((r = n),
          !Ln(n) && ((r = ie[(i = String(n)).toLowerCase()]), r === void 0))
        )
          throw new m(`Unknown adapter '${i}'`);
        if (r) break;
        s[i || "#" + o] = r;
      }
      if (!r) {
        const o = Object.entries(s).map(
          ([c, f]) =>
            `adapter ${c} ` +
            (f === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let i = t
          ? o.length > 1
            ? `since :
` +
              o.map(Pe).join(`
`)
            : " " + Pe(o[0])
          : "as no adapter specified";
        throw new m(
          "There is no suitable adapter to dispatch the request " + i,
          "ERR_NOT_SUPPORT"
        );
      }
      return r;
    },
    adapters: ie,
  };
function ee(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new k(null, e);
}
function Ce(e) {
  return (
    ee(e),
    (e.headers = A.from(e.headers)),
    (e.data = Y.call(e, e.transformRequest)),
    ["post", "put", "patch"].indexOf(e.method) !== -1 &&
      e.headers.setContentType("application/x-www-form-urlencoded", !1),
    Qe.getAdapter(e.adapter || H.adapter)(e).then(
      function (r) {
        return (
          ee(e),
          (r.data = Y.call(e, e.transformResponse, r)),
          (r.headers = A.from(r.headers)),
          r
        );
      },
      function (r) {
        return (
          $e(r) ||
            (ee(e),
            r &&
              r.response &&
              ((r.response.data = Y.call(e, e.transformResponse, r.response)),
              (r.response.headers = A.from(r.response.headers)))),
          Promise.reject(r)
        );
      }
    )
  );
}
const Ze = "1.7.7",
  pe = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (e, t) => {
    pe[e] = function (r) {
      return typeof r === e || "a" + (t < 1 ? "n " : " ") + e;
    };
  }
);
const Ne = {};
pe.transitional = function (t, n, r) {
  function s(o, i) {
    return (
      "[Axios v" +
      Ze +
      "] Transitional option '" +
      o +
      "'" +
      i +
      (r ? ". " + r : "")
    );
  }
  return (o, i, c) => {
    if (t === !1)
      throw new m(
        s(i, " has been removed" + (n ? " in " + n : "")),
        m.ERR_DEPRECATED
      );
    return (
      n &&
        !Ne[i] &&
        ((Ne[i] = !0),
        console.warn(
          s(
            i,
            " has been deprecated since v" +
              n +
              " and will be removed in the near future"
          )
        )),
      t ? t(o, i, c) : !0
    );
  };
};
function Fn(e, t, n) {
  if (typeof e != "object")
    throw new m("options must be an object", m.ERR_BAD_OPTION_VALUE);
  const r = Object.keys(e);
  let s = r.length;
  for (; s-- > 0; ) {
    const o = r[s],
      i = t[o];
    if (i) {
      const c = e[o],
        f = c === void 0 || i(c, o, e);
      if (f !== !0)
        throw new m("option " + o + " must be " + f, m.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new m("Unknown option " + o, m.ERR_BAD_OPTION);
  }
}
const ae = { assertOptions: Fn, validators: pe },
  _ = ae.validators;
class B {
  constructor(t) {
    (this.defaults = t),
      (this.interceptors = { request: new Re(), response: new Re() });
  }
  async request(t, n) {
    try {
      return await this._request(t, n);
    } catch (r) {
      if (r instanceof Error) {
        let s;
        Error.captureStackTrace
          ? Error.captureStackTrace((s = {}))
          : (s = new Error());
        const o = s.stack ? s.stack.replace(/^.+\n/, "") : "";
        try {
          r.stack
            ? o &&
              !String(r.stack).endsWith(o.replace(/^.+\n.+\n/, "")) &&
              (r.stack +=
                `
` + o)
            : (r.stack = o);
        } catch {}
      }
      throw r;
    }
  }
  _request(t, n) {
    typeof t == "string" ? ((n = n || {}), (n.url = t)) : (n = t || {}),
      (n = U(this.defaults, n));
    const { transitional: r, paramsSerializer: s, headers: o } = n;
    r !== void 0 &&
      ae.assertOptions(
        r,
        {
          silentJSONParsing: _.transitional(_.boolean),
          forcedJSONParsing: _.transitional(_.boolean),
          clarifyTimeoutError: _.transitional(_.boolean),
        },
        !1
      ),
      s != null &&
        (a.isFunction(s)
          ? (n.paramsSerializer = { serialize: s })
          : ae.assertOptions(
              s,
              { encode: _.function, serialize: _.function },
              !0
            )),
      (n.method = (n.method || this.defaults.method || "get").toLowerCase());
    let i = o && a.merge(o.common, o[n.method]);
    o &&
      a.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (p) => {
          delete o[p];
        }
      ),
      (n.headers = A.concat(i, o));
    const c = [];
    let f = !0;
    this.interceptors.request.forEach(function (y) {
      (typeof y.runWhen == "function" && y.runWhen(n) === !1) ||
        ((f = f && y.synchronous), c.unshift(y.fulfilled, y.rejected));
    });
    const u = [];
    this.interceptors.response.forEach(function (y) {
      u.push(y.fulfilled, y.rejected);
    });
    let l,
      d = 0,
      b;
    if (!f) {
      const p = [Ce.bind(this), void 0];
      for (
        p.unshift.apply(p, c),
          p.push.apply(p, u),
          b = p.length,
          l = Promise.resolve(n);
        d < b;

      )
        l = l.then(p[d++], p[d++]);
      return l;
    }
    b = c.length;
    let R = n;
    for (d = 0; d < b; ) {
      const p = c[d++],
        y = c[d++];
      try {
        R = p(R);
      } catch (h) {
        y.call(this, h);
        break;
      }
    }
    try {
      l = Ce.call(this, R);
    } catch (p) {
      return Promise.reject(p);
    }
    for (d = 0, b = u.length; d < b; ) l = l.then(u[d++], u[d++]);
    return l;
  }
  getUri(t) {
    t = U(this.defaults, t);
    const n = We(t.baseURL, t.url);
    return ze(n, t.params, t.paramsSerializer);
  }
}
a.forEach(["delete", "get", "head", "options"], function (t) {
  B.prototype[t] = function (n, r) {
    return this.request(
      U(r || {}, { method: t, url: n, data: (r || {}).data })
    );
  };
});
a.forEach(["post", "put", "patch"], function (t) {
  function n(r) {
    return function (o, i, c) {
      return this.request(
        U(c || {}, {
          method: t,
          headers: r ? { "Content-Type": "multipart/form-data" } : {},
          url: o,
          data: i,
        })
      );
    };
  }
  (B.prototype[t] = n()), (B.prototype[t + "Form"] = n(!0));
});
class he {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let n;
    this.promise = new Promise(function (o) {
      n = o;
    });
    const r = this;
    this.promise.then((s) => {
      if (!r._listeners) return;
      let o = r._listeners.length;
      for (; o-- > 0; ) r._listeners[o](s);
      r._listeners = null;
    }),
      (this.promise.then = (s) => {
        let o;
        const i = new Promise((c) => {
          r.subscribe(c), (o = c);
        }).then(s);
        return (
          (i.cancel = function () {
            r.unsubscribe(o);
          }),
          i
        );
      }),
      t(function (o, i, c) {
        r.reason || ((r.reason = new k(o, i, c)), n(r.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : (this._listeners = [t]);
  }
  unsubscribe(t) {
    if (!this._listeners) return;
    const n = this._listeners.indexOf(t);
    n !== -1 && this._listeners.splice(n, 1);
  }
  toAbortSignal() {
    const t = new AbortController(),
      n = (r) => {
        t.abort(r);
      };
    return (
      this.subscribe(n),
      (t.signal.unsubscribe = () => this.unsubscribe(n)),
      t.signal
    );
  }
  static source() {
    let t;
    return {
      token: new he(function (s) {
        t = s;
      }),
      cancel: t,
    };
  }
}
function Bn(e) {
  return function (n) {
    return e.apply(null, n);
  };
}
function Un(e) {
  return a.isObject(e) && e.isAxiosError === !0;
}
const ce = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511,
};
Object.entries(ce).forEach(([e, t]) => {
  ce[t] = e;
});
function Ye(e) {
  const t = new B(e),
    n = _e(B.prototype.request, t);
  return (
    a.extend(n, B.prototype, t, { allOwnKeys: !0 }),
    a.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (s) {
      return Ye(U(e, s));
    }),
    n
  );
}
const w = Ye(H);
w.Axios = B;
w.CanceledError = k;
w.CancelToken = he;
w.isCancel = $e;
w.VERSION = Ze;
w.toFormData = G;
w.AxiosError = m;
w.Cancel = w.CanceledError;
w.all = function (t) {
  return Promise.all(t);
};
w.spread = Bn;
w.isAxiosError = Un;
w.mergeConfig = U;
w.AxiosHeaders = A;
w.formToJSON = (e) => ve(a.isHTMLForm(e) ? new FormData(e) : e);
w.getAdapter = Qe.getAdapter;
w.HttpStatusCode = ce;
w.default = w;
const et = "http://ec2-54-215-221-243.us-west-1.compute.amazonaws.com:8000",
  Dn = "http://ec2-54-215-221-243.us-west-1.compute.amazonaws.com:8001",
  tt = w.create({
    baseURL: et,
    headers: { "Content-Type": "application/json" },
    timeout: 2e4,
  }),
  ue = w.create({
    baseURL: Dn,
    headers: { "Content-Type": "application/json" },
    timeout: 2e4,
  }),
  nt = (e) => {
    var n;
    const t = (n = te.getState().auth.token) == null ? void 0 : n.access;
    return t && (e.headers.Authorization = `Bearer ${t}`), e;
  };
tt.interceptors.request.use(nt, (e) => Promise.reject(e));
ue.interceptors.request.use(nt, (e) => Promise.reject(e));
const rt = async () => {
  try {
    const e = te.getState().auth.token.refresh,
      t = await w.post(`${et}/userservice/v1/token/refresh/`, { refresh: e });
    return (
      te.dispatch(st({ access: t.data.access, refresh: e })), t.data.access
    );
  } catch (e) {
    throw (console.error("Failed to refresh access token:", e), e);
  }
};
tt.interceptors.response.use(
  (e) => e,
  async (e) => {
    const t = e.config;
    if (t.url === "/userservice/v1/login/") return Promise.reject(e);
    if (e.response && e.response.status === 401 && !t._retry) {
      t._retry = !0;
      try {
        const n = await rt();
        return (t.headers.Authorization = `Bearer ${n}`), api(t);
      } catch (n) {
        return (window.location.href = "/"), Promise.reject(n);
      }
    }
    return Promise.reject(e);
  }
);
ue.interceptors.response.use(
  (e) => e,
  async (e) => {
    const t = e.config;
    if (e.response && e.response.status === 401 && !t._retry) {
      t._retry = !0;
      try {
        const n = await rt();
        return (t.headers.Authorization = `Bearer ${n}`), ue(t);
      } catch (n) {
        return (window.location.href = "/"), Promise.reject(n);
      }
    }
    return Promise.reject(e);
  }
);
export { ue as m, jn as s, tt as u };
