/******/ ;(() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ 'webpack/container/reference/products_n':
      /*!****************************************************************!*\
  !*** external "products@http://localhost:8002/remoteEntry.js" ***!
  \****************************************************************/
      /***/ (module, __unused_webpack_exports, __webpack_require__) => {
        'use strict'
        var __webpack_error__ = new Error()
        module.exports = new Promise((resolve, reject) => {
          if (typeof products !== 'undefined') return resolve()
          __webpack_require__.l(
            'http://localhost:8002/remoteEntry.js',
            event => {
              if (typeof products !== 'undefined') return resolve()
              var errorType = event && (event.type === 'load' ? 'missing' : event.type)
              var realSrc = event && event.target && event.target.src
              __webpack_error__.message = 'Loading script failed.\n(' + errorType + ': ' + realSrc + ')'
              __webpack_error__.name = 'ScriptExternalLoadError'
              __webpack_error__.type = errorType
              __webpack_error__.request = realSrc
              reject(__webpack_error__)
            },
            'products'
          )
        }).then(() => products)

        /***/
      }

    /******/
  }
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {}
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ var cachedModule = __webpack_module_cache__[moduleId]
    /******/ if (cachedModule !== undefined) {
      /******/ return cachedModule.exports
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {}
      /******/
    })
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](module, module.exports, __webpack_require__)
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports
    /******/
  }
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/ __webpack_require__.m = __webpack_modules__ /* webpack/runtime/compat get default export */
  /******/
  /************************************************************************/
  /******/
  /******/
  ;(() => {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = module => {
      /******/ var getter =
        module && module.__esModule ? /******/ () => module['default'] : /******/ () => module
      /******/ __webpack_require__.d(getter, { a: getter })
      /******/ return getter
      /******/
    }
    /******/
  })() /* webpack/runtime/define property getters */
  /******/
  /******/
  /******/
  ;(() => {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = (exports, definition) => {
      /******/ for (var key in definition) {
        /******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
          /******/ Object.defineProperty(exports, key, { enumerable: true, get: definition[key] })
          /******/
        }
        /******/
      }
      /******/
    }
    /******/
  })() /* webpack/runtime/ensure chunk */
  /******/
  /******/
  /******/
  ;(() => {
    /******/ __webpack_require__.f = {}
    /******/ // This file contains only the entry chunk.
    /******/ // The chunk loading function for additional chunks
    /******/ __webpack_require__.e = chunkId => {
      /******/ return Promise.all(
        Object.keys(__webpack_require__.f).reduce((promises, key) => {
          /******/ __webpack_require__.f[key](chunkId, promises)
          /******/ return promises
          /******/
        }, [])
      )
      /******/
    }
    /******/
  })() /* webpack/runtime/get javascript chunk filename */
  /******/
  /******/
  /******/
  ;(() => {
    /******/ // This function allow to reference async chunks
    /******/ __webpack_require__.u = chunkId => {
      /******/ // return url for filenames based on template
      /******/ return '' + chunkId + '.js'
      /******/
    }
    /******/
  })() /* webpack/runtime/global */
  /******/
  /******/
  /******/
  ;(() => {
    /******/ __webpack_require__.g = (function () {
      /******/ if (typeof globalThis === 'object') return globalThis
      /******/ try {
        /******/ return this || new Function('return this')()
        /******/
      } catch (e) {
        /******/ if (typeof window === 'object') return window
        /******/
      }
      /******/
    })()
    /******/
  })() /* webpack/runtime/hasOwnProperty shorthand */
  /******/
  /******/
  /******/
  ;(() => {
    /******/ __webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
    /******/
  })() /* webpack/runtime/load script */
  /******/
  /******/
  /******/
  ;(() => {
    /******/ var inProgress = {}
    /******/ var dataWebpackPrefix = 'container:'
    /******/ // loadScript function to load a script via script tag
    /******/ __webpack_require__.l = (url, done, key, chunkId) => {
      /******/ if (inProgress[url]) {
        inProgress[url].push(done)
        return
      }
      /******/ var script, needAttach
      /******/ if (key !== undefined) {
        /******/ var scripts = document.getElementsByTagName('script')
        /******/ for (var i = 0; i < scripts.length; i++) {
          /******/ var s = scripts[i]
          /******/ if (
            s.getAttribute('src') == url ||
            s.getAttribute('data-webpack') == dataWebpackPrefix + key
          ) {
            script = s
            break
          }
          /******/
        }
        /******/
      }
      /******/ if (!script) {
        /******/ needAttach = true
        /******/ script = document.createElement('script')
        /******/
        /******/ script.charset = 'utf-8'
        /******/ script.timeout = 120
        /******/ if (__webpack_require__.nc) {
          /******/ script.setAttribute('nonce', __webpack_require__.nc)
          /******/
        }
        /******/ script.setAttribute('data-webpack', dataWebpackPrefix + key)
        /******/
        /******/ script.src = url
        /******/
      }
      /******/ inProgress[url] = [done]
      /******/ var onScriptComplete = (prev, event) => {
        /******/ // avoid mem leaks in IE.
        /******/ script.onerror = script.onload = null
        /******/ clearTimeout(timeout)
        /******/ var doneFns = inProgress[url]
        /******/ delete inProgress[url]
        /******/ script.parentNode && script.parentNode.removeChild(script)
        /******/ doneFns && doneFns.forEach(fn => fn(event))
        /******/ if (prev) return prev(event)
        /******/
      }
      /******/ var timeout = setTimeout(
        onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }),
        120000
      )
      /******/ script.onerror = onScriptComplete.bind(null, script.onerror)
      /******/ script.onload = onScriptComplete.bind(null, script.onload)
      /******/ needAttach && document.head.appendChild(script)
      /******/
    }
    /******/
  })() /* webpack/runtime/make namespace object */
  /******/
  /******/
  /******/
  ;(() => {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = exports => {
      /******/ if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' })
        /******/
      }
      /******/ Object.defineProperty(exports, '__esModule', { value: true })
      /******/
    }
    /******/
  })() /* webpack/runtime/remotes loading */
  /******/
  /******/
  /******/
  ;(() => {
    /******/ var chunkMapping = {
      /******/ src_bootstrap_js: [
        /******/ 'webpack/container/remote/products_n/index'
        /******/
      ]
      /******/
    }
    /******/ var idToExternalAndNameMapping = {
      /******/ 'webpack/container/remote/products_n/index': [
        /******/ 'default',
        /******/ './index',
        /******/ 'webpack/container/reference/products_n'
        /******/
      ]
      /******/
    }
    /******/ __webpack_require__.f.remotes = (chunkId, promises) => {
      /******/ if (__webpack_require__.o(chunkMapping, chunkId)) {
        /******/ chunkMapping[chunkId].forEach(id => {
          /******/ var getScope = __webpack_require__.R
          /******/ if (!getScope) getScope = []
          /******/ var data = idToExternalAndNameMapping[id]
          /******/ if (getScope.indexOf(data) >= 0) return
          /******/ getScope.push(data)
          /******/ if (data.p) return promises.push(data.p)
          /******/ var onError = error => {
            /******/ if (!error) error = new Error('Container missing')
            /******/ if (typeof error.message === 'string')
              /******/ error.message += '\nwhile loading "' + data[1] + '" from ' + data[2]
            /******/ __webpack_require__.m[id] = () => {
              /******/ throw error
              /******/
            }
            /******/ data.p = 0
            /******/
          }
          /******/ var handleFunction = (fn, arg1, arg2, d, next, first) => {
            /******/ try {
              /******/ var promise = fn(arg1, arg2)
              /******/ if (promise && promise.then) {
                /******/ var p = promise.then(result => next(result, d), onError)
                /******/ if (first) promises.push((data.p = p))
                else return p
                /******/
              } else {
                /******/ return next(promise, d, first)
                /******/
              }
              /******/
            } catch (error) {
              /******/ onError(error)
              /******/
            }
            /******/
          }
          /******/ var onExternal = (external, _, first) =>
            external
              ? handleFunction(__webpack_require__.I, data[0], 0, external, onInitialized, first)
              : onError()
          /******/ var onInitialized = (_, external, first) =>
            handleFunction(external.get, data[1], getScope, 0, onFactory, first)
          /******/ var onFactory = factory => {
            /******/ data.p = 1
            /******/ __webpack_require__.m[id] = module => {
              /******/ module.exports = factory()
              /******/
            }
            /******/
          }
          /******/ handleFunction(__webpack_require__, data[2], 0, 0, onExternal, 1)
          /******/
        })
        /******/
      }
      /******/
    }
    /******/
  })() /* webpack/runtime/sharing */
  /******/
  /******/
  /******/
  ;(() => {
    /******/ __webpack_require__.S = {}
    /******/ var initPromises = {}
    /******/ var initTokens = {}
    /******/ __webpack_require__.I = (name, initScope) => {
      /******/ if (!initScope) initScope = []
      /******/ // handling circular init calls
      /******/ var initToken = initTokens[name]
      /******/ if (!initToken) initToken = initTokens[name] = {}
      /******/ if (initScope.indexOf(initToken) >= 0) return
      /******/ initScope.push(initToken)
      /******/ // only runs once
      /******/ if (initPromises[name]) return initPromises[name]
      /******/ // creates a new share scope if needed
      /******/ if (!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {}
      /******/ // runs all init snippets from all modules reachable
      /******/ var scope = __webpack_require__.S[name]
      /******/ var warn = msg => {
        /******/ if (typeof console !== 'undefined' && console.warn) console.warn(msg)
        /******/
      }
      /******/ var uniqueName = 'container'
      /******/ var register = (name, version, factory, eager) => {
        /******/ var versions = (scope[name] = scope[name] || {})
        /******/ var activeVersion = versions[version]
        /******/ if (
          !activeVersion ||
          (!activeVersion.loaded &&
            (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))
        )
          versions[version] = { get: factory, from: uniqueName, eager: !!eager }
        /******/
      }
      /******/ var initExternal = id => {
        /******/ var handleError = err => warn('Initialization of sharing external failed: ' + err)
        /******/ try {
          /******/ var module = __webpack_require__(id)
          /******/ if (!module) return
          /******/ var initFn = module =>
            module && module.init && module.init(__webpack_require__.S[name], initScope)
          /******/ if (module.then) return promises.push(module.then(initFn, handleError))
          /******/ var initResult = initFn(module)
          /******/ if (initResult && initResult.then) return promises.push(initResult['catch'](handleError))
          /******/
        } catch (err) {
          handleError(err)
        }
        /******/
      }
      /******/ var promises = []
      /******/ switch (name) {
        /******/ case 'default':
          {
            /******/ initExternal('webpack/container/reference/products_n')
            /******/
          }
          /******/ break
        /******/
      }
      /******/ if (!promises.length) return (initPromises[name] = 1)
      /******/ return (initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1)))
      /******/
    }
    /******/
  })() /* webpack/runtime/publicPath */
  /******/
  /******/
  /******/
  ;(() => {
    /******/ var scriptUrl
    /******/ if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + ''
    /******/ var document = __webpack_require__.g.document
    /******/ if (!scriptUrl && document) {
      /******/ if (document.currentScript) /******/ scriptUrl = document.currentScript.src
      /******/ if (!scriptUrl) {
        /******/ var scripts = document.getElementsByTagName('script')
        /******/ if (scripts.length) {
          /******/ var i = scripts.length - 1
          /******/ while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src
          /******/
        }
        /******/
      }
      /******/
    }
    /******/ // When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
    /******/ // or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
    /******/ if (!scriptUrl) throw new Error('Automatic publicPath is not supported in this browser')
    /******/ scriptUrl = scriptUrl
      .replace(/#.*$/, '')
      .replace(/\?.*$/, '')
      .replace(/\/[^\/]+$/, '/')
    /******/ __webpack_require__.p = scriptUrl
    /******/
  })() /* webpack/runtime/jsonp chunk loading */
  /******/
  /******/
  /******/
  ;(() => {
    /******/ // no baseURI
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
    /******/ var installedChunks = {
      /******/ main: 0
      /******/
    }
    /******/
    /******/ __webpack_require__.f.j = (chunkId, promises) => {
      /******/ // JSONP chunk loading for javascript
      /******/ var installedChunkData = __webpack_require__.o(installedChunks, chunkId)
        ? installedChunks[chunkId]
        : undefined
      /******/ if (installedChunkData !== 0) {
        // 0 means "already installed".
        /******/
        /******/ // a Promise means "currently loading".
        /******/ if (installedChunkData) {
          /******/ promises.push(installedChunkData[2])
          /******/
        } else {
          /******/ if (true) {
            // all chunks have JS
            /******/ // setup Promise in chunk cache
            /******/ var promise = new Promise(
              (resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject])
            )
            /******/ promises.push((installedChunkData[2] = promise))
            /******/
            /******/ // start chunk loading
            /******/ var url = __webpack_require__.p + __webpack_require__.u(chunkId)
            /******/ // create error before stack unwound to get useful stacktrace later
            /******/ var error = new Error()
            /******/ var loadingEnded = event => {
              /******/ if (__webpack_require__.o(installedChunks, chunkId)) {
                /******/ installedChunkData = installedChunks[chunkId]
                /******/ if (installedChunkData !== 0) installedChunks[chunkId] = undefined
                /******/ if (installedChunkData) {
                  /******/ var errorType = event && (event.type === 'load' ? 'missing' : event.type)
                  /******/ var realSrc = event && event.target && event.target.src
                  /******/ error.message =
                    'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')'
                  /******/ error.name = 'ChunkLoadError'
                  /******/ error.type = errorType
                  /******/ error.request = realSrc
                  /******/ installedChunkData[1](error)
                  /******/
                }
                /******/
              }
              /******/
            }
            /******/ __webpack_require__.l(url, loadingEnded, 'chunk-' + chunkId, chunkId)
            /******/
          }
          /******/
        }
        /******/
      }
      /******/
    }
    /******/
    /******/ // no prefetching
    /******/
    /******/ // no preloaded
    /******/
    /******/ // no HMR
    /******/
    /******/ // no HMR manifest
    /******/
    /******/ // no on chunks loaded
    /******/
    /******/ // install a JSONP callback for chunk loading
    /******/ var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
      /******/ var [chunkIds, moreModules, runtime] = data
      /******/ // add "moreModules" to the modules object,
      /******/ // then flag all "chunkIds" as loaded and fire callback
      /******/ var moduleId,
        chunkId,
        i = 0
      /******/ if (chunkIds.some(id => installedChunks[id] !== 0)) {
        /******/ for (moduleId in moreModules) {
          /******/ if (__webpack_require__.o(moreModules, moduleId)) {
            /******/ __webpack_require__.m[moduleId] = moreModules[moduleId]
            /******/
          }
          /******/
        }
        /******/ if (runtime) var result = runtime(__webpack_require__)
        /******/
      }
      /******/ if (parentChunkLoadingFunction) parentChunkLoadingFunction(data)
      /******/ for (; i < chunkIds.length; i++) {
        /******/ chunkId = chunkIds[i]
        /******/ if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
          /******/ installedChunks[chunkId][0]()
          /******/
        }
        /******/ installedChunks[chunkId] = 0
        /******/
      }
      /******/
      /******/
    }
    /******/
    /******/ var chunkLoadingGlobal = (self['webpackChunkcontainer'] = self['webpackChunkcontainer'] || [])
    /******/ chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0))
    /******/ chunkLoadingGlobal.push = webpackJsonpCallback.bind(
      null,
      chunkLoadingGlobal.push.bind(chunkLoadingGlobal)
    )
    /******/
  })()
  /******/
  /************************************************************************/
  var __webpack_exports__ = {}
  // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
  ;(() => {
    /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
    __webpack_require__
      .e(/*! import() */ 'src_bootstrap_js')
      .then(__webpack_require__.bind(__webpack_require__, /*! ./bootstrap */ './src/bootstrap.js'))
  })()

  /******/
})()
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7QUNyRkEsc0pBQXFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29udGFpbmVyL2V4dGVybmFsIHNjcmlwdCBcInByb2R1Y3RzQGh0dHA6Ly9sb2NhbGhvc3Q6ODAwMi9yZW1vdGVFbnRyeS5qc1wiIiwid2VicGFjazovL2NvbnRhaW5lci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9jb250YWluZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vY29udGFpbmVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9jb250YWluZXIvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9jb250YWluZXIvd2VicGFjay9ydW50aW1lL2dldCBqYXZhc2NyaXB0IGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL2NvbnRhaW5lci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2NvbnRhaW5lci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2NvbnRhaW5lci93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vY29udGFpbmVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vY29udGFpbmVyL3dlYnBhY2svcnVudGltZS9yZW1vdGVzIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY29udGFpbmVyL3dlYnBhY2svcnVudGltZS9zaGFyaW5nIiwid2VicGFjazovL2NvbnRhaW5lci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9jb250YWluZXIvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vY29udGFpbmVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX3dlYnBhY2tfZXJyb3JfXyA9IG5ldyBFcnJvcigpO1xubW9kdWxlLmV4cG9ydHMgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdGlmKHR5cGVvZiBwcm9kdWN0cyAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHJlc29sdmUoKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKFwiaHR0cDovL2xvY2FsaG9zdDo4MDAyL3JlbW90ZUVudHJ5LmpzXCIsIChldmVudCkgPT4ge1xuXHRcdGlmKHR5cGVvZiBwcm9kdWN0cyAhPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIHJlc29sdmUoKTtcblx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuXHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG5cdFx0X193ZWJwYWNrX2Vycm9yX18ubWVzc2FnZSA9ICdMb2FkaW5nIHNjcmlwdCBmYWlsZWQuXFxuKCcgKyBlcnJvclR5cGUgKyAnOiAnICsgcmVhbFNyYyArICcpJztcblx0XHRfX3dlYnBhY2tfZXJyb3JfXy5uYW1lID0gJ1NjcmlwdEV4dGVybmFsTG9hZEVycm9yJztcblx0XHRfX3dlYnBhY2tfZXJyb3JfXy50eXBlID0gZXJyb3JUeXBlO1xuXHRcdF9fd2VicGFja19lcnJvcl9fLnJlcXVlc3QgPSByZWFsU3JjO1xuXHRcdHJlamVjdChfX3dlYnBhY2tfZXJyb3JfXyk7XG5cdH0sIFwicHJvZHVjdHNcIik7XG59KS50aGVuKCgpID0+IChwcm9kdWN0cykpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmYgPSB7fTtcbi8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbi8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5lID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIFByb21pc2UuYWxsKE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uZikucmVkdWNlKChwcm9taXNlcywga2V5KSA9PiB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mW2tleV0oY2h1bmtJZCwgcHJvbWlzZXMpO1xuXHRcdHJldHVybiBwcm9taXNlcztcblx0fSwgW10pKTtcbn07IiwiLy8gVGhpcyBmdW5jdGlvbiBhbGxvdyB0byByZWZlcmVuY2UgYXN5bmMgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIFwiXCIgKyBjaHVua0lkICsgXCIuanNcIjtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwiY29udGFpbmVyOlwiO1xuLy8gbG9hZFNjcmlwdCBmdW5jdGlvbiB0byBsb2FkIGEgc2NyaXB0IHZpYSBzY3JpcHQgdGFnXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmwgPSAodXJsLCBkb25lLCBrZXksIGNodW5rSWQpID0+IHtcblx0aWYoaW5Qcm9ncmVzc1t1cmxdKSB7IGluUHJvZ3Jlc3NbdXJsXS5wdXNoKGRvbmUpOyByZXR1cm47IH1cblx0dmFyIHNjcmlwdCwgbmVlZEF0dGFjaDtcblx0aWYoa2V5ICE9PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgcyA9IHNjcmlwdHNbaV07XG5cdFx0XHRpZihzLmdldEF0dHJpYnV0ZShcInNyY1wiKSA9PSB1cmwgfHwgcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIikgPT0gZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpIHsgc2NyaXB0ID0gczsgYnJlYWs7IH1cblx0XHR9XG5cdH1cblx0aWYoIXNjcmlwdCkge1xuXHRcdG5lZWRBdHRhY2ggPSB0cnVlO1xuXHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuXG5cdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuXHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG5cdFx0fVxuXHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJkYXRhLXdlYnBhY2tcIiwgZGF0YVdlYnBhY2tQcmVmaXggKyBrZXkpO1xuXG5cdFx0c2NyaXB0LnNyYyA9IHVybDtcblx0fVxuXHRpblByb2dyZXNzW3VybF0gPSBbZG9uZV07XG5cdHZhciBvblNjcmlwdENvbXBsZXRlID0gKHByZXYsIGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuXHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG5cdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdHZhciBkb25lRm5zID0gaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdGRlbGV0ZSBpblByb2dyZXNzW3VybF07XG5cdFx0c2NyaXB0LnBhcmVudE5vZGUgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcblx0XHRkb25lRm5zICYmIGRvbmVGbnMuZm9yRWFjaCgoZm4pID0+IChmbihldmVudCkpKTtcblx0XHRpZihwcmV2KSByZXR1cm4gcHJldihldmVudCk7XG5cdH1cblx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCB1bmRlZmluZWQsIHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KSwgMTIwMDAwKTtcblx0c2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuXHRzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuXHRuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbn07IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIGNodW5rTWFwcGluZyA9IHtcblx0XCJzcmNfYm9vdHN0cmFwX2pzXCI6IFtcblx0XHRcIndlYnBhY2svY29udGFpbmVyL3JlbW90ZS9wcm9kdWN0c19uL2luZGV4XCJcblx0XVxufTtcbnZhciBpZFRvRXh0ZXJuYWxBbmROYW1lTWFwcGluZyA9IHtcblx0XCJ3ZWJwYWNrL2NvbnRhaW5lci9yZW1vdGUvcHJvZHVjdHNfbi9pbmRleFwiOiBbXG5cdFx0XCJkZWZhdWx0XCIsXG5cdFx0XCIuL2luZGV4XCIsXG5cdFx0XCJ3ZWJwYWNrL2NvbnRhaW5lci9yZWZlcmVuY2UvcHJvZHVjdHNfblwiXG5cdF1cbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYucmVtb3RlcyA9IChjaHVua0lkLCBwcm9taXNlcykgPT4ge1xuXHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY2h1bmtNYXBwaW5nLCBjaHVua0lkKSkge1xuXHRcdGNodW5rTWFwcGluZ1tjaHVua0lkXS5mb3JFYWNoKChpZCkgPT4ge1xuXHRcdFx0dmFyIGdldFNjb3BlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5SO1xuXHRcdFx0aWYoIWdldFNjb3BlKSBnZXRTY29wZSA9IFtdO1xuXHRcdFx0dmFyIGRhdGEgPSBpZFRvRXh0ZXJuYWxBbmROYW1lTWFwcGluZ1tpZF07XG5cdFx0XHRpZihnZXRTY29wZS5pbmRleE9mKGRhdGEpID49IDApIHJldHVybjtcblx0XHRcdGdldFNjb3BlLnB1c2goZGF0YSk7XG5cdFx0XHRpZihkYXRhLnApIHJldHVybiBwcm9taXNlcy5wdXNoKGRhdGEucCk7XG5cdFx0XHR2YXIgb25FcnJvciA9IChlcnJvcikgPT4ge1xuXHRcdFx0XHRpZighZXJyb3IpIGVycm9yID0gbmV3IEVycm9yKFwiQ29udGFpbmVyIG1pc3NpbmdcIik7XG5cdFx0XHRcdGlmKHR5cGVvZiBlcnJvci5tZXNzYWdlID09PSBcInN0cmluZ1wiKVxuXHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgKz0gJ1xcbndoaWxlIGxvYWRpbmcgXCInICsgZGF0YVsxXSArICdcIiBmcm9tICcgKyBkYXRhWzJdO1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1baWRdID0gKCkgPT4ge1xuXHRcdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRhdGEucCA9IDA7XG5cdFx0XHR9O1xuXHRcdFx0dmFyIGhhbmRsZUZ1bmN0aW9uID0gKGZuLCBhcmcxLCBhcmcyLCBkLCBuZXh0LCBmaXJzdCkgPT4ge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHZhciBwcm9taXNlID0gZm4oYXJnMSwgYXJnMik7XG5cdFx0XHRcdFx0aWYocHJvbWlzZSAmJiBwcm9taXNlLnRoZW4pIHtcblx0XHRcdFx0XHRcdHZhciBwID0gcHJvbWlzZS50aGVuKChyZXN1bHQpID0+IChuZXh0KHJlc3VsdCwgZCkpLCBvbkVycm9yKTtcblx0XHRcdFx0XHRcdGlmKGZpcnN0KSBwcm9taXNlcy5wdXNoKGRhdGEucCA9IHApOyBlbHNlIHJldHVybiBwO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbmV4dChwcm9taXNlLCBkLCBmaXJzdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoKGVycm9yKSB7XG5cdFx0XHRcdFx0b25FcnJvcihlcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHZhciBvbkV4dGVybmFsID0gKGV4dGVybmFsLCBfLCBmaXJzdCkgPT4gKGV4dGVybmFsID8gaGFuZGxlRnVuY3Rpb24oX193ZWJwYWNrX3JlcXVpcmVfXy5JLCBkYXRhWzBdLCAwLCBleHRlcm5hbCwgb25Jbml0aWFsaXplZCwgZmlyc3QpIDogb25FcnJvcigpKTtcblx0XHRcdHZhciBvbkluaXRpYWxpemVkID0gKF8sIGV4dGVybmFsLCBmaXJzdCkgPT4gKGhhbmRsZUZ1bmN0aW9uKGV4dGVybmFsLmdldCwgZGF0YVsxXSwgZ2V0U2NvcGUsIDAsIG9uRmFjdG9yeSwgZmlyc3QpKTtcblx0XHRcdHZhciBvbkZhY3RvcnkgPSAoZmFjdG9yeSkgPT4ge1xuXHRcdFx0XHRkYXRhLnAgPSAxO1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1baWRdID0gKG1vZHVsZSkgPT4ge1xuXHRcdFx0XHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0aGFuZGxlRnVuY3Rpb24oX193ZWJwYWNrX3JlcXVpcmVfXywgZGF0YVsyXSwgMCwgMCwgb25FeHRlcm5hbCwgMSk7XG5cdFx0fSk7XG5cdH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLlMgPSB7fTtcbnZhciBpbml0UHJvbWlzZXMgPSB7fTtcbnZhciBpbml0VG9rZW5zID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLkkgPSAobmFtZSwgaW5pdFNjb3BlKSA9PiB7XG5cdGlmKCFpbml0U2NvcGUpIGluaXRTY29wZSA9IFtdO1xuXHQvLyBoYW5kbGluZyBjaXJjdWxhciBpbml0IGNhbGxzXG5cdHZhciBpbml0VG9rZW4gPSBpbml0VG9rZW5zW25hbWVdO1xuXHRpZighaW5pdFRva2VuKSBpbml0VG9rZW4gPSBpbml0VG9rZW5zW25hbWVdID0ge307XG5cdGlmKGluaXRTY29wZS5pbmRleE9mKGluaXRUb2tlbikgPj0gMCkgcmV0dXJuO1xuXHRpbml0U2NvcGUucHVzaChpbml0VG9rZW4pO1xuXHQvLyBvbmx5IHJ1bnMgb25jZVxuXHRpZihpbml0UHJvbWlzZXNbbmFtZV0pIHJldHVybiBpbml0UHJvbWlzZXNbbmFtZV07XG5cdC8vIGNyZWF0ZXMgYSBuZXcgc2hhcmUgc2NvcGUgaWYgbmVlZGVkXG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oX193ZWJwYWNrX3JlcXVpcmVfXy5TLCBuYW1lKSkgX193ZWJwYWNrX3JlcXVpcmVfXy5TW25hbWVdID0ge307XG5cdC8vIHJ1bnMgYWxsIGluaXQgc25pcHBldHMgZnJvbSBhbGwgbW9kdWxlcyByZWFjaGFibGVcblx0dmFyIHNjb3BlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5TW25hbWVdO1xuXHR2YXIgd2FybiA9IChtc2cpID0+IHtcblx0XHRpZiAodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4obXNnKTtcblx0fTtcblx0dmFyIHVuaXF1ZU5hbWUgPSBcImNvbnRhaW5lclwiO1xuXHR2YXIgcmVnaXN0ZXIgPSAobmFtZSwgdmVyc2lvbiwgZmFjdG9yeSwgZWFnZXIpID0+IHtcblx0XHR2YXIgdmVyc2lvbnMgPSBzY29wZVtuYW1lXSA9IHNjb3BlW25hbWVdIHx8IHt9O1xuXHRcdHZhciBhY3RpdmVWZXJzaW9uID0gdmVyc2lvbnNbdmVyc2lvbl07XG5cdFx0aWYoIWFjdGl2ZVZlcnNpb24gfHwgKCFhY3RpdmVWZXJzaW9uLmxvYWRlZCAmJiAoIWVhZ2VyICE9ICFhY3RpdmVWZXJzaW9uLmVhZ2VyID8gZWFnZXIgOiB1bmlxdWVOYW1lID4gYWN0aXZlVmVyc2lvbi5mcm9tKSkpIHZlcnNpb25zW3ZlcnNpb25dID0geyBnZXQ6IGZhY3RvcnksIGZyb206IHVuaXF1ZU5hbWUsIGVhZ2VyOiAhIWVhZ2VyIH07XG5cdH07XG5cdHZhciBpbml0RXh0ZXJuYWwgPSAoaWQpID0+IHtcblx0XHR2YXIgaGFuZGxlRXJyb3IgPSAoZXJyKSA9PiAod2FybihcIkluaXRpYWxpemF0aW9uIG9mIHNoYXJpbmcgZXh0ZXJuYWwgZmFpbGVkOiBcIiArIGVycikpO1xuXHRcdHRyeSB7XG5cdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdFx0XHRpZighbW9kdWxlKSByZXR1cm47XG5cdFx0XHR2YXIgaW5pdEZuID0gKG1vZHVsZSkgPT4gKG1vZHVsZSAmJiBtb2R1bGUuaW5pdCAmJiBtb2R1bGUuaW5pdChfX3dlYnBhY2tfcmVxdWlyZV9fLlNbbmFtZV0sIGluaXRTY29wZSkpXG5cdFx0XHRpZihtb2R1bGUudGhlbikgcmV0dXJuIHByb21pc2VzLnB1c2gobW9kdWxlLnRoZW4oaW5pdEZuLCBoYW5kbGVFcnJvcikpO1xuXHRcdFx0dmFyIGluaXRSZXN1bHQgPSBpbml0Rm4obW9kdWxlKTtcblx0XHRcdGlmKGluaXRSZXN1bHQgJiYgaW5pdFJlc3VsdC50aGVuKSByZXR1cm4gcHJvbWlzZXMucHVzaChpbml0UmVzdWx0WydjYXRjaCddKGhhbmRsZUVycm9yKSk7XG5cdFx0fSBjYXRjaChlcnIpIHsgaGFuZGxlRXJyb3IoZXJyKTsgfVxuXHR9XG5cdHZhciBwcm9taXNlcyA9IFtdO1xuXHRzd2l0Y2gobmFtZSkge1xuXHRcdGNhc2UgXCJkZWZhdWx0XCI6IHtcblx0XHRcdGluaXRFeHRlcm5hbChcIndlYnBhY2svY29udGFpbmVyL3JlZmVyZW5jZS9wcm9kdWN0c19uXCIpO1xuXHRcdH1cblx0XHRicmVhaztcblx0fVxuXHRpZighcHJvbWlzZXMubGVuZ3RoKSByZXR1cm4gaW5pdFByb21pc2VzW25hbWVdID0gMTtcblx0cmV0dXJuIGluaXRQcm9taXNlc1tuYW1lXSA9IFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IChpbml0UHJvbWlzZXNbbmFtZV0gPSAxKSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtjb250YWluZXJcIl0gPSBzZWxmW1wid2VicGFja0NodW5rY29udGFpbmVyXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCJpbXBvcnQoJy4vYm9vdHN0cmFwJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
