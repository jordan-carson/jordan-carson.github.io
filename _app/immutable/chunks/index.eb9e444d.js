function N() {}
const st = (t) => t;
function ot(t, e) {
  for (const n in e) t[n] = e[n];
  return t;
}
function K(t) {
  return t();
}
function H() {
  return Object.create(null);
}
function k(t) {
  t.forEach(K);
}
function q(t) {
  return typeof t == "function";
}
function Pt(t, e) {
  return t != t
    ? e == e
    : t !== e || (t && typeof t == "object") || typeof t == "function";
}
let C;
function Rt(t, e) {
  return C || (C = document.createElement("a")), (C.href = e), t === C.href;
}
function lt(t) {
  return Object.keys(t).length === 0;
}
function qt(t, e, n, i) {
  if (t) {
    const r = Q(t, e, n, i);
    return t[0](r);
  }
}
function Q(t, e, n, i) {
  return t[1] && i ? ot(n.ctx.slice(), t[1](i(e))) : n.ctx;
}
function Lt(t, e, n, i) {
  if (t[2] && i) {
    const r = t[2](i(n));
    if (e.dirty === void 0) return r;
    if (typeof r == "object") {
      const o = [],
        s = Math.max(e.dirty.length, r.length);
      for (let u = 0; u < s; u += 1) o[u] = e.dirty[u] | r[u];
      return o;
    }
    return e.dirty | r;
  }
  return e.dirty;
}
function zt(t, e, n, i, r, o) {
  if (r) {
    const s = Q(e, n, i, o);
    t.p(s, r);
  }
}
function Bt(t) {
  if (t.ctx.length > 32) {
    const e = [],
      n = t.ctx.length / 32;
    for (let i = 0; i < n; i++) e[i] = -1;
    return e;
  }
  return -1;
}
function Ht(t) {
  const e = {};
  for (const n in t) n[0] !== "$" && (e[n] = t[n]);
  return e;
}
const W = typeof window < "u";
let ct = W ? () => window.performance.now() : () => Date.now(),
  L = W ? (t) => requestAnimationFrame(t) : N;
const w = new Set();
function U(t) {
  w.forEach((e) => {
    e.c(t) || (w.delete(e), e.f());
  }),
    w.size !== 0 && L(U);
}
function ut(t) {
  let e;
  return (
    w.size === 0 && L(U),
    {
      promise: new Promise((n) => {
        w.add((e = { c: t, f: n }));
      }),
      abort() {
        w.delete(e);
      },
    }
  );
}
let M = !1;
function at() {
  M = !0;
}
function ft() {
  M = !1;
}
function _t(t, e, n, i) {
  for (; t < e; ) {
    const r = t + ((e - t) >> 1);
    n(r) <= i ? (t = r + 1) : (e = r);
  }
  return t;
}
function dt(t) {
  if (t.hydrate_init) return;
  t.hydrate_init = !0;
  let e = t.childNodes;
  if (t.nodeName === "HEAD") {
    const l = [];
    for (let c = 0; c < e.length; c++) {
      const f = e[c];
      f.claim_order !== void 0 && l.push(f);
    }
    e = l;
  }
  const n = new Int32Array(e.length + 1),
    i = new Int32Array(e.length);
  n[0] = -1;
  let r = 0;
  for (let l = 0; l < e.length; l++) {
    const c = e[l].claim_order,
      f =
        (r > 0 && e[n[r]].claim_order <= c
          ? r + 1
          : _t(1, r, (_) => e[n[_]].claim_order, c)) - 1;
    i[l] = n[f] + 1;
    const a = f + 1;
    (n[a] = l), (r = Math.max(a, r));
  }
  const o = [],
    s = [];
  let u = e.length - 1;
  for (let l = n[r] + 1; l != 0; l = i[l - 1]) {
    for (o.push(e[l - 1]); u >= l; u--) s.push(e[u]);
    u--;
  }
  for (; u >= 0; u--) s.push(e[u]);
  o.reverse(), s.sort((l, c) => l.claim_order - c.claim_order);
  for (let l = 0, c = 0; l < s.length; l++) {
    for (; c < o.length && s[l].claim_order >= o[c].claim_order; ) c++;
    const f = c < o.length ? o[c] : null;
    t.insertBefore(s[l], f);
  }
}
function ht(t, e) {
  t.appendChild(e);
}
function V(t) {
  if (!t) return document;
  const e = t.getRootNode ? t.getRootNode() : t.ownerDocument;
  return e && e.host ? e : t.ownerDocument;
}
function mt(t) {
  const e = Y("style");
  return pt(V(t), e), e.sheet;
}
function pt(t, e) {
  return ht(t.head || t, e), e.sheet;
}
function yt(t, e) {
  if (M) {
    for (
      dt(t),
        (t.actual_end_child === void 0 ||
          (t.actual_end_child !== null &&
            t.actual_end_child.parentNode !== t)) &&
          (t.actual_end_child = t.firstChild);
      t.actual_end_child !== null && t.actual_end_child.claim_order === void 0;

    )
      t.actual_end_child = t.actual_end_child.nextSibling;
    e !== t.actual_end_child
      ? (e.claim_order !== void 0 || e.parentNode !== t) &&
        t.insertBefore(e, t.actual_end_child)
      : (t.actual_end_child = e.nextSibling);
  } else (e.parentNode !== t || e.nextSibling !== null) && t.appendChild(e);
}
function Ft(t, e, n) {
  M && !n
    ? yt(t, e)
    : (e.parentNode !== t || e.nextSibling != n) &&
      t.insertBefore(e, n || null);
}
function X(t) {
  t.parentNode && t.parentNode.removeChild(t);
}
function Y(t) {
  return document.createElement(t);
}
function z(t) {
  return document.createTextNode(t);
}
function Gt() {
  return z(" ");
}
function It() {
  return z("");
}
function Jt(t, e, n, i) {
  return t.addEventListener(e, n, i), () => t.removeEventListener(e, n, i);
}
function Kt(t, e, n) {
  n == null
    ? t.removeAttribute(e)
    : t.getAttribute(e) !== n && t.setAttribute(e, n);
}
function gt(t) {
  return Array.from(t.childNodes);
}
function xt(t) {
  t.claim_info === void 0 &&
    (t.claim_info = { last_index: 0, total_claimed: 0 });
}
function Z(t, e, n, i, r = !1) {
  xt(t);
  const o = (() => {
    for (let s = t.claim_info.last_index; s < t.length; s++) {
      const u = t[s];
      if (e(u)) {
        const l = n(u);
        return (
          l === void 0 ? t.splice(s, 1) : (t[s] = l),
          r || (t.claim_info.last_index = s),
          u
        );
      }
    }
    for (let s = t.claim_info.last_index - 1; s >= 0; s--) {
      const u = t[s];
      if (e(u)) {
        const l = n(u);
        return (
          l === void 0 ? t.splice(s, 1) : (t[s] = l),
          r
            ? l === void 0 && t.claim_info.last_index--
            : (t.claim_info.last_index = s),
          u
        );
      }
    }
    return i();
  })();
  return (
    (o.claim_order = t.claim_info.total_claimed),
    (t.claim_info.total_claimed += 1),
    o
  );
}
function $t(t, e, n, i) {
  return Z(
    t,
    (r) => r.nodeName === e,
    (r) => {
      const o = [];
      for (let s = 0; s < r.attributes.length; s++) {
        const u = r.attributes[s];
        n[u.name] || o.push(u.name);
      }
      o.forEach((s) => r.removeAttribute(s));
    },
    () => i(e)
  );
}
function Qt(t, e, n) {
  return $t(t, e, n, Y);
}
function wt(t, e) {
  return Z(
    t,
    (n) => n.nodeType === 3,
    (n) => {
      const i = "" + e;
      if (n.data.startsWith(i)) {
        if (n.data.length !== i.length) return n.splitText(i.length);
      } else n.data = i;
    },
    () => z(e),
    !0
  );
}
function Wt(t) {
  return wt(t, " ");
}
function Ut(t, e) {
  (e = "" + e), t.wholeText !== e && (t.data = e);
}
function Vt(t, e, n, i) {
  n === null
    ? t.style.removeProperty(e)
    : t.style.setProperty(e, n, i ? "important" : "");
}
function Xt(t, e, n) {
  t.classList[n ? "add" : "remove"](e);
}
function bt(t, e, { bubbles: n = !1, cancelable: i = !1 } = {}) {
  const r = document.createEvent("CustomEvent");
  return r.initCustomEvent(t, n, i, e), r;
}
function Yt(t, e) {
  const n = [];
  let i = 0;
  for (const r of e.childNodes)
    if (r.nodeType === 8) {
      const o = r.textContent.trim();
      o === `HEAD_${t}_END`
        ? ((i -= 1), n.push(r))
        : o === `HEAD_${t}_START` && ((i += 1), n.push(r));
    } else i > 0 && n.push(r);
  return n;
}
function Zt(t, e) {
  return new t(e);
}
const j = new Map();
let T = 0;
function vt(t) {
  let e = 5381,
    n = t.length;
  for (; n--; ) e = ((e << 5) - e) ^ t.charCodeAt(n);
  return e >>> 0;
}
function Et(t, e) {
  const n = { stylesheet: mt(e), rules: {} };
  return j.set(t, n), n;
}
function Nt(t, e, n, i, r, o, s, u = 0) {
  const l = 16.666 / i;
  let c = `{
`;
  for (let m = 0; m <= 1; m += l) {
    const g = e + (n - e) * o(m);
    c +=
      m * 100 +
      `%{${s(g, 1 - g)}}
`;
  }
  const f =
      c +
      `100% {${s(n, 1 - n)}}
}`,
    a = `__svelte_${vt(f)}_${u}`,
    _ = V(t),
    { stylesheet: d, rules: h } = j.get(_) || Et(_, t);
  h[a] ||
    ((h[a] = !0), d.insertRule(`@keyframes ${a} ${f}`, d.cssRules.length));
  const y = t.style.animation || "";
  return (
    (t.style.animation = `${
      y ? `${y}, ` : ""
    }${a} ${i}ms linear ${r}ms 1 both`),
    (T += 1),
    a
  );
}
function F(t, e) {
  const n = (t.style.animation || "").split(", "),
    i = n.filter(
      e ? (o) => o.indexOf(e) < 0 : (o) => o.indexOf("__svelte") === -1
    ),
    r = n.length - i.length;
  r && ((t.style.animation = i.join(", ")), (T -= r), T || At());
}
function At() {
  L(() => {
    T ||
      (j.forEach((t) => {
        const { ownerNode: e } = t.stylesheet;
        e && X(e);
      }),
      j.clear());
  });
}
let A;
function E(t) {
  A = t;
}
function tt() {
  if (!A) throw new Error("Function called outside component initialization");
  return A;
}
function te(t) {
  tt().$$.on_mount.push(t);
}
function ee(t) {
  tt().$$.after_update.push(t);
}
const $ = [],
  G = [];
let b = [];
const I = [],
  et = Promise.resolve();
let R = !1;
function nt() {
  R || ((R = !0), et.then(it));
}
function ne() {
  return nt(), et;
}
function D(t) {
  b.push(t);
}
const P = new Set();
let x = 0;
function it() {
  if (x !== 0) return;
  const t = A;
  do {
    try {
      for (; x < $.length; ) {
        const e = $[x];
        x++, E(e), kt(e.$$);
      }
    } catch (e) {
      throw (($.length = 0), (x = 0), e);
    }
    for (E(null), $.length = 0, x = 0; G.length; ) G.pop()();
    for (let e = 0; e < b.length; e += 1) {
      const n = b[e];
      P.has(n) || (P.add(n), n());
    }
    b.length = 0;
  } while ($.length);
  for (; I.length; ) I.pop()();
  (R = !1), P.clear(), E(t);
}
function kt(t) {
  if (t.fragment !== null) {
    t.update(), k(t.before_update);
    const e = t.dirty;
    (t.dirty = [-1]),
      t.fragment && t.fragment.p(t.ctx, e),
      t.after_update.forEach(D);
  }
}
function Ct(t) {
  const e = [],
    n = [];
  b.forEach((i) => (t.indexOf(i) === -1 ? e.push(i) : n.push(i))),
    n.forEach((i) => i()),
    (b = e);
}
let v;
function St() {
  return (
    v ||
      ((v = Promise.resolve()),
      v.then(() => {
        v = null;
      })),
    v
  );
}
function J(t, e, n) {
  t.dispatchEvent(bt(`${e ? "intro" : "outro"}${n}`));
}
const S = new Set();
let p;
function ie() {
  p = { r: 0, c: [], p };
}
function re() {
  p.r || k(p.c), (p = p.p);
}
function jt(t, e) {
  t && t.i && (S.delete(t), t.i(e));
}
function se(t, e, n, i) {
  if (t && t.o) {
    if (S.has(t)) return;
    S.add(t),
      p.c.push(() => {
        S.delete(t), i && (n && t.d(1), i());
      }),
      t.o(e);
  } else i && i();
}
const Tt = { duration: 0 };
function oe(t, e, n) {
  const i = { direction: "in" };
  let r = e(t, n, i),
    o = !1,
    s,
    u,
    l = 0;
  function c() {
    s && F(t, s);
  }
  function f() {
    const {
      delay: _ = 0,
      duration: d = 300,
      easing: h = st,
      tick: y = N,
      css: m,
    } = r || Tt;
    m && (s = Nt(t, 0, 1, d, _, h, m, l++)), y(0, 1);
    const g = ct() + _,
      rt = g + d;
    u && u.abort(),
      (o = !0),
      D(() => J(t, !0, "start")),
      (u = ut((O) => {
        if (o) {
          if (O >= rt) return y(1, 0), J(t, !0, "end"), c(), (o = !1);
          if (O >= g) {
            const B = h((O - g) / d);
            y(B, 1 - B);
          }
        }
        return o;
      }));
  }
  let a = !1;
  return {
    start() {
      a || ((a = !0), F(t), q(r) ? ((r = r(i)), St().then(f)) : f());
    },
    invalidate() {
      a = !1;
    },
    end() {
      o && (c(), (o = !1));
    },
  };
}
const le =
  typeof window < "u" ? window : typeof globalThis < "u" ? globalThis : global;
function ce(t) {
  t && t.c();
}
function ue(t, e) {
  t && t.l(e);
}
function Dt(t, e, n, i) {
  const { fragment: r, after_update: o } = t.$$;
  r && r.m(e, n),
    i ||
      D(() => {
        const s = t.$$.on_mount.map(K).filter(q);
        t.$$.on_destroy ? t.$$.on_destroy.push(...s) : k(s),
          (t.$$.on_mount = []);
      }),
    o.forEach(D);
}
function Mt(t, e) {
  const n = t.$$;
  n.fragment !== null &&
    (Ct(n.after_update),
    k(n.on_destroy),
    n.fragment && n.fragment.d(e),
    (n.on_destroy = n.fragment = null),
    (n.ctx = []));
}
function Ot(t, e) {
  t.$$.dirty[0] === -1 && ($.push(t), nt(), t.$$.dirty.fill(0)),
    (t.$$.dirty[(e / 31) | 0] |= 1 << e % 31);
}
function ae(t, e, n, i, r, o, s, u = [-1]) {
  const l = A;
  E(t);
  const c = (t.$$ = {
    fragment: null,
    ctx: [],
    props: o,
    update: N,
    not_equal: r,
    bound: H(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(e.context || (l ? l.$$.context : [])),
    callbacks: H(),
    dirty: u,
    skip_bound: !1,
    root: e.target || l.$$.root,
  });
  s && s(c.root);
  let f = !1;
  if (
    ((c.ctx = n
      ? n(t, e.props || {}, (a, _, ...d) => {
          const h = d.length ? d[0] : _;
          return (
            c.ctx &&
              r(c.ctx[a], (c.ctx[a] = h)) &&
              (!c.skip_bound && c.bound[a] && c.bound[a](h), f && Ot(t, a)),
            _
          );
        })
      : []),
    c.update(),
    (f = !0),
    k(c.before_update),
    (c.fragment = i ? i(c.ctx) : !1),
    e.target)
  ) {
    if (e.hydrate) {
      at();
      const a = gt(e.target);
      c.fragment && c.fragment.l(a), a.forEach(X);
    } else c.fragment && c.fragment.c();
    e.intro && jt(t.$$.fragment),
      Dt(t, e.target, e.anchor, e.customElement),
      ft(),
      it();
  }
  E(l);
}
class fe {
  $destroy() {
    Mt(this, 1), (this.$destroy = N);
  }
  $on(e, n) {
    if (!q(n)) return N;
    const i = this.$$.callbacks[e] || (this.$$.callbacks[e] = []);
    return (
      i.push(n),
      () => {
        const r = i.indexOf(n);
        r !== -1 && i.splice(r, 1);
      }
    );
  }
  $set(e) {
    this.$$set &&
      !lt(e) &&
      ((this.$$.skip_bound = !0), this.$$set(e), (this.$$.skip_bound = !1));
  }
}
export {
  ue as A,
  Dt as B,
  Mt as C,
  qt as D,
  Yt as E,
  Xt as F,
  Rt as G,
  yt as H,
  zt as I,
  Bt as J,
  Lt as K,
  le as L,
  Jt as M,
  D as N,
  oe as O,
  ot as P,
  Ht as Q,
  k as R,
  fe as S,
  Gt as a,
  Ft as b,
  Wt as c,
  se as d,
  It as e,
  re as f,
  jt as g,
  X as h,
  ae as i,
  ee as j,
  Y as k,
  Qt as l,
  gt as m,
  N as n,
  te as o,
  Kt as p,
  Vt as q,
  z as r,
  Pt as s,
  ne as t,
  wt as u,
  Ut as v,
  ie as w,
  G as x,
  Zt as y,
  ce as z,
};
