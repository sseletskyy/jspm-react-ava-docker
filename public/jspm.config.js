System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system",
      "es7.decorators"
    ],
    "blacklist": []
  },
  paths: {
    "*": "src/*",
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  packages: {
    "src": {
      "defaultExtension": "js",
      "meta": {
        "*.css": {
          "loader": "css"
        }
      }
    }
  },

  map: {
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "capaj/systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.6.0",
    "core-js": "npm:core-js@1.2.7",
    "css": "github:systemjs/plugin-css@0.1.35",
    "enzyme": "npm:enzyme@2.8.2",
    "es6-promise": "npm:es6-promise@4.1.0",
    "history": "npm:history@4.6.1",
    "indent.js": "npm:indent.js@0.1.5",
    "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
    "jspm-loader-css": "npm:jspm-loader-css@1.1.0",
    "lodash": "npm:lodash@4.17.4",
    "muicss": "npm:muicss@0.9.16",
    "nock": "npm:nock@9.0.13",
    "prop-types": "npm:prop-types@15.5.10",
    "rc-slider": "npm:rc-slider@8.1.2",
    "react": "npm:react@15.5.4",
    "react-dom": "npm:react-dom@15.5.4",
    "react-redux": "npm:react-redux@5.0.5",
    "react-router": "npm:react-router@4.1.1",
    "react-router-dom": "npm:react-router-dom@4.1.1",
    "react-router-redux": "npm:react-router-redux@5.0.0-alpha.6",
    "recompose": "npm:recompose@0.23.5",
    "redux": "npm:redux@3.6.0",
    "redux-form": "npm:redux-form@6.7.0",
    "redux-immutable-state-invariant": "npm:redux-immutable-state-invariant@2.0.0",
    "redux-mock-store": "npm:redux-mock-store@1.2.3",
    "redux-promise": "npm:redux-promise@0.5.3",
    "redux-thunk": "npm:redux-thunk@2.2.0",
    "sinon": "npm:sinon@2.3.5",
    "systemjs-hot-reloader": "npm:systemjs-hot-reloader@1.1.0",
    "github:capaj/systemjs-hot-reloader@0.6.0": {
      "debug": "npm:debug@2.6.8",
      "socket.io-client": "github:socketio/socket.io-client@1.4.8",
      "weakee": "npm:weakee@1.0.0"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.6"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.11.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-os@0.1.0": {
      "os-browserify": "npm:os-browserify@0.1.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.2"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:add-dom-event-listener@1.0.2": {
      "object-assign": "npm:object-assign@4.1.1"
    },
    "npm:asap@2.0.5": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@4.9.1": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-runtime@6.23.0": {
      "core-js": "npm:core-js@2.4.1",
      "regenerator-runtime": "npm:regenerator-runtime@0.10.5"
    },
    "npm:bn.js@4.11.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:browserify-aes@1.0.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.3",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@4.0.1": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.5"
    },
    "npm:browserify-sign@4.0.4": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "create-hmac": "npm:create-hmac@1.1.6",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.0",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@5.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "pako": "npm:pako@0.2.9",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@2.3.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:buffer@5.0.6": {
      "base64-js": "npm:base64-js@1.2.1",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:chai@3.5.0": {
      "assertion-error": "npm:assertion-error@1.0.2",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "deep-eql": "npm:deep-eql@0.1.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2",
      "type-detect": "npm:type-detect@1.0.0"
    },
    "npm:chalk@1.1.3": {
      "ansi-styles": "npm:ansi-styles@2.2.1",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:cheerio@0.22.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "css-select": "npm:css-select@1.2.0",
      "dom-serializer": "npm:dom-serializer@0.1.0",
      "entities": "npm:entities@1.1.1",
      "htmlparser2": "npm:htmlparser2@3.9.2",
      "lodash.assignin": "npm:lodash.assignin@4.2.0",
      "lodash.bind": "npm:lodash.bind@4.2.1",
      "lodash.defaults": "npm:lodash.defaults@4.2.0",
      "lodash.filter": "npm:lodash.filter@4.6.0",
      "lodash.flatten": "npm:lodash.flatten@4.4.0",
      "lodash.foreach": "npm:lodash.foreach@4.5.0",
      "lodash.map": "npm:lodash.map@4.6.0",
      "lodash.merge": "npm:lodash.merge@4.6.0",
      "lodash.pick": "npm:lodash.pick@4.4.0",
      "lodash.reduce": "npm:lodash.reduce@4.6.0",
      "lodash.reject": "npm:lodash.reject@4.6.0",
      "lodash.some": "npm:lodash.some@4.6.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:cipher-base@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:component-classes@1.2.6": {
      "component-indexof": "npm:component-indexof@0.0.3"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@2.4.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:create-ecdh@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@6.4.0"
    },
    "npm:create-hash@1.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@2.0.1",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:create-hmac@1.1.6": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "cipher-base": "npm:cipher-base@1.0.3",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@2.0.1",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:create-react-class@15.5.3": {
      "fbjs": "npm:fbjs@0.8.12",
      "loose-envify": "npm:loose-envify@1.3.1",
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:crypto-browserify@3.11.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@4.0.4",
      "create-ecdh": "npm:create-ecdh@4.0.0",
      "create-hash": "npm:create-hash@1.1.3",
      "create-hmac": "npm:create-hmac@1.1.6",
      "diffie-hellman": "npm:diffie-hellman@5.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.12",
      "public-encrypt": "npm:public-encrypt@4.0.0",
      "randombytes": "npm:randombytes@2.0.5"
    },
    "npm:css-animation@1.3.2": {
      "component-classes": "npm:component-classes@1.2.6"
    },
    "npm:css-modules-loader-core@1.1.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "icss-replace-symbols": "npm:icss-replace-symbols@1.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "postcss": "npm:postcss@6.0.1",
      "postcss-modules-extract-imports": "npm:postcss-modules-extract-imports@1.1.0",
      "postcss-modules-local-by-default": "npm:postcss-modules-local-by-default@1.2.0",
      "postcss-modules-scope": "npm:postcss-modules-scope@1.1.0",
      "postcss-modules-values": "npm:postcss-modules-values@1.3.0"
    },
    "npm:css-select@1.2.0": {
      "boolbase": "npm:boolbase@1.0.0",
      "css-what": "npm:css-what@2.1.0",
      "domutils": "npm:domutils@1.5.1",
      "nth-check": "npm:nth-check@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:css-selector-tokenizer@0.7.0": {
      "cssesc": "npm:cssesc@0.1.0",
      "fastparse": "npm:fastparse@1.1.1",
      "regexpu-core": "npm:regexpu-core@1.0.0"
    },
    "npm:debounce@1.0.2": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:debug@2.6.8": {
      "ms": "npm:ms@2.0.0"
    },
    "npm:deep-eql@0.1.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "type-detect": "npm:type-detect@0.1.1"
    },
    "npm:define-properties@1.1.2": {
      "foreach": "npm:foreach@2.0.5",
      "object-keys": "npm:object-keys@1.0.11"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diff@3.2.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:diffie-hellman@5.0.2": {
      "bn.js": "npm:bn.js@4.11.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@4.0.0",
      "randombytes": "npm:randombytes@2.0.5",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:dom-serializer@0.1.0": {
      "domelementtype": "npm:domelementtype@1.1.3",
      "entities": "npm:entities@1.1.1"
    },
    "npm:domain-browser@1.1.7": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:domhandler@2.4.1": {
      "domelementtype": "npm:domelementtype@1.3.0"
    },
    "npm:domutils@1.5.1": {
      "dom-serializer": "npm:dom-serializer@0.1.0",
      "domelementtype": "npm:domelementtype@1.3.0"
    },
    "npm:elliptic@6.4.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.1.0",
      "hash.js": "npm:hash.js@1.1.1",
      "hmac-drbg": "npm:hmac-drbg@1.0.1",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:encoding@0.1.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "iconv-lite": "npm:iconv-lite@0.4.18"
    },
    "npm:entities@1.1.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:enzyme@2.8.2": {
      "cheerio": "npm:cheerio@0.22.0",
      "function.prototype.name": "npm:function.prototype.name@1.0.0",
      "is-subset": "npm:is-subset@0.1.1",
      "lodash": "npm:lodash@4.17.4",
      "object-is": "npm:object-is@1.0.1",
      "object.assign": "npm:object.assign@4.0.4",
      "object.entries": "npm:object.entries@1.0.4",
      "object.values": "npm:object.values@1.0.4",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "prop-types": "npm:prop-types@15.5.10",
      "react": "npm:react@15.5.4",
      "uuid": "npm:uuid@2.0.3"
    },
    "npm:es-abstract@1.7.0": {
      "es-to-primitive": "npm:es-to-primitive@1.1.1",
      "function-bind": "npm:function-bind@1.1.0",
      "is-callable": "npm:is-callable@1.1.3",
      "is-regex": "npm:is-regex@1.0.4"
    },
    "npm:es-to-primitive@1.1.1": {
      "is-callable": "npm:is-callable@1.1.3",
      "is-date-object": "npm:is-date-object@1.0.1",
      "is-symbol": "npm:is-symbol@1.0.1"
    },
    "npm:es6-error@4.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:es6-promise@4.1.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:fastparse@1.1.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:fbjs@0.8.12": {
      "core-js": "npm:core-js@1.2.7",
      "isomorphic-fetch": "npm:isomorphic-fetch@2.2.1",
      "loose-envify": "npm:loose-envify@1.3.1",
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.3.1",
      "setimmediate": "npm:setimmediate@1.0.5",
      "ua-parser-js": "npm:ua-parser-js@0.7.12"
    },
    "npm:flux-standard-action@0.6.1": {
      "lodash.isplainobject": "npm:lodash.isplainobject@3.2.0"
    },
    "npm:formatio@1.2.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "samsam": "npm:samsam@1.2.1"
    },
    "npm:function.prototype.name@1.0.0": {
      "define-properties": "npm:define-properties@1.1.2",
      "function-bind": "npm:function-bind@1.1.0",
      "is-callable": "npm:is-callable@1.1.3"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.1.1"
    },
    "npm:has-flag@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:has@1.0.1": {
      "function-bind": "npm:function-bind@1.1.0"
    },
    "npm:hash-base@2.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:hash.js@1.1.1": {
      "inherits": "npm:inherits@2.0.3",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:history@4.6.1": {
      "invariant": "npm:invariant@2.2.2",
      "loose-envify": "npm:loose-envify@1.3.1",
      "resolve-pathname": "npm:resolve-pathname@2.1.0",
      "value-equal": "npm:value-equal@0.2.1",
      "warning": "npm:warning@3.0.0"
    },
    "npm:hmac-drbg@1.0.1": {
      "hash.js": "npm:hash.js@1.1.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "minimalistic-crypto-utils": "npm:minimalistic-crypto-utils@1.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:htmlparser2@3.9.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "domelementtype": "npm:domelementtype@1.3.0",
      "domhandler": "npm:domhandler@2.4.1",
      "domutils": "npm:domutils@1.5.1",
      "entities": "npm:entities@1.1.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:iconv-lite@0.4.18": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:indent.js@0.1.5": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:inherits@2.0.3": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.2": {
      "loose-envify": "npm:loose-envify@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-regex@1.0.4": {
      "has": "npm:has@1.0.1"
    },
    "npm:isarray@1.0.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:isomorphic-fetch@2.2.1": {
      "node-fetch": "npm:node-fetch@1.7.1",
      "whatwg-fetch": "npm:whatwg-fetch@2.0.3"
    },
    "npm:jspm-loader-css@1.1.0": {
      "css-modules-loader-core": "npm:css-modules-loader-core@1.1.0",
      "debounce": "npm:debounce@1.0.2",
      "path": "npm:path@0.12.7",
      "toposort": "npm:toposort@0.2.12"
    },
    "npm:lodash.bind@4.2.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.filter@4.6.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.isplainobject@3.2.0": {
      "lodash._basefor": "npm:lodash._basefor@3.0.3",
      "lodash.isarguments": "npm:lodash.isarguments@3.1.0",
      "lodash.keysin": "npm:lodash.keysin@3.0.8"
    },
    "npm:lodash.keys@3.1.2": {
      "lodash._getnative": "npm:lodash._getnative@3.9.1",
      "lodash.isarguments": "npm:lodash.isarguments@3.1.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash.keysin@3.0.8": {
      "lodash.isarguments": "npm:lodash.isarguments@3.1.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash.map@4.6.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.merge@4.6.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.reduce@4.6.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.reject@4.6.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.some@4.6.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.3.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@3.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "brorand": "npm:brorand@1.1.0"
    },
    "npm:mkdirp@0.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "minimist": "npm:minimist@0.0.8",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:muicss@0.9.16": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.5.4"
    },
    "npm:native-promise-only@0.8.1": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:nock@9.0.13": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "chai": "npm:chai@3.5.0",
      "debug": "npm:debug@2.6.8",
      "deep-equal": "npm:deep-equal@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
      "lodash": "npm:lodash@4.17.4",
      "mkdirp": "npm:mkdirp@0.5.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "propagate": "npm:propagate@0.4.0",
      "qs": "npm:qs@6.4.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:node-fetch@1.7.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "encoding": "npm:encoding@0.1.12",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "is-stream": "npm:is-stream@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:nth-check@1.0.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "boolbase": "npm:boolbase@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:object.assign@4.0.4": {
      "define-properties": "npm:define-properties@1.1.2",
      "function-bind": "npm:function-bind@1.1.0",
      "object-keys": "npm:object-keys@1.0.11"
    },
    "npm:object.entries@1.0.4": {
      "define-properties": "npm:define-properties@1.1.2",
      "es-abstract": "npm:es-abstract@1.7.0",
      "function-bind": "npm:function-bind@1.1.0",
      "has": "npm:has@1.0.1"
    },
    "npm:object.values@1.0.4": {
      "define-properties": "npm:define-properties@1.1.2",
      "es-abstract": "npm:es-abstract@1.7.0",
      "function-bind": "npm:function-bind@1.1.0",
      "has": "npm:has@1.0.1"
    },
    "npm:os-browserify@0.1.2": {
      "os": "github:jspm/nodelibs-os@0.1.0"
    },
    "npm:pako@0.2.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@5.1.0": {
      "asn1.js": "npm:asn1.js@4.9.1",
      "browserify-aes": "npm:browserify-aes@1.0.6",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.12",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-to-regexp@1.7.0": {
      "isarray": "npm:isarray@0.0.1"
    },
    "npm:path@0.12.7": {
      "process": "npm:process@0.11.10",
      "util": "npm:util@0.10.3"
    },
    "npm:pbkdf2@3.0.12": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "create-hmac": "npm:create-hmac@1.1.6",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "ripemd160": "npm:ripemd160@2.0.1",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "sha.js": "npm:sha.js@2.4.8"
    },
    "npm:postcss-modules-extract-imports@1.1.0": {
      "postcss": "npm:postcss@6.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:postcss-modules-local-by-default@1.2.0": {
      "css-selector-tokenizer": "npm:css-selector-tokenizer@0.7.0",
      "postcss": "npm:postcss@6.0.1"
    },
    "npm:postcss-modules-scope@1.1.0": {
      "css-selector-tokenizer": "npm:css-selector-tokenizer@0.7.0",
      "postcss": "npm:postcss@6.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:postcss-modules-values@1.3.0": {
      "icss-replace-symbols": "npm:icss-replace-symbols@1.1.0",
      "postcss": "npm:postcss@6.0.1"
    },
    "npm:postcss@6.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "chalk": "npm:chalk@1.1.3",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.5.6",
      "supports-color": "npm:supports-color@3.2.3"
    },
    "npm:process-nextick-args@1.0.7": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:promise@7.3.1": {
      "asap": "npm:asap@2.0.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:prop-types@15.5.10": {
      "fbjs": "npm:fbjs@0.8.12",
      "loose-envify": "npm:loose-envify@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:public-encrypt@4.0.0": {
      "bn.js": "npm:bn.js@4.11.6",
      "browserify-rsa": "npm:browserify-rsa@4.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "create-hash": "npm:create-hash@1.1.3",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@5.1.0",
      "randombytes": "npm:randombytes@2.0.5"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "safe-buffer": "npm:safe-buffer@5.1.1"
    },
    "npm:rc-align@2.3.4": {
      "dom-align": "npm:dom-align@1.6.0",
      "prop-types": "npm:prop-types@15.5.10",
      "rc-util": "npm:rc-util@4.0.4"
    },
    "npm:rc-animate@2.3.6": {
      "css-animation": "npm:css-animation@1.3.2",
      "prop-types": "npm:prop-types@15.5.10"
    },
    "npm:rc-slider@8.1.2": {
      "babel-runtime": "npm:babel-runtime@6.23.0",
      "classnames": "npm:classnames@2.2.5",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "prop-types": "npm:prop-types@15.5.10",
      "rc-tooltip": "npm:rc-tooltip@3.4.6",
      "rc-util": "npm:rc-util@4.0.4",
      "warning": "npm:warning@3.0.0"
    },
    "npm:rc-tooltip@3.4.6": {
      "babel-runtime": "npm:babel-runtime@6.23.0",
      "prop-types": "npm:prop-types@15.5.10",
      "rc-trigger": "npm:rc-trigger@1.11.1"
    },
    "npm:rc-trigger@1.11.1": {
      "babel-runtime": "npm:babel-runtime@6.23.0",
      "create-react-class": "npm:create-react-class@15.5.3",
      "prop-types": "npm:prop-types@15.5.10",
      "rc-align": "npm:rc-align@2.3.4",
      "rc-animate": "npm:rc-animate@2.3.6",
      "rc-util": "npm:rc-util@4.0.4"
    },
    "npm:rc-util@4.0.4": {
      "add-dom-event-listener": "npm:add-dom-event-listener@1.0.2",
      "babel-runtime": "npm:babel-runtime@6.23.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "shallowequal": "npm:shallowequal@0.2.2"
    },
    "npm:react-dom@15.5.4": {
      "fbjs": "npm:fbjs@0.8.12",
      "loose-envify": "npm:loose-envify@1.3.1",
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "prop-types": "npm:prop-types@15.5.10",
      "react": "npm:react@15.5.4"
    },
    "npm:react-redux@5.0.5": {
      "create-react-class": "npm:create-react-class@15.5.3",
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
      "invariant": "npm:invariant@2.2.2",
      "lodash": "npm:lodash@4.17.4",
      "lodash-es": "npm:lodash-es@4.17.4",
      "loose-envify": "npm:loose-envify@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "prop-types": "npm:prop-types@15.5.10",
      "react": "npm:react@15.5.4"
    },
    "npm:react-router-dom@4.1.1": {
      "history": "npm:history@4.6.1",
      "loose-envify": "npm:loose-envify@1.3.1",
      "prop-types": "npm:prop-types@15.5.10",
      "react": "npm:react@15.5.4",
      "react-router": "npm:react-router@4.1.1"
    },
    "npm:react-router-redux@5.0.0-alpha.6": {
      "history": "npm:history@4.6.1",
      "prop-types": "npm:prop-types@15.5.10",
      "react": "npm:react@15.5.4",
      "react-router": "npm:react-router@4.1.1"
    },
    "npm:react-router@4.1.1": {
      "history": "npm:history@4.6.1",
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
      "invariant": "npm:invariant@2.2.2",
      "loose-envify": "npm:loose-envify@1.3.1",
      "path-to-regexp": "npm:path-to-regexp@1.7.0",
      "prop-types": "npm:prop-types@15.5.10",
      "react": "npm:react@15.5.4",
      "warning": "npm:warning@3.0.0"
    },
    "npm:react@15.5.4": {
      "fbjs": "npm:fbjs@0.8.12",
      "loose-envify": "npm:loose-envify@1.3.1",
      "object-assign": "npm:object-assign@4.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "prop-types": "npm:prop-types@15.5.10"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:readable-stream@2.3.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "isarray": "npm:isarray@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.7",
      "safe-buffer": "npm:safe-buffer@5.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "npm:string_decoder@1.0.3",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:recompose@0.23.5": {
      "change-emitter": "npm:change-emitter@0.1.6",
      "fbjs": "npm:fbjs@0.8.12",
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "react": "npm:react@15.5.4",
      "symbol-observable": "npm:symbol-observable@1.0.4"
    },
    "npm:redux-form@6.7.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "deep-equal": "npm:deep-equal@1.0.1",
      "es6-error": "npm:es6-error@4.0.2",
      "hoist-non-react-statics": "npm:hoist-non-react-statics@1.2.0",
      "invariant": "npm:invariant@2.2.2",
      "is-promise": "npm:is-promise@2.1.0",
      "lodash": "npm:lodash@4.17.4",
      "lodash-es": "npm:lodash-es@4.17.4",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "prop-types": "npm:prop-types@15.5.10",
      "react": "npm:react@15.5.4",
      "react-redux": "npm:react-redux@5.0.5",
      "redux": "npm:redux@3.6.0"
    },
    "npm:redux-immutable-state-invariant@2.0.0": {
      "invariant": "npm:invariant@2.2.2",
      "json-stringify-safe": "npm:json-stringify-safe@5.0.1"
    },
    "npm:redux-promise@0.5.3": {
      "flux-standard-action": "npm:flux-standard-action@0.6.1"
    },
    "npm:redux@3.6.0": {
      "lodash": "npm:lodash@4.17.4",
      "lodash-es": "npm:lodash-es@4.17.4",
      "loose-envify": "npm:loose-envify@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "symbol-observable": "npm:symbol-observable@1.0.4"
    },
    "npm:regenerator-runtime@0.10.5": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:regexpu-core@1.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regenerate": "npm:regenerate@1.3.2",
      "regjsgen": "npm:regjsgen@0.2.0",
      "regjsparser": "npm:regjsparser@0.1.5",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:regjsparser@0.1.5": {
      "jsesc": "npm:jsesc@0.5.0"
    },
    "npm:ripemd160@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "hash-base": "npm:hash-base@2.0.2",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:safe-buffer@5.1.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:setimmediate@1.0.5": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:shallowequal@0.2.2": {
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:sinon@2.3.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "diff": "npm:diff@3.2.0",
      "formatio": "npm:formatio@1.2.0",
      "lolex": "npm:lolex@1.6.0",
      "native-promise-only": "npm:native-promise-only@0.8.1",
      "path-to-regexp": "npm:path-to-regexp@1.7.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "samsam": "npm:samsam@1.2.1",
      "text-encoding": "npm:text-encoding@0.6.4",
      "type-detect": "npm:type-detect@4.0.3"
    },
    "npm:source-map@0.5.6": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.3",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:string_decoder@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "safe-buffer": "npm:safe-buffer@5.1.1"
    },
    "npm:strip-ansi@3.0.1": {
      "ansi-regex": "npm:ansi-regex@2.1.1"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:supports-color@3.2.3": {
      "has-flag": "npm:has-flag@1.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:systemjs-hot-reloader@1.1.0": {
      "systemjs-hmr": "npm:systemjs-hmr@2.0.9"
    },
    "npm:text-encoding@0.6.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:timers-browserify@1.4.2": {
      "process": "npm:process@0.11.10"
    },
    "npm:toposort@0.2.12": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ua-parser-js@0.7.12": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:uuid@2.0.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "os": "github:jspm/nodelibs-os@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:warning@3.0.0": {
      "loose-envify": "npm:loose-envify@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
