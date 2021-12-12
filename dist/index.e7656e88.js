// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"28hdS":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";
module.bundle.HMR_BUNDLE_ID = "41dfd112116de3a5f48364dfe7656e88";
// @flow
/*global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE*/
/*::
import type {
HMRAsset,
HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
(string): mixed;
cache: {|[string]: ParcelModule|};
hotData: mixed;
Module: any;
parent: ?ParcelRequire;
isParcelRequire: true;
modules: {|[string]: [Function, {|[string]: string|}]|};
HMR_BUNDLE_ID: string;
root: ParcelRequire;
}
interface ParcelModule {
hot: {|
data: mixed,
accept(cb: (Function) => void): void,
dispose(cb: (mixed) => void): void,
// accept(deps: Array<string> | string, cb: (Function) => void): void,
// decline(): void,
_acceptCallbacks: Array<(Function) => void>,
_disposeCallbacks: Array<(mixed) => void>,
|};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || (function () {}));
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
  return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
  return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol = HMR_SECURE || location.protocol == 'https:' && !(/localhost|127.0.0.1|0.0.0.0/).test(hostname) ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
  // $FlowFixMe
  ws.onmessage = function (event) {
    checkedAssets = {
      /*: {|[string]: boolean|}*/
    };
    acceptedAssets = {
      /*: {|[string]: boolean|}*/
    };
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();
      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);
      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept = asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        if (didAccept) {
          handled = true;
        }
      });
      if (handled) {
        console.clear();
        assets.forEach(function (asset) {
          hmrApply(module.bundle.root, asset);
        });
        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }
    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
        console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
      }
      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      // $FlowFixMe
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function (e) {
    console.error(e.message);
  };
  ws.onclose = function (e) {
    if (undefined !== 'test') {
      console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}
function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;
  let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }
  errorHTML += '</div>';
  overlay.innerHTML = errorHTML;
  return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]>*/
{
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push([bundle, k]);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    if (link.parentNode !== null) {
      // $FlowFixMe
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute('href', // $FlowFixMe
  link.getAttribute('href').split('?')[0] + '?' + Date.now());
  // $FlowFixMe
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      // $FlowFixMe[incompatible-type]
      var href = links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
      var absolute = (/^https?:\/\//i).test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (asset.type === 'css') {
    reloadCSS();
    return;
  }
  let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
  if (deps) {
    var fn = new Function('require', 'module', 'exports', asset.output);
    modules[asset.id] = [fn, deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
    // If we reached the root bundle without finding where the asset should go,
    // there's nothing to do. Mark as "accepted" so we don't reload the page.
    if (!bundle.parent) {
      return true;
    }
    return hmrAcceptCheck(bundle.parent, id, depsByBundle);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(module.bundle.root, id).some(function (v) {
    return hmrAcceptCheck(v[0], v[1], null);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      var assetsToAlsoAccept = cb(function () {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"6RYkV":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "AST", function () {
  return _AST;
});
_parcelHelpers.export(exports, "Parser", function () {
  return _Parser;
});
_parcelHelpers.export(exports, "Renderer", function () {
  return _Renderer;
});
var _AST = require('./AST');
var _Parser = require('./Parser');
var _Renderer = require('./Renderer');

},{"./AST":"crPBv","./Parser":"5tGfU","./Renderer":"d12yK","@parcel/transformer-js/lib/esmodule-helpers.js":"1IYd1"}],"crPBv":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "CamusNodeType", function () {
  return CamusNodeType;
});
_parcelHelpers.export(exports, "isCamusAtomicNode", function () {
  return isCamusAtomicNode;
});
_parcelHelpers.export(exports, "isCamusInlineNode", function () {
  return isCamusInlineNode;
});
_parcelHelpers.export(exports, "isCamusLineNode", function () {
  return isCamusLineNode;
});
_parcelHelpers.export(exports, "isCamusBlockNode", function () {
  return isCamusBlockNode;
});
let CamusNodeType;
(function (CamusNodeType) {
  CamusNodeType[CamusNodeType["Heading"] = 1] = "Heading";
  CamusNodeType[CamusNodeType["Block"] = 2] = "Block";
  CamusNodeType[CamusNodeType["InlineStyle"] = 3] = "InlineStyle";
  CamusNodeType[CamusNodeType["InlineCode"] = 4] = "InlineCode";
  CamusNodeType[CamusNodeType["InlineIgnore"] = 5] = "InlineIgnore";
  CamusNodeType[CamusNodeType["Link"] = 6] = "Link";
  CamusNodeType[CamusNodeType["Ref"] = 7] = "Ref";
  CamusNodeType[CamusNodeType["FootnoteRef"] = 8] = "FootnoteRef";
  CamusNodeType[CamusNodeType["FootnoteText"] = 9] = "FootnoteText";
  CamusNodeType[CamusNodeType["FootnoteBlock"] = 10] = "FootnoteBlock";
  CamusNodeType[CamusNodeType["Image"] = 11] = "Image";
  CamusNodeType[CamusNodeType["List"] = 12] = "List";
  CamusNodeType[CamusNodeType["ListItem"] = 13] = "ListItem";
  CamusNodeType[CamusNodeType["HorizontalRule"] = 14] = "HorizontalRule";
})(CamusNodeType || (CamusNodeType = {}));
function isCamusAtomicNode(x) {
  return typeof x === 'string' || [CamusNodeType.Link, CamusNodeType.Ref, CamusNodeType.FootnoteRef, CamusNodeType.InlineCode, CamusNodeType.InlineIgnore, CamusNodeType.Image].includes(x._nodeType);
}
function isCamusInlineNode(x) {
  return isCamusAtomicNode(x) || [CamusNodeType.InlineStyle].includes(x._nodeType);
}
function isCamusLineNode(x) {
  return typeof x !== 'string' && [CamusNodeType.FootnoteText, CamusNodeType.Heading, CamusNodeType.HorizontalRule].includes(x._nodeType);
}
function isCamusBlockNode(x) {
  return typeof x !== 'string' && [CamusNodeType.Block, CamusNodeType.List, CamusNodeType.FootnoteBlock].includes(x._nodeType);
}

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"1IYd1"}],"1IYd1":[function(require,module,exports) {
"use strict";

exports.interopDefault = function (a) {
  return a && a.__esModule ? a : {
    default: a
  };
};

exports.defineInteropFlag = function (a) {
  Object.defineProperty(a, '__esModule', {
    value: true
  });
};

exports.exportAll = function (source, dest) {
  Object.keys(source).forEach(function (key) {
    if (key === 'default' || key === '__esModule') {
      return;
    } // Skip duplicate re-exports when they have the same value.


    if (key in dest && dest[key] === source[key]) {
      return;
    }

    Object.defineProperty(dest, key, {
      enumerable: true,
      get: function () {
        return source[key];
      }
    });
  });
  return dest;
};

exports.export = function (dest, destName, get) {
  Object.defineProperty(dest, destName, {
    enumerable: true,
    get: get
  });
};
},{}],"5tGfU":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "_parseInline", function () {
  return _parseInline;
});
_parcelHelpers.export(exports, "parse", function () {
  return parse;
});
var _Assert = require('./Assert');
var _AST = require('./AST');
const REGEX_BRACE_TAG = /^\{([a-zA-Z0-9]+)(?:\(((?:\\\)|[^)])*)\))?:((?:\\\}|[^}])*)\}/;
const REGEX_FOOTNOTE_TAG = /^\{footnote@((?:\\\}|\\\]|[^}\]\s])*)\}/;
const REGEX_INLINE_CODE = /^`((?:\\`|[^`]*))`/;
function _parseInline(x) {
  let matchres;
  let subj = x;
  let stash = [];
  let stack = [];
  let _StashPush = x => {
    let stashTop = stash[stash.length - 1];
    if (Array.isArray(stashTop)) {
      stashTop.push(x);
    } else {
      stash.push(x);
    }
  };
  while (subj) {
    if (matchres = REGEX_FOOTNOTE_TAG.exec(subj)) {
      _StashPush({
        _nodeType: _AST.CamusNodeType.FootnoteRef,
        id: matchres[1]
      });
      subj = subj.substring(matchres[0].length);
    } else if (matchres = REGEX_BRACE_TAG.exec(subj)) {
      switch (matchres[1]) {
        case 'link':
          {
            _StashPush({
              _nodeType: _AST.CamusNodeType.Link,
              url: matchres[3] || '',
              text: matchres[2] || ''
            });
            break;
          }
        case 'img':
          {
            _StashPush({
              _nodeType: _AST.CamusNodeType.Image,
              url: matchres[3] || '',
              alt: matchres[2] || ''
            });
            break;
          }
        case 'ref':
          {
            _StashPush({
              _nodeType: _AST.CamusNodeType.Ref,
              path: matchres[3] || ''
            });
            break;
          }
        default:
          {
            _StashPush(matchres[0]);
            break;
          }
      }
      subj = subj.substring(matchres[0].length);
    } else if (matchres = REGEX_INLINE_CODE.exec(subj)) {
      _StashPush({
        _nodeType: _AST.CamusNodeType.InlineCode,
        text: matchres[1]
      });
      subj = subj.substring(matchres[0].length);
    } else {
      if (('*/_').includes(subj[0]) || subj.startsWith('~~')) {
        if (stack.includes(subj[0]) || subj.startsWith('~~') && stack.includes('~~')) {
          // x[0] in stack.
          // NOTE: now there's a problem. if we have an input like this:
          // *_bold underline*_
          // what should we do about this?
          // now (2021.12.6) we decide it should be equivalent with:
          // <b>_bold underline</b>_
          // because style character pushes array onto stash, we can restore the original stuff.
          // e.g.:
          // *bold _boldu ~~budelete*
          // which should be:
          // <b>bold _boldu ~~budelete</b>
          // is with a stash and stack of:
          // stash=['normal ',['bold'],['boldu '],['budelete']]
          // stack=[*_~~]
          // when the last * is seen. we rewind the stack & it'll be:
          // ['_'] + ['boldu '] + ['~~'] + ['budelete']
          // which results in ['_', 'boldu ', '~~', 'budelete']
          // so the rewind algorithm:
          // rewindStash = []
          // while stack.top !== subj[0]:
          // rewindStash = stash.pop() + rewindStash
          // rewindStash = [stack.pop()] + rewindStash
          // stashTopArray = stashTopArray + rewindStash
          // which will leave stash & stack with:
          // stash=['normal ',['bold','_','boldu ','~~','budelete']]
          // stack=[*]
          // which then we follow the normal procedure.
          let rewindStash = [];
          while (subj.startsWith('~~') && stack[stack.length - 1] !== '~~' || !subj.startsWith('~~') && stack[stack.length - 1] !== subj[0]) {
            let stashTop = stash.pop();
            rewindStash = [stack.pop(), ...Array.isArray(stashTop) ? stashTop : [stashTop], ...rewindStash];
          }
          let stashTop = stash[stash.length - 1];
          _Assert.ASSERT('stashTop should an array.', Array.isArray(stashTop));
          stash[stash.length - 1] = [...stashTop, ...rewindStash];
          // now we resolve stack top:
          let styleArray = [];
          let s = stack.pop();
          styleArray.push(s === '*' ? 'bold' : s === '/' ? 'italics' : s === '_' ? 'underline' : 'delete');
          let lastStashTop = stash.pop();
          let newNode = {
            _nodeType: _AST.CamusNodeType.InlineStyle,
            style: styleArray,
            text: lastStashTop
          };
          _StashPush(newNode);
          subj = subj.substring(subj.startsWith('~~') ? 2 : 1);
        } else {
          // x[0] not in stack.
          stash.push([]);
          stack.push(subj.startsWith('~~') ? '~~' : subj[0]);
          subj = subj.substring(subj.startsWith('~~') ? 2 : 1);
        }
      } else if (subj[0] === '\\' && subj[1] && ('*/_~{`').includes(subj[1])) {
        _StashPush(subj[1]);
        subj = subj.substring(2);
      } else {
        let i = 0;
        while (subj[i] && !('*/_~{`\\').includes(subj[i])) {
          i++;
        }
        _StashPush(subj.substring(0, i));
        subj = subj.substring(i);
      }
    }
  }
  // NOTE: there shouldn't be any inline style left at the end of the line.
  // if there is, we need to rewind just like above.
  let rewindStash = [];
  while (stack.length > 0) {
    let stashTop = stash.pop();
    rewindStash = [stack.pop(), ...Array.isArray(stashTop) ? stashTop : [stashTop], ...rewindStash];
  }
  // Now there shouldn't be any array in the stash.
  _Assert.ASSERT('at the end of finishing rewind stash should not contain array', !rewindStash.map(v => Array.isArray(v)).reduce((a, b) => a || b, false));
  stash = stash.concat(rewindStash);
  _Assert.ASSERT('at the end of _parseInline stash should be an ast.CamusLine', stash.map(v => _AST.isCamusInlineNode(v)).reduce((a, b) => a && b, true));
  return stash;
}
// NOTE:
// 1.  a logic line means:
// a.  one line of heading.
// b.  one block (the one started with `#{`).
// c.  one horizontal rule.
// d.  multiple lines of block quote text (started with `>`) with no blank lines
// in between.
// e.  multiple list item with (1) same bullet (2) same indent (3) no blank lines
// in between.
// f.  multiple line after a footnote text id with an indent longer than the id
// and no blank lines in between, e.g.:
// [1]:blahblahblah
// blahblahblahblha
// blahblablah
// and:
// [1]: blahblahblah
// blahblahblahblha
// blahblablah
// the 3 lines of blahblahblah belongs to one single logic line, because
// they have an indent longer than `[1]:`.
// g.  multiple line with no line-level or block-level style and no blank lines
// in between.
// 2.  camus does not support nested block nodes (the one started with `#{`).
// if need to input literal text `#}`:
// a.  indent the whole content; camus consider the string `#}` *with no indent*
// as the end of a block. any indent from the indented content will be removed
// accordingly, e.g.:
// #{code javascript
// function hanoi(x, y, z) {
// console.log("hello, world!");
// }
// #}
// each line of the block of code inside has the indent of 2 spaces, 6 spaces
// and 2 spaces respectively, the shortest indent is 2 space, so 2 spaces of
// indent is removed to form the parsing result.
// b.  if for any reasons you need to write `#}` with no indent, write `\#}`.
const REGEX_HEADING = /^(={1,6})\s+(.*)$/;
const REGEX_FOOTNOTE_TEXT = /^(\[((?:\\\}|\\\]|[^}\]\s])*)\]:\s*)(.*)$/;
const REGEX_HORIZONTAL_RULE = /^-{5,}/;
const REGEX_QUOTE = /^(>\s+)(.*)/;
const REGEX_BLOCK_START = /^#\{([^\s]+)?(?:\s+(.*))?/;
const REGEX_BLOCK_END = /^#\}/;
const REGEX_UNORDERED_LIST_HEAD = /^(([\+-])(\s+))(.*)/;
const REGEX_ORDERED_LIST_HEAD = /^(([0-9]+)\.(\s+))(.*)/;
const REGEX_TRIM_LEFT = /^(\s*)/;
const VERBATIM_BLOCK_TYPES = ['verbatim', 'code', 'ignore'];
function _checkIfSpecialTreatmentRequired(x) {
  return !!(REGEX_HEADING.exec(x) || REGEX_FOOTNOTE_TEXT.exec(x) || REGEX_HORIZONTAL_RULE.exec(x) || REGEX_QUOTE.exec(x) || REGEX_BLOCK_START.exec(x) || REGEX_BLOCK_END.exec(x) || REGEX_UNORDERED_LIST_HEAD.exec(x) || REGEX_ORDERED_LIST_HEAD.exec(x));
}
function _parseSingleLogicLine(x, n) {
  if (n >= x.length) {
    return undefined;
  }
  let matchres;
  if (matchres = REGEX_HEADING.exec(x[n])) {
    return [[{
      _nodeType: _AST.CamusNodeType.Heading,
      level: matchres[1].length,
      text: _parseInline(matchres[2].trim())
    }], n + 1];
  } else if (matchres = REGEX_HORIZONTAL_RULE.exec(x[n])) {
    return [[{
      _nodeType: _AST.CamusNodeType.HorizontalRule
    }], n + 1];
  } else if (matchres = REGEX_QUOTE.exec(x[n])) {
    let i = n + 1;
    let matchres2;
    let minprefix = matchres[1];
    while (x[i] !== undefined && (matchres2 = REGEX_QUOTE.exec(x[i]))) {
      i++;
      if (minprefix.length > matchres2[1].length) {
        minprefix = matchres2[1];
      }
    }
    let subdoc = x.slice(n, i);
    let subdocRes = _parseDocument(subdoc.map(v => v.substring(minprefix.length)));
    return [[{
      _nodeType: _AST.CamusNodeType.Block,
      type: 'quote',
      arg: '',
      text: subdocRes
    }], i];
  } else if (matchres = REGEX_BLOCK_START.exec(x[n])) {
    let type = matchres[1]?.trim?.();
    let args = matchres[2]?.trim?.();
    let i = n + 1;
    let matchres2;
    let subdoc = [];
    let minindent = +Infinity;
    while (x[i] !== undefined && !REGEX_BLOCK_END.exec(x[i])) {
      matchres2 = REGEX_TRIM_LEFT.exec(x[i]);
      if (minindent > matchres2[1].length) {
        minindent = matchres2[1].length;
      }
      subdoc.push(x[i] === '\\#}' ? '#}' : x[i]);
      i++;
    }
    i++;
    let subdocNoIndent = subdoc.map(v => v.substring(minindent));
    let subdocRes = {
      _nodeType: _AST.CamusNodeType.Block,
      type: type,
      arg: args,
      text: VERBATIM_BLOCK_TYPES.includes(type) ? subdocNoIndent.map(v => [v]) : _parseDocument(subdocNoIndent)
    };
    return [[subdocRes], i];
  } else if (matchres = REGEX_FOOTNOTE_TEXT.exec(x[n])) {
    let i;
    let matchres2;
    let footnoteTextList = [];
    do {
      i = n + 1;
      let indent = matchres[1].length;
      let subdoc = [x[n].substring(indent).trim()];
      while (x[i] !== undefined && (matchres2 = REGEX_TRIM_LEFT.exec(x[i]))) {
        if (!x[i] || !x[i].trim() || matchres2[1].length >= indent) {
          subdoc.push(x[i].substring(indent));
          i++;
        } else {
          break;
        }
      }
      let parsedSubdoc = _parseDocument(subdoc);
      // console.log(parsedSubdoc);
      let subdocRes = {
        _nodeType: _AST.CamusNodeType.FootnoteText,
        id: matchres[2],
        text: parsedSubdoc
      };
      footnoteTextList.push(subdocRes);
      n = i;
    } while (x[n] !== undefined && (matchres = REGEX_FOOTNOTE_TEXT.exec(x[n])));
    return [[{
      _nodeType: _AST.CamusNodeType.FootnoteBlock,
      content: footnoteTextList
    }], n];
  } else if (matchres = REGEX_UNORDERED_LIST_HEAD.exec(x[n])) {
    let i;
    let matchres2;
    let listItemList = [];
    do {
      i = n + 1;
      let indent = matchres[1].length;
      let subdoc = [x[n].substring(indent).trim()];
      while (x[i] !== undefined && (matchres2 = REGEX_TRIM_LEFT.exec(x[i]))) {
        if (!x[i] || !x[i].trim() || matchres2[1].length >= indent) {
          subdoc.push(x[i].substring(indent));
          i++;
        } else {
          break;
        }
      }
      let parsedSubdoc = _parseDocument(subdoc);
      let listItem = {
        _nodeType: _AST.CamusNodeType.ListItem,
        text: parsedSubdoc
      };
      listItemList.push(listItem);
      n = i;
    } while (x[n] !== undefined && (matchres = REGEX_UNORDERED_LIST_HEAD.exec(x[n])));
    return [[{
      _nodeType: _AST.CamusNodeType.List,
      ordered: false,
      items: listItemList
    }], n];
  } else if (matchres = REGEX_ORDERED_LIST_HEAD.exec(x[n])) {
    let i;
    let matchres2;
    let listItemList = [];
    do {
      i = n + 1;
      let indent = matchres[1].length;
      let subdoc = [x[n].substring(indent).trim()];
      while (x[i] !== undefined && (matchres2 = REGEX_TRIM_LEFT.exec(x[i]))) {
        if (!x[i] || !x[i].trim() || matchres2[1].length >= indent) {
          subdoc.push(x[i].substring(indent));
          i++;
        } else {
          break;
        }
      }
      let parsedSubdoc = _parseDocument(subdoc);
      let listItem = {
        _nodeType: _AST.CamusNodeType.ListItem,
        text: parsedSubdoc
      };
      listItemList.push(listItem);
      n = i;
    } while (x[n] !== undefined && (matchres = REGEX_ORDERED_LIST_HEAD.exec(x[n])));
    return [[{
      _nodeType: _AST.CamusNodeType.List,
      ordered: false,
      items: listItemList
    }], n];
  } else {
    let i = n;
    if (x[i] !== undefined) {
      if (!x[i] || !x[i].trim()) {
        while (x[i] !== undefined && (!x[i] || !x[i].trim())) {
          i++;
        }
        return [[], i];
      } else {
        while (x[i] && x[i].trim() && !_checkIfSpecialTreatmentRequired(x[i])) {
          i++;
        }
        return [x.slice(n, i).map(v => _parseInline(v)).reduce((a, b) => a.concat(b), []), i];
      }
    }
  }
}
function _parseDocument(x) {
  let result = [];
  let n = 0;
  while (x[n] !== undefined) {
    let parseSingleResult = _parseSingleLogicLine(x, n);
    if (parseSingleResult) {
      if (parseSingleResult[0].length > 0) {
        result.push(parseSingleResult[0]);
      }
      n = parseSingleResult[1];
    } else {
      result.push(_parseInline(x[n]));
      n++;
    }
  }
  return result;
}
function parse(x) {
  return _parseDocument(x.split('\n'));
}

},{"./Assert":"2wFEF","./AST":"crPBv","@parcel/transformer-js/lib/esmodule-helpers.js":"1IYd1"}],"2wFEF":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "ASSERT", function () {
  return ASSERT;
});
function ASSERT(text, condition) {
  if (!condition) {
    throw new Error(`assert error: ${text}`);
  }
}

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"1IYd1"}],"d12yK":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "CamusHTMLRenderer", function () {
  return CamusHTMLRenderer;
});
var _AST = require("./AST");
var _PrettyPrinter = require("./PrettyPrinter");
class CamusHTMLRenderer {
  _additionalHead = [];
  _externalStylesheet = [];
  _replacePunctuation = undefined;
  _pp = new _PrettyPrinter.PrettyPrinter();
  constructor(options) {
    if (options) {
      this._additionalHead = options.additionalHead || [];
      this._externalStylesheet = options.additionalStylesheet || [];
      this._replacePunctuation = options.replacePunctuation;
    }
  }
  render(x) {
    this._pp.clear();
    x.forEach(v => this._renderLogicLine(v));
    return this._pp.result;
  }
  _singleQuote = false;
  _doubleQuote = false;
  _renderLine(x) {
    this._singleQuote = false;
    this._doubleQuote = false;
    x.forEach(v => this._render(v));
  }
  _renderLogicLine(x, noWrapper = false) {
    this._singleQuote = false;
    this._doubleQuote = false;
    let firstPassed = false;
    x.forEach(v => {
      if (!noWrapper && _AST.isCamusInlineNode(v)) {
        if (!firstPassed) {
          this._pp.string('<p>');
          firstPassed = true;
        }
      } else {
        if (!noWrapper && firstPassed) {
          this._pp.string('</p>').line().indent();
          firstPassed = false;
        }
      }
      this._render(v);
    });
    if (!noWrapper && firstPassed) {
      this._pp.string('</p>').line();
    }
  }
  _render(x) {
    if (typeof x === 'string') {
      this._text(x);
    } else {
      switch (x._nodeType) {
        case _AST.CamusNodeType.Heading:
          {
            this._heading(x);
            break;
          }
        case _AST.CamusNodeType.Block:
          {
            this._block(x);
            break;
          }
        case _AST.CamusNodeType.InlineStyle:
          {
            this._inlineStyle(x);
            break;
          }
        case _AST.CamusNodeType.InlineCode:
          {
            this._inlineCode(x);
            break;
          }
        case _AST.CamusNodeType.Link:
          {
            this._link(x);
            break;
          }
        case _AST.CamusNodeType.Ref:
          {
            this._ref(x);
            break;
          }
        case _AST.CamusNodeType.FootnoteRef:
          {
            this._footnoteRef(x);
            break;
          }
        case _AST.CamusNodeType.FootnoteText:
          {
            this._footnoteText(x);
            break;
          }
        case _AST.CamusNodeType.FootnoteBlock:
          {
            this._footnoteBlock(x);
            break;
          }
        case _AST.CamusNodeType.Image:
          {
            this._image(x);
            break;
          }
        case _AST.CamusNodeType.List:
          {
            this._list(x);
            break;
          }
        case _AST.CamusNodeType.InlineIgnore:
          {
            break;
          }
        case _AST.CamusNodeType.HorizontalRule:
          {
            this._pp.line().indent().string('<hr />').line();
            break;
          }
        default:
          {
            this._pp.string(`${x}`);
          }
      }
    }
  }
  _text(n) {
    if (this._replacePunctuation) {
      if (!this._replacePunctuation.singleQuote && !this._replacePunctuation.doubleQuote) {
        this._pp.string(n.replace(/--/g, this._replacePunctuation.doubleDash || '--').replace(/-/g, this._replacePunctuation.singleDash || '-'));
      } else {
        let singleQuote = this._replacePunctuation.singleQuote || ["'", "'"];
        let doubleQuote = this._replacePunctuation.doubleQuote || ['"', '"'];
        let r = [];
        for (let i = 0; i < n.length; i++) {
          switch (n[i]) {
            case '"':
              {
                r.push(doubleQuote[this._doubleQuote ? 1 : 0]);
                this._doubleQuote = !this._doubleQuote;
                break;
              }
            case "'":
              {
                r.push(singleQuote[this._singleQuote ? 1 : 0]);
                this._singleQuote = !this._singleQuote;
                break;
              }
            default:
              {
                r.push(n[i]);
                break;
              }
          }
        }
        this._pp.string(r.join(''));
      }
    } else {
      this._pp.string(n);
    }
  }
  _heading(n) {
    this._pp.indent().string(`<h${n.level}>`);
    this._renderLine(n.text);
    this._pp.string(`</h${n.level}>`).line();
  }
  _block(n) {
    if (n.type === 'ignore') {
      return;
    }
    switch (n.type) {
      case 'verbatim':
        {
          this._pp.indent().string(`<pre ${n.arg ? `class="${n.arg}"` : ''}>`).line().addIndent();
          n.text.forEach(v => {
            v.forEach(j => {
              this._text(j);
              this._pp.line();
            });
          });
          this._pp.removeIndent().indent().string(`</pre>`).line();
          break;
        }
      case 'code':
        {
          this._pp.indent().string(`<pre class="code code-${n.arg}">`).line().addIndent();
          n.text.forEach(v => {
            v.forEach(j => {
              this._text(j);
              this._pp.line();
            });
          });
          this._pp.removeIndent().indent().string(`</pre>`).line();
          break;
        }
      case 'quote':
        {
          this._pp.indent().string(`<blockquote>`).line().addIndent();
          n.text.forEach(v => {
            this._pp.indent();
            v.forEach(j => {
              this._render(j);
              this._pp.line();
            });
          });
          this._pp.removeIndent().indent().string(`</blockquote>`).line();
          break;
        }
      default:
        {
          this._pp.indent().string(`<div class="block-${n.arg}">`).line().addIndent();
          n.text.forEach(v => {
            this._pp.indent();
            v.forEach(j => {
              this._render(j);
              this._pp.line();
            });
          });
          this._pp.removeIndent().indent().string(`</div>`).line();
          break;
        }
    }
    return;
  }
  _inlineStyle(n) {
    let start = n.style.map(v => `<${v}>`).join('').replace(/bold/g, 'b').replace(/italics/g, 'i').replace(/underline/g, 'span style="text-decoration:underline"').replace(/delete/g, 'del');
    let end = n.style.map(v => `</${v}>`).join('').replace(/bold/g, 'b').replace(/italics/g, 'i').replace(/underline/g, 'span').replace(/delete/g, 'del');
    this._pp.string(start);
    this._renderLine(n.text);
    this._pp.string(end);
  }
  _inlineCode(n) {
    this._pp.string(`<code>${n.text}</code>`);
  }
  _link(n) {
    this._pp.string(`<a href="${n.url}">${n.text || n.url}</a>`);
  }
  _ref(n) {
    this._pp.string('');
  }
  _footnoteRef(n) {
    this._pp.string(`<sup><a href="#cite-${n.id}">[${n.id}]</a></sup>`);
  }
  _footnoteText(n) {
    this._pp.indent().string(`<div class="footnote-item">[<a name="cite-${n.id}">${n.id}</a>] `);
    n.text.forEach((v, i) => this._renderLogicLine(v, i === 0));
    this._pp.removeIndent().indent().string(`</div>`).line();
  }
  _footnoteBlock(n) {
    this._pp.indent().string('<div class="footnote">').line().addIndent();
    n.content.forEach(v => {
      this._footnoteText(v);
    });
    this._pp.removeIndent().string('</div>').line();
  }
  _image(n) {
    this._pp.string(`<img src="${n.url}" alt="${n.alt}" />`);
  }
  _list(n) {
    let tagName = n.ordered ? 'ol' : 'ul';
    this._pp.line().indent().string(`<${tagName}>`).line().addIndent();
    n.items.forEach(v => {
      this._pp.indent().string(`<li>`);
      v.text.forEach(j => j.forEach(k => this._render(k)));
      this._pp.string(`</li>`).line();
    });
    this._pp.removeIndent().indent().string(`</${tagName}>`).line();
  }
  preamble() {
    this._pp.string('<html>').line().addIndent().indent().string('<head>').line().addIndent();
    if (this._additionalHead) {
      this._additionalHead.forEach(v => {
        this._pp.indent().string(v).line();
      });
    }
    if (this._externalStylesheet) {
      this._externalStylesheet.forEach(v => {
        this._pp.indent().string(`<link rel="stylesheet" href="${encodeURIComponent(v)}">`).line();
      });
    }
    this._pp.removeIndent().indent().string('</head>').line().indent().string('<body>').line().addIndent();
  }
  postamble() {
    this._pp.line().removeIndent().indent().string('</body>').line().removeIndent().string('</html>').line().line();
  }
}

},{"./AST":"crPBv","./PrettyPrinter":"5av2g","@parcel/transformer-js/lib/esmodule-helpers.js":"1IYd1"}],"5av2g":[function(require,module,exports) {
var _parcelHelpers = require("@parcel/transformer-js/lib/esmodule-helpers.js");
_parcelHelpers.defineInteropFlag(exports);
_parcelHelpers.export(exports, "PrettyPrinter", function () {
  return PrettyPrinter;
});
class PrettyPrinter {
  _res = [];
  _indent = '';
  addIndent() {
    this._indent = this._indent + '    ';
    return this;
  }
  removeIndent() {
    this._indent = this._indent.substring(0, this._indent.length - 4);
    return this;
  }
  indent() {
    this._res.push(this._indent);
    return this;
  }
  line() {
    this._res.push('\n');
    return this;
  }
  string(x) {
    this._res.push(x);
    return this;
  }
  get result() {
    return this._res.join('');
  }
  clear() {
    this._res = [];
    this._indent = '';
  }
}

},{"@parcel/transformer-js/lib/esmodule-helpers.js":"1IYd1"}]},["28hdS","6RYkV"], "6RYkV", "parcelRequire427e")

//# sourceMappingURL=index.e7656e88.js.map
