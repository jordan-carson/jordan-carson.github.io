import {
  S as xe,
  i as Re,
  s as je,
  D as qe,
  k as i,
  r as x,
  a as y,
  l as n,
  m as h,
  u as R,
  h as a,
  c as E,
  E as Be,
  p as t,
  F as Pe,
  G as K,
  q as z,
  b as w,
  H as r,
  g as fe,
  I as ze,
  J as Fe,
  K as Ue,
  d as Ke,
  o as Ye,
  L as Qe,
  M as Le,
  n as ee,
  N as Ne,
  O as Ve,
} from "../chunks/index.eb9e444d.js";
function We(m) {
  const e = m - 1;
  return e * e * e + 1;
}
function Je(
  m,
  {
    delay: e = 0,
    duration: s = 400,
    easing: f = We,
    x: c = 0,
    y: o = 0,
    opacity: d = 0,
  } = {}
) {
  const _ = getComputedStyle(m),
    A = +_.opacity,
    G = _.transform === "none" ? "" : _.transform,
    u = A * (1 - d);
  return {
    delay: e,
    duration: s,
    easing: f,
    css: (k, F) => `
			transform: ${G} translate(${(1 - k) * c}px, ${(1 - k) * o}px);
			opacity: ${A - u * F}`,
  };
}
const { document: He } = Qe;
function Xe(m) {
  let e, s, f, c, o;
  return {
    c() {
      (e = i("button")), (s = x("🌚")), this.h();
    },
    l(d) {
      e = n(d, "BUTTON", { class: !0, title: !0 });
      var _ = h(e);
      (s = R(_, "🌚")), _.forEach(a), this.h();
    },
    h() {
      t(e, "class", "theme-switch svelte-1lpc41e"),
        t(e, "title", "Switch to dark theme");
    },
    m(d, _) {
      w(d, e, _), r(e, s), c || ((o = Le(e, "click", m[6])), (c = !0));
    },
    p: ee,
    i(d) {
      f ||
        Ne(() => {
          (f = Ve(e, Je, { y: -20, duration: 200, delay: 200 })), f.start();
        });
    },
    o: ee,
    d(d) {
      d && a(e), (c = !1), o();
    },
  };
}
function Ze(m) {
  let e, s, f, c, o;
  return {
    c() {
      (e = i("button")), (s = x("☀️")), this.h();
    },
    l(d) {
      e = n(d, "BUTTON", { class: !0, title: !0 });
      var _ = h(e);
      (s = R(_, "☀️")), _.forEach(a), this.h();
    },
    h() {
      t(e, "class", "theme-switch svelte-1lpc41e"),
        t(e, "title", "Switch to light theme");
    },
    m(d, _) {
      w(d, e, _), r(e, s), c || ((o = Le(e, "click", m[5])), (c = !0));
    },
    p: ee,
    i(d) {
      f ||
        Ne(() => {
          (f = Ve(e, Je, { y: 20, duration: 200, delay: 200 })), f.start();
        });
    },
    o: ee,
    d(d) {
      d && a(e), (c = !1), o();
    },
  };
}
function $e(m) {
  let e, s, f;
  return {
    c() {
      (e = i("a")), (s = i("img")), this.h();
    },
    l(c) {
      e = n(c, "A", { href: !0, rel: !0 });
      var o = h(e);
      (s = n(o, "IMG", { src: !0, alt: !0, style: !0 })),
        o.forEach(a),
        this.h();
    },
    h() {
      K(s.src, (f = "/images/github-mark.svg")) || t(s, "src", f),
        t(s, "alt", "GitHub"),
        z(s, "height", "30px"),
        t(e, "href", "https://github.com/jordan-carson"),
        t(e, "rel", "external");
    },
    m(c, o) {
      w(c, e, o), r(e, s);
    },
    d(c) {
      c && a(e);
    },
  };
}
function et(m) {
  let e, s, f;
  return {
    c() {
      (e = i("a")), (s = i("img")), this.h();
    },
    l(c) {
      e = n(c, "A", { href: !0, rel: !0 });
      var o = h(e);
      (s = n(o, "IMG", { src: !0, alt: !0, style: !0 })),
        o.forEach(a),
        this.h();
    },
    h() {
      K(s.src, (f = "/images/github-mark-white.svg")) || t(s, "src", f),
        t(s, "alt", "GitHub"),
        z(s, "height", "30px"),
        z(s, "width", "30px"),
        t(e, "href", "https://github.com/jordan-carson"),
        t(e, "rel", "external");
    },
    m(c, o) {
      w(c, e, o), r(e, s);
    },
    d(c) {
      c && a(e);
    },
  };
}
function tt(m) {
  let e,
    s,
    f,
    c,
    o,
    d,
    _,
    A,
    G,
    u,
    k,
    F,
    te,
    H,
    se,
    le,
    L,
    ae,
    re,
    Y,
    N,
    de,
    Q,
    j,
    W,
    V,
    b,
    U,
    ce,
    J,
    oe,
    q,
    O,
    T,
    he,
    ie,
    B,
    M,
    C,
    _e,
    P;
  function me(l, v) {
    return l[0] === "dark" ? Ze : Xe;
  }
  let X = me(m),
    p = X(m);
  const ne = m[4].default,
    g = qe(ne, m, m[3], null);
  function ve(l, v) {
    return l[0] === "dark" ? et : $e;
  }
  let Z = ve(m),
    I = Z(m);
  return {
    c() {
      (e = i("header")),
        (s = i("div")),
        (f = i("h2")),
        (c = i("a")),
        (o = i("span")),
        (d = x("Jordan Carson")),
        (_ = i("span")),
        (A = x("Jordan")),
        (G = y()),
        (u = i("nav")),
        (k = i("a")),
        (F = x("Home")),
        (te = y()),
        (H = i("a")),
        (se = x("Contact")),
        (le = y()),
        (L = i("a")),
        (ae = x("Resume")),
        (re = y()),
        p.c(),
        (Y = y()),
        (N = i("script")),
        (Q = y()),
        (j = i("main")),
        g && g.c(),
        (W = y()),
        (V = i("footer")),
        (b = i("div")),
        (U = i("div")),
        (ce = y()),
        (J = i("div")),
        I.c(),
        (oe = y()),
        (q = i("div")),
        (O = i("a")),
        (T = i("img")),
        (ie = y()),
        (B = i("div")),
        (M = i("a")),
        (C = i("img")),
        this.h();
    },
    l(l) {
      e = n(l, "HEADER", { class: !0 });
      var v = h(e);
      s = n(v, "DIV", { class: !0 });
      var $ = h(s);
      f = n($, "H2", { class: !0 });
      var pe = h(f);
      c = n(pe, "A", { href: !0, class: !0 });
      var ue = h(c);
      o = n(ue, "SPAN", { class: !0 });
      var ge = h(o);
      (d = R(ge, "Jordan Carson")),
        ge.forEach(a),
        (_ = n(ue, "SPAN", { class: !0 }));
      var be = h(_);
      (A = R(be, "Jordan")),
        be.forEach(a),
        ue.forEach(a),
        pe.forEach(a),
        (G = E($)),
        (u = n($, "NAV", { class: !0 }));
      var D = h(u);
      k = n(D, "A", { href: !0, class: !0 });
      var ke = h(k);
      (F = R(ke, "Home")),
        ke.forEach(a),
        (te = E(D)),
        (H = n(D, "A", { href: !0, class: !0 }));
      var ye = h(H);
      (se = R(ye, "Contact")),
        ye.forEach(a),
        (le = E(D)),
        (L = n(D, "A", { href: !0, class: !0 }));
      var Ee = h(L);
      (ae = R(Ee, "Resume")),
        Ee.forEach(a),
        (re = E(D)),
        p.l(D),
        D.forEach(a),
        $.forEach(a),
        v.forEach(a),
        (Y = E(l));
      const we = Be("svelte-1a8q9zr", He.head);
      N = n(we, "SCRIPT", { src: !0 });
      var Oe = h(N);
      Oe.forEach(a), we.forEach(a), (Q = E(l)), (j = n(l, "MAIN", {}));
      var Ie = h(j);
      g && g.l(Ie),
        Ie.forEach(a),
        (W = E(l)),
        (V = n(l, "FOOTER", { class: !0 }));
      var Ae = h(V);
      b = n(Ae, "DIV", { class: !0 });
      var S = h(b);
      U = n(S, "DIV", { class: !0 });
      var Te = h(U);
      Te.forEach(a), (ce = E(S)), (J = n(S, "DIV", { class: !0 }));
      var Me = h(J);
      I.l(Me), Me.forEach(a), (oe = E(S)), (q = n(S, "DIV", { class: !0 }));
      var Ce = h(q);
      O = n(Ce, "A", { href: !0, rel: !0 });
      var De = h(O);
      (T = n(De, "IMG", { src: !0, alt: !0, style: !0 })),
        De.forEach(a),
        Ce.forEach(a),
        (ie = E(S)),
        (B = n(S, "DIV", { class: !0 }));
      var Se = h(B);
      M = n(Se, "A", { href: !0, target: !0, rel: !0 });
      var Ge = h(M);
      (C = n(Ge, "IMG", { src: !0, alt: !0, style: !0 })),
        Ge.forEach(a),
        Se.forEach(a),
        S.forEach(a),
        Ae.forEach(a),
        this.h();
    },
    h() {
      t(o, "class", "name-long svelte-1lpc41e"),
        t(_, "class", "name-short svelte-1lpc41e"),
        t(c, "href", "/"),
        t(c, "class", "svelte-1lpc41e"),
        t(f, "class", "svelte-1lpc41e"),
        t(k, "href", "/"),
        t(k, "class", "svelte-1lpc41e"),
        Pe(k, "active", !0),
        t(H, "href", "/contact"),
        t(H, "class", "svelte-1lpc41e"),
        t(L, "href", "/resume"),
        t(L, "class", "svelte-1lpc41e"),
        t(
          u,
          "class",
          "fixed top-3 left-0 z-20 w-full md:h-auto space-x-2 svelte-1lpc41e"
        ),
        t(s, "class", "svelte-1lpc41e"),
        t(e, "class", "svelte-1lpc41e"),
        K(
          N.src,
          (de = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js")
        ) || t(N, "src", de),
        t(U, "class", "column svelte-1lpc41e"),
        t(J, "class", "column svelte-1lpc41e"),
        K(T.src, (he = "/images/linkedin.svg")) || t(T, "src", he),
        t(T, "alt", "LinkedIn"),
        z(T, "height", "30px"),
        t(O, "href", "https://www.linkedin.com/in/jordan-carson"),
        t(O, "rel", "external"),
        t(q, "class", "column svelte-1lpc41e"),
        K(C.src, (_e = "https://storage.ko-fi.com/cdn/kofi2.png?v=3")) ||
          t(C, "src", _e),
        t(C, "alt", "Buy Me a Coffee at ko-fi.com"),
        z(C, "height", "30px"),
        z(C, "width", "500px"),
        t(M, "href", "https://ko-fi.com/C0C5J1LY6"),
        t(M, "target", "_blank"),
        t(M, "rel", "noreferrer"),
        t(B, "class", "column svelte-1lpc41e"),
        t(b, "class", "row  svelte-1lpc41e"),
        t(V, "class", "svelte-1lpc41e");
    },
    m(l, v) {
      w(l, e, v),
        r(e, s),
        r(s, f),
        r(f, c),
        r(c, o),
        r(o, d),
        r(c, _),
        r(_, A),
        r(s, G),
        r(s, u),
        r(u, k),
        r(k, F),
        r(u, te),
        r(u, H),
        r(H, se),
        r(u, le),
        r(u, L),
        r(L, ae),
        r(u, re),
        p.m(u, null),
        w(l, Y, v),
        r(He.head, N),
        w(l, Q, v),
        w(l, j, v),
        g && g.m(j, null),
        w(l, W, v),
        w(l, V, v),
        r(V, b),
        r(b, U),
        r(b, ce),
        r(b, J),
        I.m(J, null),
        r(b, oe),
        r(b, q),
        r(q, O),
        r(O, T),
        r(b, ie),
        r(b, B),
        r(B, M),
        r(M, C),
        (P = !0);
    },
    p(l, [v]) {
      X === (X = me(l)) && p
        ? p.p(l, v)
        : (p.d(1), (p = X(l)), p && (p.c(), fe(p, 1), p.m(u, null))),
        g &&
          g.p &&
          (!P || v & 8) &&
          ze(g, ne, l, l[3], P ? Ue(ne, l[3], v, null) : Fe(l[3]), null),
        Z !== (Z = ve(l)) && (I.d(1), (I = Z(l)), I && (I.c(), I.m(J, null)));
    },
    i(l) {
      P || (fe(p), fe(g, l), (P = !0));
    },
    o(l) {
      Ke(g, l), (P = !1);
    },
    d(l) {
      l && a(e),
        p.d(),
        l && a(Y),
        a(N),
        l && a(Q),
        l && a(j),
        g && g.d(l),
        l && a(W),
        l && a(V),
        I.d();
    },
  };
}
function st(m, e, s) {
  let { $$slots: f = {}, $$scope: c } = e,
    o = "";
  Ye(() => {
    s(
      0,
      (o =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light")
    ),
      document.body.classList.add(o),
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (u) => {
          d(u.matches ? "dark" : "light");
        });
  });
  function d(u) {
    document.body.classList.replace(o, u), s(0, (o = u));
  }
  let { sidebar: _ = !1 } = e;
  const A = () => d("light"),
    G = () => d("dark");
  return (
    (m.$$set = (u) => {
      "sidebar" in u && s(2, (_ = u.sidebar)),
        "$$scope" in u && s(3, (c = u.$$scope));
    }),
    [o, d, _, c, f, A, G]
  );
}
class at extends xe {
  constructor(e) {
    super(), Re(this, e, st, tt, je, { sidebar: 2 });
  }
}
export { at as default };
