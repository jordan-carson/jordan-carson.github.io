import {
  n as _e,
  s as ot,
  o as ze,
  t as le,
} from "../chunks/index.eb9e444d.js";
function it(e, a) {
  return e === "/" || a === "ignore"
    ? e
    : a === "never"
    ? e.endsWith("/")
      ? e.slice(0, -1)
      : e
    : a === "always" && !e.endsWith("/")
    ? e + "/"
    : e;
}
function st(e) {
  return e.split("%25").map(decodeURI).join("%25");
}
function lt(e) {
  for (const a in e) e[a] = decodeURIComponent(e[a]);
  return e;
}
const ct = ["href", "pathname", "search", "searchParams", "toString", "toJSON"];
function ft(e, a) {
  const i = new URL(e);
  for (const s of ct) {
    let u = i[s];
    Object.defineProperty(i, s, {
      get() {
        return a(), u;
      },
      enumerable: !0,
      configurable: !0,
    });
  }
  return ut(i), i;
}
function ut(e) {
  Object.defineProperty(e, "hash", {
    get() {
      throw new Error(
        "Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead"
      );
    },
  });
}
const dt = "/__data.json";
function ht(e) {
  return e.replace(/\/$/, "") + dt;
}
const J = [];
function Re(e, a = _e) {
  let i;
  const s = new Set();
  function u(c) {
    if (ot(e, c) && ((e = c), i)) {
      const g = !J.length;
      for (const h of s) h[1](), J.push(h, e);
      if (g) {
        for (let h = 0; h < J.length; h += 2) J[h][0](J[h + 1]);
        J.length = 0;
      }
    }
  }
  function d(c) {
    u(c(e));
  }
  function v(c, g = _e) {
    const h = [c, g];
    return (
      s.add(h),
      s.size === 1 && (i = a(u) || _e),
      c(e),
      () => {
        s.delete(h), s.size === 0 && i && (i(), (i = null));
      }
    );
  }
  return { set: u, update: d, subscribe: v };
}
var Xe;
const H =
  ((Xe = globalThis.__sveltekit_ymq92y) == null ? void 0 : Xe.base) ?? "";
var Ze;
const pt =
    ((Ze = globalThis.__sveltekit_ymq92y) == null ? void 0 : Ze.assets) ?? H,
  gt = "1678677443211",
  Qe = "sveltekit:snapshot",
  et = "sveltekit:scroll",
  C = "sveltekit:index",
  ue = { tap: 1, hover: 2, viewport: 3, eager: 4, off: -1 };
function Ge(e) {
  let a = e.baseURI;
  if (!a) {
    const i = e.getElementsByTagName("base");
    a = i.length ? i[0].href : e.URL;
  }
  return a;
}
function ee() {
  return { x: pageXOffset, y: pageYOffset };
}
function ce(e, a) {
  return e.getAttribute(`data-sveltekit-${a}`);
}
const He = { ...ue, "": ue.hover };
function tt(e) {
  let a = e.assignedSlot ?? e.parentNode;
  return (a == null ? void 0 : a.nodeType) === 11 && (a = a.host), a;
}
function Be(e, a) {
  for (; e && e !== a; ) {
    if (e.nodeName.toUpperCase() === "A" && e.hasAttribute("href")) return e;
    e = tt(e);
  }
}
function be(e, a) {
  let i;
  try {
    i = new URL(
      e instanceof SVGAElement ? e.href.baseVal : e.href,
      document.baseURI
    );
  } catch {}
  const s = e instanceof SVGAElement ? e.target.baseVal : e.target,
    u =
      !i ||
      !!s ||
      Se(i, a) ||
      (e.getAttribute("rel") || "").split(/\s+/).includes("external") ||
      e.hasAttribute("download");
  return { url: i, external: u, target: s };
}
function fe(e) {
  let a = null,
    i = null,
    s = null,
    u = null,
    d = e;
  for (; d && d !== document.documentElement; )
    i === null && (i = ce(d, "preload-code")),
      s === null && (s = ce(d, "preload-data")),
      a === null && (a = ce(d, "noscroll")),
      u === null && (u = ce(d, "reload")),
      (d = tt(d));
  return {
    preload_code: He[i ?? "off"],
    preload_data: He[s ?? "off"],
    noscroll: a === "off" ? !1 : a === "" ? !0 : null,
    reload: u === "off" ? !1 : u === "" ? !0 : null,
  };
}
function Je(e) {
  const a = Re(e);
  let i = !0;
  function s() {
    (i = !0), a.update((v) => v);
  }
  function u(v) {
    (i = !1), a.set(v);
  }
  function d(v) {
    let c;
    return a.subscribe((g) => {
      (c === void 0 || (i && g !== c)) && v((c = g));
    });
  }
  return { notify: s, set: u, subscribe: d };
}
function mt() {
  const { set: e, subscribe: a } = Re(!1);
  let i;
  async function s() {
    clearTimeout(i);
    const u = await fetch(`${pt}/_app/version.json`, {
      headers: { pragma: "no-cache", "cache-control": "no-cache" },
    });
    if (u.ok) {
      const v = (await u.json()).version !== gt;
      return v && (e(!0), clearTimeout(i)), v;
    } else throw new Error(`Version check failed: ${u.status}`);
  }
  return { subscribe: a, check: s };
}
function Se(e, a) {
  return e.origin !== location.origin || !e.pathname.startsWith(a);
}
function nt(e) {
  try {
    return JSON.parse(sessionStorage[e]);
  } catch {}
}
function Ke(e, a) {
  const i = JSON.stringify(a);
  try {
    sessionStorage[e] = i;
  } catch {}
}
function yt(...e) {
  let a = 5381;
  for (const i of e)
    if (typeof i == "string") {
      let s = i.length;
      for (; s; ) a = (a * 33) ^ i.charCodeAt(--s);
    } else if (ArrayBuffer.isView(i)) {
      const s = new Uint8Array(i.buffer, i.byteOffset, i.byteLength);
      let u = s.length;
      for (; u; ) a = (a * 33) ^ s[--u];
    } else throw new TypeError("value must be a string or TypedArray");
  return (a >>> 0).toString(36);
}
const de = window.fetch;
window.fetch = (e, a) => (
  (e instanceof Request
    ? e.method
    : (a == null ? void 0 : a.method) || "GET") !== "GET" && ne.delete(Ae(e)),
  de(e, a)
);
const ne = new Map();
function wt(e, a) {
  const i = Ae(e, a),
    s = document.querySelector(i);
  if (s != null && s.textContent) {
    const { body: u, ...d } = JSON.parse(s.textContent),
      v = s.getAttribute("data-ttl");
    return (
      v && ne.set(i, { body: u, init: d, ttl: 1e3 * Number(v) }),
      Promise.resolve(new Response(u, d))
    );
  }
  return de(e, a);
}
function _t(e, a, i) {
  if (ne.size > 0) {
    const s = Ae(e, i),
      u = ne.get(s);
    if (u) {
      if (
        performance.now() < u.ttl &&
        ["default", "force-cache", "only-if-cached", void 0].includes(
          i == null ? void 0 : i.cache
        )
      )
        return new Response(u.body, u.init);
      ne.delete(s);
    }
  }
  return de(a, i);
}
function Ae(e, a) {
  let s = `script[data-sveltekit-fetched][data-url=${JSON.stringify(
    e instanceof Request ? e.url : e
  )}]`;
  if ((a != null && a.headers) || (a != null && a.body)) {
    const u = [];
    a.headers && u.push([...new Headers(a.headers)].join(",")),
      a.body &&
        (typeof a.body == "string" || ArrayBuffer.isView(a.body)) &&
        u.push(a.body),
      (s += `[data-hash="${yt(...u)}"]`);
  }
  return s;
}
const bt = /^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;
function vt(e) {
  const a = [];
  return {
    pattern:
      e === "/"
        ? /^\/$/
        : new RegExp(
            `^${kt(e)
              .map((s) => {
                const u = /^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(s);
                if (u)
                  return (
                    a.push({
                      name: u[1],
                      matcher: u[2],
                      optional: !1,
                      rest: !0,
                      chained: !0,
                    }),
                    "(?:/(.*))?"
                  );
                const d = /^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(s);
                if (d)
                  return (
                    a.push({
                      name: d[1],
                      matcher: d[2],
                      optional: !0,
                      rest: !1,
                      chained: !0,
                    }),
                    "(?:/([^/]+))?"
                  );
                if (!s) return;
                const v = s.split(/\[(.+?)\](?!\])/);
                return (
                  "/" +
                  v
                    .map((g, h) => {
                      if (h % 2) {
                        if (g.startsWith("x+"))
                          return ve(
                            String.fromCharCode(parseInt(g.slice(2), 16))
                          );
                        if (g.startsWith("u+"))
                          return ve(
                            String.fromCharCode(
                              ...g
                                .slice(2)
                                .split("-")
                                .map((L) => parseInt(L, 16))
                            )
                          );
                        const m = bt.exec(g);
                        if (!m)
                          throw new Error(
                            `Invalid param: ${g}. Params and matcher names can only have underscores and alphanumeric characters.`
                          );
                        const [, $, I, E, U] = m;
                        return (
                          a.push({
                            name: E,
                            matcher: U,
                            optional: !!$,
                            rest: !!I,
                            chained: I ? h === 1 && v[0] === "" : !1,
                          }),
                          I ? "(.*?)" : $ ? "([^/]*)?" : "([^/]+?)"
                        );
                      }
                      return ve(g);
                    })
                    .join("")
                );
              })
              .join("")}/?$`
          ),
    params: a,
  };
}
function Et(e) {
  return !/^\([^)]+\)$/.test(e);
}
function kt(e) {
  return e.slice(1).split("/").filter(Et);
}
function St(e, a, i) {
  const s = {},
    u = e.slice(1);
  let d = 0;
  for (let v = 0; v < a.length; v += 1) {
    const c = a[v],
      g = u[v - d];
    if (c.chained && c.rest && d) {
      (s[c.name] = u
        .slice(v - d, v + 1)
        .filter((h) => h)
        .join("/")),
        (d = 0);
      continue;
    }
    if (g === void 0) {
      c.rest && (s[c.name] = "");
      continue;
    }
    if (!c.matcher || i[c.matcher](g)) {
      s[c.name] = g;
      const h = a[v + 1],
        m = u[v + 1];
      h && !h.rest && h.optional && m && (d = 0);
      continue;
    }
    if (c.optional && c.chained) {
      d++;
      continue;
    }
    return;
  }
  if (!d) return s;
}
function ve(e) {
  return e
    .normalize()
    .replace(/[[\]]/g, "\\$&")
    .replace(/%/g, "%25")
    .replace(/\//g, "%2[Ff]")
    .replace(/\?/g, "%3[Ff]")
    .replace(/#/g, "%23")
    .replace(/[.*+?^${}()|\\]/g, "\\$&");
}
function Rt({ nodes: e, server_loads: a, dictionary: i, matchers: s }) {
  const u = new Set(a);
  return Object.entries(i).map(([c, [g, h, m]]) => {
    const { pattern: $, params: I } = vt(c),
      E = {
        id: c,
        exec: (U) => {
          const L = $.exec(U);
          if (L) return St(L, I, s);
        },
        errors: [1, ...(m || [])].map((U) => e[U]),
        layouts: [0, ...(h || [])].map(v),
        leaf: d(g),
      };
    return (
      (E.errors.length = E.layouts.length =
        Math.max(E.errors.length, E.layouts.length)),
      E
    );
  });
  function d(c) {
    const g = c < 0;
    return g && (c = ~c), [g, e[c]];
  }
  function v(c) {
    return c === void 0 ? c : [u.has(c), e[c]];
  }
}
let te = class {
    constructor(a, i) {
      (this.status = a),
        typeof i == "string"
          ? (this.body = { message: i })
          : i
          ? (this.body = i)
          : (this.body = { message: `Error: ${a}` });
    }
    toString() {
      return JSON.stringify(this.body);
    }
  },
  Ye = class {
    constructor(a, i) {
      (this.status = a), (this.location = i);
    }
  };
function At(e) {
  e.client;
}
const F = { url: Je({}), page: Je({}), navigating: Re(null), updated: mt() };
async function Lt(e) {
  var a;
  for (const i in e)
    if (typeof ((a = e[i]) == null ? void 0 : a.then) == "function")
      return Object.fromEntries(
        await Promise.all(Object.entries(e).map(async ([s, u]) => [s, await u]))
      );
  return e;
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
const It = -1,
  Ut = -2,
  Ot = -3,
  Pt = -4,
  Nt = -5,
  Tt = -6;
function jt(e, a) {
  if (typeof e == "number") return u(e, !0);
  if (!Array.isArray(e) || e.length === 0) throw new Error("Invalid input");
  const i = e,
    s = Array(i.length);
  function u(d, v = !1) {
    if (d === It) return;
    if (d === Ot) return NaN;
    if (d === Pt) return 1 / 0;
    if (d === Nt) return -1 / 0;
    if (d === Tt) return -0;
    if (v) throw new Error("Invalid input");
    if (d in s) return s[d];
    const c = i[d];
    if (!c || typeof c != "object") s[d] = c;
    else if (Array.isArray(c))
      if (typeof c[0] == "string") {
        const g = c[0],
          h = a == null ? void 0 : a[g];
        if (h) return (s[d] = h(u(c[1])));
        switch (g) {
          case "Date":
            s[d] = new Date(c[1]);
            break;
          case "Set":
            const m = new Set();
            s[d] = m;
            for (let E = 1; E < c.length; E += 1) m.add(u(c[E]));
            break;
          case "Map":
            const $ = new Map();
            s[d] = $;
            for (let E = 1; E < c.length; E += 2) $.set(u(c[E]), u(c[E + 1]));
            break;
          case "RegExp":
            s[d] = new RegExp(c[1], c[2]);
            break;
          case "Object":
            s[d] = Object(c[1]);
            break;
          case "BigInt":
            s[d] = BigInt(c[1]);
            break;
          case "null":
            const I = Object.create(null);
            s[d] = I;
            for (let E = 1; E < c.length; E += 2) I[c[E]] = u(c[E + 1]);
            break;
          default:
            throw new Error(`Unknown type ${g}`);
        }
      } else {
        const g = new Array(c.length);
        s[d] = g;
        for (let h = 0; h < c.length; h += 1) {
          const m = c[h];
          m !== Ut && (g[h] = u(m));
        }
      }
    else {
      const g = {};
      s[d] = g;
      for (const h in c) {
        const m = c[h];
        g[h] = u(m);
      }
    }
    return s[d];
  }
  return u(0);
}
function $t(e) {
  return e.filter((a) => a != null);
}
const B = nt(et) ?? {},
  Q = nt(Qe) ?? {};
function Ee(e) {
  B[e] = ee();
}
function xt(e, a) {
  var Ve;
  const i = Rt(e),
    s = e.nodes[0],
    u = e.nodes[1];
  s(), u();
  const d = document.documentElement,
    v = [],
    c = [];
  let g = null;
  const h = { before_navigate: [], after_navigate: [] };
  let m = { branch: [], error: null, url: null },
    $ = !1,
    I = !1,
    E = !0,
    U = !1,
    L = !1,
    K = !1,
    M = !1,
    V,
    T = (Ve = history.state) == null ? void 0 : Ve[C];
  T ||
    ((T = Date.now()),
    history.replaceState({ ...history.state, [C]: T }, "", location.href));
  const he = B[T];
  he && ((history.scrollRestoration = "manual"), scrollTo(he.x, he.y));
  let z, Le, ae;
  async function Ie() {
    (ae = ae || Promise.resolve()), await ae, (ae = null);
    const n = new URL(location.href),
      t = W(n, !0);
    (g = null), await Te(t, n, []);
  }
  function Ue(n) {
    c.some((t) => (t == null ? void 0 : t.snapshot)) &&
      (Q[n] = c.map((t) => {
        var o;
        return (o = t == null ? void 0 : t.snapshot) == null
          ? void 0
          : o.capture();
      }));
  }
  function Oe(n) {
    var t;
    (t = Q[n]) == null ||
      t.forEach((o, r) => {
        var f, l;
        (l = (f = c[r]) == null ? void 0 : f.snapshot) == null || l.restore(o);
      });
  }
  function Pe() {
    Ee(T), Ke(et, B), Ue(T), Ke(Qe, Q);
  }
  async function pe(
    n,
    {
      noScroll: t = !1,
      replaceState: o = !1,
      keepFocus: r = !1,
      state: f = {},
      invalidateAll: l = !1,
    },
    y,
    p
  ) {
    return (
      typeof n == "string" && (n = new URL(n, Ge(document))),
      se({
        url: n,
        scroll: t ? ee() : null,
        keepfocus: r,
        redirect_chain: y,
        details: { state: f, replaceState: o },
        nav_token: p,
        accepted: () => {
          l && (M = !0);
        },
        blocked: () => {},
        type: "goto",
      })
    );
  }
  async function Ne(n) {
    return (
      (g = {
        id: n.id,
        promise: xe(n).then(
          (t) => (t.type === "loaded" && t.state.error && (g = null), t)
        ),
      }),
      g.promise
    );
  }
  async function re(...n) {
    const o = i
      .filter((r) => n.some((f) => r.exec(f)))
      .map((r) =>
        Promise.all(
          [...r.layouts, r.leaf].map((f) => (f == null ? void 0 : f[1]()))
        )
      );
    await Promise.all(o);
  }
  async function Te(n, t, o, r, f, l = {}, y) {
    var _, w, A;
    Le = l;
    let p = n && (await xe(n));
    if (
      (p ||
        (p = await Ce(
          t,
          { id: null },
          await Z(new Error(`Not found: ${t.pathname}`), {
            url: t,
            params: {},
            route: { id: null },
          }),
          404
        )),
      (t = (n == null ? void 0 : n.url) || t),
      Le !== l)
    )
      return !1;
    if (p.type === "redirect")
      if (o.length > 10 || o.includes(t.pathname))
        p = await oe({
          status: 500,
          error: await Z(new Error("Redirect loop"), {
            url: t,
            params: {},
            route: { id: null },
          }),
          url: t,
          route: { id: null },
        });
      else
        return pe(new URL(p.location, t).href, {}, [...o, t.pathname], l), !1;
    else
      ((_ = p.props.page) == null ? void 0 : _.status) >= 400 &&
        (await F.updated.check()) &&
        (await X(t));
    if (
      ((v.length = 0),
      (M = !1),
      (U = !0),
      r && (Ee(r), Ue(r)),
      (w = p.props.page) != null &&
        w.url &&
        p.props.page.url.pathname !== t.pathname &&
        (t.pathname = (A = p.props.page) == null ? void 0 : A.url.pathname),
      f && f.details)
    ) {
      const { details: S } = f,
        O = S.replaceState ? 0 : 1;
      if (
        ((S.state[C] = T += O),
        history[S.replaceState ? "replaceState" : "pushState"](S.state, "", t),
        !S.replaceState)
      ) {
        let R = T + 1;
        for (; Q[R] || B[R]; ) delete Q[R], delete B[R], (R += 1);
      }
    }
    if (
      ((g = null),
      I
        ? ((m = p.state),
          p.props.page && (p.props.page.url = t),
          V.$set(p.props))
        : je(p),
      f)
    ) {
      const { scroll: S, keepfocus: O } = f,
        { activeElement: R } = document;
      if ((await le(), E)) {
        const P =
          t.hash &&
          document.getElementById(decodeURIComponent(t.hash.slice(1)));
        S ? scrollTo(S.x, S.y) : P ? P.scrollIntoView() : scrollTo(0, 0);
      }
      const b =
        document.activeElement !== R &&
        document.activeElement !== document.body;
      !O && !b && (await ke());
    } else await le();
    (E = !0), p.props.page && (z = p.props.page), y && y(), (U = !1);
  }
  function je(n) {
    var r;
    m = n.state;
    const t = document.querySelector("style[data-sveltekit]");
    t && t.remove(),
      (z = n.props.page),
      (V = new e.root({
        target: a,
        props: { ...n.props, stores: F, components: c },
        hydrate: !0,
      })),
      Oe(T);
    const o = {
      from: null,
      to: {
        params: m.params,
        route: { id: ((r = m.route) == null ? void 0 : r.id) ?? null },
        url: new URL(location.href),
      },
      willUnload: !1,
      type: "enter",
    };
    h.after_navigate.forEach((f) => f(o)), (I = !0);
  }
  async function Y({
    url: n,
    params: t,
    branch: o,
    status: r,
    error: f,
    route: l,
    form: y,
  }) {
    let p = "never";
    for (const R of o)
      (R == null ? void 0 : R.slash) !== void 0 && (p = R.slash);
    (n.pathname = it(n.pathname, p)), (n.search = n.search);
    const _ = {
      type: "loaded",
      state: { url: n, params: t, branch: o, error: f, route: l },
      props: { constructors: $t(o).map((R) => R.node.component) },
    };
    y !== void 0 && (_.props.form = y);
    let w = {},
      A = !z,
      S = 0;
    for (let R = 0; R < Math.max(o.length, m.branch.length); R += 1) {
      const b = o[R],
        P = m.branch[R];
      (b == null ? void 0 : b.data) !== (P == null ? void 0 : P.data) &&
        (A = !0),
        b &&
          ((w = { ...w, ...b.data }),
          A && (_.props[`data_${S}`] = w),
          (S += 1));
    }
    return (
      (!m.url ||
        n.href !== m.url.href ||
        m.error !== f ||
        (y !== void 0 && y !== z.form) ||
        A) &&
        (_.props.page = {
          error: f,
          params: t,
          route: { id: (l == null ? void 0 : l.id) ?? null },
          status: r,
          url: new URL(n),
          form: y ?? null,
          data: A ? w : z.data,
        }),
      _
    );
  }
  async function ge({
    loader: n,
    parent: t,
    url: o,
    params: r,
    route: f,
    server_data_node: l,
  }) {
    var w, A, S;
    let y = null;
    const p = {
        dependencies: new Set(),
        params: new Set(),
        parent: !1,
        route: !1,
        url: !1,
      },
      _ = await n();
    if ((w = _.universal) != null && w.load) {
      let O = function (...b) {
        for (const P of b) {
          const { href: D } = new URL(P, o);
          p.dependencies.add(D);
        }
      };
      const R = {
        route: {
          get id() {
            return (p.route = !0), f.id;
          },
        },
        params: new Proxy(r, { get: (b, P) => (p.params.add(P), b[P]) }),
        data: (l == null ? void 0 : l.data) ?? null,
        url: ft(o, () => {
          p.url = !0;
        }),
        async fetch(b, P) {
          let D;
          b instanceof Request
            ? ((D = b.url),
              (P = {
                body:
                  b.method === "GET" || b.method === "HEAD"
                    ? void 0
                    : await b.blob(),
                cache: b.cache,
                credentials: b.credentials,
                headers: b.headers,
                integrity: b.integrity,
                keepalive: b.keepalive,
                method: b.method,
                mode: b.mode,
                redirect: b.redirect,
                referrer: b.referrer,
                referrerPolicy: b.referrerPolicy,
                signal: b.signal,
                ...P,
              }))
            : (D = b);
          const q = new URL(D, o);
          return (
            O(q.href),
            q.origin === o.origin && (D = q.href.slice(o.origin.length)),
            I ? _t(D, q.href, P) : wt(D, P)
          );
        },
        setHeaders: () => {},
        depends: O,
        parent() {
          return (p.parent = !0), t();
        },
      };
      (y = (await _.universal.load.call(null, R)) ?? null),
        (y = y ? await Lt(y) : null);
    }
    return {
      node: _,
      loader: n,
      server: l,
      universal:
        (A = _.universal) != null && A.load
          ? { type: "data", data: y, uses: p }
          : null,
      data: y ?? (l == null ? void 0 : l.data) ?? null,
      slash:
        ((S = _.universal) == null ? void 0 : S.trailingSlash) ??
        (l == null ? void 0 : l.slash),
    };
  }
  function $e(n, t, o, r, f) {
    if (M) return !0;
    if (!r) return !1;
    if ((r.parent && n) || (r.route && t) || (r.url && o)) return !0;
    for (const l of r.params) if (f[l] !== m.params[l]) return !0;
    for (const l of r.dependencies) if (v.some((y) => y(new URL(l)))) return !0;
    return !1;
  }
  function me(n, t) {
    return (n == null ? void 0 : n.type) === "data"
      ? n
      : (n == null ? void 0 : n.type) === "skip"
      ? t ?? null
      : null;
  }
  async function xe({ id: n, invalidating: t, url: o, params: r, route: f }) {
    if ((g == null ? void 0 : g.id) === n) return g.promise;
    const { errors: l, layouts: y, leaf: p } = f,
      _ = [...y, p];
    l.forEach((k) => (k == null ? void 0 : k().catch(() => {}))),
      _.forEach((k) => (k == null ? void 0 : k[1]().catch(() => {})));
    let w = null;
    const A = m.url ? n !== m.url.pathname + m.url.search : !1,
      S = m.route ? f.id !== m.route.id : !1;
    let O = !1;
    const R = _.map((k, x) => {
      var G;
      const N = m.branch[x],
        j =
          !!(k != null && k[0]) &&
          ((N == null ? void 0 : N.loader) !== k[1] ||
            $e(O, S, A, (G = N.server) == null ? void 0 : G.uses, r));
      return j && (O = !0), j;
    });
    if (R.some(Boolean)) {
      try {
        w = await We(o, R);
      } catch (k) {
        return oe({
          status: k instanceof te ? k.status : 500,
          error: await Z(k, { url: o, params: r, route: { id: f.id } }),
          url: o,
          route: f,
        });
      }
      if (w.type === "redirect") return w;
    }
    const b = w == null ? void 0 : w.nodes;
    let P = !1;
    const D = _.map(async (k, x) => {
      var ye;
      if (!k) return;
      const N = m.branch[x],
        j = b == null ? void 0 : b[x];
      if (
        (!j || j.type === "skip") &&
        k[1] === (N == null ? void 0 : N.loader) &&
        !$e(P, S, A, (ye = N.universal) == null ? void 0 : ye.uses, r)
      )
        return N;
      if (((P = !0), (j == null ? void 0 : j.type) === "error")) throw j;
      return ge({
        loader: k[1],
        url: o,
        params: r,
        route: f,
        parent: async () => {
          var Me;
          const Fe = {};
          for (let we = 0; we < x; we += 1)
            Object.assign(Fe, (Me = await D[we]) == null ? void 0 : Me.data);
          return Fe;
        },
        server_data_node: me(
          j === void 0 && k[0] ? { type: "skip" } : j ?? null,
          k[0] ? (N == null ? void 0 : N.server) : void 0
        ),
      });
    });
    for (const k of D) k.catch(() => {});
    const q = [];
    for (let k = 0; k < _.length; k += 1)
      if (_[k])
        try {
          q.push(await D[k]);
        } catch (x) {
          if (x instanceof Ye)
            return { type: "redirect", location: x.location };
          let N = 500,
            j;
          if (b != null && b.includes(x)) (N = x.status ?? N), (j = x.error);
          else if (x instanceof te) (N = x.status), (j = x.body);
          else {
            if (await F.updated.check()) return await X(o);
            j = await Z(x, { params: r, url: o, route: { id: f.id } });
          }
          const G = await De(k, q, l);
          return G
            ? await Y({
                url: o,
                params: r,
                branch: q.slice(0, G.idx).concat(G.node),
                status: N,
                error: j,
                route: f,
              })
            : await Ce(o, { id: f.id }, j, N);
        }
      else q.push(void 0);
    return await Y({
      url: o,
      params: r,
      branch: q,
      status: 200,
      error: null,
      route: f,
      form: t ? void 0 : null,
    });
  }
  async function De(n, t, o) {
    for (; n--; )
      if (o[n]) {
        let r = n;
        for (; !t[r]; ) r -= 1;
        try {
          return {
            idx: r + 1,
            node: {
              node: await o[n](),
              loader: o[n],
              data: {},
              server: null,
              universal: null,
            },
          };
        } catch {
          continue;
        }
      }
  }
  async function oe({ status: n, error: t, url: o, route: r }) {
    const f = {};
    let l = null;
    if (e.server_loads[0] === 0)
      try {
        const w = await We(o, [!0]);
        if (w.type !== "data" || (w.nodes[0] && w.nodes[0].type !== "data"))
          throw 0;
        l = w.nodes[0] ?? null;
      } catch {
        (o.origin !== location.origin ||
          o.pathname !== location.pathname ||
          $) &&
          (await X(o));
      }
    const p = await ge({
        loader: s,
        url: o,
        params: f,
        route: r,
        parent: () => Promise.resolve({}),
        server_data_node: me(l),
      }),
      _ = {
        node: await u(),
        loader: u,
        universal: null,
        server: null,
        data: null,
      };
    return await Y({
      url: o,
      params: f,
      branch: [p, _],
      status: n,
      error: t,
      route: null,
    });
  }
  function W(n, t) {
    if (Se(n, H)) return;
    const o = ie(n);
    for (const r of i) {
      const f = r.exec(o);
      if (f)
        return {
          id: n.pathname + n.search,
          invalidating: t,
          route: r,
          params: lt(f),
          url: n,
        };
    }
  }
  function ie(n) {
    return st(n.pathname.slice(H.length) || "/");
  }
  function qe({ url: n, type: t, intent: o, delta: r }) {
    var p, _;
    let f = !1;
    const l = {
      from: {
        params: m.params,
        route: { id: ((p = m.route) == null ? void 0 : p.id) ?? null },
        url: m.url,
      },
      to: {
        params: (o == null ? void 0 : o.params) ?? null,
        route: {
          id:
            ((_ = o == null ? void 0 : o.route) == null ? void 0 : _.id) ??
            null,
        },
        url: n,
      },
      willUnload: !o,
      type: t,
    };
    r !== void 0 && (l.delta = r);
    const y = {
      ...l,
      cancel: () => {
        f = !0;
      },
    };
    return L || h.before_navigate.forEach((w) => w(y)), f ? null : l;
  }
  async function se({
    url: n,
    scroll: t,
    keepfocus: o,
    redirect_chain: r,
    details: f,
    type: l,
    delta: y,
    nav_token: p,
    accepted: _,
    blocked: w,
  }) {
    const A = W(n, !1),
      S = qe({ url: n, type: l, delta: y, intent: A });
    if (!S) {
      w();
      return;
    }
    const O = T;
    _(),
      (L = !0),
      I && F.navigating.set(S),
      await Te(A, n, r, O, { scroll: t, keepfocus: o, details: f }, p, () => {
        (L = !1), h.after_navigate.forEach((R) => R(S)), F.navigating.set(null);
      });
  }
  async function Ce(n, t, o, r) {
    return n.origin === location.origin &&
      n.pathname === location.pathname &&
      !$
      ? await oe({ status: r, error: o, url: n, route: t })
      : await X(n);
  }
  function X(n) {
    return (location.href = n.href), new Promise(() => {});
  }
  function rt() {
    let n;
    d.addEventListener("mousemove", (l) => {
      const y = l.target;
      clearTimeout(n),
        (n = setTimeout(() => {
          r(y, 2);
        }, 20));
    });
    function t(l) {
      r(l.composedPath()[0], 1);
    }
    d.addEventListener("mousedown", t),
      d.addEventListener("touchstart", t, { passive: !0 });
    const o = new IntersectionObserver(
      (l) => {
        for (const y of l)
          y.isIntersecting &&
            (re(ie(new URL(y.target.href))), o.unobserve(y.target));
      },
      { threshold: 0 }
    );
    function r(l, y) {
      const p = Be(l, d);
      if (!p) return;
      const { url: _, external: w } = be(p, H);
      if (w) return;
      const A = fe(p);
      if (!A.reload)
        if (y <= A.preload_data) {
          const S = W(_, !1);
          S && Ne(S);
        } else y <= A.preload_code && re(ie(_));
    }
    function f() {
      o.disconnect();
      for (const l of d.querySelectorAll("a")) {
        const { url: y, external: p } = be(l, H);
        if (p) continue;
        const _ = fe(l);
        _.reload ||
          (_.preload_code === ue.viewport && o.observe(l),
          _.preload_code === ue.eager && re(ie(y)));
      }
    }
    h.after_navigate.push(f), f();
  }
  function Z(n, t) {
    return n instanceof te
      ? n.body
      : e.hooks.handleError({ error: n, event: t }) ?? {
          message: t.route.id != null ? "Internal Error" : "Not Found",
        };
  }
  return {
    after_navigate: (n) => {
      ze(
        () => (
          h.after_navigate.push(n),
          () => {
            const t = h.after_navigate.indexOf(n);
            h.after_navigate.splice(t, 1);
          }
        )
      );
    },
    before_navigate: (n) => {
      ze(
        () => (
          h.before_navigate.push(n),
          () => {
            const t = h.before_navigate.indexOf(n);
            h.before_navigate.splice(t, 1);
          }
        )
      );
    },
    disable_scroll_handling: () => {
      (U || !I) && (E = !1);
    },
    goto: (n, t = {}) => pe(n, t, []),
    invalidate: (n) => {
      if (typeof n == "function") v.push(n);
      else {
        const { href: t } = new URL(n, location.href);
        v.push((o) => o.href === t);
      }
      return Ie();
    },
    invalidateAll: () => ((M = !0), Ie()),
    preload_data: async (n) => {
      const t = new URL(n, Ge(document)),
        o = W(t, !1);
      if (!o)
        throw new Error(
          `Attempted to preload a URL that does not belong to this app: ${t}`
        );
      await Ne(o);
    },
    preload_code: re,
    apply_action: async (n) => {
      if (n.type === "error") {
        const t = new URL(location.href),
          { branch: o, route: r } = m;
        if (!r) return;
        const f = await De(m.branch.length, o, r.errors);
        if (f) {
          const l = await Y({
            url: t,
            params: m.params,
            branch: o.slice(0, f.idx).concat(f.node),
            status: n.status ?? 500,
            error: n.error,
            route: r,
          });
          (m = l.state), V.$set(l.props), le().then(ke);
        }
      } else
        n.type === "redirect"
          ? pe(n.location, { invalidateAll: !0 }, [])
          : (V.$set({
              form: null,
              page: { ...z, form: n.data, status: n.status },
            }),
            await le(),
            V.$set({ form: n.data }),
            n.type === "success" && ke());
    },
    _start_router: () => {
      var n;
      (history.scrollRestoration = "manual"),
        addEventListener("beforeunload", (t) => {
          var r;
          let o = !1;
          if ((Pe(), !L)) {
            const f = {
              from: {
                params: m.params,
                route: { id: ((r = m.route) == null ? void 0 : r.id) ?? null },
                url: m.url,
              },
              to: null,
              willUnload: !0,
              type: "leave",
              cancel: () => (o = !0),
            };
            h.before_navigate.forEach((l) => l(f));
          }
          o
            ? (t.preventDefault(), (t.returnValue = ""))
            : (history.scrollRestoration = "auto");
        }),
        addEventListener("visibilitychange", () => {
          document.visibilityState === "hidden" && Pe();
        }),
        ((n = navigator.connection) != null && n.saveData) || rt(),
        d.addEventListener("click", (t) => {
          if (
            t.button ||
            t.which !== 1 ||
            t.metaKey ||
            t.ctrlKey ||
            t.shiftKey ||
            t.altKey ||
            t.defaultPrevented
          )
            return;
          const o = Be(t.composedPath()[0], d);
          if (!o) return;
          const { url: r, external: f, target: l } = be(o, H);
          if (!r) return;
          if (l === "_parent" || l === "_top") {
            if (window.parent !== window) return;
          } else if (l && l !== "_self") return;
          const y = fe(o);
          if (
            !(o instanceof SVGAElement) &&
            r.protocol !== location.protocol &&
            !(r.protocol === "https:" || r.protocol === "http:")
          )
            return;
          if (f || y.reload) {
            qe({ url: r, type: "link" }) ? (L = !0) : t.preventDefault();
            return;
          }
          const [_, w] = r.href.split("#");
          if (w !== void 0 && _ === location.href.split("#")[0]) {
            (K = !0),
              Ee(T),
              (m.url = r),
              F.page.set({ ...z, url: r }),
              F.page.notify();
            return;
          }
          se({
            url: r,
            scroll: y.noscroll ? ee() : null,
            keepfocus: !1,
            redirect_chain: [],
            details: { state: {}, replaceState: r.href === location.href },
            accepted: () => t.preventDefault(),
            blocked: () => t.preventDefault(),
            type: "link",
          });
        }),
        d.addEventListener("submit", (t) => {
          if (t.defaultPrevented) return;
          const o = HTMLFormElement.prototype.cloneNode.call(t.target),
            r = t.submitter;
          if (((r == null ? void 0 : r.formMethod) || o.method) !== "get")
            return;
          const l = new URL(
            ((r == null ? void 0 : r.hasAttribute("formaction")) &&
              (r == null ? void 0 : r.formAction)) ||
              o.action
          );
          if (Se(l, H)) return;
          const y = t.target,
            { noscroll: p, reload: _ } = fe(y);
          if (_) return;
          t.preventDefault(), t.stopPropagation();
          const w = new FormData(y),
            A = r == null ? void 0 : r.getAttribute("name");
          A &&
            w.append(A, (r == null ? void 0 : r.getAttribute("value")) ?? ""),
            (l.search = new URLSearchParams(w).toString()),
            se({
              url: l,
              scroll: p ? ee() : null,
              keepfocus: !1,
              redirect_chain: [],
              details: { state: {}, replaceState: !1 },
              nav_token: {},
              accepted: () => {},
              blocked: () => {},
              type: "form",
            });
        }),
        addEventListener("popstate", async (t) => {
          var o;
          if ((o = t.state) != null && o[C]) {
            if (t.state[C] === T) return;
            const r = B[t.state[C]];
            if (m.url.href.split("#")[0] === location.href.split("#")[0]) {
              (B[T] = ee()), (T = t.state[C]), scrollTo(r.x, r.y);
              return;
            }
            const f = t.state[C] - T;
            let l = !1;
            await se({
              url: new URL(location.href),
              scroll: r,
              keepfocus: !1,
              redirect_chain: [],
              details: null,
              accepted: () => {
                T = t.state[C];
              },
              blocked: () => {
                history.go(-f), (l = !0);
              },
              type: "popstate",
              delta: f,
            }),
              l || Oe(T);
          }
        }),
        addEventListener("hashchange", () => {
          K &&
            ((K = !1),
            history.replaceState(
              { ...history.state, [C]: ++T },
              "",
              location.href
            ));
        });
      for (const t of document.querySelectorAll("link"))
        t.rel === "icon" && (t.href = t.href);
      addEventListener("pageshow", (t) => {
        t.persisted && F.navigating.set(null);
      });
    },
    _hydrate: async ({
      status: n = 200,
      error: t,
      node_ids: o,
      params: r,
      route: f,
      data: l,
      form: y,
    }) => {
      $ = !0;
      const p = new URL(location.href);
      ({ params: r = {}, route: f = { id: null } } = W(p, !1) || {});
      let _;
      try {
        const w = o.map(async (A, S) => {
          const O = l[S];
          return (
            O != null && O.uses && (O.uses = at(O.uses)),
            ge({
              loader: e.nodes[A],
              url: p,
              params: r,
              route: f,
              parent: async () => {
                const R = {};
                for (let b = 0; b < S; b += 1)
                  Object.assign(R, (await w[b]).data);
                return R;
              },
              server_data_node: me(O),
            })
          );
        });
        _ = await Y({
          url: p,
          params: r,
          branch: await Promise.all(w),
          status: n,
          error: t,
          form: y,
          route: i.find(({ id: A }) => A === f.id) ?? null,
        });
      } catch (w) {
        if (w instanceof Ye) {
          await X(new URL(w.location, location.href));
          return;
        }
        _ = await oe({
          status: w instanceof te ? w.status : 500,
          error: await Z(w, { url: p, params: r, route: f }),
          url: p,
          route: f,
        });
      }
      je(_);
    },
  };
}
async function We(e, a) {
  const i = new URL(e);
  (i.pathname = ht(e.pathname)),
    i.searchParams.append(
      "x-sveltekit-invalidated",
      a.map((u) => (u ? "1" : "")).join("_")
    );
  const s = await de(i.href);
  if (!s.ok) throw new te(s.status, await s.json());
  return new Promise(async (u) => {
    var m;
    const d = new Map(),
      v = s.body.getReader(),
      c = new TextDecoder();
    function g($) {
      return jt($, {
        Promise: (I) =>
          new Promise((E, U) => {
            d.set(I, { fulfil: E, reject: U });
          }),
      });
    }
    let h = "";
    for (;;) {
      const { done: $, value: I } = await v.read();
      if ($ && !h) break;
      for (
        h +=
          !I && h
            ? `
`
            : c.decode(I);
        ;

      ) {
        const E = h.indexOf(`
`);
        if (E === -1) break;
        const U = JSON.parse(h.slice(0, E));
        if (((h = h.slice(E + 1)), U.type === "redirect")) return u(U);
        if (U.type === "data")
          (m = U.nodes) == null ||
            m.forEach((L) => {
              (L == null ? void 0 : L.type) === "data" &&
                ((L.uses = at(L.uses)), (L.data = g(L.data)));
            }),
            u(U);
        else if (U.type === "chunk") {
          const { id: L, data: K, error: M } = U,
            V = d.get(L);
          d.delete(L), M ? V.reject(g(M)) : V.fulfil(g(K));
        }
      }
    }
  });
}
function at(e) {
  return {
    dependencies: new Set((e == null ? void 0 : e.dependencies) ?? []),
    params: new Set((e == null ? void 0 : e.params) ?? []),
    parent: !!(e != null && e.parent),
    route: !!(e != null && e.route),
    url: !!(e != null && e.url),
  };
}
function ke() {
  const e = document.querySelector("[autofocus]");
  if (e) e.focus();
  else {
    const a = document.body,
      i = a.getAttribute("tabindex");
    return (
      (a.tabIndex = -1),
      a.focus({ preventScroll: !0 }),
      i !== null
        ? a.setAttribute("tabindex", i)
        : a.removeAttribute("tabindex"),
      new Promise((s) => {
        setTimeout(() => {
          var u;
          s((u = getSelection()) == null ? void 0 : u.removeAllRanges());
        });
      })
    );
  }
}
async function Vt(e, a, i) {
  const s = xt(e, a);
  At({ client: s }),
    i ? await s._hydrate(i) : s.goto(location.href, { replaceState: !0 }),
    s._start_router();
}
export { Vt as start };
