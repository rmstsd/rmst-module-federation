;(() => {
  var __webpack_modules__ = {
      './src/index.js': (__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {
        eval(
          '__webpack_require__.e(/*! import() */ "src_bootstrap_js").then(__webpack_require__.bind(__webpack_require__, /*! ./bootstrap */ "./src/bootstrap.js"))\n\n\n//# sourceURL=webpack://container/./src/index.js?'
        )
      },
      'webpack/container/reference/cart_n': (e, r, _) => {
        'use strict'
        var a = new Error()
        e.exports = new Promise((e, r) => {
          if ('undefined' != typeof cart) return e()
          _.l(
            'http://localhost:8001/remoteEntry.js',
            _ => {
              if ('undefined' != typeof cart) return e()
              var i = _ && ('load' === _.type ? 'missing' : _.type),
                n = _ && _.target && _.target.src
              ;(a.message = 'Loading script failed.\n(' + i + ': ' + n + ')'),
                (a.name = 'ScriptExternalLoadError'),
                (a.type = i),
                (a.request = n),
                r(a)
            },
            'cart'
          )
        }).then(() => cart)
      },
      'webpack/container/reference/products_n': (e, r, _) => {
        'use strict'
        var a = new Error()
        e.exports = new Promise((e, r) => {
          if ('undefined' != typeof products) return e()
          _.l(
            'http://localhost:8002/remoteEntry.js',
            _ => {
              if ('undefined' != typeof products) return e()
              var i = _ && ('load' === _.type ? 'missing' : _.type),
                n = _ && _.target && _.target.src
              ;(a.message = 'Loading script failed.\n(' + i + ': ' + n + ')'),
                (a.name = 'ScriptExternalLoadError'),
                (a.type = i),
                (a.request = n),
                r(a)
            },
            'products'
          )
        }).then(() => products)
      }
    },
    __webpack_module_cache__ = {},
    inProgress,
    dataWebpackPrefix,
    chunkMapping,
    idToExternalAndNameMapping
  function __webpack_require__(e) {
    var r = __webpack_module_cache__[e]
    if (void 0 !== r) return r.exports
    var _ = (__webpack_module_cache__[e] = {
      exports: {}
    })
    return __webpack_modules__[e](_, _.exports, __webpack_require__), _.exports
  }
  ;(__webpack_require__.m = __webpack_modules__),
    (__webpack_require__.n = e => {
      var r = e && e.__esModule ? () => e.default : () => e
      return (
        __webpack_require__.d(r, {
          a: r
        }),
        r
      )
    }),
    (__webpack_require__.d = (e, r) => {
      for (var _ in r)
        __webpack_require__.o(r, _) &&
          !__webpack_require__.o(e, _) &&
          Object.defineProperty(e, _, {
            enumerable: !0,
            get: r[_]
          })
    }),
    (__webpack_require__.f = {}),
    (__webpack_require__.e = e =>
      Promise.all(
        Object.keys(__webpack_require__.f).reduce((r, _) => (__webpack_require__.f[_](e, r), r), [])
      )),
    (__webpack_require__.u = e => e + '.js'),
    (__webpack_require__.g = (function () {
      if ('object' == typeof globalThis) return globalThis
      try {
        return this || new Function('return this')()
      } catch (e) {
        if ('object' == typeof window) return window
      }
    })()),
    (__webpack_require__.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (inProgress = {}),
    (dataWebpackPrefix = 'container:'),
    (__webpack_require__.l = (e, r, _, a) => {
      if (inProgress[e]) inProgress[e].push(r)
      else {
        var i, n
        if (void 0 !== _)
          for (var c = document.getElementsByTagName('script'), t = 0; t < c.length; t++) {
            var o = c[t]
            if (o.getAttribute('src') == e || o.getAttribute('data-webpack') == dataWebpackPrefix + _) {
              i = o
              break
            }
          }
        i ||
          ((n = !0),
          ((i = document.createElement('script')).charset = 'utf-8'),
          (i.timeout = 120),
          __webpack_require__.nc && i.setAttribute('nonce', __webpack_require__.nc),
          i.setAttribute('data-webpack', dataWebpackPrefix + _),
          (i.src = e)),
          (inProgress[e] = [r])
        var onScriptComplete = (r, _) => {
            ;(i.onerror = i.onload = null), clearTimeout(u)
            var a = inProgress[e]
            if (
              (delete inProgress[e],
              i.parentNode && i.parentNode.removeChild(i),
              a && a.forEach(e => e(_)),
              r)
            )
              return r(_)
          },
          u = setTimeout(
            onScriptComplete.bind(null, void 0, {
              type: 'timeout',
              target: i
            }),
            12e4
          )
        ;(i.onerror = onScriptComplete.bind(null, i.onerror)),
          (i.onload = onScriptComplete.bind(null, i.onload)),
          n && document.head.appendChild(i)
      }
    }),
    (__webpack_require__.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, {
          value: 'Module'
        }),
        Object.defineProperty(e, '__esModule', {
          value: !0
        })
    }),
    (chunkMapping = {
      src_bootstrap_js: ['webpack/container/remote/cart_n/index', 'webpack/container/remote/products_n/index']
    }),
    (idToExternalAndNameMapping = {
      'webpack/container/remote/cart_n/index': ['default', './index', 'webpack/container/reference/cart_n'],
      'webpack/container/remote/products_n/index': [
        'default',
        './index',
        'webpack/container/reference/products_n'
      ]
    }),
    (__webpack_require__.f.remotes = (e, r) => {
      __webpack_require__.o(chunkMapping, e) &&
        chunkMapping[e].forEach(e => {
          var _ = __webpack_require__.R
          _ || (_ = [])
          var a = idToExternalAndNameMapping[e]
          if (!(_.indexOf(a) >= 0)) {
            if ((_.push(a), a.p)) return r.push(a.p)
            var onError = r => {
                r || (r = new Error('Container missing')),
                  'string' == typeof r.message &&
                    (r.message += '\nwhile loading "' + a[1] + '" from ' + a[2]),
                  (__webpack_require__.m[e] = () => {
                    throw r
                  }),
                  (a.p = 0)
              },
              handleFunction = (e, _, i, n, c, t) => {
                try {
                  var o = e(_, i)
                  if (!o || !o.then) return c(o, n, t)
                  var u = o.then(e => c(e, n), onError)
                  if (!t) return u
                  r.push((a.p = u))
                } catch (e) {
                  onError(e)
                }
              },
              onInitialized = (e, r, i) => handleFunction(r.get, a[1], _, 0, onFactory, i),
              onFactory = r => {
                ;(a.p = 1),
                  (__webpack_require__.m[e] = e => {
                    e.exports = r()
                  })
              }
            handleFunction(
              __webpack_require__,
              a[2],
              0,
              0,
              (e, r, _) =>
                e ? handleFunction(__webpack_require__.I, a[0], 0, e, onInitialized, _) : onError(),
              1
            )
          }
        })
    }),
    (() => {
      __webpack_require__.S = {}
      var e = {},
        r = {}
      __webpack_require__.I = (_, a) => {
        a || (a = [])
        var i = r[_]
        if ((i || (i = r[_] = {}), !(a.indexOf(i) >= 0))) {
          if ((a.push(i), e[_])) return e[_]
          __webpack_require__.o(__webpack_require__.S, _) || (__webpack_require__.S[_] = {})
          __webpack_require__.S[_]
          var initExternal = e => {
              var handleError = e => {
                return (
                  (r = 'Initialization of sharing external failed: ' + e),
                  void ('undefined' != typeof console && console.warn && console.warn(r))
                )
                var r
              }
              try {
                var r = __webpack_require__(e)
                if (!r) return
                var initFn = e => e && e.init && e.init(__webpack_require__.S[_], a)
                if (r.then) return n.push(r.then(initFn, handleError))
                var i = initFn(r)
                if (i && i.then) return n.push(i.catch(handleError))
              } catch (e) {
                handleError(e)
              }
            },
            n = []
          if ('default' === _)
            initExternal('webpack/container/reference/cart_n'),
              initExternal('webpack/container/reference/products_n')
          return n.length ? (e[_] = Promise.all(n).then(() => (e[_] = 1))) : (e[_] = 1)
        }
      }
    })(),
    (() => {
      var e
      __webpack_require__.g.importScripts && (e = __webpack_require__.g.location + '')
      var r = __webpack_require__.g.document
      if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
        var _ = r.getElementsByTagName('script')
        if (_.length) for (var a = _.length - 1; a > -1 && !e; ) e = _[a--].src
      }
      if (!e) throw new Error('Automatic publicPath is not supported in this browser')
      ;(e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (__webpack_require__.p = e)
    })(),
    (() => {
      var e = {
        main: 0
      }
      __webpack_require__.f.j = (r, _) => {
        var a = __webpack_require__.o(e, r) ? e[r] : void 0
        if (0 !== a)
          if (a) _.push(a[2])
          else {
            var i = new Promise((_, i) => (a = e[r] = [_, i]))
            _.push((a[2] = i))
            var n = __webpack_require__.p + __webpack_require__.u(r),
              c = new Error()
            __webpack_require__.l(
              n,
              _ => {
                if (__webpack_require__.o(e, r) && (0 !== (a = e[r]) && (e[r] = void 0), a)) {
                  var i = _ && ('load' === _.type ? 'missing' : _.type),
                    n = _ && _.target && _.target.src
                  ;(c.message = 'Loading chunk ' + r + ' failed.\n(' + i + ': ' + n + ')'),
                    (c.name = 'ChunkLoadError'),
                    (c.type = i),
                    (c.request = n),
                    a[1](c)
                }
              },
              'chunk-' + r,
              r
            )
          }
      }
      var webpackJsonpCallback = (r, _) => {
          var a,
            i,
            [n, c, t] = _,
            o = 0
          if (n.some(r => 0 !== e[r])) {
            for (a in c) __webpack_require__.o(c, a) && (__webpack_require__.m[a] = c[a])
            if (t) t(__webpack_require__)
          }
          for (r && r(_); o < n.length; o++)
            (i = n[o]), __webpack_require__.o(e, i) && e[i] && e[i][0](), (e[i] = 0)
        },
        r = (self.webpackChunkcontainer = self.webpackChunkcontainer || [])
      r.forEach(webpackJsonpCallback.bind(null, 0)),
        (r.push = webpackJsonpCallback.bind(null, r.push.bind(r)))
    })()
  var __webpack_exports__ = __webpack_require__('./src/index.js')
})()
