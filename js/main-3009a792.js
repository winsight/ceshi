!(function () {
  var e = navigator.userAgent,
    n = { mobile: /Mobile/i.test(e), webkit: /WebKit/i.test(e) },
    t = Object.keys(n).map(function (e) {
      return (n[e] ? "" : "no-") + e;
    }),
    o = document.documentElement.classList;
  o.add.apply(o, t);
})(),
  (function () {
    try {
      var e = sessionStorage.getItem("splash");
      e && document.documentElement.classList.add("disable-splash");
    } catch (n) {}
  })(),
  (window.Modernizr = (function (e, n, t) {
    function o(e) {
      b.cssText = e;
    }
    function r(e, n) {
      return typeof e === n;
    }
    function i(e, n) {
      return !!~("" + e).indexOf(n);
    }
    function s(e, n) {
      for (var o in e) {
        var r = e[o];
        if (!i(r, "-") && b[r] !== t) return "pfx" == n ? r : !0;
      }
      return !1;
    }
    function a(e, n, o) {
      for (var i in e) {
        var s = n[e[i]];
        if (s !== t)
          return o === !1 ? e[i] : r(s, "function") ? s.bind(o || n) : s;
      }
      return !1;
    }
    function u(e, n, t) {
      var o = e.charAt(0).toUpperCase() + e.slice(1),
        i = (e + " " + j.join(o + " ") + o).split(" ");
      return r(n, "string") || r(n, "undefined")
        ? s(i, n)
        : ((i = (e + " " + g.join(o + " ") + o).split(" ")), a(i, n, t));
    }
    var c,
      f,
      l,
      d = "2.8.3",
      p = {},
      m = !0,
      y = n.documentElement,
      v = "modernizr",
      h = n.createElement(v),
      b = h.style,
      w = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
      x = "Webkit Moz O ms",
      j = x.split(" "),
      g = x.toLowerCase().split(" "),
      C = {},
      E = [],
      T = E.slice,
      L = function (e, t, o, r) {
        var i,
          s,
          a,
          u,
          c = n.createElement("div"),
          f = n.body,
          l = f || n.createElement("body");
        if (parseInt(o, 10))
          for (; o--; )
            (a = n.createElement("div")),
              (a.id = r ? r[o] : v + (o + 1)),
              c.appendChild(a);
        return (
          (i = ["&#173;", '<style id="s', v, '">', e, "</style>"].join("")),
          (c.id = v),
          ((f ? c : l).innerHTML += i),
          l.appendChild(c),
          f ||
            ((l.style.background = ""),
            (l.style.overflow = "hidden"),
            (u = y.style.overflow),
            (y.style.overflow = "hidden"),
            y.appendChild(l)),
          (s = t(c, e)),
          f
            ? c.parentNode.removeChild(c)
            : (l.parentNode.removeChild(l), (y.style.overflow = u)),
          !!s
        );
      },
      N = {}.hasOwnProperty;
    (l =
      r(N, "undefined") || r(N.call, "undefined")
        ? function (e, n) {
            return n in e && r(e.constructor.prototype[n], "undefined");
          }
        : function (e, n) {
            return N.call(e, n);
          }),
      Function.prototype.bind ||
        (Function.prototype.bind = function (e) {
          var n = this;
          if ("function" != typeof n) throw new TypeError();
          var t = T.call(arguments, 1),
            o = function () {
              if (this instanceof o) {
                var r = function () {};
                r.prototype = n.prototype;
                var i = new r(),
                  s = n.apply(i, t.concat(T.call(arguments)));
                return Object(s) === s ? s : i;
              }
              return n.apply(e, t.concat(T.call(arguments)));
            };
          return o;
        }),
      (C.flexbox = function () {
        return u("flexWrap");
      }),
      (C.touch = function () {
        var t;
        return (
          "ontouchstart" in e || (e.DocumentTouch && n instanceof DocumentTouch)
            ? (t = !0)
            : L(
                [
                  "@media (",
                  w.join("touch-enabled),("),
                  v,
                  ")",
                  "{#modernizr{top:9px;position:absolute}}",
                ].join(""),
                function (e) {
                  t = 9 === e.offsetTop;
                }
              ),
          t
        );
      }),
      (C.cssanimations = function () {
        return u("animationName");
      });
    for (var k in C)
      l(C, k) &&
        ((f = k.toLowerCase()),
        (p[f] = C[k]()),
        E.push((p[f] ? "" : "no-") + f));
    return (
      (p.addTest = function (e, n) {
        if ("object" == typeof e)
          for (var o in e) l(e, o) && p.addTest(o, e[o]);
        else {
          if (((e = e.toLowerCase()), p[e] !== t)) return p;
          (n = "function" == typeof n ? n() : n),
            "undefined" != typeof m &&
              m &&
              (y.className += " " + (n ? "" : "no-") + e),
            (p[e] = n);
        }
        return p;
      }),
      o(""),
      (h = c = null),
      (p._version = d),
      (p._prefixes = w),
      (p._domPrefixes = g),
      (p._cssomPrefixes = j),
      (p.testProp = function (e) {
        return s([e]);
      }),
      (p.testAllProps = u),
      (p.testStyles = L),
      (p.prefixed = function (e, n, t) {
        return n ? u(e, n, t) : u(e, "pfx");
      }),
      (y.className =
        y.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") +
        (m ? " js " + E.join(" ") : "")),
      p
    );
  })(this, this.document));
