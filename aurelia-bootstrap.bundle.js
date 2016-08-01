/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = window["webpackJsonp"];
/******/ 	window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId])
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length)
/******/ 			resolves.shift()();
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};

/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		        if (installedModules[moduleId]) return installedModules[moduleId].exports;

/******/ 		        var module = installedModules[moduleId] = {
/******/ 		          i: moduleId,
/******/ 		          l: false,
/******/ 		          exports: {}
/******/ 		        };

/******/ 		        if (!modules[moduleId] && typeof moduleId === 'string') {
/******/ 		          var newModuleId;
/******/ 		          if (modules[newModuleId = moduleId + '.js'] || modules[newModuleId = moduleId + '.ts']) {
/******/ 		            moduleId = newModuleId;

/******/ 		            installedModules[moduleId] = module;
/******/ 		          }
/******/ 		        }

/******/ 		        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		        module.l = true;

/******/ 		        return module.exports;
/******/ 	}

/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		if(installedChunks[chunkId] === 0)
/******/ 			return Promise.resolve();

/******/ 		// an Promise means "currently loading".
/******/ 		if(installedChunks[chunkId]) {
/******/ 			return installedChunks[chunkId][2];
/******/ 		}
/******/ 		// start chunk loading
/******/ 		var head = document.getElementsByTagName('head')[0];
/******/ 		var script = document.createElement('script');
/******/ 		script.type = 'text/javascript';
/******/ 		script.charset = 'utf-8';
/******/ 		script.async = true;
/******/ 		script.timeout = 120000;

/******/ 		script.src = __webpack_require__.p + "" + chunkId + ".chunk.js";
/******/ 		var timeout = setTimeout(onScriptComplete, 120000);
/******/ 		script.onerror = script.onload = onScriptComplete;
/******/ 		function onScriptComplete() {
/******/ 			// avoid mem leaks in IE.
/******/ 			script.onerror = script.onload = null;
/******/ 			clearTimeout(timeout);
/******/ 			var chunk = installedChunks[chunkId];
/******/ 			if(chunk !== 0) {
/******/ 				if(chunk) chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
/******/ 				installedChunks[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		head.appendChild(script);

/******/ 		var promise = new Promise(function(resolve, reject) {
/******/ 			installedChunks[chunkId] = [resolve, reject];
/******/ 		});
/******/ 		return installedChunks[chunkId][2] = promise;
/******/ 	};

/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 79);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AggregateError = AggregateError;
exports.initializePAL = initializePAL;
function AggregateError(message, innerError, skipIfAlreadyAggregate) {
  if (innerError) {
    if (innerError.innerError && skipIfAlreadyAggregate) {
      return innerError;
    }

    var separator = '\n------------------------------------------------\n';

    message += separator + 'Inner Error:\n';

    if (typeof innerError === 'string') {
      message += 'Message: ' + innerError;
    } else {
      if (innerError.message) {
        message += 'Message: ' + innerError.message;
      } else {
        message += 'Unknown Inner Error Type. Displaying Inner Error as JSON:\n ' + JSON.stringify(innerError, null, '  ');
      }

      if (innerError.stack) {
        message += '\nInner Error Stack:\n' + innerError.stack;
        message += '\nEnd Inner Error Stack';
      }
    }

    message += separator;
  }

  var e = new Error(message);
  if (innerError) {
    e.innerError = innerError;
  }

  return e;
}

var FEATURE = exports.FEATURE = {};

var PLATFORM = exports.PLATFORM = {
  noop: function noop() {},
  eachModule: function eachModule() {}
};

PLATFORM.global = function () {
  if (typeof self !== 'undefined') {
    return self;
  }

  if (typeof global !== 'undefined') {
    return global;
  }

  return new Function('return this')();
}();

var DOM = exports.DOM = {};

function initializePAL(callback) {
  if (typeof Object.getPropertyDescriptor !== 'function') {
    Object.getPropertyDescriptor = function (subject, name) {
      var pd = Object.getOwnPropertyDescriptor(subject, name);
      var proto = Object.getPrototypeOf(subject);
      while (typeof pd === 'undefined' && proto !== null) {
        pd = Object.getOwnPropertyDescriptor(proto, name);
        proto = Object.getPrototypeOf(proto);
      }
      return pd;
    };
  }

  callback(PLATFORM, FEATURE, DOM);
}
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },

/***/ 10:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Loader = exports.TemplateRegistryEntry = exports.TemplateDependency = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _aureliaPath = __webpack_require__(6);

var _aureliaMetadata = __webpack_require__(4);



var TemplateDependency = exports.TemplateDependency = function TemplateDependency(src, name) {
  

  this.src = src;
  this.name = name;
};

var TemplateRegistryEntry = exports.TemplateRegistryEntry = function () {
  function TemplateRegistryEntry(address) {
    

    this.templateIsLoaded = false;
    this.factoryIsReady = false;
    this.resources = null;
    this.dependencies = null;

    this.address = address;
    this.onReady = null;
    this._template = null;
    this._factory = null;
  }

  TemplateRegistryEntry.prototype.addDependency = function addDependency(src, name) {
    var finalSrc = typeof src === 'string' ? (0, _aureliaPath.relativeToFile)(src, this.address) : _aureliaMetadata.Origin.get(src).moduleId;

    this.dependencies.push(new TemplateDependency(finalSrc, name));
  };

  _createClass(TemplateRegistryEntry, [{
    key: 'template',
    get: function get() {
      return this._template;
    },
    set: function set(value) {
      var address = this.address;
      var requires = void 0;
      var current = void 0;
      var src = void 0;
      var dependencies = void 0;

      this._template = value;
      this.templateIsLoaded = true;

      requires = value.content.querySelectorAll('require');
      dependencies = this.dependencies = new Array(requires.length);

      for (var i = 0, ii = requires.length; i < ii; ++i) {
        current = requires[i];
        src = current.getAttribute('from');

        if (!src) {
          throw new Error('<require> element in ' + address + ' has no "from" attribute.');
        }

        dependencies[i] = new TemplateDependency((0, _aureliaPath.relativeToFile)(src, address), current.getAttribute('as'));

        if (current.parentNode) {
          current.parentNode.removeChild(current);
        }
      }
    }
  }, {
    key: 'factory',
    get: function get() {
      return this._factory;
    },
    set: function set(value) {
      this._factory = value;
      this.factoryIsReady = true;
    }
  }]);

  return TemplateRegistryEntry;
}();

var Loader = exports.Loader = function () {
  function Loader() {
    

    this.templateRegistry = {};
  }

  Loader.prototype.map = function map(id, source) {
    throw new Error('Loaders must implement map(id, source).');
  };

  Loader.prototype.normalizeSync = function normalizeSync(moduleId, relativeTo) {
    throw new Error('Loaders must implement normalizeSync(moduleId, relativeTo).');
  };

  Loader.prototype.normalize = function normalize(moduleId, relativeTo) {
    throw new Error('Loaders must implement normalize(moduleId: string, relativeTo: string): Promise<string>.');
  };

  Loader.prototype.loadModule = function loadModule(id) {
    throw new Error('Loaders must implement loadModule(id).');
  };

  Loader.prototype.loadAllModules = function loadAllModules(ids) {
    throw new Error('Loader must implement loadAllModules(ids).');
  };

  Loader.prototype.loadTemplate = function loadTemplate(url) {
    throw new Error('Loader must implement loadTemplate(url).');
  };

  Loader.prototype.loadText = function loadText(url) {
    throw new Error('Loader must implement loadText(url).');
  };

  Loader.prototype.applyPluginToUrl = function applyPluginToUrl(url, pluginName) {
    throw new Error('Loader must implement applyPluginToUrl(url, pluginName).');
  };

  Loader.prototype.addPlugin = function addPlugin(pluginName, implementation) {
    throw new Error('Loader must implement addPlugin(pluginName, implementation).');
  };

  Loader.prototype.getOrCreateTemplateRegistryEntry = function getOrCreateTemplateRegistryEntry(address) {
    return this.templateRegistry[address] || (this.templateRegistry[address] = new TemplateRegistryEntry(address));
  };

  return Loader;
}();

/***/ },

/***/ 11:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(31).nextTick;
var apply = Function.prototype.apply;
var slice = Array.prototype.slice;
var immediateIds = {};
var nextImmediateId = 0;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) { timeout.close(); };

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// That's not how node.js implements it but the exposed api is the same.
exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
  var id = nextImmediateId++;
  var args = arguments.length < 2 ? false : slice.call(arguments, 1);

  immediateIds[id] = true;

  nextTick(function onNextTick() {
    if (immediateIds[id]) {
      // fn.call() is faster so we optimize for the common use-case
      // @see http://jsperf.com/call-apply-segu
      if (args) {
        fn.apply(null, args);
      } else {
        fn.call(null);
      }
      // Prevent ids from leaking
      exports.clearImmediate(id);
    }
  });

  return id;
};

exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
  delete immediateIds[id];
};
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(11).setImmediate, __webpack_require__(11).clearImmediate))

/***/ },

/***/ 13:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(74);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ },

/***/ 31:
/***/ function(module, exports) {

// shim for using process in browser

var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

(function () {
  try {
    cachedSetTimeout = setTimeout;
  } catch (e) {
    cachedSetTimeout = function () {
      throw new Error('setTimeout is not defined');
    }
  }
  try {
    cachedClearTimeout = clearTimeout;
  } catch (e) {
    cachedClearTimeout = function () {
      throw new Error('clearTimeout is not defined');
    }
  }
} ())
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = cachedSetTimeout.call(null, cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    cachedClearTimeout.call(null, timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        cachedSetTimeout.call(null, drainQueue, 0);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ },

/***/ 4:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Origin = exports.metadata = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.decorators = decorators;
exports.deprecated = deprecated;
exports.mixin = mixin;
exports.protocol = protocol;

var _aureliaPal = __webpack_require__(0);



var metadata = exports.metadata = {
  resource: 'aurelia:resource',
  paramTypes: 'design:paramtypes',
  propertyType: 'design:type',
  properties: 'design:properties',
  get: function get(metadataKey, target, targetKey) {
    if (!target) {
      return undefined;
    }
    var result = metadata.getOwn(metadataKey, target, targetKey);
    return result === undefined ? metadata.get(metadataKey, Object.getPrototypeOf(target), targetKey) : result;
  },
  getOwn: function getOwn(metadataKey, target, targetKey) {
    if (!target) {
      return undefined;
    }
    return Reflect.getOwnMetadata(metadataKey, target, targetKey);
  },
  define: function define(metadataKey, metadataValue, target, targetKey) {
    Reflect.defineMetadata(metadataKey, metadataValue, target, targetKey);
  },
  getOrCreateOwn: function getOrCreateOwn(metadataKey, Type, target, targetKey) {
    var result = metadata.getOwn(metadataKey, target, targetKey);

    if (result === undefined) {
      result = new Type();
      Reflect.defineMetadata(metadataKey, result, target, targetKey);
    }

    return result;
  }
};

var originStorage = new Map();
var unknownOrigin = Object.freeze({ moduleId: undefined, moduleMember: undefined });

var Origin = exports.Origin = function () {
  function Origin(moduleId, moduleMember) {
    

    this.moduleId = moduleId;
    this.moduleMember = moduleMember;
  }

  Origin.get = function get(fn) {
    var origin = originStorage.get(fn);

    if (origin === undefined) {
      _aureliaPal.PLATFORM.eachModule(function (key, value) {
        for (var name in value) {
          var exp = value[name];
          if (exp === fn) {
            originStorage.set(fn, origin = new Origin(key, name));
            return true;
          }
        }

        if (value === fn) {
          originStorage.set(fn, origin = new Origin(key, 'default'));
          return true;
        }

        return false;
      });
    }

    return origin || unknownOrigin;
  };

  Origin.set = function set(fn, origin) {
    originStorage.set(fn, origin);
  };

  return Origin;
}();

function decorators() {
  for (var _len = arguments.length, rest = Array(_len), _key = 0; _key < _len; _key++) {
    rest[_key] = arguments[_key];
  }

  var applicator = function applicator(target, key, descriptor) {
    var i = rest.length;

    if (key) {
      descriptor = descriptor || {
        value: target[key],
        writable: true,
        configurable: true,
        enumerable: true
      };

      while (i--) {
        descriptor = rest[i](target, key, descriptor) || descriptor;
      }

      Object.defineProperty(target, key, descriptor);
    } else {
      while (i--) {
        target = rest[i](target) || target;
      }
    }

    return target;
  };

  applicator.on = applicator;
  return applicator;
}

function deprecated(optionsOrTarget, maybeKey, maybeDescriptor) {
  function decorator(target, key, descriptor) {
    var methodSignature = target.constructor.name + '#' + key;
    var options = maybeKey ? {} : optionsOrTarget || {};
    var message = 'DEPRECATION - ' + methodSignature;

    if (typeof descriptor.value !== 'function') {
      throw new SyntaxError('Only methods can be marked as deprecated.');
    }

    if (options.message) {
      message += ' - ' + options.message;
    }

    return _extends({}, descriptor, {
      value: function deprecationWrapper() {
        if (options.error) {
          throw new Error(message);
        } else {
          console.warn(message);
        }

        return descriptor.value.apply(this, arguments);
      }
    });
  }

  return maybeKey ? decorator(optionsOrTarget, maybeKey, maybeDescriptor) : decorator;
}

function mixin(behavior) {
  var instanceKeys = Object.keys(behavior);

  function _mixin(possible) {
    var decorator = function decorator(target) {
      var resolvedTarget = typeof target === 'function' ? target.prototype : target;

      var i = instanceKeys.length;
      while (i--) {
        var property = instanceKeys[i];
        Object.defineProperty(resolvedTarget, property, {
          value: behavior[property],
          writable: true
        });
      }
    };

    return possible ? decorator(possible) : decorator;
  }

  return _mixin;
}

function alwaysValid() {
  return true;
}
function noCompose() {}

function ensureProtocolOptions(options) {
  if (options === undefined) {
    options = {};
  } else if (typeof options === 'function') {
    options = {
      validate: options
    };
  }

  if (!options.validate) {
    options.validate = alwaysValid;
  }

  if (!options.compose) {
    options.compose = noCompose;
  }

  return options;
}

function createProtocolValidator(validate) {
  return function (target) {
    var result = validate(target);
    return result === true;
  };
}

function createProtocolAsserter(name, validate) {
  return function (target) {
    var result = validate(target);
    if (result !== true) {
      throw new Error(result || name + ' was not correctly implemented.');
    }
  };
}

function protocol(name, options) {
  options = ensureProtocolOptions(options);

  var result = function result(target) {
    var resolvedTarget = typeof target === 'function' ? target.prototype : target;

    options.compose(resolvedTarget);
    result.assert(resolvedTarget);

    Object.defineProperty(resolvedTarget, 'protocol:' + name, {
      enumerable: false,
      configurable: false,
      writable: false,
      value: true
    });
  };

  result.validate = createProtocolValidator(options.validate);
  result.assert = createProtocolAsserter(name, options.validate);

  return result;
}

protocol.create = function (name, options) {
  options = ensureProtocolOptions(options);
  var hidden = 'protocol:' + name;
  var result = function result(target) {
    var decorator = protocol(name, options);
    return target ? decorator(target) : decorator;
  };

  result.decorates = function (obj) {
    return obj[hidden] === true;
  };
  result.validate = createProtocolValidator(options.validate);
  result.assert = createProtocolAsserter(name, options.validate);

  return result;
};

/***/ },

/***/ 52:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, Promise, global, setImmediate) {/* @preserve
 * The MIT License (MIT)
 * 
 * Copyright (c) 2013-2015 Petka Antonov
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 * 
 */
/**
 * bluebird build version 3.4.1
 * Features enabled: core, race, call_get, generators, map, nodeify, promisify, props, reduce, settle, some, using, timers, filter, any, each
*/
!function(e){if(true)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.Promise=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof _dereq_=="function"&&_dereq_;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof _dereq_=="function"&&_dereq_;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var SomePromiseArray = Promise._SomePromiseArray;
function any(promises) {
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    ret.setHowMany(1);
    ret.setUnwrap();
    ret.init();
    return promise;
}

Promise.any = function (promises) {
    return any(promises);
};

Promise.prototype.any = function () {
    return any(this);
};

};

},{}],2:[function(_dereq_,module,exports){
"use strict";
var firstLineError;
try {throw new Error(); } catch (e) {firstLineError = e;}
var schedule = _dereq_("./schedule");
var Queue = _dereq_("./queue");
var util = _dereq_("./util");

function Async() {
    this._customScheduler = false;
    this._isTickUsed = false;
    this._lateQueue = new Queue(16);
    this._normalQueue = new Queue(16);
    this._haveDrainedQueues = false;
    this._trampolineEnabled = true;
    var self = this;
    this.drainQueues = function () {
        self._drainQueues();
    };
    this._schedule = schedule;
}

Async.prototype.setScheduler = function(fn) {
    var prev = this._schedule;
    this._schedule = fn;
    this._customScheduler = true;
    return prev;
};

Async.prototype.hasCustomScheduler = function() {
    return this._customScheduler;
};

Async.prototype.enableTrampoline = function() {
    this._trampolineEnabled = true;
};

Async.prototype.disableTrampolineIfNecessary = function() {
    if (util.hasDevTools) {
        this._trampolineEnabled = false;
    }
};

Async.prototype.haveItemsQueued = function () {
    return this._isTickUsed || this._haveDrainedQueues;
};


Async.prototype.fatalError = function(e, isNode) {
    if (isNode) {
        process.stderr.write("Fatal " + (e instanceof Error ? e.stack : e) +
            "\n");
        process.exit(2);
    } else {
        this.throwLater(e);
    }
};

Async.prototype.throwLater = function(fn, arg) {
    if (arguments.length === 1) {
        arg = fn;
        fn = function () { throw arg; };
    }
    if (typeof setTimeout !== "undefined") {
        setTimeout(function() {
            fn(arg);
        }, 0);
    } else try {
        this._schedule(function() {
            fn(arg);
        });
    } catch (e) {
        throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
};

function AsyncInvokeLater(fn, receiver, arg) {
    this._lateQueue.push(fn, receiver, arg);
    this._queueTick();
}

function AsyncInvoke(fn, receiver, arg) {
    this._normalQueue.push(fn, receiver, arg);
    this._queueTick();
}

function AsyncSettlePromises(promise) {
    this._normalQueue._pushOne(promise);
    this._queueTick();
}

if (!util.hasDevTools) {
    Async.prototype.invokeLater = AsyncInvokeLater;
    Async.prototype.invoke = AsyncInvoke;
    Async.prototype.settlePromises = AsyncSettlePromises;
} else {
    Async.prototype.invokeLater = function (fn, receiver, arg) {
        if (this._trampolineEnabled) {
            AsyncInvokeLater.call(this, fn, receiver, arg);
        } else {
            this._schedule(function() {
                setTimeout(function() {
                    fn.call(receiver, arg);
                }, 100);
            });
        }
    };

    Async.prototype.invoke = function (fn, receiver, arg) {
        if (this._trampolineEnabled) {
            AsyncInvoke.call(this, fn, receiver, arg);
        } else {
            this._schedule(function() {
                fn.call(receiver, arg);
            });
        }
    };

    Async.prototype.settlePromises = function(promise) {
        if (this._trampolineEnabled) {
            AsyncSettlePromises.call(this, promise);
        } else {
            this._schedule(function() {
                promise._settlePromises();
            });
        }
    };
}

Async.prototype.invokeFirst = function (fn, receiver, arg) {
    this._normalQueue.unshift(fn, receiver, arg);
    this._queueTick();
};

Async.prototype._drainQueue = function(queue) {
    while (queue.length() > 0) {
        var fn = queue.shift();
        if (typeof fn !== "function") {
            fn._settlePromises();
            continue;
        }
        var receiver = queue.shift();
        var arg = queue.shift();
        fn.call(receiver, arg);
    }
};

Async.prototype._drainQueues = function () {
    this._drainQueue(this._normalQueue);
    this._reset();
    this._haveDrainedQueues = true;
    this._drainQueue(this._lateQueue);
};

Async.prototype._queueTick = function () {
    if (!this._isTickUsed) {
        this._isTickUsed = true;
        this._schedule(this.drainQueues);
    }
};

Async.prototype._reset = function () {
    this._isTickUsed = false;
};

module.exports = Async;
module.exports.firstLineError = firstLineError;

},{"./queue":26,"./schedule":29,"./util":36}],3:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, tryConvertToPromise, debug) {
var calledBind = false;
var rejectThis = function(_, e) {
    this._reject(e);
};

var targetRejected = function(e, context) {
    context.promiseRejectionQueued = true;
    context.bindingPromise._then(rejectThis, rejectThis, null, this, e);
};

var bindingResolved = function(thisArg, context) {
    if (((this._bitField & 50397184) === 0)) {
        this._resolveCallback(context.target);
    }
};

var bindingRejected = function(e, context) {
    if (!context.promiseRejectionQueued) this._reject(e);
};

Promise.prototype.bind = function (thisArg) {
    if (!calledBind) {
        calledBind = true;
        Promise.prototype._propagateFrom = debug.propagateFromFunction();
        Promise.prototype._boundValue = debug.boundValueFunction();
    }
    var maybePromise = tryConvertToPromise(thisArg);
    var ret = new Promise(INTERNAL);
    ret._propagateFrom(this, 1);
    var target = this._target();
    ret._setBoundTo(maybePromise);
    if (maybePromise instanceof Promise) {
        var context = {
            promiseRejectionQueued: false,
            promise: ret,
            target: target,
            bindingPromise: maybePromise
        };
        target._then(INTERNAL, targetRejected, undefined, ret, context);
        maybePromise._then(
            bindingResolved, bindingRejected, undefined, ret, context);
        ret._setOnCancel(maybePromise);
    } else {
        ret._resolveCallback(target);
    }
    return ret;
};

Promise.prototype._setBoundTo = function (obj) {
    if (obj !== undefined) {
        this._bitField = this._bitField | 2097152;
        this._boundTo = obj;
    } else {
        this._bitField = this._bitField & (~2097152);
    }
};

Promise.prototype._isBound = function () {
    return (this._bitField & 2097152) === 2097152;
};

Promise.bind = function (thisArg, value) {
    return Promise.resolve(value).bind(thisArg);
};
};

},{}],4:[function(_dereq_,module,exports){
"use strict";
var old;
if (typeof Promise !== "undefined") old = Promise;
function noConflict() {
    try { if (Promise === bluebird) Promise = old; }
    catch (e) {}
    return bluebird;
}
var bluebird = _dereq_("./promise")();
bluebird.noConflict = noConflict;
module.exports = bluebird;

},{"./promise":22}],5:[function(_dereq_,module,exports){
"use strict";
var cr = Object.create;
if (cr) {
    var callerCache = cr(null);
    var getterCache = cr(null);
    callerCache[" size"] = getterCache[" size"] = 0;
}

module.exports = function(Promise) {
var util = _dereq_("./util");
var canEvaluate = util.canEvaluate;
var isIdentifier = util.isIdentifier;

var getMethodCaller;
var getGetter;
if (false) {
var makeMethodCaller = function (methodName) {
    return new Function("ensureMethod", "                                    \n\
        return function(obj) {                                               \n\
            'use strict'                                                     \n\
            var len = this.length;                                           \n\
            ensureMethod(obj, 'methodName');                                 \n\
            switch(len) {                                                    \n\
                case 1: return obj.methodName(this[0]);                      \n\
                case 2: return obj.methodName(this[0], this[1]);             \n\
                case 3: return obj.methodName(this[0], this[1], this[2]);    \n\
                case 0: return obj.methodName();                             \n\
                default:                                                     \n\
                    return obj.methodName.apply(obj, this);                  \n\
            }                                                                \n\
        };                                                                   \n\
        ".replace(/methodName/g, methodName))(ensureMethod);
};

var makeGetter = function (propertyName) {
    return new Function("obj", "                                             \n\
        'use strict';                                                        \n\
        return obj.propertyName;                                             \n\
        ".replace("propertyName", propertyName));
};

var getCompiled = function(name, compiler, cache) {
    var ret = cache[name];
    if (typeof ret !== "function") {
        if (!isIdentifier(name)) {
            return null;
        }
        ret = compiler(name);
        cache[name] = ret;
        cache[" size"]++;
        if (cache[" size"] > 512) {
            var keys = Object.keys(cache);
            for (var i = 0; i < 256; ++i) delete cache[keys[i]];
            cache[" size"] = keys.length - 256;
        }
    }
    return ret;
};

getMethodCaller = function(name) {
    return getCompiled(name, makeMethodCaller, callerCache);
};

getGetter = function(name) {
    return getCompiled(name, makeGetter, getterCache);
};
}

function ensureMethod(obj, methodName) {
    var fn;
    if (obj != null) fn = obj[methodName];
    if (typeof fn !== "function") {
        var message = "Object " + util.classString(obj) + " has no method '" +
            util.toString(methodName) + "'";
        throw new Promise.TypeError(message);
    }
    return fn;
}

function caller(obj) {
    var methodName = this.pop();
    var fn = ensureMethod(obj, methodName);
    return fn.apply(obj, this);
}
Promise.prototype.call = function (methodName) {
    var args = [].slice.call(arguments, 1);;
    if (false) {
        if (canEvaluate) {
            var maybeCaller = getMethodCaller(methodName);
            if (maybeCaller !== null) {
                return this._then(
                    maybeCaller, undefined, undefined, args, undefined);
            }
        }
    }
    args.push(methodName);
    return this._then(caller, undefined, undefined, args, undefined);
};

function namedGetter(obj) {
    return obj[this];
}
function indexedGetter(obj) {
    var index = +this;
    if (index < 0) index = Math.max(0, index + obj.length);
    return obj[index];
}
Promise.prototype.get = function (propertyName) {
    var isIndex = (typeof propertyName === "number");
    var getter;
    if (!isIndex) {
        if (canEvaluate) {
            var maybeGetter = getGetter(propertyName);
            getter = maybeGetter !== null ? maybeGetter : namedGetter;
        } else {
            getter = namedGetter;
        }
    } else {
        getter = indexedGetter;
    }
    return this._then(getter, undefined, undefined, propertyName, undefined);
};
};

},{"./util":36}],6:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, PromiseArray, apiRejection, debug) {
var util = _dereq_("./util");
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var async = Promise._async;

Promise.prototype["break"] = Promise.prototype.cancel = function() {
    if (!debug.cancellation()) return this._warn("cancellation is disabled");

    var promise = this;
    var child = promise;
    while (promise.isCancellable()) {
        if (!promise._cancelBy(child)) {
            if (child._isFollowing()) {
                child._followee().cancel();
            } else {
                child._cancelBranched();
            }
            break;
        }

        var parent = promise._cancellationParent;
        if (parent == null || !parent.isCancellable()) {
            if (promise._isFollowing()) {
                promise._followee().cancel();
            } else {
                promise._cancelBranched();
            }
            break;
        } else {
            if (promise._isFollowing()) promise._followee().cancel();
            child = promise;
            promise = parent;
        }
    }
};

Promise.prototype._branchHasCancelled = function() {
    this._branchesRemainingToCancel--;
};

Promise.prototype._enoughBranchesHaveCancelled = function() {
    return this._branchesRemainingToCancel === undefined ||
           this._branchesRemainingToCancel <= 0;
};

Promise.prototype._cancelBy = function(canceller) {
    if (canceller === this) {
        this._branchesRemainingToCancel = 0;
        this._invokeOnCancel();
        return true;
    } else {
        this._branchHasCancelled();
        if (this._enoughBranchesHaveCancelled()) {
            this._invokeOnCancel();
            return true;
        }
    }
    return false;
};

Promise.prototype._cancelBranched = function() {
    if (this._enoughBranchesHaveCancelled()) {
        this._cancel();
    }
};

Promise.prototype._cancel = function() {
    if (!this.isCancellable()) return;

    this._setCancelled();
    async.invoke(this._cancelPromises, this, undefined);
};

Promise.prototype._cancelPromises = function() {
    if (this._length() > 0) this._settlePromises();
};

Promise.prototype._unsetOnCancel = function() {
    this._onCancelField = undefined;
};

Promise.prototype.isCancellable = function() {
    return this.isPending() && !this.isCancelled();
};

Promise.prototype._doInvokeOnCancel = function(onCancelCallback, internalOnly) {
    if (util.isArray(onCancelCallback)) {
        for (var i = 0; i < onCancelCallback.length; ++i) {
            this._doInvokeOnCancel(onCancelCallback[i], internalOnly);
        }
    } else if (onCancelCallback !== undefined) {
        if (typeof onCancelCallback === "function") {
            if (!internalOnly) {
                var e = tryCatch(onCancelCallback).call(this._boundValue());
                if (e === errorObj) {
                    this._attachExtraTrace(e.e);
                    async.throwLater(e.e);
                }
            }
        } else {
            onCancelCallback._resultCancelled(this);
        }
    }
};

Promise.prototype._invokeOnCancel = function() {
    var onCancelCallback = this._onCancel();
    this._unsetOnCancel();
    async.invoke(this._doInvokeOnCancel, this, onCancelCallback);
};

Promise.prototype._invokeInternalOnCancel = function() {
    if (this.isCancellable()) {
        this._doInvokeOnCancel(this._onCancel(), true);
        this._unsetOnCancel();
    }
};

Promise.prototype._resultCancelled = function() {
    this.cancel();
};

};

},{"./util":36}],7:[function(_dereq_,module,exports){
"use strict";
module.exports = function(NEXT_FILTER) {
var util = _dereq_("./util");
var getKeys = _dereq_("./es5").keys;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;

function catchFilter(instances, cb, promise) {
    return function(e) {
        var boundTo = promise._boundValue();
        predicateLoop: for (var i = 0; i < instances.length; ++i) {
            var item = instances[i];

            if (item === Error ||
                (item != null && item.prototype instanceof Error)) {
                if (e instanceof item) {
                    return tryCatch(cb).call(boundTo, e);
                }
            } else if (typeof item === "function") {
                var matchesPredicate = tryCatch(item).call(boundTo, e);
                if (matchesPredicate === errorObj) {
                    return matchesPredicate;
                } else if (matchesPredicate) {
                    return tryCatch(cb).call(boundTo, e);
                }
            } else if (util.isObject(e)) {
                var keys = getKeys(item);
                for (var j = 0; j < keys.length; ++j) {
                    var key = keys[j];
                    if (item[key] != e[key]) {
                        continue predicateLoop;
                    }
                }
                return tryCatch(cb).call(boundTo, e);
            }
        }
        return NEXT_FILTER;
    };
}

return catchFilter;
};

},{"./es5":13,"./util":36}],8:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var longStackTraces = false;
var contextStack = [];

Promise.prototype._promiseCreated = function() {};
Promise.prototype._pushContext = function() {};
Promise.prototype._popContext = function() {return null;};
Promise._peekContext = Promise.prototype._peekContext = function() {};

function Context() {
    this._trace = new Context.CapturedTrace(peekContext());
}
Context.prototype._pushContext = function () {
    if (this._trace !== undefined) {
        this._trace._promiseCreated = null;
        contextStack.push(this._trace);
    }
};

Context.prototype._popContext = function () {
    if (this._trace !== undefined) {
        var trace = contextStack.pop();
        var ret = trace._promiseCreated;
        trace._promiseCreated = null;
        return ret;
    }
    return null;
};

function createContext() {
    if (longStackTraces) return new Context();
}

function peekContext() {
    var lastIndex = contextStack.length - 1;
    if (lastIndex >= 0) {
        return contextStack[lastIndex];
    }
    return undefined;
}
Context.CapturedTrace = null;
Context.create = createContext;
Context.deactivateLongStackTraces = function() {};
Context.activateLongStackTraces = function() {
    var Promise_pushContext = Promise.prototype._pushContext;
    var Promise_popContext = Promise.prototype._popContext;
    var Promise_PeekContext = Promise._peekContext;
    var Promise_peekContext = Promise.prototype._peekContext;
    var Promise_promiseCreated = Promise.prototype._promiseCreated;
    Context.deactivateLongStackTraces = function() {
        Promise.prototype._pushContext = Promise_pushContext;
        Promise.prototype._popContext = Promise_popContext;
        Promise._peekContext = Promise_PeekContext;
        Promise.prototype._peekContext = Promise_peekContext;
        Promise.prototype._promiseCreated = Promise_promiseCreated;
        longStackTraces = false;
    };
    longStackTraces = true;
    Promise.prototype._pushContext = Context.prototype._pushContext;
    Promise.prototype._popContext = Context.prototype._popContext;
    Promise._peekContext = Promise.prototype._peekContext = peekContext;
    Promise.prototype._promiseCreated = function() {
        var ctx = this._peekContext();
        if (ctx && ctx._promiseCreated == null) ctx._promiseCreated = this;
    };
};
return Context;
};

},{}],9:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, Context) {
var getDomain = Promise._getDomain;
var async = Promise._async;
var Warning = _dereq_("./errors").Warning;
var util = _dereq_("./util");
var canAttachTrace = util.canAttachTrace;
var unhandledRejectionHandled;
var possiblyUnhandledRejection;
var bluebirdFramePattern =
    /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/;
var stackFramePattern = null;
var formatStack = null;
var indentStackFrames = false;
var printWarning;
var debugging = !!(util.env("BLUEBIRD_DEBUG") != 0 &&
                        (true ||
                         util.env("BLUEBIRD_DEBUG") ||
                         util.env("NODE_ENV") === "development"));

var warnings = !!(util.env("BLUEBIRD_WARNINGS") != 0 &&
    (debugging || util.env("BLUEBIRD_WARNINGS")));

var longStackTraces = !!(util.env("BLUEBIRD_LONG_STACK_TRACES") != 0 &&
    (debugging || util.env("BLUEBIRD_LONG_STACK_TRACES")));

var wForgottenReturn = util.env("BLUEBIRD_W_FORGOTTEN_RETURN") != 0 &&
    (warnings || !!util.env("BLUEBIRD_W_FORGOTTEN_RETURN"));

Promise.prototype.suppressUnhandledRejections = function() {
    var target = this._target();
    target._bitField = ((target._bitField & (~1048576)) |
                      524288);
};

Promise.prototype._ensurePossibleRejectionHandled = function () {
    if ((this._bitField & 524288) !== 0) return;
    this._setRejectionIsUnhandled();
    async.invokeLater(this._notifyUnhandledRejection, this, undefined);
};

Promise.prototype._notifyUnhandledRejectionIsHandled = function () {
    fireRejectionEvent("rejectionHandled",
                                  unhandledRejectionHandled, undefined, this);
};

Promise.prototype._setReturnedNonUndefined = function() {
    this._bitField = this._bitField | 268435456;
};

Promise.prototype._returnedNonUndefined = function() {
    return (this._bitField & 268435456) !== 0;
};

Promise.prototype._notifyUnhandledRejection = function () {
    if (this._isRejectionUnhandled()) {
        var reason = this._settledValue();
        this._setUnhandledRejectionIsNotified();
        fireRejectionEvent("unhandledRejection",
                                      possiblyUnhandledRejection, reason, this);
    }
};

Promise.prototype._setUnhandledRejectionIsNotified = function () {
    this._bitField = this._bitField | 262144;
};

Promise.prototype._unsetUnhandledRejectionIsNotified = function () {
    this._bitField = this._bitField & (~262144);
};

Promise.prototype._isUnhandledRejectionNotified = function () {
    return (this._bitField & 262144) > 0;
};

Promise.prototype._setRejectionIsUnhandled = function () {
    this._bitField = this._bitField | 1048576;
};

Promise.prototype._unsetRejectionIsUnhandled = function () {
    this._bitField = this._bitField & (~1048576);
    if (this._isUnhandledRejectionNotified()) {
        this._unsetUnhandledRejectionIsNotified();
        this._notifyUnhandledRejectionIsHandled();
    }
};

Promise.prototype._isRejectionUnhandled = function () {
    return (this._bitField & 1048576) > 0;
};

Promise.prototype._warn = function(message, shouldUseOwnTrace, promise) {
    return warn(message, shouldUseOwnTrace, promise || this);
};

Promise.onPossiblyUnhandledRejection = function (fn) {
    var domain = getDomain();
    possiblyUnhandledRejection =
        typeof fn === "function" ? (domain === null ? fn : domain.bind(fn))
                                 : undefined;
};

Promise.onUnhandledRejectionHandled = function (fn) {
    var domain = getDomain();
    unhandledRejectionHandled =
        typeof fn === "function" ? (domain === null ? fn : domain.bind(fn))
                                 : undefined;
};

var disableLongStackTraces = function() {};
Promise.longStackTraces = function () {
    if (async.haveItemsQueued() && !config.longStackTraces) {
        throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    if (!config.longStackTraces && longStackTracesIsSupported()) {
        var Promise_captureStackTrace = Promise.prototype._captureStackTrace;
        var Promise_attachExtraTrace = Promise.prototype._attachExtraTrace;
        config.longStackTraces = true;
        disableLongStackTraces = function() {
            if (async.haveItemsQueued() && !config.longStackTraces) {
                throw new Error("cannot enable long stack traces after promises have been created\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
            }
            Promise.prototype._captureStackTrace = Promise_captureStackTrace;
            Promise.prototype._attachExtraTrace = Promise_attachExtraTrace;
            Context.deactivateLongStackTraces();
            async.enableTrampoline();
            config.longStackTraces = false;
        };
        Promise.prototype._captureStackTrace = longStackTracesCaptureStackTrace;
        Promise.prototype._attachExtraTrace = longStackTracesAttachExtraTrace;
        Context.activateLongStackTraces();
        async.disableTrampolineIfNecessary();
    }
};

Promise.hasLongStackTraces = function () {
    return config.longStackTraces && longStackTracesIsSupported();
};

var fireDomEvent = (function() {
    try {
        var event = document.createEvent("CustomEvent");
        event.initCustomEvent("testingtheevent", false, true, {});
        util.global.dispatchEvent(event);
        return function(name, event) {
            var domEvent = document.createEvent("CustomEvent");
            domEvent.initCustomEvent(name.toLowerCase(), false, true, event);
            return !util.global.dispatchEvent(domEvent);
        };
    } catch (e) {}
    return function() {
        return false;
    };
})();

var fireGlobalEvent = (function() {
    if (util.isNode) {
        return function() {
            return process.emit.apply(process, arguments);
        };
    } else {
        if (!util.global) {
            return function() {
                return false;
            };
        }
        return function(name) {
            var methodName = "on" + name.toLowerCase();
            var method = util.global[methodName];
            if (!method) return false;
            method.apply(util.global, [].slice.call(arguments, 1));
            return true;
        };
    }
})();

function generatePromiseLifecycleEventObject(name, promise) {
    return {promise: promise};
}

var eventToObjectGenerator = {
    promiseCreated: generatePromiseLifecycleEventObject,
    promiseFulfilled: generatePromiseLifecycleEventObject,
    promiseRejected: generatePromiseLifecycleEventObject,
    promiseResolved: generatePromiseLifecycleEventObject,
    promiseCancelled: generatePromiseLifecycleEventObject,
    promiseChained: function(name, promise, child) {
        return {promise: promise, child: child};
    },
    warning: function(name, warning) {
        return {warning: warning};
    },
    unhandledRejection: function (name, reason, promise) {
        return {reason: reason, promise: promise};
    },
    rejectionHandled: generatePromiseLifecycleEventObject
};

var activeFireEvent = function (name) {
    var globalEventFired = false;
    try {
        globalEventFired = fireGlobalEvent.apply(null, arguments);
    } catch (e) {
        async.throwLater(e);
        globalEventFired = true;
    }

    var domEventFired = false;
    try {
        domEventFired = fireDomEvent(name,
                    eventToObjectGenerator[name].apply(null, arguments));
    } catch (e) {
        async.throwLater(e);
        domEventFired = true;
    }

    return domEventFired || globalEventFired;
};

Promise.config = function(opts) {
    opts = Object(opts);
    if ("longStackTraces" in opts) {
        if (opts.longStackTraces) {
            Promise.longStackTraces();
        } else if (!opts.longStackTraces && Promise.hasLongStackTraces()) {
            disableLongStackTraces();
        }
    }
    if ("warnings" in opts) {
        var warningsOption = opts.warnings;
        config.warnings = !!warningsOption;
        wForgottenReturn = config.warnings;

        if (util.isObject(warningsOption)) {
            if ("wForgottenReturn" in warningsOption) {
                wForgottenReturn = !!warningsOption.wForgottenReturn;
            }
        }
    }
    if ("cancellation" in opts && opts.cancellation && !config.cancellation) {
        if (async.haveItemsQueued()) {
            throw new Error(
                "cannot enable cancellation after promises are in use");
        }
        Promise.prototype._clearCancellationData =
            cancellationClearCancellationData;
        Promise.prototype._propagateFrom = cancellationPropagateFrom;
        Promise.prototype._onCancel = cancellationOnCancel;
        Promise.prototype._setOnCancel = cancellationSetOnCancel;
        Promise.prototype._attachCancellationCallback =
            cancellationAttachCancellationCallback;
        Promise.prototype._execute = cancellationExecute;
        propagateFromFunction = cancellationPropagateFrom;
        config.cancellation = true;
    }
    if ("monitoring" in opts) {
        if (opts.monitoring && !config.monitoring) {
            config.monitoring = true;
            Promise.prototype._fireEvent = activeFireEvent;
        } else if (!opts.monitoring && config.monitoring) {
            config.monitoring = false;
            Promise.prototype._fireEvent = defaultFireEvent;
        }
    }
};

function defaultFireEvent() { return false; }

Promise.prototype._fireEvent = defaultFireEvent;
Promise.prototype._execute = function(executor, resolve, reject) {
    try {
        executor(resolve, reject);
    } catch (e) {
        return e;
    }
};
Promise.prototype._onCancel = function () {};
Promise.prototype._setOnCancel = function (handler) { ; };
Promise.prototype._attachCancellationCallback = function(onCancel) {
    ;
};
Promise.prototype._captureStackTrace = function () {};
Promise.prototype._attachExtraTrace = function () {};
Promise.prototype._clearCancellationData = function() {};
Promise.prototype._propagateFrom = function (parent, flags) {
    ;
    ;
};

function cancellationExecute(executor, resolve, reject) {
    var promise = this;
    try {
        executor(resolve, reject, function(onCancel) {
            if (typeof onCancel !== "function") {
                throw new TypeError("onCancel must be a function, got: " +
                                    util.toString(onCancel));
            }
            promise._attachCancellationCallback(onCancel);
        });
    } catch (e) {
        return e;
    }
}

function cancellationAttachCancellationCallback(onCancel) {
    if (!this.isCancellable()) return this;

    var previousOnCancel = this._onCancel();
    if (previousOnCancel !== undefined) {
        if (util.isArray(previousOnCancel)) {
            previousOnCancel.push(onCancel);
        } else {
            this._setOnCancel([previousOnCancel, onCancel]);
        }
    } else {
        this._setOnCancel(onCancel);
    }
}

function cancellationOnCancel() {
    return this._onCancelField;
}

function cancellationSetOnCancel(onCancel) {
    this._onCancelField = onCancel;
}

function cancellationClearCancellationData() {
    this._cancellationParent = undefined;
    this._onCancelField = undefined;
}

function cancellationPropagateFrom(parent, flags) {
    if ((flags & 1) !== 0) {
        this._cancellationParent = parent;
        var branchesRemainingToCancel = parent._branchesRemainingToCancel;
        if (branchesRemainingToCancel === undefined) {
            branchesRemainingToCancel = 0;
        }
        parent._branchesRemainingToCancel = branchesRemainingToCancel + 1;
    }
    if ((flags & 2) !== 0 && parent._isBound()) {
        this._setBoundTo(parent._boundTo);
    }
}

function bindingPropagateFrom(parent, flags) {
    if ((flags & 2) !== 0 && parent._isBound()) {
        this._setBoundTo(parent._boundTo);
    }
}
var propagateFromFunction = bindingPropagateFrom;

function boundValueFunction() {
    var ret = this._boundTo;
    if (ret !== undefined) {
        if (ret instanceof Promise) {
            if (ret.isFulfilled()) {
                return ret.value();
            } else {
                return undefined;
            }
        }
    }
    return ret;
}

function longStackTracesCaptureStackTrace() {
    this._trace = new CapturedTrace(this._peekContext());
}

function longStackTracesAttachExtraTrace(error, ignoreSelf) {
    if (canAttachTrace(error)) {
        var trace = this._trace;
        if (trace !== undefined) {
            if (ignoreSelf) trace = trace._parent;
        }
        if (trace !== undefined) {
            trace.attachExtraTrace(error);
        } else if (!error.__stackCleaned__) {
            var parsed = parseStackAndMessage(error);
            util.notEnumerableProp(error, "stack",
                parsed.message + "\n" + parsed.stack.join("\n"));
            util.notEnumerableProp(error, "__stackCleaned__", true);
        }
    }
}

function checkForgottenReturns(returnValue, promiseCreated, name, promise,
                               parent) {
    if (returnValue === undefined && promiseCreated !== null &&
        wForgottenReturn) {
        if (parent !== undefined && parent._returnedNonUndefined()) return;
        if ((promise._bitField & 65535) === 0) return;

        if (name) name = name + " ";
        var msg = "a promise was created in a " + name +
            "handler but was not returned from it";
        promise._warn(msg, true, promiseCreated);
    }
}

function deprecated(name, replacement) {
    var message = name +
        " is deprecated and will be removed in a future version.";
    if (replacement) message += " Use " + replacement + " instead.";
    return warn(message);
}

function warn(message, shouldUseOwnTrace, promise) {
    if (!config.warnings) return;
    var warning = new Warning(message);
    var ctx;
    if (shouldUseOwnTrace) {
        promise._attachExtraTrace(warning);
    } else if (config.longStackTraces && (ctx = Promise._peekContext())) {
        ctx.attachExtraTrace(warning);
    } else {
        var parsed = parseStackAndMessage(warning);
        warning.stack = parsed.message + "\n" + parsed.stack.join("\n");
    }

    if (!activeFireEvent("warning", warning)) {
        formatAndLogError(warning, "", true);
    }
}

function reconstructStack(message, stacks) {
    for (var i = 0; i < stacks.length - 1; ++i) {
        stacks[i].push("From previous event:");
        stacks[i] = stacks[i].join("\n");
    }
    if (i < stacks.length) {
        stacks[i] = stacks[i].join("\n");
    }
    return message + "\n" + stacks.join("\n");
}

function removeDuplicateOrEmptyJumps(stacks) {
    for (var i = 0; i < stacks.length; ++i) {
        if (stacks[i].length === 0 ||
            ((i + 1 < stacks.length) && stacks[i][0] === stacks[i+1][0])) {
            stacks.splice(i, 1);
            i--;
        }
    }
}

function removeCommonRoots(stacks) {
    var current = stacks[0];
    for (var i = 1; i < stacks.length; ++i) {
        var prev = stacks[i];
        var currentLastIndex = current.length - 1;
        var currentLastLine = current[currentLastIndex];
        var commonRootMeetPoint = -1;

        for (var j = prev.length - 1; j >= 0; --j) {
            if (prev[j] === currentLastLine) {
                commonRootMeetPoint = j;
                break;
            }
        }

        for (var j = commonRootMeetPoint; j >= 0; --j) {
            var line = prev[j];
            if (current[currentLastIndex] === line) {
                current.pop();
                currentLastIndex--;
            } else {
                break;
            }
        }
        current = prev;
    }
}

function cleanStack(stack) {
    var ret = [];
    for (var i = 0; i < stack.length; ++i) {
        var line = stack[i];
        var isTraceLine = "    (No stack trace)" === line ||
            stackFramePattern.test(line);
        var isInternalFrame = isTraceLine && shouldIgnore(line);
        if (isTraceLine && !isInternalFrame) {
            if (indentStackFrames && line.charAt(0) !== " ") {
                line = "    " + line;
            }
            ret.push(line);
        }
    }
    return ret;
}

function stackFramesAsArray(error) {
    var stack = error.stack.replace(/\s+$/g, "").split("\n");
    for (var i = 0; i < stack.length; ++i) {
        var line = stack[i];
        if ("    (No stack trace)" === line || stackFramePattern.test(line)) {
            break;
        }
    }
    if (i > 0) {
        stack = stack.slice(i);
    }
    return stack;
}

function parseStackAndMessage(error) {
    var stack = error.stack;
    var message = error.toString();
    stack = typeof stack === "string" && stack.length > 0
                ? stackFramesAsArray(error) : ["    (No stack trace)"];
    return {
        message: message,
        stack: cleanStack(stack)
    };
}

function formatAndLogError(error, title, isSoft) {
    if (typeof console !== "undefined") {
        var message;
        if (util.isObject(error)) {
            var stack = error.stack;
            message = title + formatStack(stack, error);
        } else {
            message = title + String(error);
        }
        if (typeof printWarning === "function") {
            printWarning(message, isSoft);
        } else if (typeof console.log === "function" ||
            typeof console.log === "object") {
            console.log(message);
        }
    }
}

function fireRejectionEvent(name, localHandler, reason, promise) {
    var localEventFired = false;
    try {
        if (typeof localHandler === "function") {
            localEventFired = true;
            if (name === "rejectionHandled") {
                localHandler(promise);
            } else {
                localHandler(reason, promise);
            }
        }
    } catch (e) {
        async.throwLater(e);
    }

    if (name === "unhandledRejection") {
        if (!activeFireEvent(name, reason, promise) && !localEventFired) {
            formatAndLogError(reason, "Unhandled rejection ");
        }
    } else {
        activeFireEvent(name, promise);
    }
}

function formatNonError(obj) {
    var str;
    if (typeof obj === "function") {
        str = "[function " +
            (obj.name || "anonymous") +
            "]";
    } else {
        str = obj && typeof obj.toString === "function"
            ? obj.toString() : util.toString(obj);
        var ruselessToString = /\[object [a-zA-Z0-9$_]+\]/;
        if (ruselessToString.test(str)) {
            try {
                var newStr = JSON.stringify(obj);
                str = newStr;
            }
            catch(e) {

            }
        }
        if (str.length === 0) {
            str = "(empty array)";
        }
    }
    return ("(<" + snip(str) + ">, no stack trace)");
}

function snip(str) {
    var maxChars = 41;
    if (str.length < maxChars) {
        return str;
    }
    return str.substr(0, maxChars - 3) + "...";
}

function longStackTracesIsSupported() {
    return typeof captureStackTrace === "function";
}

var shouldIgnore = function() { return false; };
var parseLineInfoRegex = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
function parseLineInfo(line) {
    var matches = line.match(parseLineInfoRegex);
    if (matches) {
        return {
            fileName: matches[1],
            line: parseInt(matches[2], 10)
        };
    }
}

function setBounds(firstLineError, lastLineError) {
    if (!longStackTracesIsSupported()) return;
    var firstStackLines = firstLineError.stack.split("\n");
    var lastStackLines = lastLineError.stack.split("\n");
    var firstIndex = -1;
    var lastIndex = -1;
    var firstFileName;
    var lastFileName;
    for (var i = 0; i < firstStackLines.length; ++i) {
        var result = parseLineInfo(firstStackLines[i]);
        if (result) {
            firstFileName = result.fileName;
            firstIndex = result.line;
            break;
        }
    }
    for (var i = 0; i < lastStackLines.length; ++i) {
        var result = parseLineInfo(lastStackLines[i]);
        if (result) {
            lastFileName = result.fileName;
            lastIndex = result.line;
            break;
        }
    }
    if (firstIndex < 0 || lastIndex < 0 || !firstFileName || !lastFileName ||
        firstFileName !== lastFileName || firstIndex >= lastIndex) {
        return;
    }

    shouldIgnore = function(line) {
        if (bluebirdFramePattern.test(line)) return true;
        var info = parseLineInfo(line);
        if (info) {
            if (info.fileName === firstFileName &&
                (firstIndex <= info.line && info.line <= lastIndex)) {
                return true;
            }
        }
        return false;
    };
}

function CapturedTrace(parent) {
    this._parent = parent;
    this._promisesCreated = 0;
    var length = this._length = 1 + (parent === undefined ? 0 : parent._length);
    captureStackTrace(this, CapturedTrace);
    if (length > 32) this.uncycle();
}
util.inherits(CapturedTrace, Error);
Context.CapturedTrace = CapturedTrace;

CapturedTrace.prototype.uncycle = function() {
    var length = this._length;
    if (length < 2) return;
    var nodes = [];
    var stackToIndex = {};

    for (var i = 0, node = this; node !== undefined; ++i) {
        nodes.push(node);
        node = node._parent;
    }
    length = this._length = i;
    for (var i = length - 1; i >= 0; --i) {
        var stack = nodes[i].stack;
        if (stackToIndex[stack] === undefined) {
            stackToIndex[stack] = i;
        }
    }
    for (var i = 0; i < length; ++i) {
        var currentStack = nodes[i].stack;
        var index = stackToIndex[currentStack];
        if (index !== undefined && index !== i) {
            if (index > 0) {
                nodes[index - 1]._parent = undefined;
                nodes[index - 1]._length = 1;
            }
            nodes[i]._parent = undefined;
            nodes[i]._length = 1;
            var cycleEdgeNode = i > 0 ? nodes[i - 1] : this;

            if (index < length - 1) {
                cycleEdgeNode._parent = nodes[index + 1];
                cycleEdgeNode._parent.uncycle();
                cycleEdgeNode._length =
                    cycleEdgeNode._parent._length + 1;
            } else {
                cycleEdgeNode._parent = undefined;
                cycleEdgeNode._length = 1;
            }
            var currentChildLength = cycleEdgeNode._length + 1;
            for (var j = i - 2; j >= 0; --j) {
                nodes[j]._length = currentChildLength;
                currentChildLength++;
            }
            return;
        }
    }
};

CapturedTrace.prototype.attachExtraTrace = function(error) {
    if (error.__stackCleaned__) return;
    this.uncycle();
    var parsed = parseStackAndMessage(error);
    var message = parsed.message;
    var stacks = [parsed.stack];

    var trace = this;
    while (trace !== undefined) {
        stacks.push(cleanStack(trace.stack.split("\n")));
        trace = trace._parent;
    }
    removeCommonRoots(stacks);
    removeDuplicateOrEmptyJumps(stacks);
    util.notEnumerableProp(error, "stack", reconstructStack(message, stacks));
    util.notEnumerableProp(error, "__stackCleaned__", true);
};

var captureStackTrace = (function stackDetection() {
    var v8stackFramePattern = /^\s*at\s*/;
    var v8stackFormatter = function(stack, error) {
        if (typeof stack === "string") return stack;

        if (error.name !== undefined &&
            error.message !== undefined) {
            return error.toString();
        }
        return formatNonError(error);
    };

    if (typeof Error.stackTraceLimit === "number" &&
        typeof Error.captureStackTrace === "function") {
        Error.stackTraceLimit += 6;
        stackFramePattern = v8stackFramePattern;
        formatStack = v8stackFormatter;
        var captureStackTrace = Error.captureStackTrace;

        shouldIgnore = function(line) {
            return bluebirdFramePattern.test(line);
        };
        return function(receiver, ignoreUntil) {
            Error.stackTraceLimit += 6;
            captureStackTrace(receiver, ignoreUntil);
            Error.stackTraceLimit -= 6;
        };
    }
    var err = new Error();

    if (typeof err.stack === "string" &&
        err.stack.split("\n")[0].indexOf("stackDetection@") >= 0) {
        stackFramePattern = /@/;
        formatStack = v8stackFormatter;
        indentStackFrames = true;
        return function captureStackTrace(o) {
            o.stack = new Error().stack;
        };
    }

    var hasStackAfterThrow;
    try { throw new Error(); }
    catch(e) {
        hasStackAfterThrow = ("stack" in e);
    }
    if (!("stack" in err) && hasStackAfterThrow &&
        typeof Error.stackTraceLimit === "number") {
        stackFramePattern = v8stackFramePattern;
        formatStack = v8stackFormatter;
        return function captureStackTrace(o) {
            Error.stackTraceLimit += 6;
            try { throw new Error(); }
            catch(e) { o.stack = e.stack; }
            Error.stackTraceLimit -= 6;
        };
    }

    formatStack = function(stack, error) {
        if (typeof stack === "string") return stack;

        if ((typeof error === "object" ||
            typeof error === "function") &&
            error.name !== undefined &&
            error.message !== undefined) {
            return error.toString();
        }
        return formatNonError(error);
    };

    return null;

})([]);

if (typeof console !== "undefined" && typeof console.warn !== "undefined") {
    printWarning = function (message) {
        console.warn(message);
    };
    if (util.isNode && process.stderr.isTTY) {
        printWarning = function(message, isSoft) {
            var color = isSoft ? "\u001b[33m" : "\u001b[31m";
            console.warn(color + message + "\u001b[0m\n");
        };
    } else if (!util.isNode && typeof (new Error().stack) === "string") {
        printWarning = function(message, isSoft) {
            console.warn("%c" + message,
                        isSoft ? "color: darkorange" : "color: red");
        };
    }
}

var config = {
    warnings: warnings,
    longStackTraces: false,
    cancellation: false,
    monitoring: false
};

if (longStackTraces) Promise.longStackTraces();

return {
    longStackTraces: function() {
        return config.longStackTraces;
    },
    warnings: function() {
        return config.warnings;
    },
    cancellation: function() {
        return config.cancellation;
    },
    monitoring: function() {
        return config.monitoring;
    },
    propagateFromFunction: function() {
        return propagateFromFunction;
    },
    boundValueFunction: function() {
        return boundValueFunction;
    },
    checkForgottenReturns: checkForgottenReturns,
    setBounds: setBounds,
    warn: warn,
    deprecated: deprecated,
    CapturedTrace: CapturedTrace,
    fireDomEvent: fireDomEvent,
    fireGlobalEvent: fireGlobalEvent
};
};

},{"./errors":12,"./util":36}],10:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
function returner() {
    return this.value;
}
function thrower() {
    throw this.reason;
}

Promise.prototype["return"] =
Promise.prototype.thenReturn = function (value) {
    if (value instanceof Promise) value.suppressUnhandledRejections();
    return this._then(
        returner, undefined, undefined, {value: value}, undefined);
};

Promise.prototype["throw"] =
Promise.prototype.thenThrow = function (reason) {
    return this._then(
        thrower, undefined, undefined, {reason: reason}, undefined);
};

Promise.prototype.catchThrow = function (reason) {
    if (arguments.length <= 1) {
        return this._then(
            undefined, thrower, undefined, {reason: reason}, undefined);
    } else {
        var _reason = arguments[1];
        var handler = function() {throw _reason;};
        return this.caught(reason, handler);
    }
};

Promise.prototype.catchReturn = function (value) {
    if (arguments.length <= 1) {
        if (value instanceof Promise) value.suppressUnhandledRejections();
        return this._then(
            undefined, returner, undefined, {value: value}, undefined);
    } else {
        var _value = arguments[1];
        if (_value instanceof Promise) _value.suppressUnhandledRejections();
        var handler = function() {return _value;};
        return this.caught(value, handler);
    }
};
};

},{}],11:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseReduce = Promise.reduce;
var PromiseAll = Promise.all;

function promiseAllThis() {
    return PromiseAll(this);
}

function PromiseMapSeries(promises, fn) {
    return PromiseReduce(promises, fn, INTERNAL, INTERNAL);
}

Promise.prototype.each = function (fn) {
    return this.mapSeries(fn)
            ._then(promiseAllThis, undefined, undefined, this, undefined);
};

Promise.prototype.mapSeries = function (fn) {
    return PromiseReduce(this, fn, INTERNAL, INTERNAL);
};

Promise.each = function (promises, fn) {
    return PromiseMapSeries(promises, fn)
            ._then(promiseAllThis, undefined, undefined, promises, undefined);
};

Promise.mapSeries = PromiseMapSeries;
};

},{}],12:[function(_dereq_,module,exports){
"use strict";
var es5 = _dereq_("./es5");
var Objectfreeze = es5.freeze;
var util = _dereq_("./util");
var inherits = util.inherits;
var notEnumerableProp = util.notEnumerableProp;

function subError(nameProperty, defaultMessage) {
    function SubError(message) {
        if (!(this instanceof SubError)) return new SubError(message);
        notEnumerableProp(this, "message",
            typeof message === "string" ? message : defaultMessage);
        notEnumerableProp(this, "name", nameProperty);
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, this.constructor);
        } else {
            Error.call(this);
        }
    }
    inherits(SubError, Error);
    return SubError;
}

var _TypeError, _RangeError;
var Warning = subError("Warning", "warning");
var CancellationError = subError("CancellationError", "cancellation error");
var TimeoutError = subError("TimeoutError", "timeout error");
var AggregateError = subError("AggregateError", "aggregate error");
try {
    _TypeError = TypeError;
    _RangeError = RangeError;
} catch(e) {
    _TypeError = subError("TypeError", "type error");
    _RangeError = subError("RangeError", "range error");
}

var methods = ("join pop push shift unshift slice filter forEach some " +
    "every map indexOf lastIndexOf reduce reduceRight sort reverse").split(" ");

for (var i = 0; i < methods.length; ++i) {
    if (typeof Array.prototype[methods[i]] === "function") {
        AggregateError.prototype[methods[i]] = Array.prototype[methods[i]];
    }
}

es5.defineProperty(AggregateError.prototype, "length", {
    value: 0,
    configurable: false,
    writable: true,
    enumerable: true
});
AggregateError.prototype["isOperational"] = true;
var level = 0;
AggregateError.prototype.toString = function() {
    var indent = Array(level * 4 + 1).join(" ");
    var ret = "\n" + indent + "AggregateError of:" + "\n";
    level++;
    indent = Array(level * 4 + 1).join(" ");
    for (var i = 0; i < this.length; ++i) {
        var str = this[i] === this ? "[Circular AggregateError]" : this[i] + "";
        var lines = str.split("\n");
        for (var j = 0; j < lines.length; ++j) {
            lines[j] = indent + lines[j];
        }
        str = lines.join("\n");
        ret += str + "\n";
    }
    level--;
    return ret;
};

function OperationalError(message) {
    if (!(this instanceof OperationalError))
        return new OperationalError(message);
    notEnumerableProp(this, "name", "OperationalError");
    notEnumerableProp(this, "message", message);
    this.cause = message;
    this["isOperational"] = true;

    if (message instanceof Error) {
        notEnumerableProp(this, "message", message.message);
        notEnumerableProp(this, "stack", message.stack);
    } else if (Error.captureStackTrace) {
        Error.captureStackTrace(this, this.constructor);
    }

}
inherits(OperationalError, Error);

var errorTypes = Error["__BluebirdErrorTypes__"];
if (!errorTypes) {
    errorTypes = Objectfreeze({
        CancellationError: CancellationError,
        TimeoutError: TimeoutError,
        OperationalError: OperationalError,
        RejectionError: OperationalError,
        AggregateError: AggregateError
    });
    es5.defineProperty(Error, "__BluebirdErrorTypes__", {
        value: errorTypes,
        writable: false,
        enumerable: false,
        configurable: false
    });
}

module.exports = {
    Error: Error,
    TypeError: _TypeError,
    RangeError: _RangeError,
    CancellationError: errorTypes.CancellationError,
    OperationalError: errorTypes.OperationalError,
    TimeoutError: errorTypes.TimeoutError,
    AggregateError: errorTypes.AggregateError,
    Warning: Warning
};

},{"./es5":13,"./util":36}],13:[function(_dereq_,module,exports){
var isES5 = (function(){
    "use strict";
    return this === undefined;
})();

if (isES5) {
    module.exports = {
        freeze: Object.freeze,
        defineProperty: Object.defineProperty,
        getDescriptor: Object.getOwnPropertyDescriptor,
        keys: Object.keys,
        names: Object.getOwnPropertyNames,
        getPrototypeOf: Object.getPrototypeOf,
        isArray: Array.isArray,
        isES5: isES5,
        propertyIsWritable: function(obj, prop) {
            var descriptor = Object.getOwnPropertyDescriptor(obj, prop);
            return !!(!descriptor || descriptor.writable || descriptor.set);
        }
    };
} else {
    var has = {}.hasOwnProperty;
    var str = {}.toString;
    var proto = {}.constructor.prototype;

    var ObjectKeys = function (o) {
        var ret = [];
        for (var key in o) {
            if (has.call(o, key)) {
                ret.push(key);
            }
        }
        return ret;
    };

    var ObjectGetDescriptor = function(o, key) {
        return {value: o[key]};
    };

    var ObjectDefineProperty = function (o, key, desc) {
        o[key] = desc.value;
        return o;
    };

    var ObjectFreeze = function (obj) {
        return obj;
    };

    var ObjectGetPrototypeOf = function (obj) {
        try {
            return Object(obj).constructor.prototype;
        }
        catch (e) {
            return proto;
        }
    };

    var ArrayIsArray = function (obj) {
        try {
            return str.call(obj) === "[object Array]";
        }
        catch(e) {
            return false;
        }
    };

    module.exports = {
        isArray: ArrayIsArray,
        keys: ObjectKeys,
        names: ObjectKeys,
        defineProperty: ObjectDefineProperty,
        getDescriptor: ObjectGetDescriptor,
        freeze: ObjectFreeze,
        getPrototypeOf: ObjectGetPrototypeOf,
        isES5: isES5,
        propertyIsWritable: function() {
            return true;
        }
    };
}

},{}],14:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var PromiseMap = Promise.map;

Promise.prototype.filter = function (fn, options) {
    return PromiseMap(this, fn, options, INTERNAL);
};

Promise.filter = function (promises, fn, options) {
    return PromiseMap(promises, fn, options, INTERNAL);
};
};

},{}],15:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, tryConvertToPromise) {
var util = _dereq_("./util");
var CancellationError = Promise.CancellationError;
var errorObj = util.errorObj;

function PassThroughHandlerContext(promise, type, handler) {
    this.promise = promise;
    this.type = type;
    this.handler = handler;
    this.called = false;
    this.cancelPromise = null;
}

PassThroughHandlerContext.prototype.isFinallyHandler = function() {
    return this.type === 0;
};

function FinallyHandlerCancelReaction(finallyHandler) {
    this.finallyHandler = finallyHandler;
}

FinallyHandlerCancelReaction.prototype._resultCancelled = function() {
    checkCancel(this.finallyHandler);
};

function checkCancel(ctx, reason) {
    if (ctx.cancelPromise != null) {
        if (arguments.length > 1) {
            ctx.cancelPromise._reject(reason);
        } else {
            ctx.cancelPromise._cancel();
        }
        ctx.cancelPromise = null;
        return true;
    }
    return false;
}

function succeed() {
    return finallyHandler.call(this, this.promise._target()._settledValue());
}
function fail(reason) {
    if (checkCancel(this, reason)) return;
    errorObj.e = reason;
    return errorObj;
}
function finallyHandler(reasonOrValue) {
    var promise = this.promise;
    var handler = this.handler;

    if (!this.called) {
        this.called = true;
        var ret = this.isFinallyHandler()
            ? handler.call(promise._boundValue())
            : handler.call(promise._boundValue(), reasonOrValue);
        if (ret !== undefined) {
            promise._setReturnedNonUndefined();
            var maybePromise = tryConvertToPromise(ret, promise);
            if (maybePromise instanceof Promise) {
                if (this.cancelPromise != null) {
                    if (maybePromise.isCancelled()) {
                        var reason =
                            new CancellationError("late cancellation observer");
                        promise._attachExtraTrace(reason);
                        errorObj.e = reason;
                        return errorObj;
                    } else if (maybePromise.isPending()) {
                        maybePromise._attachCancellationCallback(
                            new FinallyHandlerCancelReaction(this));
                    }
                }
                return maybePromise._then(
                    succeed, fail, undefined, this, undefined);
            }
        }
    }

    if (promise.isRejected()) {
        checkCancel(this);
        errorObj.e = reasonOrValue;
        return errorObj;
    } else {
        checkCancel(this);
        return reasonOrValue;
    }
}

Promise.prototype._passThrough = function(handler, type, success, fail) {
    if (typeof handler !== "function") return this.then();
    return this._then(success,
                      fail,
                      undefined,
                      new PassThroughHandlerContext(this, type, handler),
                      undefined);
};

Promise.prototype.lastly =
Promise.prototype["finally"] = function (handler) {
    return this._passThrough(handler,
                             0,
                             finallyHandler,
                             finallyHandler);
};

Promise.prototype.tap = function (handler) {
    return this._passThrough(handler, 1, finallyHandler);
};

return PassThroughHandlerContext;
};

},{"./util":36}],16:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          apiRejection,
                          INTERNAL,
                          tryConvertToPromise,
                          Proxyable,
                          debug) {
var errors = _dereq_("./errors");
var TypeError = errors.TypeError;
var util = _dereq_("./util");
var errorObj = util.errorObj;
var tryCatch = util.tryCatch;
var yieldHandlers = [];

function promiseFromYieldHandler(value, yieldHandlers, traceParent) {
    for (var i = 0; i < yieldHandlers.length; ++i) {
        traceParent._pushContext();
        var result = tryCatch(yieldHandlers[i])(value);
        traceParent._popContext();
        if (result === errorObj) {
            traceParent._pushContext();
            var ret = Promise.reject(errorObj.e);
            traceParent._popContext();
            return ret;
        }
        var maybePromise = tryConvertToPromise(result, traceParent);
        if (maybePromise instanceof Promise) return maybePromise;
    }
    return null;
}

function PromiseSpawn(generatorFunction, receiver, yieldHandler, stack) {
    if (debug.cancellation()) {
        var internal = new Promise(INTERNAL);
        var _finallyPromise = this._finallyPromise = new Promise(INTERNAL);
        this._promise = internal.lastly(function() {
            return _finallyPromise;
        });
        internal._captureStackTrace();
        internal._setOnCancel(this);
    } else {
        var promise = this._promise = new Promise(INTERNAL);
        promise._captureStackTrace();
    }
    this._stack = stack;
    this._generatorFunction = generatorFunction;
    this._receiver = receiver;
    this._generator = undefined;
    this._yieldHandlers = typeof yieldHandler === "function"
        ? [yieldHandler].concat(yieldHandlers)
        : yieldHandlers;
    this._yieldedPromise = null;
    this._cancellationPhase = false;
}
util.inherits(PromiseSpawn, Proxyable);

PromiseSpawn.prototype._isResolved = function() {
    return this._promise === null;
};

PromiseSpawn.prototype._cleanup = function() {
    this._promise = this._generator = null;
    if (debug.cancellation() && this._finallyPromise !== null) {
        this._finallyPromise._fulfill();
        this._finallyPromise = null;
    }
};

PromiseSpawn.prototype._promiseCancelled = function() {
    if (this._isResolved()) return;
    var implementsReturn = typeof this._generator["return"] !== "undefined";

    var result;
    if (!implementsReturn) {
        var reason = new Promise.CancellationError(
            "generator .return() sentinel");
        Promise.coroutine.returnSentinel = reason;
        this._promise._attachExtraTrace(reason);
        this._promise._pushContext();
        result = tryCatch(this._generator["throw"]).call(this._generator,
                                                         reason);
        this._promise._popContext();
    } else {
        this._promise._pushContext();
        result = tryCatch(this._generator["return"]).call(this._generator,
                                                          undefined);
        this._promise._popContext();
    }
    this._cancellationPhase = true;
    this._yieldedPromise = null;
    this._continue(result);
};

PromiseSpawn.prototype._promiseFulfilled = function(value) {
    this._yieldedPromise = null;
    this._promise._pushContext();
    var result = tryCatch(this._generator.next).call(this._generator, value);
    this._promise._popContext();
    this._continue(result);
};

PromiseSpawn.prototype._promiseRejected = function(reason) {
    this._yieldedPromise = null;
    this._promise._attachExtraTrace(reason);
    this._promise._pushContext();
    var result = tryCatch(this._generator["throw"])
        .call(this._generator, reason);
    this._promise._popContext();
    this._continue(result);
};

PromiseSpawn.prototype._resultCancelled = function() {
    if (this._yieldedPromise instanceof Promise) {
        var promise = this._yieldedPromise;
        this._yieldedPromise = null;
        promise.cancel();
    }
};

PromiseSpawn.prototype.promise = function () {
    return this._promise;
};

PromiseSpawn.prototype._run = function () {
    this._generator = this._generatorFunction.call(this._receiver);
    this._receiver =
        this._generatorFunction = undefined;
    this._promiseFulfilled(undefined);
};

PromiseSpawn.prototype._continue = function (result) {
    var promise = this._promise;
    if (result === errorObj) {
        this._cleanup();
        if (this._cancellationPhase) {
            return promise.cancel();
        } else {
            return promise._rejectCallback(result.e, false);
        }
    }

    var value = result.value;
    if (result.done === true) {
        this._cleanup();
        if (this._cancellationPhase) {
            return promise.cancel();
        } else {
            return promise._resolveCallback(value);
        }
    } else {
        var maybePromise = tryConvertToPromise(value, this._promise);
        if (!(maybePromise instanceof Promise)) {
            maybePromise =
                promiseFromYieldHandler(maybePromise,
                                        this._yieldHandlers,
                                        this._promise);
            if (maybePromise === null) {
                this._promiseRejected(
                    new TypeError(
                        "A value %s was yielded that could not be treated as a promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a\u000a".replace("%s", value) +
                        "From coroutine:\u000a" +
                        this._stack.split("\n").slice(1, -7).join("\n")
                    )
                );
                return;
            }
        }
        maybePromise = maybePromise._target();
        var bitField = maybePromise._bitField;
        ;
        if (((bitField & 50397184) === 0)) {
            this._yieldedPromise = maybePromise;
            maybePromise._proxy(this, null);
        } else if (((bitField & 33554432) !== 0)) {
            this._promiseFulfilled(maybePromise._value());
        } else if (((bitField & 16777216) !== 0)) {
            this._promiseRejected(maybePromise._reason());
        } else {
            this._promiseCancelled();
        }
    }
};

Promise.coroutine = function (generatorFunction, options) {
    if (typeof generatorFunction !== "function") {
        throw new TypeError("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var yieldHandler = Object(options).yieldHandler;
    var PromiseSpawn$ = PromiseSpawn;
    var stack = new Error().stack;
    return function () {
        var generator = generatorFunction.apply(this, arguments);
        var spawn = new PromiseSpawn$(undefined, undefined, yieldHandler,
                                      stack);
        var ret = spawn.promise();
        spawn._generator = generator;
        spawn._promiseFulfilled(undefined);
        return ret;
    };
};

Promise.coroutine.addYieldHandler = function(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    yieldHandlers.push(fn);
};

Promise.spawn = function (generatorFunction) {
    debug.deprecated("Promise.spawn()", "Promise.coroutine()");
    if (typeof generatorFunction !== "function") {
        return apiRejection("generatorFunction must be a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var spawn = new PromiseSpawn(generatorFunction, this);
    var ret = spawn.promise();
    spawn._run(Promise.spawn);
    return ret;
};
};

},{"./errors":12,"./util":36}],17:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, PromiseArray, tryConvertToPromise, INTERNAL) {
var util = _dereq_("./util");
var canEvaluate = util.canEvaluate;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var reject;

if (false) {
if (canEvaluate) {
    var thenCallback = function(i) {
        return new Function("value", "holder", "                             \n\
            'use strict';                                                    \n\
            holder.pIndex = value;                                           \n\
            holder.checkFulfillment(this);                                   \n\
            ".replace(/Index/g, i));
    };

    var promiseSetter = function(i) {
        return new Function("promise", "holder", "                           \n\
            'use strict';                                                    \n\
            holder.pIndex = promise;                                         \n\
            ".replace(/Index/g, i));
    };

    var generateHolderClass = function(total) {
        var props = new Array(total);
        for (var i = 0; i < props.length; ++i) {
            props[i] = "this.p" + (i+1);
        }
        var assignment = props.join(" = ") + " = null;";
        var cancellationCode= "var promise;\n" + props.map(function(prop) {
            return "                                                         \n\
                promise = " + prop + ";                                      \n\
                if (promise instanceof Promise) {                            \n\
                    promise.cancel();                                        \n\
                }                                                            \n\
            ";
        }).join("\n");
        var passedArguments = props.join(", ");
        var name = "Holder$" + total;


        var code = "return function(tryCatch, errorObj, Promise) {           \n\
            'use strict';                                                    \n\
            function [TheName](fn) {                                         \n\
                [TheProperties]                                              \n\
                this.fn = fn;                                                \n\
                this.now = 0;                                                \n\
            }                                                                \n\
            [TheName].prototype.checkFulfillment = function(promise) {       \n\
                var now = ++this.now;                                        \n\
                if (now === [TheTotal]) {                                    \n\
                    promise._pushContext();                                  \n\
                    var callback = this.fn;                                  \n\
                    var ret = tryCatch(callback)([ThePassedArguments]);      \n\
                    promise._popContext();                                   \n\
                    if (ret === errorObj) {                                  \n\
                        promise._rejectCallback(ret.e, false);               \n\
                    } else {                                                 \n\
                        promise._resolveCallback(ret);                       \n\
                    }                                                        \n\
                }                                                            \n\
            };                                                               \n\
                                                                             \n\
            [TheName].prototype._resultCancelled = function() {              \n\
                [CancellationCode]                                           \n\
            };                                                               \n\
                                                                             \n\
            return [TheName];                                                \n\
        }(tryCatch, errorObj, Promise);                                      \n\
        ";

        code = code.replace(/\[TheName\]/g, name)
            .replace(/\[TheTotal\]/g, total)
            .replace(/\[ThePassedArguments\]/g, passedArguments)
            .replace(/\[TheProperties\]/g, assignment)
            .replace(/\[CancellationCode\]/g, cancellationCode);

        return new Function("tryCatch", "errorObj", "Promise", code)
                           (tryCatch, errorObj, Promise);
    };

    var holderClasses = [];
    var thenCallbacks = [];
    var promiseSetters = [];

    for (var i = 0; i < 8; ++i) {
        holderClasses.push(generateHolderClass(i + 1));
        thenCallbacks.push(thenCallback(i + 1));
        promiseSetters.push(promiseSetter(i + 1));
    }

    reject = function (reason) {
        this._reject(reason);
    };
}}

Promise.join = function () {
    var last = arguments.length - 1;
    var fn;
    if (last > 0 && typeof arguments[last] === "function") {
        fn = arguments[last];
        if (false) {
            if (last <= 8 && canEvaluate) {
                var ret = new Promise(INTERNAL);
                ret._captureStackTrace();
                var HolderClass = holderClasses[last - 1];
                var holder = new HolderClass(fn);
                var callbacks = thenCallbacks;

                for (var i = 0; i < last; ++i) {
                    var maybePromise = tryConvertToPromise(arguments[i], ret);
                    if (maybePromise instanceof Promise) {
                        maybePromise = maybePromise._target();
                        var bitField = maybePromise._bitField;
                        ;
                        if (((bitField & 50397184) === 0)) {
                            maybePromise._then(callbacks[i], reject,
                                               undefined, ret, holder);
                            promiseSetters[i](maybePromise, holder);
                        } else if (((bitField & 33554432) !== 0)) {
                            callbacks[i].call(ret,
                                              maybePromise._value(), holder);
                        } else if (((bitField & 16777216) !== 0)) {
                            ret._reject(maybePromise._reason());
                        } else {
                            ret._cancel();
                        }
                    } else {
                        callbacks[i].call(ret, maybePromise, holder);
                    }
                }
                if (!ret._isFateSealed()) {
                    ret._setAsyncGuaranteed();
                    ret._setOnCancel(holder);
                }
                return ret;
            }
        }
    }
    var args = [].slice.call(arguments);;
    if (fn) args.pop();
    var ret = new PromiseArray(args).promise();
    return fn !== undefined ? ret.spread(fn) : ret;
};

};

},{"./util":36}],18:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          PromiseArray,
                          apiRejection,
                          tryConvertToPromise,
                          INTERNAL,
                          debug) {
var getDomain = Promise._getDomain;
var util = _dereq_("./util");
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;
var EMPTY_ARRAY = [];

function MappingPromiseArray(promises, fn, limit, _filter) {
    this.constructor$(promises);
    this._promise._captureStackTrace();
    var domain = getDomain();
    this._callback = domain === null ? fn : domain.bind(fn);
    this._preservedValues = _filter === INTERNAL
        ? new Array(this.length())
        : null;
    this._limit = limit;
    this._inFlight = 0;
    this._queue = limit >= 1 ? [] : EMPTY_ARRAY;
    this._init$(undefined, -2);
}
util.inherits(MappingPromiseArray, PromiseArray);

MappingPromiseArray.prototype._init = function () {};

MappingPromiseArray.prototype._promiseFulfilled = function (value, index) {
    var values = this._values;
    var length = this.length();
    var preservedValues = this._preservedValues;
    var limit = this._limit;

    if (index < 0) {
        index = (index * -1) - 1;
        values[index] = value;
        if (limit >= 1) {
            this._inFlight--;
            this._drainQueue();
            if (this._isResolved()) return true;
        }
    } else {
        if (limit >= 1 && this._inFlight >= limit) {
            values[index] = value;
            this._queue.push(index);
            return false;
        }
        if (preservedValues !== null) preservedValues[index] = value;

        var promise = this._promise;
        var callback = this._callback;
        var receiver = promise._boundValue();
        promise._pushContext();
        var ret = tryCatch(callback).call(receiver, value, index, length);
        var promiseCreated = promise._popContext();
        debug.checkForgottenReturns(
            ret,
            promiseCreated,
            preservedValues !== null ? "Promise.filter" : "Promise.map",
            promise
        );
        if (ret === errorObj) {
            this._reject(ret.e);
            return true;
        }

        var maybePromise = tryConvertToPromise(ret, this._promise);
        if (maybePromise instanceof Promise) {
            maybePromise = maybePromise._target();
            var bitField = maybePromise._bitField;
            ;
            if (((bitField & 50397184) === 0)) {
                if (limit >= 1) this._inFlight++;
                values[index] = maybePromise;
                maybePromise._proxy(this, (index + 1) * -1);
                return false;
            } else if (((bitField & 33554432) !== 0)) {
                ret = maybePromise._value();
            } else if (((bitField & 16777216) !== 0)) {
                this._reject(maybePromise._reason());
                return true;
            } else {
                this._cancel();
                return true;
            }
        }
        values[index] = ret;
    }
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= length) {
        if (preservedValues !== null) {
            this._filter(values, preservedValues);
        } else {
            this._resolve(values);
        }
        return true;
    }
    return false;
};

MappingPromiseArray.prototype._drainQueue = function () {
    var queue = this._queue;
    var limit = this._limit;
    var values = this._values;
    while (queue.length > 0 && this._inFlight < limit) {
        if (this._isResolved()) return;
        var index = queue.pop();
        this._promiseFulfilled(values[index], index);
    }
};

MappingPromiseArray.prototype._filter = function (booleans, values) {
    var len = values.length;
    var ret = new Array(len);
    var j = 0;
    for (var i = 0; i < len; ++i) {
        if (booleans[i]) ret[j++] = values[i];
    }
    ret.length = j;
    this._resolve(ret);
};

MappingPromiseArray.prototype.preservedValues = function () {
    return this._preservedValues;
};

function map(promises, fn, options, _filter) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }

    var limit = 0;
    if (options !== undefined) {
        if (typeof options === "object" && options !== null) {
            if (typeof options.concurrency !== "number") {
                return Promise.reject(
                    new TypeError("'concurrency' must be a number but it is " +
                                    util.classString(options.concurrency)));
            }
            limit = options.concurrency;
        } else {
            return Promise.reject(new TypeError(
                            "options argument must be an object but it is " +
                             util.classString(options)));
        }
    }
    limit = typeof limit === "number" &&
        isFinite(limit) && limit >= 1 ? limit : 0;
    return new MappingPromiseArray(promises, fn, limit, _filter).promise();
}

Promise.prototype.map = function (fn, options) {
    return map(this, fn, options, null);
};

Promise.map = function (promises, fn, options, _filter) {
    return map(promises, fn, options, _filter);
};


};

},{"./util":36}],19:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, INTERNAL, tryConvertToPromise, apiRejection, debug) {
var util = _dereq_("./util");
var tryCatch = util.tryCatch;

Promise.method = function (fn) {
    if (typeof fn !== "function") {
        throw new Promise.TypeError("expecting a function but got " + util.classString(fn));
    }
    return function () {
        var ret = new Promise(INTERNAL);
        ret._captureStackTrace();
        ret._pushContext();
        var value = tryCatch(fn).apply(this, arguments);
        var promiseCreated = ret._popContext();
        debug.checkForgottenReturns(
            value, promiseCreated, "Promise.method", ret);
        ret._resolveFromSyncValue(value);
        return ret;
    };
};

Promise.attempt = Promise["try"] = function (fn) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    ret._pushContext();
    var value;
    if (arguments.length > 1) {
        debug.deprecated("calling Promise.try with more than 1 argument");
        var arg = arguments[1];
        var ctx = arguments[2];
        value = util.isArray(arg) ? tryCatch(fn).apply(ctx, arg)
                                  : tryCatch(fn).call(ctx, arg);
    } else {
        value = tryCatch(fn)();
    }
    var promiseCreated = ret._popContext();
    debug.checkForgottenReturns(
        value, promiseCreated, "Promise.try", ret);
    ret._resolveFromSyncValue(value);
    return ret;
};

Promise.prototype._resolveFromSyncValue = function (value) {
    if (value === util.errorObj) {
        this._rejectCallback(value.e, false);
    } else {
        this._resolveCallback(value, true);
    }
};
};

},{"./util":36}],20:[function(_dereq_,module,exports){
"use strict";
var util = _dereq_("./util");
var maybeWrapAsError = util.maybeWrapAsError;
var errors = _dereq_("./errors");
var OperationalError = errors.OperationalError;
var es5 = _dereq_("./es5");

function isUntypedError(obj) {
    return obj instanceof Error &&
        es5.getPrototypeOf(obj) === Error.prototype;
}

var rErrorKey = /^(?:name|message|stack|cause)$/;
function wrapAsOperationalError(obj) {
    var ret;
    if (isUntypedError(obj)) {
        ret = new OperationalError(obj);
        ret.name = obj.name;
        ret.message = obj.message;
        ret.stack = obj.stack;
        var keys = es5.keys(obj);
        for (var i = 0; i < keys.length; ++i) {
            var key = keys[i];
            if (!rErrorKey.test(key)) {
                ret[key] = obj[key];
            }
        }
        return ret;
    }
    util.markAsOriginatingFromRejection(obj);
    return obj;
}

function nodebackForPromise(promise, multiArgs) {
    return function(err, value) {
        if (promise === null) return;
        if (err) {
            var wrapped = wrapAsOperationalError(maybeWrapAsError(err));
            promise._attachExtraTrace(wrapped);
            promise._reject(wrapped);
        } else if (!multiArgs) {
            promise._fulfill(value);
        } else {
            var args = [].slice.call(arguments, 1);;
            promise._fulfill(args);
        }
        promise = null;
    };
}

module.exports = nodebackForPromise;

},{"./errors":12,"./es5":13,"./util":36}],21:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
var util = _dereq_("./util");
var async = Promise._async;
var tryCatch = util.tryCatch;
var errorObj = util.errorObj;

function spreadAdapter(val, nodeback) {
    var promise = this;
    if (!util.isArray(val)) return successAdapter.call(promise, val, nodeback);
    var ret =
        tryCatch(nodeback).apply(promise._boundValue(), [null].concat(val));
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}

function successAdapter(val, nodeback) {
    var promise = this;
    var receiver = promise._boundValue();
    var ret = val === undefined
        ? tryCatch(nodeback).call(receiver, null)
        : tryCatch(nodeback).call(receiver, null, val);
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}
function errorAdapter(reason, nodeback) {
    var promise = this;
    if (!reason) {
        var newReason = new Error(reason + "");
        newReason.cause = reason;
        reason = newReason;
    }
    var ret = tryCatch(nodeback).call(promise._boundValue(), reason);
    if (ret === errorObj) {
        async.throwLater(ret.e);
    }
}

Promise.prototype.asCallback = Promise.prototype.nodeify = function (nodeback,
                                                                     options) {
    if (typeof nodeback == "function") {
        var adapter = successAdapter;
        if (options !== undefined && Object(options).spread) {
            adapter = spreadAdapter;
        }
        this._then(
            adapter,
            errorAdapter,
            undefined,
            this,
            nodeback
        );
    }
    return this;
};
};

},{"./util":36}],22:[function(_dereq_,module,exports){
"use strict";
module.exports = function() {
var makeSelfResolutionError = function () {
    return new TypeError("circular promise resolution chain\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
};
var reflectHandler = function() {
    return new Promise.PromiseInspection(this._target());
};
var apiRejection = function(msg) {
    return Promise.reject(new TypeError(msg));
};
function Proxyable() {}
var UNDEFINED_BINDING = {};
var util = _dereq_("./util");

var getDomain;
if (util.isNode) {
    getDomain = function() {
        var ret = process.domain;
        if (ret === undefined) ret = null;
        return ret;
    };
} else {
    getDomain = function() {
        return null;
    };
}
util.notEnumerableProp(Promise, "_getDomain", getDomain);

var es5 = _dereq_("./es5");
var Async = _dereq_("./async");
var async = new Async();
es5.defineProperty(Promise, "_async", {value: async});
var errors = _dereq_("./errors");
var TypeError = Promise.TypeError = errors.TypeError;
Promise.RangeError = errors.RangeError;
var CancellationError = Promise.CancellationError = errors.CancellationError;
Promise.TimeoutError = errors.TimeoutError;
Promise.OperationalError = errors.OperationalError;
Promise.RejectionError = errors.OperationalError;
Promise.AggregateError = errors.AggregateError;
var INTERNAL = function(){};
var APPLY = {};
var NEXT_FILTER = {};
var tryConvertToPromise = _dereq_("./thenables")(Promise, INTERNAL);
var PromiseArray =
    _dereq_("./promise_array")(Promise, INTERNAL,
                               tryConvertToPromise, apiRejection, Proxyable);
var Context = _dereq_("./context")(Promise);
 /*jshint unused:false*/
var createContext = Context.create;
var debug = _dereq_("./debuggability")(Promise, Context);
var CapturedTrace = debug.CapturedTrace;
var PassThroughHandlerContext =
    _dereq_("./finally")(Promise, tryConvertToPromise);
var catchFilter = _dereq_("./catch_filter")(NEXT_FILTER);
var nodebackForPromise = _dereq_("./nodeback");
var errorObj = util.errorObj;
var tryCatch = util.tryCatch;
function check(self, executor) {
    if (typeof executor !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(executor));
    }
    if (self.constructor !== Promise) {
        throw new TypeError("the promise constructor cannot be invoked directly\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
}

function Promise(executor) {
    this._bitField = 0;
    this._fulfillmentHandler0 = undefined;
    this._rejectionHandler0 = undefined;
    this._promise0 = undefined;
    this._receiver0 = undefined;
    if (executor !== INTERNAL) {
        check(this, executor);
        this._resolveFromExecutor(executor);
    }
    this._promiseCreated();
    this._fireEvent("promiseCreated", this);
}

Promise.prototype.toString = function () {
    return "[object Promise]";
};

Promise.prototype.caught = Promise.prototype["catch"] = function (fn) {
    var len = arguments.length;
    if (len > 1) {
        var catchInstances = new Array(len - 1),
            j = 0, i;
        for (i = 0; i < len - 1; ++i) {
            var item = arguments[i];
            if (util.isObject(item)) {
                catchInstances[j++] = item;
            } else {
                return apiRejection("expecting an object but got " + util.classString(item));
            }
        }
        catchInstances.length = j;
        fn = arguments[i];
        return this.then(undefined, catchFilter(catchInstances, fn, this));
    }
    return this.then(undefined, fn);
};

Promise.prototype.reflect = function () {
    return this._then(reflectHandler,
        reflectHandler, undefined, this, undefined);
};

Promise.prototype.then = function (didFulfill, didReject) {
    if (debug.warnings() && arguments.length > 0 &&
        typeof didFulfill !== "function" &&
        typeof didReject !== "function") {
        var msg = ".then() only accepts functions but was passed: " +
                util.classString(didFulfill);
        if (arguments.length > 1) {
            msg += ", " + util.classString(didReject);
        }
        this._warn(msg);
    }
    return this._then(didFulfill, didReject, undefined, undefined, undefined);
};

Promise.prototype.done = function (didFulfill, didReject) {
    var promise =
        this._then(didFulfill, didReject, undefined, undefined, undefined);
    promise._setIsFinal();
};

Promise.prototype.spread = function (fn) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    return this.all()._then(fn, undefined, undefined, APPLY, undefined);
};

Promise.prototype.toJSON = function () {
    var ret = {
        isFulfilled: false,
        isRejected: false,
        fulfillmentValue: undefined,
        rejectionReason: undefined
    };
    if (this.isFulfilled()) {
        ret.fulfillmentValue = this.value();
        ret.isFulfilled = true;
    } else if (this.isRejected()) {
        ret.rejectionReason = this.reason();
        ret.isRejected = true;
    }
    return ret;
};

Promise.prototype.all = function () {
    if (arguments.length > 0) {
        this._warn(".all() was passed arguments but it does not take any");
    }
    return new PromiseArray(this).promise();
};

Promise.prototype.error = function (fn) {
    return this.caught(util.originatesFromRejection, fn);
};

Promise.getNewLibraryCopy = module.exports;

Promise.is = function (val) {
    return val instanceof Promise;
};

Promise.fromNode = Promise.fromCallback = function(fn) {
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    var multiArgs = arguments.length > 1 ? !!Object(arguments[1]).multiArgs
                                         : false;
    var result = tryCatch(fn)(nodebackForPromise(ret, multiArgs));
    if (result === errorObj) {
        ret._rejectCallback(result.e, true);
    }
    if (!ret._isFateSealed()) ret._setAsyncGuaranteed();
    return ret;
};

Promise.all = function (promises) {
    return new PromiseArray(promises).promise();
};

Promise.cast = function (obj) {
    var ret = tryConvertToPromise(obj);
    if (!(ret instanceof Promise)) {
        ret = new Promise(INTERNAL);
        ret._captureStackTrace();
        ret._setFulfilled();
        ret._rejectionHandler0 = obj;
    }
    return ret;
};

Promise.resolve = Promise.fulfilled = Promise.cast;

Promise.reject = Promise.rejected = function (reason) {
    var ret = new Promise(INTERNAL);
    ret._captureStackTrace();
    ret._rejectCallback(reason, true);
    return ret;
};

Promise.setScheduler = function(fn) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    return async.setScheduler(fn);
};

Promise.prototype._then = function (
    didFulfill,
    didReject,
    _,    receiver,
    internalData
) {
    var haveInternalData = internalData !== undefined;
    var promise = haveInternalData ? internalData : new Promise(INTERNAL);
    var target = this._target();
    var bitField = target._bitField;

    if (!haveInternalData) {
        promise._propagateFrom(this, 3);
        promise._captureStackTrace();
        if (receiver === undefined &&
            ((this._bitField & 2097152) !== 0)) {
            if (!((bitField & 50397184) === 0)) {
                receiver = this._boundValue();
            } else {
                receiver = target === this ? undefined : this._boundTo;
            }
        }
        this._fireEvent("promiseChained", this, promise);
    }

    var domain = getDomain();
    if (!((bitField & 50397184) === 0)) {
        var handler, value, settler = target._settlePromiseCtx;
        if (((bitField & 33554432) !== 0)) {
            value = target._rejectionHandler0;
            handler = didFulfill;
        } else if (((bitField & 16777216) !== 0)) {
            value = target._fulfillmentHandler0;
            handler = didReject;
            target._unsetRejectionIsUnhandled();
        } else {
            settler = target._settlePromiseLateCancellationObserver;
            value = new CancellationError("late cancellation observer");
            target._attachExtraTrace(value);
            handler = didReject;
        }

        async.invoke(settler, target, {
            handler: domain === null ? handler
                : (typeof handler === "function" && domain.bind(handler)),
            promise: promise,
            receiver: receiver,
            value: value
        });
    } else {
        target._addCallbacks(didFulfill, didReject, promise, receiver, domain);
    }

    return promise;
};

Promise.prototype._length = function () {
    return this._bitField & 65535;
};

Promise.prototype._isFateSealed = function () {
    return (this._bitField & 117506048) !== 0;
};

Promise.prototype._isFollowing = function () {
    return (this._bitField & 67108864) === 67108864;
};

Promise.prototype._setLength = function (len) {
    this._bitField = (this._bitField & -65536) |
        (len & 65535);
};

Promise.prototype._setFulfilled = function () {
    this._bitField = this._bitField | 33554432;
    this._fireEvent("promiseFulfilled", this);
};

Promise.prototype._setRejected = function () {
    this._bitField = this._bitField | 16777216;
    this._fireEvent("promiseRejected", this);
};

Promise.prototype._setFollowing = function () {
    this._bitField = this._bitField | 67108864;
    this._fireEvent("promiseResolved", this);
};

Promise.prototype._setIsFinal = function () {
    this._bitField = this._bitField | 4194304;
};

Promise.prototype._isFinal = function () {
    return (this._bitField & 4194304) > 0;
};

Promise.prototype._unsetCancelled = function() {
    this._bitField = this._bitField & (~65536);
};

Promise.prototype._setCancelled = function() {
    this._bitField = this._bitField | 65536;
    this._fireEvent("promiseCancelled", this);
};

Promise.prototype._setAsyncGuaranteed = function() {
    if (async.hasCustomScheduler()) return;
    this._bitField = this._bitField | 134217728;
};

Promise.prototype._receiverAt = function (index) {
    var ret = index === 0 ? this._receiver0 : this[
            index * 4 - 4 + 3];
    if (ret === UNDEFINED_BINDING) {
        return undefined;
    } else if (ret === undefined && this._isBound()) {
        return this._boundValue();
    }
    return ret;
};

Promise.prototype._promiseAt = function (index) {
    return this[
            index * 4 - 4 + 2];
};

Promise.prototype._fulfillmentHandlerAt = function (index) {
    return this[
            index * 4 - 4 + 0];
};

Promise.prototype._rejectionHandlerAt = function (index) {
    return this[
            index * 4 - 4 + 1];
};

Promise.prototype._boundValue = function() {};

Promise.prototype._migrateCallback0 = function (follower) {
    var bitField = follower._bitField;
    var fulfill = follower._fulfillmentHandler0;
    var reject = follower._rejectionHandler0;
    var promise = follower._promise0;
    var receiver = follower._receiverAt(0);
    if (receiver === undefined) receiver = UNDEFINED_BINDING;
    this._addCallbacks(fulfill, reject, promise, receiver, null);
};

Promise.prototype._migrateCallbackAt = function (follower, index) {
    var fulfill = follower._fulfillmentHandlerAt(index);
    var reject = follower._rejectionHandlerAt(index);
    var promise = follower._promiseAt(index);
    var receiver = follower._receiverAt(index);
    if (receiver === undefined) receiver = UNDEFINED_BINDING;
    this._addCallbacks(fulfill, reject, promise, receiver, null);
};

Promise.prototype._addCallbacks = function (
    fulfill,
    reject,
    promise,
    receiver,
    domain
) {
    var index = this._length();

    if (index >= 65535 - 4) {
        index = 0;
        this._setLength(0);
    }

    if (index === 0) {
        this._promise0 = promise;
        this._receiver0 = receiver;
        if (typeof fulfill === "function") {
            this._fulfillmentHandler0 =
                domain === null ? fulfill : domain.bind(fulfill);
        }
        if (typeof reject === "function") {
            this._rejectionHandler0 =
                domain === null ? reject : domain.bind(reject);
        }
    } else {
        var base = index * 4 - 4;
        this[base + 2] = promise;
        this[base + 3] = receiver;
        if (typeof fulfill === "function") {
            this[base + 0] =
                domain === null ? fulfill : domain.bind(fulfill);
        }
        if (typeof reject === "function") {
            this[base + 1] =
                domain === null ? reject : domain.bind(reject);
        }
    }
    this._setLength(index + 1);
    return index;
};

Promise.prototype._proxy = function (proxyable, arg) {
    this._addCallbacks(undefined, undefined, arg, proxyable, null);
};

Promise.prototype._resolveCallback = function(value, shouldBind) {
    if (((this._bitField & 117506048) !== 0)) return;
    if (value === this)
        return this._rejectCallback(makeSelfResolutionError(), false);
    var maybePromise = tryConvertToPromise(value, this);
    if (!(maybePromise instanceof Promise)) return this._fulfill(value);

    if (shouldBind) this._propagateFrom(maybePromise, 2);

    var promise = maybePromise._target();

    if (promise === this) {
        this._reject(makeSelfResolutionError());
        return;
    }

    var bitField = promise._bitField;
    if (((bitField & 50397184) === 0)) {
        var len = this._length();
        if (len > 0) promise._migrateCallback0(this);
        for (var i = 1; i < len; ++i) {
            promise._migrateCallbackAt(this, i);
        }
        this._setFollowing();
        this._setLength(0);
        this._setFollowee(promise);
    } else if (((bitField & 33554432) !== 0)) {
        this._fulfill(promise._value());
    } else if (((bitField & 16777216) !== 0)) {
        this._reject(promise._reason());
    } else {
        var reason = new CancellationError("late cancellation observer");
        promise._attachExtraTrace(reason);
        this._reject(reason);
    }
};

Promise.prototype._rejectCallback =
function(reason, synchronous, ignoreNonErrorWarnings) {
    var trace = util.ensureErrorObject(reason);
    var hasStack = trace === reason;
    if (!hasStack && !ignoreNonErrorWarnings && debug.warnings()) {
        var message = "a promise was rejected with a non-error: " +
            util.classString(reason);
        this._warn(message, true);
    }
    this._attachExtraTrace(trace, synchronous ? hasStack : false);
    this._reject(reason);
};

Promise.prototype._resolveFromExecutor = function (executor) {
    var promise = this;
    this._captureStackTrace();
    this._pushContext();
    var synchronous = true;
    var r = this._execute(executor, function(value) {
        promise._resolveCallback(value);
    }, function (reason) {
        promise._rejectCallback(reason, synchronous);
    });
    synchronous = false;
    this._popContext();

    if (r !== undefined) {
        promise._rejectCallback(r, true);
    }
};

Promise.prototype._settlePromiseFromHandler = function (
    handler, receiver, value, promise
) {
    var bitField = promise._bitField;
    if (((bitField & 65536) !== 0)) return;
    promise._pushContext();
    var x;
    if (receiver === APPLY) {
        if (!value || typeof value.length !== "number") {
            x = errorObj;
            x.e = new TypeError("cannot .spread() a non-array: " +
                                    util.classString(value));
        } else {
            x = tryCatch(handler).apply(this._boundValue(), value);
        }
    } else {
        x = tryCatch(handler).call(receiver, value);
    }
    var promiseCreated = promise._popContext();
    bitField = promise._bitField;
    if (((bitField & 65536) !== 0)) return;

    if (x === NEXT_FILTER) {
        promise._reject(value);
    } else if (x === errorObj) {
        promise._rejectCallback(x.e, false);
    } else {
        debug.checkForgottenReturns(x, promiseCreated, "",  promise, this);
        promise._resolveCallback(x);
    }
};

Promise.prototype._target = function() {
    var ret = this;
    while (ret._isFollowing()) ret = ret._followee();
    return ret;
};

Promise.prototype._followee = function() {
    return this._rejectionHandler0;
};

Promise.prototype._setFollowee = function(promise) {
    this._rejectionHandler0 = promise;
};

Promise.prototype._settlePromise = function(promise, handler, receiver, value) {
    var isPromise = promise instanceof Promise;
    var bitField = this._bitField;
    var asyncGuaranteed = ((bitField & 134217728) !== 0);
    if (((bitField & 65536) !== 0)) {
        if (isPromise) promise._invokeInternalOnCancel();

        if (receiver instanceof PassThroughHandlerContext &&
            receiver.isFinallyHandler()) {
            receiver.cancelPromise = promise;
            if (tryCatch(handler).call(receiver, value) === errorObj) {
                promise._reject(errorObj.e);
            }
        } else if (handler === reflectHandler) {
            promise._fulfill(reflectHandler.call(receiver));
        } else if (receiver instanceof Proxyable) {
            receiver._promiseCancelled(promise);
        } else if (isPromise || promise instanceof PromiseArray) {
            promise._cancel();
        } else {
            receiver.cancel();
        }
    } else if (typeof handler === "function") {
        if (!isPromise) {
            handler.call(receiver, value, promise);
        } else {
            if (asyncGuaranteed) promise._setAsyncGuaranteed();
            this._settlePromiseFromHandler(handler, receiver, value, promise);
        }
    } else if (receiver instanceof Proxyable) {
        if (!receiver._isResolved()) {
            if (((bitField & 33554432) !== 0)) {
                receiver._promiseFulfilled(value, promise);
            } else {
                receiver._promiseRejected(value, promise);
            }
        }
    } else if (isPromise) {
        if (asyncGuaranteed) promise._setAsyncGuaranteed();
        if (((bitField & 33554432) !== 0)) {
            promise._fulfill(value);
        } else {
            promise._reject(value);
        }
    }
};

Promise.prototype._settlePromiseLateCancellationObserver = function(ctx) {
    var handler = ctx.handler;
    var promise = ctx.promise;
    var receiver = ctx.receiver;
    var value = ctx.value;
    if (typeof handler === "function") {
        if (!(promise instanceof Promise)) {
            handler.call(receiver, value, promise);
        } else {
            this._settlePromiseFromHandler(handler, receiver, value, promise);
        }
    } else if (promise instanceof Promise) {
        promise._reject(value);
    }
};

Promise.prototype._settlePromiseCtx = function(ctx) {
    this._settlePromise(ctx.promise, ctx.handler, ctx.receiver, ctx.value);
};

Promise.prototype._settlePromise0 = function(handler, value, bitField) {
    var promise = this._promise0;
    var receiver = this._receiverAt(0);
    this._promise0 = undefined;
    this._receiver0 = undefined;
    this._settlePromise(promise, handler, receiver, value);
};

Promise.prototype._clearCallbackDataAtIndex = function(index) {
    var base = index * 4 - 4;
    this[base + 2] =
    this[base + 3] =
    this[base + 0] =
    this[base + 1] = undefined;
};

Promise.prototype._fulfill = function (value) {
    var bitField = this._bitField;
    if (((bitField & 117506048) >>> 16)) return;
    if (value === this) {
        var err = makeSelfResolutionError();
        this._attachExtraTrace(err);
        return this._reject(err);
    }
    this._setFulfilled();
    this._rejectionHandler0 = value;

    if ((bitField & 65535) > 0) {
        if (((bitField & 134217728) !== 0)) {
            this._settlePromises();
        } else {
            async.settlePromises(this);
        }
    }
};

Promise.prototype._reject = function (reason) {
    var bitField = this._bitField;
    if (((bitField & 117506048) >>> 16)) return;
    this._setRejected();
    this._fulfillmentHandler0 = reason;

    if (this._isFinal()) {
        return async.fatalError(reason, util.isNode);
    }

    if ((bitField & 65535) > 0) {
        async.settlePromises(this);
    } else {
        this._ensurePossibleRejectionHandled();
    }
};

Promise.prototype._fulfillPromises = function (len, value) {
    for (var i = 1; i < len; i++) {
        var handler = this._fulfillmentHandlerAt(i);
        var promise = this._promiseAt(i);
        var receiver = this._receiverAt(i);
        this._clearCallbackDataAtIndex(i);
        this._settlePromise(promise, handler, receiver, value);
    }
};

Promise.prototype._rejectPromises = function (len, reason) {
    for (var i = 1; i < len; i++) {
        var handler = this._rejectionHandlerAt(i);
        var promise = this._promiseAt(i);
        var receiver = this._receiverAt(i);
        this._clearCallbackDataAtIndex(i);
        this._settlePromise(promise, handler, receiver, reason);
    }
};

Promise.prototype._settlePromises = function () {
    var bitField = this._bitField;
    var len = (bitField & 65535);

    if (len > 0) {
        if (((bitField & 16842752) !== 0)) {
            var reason = this._fulfillmentHandler0;
            this._settlePromise0(this._rejectionHandler0, reason, bitField);
            this._rejectPromises(len, reason);
        } else {
            var value = this._rejectionHandler0;
            this._settlePromise0(this._fulfillmentHandler0, value, bitField);
            this._fulfillPromises(len, value);
        }
        this._setLength(0);
    }
    this._clearCancellationData();
};

Promise.prototype._settledValue = function() {
    var bitField = this._bitField;
    if (((bitField & 33554432) !== 0)) {
        return this._rejectionHandler0;
    } else if (((bitField & 16777216) !== 0)) {
        return this._fulfillmentHandler0;
    }
};

function deferResolve(v) {this.promise._resolveCallback(v);}
function deferReject(v) {this.promise._rejectCallback(v, false);}

Promise.defer = Promise.pending = function() {
    debug.deprecated("Promise.defer", "new Promise");
    var promise = new Promise(INTERNAL);
    return {
        promise: promise,
        resolve: deferResolve,
        reject: deferReject
    };
};

util.notEnumerableProp(Promise,
                       "_makeSelfResolutionError",
                       makeSelfResolutionError);

_dereq_("./method")(Promise, INTERNAL, tryConvertToPromise, apiRejection,
    debug);
_dereq_("./bind")(Promise, INTERNAL, tryConvertToPromise, debug);
_dereq_("./cancel")(Promise, PromiseArray, apiRejection, debug);
_dereq_("./direct_resolve")(Promise);
_dereq_("./synchronous_inspection")(Promise);
_dereq_("./join")(
    Promise, PromiseArray, tryConvertToPromise, INTERNAL, debug);
Promise.Promise = Promise;
Promise.version = "3.4.0";
_dereq_('./map.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
_dereq_('./call_get.js')(Promise);
_dereq_('./using.js')(Promise, apiRejection, tryConvertToPromise, createContext, INTERNAL, debug);
_dereq_('./timers.js')(Promise, INTERNAL, debug);
_dereq_('./generators.js')(Promise, apiRejection, INTERNAL, tryConvertToPromise, Proxyable, debug);
_dereq_('./nodeify.js')(Promise);
_dereq_('./promisify.js')(Promise, INTERNAL);
_dereq_('./props.js')(Promise, PromiseArray, tryConvertToPromise, apiRejection);
_dereq_('./race.js')(Promise, INTERNAL, tryConvertToPromise, apiRejection);
_dereq_('./reduce.js')(Promise, PromiseArray, apiRejection, tryConvertToPromise, INTERNAL, debug);
_dereq_('./settle.js')(Promise, PromiseArray, debug);
_dereq_('./some.js')(Promise, PromiseArray, apiRejection);
_dereq_('./filter.js')(Promise, INTERNAL);
_dereq_('./each.js')(Promise, INTERNAL);
_dereq_('./any.js')(Promise);
                                                         
    util.toFastProperties(Promise);                                          
    util.toFastProperties(Promise.prototype);                                
    function fillTypes(value) {                                              
        var p = new Promise(INTERNAL);                                       
        p._fulfillmentHandler0 = value;                                      
        p._rejectionHandler0 = value;                                        
        p._promise0 = value;                                                 
        p._receiver0 = value;                                                
    }                                                                        
    // Complete slack tracking, opt out of field-type tracking and           
    // stabilize map                                                         
    fillTypes({a: 1});                                                       
    fillTypes({b: 2});                                                       
    fillTypes({c: 3});                                                       
    fillTypes(1);                                                            
    fillTypes(function(){});                                                 
    fillTypes(undefined);                                                    
    fillTypes(false);                                                        
    fillTypes(new Promise(INTERNAL));                                        
    debug.setBounds(Async.firstLineError, util.lastLineError);               
    return Promise;                                                          

};

},{"./any.js":1,"./async":2,"./bind":3,"./call_get.js":5,"./cancel":6,"./catch_filter":7,"./context":8,"./debuggability":9,"./direct_resolve":10,"./each.js":11,"./errors":12,"./es5":13,"./filter.js":14,"./finally":15,"./generators.js":16,"./join":17,"./map.js":18,"./method":19,"./nodeback":20,"./nodeify.js":21,"./promise_array":23,"./promisify.js":24,"./props.js":25,"./race.js":27,"./reduce.js":28,"./settle.js":30,"./some.js":31,"./synchronous_inspection":32,"./thenables":33,"./timers.js":34,"./using.js":35,"./util":36}],23:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, tryConvertToPromise,
    apiRejection, Proxyable) {
var util = _dereq_("./util");
var isArray = util.isArray;

function toResolutionValue(val) {
    switch(val) {
    case -2: return [];
    case -3: return {};
    }
}

function PromiseArray(values) {
    var promise = this._promise = new Promise(INTERNAL);
    if (values instanceof Promise) {
        promise._propagateFrom(values, 3);
    }
    promise._setOnCancel(this);
    this._values = values;
    this._length = 0;
    this._totalResolved = 0;
    this._init(undefined, -2);
}
util.inherits(PromiseArray, Proxyable);

PromiseArray.prototype.length = function () {
    return this._length;
};

PromiseArray.prototype.promise = function () {
    return this._promise;
};

PromiseArray.prototype._init = function init(_, resolveValueIfEmpty) {
    var values = tryConvertToPromise(this._values, this._promise);
    if (values instanceof Promise) {
        values = values._target();
        var bitField = values._bitField;
        ;
        this._values = values;

        if (((bitField & 50397184) === 0)) {
            this._promise._setAsyncGuaranteed();
            return values._then(
                init,
                this._reject,
                undefined,
                this,
                resolveValueIfEmpty
           );
        } else if (((bitField & 33554432) !== 0)) {
            values = values._value();
        } else if (((bitField & 16777216) !== 0)) {
            return this._reject(values._reason());
        } else {
            return this._cancel();
        }
    }
    values = util.asArray(values);
    if (values === null) {
        var err = apiRejection(
            "expecting an array or an iterable object but got " + util.classString(values)).reason();
        this._promise._rejectCallback(err, false);
        return;
    }

    if (values.length === 0) {
        if (resolveValueIfEmpty === -5) {
            this._resolveEmptyArray();
        }
        else {
            this._resolve(toResolutionValue(resolveValueIfEmpty));
        }
        return;
    }
    this._iterate(values);
};

PromiseArray.prototype._iterate = function(values) {
    var len = this.getActualLength(values.length);
    this._length = len;
    this._values = this.shouldCopyValues() ? new Array(len) : this._values;
    var result = this._promise;
    var isResolved = false;
    var bitField = null;
    for (var i = 0; i < len; ++i) {
        var maybePromise = tryConvertToPromise(values[i], result);

        if (maybePromise instanceof Promise) {
            maybePromise = maybePromise._target();
            bitField = maybePromise._bitField;
        } else {
            bitField = null;
        }

        if (isResolved) {
            if (bitField !== null) {
                maybePromise.suppressUnhandledRejections();
            }
        } else if (bitField !== null) {
            if (((bitField & 50397184) === 0)) {
                maybePromise._proxy(this, i);
                this._values[i] = maybePromise;
            } else if (((bitField & 33554432) !== 0)) {
                isResolved = this._promiseFulfilled(maybePromise._value(), i);
            } else if (((bitField & 16777216) !== 0)) {
                isResolved = this._promiseRejected(maybePromise._reason(), i);
            } else {
                isResolved = this._promiseCancelled(i);
            }
        } else {
            isResolved = this._promiseFulfilled(maybePromise, i);
        }
    }
    if (!isResolved) result._setAsyncGuaranteed();
};

PromiseArray.prototype._isResolved = function () {
    return this._values === null;
};

PromiseArray.prototype._resolve = function (value) {
    this._values = null;
    this._promise._fulfill(value);
};

PromiseArray.prototype._cancel = function() {
    if (this._isResolved() || !this._promise.isCancellable()) return;
    this._values = null;
    this._promise._cancel();
};

PromiseArray.prototype._reject = function (reason) {
    this._values = null;
    this._promise._rejectCallback(reason, false);
};

PromiseArray.prototype._promiseFulfilled = function (value, index) {
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
        return true;
    }
    return false;
};

PromiseArray.prototype._promiseCancelled = function() {
    this._cancel();
    return true;
};

PromiseArray.prototype._promiseRejected = function (reason) {
    this._totalResolved++;
    this._reject(reason);
    return true;
};

PromiseArray.prototype._resultCancelled = function() {
    if (this._isResolved()) return;
    var values = this._values;
    this._cancel();
    if (values instanceof Promise) {
        values.cancel();
    } else {
        for (var i = 0; i < values.length; ++i) {
            if (values[i] instanceof Promise) {
                values[i].cancel();
            }
        }
    }
};

PromiseArray.prototype.shouldCopyValues = function () {
    return true;
};

PromiseArray.prototype.getActualLength = function (len) {
    return len;
};

return PromiseArray;
};

},{"./util":36}],24:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var THIS = {};
var util = _dereq_("./util");
var nodebackForPromise = _dereq_("./nodeback");
var withAppended = util.withAppended;
var maybeWrapAsError = util.maybeWrapAsError;
var canEvaluate = util.canEvaluate;
var TypeError = _dereq_("./errors").TypeError;
var defaultSuffix = "Async";
var defaultPromisified = {__isPromisified__: true};
var noCopyProps = [
    "arity",    "length",
    "name",
    "arguments",
    "caller",
    "callee",
    "prototype",
    "__isPromisified__"
];
var noCopyPropsPattern = new RegExp("^(?:" + noCopyProps.join("|") + ")$");

var defaultFilter = function(name) {
    return util.isIdentifier(name) &&
        name.charAt(0) !== "_" &&
        name !== "constructor";
};

function propsFilter(key) {
    return !noCopyPropsPattern.test(key);
}

function isPromisified(fn) {
    try {
        return fn.__isPromisified__ === true;
    }
    catch (e) {
        return false;
    }
}

function hasPromisified(obj, key, suffix) {
    var val = util.getDataPropertyOrDefault(obj, key + suffix,
                                            defaultPromisified);
    return val ? isPromisified(val) : false;
}
function checkValid(ret, suffix, suffixRegexp) {
    for (var i = 0; i < ret.length; i += 2) {
        var key = ret[i];
        if (suffixRegexp.test(key)) {
            var keyWithoutAsyncSuffix = key.replace(suffixRegexp, "");
            for (var j = 0; j < ret.length; j += 2) {
                if (ret[j] === keyWithoutAsyncSuffix) {
                    throw new TypeError("Cannot promisify an API that has normal methods with '%s'-suffix\u000a\u000a    See http://goo.gl/MqrFmX\u000a"
                        .replace("%s", suffix));
                }
            }
        }
    }
}

function promisifiableMethods(obj, suffix, suffixRegexp, filter) {
    var keys = util.inheritedDataKeys(obj);
    var ret = [];
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        var value = obj[key];
        var passesDefaultFilter = filter === defaultFilter
            ? true : defaultFilter(key, value, obj);
        if (typeof value === "function" &&
            !isPromisified(value) &&
            !hasPromisified(obj, key, suffix) &&
            filter(key, value, obj, passesDefaultFilter)) {
            ret.push(key, value);
        }
    }
    checkValid(ret, suffix, suffixRegexp);
    return ret;
}

var escapeIdentRegex = function(str) {
    return str.replace(/([$])/, "\\$");
};

var makeNodePromisifiedEval;
if (false) {
var switchCaseArgumentOrder = function(likelyArgumentCount) {
    var ret = [likelyArgumentCount];
    var min = Math.max(0, likelyArgumentCount - 1 - 3);
    for(var i = likelyArgumentCount - 1; i >= min; --i) {
        ret.push(i);
    }
    for(var i = likelyArgumentCount + 1; i <= 3; ++i) {
        ret.push(i);
    }
    return ret;
};

var argumentSequence = function(argumentCount) {
    return util.filledRange(argumentCount, "_arg", "");
};

var parameterDeclaration = function(parameterCount) {
    return util.filledRange(
        Math.max(parameterCount, 3), "_arg", "");
};

var parameterCount = function(fn) {
    if (typeof fn.length === "number") {
        return Math.max(Math.min(fn.length, 1023 + 1), 0);
    }
    return 0;
};

makeNodePromisifiedEval =
function(callback, receiver, originalName, fn, _, multiArgs) {
    var newParameterCount = Math.max(0, parameterCount(fn) - 1);
    var argumentOrder = switchCaseArgumentOrder(newParameterCount);
    var shouldProxyThis = typeof callback === "string" || receiver === THIS;

    function generateCallForArgumentCount(count) {
        var args = argumentSequence(count).join(", ");
        var comma = count > 0 ? ", " : "";
        var ret;
        if (shouldProxyThis) {
            ret = "ret = callback.call(this, {{args}}, nodeback); break;\n";
        } else {
            ret = receiver === undefined
                ? "ret = callback({{args}}, nodeback); break;\n"
                : "ret = callback.call(receiver, {{args}}, nodeback); break;\n";
        }
        return ret.replace("{{args}}", args).replace(", ", comma);
    }

    function generateArgumentSwitchCase() {
        var ret = "";
        for (var i = 0; i < argumentOrder.length; ++i) {
            ret += "case " + argumentOrder[i] +":" +
                generateCallForArgumentCount(argumentOrder[i]);
        }

        ret += "                                                             \n\
        default:                                                             \n\
            var args = new Array(len + 1);                                   \n\
            var i = 0;                                                       \n\
            for (var i = 0; i < len; ++i) {                                  \n\
               args[i] = arguments[i];                                       \n\
            }                                                                \n\
            args[i] = nodeback;                                              \n\
            [CodeForCall]                                                    \n\
            break;                                                           \n\
        ".replace("[CodeForCall]", (shouldProxyThis
                                ? "ret = callback.apply(this, args);\n"
                                : "ret = callback.apply(receiver, args);\n"));
        return ret;
    }

    var getFunctionCode = typeof callback === "string"
                                ? ("this != null ? this['"+callback+"'] : fn")
                                : "fn";
    var body = "'use strict';                                                \n\
        var ret = function (Parameters) {                                    \n\
            'use strict';                                                    \n\
            var len = arguments.length;                                      \n\
            var promise = new Promise(INTERNAL);                             \n\
            promise._captureStackTrace();                                    \n\
            var nodeback = nodebackForPromise(promise, " + multiArgs + ");   \n\
            var ret;                                                         \n\
            var callback = tryCatch([GetFunctionCode]);                      \n\
            switch(len) {                                                    \n\
                [CodeForSwitchCase]                                          \n\
            }                                                                \n\
            if (ret === errorObj) {                                          \n\
                promise._rejectCallback(maybeWrapAsError(ret.e), true, true);\n\
            }                                                                \n\
            if (!promise._isFateSealed()) promise._setAsyncGuaranteed();     \n\
            return promise;                                                  \n\
        };                                                                   \n\
        notEnumerableProp(ret, '__isPromisified__', true);                   \n\
        return ret;                                                          \n\
    ".replace("[CodeForSwitchCase]", generateArgumentSwitchCase())
        .replace("[GetFunctionCode]", getFunctionCode);
    body = body.replace("Parameters", parameterDeclaration(newParameterCount));
    return new Function("Promise",
                        "fn",
                        "receiver",
                        "withAppended",
                        "maybeWrapAsError",
                        "nodebackForPromise",
                        "tryCatch",
                        "errorObj",
                        "notEnumerableProp",
                        "INTERNAL",
                        body)(
                    Promise,
                    fn,
                    receiver,
                    withAppended,
                    maybeWrapAsError,
                    nodebackForPromise,
                    util.tryCatch,
                    util.errorObj,
                    util.notEnumerableProp,
                    INTERNAL);
};
}

function makeNodePromisifiedClosure(callback, receiver, _, fn, __, multiArgs) {
    var defaultThis = (function() {return this;})();
    var method = callback;
    if (typeof method === "string") {
        callback = fn;
    }
    function promisified() {
        var _receiver = receiver;
        if (receiver === THIS) _receiver = this;
        var promise = new Promise(INTERNAL);
        promise._captureStackTrace();
        var cb = typeof method === "string" && this !== defaultThis
            ? this[method] : callback;
        var fn = nodebackForPromise(promise, multiArgs);
        try {
            cb.apply(_receiver, withAppended(arguments, fn));
        } catch(e) {
            promise._rejectCallback(maybeWrapAsError(e), true, true);
        }
        if (!promise._isFateSealed()) promise._setAsyncGuaranteed();
        return promise;
    }
    util.notEnumerableProp(promisified, "__isPromisified__", true);
    return promisified;
}

var makeNodePromisified = canEvaluate
    ? makeNodePromisifiedEval
    : makeNodePromisifiedClosure;

function promisifyAll(obj, suffix, filter, promisifier, multiArgs) {
    var suffixRegexp = new RegExp(escapeIdentRegex(suffix) + "$");
    var methods =
        promisifiableMethods(obj, suffix, suffixRegexp, filter);

    for (var i = 0, len = methods.length; i < len; i+= 2) {
        var key = methods[i];
        var fn = methods[i+1];
        var promisifiedKey = key + suffix;
        if (promisifier === makeNodePromisified) {
            obj[promisifiedKey] =
                makeNodePromisified(key, THIS, key, fn, suffix, multiArgs);
        } else {
            var promisified = promisifier(fn, function() {
                return makeNodePromisified(key, THIS, key,
                                           fn, suffix, multiArgs);
            });
            util.notEnumerableProp(promisified, "__isPromisified__", true);
            obj[promisifiedKey] = promisified;
        }
    }
    util.toFastProperties(obj);
    return obj;
}

function promisify(callback, receiver, multiArgs) {
    return makeNodePromisified(callback, receiver, undefined,
                                callback, null, multiArgs);
}

Promise.promisify = function (fn, options) {
    if (typeof fn !== "function") {
        throw new TypeError("expecting a function but got " + util.classString(fn));
    }
    if (isPromisified(fn)) {
        return fn;
    }
    options = Object(options);
    var receiver = options.context === undefined ? THIS : options.context;
    var multiArgs = !!options.multiArgs;
    var ret = promisify(fn, receiver, multiArgs);
    util.copyDescriptors(fn, ret, propsFilter);
    return ret;
};

Promise.promisifyAll = function (target, options) {
    if (typeof target !== "function" && typeof target !== "object") {
        throw new TypeError("the target of promisifyAll must be an object or a function\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    options = Object(options);
    var multiArgs = !!options.multiArgs;
    var suffix = options.suffix;
    if (typeof suffix !== "string") suffix = defaultSuffix;
    var filter = options.filter;
    if (typeof filter !== "function") filter = defaultFilter;
    var promisifier = options.promisifier;
    if (typeof promisifier !== "function") promisifier = makeNodePromisified;

    if (!util.isIdentifier(suffix)) {
        throw new RangeError("suffix must be a valid identifier\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }

    var keys = util.inheritedDataKeys(target);
    for (var i = 0; i < keys.length; ++i) {
        var value = target[keys[i]];
        if (keys[i] !== "constructor" &&
            util.isClass(value)) {
            promisifyAll(value.prototype, suffix, filter, promisifier,
                multiArgs);
            promisifyAll(value, suffix, filter, promisifier, multiArgs);
        }
    }

    return promisifyAll(target, suffix, filter, promisifier, multiArgs);
};
};


},{"./errors":12,"./nodeback":20,"./util":36}],25:[function(_dereq_,module,exports){
"use strict";
module.exports = function(
    Promise, PromiseArray, tryConvertToPromise, apiRejection) {
var util = _dereq_("./util");
var isObject = util.isObject;
var es5 = _dereq_("./es5");
var Es6Map;
if (typeof Map === "function") Es6Map = Map;

var mapToEntries = (function() {
    var index = 0;
    var size = 0;

    function extractEntry(value, key) {
        this[index] = value;
        this[index + size] = key;
        index++;
    }

    return function mapToEntries(map) {
        size = map.size;
        index = 0;
        var ret = new Array(map.size * 2);
        map.forEach(extractEntry, ret);
        return ret;
    };
})();

var entriesToMap = function(entries) {
    var ret = new Es6Map();
    var length = entries.length / 2 | 0;
    for (var i = 0; i < length; ++i) {
        var key = entries[length + i];
        var value = entries[i];
        ret.set(key, value);
    }
    return ret;
};

function PropertiesPromiseArray(obj) {
    var isMap = false;
    var entries;
    if (Es6Map !== undefined && obj instanceof Es6Map) {
        entries = mapToEntries(obj);
        isMap = true;
    } else {
        var keys = es5.keys(obj);
        var len = keys.length;
        entries = new Array(len * 2);
        for (var i = 0; i < len; ++i) {
            var key = keys[i];
            entries[i] = obj[key];
            entries[i + len] = key;
        }
    }
    this.constructor$(entries);
    this._isMap = isMap;
    this._init$(undefined, -3);
}
util.inherits(PropertiesPromiseArray, PromiseArray);

PropertiesPromiseArray.prototype._init = function () {};

PropertiesPromiseArray.prototype._promiseFulfilled = function (value, index) {
    this._values[index] = value;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        var val;
        if (this._isMap) {
            val = entriesToMap(this._values);
        } else {
            val = {};
            var keyOffset = this.length();
            for (var i = 0, len = this.length(); i < len; ++i) {
                val[this._values[i + keyOffset]] = this._values[i];
            }
        }
        this._resolve(val);
        return true;
    }
    return false;
};

PropertiesPromiseArray.prototype.shouldCopyValues = function () {
    return false;
};

PropertiesPromiseArray.prototype.getActualLength = function (len) {
    return len >> 1;
};

function props(promises) {
    var ret;
    var castValue = tryConvertToPromise(promises);

    if (!isObject(castValue)) {
        return apiRejection("cannot await properties of a non-object\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    } else if (castValue instanceof Promise) {
        ret = castValue._then(
            Promise.props, undefined, undefined, undefined, undefined);
    } else {
        ret = new PropertiesPromiseArray(castValue).promise();
    }

    if (castValue instanceof Promise) {
        ret._propagateFrom(castValue, 2);
    }
    return ret;
}

Promise.prototype.props = function () {
    return props(this);
};

Promise.props = function (promises) {
    return props(promises);
};
};

},{"./es5":13,"./util":36}],26:[function(_dereq_,module,exports){
"use strict";
function arrayMove(src, srcIndex, dst, dstIndex, len) {
    for (var j = 0; j < len; ++j) {
        dst[j + dstIndex] = src[j + srcIndex];
        src[j + srcIndex] = void 0;
    }
}

function Queue(capacity) {
    this._capacity = capacity;
    this._length = 0;
    this._front = 0;
}

Queue.prototype._willBeOverCapacity = function (size) {
    return this._capacity < size;
};

Queue.prototype._pushOne = function (arg) {
    var length = this.length();
    this._checkCapacity(length + 1);
    var i = (this._front + length) & (this._capacity - 1);
    this[i] = arg;
    this._length = length + 1;
};

Queue.prototype._unshiftOne = function(value) {
    var capacity = this._capacity;
    this._checkCapacity(this.length() + 1);
    var front = this._front;
    var i = (((( front - 1 ) &
                    ( capacity - 1) ) ^ capacity ) - capacity );
    this[i] = value;
    this._front = i;
    this._length = this.length() + 1;
};

Queue.prototype.unshift = function(fn, receiver, arg) {
    this._unshiftOne(arg);
    this._unshiftOne(receiver);
    this._unshiftOne(fn);
};

Queue.prototype.push = function (fn, receiver, arg) {
    var length = this.length() + 3;
    if (this._willBeOverCapacity(length)) {
        this._pushOne(fn);
        this._pushOne(receiver);
        this._pushOne(arg);
        return;
    }
    var j = this._front + length - 3;
    this._checkCapacity(length);
    var wrapMask = this._capacity - 1;
    this[(j + 0) & wrapMask] = fn;
    this[(j + 1) & wrapMask] = receiver;
    this[(j + 2) & wrapMask] = arg;
    this._length = length;
};

Queue.prototype.shift = function () {
    var front = this._front,
        ret = this[front];

    this[front] = undefined;
    this._front = (front + 1) & (this._capacity - 1);
    this._length--;
    return ret;
};

Queue.prototype.length = function () {
    return this._length;
};

Queue.prototype._checkCapacity = function (size) {
    if (this._capacity < size) {
        this._resizeTo(this._capacity << 1);
    }
};

Queue.prototype._resizeTo = function (capacity) {
    var oldCapacity = this._capacity;
    this._capacity = capacity;
    var front = this._front;
    var length = this._length;
    var moveItemsCount = (front + length) & (oldCapacity - 1);
    arrayMove(this, 0, this, oldCapacity, moveItemsCount);
};

module.exports = Queue;

},{}],27:[function(_dereq_,module,exports){
"use strict";
module.exports = function(
    Promise, INTERNAL, tryConvertToPromise, apiRejection) {
var util = _dereq_("./util");

var raceLater = function (promise) {
    return promise.then(function(array) {
        return race(array, promise);
    });
};

function race(promises, parent) {
    var maybePromise = tryConvertToPromise(promises);

    if (maybePromise instanceof Promise) {
        return raceLater(maybePromise);
    } else {
        promises = util.asArray(promises);
        if (promises === null)
            return apiRejection("expecting an array or an iterable object but got " + util.classString(promises));
    }

    var ret = new Promise(INTERNAL);
    if (parent !== undefined) {
        ret._propagateFrom(parent, 3);
    }
    var fulfill = ret._fulfill;
    var reject = ret._reject;
    for (var i = 0, len = promises.length; i < len; ++i) {
        var val = promises[i];

        if (val === undefined && !(i in promises)) {
            continue;
        }

        Promise.cast(val)._then(fulfill, reject, undefined, ret, null);
    }
    return ret;
}

Promise.race = function (promises) {
    return race(promises, undefined);
};

Promise.prototype.race = function () {
    return race(this, undefined);
};

};

},{"./util":36}],28:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise,
                          PromiseArray,
                          apiRejection,
                          tryConvertToPromise,
                          INTERNAL,
                          debug) {
var getDomain = Promise._getDomain;
var util = _dereq_("./util");
var tryCatch = util.tryCatch;

function ReductionPromiseArray(promises, fn, initialValue, _each) {
    this.constructor$(promises);
    var domain = getDomain();
    this._fn = domain === null ? fn : domain.bind(fn);
    if (initialValue !== undefined) {
        initialValue = Promise.resolve(initialValue);
        initialValue._attachCancellationCallback(this);
    }
    this._initialValue = initialValue;
    this._currentCancellable = null;
    this._eachValues = _each === INTERNAL ? [] : undefined;
    this._promise._captureStackTrace();
    this._init$(undefined, -5);
}
util.inherits(ReductionPromiseArray, PromiseArray);

ReductionPromiseArray.prototype._gotAccum = function(accum) {
    if (this._eachValues !== undefined && accum !== INTERNAL) {
        this._eachValues.push(accum);
    }
};

ReductionPromiseArray.prototype._eachComplete = function(value) {
    this._eachValues.push(value);
    return this._eachValues;
};

ReductionPromiseArray.prototype._init = function() {};

ReductionPromiseArray.prototype._resolveEmptyArray = function() {
    this._resolve(this._eachValues !== undefined ? this._eachValues
                                                 : this._initialValue);
};

ReductionPromiseArray.prototype.shouldCopyValues = function () {
    return false;
};

ReductionPromiseArray.prototype._resolve = function(value) {
    this._promise._resolveCallback(value);
    this._values = null;
};

ReductionPromiseArray.prototype._resultCancelled = function(sender) {
    if (sender === this._initialValue) return this._cancel();
    if (this._isResolved()) return;
    this._resultCancelled$();
    if (this._currentCancellable instanceof Promise) {
        this._currentCancellable.cancel();
    }
    if (this._initialValue instanceof Promise) {
        this._initialValue.cancel();
    }
};

ReductionPromiseArray.prototype._iterate = function (values) {
    this._values = values;
    var value;
    var i;
    var length = values.length;
    if (this._initialValue !== undefined) {
        value = this._initialValue;
        i = 0;
    } else {
        value = Promise.resolve(values[0]);
        i = 1;
    }

    this._currentCancellable = value;

    if (!value.isRejected()) {
        for (; i < length; ++i) {
            var ctx = {
                accum: null,
                value: values[i],
                index: i,
                length: length,
                array: this
            };
            value = value._then(gotAccum, undefined, undefined, ctx, undefined);
        }
    }

    if (this._eachValues !== undefined) {
        value = value
            ._then(this._eachComplete, undefined, undefined, this, undefined);
    }
    value._then(completed, completed, undefined, value, this);
};

Promise.prototype.reduce = function (fn, initialValue) {
    return reduce(this, fn, initialValue, null);
};

Promise.reduce = function (promises, fn, initialValue, _each) {
    return reduce(promises, fn, initialValue, _each);
};

function completed(valueOrReason, array) {
    if (this.isFulfilled()) {
        array._resolve(valueOrReason);
    } else {
        array._reject(valueOrReason);
    }
}

function reduce(promises, fn, initialValue, _each) {
    if (typeof fn !== "function") {
        return apiRejection("expecting a function but got " + util.classString(fn));
    }
    var array = new ReductionPromiseArray(promises, fn, initialValue, _each);
    return array.promise();
}

function gotAccum(accum) {
    this.accum = accum;
    this.array._gotAccum(accum);
    var value = tryConvertToPromise(this.value, this.array._promise);
    if (value instanceof Promise) {
        this.array._currentCancellable = value;
        return value._then(gotValue, undefined, undefined, this, undefined);
    } else {
        return gotValue.call(this, value);
    }
}

function gotValue(value) {
    var array = this.array;
    var promise = array._promise;
    var fn = tryCatch(array._fn);
    promise._pushContext();
    var ret;
    if (array._eachValues !== undefined) {
        ret = fn.call(promise._boundValue(), value, this.index, this.length);
    } else {
        ret = fn.call(promise._boundValue(),
                              this.accum, value, this.index, this.length);
    }
    if (ret instanceof Promise) {
        array._currentCancellable = ret;
    }
    var promiseCreated = promise._popContext();
    debug.checkForgottenReturns(
        ret,
        promiseCreated,
        array._eachValues !== undefined ? "Promise.each" : "Promise.reduce",
        promise
    );
    return ret;
}
};

},{"./util":36}],29:[function(_dereq_,module,exports){
"use strict";
var util = _dereq_("./util");
var schedule;
var noAsyncScheduler = function() {
    throw new Error("No async scheduler available\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
};
var NativePromise = util.getNativePromise();
if (util.isNode && typeof MutationObserver === "undefined") {
    var GlobalSetImmediate = global.setImmediate;
    var ProcessNextTick = process.nextTick;
    schedule = util.isRecentNode
                ? function(fn) { GlobalSetImmediate.call(global, fn); }
                : function(fn) { ProcessNextTick.call(process, fn); };
} else if (typeof NativePromise === "function") {
    var nativePromise = NativePromise.resolve();
    schedule = function(fn) {
        nativePromise.then(fn);
    };
} else if ((typeof MutationObserver !== "undefined") &&
          !(typeof window !== "undefined" &&
            window.navigator &&
            window.navigator.standalone)) {
    schedule = (function() {
        var div = document.createElement("div");
        var opts = {attributes: true};
        var toggleScheduled = false;
        var div2 = document.createElement("div");
        var o2 = new MutationObserver(function() {
            div.classList.toggle("foo");
            toggleScheduled = false;
        });
        o2.observe(div2, opts);

        var scheduleToggle = function() {
            if (toggleScheduled) return;
                toggleScheduled = true;
                div2.classList.toggle("foo");
            };

            return function schedule(fn) {
            var o = new MutationObserver(function() {
                o.disconnect();
                fn();
            });
            o.observe(div, opts);
            scheduleToggle();
        };
    })();
} else if (typeof setImmediate !== "undefined") {
    schedule = function (fn) {
        setImmediate(fn);
    };
} else if (typeof setTimeout !== "undefined") {
    schedule = function (fn) {
        setTimeout(fn, 0);
    };
} else {
    schedule = noAsyncScheduler;
}
module.exports = schedule;

},{"./util":36}],30:[function(_dereq_,module,exports){
"use strict";
module.exports =
    function(Promise, PromiseArray, debug) {
var PromiseInspection = Promise.PromiseInspection;
var util = _dereq_("./util");

function SettledPromiseArray(values) {
    this.constructor$(values);
}
util.inherits(SettledPromiseArray, PromiseArray);

SettledPromiseArray.prototype._promiseResolved = function (index, inspection) {
    this._values[index] = inspection;
    var totalResolved = ++this._totalResolved;
    if (totalResolved >= this._length) {
        this._resolve(this._values);
        return true;
    }
    return false;
};

SettledPromiseArray.prototype._promiseFulfilled = function (value, index) {
    var ret = new PromiseInspection();
    ret._bitField = 33554432;
    ret._settledValueField = value;
    return this._promiseResolved(index, ret);
};
SettledPromiseArray.prototype._promiseRejected = function (reason, index) {
    var ret = new PromiseInspection();
    ret._bitField = 16777216;
    ret._settledValueField = reason;
    return this._promiseResolved(index, ret);
};

Promise.settle = function (promises) {
    debug.deprecated(".settle()", ".reflect()");
    return new SettledPromiseArray(promises).promise();
};

Promise.prototype.settle = function () {
    return Promise.settle(this);
};
};

},{"./util":36}],31:[function(_dereq_,module,exports){
"use strict";
module.exports =
function(Promise, PromiseArray, apiRejection) {
var util = _dereq_("./util");
var RangeError = _dereq_("./errors").RangeError;
var AggregateError = _dereq_("./errors").AggregateError;
var isArray = util.isArray;
var CANCELLATION = {};


function SomePromiseArray(values) {
    this.constructor$(values);
    this._howMany = 0;
    this._unwrap = false;
    this._initialized = false;
}
util.inherits(SomePromiseArray, PromiseArray);

SomePromiseArray.prototype._init = function () {
    if (!this._initialized) {
        return;
    }
    if (this._howMany === 0) {
        this._resolve([]);
        return;
    }
    this._init$(undefined, -5);
    var isArrayResolved = isArray(this._values);
    if (!this._isResolved() &&
        isArrayResolved &&
        this._howMany > this._canPossiblyFulfill()) {
        this._reject(this._getRangeError(this.length()));
    }
};

SomePromiseArray.prototype.init = function () {
    this._initialized = true;
    this._init();
};

SomePromiseArray.prototype.setUnwrap = function () {
    this._unwrap = true;
};

SomePromiseArray.prototype.howMany = function () {
    return this._howMany;
};

SomePromiseArray.prototype.setHowMany = function (count) {
    this._howMany = count;
};

SomePromiseArray.prototype._promiseFulfilled = function (value) {
    this._addFulfilled(value);
    if (this._fulfilled() === this.howMany()) {
        this._values.length = this.howMany();
        if (this.howMany() === 1 && this._unwrap) {
            this._resolve(this._values[0]);
        } else {
            this._resolve(this._values);
        }
        return true;
    }
    return false;

};
SomePromiseArray.prototype._promiseRejected = function (reason) {
    this._addRejected(reason);
    return this._checkOutcome();
};

SomePromiseArray.prototype._promiseCancelled = function () {
    if (this._values instanceof Promise || this._values == null) {
        return this._cancel();
    }
    this._addRejected(CANCELLATION);
    return this._checkOutcome();
};

SomePromiseArray.prototype._checkOutcome = function() {
    if (this.howMany() > this._canPossiblyFulfill()) {
        var e = new AggregateError();
        for (var i = this.length(); i < this._values.length; ++i) {
            if (this._values[i] !== CANCELLATION) {
                e.push(this._values[i]);
            }
        }
        if (e.length > 0) {
            this._reject(e);
        } else {
            this._cancel();
        }
        return true;
    }
    return false;
};

SomePromiseArray.prototype._fulfilled = function () {
    return this._totalResolved;
};

SomePromiseArray.prototype._rejected = function () {
    return this._values.length - this.length();
};

SomePromiseArray.prototype._addRejected = function (reason) {
    this._values.push(reason);
};

SomePromiseArray.prototype._addFulfilled = function (value) {
    this._values[this._totalResolved++] = value;
};

SomePromiseArray.prototype._canPossiblyFulfill = function () {
    return this.length() - this._rejected();
};

SomePromiseArray.prototype._getRangeError = function (count) {
    var message = "Input array must contain at least " +
            this._howMany + " items but contains only " + count + " items";
    return new RangeError(message);
};

SomePromiseArray.prototype._resolveEmptyArray = function () {
    this._reject(this._getRangeError(0));
};

function some(promises, howMany) {
    if ((howMany | 0) !== howMany || howMany < 0) {
        return apiRejection("expecting a positive integer\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    var ret = new SomePromiseArray(promises);
    var promise = ret.promise();
    ret.setHowMany(howMany);
    ret.init();
    return promise;
}

Promise.some = function (promises, howMany) {
    return some(promises, howMany);
};

Promise.prototype.some = function (howMany) {
    return some(this, howMany);
};

Promise._SomePromiseArray = SomePromiseArray;
};

},{"./errors":12,"./util":36}],32:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise) {
function PromiseInspection(promise) {
    if (promise !== undefined) {
        promise = promise._target();
        this._bitField = promise._bitField;
        this._settledValueField = promise._isFateSealed()
            ? promise._settledValue() : undefined;
    }
    else {
        this._bitField = 0;
        this._settledValueField = undefined;
    }
}

PromiseInspection.prototype._settledValue = function() {
    return this._settledValueField;
};

var value = PromiseInspection.prototype.value = function () {
    if (!this.isFulfilled()) {
        throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    return this._settledValue();
};

var reason = PromiseInspection.prototype.error =
PromiseInspection.prototype.reason = function () {
    if (!this.isRejected()) {
        throw new TypeError("cannot get rejection reason of a non-rejected promise\u000a\u000a    See http://goo.gl/MqrFmX\u000a");
    }
    return this._settledValue();
};

var isFulfilled = PromiseInspection.prototype.isFulfilled = function() {
    return (this._bitField & 33554432) !== 0;
};

var isRejected = PromiseInspection.prototype.isRejected = function () {
    return (this._bitField & 16777216) !== 0;
};

var isPending = PromiseInspection.prototype.isPending = function () {
    return (this._bitField & 50397184) === 0;
};

var isResolved = PromiseInspection.prototype.isResolved = function () {
    return (this._bitField & 50331648) !== 0;
};

PromiseInspection.prototype.isCancelled =
Promise.prototype._isCancelled = function() {
    return (this._bitField & 65536) === 65536;
};

Promise.prototype.isCancelled = function() {
    return this._target()._isCancelled();
};

Promise.prototype.isPending = function() {
    return isPending.call(this._target());
};

Promise.prototype.isRejected = function() {
    return isRejected.call(this._target());
};

Promise.prototype.isFulfilled = function() {
    return isFulfilled.call(this._target());
};

Promise.prototype.isResolved = function() {
    return isResolved.call(this._target());
};

Promise.prototype.value = function() {
    return value.call(this._target());
};

Promise.prototype.reason = function() {
    var target = this._target();
    target._unsetRejectionIsUnhandled();
    return reason.call(target);
};

Promise.prototype._value = function() {
    return this._settledValue();
};

Promise.prototype._reason = function() {
    this._unsetRejectionIsUnhandled();
    return this._settledValue();
};

Promise.PromiseInspection = PromiseInspection;
};

},{}],33:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL) {
var util = _dereq_("./util");
var errorObj = util.errorObj;
var isObject = util.isObject;

function tryConvertToPromise(obj, context) {
    if (isObject(obj)) {
        if (obj instanceof Promise) return obj;
        var then = getThen(obj);
        if (then === errorObj) {
            if (context) context._pushContext();
            var ret = Promise.reject(then.e);
            if (context) context._popContext();
            return ret;
        } else if (typeof then === "function") {
            if (isAnyBluebirdPromise(obj)) {
                var ret = new Promise(INTERNAL);
                obj._then(
                    ret._fulfill,
                    ret._reject,
                    undefined,
                    ret,
                    null
                );
                return ret;
            }
            return doThenable(obj, then, context);
        }
    }
    return obj;
}

function doGetThen(obj) {
    return obj.then;
}

function getThen(obj) {
    try {
        return doGetThen(obj);
    } catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}

var hasProp = {}.hasOwnProperty;
function isAnyBluebirdPromise(obj) {
    try {
        return hasProp.call(obj, "_promise0");
    } catch (e) {
        return false;
    }
}

function doThenable(x, then, context) {
    var promise = new Promise(INTERNAL);
    var ret = promise;
    if (context) context._pushContext();
    promise._captureStackTrace();
    if (context) context._popContext();
    var synchronous = true;
    var result = util.tryCatch(then).call(x, resolve, reject);
    synchronous = false;

    if (promise && result === errorObj) {
        promise._rejectCallback(result.e, true, true);
        promise = null;
    }

    function resolve(value) {
        if (!promise) return;
        promise._resolveCallback(value);
        promise = null;
    }

    function reject(reason) {
        if (!promise) return;
        promise._rejectCallback(reason, synchronous, true);
        promise = null;
    }
    return ret;
}

return tryConvertToPromise;
};

},{"./util":36}],34:[function(_dereq_,module,exports){
"use strict";
module.exports = function(Promise, INTERNAL, debug) {
var util = _dereq_("./util");
var TimeoutError = Promise.TimeoutError;

function HandleWrapper(handle)  {
    this.handle = handle;
}

HandleWrapper.prototype._resultCancelled = function() {
    clearTimeout(this.handle);
};

var afterValue = function(value) { return delay(+this).thenReturn(value); };
var delay = Promise.delay = function (ms, value) {
    var ret;
    var handle;
    if (value !== undefined) {
        ret = Promise.resolve(value)
                ._then(afterValue, null, null, ms, undefined);
        if (debug.cancellation() && value instanceof Promise) {
            ret._setOnCancel(value);
        }
    } else {
        ret = new Promise(INTERNAL);
        handle = setTimeout(function() { ret._fulfill(); }, +ms);
        if (debug.cancellation()) {
            ret._setOnCancel(new HandleWrapper(handle));
        }
    }
    ret._setAsyncGuaranteed();
    return ret;
};

Promise.prototype.delay = function (ms) {
    return delay(ms, this);
};

var afterTimeout = function (promise, message, parent) {
    var err;
    if (typeof message !== "string") {
        if (message instanceof Error) {
            err = message;
        } else {
            err = new TimeoutError("operation timed out");
        }
    } else {
        err = new TimeoutError(message);
    }
    util.markAsOriginatingFromRejection(err);
    promise._attachExtraTrace(err);
    promise._reject(err);

    if (parent != null) {
        parent.cancel();
    }
};

function successClear(value) {
    clearTimeout(this.handle);
    return value;
}

function failureClear(reason) {
    clearTimeout(this.handle);
    throw reason;
}

Promise.prototype.timeout = function (ms, message) {
    ms = +ms;
    var ret, parent;

    var handleWrapper = new HandleWrapper(setTimeout(function timeoutTimeout() {
        if (ret.isPending()) {
            afterTimeout(ret, message, parent);
        }
    }, ms));

    if (debug.cancellation()) {
        parent = this.then();
        ret = parent._then(successClear, failureClear,
                            undefined, handleWrapper, undefined);
        ret._setOnCancel(handleWrapper);
    } else {
        ret = this._then(successClear, failureClear,
                            undefined, handleWrapper, undefined);
    }

    return ret;
};

};

},{"./util":36}],35:[function(_dereq_,module,exports){
"use strict";
module.exports = function (Promise, apiRejection, tryConvertToPromise,
    createContext, INTERNAL, debug) {
    var util = _dereq_("./util");
    var TypeError = _dereq_("./errors").TypeError;
    var inherits = _dereq_("./util").inherits;
    var errorObj = util.errorObj;
    var tryCatch = util.tryCatch;
    var NULL = {};

    function thrower(e) {
        setTimeout(function(){throw e;}, 0);
    }

    function castPreservingDisposable(thenable) {
        var maybePromise = tryConvertToPromise(thenable);
        if (maybePromise !== thenable &&
            typeof thenable._isDisposable === "function" &&
            typeof thenable._getDisposer === "function" &&
            thenable._isDisposable()) {
            maybePromise._setDisposable(thenable._getDisposer());
        }
        return maybePromise;
    }
    function dispose(resources, inspection) {
        var i = 0;
        var len = resources.length;
        var ret = new Promise(INTERNAL);
        function iterator() {
            if (i >= len) return ret._fulfill();
            var maybePromise = castPreservingDisposable(resources[i++]);
            if (maybePromise instanceof Promise &&
                maybePromise._isDisposable()) {
                try {
                    maybePromise = tryConvertToPromise(
                        maybePromise._getDisposer().tryDispose(inspection),
                        resources.promise);
                } catch (e) {
                    return thrower(e);
                }
                if (maybePromise instanceof Promise) {
                    return maybePromise._then(iterator, thrower,
                                              null, null, null);
                }
            }
            iterator();
        }
        iterator();
        return ret;
    }

    function Disposer(data, promise, context) {
        this._data = data;
        this._promise = promise;
        this._context = context;
    }

    Disposer.prototype.data = function () {
        return this._data;
    };

    Disposer.prototype.promise = function () {
        return this._promise;
    };

    Disposer.prototype.resource = function () {
        if (this.promise().isFulfilled()) {
            return this.promise().value();
        }
        return NULL;
    };

    Disposer.prototype.tryDispose = function(inspection) {
        var resource = this.resource();
        var context = this._context;
        if (context !== undefined) context._pushContext();
        var ret = resource !== NULL
            ? this.doDispose(resource, inspection) : null;
        if (context !== undefined) context._popContext();
        this._promise._unsetDisposable();
        this._data = null;
        return ret;
    };

    Disposer.isDisposer = function (d) {
        return (d != null &&
                typeof d.resource === "function" &&
                typeof d.tryDispose === "function");
    };

    function FunctionDisposer(fn, promise, context) {
        this.constructor$(fn, promise, context);
    }
    inherits(FunctionDisposer, Disposer);

    FunctionDisposer.prototype.doDispose = function (resource, inspection) {
        var fn = this.data();
        return fn.call(resource, resource, inspection);
    };

    function maybeUnwrapDisposer(value) {
        if (Disposer.isDisposer(value)) {
            this.resources[this.index]._setDisposable(value);
            return value.promise();
        }
        return value;
    }

    function ResourceList(length) {
        this.length = length;
        this.promise = null;
        this[length-1] = null;
    }

    ResourceList.prototype._resultCancelled = function() {
        var len = this.length;
        for (var i = 0; i < len; ++i) {
            var item = this[i];
            if (item instanceof Promise) {
                item.cancel();
            }
        }
    };

    Promise.using = function () {
        var len = arguments.length;
        if (len < 2) return apiRejection(
                        "you must pass at least 2 arguments to Promise.using");
        var fn = arguments[len - 1];
        if (typeof fn !== "function") {
            return apiRejection("expecting a function but got " + util.classString(fn));
        }
        var input;
        var spreadArgs = true;
        if (len === 2 && Array.isArray(arguments[0])) {
            input = arguments[0];
            len = input.length;
            spreadArgs = false;
        } else {
            input = arguments;
            len--;
        }
        var resources = new ResourceList(len);
        for (var i = 0; i < len; ++i) {
            var resource = input[i];
            if (Disposer.isDisposer(resource)) {
                var disposer = resource;
                resource = resource.promise();
                resource._setDisposable(disposer);
            } else {
                var maybePromise = tryConvertToPromise(resource);
                if (maybePromise instanceof Promise) {
                    resource =
                        maybePromise._then(maybeUnwrapDisposer, null, null, {
                            resources: resources,
                            index: i
                    }, undefined);
                }
            }
            resources[i] = resource;
        }

        var reflectedResources = new Array(resources.length);
        for (var i = 0; i < reflectedResources.length; ++i) {
            reflectedResources[i] = Promise.resolve(resources[i]).reflect();
        }

        var resultPromise = Promise.all(reflectedResources)
            .then(function(inspections) {
                for (var i = 0; i < inspections.length; ++i) {
                    var inspection = inspections[i];
                    if (inspection.isRejected()) {
                        errorObj.e = inspection.error();
                        return errorObj;
                    } else if (!inspection.isFulfilled()) {
                        resultPromise.cancel();
                        return;
                    }
                    inspections[i] = inspection.value();
                }
                promise._pushContext();

                fn = tryCatch(fn);
                var ret = spreadArgs
                    ? fn.apply(undefined, inspections) : fn(inspections);
                var promiseCreated = promise._popContext();
                debug.checkForgottenReturns(
                    ret, promiseCreated, "Promise.using", promise);
                return ret;
            });

        var promise = resultPromise.lastly(function() {
            var inspection = new Promise.PromiseInspection(resultPromise);
            return dispose(resources, inspection);
        });
        resources.promise = promise;
        promise._setOnCancel(resources);
        return promise;
    };

    Promise.prototype._setDisposable = function (disposer) {
        this._bitField = this._bitField | 131072;
        this._disposer = disposer;
    };

    Promise.prototype._isDisposable = function () {
        return (this._bitField & 131072) > 0;
    };

    Promise.prototype._getDisposer = function () {
        return this._disposer;
    };

    Promise.prototype._unsetDisposable = function () {
        this._bitField = this._bitField & (~131072);
        this._disposer = undefined;
    };

    Promise.prototype.disposer = function (fn) {
        if (typeof fn === "function") {
            return new FunctionDisposer(fn, this, createContext());
        }
        throw new TypeError();
    };

};

},{"./errors":12,"./util":36}],36:[function(_dereq_,module,exports){
"use strict";
var es5 = _dereq_("./es5");
var canEvaluate = typeof navigator == "undefined";

var errorObj = {e: {}};
var tryCatchTarget;
var globalObject = typeof self !== "undefined" ? self :
    typeof window !== "undefined" ? window :
    typeof global !== "undefined" ? global :
    this !== undefined ? this : null;

function tryCatcher() {
    try {
        var target = tryCatchTarget;
        tryCatchTarget = null;
        return target.apply(this, arguments);
    } catch (e) {
        errorObj.e = e;
        return errorObj;
    }
}
function tryCatch(fn) {
    tryCatchTarget = fn;
    return tryCatcher;
}

var inherits = function(Child, Parent) {
    var hasProp = {}.hasOwnProperty;

    function T() {
        this.constructor = Child;
        this.constructor$ = Parent;
        for (var propertyName in Parent.prototype) {
            if (hasProp.call(Parent.prototype, propertyName) &&
                propertyName.charAt(propertyName.length-1) !== "$"
           ) {
                this[propertyName + "$"] = Parent.prototype[propertyName];
            }
        }
    }
    T.prototype = Parent.prototype;
    Child.prototype = new T();
    return Child.prototype;
};


function isPrimitive(val) {
    return val == null || val === true || val === false ||
        typeof val === "string" || typeof val === "number";

}

function isObject(value) {
    return typeof value === "function" ||
           typeof value === "object" && value !== null;
}

function maybeWrapAsError(maybeError) {
    if (!isPrimitive(maybeError)) return maybeError;

    return new Error(safeToString(maybeError));
}

function withAppended(target, appendee) {
    var len = target.length;
    var ret = new Array(len + 1);
    var i;
    for (i = 0; i < len; ++i) {
        ret[i] = target[i];
    }
    ret[i] = appendee;
    return ret;
}

function getDataPropertyOrDefault(obj, key, defaultValue) {
    if (es5.isES5) {
        var desc = Object.getOwnPropertyDescriptor(obj, key);

        if (desc != null) {
            return desc.get == null && desc.set == null
                    ? desc.value
                    : defaultValue;
        }
    } else {
        return {}.hasOwnProperty.call(obj, key) ? obj[key] : undefined;
    }
}

function notEnumerableProp(obj, name, value) {
    if (isPrimitive(obj)) return obj;
    var descriptor = {
        value: value,
        configurable: true,
        enumerable: false,
        writable: true
    };
    es5.defineProperty(obj, name, descriptor);
    return obj;
}

function thrower(r) {
    throw r;
}

var inheritedDataKeys = (function() {
    var excludedPrototypes = [
        Array.prototype,
        Object.prototype,
        Function.prototype
    ];

    var isExcludedProto = function(val) {
        for (var i = 0; i < excludedPrototypes.length; ++i) {
            if (excludedPrototypes[i] === val) {
                return true;
            }
        }
        return false;
    };

    if (es5.isES5) {
        var getKeys = Object.getOwnPropertyNames;
        return function(obj) {
            var ret = [];
            var visitedKeys = Object.create(null);
            while (obj != null && !isExcludedProto(obj)) {
                var keys;
                try {
                    keys = getKeys(obj);
                } catch (e) {
                    return ret;
                }
                for (var i = 0; i < keys.length; ++i) {
                    var key = keys[i];
                    if (visitedKeys[key]) continue;
                    visitedKeys[key] = true;
                    var desc = Object.getOwnPropertyDescriptor(obj, key);
                    if (desc != null && desc.get == null && desc.set == null) {
                        ret.push(key);
                    }
                }
                obj = es5.getPrototypeOf(obj);
            }
            return ret;
        };
    } else {
        var hasProp = {}.hasOwnProperty;
        return function(obj) {
            if (isExcludedProto(obj)) return [];
            var ret = [];

            /*jshint forin:false */
            enumeration: for (var key in obj) {
                if (hasProp.call(obj, key)) {
                    ret.push(key);
                } else {
                    for (var i = 0; i < excludedPrototypes.length; ++i) {
                        if (hasProp.call(excludedPrototypes[i], key)) {
                            continue enumeration;
                        }
                    }
                    ret.push(key);
                }
            }
            return ret;
        };
    }

})();

var thisAssignmentPattern = /this\s*\.\s*\S+\s*=/;
function isClass(fn) {
    try {
        if (typeof fn === "function") {
            var keys = es5.names(fn.prototype);

            var hasMethods = es5.isES5 && keys.length > 1;
            var hasMethodsOtherThanConstructor = keys.length > 0 &&
                !(keys.length === 1 && keys[0] === "constructor");
            var hasThisAssignmentAndStaticMethods =
                thisAssignmentPattern.test(fn + "") && es5.names(fn).length > 0;

            if (hasMethods || hasMethodsOtherThanConstructor ||
                hasThisAssignmentAndStaticMethods) {
                return true;
            }
        }
        return false;
    } catch (e) {
        return false;
    }
}

function toFastProperties(obj) {
    /*jshint -W027,-W055,-W031*/
    function FakeConstructor() {}
    FakeConstructor.prototype = obj;
    var l = 8;
    while (l--) new FakeConstructor();
    return obj;
    eval(obj);
}

var rident = /^[a-z$_][a-z$_0-9]*$/i;
function isIdentifier(str) {
    return rident.test(str);
}

function filledRange(count, prefix, suffix) {
    var ret = new Array(count);
    for(var i = 0; i < count; ++i) {
        ret[i] = prefix + i + suffix;
    }
    return ret;
}

function safeToString(obj) {
    try {
        return obj + "";
    } catch (e) {
        return "[no string representation]";
    }
}

function isError(obj) {
    return obj !== null &&
           typeof obj === "object" &&
           typeof obj.message === "string" &&
           typeof obj.name === "string";
}

function markAsOriginatingFromRejection(e) {
    try {
        notEnumerableProp(e, "isOperational", true);
    }
    catch(ignore) {}
}

function originatesFromRejection(e) {
    if (e == null) return false;
    return ((e instanceof Error["__BluebirdErrorTypes__"].OperationalError) ||
        e["isOperational"] === true);
}

function canAttachTrace(obj) {
    return isError(obj) && es5.propertyIsWritable(obj, "stack");
}

var ensureErrorObject = (function() {
    if (!("stack" in new Error())) {
        return function(value) {
            if (canAttachTrace(value)) return value;
            try {throw new Error(safeToString(value));}
            catch(err) {return err;}
        };
    } else {
        return function(value) {
            if (canAttachTrace(value)) return value;
            return new Error(safeToString(value));
        };
    }
})();

function classString(obj) {
    return {}.toString.call(obj);
}

function copyDescriptors(from, to, filter) {
    var keys = es5.names(from);
    for (var i = 0; i < keys.length; ++i) {
        var key = keys[i];
        if (filter(key)) {
            try {
                es5.defineProperty(to, key, es5.getDescriptor(from, key));
            } catch (ignore) {}
        }
    }
}

var asArray = function(v) {
    if (es5.isArray(v)) {
        return v;
    }
    return null;
};

if (typeof Symbol !== "undefined" && Symbol.iterator) {
    var ArrayFrom = typeof Array.from === "function" ? function(v) {
        return Array.from(v);
    } : function(v) {
        var ret = [];
        var it = v[Symbol.iterator]();
        var itResult;
        while (!((itResult = it.next()).done)) {
            ret.push(itResult.value);
        }
        return ret;
    };

    asArray = function(v) {
        if (es5.isArray(v)) {
            return v;
        } else if (v != null && typeof v[Symbol.iterator] === "function") {
            return ArrayFrom(v);
        }
        return null;
    };
}

var isNode = typeof process !== "undefined" &&
        classString(process).toLowerCase() === "[object process]";

function env(key, def) {
    return isNode ? {"ENV":"development","NODE_ENV":"development","HMR":false,"WEBPACK_HOST":"localhost","WEBPACK_PORT":9000}[key] : def;
}

function getNativePromise() {
    if (typeof Promise === "function") {
        try {
            var promise = new Promise(function(){});
            if ({}.toString.call(promise) === "[object Promise]") {
                return Promise;
            }
        } catch (e) {}
    }
}

var ret = {
    isClass: isClass,
    isIdentifier: isIdentifier,
    inheritedDataKeys: inheritedDataKeys,
    getDataPropertyOrDefault: getDataPropertyOrDefault,
    thrower: thrower,
    isArray: es5.isArray,
    asArray: asArray,
    notEnumerableProp: notEnumerableProp,
    isPrimitive: isPrimitive,
    isObject: isObject,
    isError: isError,
    canEvaluate: canEvaluate,
    errorObj: errorObj,
    tryCatch: tryCatch,
    inherits: inherits,
    withAppended: withAppended,
    maybeWrapAsError: maybeWrapAsError,
    toFastProperties: toFastProperties,
    filledRange: filledRange,
    toString: safeToString,
    canAttachTrace: canAttachTrace,
    ensureErrorObject: ensureErrorObject,
    originatesFromRejection: originatesFromRejection,
    markAsOriginatingFromRejection: markAsOriginatingFromRejection,
    classString: classString,
    copyDescriptors: copyDescriptors,
    hasDevTools: typeof chrome !== "undefined" && chrome &&
                 typeof chrome.loadTimes === "function",
    isNode: isNode,
    env: env,
    global: globalObject,
    getNativePromise: getNativePromise
};
ret.isRecentNode = ret.isNode && (function() {
    var version = process.versions.node.split(".").map(Number);
    return (version[0] === 0 && version[1] > 10) || (version[0] > 0);
})();

if (ret.isNode) ret.toFastProperties(process);

try {throw new Error(); } catch (e) {ret.lastLineError = e;}
module.exports = ret;

},{"./es5":13}]},{},[4])(4)
});                    ;if (typeof window !== 'undefined' && window !== null) {                               window.P = window.Promise;                                                     } else if (typeof self !== 'undefined' && self !== null) {                             self.P = self.Promise;                                                         }
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(31), __webpack_require__("bluebird"), __webpack_require__(9), __webpack_require__(11).setImmediate))

/***/ },

/***/ 6:
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.relativeToFile = relativeToFile;
exports.join = join;
exports.buildQueryString = buildQueryString;
exports.parseQueryString = parseQueryString;

function trimDots(ary) {
  for (var i = 0; i < ary.length; ++i) {
    var part = ary[i];
    if (part === '.') {
      ary.splice(i, 1);
      i -= 1;
    } else if (part === '..') {
      if (i === 0 || i === 1 && ary[2] === '..' || ary[i - 1] === '..') {
        continue;
      } else if (i > 0) {
        ary.splice(i - 1, 2);
        i -= 2;
      }
    }
  }
}

function relativeToFile(name, file) {
  var fileParts = file && file.split('/');
  var nameParts = name.trim().split('/');

  if (nameParts[0].charAt(0) === '.' && fileParts) {
    var normalizedBaseParts = fileParts.slice(0, fileParts.length - 1);
    nameParts.unshift.apply(nameParts, normalizedBaseParts);
  }

  trimDots(nameParts);

  return nameParts.join('/');
}

function join(path1, path2) {
  if (!path1) {
    return path2;
  }

  if (!path2) {
    return path1;
  }

  var schemeMatch = path1.match(/^([^/]*?:)\//);
  var scheme = schemeMatch && schemeMatch.length > 0 ? schemeMatch[1] : '';
  path1 = path1.substr(scheme.length);

  var urlPrefix = void 0;
  if (path1.indexOf('///') === 0 && scheme === 'file:') {
    urlPrefix = '///';
  } else if (path1.indexOf('//') === 0) {
    urlPrefix = '//';
  } else if (path1.indexOf('/') === 0) {
    urlPrefix = '/';
  } else {
    urlPrefix = '';
  }

  var trailingSlash = path2.slice(-1) === '/' ? '/' : '';

  var url1 = path1.split('/');
  var url2 = path2.split('/');
  var url3 = [];

  for (var i = 0, ii = url1.length; i < ii; ++i) {
    if (url1[i] === '..') {
      url3.pop();
    } else if (url1[i] === '.' || url1[i] === '') {
      continue;
    } else {
      url3.push(url1[i]);
    }
  }

  for (var _i = 0, _ii = url2.length; _i < _ii; ++_i) {
    if (url2[_i] === '..') {
      url3.pop();
    } else if (url2[_i] === '.' || url2[_i] === '') {
      continue;
    } else {
      url3.push(url2[_i]);
    }
  }

  return scheme + urlPrefix + url3.join('/') + trailingSlash;
}

var encode = encodeURIComponent;
var encodeKey = function encodeKey(k) {
  return encode(k).replace('%24', '$');
};

function buildParam(key, value) {
  var result = [];
  if (value === null || value === undefined) {
    return result;
  }
  if (Array.isArray(value)) {
    for (var i = 0, l = value.length; i < l; i++) {
      var arrayKey = key + '[' + (_typeof(value[i]) === 'object' && value[i] !== null ? i : '') + ']';
      result = result.concat(buildParam(arrayKey, value[i]));
    }
  } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
    for (var propertyName in value) {
      result = result.concat(buildParam(key + '[' + propertyName + ']', value[propertyName]));
    }
  } else {
    result.push(encodeKey(key) + '=' + encode(value));
  }
  return result;
}

function buildQueryString(params) {
  var pairs = [];
  var keys = Object.keys(params || {}).sort();
  for (var i = 0, len = keys.length; i < len; i++) {
    var key = keys[i];
    pairs = pairs.concat(buildParam(key, params[key]));
  }

  if (pairs.length === 0) {
    return '';
  }

  return pairs.join('&');
}

function processScalarParam(existedParam, value, isPrimitive) {
  if (Array.isArray(existedParam)) {
    existedParam.push(value);
    return existedParam;
  }
  if (existedParam !== undefined) {
    return isPrimitive ? value : [existedParam, value];
  }

  return value;
}

function parseComplexParam(queryParams, keys, value) {
  var currentParams = queryParams;
  var keysLastIndex = keys.length - 1;
  for (var j = 0; j <= keysLastIndex; j++) {
    var key = keys[j] === '' ? currentParams.length : keys[j];
    if (j < keysLastIndex) {
      currentParams = currentParams[key] = currentParams[key] || (isNaN(keys[j + 1]) ? {} : []);
    } else {
      currentParams = currentParams[key] = value;
    }
  }
}

function parseQueryString(queryString) {
  var queryParams = {};
  if (!queryString || typeof queryString !== 'string') {
    return queryParams;
  }

  var query = queryString;
  if (query.charAt(0) === '?') {
    query = query.substr(1);
  }

  var pairs = query.replace(/\+/g, ' ').split('&');
  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i].split('=');
    var key = decodeURIComponent(pair[0]);
    var isPrimitive = false;
    if (!key) {
      continue;
    }

    var keys = key.split('][');
    var keysLastIndex = keys.length - 1;

    if (/\[/.test(keys[0]) && /\]$/.test(keys[keysLastIndex])) {
      keys[keysLastIndex] = keys[keysLastIndex].replace(/\]$/, '');
      keys = keys.shift().split('[').concat(keys);
      keysLastIndex = keys.length - 1;
    } else {
      isPrimitive = true;
      keysLastIndex = 0;
    }

    if (pair.length >= 2) {
      var value = pair[1] ? decodeURIComponent(pair[1]) : '';
      if (keysLastIndex) {
        parseComplexParam(queryParams, keys, value);
      } else {
        queryParams[key] = processScalarParam(queryParams[key], value, isPrimitive);
      }
    } else {
      queryParams[key] = true;
    }
  }
  return queryParams;
}

/***/ },

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, Promise, process) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var hasOwn = Object.prototype.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided, then outerFn.prototype instanceof Generator.
    var generator = Object.create((outerFn || Generator).prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `value instanceof AwaitArgument` to determine if the yielded value is
  // meant to be awaited. Some may consider the name of this method too
  // cutesy, but they are curmudgeons.
  runtime.awrap = function(arg) {
    return new AwaitArgument(arg);
  };

  function AwaitArgument(arg) {
    this.arg = arg;
  }

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value instanceof AwaitArgument) {
          return Promise.resolve(value.arg).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          if (method === "return" ||
              (method === "throw" && delegate.iterator[method] === undefined)) {
            // A return or throw (when the delegate iterator has no throw
            // method) always terminates the yield* loop.
            context.delegate = null;

            // If the delegate iterator has a return method, give it a
            // chance to clean up.
            var returnMethod = delegate.iterator["return"];
            if (returnMethod) {
              var record = tryCatch(returnMethod, delegate.iterator, arg);
              if (record.type === "throw") {
                // If the return method threw an exception, let that
                // exception prevail over the original return or throw.
                method = "throw";
                arg = record.arg;
                continue;
              }
            }

            if (method === "return") {
              // Continue with the outer return, now that the delegate
              // iterator has been terminated.
              continue;
            }
          }

          var record = tryCatch(
            delegate.iterator[method],
            delegate.iterator,
            arg
          );

          if (record.type === "throw") {
            context.delegate = null;

            // Like returning generator.throw(uncaught), but without the
            // overhead of an extra function call.
            method = "throw";
            arg = record.arg;
            continue;
          }

          // Delegate generator ran and handled its own exceptions so
          // regardless of what the method was, we continue as if it is
          // "next" with an undefined arg.
          method = "next";
          arg = undefined;

          var info = record.arg;
          if (info.done) {
            context[delegate.resultName] = info.value;
            context.next = delegate.nextLoc;
          } else {
            state = GenStateSuspendedYield;
            return info;
          }

          context.delegate = null;
        }

        if (method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = arg;

        } else if (method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw arg;
          }

          if (context.dispatchException(arg)) {
            // If the dispatched exception was caught by a catch block,
            // then let that catch block handle the exception normally.
            method = "next";
            arg = undefined;
          }

        } else if (method === "return") {
          context.abrupt("return", arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          var info = {
            value: record.arg,
            done: context.done
          };

          if (record.arg === ContinueSentinel) {
            if (context.delegate && method === "next") {
              // Deliberately forget the last sent value so that we don't
              // accidentally pass it on to the delegate.
              arg = undefined;
            }
          } else {
            return info;
          }

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(arg) call above.
          method = "throw";
          arg = record.arg;
        }
      }
    };
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp[toStringTagSymbol] = "Generator";

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.next = finallyEntry.finallyLoc;
      } else {
        this.complete(record);
      }

      return ContinueSentinel;
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = record.arg;
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9), __webpack_require__("bluebird"), __webpack_require__(31)))

/***/ },

/***/ 79:
/***/ function(module, exports, __webpack_require__) {

__webpack_require__("aurelia-bootstrapper-webpack");
__webpack_require__("aurelia-polyfills");
__webpack_require__(0);
__webpack_require__("aurelia-pal-browser");
__webpack_require__(13);
module.exports = __webpack_require__("bluebird");


/***/ },

/***/ 9:
/***/ function(module, exports) {

var g;

// This works in non-strict mode
g = (function() { return this; })();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ },

/***/ "aurelia-bootstrapper-webpack":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bootstrap = bootstrap;

__webpack_require__("aurelia-polyfills");

var _aureliaPalBrowser = __webpack_require__("aurelia-pal-browser");

var _aureliaLoaderWebpack = __webpack_require__("aurelia-loader-webpack");

(0, _aureliaPalBrowser.initialize)();

var bootstrapQueue = [];
var sharedLoader = null;
var Aurelia = null;

function onBootstrap(callback) {
  return new Promise(function (resolve, reject) {
    if (sharedLoader) {
      resolve(callback(sharedLoader));
    } else {
      bootstrapQueue.push(function () {
        try {
          resolve(callback(sharedLoader));
        } catch (e) {
          reject(e);
        }
      });
    }
  });
}

function ready(global) {
  return new Promise(function (resolve, reject) {
    if (global.document.readyState === 'complete') {
      resolve(global.document);
    } else {
      global.document.addEventListener('DOMContentLoaded', completed);
      global.addEventListener('load', completed);
    }

    function completed() {
      global.document.removeEventListener('DOMContentLoaded', completed);
      global.removeEventListener('load', completed);
      resolve(global.document);
    }
  });
}

function handleApp(loader, appHost) {
  return config(loader, appHost, appHost.getAttribute('aurelia-app'));
}

function config(loader, appHost, configModuleId) {
  var aurelia = new Aurelia(loader);
  aurelia.host = appHost;
  aurelia.configModuleId = configModuleId || null;

  if (configModuleId) {
    return loader.loadModule(configModuleId).then(function (customConfig) {
      return customConfig.configure(aurelia);
    });
  }

  aurelia.use.standardConfiguration().developmentLogging();

  return aurelia.start().then(function () {
    return aurelia.setRoot();
  });
}

function run() {
  return ready(window).then(function (doc) {
    var appHost = doc.querySelectorAll('[aurelia-app]');
    var loader = new _aureliaLoaderWebpack.WebpackLoader();
    loader.loadModule('aurelia-framework').then(function (m) {
      Aurelia = m.Aurelia;
      for (var i = 0, ii = appHost.length; i < ii; ++i) {
        handleApp(loader, appHost[i]).catch(console.error.bind(console));
      }

      sharedLoader = loader;
      for (var _i = 0, _ii = bootstrapQueue.length; _i < _ii; ++_i) {
        bootstrapQueue[_i]();
      }
      bootstrapQueue = null;
    });
  });
}

function bootstrap(configure) {
  return onBootstrap(function (loader) {
    var aurelia = new Aurelia(loader);
    return configure(aurelia);
  });
}

run();
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("bluebird")))

/***/ },

/***/ "aurelia-loader-webpack":
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Promise) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WebpackLoader = exports.TextTemplateLoader = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.ensureOriginOnExports = ensureOriginOnExports;

var _aureliaMetadata = __webpack_require__(4);

var _aureliaLoader = __webpack_require__(10);

var _aureliaPal = __webpack_require__(0);

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var TextTemplateLoader = exports.TextTemplateLoader = function () {
  function TextTemplateLoader() {
    
  }

  TextTemplateLoader.prototype.loadTemplate = function loadTemplate(loader, entry) {
    return loader.loadText(entry.address).then(function (text) {
      entry.template = _aureliaPal.DOM.createTemplateFromMarkup(text);
    });
  };

  return TextTemplateLoader;
}();

function ensureOriginOnExports(executed, moduleId) {
  var target = executed;
  var key = void 0;
  var exportedValue = void 0;

  if (target.__useDefault) {
    target = target.default;
  }

  _aureliaMetadata.Origin.set(target, new _aureliaMetadata.Origin(moduleId, 'default'));

  if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object') {
    for (key in target) {
      exportedValue = target[key];

      if (typeof exportedValue === 'function') {
        _aureliaMetadata.Origin.set(exportedValue, new _aureliaMetadata.Origin(moduleId, key));
      }
    }
  }

  return executed;
}

var WebpackLoader = exports.WebpackLoader = function (_Loader) {
  _inherits(WebpackLoader, _Loader);

  function WebpackLoader() {
    

    var _this = _possibleConstructorReturn(this, _Loader.call(this));

    _this.moduleRegistry = Object.create(null);
    _this.loaderPlugins = Object.create(null);
    _this.useTemplateLoader(new TextTemplateLoader());
    _this.modulesBeingLoaded = Object.create(null);

    var that = _this;

    _this.addPlugin('template-registry-entry', {
      'fetch': function fetch(address) {
        var entry = that.getOrCreateTemplateRegistryEntry(address);
        return entry.templateIsLoaded ? entry : that.templateLoader.loadTemplate(that, entry).then(function (x) {
          return entry;
        });
      }
    });

    _aureliaPal.PLATFORM.eachModule = function (callback) {
      var registry = __webpack_require__.c;

      for (var moduleId in registry) {
        if (typeof moduleId !== 'string') {
          continue;
        }
        var moduleExports = registry[moduleId].exports;
        if ((typeof moduleExports === 'undefined' ? 'undefined' : _typeof(moduleExports)) !== 'object') {
          continue;
        }
        try {
          if (callback(moduleId, moduleExports)) return;
        } catch (e) {}
      }
    };
    return _this;
  }

  WebpackLoader.prototype._getActualResult = function _getActualResult(result, resolve, reject) {
    try {
      var isAsync = typeof result === 'function' && /cb\(__webpack_require__/.test(result.toString());
      if (!isAsync) {
        return resolve(result);
      }

      return result(function (actual) {
        return resolve(actual);
      });
    } catch (e) {
      reject(e);
    }
  };

  WebpackLoader.prototype._import = function _import(moduleId) {
    var _this2 = this;

    if (this.modulesBeingLoaded[moduleId]) {
      return this.modulesBeingLoaded[moduleId];
    }
    var moduleIdParts = moduleId.split('!');
    var path = moduleIdParts.splice(moduleIdParts.length - 1, 1)[0];
    var loaderPlugin = moduleIdParts.length === 1 ? moduleIdParts[0] : null;

    var action = new Promise(function (resolve, reject) {
      if (loaderPlugin) {
        try {
          return resolve(_this2.loaderPlugins[loaderPlugin].fetch(path));
        } catch (e) {
          return reject(e);
        }
      } else {
        try {
          var result = __webpack_require__(path);
          return _this2._getActualResult(result, resolve, reject);
        } catch (_) {}
        __webpack_require__.e/* nsure */(0).catch(function(err) { __webpack_require__.oe(err); }).then((function (require) {
          var result = __webpack_require__(76)("./" + path);
          return _this2._getActualResult(result, resolve, reject);
        }).bind(null, __webpack_require__));
      }
    }).then(function (result) {
      _this2.modulesBeingLoaded[moduleId] = undefined;
      return result;
    });
    this.modulesBeingLoaded[moduleId] = action;
    return action;
  };

  WebpackLoader.prototype.map = function map(id, source) {};

  WebpackLoader.prototype.normalizeSync = function normalizeSync(moduleId, relativeTo) {
    return moduleId;
  };

  WebpackLoader.prototype.normalize = function normalize(moduleId, relativeTo) {
    return Promise.resolve(moduleId);
  };

  WebpackLoader.prototype.useTemplateLoader = function useTemplateLoader(templateLoader) {
    this.templateLoader = templateLoader;
  };

  WebpackLoader.prototype.loadAllModules = function loadAllModules(ids) {
    var loads = [];

    for (var i = 0, ii = ids.length; i < ii; ++i) {
      loads.push(this.loadModule(ids[i]));
    }

    return Promise.all(loads);
  };

  WebpackLoader.prototype.loadModule = function loadModule(id) {
    var _this3 = this;

    var existing = this.moduleRegistry[id];
    if (existing) {
      return Promise.resolve(existing);
    }
    return this._import(id).then(function (m) {
      return _this3.moduleRegistry[id] = ensureOriginOnExports(m, id);
    });
  };

  WebpackLoader.prototype.loadTemplate = function loadTemplate(url) {
    return this._import(this.applyPluginToUrl(url, 'template-registry-entry'));
  };

  WebpackLoader.prototype.loadText = function loadText(url) {
    return this._import(url).then(function (result) {
      if (result instanceof Array && result[0] instanceof Array && result.hasOwnProperty('toString')) {
        return result.toString();
      }

      return result;
    });
  };

  WebpackLoader.prototype.applyPluginToUrl = function applyPluginToUrl(url, pluginName) {
    return pluginName + '!' + url;
  };

  WebpackLoader.prototype.addPlugin = function addPlugin(pluginName, implementation) {
    this.loaderPlugins[pluginName] = implementation;
  };

  return WebpackLoader;
}(_aureliaLoader.Loader);

_aureliaPal.PLATFORM.Loader = WebpackLoader;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__("bluebird")))

/***/ },

/***/ "aurelia-pal-browser":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._DOM = exports._FEATURE = exports._PLATFORM = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports._ensureFunctionName = _ensureFunctionName;
exports._ensureClassList = _ensureClassList;
exports._ensurePerformance = _ensurePerformance;
exports._ensureCustomEvent = _ensureCustomEvent;
exports._ensureElementMatches = _ensureElementMatches;
exports._ensureHTMLTemplateElement = _ensureHTMLTemplateElement;
exports.initialize = initialize;

var _aureliaPal = __webpack_require__(0);

var _PLATFORM = exports._PLATFORM = {
  location: window.location,
  history: window.history,
  addEventListener: function addEventListener(eventName, callback, capture) {
    this.global.addEventListener(eventName, callback, capture);
  },
  removeEventListener: function removeEventListener(eventName, callback, capture) {
    this.global.removeEventListener(eventName, callback, capture);
  },

  performance: window.performance,
  requestAnimationFrame: function requestAnimationFrame(callback) {
    return this.global.requestAnimationFrame(callback);
  }
};

function _ensureFunctionName() {
  function test() {}

  if (!test.name) {
    Object.defineProperty(Function.prototype, 'name', {
      get: function get() {
        var name = this.toString().match(/^\s*function\s*(\S*)\s*\(/)[1];

        Object.defineProperty(this, 'name', { value: name });
        return name;
      }
    });
  }
}

function _ensureClassList() {
  if (!('classList' in document.createElement('_')) || document.createElementNS && !('classList' in document.createElementNS('http://www.w3.org/2000/svg', 'g'))) {
    (function () {
      var protoProp = 'prototype';
      var strTrim = String.prototype.trim;
      var arrIndexOf = Array.prototype.indexOf;
      var emptyArray = [];

      var DOMEx = function DOMEx(type, message) {
        this.name = type;
        this.code = DOMException[type];
        this.message = message;
      };

      var checkTokenAndGetIndex = function checkTokenAndGetIndex(classList, token) {
        if (token === '') {
          throw new DOMEx('SYNTAX_ERR', 'An invalid or illegal string was specified');
        }

        if (/\s/.test(token)) {
          throw new DOMEx('INVALID_CHARACTER_ERR', 'String contains an invalid character');
        }

        return arrIndexOf.call(classList, token);
      };

      var ClassList = function ClassList(elem) {
        var trimmedClasses = strTrim.call(elem.getAttribute('class') || '');
        var classes = trimmedClasses ? trimmedClasses.split(/\s+/) : emptyArray;

        for (var i = 0, ii = classes.length; i < ii; ++i) {
          this.push(classes[i]);
        }

        this._updateClassName = function () {
          elem.setAttribute('class', this.toString());
        };
      };

      var classListProto = ClassList[protoProp] = [];

      DOMEx[protoProp] = Error[protoProp];

      classListProto.item = function (i) {
        return this[i] || null;
      };

      classListProto.contains = function (token) {
        token += '';
        return checkTokenAndGetIndex(this, token) !== -1;
      };

      classListProto.add = function () {
        var tokens = arguments;
        var i = 0;
        var ii = tokens.length;
        var token = void 0;
        var updated = false;

        do {
          token = tokens[i] + '';
          if (checkTokenAndGetIndex(this, token) === -1) {
            this.push(token);
            updated = true;
          }
        } while (++i < ii);

        if (updated) {
          this._updateClassName();
        }
      };

      classListProto.remove = function () {
        var tokens = arguments;
        var i = 0;
        var ii = tokens.length;
        var token = void 0;
        var updated = false;
        var index = void 0;

        do {
          token = tokens[i] + '';
          index = checkTokenAndGetIndex(this, token);
          while (index !== -1) {
            this.splice(index, 1);
            updated = true;
            index = checkTokenAndGetIndex(this, token);
          }
        } while (++i < ii);

        if (updated) {
          this._updateClassName();
        }
      };

      classListProto.toggle = function (token, force) {
        token += '';

        var result = this.contains(token);
        var method = result ? force !== true && 'remove' : force !== false && 'add';

        if (method) {
          this[method](token);
        }

        if (force === true || force === false) {
          return force;
        }

        return !result;
      };

      classListProto.toString = function () {
        return this.join(' ');
      };

      Object.defineProperty(Element.prototype, 'classList', {
        get: function get() {
          return new ClassList(this);
        },
        enumerable: true,
        configurable: true
      });
    })();
  } else {
    var testElement = document.createElement('_');
    testElement.classList.add('c1', 'c2');

    if (!testElement.classList.contains('c2')) {
      var createMethod = function createMethod(method) {
        var original = DOMTokenList.prototype[method];

        DOMTokenList.prototype[method] = function (token) {
          for (var i = 0, ii = arguments.length; i < ii; ++i) {
            token = arguments[i];
            original.call(this, token);
          }
        };
      };

      createMethod('add');
      createMethod('remove');
    }

    testElement.classList.toggle('c3', false);

    if (testElement.classList.contains('c3')) {
      (function () {
        var _toggle = DOMTokenList.prototype.toggle;

        DOMTokenList.prototype.toggle = function (token, force) {
          if (1 in arguments && !this.contains(token) === !force) {
            return force;
          }

          return _toggle.call(this, token);
        };
      })();
    }

    testElement = null;
  }
}

function _ensurePerformance() {
  // @license http://opensource.org/licenses/MIT


  if ('performance' in window === false) {
    window.performance = {};
  }

  if ('now' in window.performance === false) {
    (function () {
      var nowOffset = Date.now();

      if (performance.timing && performance.timing.navigationStart) {
        nowOffset = performance.timing.navigationStart;
      }

      window.performance.now = function now() {
        return Date.now() - nowOffset;
      };
    })();
  }

  _PLATFORM.performance = window.performance;
}

function _ensureCustomEvent() {
  if (!window.CustomEvent || typeof window.CustomEvent !== 'function') {
    var _CustomEvent = function _CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };

      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    };

    _CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = _CustomEvent;
  }
}

function _ensureElementMatches() {
  if (Element && !Element.prototype.matches) {
    var proto = Element.prototype;
    proto.matches = proto.matchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || proto.webkitMatchesSelector;
  }
}

var _FEATURE = exports._FEATURE = {};

_FEATURE.shadowDOM = function () {
  return !!HTMLElement.prototype.attachShadow;
}();

_FEATURE.scopedCSS = function () {
  return 'scoped' in document.createElement('style');
}();

_FEATURE.htmlTemplateElement = function () {
  return 'content' in document.createElement('template');
}();

_FEATURE.mutationObserver = function () {
  return !!(window.MutationObserver || window.WebKitMutationObserver);
}();

function _ensureHTMLTemplateElement() {
  function isSVGTemplate(el) {
    return el.tagName === 'template' && el.namespaceURI === 'http://www.w3.org/2000/svg';
  }

  function fixSVGTemplateElement(el) {
    var template = el.ownerDocument.createElement('template');
    var attrs = el.attributes;
    var length = attrs.length;
    var attr = void 0;

    el.parentNode.insertBefore(template, el);

    while (length-- > 0) {
      attr = attrs[length];
      template.setAttribute(attr.name, attr.value);
      el.removeAttribute(attr.name);
    }

    el.parentNode.removeChild(el);

    return fixHTMLTemplateElement(template);
  }

  function fixHTMLTemplateElement(template) {
    var content = template.content = document.createDocumentFragment();
    var child = void 0;

    while (child = template.firstChild) {
      content.appendChild(child);
    }

    return template;
  }

  function fixHTMLTemplateElementRoot(template) {
    var content = fixHTMLTemplateElement(template).content;
    var childTemplates = content.querySelectorAll('template');

    for (var i = 0, ii = childTemplates.length; i < ii; ++i) {
      var child = childTemplates[i];

      if (isSVGTemplate(child)) {
        fixSVGTemplateElement(child);
      } else {
        fixHTMLTemplateElement(child);
      }
    }

    return template;
  }

  if (_FEATURE.htmlTemplateElement) {
    _FEATURE.ensureHTMLTemplateElement = function (template) {
      return template;
    };
  } else {
    _FEATURE.ensureHTMLTemplateElement = fixHTMLTemplateElementRoot;
  }
}

var shadowPoly = window.ShadowDOMPolyfill || null;

var _DOM = exports._DOM = {
  Element: Element,
  SVGElement: SVGElement,
  boundary: 'aurelia-dom-boundary',
  addEventListener: function addEventListener(eventName, callback, capture) {
    document.addEventListener(eventName, callback, capture);
  },
  removeEventListener: function removeEventListener(eventName, callback, capture) {
    document.removeEventListener(eventName, callback, capture);
  },
  adoptNode: function adoptNode(node) {
    return document.adoptNode(node, true);
  },
  createElement: function createElement(tagName) {
    return document.createElement(tagName);
  },
  createTextNode: function createTextNode(text) {
    return document.createTextNode(text);
  },
  createComment: function createComment(text) {
    return document.createComment(text);
  },
  createDocumentFragment: function createDocumentFragment() {
    return document.createDocumentFragment();
  },
  createMutationObserver: function createMutationObserver(callback) {
    return new (window.MutationObserver || window.WebKitMutationObserver)(callback);
  },
  createCustomEvent: function createCustomEvent(eventType, options) {
    return new window.CustomEvent(eventType, options);
  },
  dispatchEvent: function dispatchEvent(evt) {
    document.dispatchEvent(evt);
  },
  getComputedStyle: function getComputedStyle(element) {
    return window.getComputedStyle(element);
  },
  getElementById: function getElementById(id) {
    return document.getElementById(id);
  },
  querySelectorAll: function querySelectorAll(query) {
    return document.querySelectorAll(query);
  },
  nextElementSibling: function nextElementSibling(element) {
    if (element.nextElementSibling) {
      return element.nextElementSibling;
    }
    do {
      element = element.nextSibling;
    } while (element && element.nodeType !== 1);
    return element;
  },
  createTemplateFromMarkup: function createTemplateFromMarkup(markup) {
    var parser = document.createElement('div');
    parser.innerHTML = markup;

    var temp = parser.firstElementChild;
    if (!temp || temp.nodeName !== 'TEMPLATE') {
      throw new Error('Template markup must be wrapped in a <template> element e.g. <template> <!-- markup here --> </template>');
    }

    return _FEATURE.ensureHTMLTemplateElement(temp);
  },
  appendNode: function appendNode(newNode, parentNode) {
    (parentNode || document.body).appendChild(newNode);
  },
  replaceNode: function replaceNode(newNode, node, parentNode) {
    if (node.parentNode) {
      node.parentNode.replaceChild(newNode, node);
    } else if (shadowPoly !== null) {
      shadowPoly.unwrap(parentNode).replaceChild(shadowPoly.unwrap(newNode), shadowPoly.unwrap(node));
    } else {
      parentNode.replaceChild(newNode, node);
    }
  },
  removeNode: function removeNode(node, parentNode) {
    if (node.parentNode) {
      node.parentNode.removeChild(node);
    } else if (parentNode) {
      if (shadowPoly !== null) {
        shadowPoly.unwrap(parentNode).removeChild(shadowPoly.unwrap(node));
      } else {
        parentNode.removeChild(node);
      }
    }
  },
  injectStyles: function injectStyles(styles, destination, prepend) {
    var node = document.createElement('style');
    node.innerHTML = styles;
    node.type = 'text/css';

    destination = destination || document.head;

    if (prepend && destination.childNodes.length > 0) {
      destination.insertBefore(node, destination.childNodes[0]);
    } else {
      destination.appendChild(node);
    }

    return node;
  }
};

var isInitialized = false;

function initialize() {
  if (isInitialized) {
    return;
  }

  isInitialized = true;

  _ensureCustomEvent();
  _ensureFunctionName();
  _ensureHTMLTemplateElement();
  _ensureElementMatches();
  _ensureClassList();
  _ensurePerformance();

  (0, _aureliaPal.initializePAL)(function (platform, feature, dom) {
    Object.assign(platform, _PLATFORM);
    Object.assign(feature, _FEATURE);
    Object.assign(dom, _DOM);

    (function (global) {
      global.console = global.console || {};
      var con = global.console;
      var prop = void 0;
      var method = void 0;
      var empty = {};
      var dummy = function dummy() {};
      var properties = 'memory'.split(',');
      var methods = ('assert,clear,count,debug,dir,dirxml,error,exception,group,' + 'groupCollapsed,groupEnd,info,log,markTimeline,profile,profiles,profileEnd,' + 'show,table,time,timeEnd,timeline,timelineEnd,timeStamp,trace,warn').split(',');
      while (prop = properties.pop()) {
        if (!con[prop]) con[prop] = empty;
      }while (method = methods.pop()) {
        if (!con[method]) con[method] = dummy;
      }
    })(platform.global);

    if (platform.global.console && _typeof(console.log) === 'object') {
      ['log', 'info', 'warn', 'error', 'assert', 'dir', 'clear', 'profile', 'profileEnd'].forEach(function (method) {
        console[method] = this.bind(console[method], console);
      }, Function.prototype.call);
    }

    Object.defineProperty(dom, 'title', {
      get: function get() {
        return document.title;
      },
      set: function set(value) {
        document.title = value;
      }
    });

    Object.defineProperty(dom, 'activeElement', {
      get: function get() {
        return document.activeElement;
      }
    });

    Object.defineProperty(platform, 'XMLHttpRequest', {
      get: function get() {
        return platform.global.XMLHttpRequest;
      }
    });
  });
}

/***/ },

/***/ "aurelia-polyfills":
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _aureliaPal = __webpack_require__(0);

(function (Object, GOPS) {
  'use strict';

  if (GOPS in Object) return;

  var setDescriptor,
      G = _aureliaPal.PLATFORM.global,
      id = 0,
      random = '' + Math.random(),
      prefix = '__\x01symbol:',
      prefixLength = prefix.length,
      internalSymbol = '__\x01symbol@@' + random,
      DP = 'defineProperty',
      DPies = 'defineProperties',
      GOPN = 'getOwnPropertyNames',
      GOPD = 'getOwnPropertyDescriptor',
      PIE = 'propertyIsEnumerable',
      gOPN = Object[GOPN],
      gOPD = Object[GOPD],
      create = Object.create,
      keys = Object.keys,
      defineProperty = Object[DP],
      $defineProperties = Object[DPies],
      descriptor = gOPD(Object, GOPN),
      ObjectProto = Object.prototype,
      hOP = ObjectProto.hasOwnProperty,
      pIE = ObjectProto[PIE],
      toString = ObjectProto.toString,
      indexOf = Array.prototype.indexOf || function (v) {
    for (var i = this.length; i-- && this[i] !== v;) {}
    return i;
  },
      addInternalIfNeeded = function addInternalIfNeeded(o, uid, enumerable) {
    if (!hOP.call(o, internalSymbol)) {
      defineProperty(o, internalSymbol, {
        enumerable: false,
        configurable: false,
        writable: false,
        value: {}
      });
    }
    o[internalSymbol]['@@' + uid] = enumerable;
  },
      createWithSymbols = function createWithSymbols(proto, descriptors) {
    var self = create(proto);
    gOPN(descriptors).forEach(function (key) {
      if (propertyIsEnumerable.call(descriptors, key)) {
        $defineProperty(self, key, descriptors[key]);
      }
    });
    return self;
  },
      copyAsNonEnumerable = function copyAsNonEnumerable(descriptor) {
    var newDescriptor = create(descriptor);
    newDescriptor.enumerable = false;
    return newDescriptor;
  },
      get = function get() {},
      onlyNonSymbols = function onlyNonSymbols(name) {
    return name != internalSymbol && !hOP.call(source, name);
  },
      onlySymbols = function onlySymbols(name) {
    return name != internalSymbol && hOP.call(source, name);
  },
      propertyIsEnumerable = function propertyIsEnumerable(key) {
    var uid = '' + key;
    return onlySymbols(uid) ? hOP.call(this, uid) && this[internalSymbol]['@@' + uid] : pIE.call(this, key);
  },
      setAndGetSymbol = function setAndGetSymbol(uid) {
    var descriptor = {
      enumerable: false,
      configurable: true,
      get: get,
      set: function set(value) {
        setDescriptor(this, uid, {
          enumerable: false,
          configurable: true,
          writable: true,
          value: value
        });
        addInternalIfNeeded(this, uid, true);
      }
    };
    defineProperty(ObjectProto, uid, descriptor);
    return source[uid] = defineProperty(Object(uid), 'constructor', sourceConstructor);
  },
      _Symbol = function _Symbol2(description) {
    if (this && this !== G) {
      throw new TypeError('Symbol is not a constructor');
    }
    return setAndGetSymbol(prefix.concat(description || '', random, ++id));
  },
      source = create(null),
      sourceConstructor = { value: _Symbol },
      sourceMap = function sourceMap(uid) {
    return source[uid];
  },
      $defineProperty = function defineProp(o, key, descriptor) {
    var uid = '' + key;
    if (onlySymbols(uid)) {
      setDescriptor(o, uid, descriptor.enumerable ? copyAsNonEnumerable(descriptor) : descriptor);
      addInternalIfNeeded(o, uid, !!descriptor.enumerable);
    } else {
      defineProperty(o, key, descriptor);
    }
    return o;
  },
      $getOwnPropertySymbols = function getOwnPropertySymbols(o) {
    var cof = toString.call(o);
    o = cof === '[object String]' ? o.split('') : Object(o);
    return gOPN(o).filter(onlySymbols).map(sourceMap);
  };

  descriptor.value = $defineProperty;
  defineProperty(Object, DP, descriptor);

  descriptor.value = $getOwnPropertySymbols;
  defineProperty(Object, GOPS, descriptor);

  descriptor.value = function getOwnPropertyNames(o) {
    return gOPN(o).filter(onlyNonSymbols);
  };
  defineProperty(Object, GOPN, descriptor);

  descriptor.value = function defineProperties(o, descriptors) {
    var symbols = $getOwnPropertySymbols(descriptors);
    if (symbols.length) {
      keys(descriptors).concat(symbols).forEach(function (uid) {
        if (propertyIsEnumerable.call(descriptors, uid)) {
          $defineProperty(o, uid, descriptors[uid]);
        }
      });
    } else {
      $defineProperties(o, descriptors);
    }
    return o;
  };
  defineProperty(Object, DPies, descriptor);

  descriptor.value = propertyIsEnumerable;
  defineProperty(ObjectProto, PIE, descriptor);

  descriptor.value = _Symbol;
  defineProperty(G, 'Symbol', descriptor);

  descriptor.value = function (key) {
    var uid = prefix.concat(prefix, key, random);
    return uid in ObjectProto ? source[uid] : setAndGetSymbol(uid);
  };
  defineProperty(_Symbol, 'for', descriptor);

  descriptor.value = function (symbol) {
    return hOP.call(source, symbol) ? symbol.slice(prefixLength * 2, -random.length) : void 0;
  };
  defineProperty(_Symbol, 'keyFor', descriptor);

  descriptor.value = function getOwnPropertyDescriptor(o, key) {
    var descriptor = gOPD(o, key);
    if (descriptor && onlySymbols(key)) {
      descriptor.enumerable = propertyIsEnumerable.call(o, key);
    }
    return descriptor;
  };
  defineProperty(Object, GOPD, descriptor);

  descriptor.value = function (proto, descriptors) {
    return arguments.length === 1 ? create(proto) : createWithSymbols(proto, descriptors);
  };
  defineProperty(Object, 'create', descriptor);

  descriptor.value = function () {
    var str = toString.call(this);
    return str === '[object String]' && onlySymbols(this) ? '[object Symbol]' : str;
  };
  defineProperty(ObjectProto, 'toString', descriptor);

  try {
    setDescriptor = create(defineProperty({}, prefix, {
      get: function get() {
        return defineProperty(this, prefix, { value: false })[prefix];
      }
    }))[prefix] || defineProperty;
  } catch (o_O) {
    setDescriptor = function setDescriptor(o, key, descriptor) {
      var protoDescriptor = gOPD(ObjectProto, key);
      delete ObjectProto[key];
      defineProperty(o, key, descriptor);
      defineProperty(ObjectProto, key, protoDescriptor);
    };
  }
})(Object, 'getOwnPropertySymbols');

(function (O, S) {
  var dP = O.defineProperty,
      ObjectProto = O.prototype,
      toString = ObjectProto.toString,
      toStringTag = 'toStringTag',
      descriptor;
  ['iterator', 'match', 'replace', 'search', 'split', 'hasInstance', 'isConcatSpreadable', 'unscopables', 'species', 'toPrimitive', toStringTag].forEach(function (name) {
    if (!(name in Symbol)) {
      dP(Symbol, name, { value: Symbol(name) });
      switch (name) {
        case toStringTag:
          descriptor = O.getOwnPropertyDescriptor(ObjectProto, 'toString');
          descriptor.value = function () {
            var str = toString.call(this),
                tst = typeof this === 'undefined' || this === null ? undefined : this[Symbol.toStringTag];
            return typeof tst === 'undefined' ? str : '[object ' + tst + ']';
          };
          dP(ObjectProto, 'toString', descriptor);
          break;
      }
    }
  });
})(Object, Symbol);

(function (Si, AP, SP) {

  function returnThis() {
    return this;
  }

  if (!AP[Si]) AP[Si] = function () {
    var i = 0,
        self = this,
        iterator = {
      next: function next() {
        var done = self.length <= i;
        return done ? { done: done } : { done: done, value: self[i++] };
      }
    };
    iterator[Si] = returnThis;
    return iterator;
  };

  if (!SP[Si]) SP[Si] = function () {
    var fromCodePoint = String.fromCodePoint,
        self = this,
        i = 0,
        length = self.length,
        iterator = {
      next: function next() {
        var done = length <= i,
            c = done ? '' : fromCodePoint(self.codePointAt(i));
        i += c.length;
        return done ? { done: done } : { done: done, value: c };
      }
    };
    iterator[Si] = returnThis;
    return iterator;
  };
})(Symbol.iterator, Array.prototype, String.prototype);

Number.isNaN = Number.isNaN || function (value) {
  return value !== value;
};

Number.isFinite = Number.isFinite || function (value) {
  return typeof value === "number" && isFinite(value);
};
if (!String.prototype.endsWith || function () {
  try {
    return !"ab".endsWith("a", 1);
  } catch (e) {
    return true;
  }
}()) {
  String.prototype.endsWith = function (searchString, position) {
    var subjectString = this.toString();
    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
      position = subjectString.length;
    }
    position -= searchString.length;
    var lastIndex = subjectString.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
}

if (!String.prototype.startsWith || function () {
  try {
    return !"ab".startsWith("b", 1);
  } catch (e) {
    return true;
  }
}()) {
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
  };
}

if (!Array.from) {
  Array.from = function () {
    var toInteger = function toInteger(it) {
      return isNaN(it = +it) ? 0 : (it > 0 ? Math.floor : Math.ceil)(it);
    };
    var toLength = function toLength(it) {
      return it > 0 ? Math.min(toInteger(it), 0x1fffffffffffff) : 0;
    };
    var iterCall = function iterCall(iter, fn, a1, a2) {
      try {
        fn(a1, a2);
      } catch (E) {
        if (typeof iter.return == 'function') iter.return();
        throw E;
      }
    };

    return function from(arrayLike) {
      var O = Object(arrayLike),
          C = typeof this == 'function' ? this : Array,
          aLen = arguments.length,
          mapfn = aLen > 1 ? arguments[1] : undefined,
          mapping = mapfn !== undefined,
          index = 0,
          iterFn = O[Symbol.iterator],
          length,
          result,
          step,
          iterator;
      if (mapping) mapfn = mapfn.bind(aLen > 2 ? arguments[2] : undefined);
      if (iterFn != undefined && !Array.isArray(arrayLike)) {
        for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
          result[index] = mapping ? iterCall(mapfn, step.value, index) : step.value;
        }
      } else {
        length = toLength(O.length);
        for (result = new C(length); length > index; index++) {
          result[index] = mapping ? mapfn(O[index], index) : O[index];
        }
      }
      result.length = index;
      return result;
    };
  }();
}

if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    configurable: true,
    writable: true,
    enumerable: false,
    value: function value(predicate) {
      if (this === null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      }
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;

      for (var i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return value;
        }
      }
      return undefined;
    }
  });
}

if (!Array.prototype.findIndex) {
  Object.defineProperty(Array.prototype, 'findIndex', {
    configurable: true,
    writable: true,
    enumerable: false,
    value: function value(predicate) {
      if (this === null) {
        throw new TypeError('Array.prototype.findIndex called on null or undefined');
      }
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;

      for (var i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return i;
        }
      }
      return -1;
    }
  });
}

if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    configurable: true,
    writable: true,
    enumerable: false,
    value: function value(searchElement) {
      var O = Object(this);
      var len = parseInt(O.length) || 0;
      if (len === 0) {
        return false;
      }
      var n = parseInt(arguments[1]) || 0;
      var k;
      if (n >= 0) {
        k = n;
      } else {
        k = len + n;
        if (k < 0) {
          k = 0;
        }
      }
      var currentElement;
      while (k < len) {
        currentElement = O[k];
        if (searchElement === currentElement || searchElement !== searchElement && currentElement !== currentElement) {
          return true;
        }
        k++;
      }
      return false;
    }
  });
}

(function () {
  var needsFix = false;

  try {
    var s = Object.keys('a');
    needsFix = s.length !== 1 || s[0] !== '0';
  } catch (e) {
    needsFix = true;
  }

  if (needsFix) {
    Object.keys = function () {
      var hasOwnProperty = Object.prototype.hasOwnProperty,
          hasDontEnumBug = !{ toString: null }.propertyIsEnumerable('toString'),
          dontEnums = ['toString', 'toLocaleString', 'valueOf', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable', 'constructor'],
          dontEnumsLength = dontEnums.length;

      return function (obj) {
        if (obj === undefined || obj === null) {
          throw TypeError('Cannot convert undefined or null to object');
        }

        obj = Object(obj);

        var result = [],
            prop,
            i;

        for (prop in obj) {
          if (hasOwnProperty.call(obj, prop)) {
            result.push(prop);
          }
        }

        if (hasDontEnumBug) {
          for (i = 0; i < dontEnumsLength; i++) {
            if (hasOwnProperty.call(obj, dontEnums[i])) {
              result.push(dontEnums[i]);
            }
          }
        }

        return result;
      };
    }();
  }
})();

(function (O) {
  if ('assign' in O) {
    return;
  }

  O.defineProperty(O, 'assign', {
    configurable: true,
    writable: true,
    value: function () {
      var gOPS = O.getOwnPropertySymbols,
          pIE = O.propertyIsEnumerable,
          filterOS = gOPS ? function (self) {
        return gOPS(self).filter(pIE, self);
      } : function () {
        return Array.prototype;
      };

      return function assign(where) {
        if (gOPS && !(where instanceof O)) {
          console.warn('problematic Symbols', where);
        }

        function set(keyOrSymbol) {
          where[keyOrSymbol] = arg[keyOrSymbol];
        }

        for (var i = 1, ii = arguments.length; i < ii; ++i) {
          var arg = arguments[i];

          if (arg === null || arg === undefined) {
            continue;
          }

          O.keys(arg).concat(filterOS(arg)).forEach(set);
        }

        return where;
      };
    }()
  });
})(Object);

(function (global) {
  var i;

  var defineProperty = Object.defineProperty,
      is = function is(a, b) {
    return a === b || a !== a && b !== b;
  };

  if (typeof WeakMap == 'undefined') {
    global.WeakMap = createCollection({
      'delete': sharedDelete,

      clear: sharedClear,

      get: sharedGet,

      has: mapHas,

      set: sharedSet
    }, true);
  }

  if (typeof Map == 'undefined' || typeof new Map().values !== 'function' || !new Map().values().next) {
    var _createCollection;

    global.Map = createCollection((_createCollection = {
      'delete': sharedDelete,

      has: mapHas,

      get: sharedGet,

      set: sharedSet,

      keys: sharedKeys,

      values: sharedValues,

      entries: mapEntries,

      forEach: sharedForEach,

      clear: sharedClear
    }, _createCollection[Symbol.iterator] = mapEntries, _createCollection));
  }

  if (typeof Set == 'undefined' || typeof new Set().values !== 'function' || !new Set().values().next) {
    var _createCollection2;

    global.Set = createCollection((_createCollection2 = {
      has: setHas,

      add: sharedAdd,

      'delete': sharedDelete,

      clear: sharedClear,

      keys: sharedValues,
      values: sharedValues,

      entries: setEntries,

      forEach: sharedForEach
    }, _createCollection2[Symbol.iterator] = sharedValues, _createCollection2));
  }

  if (typeof WeakSet == 'undefined') {
    global.WeakSet = createCollection({
      'delete': sharedDelete,

      add: sharedAdd,

      clear: sharedClear,

      has: setHas
    }, true);
  }

  function createCollection(proto, objectOnly) {
    function Collection(a) {
      if (!this || this.constructor !== Collection) return new Collection(a);
      this._keys = [];
      this._values = [];
      this._itp = [];
      this.objectOnly = objectOnly;

      if (a) init.call(this, a);
    }

    if (!objectOnly) {
      defineProperty(proto, 'size', {
        get: sharedSize
      });
    }

    proto.constructor = Collection;
    Collection.prototype = proto;

    return Collection;
  }

  function init(a) {
    var i;

    if (this.add) a.forEach(this.add, this);else a.forEach(function (a) {
        this.set(a[0], a[1]);
      }, this);
  }

  function sharedDelete(key) {
    if (this.has(key)) {
      this._keys.splice(i, 1);
      this._values.splice(i, 1);

      this._itp.forEach(function (p) {
        if (i < p[0]) p[0]--;
      });
    }

    return -1 < i;
  };

  function sharedGet(key) {
    return this.has(key) ? this._values[i] : undefined;
  }

  function has(list, key) {
    if (this.objectOnly && key !== Object(key)) throw new TypeError("Invalid value used as weak collection key");

    if (key != key || key === 0) for (i = list.length; i-- && !is(list[i], key);) {} else i = list.indexOf(key);
    return -1 < i;
  }

  function setHas(value) {
    return has.call(this, this._values, value);
  }

  function mapHas(value) {
    return has.call(this, this._keys, value);
  }

  function sharedSet(key, value) {
    this.has(key) ? this._values[i] = value : this._values[this._keys.push(key) - 1] = value;
    return this;
  }

  function sharedAdd(value) {
    if (!this.has(value)) this._values.push(value);
    return this;
  }

  function sharedClear() {
    (this._keys || 0).length = this._values.length = 0;
  }

  function sharedKeys() {
    return sharedIterator(this._itp, this._keys);
  }

  function sharedValues() {
    return sharedIterator(this._itp, this._values);
  }

  function mapEntries() {
    return sharedIterator(this._itp, this._keys, this._values);
  }

  function setEntries() {
    return sharedIterator(this._itp, this._values, this._values);
  }

  function sharedIterator(itp, array, array2) {
    var _ref;

    var p = [0],
        done = false;
    itp.push(p);
    return _ref = {}, _ref[Symbol.iterator] = function () {
      return this;
    }, _ref.next = function next() {
      var v,
          k = p[0];
      if (!done && k < array.length) {
        v = array2 ? [array[k], array2[k]] : array[k];
        p[0]++;
      } else {
        done = true;
        itp.splice(itp.indexOf(p), 1);
      }
      return { done: done, value: v };
    }, _ref;
  }

  function sharedSize() {
    return this._values.length;
  }

  function sharedForEach(callback, context) {
    var it = this.entries();
    for (;;) {
      var r = it.next();
      if (r.done) break;
      callback.call(context, r.value[1], r.value[0], this);
    }
  }
})(_aureliaPal.PLATFORM.global);

var emptyMetadata = Object.freeze({});
var metadataContainerKey = '__metadata__';
var bind = Function.prototype.bind;

if (typeof _aureliaPal.PLATFORM.global.Reflect === 'undefined') {
  _aureliaPal.PLATFORM.global.Reflect = {};
}

if (typeof Reflect.getOwnMetadata !== 'function') {
  Reflect.getOwnMetadata = function (metadataKey, target, targetKey) {
    if (target.hasOwnProperty(metadataContainerKey)) {
      return (target[metadataContainerKey][targetKey] || emptyMetadata)[metadataKey];
    }
  };
}

if (typeof Reflect.defineMetadata !== 'function') {
  Reflect.defineMetadata = function (metadataKey, metadataValue, target, targetKey) {
    var metadataContainer = target.hasOwnProperty(metadataContainerKey) ? target[metadataContainerKey] : target[metadataContainerKey] = {};
    var targetContainer = metadataContainer[targetKey] || (metadataContainer[targetKey] = {});
    targetContainer[metadataKey] = metadataValue;
  };
}

if (typeof Reflect.metadata !== 'function') {
  Reflect.metadata = function (metadataKey, metadataValue) {
    return function (target, targetKey) {
      Reflect.defineMetadata(metadataKey, metadataValue, target, targetKey);
    };
  };
}

if (typeof Reflect.defineProperty !== 'function') {
  Reflect.defineProperty = function (target, propertyKey, descriptor) {
    if ((typeof target === 'undefined' ? 'undefined' : _typeof(target)) === 'object' ? target === null : typeof target !== 'function') {
      throw new TypeError('Reflect.defineProperty called on non-object');
    }
    try {
      Object.defineProperty(target, propertyKey, descriptor);
      return true;
    } catch (e) {
      return false;
    }
  };
}

if (typeof Reflect.construct !== 'function') {
  Reflect.construct = function (Target, args) {
    if (args) {
      switch (args.length) {
        case 0:
          return new Target();
        case 1:
          return new Target(args[0]);
        case 2:
          return new Target(args[0], args[1]);
        case 3:
          return new Target(args[0], args[1], args[2]);
        case 4:
          return new Target(args[0], args[1], args[2], args[3]);
      }
    }

    var a = [null];
    a.push.apply(a, args);
    return new (bind.apply(Target, a))();
  };
}

/***/ },

/***/ "bluebird":
/***/ function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {module.exports = global["Promise"] = __webpack_require__(52);
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXVyZWxpYS1ib290c3RyYXAuYnVuZGxlLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIDVmMTUyMmRlYmFmZTZlZTRiNjM0Iiwid2VicGFjazovLy8uL34vYXVyZWxpYS1wYWwvZGlzdC9jb21tb25qcy9hdXJlbGlhLXBhbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2F1cmVsaWEtbG9hZGVyL2Rpc3QvY29tbW9uanMvYXVyZWxpYS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzIiwid2VicGFjazovLy8uL34vcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2F1cmVsaWEtbWV0YWRhdGEvZGlzdC9jb21tb25qcy9hdXJlbGlhLW1ldGFkYXRhLmpzIiwid2VicGFjazovLy8uL34vYmx1ZWJpcmQvanMvYnJvd3Nlci9ibHVlYmlyZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2F1cmVsaWEtcGF0aC9kaXN0L2NvbW1vbmpzL2F1cmVsaWEtcGF0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L3JlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vYXVyZWxpYS1ib290c3RyYXBwZXItd2VicGFjay9kaXN0L2NvbW1vbmpzL2F1cmVsaWEtYm9vdHN0cmFwcGVyLXdlYnBhY2suanMiLCJ3ZWJwYWNrOi8vLy4vfi9hdXJlbGlhLWxvYWRlci13ZWJwYWNrL2Rpc3QvY29tbW9uanMvYXVyZWxpYS1sb2FkZXItd2VicGFjay5qcyIsIndlYnBhY2s6Ly8vLi9+L2F1cmVsaWEtcGFsLWJyb3dzZXIvZGlzdC9jb21tb25qcy9hdXJlbGlhLXBhbC1icm93c2VyLmpzIiwid2VicGFjazovLy8uL34vYXVyZWxpYS1wb2x5ZmlsbHMvZGlzdC9jb21tb25qcy9hdXJlbGlhLXBvbHlmaWxscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JsdWViaXJkL2pzL2Jyb3dzZXIvYmx1ZWJpcmQuanM/OTIyZSJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gd2luZG93W1wid2VicGFja0pzb25wXCJdO1xuIFx0d2luZG93W1wid2VicGFja0pzb25wXCJdID0gZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBleGVjdXRlTW9kdWxlcykge1xuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW10sIHJlc3VsdDtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKVxuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGNodW5rSWRzLCBtb3JlTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpXG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHRpZihleGVjdXRlTW9kdWxlcykge1xuIFx0XHRcdGZvcihpPTA7IGkgPCBleGVjdXRlTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBleGVjdXRlTW9kdWxlc1tpXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9O1xuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3RzIHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdDI6IDBcbiBcdH07XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4gXHRcdCAgICAgICAgaWYgKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSByZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQgICAgICAgIHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0ICAgICAgICAgIGk6IG1vZHVsZUlkLFxuIFx0XHQgICAgICAgICAgbDogZmFsc2UsXG4gXHRcdCAgICAgICAgICBleHBvcnRzOiB7fVxuIFx0XHQgICAgICAgIH07XG5cbiBcdFx0ICAgICAgICBpZiAoIW1vZHVsZXNbbW9kdWxlSWRdICYmIHR5cGVvZiBtb2R1bGVJZCA9PT0gJ3N0cmluZycpIHtcbiBcdFx0ICAgICAgICAgIHZhciBuZXdNb2R1bGVJZDtcbiBcdFx0ICAgICAgICAgIGlmIChtb2R1bGVzW25ld01vZHVsZUlkID0gbW9kdWxlSWQgKyAnLmpzJ10gfHwgbW9kdWxlc1tuZXdNb2R1bGVJZCA9IG1vZHVsZUlkICsgJy50cyddKSB7XG4gXHRcdCAgICAgICAgICAgIG1vZHVsZUlkID0gbmV3TW9kdWxlSWQ7XG5cbiBcdFx0ICAgICAgICAgICAgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSBtb2R1bGU7XG4gXHRcdCAgICAgICAgICB9XG4gXHRcdCAgICAgICAgfVxuXG4gXHRcdCAgICAgICAgbW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0ICAgICAgICBtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0ICAgICAgICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMClcbiBcdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cbiBcdFx0Ly8gYW4gUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMl07XG4gXHRcdH1cbiBcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHR2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gXHRcdHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiBcdFx0c2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiBcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRzY3JpcHQuYXN5bmMgPSB0cnVlO1xuIFx0XHRzY3JpcHQudGltZW91dCA9IDEyMDAwMDtcblxuIFx0XHRzY3JpcHQuc3JjID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArIGNodW5rSWQgKyBcIi5jaHVuay5qc1wiO1xuIFx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZSwgMTIwMDAwKTtcbiBcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZTtcbiBcdFx0ZnVuY3Rpb24gb25TY3JpcHRDb21wbGV0ZSgpIHtcbiBcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcbiBcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdGlmKGNodW5rICE9PSAwKSB7XG4gXHRcdFx0XHRpZihjaHVuaykgY2h1bmtbMV0obmV3IEVycm9yKCdMb2FkaW5nIGNodW5rICcgKyBjaHVua0lkICsgJyBmYWlsZWQuJykpO1xuIFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdH1cbiBcdFx0fTtcbiBcdFx0aGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuXG4gXHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF07XG4gXHRcdH0pO1xuIFx0XHRyZXR1cm4gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzJdID0gcHJvbWlzZTtcbiBcdH07XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gaWRlbnRpdHkgZnVuY3Rpb24gZm9yIGNhbGxpbmcgaGFybW9yeSBpbXBvcnRzIHdpdGggdGhlIGNvcnJlY3QgY29udGV4dFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5pID0gZnVuY3Rpb24odmFsdWUpIHsgcmV0dXJuIHZhbHVlOyB9O1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb3J5IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHR9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDc5KTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA1ZjE1MjJkZWJhZmU2ZWU0YjYzNCIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuQWdncmVnYXRlRXJyb3IgPSBBZ2dyZWdhdGVFcnJvcjtcbmV4cG9ydHMuaW5pdGlhbGl6ZVBBTCA9IGluaXRpYWxpemVQQUw7XG5mdW5jdGlvbiBBZ2dyZWdhdGVFcnJvcihtZXNzYWdlLCBpbm5lckVycm9yLCBza2lwSWZBbHJlYWR5QWdncmVnYXRlKSB7XG4gIGlmIChpbm5lckVycm9yKSB7XG4gICAgaWYgKGlubmVyRXJyb3IuaW5uZXJFcnJvciAmJiBza2lwSWZBbHJlYWR5QWdncmVnYXRlKSB7XG4gICAgICByZXR1cm4gaW5uZXJFcnJvcjtcbiAgICB9XG5cbiAgICB2YXIgc2VwYXJhdG9yID0gJ1xcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbic7XG5cbiAgICBtZXNzYWdlICs9IHNlcGFyYXRvciArICdJbm5lciBFcnJvcjpcXG4nO1xuXG4gICAgaWYgKHR5cGVvZiBpbm5lckVycm9yID09PSAnc3RyaW5nJykge1xuICAgICAgbWVzc2FnZSArPSAnTWVzc2FnZTogJyArIGlubmVyRXJyb3I7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChpbm5lckVycm9yLm1lc3NhZ2UpIHtcbiAgICAgICAgbWVzc2FnZSArPSAnTWVzc2FnZTogJyArIGlubmVyRXJyb3IubWVzc2FnZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG1lc3NhZ2UgKz0gJ1Vua25vd24gSW5uZXIgRXJyb3IgVHlwZS4gRGlzcGxheWluZyBJbm5lciBFcnJvciBhcyBKU09OOlxcbiAnICsgSlNPTi5zdHJpbmdpZnkoaW5uZXJFcnJvciwgbnVsbCwgJyAgJyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbm5lckVycm9yLnN0YWNrKSB7XG4gICAgICAgIG1lc3NhZ2UgKz0gJ1xcbklubmVyIEVycm9yIFN0YWNrOlxcbicgKyBpbm5lckVycm9yLnN0YWNrO1xuICAgICAgICBtZXNzYWdlICs9ICdcXG5FbmQgSW5uZXIgRXJyb3IgU3RhY2snO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lc3NhZ2UgKz0gc2VwYXJhdG9yO1xuICB9XG5cbiAgdmFyIGUgPSBuZXcgRXJyb3IobWVzc2FnZSk7XG4gIGlmIChpbm5lckVycm9yKSB7XG4gICAgZS5pbm5lckVycm9yID0gaW5uZXJFcnJvcjtcbiAgfVxuXG4gIHJldHVybiBlO1xufVxuXG52YXIgRkVBVFVSRSA9IGV4cG9ydHMuRkVBVFVSRSA9IHt9O1xuXG52YXIgUExBVEZPUk0gPSBleHBvcnRzLlBMQVRGT1JNID0ge1xuICBub29wOiBmdW5jdGlvbiBub29wKCkge30sXG4gIGVhY2hNb2R1bGU6IGZ1bmN0aW9uIGVhY2hNb2R1bGUoKSB7fVxufTtcblxuUExBVEZPUk0uZ2xvYmFsID0gZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cblxuICBpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZ2xvYmFsO1xuICB9XG5cbiAgcmV0dXJuIG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xufSgpO1xuXG52YXIgRE9NID0gZXhwb3J0cy5ET00gPSB7fTtcblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVBBTChjYWxsYmFjaykge1xuICBpZiAodHlwZW9mIE9iamVjdC5nZXRQcm9wZXJ0eURlc2NyaXB0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICBPYmplY3QuZ2V0UHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gKHN1YmplY3QsIG5hbWUpIHtcbiAgICAgIHZhciBwZCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc3ViamVjdCwgbmFtZSk7XG4gICAgICB2YXIgcHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Yoc3ViamVjdCk7XG4gICAgICB3aGlsZSAodHlwZW9mIHBkID09PSAndW5kZWZpbmVkJyAmJiBwcm90byAhPT0gbnVsbCkge1xuICAgICAgICBwZCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocHJvdG8sIG5hbWUpO1xuICAgICAgICBwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90byk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcGQ7XG4gICAgfTtcbiAgfVxuXG4gIGNhbGxiYWNrKFBMQVRGT1JNLCBGRUFUVVJFLCBET00pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hdXJlbGlhLXBhbC9kaXN0L2NvbW1vbmpzL2F1cmVsaWEtcGFsLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuTG9hZGVyID0gZXhwb3J0cy5UZW1wbGF0ZVJlZ2lzdHJ5RW50cnkgPSBleHBvcnRzLlRlbXBsYXRlRGVwZW5kZW5jeSA9IHVuZGVmaW5lZDtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxudmFyIF9hdXJlbGlhUGF0aCA9IHJlcXVpcmUoJ2F1cmVsaWEtcGF0aCcpO1xuXG52YXIgX2F1cmVsaWFNZXRhZGF0YSA9IHJlcXVpcmUoJ2F1cmVsaWEtbWV0YWRhdGEnKTtcblxuXG5cbnZhciBUZW1wbGF0ZURlcGVuZGVuY3kgPSBleHBvcnRzLlRlbXBsYXRlRGVwZW5kZW5jeSA9IGZ1bmN0aW9uIFRlbXBsYXRlRGVwZW5kZW5jeShzcmMsIG5hbWUpIHtcbiAgXG5cbiAgdGhpcy5zcmMgPSBzcmM7XG4gIHRoaXMubmFtZSA9IG5hbWU7XG59O1xuXG52YXIgVGVtcGxhdGVSZWdpc3RyeUVudHJ5ID0gZXhwb3J0cy5UZW1wbGF0ZVJlZ2lzdHJ5RW50cnkgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFRlbXBsYXRlUmVnaXN0cnlFbnRyeShhZGRyZXNzKSB7XG4gICAgXG5cbiAgICB0aGlzLnRlbXBsYXRlSXNMb2FkZWQgPSBmYWxzZTtcbiAgICB0aGlzLmZhY3RvcnlJc1JlYWR5ID0gZmFsc2U7XG4gICAgdGhpcy5yZXNvdXJjZXMgPSBudWxsO1xuICAgIHRoaXMuZGVwZW5kZW5jaWVzID0gbnVsbDtcblxuICAgIHRoaXMuYWRkcmVzcyA9IGFkZHJlc3M7XG4gICAgdGhpcy5vblJlYWR5ID0gbnVsbDtcbiAgICB0aGlzLl90ZW1wbGF0ZSA9IG51bGw7XG4gICAgdGhpcy5fZmFjdG9yeSA9IG51bGw7XG4gIH1cblxuICBUZW1wbGF0ZVJlZ2lzdHJ5RW50cnkucHJvdG90eXBlLmFkZERlcGVuZGVuY3kgPSBmdW5jdGlvbiBhZGREZXBlbmRlbmN5KHNyYywgbmFtZSkge1xuICAgIHZhciBmaW5hbFNyYyA9IHR5cGVvZiBzcmMgPT09ICdzdHJpbmcnID8gKDAsIF9hdXJlbGlhUGF0aC5yZWxhdGl2ZVRvRmlsZSkoc3JjLCB0aGlzLmFkZHJlc3MpIDogX2F1cmVsaWFNZXRhZGF0YS5PcmlnaW4uZ2V0KHNyYykubW9kdWxlSWQ7XG5cbiAgICB0aGlzLmRlcGVuZGVuY2llcy5wdXNoKG5ldyBUZW1wbGF0ZURlcGVuZGVuY3koZmluYWxTcmMsIG5hbWUpKTtcbiAgfTtcblxuICBfY3JlYXRlQ2xhc3MoVGVtcGxhdGVSZWdpc3RyeUVudHJ5LCBbe1xuICAgIGtleTogJ3RlbXBsYXRlJyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl90ZW1wbGF0ZTtcbiAgICB9LFxuICAgIHNldDogZnVuY3Rpb24gc2V0KHZhbHVlKSB7XG4gICAgICB2YXIgYWRkcmVzcyA9IHRoaXMuYWRkcmVzcztcbiAgICAgIHZhciByZXF1aXJlcyA9IHZvaWQgMDtcbiAgICAgIHZhciBjdXJyZW50ID0gdm9pZCAwO1xuICAgICAgdmFyIHNyYyA9IHZvaWQgMDtcbiAgICAgIHZhciBkZXBlbmRlbmNpZXMgPSB2b2lkIDA7XG5cbiAgICAgIHRoaXMuX3RlbXBsYXRlID0gdmFsdWU7XG4gICAgICB0aGlzLnRlbXBsYXRlSXNMb2FkZWQgPSB0cnVlO1xuXG4gICAgICByZXF1aXJlcyA9IHZhbHVlLmNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgncmVxdWlyZScpO1xuICAgICAgZGVwZW5kZW5jaWVzID0gdGhpcy5kZXBlbmRlbmNpZXMgPSBuZXcgQXJyYXkocmVxdWlyZXMubGVuZ3RoKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDAsIGlpID0gcmVxdWlyZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICBjdXJyZW50ID0gcmVxdWlyZXNbaV07XG4gICAgICAgIHNyYyA9IGN1cnJlbnQuZ2V0QXR0cmlidXRlKCdmcm9tJyk7XG5cbiAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJzxyZXF1aXJlPiBlbGVtZW50IGluICcgKyBhZGRyZXNzICsgJyBoYXMgbm8gXCJmcm9tXCIgYXR0cmlidXRlLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVwZW5kZW5jaWVzW2ldID0gbmV3IFRlbXBsYXRlRGVwZW5kZW5jeSgoMCwgX2F1cmVsaWFQYXRoLnJlbGF0aXZlVG9GaWxlKShzcmMsIGFkZHJlc3MpLCBjdXJyZW50LmdldEF0dHJpYnV0ZSgnYXMnKSk7XG5cbiAgICAgICAgaWYgKGN1cnJlbnQucGFyZW50Tm9kZSkge1xuICAgICAgICAgIGN1cnJlbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjdXJyZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ZhY3RvcnknLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMuX2ZhY3Rvcnk7XG4gICAgfSxcbiAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgdGhpcy5fZmFjdG9yeSA9IHZhbHVlO1xuICAgICAgdGhpcy5mYWN0b3J5SXNSZWFkeSA9IHRydWU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFRlbXBsYXRlUmVnaXN0cnlFbnRyeTtcbn0oKTtcblxudmFyIExvYWRlciA9IGV4cG9ydHMuTG9hZGVyID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBMb2FkZXIoKSB7XG4gICAgXG5cbiAgICB0aGlzLnRlbXBsYXRlUmVnaXN0cnkgPSB7fTtcbiAgfVxuXG4gIExvYWRlci5wcm90b3R5cGUubWFwID0gZnVuY3Rpb24gbWFwKGlkLCBzb3VyY2UpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvYWRlcnMgbXVzdCBpbXBsZW1lbnQgbWFwKGlkLCBzb3VyY2UpLicpO1xuICB9O1xuXG4gIExvYWRlci5wcm90b3R5cGUubm9ybWFsaXplU3luYyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZVN5bmMobW9kdWxlSWQsIHJlbGF0aXZlVG8pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvYWRlcnMgbXVzdCBpbXBsZW1lbnQgbm9ybWFsaXplU3luYyhtb2R1bGVJZCwgcmVsYXRpdmVUbykuJyk7XG4gIH07XG5cbiAgTG9hZGVyLnByb3RvdHlwZS5ub3JtYWxpemUgPSBmdW5jdGlvbiBub3JtYWxpemUobW9kdWxlSWQsIHJlbGF0aXZlVG8pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvYWRlcnMgbXVzdCBpbXBsZW1lbnQgbm9ybWFsaXplKG1vZHVsZUlkOiBzdHJpbmcsIHJlbGF0aXZlVG86IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPi4nKTtcbiAgfTtcblxuICBMb2FkZXIucHJvdG90eXBlLmxvYWRNb2R1bGUgPSBmdW5jdGlvbiBsb2FkTW9kdWxlKGlkKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMb2FkZXJzIG11c3QgaW1wbGVtZW50IGxvYWRNb2R1bGUoaWQpLicpO1xuICB9O1xuXG4gIExvYWRlci5wcm90b3R5cGUubG9hZEFsbE1vZHVsZXMgPSBmdW5jdGlvbiBsb2FkQWxsTW9kdWxlcyhpZHMpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvYWRlciBtdXN0IGltcGxlbWVudCBsb2FkQWxsTW9kdWxlcyhpZHMpLicpO1xuICB9O1xuXG4gIExvYWRlci5wcm90b3R5cGUubG9hZFRlbXBsYXRlID0gZnVuY3Rpb24gbG9hZFRlbXBsYXRlKHVybCkge1xuICAgIHRocm93IG5ldyBFcnJvcignTG9hZGVyIG11c3QgaW1wbGVtZW50IGxvYWRUZW1wbGF0ZSh1cmwpLicpO1xuICB9O1xuXG4gIExvYWRlci5wcm90b3R5cGUubG9hZFRleHQgPSBmdW5jdGlvbiBsb2FkVGV4dCh1cmwpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0xvYWRlciBtdXN0IGltcGxlbWVudCBsb2FkVGV4dCh1cmwpLicpO1xuICB9O1xuXG4gIExvYWRlci5wcm90b3R5cGUuYXBwbHlQbHVnaW5Ub1VybCA9IGZ1bmN0aW9uIGFwcGx5UGx1Z2luVG9VcmwodXJsLCBwbHVnaW5OYW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMb2FkZXIgbXVzdCBpbXBsZW1lbnQgYXBwbHlQbHVnaW5Ub1VybCh1cmwsIHBsdWdpbk5hbWUpLicpO1xuICB9O1xuXG4gIExvYWRlci5wcm90b3R5cGUuYWRkUGx1Z2luID0gZnVuY3Rpb24gYWRkUGx1Z2luKHBsdWdpbk5hbWUsIGltcGxlbWVudGF0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdMb2FkZXIgbXVzdCBpbXBsZW1lbnQgYWRkUGx1Z2luKHBsdWdpbk5hbWUsIGltcGxlbWVudGF0aW9uKS4nKTtcbiAgfTtcblxuICBMb2FkZXIucHJvdG90eXBlLmdldE9yQ3JlYXRlVGVtcGxhdGVSZWdpc3RyeUVudHJ5ID0gZnVuY3Rpb24gZ2V0T3JDcmVhdGVUZW1wbGF0ZVJlZ2lzdHJ5RW50cnkoYWRkcmVzcykge1xuICAgIHJldHVybiB0aGlzLnRlbXBsYXRlUmVnaXN0cnlbYWRkcmVzc10gfHwgKHRoaXMudGVtcGxhdGVSZWdpc3RyeVthZGRyZXNzXSA9IG5ldyBUZW1wbGF0ZVJlZ2lzdHJ5RW50cnkoYWRkcmVzcykpO1xuICB9O1xuXG4gIHJldHVybiBMb2FkZXI7XG59KCk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2F1cmVsaWEtbG9hZGVyL2Rpc3QvY29tbW9uanMvYXVyZWxpYS1sb2FkZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsInZhciBuZXh0VGljayA9IHJlcXVpcmUoJ3Byb2Nlc3MvYnJvd3Nlci5qcycpLm5leHRUaWNrO1xudmFyIGFwcGx5ID0gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5O1xudmFyIHNsaWNlID0gQXJyYXkucHJvdG90eXBlLnNsaWNlO1xudmFyIGltbWVkaWF0ZUlkcyA9IHt9O1xudmFyIG5leHRJbW1lZGlhdGVJZCA9IDA7XG5cbi8vIERPTSBBUElzLCBmb3IgY29tcGxldGVuZXNzXG5cbmV4cG9ydHMuc2V0VGltZW91dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRUaW1lb3V0LCB3aW5kb3csIGFyZ3VtZW50cyksIGNsZWFyVGltZW91dCk7XG59O1xuZXhwb3J0cy5zZXRJbnRlcnZhbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gbmV3IFRpbWVvdXQoYXBwbHkuY2FsbChzZXRJbnRlcnZhbCwgd2luZG93LCBhcmd1bWVudHMpLCBjbGVhckludGVydmFsKTtcbn07XG5leHBvcnRzLmNsZWFyVGltZW91dCA9XG5leHBvcnRzLmNsZWFySW50ZXJ2YWwgPSBmdW5jdGlvbih0aW1lb3V0KSB7IHRpbWVvdXQuY2xvc2UoKTsgfTtcblxuZnVuY3Rpb24gVGltZW91dChpZCwgY2xlYXJGbikge1xuICB0aGlzLl9pZCA9IGlkO1xuICB0aGlzLl9jbGVhckZuID0gY2xlYXJGbjtcbn1cblRpbWVvdXQucHJvdG90eXBlLnVucmVmID0gVGltZW91dC5wcm90b3R5cGUucmVmID0gZnVuY3Rpb24oKSB7fTtcblRpbWVvdXQucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2NsZWFyRm4uY2FsbCh3aW5kb3csIHRoaXMuX2lkKTtcbn07XG5cbi8vIERvZXMgbm90IHN0YXJ0IHRoZSB0aW1lLCBqdXN0IHNldHMgdXAgdGhlIG1lbWJlcnMgbmVlZGVkLlxuZXhwb3J0cy5lbnJvbGwgPSBmdW5jdGlvbihpdGVtLCBtc2Vjcykge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gbXNlY3M7XG59O1xuXG5leHBvcnRzLnVuZW5yb2xsID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG4gIGl0ZW0uX2lkbGVUaW1lb3V0ID0gLTE7XG59O1xuXG5leHBvcnRzLl91bnJlZkFjdGl2ZSA9IGV4cG9ydHMuYWN0aXZlID0gZnVuY3Rpb24oaXRlbSkge1xuICBjbGVhclRpbWVvdXQoaXRlbS5faWRsZVRpbWVvdXRJZCk7XG5cbiAgdmFyIG1zZWNzID0gaXRlbS5faWRsZVRpbWVvdXQ7XG4gIGlmIChtc2VjcyA+PSAwKSB7XG4gICAgaXRlbS5faWRsZVRpbWVvdXRJZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gb25UaW1lb3V0KCkge1xuICAgICAgaWYgKGl0ZW0uX29uVGltZW91dClcbiAgICAgICAgaXRlbS5fb25UaW1lb3V0KCk7XG4gICAgfSwgbXNlY3MpO1xuICB9XG59O1xuXG4vLyBUaGF0J3Mgbm90IGhvdyBub2RlLmpzIGltcGxlbWVudHMgaXQgYnV0IHRoZSBleHBvc2VkIGFwaSBpcyB0aGUgc2FtZS5cbmV4cG9ydHMuc2V0SW1tZWRpYXRlID0gdHlwZW9mIHNldEltbWVkaWF0ZSA9PT0gXCJmdW5jdGlvblwiID8gc2V0SW1tZWRpYXRlIDogZnVuY3Rpb24oZm4pIHtcbiAgdmFyIGlkID0gbmV4dEltbWVkaWF0ZUlkKys7XG4gIHZhciBhcmdzID0gYXJndW1lbnRzLmxlbmd0aCA8IDIgPyBmYWxzZSA6IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblxuICBpbW1lZGlhdGVJZHNbaWRdID0gdHJ1ZTtcblxuICBuZXh0VGljayhmdW5jdGlvbiBvbk5leHRUaWNrKCkge1xuICAgIGlmIChpbW1lZGlhdGVJZHNbaWRdKSB7XG4gICAgICAvLyBmbi5jYWxsKCkgaXMgZmFzdGVyIHNvIHdlIG9wdGltaXplIGZvciB0aGUgY29tbW9uIHVzZS1jYXNlXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9qc3BlcmYuY29tL2NhbGwtYXBwbHktc2VndVxuICAgICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgZm4uYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmbi5jYWxsKG51bGwpO1xuICAgICAgfVxuICAgICAgLy8gUHJldmVudCBpZHMgZnJvbSBsZWFraW5nXG4gICAgICBleHBvcnRzLmNsZWFySW1tZWRpYXRlKGlkKTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBpZDtcbn07XG5cbmV4cG9ydHMuY2xlYXJJbW1lZGlhdGUgPSB0eXBlb2YgY2xlYXJJbW1lZGlhdGUgPT09IFwiZnVuY3Rpb25cIiA/IGNsZWFySW1tZWRpYXRlIDogZnVuY3Rpb24oaWQpIHtcbiAgZGVsZXRlIGltbWVkaWF0ZUlkc1tpZF07XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi90aW1lcnMtYnJvd3NlcmlmeS9tYWluLmpzXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvLyBUaGlzIG1ldGhvZCBvZiBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QgbmVlZHMgdG8gYmVcbi8vIGtlcHQgaWRlbnRpY2FsIHRvIHRoZSB3YXkgaXQgaXMgb2J0YWluZWQgaW4gcnVudGltZS5qc1xudmFyIGcgPVxuICB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDpcbiAgdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiA/IHdpbmRvdyA6XG4gIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHRoaXM7XG5cbi8vIFVzZSBgZ2V0T3duUHJvcGVydHlOYW1lc2AgYmVjYXVzZSBub3QgYWxsIGJyb3dzZXJzIHN1cHBvcnQgY2FsbGluZ1xuLy8gYGhhc093blByb3BlcnR5YCBvbiB0aGUgZ2xvYmFsIGBzZWxmYCBvYmplY3QgaW4gYSB3b3JrZXIuIFNlZSAjMTgzLlxudmFyIGhhZFJ1bnRpbWUgPSBnLnJlZ2VuZXJhdG9yUnVudGltZSAmJlxuICBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhnKS5pbmRleE9mKFwicmVnZW5lcmF0b3JSdW50aW1lXCIpID49IDA7XG5cbi8vIFNhdmUgdGhlIG9sZCByZWdlbmVyYXRvclJ1bnRpbWUgaW4gY2FzZSBpdCBuZWVkcyB0byBiZSByZXN0b3JlZCBsYXRlci5cbnZhciBvbGRSdW50aW1lID0gaGFkUnVudGltZSAmJiBnLnJlZ2VuZXJhdG9yUnVudGltZTtcblxuLy8gRm9yY2UgcmVldmFsdXRhdGlvbiBvZiBydW50aW1lLmpzLlxuZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSB1bmRlZmluZWQ7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vcnVudGltZVwiKTtcblxuaWYgKGhhZFJ1bnRpbWUpIHtcbiAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgcnVudGltZS5cbiAgZy5yZWdlbmVyYXRvclJ1bnRpbWUgPSBvbGRSdW50aW1lO1xufSBlbHNlIHtcbiAgLy8gUmVtb3ZlIHRoZSBnbG9iYWwgcHJvcGVydHkgYWRkZWQgYnkgcnVudGltZS5qcy5cbiAgdHJ5IHtcbiAgICBkZWxldGUgZy5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIH0gY2F0Y2goZSkge1xuICAgIGcucmVnZW5lcmF0b3JSdW50aW1lID0gdW5kZWZpbmVkO1xuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLW1vZHVsZS5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG5cbnZhciBwcm9jZXNzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLy8gY2FjaGVkIGZyb20gd2hhdGV2ZXIgZ2xvYmFsIGlzIHByZXNlbnQgc28gdGhhdCB0ZXN0IHJ1bm5lcnMgdGhhdCBzdHViIGl0XG4vLyBkb24ndCBicmVhayB0aGluZ3MuICBCdXQgd2UgbmVlZCB0byB3cmFwIGl0IGluIGEgdHJ5IGNhdGNoIGluIGNhc2UgaXQgaXNcbi8vIHdyYXBwZWQgaW4gc3RyaWN0IG1vZGUgY29kZSB3aGljaCBkb2Vzbid0IGRlZmluZSBhbnkgZ2xvYmFscy4gIEl0J3MgaW5zaWRlIGFcbi8vIGZ1bmN0aW9uIGJlY2F1c2UgdHJ5L2NhdGNoZXMgZGVvcHRpbWl6ZSBpbiBjZXJ0YWluIGVuZ2luZXMuXG5cbnZhciBjYWNoZWRTZXRUaW1lb3V0O1xudmFyIGNhY2hlZENsZWFyVGltZW91dDtcblxuKGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZFNldFRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NldFRpbWVvdXQgaXMgbm90IGRlZmluZWQnKTtcbiAgICB9XG4gIH1cbiAgdHJ5IHtcbiAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBpcyBub3QgZGVmaW5lZCcpO1xuICAgIH1cbiAgfVxufSAoKSlcbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgdGltZW91dCk7XG59XG5cbnByb2Nlc3MubmV4dFRpY2sgPSBmdW5jdGlvbiAoZnVuKSB7XG4gICAgdmFyIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCAtIDEpO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXJnc1tpIC0gMV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUucHVzaChuZXcgSXRlbShmdW4sIGFyZ3MpKTtcbiAgICBpZiAocXVldWUubGVuZ3RoID09PSAxICYmICFkcmFpbmluZykge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0LmNhbGwobnVsbCwgZHJhaW5RdWV1ZSwgMCk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcHJvY2Vzcy9icm93c2VyLmpzXG4vLyBtb2R1bGUgaWQgPSAzMVxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLk9yaWdpbiA9IGV4cG9ydHMubWV0YWRhdGEgPSB1bmRlZmluZWQ7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmV4cG9ydHMuZGVjb3JhdG9ycyA9IGRlY29yYXRvcnM7XG5leHBvcnRzLmRlcHJlY2F0ZWQgPSBkZXByZWNhdGVkO1xuZXhwb3J0cy5taXhpbiA9IG1peGluO1xuZXhwb3J0cy5wcm90b2NvbCA9IHByb3RvY29sO1xuXG52YXIgX2F1cmVsaWFQYWwgPSByZXF1aXJlKCdhdXJlbGlhLXBhbCcpO1xuXG5cblxudmFyIG1ldGFkYXRhID0gZXhwb3J0cy5tZXRhZGF0YSA9IHtcbiAgcmVzb3VyY2U6ICdhdXJlbGlhOnJlc291cmNlJyxcbiAgcGFyYW1UeXBlczogJ2Rlc2lnbjpwYXJhbXR5cGVzJyxcbiAgcHJvcGVydHlUeXBlOiAnZGVzaWduOnR5cGUnLFxuICBwcm9wZXJ0aWVzOiAnZGVzaWduOnByb3BlcnRpZXMnLFxuICBnZXQ6IGZ1bmN0aW9uIGdldChtZXRhZGF0YUtleSwgdGFyZ2V0LCB0YXJnZXRLZXkpIHtcbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgdmFyIHJlc3VsdCA9IG1ldGFkYXRhLmdldE93bihtZXRhZGF0YUtleSwgdGFyZ2V0LCB0YXJnZXRLZXkpO1xuICAgIHJldHVybiByZXN1bHQgPT09IHVuZGVmaW5lZCA/IG1ldGFkYXRhLmdldChtZXRhZGF0YUtleSwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldCksIHRhcmdldEtleSkgOiByZXN1bHQ7XG4gIH0sXG4gIGdldE93bjogZnVuY3Rpb24gZ2V0T3duKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHRhcmdldEtleSkge1xuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICByZXR1cm4gUmVmbGVjdC5nZXRPd25NZXRhZGF0YShtZXRhZGF0YUtleSwgdGFyZ2V0LCB0YXJnZXRLZXkpO1xuICB9LFxuICBkZWZpbmU6IGZ1bmN0aW9uIGRlZmluZShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSwgdGFyZ2V0LCB0YXJnZXRLZXkpIHtcbiAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlLCB0YXJnZXQsIHRhcmdldEtleSk7XG4gIH0sXG4gIGdldE9yQ3JlYXRlT3duOiBmdW5jdGlvbiBnZXRPckNyZWF0ZU93bihtZXRhZGF0YUtleSwgVHlwZSwgdGFyZ2V0LCB0YXJnZXRLZXkpIHtcbiAgICB2YXIgcmVzdWx0ID0gbWV0YWRhdGEuZ2V0T3duKG1ldGFkYXRhS2V5LCB0YXJnZXQsIHRhcmdldEtleSk7XG5cbiAgICBpZiAocmVzdWx0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc3VsdCA9IG5ldyBUeXBlKCk7XG4gICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKG1ldGFkYXRhS2V5LCByZXN1bHQsIHRhcmdldCwgdGFyZ2V0S2V5KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuXG52YXIgb3JpZ2luU3RvcmFnZSA9IG5ldyBNYXAoKTtcbnZhciB1bmtub3duT3JpZ2luID0gT2JqZWN0LmZyZWV6ZSh7IG1vZHVsZUlkOiB1bmRlZmluZWQsIG1vZHVsZU1lbWJlcjogdW5kZWZpbmVkIH0pO1xuXG52YXIgT3JpZ2luID0gZXhwb3J0cy5PcmlnaW4gPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE9yaWdpbihtb2R1bGVJZCwgbW9kdWxlTWVtYmVyKSB7XG4gICAgXG5cbiAgICB0aGlzLm1vZHVsZUlkID0gbW9kdWxlSWQ7XG4gICAgdGhpcy5tb2R1bGVNZW1iZXIgPSBtb2R1bGVNZW1iZXI7XG4gIH1cblxuICBPcmlnaW4uZ2V0ID0gZnVuY3Rpb24gZ2V0KGZuKSB7XG4gICAgdmFyIG9yaWdpbiA9IG9yaWdpblN0b3JhZ2UuZ2V0KGZuKTtcblxuICAgIGlmIChvcmlnaW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgX2F1cmVsaWFQYWwuUExBVEZPUk0uZWFjaE1vZHVsZShmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHZhbHVlKSB7XG4gICAgICAgICAgdmFyIGV4cCA9IHZhbHVlW25hbWVdO1xuICAgICAgICAgIGlmIChleHAgPT09IGZuKSB7XG4gICAgICAgICAgICBvcmlnaW5TdG9yYWdlLnNldChmbiwgb3JpZ2luID0gbmV3IE9yaWdpbihrZXksIG5hbWUpKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gZm4pIHtcbiAgICAgICAgICBvcmlnaW5TdG9yYWdlLnNldChmbiwgb3JpZ2luID0gbmV3IE9yaWdpbihrZXksICdkZWZhdWx0JykpO1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9yaWdpbiB8fCB1bmtub3duT3JpZ2luO1xuICB9O1xuXG4gIE9yaWdpbi5zZXQgPSBmdW5jdGlvbiBzZXQoZm4sIG9yaWdpbikge1xuICAgIG9yaWdpblN0b3JhZ2Uuc2V0KGZuLCBvcmlnaW4pO1xuICB9O1xuXG4gIHJldHVybiBPcmlnaW47XG59KCk7XG5cbmZ1bmN0aW9uIGRlY29yYXRvcnMoKSB7XG4gIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCByZXN0ID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgcmVzdFtfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgfVxuXG4gIHZhciBhcHBsaWNhdG9yID0gZnVuY3Rpb24gYXBwbGljYXRvcih0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikge1xuICAgIHZhciBpID0gcmVzdC5sZW5ndGg7XG5cbiAgICBpZiAoa2V5KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZGVzY3JpcHRvciB8fCB7XG4gICAgICAgIHZhbHVlOiB0YXJnZXRba2V5XSxcbiAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgICAgZW51bWVyYWJsZTogdHJ1ZVxuICAgICAgfTtcblxuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICBkZXNjcmlwdG9yID0gcmVzdFtpXSh0YXJnZXQsIGtleSwgZGVzY3JpcHRvcikgfHwgZGVzY3JpcHRvcjtcbiAgICAgIH1cblxuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBkZXNjcmlwdG9yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICB0YXJnZXQgPSByZXN0W2ldKHRhcmdldCkgfHwgdGFyZ2V0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgYXBwbGljYXRvci5vbiA9IGFwcGxpY2F0b3I7XG4gIHJldHVybiBhcHBsaWNhdG9yO1xufVxuXG5mdW5jdGlvbiBkZXByZWNhdGVkKG9wdGlvbnNPclRhcmdldCwgbWF5YmVLZXksIG1heWJlRGVzY3JpcHRvcikge1xuICBmdW5jdGlvbiBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIGRlc2NyaXB0b3IpIHtcbiAgICB2YXIgbWV0aG9kU2lnbmF0dXJlID0gdGFyZ2V0LmNvbnN0cnVjdG9yLm5hbWUgKyAnIycgKyBrZXk7XG4gICAgdmFyIG9wdGlvbnMgPSBtYXliZUtleSA/IHt9IDogb3B0aW9uc09yVGFyZ2V0IHx8IHt9O1xuICAgIHZhciBtZXNzYWdlID0gJ0RFUFJFQ0FUSU9OIC0gJyArIG1ldGhvZFNpZ25hdHVyZTtcblxuICAgIGlmICh0eXBlb2YgZGVzY3JpcHRvci52YWx1ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFN5bnRheEVycm9yKCdPbmx5IG1ldGhvZHMgY2FuIGJlIG1hcmtlZCBhcyBkZXByZWNhdGVkLicpO1xuICAgIH1cblxuICAgIGlmIChvcHRpb25zLm1lc3NhZ2UpIHtcbiAgICAgIG1lc3NhZ2UgKz0gJyAtICcgKyBvcHRpb25zLm1lc3NhZ2U7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBkZXNjcmlwdG9yLCB7XG4gICAgICB2YWx1ZTogZnVuY3Rpb24gZGVwcmVjYXRpb25XcmFwcGVyKCkge1xuICAgICAgICBpZiAob3B0aW9ucy5lcnJvcikge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4obWVzc2FnZSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZGVzY3JpcHRvci52YWx1ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIG1heWJlS2V5ID8gZGVjb3JhdG9yKG9wdGlvbnNPclRhcmdldCwgbWF5YmVLZXksIG1heWJlRGVzY3JpcHRvcikgOiBkZWNvcmF0b3I7XG59XG5cbmZ1bmN0aW9uIG1peGluKGJlaGF2aW9yKSB7XG4gIHZhciBpbnN0YW5jZUtleXMgPSBPYmplY3Qua2V5cyhiZWhhdmlvcik7XG5cbiAgZnVuY3Rpb24gX21peGluKHBvc3NpYmxlKSB7XG4gICAgdmFyIGRlY29yYXRvciA9IGZ1bmN0aW9uIGRlY29yYXRvcih0YXJnZXQpIHtcbiAgICAgIHZhciByZXNvbHZlZFRhcmdldCA9IHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicgPyB0YXJnZXQucHJvdG90eXBlIDogdGFyZ2V0O1xuXG4gICAgICB2YXIgaSA9IGluc3RhbmNlS2V5cy5sZW5ndGg7XG4gICAgICB3aGlsZSAoaS0tKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eSA9IGluc3RhbmNlS2V5c1tpXTtcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlc29sdmVkVGFyZ2V0LCBwcm9wZXJ0eSwge1xuICAgICAgICAgIHZhbHVlOiBiZWhhdmlvcltwcm9wZXJ0eV0sXG4gICAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBwb3NzaWJsZSA/IGRlY29yYXRvcihwb3NzaWJsZSkgOiBkZWNvcmF0b3I7XG4gIH1cblxuICByZXR1cm4gX21peGluO1xufVxuXG5mdW5jdGlvbiBhbHdheXNWYWxpZCgpIHtcbiAgcmV0dXJuIHRydWU7XG59XG5mdW5jdGlvbiBub0NvbXBvc2UoKSB7fVxuXG5mdW5jdGlvbiBlbnN1cmVQcm90b2NvbE9wdGlvbnMob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIHZhbGlkYXRlOiBvcHRpb25zXG4gICAgfTtcbiAgfVxuXG4gIGlmICghb3B0aW9ucy52YWxpZGF0ZSkge1xuICAgIG9wdGlvbnMudmFsaWRhdGUgPSBhbHdheXNWYWxpZDtcbiAgfVxuXG4gIGlmICghb3B0aW9ucy5jb21wb3NlKSB7XG4gICAgb3B0aW9ucy5jb21wb3NlID0gbm9Db21wb3NlO1xuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVByb3RvY29sVmFsaWRhdG9yKHZhbGlkYXRlKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgdmFyIHJlc3VsdCA9IHZhbGlkYXRlKHRhcmdldCk7XG4gICAgcmV0dXJuIHJlc3VsdCA9PT0gdHJ1ZTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlUHJvdG9jb2xBc3NlcnRlcihuYW1lLCB2YWxpZGF0ZSkge1xuICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIHZhciByZXN1bHQgPSB2YWxpZGF0ZSh0YXJnZXQpO1xuICAgIGlmIChyZXN1bHQgIT09IHRydWUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihyZXN1bHQgfHwgbmFtZSArICcgd2FzIG5vdCBjb3JyZWN0bHkgaW1wbGVtZW50ZWQuJyk7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBwcm90b2NvbChuYW1lLCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBlbnN1cmVQcm90b2NvbE9wdGlvbnMob3B0aW9ucyk7XG5cbiAgdmFyIHJlc3VsdCA9IGZ1bmN0aW9uIHJlc3VsdCh0YXJnZXQpIHtcbiAgICB2YXIgcmVzb2x2ZWRUYXJnZXQgPSB0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nID8gdGFyZ2V0LnByb3RvdHlwZSA6IHRhcmdldDtcblxuICAgIG9wdGlvbnMuY29tcG9zZShyZXNvbHZlZFRhcmdldCk7XG4gICAgcmVzdWx0LmFzc2VydChyZXNvbHZlZFRhcmdldCk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzb2x2ZWRUYXJnZXQsICdwcm90b2NvbDonICsgbmFtZSwge1xuICAgICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgdmFsdWU6IHRydWVcbiAgICB9KTtcbiAgfTtcblxuICByZXN1bHQudmFsaWRhdGUgPSBjcmVhdGVQcm90b2NvbFZhbGlkYXRvcihvcHRpb25zLnZhbGlkYXRlKTtcbiAgcmVzdWx0LmFzc2VydCA9IGNyZWF0ZVByb3RvY29sQXNzZXJ0ZXIobmFtZSwgb3B0aW9ucy52YWxpZGF0ZSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxucHJvdG9jb2wuY3JlYXRlID0gZnVuY3Rpb24gKG5hbWUsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IGVuc3VyZVByb3RvY29sT3B0aW9ucyhvcHRpb25zKTtcbiAgdmFyIGhpZGRlbiA9ICdwcm90b2NvbDonICsgbmFtZTtcbiAgdmFyIHJlc3VsdCA9IGZ1bmN0aW9uIHJlc3VsdCh0YXJnZXQpIHtcbiAgICB2YXIgZGVjb3JhdG9yID0gcHJvdG9jb2wobmFtZSwgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHRhcmdldCA/IGRlY29yYXRvcih0YXJnZXQpIDogZGVjb3JhdG9yO1xuICB9O1xuXG4gIHJlc3VsdC5kZWNvcmF0ZXMgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9ialtoaWRkZW5dID09PSB0cnVlO1xuICB9O1xuICByZXN1bHQudmFsaWRhdGUgPSBjcmVhdGVQcm90b2NvbFZhbGlkYXRvcihvcHRpb25zLnZhbGlkYXRlKTtcbiAgcmVzdWx0LmFzc2VydCA9IGNyZWF0ZVByb3RvY29sQXNzZXJ0ZXIobmFtZSwgb3B0aW9ucy52YWxpZGF0ZSk7XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2F1cmVsaWEtbWV0YWRhdGEvZGlzdC9jb21tb25qcy9hdXJlbGlhLW1ldGFkYXRhLmpzXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIi8qIEBwcmVzZXJ2ZVxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxMy0yMDE1IFBldGthIEFudG9ub3ZcbiAqIFxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICogXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpblxuICogYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKiBcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU5cbiAqIFRIRSBTT0ZUV0FSRS5cbiAqIFxuICovXG4vKipcbiAqIGJsdWViaXJkIGJ1aWxkIHZlcnNpb24gMy40LjFcbiAqIEZlYXR1cmVzIGVuYWJsZWQ6IGNvcmUsIHJhY2UsIGNhbGxfZ2V0LCBnZW5lcmF0b3JzLCBtYXAsIG5vZGVpZnksIHByb21pc2lmeSwgcHJvcHMsIHJlZHVjZSwgc2V0dGxlLCBzb21lLCB1c2luZywgdGltZXJzLCBmaWx0ZXIsIGFueSwgZWFjaFxuKi9cbiFmdW5jdGlvbihlKXtpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZSltb2R1bGUuZXhwb3J0cz1lKCk7ZWxzZSBpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLGUpO2Vsc2V7dmFyIGY7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIHdpbmRvdz9mPXdpbmRvdzpcInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsP2Y9Z2xvYmFsOlwidW5kZWZpbmVkXCIhPXR5cGVvZiBzZWxmJiYoZj1zZWxmKSxmLlByb21pc2U9ZSgpfX0oZnVuY3Rpb24oKXt2YXIgZGVmaW5lLG1vZHVsZSxleHBvcnRzO3JldHVybiAoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIF9kZXJlcV89PVwiZnVuY3Rpb25cIiYmX2RlcmVxXztpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgX2RlcmVxXz09XCJmdW5jdGlvblwiJiZfZGVyZXFfO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSkge1xudmFyIFNvbWVQcm9taXNlQXJyYXkgPSBQcm9taXNlLl9Tb21lUHJvbWlzZUFycmF5O1xuZnVuY3Rpb24gYW55KHByb21pc2VzKSB7XG4gICAgdmFyIHJldCA9IG5ldyBTb21lUHJvbWlzZUFycmF5KHByb21pc2VzKTtcbiAgICB2YXIgcHJvbWlzZSA9IHJldC5wcm9taXNlKCk7XG4gICAgcmV0LnNldEhvd01hbnkoMSk7XG4gICAgcmV0LnNldFVud3JhcCgpO1xuICAgIHJldC5pbml0KCk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cblByb21pc2UuYW55ID0gZnVuY3Rpb24gKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIGFueShwcm9taXNlcyk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5hbnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGFueSh0aGlzKTtcbn07XG5cbn07XG5cbn0se31dLDI6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgZmlyc3RMaW5lRXJyb3I7XG50cnkge3Rocm93IG5ldyBFcnJvcigpOyB9IGNhdGNoIChlKSB7Zmlyc3RMaW5lRXJyb3IgPSBlO31cbnZhciBzY2hlZHVsZSA9IF9kZXJlcV8oXCIuL3NjaGVkdWxlXCIpO1xudmFyIFF1ZXVlID0gX2RlcmVxXyhcIi4vcXVldWVcIik7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG5cbmZ1bmN0aW9uIEFzeW5jKCkge1xuICAgIHRoaXMuX2N1c3RvbVNjaGVkdWxlciA9IGZhbHNlO1xuICAgIHRoaXMuX2lzVGlja1VzZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9sYXRlUXVldWUgPSBuZXcgUXVldWUoMTYpO1xuICAgIHRoaXMuX25vcm1hbFF1ZXVlID0gbmV3IFF1ZXVlKDE2KTtcbiAgICB0aGlzLl9oYXZlRHJhaW5lZFF1ZXVlcyA9IGZhbHNlO1xuICAgIHRoaXMuX3RyYW1wb2xpbmVFbmFibGVkID0gdHJ1ZTtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdGhpcy5kcmFpblF1ZXVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc2VsZi5fZHJhaW5RdWV1ZXMoKTtcbiAgICB9O1xuICAgIHRoaXMuX3NjaGVkdWxlID0gc2NoZWR1bGU7XG59XG5cbkFzeW5jLnByb3RvdHlwZS5zZXRTY2hlZHVsZXIgPSBmdW5jdGlvbihmbikge1xuICAgIHZhciBwcmV2ID0gdGhpcy5fc2NoZWR1bGU7XG4gICAgdGhpcy5fc2NoZWR1bGUgPSBmbjtcbiAgICB0aGlzLl9jdXN0b21TY2hlZHVsZXIgPSB0cnVlO1xuICAgIHJldHVybiBwcmV2O1xufTtcblxuQXN5bmMucHJvdG90eXBlLmhhc0N1c3RvbVNjaGVkdWxlciA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9jdXN0b21TY2hlZHVsZXI7XG59O1xuXG5Bc3luYy5wcm90b3R5cGUuZW5hYmxlVHJhbXBvbGluZSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3RyYW1wb2xpbmVFbmFibGVkID0gdHJ1ZTtcbn07XG5cbkFzeW5jLnByb3RvdHlwZS5kaXNhYmxlVHJhbXBvbGluZUlmTmVjZXNzYXJ5ID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHV0aWwuaGFzRGV2VG9vbHMpIHtcbiAgICAgICAgdGhpcy5fdHJhbXBvbGluZUVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG59O1xuXG5Bc3luYy5wcm90b3R5cGUuaGF2ZUl0ZW1zUXVldWVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9pc1RpY2tVc2VkIHx8IHRoaXMuX2hhdmVEcmFpbmVkUXVldWVzO1xufTtcblxuXG5Bc3luYy5wcm90b3R5cGUuZmF0YWxFcnJvciA9IGZ1bmN0aW9uKGUsIGlzTm9kZSkge1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgcHJvY2Vzcy5zdGRlcnIud3JpdGUoXCJGYXRhbCBcIiArIChlIGluc3RhbmNlb2YgRXJyb3IgPyBlLnN0YWNrIDogZSkgK1xuICAgICAgICAgICAgXCJcXG5cIik7XG4gICAgICAgIHByb2Nlc3MuZXhpdCgyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnRocm93TGF0ZXIoZSk7XG4gICAgfVxufTtcblxuQXN5bmMucHJvdG90eXBlLnRocm93TGF0ZXIgPSBmdW5jdGlvbihmbiwgYXJnKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgYXJnID0gZm47XG4gICAgICAgIGZuID0gZnVuY3Rpb24gKCkgeyB0aHJvdyBhcmc7IH07XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygc2V0VGltZW91dCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm4oYXJnKTtcbiAgICAgICAgfSwgMCk7XG4gICAgfSBlbHNlIHRyeSB7XG4gICAgICAgIHRoaXMuX3NjaGVkdWxlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZm4oYXJnKTtcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBhc3luYyBzY2hlZHVsZXIgYXZhaWxhYmxlXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvTXFyRm1YXFx1MDAwYVwiKTtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBBc3luY0ludm9rZUxhdGVyKGZuLCByZWNlaXZlciwgYXJnKSB7XG4gICAgdGhpcy5fbGF0ZVF1ZXVlLnB1c2goZm4sIHJlY2VpdmVyLCBhcmcpO1xuICAgIHRoaXMuX3F1ZXVlVGljaygpO1xufVxuXG5mdW5jdGlvbiBBc3luY0ludm9rZShmbiwgcmVjZWl2ZXIsIGFyZykge1xuICAgIHRoaXMuX25vcm1hbFF1ZXVlLnB1c2goZm4sIHJlY2VpdmVyLCBhcmcpO1xuICAgIHRoaXMuX3F1ZXVlVGljaygpO1xufVxuXG5mdW5jdGlvbiBBc3luY1NldHRsZVByb21pc2VzKHByb21pc2UpIHtcbiAgICB0aGlzLl9ub3JtYWxRdWV1ZS5fcHVzaE9uZShwcm9taXNlKTtcbiAgICB0aGlzLl9xdWV1ZVRpY2soKTtcbn1cblxuaWYgKCF1dGlsLmhhc0RldlRvb2xzKSB7XG4gICAgQXN5bmMucHJvdG90eXBlLmludm9rZUxhdGVyID0gQXN5bmNJbnZva2VMYXRlcjtcbiAgICBBc3luYy5wcm90b3R5cGUuaW52b2tlID0gQXN5bmNJbnZva2U7XG4gICAgQXN5bmMucHJvdG90eXBlLnNldHRsZVByb21pc2VzID0gQXN5bmNTZXR0bGVQcm9taXNlcztcbn0gZWxzZSB7XG4gICAgQXN5bmMucHJvdG90eXBlLmludm9rZUxhdGVyID0gZnVuY3Rpb24gKGZuLCByZWNlaXZlciwgYXJnKSB7XG4gICAgICAgIGlmICh0aGlzLl90cmFtcG9saW5lRW5hYmxlZCkge1xuICAgICAgICAgICAgQXN5bmNJbnZva2VMYXRlci5jYWxsKHRoaXMsIGZuLCByZWNlaXZlciwgYXJnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGZuLmNhbGwocmVjZWl2ZXIsIGFyZyk7XG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIEFzeW5jLnByb3RvdHlwZS5pbnZva2UgPSBmdW5jdGlvbiAoZm4sIHJlY2VpdmVyLCBhcmcpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RyYW1wb2xpbmVFbmFibGVkKSB7XG4gICAgICAgICAgICBBc3luY0ludm9rZS5jYWxsKHRoaXMsIGZuLCByZWNlaXZlciwgYXJnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3NjaGVkdWxlKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGZuLmNhbGwocmVjZWl2ZXIsIGFyZyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBBc3luYy5wcm90b3R5cGUuc2V0dGxlUHJvbWlzZXMgPSBmdW5jdGlvbihwcm9taXNlKSB7XG4gICAgICAgIGlmICh0aGlzLl90cmFtcG9saW5lRW5hYmxlZCkge1xuICAgICAgICAgICAgQXN5bmNTZXR0bGVQcm9taXNlcy5jYWxsKHRoaXMsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2NoZWR1bGUoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5fc2V0dGxlUHJvbWlzZXMoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuQXN5bmMucHJvdG90eXBlLmludm9rZUZpcnN0ID0gZnVuY3Rpb24gKGZuLCByZWNlaXZlciwgYXJnKSB7XG4gICAgdGhpcy5fbm9ybWFsUXVldWUudW5zaGlmdChmbiwgcmVjZWl2ZXIsIGFyZyk7XG4gICAgdGhpcy5fcXVldWVUaWNrKCk7XG59O1xuXG5Bc3luYy5wcm90b3R5cGUuX2RyYWluUXVldWUgPSBmdW5jdGlvbihxdWV1ZSkge1xuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGgoKSA+IDApIHtcbiAgICAgICAgdmFyIGZuID0gcXVldWUuc2hpZnQoKTtcbiAgICAgICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBmbi5fc2V0dGxlUHJvbWlzZXMoKTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIHZhciByZWNlaXZlciA9IHF1ZXVlLnNoaWZ0KCk7XG4gICAgICAgIHZhciBhcmcgPSBxdWV1ZS5zaGlmdCgpO1xuICAgICAgICBmbi5jYWxsKHJlY2VpdmVyLCBhcmcpO1xuICAgIH1cbn07XG5cbkFzeW5jLnByb3RvdHlwZS5fZHJhaW5RdWV1ZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fZHJhaW5RdWV1ZSh0aGlzLl9ub3JtYWxRdWV1ZSk7XG4gICAgdGhpcy5fcmVzZXQoKTtcbiAgICB0aGlzLl9oYXZlRHJhaW5lZFF1ZXVlcyA9IHRydWU7XG4gICAgdGhpcy5fZHJhaW5RdWV1ZSh0aGlzLl9sYXRlUXVldWUpO1xufTtcblxuQXN5bmMucHJvdG90eXBlLl9xdWV1ZVRpY2sgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLl9pc1RpY2tVc2VkKSB7XG4gICAgICAgIHRoaXMuX2lzVGlja1VzZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLl9zY2hlZHVsZSh0aGlzLmRyYWluUXVldWVzKTtcbiAgICB9XG59O1xuXG5Bc3luYy5wcm90b3R5cGUuX3Jlc2V0ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2lzVGlja1VzZWQgPSBmYWxzZTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gQXN5bmM7XG5tb2R1bGUuZXhwb3J0cy5maXJzdExpbmVFcnJvciA9IGZpcnN0TGluZUVycm9yO1xuXG59LHtcIi4vcXVldWVcIjoyNixcIi4vc2NoZWR1bGVcIjoyOSxcIi4vdXRpbFwiOjM2fV0sMzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgSU5URVJOQUwsIHRyeUNvbnZlcnRUb1Byb21pc2UsIGRlYnVnKSB7XG52YXIgY2FsbGVkQmluZCA9IGZhbHNlO1xudmFyIHJlamVjdFRoaXMgPSBmdW5jdGlvbihfLCBlKSB7XG4gICAgdGhpcy5fcmVqZWN0KGUpO1xufTtcblxudmFyIHRhcmdldFJlamVjdGVkID0gZnVuY3Rpb24oZSwgY29udGV4dCkge1xuICAgIGNvbnRleHQucHJvbWlzZVJlamVjdGlvblF1ZXVlZCA9IHRydWU7XG4gICAgY29udGV4dC5iaW5kaW5nUHJvbWlzZS5fdGhlbihyZWplY3RUaGlzLCByZWplY3RUaGlzLCBudWxsLCB0aGlzLCBlKTtcbn07XG5cbnZhciBiaW5kaW5nUmVzb2x2ZWQgPSBmdW5jdGlvbih0aGlzQXJnLCBjb250ZXh0KSB7XG4gICAgaWYgKCgodGhpcy5fYml0RmllbGQgJiA1MDM5NzE4NCkgPT09IDApKSB7XG4gICAgICAgIHRoaXMuX3Jlc29sdmVDYWxsYmFjayhjb250ZXh0LnRhcmdldCk7XG4gICAgfVxufTtcblxudmFyIGJpbmRpbmdSZWplY3RlZCA9IGZ1bmN0aW9uKGUsIGNvbnRleHQpIHtcbiAgICBpZiAoIWNvbnRleHQucHJvbWlzZVJlamVjdGlvblF1ZXVlZCkgdGhpcy5fcmVqZWN0KGUpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuYmluZCA9IGZ1bmN0aW9uICh0aGlzQXJnKSB7XG4gICAgaWYgKCFjYWxsZWRCaW5kKSB7XG4gICAgICAgIGNhbGxlZEJpbmQgPSB0cnVlO1xuICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5fcHJvcGFnYXRlRnJvbSA9IGRlYnVnLnByb3BhZ2F0ZUZyb21GdW5jdGlvbigpO1xuICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5fYm91bmRWYWx1ZSA9IGRlYnVnLmJvdW5kVmFsdWVGdW5jdGlvbigpO1xuICAgIH1cbiAgICB2YXIgbWF5YmVQcm9taXNlID0gdHJ5Q29udmVydFRvUHJvbWlzZSh0aGlzQXJnKTtcbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIHJldC5fcHJvcGFnYXRlRnJvbSh0aGlzLCAxKTtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5fdGFyZ2V0KCk7XG4gICAgcmV0Ll9zZXRCb3VuZFRvKG1heWJlUHJvbWlzZSk7XG4gICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB7XG4gICAgICAgICAgICBwcm9taXNlUmVqZWN0aW9uUXVldWVkOiBmYWxzZSxcbiAgICAgICAgICAgIHByb21pc2U6IHJldCxcbiAgICAgICAgICAgIHRhcmdldDogdGFyZ2V0LFxuICAgICAgICAgICAgYmluZGluZ1Byb21pc2U6IG1heWJlUHJvbWlzZVxuICAgICAgICB9O1xuICAgICAgICB0YXJnZXQuX3RoZW4oSU5URVJOQUwsIHRhcmdldFJlamVjdGVkLCB1bmRlZmluZWQsIHJldCwgY29udGV4dCk7XG4gICAgICAgIG1heWJlUHJvbWlzZS5fdGhlbihcbiAgICAgICAgICAgIGJpbmRpbmdSZXNvbHZlZCwgYmluZGluZ1JlamVjdGVkLCB1bmRlZmluZWQsIHJldCwgY29udGV4dCk7XG4gICAgICAgIHJldC5fc2V0T25DYW5jZWwobWF5YmVQcm9taXNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXQuX3Jlc29sdmVDYWxsYmFjayh0YXJnZXQpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldEJvdW5kVG8gPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgaWYgKG9iaiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCAyMDk3MTUyO1xuICAgICAgICB0aGlzLl9ib3VuZFRvID0gb2JqO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgJiAofjIwOTcxNTIpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc0JvdW5kID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiAyMDk3MTUyKSA9PT0gMjA5NzE1Mjtcbn07XG5cblByb21pc2UuYmluZCA9IGZ1bmN0aW9uICh0aGlzQXJnLCB2YWx1ZSkge1xuICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLmJpbmQodGhpc0FyZyk7XG59O1xufTtcblxufSx7fV0sNDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbnZhciBvbGQ7XG5pZiAodHlwZW9mIFByb21pc2UgIT09IFwidW5kZWZpbmVkXCIpIG9sZCA9IFByb21pc2U7XG5mdW5jdGlvbiBub0NvbmZsaWN0KCkge1xuICAgIHRyeSB7IGlmIChQcm9taXNlID09PSBibHVlYmlyZCkgUHJvbWlzZSA9IG9sZDsgfVxuICAgIGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBibHVlYmlyZDtcbn1cbnZhciBibHVlYmlyZCA9IF9kZXJlcV8oXCIuL3Byb21pc2VcIikoKTtcbmJsdWViaXJkLm5vQ29uZmxpY3QgPSBub0NvbmZsaWN0O1xubW9kdWxlLmV4cG9ydHMgPSBibHVlYmlyZDtcblxufSx7XCIuL3Byb21pc2VcIjoyMn1dLDU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgY3IgPSBPYmplY3QuY3JlYXRlO1xuaWYgKGNyKSB7XG4gICAgdmFyIGNhbGxlckNhY2hlID0gY3IobnVsbCk7XG4gICAgdmFyIGdldHRlckNhY2hlID0gY3IobnVsbCk7XG4gICAgY2FsbGVyQ2FjaGVbXCIgc2l6ZVwiXSA9IGdldHRlckNhY2hlW1wiIHNpemVcIl0gPSAwO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UpIHtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbFwiKTtcbnZhciBjYW5FdmFsdWF0ZSA9IHV0aWwuY2FuRXZhbHVhdGU7XG52YXIgaXNJZGVudGlmaWVyID0gdXRpbC5pc0lkZW50aWZpZXI7XG5cbnZhciBnZXRNZXRob2RDYWxsZXI7XG52YXIgZ2V0R2V0dGVyO1xuaWYgKCF0cnVlKSB7XG52YXIgbWFrZU1ldGhvZENhbGxlciA9IGZ1bmN0aW9uIChtZXRob2ROYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbihcImVuc3VyZU1ldGhvZFwiLCBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIHJldHVybiBmdW5jdGlvbihvYmopIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAndXNlIHN0cmljdCcgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB2YXIgbGVuID0gdGhpcy5sZW5ndGg7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBlbnN1cmVNZXRob2Qob2JqLCAnbWV0aG9kTmFtZScpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBzd2l0Y2gobGVuKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgY2FzZSAxOiByZXR1cm4gb2JqLm1ldGhvZE5hbWUodGhpc1swXSk7ICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgY2FzZSAyOiByZXR1cm4gb2JqLm1ldGhvZE5hbWUodGhpc1swXSwgdGhpc1sxXSk7ICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgY2FzZSAzOiByZXR1cm4gb2JqLm1ldGhvZE5hbWUodGhpc1swXSwgdGhpc1sxXSwgdGhpc1syXSk7ICAgIFxcblxcXG4gICAgICAgICAgICAgICAgY2FzZSAwOiByZXR1cm4gb2JqLm1ldGhvZE5hbWUoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgZGVmYXVsdDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvYmoubWV0aG9kTmFtZS5hcHBseShvYmosIHRoaXMpOyAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIH07ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIFwiLnJlcGxhY2UoL21ldGhvZE5hbWUvZywgbWV0aG9kTmFtZSkpKGVuc3VyZU1ldGhvZCk7XG59O1xuXG52YXIgbWFrZUdldHRlciA9IGZ1bmN0aW9uIChwcm9wZXJ0eU5hbWUpIHtcbiAgICByZXR1cm4gbmV3IEZ1bmN0aW9uKFwib2JqXCIsIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgJ3VzZSBzdHJpY3QnOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgcmV0dXJuIG9iai5wcm9wZXJ0eU5hbWU7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgXCIucmVwbGFjZShcInByb3BlcnR5TmFtZVwiLCBwcm9wZXJ0eU5hbWUpKTtcbn07XG5cbnZhciBnZXRDb21waWxlZCA9IGZ1bmN0aW9uKG5hbWUsIGNvbXBpbGVyLCBjYWNoZSkge1xuICAgIHZhciByZXQgPSBjYWNoZVtuYW1lXTtcbiAgICBpZiAodHlwZW9mIHJldCAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGlmICghaXNJZGVudGlmaWVyKG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXQgPSBjb21waWxlcihuYW1lKTtcbiAgICAgICAgY2FjaGVbbmFtZV0gPSByZXQ7XG4gICAgICAgIGNhY2hlW1wiIHNpemVcIl0rKztcbiAgICAgICAgaWYgKGNhY2hlW1wiIHNpemVcIl0gPiA1MTIpIHtcbiAgICAgICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoY2FjaGUpO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNTY7ICsraSkgZGVsZXRlIGNhY2hlW2tleXNbaV1dO1xuICAgICAgICAgICAgY2FjaGVbXCIgc2l6ZVwiXSA9IGtleXMubGVuZ3RoIC0gMjU2O1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59O1xuXG5nZXRNZXRob2RDYWxsZXIgPSBmdW5jdGlvbihuYW1lKSB7XG4gICAgcmV0dXJuIGdldENvbXBpbGVkKG5hbWUsIG1ha2VNZXRob2RDYWxsZXIsIGNhbGxlckNhY2hlKTtcbn07XG5cbmdldEdldHRlciA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gZ2V0Q29tcGlsZWQobmFtZSwgbWFrZUdldHRlciwgZ2V0dGVyQ2FjaGUpO1xufTtcbn1cblxuZnVuY3Rpb24gZW5zdXJlTWV0aG9kKG9iaiwgbWV0aG9kTmFtZSkge1xuICAgIHZhciBmbjtcbiAgICBpZiAob2JqICE9IG51bGwpIGZuID0gb2JqW21ldGhvZE5hbWVdO1xuICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IFwiT2JqZWN0IFwiICsgdXRpbC5jbGFzc1N0cmluZyhvYmopICsgXCIgaGFzIG5vIG1ldGhvZCAnXCIgK1xuICAgICAgICAgICAgdXRpbC50b1N0cmluZyhtZXRob2ROYW1lKSArIFwiJ1wiO1xuICAgICAgICB0aHJvdyBuZXcgUHJvbWlzZS5UeXBlRXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHJldHVybiBmbjtcbn1cblxuZnVuY3Rpb24gY2FsbGVyKG9iaikge1xuICAgIHZhciBtZXRob2ROYW1lID0gdGhpcy5wb3AoKTtcbiAgICB2YXIgZm4gPSBlbnN1cmVNZXRob2Qob2JqLCBtZXRob2ROYW1lKTtcbiAgICByZXR1cm4gZm4uYXBwbHkob2JqLCB0aGlzKTtcbn1cblByb21pc2UucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAobWV0aG9kTmFtZSkge1xuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpOztcbiAgICBpZiAoIXRydWUpIHtcbiAgICAgICAgaWYgKGNhbkV2YWx1YXRlKSB7XG4gICAgICAgICAgICB2YXIgbWF5YmVDYWxsZXIgPSBnZXRNZXRob2RDYWxsZXIobWV0aG9kTmFtZSk7XG4gICAgICAgICAgICBpZiAobWF5YmVDYWxsZXIgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fdGhlbihcbiAgICAgICAgICAgICAgICAgICAgbWF5YmVDYWxsZXIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBhcmdzLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGFyZ3MucHVzaChtZXRob2ROYW1lKTtcbiAgICByZXR1cm4gdGhpcy5fdGhlbihjYWxsZXIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBhcmdzLCB1bmRlZmluZWQpO1xufTtcblxuZnVuY3Rpb24gbmFtZWRHZXR0ZXIob2JqKSB7XG4gICAgcmV0dXJuIG9ialt0aGlzXTtcbn1cbmZ1bmN0aW9uIGluZGV4ZWRHZXR0ZXIob2JqKSB7XG4gICAgdmFyIGluZGV4ID0gK3RoaXM7XG4gICAgaWYgKGluZGV4IDwgMCkgaW5kZXggPSBNYXRoLm1heCgwLCBpbmRleCArIG9iai5sZW5ndGgpO1xuICAgIHJldHVybiBvYmpbaW5kZXhdO1xufVxuUHJvbWlzZS5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24gKHByb3BlcnR5TmFtZSkge1xuICAgIHZhciBpc0luZGV4ID0gKHR5cGVvZiBwcm9wZXJ0eU5hbWUgPT09IFwibnVtYmVyXCIpO1xuICAgIHZhciBnZXR0ZXI7XG4gICAgaWYgKCFpc0luZGV4KSB7XG4gICAgICAgIGlmIChjYW5FdmFsdWF0ZSkge1xuICAgICAgICAgICAgdmFyIG1heWJlR2V0dGVyID0gZ2V0R2V0dGVyKHByb3BlcnR5TmFtZSk7XG4gICAgICAgICAgICBnZXR0ZXIgPSBtYXliZUdldHRlciAhPT0gbnVsbCA/IG1heWJlR2V0dGVyIDogbmFtZWRHZXR0ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBnZXR0ZXIgPSBuYW1lZEdldHRlcjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGdldHRlciA9IGluZGV4ZWRHZXR0ZXI7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl90aGVuKGdldHRlciwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHByb3BlcnR5TmFtZSwgdW5kZWZpbmVkKTtcbn07XG59O1xuXG59LHtcIi4vdXRpbFwiOjM2fV0sNjpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgUHJvbWlzZUFycmF5LCBhcGlSZWplY3Rpb24sIGRlYnVnKSB7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG52YXIgdHJ5Q2F0Y2ggPSB1dGlsLnRyeUNhdGNoO1xudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcbnZhciBhc3luYyA9IFByb21pc2UuX2FzeW5jO1xuXG5Qcm9taXNlLnByb3RvdHlwZVtcImJyZWFrXCJdID0gUHJvbWlzZS5wcm90b3R5cGUuY2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFkZWJ1Zy5jYW5jZWxsYXRpb24oKSkgcmV0dXJuIHRoaXMuX3dhcm4oXCJjYW5jZWxsYXRpb24gaXMgZGlzYWJsZWRcIik7XG5cbiAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gICAgdmFyIGNoaWxkID0gcHJvbWlzZTtcbiAgICB3aGlsZSAocHJvbWlzZS5pc0NhbmNlbGxhYmxlKCkpIHtcbiAgICAgICAgaWYgKCFwcm9taXNlLl9jYW5jZWxCeShjaGlsZCkpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZC5faXNGb2xsb3dpbmcoKSkge1xuICAgICAgICAgICAgICAgIGNoaWxkLl9mb2xsb3dlZSgpLmNhbmNlbCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5fY2FuY2VsQnJhbmNoZWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHBhcmVudCA9IHByb21pc2UuX2NhbmNlbGxhdGlvblBhcmVudDtcbiAgICAgICAgaWYgKHBhcmVudCA9PSBudWxsIHx8ICFwYXJlbnQuaXNDYW5jZWxsYWJsZSgpKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5faXNGb2xsb3dpbmcoKSkge1xuICAgICAgICAgICAgICAgIHByb21pc2UuX2ZvbGxvd2VlKCkuY2FuY2VsKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb21pc2UuX2NhbmNlbEJyYW5jaGVkKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9pc0ZvbGxvd2luZygpKSBwcm9taXNlLl9mb2xsb3dlZSgpLmNhbmNlbCgpO1xuICAgICAgICAgICAgY2hpbGQgPSBwcm9taXNlO1xuICAgICAgICAgICAgcHJvbWlzZSA9IHBhcmVudDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9icmFuY2hIYXNDYW5jZWxsZWQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9icmFuY2hlc1JlbWFpbmluZ1RvQ2FuY2VsLS07XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fZW5vdWdoQnJhbmNoZXNIYXZlQ2FuY2VsbGVkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JyYW5jaGVzUmVtYWluaW5nVG9DYW5jZWwgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgICAgICB0aGlzLl9icmFuY2hlc1JlbWFpbmluZ1RvQ2FuY2VsIDw9IDA7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fY2FuY2VsQnkgPSBmdW5jdGlvbihjYW5jZWxsZXIpIHtcbiAgICBpZiAoY2FuY2VsbGVyID09PSB0aGlzKSB7XG4gICAgICAgIHRoaXMuX2JyYW5jaGVzUmVtYWluaW5nVG9DYW5jZWwgPSAwO1xuICAgICAgICB0aGlzLl9pbnZva2VPbkNhbmNlbCgpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9icmFuY2hIYXNDYW5jZWxsZWQoKTtcbiAgICAgICAgaWYgKHRoaXMuX2Vub3VnaEJyYW5jaGVzSGF2ZUNhbmNlbGxlZCgpKSB7XG4gICAgICAgICAgICB0aGlzLl9pbnZva2VPbkNhbmNlbCgpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2NhbmNlbEJyYW5jaGVkID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2Vub3VnaEJyYW5jaGVzSGF2ZUNhbmNlbGxlZCgpKSB7XG4gICAgICAgIHRoaXMuX2NhbmNlbCgpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9jYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaXNDYW5jZWxsYWJsZSgpKSByZXR1cm47XG5cbiAgICB0aGlzLl9zZXRDYW5jZWxsZWQoKTtcbiAgICBhc3luYy5pbnZva2UodGhpcy5fY2FuY2VsUHJvbWlzZXMsIHRoaXMsIHVuZGVmaW5lZCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fY2FuY2VsUHJvbWlzZXMgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fbGVuZ3RoKCkgPiAwKSB0aGlzLl9zZXR0bGVQcm9taXNlcygpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Vuc2V0T25DYW5jZWwgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9vbkNhbmNlbEZpZWxkID0gdW5kZWZpbmVkO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuaXNDYW5jZWxsYWJsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmlzUGVuZGluZygpICYmICF0aGlzLmlzQ2FuY2VsbGVkKCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fZG9JbnZva2VPbkNhbmNlbCA9IGZ1bmN0aW9uKG9uQ2FuY2VsQ2FsbGJhY2ssIGludGVybmFsT25seSkge1xuICAgIGlmICh1dGlsLmlzQXJyYXkob25DYW5jZWxDYWxsYmFjaykpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvbkNhbmNlbENhbGxiYWNrLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICB0aGlzLl9kb0ludm9rZU9uQ2FuY2VsKG9uQ2FuY2VsQ2FsbGJhY2tbaV0sIGludGVybmFsT25seSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKG9uQ2FuY2VsQ2FsbGJhY2sgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodHlwZW9mIG9uQ2FuY2VsQ2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgaWYgKCFpbnRlcm5hbE9ubHkpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IHRyeUNhdGNoKG9uQ2FuY2VsQ2FsbGJhY2spLmNhbGwodGhpcy5fYm91bmRWYWx1ZSgpKTtcbiAgICAgICAgICAgICAgICBpZiAoZSA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fYXR0YWNoRXh0cmFUcmFjZShlLmUpO1xuICAgICAgICAgICAgICAgICAgICBhc3luYy50aHJvd0xhdGVyKGUuZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgb25DYW5jZWxDYWxsYmFjay5fcmVzdWx0Q2FuY2VsbGVkKHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2ludm9rZU9uQ2FuY2VsID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9uQ2FuY2VsQ2FsbGJhY2sgPSB0aGlzLl9vbkNhbmNlbCgpO1xuICAgIHRoaXMuX3Vuc2V0T25DYW5jZWwoKTtcbiAgICBhc3luYy5pbnZva2UodGhpcy5fZG9JbnZva2VPbkNhbmNlbCwgdGhpcywgb25DYW5jZWxDYWxsYmFjayk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faW52b2tlSW50ZXJuYWxPbkNhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmlzQ2FuY2VsbGFibGUoKSkge1xuICAgICAgICB0aGlzLl9kb0ludm9rZU9uQ2FuY2VsKHRoaXMuX29uQ2FuY2VsKCksIHRydWUpO1xuICAgICAgICB0aGlzLl91bnNldE9uQ2FuY2VsKCk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3Jlc3VsdENhbmNlbGxlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY2FuY2VsKCk7XG59O1xuXG59O1xuXG59LHtcIi4vdXRpbFwiOjM2fV0sNzpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkVYVF9GSUxURVIpIHtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbFwiKTtcbnZhciBnZXRLZXlzID0gX2RlcmVxXyhcIi4vZXM1XCIpLmtleXM7XG52YXIgdHJ5Q2F0Y2ggPSB1dGlsLnRyeUNhdGNoO1xudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcblxuZnVuY3Rpb24gY2F0Y2hGaWx0ZXIoaW5zdGFuY2VzLCBjYiwgcHJvbWlzZSkge1xuICAgIHJldHVybiBmdW5jdGlvbihlKSB7XG4gICAgICAgIHZhciBib3VuZFRvID0gcHJvbWlzZS5fYm91bmRWYWx1ZSgpO1xuICAgICAgICBwcmVkaWNhdGVMb29wOiBmb3IgKHZhciBpID0gMDsgaSA8IGluc3RhbmNlcy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSBpbnN0YW5jZXNbaV07XG5cbiAgICAgICAgICAgIGlmIChpdGVtID09PSBFcnJvciB8fFxuICAgICAgICAgICAgICAgIChpdGVtICE9IG51bGwgJiYgaXRlbS5wcm90b3R5cGUgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICAgICAgICAgICAgICBpZiAoZSBpbnN0YW5jZW9mIGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRyeUNhdGNoKGNiKS5jYWxsKGJvdW5kVG8sIGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGl0ZW0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaGVzUHJlZGljYXRlID0gdHJ5Q2F0Y2goaXRlbSkuY2FsbChib3VuZFRvLCBlKTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hlc1ByZWRpY2F0ZSA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hdGNoZXNQcmVkaWNhdGU7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaGVzUHJlZGljYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnlDYXRjaChjYikuY2FsbChib3VuZFRvLCBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHV0aWwuaXNPYmplY3QoZSkpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5cyA9IGdldEtleXMoaXRlbSk7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBrZXlzLmxlbmd0aDsgKytqKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2pdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbVtrZXldICE9IGVba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWUgcHJlZGljYXRlTG9vcDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ5Q2F0Y2goY2IpLmNhbGwoYm91bmRUbywgZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE5FWFRfRklMVEVSO1xuICAgIH07XG59XG5cbnJldHVybiBjYXRjaEZpbHRlcjtcbn07XG5cbn0se1wiLi9lczVcIjoxMyxcIi4vdXRpbFwiOjM2fV0sODpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSkge1xudmFyIGxvbmdTdGFja1RyYWNlcyA9IGZhbHNlO1xudmFyIGNvbnRleHRTdGFjayA9IFtdO1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcHJvbWlzZUNyZWF0ZWQgPSBmdW5jdGlvbigpIHt9O1xuUHJvbWlzZS5wcm90b3R5cGUuX3B1c2hDb250ZXh0ID0gZnVuY3Rpb24oKSB7fTtcblByb21pc2UucHJvdG90eXBlLl9wb3BDb250ZXh0ID0gZnVuY3Rpb24oKSB7cmV0dXJuIG51bGw7fTtcblByb21pc2UuX3BlZWtDb250ZXh0ID0gUHJvbWlzZS5wcm90b3R5cGUuX3BlZWtDb250ZXh0ID0gZnVuY3Rpb24oKSB7fTtcblxuZnVuY3Rpb24gQ29udGV4dCgpIHtcbiAgICB0aGlzLl90cmFjZSA9IG5ldyBDb250ZXh0LkNhcHR1cmVkVHJhY2UocGVla0NvbnRleHQoKSk7XG59XG5Db250ZXh0LnByb3RvdHlwZS5fcHVzaENvbnRleHQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuX3RyYWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5fdHJhY2UuX3Byb21pc2VDcmVhdGVkID0gbnVsbDtcbiAgICAgICAgY29udGV4dFN0YWNrLnB1c2godGhpcy5fdHJhY2UpO1xuICAgIH1cbn07XG5cbkNvbnRleHQucHJvdG90eXBlLl9wb3BDb250ZXh0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl90cmFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciB0cmFjZSA9IGNvbnRleHRTdGFjay5wb3AoKTtcbiAgICAgICAgdmFyIHJldCA9IHRyYWNlLl9wcm9taXNlQ3JlYXRlZDtcbiAgICAgICAgdHJhY2UuX3Byb21pc2VDcmVhdGVkID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5mdW5jdGlvbiBjcmVhdGVDb250ZXh0KCkge1xuICAgIGlmIChsb25nU3RhY2tUcmFjZXMpIHJldHVybiBuZXcgQ29udGV4dCgpO1xufVxuXG5mdW5jdGlvbiBwZWVrQ29udGV4dCgpIHtcbiAgICB2YXIgbGFzdEluZGV4ID0gY29udGV4dFN0YWNrLmxlbmd0aCAtIDE7XG4gICAgaWYgKGxhc3RJbmRleCA+PSAwKSB7XG4gICAgICAgIHJldHVybiBjb250ZXh0U3RhY2tbbGFzdEluZGV4XTtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbkNvbnRleHQuQ2FwdHVyZWRUcmFjZSA9IG51bGw7XG5Db250ZXh0LmNyZWF0ZSA9IGNyZWF0ZUNvbnRleHQ7XG5Db250ZXh0LmRlYWN0aXZhdGVMb25nU3RhY2tUcmFjZXMgPSBmdW5jdGlvbigpIHt9O1xuQ29udGV4dC5hY3RpdmF0ZUxvbmdTdGFja1RyYWNlcyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBQcm9taXNlX3B1c2hDb250ZXh0ID0gUHJvbWlzZS5wcm90b3R5cGUuX3B1c2hDb250ZXh0O1xuICAgIHZhciBQcm9taXNlX3BvcENvbnRleHQgPSBQcm9taXNlLnByb3RvdHlwZS5fcG9wQ29udGV4dDtcbiAgICB2YXIgUHJvbWlzZV9QZWVrQ29udGV4dCA9IFByb21pc2UuX3BlZWtDb250ZXh0O1xuICAgIHZhciBQcm9taXNlX3BlZWtDb250ZXh0ID0gUHJvbWlzZS5wcm90b3R5cGUuX3BlZWtDb250ZXh0O1xuICAgIHZhciBQcm9taXNlX3Byb21pc2VDcmVhdGVkID0gUHJvbWlzZS5wcm90b3R5cGUuX3Byb21pc2VDcmVhdGVkO1xuICAgIENvbnRleHQuZGVhY3RpdmF0ZUxvbmdTdGFja1RyYWNlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5fcHVzaENvbnRleHQgPSBQcm9taXNlX3B1c2hDb250ZXh0O1xuICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5fcG9wQ29udGV4dCA9IFByb21pc2VfcG9wQ29udGV4dDtcbiAgICAgICAgUHJvbWlzZS5fcGVla0NvbnRleHQgPSBQcm9taXNlX1BlZWtDb250ZXh0O1xuICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5fcGVla0NvbnRleHQgPSBQcm9taXNlX3BlZWtDb250ZXh0O1xuICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5fcHJvbWlzZUNyZWF0ZWQgPSBQcm9taXNlX3Byb21pc2VDcmVhdGVkO1xuICAgICAgICBsb25nU3RhY2tUcmFjZXMgPSBmYWxzZTtcbiAgICB9O1xuICAgIGxvbmdTdGFja1RyYWNlcyA9IHRydWU7XG4gICAgUHJvbWlzZS5wcm90b3R5cGUuX3B1c2hDb250ZXh0ID0gQ29udGV4dC5wcm90b3R5cGUuX3B1c2hDb250ZXh0O1xuICAgIFByb21pc2UucHJvdG90eXBlLl9wb3BDb250ZXh0ID0gQ29udGV4dC5wcm90b3R5cGUuX3BvcENvbnRleHQ7XG4gICAgUHJvbWlzZS5fcGVla0NvbnRleHQgPSBQcm9taXNlLnByb3RvdHlwZS5fcGVla0NvbnRleHQgPSBwZWVrQ29udGV4dDtcbiAgICBQcm9taXNlLnByb3RvdHlwZS5fcHJvbWlzZUNyZWF0ZWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGN0eCA9IHRoaXMuX3BlZWtDb250ZXh0KCk7XG4gICAgICAgIGlmIChjdHggJiYgY3R4Ll9wcm9taXNlQ3JlYXRlZCA9PSBudWxsKSBjdHguX3Byb21pc2VDcmVhdGVkID0gdGhpcztcbiAgICB9O1xufTtcbnJldHVybiBDb250ZXh0O1xufTtcblxufSx7fV0sOTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oUHJvbWlzZSwgQ29udGV4dCkge1xudmFyIGdldERvbWFpbiA9IFByb21pc2UuX2dldERvbWFpbjtcbnZhciBhc3luYyA9IFByb21pc2UuX2FzeW5jO1xudmFyIFdhcm5pbmcgPSBfZGVyZXFfKFwiLi9lcnJvcnNcIikuV2FybmluZztcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbFwiKTtcbnZhciBjYW5BdHRhY2hUcmFjZSA9IHV0aWwuY2FuQXR0YWNoVHJhY2U7XG52YXIgdW5oYW5kbGVkUmVqZWN0aW9uSGFuZGxlZDtcbnZhciBwb3NzaWJseVVuaGFuZGxlZFJlamVjdGlvbjtcbnZhciBibHVlYmlyZEZyYW1lUGF0dGVybiA9XG4gICAgL1tcXFxcXFwvXWJsdWViaXJkW1xcXFxcXC9danNbXFxcXFxcL10ocmVsZWFzZXxkZWJ1Z3xpbnN0cnVtZW50ZWQpLztcbnZhciBzdGFja0ZyYW1lUGF0dGVybiA9IG51bGw7XG52YXIgZm9ybWF0U3RhY2sgPSBudWxsO1xudmFyIGluZGVudFN0YWNrRnJhbWVzID0gZmFsc2U7XG52YXIgcHJpbnRXYXJuaW5nO1xudmFyIGRlYnVnZ2luZyA9ICEhKHV0aWwuZW52KFwiQkxVRUJJUkRfREVCVUdcIikgIT0gMCAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgKHRydWUgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICB1dGlsLmVudihcIkJMVUVCSVJEX0RFQlVHXCIpIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgdXRpbC5lbnYoXCJOT0RFX0VOVlwiKSA9PT0gXCJkZXZlbG9wbWVudFwiKSk7XG5cbnZhciB3YXJuaW5ncyA9ICEhKHV0aWwuZW52KFwiQkxVRUJJUkRfV0FSTklOR1NcIikgIT0gMCAmJlxuICAgIChkZWJ1Z2dpbmcgfHwgdXRpbC5lbnYoXCJCTFVFQklSRF9XQVJOSU5HU1wiKSkpO1xuXG52YXIgbG9uZ1N0YWNrVHJhY2VzID0gISEodXRpbC5lbnYoXCJCTFVFQklSRF9MT05HX1NUQUNLX1RSQUNFU1wiKSAhPSAwICYmXG4gICAgKGRlYnVnZ2luZyB8fCB1dGlsLmVudihcIkJMVUVCSVJEX0xPTkdfU1RBQ0tfVFJBQ0VTXCIpKSk7XG5cbnZhciB3Rm9yZ290dGVuUmV0dXJuID0gdXRpbC5lbnYoXCJCTFVFQklSRF9XX0ZPUkdPVFRFTl9SRVRVUk5cIikgIT0gMCAmJlxuICAgICh3YXJuaW5ncyB8fCAhIXV0aWwuZW52KFwiQkxVRUJJUkRfV19GT1JHT1RURU5fUkVUVVJOXCIpKTtcblxuUHJvbWlzZS5wcm90b3R5cGUuc3VwcHJlc3NVbmhhbmRsZWRSZWplY3Rpb25zID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRhcmdldCA9IHRoaXMuX3RhcmdldCgpO1xuICAgIHRhcmdldC5fYml0RmllbGQgPSAoKHRhcmdldC5fYml0RmllbGQgJiAofjEwNDg1NzYpKSB8XG4gICAgICAgICAgICAgICAgICAgICAgNTI0Mjg4KTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9lbnN1cmVQb3NzaWJsZVJlamVjdGlvbkhhbmRsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCh0aGlzLl9iaXRGaWVsZCAmIDUyNDI4OCkgIT09IDApIHJldHVybjtcbiAgICB0aGlzLl9zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCgpO1xuICAgIGFzeW5jLmludm9rZUxhdGVyKHRoaXMuX25vdGlmeVVuaGFuZGxlZFJlamVjdGlvbiwgdGhpcywgdW5kZWZpbmVkKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9ub3RpZnlVbmhhbmRsZWRSZWplY3Rpb25Jc0hhbmRsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgZmlyZVJlamVjdGlvbkV2ZW50KFwicmVqZWN0aW9uSGFuZGxlZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaGFuZGxlZFJlamVjdGlvbkhhbmRsZWQsIHVuZGVmaW5lZCwgdGhpcyk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0UmV0dXJuZWROb25VbmRlZmluZWQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgMjY4NDM1NDU2O1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3JldHVybmVkTm9uVW5kZWZpbmVkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDI2ODQzNTQ1NikgIT09IDA7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fbm90aWZ5VW5oYW5kbGVkUmVqZWN0aW9uID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl9pc1JlamVjdGlvblVuaGFuZGxlZCgpKSB7XG4gICAgICAgIHZhciByZWFzb24gPSB0aGlzLl9zZXR0bGVkVmFsdWUoKTtcbiAgICAgICAgdGhpcy5fc2V0VW5oYW5kbGVkUmVqZWN0aW9uSXNOb3RpZmllZCgpO1xuICAgICAgICBmaXJlUmVqZWN0aW9uRXZlbnQoXCJ1bmhhbmRsZWRSZWplY3Rpb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libHlVbmhhbmRsZWRSZWplY3Rpb24sIHJlYXNvbiwgdGhpcyk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldFVuaGFuZGxlZFJlamVjdGlvbklzTm90aWZpZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDI2MjE0NDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl91bnNldFVuaGFuZGxlZFJlamVjdGlvbklzTm90aWZpZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCAmICh+MjYyMTQ0KTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc1VuaGFuZGxlZFJlamVjdGlvbk5vdGlmaWVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiAyNjIxNDQpID4gMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgMTA0ODU3Njtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl91bnNldFJlamVjdGlvbklzVW5oYW5kbGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgJiAofjEwNDg1NzYpO1xuICAgIGlmICh0aGlzLl9pc1VuaGFuZGxlZFJlamVjdGlvbk5vdGlmaWVkKCkpIHtcbiAgICAgICAgdGhpcy5fdW5zZXRVbmhhbmRsZWRSZWplY3Rpb25Jc05vdGlmaWVkKCk7XG4gICAgICAgIHRoaXMuX25vdGlmeVVuaGFuZGxlZFJlamVjdGlvbklzSGFuZGxlZCgpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc1JlamVjdGlvblVuaGFuZGxlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgMTA0ODU3NikgPiAwO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3dhcm4gPSBmdW5jdGlvbihtZXNzYWdlLCBzaG91bGRVc2VPd25UcmFjZSwgcHJvbWlzZSkge1xuICAgIHJldHVybiB3YXJuKG1lc3NhZ2UsIHNob3VsZFVzZU93blRyYWNlLCBwcm9taXNlIHx8IHRoaXMpO1xufTtcblxuUHJvbWlzZS5vblBvc3NpYmx5VW5oYW5kbGVkUmVqZWN0aW9uID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIGRvbWFpbiA9IGdldERvbWFpbigpO1xuICAgIHBvc3NpYmx5VW5oYW5kbGVkUmVqZWN0aW9uID1cbiAgICAgICAgdHlwZW9mIGZuID09PSBcImZ1bmN0aW9uXCIgPyAoZG9tYWluID09PSBudWxsID8gZm4gOiBkb21haW4uYmluZChmbikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZDtcbn07XG5cblByb21pc2Uub25VbmhhbmRsZWRSZWplY3Rpb25IYW5kbGVkID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIGRvbWFpbiA9IGdldERvbWFpbigpO1xuICAgIHVuaGFuZGxlZFJlamVjdGlvbkhhbmRsZWQgPVxuICAgICAgICB0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIiA/IChkb21haW4gPT09IG51bGwgPyBmbiA6IGRvbWFpbi5iaW5kKGZuKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkO1xufTtcblxudmFyIGRpc2FibGVMb25nU3RhY2tUcmFjZXMgPSBmdW5jdGlvbigpIHt9O1xuUHJvbWlzZS5sb25nU3RhY2tUcmFjZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGFzeW5jLmhhdmVJdGVtc1F1ZXVlZCgpICYmICFjb25maWcubG9uZ1N0YWNrVHJhY2VzKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcImNhbm5vdCBlbmFibGUgbG9uZyBzdGFjayB0cmFjZXMgYWZ0ZXIgcHJvbWlzZXMgaGF2ZSBiZWVuIGNyZWF0ZWRcXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9NcXJGbVhcXHUwMDBhXCIpO1xuICAgIH1cbiAgICBpZiAoIWNvbmZpZy5sb25nU3RhY2tUcmFjZXMgJiYgbG9uZ1N0YWNrVHJhY2VzSXNTdXBwb3J0ZWQoKSkge1xuICAgICAgICB2YXIgUHJvbWlzZV9jYXB0dXJlU3RhY2tUcmFjZSA9IFByb21pc2UucHJvdG90eXBlLl9jYXB0dXJlU3RhY2tUcmFjZTtcbiAgICAgICAgdmFyIFByb21pc2VfYXR0YWNoRXh0cmFUcmFjZSA9IFByb21pc2UucHJvdG90eXBlLl9hdHRhY2hFeHRyYVRyYWNlO1xuICAgICAgICBjb25maWcubG9uZ1N0YWNrVHJhY2VzID0gdHJ1ZTtcbiAgICAgICAgZGlzYWJsZUxvbmdTdGFja1RyYWNlcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKGFzeW5jLmhhdmVJdGVtc1F1ZXVlZCgpICYmICFjb25maWcubG9uZ1N0YWNrVHJhY2VzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiY2Fubm90IGVuYWJsZSBsb25nIHN0YWNrIHRyYWNlcyBhZnRlciBwcm9taXNlcyBoYXZlIGJlZW4gY3JlYXRlZFxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL01xckZtWFxcdTAwMGFcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5fY2FwdHVyZVN0YWNrVHJhY2UgPSBQcm9taXNlX2NhcHR1cmVTdGFja1RyYWNlO1xuICAgICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuX2F0dGFjaEV4dHJhVHJhY2UgPSBQcm9taXNlX2F0dGFjaEV4dHJhVHJhY2U7XG4gICAgICAgICAgICBDb250ZXh0LmRlYWN0aXZhdGVMb25nU3RhY2tUcmFjZXMoKTtcbiAgICAgICAgICAgIGFzeW5jLmVuYWJsZVRyYW1wb2xpbmUoKTtcbiAgICAgICAgICAgIGNvbmZpZy5sb25nU3RhY2tUcmFjZXMgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuX2NhcHR1cmVTdGFja1RyYWNlID0gbG9uZ1N0YWNrVHJhY2VzQ2FwdHVyZVN0YWNrVHJhY2U7XG4gICAgICAgIFByb21pc2UucHJvdG90eXBlLl9hdHRhY2hFeHRyYVRyYWNlID0gbG9uZ1N0YWNrVHJhY2VzQXR0YWNoRXh0cmFUcmFjZTtcbiAgICAgICAgQ29udGV4dC5hY3RpdmF0ZUxvbmdTdGFja1RyYWNlcygpO1xuICAgICAgICBhc3luYy5kaXNhYmxlVHJhbXBvbGluZUlmTmVjZXNzYXJ5KCk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5oYXNMb25nU3RhY2tUcmFjZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNvbmZpZy5sb25nU3RhY2tUcmFjZXMgJiYgbG9uZ1N0YWNrVHJhY2VzSXNTdXBwb3J0ZWQoKTtcbn07XG5cbnZhciBmaXJlRG9tRXZlbnQgPSAoZnVuY3Rpb24oKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJDdXN0b21FdmVudFwiKTtcbiAgICAgICAgZXZlbnQuaW5pdEN1c3RvbUV2ZW50KFwidGVzdGluZ3RoZWV2ZW50XCIsIGZhbHNlLCB0cnVlLCB7fSk7XG4gICAgICAgIHV0aWwuZ2xvYmFsLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24obmFtZSwgZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBkb21FdmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIik7XG4gICAgICAgICAgICBkb21FdmVudC5pbml0Q3VzdG9tRXZlbnQobmFtZS50b0xvd2VyQ2FzZSgpLCBmYWxzZSwgdHJ1ZSwgZXZlbnQpO1xuICAgICAgICAgICAgcmV0dXJuICF1dGlsLmdsb2JhbC5kaXNwYXRjaEV2ZW50KGRvbUV2ZW50KTtcbiAgICAgICAgfTtcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG59KSgpO1xuXG52YXIgZmlyZUdsb2JhbEV2ZW50ID0gKGZ1bmN0aW9uKCkge1xuICAgIGlmICh1dGlsLmlzTm9kZSkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvY2Vzcy5lbWl0LmFwcGx5KHByb2Nlc3MsIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKCF1dGlsLmdsb2JhbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBtZXRob2ROYW1lID0gXCJvblwiICsgbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IHV0aWwuZ2xvYmFsW21ldGhvZE5hbWVdO1xuICAgICAgICAgICAgaWYgKCFtZXRob2QpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIG1ldGhvZC5hcHBseSh1dGlsLmdsb2JhbCwgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgIH1cbn0pKCk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlUHJvbWlzZUxpZmVjeWNsZUV2ZW50T2JqZWN0KG5hbWUsIHByb21pc2UpIHtcbiAgICByZXR1cm4ge3Byb21pc2U6IHByb21pc2V9O1xufVxuXG52YXIgZXZlbnRUb09iamVjdEdlbmVyYXRvciA9IHtcbiAgICBwcm9taXNlQ3JlYXRlZDogZ2VuZXJhdGVQcm9taXNlTGlmZWN5Y2xlRXZlbnRPYmplY3QsXG4gICAgcHJvbWlzZUZ1bGZpbGxlZDogZ2VuZXJhdGVQcm9taXNlTGlmZWN5Y2xlRXZlbnRPYmplY3QsXG4gICAgcHJvbWlzZVJlamVjdGVkOiBnZW5lcmF0ZVByb21pc2VMaWZlY3ljbGVFdmVudE9iamVjdCxcbiAgICBwcm9taXNlUmVzb2x2ZWQ6IGdlbmVyYXRlUHJvbWlzZUxpZmVjeWNsZUV2ZW50T2JqZWN0LFxuICAgIHByb21pc2VDYW5jZWxsZWQ6IGdlbmVyYXRlUHJvbWlzZUxpZmVjeWNsZUV2ZW50T2JqZWN0LFxuICAgIHByb21pc2VDaGFpbmVkOiBmdW5jdGlvbihuYW1lLCBwcm9taXNlLCBjaGlsZCkge1xuICAgICAgICByZXR1cm4ge3Byb21pc2U6IHByb21pc2UsIGNoaWxkOiBjaGlsZH07XG4gICAgfSxcbiAgICB3YXJuaW5nOiBmdW5jdGlvbihuYW1lLCB3YXJuaW5nKSB7XG4gICAgICAgIHJldHVybiB7d2FybmluZzogd2FybmluZ307XG4gICAgfSxcbiAgICB1bmhhbmRsZWRSZWplY3Rpb246IGZ1bmN0aW9uIChuYW1lLCByZWFzb24sIHByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIHtyZWFzb246IHJlYXNvbiwgcHJvbWlzZTogcHJvbWlzZX07XG4gICAgfSxcbiAgICByZWplY3Rpb25IYW5kbGVkOiBnZW5lcmF0ZVByb21pc2VMaWZlY3ljbGVFdmVudE9iamVjdFxufTtcblxudmFyIGFjdGl2ZUZpcmVFdmVudCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgdmFyIGdsb2JhbEV2ZW50RmlyZWQgPSBmYWxzZTtcbiAgICB0cnkge1xuICAgICAgICBnbG9iYWxFdmVudEZpcmVkID0gZmlyZUdsb2JhbEV2ZW50LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBhc3luYy50aHJvd0xhdGVyKGUpO1xuICAgICAgICBnbG9iYWxFdmVudEZpcmVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgZG9tRXZlbnRGaXJlZCA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICAgIGRvbUV2ZW50RmlyZWQgPSBmaXJlRG9tRXZlbnQobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRUb09iamVjdEdlbmVyYXRvcltuYW1lXS5hcHBseShudWxsLCBhcmd1bWVudHMpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGFzeW5jLnRocm93TGF0ZXIoZSk7XG4gICAgICAgIGRvbUV2ZW50RmlyZWQgPSB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBkb21FdmVudEZpcmVkIHx8IGdsb2JhbEV2ZW50RmlyZWQ7XG59O1xuXG5Qcm9taXNlLmNvbmZpZyA9IGZ1bmN0aW9uKG9wdHMpIHtcbiAgICBvcHRzID0gT2JqZWN0KG9wdHMpO1xuICAgIGlmIChcImxvbmdTdGFja1RyYWNlc1wiIGluIG9wdHMpIHtcbiAgICAgICAgaWYgKG9wdHMubG9uZ1N0YWNrVHJhY2VzKSB7XG4gICAgICAgICAgICBQcm9taXNlLmxvbmdTdGFja1RyYWNlcygpO1xuICAgICAgICB9IGVsc2UgaWYgKCFvcHRzLmxvbmdTdGFja1RyYWNlcyAmJiBQcm9taXNlLmhhc0xvbmdTdGFja1RyYWNlcygpKSB7XG4gICAgICAgICAgICBkaXNhYmxlTG9uZ1N0YWNrVHJhY2VzKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKFwid2FybmluZ3NcIiBpbiBvcHRzKSB7XG4gICAgICAgIHZhciB3YXJuaW5nc09wdGlvbiA9IG9wdHMud2FybmluZ3M7XG4gICAgICAgIGNvbmZpZy53YXJuaW5ncyA9ICEhd2FybmluZ3NPcHRpb247XG4gICAgICAgIHdGb3Jnb3R0ZW5SZXR1cm4gPSBjb25maWcud2FybmluZ3M7XG5cbiAgICAgICAgaWYgKHV0aWwuaXNPYmplY3Qod2FybmluZ3NPcHRpb24pKSB7XG4gICAgICAgICAgICBpZiAoXCJ3Rm9yZ290dGVuUmV0dXJuXCIgaW4gd2FybmluZ3NPcHRpb24pIHtcbiAgICAgICAgICAgICAgICB3Rm9yZ290dGVuUmV0dXJuID0gISF3YXJuaW5nc09wdGlvbi53Rm9yZ290dGVuUmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChcImNhbmNlbGxhdGlvblwiIGluIG9wdHMgJiYgb3B0cy5jYW5jZWxsYXRpb24gJiYgIWNvbmZpZy5jYW5jZWxsYXRpb24pIHtcbiAgICAgICAgaWYgKGFzeW5jLmhhdmVJdGVtc1F1ZXVlZCgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICAgICAgXCJjYW5ub3QgZW5hYmxlIGNhbmNlbGxhdGlvbiBhZnRlciBwcm9taXNlcyBhcmUgaW4gdXNlXCIpO1xuICAgICAgICB9XG4gICAgICAgIFByb21pc2UucHJvdG90eXBlLl9jbGVhckNhbmNlbGxhdGlvbkRhdGEgPVxuICAgICAgICAgICAgY2FuY2VsbGF0aW9uQ2xlYXJDYW5jZWxsYXRpb25EYXRhO1xuICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5fcHJvcGFnYXRlRnJvbSA9IGNhbmNlbGxhdGlvblByb3BhZ2F0ZUZyb207XG4gICAgICAgIFByb21pc2UucHJvdG90eXBlLl9vbkNhbmNlbCA9IGNhbmNlbGxhdGlvbk9uQ2FuY2VsO1xuICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5fc2V0T25DYW5jZWwgPSBjYW5jZWxsYXRpb25TZXRPbkNhbmNlbDtcbiAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuX2F0dGFjaENhbmNlbGxhdGlvbkNhbGxiYWNrID1cbiAgICAgICAgICAgIGNhbmNlbGxhdGlvbkF0dGFjaENhbmNlbGxhdGlvbkNhbGxiYWNrO1xuICAgICAgICBQcm9taXNlLnByb3RvdHlwZS5fZXhlY3V0ZSA9IGNhbmNlbGxhdGlvbkV4ZWN1dGU7XG4gICAgICAgIHByb3BhZ2F0ZUZyb21GdW5jdGlvbiA9IGNhbmNlbGxhdGlvblByb3BhZ2F0ZUZyb207XG4gICAgICAgIGNvbmZpZy5jYW5jZWxsYXRpb24gPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoXCJtb25pdG9yaW5nXCIgaW4gb3B0cykge1xuICAgICAgICBpZiAob3B0cy5tb25pdG9yaW5nICYmICFjb25maWcubW9uaXRvcmluZykge1xuICAgICAgICAgICAgY29uZmlnLm1vbml0b3JpbmcgPSB0cnVlO1xuICAgICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuX2ZpcmVFdmVudCA9IGFjdGl2ZUZpcmVFdmVudDtcbiAgICAgICAgfSBlbHNlIGlmICghb3B0cy5tb25pdG9yaW5nICYmIGNvbmZpZy5tb25pdG9yaW5nKSB7XG4gICAgICAgICAgICBjb25maWcubW9uaXRvcmluZyA9IGZhbHNlO1xuICAgICAgICAgICAgUHJvbWlzZS5wcm90b3R5cGUuX2ZpcmVFdmVudCA9IGRlZmF1bHRGaXJlRXZlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG5mdW5jdGlvbiBkZWZhdWx0RmlyZUV2ZW50KCkgeyByZXR1cm4gZmFsc2U7IH1cblxuUHJvbWlzZS5wcm90b3R5cGUuX2ZpcmVFdmVudCA9IGRlZmF1bHRGaXJlRXZlbnQ7XG5Qcm9taXNlLnByb3RvdHlwZS5fZXhlY3V0ZSA9IGZ1bmN0aW9uKGV4ZWN1dG9yLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICB0cnkge1xuICAgICAgICBleGVjdXRvcihyZXNvbHZlLCByZWplY3QpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGU7XG4gICAgfVxufTtcblByb21pc2UucHJvdG90eXBlLl9vbkNhbmNlbCA9IGZ1bmN0aW9uICgpIHt9O1xuUHJvbWlzZS5wcm90b3R5cGUuX3NldE9uQ2FuY2VsID0gZnVuY3Rpb24gKGhhbmRsZXIpIHsgOyB9O1xuUHJvbWlzZS5wcm90b3R5cGUuX2F0dGFjaENhbmNlbGxhdGlvbkNhbGxiYWNrID0gZnVuY3Rpb24ob25DYW5jZWwpIHtcbiAgICA7XG59O1xuUHJvbWlzZS5wcm90b3R5cGUuX2NhcHR1cmVTdGFja1RyYWNlID0gZnVuY3Rpb24gKCkge307XG5Qcm9taXNlLnByb3RvdHlwZS5fYXR0YWNoRXh0cmFUcmFjZSA9IGZ1bmN0aW9uICgpIHt9O1xuUHJvbWlzZS5wcm90b3R5cGUuX2NsZWFyQ2FuY2VsbGF0aW9uRGF0YSA9IGZ1bmN0aW9uKCkge307XG5Qcm9taXNlLnByb3RvdHlwZS5fcHJvcGFnYXRlRnJvbSA9IGZ1bmN0aW9uIChwYXJlbnQsIGZsYWdzKSB7XG4gICAgO1xuICAgIDtcbn07XG5cbmZ1bmN0aW9uIGNhbmNlbGxhdGlvbkV4ZWN1dGUoZXhlY3V0b3IsIHJlc29sdmUsIHJlamVjdCkge1xuICAgIHZhciBwcm9taXNlID0gdGhpcztcbiAgICB0cnkge1xuICAgICAgICBleGVjdXRvcihyZXNvbHZlLCByZWplY3QsIGZ1bmN0aW9uKG9uQ2FuY2VsKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG9uQ2FuY2VsICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwib25DYW5jZWwgbXVzdCBiZSBhIGZ1bmN0aW9uLCBnb3Q6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWwudG9TdHJpbmcob25DYW5jZWwpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByb21pc2UuX2F0dGFjaENhbmNlbGxhdGlvbkNhbGxiYWNrKG9uQ2FuY2VsKTtcbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNhbmNlbGxhdGlvbkF0dGFjaENhbmNlbGxhdGlvbkNhbGxiYWNrKG9uQ2FuY2VsKSB7XG4gICAgaWYgKCF0aGlzLmlzQ2FuY2VsbGFibGUoKSkgcmV0dXJuIHRoaXM7XG5cbiAgICB2YXIgcHJldmlvdXNPbkNhbmNlbCA9IHRoaXMuX29uQ2FuY2VsKCk7XG4gICAgaWYgKHByZXZpb3VzT25DYW5jZWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodXRpbC5pc0FycmF5KHByZXZpb3VzT25DYW5jZWwpKSB7XG4gICAgICAgICAgICBwcmV2aW91c09uQ2FuY2VsLnB1c2gob25DYW5jZWwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2V0T25DYW5jZWwoW3ByZXZpb3VzT25DYW5jZWwsIG9uQ2FuY2VsXSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zZXRPbkNhbmNlbChvbkNhbmNlbCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBjYW5jZWxsYXRpb25PbkNhbmNlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5fb25DYW5jZWxGaWVsZDtcbn1cblxuZnVuY3Rpb24gY2FuY2VsbGF0aW9uU2V0T25DYW5jZWwob25DYW5jZWwpIHtcbiAgICB0aGlzLl9vbkNhbmNlbEZpZWxkID0gb25DYW5jZWw7XG59XG5cbmZ1bmN0aW9uIGNhbmNlbGxhdGlvbkNsZWFyQ2FuY2VsbGF0aW9uRGF0YSgpIHtcbiAgICB0aGlzLl9jYW5jZWxsYXRpb25QYXJlbnQgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fb25DYW5jZWxGaWVsZCA9IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gY2FuY2VsbGF0aW9uUHJvcGFnYXRlRnJvbShwYXJlbnQsIGZsYWdzKSB7XG4gICAgaWYgKChmbGFncyAmIDEpICE9PSAwKSB7XG4gICAgICAgIHRoaXMuX2NhbmNlbGxhdGlvblBhcmVudCA9IHBhcmVudDtcbiAgICAgICAgdmFyIGJyYW5jaGVzUmVtYWluaW5nVG9DYW5jZWwgPSBwYXJlbnQuX2JyYW5jaGVzUmVtYWluaW5nVG9DYW5jZWw7XG4gICAgICAgIGlmIChicmFuY2hlc1JlbWFpbmluZ1RvQ2FuY2VsID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGJyYW5jaGVzUmVtYWluaW5nVG9DYW5jZWwgPSAwO1xuICAgICAgICB9XG4gICAgICAgIHBhcmVudC5fYnJhbmNoZXNSZW1haW5pbmdUb0NhbmNlbCA9IGJyYW5jaGVzUmVtYWluaW5nVG9DYW5jZWwgKyAxO1xuICAgIH1cbiAgICBpZiAoKGZsYWdzICYgMikgIT09IDAgJiYgcGFyZW50Ll9pc0JvdW5kKCkpIHtcbiAgICAgICAgdGhpcy5fc2V0Qm91bmRUbyhwYXJlbnQuX2JvdW5kVG8pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYmluZGluZ1Byb3BhZ2F0ZUZyb20ocGFyZW50LCBmbGFncykge1xuICAgIGlmICgoZmxhZ3MgJiAyKSAhPT0gMCAmJiBwYXJlbnQuX2lzQm91bmQoKSkge1xuICAgICAgICB0aGlzLl9zZXRCb3VuZFRvKHBhcmVudC5fYm91bmRUbyk7XG4gICAgfVxufVxudmFyIHByb3BhZ2F0ZUZyb21GdW5jdGlvbiA9IGJpbmRpbmdQcm9wYWdhdGVGcm9tO1xuXG5mdW5jdGlvbiBib3VuZFZhbHVlRnVuY3Rpb24oKSB7XG4gICAgdmFyIHJldCA9IHRoaXMuX2JvdW5kVG87XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChyZXQgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICBpZiAocmV0LmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0LnZhbHVlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gbG9uZ1N0YWNrVHJhY2VzQ2FwdHVyZVN0YWNrVHJhY2UoKSB7XG4gICAgdGhpcy5fdHJhY2UgPSBuZXcgQ2FwdHVyZWRUcmFjZSh0aGlzLl9wZWVrQ29udGV4dCgpKTtcbn1cblxuZnVuY3Rpb24gbG9uZ1N0YWNrVHJhY2VzQXR0YWNoRXh0cmFUcmFjZShlcnJvciwgaWdub3JlU2VsZikge1xuICAgIGlmIChjYW5BdHRhY2hUcmFjZShlcnJvcikpIHtcbiAgICAgICAgdmFyIHRyYWNlID0gdGhpcy5fdHJhY2U7XG4gICAgICAgIGlmICh0cmFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAoaWdub3JlU2VsZikgdHJhY2UgPSB0cmFjZS5fcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIGlmICh0cmFjZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0cmFjZS5hdHRhY2hFeHRyYVRyYWNlKGVycm9yKTtcbiAgICAgICAgfSBlbHNlIGlmICghZXJyb3IuX19zdGFja0NsZWFuZWRfXykge1xuICAgICAgICAgICAgdmFyIHBhcnNlZCA9IHBhcnNlU3RhY2tBbmRNZXNzYWdlKGVycm9yKTtcbiAgICAgICAgICAgIHV0aWwubm90RW51bWVyYWJsZVByb3AoZXJyb3IsIFwic3RhY2tcIixcbiAgICAgICAgICAgICAgICBwYXJzZWQubWVzc2FnZSArIFwiXFxuXCIgKyBwYXJzZWQuc3RhY2suam9pbihcIlxcblwiKSk7XG4gICAgICAgICAgICB1dGlsLm5vdEVudW1lcmFibGVQcm9wKGVycm9yLCBcIl9fc3RhY2tDbGVhbmVkX19cIiwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNoZWNrRm9yZ290dGVuUmV0dXJucyhyZXR1cm5WYWx1ZSwgcHJvbWlzZUNyZWF0ZWQsIG5hbWUsIHByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50KSB7XG4gICAgaWYgKHJldHVyblZhbHVlID09PSB1bmRlZmluZWQgJiYgcHJvbWlzZUNyZWF0ZWQgIT09IG51bGwgJiZcbiAgICAgICAgd0ZvcmdvdHRlblJldHVybikge1xuICAgICAgICBpZiAocGFyZW50ICE9PSB1bmRlZmluZWQgJiYgcGFyZW50Ll9yZXR1cm5lZE5vblVuZGVmaW5lZCgpKSByZXR1cm47XG4gICAgICAgIGlmICgocHJvbWlzZS5fYml0RmllbGQgJiA2NTUzNSkgPT09IDApIHJldHVybjtcblxuICAgICAgICBpZiAobmFtZSkgbmFtZSA9IG5hbWUgKyBcIiBcIjtcbiAgICAgICAgdmFyIG1zZyA9IFwiYSBwcm9taXNlIHdhcyBjcmVhdGVkIGluIGEgXCIgKyBuYW1lICtcbiAgICAgICAgICAgIFwiaGFuZGxlciBidXQgd2FzIG5vdCByZXR1cm5lZCBmcm9tIGl0XCI7XG4gICAgICAgIHByb21pc2UuX3dhcm4obXNnLCB0cnVlLCBwcm9taXNlQ3JlYXRlZCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkZXByZWNhdGVkKG5hbWUsIHJlcGxhY2VtZW50KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSBuYW1lICtcbiAgICAgICAgXCIgaXMgZGVwcmVjYXRlZCBhbmQgd2lsbCBiZSByZW1vdmVkIGluIGEgZnV0dXJlIHZlcnNpb24uXCI7XG4gICAgaWYgKHJlcGxhY2VtZW50KSBtZXNzYWdlICs9IFwiIFVzZSBcIiArIHJlcGxhY2VtZW50ICsgXCIgaW5zdGVhZC5cIjtcbiAgICByZXR1cm4gd2FybihtZXNzYWdlKTtcbn1cblxuZnVuY3Rpb24gd2FybihtZXNzYWdlLCBzaG91bGRVc2VPd25UcmFjZSwgcHJvbWlzZSkge1xuICAgIGlmICghY29uZmlnLndhcm5pbmdzKSByZXR1cm47XG4gICAgdmFyIHdhcm5pbmcgPSBuZXcgV2FybmluZyhtZXNzYWdlKTtcbiAgICB2YXIgY3R4O1xuICAgIGlmIChzaG91bGRVc2VPd25UcmFjZSkge1xuICAgICAgICBwcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHdhcm5pbmcpO1xuICAgIH0gZWxzZSBpZiAoY29uZmlnLmxvbmdTdGFja1RyYWNlcyAmJiAoY3R4ID0gUHJvbWlzZS5fcGVla0NvbnRleHQoKSkpIHtcbiAgICAgICAgY3R4LmF0dGFjaEV4dHJhVHJhY2Uod2FybmluZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHBhcnNlZCA9IHBhcnNlU3RhY2tBbmRNZXNzYWdlKHdhcm5pbmcpO1xuICAgICAgICB3YXJuaW5nLnN0YWNrID0gcGFyc2VkLm1lc3NhZ2UgKyBcIlxcblwiICsgcGFyc2VkLnN0YWNrLmpvaW4oXCJcXG5cIik7XG4gICAgfVxuXG4gICAgaWYgKCFhY3RpdmVGaXJlRXZlbnQoXCJ3YXJuaW5nXCIsIHdhcm5pbmcpKSB7XG4gICAgICAgIGZvcm1hdEFuZExvZ0Vycm9yKHdhcm5pbmcsIFwiXCIsIHRydWUpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gcmVjb25zdHJ1Y3RTdGFjayhtZXNzYWdlLCBzdGFja3MpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YWNrcy5sZW5ndGggLSAxOyArK2kpIHtcbiAgICAgICAgc3RhY2tzW2ldLnB1c2goXCJGcm9tIHByZXZpb3VzIGV2ZW50OlwiKTtcbiAgICAgICAgc3RhY2tzW2ldID0gc3RhY2tzW2ldLmpvaW4oXCJcXG5cIik7XG4gICAgfVxuICAgIGlmIChpIDwgc3RhY2tzLmxlbmd0aCkge1xuICAgICAgICBzdGFja3NbaV0gPSBzdGFja3NbaV0uam9pbihcIlxcblwiKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lc3NhZ2UgKyBcIlxcblwiICsgc3RhY2tzLmpvaW4oXCJcXG5cIik7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUR1cGxpY2F0ZU9yRW1wdHlKdW1wcyhzdGFja3MpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YWNrcy5sZW5ndGg7ICsraSkge1xuICAgICAgICBpZiAoc3RhY2tzW2ldLmxlbmd0aCA9PT0gMCB8fFxuICAgICAgICAgICAgKChpICsgMSA8IHN0YWNrcy5sZW5ndGgpICYmIHN0YWNrc1tpXVswXSA9PT0gc3RhY2tzW2krMV1bMF0pKSB7XG4gICAgICAgICAgICBzdGFja3Muc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgaS0tO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVDb21tb25Sb290cyhzdGFja3MpIHtcbiAgICB2YXIgY3VycmVudCA9IHN0YWNrc1swXTtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IHN0YWNrcy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgcHJldiA9IHN0YWNrc1tpXTtcbiAgICAgICAgdmFyIGN1cnJlbnRMYXN0SW5kZXggPSBjdXJyZW50Lmxlbmd0aCAtIDE7XG4gICAgICAgIHZhciBjdXJyZW50TGFzdExpbmUgPSBjdXJyZW50W2N1cnJlbnRMYXN0SW5kZXhdO1xuICAgICAgICB2YXIgY29tbW9uUm9vdE1lZXRQb2ludCA9IC0xO1xuXG4gICAgICAgIGZvciAodmFyIGogPSBwcmV2Lmxlbmd0aCAtIDE7IGogPj0gMDsgLS1qKSB7XG4gICAgICAgICAgICBpZiAocHJldltqXSA9PT0gY3VycmVudExhc3RMaW5lKSB7XG4gICAgICAgICAgICAgICAgY29tbW9uUm9vdE1lZXRQb2ludCA9IGo7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBqID0gY29tbW9uUm9vdE1lZXRQb2ludDsgaiA+PSAwOyAtLWopIHtcbiAgICAgICAgICAgIHZhciBsaW5lID0gcHJldltqXTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50W2N1cnJlbnRMYXN0SW5kZXhdID09PSBsaW5lKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudC5wb3AoKTtcbiAgICAgICAgICAgICAgICBjdXJyZW50TGFzdEluZGV4LS07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGN1cnJlbnQgPSBwcmV2O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY2xlYW5TdGFjayhzdGFjaykge1xuICAgIHZhciByZXQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0YWNrLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBsaW5lID0gc3RhY2tbaV07XG4gICAgICAgIHZhciBpc1RyYWNlTGluZSA9IFwiICAgIChObyBzdGFjayB0cmFjZSlcIiA9PT0gbGluZSB8fFxuICAgICAgICAgICAgc3RhY2tGcmFtZVBhdHRlcm4udGVzdChsaW5lKTtcbiAgICAgICAgdmFyIGlzSW50ZXJuYWxGcmFtZSA9IGlzVHJhY2VMaW5lICYmIHNob3VsZElnbm9yZShsaW5lKTtcbiAgICAgICAgaWYgKGlzVHJhY2VMaW5lICYmICFpc0ludGVybmFsRnJhbWUpIHtcbiAgICAgICAgICAgIGlmIChpbmRlbnRTdGFja0ZyYW1lcyAmJiBsaW5lLmNoYXJBdCgwKSAhPT0gXCIgXCIpIHtcbiAgICAgICAgICAgICAgICBsaW5lID0gXCIgICAgXCIgKyBsaW5lO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0LnB1c2gobGluZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gc3RhY2tGcmFtZXNBc0FycmF5KGVycm9yKSB7XG4gICAgdmFyIHN0YWNrID0gZXJyb3Iuc3RhY2sucmVwbGFjZSgvXFxzKyQvZywgXCJcIikuc3BsaXQoXCJcXG5cIik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdGFjay5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgbGluZSA9IHN0YWNrW2ldO1xuICAgICAgICBpZiAoXCIgICAgKE5vIHN0YWNrIHRyYWNlKVwiID09PSBsaW5lIHx8IHN0YWNrRnJhbWVQYXR0ZXJuLnRlc3QobGluZSkpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChpID4gMCkge1xuICAgICAgICBzdGFjayA9IHN0YWNrLnNsaWNlKGkpO1xuICAgIH1cbiAgICByZXR1cm4gc3RhY2s7XG59XG5cbmZ1bmN0aW9uIHBhcnNlU3RhY2tBbmRNZXNzYWdlKGVycm9yKSB7XG4gICAgdmFyIHN0YWNrID0gZXJyb3Iuc3RhY2s7XG4gICAgdmFyIG1lc3NhZ2UgPSBlcnJvci50b1N0cmluZygpO1xuICAgIHN0YWNrID0gdHlwZW9mIHN0YWNrID09PSBcInN0cmluZ1wiICYmIHN0YWNrLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICA/IHN0YWNrRnJhbWVzQXNBcnJheShlcnJvcikgOiBbXCIgICAgKE5vIHN0YWNrIHRyYWNlKVwiXTtcbiAgICByZXR1cm4ge1xuICAgICAgICBtZXNzYWdlOiBtZXNzYWdlLFxuICAgICAgICBzdGFjazogY2xlYW5TdGFjayhzdGFjaylcbiAgICB9O1xufVxuXG5mdW5jdGlvbiBmb3JtYXRBbmRMb2dFcnJvcihlcnJvciwgdGl0bGUsIGlzU29mdCkge1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB2YXIgbWVzc2FnZTtcbiAgICAgICAgaWYgKHV0aWwuaXNPYmplY3QoZXJyb3IpKSB7XG4gICAgICAgICAgICB2YXIgc3RhY2sgPSBlcnJvci5zdGFjaztcbiAgICAgICAgICAgIG1lc3NhZ2UgPSB0aXRsZSArIGZvcm1hdFN0YWNrKHN0YWNrLCBlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBtZXNzYWdlID0gdGl0bGUgKyBTdHJpbmcoZXJyb3IpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcHJpbnRXYXJuaW5nID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHByaW50V2FybmluZyhtZXNzYWdlLCBpc1NvZnQpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjb25zb2xlLmxvZyA9PT0gXCJmdW5jdGlvblwiIHx8XG4gICAgICAgICAgICB0eXBlb2YgY29uc29sZS5sb2cgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmaXJlUmVqZWN0aW9uRXZlbnQobmFtZSwgbG9jYWxIYW5kbGVyLCByZWFzb24sIHByb21pc2UpIHtcbiAgICB2YXIgbG9jYWxFdmVudEZpcmVkID0gZmFsc2U7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBsb2NhbEhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgbG9jYWxFdmVudEZpcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChuYW1lID09PSBcInJlamVjdGlvbkhhbmRsZWRcIikge1xuICAgICAgICAgICAgICAgIGxvY2FsSGFuZGxlcihwcm9taXNlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbG9jYWxIYW5kbGVyKHJlYXNvbiwgcHJvbWlzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGFzeW5jLnRocm93TGF0ZXIoZSk7XG4gICAgfVxuXG4gICAgaWYgKG5hbWUgPT09IFwidW5oYW5kbGVkUmVqZWN0aW9uXCIpIHtcbiAgICAgICAgaWYgKCFhY3RpdmVGaXJlRXZlbnQobmFtZSwgcmVhc29uLCBwcm9taXNlKSAmJiAhbG9jYWxFdmVudEZpcmVkKSB7XG4gICAgICAgICAgICBmb3JtYXRBbmRMb2dFcnJvcihyZWFzb24sIFwiVW5oYW5kbGVkIHJlamVjdGlvbiBcIik7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICBhY3RpdmVGaXJlRXZlbnQobmFtZSwgcHJvbWlzZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBmb3JtYXROb25FcnJvcihvYmopIHtcbiAgICB2YXIgc3RyO1xuICAgIGlmICh0eXBlb2Ygb2JqID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgc3RyID0gXCJbZnVuY3Rpb24gXCIgK1xuICAgICAgICAgICAgKG9iai5uYW1lIHx8IFwiYW5vbnltb3VzXCIpICtcbiAgICAgICAgICAgIFwiXVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0ciA9IG9iaiAmJiB0eXBlb2Ygb2JqLnRvU3RyaW5nID09PSBcImZ1bmN0aW9uXCJcbiAgICAgICAgICAgID8gb2JqLnRvU3RyaW5nKCkgOiB1dGlsLnRvU3RyaW5nKG9iaik7XG4gICAgICAgIHZhciBydXNlbGVzc1RvU3RyaW5nID0gL1xcW29iamVjdCBbYS16QS1aMC05JF9dK1xcXS87XG4gICAgICAgIGlmIChydXNlbGVzc1RvU3RyaW5nLnRlc3Qoc3RyKSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgbmV3U3RyID0gSlNPTi5zdHJpbmdpZnkob2JqKTtcbiAgICAgICAgICAgICAgICBzdHIgPSBuZXdTdHI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXRjaChlKSB7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RyLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgc3RyID0gXCIoZW1wdHkgYXJyYXkpXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIChcIig8XCIgKyBzbmlwKHN0cikgKyBcIj4sIG5vIHN0YWNrIHRyYWNlKVwiKTtcbn1cblxuZnVuY3Rpb24gc25pcChzdHIpIHtcbiAgICB2YXIgbWF4Q2hhcnMgPSA0MTtcbiAgICBpZiAoc3RyLmxlbmd0aCA8IG1heENoYXJzKSB7XG4gICAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuICAgIHJldHVybiBzdHIuc3Vic3RyKDAsIG1heENoYXJzIC0gMykgKyBcIi4uLlwiO1xufVxuXG5mdW5jdGlvbiBsb25nU3RhY2tUcmFjZXNJc1N1cHBvcnRlZCgpIHtcbiAgICByZXR1cm4gdHlwZW9mIGNhcHR1cmVTdGFja1RyYWNlID09PSBcImZ1bmN0aW9uXCI7XG59XG5cbnZhciBzaG91bGRJZ25vcmUgPSBmdW5jdGlvbigpIHsgcmV0dXJuIGZhbHNlOyB9O1xudmFyIHBhcnNlTGluZUluZm9SZWdleCA9IC9bXFwvPFxcKF0oW146XFwvXSspOihcXGQrKTooPzpcXGQrKVxcKT9cXHMqJC87XG5mdW5jdGlvbiBwYXJzZUxpbmVJbmZvKGxpbmUpIHtcbiAgICB2YXIgbWF0Y2hlcyA9IGxpbmUubWF0Y2gocGFyc2VMaW5lSW5mb1JlZ2V4KTtcbiAgICBpZiAobWF0Y2hlcykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZmlsZU5hbWU6IG1hdGNoZXNbMV0sXG4gICAgICAgICAgICBsaW5lOiBwYXJzZUludChtYXRjaGVzWzJdLCAxMClcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHNldEJvdW5kcyhmaXJzdExpbmVFcnJvciwgbGFzdExpbmVFcnJvcikge1xuICAgIGlmICghbG9uZ1N0YWNrVHJhY2VzSXNTdXBwb3J0ZWQoKSkgcmV0dXJuO1xuICAgIHZhciBmaXJzdFN0YWNrTGluZXMgPSBmaXJzdExpbmVFcnJvci5zdGFjay5zcGxpdChcIlxcblwiKTtcbiAgICB2YXIgbGFzdFN0YWNrTGluZXMgPSBsYXN0TGluZUVycm9yLnN0YWNrLnNwbGl0KFwiXFxuXCIpO1xuICAgIHZhciBmaXJzdEluZGV4ID0gLTE7XG4gICAgdmFyIGxhc3RJbmRleCA9IC0xO1xuICAgIHZhciBmaXJzdEZpbGVOYW1lO1xuICAgIHZhciBsYXN0RmlsZU5hbWU7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmaXJzdFN0YWNrTGluZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHBhcnNlTGluZUluZm8oZmlyc3RTdGFja0xpbmVzW2ldKTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgZmlyc3RGaWxlTmFtZSA9IHJlc3VsdC5maWxlTmFtZTtcbiAgICAgICAgICAgIGZpcnN0SW5kZXggPSByZXN1bHQubGluZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdFN0YWNrTGluZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHBhcnNlTGluZUluZm8obGFzdFN0YWNrTGluZXNbaV0pO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICBsYXN0RmlsZU5hbWUgPSByZXN1bHQuZmlsZU5hbWU7XG4gICAgICAgICAgICBsYXN0SW5kZXggPSByZXN1bHQubGluZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChmaXJzdEluZGV4IDwgMCB8fCBsYXN0SW5kZXggPCAwIHx8ICFmaXJzdEZpbGVOYW1lIHx8ICFsYXN0RmlsZU5hbWUgfHxcbiAgICAgICAgZmlyc3RGaWxlTmFtZSAhPT0gbGFzdEZpbGVOYW1lIHx8IGZpcnN0SW5kZXggPj0gbGFzdEluZGV4KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzaG91bGRJZ25vcmUgPSBmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgIGlmIChibHVlYmlyZEZyYW1lUGF0dGVybi50ZXN0KGxpbmUpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgdmFyIGluZm8gPSBwYXJzZUxpbmVJbmZvKGxpbmUpO1xuICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgICAgaWYgKGluZm8uZmlsZU5hbWUgPT09IGZpcnN0RmlsZU5hbWUgJiZcbiAgICAgICAgICAgICAgICAoZmlyc3RJbmRleCA8PSBpbmZvLmxpbmUgJiYgaW5mby5saW5lIDw9IGxhc3RJbmRleCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbn1cblxuZnVuY3Rpb24gQ2FwdHVyZWRUcmFjZShwYXJlbnQpIHtcbiAgICB0aGlzLl9wYXJlbnQgPSBwYXJlbnQ7XG4gICAgdGhpcy5fcHJvbWlzZXNDcmVhdGVkID0gMDtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5fbGVuZ3RoID0gMSArIChwYXJlbnQgPT09IHVuZGVmaW5lZCA/IDAgOiBwYXJlbnQuX2xlbmd0aCk7XG4gICAgY2FwdHVyZVN0YWNrVHJhY2UodGhpcywgQ2FwdHVyZWRUcmFjZSk7XG4gICAgaWYgKGxlbmd0aCA+IDMyKSB0aGlzLnVuY3ljbGUoKTtcbn1cbnV0aWwuaW5oZXJpdHMoQ2FwdHVyZWRUcmFjZSwgRXJyb3IpO1xuQ29udGV4dC5DYXB0dXJlZFRyYWNlID0gQ2FwdHVyZWRUcmFjZTtcblxuQ2FwdHVyZWRUcmFjZS5wcm90b3R5cGUudW5jeWNsZSA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsZW5ndGggPSB0aGlzLl9sZW5ndGg7XG4gICAgaWYgKGxlbmd0aCA8IDIpIHJldHVybjtcbiAgICB2YXIgbm9kZXMgPSBbXTtcbiAgICB2YXIgc3RhY2tUb0luZGV4ID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMCwgbm9kZSA9IHRoaXM7IG5vZGUgIT09IHVuZGVmaW5lZDsgKytpKSB7XG4gICAgICAgIG5vZGVzLnB1c2gobm9kZSk7XG4gICAgICAgIG5vZGUgPSBub2RlLl9wYXJlbnQ7XG4gICAgfVxuICAgIGxlbmd0aCA9IHRoaXMuX2xlbmd0aCA9IGk7XG4gICAgZm9yICh2YXIgaSA9IGxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBzdGFjayA9IG5vZGVzW2ldLnN0YWNrO1xuICAgICAgICBpZiAoc3RhY2tUb0luZGV4W3N0YWNrXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdGFja1RvSW5kZXhbc3RhY2tdID0gaTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBjdXJyZW50U3RhY2sgPSBub2Rlc1tpXS5zdGFjaztcbiAgICAgICAgdmFyIGluZGV4ID0gc3RhY2tUb0luZGV4W2N1cnJlbnRTdGFja107XG4gICAgICAgIGlmIChpbmRleCAhPT0gdW5kZWZpbmVkICYmIGluZGV4ICE9PSBpKSB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XG4gICAgICAgICAgICAgICAgbm9kZXNbaW5kZXggLSAxXS5fcGFyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIG5vZGVzW2luZGV4IC0gMV0uX2xlbmd0aCA9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2Rlc1tpXS5fcGFyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgbm9kZXNbaV0uX2xlbmd0aCA9IDE7XG4gICAgICAgICAgICB2YXIgY3ljbGVFZGdlTm9kZSA9IGkgPiAwID8gbm9kZXNbaSAtIDFdIDogdGhpcztcblxuICAgICAgICAgICAgaWYgKGluZGV4IDwgbGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgIGN5Y2xlRWRnZU5vZGUuX3BhcmVudCA9IG5vZGVzW2luZGV4ICsgMV07XG4gICAgICAgICAgICAgICAgY3ljbGVFZGdlTm9kZS5fcGFyZW50LnVuY3ljbGUoKTtcbiAgICAgICAgICAgICAgICBjeWNsZUVkZ2VOb2RlLl9sZW5ndGggPVxuICAgICAgICAgICAgICAgICAgICBjeWNsZUVkZ2VOb2RlLl9wYXJlbnQuX2xlbmd0aCArIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN5Y2xlRWRnZU5vZGUuX3BhcmVudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBjeWNsZUVkZ2VOb2RlLl9sZW5ndGggPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGN1cnJlbnRDaGlsZExlbmd0aCA9IGN5Y2xlRWRnZU5vZGUuX2xlbmd0aCArIDE7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gaSAtIDI7IGogPj0gMDsgLS1qKSB7XG4gICAgICAgICAgICAgICAgbm9kZXNbal0uX2xlbmd0aCA9IGN1cnJlbnRDaGlsZExlbmd0aDtcbiAgICAgICAgICAgICAgICBjdXJyZW50Q2hpbGRMZW5ndGgrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cbkNhcHR1cmVkVHJhY2UucHJvdG90eXBlLmF0dGFjaEV4dHJhVHJhY2UgPSBmdW5jdGlvbihlcnJvcikge1xuICAgIGlmIChlcnJvci5fX3N0YWNrQ2xlYW5lZF9fKSByZXR1cm47XG4gICAgdGhpcy51bmN5Y2xlKCk7XG4gICAgdmFyIHBhcnNlZCA9IHBhcnNlU3RhY2tBbmRNZXNzYWdlKGVycm9yKTtcbiAgICB2YXIgbWVzc2FnZSA9IHBhcnNlZC5tZXNzYWdlO1xuICAgIHZhciBzdGFja3MgPSBbcGFyc2VkLnN0YWNrXTtcblxuICAgIHZhciB0cmFjZSA9IHRoaXM7XG4gICAgd2hpbGUgKHRyYWNlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3RhY2tzLnB1c2goY2xlYW5TdGFjayh0cmFjZS5zdGFjay5zcGxpdChcIlxcblwiKSkpO1xuICAgICAgICB0cmFjZSA9IHRyYWNlLl9wYXJlbnQ7XG4gICAgfVxuICAgIHJlbW92ZUNvbW1vblJvb3RzKHN0YWNrcyk7XG4gICAgcmVtb3ZlRHVwbGljYXRlT3JFbXB0eUp1bXBzKHN0YWNrcyk7XG4gICAgdXRpbC5ub3RFbnVtZXJhYmxlUHJvcChlcnJvciwgXCJzdGFja1wiLCByZWNvbnN0cnVjdFN0YWNrKG1lc3NhZ2UsIHN0YWNrcykpO1xuICAgIHV0aWwubm90RW51bWVyYWJsZVByb3AoZXJyb3IsIFwiX19zdGFja0NsZWFuZWRfX1wiLCB0cnVlKTtcbn07XG5cbnZhciBjYXB0dXJlU3RhY2tUcmFjZSA9IChmdW5jdGlvbiBzdGFja0RldGVjdGlvbigpIHtcbiAgICB2YXIgdjhzdGFja0ZyYW1lUGF0dGVybiA9IC9eXFxzKmF0XFxzKi87XG4gICAgdmFyIHY4c3RhY2tGb3JtYXR0ZXIgPSBmdW5jdGlvbihzdGFjaywgZXJyb3IpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdGFjayA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHN0YWNrO1xuXG4gICAgICAgIGlmIChlcnJvci5uYW1lICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIGVycm9yLm1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yLnRvU3RyaW5nKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZvcm1hdE5vbkVycm9yKGVycm9yKTtcbiAgICB9O1xuXG4gICAgaWYgKHR5cGVvZiBFcnJvci5zdGFja1RyYWNlTGltaXQgPT09IFwibnVtYmVyXCIgJiZcbiAgICAgICAgdHlwZW9mIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ICs9IDY7XG4gICAgICAgIHN0YWNrRnJhbWVQYXR0ZXJuID0gdjhzdGFja0ZyYW1lUGF0dGVybjtcbiAgICAgICAgZm9ybWF0U3RhY2sgPSB2OHN0YWNrRm9ybWF0dGVyO1xuICAgICAgICB2YXIgY2FwdHVyZVN0YWNrVHJhY2UgPSBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZTtcblxuICAgICAgICBzaG91bGRJZ25vcmUgPSBmdW5jdGlvbihsaW5lKSB7XG4gICAgICAgICAgICByZXR1cm4gYmx1ZWJpcmRGcmFtZVBhdHRlcm4udGVzdChsaW5lKTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHJlY2VpdmVyLCBpZ25vcmVVbnRpbCkge1xuICAgICAgICAgICAgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ICs9IDY7XG4gICAgICAgICAgICBjYXB0dXJlU3RhY2tUcmFjZShyZWNlaXZlciwgaWdub3JlVW50aWwpO1xuICAgICAgICAgICAgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0IC09IDY7XG4gICAgICAgIH07XG4gICAgfVxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoKTtcblxuICAgIGlmICh0eXBlb2YgZXJyLnN0YWNrID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgIGVyci5zdGFjay5zcGxpdChcIlxcblwiKVswXS5pbmRleE9mKFwic3RhY2tEZXRlY3Rpb25AXCIpID49IDApIHtcbiAgICAgICAgc3RhY2tGcmFtZVBhdHRlcm4gPSAvQC87XG4gICAgICAgIGZvcm1hdFN0YWNrID0gdjhzdGFja0Zvcm1hdHRlcjtcbiAgICAgICAgaW5kZW50U3RhY2tGcmFtZXMgPSB0cnVlO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY2FwdHVyZVN0YWNrVHJhY2Uobykge1xuICAgICAgICAgICAgby5zdGFjayA9IG5ldyBFcnJvcigpLnN0YWNrO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHZhciBoYXNTdGFja0FmdGVyVGhyb3c7XG4gICAgdHJ5IHsgdGhyb3cgbmV3IEVycm9yKCk7IH1cbiAgICBjYXRjaChlKSB7XG4gICAgICAgIGhhc1N0YWNrQWZ0ZXJUaHJvdyA9IChcInN0YWNrXCIgaW4gZSk7XG4gICAgfVxuICAgIGlmICghKFwic3RhY2tcIiBpbiBlcnIpICYmIGhhc1N0YWNrQWZ0ZXJUaHJvdyAmJlxuICAgICAgICB0eXBlb2YgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHN0YWNrRnJhbWVQYXR0ZXJuID0gdjhzdGFja0ZyYW1lUGF0dGVybjtcbiAgICAgICAgZm9ybWF0U3RhY2sgPSB2OHN0YWNrRm9ybWF0dGVyO1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gY2FwdHVyZVN0YWNrVHJhY2Uobykge1xuICAgICAgICAgICAgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0ICs9IDY7XG4gICAgICAgICAgICB0cnkgeyB0aHJvdyBuZXcgRXJyb3IoKTsgfVxuICAgICAgICAgICAgY2F0Y2goZSkgeyBvLnN0YWNrID0gZS5zdGFjazsgfVxuICAgICAgICAgICAgRXJyb3Iuc3RhY2tUcmFjZUxpbWl0IC09IDY7XG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZm9ybWF0U3RhY2sgPSBmdW5jdGlvbihzdGFjaywgZXJyb3IpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBzdGFjayA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIHN0YWNrO1xuXG4gICAgICAgIGlmICgodHlwZW9mIGVycm9yID09PSBcIm9iamVjdFwiIHx8XG4gICAgICAgICAgICB0eXBlb2YgZXJyb3IgPT09IFwiZnVuY3Rpb25cIikgJiZcbiAgICAgICAgICAgIGVycm9yLm5hbWUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgZXJyb3IubWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gZXJyb3IudG9TdHJpbmcoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9ybWF0Tm9uRXJyb3IoZXJyb3IpO1xuICAgIH07XG5cbiAgICByZXR1cm4gbnVsbDtcblxufSkoW10pO1xuXG5pZiAodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgdHlwZW9mIGNvbnNvbGUud2FybiAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHByaW50V2FybmluZyA9IGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihtZXNzYWdlKTtcbiAgICB9O1xuICAgIGlmICh1dGlsLmlzTm9kZSAmJiBwcm9jZXNzLnN0ZGVyci5pc1RUWSkge1xuICAgICAgICBwcmludFdhcm5pbmcgPSBmdW5jdGlvbihtZXNzYWdlLCBpc1NvZnQpIHtcbiAgICAgICAgICAgIHZhciBjb2xvciA9IGlzU29mdCA/IFwiXFx1MDAxYlszM21cIiA6IFwiXFx1MDAxYlszMW1cIjtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybihjb2xvciArIG1lc3NhZ2UgKyBcIlxcdTAwMWJbMG1cXG5cIik7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICghdXRpbC5pc05vZGUgJiYgdHlwZW9mIChuZXcgRXJyb3IoKS5zdGFjaykgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcHJpbnRXYXJuaW5nID0gZnVuY3Rpb24obWVzc2FnZSwgaXNTb2Z0KSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCIlY1wiICsgbWVzc2FnZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzU29mdCA/IFwiY29sb3I6IGRhcmtvcmFuZ2VcIiA6IFwiY29sb3I6IHJlZFwiKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5cbnZhciBjb25maWcgPSB7XG4gICAgd2FybmluZ3M6IHdhcm5pbmdzLFxuICAgIGxvbmdTdGFja1RyYWNlczogZmFsc2UsXG4gICAgY2FuY2VsbGF0aW9uOiBmYWxzZSxcbiAgICBtb25pdG9yaW5nOiBmYWxzZVxufTtcblxuaWYgKGxvbmdTdGFja1RyYWNlcykgUHJvbWlzZS5sb25nU3RhY2tUcmFjZXMoKTtcblxucmV0dXJuIHtcbiAgICBsb25nU3RhY2tUcmFjZXM6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gY29uZmlnLmxvbmdTdGFja1RyYWNlcztcbiAgICB9LFxuICAgIHdhcm5pbmdzOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIGNvbmZpZy53YXJuaW5ncztcbiAgICB9LFxuICAgIGNhbmNlbGxhdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjb25maWcuY2FuY2VsbGF0aW9uO1xuICAgIH0sXG4gICAgbW9uaXRvcmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBjb25maWcubW9uaXRvcmluZztcbiAgICB9LFxuICAgIHByb3BhZ2F0ZUZyb21GdW5jdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBwcm9wYWdhdGVGcm9tRnVuY3Rpb247XG4gICAgfSxcbiAgICBib3VuZFZhbHVlRnVuY3Rpb246IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gYm91bmRWYWx1ZUZ1bmN0aW9uO1xuICAgIH0sXG4gICAgY2hlY2tGb3Jnb3R0ZW5SZXR1cm5zOiBjaGVja0ZvcmdvdHRlblJldHVybnMsXG4gICAgc2V0Qm91bmRzOiBzZXRCb3VuZHMsXG4gICAgd2Fybjogd2FybixcbiAgICBkZXByZWNhdGVkOiBkZXByZWNhdGVkLFxuICAgIENhcHR1cmVkVHJhY2U6IENhcHR1cmVkVHJhY2UsXG4gICAgZmlyZURvbUV2ZW50OiBmaXJlRG9tRXZlbnQsXG4gICAgZmlyZUdsb2JhbEV2ZW50OiBmaXJlR2xvYmFsRXZlbnRcbn07XG59O1xuXG59LHtcIi4vZXJyb3JzXCI6MTIsXCIuL3V0aWxcIjozNn1dLDEwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlKSB7XG5mdW5jdGlvbiByZXR1cm5lcigpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbn1cbmZ1bmN0aW9uIHRocm93ZXIoKSB7XG4gICAgdGhyb3cgdGhpcy5yZWFzb247XG59XG5cblByb21pc2UucHJvdG90eXBlW1wicmV0dXJuXCJdID1cblByb21pc2UucHJvdG90eXBlLnRoZW5SZXR1cm4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB2YWx1ZS5zdXBwcmVzc1VuaGFuZGxlZFJlamVjdGlvbnMoKTtcbiAgICByZXR1cm4gdGhpcy5fdGhlbihcbiAgICAgICAgcmV0dXJuZXIsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB7dmFsdWU6IHZhbHVlfSwgdW5kZWZpbmVkKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlW1widGhyb3dcIl0gPVxuUHJvbWlzZS5wcm90b3R5cGUudGhlblRocm93ID0gZnVuY3Rpb24gKHJlYXNvbikge1xuICAgIHJldHVybiB0aGlzLl90aGVuKFxuICAgICAgICB0aHJvd2VyLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwge3JlYXNvbjogcmVhc29ufSwgdW5kZWZpbmVkKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmNhdGNoVGhyb3cgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPD0gMSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGhlbihcbiAgICAgICAgICAgIHVuZGVmaW5lZCwgdGhyb3dlciwgdW5kZWZpbmVkLCB7cmVhc29uOiByZWFzb259LCB1bmRlZmluZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBfcmVhc29uID0gYXJndW1lbnRzWzFdO1xuICAgICAgICB2YXIgaGFuZGxlciA9IGZ1bmN0aW9uKCkge3Rocm93IF9yZWFzb247fTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2F1Z2h0KHJlYXNvbiwgaGFuZGxlcik7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2hSZXR1cm4gPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA8PSAxKSB7XG4gICAgICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHZhbHVlLnN1cHByZXNzVW5oYW5kbGVkUmVqZWN0aW9ucygpO1xuICAgICAgICByZXR1cm4gdGhpcy5fdGhlbihcbiAgICAgICAgICAgIHVuZGVmaW5lZCwgcmV0dXJuZXIsIHVuZGVmaW5lZCwge3ZhbHVlOiB2YWx1ZX0sIHVuZGVmaW5lZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIF92YWx1ZSA9IGFyZ3VtZW50c1sxXTtcbiAgICAgICAgaWYgKF92YWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIF92YWx1ZS5zdXBwcmVzc1VuaGFuZGxlZFJlamVjdGlvbnMoKTtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSBmdW5jdGlvbigpIHtyZXR1cm4gX3ZhbHVlO307XG4gICAgICAgIHJldHVybiB0aGlzLmNhdWdodCh2YWx1ZSwgaGFuZGxlcik7XG4gICAgfVxufTtcbn07XG5cbn0se31dLDExOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCkge1xudmFyIFByb21pc2VSZWR1Y2UgPSBQcm9taXNlLnJlZHVjZTtcbnZhciBQcm9taXNlQWxsID0gUHJvbWlzZS5hbGw7XG5cbmZ1bmN0aW9uIHByb21pc2VBbGxUaGlzKCkge1xuICAgIHJldHVybiBQcm9taXNlQWxsKHRoaXMpO1xufVxuXG5mdW5jdGlvbiBQcm9taXNlTWFwU2VyaWVzKHByb21pc2VzLCBmbikge1xuICAgIHJldHVybiBQcm9taXNlUmVkdWNlKHByb21pc2VzLCBmbiwgSU5URVJOQUwsIElOVEVSTkFMKTtcbn1cblxuUHJvbWlzZS5wcm90b3R5cGUuZWFjaCA9IGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiB0aGlzLm1hcFNlcmllcyhmbilcbiAgICAgICAgICAgIC5fdGhlbihwcm9taXNlQWxsVGhpcywgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMsIHVuZGVmaW5lZCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5tYXBTZXJpZXMgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICByZXR1cm4gUHJvbWlzZVJlZHVjZSh0aGlzLCBmbiwgSU5URVJOQUwsIElOVEVSTkFMKTtcbn07XG5cblByb21pc2UuZWFjaCA9IGZ1bmN0aW9uIChwcm9taXNlcywgZm4pIHtcbiAgICByZXR1cm4gUHJvbWlzZU1hcFNlcmllcyhwcm9taXNlcywgZm4pXG4gICAgICAgICAgICAuX3RoZW4ocHJvbWlzZUFsbFRoaXMsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBwcm9taXNlcywgdW5kZWZpbmVkKTtcbn07XG5cblByb21pc2UubWFwU2VyaWVzID0gUHJvbWlzZU1hcFNlcmllcztcbn07XG5cbn0se31dLDEyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIGVzNSA9IF9kZXJlcV8oXCIuL2VzNVwiKTtcbnZhciBPYmplY3RmcmVlemUgPSBlczUuZnJlZXplO1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsXCIpO1xudmFyIGluaGVyaXRzID0gdXRpbC5pbmhlcml0cztcbnZhciBub3RFbnVtZXJhYmxlUHJvcCA9IHV0aWwubm90RW51bWVyYWJsZVByb3A7XG5cbmZ1bmN0aW9uIHN1YkVycm9yKG5hbWVQcm9wZXJ0eSwgZGVmYXVsdE1lc3NhZ2UpIHtcbiAgICBmdW5jdGlvbiBTdWJFcnJvcihtZXNzYWdlKSB7XG4gICAgICAgIGlmICghKHRoaXMgaW5zdGFuY2VvZiBTdWJFcnJvcikpIHJldHVybiBuZXcgU3ViRXJyb3IobWVzc2FnZSk7XG4gICAgICAgIG5vdEVudW1lcmFibGVQcm9wKHRoaXMsIFwibWVzc2FnZVwiLFxuICAgICAgICAgICAgdHlwZW9mIG1lc3NhZ2UgPT09IFwic3RyaW5nXCIgPyBtZXNzYWdlIDogZGVmYXVsdE1lc3NhZ2UpO1xuICAgICAgICBub3RFbnVtZXJhYmxlUHJvcCh0aGlzLCBcIm5hbWVcIiwgbmFtZVByb3BlcnR5KTtcbiAgICAgICAgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICAgICAgICBFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSh0aGlzLCB0aGlzLmNvbnN0cnVjdG9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIEVycm9yLmNhbGwodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5oZXJpdHMoU3ViRXJyb3IsIEVycm9yKTtcbiAgICByZXR1cm4gU3ViRXJyb3I7XG59XG5cbnZhciBfVHlwZUVycm9yLCBfUmFuZ2VFcnJvcjtcbnZhciBXYXJuaW5nID0gc3ViRXJyb3IoXCJXYXJuaW5nXCIsIFwid2FybmluZ1wiKTtcbnZhciBDYW5jZWxsYXRpb25FcnJvciA9IHN1YkVycm9yKFwiQ2FuY2VsbGF0aW9uRXJyb3JcIiwgXCJjYW5jZWxsYXRpb24gZXJyb3JcIik7XG52YXIgVGltZW91dEVycm9yID0gc3ViRXJyb3IoXCJUaW1lb3V0RXJyb3JcIiwgXCJ0aW1lb3V0IGVycm9yXCIpO1xudmFyIEFnZ3JlZ2F0ZUVycm9yID0gc3ViRXJyb3IoXCJBZ2dyZWdhdGVFcnJvclwiLCBcImFnZ3JlZ2F0ZSBlcnJvclwiKTtcbnRyeSB7XG4gICAgX1R5cGVFcnJvciA9IFR5cGVFcnJvcjtcbiAgICBfUmFuZ2VFcnJvciA9IFJhbmdlRXJyb3I7XG59IGNhdGNoKGUpIHtcbiAgICBfVHlwZUVycm9yID0gc3ViRXJyb3IoXCJUeXBlRXJyb3JcIiwgXCJ0eXBlIGVycm9yXCIpO1xuICAgIF9SYW5nZUVycm9yID0gc3ViRXJyb3IoXCJSYW5nZUVycm9yXCIsIFwicmFuZ2UgZXJyb3JcIik7XG59XG5cbnZhciBtZXRob2RzID0gKFwiam9pbiBwb3AgcHVzaCBzaGlmdCB1bnNoaWZ0IHNsaWNlIGZpbHRlciBmb3JFYWNoIHNvbWUgXCIgK1xuICAgIFwiZXZlcnkgbWFwIGluZGV4T2YgbGFzdEluZGV4T2YgcmVkdWNlIHJlZHVjZVJpZ2h0IHNvcnQgcmV2ZXJzZVwiKS5zcGxpdChcIiBcIik7XG5cbmZvciAodmFyIGkgPSAwOyBpIDwgbWV0aG9kcy5sZW5ndGg7ICsraSkge1xuICAgIGlmICh0eXBlb2YgQXJyYXkucHJvdG90eXBlW21ldGhvZHNbaV1dID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgQWdncmVnYXRlRXJyb3IucHJvdG90eXBlW21ldGhvZHNbaV1dID0gQXJyYXkucHJvdG90eXBlW21ldGhvZHNbaV1dO1xuICAgIH1cbn1cblxuZXM1LmRlZmluZVByb3BlcnR5KEFnZ3JlZ2F0ZUVycm9yLnByb3RvdHlwZSwgXCJsZW5ndGhcIiwge1xuICAgIHZhbHVlOiAwLFxuICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogdHJ1ZVxufSk7XG5BZ2dyZWdhdGVFcnJvci5wcm90b3R5cGVbXCJpc09wZXJhdGlvbmFsXCJdID0gdHJ1ZTtcbnZhciBsZXZlbCA9IDA7XG5BZ2dyZWdhdGVFcnJvci5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaW5kZW50ID0gQXJyYXkobGV2ZWwgKiA0ICsgMSkuam9pbihcIiBcIik7XG4gICAgdmFyIHJldCA9IFwiXFxuXCIgKyBpbmRlbnQgKyBcIkFnZ3JlZ2F0ZUVycm9yIG9mOlwiICsgXCJcXG5cIjtcbiAgICBsZXZlbCsrO1xuICAgIGluZGVudCA9IEFycmF5KGxldmVsICogNCArIDEpLmpvaW4oXCIgXCIpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgc3RyID0gdGhpc1tpXSA9PT0gdGhpcyA/IFwiW0NpcmN1bGFyIEFnZ3JlZ2F0ZUVycm9yXVwiIDogdGhpc1tpXSArIFwiXCI7XG4gICAgICAgIHZhciBsaW5lcyA9IHN0ci5zcGxpdChcIlxcblwiKTtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBsaW5lcy5sZW5ndGg7ICsraikge1xuICAgICAgICAgICAgbGluZXNbal0gPSBpbmRlbnQgKyBsaW5lc1tqXTtcbiAgICAgICAgfVxuICAgICAgICBzdHIgPSBsaW5lcy5qb2luKFwiXFxuXCIpO1xuICAgICAgICByZXQgKz0gc3RyICsgXCJcXG5cIjtcbiAgICB9XG4gICAgbGV2ZWwtLTtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZnVuY3Rpb24gT3BlcmF0aW9uYWxFcnJvcihtZXNzYWdlKSB7XG4gICAgaWYgKCEodGhpcyBpbnN0YW5jZW9mIE9wZXJhdGlvbmFsRXJyb3IpKVxuICAgICAgICByZXR1cm4gbmV3IE9wZXJhdGlvbmFsRXJyb3IobWVzc2FnZSk7XG4gICAgbm90RW51bWVyYWJsZVByb3AodGhpcywgXCJuYW1lXCIsIFwiT3BlcmF0aW9uYWxFcnJvclwiKTtcbiAgICBub3RFbnVtZXJhYmxlUHJvcCh0aGlzLCBcIm1lc3NhZ2VcIiwgbWVzc2FnZSk7XG4gICAgdGhpcy5jYXVzZSA9IG1lc3NhZ2U7XG4gICAgdGhpc1tcImlzT3BlcmF0aW9uYWxcIl0gPSB0cnVlO1xuXG4gICAgaWYgKG1lc3NhZ2UgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICBub3RFbnVtZXJhYmxlUHJvcCh0aGlzLCBcIm1lc3NhZ2VcIiwgbWVzc2FnZS5tZXNzYWdlKTtcbiAgICAgICAgbm90RW51bWVyYWJsZVByb3AodGhpcywgXCJzdGFja1wiLCBtZXNzYWdlLnN0YWNrKTtcbiAgICB9IGVsc2UgaWYgKEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKSB7XG4gICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKHRoaXMsIHRoaXMuY29uc3RydWN0b3IpO1xuICAgIH1cblxufVxuaW5oZXJpdHMoT3BlcmF0aW9uYWxFcnJvciwgRXJyb3IpO1xuXG52YXIgZXJyb3JUeXBlcyA9IEVycm9yW1wiX19CbHVlYmlyZEVycm9yVHlwZXNfX1wiXTtcbmlmICghZXJyb3JUeXBlcykge1xuICAgIGVycm9yVHlwZXMgPSBPYmplY3RmcmVlemUoe1xuICAgICAgICBDYW5jZWxsYXRpb25FcnJvcjogQ2FuY2VsbGF0aW9uRXJyb3IsXG4gICAgICAgIFRpbWVvdXRFcnJvcjogVGltZW91dEVycm9yLFxuICAgICAgICBPcGVyYXRpb25hbEVycm9yOiBPcGVyYXRpb25hbEVycm9yLFxuICAgICAgICBSZWplY3Rpb25FcnJvcjogT3BlcmF0aW9uYWxFcnJvcixcbiAgICAgICAgQWdncmVnYXRlRXJyb3I6IEFnZ3JlZ2F0ZUVycm9yXG4gICAgfSk7XG4gICAgZXM1LmRlZmluZVByb3BlcnR5KEVycm9yLCBcIl9fQmx1ZWJpcmRFcnJvclR5cGVzX19cIiwge1xuICAgICAgICB2YWx1ZTogZXJyb3JUeXBlcyxcbiAgICAgICAgd3JpdGFibGU6IGZhbHNlLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZVxuICAgIH0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBFcnJvcjogRXJyb3IsXG4gICAgVHlwZUVycm9yOiBfVHlwZUVycm9yLFxuICAgIFJhbmdlRXJyb3I6IF9SYW5nZUVycm9yLFxuICAgIENhbmNlbGxhdGlvbkVycm9yOiBlcnJvclR5cGVzLkNhbmNlbGxhdGlvbkVycm9yLFxuICAgIE9wZXJhdGlvbmFsRXJyb3I6IGVycm9yVHlwZXMuT3BlcmF0aW9uYWxFcnJvcixcbiAgICBUaW1lb3V0RXJyb3I6IGVycm9yVHlwZXMuVGltZW91dEVycm9yLFxuICAgIEFnZ3JlZ2F0ZUVycm9yOiBlcnJvclR5cGVzLkFnZ3JlZ2F0ZUVycm9yLFxuICAgIFdhcm5pbmc6IFdhcm5pbmdcbn07XG5cbn0se1wiLi9lczVcIjoxMyxcIi4vdXRpbFwiOjM2fV0sMTM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xudmFyIGlzRVM1ID0gKGZ1bmN0aW9uKCl7XG4gICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgcmV0dXJuIHRoaXMgPT09IHVuZGVmaW5lZDtcbn0pKCk7XG5cbmlmIChpc0VTNSkge1xuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICBmcmVlemU6IE9iamVjdC5mcmVlemUsXG4gICAgICAgIGRlZmluZVByb3BlcnR5OiBPYmplY3QuZGVmaW5lUHJvcGVydHksXG4gICAgICAgIGdldERlc2NyaXB0b3I6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gICAgICAgIGtleXM6IE9iamVjdC5rZXlzLFxuICAgICAgICBuYW1lczogT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsXG4gICAgICAgIGdldFByb3RvdHlwZU9mOiBPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gICAgICAgIGlzQXJyYXk6IEFycmF5LmlzQXJyYXksXG4gICAgICAgIGlzRVM1OiBpc0VTNSxcbiAgICAgICAgcHJvcGVydHlJc1dyaXRhYmxlOiBmdW5jdGlvbihvYmosIHByb3ApIHtcbiAgICAgICAgICAgIHZhciBkZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIHByb3ApO1xuICAgICAgICAgICAgcmV0dXJuICEhKCFkZXNjcmlwdG9yIHx8IGRlc2NyaXB0b3Iud3JpdGFibGUgfHwgZGVzY3JpcHRvci5zZXQpO1xuICAgICAgICB9XG4gICAgfTtcbn0gZWxzZSB7XG4gICAgdmFyIGhhcyA9IHt9Lmhhc093blByb3BlcnR5O1xuICAgIHZhciBzdHIgPSB7fS50b1N0cmluZztcbiAgICB2YXIgcHJvdG8gPSB7fS5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG5cbiAgICB2YXIgT2JqZWN0S2V5cyA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICAgIHZhciByZXQgPSBbXTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIG8pIHtcbiAgICAgICAgICAgIGlmIChoYXMuY2FsbChvLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgcmV0LnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG5cbiAgICB2YXIgT2JqZWN0R2V0RGVzY3JpcHRvciA9IGZ1bmN0aW9uKG8sIGtleSkge1xuICAgICAgICByZXR1cm4ge3ZhbHVlOiBvW2tleV19O1xuICAgIH07XG5cbiAgICB2YXIgT2JqZWN0RGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiAobywga2V5LCBkZXNjKSB7XG4gICAgICAgIG9ba2V5XSA9IGRlc2MudmFsdWU7XG4gICAgICAgIHJldHVybiBvO1xuICAgIH07XG5cbiAgICB2YXIgT2JqZWN0RnJlZXplID0gZnVuY3Rpb24gKG9iaikge1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH07XG5cbiAgICB2YXIgT2JqZWN0R2V0UHJvdG90eXBlT2YgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0KG9iaikuY29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvdG87XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIEFycmF5SXNBcnJheSA9IGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJldHVybiBzdHIuY2FsbChvYmopID09PSBcIltvYmplY3QgQXJyYXldXCI7XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICAgICBpc0FycmF5OiBBcnJheUlzQXJyYXksXG4gICAgICAgIGtleXM6IE9iamVjdEtleXMsXG4gICAgICAgIG5hbWVzOiBPYmplY3RLZXlzLFxuICAgICAgICBkZWZpbmVQcm9wZXJ0eTogT2JqZWN0RGVmaW5lUHJvcGVydHksXG4gICAgICAgIGdldERlc2NyaXB0b3I6IE9iamVjdEdldERlc2NyaXB0b3IsXG4gICAgICAgIGZyZWV6ZTogT2JqZWN0RnJlZXplLFxuICAgICAgICBnZXRQcm90b3R5cGVPZjogT2JqZWN0R2V0UHJvdG90eXBlT2YsXG4gICAgICAgIGlzRVM1OiBpc0VTNSxcbiAgICAgICAgcHJvcGVydHlJc1dyaXRhYmxlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxufSx7fV0sMTQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIElOVEVSTkFMKSB7XG52YXIgUHJvbWlzZU1hcCA9IFByb21pc2UubWFwO1xuXG5Qcm9taXNlLnByb3RvdHlwZS5maWx0ZXIgPSBmdW5jdGlvbiAoZm4sIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gUHJvbWlzZU1hcCh0aGlzLCBmbiwgb3B0aW9ucywgSU5URVJOQUwpO1xufTtcblxuUHJvbWlzZS5maWx0ZXIgPSBmdW5jdGlvbiAocHJvbWlzZXMsIGZuLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIFByb21pc2VNYXAocHJvbWlzZXMsIGZuLCBvcHRpb25zLCBJTlRFUk5BTCk7XG59O1xufTtcblxufSx7fV0sMTU6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIHRyeUNvbnZlcnRUb1Byb21pc2UpIHtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbFwiKTtcbnZhciBDYW5jZWxsYXRpb25FcnJvciA9IFByb21pc2UuQ2FuY2VsbGF0aW9uRXJyb3I7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xuXG5mdW5jdGlvbiBQYXNzVGhyb3VnaEhhbmRsZXJDb250ZXh0KHByb21pc2UsIHR5cGUsIGhhbmRsZXIpIHtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgICB0aGlzLmNhbGxlZCA9IGZhbHNlO1xuICAgIHRoaXMuY2FuY2VsUHJvbWlzZSA9IG51bGw7XG59XG5cblBhc3NUaHJvdWdoSGFuZGxlckNvbnRleHQucHJvdG90eXBlLmlzRmluYWxseUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy50eXBlID09PSAwO1xufTtcblxuZnVuY3Rpb24gRmluYWxseUhhbmRsZXJDYW5jZWxSZWFjdGlvbihmaW5hbGx5SGFuZGxlcikge1xuICAgIHRoaXMuZmluYWxseUhhbmRsZXIgPSBmaW5hbGx5SGFuZGxlcjtcbn1cblxuRmluYWxseUhhbmRsZXJDYW5jZWxSZWFjdGlvbi5wcm90b3R5cGUuX3Jlc3VsdENhbmNlbGxlZCA9IGZ1bmN0aW9uKCkge1xuICAgIGNoZWNrQ2FuY2VsKHRoaXMuZmluYWxseUhhbmRsZXIpO1xufTtcblxuZnVuY3Rpb24gY2hlY2tDYW5jZWwoY3R4LCByZWFzb24pIHtcbiAgICBpZiAoY3R4LmNhbmNlbFByb21pc2UgIT0gbnVsbCkge1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGN0eC5jYW5jZWxQcm9taXNlLl9yZWplY3QocmVhc29uKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGN0eC5jYW5jZWxQcm9taXNlLl9jYW5jZWwoKTtcbiAgICAgICAgfVxuICAgICAgICBjdHguY2FuY2VsUHJvbWlzZSA9IG51bGw7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHN1Y2NlZWQoKSB7XG4gICAgcmV0dXJuIGZpbmFsbHlIYW5kbGVyLmNhbGwodGhpcywgdGhpcy5wcm9taXNlLl90YXJnZXQoKS5fc2V0dGxlZFZhbHVlKCkpO1xufVxuZnVuY3Rpb24gZmFpbChyZWFzb24pIHtcbiAgICBpZiAoY2hlY2tDYW5jZWwodGhpcywgcmVhc29uKSkgcmV0dXJuO1xuICAgIGVycm9yT2JqLmUgPSByZWFzb247XG4gICAgcmV0dXJuIGVycm9yT2JqO1xufVxuZnVuY3Rpb24gZmluYWxseUhhbmRsZXIocmVhc29uT3JWYWx1ZSkge1xuICAgIHZhciBwcm9taXNlID0gdGhpcy5wcm9taXNlO1xuICAgIHZhciBoYW5kbGVyID0gdGhpcy5oYW5kbGVyO1xuXG4gICAgaWYgKCF0aGlzLmNhbGxlZCkge1xuICAgICAgICB0aGlzLmNhbGxlZCA9IHRydWU7XG4gICAgICAgIHZhciByZXQgPSB0aGlzLmlzRmluYWxseUhhbmRsZXIoKVxuICAgICAgICAgICAgPyBoYW5kbGVyLmNhbGwocHJvbWlzZS5fYm91bmRWYWx1ZSgpKVxuICAgICAgICAgICAgOiBoYW5kbGVyLmNhbGwocHJvbWlzZS5fYm91bmRWYWx1ZSgpLCByZWFzb25PclZhbHVlKTtcbiAgICAgICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwcm9taXNlLl9zZXRSZXR1cm5lZE5vblVuZGVmaW5lZCgpO1xuICAgICAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IHRyeUNvbnZlcnRUb1Byb21pc2UocmV0LCBwcm9taXNlKTtcbiAgICAgICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2FuY2VsUHJvbWlzZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXliZVByb21pc2UuaXNDYW5jZWxsZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlYXNvbiA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENhbmNlbGxhdGlvbkVycm9yKFwibGF0ZSBjYW5jZWxsYXRpb24gb2JzZXJ2ZXJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHJlYXNvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvck9iai5lID0gcmVhc29uO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVycm9yT2JqO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1heWJlUHJvbWlzZS5pc1BlbmRpbmcoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF5YmVQcm9taXNlLl9hdHRhY2hDYW5jZWxsYXRpb25DYWxsYmFjayhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRmluYWxseUhhbmRsZXJDYW5jZWxSZWFjdGlvbih0aGlzKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1heWJlUHJvbWlzZS5fdGhlbihcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VlZCwgZmFpbCwgdW5kZWZpbmVkLCB0aGlzLCB1bmRlZmluZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHByb21pc2UuaXNSZWplY3RlZCgpKSB7XG4gICAgICAgIGNoZWNrQ2FuY2VsKHRoaXMpO1xuICAgICAgICBlcnJvck9iai5lID0gcmVhc29uT3JWYWx1ZTtcbiAgICAgICAgcmV0dXJuIGVycm9yT2JqO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoZWNrQ2FuY2VsKHRoaXMpO1xuICAgICAgICByZXR1cm4gcmVhc29uT3JWYWx1ZTtcbiAgICB9XG59XG5cblByb21pc2UucHJvdG90eXBlLl9wYXNzVGhyb3VnaCA9IGZ1bmN0aW9uKGhhbmRsZXIsIHR5cGUsIHN1Y2Nlc3MsIGZhaWwpIHtcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgIT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIHRoaXMudGhlbigpO1xuICAgIHJldHVybiB0aGlzLl90aGVuKHN1Y2Nlc3MsXG4gICAgICAgICAgICAgICAgICAgICAgZmFpbCxcbiAgICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgbmV3IFBhc3NUaHJvdWdoSGFuZGxlckNvbnRleHQodGhpcywgdHlwZSwgaGFuZGxlciksXG4gICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmxhc3RseSA9XG5Qcm9taXNlLnByb3RvdHlwZVtcImZpbmFsbHlcIl0gPSBmdW5jdGlvbiAoaGFuZGxlcikge1xuICAgIHJldHVybiB0aGlzLl9wYXNzVGhyb3VnaChoYW5kbGVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaW5hbGx5SGFuZGxlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxseUhhbmRsZXIpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUudGFwID0gZnVuY3Rpb24gKGhhbmRsZXIpIHtcbiAgICByZXR1cm4gdGhpcy5fcGFzc1Rocm91Z2goaGFuZGxlciwgMSwgZmluYWxseUhhbmRsZXIpO1xufTtcblxucmV0dXJuIFBhc3NUaHJvdWdoSGFuZGxlckNvbnRleHQ7XG59O1xuXG59LHtcIi4vdXRpbFwiOjM2fV0sMTY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFwaVJlamVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgSU5URVJOQUwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRyeUNvbnZlcnRUb1Byb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFByb3h5YWJsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcpIHtcbnZhciBlcnJvcnMgPSBfZGVyZXFfKFwiLi9lcnJvcnNcIik7XG52YXIgVHlwZUVycm9yID0gZXJyb3JzLlR5cGVFcnJvcjtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbFwiKTtcbnZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG52YXIgdHJ5Q2F0Y2ggPSB1dGlsLnRyeUNhdGNoO1xudmFyIHlpZWxkSGFuZGxlcnMgPSBbXTtcblxuZnVuY3Rpb24gcHJvbWlzZUZyb21ZaWVsZEhhbmRsZXIodmFsdWUsIHlpZWxkSGFuZGxlcnMsIHRyYWNlUGFyZW50KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB5aWVsZEhhbmRsZXJzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgIHRyYWNlUGFyZW50Ll9wdXNoQ29udGV4dCgpO1xuICAgICAgICB2YXIgcmVzdWx0ID0gdHJ5Q2F0Y2goeWllbGRIYW5kbGVyc1tpXSkodmFsdWUpO1xuICAgICAgICB0cmFjZVBhcmVudC5fcG9wQ29udGV4dCgpO1xuICAgICAgICBpZiAocmVzdWx0ID09PSBlcnJvck9iaikge1xuICAgICAgICAgICAgdHJhY2VQYXJlbnQuX3B1c2hDb250ZXh0KCk7XG4gICAgICAgICAgICB2YXIgcmV0ID0gUHJvbWlzZS5yZWplY3QoZXJyb3JPYmouZSk7XG4gICAgICAgICAgICB0cmFjZVBhcmVudC5fcG9wQ29udGV4dCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gdHJ5Q29udmVydFRvUHJvbWlzZShyZXN1bHQsIHRyYWNlUGFyZW50KTtcbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHJldHVybiBtYXliZVByb21pc2U7XG4gICAgfVxuICAgIHJldHVybiBudWxsO1xufVxuXG5mdW5jdGlvbiBQcm9taXNlU3Bhd24oZ2VuZXJhdG9yRnVuY3Rpb24sIHJlY2VpdmVyLCB5aWVsZEhhbmRsZXIsIHN0YWNrKSB7XG4gICAgaWYgKGRlYnVnLmNhbmNlbGxhdGlvbigpKSB7XG4gICAgICAgIHZhciBpbnRlcm5hbCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICAgICAgdmFyIF9maW5hbGx5UHJvbWlzZSA9IHRoaXMuX2ZpbmFsbHlQcm9taXNlID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgICAgICB0aGlzLl9wcm9taXNlID0gaW50ZXJuYWwubGFzdGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9maW5hbGx5UHJvbWlzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIGludGVybmFsLl9jYXB0dXJlU3RhY2tUcmFjZSgpO1xuICAgICAgICBpbnRlcm5hbC5fc2V0T25DYW5jZWwodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgICAgICBwcm9taXNlLl9jYXB0dXJlU3RhY2tUcmFjZSgpO1xuICAgIH1cbiAgICB0aGlzLl9zdGFjayA9IHN0YWNrO1xuICAgIHRoaXMuX2dlbmVyYXRvckZ1bmN0aW9uID0gZ2VuZXJhdG9yRnVuY3Rpb247XG4gICAgdGhpcy5fcmVjZWl2ZXIgPSByZWNlaXZlcjtcbiAgICB0aGlzLl9nZW5lcmF0b3IgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5feWllbGRIYW5kbGVycyA9IHR5cGVvZiB5aWVsZEhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIlxuICAgICAgICA/IFt5aWVsZEhhbmRsZXJdLmNvbmNhdCh5aWVsZEhhbmRsZXJzKVxuICAgICAgICA6IHlpZWxkSGFuZGxlcnM7XG4gICAgdGhpcy5feWllbGRlZFByb21pc2UgPSBudWxsO1xuICAgIHRoaXMuX2NhbmNlbGxhdGlvblBoYXNlID0gZmFsc2U7XG59XG51dGlsLmluaGVyaXRzKFByb21pc2VTcGF3biwgUHJveHlhYmxlKTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5faXNSZXNvbHZlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9taXNlID09PSBudWxsO1xufTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5fY2xlYW51cCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3Byb21pc2UgPSB0aGlzLl9nZW5lcmF0b3IgPSBudWxsO1xuICAgIGlmIChkZWJ1Zy5jYW5jZWxsYXRpb24oKSAmJiB0aGlzLl9maW5hbGx5UHJvbWlzZSAhPT0gbnVsbCkge1xuICAgICAgICB0aGlzLl9maW5hbGx5UHJvbWlzZS5fZnVsZmlsbCgpO1xuICAgICAgICB0aGlzLl9maW5hbGx5UHJvbWlzZSA9IG51bGw7XG4gICAgfVxufTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5fcHJvbWlzZUNhbmNlbGxlZCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc1Jlc29sdmVkKCkpIHJldHVybjtcbiAgICB2YXIgaW1wbGVtZW50c1JldHVybiA9IHR5cGVvZiB0aGlzLl9nZW5lcmF0b3JbXCJyZXR1cm5cIl0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICB2YXIgcmVzdWx0O1xuICAgIGlmICghaW1wbGVtZW50c1JldHVybikge1xuICAgICAgICB2YXIgcmVhc29uID0gbmV3IFByb21pc2UuQ2FuY2VsbGF0aW9uRXJyb3IoXG4gICAgICAgICAgICBcImdlbmVyYXRvciAucmV0dXJuKCkgc2VudGluZWxcIik7XG4gICAgICAgIFByb21pc2UuY29yb3V0aW5lLnJldHVyblNlbnRpbmVsID0gcmVhc29uO1xuICAgICAgICB0aGlzLl9wcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHJlYXNvbik7XG4gICAgICAgIHRoaXMuX3Byb21pc2UuX3B1c2hDb250ZXh0KCk7XG4gICAgICAgIHJlc3VsdCA9IHRyeUNhdGNoKHRoaXMuX2dlbmVyYXRvcltcInRocm93XCJdKS5jYWxsKHRoaXMuX2dlbmVyYXRvcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYXNvbik7XG4gICAgICAgIHRoaXMuX3Byb21pc2UuX3BvcENvbnRleHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9wcm9taXNlLl9wdXNoQ29udGV4dCgpO1xuICAgICAgICByZXN1bHQgPSB0cnlDYXRjaCh0aGlzLl9nZW5lcmF0b3JbXCJyZXR1cm5cIl0pLmNhbGwodGhpcy5fZ2VuZXJhdG9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCk7XG4gICAgICAgIHRoaXMuX3Byb21pc2UuX3BvcENvbnRleHQoKTtcbiAgICB9XG4gICAgdGhpcy5fY2FuY2VsbGF0aW9uUGhhc2UgPSB0cnVlO1xuICAgIHRoaXMuX3lpZWxkZWRQcm9taXNlID0gbnVsbDtcbiAgICB0aGlzLl9jb250aW51ZShyZXN1bHQpO1xufTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5fcHJvbWlzZUZ1bGZpbGxlZCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5feWllbGRlZFByb21pc2UgPSBudWxsO1xuICAgIHRoaXMuX3Byb21pc2UuX3B1c2hDb250ZXh0KCk7XG4gICAgdmFyIHJlc3VsdCA9IHRyeUNhdGNoKHRoaXMuX2dlbmVyYXRvci5uZXh0KS5jYWxsKHRoaXMuX2dlbmVyYXRvciwgdmFsdWUpO1xuICAgIHRoaXMuX3Byb21pc2UuX3BvcENvbnRleHQoKTtcbiAgICB0aGlzLl9jb250aW51ZShyZXN1bHQpO1xufTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5fcHJvbWlzZVJlamVjdGVkID0gZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgdGhpcy5feWllbGRlZFByb21pc2UgPSBudWxsO1xuICAgIHRoaXMuX3Byb21pc2UuX2F0dGFjaEV4dHJhVHJhY2UocmVhc29uKTtcbiAgICB0aGlzLl9wcm9taXNlLl9wdXNoQ29udGV4dCgpO1xuICAgIHZhciByZXN1bHQgPSB0cnlDYXRjaCh0aGlzLl9nZW5lcmF0b3JbXCJ0aHJvd1wiXSlcbiAgICAgICAgLmNhbGwodGhpcy5fZ2VuZXJhdG9yLCByZWFzb24pO1xuICAgIHRoaXMuX3Byb21pc2UuX3BvcENvbnRleHQoKTtcbiAgICB0aGlzLl9jb250aW51ZShyZXN1bHQpO1xufTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5fcmVzdWx0Q2FuY2VsbGVkID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX3lpZWxkZWRQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICB2YXIgcHJvbWlzZSA9IHRoaXMuX3lpZWxkZWRQcm9taXNlO1xuICAgICAgICB0aGlzLl95aWVsZGVkUHJvbWlzZSA9IG51bGw7XG4gICAgICAgIHByb21pc2UuY2FuY2VsKCk7XG4gICAgfVxufTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5wcm9taXNlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xufTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5fcnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2dlbmVyYXRvciA9IHRoaXMuX2dlbmVyYXRvckZ1bmN0aW9uLmNhbGwodGhpcy5fcmVjZWl2ZXIpO1xuICAgIHRoaXMuX3JlY2VpdmVyID1cbiAgICAgICAgdGhpcy5fZ2VuZXJhdG9yRnVuY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fcHJvbWlzZUZ1bGZpbGxlZCh1bmRlZmluZWQpO1xufTtcblxuUHJvbWlzZVNwYXduLnByb3RvdHlwZS5fY29udGludWUgPSBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wcm9taXNlO1xuICAgIGlmIChyZXN1bHQgPT09IGVycm9yT2JqKSB7XG4gICAgICAgIHRoaXMuX2NsZWFudXAoKTtcbiAgICAgICAgaWYgKHRoaXMuX2NhbmNlbGxhdGlvblBoYXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5jYW5jZWwoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlLl9yZWplY3RDYWxsYmFjayhyZXN1bHQuZSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgIGlmIChyZXN1bHQuZG9uZSA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9jbGVhbnVwKCk7XG4gICAgICAgIGlmICh0aGlzLl9jYW5jZWxsYXRpb25QaGFzZSkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2UuY2FuY2VsKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5fcmVzb2x2ZUNhbGxiYWNrKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBtYXliZVByb21pc2UgPSB0cnlDb252ZXJ0VG9Qcm9taXNlKHZhbHVlLCB0aGlzLl9wcm9taXNlKTtcbiAgICAgICAgaWYgKCEobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgICAgICAgIG1heWJlUHJvbWlzZSA9XG4gICAgICAgICAgICAgICAgcHJvbWlzZUZyb21ZaWVsZEhhbmRsZXIobWF5YmVQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3lpZWxkSGFuZGxlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHJvbWlzZSk7XG4gICAgICAgICAgICBpZiAobWF5YmVQcm9taXNlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJvbWlzZVJlamVjdGVkKFxuICAgICAgICAgICAgICAgICAgICBuZXcgVHlwZUVycm9yKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBIHZhbHVlICVzIHdhcyB5aWVsZGVkIHRoYXQgY291bGQgbm90IGJlIHRyZWF0ZWQgYXMgYSBwcm9taXNlXFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvTXFyRm1YXFx1MDAwYVxcdTAwMGFcIi5yZXBsYWNlKFwiJXNcIiwgdmFsdWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRnJvbSBjb3JvdXRpbmU6XFx1MDAwYVwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3N0YWNrLnNwbGl0KFwiXFxuXCIpLnNsaWNlKDEsIC03KS5qb2luKFwiXFxuXCIpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBtYXliZVByb21pc2UgPSBtYXliZVByb21pc2UuX3RhcmdldCgpO1xuICAgICAgICB2YXIgYml0RmllbGQgPSBtYXliZVByb21pc2UuX2JpdEZpZWxkO1xuICAgICAgICA7XG4gICAgICAgIGlmICgoKGJpdEZpZWxkICYgNTAzOTcxODQpID09PSAwKSkge1xuICAgICAgICAgICAgdGhpcy5feWllbGRlZFByb21pc2UgPSBtYXliZVByb21pc2U7XG4gICAgICAgICAgICBtYXliZVByb21pc2UuX3Byb3h5KHRoaXMsIG51bGwpO1xuICAgICAgICB9IGVsc2UgaWYgKCgoYml0RmllbGQgJiAzMzU1NDQzMikgIT09IDApKSB7XG4gICAgICAgICAgICB0aGlzLl9wcm9taXNlRnVsZmlsbGVkKG1heWJlUHJvbWlzZS5fdmFsdWUoKSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKChiaXRGaWVsZCAmIDE2Nzc3MjE2KSAhPT0gMCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3Byb21pc2VSZWplY3RlZChtYXliZVByb21pc2UuX3JlYXNvbigpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Byb21pc2VDYW5jZWxsZWQoKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblByb21pc2UuY29yb3V0aW5lID0gZnVuY3Rpb24gKGdlbmVyYXRvckZ1bmN0aW9uLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBnZW5lcmF0b3JGdW5jdGlvbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJnZW5lcmF0b3JGdW5jdGlvbiBtdXN0IGJlIGEgZnVuY3Rpb25cXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9NcXJGbVhcXHUwMDBhXCIpO1xuICAgIH1cbiAgICB2YXIgeWllbGRIYW5kbGVyID0gT2JqZWN0KG9wdGlvbnMpLnlpZWxkSGFuZGxlcjtcbiAgICB2YXIgUHJvbWlzZVNwYXduJCA9IFByb21pc2VTcGF3bjtcbiAgICB2YXIgc3RhY2sgPSBuZXcgRXJyb3IoKS5zdGFjaztcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZ2VuZXJhdG9yID0gZ2VuZXJhdG9yRnVuY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgdmFyIHNwYXduID0gbmV3IFByb21pc2VTcGF3biQodW5kZWZpbmVkLCB1bmRlZmluZWQsIHlpZWxkSGFuZGxlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhY2spO1xuICAgICAgICB2YXIgcmV0ID0gc3Bhd24ucHJvbWlzZSgpO1xuICAgICAgICBzcGF3bi5fZ2VuZXJhdG9yID0gZ2VuZXJhdG9yO1xuICAgICAgICBzcGF3bi5fcHJvbWlzZUZ1bGZpbGxlZCh1bmRlZmluZWQpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG59O1xuXG5Qcm9taXNlLmNvcm91dGluZS5hZGRZaWVsZEhhbmRsZXIgPSBmdW5jdGlvbihmbikge1xuICAgIGlmICh0eXBlb2YgZm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZXhwZWN0aW5nIGEgZnVuY3Rpb24gYnV0IGdvdCBcIiArIHV0aWwuY2xhc3NTdHJpbmcoZm4pKTtcbiAgICB9XG4gICAgeWllbGRIYW5kbGVycy5wdXNoKGZuKTtcbn07XG5cblByb21pc2Uuc3Bhd24gPSBmdW5jdGlvbiAoZ2VuZXJhdG9yRnVuY3Rpb24pIHtcbiAgICBkZWJ1Zy5kZXByZWNhdGVkKFwiUHJvbWlzZS5zcGF3bigpXCIsIFwiUHJvbWlzZS5jb3JvdXRpbmUoKVwiKTtcbiAgICBpZiAodHlwZW9mIGdlbmVyYXRvckZ1bmN0aW9uICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGFwaVJlamVjdGlvbihcImdlbmVyYXRvckZ1bmN0aW9uIG11c3QgYmUgYSBmdW5jdGlvblxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL01xckZtWFxcdTAwMGFcIik7XG4gICAgfVxuICAgIHZhciBzcGF3biA9IG5ldyBQcm9taXNlU3Bhd24oZ2VuZXJhdG9yRnVuY3Rpb24sIHRoaXMpO1xuICAgIHZhciByZXQgPSBzcGF3bi5wcm9taXNlKCk7XG4gICAgc3Bhd24uX3J1bihQcm9taXNlLnNwYXduKTtcbiAgICByZXR1cm4gcmV0O1xufTtcbn07XG5cbn0se1wiLi9lcnJvcnNcIjoxMixcIi4vdXRpbFwiOjM2fV0sMTc6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9XG5mdW5jdGlvbihQcm9taXNlLCBQcm9taXNlQXJyYXksIHRyeUNvbnZlcnRUb1Byb21pc2UsIElOVEVSTkFMKSB7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG52YXIgY2FuRXZhbHVhdGUgPSB1dGlsLmNhbkV2YWx1YXRlO1xudmFyIHRyeUNhdGNoID0gdXRpbC50cnlDYXRjaDtcbnZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG52YXIgcmVqZWN0O1xuXG5pZiAoIXRydWUpIHtcbmlmIChjYW5FdmFsdWF0ZSkge1xuICAgIHZhciB0aGVuQ2FsbGJhY2sgPSBmdW5jdGlvbihpKSB7XG4gICAgICAgIHJldHVybiBuZXcgRnVuY3Rpb24oXCJ2YWx1ZVwiLCBcImhvbGRlclwiLCBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGhvbGRlci5wSW5kZXggPSB2YWx1ZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGhvbGRlci5jaGVja0Z1bGZpbGxtZW50KHRoaXMpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFwiLnJlcGxhY2UoL0luZGV4L2csIGkpKTtcbiAgICB9O1xuXG4gICAgdmFyIHByb21pc2VTZXR0ZXIgPSBmdW5jdGlvbihpKSB7XG4gICAgICAgIHJldHVybiBuZXcgRnVuY3Rpb24oXCJwcm9taXNlXCIsIFwiaG9sZGVyXCIsIFwiICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGhvbGRlci5wSW5kZXggPSBwcm9taXNlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFwiLnJlcGxhY2UoL0luZGV4L2csIGkpKTtcbiAgICB9O1xuXG4gICAgdmFyIGdlbmVyYXRlSG9sZGVyQ2xhc3MgPSBmdW5jdGlvbih0b3RhbCkge1xuICAgICAgICB2YXIgcHJvcHMgPSBuZXcgQXJyYXkodG90YWwpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBwcm9wc1tpXSA9IFwidGhpcy5wXCIgKyAoaSsxKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgYXNzaWdubWVudCA9IHByb3BzLmpvaW4oXCIgPSBcIikgKyBcIiA9IG51bGw7XCI7XG4gICAgICAgIHZhciBjYW5jZWxsYXRpb25Db2RlPSBcInZhciBwcm9taXNlO1xcblwiICsgcHJvcHMubWFwKGZ1bmN0aW9uKHByb3ApIHtcbiAgICAgICAgICAgIHJldHVybiBcIiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgcHJvbWlzZSA9IFwiICsgcHJvcCArIFwiOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5jYW5jZWwoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFwiO1xuICAgICAgICB9KS5qb2luKFwiXFxuXCIpO1xuICAgICAgICB2YXIgcGFzc2VkQXJndW1lbnRzID0gcHJvcHMuam9pbihcIiwgXCIpO1xuICAgICAgICB2YXIgbmFtZSA9IFwiSG9sZGVyJFwiICsgdG90YWw7XG5cblxuICAgICAgICB2YXIgY29kZSA9IFwicmV0dXJuIGZ1bmN0aW9uKHRyeUNhdGNoLCBlcnJvck9iaiwgUHJvbWlzZSkgeyAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICd1c2Ugc3RyaWN0JzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGZ1bmN0aW9uIFtUaGVOYW1lXShmbikgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBbVGhlUHJvcGVydGllc10gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICB0aGlzLmZuID0gZm47ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICB0aGlzLm5vdyA9IDA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFtUaGVOYW1lXS5wcm90b3R5cGUuY2hlY2tGdWxmaWxsbWVudCA9IGZ1bmN0aW9uKHByb21pc2UpIHsgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICB2YXIgbm93ID0gKyt0aGlzLm5vdzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBpZiAobm93ID09PSBbVGhlVG90YWxdKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5fcHVzaENvbnRleHQoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gdGhpcy5mbjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJldCA9IHRyeUNhdGNoKGNhbGxiYWNrKShbVGhlUGFzc2VkQXJndW1lbnRzXSk7ICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZS5fcG9wQ29udGV4dCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2UuX3JlamVjdENhbGxiYWNrKHJldC5lLCBmYWxzZSk7ICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2UuX3Jlc29sdmVDYWxsYmFjayhyZXQpOyAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIH07ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFtUaGVOYW1lXS5wcm90b3R5cGUuX3Jlc3VsdENhbmNlbGxlZCA9IGZ1bmN0aW9uKCkgeyAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICBbQ2FuY2VsbGF0aW9uQ29kZV0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIH07ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHJldHVybiBbVGhlTmFtZV07ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgfSh0cnlDYXRjaCwgZXJyb3JPYmosIFByb21pc2UpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgXCI7XG5cbiAgICAgICAgY29kZSA9IGNvZGUucmVwbGFjZSgvXFxbVGhlTmFtZVxcXS9nLCBuYW1lKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcW1RoZVRvdGFsXFxdL2csIHRvdGFsKVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcW1RoZVBhc3NlZEFyZ3VtZW50c1xcXS9nLCBwYXNzZWRBcmd1bWVudHMpXG4gICAgICAgICAgICAucmVwbGFjZSgvXFxbVGhlUHJvcGVydGllc1xcXS9nLCBhc3NpZ25tZW50KVxuICAgICAgICAgICAgLnJlcGxhY2UoL1xcW0NhbmNlbGxhdGlvbkNvZGVcXF0vZywgY2FuY2VsbGF0aW9uQ29kZSk7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBGdW5jdGlvbihcInRyeUNhdGNoXCIsIFwiZXJyb3JPYmpcIiwgXCJQcm9taXNlXCIsIGNvZGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAodHJ5Q2F0Y2gsIGVycm9yT2JqLCBQcm9taXNlKTtcbiAgICB9O1xuXG4gICAgdmFyIGhvbGRlckNsYXNzZXMgPSBbXTtcbiAgICB2YXIgdGhlbkNhbGxiYWNrcyA9IFtdO1xuICAgIHZhciBwcm9taXNlU2V0dGVycyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCA4OyArK2kpIHtcbiAgICAgICAgaG9sZGVyQ2xhc3Nlcy5wdXNoKGdlbmVyYXRlSG9sZGVyQ2xhc3MoaSArIDEpKTtcbiAgICAgICAgdGhlbkNhbGxiYWNrcy5wdXNoKHRoZW5DYWxsYmFjayhpICsgMSkpO1xuICAgICAgICBwcm9taXNlU2V0dGVycy5wdXNoKHByb21pc2VTZXR0ZXIoaSArIDEpKTtcbiAgICB9XG5cbiAgICByZWplY3QgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIHRoaXMuX3JlamVjdChyZWFzb24pO1xuICAgIH07XG59fVxuXG5Qcm9taXNlLmpvaW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGxhc3QgPSBhcmd1bWVudHMubGVuZ3RoIC0gMTtcbiAgICB2YXIgZm47XG4gICAgaWYgKGxhc3QgPiAwICYmIHR5cGVvZiBhcmd1bWVudHNbbGFzdF0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBmbiA9IGFyZ3VtZW50c1tsYXN0XTtcbiAgICAgICAgaWYgKCF0cnVlKSB7XG4gICAgICAgICAgICBpZiAobGFzdCA8PSA4ICYmIGNhbkV2YWx1YXRlKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICAgICAgICAgICAgICByZXQuX2NhcHR1cmVTdGFja1RyYWNlKCk7XG4gICAgICAgICAgICAgICAgdmFyIEhvbGRlckNsYXNzID0gaG9sZGVyQ2xhc3Nlc1tsYXN0IC0gMV07XG4gICAgICAgICAgICAgICAgdmFyIGhvbGRlciA9IG5ldyBIb2xkZXJDbGFzcyhmbik7XG4gICAgICAgICAgICAgICAgdmFyIGNhbGxiYWNrcyA9IHRoZW5DYWxsYmFja3M7XG5cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3Q7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gdHJ5Q29udmVydFRvUHJvbWlzZShhcmd1bWVudHNbaV0sIHJldCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXliZVByb21pc2UgPSBtYXliZVByb21pc2UuX3RhcmdldCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJpdEZpZWxkID0gbWF5YmVQcm9taXNlLl9iaXRGaWVsZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoKGJpdEZpZWxkICYgNTAzOTcxODQpID09PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fdGhlbihjYWxsYmFja3NbaV0sIHJlamVjdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5kZWZpbmVkLCByZXQsIGhvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvbWlzZVNldHRlcnNbaV0obWF5YmVQcm9taXNlLCBob2xkZXIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICgoKGJpdEZpZWxkICYgMzM1NTQ0MzIpICE9PSAwKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrc1tpXS5jYWxsKHJldCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXliZVByb21pc2UuX3ZhbHVlKCksIGhvbGRlcik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCgoYml0RmllbGQgJiAxNjc3NzIxNikgIT09IDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0Ll9yZWplY3QobWF5YmVQcm9taXNlLl9yZWFzb24oKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5fY2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3NbaV0uY2FsbChyZXQsIG1heWJlUHJvbWlzZSwgaG9sZGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIXJldC5faXNGYXRlU2VhbGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0Ll9zZXRBc3luY0d1YXJhbnRlZWQoKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0Ll9zZXRPbkNhbmNlbChob2xkZXIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMpOztcbiAgICBpZiAoZm4pIGFyZ3MucG9wKCk7XG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlQXJyYXkoYXJncykucHJvbWlzZSgpO1xuICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gcmV0LnNwcmVhZChmbikgOiByZXQ7XG59O1xuXG59O1xuXG59LHtcIi4vdXRpbFwiOjM2fV0sMTg6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2VBcnJheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpUmVqZWN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0cnlDb252ZXJ0VG9Qcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBJTlRFUk5BTCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcpIHtcbnZhciBnZXREb21haW4gPSBQcm9taXNlLl9nZXREb21haW47XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG52YXIgdHJ5Q2F0Y2ggPSB1dGlsLnRyeUNhdGNoO1xudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcbnZhciBFTVBUWV9BUlJBWSA9IFtdO1xuXG5mdW5jdGlvbiBNYXBwaW5nUHJvbWlzZUFycmF5KHByb21pc2VzLCBmbiwgbGltaXQsIF9maWx0ZXIpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9yJChwcm9taXNlcyk7XG4gICAgdGhpcy5fcHJvbWlzZS5fY2FwdHVyZVN0YWNrVHJhY2UoKTtcbiAgICB2YXIgZG9tYWluID0gZ2V0RG9tYWluKCk7XG4gICAgdGhpcy5fY2FsbGJhY2sgPSBkb21haW4gPT09IG51bGwgPyBmbiA6IGRvbWFpbi5iaW5kKGZuKTtcbiAgICB0aGlzLl9wcmVzZXJ2ZWRWYWx1ZXMgPSBfZmlsdGVyID09PSBJTlRFUk5BTFxuICAgICAgICA/IG5ldyBBcnJheSh0aGlzLmxlbmd0aCgpKVxuICAgICAgICA6IG51bGw7XG4gICAgdGhpcy5fbGltaXQgPSBsaW1pdDtcbiAgICB0aGlzLl9pbkZsaWdodCA9IDA7XG4gICAgdGhpcy5fcXVldWUgPSBsaW1pdCA+PSAxID8gW10gOiBFTVBUWV9BUlJBWTtcbiAgICB0aGlzLl9pbml0JCh1bmRlZmluZWQsIC0yKTtcbn1cbnV0aWwuaW5oZXJpdHMoTWFwcGluZ1Byb21pc2VBcnJheSwgUHJvbWlzZUFycmF5KTtcblxuTWFwcGluZ1Byb21pc2VBcnJheS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAoKSB7fTtcblxuTWFwcGluZ1Byb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VGdWxmaWxsZWQgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgdmFyIHZhbHVlcyA9IHRoaXMuX3ZhbHVlcztcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKTtcbiAgICB2YXIgcHJlc2VydmVkVmFsdWVzID0gdGhpcy5fcHJlc2VydmVkVmFsdWVzO1xuICAgIHZhciBsaW1pdCA9IHRoaXMuX2xpbWl0O1xuXG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICBpbmRleCA9IChpbmRleCAqIC0xKSAtIDE7XG4gICAgICAgIHZhbHVlc1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgaWYgKGxpbWl0ID49IDEpIHtcbiAgICAgICAgICAgIHRoaXMuX2luRmxpZ2h0LS07XG4gICAgICAgICAgICB0aGlzLl9kcmFpblF1ZXVlKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChsaW1pdCA+PSAxICYmIHRoaXMuX2luRmxpZ2h0ID49IGxpbWl0KSB7XG4gICAgICAgICAgICB2YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLl9xdWV1ZS5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJlc2VydmVkVmFsdWVzICE9PSBudWxsKSBwcmVzZXJ2ZWRWYWx1ZXNbaW5kZXhdID0gdmFsdWU7XG5cbiAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLl9wcm9taXNlO1xuICAgICAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLl9jYWxsYmFjaztcbiAgICAgICAgdmFyIHJlY2VpdmVyID0gcHJvbWlzZS5fYm91bmRWYWx1ZSgpO1xuICAgICAgICBwcm9taXNlLl9wdXNoQ29udGV4dCgpO1xuICAgICAgICB2YXIgcmV0ID0gdHJ5Q2F0Y2goY2FsbGJhY2spLmNhbGwocmVjZWl2ZXIsIHZhbHVlLCBpbmRleCwgbGVuZ3RoKTtcbiAgICAgICAgdmFyIHByb21pc2VDcmVhdGVkID0gcHJvbWlzZS5fcG9wQ29udGV4dCgpO1xuICAgICAgICBkZWJ1Zy5jaGVja0ZvcmdvdHRlblJldHVybnMoXG4gICAgICAgICAgICByZXQsXG4gICAgICAgICAgICBwcm9taXNlQ3JlYXRlZCxcbiAgICAgICAgICAgIHByZXNlcnZlZFZhbHVlcyAhPT0gbnVsbCA/IFwiUHJvbWlzZS5maWx0ZXJcIiA6IFwiUHJvbWlzZS5tYXBcIixcbiAgICAgICAgICAgIHByb21pc2VcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdChyZXQuZSk7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBtYXliZVByb21pc2UgPSB0cnlDb252ZXJ0VG9Qcm9taXNlKHJldCwgdGhpcy5fcHJvbWlzZSk7XG4gICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICBtYXliZVByb21pc2UgPSBtYXliZVByb21pc2UuX3RhcmdldCgpO1xuICAgICAgICAgICAgdmFyIGJpdEZpZWxkID0gbWF5YmVQcm9taXNlLl9iaXRGaWVsZDtcbiAgICAgICAgICAgIDtcbiAgICAgICAgICAgIGlmICgoKGJpdEZpZWxkICYgNTAzOTcxODQpID09PSAwKSkge1xuICAgICAgICAgICAgICAgIGlmIChsaW1pdCA+PSAxKSB0aGlzLl9pbkZsaWdodCsrO1xuICAgICAgICAgICAgICAgIHZhbHVlc1tpbmRleF0gPSBtYXliZVByb21pc2U7XG4gICAgICAgICAgICAgICAgbWF5YmVQcm9taXNlLl9wcm94eSh0aGlzLCAoaW5kZXggKyAxKSAqIC0xKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCgoYml0RmllbGQgJiAzMzU1NDQzMikgIT09IDApKSB7XG4gICAgICAgICAgICAgICAgcmV0ID0gbWF5YmVQcm9taXNlLl92YWx1ZSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoKGJpdEZpZWxkICYgMTY3NzcyMTYpICE9PSAwKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3JlamVjdChtYXliZVByb21pc2UuX3JlYXNvbigpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FuY2VsKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWVzW2luZGV4XSA9IHJldDtcbiAgICB9XG4gICAgdmFyIHRvdGFsUmVzb2x2ZWQgPSArK3RoaXMuX3RvdGFsUmVzb2x2ZWQ7XG4gICAgaWYgKHRvdGFsUmVzb2x2ZWQgPj0gbGVuZ3RoKSB7XG4gICAgICAgIGlmIChwcmVzZXJ2ZWRWYWx1ZXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuX2ZpbHRlcih2YWx1ZXMsIHByZXNlcnZlZFZhbHVlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9yZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cbk1hcHBpbmdQcm9taXNlQXJyYXkucHJvdG90eXBlLl9kcmFpblF1ZXVlID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBxdWV1ZSA9IHRoaXMuX3F1ZXVlO1xuICAgIHZhciBsaW1pdCA9IHRoaXMuX2xpbWl0O1xuICAgIHZhciB2YWx1ZXMgPSB0aGlzLl92YWx1ZXM7XG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDAgJiYgdGhpcy5faW5GbGlnaHQgPCBsaW1pdCkge1xuICAgICAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm47XG4gICAgICAgIHZhciBpbmRleCA9IHF1ZXVlLnBvcCgpO1xuICAgICAgICB0aGlzLl9wcm9taXNlRnVsZmlsbGVkKHZhbHVlc1tpbmRleF0sIGluZGV4KTtcbiAgICB9XG59O1xuXG5NYXBwaW5nUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fZmlsdGVyID0gZnVuY3Rpb24gKGJvb2xlYW5zLCB2YWx1ZXMpIHtcbiAgICB2YXIgbGVuID0gdmFsdWVzLmxlbmd0aDtcbiAgICB2YXIgcmV0ID0gbmV3IEFycmF5KGxlbik7XG4gICAgdmFyIGogPSAwO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgaWYgKGJvb2xlYW5zW2ldKSByZXRbaisrXSA9IHZhbHVlc1tpXTtcbiAgICB9XG4gICAgcmV0Lmxlbmd0aCA9IGo7XG4gICAgdGhpcy5fcmVzb2x2ZShyZXQpO1xufTtcblxuTWFwcGluZ1Byb21pc2VBcnJheS5wcm90b3R5cGUucHJlc2VydmVkVmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9wcmVzZXJ2ZWRWYWx1ZXM7XG59O1xuXG5mdW5jdGlvbiBtYXAocHJvbWlzZXMsIGZuLCBvcHRpb25zLCBfZmlsdGVyKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBhcGlSZWplY3Rpb24oXCJleHBlY3RpbmcgYSBmdW5jdGlvbiBidXQgZ290IFwiICsgdXRpbC5jbGFzc1N0cmluZyhmbikpO1xuICAgIH1cblxuICAgIHZhciBsaW1pdCA9IDA7XG4gICAgaWYgKG9wdGlvbnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucyAhPT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmNvbmN1cnJlbmN5ICE9PSBcIm51bWJlclwiKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KFxuICAgICAgICAgICAgICAgICAgICBuZXcgVHlwZUVycm9yKFwiJ2NvbmN1cnJlbmN5JyBtdXN0IGJlIGEgbnVtYmVyIGJ1dCBpdCBpcyBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlsLmNsYXNzU3RyaW5nKG9wdGlvbnMuY29uY3VycmVuY3kpKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsaW1pdCA9IG9wdGlvbnMuY29uY3VycmVuY3k7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IFR5cGVFcnJvcihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm9wdGlvbnMgYXJndW1lbnQgbXVzdCBiZSBhbiBvYmplY3QgYnV0IGl0IGlzIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbC5jbGFzc1N0cmluZyhvcHRpb25zKSkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxpbWl0ID0gdHlwZW9mIGxpbWl0ID09PSBcIm51bWJlclwiICYmXG4gICAgICAgIGlzRmluaXRlKGxpbWl0KSAmJiBsaW1pdCA+PSAxID8gbGltaXQgOiAwO1xuICAgIHJldHVybiBuZXcgTWFwcGluZ1Byb21pc2VBcnJheShwcm9taXNlcywgZm4sIGxpbWl0LCBfZmlsdGVyKS5wcm9taXNlKCk7XG59XG5cblByb21pc2UucHJvdG90eXBlLm1hcCA9IGZ1bmN0aW9uIChmbiwgb3B0aW9ucykge1xuICAgIHJldHVybiBtYXAodGhpcywgZm4sIG9wdGlvbnMsIG51bGwpO1xufTtcblxuUHJvbWlzZS5tYXAgPSBmdW5jdGlvbiAocHJvbWlzZXMsIGZuLCBvcHRpb25zLCBfZmlsdGVyKSB7XG4gICAgcmV0dXJuIG1hcChwcm9taXNlcywgZm4sIG9wdGlvbnMsIF9maWx0ZXIpO1xufTtcblxuXG59O1xuXG59LHtcIi4vdXRpbFwiOjM2fV0sMTk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9XG5mdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCwgdHJ5Q29udmVydFRvUHJvbWlzZSwgYXBpUmVqZWN0aW9uLCBkZWJ1Zykge1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsXCIpO1xudmFyIHRyeUNhdGNoID0gdXRpbC50cnlDYXRjaDtcblxuUHJvbWlzZS5tZXRob2QgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdGhyb3cgbmV3IFByb21pc2UuVHlwZUVycm9yKFwiZXhwZWN0aW5nIGEgZnVuY3Rpb24gYnV0IGdvdCBcIiArIHV0aWwuY2xhc3NTdHJpbmcoZm4pKTtcbiAgICB9XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICAgICAgcmV0Ll9jYXB0dXJlU3RhY2tUcmFjZSgpO1xuICAgICAgICByZXQuX3B1c2hDb250ZXh0KCk7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNhdGNoKGZuKS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB2YXIgcHJvbWlzZUNyZWF0ZWQgPSByZXQuX3BvcENvbnRleHQoKTtcbiAgICAgICAgZGVidWcuY2hlY2tGb3Jnb3R0ZW5SZXR1cm5zKFxuICAgICAgICAgICAgdmFsdWUsIHByb21pc2VDcmVhdGVkLCBcIlByb21pc2UubWV0aG9kXCIsIHJldCk7XG4gICAgICAgIHJldC5fcmVzb2x2ZUZyb21TeW5jVmFsdWUodmFsdWUpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG59O1xuXG5Qcm9taXNlLmF0dGVtcHQgPSBQcm9taXNlW1widHJ5XCJdID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBhcGlSZWplY3Rpb24oXCJleHBlY3RpbmcgYSBmdW5jdGlvbiBidXQgZ290IFwiICsgdXRpbC5jbGFzc1N0cmluZyhmbikpO1xuICAgIH1cbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIHJldC5fY2FwdHVyZVN0YWNrVHJhY2UoKTtcbiAgICByZXQuX3B1c2hDb250ZXh0KCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICBkZWJ1Zy5kZXByZWNhdGVkKFwiY2FsbGluZyBQcm9taXNlLnRyeSB3aXRoIG1vcmUgdGhhbiAxIGFyZ3VtZW50XCIpO1xuICAgICAgICB2YXIgYXJnID0gYXJndW1lbnRzWzFdO1xuICAgICAgICB2YXIgY3R4ID0gYXJndW1lbnRzWzJdO1xuICAgICAgICB2YWx1ZSA9IHV0aWwuaXNBcnJheShhcmcpID8gdHJ5Q2F0Y2goZm4pLmFwcGx5KGN0eCwgYXJnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdHJ5Q2F0Y2goZm4pLmNhbGwoY3R4LCBhcmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gdHJ5Q2F0Y2goZm4pKCk7XG4gICAgfVxuICAgIHZhciBwcm9taXNlQ3JlYXRlZCA9IHJldC5fcG9wQ29udGV4dCgpO1xuICAgIGRlYnVnLmNoZWNrRm9yZ290dGVuUmV0dXJucyhcbiAgICAgICAgdmFsdWUsIHByb21pc2VDcmVhdGVkLCBcIlByb21pc2UudHJ5XCIsIHJldCk7XG4gICAgcmV0Ll9yZXNvbHZlRnJvbVN5bmNWYWx1ZSh2YWx1ZSk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZXNvbHZlRnJvbVN5bmNWYWx1ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gdXRpbC5lcnJvck9iaikge1xuICAgICAgICB0aGlzLl9yZWplY3RDYWxsYmFjayh2YWx1ZS5lLCBmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZUNhbGxiYWNrKHZhbHVlLCB0cnVlKTtcbiAgICB9XG59O1xufTtcblxufSx7XCIuL3V0aWxcIjozNn1dLDIwOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsXCIpO1xudmFyIG1heWJlV3JhcEFzRXJyb3IgPSB1dGlsLm1heWJlV3JhcEFzRXJyb3I7XG52YXIgZXJyb3JzID0gX2RlcmVxXyhcIi4vZXJyb3JzXCIpO1xudmFyIE9wZXJhdGlvbmFsRXJyb3IgPSBlcnJvcnMuT3BlcmF0aW9uYWxFcnJvcjtcbnZhciBlczUgPSBfZGVyZXFfKFwiLi9lczVcIik7XG5cbmZ1bmN0aW9uIGlzVW50eXBlZEVycm9yKG9iaikge1xuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBFcnJvciAmJlxuICAgICAgICBlczUuZ2V0UHJvdG90eXBlT2Yob2JqKSA9PT0gRXJyb3IucHJvdG90eXBlO1xufVxuXG52YXIgckVycm9yS2V5ID0gL14oPzpuYW1lfG1lc3NhZ2V8c3RhY2t8Y2F1c2UpJC87XG5mdW5jdGlvbiB3cmFwQXNPcGVyYXRpb25hbEVycm9yKG9iaikge1xuICAgIHZhciByZXQ7XG4gICAgaWYgKGlzVW50eXBlZEVycm9yKG9iaikpIHtcbiAgICAgICAgcmV0ID0gbmV3IE9wZXJhdGlvbmFsRXJyb3Iob2JqKTtcbiAgICAgICAgcmV0Lm5hbWUgPSBvYmoubmFtZTtcbiAgICAgICAgcmV0Lm1lc3NhZ2UgPSBvYmoubWVzc2FnZTtcbiAgICAgICAgcmV0LnN0YWNrID0gb2JqLnN0YWNrO1xuICAgICAgICB2YXIga2V5cyA9IGVzNS5rZXlzKG9iaik7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgICAgICBpZiAoIXJFcnJvcktleS50ZXN0KGtleSkpIHtcbiAgICAgICAgICAgICAgICByZXRba2V5XSA9IG9ialtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuICAgIHV0aWwubWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uKG9iaik7XG4gICAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gbm9kZWJhY2tGb3JQcm9taXNlKHByb21pc2UsIG11bHRpQXJncykge1xuICAgIHJldHVybiBmdW5jdGlvbihlcnIsIHZhbHVlKSB7XG4gICAgICAgIGlmIChwcm9taXNlID09PSBudWxsKSByZXR1cm47XG4gICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIHZhciB3cmFwcGVkID0gd3JhcEFzT3BlcmF0aW9uYWxFcnJvcihtYXliZVdyYXBBc0Vycm9yKGVycikpO1xuICAgICAgICAgICAgcHJvbWlzZS5fYXR0YWNoRXh0cmFUcmFjZSh3cmFwcGVkKTtcbiAgICAgICAgICAgIHByb21pc2UuX3JlamVjdCh3cmFwcGVkKTtcbiAgICAgICAgfSBlbHNlIGlmICghbXVsdGlBcmdzKSB7XG4gICAgICAgICAgICBwcm9taXNlLl9mdWxmaWxsKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBhcmdzID0gW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpOztcbiAgICAgICAgICAgIHByb21pc2UuX2Z1bGZpbGwoYXJncyk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvbWlzZSA9IG51bGw7XG4gICAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub2RlYmFja0ZvclByb21pc2U7XG5cbn0se1wiLi9lcnJvcnNcIjoxMixcIi4vZXM1XCI6MTMsXCIuL3V0aWxcIjozNn1dLDIxOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlKSB7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG52YXIgYXN5bmMgPSBQcm9taXNlLl9hc3luYztcbnZhciB0cnlDYXRjaCA9IHV0aWwudHJ5Q2F0Y2g7XG52YXIgZXJyb3JPYmogPSB1dGlsLmVycm9yT2JqO1xuXG5mdW5jdGlvbiBzcHJlYWRBZGFwdGVyKHZhbCwgbm9kZWJhY2spIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gICAgaWYgKCF1dGlsLmlzQXJyYXkodmFsKSkgcmV0dXJuIHN1Y2Nlc3NBZGFwdGVyLmNhbGwocHJvbWlzZSwgdmFsLCBub2RlYmFjayk7XG4gICAgdmFyIHJldCA9XG4gICAgICAgIHRyeUNhdGNoKG5vZGViYWNrKS5hcHBseShwcm9taXNlLl9ib3VuZFZhbHVlKCksIFtudWxsXS5jb25jYXQodmFsKSk7XG4gICAgaWYgKHJldCA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgYXN5bmMudGhyb3dMYXRlcihyZXQuZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBzdWNjZXNzQWRhcHRlcih2YWwsIG5vZGViYWNrKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzO1xuICAgIHZhciByZWNlaXZlciA9IHByb21pc2UuX2JvdW5kVmFsdWUoKTtcbiAgICB2YXIgcmV0ID0gdmFsID09PSB1bmRlZmluZWRcbiAgICAgICAgPyB0cnlDYXRjaChub2RlYmFjaykuY2FsbChyZWNlaXZlciwgbnVsbClcbiAgICAgICAgOiB0cnlDYXRjaChub2RlYmFjaykuY2FsbChyZWNlaXZlciwgbnVsbCwgdmFsKTtcbiAgICBpZiAocmV0ID09PSBlcnJvck9iaikge1xuICAgICAgICBhc3luYy50aHJvd0xhdGVyKHJldC5lKTtcbiAgICB9XG59XG5mdW5jdGlvbiBlcnJvckFkYXB0ZXIocmVhc29uLCBub2RlYmFjaykge1xuICAgIHZhciBwcm9taXNlID0gdGhpcztcbiAgICBpZiAoIXJlYXNvbikge1xuICAgICAgICB2YXIgbmV3UmVhc29uID0gbmV3IEVycm9yKHJlYXNvbiArIFwiXCIpO1xuICAgICAgICBuZXdSZWFzb24uY2F1c2UgPSByZWFzb247XG4gICAgICAgIHJlYXNvbiA9IG5ld1JlYXNvbjtcbiAgICB9XG4gICAgdmFyIHJldCA9IHRyeUNhdGNoKG5vZGViYWNrKS5jYWxsKHByb21pc2UuX2JvdW5kVmFsdWUoKSwgcmVhc29uKTtcbiAgICBpZiAocmV0ID09PSBlcnJvck9iaikge1xuICAgICAgICBhc3luYy50aHJvd0xhdGVyKHJldC5lKTtcbiAgICB9XG59XG5cblByb21pc2UucHJvdG90eXBlLmFzQ2FsbGJhY2sgPSBQcm9taXNlLnByb3RvdHlwZS5ub2RlaWZ5ID0gZnVuY3Rpb24gKG5vZGViYWNrLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygbm9kZWJhY2sgPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHZhciBhZGFwdGVyID0gc3VjY2Vzc0FkYXB0ZXI7XG4gICAgICAgIGlmIChvcHRpb25zICE9PSB1bmRlZmluZWQgJiYgT2JqZWN0KG9wdGlvbnMpLnNwcmVhZCkge1xuICAgICAgICAgICAgYWRhcHRlciA9IHNwcmVhZEFkYXB0ZXI7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdGhlbihcbiAgICAgICAgICAgIGFkYXB0ZXIsXG4gICAgICAgICAgICBlcnJvckFkYXB0ZXIsXG4gICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICB0aGlzLFxuICAgICAgICAgICAgbm9kZWJhY2tcbiAgICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXM7XG59O1xufTtcblxufSx7XCIuL3V0aWxcIjozNn1dLDIyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbnZhciBtYWtlU2VsZlJlc29sdXRpb25FcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IFR5cGVFcnJvcihcImNpcmN1bGFyIHByb21pc2UgcmVzb2x1dGlvbiBjaGFpblxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL01xckZtWFxcdTAwMGFcIik7XG59O1xudmFyIHJlZmxlY3RIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlLlByb21pc2VJbnNwZWN0aW9uKHRoaXMuX3RhcmdldCgpKTtcbn07XG52YXIgYXBpUmVqZWN0aW9uID0gZnVuY3Rpb24obXNnKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBUeXBlRXJyb3IobXNnKSk7XG59O1xuZnVuY3Rpb24gUHJveHlhYmxlKCkge31cbnZhciBVTkRFRklORURfQklORElORyA9IHt9O1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsXCIpO1xuXG52YXIgZ2V0RG9tYWluO1xuaWYgKHV0aWwuaXNOb2RlKSB7XG4gICAgZ2V0RG9tYWluID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZXQgPSBwcm9jZXNzLmRvbWFpbjtcbiAgICAgICAgaWYgKHJldCA9PT0gdW5kZWZpbmVkKSByZXQgPSBudWxsO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH07XG59IGVsc2Uge1xuICAgIGdldERvbWFpbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9O1xufVxudXRpbC5ub3RFbnVtZXJhYmxlUHJvcChQcm9taXNlLCBcIl9nZXREb21haW5cIiwgZ2V0RG9tYWluKTtcblxudmFyIGVzNSA9IF9kZXJlcV8oXCIuL2VzNVwiKTtcbnZhciBBc3luYyA9IF9kZXJlcV8oXCIuL2FzeW5jXCIpO1xudmFyIGFzeW5jID0gbmV3IEFzeW5jKCk7XG5lczUuZGVmaW5lUHJvcGVydHkoUHJvbWlzZSwgXCJfYXN5bmNcIiwge3ZhbHVlOiBhc3luY30pO1xudmFyIGVycm9ycyA9IF9kZXJlcV8oXCIuL2Vycm9yc1wiKTtcbnZhciBUeXBlRXJyb3IgPSBQcm9taXNlLlR5cGVFcnJvciA9IGVycm9ycy5UeXBlRXJyb3I7XG5Qcm9taXNlLlJhbmdlRXJyb3IgPSBlcnJvcnMuUmFuZ2VFcnJvcjtcbnZhciBDYW5jZWxsYXRpb25FcnJvciA9IFByb21pc2UuQ2FuY2VsbGF0aW9uRXJyb3IgPSBlcnJvcnMuQ2FuY2VsbGF0aW9uRXJyb3I7XG5Qcm9taXNlLlRpbWVvdXRFcnJvciA9IGVycm9ycy5UaW1lb3V0RXJyb3I7XG5Qcm9taXNlLk9wZXJhdGlvbmFsRXJyb3IgPSBlcnJvcnMuT3BlcmF0aW9uYWxFcnJvcjtcblByb21pc2UuUmVqZWN0aW9uRXJyb3IgPSBlcnJvcnMuT3BlcmF0aW9uYWxFcnJvcjtcblByb21pc2UuQWdncmVnYXRlRXJyb3IgPSBlcnJvcnMuQWdncmVnYXRlRXJyb3I7XG52YXIgSU5URVJOQUwgPSBmdW5jdGlvbigpe307XG52YXIgQVBQTFkgPSB7fTtcbnZhciBORVhUX0ZJTFRFUiA9IHt9O1xudmFyIHRyeUNvbnZlcnRUb1Byb21pc2UgPSBfZGVyZXFfKFwiLi90aGVuYWJsZXNcIikoUHJvbWlzZSwgSU5URVJOQUwpO1xudmFyIFByb21pc2VBcnJheSA9XG4gICAgX2RlcmVxXyhcIi4vcHJvbWlzZV9hcnJheVwiKShQcm9taXNlLCBJTlRFUk5BTCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnlDb252ZXJ0VG9Qcm9taXNlLCBhcGlSZWplY3Rpb24sIFByb3h5YWJsZSk7XG52YXIgQ29udGV4dCA9IF9kZXJlcV8oXCIuL2NvbnRleHRcIikoUHJvbWlzZSk7XG4gLypqc2hpbnQgdW51c2VkOmZhbHNlKi9cbnZhciBjcmVhdGVDb250ZXh0ID0gQ29udGV4dC5jcmVhdGU7XG52YXIgZGVidWcgPSBfZGVyZXFfKFwiLi9kZWJ1Z2dhYmlsaXR5XCIpKFByb21pc2UsIENvbnRleHQpO1xudmFyIENhcHR1cmVkVHJhY2UgPSBkZWJ1Zy5DYXB0dXJlZFRyYWNlO1xudmFyIFBhc3NUaHJvdWdoSGFuZGxlckNvbnRleHQgPVxuICAgIF9kZXJlcV8oXCIuL2ZpbmFsbHlcIikoUHJvbWlzZSwgdHJ5Q29udmVydFRvUHJvbWlzZSk7XG52YXIgY2F0Y2hGaWx0ZXIgPSBfZGVyZXFfKFwiLi9jYXRjaF9maWx0ZXJcIikoTkVYVF9GSUxURVIpO1xudmFyIG5vZGViYWNrRm9yUHJvbWlzZSA9IF9kZXJlcV8oXCIuL25vZGViYWNrXCIpO1xudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcbnZhciB0cnlDYXRjaCA9IHV0aWwudHJ5Q2F0Y2g7XG5mdW5jdGlvbiBjaGVjayhzZWxmLCBleGVjdXRvcikge1xuICAgIGlmICh0eXBlb2YgZXhlY3V0b3IgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiZXhwZWN0aW5nIGEgZnVuY3Rpb24gYnV0IGdvdCBcIiArIHV0aWwuY2xhc3NTdHJpbmcoZXhlY3V0b3IpKTtcbiAgICB9XG4gICAgaWYgKHNlbGYuY29uc3RydWN0b3IgIT09IFByb21pc2UpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcInRoZSBwcm9taXNlIGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBpbnZva2VkIGRpcmVjdGx5XFx1MDAwYVxcdTAwMGEgICAgU2VlIGh0dHA6Ly9nb28uZ2wvTXFyRm1YXFx1MDAwYVwiKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IDA7XG4gICAgdGhpcy5fZnVsZmlsbG1lbnRIYW5kbGVyMCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9yZWplY3Rpb25IYW5kbGVyMCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9wcm9taXNlMCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9yZWNlaXZlcjAgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGV4ZWN1dG9yICE9PSBJTlRFUk5BTCkge1xuICAgICAgICBjaGVjayh0aGlzLCBleGVjdXRvcik7XG4gICAgICAgIHRoaXMuX3Jlc29sdmVGcm9tRXhlY3V0b3IoZXhlY3V0b3IpO1xuICAgIH1cbiAgICB0aGlzLl9wcm9taXNlQ3JlYXRlZCgpO1xuICAgIHRoaXMuX2ZpcmVFdmVudChcInByb21pc2VDcmVhdGVkXCIsIHRoaXMpO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS50b1N0cmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IFByb21pc2VdXCI7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5jYXVnaHQgPSBQcm9taXNlLnByb3RvdHlwZVtcImNhdGNoXCJdID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgaWYgKGxlbiA+IDEpIHtcbiAgICAgICAgdmFyIGNhdGNoSW5zdGFuY2VzID0gbmV3IEFycmF5KGxlbiAtIDEpLFxuICAgICAgICAgICAgaiA9IDAsIGk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW4gLSAxOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgaWYgKHV0aWwuaXNPYmplY3QoaXRlbSkpIHtcbiAgICAgICAgICAgICAgICBjYXRjaEluc3RhbmNlc1tqKytdID0gaXRlbTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwaVJlamVjdGlvbihcImV4cGVjdGluZyBhbiBvYmplY3QgYnV0IGdvdCBcIiArIHV0aWwuY2xhc3NTdHJpbmcoaXRlbSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoSW5zdGFuY2VzLmxlbmd0aCA9IGo7XG4gICAgICAgIGZuID0gYXJndW1lbnRzW2ldO1xuICAgICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgY2F0Y2hGaWx0ZXIoY2F0Y2hJbnN0YW5jZXMsIGZuLCB0aGlzKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBmbik7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5yZWZsZWN0ID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl90aGVuKHJlZmxlY3RIYW5kbGVyLFxuICAgICAgICByZWZsZWN0SGFuZGxlciwgdW5kZWZpbmVkLCB0aGlzLCB1bmRlZmluZWQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uIChkaWRGdWxmaWxsLCBkaWRSZWplY3QpIHtcbiAgICBpZiAoZGVidWcud2FybmluZ3MoKSAmJiBhcmd1bWVudHMubGVuZ3RoID4gMCAmJlxuICAgICAgICB0eXBlb2YgZGlkRnVsZmlsbCAhPT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgIHR5cGVvZiBkaWRSZWplY3QgIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICB2YXIgbXNnID0gXCIudGhlbigpIG9ubHkgYWNjZXB0cyBmdW5jdGlvbnMgYnV0IHdhcyBwYXNzZWQ6IFwiICtcbiAgICAgICAgICAgICAgICB1dGlsLmNsYXNzU3RyaW5nKGRpZEZ1bGZpbGwpO1xuICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIG1zZyArPSBcIiwgXCIgKyB1dGlsLmNsYXNzU3RyaW5nKGRpZFJlamVjdCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fd2Fybihtc2cpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdGhlbihkaWRGdWxmaWxsLCBkaWRSZWplY3QsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuZG9uZSA9IGZ1bmN0aW9uIChkaWRGdWxmaWxsLCBkaWRSZWplY3QpIHtcbiAgICB2YXIgcHJvbWlzZSA9XG4gICAgICAgIHRoaXMuX3RoZW4oZGlkRnVsZmlsbCwgZGlkUmVqZWN0LCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgICBwcm9taXNlLl9zZXRJc0ZpbmFsKCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5zcHJlYWQgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGFwaVJlamVjdGlvbihcImV4cGVjdGluZyBhIGZ1bmN0aW9uIGJ1dCBnb3QgXCIgKyB1dGlsLmNsYXNzU3RyaW5nKGZuKSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmFsbCgpLl90aGVuKGZuLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgQVBQTFksIHVuZGVmaW5lZCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS50b0pTT04gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHJldCA9IHtcbiAgICAgICAgaXNGdWxmaWxsZWQ6IGZhbHNlLFxuICAgICAgICBpc1JlamVjdGVkOiBmYWxzZSxcbiAgICAgICAgZnVsZmlsbG1lbnRWYWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICByZWplY3Rpb25SZWFzb246IHVuZGVmaW5lZFxuICAgIH07XG4gICAgaWYgKHRoaXMuaXNGdWxmaWxsZWQoKSkge1xuICAgICAgICByZXQuZnVsZmlsbG1lbnRWYWx1ZSA9IHRoaXMudmFsdWUoKTtcbiAgICAgICAgcmV0LmlzRnVsZmlsbGVkID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuaXNSZWplY3RlZCgpKSB7XG4gICAgICAgIHJldC5yZWplY3Rpb25SZWFzb24gPSB0aGlzLnJlYXNvbigpO1xuICAgICAgICByZXQuaXNSZWplY3RlZCA9IHRydWU7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5hbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuX3dhcm4oXCIuYWxsKCkgd2FzIHBhc3NlZCBhcmd1bWVudHMgYnV0IGl0IGRvZXMgbm90IHRha2UgYW55XCIpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb21pc2VBcnJheSh0aGlzKS5wcm9taXNlKCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uIChmbikge1xuICAgIHJldHVybiB0aGlzLmNhdWdodCh1dGlsLm9yaWdpbmF0ZXNGcm9tUmVqZWN0aW9uLCBmbik7XG59O1xuXG5Qcm9taXNlLmdldE5ld0xpYnJhcnlDb3B5ID0gbW9kdWxlLmV4cG9ydHM7XG5cblByb21pc2UuaXMgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgcmV0dXJuIHZhbCBpbnN0YW5jZW9mIFByb21pc2U7XG59O1xuXG5Qcm9taXNlLmZyb21Ob2RlID0gUHJvbWlzZS5mcm9tQ2FsbGJhY2sgPSBmdW5jdGlvbihmbikge1xuICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgcmV0Ll9jYXB0dXJlU3RhY2tUcmFjZSgpO1xuICAgIHZhciBtdWx0aUFyZ3MgPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/ICEhT2JqZWN0KGFyZ3VtZW50c1sxXSkubXVsdGlBcmdzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogZmFsc2U7XG4gICAgdmFyIHJlc3VsdCA9IHRyeUNhdGNoKGZuKShub2RlYmFja0ZvclByb21pc2UocmV0LCBtdWx0aUFyZ3MpKTtcbiAgICBpZiAocmVzdWx0ID09PSBlcnJvck9iaikge1xuICAgICAgICByZXQuX3JlamVjdENhbGxiYWNrKHJlc3VsdC5lLCB0cnVlKTtcbiAgICB9XG4gICAgaWYgKCFyZXQuX2lzRmF0ZVNlYWxlZCgpKSByZXQuX3NldEFzeW5jR3VhcmFudGVlZCgpO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5Qcm9taXNlLmFsbCA9IGZ1bmN0aW9uIChwcm9taXNlcykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZUFycmF5KHByb21pc2VzKS5wcm9taXNlKCk7XG59O1xuXG5Qcm9taXNlLmNhc3QgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgdmFyIHJldCA9IHRyeUNvbnZlcnRUb1Byb21pc2Uob2JqKTtcbiAgICBpZiAoIShyZXQgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xuICAgICAgICByZXQgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgICAgIHJldC5fY2FwdHVyZVN0YWNrVHJhY2UoKTtcbiAgICAgICAgcmV0Ll9zZXRGdWxmaWxsZWQoKTtcbiAgICAgICAgcmV0Ll9yZWplY3Rpb25IYW5kbGVyMCA9IG9iajtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucmVzb2x2ZSA9IFByb21pc2UuZnVsZmlsbGVkID0gUHJvbWlzZS5jYXN0O1xuXG5Qcm9taXNlLnJlamVjdCA9IFByb21pc2UucmVqZWN0ZWQgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICByZXQuX2NhcHR1cmVTdGFja1RyYWNlKCk7XG4gICAgcmV0Ll9yZWplY3RDYWxsYmFjayhyZWFzb24sIHRydWUpO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5Qcm9taXNlLnNldFNjaGVkdWxlciA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJleHBlY3RpbmcgYSBmdW5jdGlvbiBidXQgZ290IFwiICsgdXRpbC5jbGFzc1N0cmluZyhmbikpO1xuICAgIH1cbiAgICByZXR1cm4gYXN5bmMuc2V0U2NoZWR1bGVyKGZuKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl90aGVuID0gZnVuY3Rpb24gKFxuICAgIGRpZEZ1bGZpbGwsXG4gICAgZGlkUmVqZWN0LFxuICAgIF8sICAgIHJlY2VpdmVyLFxuICAgIGludGVybmFsRGF0YVxuKSB7XG4gICAgdmFyIGhhdmVJbnRlcm5hbERhdGEgPSBpbnRlcm5hbERhdGEgIT09IHVuZGVmaW5lZDtcbiAgICB2YXIgcHJvbWlzZSA9IGhhdmVJbnRlcm5hbERhdGEgPyBpbnRlcm5hbERhdGEgOiBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgdmFyIHRhcmdldCA9IHRoaXMuX3RhcmdldCgpO1xuICAgIHZhciBiaXRGaWVsZCA9IHRhcmdldC5fYml0RmllbGQ7XG5cbiAgICBpZiAoIWhhdmVJbnRlcm5hbERhdGEpIHtcbiAgICAgICAgcHJvbWlzZS5fcHJvcGFnYXRlRnJvbSh0aGlzLCAzKTtcbiAgICAgICAgcHJvbWlzZS5fY2FwdHVyZVN0YWNrVHJhY2UoKTtcbiAgICAgICAgaWYgKHJlY2VpdmVyID09PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICgodGhpcy5fYml0RmllbGQgJiAyMDk3MTUyKSAhPT0gMCkpIHtcbiAgICAgICAgICAgIGlmICghKChiaXRGaWVsZCAmIDUwMzk3MTg0KSA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlciA9IHRoaXMuX2JvdW5kVmFsdWUoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZXIgPSB0YXJnZXQgPT09IHRoaXMgPyB1bmRlZmluZWQgOiB0aGlzLl9ib3VuZFRvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2ZpcmVFdmVudChcInByb21pc2VDaGFpbmVkXCIsIHRoaXMsIHByb21pc2UpO1xuICAgIH1cblxuICAgIHZhciBkb21haW4gPSBnZXREb21haW4oKTtcbiAgICBpZiAoISgoYml0RmllbGQgJiA1MDM5NzE4NCkgPT09IDApKSB7XG4gICAgICAgIHZhciBoYW5kbGVyLCB2YWx1ZSwgc2V0dGxlciA9IHRhcmdldC5fc2V0dGxlUHJvbWlzZUN0eDtcbiAgICAgICAgaWYgKCgoYml0RmllbGQgJiAzMzU1NDQzMikgIT09IDApKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IHRhcmdldC5fcmVqZWN0aW9uSGFuZGxlcjA7XG4gICAgICAgICAgICBoYW5kbGVyID0gZGlkRnVsZmlsbDtcbiAgICAgICAgfSBlbHNlIGlmICgoKGJpdEZpZWxkICYgMTY3NzcyMTYpICE9PSAwKSkge1xuICAgICAgICAgICAgdmFsdWUgPSB0YXJnZXQuX2Z1bGZpbGxtZW50SGFuZGxlcjA7XG4gICAgICAgICAgICBoYW5kbGVyID0gZGlkUmVqZWN0O1xuICAgICAgICAgICAgdGFyZ2V0Ll91bnNldFJlamVjdGlvbklzVW5oYW5kbGVkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZXR0bGVyID0gdGFyZ2V0Ll9zZXR0bGVQcm9taXNlTGF0ZUNhbmNlbGxhdGlvbk9ic2VydmVyO1xuICAgICAgICAgICAgdmFsdWUgPSBuZXcgQ2FuY2VsbGF0aW9uRXJyb3IoXCJsYXRlIGNhbmNlbGxhdGlvbiBvYnNlcnZlclwiKTtcbiAgICAgICAgICAgIHRhcmdldC5fYXR0YWNoRXh0cmFUcmFjZSh2YWx1ZSk7XG4gICAgICAgICAgICBoYW5kbGVyID0gZGlkUmVqZWN0O1xuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMuaW52b2tlKHNldHRsZXIsIHRhcmdldCwge1xuICAgICAgICAgICAgaGFuZGxlcjogZG9tYWluID09PSBudWxsID8gaGFuZGxlclxuICAgICAgICAgICAgICAgIDogKHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCIgJiYgZG9tYWluLmJpbmQoaGFuZGxlcikpLFxuICAgICAgICAgICAgcHJvbWlzZTogcHJvbWlzZSxcbiAgICAgICAgICAgIHJlY2VpdmVyOiByZWNlaXZlcixcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZVxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXQuX2FkZENhbGxiYWNrcyhkaWRGdWxmaWxsLCBkaWRSZWplY3QsIHByb21pc2UsIHJlY2VpdmVyLCBkb21haW4pO1xuICAgIH1cblxuICAgIHJldHVybiBwcm9taXNlO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX2xlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fYml0RmllbGQgJiA2NTUzNTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc0ZhdGVTZWFsZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDExNzUwNjA0OCkgIT09IDA7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5faXNGb2xsb3dpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDY3MTA4ODY0KSA9PT0gNjcxMDg4NjQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0TGVuZ3RoID0gZnVuY3Rpb24gKGxlbikge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gKHRoaXMuX2JpdEZpZWxkICYgLTY1NTM2KSB8XG4gICAgICAgIChsZW4gJiA2NTUzNSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0RnVsZmlsbGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCAzMzU1NDQzMjtcbiAgICB0aGlzLl9maXJlRXZlbnQoXCJwcm9taXNlRnVsZmlsbGVkXCIsIHRoaXMpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldFJlamVjdGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCAxNjc3NzIxNjtcbiAgICB0aGlzLl9maXJlRXZlbnQoXCJwcm9taXNlUmVqZWN0ZWRcIiwgdGhpcyk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0Rm9sbG93aW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX2JpdEZpZWxkID0gdGhpcy5fYml0RmllbGQgfCA2NzEwODg2NDtcbiAgICB0aGlzLl9maXJlRXZlbnQoXCJwcm9taXNlUmVzb2x2ZWRcIiwgdGhpcyk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0SXNGaW5hbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgNDE5NDMwNDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9pc0ZpbmFsID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAodGhpcy5fYml0RmllbGQgJiA0MTk0MzA0KSA+IDA7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fdW5zZXRDYW5jZWxsZWQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkICYgKH42NTUzNik7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0Q2FuY2VsbGVkID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDY1NTM2O1xuICAgIHRoaXMuX2ZpcmVFdmVudChcInByb21pc2VDYW5jZWxsZWRcIiwgdGhpcyk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0QXN5bmNHdWFyYW50ZWVkID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKGFzeW5jLmhhc0N1c3RvbVNjaGVkdWxlcigpKSByZXR1cm47XG4gICAgdGhpcy5fYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZCB8IDEzNDIxNzcyODtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZWNlaXZlckF0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgdmFyIHJldCA9IGluZGV4ID09PSAwID8gdGhpcy5fcmVjZWl2ZXIwIDogdGhpc1tcbiAgICAgICAgICAgIGluZGV4ICogNCAtIDQgKyAzXTtcbiAgICBpZiAocmV0ID09PSBVTkRFRklORURfQklORElORykge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH0gZWxzZSBpZiAocmV0ID09PSB1bmRlZmluZWQgJiYgdGhpcy5faXNCb3VuZCgpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZFZhbHVlKCk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcHJvbWlzZUF0ID0gZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXNbXG4gICAgICAgICAgICBpbmRleCAqIDQgLSA0ICsgMl07XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fZnVsZmlsbG1lbnRIYW5kbGVyQXQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpc1tcbiAgICAgICAgICAgIGluZGV4ICogNCAtIDQgKyAwXTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZWplY3Rpb25IYW5kbGVyQXQgPSBmdW5jdGlvbiAoaW5kZXgpIHtcbiAgICByZXR1cm4gdGhpc1tcbiAgICAgICAgICAgIGluZGV4ICogNCAtIDQgKyAxXTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9ib3VuZFZhbHVlID0gZnVuY3Rpb24oKSB7fTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX21pZ3JhdGVDYWxsYmFjazAgPSBmdW5jdGlvbiAoZm9sbG93ZXIpIHtcbiAgICB2YXIgYml0RmllbGQgPSBmb2xsb3dlci5fYml0RmllbGQ7XG4gICAgdmFyIGZ1bGZpbGwgPSBmb2xsb3dlci5fZnVsZmlsbG1lbnRIYW5kbGVyMDtcbiAgICB2YXIgcmVqZWN0ID0gZm9sbG93ZXIuX3JlamVjdGlvbkhhbmRsZXIwO1xuICAgIHZhciBwcm9taXNlID0gZm9sbG93ZXIuX3Byb21pc2UwO1xuICAgIHZhciByZWNlaXZlciA9IGZvbGxvd2VyLl9yZWNlaXZlckF0KDApO1xuICAgIGlmIChyZWNlaXZlciA9PT0gdW5kZWZpbmVkKSByZWNlaXZlciA9IFVOREVGSU5FRF9CSU5ESU5HO1xuICAgIHRoaXMuX2FkZENhbGxiYWNrcyhmdWxmaWxsLCByZWplY3QsIHByb21pc2UsIHJlY2VpdmVyLCBudWxsKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9taWdyYXRlQ2FsbGJhY2tBdCA9IGZ1bmN0aW9uIChmb2xsb3dlciwgaW5kZXgpIHtcbiAgICB2YXIgZnVsZmlsbCA9IGZvbGxvd2VyLl9mdWxmaWxsbWVudEhhbmRsZXJBdChpbmRleCk7XG4gICAgdmFyIHJlamVjdCA9IGZvbGxvd2VyLl9yZWplY3Rpb25IYW5kbGVyQXQoaW5kZXgpO1xuICAgIHZhciBwcm9taXNlID0gZm9sbG93ZXIuX3Byb21pc2VBdChpbmRleCk7XG4gICAgdmFyIHJlY2VpdmVyID0gZm9sbG93ZXIuX3JlY2VpdmVyQXQoaW5kZXgpO1xuICAgIGlmIChyZWNlaXZlciA9PT0gdW5kZWZpbmVkKSByZWNlaXZlciA9IFVOREVGSU5FRF9CSU5ESU5HO1xuICAgIHRoaXMuX2FkZENhbGxiYWNrcyhmdWxmaWxsLCByZWplY3QsIHByb21pc2UsIHJlY2VpdmVyLCBudWxsKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9hZGRDYWxsYmFja3MgPSBmdW5jdGlvbiAoXG4gICAgZnVsZmlsbCxcbiAgICByZWplY3QsXG4gICAgcHJvbWlzZSxcbiAgICByZWNlaXZlcixcbiAgICBkb21haW5cbikge1xuICAgIHZhciBpbmRleCA9IHRoaXMuX2xlbmd0aCgpO1xuXG4gICAgaWYgKGluZGV4ID49IDY1NTM1IC0gNCkge1xuICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIHRoaXMuX3NldExlbmd0aCgwKTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgdGhpcy5fcHJvbWlzZTAgPSBwcm9taXNlO1xuICAgICAgICB0aGlzLl9yZWNlaXZlcjAgPSByZWNlaXZlcjtcbiAgICAgICAgaWYgKHR5cGVvZiBmdWxmaWxsID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIHRoaXMuX2Z1bGZpbGxtZW50SGFuZGxlcjAgPVxuICAgICAgICAgICAgICAgIGRvbWFpbiA9PT0gbnVsbCA/IGZ1bGZpbGwgOiBkb21haW4uYmluZChmdWxmaWxsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJlamVjdCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzLl9yZWplY3Rpb25IYW5kbGVyMCA9XG4gICAgICAgICAgICAgICAgZG9tYWluID09PSBudWxsID8gcmVqZWN0IDogZG9tYWluLmJpbmQocmVqZWN0KTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBiYXNlID0gaW5kZXggKiA0IC0gNDtcbiAgICAgICAgdGhpc1tiYXNlICsgMl0gPSBwcm9taXNlO1xuICAgICAgICB0aGlzW2Jhc2UgKyAzXSA9IHJlY2VpdmVyO1xuICAgICAgICBpZiAodHlwZW9mIGZ1bGZpbGwgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpc1tiYXNlICsgMF0gPVxuICAgICAgICAgICAgICAgIGRvbWFpbiA9PT0gbnVsbCA/IGZ1bGZpbGwgOiBkb21haW4uYmluZChmdWxmaWxsKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHJlamVjdCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICB0aGlzW2Jhc2UgKyAxXSA9XG4gICAgICAgICAgICAgICAgZG9tYWluID09PSBudWxsID8gcmVqZWN0IDogZG9tYWluLmJpbmQocmVqZWN0KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0aGlzLl9zZXRMZW5ndGgoaW5kZXggKyAxKTtcbiAgICByZXR1cm4gaW5kZXg7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcHJveHkgPSBmdW5jdGlvbiAocHJveHlhYmxlLCBhcmcpIHtcbiAgICB0aGlzLl9hZGRDYWxsYmFja3ModW5kZWZpbmVkLCB1bmRlZmluZWQsIGFyZywgcHJveHlhYmxlLCBudWxsKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZXNvbHZlQ2FsbGJhY2sgPSBmdW5jdGlvbih2YWx1ZSwgc2hvdWxkQmluZCkge1xuICAgIGlmICgoKHRoaXMuX2JpdEZpZWxkICYgMTE3NTA2MDQ4KSAhPT0gMCkpIHJldHVybjtcbiAgICBpZiAodmFsdWUgPT09IHRoaXMpXG4gICAgICAgIHJldHVybiB0aGlzLl9yZWplY3RDYWxsYmFjayhtYWtlU2VsZlJlc29sdXRpb25FcnJvcigpLCBmYWxzZSk7XG4gICAgdmFyIG1heWJlUHJvbWlzZSA9IHRyeUNvbnZlcnRUb1Byb21pc2UodmFsdWUsIHRoaXMpO1xuICAgIGlmICghKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpKSByZXR1cm4gdGhpcy5fZnVsZmlsbCh2YWx1ZSk7XG5cbiAgICBpZiAoc2hvdWxkQmluZCkgdGhpcy5fcHJvcGFnYXRlRnJvbShtYXliZVByb21pc2UsIDIpO1xuXG4gICAgdmFyIHByb21pc2UgPSBtYXliZVByb21pc2UuX3RhcmdldCgpO1xuXG4gICAgaWYgKHByb21pc2UgPT09IHRoaXMpIHtcbiAgICAgICAgdGhpcy5fcmVqZWN0KG1ha2VTZWxmUmVzb2x1dGlvbkVycm9yKCkpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGJpdEZpZWxkID0gcHJvbWlzZS5fYml0RmllbGQ7XG4gICAgaWYgKCgoYml0RmllbGQgJiA1MDM5NzE4NCkgPT09IDApKSB7XG4gICAgICAgIHZhciBsZW4gPSB0aGlzLl9sZW5ndGgoKTtcbiAgICAgICAgaWYgKGxlbiA+IDApIHByb21pc2UuX21pZ3JhdGVDYWxsYmFjazAodGhpcyk7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIHByb21pc2UuX21pZ3JhdGVDYWxsYmFja0F0KHRoaXMsIGkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NldEZvbGxvd2luZygpO1xuICAgICAgICB0aGlzLl9zZXRMZW5ndGgoMCk7XG4gICAgICAgIHRoaXMuX3NldEZvbGxvd2VlKHByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoKChiaXRGaWVsZCAmIDMzNTU0NDMyKSAhPT0gMCkpIHtcbiAgICAgICAgdGhpcy5fZnVsZmlsbChwcm9taXNlLl92YWx1ZSgpKTtcbiAgICB9IGVsc2UgaWYgKCgoYml0RmllbGQgJiAxNjc3NzIxNikgIT09IDApKSB7XG4gICAgICAgIHRoaXMuX3JlamVjdChwcm9taXNlLl9yZWFzb24oKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlYXNvbiA9IG5ldyBDYW5jZWxsYXRpb25FcnJvcihcImxhdGUgY2FuY2VsbGF0aW9uIG9ic2VydmVyXCIpO1xuICAgICAgICBwcm9taXNlLl9hdHRhY2hFeHRyYVRyYWNlKHJlYXNvbik7XG4gICAgICAgIHRoaXMuX3JlamVjdChyZWFzb24pO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZWplY3RDYWxsYmFjayA9XG5mdW5jdGlvbihyZWFzb24sIHN5bmNocm9ub3VzLCBpZ25vcmVOb25FcnJvcldhcm5pbmdzKSB7XG4gICAgdmFyIHRyYWNlID0gdXRpbC5lbnN1cmVFcnJvck9iamVjdChyZWFzb24pO1xuICAgIHZhciBoYXNTdGFjayA9IHRyYWNlID09PSByZWFzb247XG4gICAgaWYgKCFoYXNTdGFjayAmJiAhaWdub3JlTm9uRXJyb3JXYXJuaW5ncyAmJiBkZWJ1Zy53YXJuaW5ncygpKSB7XG4gICAgICAgIHZhciBtZXNzYWdlID0gXCJhIHByb21pc2Ugd2FzIHJlamVjdGVkIHdpdGggYSBub24tZXJyb3I6IFwiICtcbiAgICAgICAgICAgIHV0aWwuY2xhc3NTdHJpbmcocmVhc29uKTtcbiAgICAgICAgdGhpcy5fd2FybihtZXNzYWdlLCB0cnVlKTtcbiAgICB9XG4gICAgdGhpcy5fYXR0YWNoRXh0cmFUcmFjZSh0cmFjZSwgc3luY2hyb25vdXMgPyBoYXNTdGFjayA6IGZhbHNlKTtcbiAgICB0aGlzLl9yZWplY3QocmVhc29uKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZXNvbHZlRnJvbUV4ZWN1dG9yID0gZnVuY3Rpb24gKGV4ZWN1dG9yKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzO1xuICAgIHRoaXMuX2NhcHR1cmVTdGFja1RyYWNlKCk7XG4gICAgdGhpcy5fcHVzaENvbnRleHQoKTtcbiAgICB2YXIgc3luY2hyb25vdXMgPSB0cnVlO1xuICAgIHZhciByID0gdGhpcy5fZXhlY3V0ZShleGVjdXRvciwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgcHJvbWlzZS5fcmVzb2x2ZUNhbGxiYWNrKHZhbHVlKTtcbiAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIHByb21pc2UuX3JlamVjdENhbGxiYWNrKHJlYXNvbiwgc3luY2hyb25vdXMpO1xuICAgIH0pO1xuICAgIHN5bmNocm9ub3VzID0gZmFsc2U7XG4gICAgdGhpcy5fcG9wQ29udGV4dCgpO1xuXG4gICAgaWYgKHIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9taXNlLl9yZWplY3RDYWxsYmFjayhyLCB0cnVlKTtcbiAgICB9XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0dGxlUHJvbWlzZUZyb21IYW5kbGVyID0gZnVuY3Rpb24gKFxuICAgIGhhbmRsZXIsIHJlY2VpdmVyLCB2YWx1ZSwgcHJvbWlzZVxuKSB7XG4gICAgdmFyIGJpdEZpZWxkID0gcHJvbWlzZS5fYml0RmllbGQ7XG4gICAgaWYgKCgoYml0RmllbGQgJiA2NTUzNikgIT09IDApKSByZXR1cm47XG4gICAgcHJvbWlzZS5fcHVzaENvbnRleHQoKTtcbiAgICB2YXIgeDtcbiAgICBpZiAocmVjZWl2ZXIgPT09IEFQUExZKSB7XG4gICAgICAgIGlmICghdmFsdWUgfHwgdHlwZW9mIHZhbHVlLmxlbmd0aCAhPT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgeCA9IGVycm9yT2JqO1xuICAgICAgICAgICAgeC5lID0gbmV3IFR5cGVFcnJvcihcImNhbm5vdCAuc3ByZWFkKCkgYSBub24tYXJyYXk6IFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWwuY2xhc3NTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHggPSB0cnlDYXRjaChoYW5kbGVyKS5hcHBseSh0aGlzLl9ib3VuZFZhbHVlKCksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHggPSB0cnlDYXRjaChoYW5kbGVyKS5jYWxsKHJlY2VpdmVyLCB2YWx1ZSk7XG4gICAgfVxuICAgIHZhciBwcm9taXNlQ3JlYXRlZCA9IHByb21pc2UuX3BvcENvbnRleHQoKTtcbiAgICBiaXRGaWVsZCA9IHByb21pc2UuX2JpdEZpZWxkO1xuICAgIGlmICgoKGJpdEZpZWxkICYgNjU1MzYpICE9PSAwKSkgcmV0dXJuO1xuXG4gICAgaWYgKHggPT09IE5FWFRfRklMVEVSKSB7XG4gICAgICAgIHByb21pc2UuX3JlamVjdCh2YWx1ZSk7XG4gICAgfSBlbHNlIGlmICh4ID09PSBlcnJvck9iaikge1xuICAgICAgICBwcm9taXNlLl9yZWplY3RDYWxsYmFjayh4LmUsIGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBkZWJ1Zy5jaGVja0ZvcmdvdHRlblJldHVybnMoeCwgcHJvbWlzZUNyZWF0ZWQsIFwiXCIsICBwcm9taXNlLCB0aGlzKTtcbiAgICAgICAgcHJvbWlzZS5fcmVzb2x2ZUNhbGxiYWNrKHgpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl90YXJnZXQgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgcmV0ID0gdGhpcztcbiAgICB3aGlsZSAocmV0Ll9pc0ZvbGxvd2luZygpKSByZXQgPSByZXQuX2ZvbGxvd2VlKCk7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9mb2xsb3dlZSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9yZWplY3Rpb25IYW5kbGVyMDtcbn07XG5cblByb21pc2UucHJvdG90eXBlLl9zZXRGb2xsb3dlZSA9IGZ1bmN0aW9uKHByb21pc2UpIHtcbiAgICB0aGlzLl9yZWplY3Rpb25IYW5kbGVyMCA9IHByb21pc2U7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0dGxlUHJvbWlzZSA9IGZ1bmN0aW9uKHByb21pc2UsIGhhbmRsZXIsIHJlY2VpdmVyLCB2YWx1ZSkge1xuICAgIHZhciBpc1Byb21pc2UgPSBwcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZTtcbiAgICB2YXIgYml0RmllbGQgPSB0aGlzLl9iaXRGaWVsZDtcbiAgICB2YXIgYXN5bmNHdWFyYW50ZWVkID0gKChiaXRGaWVsZCAmIDEzNDIxNzcyOCkgIT09IDApO1xuICAgIGlmICgoKGJpdEZpZWxkICYgNjU1MzYpICE9PSAwKSkge1xuICAgICAgICBpZiAoaXNQcm9taXNlKSBwcm9taXNlLl9pbnZva2VJbnRlcm5hbE9uQ2FuY2VsKCk7XG5cbiAgICAgICAgaWYgKHJlY2VpdmVyIGluc3RhbmNlb2YgUGFzc1Rocm91Z2hIYW5kbGVyQ29udGV4dCAmJlxuICAgICAgICAgICAgcmVjZWl2ZXIuaXNGaW5hbGx5SGFuZGxlcigpKSB7XG4gICAgICAgICAgICByZWNlaXZlci5jYW5jZWxQcm9taXNlID0gcHJvbWlzZTtcbiAgICAgICAgICAgIGlmICh0cnlDYXRjaChoYW5kbGVyKS5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgPT09IGVycm9yT2JqKSB7XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5fcmVqZWN0KGVycm9yT2JqLmUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPT09IHJlZmxlY3RIYW5kbGVyKSB7XG4gICAgICAgICAgICBwcm9taXNlLl9mdWxmaWxsKHJlZmxlY3RIYW5kbGVyLmNhbGwocmVjZWl2ZXIpKTtcbiAgICAgICAgfSBlbHNlIGlmIChyZWNlaXZlciBpbnN0YW5jZW9mIFByb3h5YWJsZSkge1xuICAgICAgICAgICAgcmVjZWl2ZXIuX3Byb21pc2VDYW5jZWxsZWQocHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNQcm9taXNlIHx8IHByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlQXJyYXkpIHtcbiAgICAgICAgICAgIHByb21pc2UuX2NhbmNlbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmVjZWl2ZXIuY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBoYW5kbGVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgaWYgKCFpc1Byb21pc2UpIHtcbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbChyZWNlaXZlciwgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGFzeW5jR3VhcmFudGVlZCkgcHJvbWlzZS5fc2V0QXN5bmNHdWFyYW50ZWVkKCk7XG4gICAgICAgICAgICB0aGlzLl9zZXR0bGVQcm9taXNlRnJvbUhhbmRsZXIoaGFuZGxlciwgcmVjZWl2ZXIsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmVjZWl2ZXIgaW5zdGFuY2VvZiBQcm94eWFibGUpIHtcbiAgICAgICAgaWYgKCFyZWNlaXZlci5faXNSZXNvbHZlZCgpKSB7XG4gICAgICAgICAgICBpZiAoKChiaXRGaWVsZCAmIDMzNTU0NDMyKSAhPT0gMCkpIHtcbiAgICAgICAgICAgICAgICByZWNlaXZlci5fcHJvbWlzZUZ1bGZpbGxlZCh2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVyLl9wcm9taXNlUmVqZWN0ZWQodmFsdWUsIHByb21pc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSBlbHNlIGlmIChpc1Byb21pc2UpIHtcbiAgICAgICAgaWYgKGFzeW5jR3VhcmFudGVlZCkgcHJvbWlzZS5fc2V0QXN5bmNHdWFyYW50ZWVkKCk7XG4gICAgICAgIGlmICgoKGJpdEZpZWxkICYgMzM1NTQ0MzIpICE9PSAwKSkge1xuICAgICAgICAgICAgcHJvbWlzZS5fZnVsZmlsbCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9taXNlLl9yZWplY3QodmFsdWUpO1xuICAgICAgICB9XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldHRsZVByb21pc2VMYXRlQ2FuY2VsbGF0aW9uT2JzZXJ2ZXIgPSBmdW5jdGlvbihjdHgpIHtcbiAgICB2YXIgaGFuZGxlciA9IGN0eC5oYW5kbGVyO1xuICAgIHZhciBwcm9taXNlID0gY3R4LnByb21pc2U7XG4gICAgdmFyIHJlY2VpdmVyID0gY3R4LnJlY2VpdmVyO1xuICAgIHZhciB2YWx1ZSA9IGN0eC52YWx1ZTtcbiAgICBpZiAodHlwZW9mIGhhbmRsZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBpZiAoIShwcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSkpIHtcbiAgICAgICAgICAgIGhhbmRsZXIuY2FsbChyZWNlaXZlciwgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fc2V0dGxlUHJvbWlzZUZyb21IYW5kbGVyKGhhbmRsZXIsIHJlY2VpdmVyLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHByb21pc2UuX3JlamVjdCh2YWx1ZSk7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldHRsZVByb21pc2VDdHggPSBmdW5jdGlvbihjdHgpIHtcbiAgICB0aGlzLl9zZXR0bGVQcm9taXNlKGN0eC5wcm9taXNlLCBjdHguaGFuZGxlciwgY3R4LnJlY2VpdmVyLCBjdHgudmFsdWUpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldHRsZVByb21pc2UwID0gZnVuY3Rpb24oaGFuZGxlciwgdmFsdWUsIGJpdEZpZWxkKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wcm9taXNlMDtcbiAgICB2YXIgcmVjZWl2ZXIgPSB0aGlzLl9yZWNlaXZlckF0KDApO1xuICAgIHRoaXMuX3Byb21pc2UwID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX3JlY2VpdmVyMCA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9zZXR0bGVQcm9taXNlKHByb21pc2UsIGhhbmRsZXIsIHJlY2VpdmVyLCB2YWx1ZSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fY2xlYXJDYWxsYmFja0RhdGFBdEluZGV4ID0gZnVuY3Rpb24oaW5kZXgpIHtcbiAgICB2YXIgYmFzZSA9IGluZGV4ICogNCAtIDQ7XG4gICAgdGhpc1tiYXNlICsgMl0gPVxuICAgIHRoaXNbYmFzZSArIDNdID1cbiAgICB0aGlzW2Jhc2UgKyAwXSA9XG4gICAgdGhpc1tiYXNlICsgMV0gPSB1bmRlZmluZWQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fZnVsZmlsbCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHZhciBiaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkO1xuICAgIGlmICgoKGJpdEZpZWxkICYgMTE3NTA2MDQ4KSA+Pj4gMTYpKSByZXR1cm47XG4gICAgaWYgKHZhbHVlID09PSB0aGlzKSB7XG4gICAgICAgIHZhciBlcnIgPSBtYWtlU2VsZlJlc29sdXRpb25FcnJvcigpO1xuICAgICAgICB0aGlzLl9hdHRhY2hFeHRyYVRyYWNlKGVycik7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWplY3QoZXJyKTtcbiAgICB9XG4gICAgdGhpcy5fc2V0RnVsZmlsbGVkKCk7XG4gICAgdGhpcy5fcmVqZWN0aW9uSGFuZGxlcjAgPSB2YWx1ZTtcblxuICAgIGlmICgoYml0RmllbGQgJiA2NTUzNSkgPiAwKSB7XG4gICAgICAgIGlmICgoKGJpdEZpZWxkICYgMTM0MjE3NzI4KSAhPT0gMCkpIHtcbiAgICAgICAgICAgIHRoaXMuX3NldHRsZVByb21pc2VzKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhc3luYy5zZXR0bGVQcm9taXNlcyh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZWplY3QgPSBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgdmFyIGJpdEZpZWxkID0gdGhpcy5fYml0RmllbGQ7XG4gICAgaWYgKCgoYml0RmllbGQgJiAxMTc1MDYwNDgpID4+PiAxNikpIHJldHVybjtcbiAgICB0aGlzLl9zZXRSZWplY3RlZCgpO1xuICAgIHRoaXMuX2Z1bGZpbGxtZW50SGFuZGxlcjAgPSByZWFzb247XG5cbiAgICBpZiAodGhpcy5faXNGaW5hbCgpKSB7XG4gICAgICAgIHJldHVybiBhc3luYy5mYXRhbEVycm9yKHJlYXNvbiwgdXRpbC5pc05vZGUpO1xuICAgIH1cblxuICAgIGlmICgoYml0RmllbGQgJiA2NTUzNSkgPiAwKSB7XG4gICAgICAgIGFzeW5jLnNldHRsZVByb21pc2VzKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2Vuc3VyZVBvc3NpYmxlUmVqZWN0aW9uSGFuZGxlZCgpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9mdWxmaWxsUHJvbWlzZXMgPSBmdW5jdGlvbiAobGVuLCB2YWx1ZSkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSB0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXJBdChpKTtcbiAgICAgICAgdmFyIHByb21pc2UgPSB0aGlzLl9wcm9taXNlQXQoaSk7XG4gICAgICAgIHZhciByZWNlaXZlciA9IHRoaXMuX3JlY2VpdmVyQXQoaSk7XG4gICAgICAgIHRoaXMuX2NsZWFyQ2FsbGJhY2tEYXRhQXRJbmRleChpKTtcbiAgICAgICAgdGhpcy5fc2V0dGxlUHJvbWlzZShwcm9taXNlLCBoYW5kbGVyLCByZWNlaXZlciwgdmFsdWUpO1xuICAgIH1cbn07XG5cblByb21pc2UucHJvdG90eXBlLl9yZWplY3RQcm9taXNlcyA9IGZ1bmN0aW9uIChsZW4sIHJlYXNvbikge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgdmFyIGhhbmRsZXIgPSB0aGlzLl9yZWplY3Rpb25IYW5kbGVyQXQoaSk7XG4gICAgICAgIHZhciBwcm9taXNlID0gdGhpcy5fcHJvbWlzZUF0KGkpO1xuICAgICAgICB2YXIgcmVjZWl2ZXIgPSB0aGlzLl9yZWNlaXZlckF0KGkpO1xuICAgICAgICB0aGlzLl9jbGVhckNhbGxiYWNrRGF0YUF0SW5kZXgoaSk7XG4gICAgICAgIHRoaXMuX3NldHRsZVByb21pc2UocHJvbWlzZSwgaGFuZGxlciwgcmVjZWl2ZXIsIHJlYXNvbik7XG4gICAgfVxufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuX3NldHRsZVByb21pc2VzID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBiaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkO1xuICAgIHZhciBsZW4gPSAoYml0RmllbGQgJiA2NTUzNSk7XG5cbiAgICBpZiAobGVuID4gMCkge1xuICAgICAgICBpZiAoKChiaXRGaWVsZCAmIDE2ODQyNzUyKSAhPT0gMCkpIHtcbiAgICAgICAgICAgIHZhciByZWFzb24gPSB0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXIwO1xuICAgICAgICAgICAgdGhpcy5fc2V0dGxlUHJvbWlzZTAodGhpcy5fcmVqZWN0aW9uSGFuZGxlcjAsIHJlYXNvbiwgYml0RmllbGQpO1xuICAgICAgICAgICAgdGhpcy5fcmVqZWN0UHJvbWlzZXMobGVuLCByZWFzb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5fcmVqZWN0aW9uSGFuZGxlcjA7XG4gICAgICAgICAgICB0aGlzLl9zZXR0bGVQcm9taXNlMCh0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXIwLCB2YWx1ZSwgYml0RmllbGQpO1xuICAgICAgICAgICAgdGhpcy5fZnVsZmlsbFByb21pc2VzKGxlbiwgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3NldExlbmd0aCgwKTtcbiAgICB9XG4gICAgdGhpcy5fY2xlYXJDYW5jZWxsYXRpb25EYXRhKCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fc2V0dGxlZFZhbHVlID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGJpdEZpZWxkID0gdGhpcy5fYml0RmllbGQ7XG4gICAgaWYgKCgoYml0RmllbGQgJiAzMzU1NDQzMikgIT09IDApKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZWplY3Rpb25IYW5kbGVyMDtcbiAgICB9IGVsc2UgaWYgKCgoYml0RmllbGQgJiAxNjc3NzIxNikgIT09IDApKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9mdWxmaWxsbWVudEhhbmRsZXIwO1xuICAgIH1cbn07XG5cbmZ1bmN0aW9uIGRlZmVyUmVzb2x2ZSh2KSB7dGhpcy5wcm9taXNlLl9yZXNvbHZlQ2FsbGJhY2sodik7fVxuZnVuY3Rpb24gZGVmZXJSZWplY3Qodikge3RoaXMucHJvbWlzZS5fcmVqZWN0Q2FsbGJhY2sodiwgZmFsc2UpO31cblxuUHJvbWlzZS5kZWZlciA9IFByb21pc2UucGVuZGluZyA9IGZ1bmN0aW9uKCkge1xuICAgIGRlYnVnLmRlcHJlY2F0ZWQoXCJQcm9taXNlLmRlZmVyXCIsIFwibmV3IFByb21pc2VcIik7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgcHJvbWlzZTogcHJvbWlzZSxcbiAgICAgICAgcmVzb2x2ZTogZGVmZXJSZXNvbHZlLFxuICAgICAgICByZWplY3Q6IGRlZmVyUmVqZWN0XG4gICAgfTtcbn07XG5cbnV0aWwubm90RW51bWVyYWJsZVByb3AoUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgXCJfbWFrZVNlbGZSZXNvbHV0aW9uRXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgbWFrZVNlbGZSZXNvbHV0aW9uRXJyb3IpO1xuXG5fZGVyZXFfKFwiLi9tZXRob2RcIikoUHJvbWlzZSwgSU5URVJOQUwsIHRyeUNvbnZlcnRUb1Byb21pc2UsIGFwaVJlamVjdGlvbixcbiAgICBkZWJ1Zyk7XG5fZGVyZXFfKFwiLi9iaW5kXCIpKFByb21pc2UsIElOVEVSTkFMLCB0cnlDb252ZXJ0VG9Qcm9taXNlLCBkZWJ1Zyk7XG5fZGVyZXFfKFwiLi9jYW5jZWxcIikoUHJvbWlzZSwgUHJvbWlzZUFycmF5LCBhcGlSZWplY3Rpb24sIGRlYnVnKTtcbl9kZXJlcV8oXCIuL2RpcmVjdF9yZXNvbHZlXCIpKFByb21pc2UpO1xuX2RlcmVxXyhcIi4vc3luY2hyb25vdXNfaW5zcGVjdGlvblwiKShQcm9taXNlKTtcbl9kZXJlcV8oXCIuL2pvaW5cIikoXG4gICAgUHJvbWlzZSwgUHJvbWlzZUFycmF5LCB0cnlDb252ZXJ0VG9Qcm9taXNlLCBJTlRFUk5BTCwgZGVidWcpO1xuUHJvbWlzZS5Qcm9taXNlID0gUHJvbWlzZTtcblByb21pc2UudmVyc2lvbiA9IFwiMy40LjBcIjtcbl9kZXJlcV8oJy4vbWFwLmpzJykoUHJvbWlzZSwgUHJvbWlzZUFycmF5LCBhcGlSZWplY3Rpb24sIHRyeUNvbnZlcnRUb1Byb21pc2UsIElOVEVSTkFMLCBkZWJ1Zyk7XG5fZGVyZXFfKCcuL2NhbGxfZ2V0LmpzJykoUHJvbWlzZSk7XG5fZGVyZXFfKCcuL3VzaW5nLmpzJykoUHJvbWlzZSwgYXBpUmVqZWN0aW9uLCB0cnlDb252ZXJ0VG9Qcm9taXNlLCBjcmVhdGVDb250ZXh0LCBJTlRFUk5BTCwgZGVidWcpO1xuX2RlcmVxXygnLi90aW1lcnMuanMnKShQcm9taXNlLCBJTlRFUk5BTCwgZGVidWcpO1xuX2RlcmVxXygnLi9nZW5lcmF0b3JzLmpzJykoUHJvbWlzZSwgYXBpUmVqZWN0aW9uLCBJTlRFUk5BTCwgdHJ5Q29udmVydFRvUHJvbWlzZSwgUHJveHlhYmxlLCBkZWJ1Zyk7XG5fZGVyZXFfKCcuL25vZGVpZnkuanMnKShQcm9taXNlKTtcbl9kZXJlcV8oJy4vcHJvbWlzaWZ5LmpzJykoUHJvbWlzZSwgSU5URVJOQUwpO1xuX2RlcmVxXygnLi9wcm9wcy5qcycpKFByb21pc2UsIFByb21pc2VBcnJheSwgdHJ5Q29udmVydFRvUHJvbWlzZSwgYXBpUmVqZWN0aW9uKTtcbl9kZXJlcV8oJy4vcmFjZS5qcycpKFByb21pc2UsIElOVEVSTkFMLCB0cnlDb252ZXJ0VG9Qcm9taXNlLCBhcGlSZWplY3Rpb24pO1xuX2RlcmVxXygnLi9yZWR1Y2UuanMnKShQcm9taXNlLCBQcm9taXNlQXJyYXksIGFwaVJlamVjdGlvbiwgdHJ5Q29udmVydFRvUHJvbWlzZSwgSU5URVJOQUwsIGRlYnVnKTtcbl9kZXJlcV8oJy4vc2V0dGxlLmpzJykoUHJvbWlzZSwgUHJvbWlzZUFycmF5LCBkZWJ1Zyk7XG5fZGVyZXFfKCcuL3NvbWUuanMnKShQcm9taXNlLCBQcm9taXNlQXJyYXksIGFwaVJlamVjdGlvbik7XG5fZGVyZXFfKCcuL2ZpbHRlci5qcycpKFByb21pc2UsIElOVEVSTkFMKTtcbl9kZXJlcV8oJy4vZWFjaC5qcycpKFByb21pc2UsIElOVEVSTkFMKTtcbl9kZXJlcV8oJy4vYW55LmpzJykoUHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICB1dGlsLnRvRmFzdFByb3BlcnRpZXMoUHJvbWlzZSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgdXRpbC50b0Zhc3RQcm9wZXJ0aWVzKFByb21pc2UucHJvdG90eXBlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIGZ1bmN0aW9uIGZpbGxUeXBlcyh2YWx1ZSkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgdmFyIHAgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHAuX2Z1bGZpbGxtZW50SGFuZGxlcjAgPSB2YWx1ZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICBwLl9yZWplY3Rpb25IYW5kbGVyMCA9IHZhbHVlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgcC5fcHJvbWlzZTAgPSB2YWx1ZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHAuX3JlY2VpdmVyMCA9IHZhbHVlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAvLyBDb21wbGV0ZSBzbGFjayB0cmFja2luZywgb3B0IG91dCBvZiBmaWVsZC10eXBlIHRyYWNraW5nIGFuZCAgICAgICAgICAgXG4gICAgLy8gc3RhYmlsaXplIG1hcCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIGZpbGxUeXBlcyh7YTogMX0pOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBmaWxsVHlwZXMoe2I6IDJ9KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgZmlsbFR5cGVzKHtjOiAzfSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIGZpbGxUeXBlcygxKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBmaWxsVHlwZXMoZnVuY3Rpb24oKXt9KTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgZmlsbFR5cGVzKHVuZGVmaW5lZCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgIGZpbGxUeXBlcyhmYWxzZSk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICBmaWxsVHlwZXMobmV3IFByb21pc2UoSU5URVJOQUwpKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgZGVidWcuc2V0Qm91bmRzKEFzeW5jLmZpcnN0TGluZUVycm9yLCB1dGlsLmxhc3RMaW5lRXJyb3IpOyAgICAgICAgICAgICAgIFxuICAgIHJldHVybiBQcm9taXNlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxufTtcblxufSx7XCIuL2FueS5qc1wiOjEsXCIuL2FzeW5jXCI6MixcIi4vYmluZFwiOjMsXCIuL2NhbGxfZ2V0LmpzXCI6NSxcIi4vY2FuY2VsXCI6NixcIi4vY2F0Y2hfZmlsdGVyXCI6NyxcIi4vY29udGV4dFwiOjgsXCIuL2RlYnVnZ2FiaWxpdHlcIjo5LFwiLi9kaXJlY3RfcmVzb2x2ZVwiOjEwLFwiLi9lYWNoLmpzXCI6MTEsXCIuL2Vycm9yc1wiOjEyLFwiLi9lczVcIjoxMyxcIi4vZmlsdGVyLmpzXCI6MTQsXCIuL2ZpbmFsbHlcIjoxNSxcIi4vZ2VuZXJhdG9ycy5qc1wiOjE2LFwiLi9qb2luXCI6MTcsXCIuL21hcC5qc1wiOjE4LFwiLi9tZXRob2RcIjoxOSxcIi4vbm9kZWJhY2tcIjoyMCxcIi4vbm9kZWlmeS5qc1wiOjIxLFwiLi9wcm9taXNlX2FycmF5XCI6MjMsXCIuL3Byb21pc2lmeS5qc1wiOjI0LFwiLi9wcm9wcy5qc1wiOjI1LFwiLi9yYWNlLmpzXCI6MjcsXCIuL3JlZHVjZS5qc1wiOjI4LFwiLi9zZXR0bGUuanNcIjozMCxcIi4vc29tZS5qc1wiOjMxLFwiLi9zeW5jaHJvbm91c19pbnNwZWN0aW9uXCI6MzIsXCIuL3RoZW5hYmxlc1wiOjMzLFwiLi90aW1lcnMuanNcIjozNCxcIi4vdXNpbmcuanNcIjozNSxcIi4vdXRpbFwiOjM2fV0sMjM6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIElOVEVSTkFMLCB0cnlDb252ZXJ0VG9Qcm9taXNlLFxuICAgIGFwaVJlamVjdGlvbiwgUHJveHlhYmxlKSB7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG52YXIgaXNBcnJheSA9IHV0aWwuaXNBcnJheTtcblxuZnVuY3Rpb24gdG9SZXNvbHV0aW9uVmFsdWUodmFsKSB7XG4gICAgc3dpdGNoKHZhbCkge1xuICAgIGNhc2UgLTI6IHJldHVybiBbXTtcbiAgICBjYXNlIC0zOiByZXR1cm4ge307XG4gICAgfVxufVxuXG5mdW5jdGlvbiBQcm9taXNlQXJyYXkodmFsdWVzKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIGlmICh2YWx1ZXMgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHByb21pc2UuX3Byb3BhZ2F0ZUZyb20odmFsdWVzLCAzKTtcbiAgICB9XG4gICAgcHJvbWlzZS5fc2V0T25DYW5jZWwodGhpcyk7XG4gICAgdGhpcy5fdmFsdWVzID0gdmFsdWVzO1xuICAgIHRoaXMuX2xlbmd0aCA9IDA7XG4gICAgdGhpcy5fdG90YWxSZXNvbHZlZCA9IDA7XG4gICAgdGhpcy5faW5pdCh1bmRlZmluZWQsIC0yKTtcbn1cbnV0aWwuaW5oZXJpdHMoUHJvbWlzZUFycmF5LCBQcm94eWFibGUpO1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLmxlbmd0aCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGVuZ3RoO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5wcm9taXNlID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5faW5pdCA9IGZ1bmN0aW9uIGluaXQoXywgcmVzb2x2ZVZhbHVlSWZFbXB0eSkge1xuICAgIHZhciB2YWx1ZXMgPSB0cnlDb252ZXJ0VG9Qcm9taXNlKHRoaXMuX3ZhbHVlcywgdGhpcy5fcHJvbWlzZSk7XG4gICAgaWYgKHZhbHVlcyBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgdmFsdWVzID0gdmFsdWVzLl90YXJnZXQoKTtcbiAgICAgICAgdmFyIGJpdEZpZWxkID0gdmFsdWVzLl9iaXRGaWVsZDtcbiAgICAgICAgO1xuICAgICAgICB0aGlzLl92YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgICAgICAgaWYgKCgoYml0RmllbGQgJiA1MDM5NzE4NCkgPT09IDApKSB7XG4gICAgICAgICAgICB0aGlzLl9wcm9taXNlLl9zZXRBc3luY0d1YXJhbnRlZWQoKTtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXMuX3RoZW4oXG4gICAgICAgICAgICAgICAgaW5pdCxcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWplY3QsXG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgICAgICAgcmVzb2x2ZVZhbHVlSWZFbXB0eVxuICAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKCgoYml0RmllbGQgJiAzMzU1NDQzMikgIT09IDApKSB7XG4gICAgICAgICAgICB2YWx1ZXMgPSB2YWx1ZXMuX3ZhbHVlKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoKChiaXRGaWVsZCAmIDE2Nzc3MjE2KSAhPT0gMCkpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWplY3QodmFsdWVzLl9yZWFzb24oKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFsdWVzID0gdXRpbC5hc0FycmF5KHZhbHVlcyk7XG4gICAgaWYgKHZhbHVlcyA9PT0gbnVsbCkge1xuICAgICAgICB2YXIgZXJyID0gYXBpUmVqZWN0aW9uKFxuICAgICAgICAgICAgXCJleHBlY3RpbmcgYW4gYXJyYXkgb3IgYW4gaXRlcmFibGUgb2JqZWN0IGJ1dCBnb3QgXCIgKyB1dGlsLmNsYXNzU3RyaW5nKHZhbHVlcykpLnJlYXNvbigpO1xuICAgICAgICB0aGlzLl9wcm9taXNlLl9yZWplY3RDYWxsYmFjayhlcnIsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGlmIChyZXNvbHZlVmFsdWVJZkVtcHR5ID09PSAtNSkge1xuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZUVtcHR5QXJyYXkoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUodG9SZXNvbHV0aW9uVmFsdWUocmVzb2x2ZVZhbHVlSWZFbXB0eSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5faXRlcmF0ZSh2YWx1ZXMpO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5faXRlcmF0ZSA9IGZ1bmN0aW9uKHZhbHVlcykge1xuICAgIHZhciBsZW4gPSB0aGlzLmdldEFjdHVhbExlbmd0aCh2YWx1ZXMubGVuZ3RoKTtcbiAgICB0aGlzLl9sZW5ndGggPSBsZW47XG4gICAgdGhpcy5fdmFsdWVzID0gdGhpcy5zaG91bGRDb3B5VmFsdWVzKCkgPyBuZXcgQXJyYXkobGVuKSA6IHRoaXMuX3ZhbHVlcztcbiAgICB2YXIgcmVzdWx0ID0gdGhpcy5fcHJvbWlzZTtcbiAgICB2YXIgaXNSZXNvbHZlZCA9IGZhbHNlO1xuICAgIHZhciBiaXRGaWVsZCA9IG51bGw7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gdHJ5Q29udmVydFRvUHJvbWlzZSh2YWx1ZXNbaV0sIHJlc3VsdCk7XG5cbiAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgIG1heWJlUHJvbWlzZSA9IG1heWJlUHJvbWlzZS5fdGFyZ2V0KCk7XG4gICAgICAgICAgICBiaXRGaWVsZCA9IG1heWJlUHJvbWlzZS5fYml0RmllbGQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiaXRGaWVsZCA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNSZXNvbHZlZCkge1xuICAgICAgICAgICAgaWYgKGJpdEZpZWxkICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgbWF5YmVQcm9taXNlLnN1cHByZXNzVW5oYW5kbGVkUmVqZWN0aW9ucygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGJpdEZpZWxkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoKChiaXRGaWVsZCAmIDUwMzk3MTg0KSA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICBtYXliZVByb21pc2UuX3Byb3h5KHRoaXMsIGkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX3ZhbHVlc1tpXSA9IG1heWJlUHJvbWlzZTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoKChiaXRGaWVsZCAmIDMzNTU0NDMyKSAhPT0gMCkpIHtcbiAgICAgICAgICAgICAgICBpc1Jlc29sdmVkID0gdGhpcy5fcHJvbWlzZUZ1bGZpbGxlZChtYXliZVByb21pc2UuX3ZhbHVlKCksIGkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICgoKGJpdEZpZWxkICYgMTY3NzcyMTYpICE9PSAwKSkge1xuICAgICAgICAgICAgICAgIGlzUmVzb2x2ZWQgPSB0aGlzLl9wcm9taXNlUmVqZWN0ZWQobWF5YmVQcm9taXNlLl9yZWFzb24oKSwgaSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlzUmVzb2x2ZWQgPSB0aGlzLl9wcm9taXNlQ2FuY2VsbGVkKGkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaXNSZXNvbHZlZCA9IHRoaXMuX3Byb21pc2VGdWxmaWxsZWQobWF5YmVQcm9taXNlLCBpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWlzUmVzb2x2ZWQpIHJlc3VsdC5fc2V0QXN5bmNHdWFyYW50ZWVkKCk7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9pc1Jlc29sdmVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZXMgPT09IG51bGw7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9yZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgdGhpcy5fdmFsdWVzID0gbnVsbDtcbiAgICB0aGlzLl9wcm9taXNlLl9mdWxmaWxsKHZhbHVlKTtcbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuX2NhbmNlbCA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9pc1Jlc29sdmVkKCkgfHwgIXRoaXMuX3Byb21pc2UuaXNDYW5jZWxsYWJsZSgpKSByZXR1cm47XG4gICAgdGhpcy5fdmFsdWVzID0gbnVsbDtcbiAgICB0aGlzLl9wcm9taXNlLl9jYW5jZWwoKTtcbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuX3JlamVjdCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICB0aGlzLl92YWx1ZXMgPSBudWxsO1xuICAgIHRoaXMuX3Byb21pc2UuX3JlamVjdENhbGxiYWNrKHJlYXNvbiwgZmFsc2UpO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZUZ1bGZpbGxlZCA9IGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICB0aGlzLl92YWx1ZXNbaW5kZXhdID0gdmFsdWU7XG4gICAgdmFyIHRvdGFsUmVzb2x2ZWQgPSArK3RoaXMuX3RvdGFsUmVzb2x2ZWQ7XG4gICAgaWYgKHRvdGFsUmVzb2x2ZWQgPj0gdGhpcy5fbGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuX3Jlc29sdmUodGhpcy5fdmFsdWVzKTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VDYW5jZWxsZWQgPSBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9jYW5jZWwoKTtcbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cblByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VSZWplY3RlZCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICB0aGlzLl90b3RhbFJlc29sdmVkKys7XG4gICAgdGhpcy5fcmVqZWN0KHJlYXNvbik7XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG5Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9yZXN1bHRDYW5jZWxsZWQgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm47XG4gICAgdmFyIHZhbHVlcyA9IHRoaXMuX3ZhbHVlcztcbiAgICB0aGlzLl9jYW5jZWwoKTtcbiAgICBpZiAodmFsdWVzIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICB2YWx1ZXMuY2FuY2VsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh2YWx1ZXNbaV0gaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzW2ldLmNhbmNlbCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5zaG91bGRDb3B5VmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0cnVlO1xufTtcblxuUHJvbWlzZUFycmF5LnByb3RvdHlwZS5nZXRBY3R1YWxMZW5ndGggPSBmdW5jdGlvbiAobGVuKSB7XG4gICAgcmV0dXJuIGxlbjtcbn07XG5cbnJldHVybiBQcm9taXNlQXJyYXk7XG59O1xuXG59LHtcIi4vdXRpbFwiOjM2fV0sMjQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIElOVEVSTkFMKSB7XG52YXIgVEhJUyA9IHt9O1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsXCIpO1xudmFyIG5vZGViYWNrRm9yUHJvbWlzZSA9IF9kZXJlcV8oXCIuL25vZGViYWNrXCIpO1xudmFyIHdpdGhBcHBlbmRlZCA9IHV0aWwud2l0aEFwcGVuZGVkO1xudmFyIG1heWJlV3JhcEFzRXJyb3IgPSB1dGlsLm1heWJlV3JhcEFzRXJyb3I7XG52YXIgY2FuRXZhbHVhdGUgPSB1dGlsLmNhbkV2YWx1YXRlO1xudmFyIFR5cGVFcnJvciA9IF9kZXJlcV8oXCIuL2Vycm9yc1wiKS5UeXBlRXJyb3I7XG52YXIgZGVmYXVsdFN1ZmZpeCA9IFwiQXN5bmNcIjtcbnZhciBkZWZhdWx0UHJvbWlzaWZpZWQgPSB7X19pc1Byb21pc2lmaWVkX186IHRydWV9O1xudmFyIG5vQ29weVByb3BzID0gW1xuICAgIFwiYXJpdHlcIiwgICAgXCJsZW5ndGhcIixcbiAgICBcIm5hbWVcIixcbiAgICBcImFyZ3VtZW50c1wiLFxuICAgIFwiY2FsbGVyXCIsXG4gICAgXCJjYWxsZWVcIixcbiAgICBcInByb3RvdHlwZVwiLFxuICAgIFwiX19pc1Byb21pc2lmaWVkX19cIlxuXTtcbnZhciBub0NvcHlQcm9wc1BhdHRlcm4gPSBuZXcgUmVnRXhwKFwiXig/OlwiICsgbm9Db3B5UHJvcHMuam9pbihcInxcIikgKyBcIikkXCIpO1xuXG52YXIgZGVmYXVsdEZpbHRlciA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdXRpbC5pc0lkZW50aWZpZXIobmFtZSkgJiZcbiAgICAgICAgbmFtZS5jaGFyQXQoMCkgIT09IFwiX1wiICYmXG4gICAgICAgIG5hbWUgIT09IFwiY29uc3RydWN0b3JcIjtcbn07XG5cbmZ1bmN0aW9uIHByb3BzRmlsdGVyKGtleSkge1xuICAgIHJldHVybiAhbm9Db3B5UHJvcHNQYXR0ZXJuLnRlc3Qoa2V5KTtcbn1cblxuZnVuY3Rpb24gaXNQcm9taXNpZmllZChmbikge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBmbi5fX2lzUHJvbWlzaWZpZWRfXyA9PT0gdHJ1ZTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaGFzUHJvbWlzaWZpZWQob2JqLCBrZXksIHN1ZmZpeCkge1xuICAgIHZhciB2YWwgPSB1dGlsLmdldERhdGFQcm9wZXJ0eU9yRGVmYXVsdChvYmosIGtleSArIHN1ZmZpeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFByb21pc2lmaWVkKTtcbiAgICByZXR1cm4gdmFsID8gaXNQcm9taXNpZmllZCh2YWwpIDogZmFsc2U7XG59XG5mdW5jdGlvbiBjaGVja1ZhbGlkKHJldCwgc3VmZml4LCBzdWZmaXhSZWdleHApIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7IGkgKz0gMikge1xuICAgICAgICB2YXIga2V5ID0gcmV0W2ldO1xuICAgICAgICBpZiAoc3VmZml4UmVnZXhwLnRlc3Qoa2V5KSkge1xuICAgICAgICAgICAgdmFyIGtleVdpdGhvdXRBc3luY1N1ZmZpeCA9IGtleS5yZXBsYWNlKHN1ZmZpeFJlZ2V4cCwgXCJcIik7XG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHJldC5sZW5ndGg7IGogKz0gMikge1xuICAgICAgICAgICAgICAgIGlmIChyZXRbal0gPT09IGtleVdpdGhvdXRBc3luY1N1ZmZpeCkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHByb21pc2lmeSBhbiBBUEkgdGhhdCBoYXMgbm9ybWFsIG1ldGhvZHMgd2l0aCAnJXMnLXN1ZmZpeFxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL01xckZtWFxcdTAwMGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoXCIlc1wiLCBzdWZmaXgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmZ1bmN0aW9uIHByb21pc2lmaWFibGVNZXRob2RzKG9iaiwgc3VmZml4LCBzdWZmaXhSZWdleHAsIGZpbHRlcikge1xuICAgIHZhciBrZXlzID0gdXRpbC5pbmhlcml0ZWREYXRhS2V5cyhvYmopO1xuICAgIHZhciByZXQgPSBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIHZhciB2YWx1ZSA9IG9ialtrZXldO1xuICAgICAgICB2YXIgcGFzc2VzRGVmYXVsdEZpbHRlciA9IGZpbHRlciA9PT0gZGVmYXVsdEZpbHRlclxuICAgICAgICAgICAgPyB0cnVlIDogZGVmYXVsdEZpbHRlcihrZXksIHZhbHVlLCBvYmopO1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgICAgICFpc1Byb21pc2lmaWVkKHZhbHVlKSAmJlxuICAgICAgICAgICAgIWhhc1Byb21pc2lmaWVkKG9iaiwga2V5LCBzdWZmaXgpICYmXG4gICAgICAgICAgICBmaWx0ZXIoa2V5LCB2YWx1ZSwgb2JqLCBwYXNzZXNEZWZhdWx0RmlsdGVyKSkge1xuICAgICAgICAgICAgcmV0LnB1c2goa2V5LCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hlY2tWYWxpZChyZXQsIHN1ZmZpeCwgc3VmZml4UmVnZXhwKTtcbiAgICByZXR1cm4gcmV0O1xufVxuXG52YXIgZXNjYXBlSWRlbnRSZWdleCA9IGZ1bmN0aW9uKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFskXSkvLCBcIlxcXFwkXCIpO1xufTtcblxudmFyIG1ha2VOb2RlUHJvbWlzaWZpZWRFdmFsO1xuaWYgKCF0cnVlKSB7XG52YXIgc3dpdGNoQ2FzZUFyZ3VtZW50T3JkZXIgPSBmdW5jdGlvbihsaWtlbHlBcmd1bWVudENvdW50KSB7XG4gICAgdmFyIHJldCA9IFtsaWtlbHlBcmd1bWVudENvdW50XTtcbiAgICB2YXIgbWluID0gTWF0aC5tYXgoMCwgbGlrZWx5QXJndW1lbnRDb3VudCAtIDEgLSAzKTtcbiAgICBmb3IodmFyIGkgPSBsaWtlbHlBcmd1bWVudENvdW50IC0gMTsgaSA+PSBtaW47IC0taSkge1xuICAgICAgICByZXQucHVzaChpKTtcbiAgICB9XG4gICAgZm9yKHZhciBpID0gbGlrZWx5QXJndW1lbnRDb3VudCArIDE7IGkgPD0gMzsgKytpKSB7XG4gICAgICAgIHJldC5wdXNoKGkpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufTtcblxudmFyIGFyZ3VtZW50U2VxdWVuY2UgPSBmdW5jdGlvbihhcmd1bWVudENvdW50KSB7XG4gICAgcmV0dXJuIHV0aWwuZmlsbGVkUmFuZ2UoYXJndW1lbnRDb3VudCwgXCJfYXJnXCIsIFwiXCIpO1xufTtcblxudmFyIHBhcmFtZXRlckRlY2xhcmF0aW9uID0gZnVuY3Rpb24ocGFyYW1ldGVyQ291bnQpIHtcbiAgICByZXR1cm4gdXRpbC5maWxsZWRSYW5nZShcbiAgICAgICAgTWF0aC5tYXgocGFyYW1ldGVyQ291bnQsIDMpLCBcIl9hcmdcIiwgXCJcIik7XG59O1xuXG52YXIgcGFyYW1ldGVyQ291bnQgPSBmdW5jdGlvbihmbikge1xuICAgIGlmICh0eXBlb2YgZm4ubGVuZ3RoID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbihmbi5sZW5ndGgsIDEwMjMgKyAxKSwgMCk7XG4gICAgfVxuICAgIHJldHVybiAwO1xufTtcblxubWFrZU5vZGVQcm9taXNpZmllZEV2YWwgPVxuZnVuY3Rpb24oY2FsbGJhY2ssIHJlY2VpdmVyLCBvcmlnaW5hbE5hbWUsIGZuLCBfLCBtdWx0aUFyZ3MpIHtcbiAgICB2YXIgbmV3UGFyYW1ldGVyQ291bnQgPSBNYXRoLm1heCgwLCBwYXJhbWV0ZXJDb3VudChmbikgLSAxKTtcbiAgICB2YXIgYXJndW1lbnRPcmRlciA9IHN3aXRjaENhc2VBcmd1bWVudE9yZGVyKG5ld1BhcmFtZXRlckNvdW50KTtcbiAgICB2YXIgc2hvdWxkUHJveHlUaGlzID0gdHlwZW9mIGNhbGxiYWNrID09PSBcInN0cmluZ1wiIHx8IHJlY2VpdmVyID09PSBUSElTO1xuXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDYWxsRm9yQXJndW1lbnRDb3VudChjb3VudCkge1xuICAgICAgICB2YXIgYXJncyA9IGFyZ3VtZW50U2VxdWVuY2UoY291bnQpLmpvaW4oXCIsIFwiKTtcbiAgICAgICAgdmFyIGNvbW1hID0gY291bnQgPiAwID8gXCIsIFwiIDogXCJcIjtcbiAgICAgICAgdmFyIHJldDtcbiAgICAgICAgaWYgKHNob3VsZFByb3h5VGhpcykge1xuICAgICAgICAgICAgcmV0ID0gXCJyZXQgPSBjYWxsYmFjay5jYWxsKHRoaXMsIHt7YXJnc319LCBub2RlYmFjayk7IGJyZWFrO1xcblwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0ID0gcmVjZWl2ZXIgPT09IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgID8gXCJyZXQgPSBjYWxsYmFjayh7e2FyZ3N9fSwgbm9kZWJhY2spOyBicmVhaztcXG5cIlxuICAgICAgICAgICAgICAgIDogXCJyZXQgPSBjYWxsYmFjay5jYWxsKHJlY2VpdmVyLCB7e2FyZ3N9fSwgbm9kZWJhY2spOyBicmVhaztcXG5cIjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0LnJlcGxhY2UoXCJ7e2FyZ3N9fVwiLCBhcmdzKS5yZXBsYWNlKFwiLCBcIiwgY29tbWEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQXJndW1lbnRTd2l0Y2hDYXNlKCkge1xuICAgICAgICB2YXIgcmV0ID0gXCJcIjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudE9yZGVyLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICByZXQgKz0gXCJjYXNlIFwiICsgYXJndW1lbnRPcmRlcltpXSArXCI6XCIgK1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlQ2FsbEZvckFyZ3VtZW50Q291bnQoYXJndW1lbnRPcmRlcltpXSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXQgKz0gXCIgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgZGVmYXVsdDogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGxlbiArIDEpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIHZhciBpID0gMDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGFyZ3NbaV0gPSBub2RlYmFjazsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIFtDb2RlRm9yQ2FsbF0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgICAgIGJyZWFrOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXFxuXFxcbiAgICAgICAgXCIucmVwbGFjZShcIltDb2RlRm9yQ2FsbF1cIiwgKHNob3VsZFByb3h5VGhpc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmV0ID0gY2FsbGJhY2suYXBwbHkodGhpcywgYXJncyk7XFxuXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInJldCA9IGNhbGxiYWNrLmFwcGx5KHJlY2VpdmVyLCBhcmdzKTtcXG5cIikpO1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgIH1cblxuICAgIHZhciBnZXRGdW5jdGlvbkNvZGUgPSB0eXBlb2YgY2FsbGJhY2sgPT09IFwic3RyaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAoXCJ0aGlzICE9IG51bGwgPyB0aGlzWydcIitjYWxsYmFjaytcIiddIDogZm5cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcImZuXCI7XG4gICAgdmFyIGJvZHkgPSBcIid1c2Ugc3RyaWN0JzsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICB2YXIgcmV0ID0gZnVuY3Rpb24gKFBhcmFtZXRlcnMpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgJ3VzZSBzdHJpY3QnOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgdmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgcHJvbWlzZS5fY2FwdHVyZVN0YWNrVHJhY2UoKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcXG5cXFxuICAgICAgICAgICAgdmFyIG5vZGViYWNrID0gbm9kZWJhY2tGb3JQcm9taXNlKHByb21pc2UsIFwiICsgbXVsdGlBcmdzICsgXCIpOyAgIFxcblxcXG4gICAgICAgICAgICB2YXIgcmV0OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSB0cnlDYXRjaChbR2V0RnVuY3Rpb25Db2RlXSk7ICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBzd2l0Y2gobGVuKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgW0NvZGVGb3JTd2l0Y2hDYXNlXSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBpZiAocmV0ID09PSBlcnJvck9iaikgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICAgICAgcHJvbWlzZS5fcmVqZWN0Q2FsbGJhY2sobWF5YmVXcmFwQXNFcnJvcihyZXQuZSksIHRydWUsIHRydWUpO1xcblxcXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgICAgICBpZiAoIXByb21pc2UuX2lzRmF0ZVNlYWxlZCgpKSBwcm9taXNlLl9zZXRBc3luY0d1YXJhbnRlZWQoKTsgICAgIFxcblxcXG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIH07ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIG5vdEVudW1lcmFibGVQcm9wKHJldCwgJ19faXNQcm9taXNpZmllZF9fJywgdHJ1ZSk7ICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgICAgIHJldHVybiByZXQ7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxcblxcXG4gICAgXCIucmVwbGFjZShcIltDb2RlRm9yU3dpdGNoQ2FzZV1cIiwgZ2VuZXJhdGVBcmd1bWVudFN3aXRjaENhc2UoKSlcbiAgICAgICAgLnJlcGxhY2UoXCJbR2V0RnVuY3Rpb25Db2RlXVwiLCBnZXRGdW5jdGlvbkNvZGUpO1xuICAgIGJvZHkgPSBib2R5LnJlcGxhY2UoXCJQYXJhbWV0ZXJzXCIsIHBhcmFtZXRlckRlY2xhcmF0aW9uKG5ld1BhcmFtZXRlckNvdW50KSk7XG4gICAgcmV0dXJuIG5ldyBGdW5jdGlvbihcIlByb21pc2VcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicmVjZWl2ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2l0aEFwcGVuZGVkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm1heWJlV3JhcEFzRXJyb3JcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibm9kZWJhY2tGb3JQcm9taXNlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRyeUNhdGNoXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImVycm9yT2JqXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5vdEVudW1lcmFibGVQcm9wXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIklOVEVSTkFMXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5KShcbiAgICAgICAgICAgICAgICAgICAgUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgZm4sXG4gICAgICAgICAgICAgICAgICAgIHJlY2VpdmVyLFxuICAgICAgICAgICAgICAgICAgICB3aXRoQXBwZW5kZWQsXG4gICAgICAgICAgICAgICAgICAgIG1heWJlV3JhcEFzRXJyb3IsXG4gICAgICAgICAgICAgICAgICAgIG5vZGViYWNrRm9yUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgdXRpbC50cnlDYXRjaCxcbiAgICAgICAgICAgICAgICAgICAgdXRpbC5lcnJvck9iaixcbiAgICAgICAgICAgICAgICAgICAgdXRpbC5ub3RFbnVtZXJhYmxlUHJvcCxcbiAgICAgICAgICAgICAgICAgICAgSU5URVJOQUwpO1xufTtcbn1cblxuZnVuY3Rpb24gbWFrZU5vZGVQcm9taXNpZmllZENsb3N1cmUoY2FsbGJhY2ssIHJlY2VpdmVyLCBfLCBmbiwgX18sIG11bHRpQXJncykge1xuICAgIHZhciBkZWZhdWx0VGhpcyA9IChmdW5jdGlvbigpIHtyZXR1cm4gdGhpczt9KSgpO1xuICAgIHZhciBtZXRob2QgPSBjYWxsYmFjaztcbiAgICBpZiAodHlwZW9mIG1ldGhvZCA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBjYWxsYmFjayA9IGZuO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwcm9taXNpZmllZCgpIHtcbiAgICAgICAgdmFyIF9yZWNlaXZlciA9IHJlY2VpdmVyO1xuICAgICAgICBpZiAocmVjZWl2ZXIgPT09IFRISVMpIF9yZWNlaXZlciA9IHRoaXM7XG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgICAgICBwcm9taXNlLl9jYXB0dXJlU3RhY2tUcmFjZSgpO1xuICAgICAgICB2YXIgY2IgPSB0eXBlb2YgbWV0aG9kID09PSBcInN0cmluZ1wiICYmIHRoaXMgIT09IGRlZmF1bHRUaGlzXG4gICAgICAgICAgICA/IHRoaXNbbWV0aG9kXSA6IGNhbGxiYWNrO1xuICAgICAgICB2YXIgZm4gPSBub2RlYmFja0ZvclByb21pc2UocHJvbWlzZSwgbXVsdGlBcmdzKTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNiLmFwcGx5KF9yZWNlaXZlciwgd2l0aEFwcGVuZGVkKGFyZ3VtZW50cywgZm4pKTtcbiAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICBwcm9taXNlLl9yZWplY3RDYWxsYmFjayhtYXliZVdyYXBBc0Vycm9yKGUpLCB0cnVlLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXByb21pc2UuX2lzRmF0ZVNlYWxlZCgpKSBwcm9taXNlLl9zZXRBc3luY0d1YXJhbnRlZWQoKTtcbiAgICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfVxuICAgIHV0aWwubm90RW51bWVyYWJsZVByb3AocHJvbWlzaWZpZWQsIFwiX19pc1Byb21pc2lmaWVkX19cIiwgdHJ1ZSk7XG4gICAgcmV0dXJuIHByb21pc2lmaWVkO1xufVxuXG52YXIgbWFrZU5vZGVQcm9taXNpZmllZCA9IGNhbkV2YWx1YXRlXG4gICAgPyBtYWtlTm9kZVByb21pc2lmaWVkRXZhbFxuICAgIDogbWFrZU5vZGVQcm9taXNpZmllZENsb3N1cmU7XG5cbmZ1bmN0aW9uIHByb21pc2lmeUFsbChvYmosIHN1ZmZpeCwgZmlsdGVyLCBwcm9taXNpZmllciwgbXVsdGlBcmdzKSB7XG4gICAgdmFyIHN1ZmZpeFJlZ2V4cCA9IG5ldyBSZWdFeHAoZXNjYXBlSWRlbnRSZWdleChzdWZmaXgpICsgXCIkXCIpO1xuICAgIHZhciBtZXRob2RzID1cbiAgICAgICAgcHJvbWlzaWZpYWJsZU1ldGhvZHMob2JqLCBzdWZmaXgsIHN1ZmZpeFJlZ2V4cCwgZmlsdGVyKTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBtZXRob2RzLmxlbmd0aDsgaSA8IGxlbjsgaSs9IDIpIHtcbiAgICAgICAgdmFyIGtleSA9IG1ldGhvZHNbaV07XG4gICAgICAgIHZhciBmbiA9IG1ldGhvZHNbaSsxXTtcbiAgICAgICAgdmFyIHByb21pc2lmaWVkS2V5ID0ga2V5ICsgc3VmZml4O1xuICAgICAgICBpZiAocHJvbWlzaWZpZXIgPT09IG1ha2VOb2RlUHJvbWlzaWZpZWQpIHtcbiAgICAgICAgICAgIG9ialtwcm9taXNpZmllZEtleV0gPVxuICAgICAgICAgICAgICAgIG1ha2VOb2RlUHJvbWlzaWZpZWQoa2V5LCBUSElTLCBrZXksIGZuLCBzdWZmaXgsIG11bHRpQXJncyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzaWZpZWQgPSBwcm9taXNpZmllcihmbiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1ha2VOb2RlUHJvbWlzaWZpZWQoa2V5LCBUSElTLCBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm4sIHN1ZmZpeCwgbXVsdGlBcmdzKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdXRpbC5ub3RFbnVtZXJhYmxlUHJvcChwcm9taXNpZmllZCwgXCJfX2lzUHJvbWlzaWZpZWRfX1wiLCB0cnVlKTtcbiAgICAgICAgICAgIG9ialtwcm9taXNpZmllZEtleV0gPSBwcm9taXNpZmllZDtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1dGlsLnRvRmFzdFByb3BlcnRpZXMob2JqKTtcbiAgICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiBwcm9taXNpZnkoY2FsbGJhY2ssIHJlY2VpdmVyLCBtdWx0aUFyZ3MpIHtcbiAgICByZXR1cm4gbWFrZU5vZGVQcm9taXNpZmllZChjYWxsYmFjaywgcmVjZWl2ZXIsIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2ssIG51bGwsIG11bHRpQXJncyk7XG59XG5cblByb21pc2UucHJvbWlzaWZ5ID0gZnVuY3Rpb24gKGZuLCBvcHRpb25zKSB7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJleHBlY3RpbmcgYSBmdW5jdGlvbiBidXQgZ290IFwiICsgdXRpbC5jbGFzc1N0cmluZyhmbikpO1xuICAgIH1cbiAgICBpZiAoaXNQcm9taXNpZmllZChmbikpIHtcbiAgICAgICAgcmV0dXJuIGZuO1xuICAgIH1cbiAgICBvcHRpb25zID0gT2JqZWN0KG9wdGlvbnMpO1xuICAgIHZhciByZWNlaXZlciA9IG9wdGlvbnMuY29udGV4dCA9PT0gdW5kZWZpbmVkID8gVEhJUyA6IG9wdGlvbnMuY29udGV4dDtcbiAgICB2YXIgbXVsdGlBcmdzID0gISFvcHRpb25zLm11bHRpQXJncztcbiAgICB2YXIgcmV0ID0gcHJvbWlzaWZ5KGZuLCByZWNlaXZlciwgbXVsdGlBcmdzKTtcbiAgICB1dGlsLmNvcHlEZXNjcmlwdG9ycyhmbiwgcmV0LCBwcm9wc0ZpbHRlcik7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblByb21pc2UucHJvbWlzaWZ5QWxsID0gZnVuY3Rpb24gKHRhcmdldCwgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIHRhcmdldCAhPT0gXCJvYmplY3RcIikge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwidGhlIHRhcmdldCBvZiBwcm9taXNpZnlBbGwgbXVzdCBiZSBhbiBvYmplY3Qgb3IgYSBmdW5jdGlvblxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL01xckZtWFxcdTAwMGFcIik7XG4gICAgfVxuICAgIG9wdGlvbnMgPSBPYmplY3Qob3B0aW9ucyk7XG4gICAgdmFyIG11bHRpQXJncyA9ICEhb3B0aW9ucy5tdWx0aUFyZ3M7XG4gICAgdmFyIHN1ZmZpeCA9IG9wdGlvbnMuc3VmZml4O1xuICAgIGlmICh0eXBlb2Ygc3VmZml4ICE9PSBcInN0cmluZ1wiKSBzdWZmaXggPSBkZWZhdWx0U3VmZml4O1xuICAgIHZhciBmaWx0ZXIgPSBvcHRpb25zLmZpbHRlcjtcbiAgICBpZiAodHlwZW9mIGZpbHRlciAhPT0gXCJmdW5jdGlvblwiKSBmaWx0ZXIgPSBkZWZhdWx0RmlsdGVyO1xuICAgIHZhciBwcm9taXNpZmllciA9IG9wdGlvbnMucHJvbWlzaWZpZXI7XG4gICAgaWYgKHR5cGVvZiBwcm9taXNpZmllciAhPT0gXCJmdW5jdGlvblwiKSBwcm9taXNpZmllciA9IG1ha2VOb2RlUHJvbWlzaWZpZWQ7XG5cbiAgICBpZiAoIXV0aWwuaXNJZGVudGlmaWVyKHN1ZmZpeCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJzdWZmaXggbXVzdCBiZSBhIHZhbGlkIGlkZW50aWZpZXJcXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9NcXJGbVhcXHUwMDBhXCIpO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0gdXRpbC5pbmhlcml0ZWREYXRhS2V5cyh0YXJnZXQpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7ICsraSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0YXJnZXRba2V5c1tpXV07XG4gICAgICAgIGlmIChrZXlzW2ldICE9PSBcImNvbnN0cnVjdG9yXCIgJiZcbiAgICAgICAgICAgIHV0aWwuaXNDbGFzcyh2YWx1ZSkpIHtcbiAgICAgICAgICAgIHByb21pc2lmeUFsbCh2YWx1ZS5wcm90b3R5cGUsIHN1ZmZpeCwgZmlsdGVyLCBwcm9taXNpZmllcixcbiAgICAgICAgICAgICAgICBtdWx0aUFyZ3MpO1xuICAgICAgICAgICAgcHJvbWlzaWZ5QWxsKHZhbHVlLCBzdWZmaXgsIGZpbHRlciwgcHJvbWlzaWZpZXIsIG11bHRpQXJncyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzaWZ5QWxsKHRhcmdldCwgc3VmZml4LCBmaWx0ZXIsIHByb21pc2lmaWVyLCBtdWx0aUFyZ3MpO1xufTtcbn07XG5cblxufSx7XCIuL2Vycm9yc1wiOjEyLFwiLi9ub2RlYmFja1wiOjIwLFwiLi91dGlsXCI6MzZ9XSwyNTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oXG4gICAgUHJvbWlzZSwgUHJvbWlzZUFycmF5LCB0cnlDb252ZXJ0VG9Qcm9taXNlLCBhcGlSZWplY3Rpb24pIHtcbnZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbFwiKTtcbnZhciBpc09iamVjdCA9IHV0aWwuaXNPYmplY3Q7XG52YXIgZXM1ID0gX2RlcmVxXyhcIi4vZXM1XCIpO1xudmFyIEVzNk1hcDtcbmlmICh0eXBlb2YgTWFwID09PSBcImZ1bmN0aW9uXCIpIEVzNk1hcCA9IE1hcDtcblxudmFyIG1hcFRvRW50cmllcyA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgaW5kZXggPSAwO1xuICAgIHZhciBzaXplID0gMDtcblxuICAgIGZ1bmN0aW9uIGV4dHJhY3RFbnRyeSh2YWx1ZSwga2V5KSB7XG4gICAgICAgIHRoaXNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgIHRoaXNbaW5kZXggKyBzaXplXSA9IGtleTtcbiAgICAgICAgaW5kZXgrKztcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gbWFwVG9FbnRyaWVzKG1hcCkge1xuICAgICAgICBzaXplID0gbWFwLnNpemU7XG4gICAgICAgIGluZGV4ID0gMDtcbiAgICAgICAgdmFyIHJldCA9IG5ldyBBcnJheShtYXAuc2l6ZSAqIDIpO1xuICAgICAgICBtYXAuZm9yRWFjaChleHRyYWN0RW50cnksIHJldCk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcbn0pKCk7XG5cbnZhciBlbnRyaWVzVG9NYXAgPSBmdW5jdGlvbihlbnRyaWVzKSB7XG4gICAgdmFyIHJldCA9IG5ldyBFczZNYXAoKTtcbiAgICB2YXIgbGVuZ3RoID0gZW50cmllcy5sZW5ndGggLyAyIHwgMDtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB7XG4gICAgICAgIHZhciBrZXkgPSBlbnRyaWVzW2xlbmd0aCArIGldO1xuICAgICAgICB2YXIgdmFsdWUgPSBlbnRyaWVzW2ldO1xuICAgICAgICByZXQuc2V0KGtleSwgdmFsdWUpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufTtcblxuZnVuY3Rpb24gUHJvcGVydGllc1Byb21pc2VBcnJheShvYmopIHtcbiAgICB2YXIgaXNNYXAgPSBmYWxzZTtcbiAgICB2YXIgZW50cmllcztcbiAgICBpZiAoRXM2TWFwICE9PSB1bmRlZmluZWQgJiYgb2JqIGluc3RhbmNlb2YgRXM2TWFwKSB7XG4gICAgICAgIGVudHJpZXMgPSBtYXBUb0VudHJpZXMob2JqKTtcbiAgICAgICAgaXNNYXAgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBrZXlzID0gZXM1LmtleXMob2JqKTtcbiAgICAgICAgdmFyIGxlbiA9IGtleXMubGVuZ3RoO1xuICAgICAgICBlbnRyaWVzID0gbmV3IEFycmF5KGxlbiAqIDIpO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICAgIGVudHJpZXNbaV0gPSBvYmpba2V5XTtcbiAgICAgICAgICAgIGVudHJpZXNbaSArIGxlbl0gPSBrZXk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5jb25zdHJ1Y3RvciQoZW50cmllcyk7XG4gICAgdGhpcy5faXNNYXAgPSBpc01hcDtcbiAgICB0aGlzLl9pbml0JCh1bmRlZmluZWQsIC0zKTtcbn1cbnV0aWwuaW5oZXJpdHMoUHJvcGVydGllc1Byb21pc2VBcnJheSwgUHJvbWlzZUFycmF5KTtcblxuUHJvcGVydGllc1Byb21pc2VBcnJheS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbiAoKSB7fTtcblxuUHJvcGVydGllc1Byb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VGdWxmaWxsZWQgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgdGhpcy5fdmFsdWVzW2luZGV4XSA9IHZhbHVlO1xuICAgIHZhciB0b3RhbFJlc29sdmVkID0gKyt0aGlzLl90b3RhbFJlc29sdmVkO1xuICAgIGlmICh0b3RhbFJlc29sdmVkID49IHRoaXMuX2xlbmd0aCkge1xuICAgICAgICB2YXIgdmFsO1xuICAgICAgICBpZiAodGhpcy5faXNNYXApIHtcbiAgICAgICAgICAgIHZhbCA9IGVudHJpZXNUb01hcCh0aGlzLl92YWx1ZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFsID0ge307XG4gICAgICAgICAgICB2YXIga2V5T2Zmc2V0ID0gdGhpcy5sZW5ndGgoKTtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSB0aGlzLmxlbmd0aCgpOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgICAgICB2YWxbdGhpcy5fdmFsdWVzW2kgKyBrZXlPZmZzZXRdXSA9IHRoaXMuX3ZhbHVlc1tpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZXNvbHZlKHZhbCk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5Qcm9wZXJ0aWVzUHJvbWlzZUFycmF5LnByb3RvdHlwZS5zaG91bGRDb3B5VmFsdWVzID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBmYWxzZTtcbn07XG5cblByb3BlcnRpZXNQcm9taXNlQXJyYXkucHJvdG90eXBlLmdldEFjdHVhbExlbmd0aCA9IGZ1bmN0aW9uIChsZW4pIHtcbiAgICByZXR1cm4gbGVuID4+IDE7XG59O1xuXG5mdW5jdGlvbiBwcm9wcyhwcm9taXNlcykge1xuICAgIHZhciByZXQ7XG4gICAgdmFyIGNhc3RWYWx1ZSA9IHRyeUNvbnZlcnRUb1Byb21pc2UocHJvbWlzZXMpO1xuXG4gICAgaWYgKCFpc09iamVjdChjYXN0VmFsdWUpKSB7XG4gICAgICAgIHJldHVybiBhcGlSZWplY3Rpb24oXCJjYW5ub3QgYXdhaXQgcHJvcGVydGllcyBvZiBhIG5vbi1vYmplY3RcXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9NcXJGbVhcXHUwMDBhXCIpO1xuICAgIH0gZWxzZSBpZiAoY2FzdFZhbHVlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICByZXQgPSBjYXN0VmFsdWUuX3RoZW4oXG4gICAgICAgICAgICBQcm9taXNlLnByb3BzLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldCA9IG5ldyBQcm9wZXJ0aWVzUHJvbWlzZUFycmF5KGNhc3RWYWx1ZSkucHJvbWlzZSgpO1xuICAgIH1cblxuICAgIGlmIChjYXN0VmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHJldC5fcHJvcGFnYXRlRnJvbShjYXN0VmFsdWUsIDIpO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS5wcm9wcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcHJvcHModGhpcyk7XG59O1xuXG5Qcm9taXNlLnByb3BzID0gZnVuY3Rpb24gKHByb21pc2VzKSB7XG4gICAgcmV0dXJuIHByb3BzKHByb21pc2VzKTtcbn07XG59O1xuXG59LHtcIi4vZXM1XCI6MTMsXCIuL3V0aWxcIjozNn1dLDI2OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xuZnVuY3Rpb24gYXJyYXlNb3ZlKHNyYywgc3JjSW5kZXgsIGRzdCwgZHN0SW5kZXgsIGxlbikge1xuICAgIGZvciAodmFyIGogPSAwOyBqIDwgbGVuOyArK2opIHtcbiAgICAgICAgZHN0W2ogKyBkc3RJbmRleF0gPSBzcmNbaiArIHNyY0luZGV4XTtcbiAgICAgICAgc3JjW2ogKyBzcmNJbmRleF0gPSB2b2lkIDA7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBRdWV1ZShjYXBhY2l0eSkge1xuICAgIHRoaXMuX2NhcGFjaXR5ID0gY2FwYWNpdHk7XG4gICAgdGhpcy5fbGVuZ3RoID0gMDtcbiAgICB0aGlzLl9mcm9udCA9IDA7XG59XG5cblF1ZXVlLnByb3RvdHlwZS5fd2lsbEJlT3ZlckNhcGFjaXR5ID0gZnVuY3Rpb24gKHNpemUpIHtcbiAgICByZXR1cm4gdGhpcy5fY2FwYWNpdHkgPCBzaXplO1xufTtcblxuUXVldWUucHJvdG90eXBlLl9wdXNoT25lID0gZnVuY3Rpb24gKGFyZykge1xuICAgIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aCgpO1xuICAgIHRoaXMuX2NoZWNrQ2FwYWNpdHkobGVuZ3RoICsgMSk7XG4gICAgdmFyIGkgPSAodGhpcy5fZnJvbnQgKyBsZW5ndGgpICYgKHRoaXMuX2NhcGFjaXR5IC0gMSk7XG4gICAgdGhpc1tpXSA9IGFyZztcbiAgICB0aGlzLl9sZW5ndGggPSBsZW5ndGggKyAxO1xufTtcblxuUXVldWUucHJvdG90eXBlLl91bnNoaWZ0T25lID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgY2FwYWNpdHkgPSB0aGlzLl9jYXBhY2l0eTtcbiAgICB0aGlzLl9jaGVja0NhcGFjaXR5KHRoaXMubGVuZ3RoKCkgKyAxKTtcbiAgICB2YXIgZnJvbnQgPSB0aGlzLl9mcm9udDtcbiAgICB2YXIgaSA9ICgoKCggZnJvbnQgLSAxICkgJlxuICAgICAgICAgICAgICAgICAgICAoIGNhcGFjaXR5IC0gMSkgKSBeIGNhcGFjaXR5ICkgLSBjYXBhY2l0eSApO1xuICAgIHRoaXNbaV0gPSB2YWx1ZTtcbiAgICB0aGlzLl9mcm9udCA9IGk7XG4gICAgdGhpcy5fbGVuZ3RoID0gdGhpcy5sZW5ndGgoKSArIDE7XG59O1xuXG5RdWV1ZS5wcm90b3R5cGUudW5zaGlmdCA9IGZ1bmN0aW9uKGZuLCByZWNlaXZlciwgYXJnKSB7XG4gICAgdGhpcy5fdW5zaGlmdE9uZShhcmcpO1xuICAgIHRoaXMuX3Vuc2hpZnRPbmUocmVjZWl2ZXIpO1xuICAgIHRoaXMuX3Vuc2hpZnRPbmUoZm4pO1xufTtcblxuUXVldWUucHJvdG90eXBlLnB1c2ggPSBmdW5jdGlvbiAoZm4sIHJlY2VpdmVyLCBhcmcpIHtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGgoKSArIDM7XG4gICAgaWYgKHRoaXMuX3dpbGxCZU92ZXJDYXBhY2l0eShsZW5ndGgpKSB7XG4gICAgICAgIHRoaXMuX3B1c2hPbmUoZm4pO1xuICAgICAgICB0aGlzLl9wdXNoT25lKHJlY2VpdmVyKTtcbiAgICAgICAgdGhpcy5fcHVzaE9uZShhcmcpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciBqID0gdGhpcy5fZnJvbnQgKyBsZW5ndGggLSAzO1xuICAgIHRoaXMuX2NoZWNrQ2FwYWNpdHkobGVuZ3RoKTtcbiAgICB2YXIgd3JhcE1hc2sgPSB0aGlzLl9jYXBhY2l0eSAtIDE7XG4gICAgdGhpc1soaiArIDApICYgd3JhcE1hc2tdID0gZm47XG4gICAgdGhpc1soaiArIDEpICYgd3JhcE1hc2tdID0gcmVjZWl2ZXI7XG4gICAgdGhpc1soaiArIDIpICYgd3JhcE1hc2tdID0gYXJnO1xuICAgIHRoaXMuX2xlbmd0aCA9IGxlbmd0aDtcbn07XG5cblF1ZXVlLnByb3RvdHlwZS5zaGlmdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgZnJvbnQgPSB0aGlzLl9mcm9udCxcbiAgICAgICAgcmV0ID0gdGhpc1tmcm9udF07XG5cbiAgICB0aGlzW2Zyb250XSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9mcm9udCA9IChmcm9udCArIDEpICYgKHRoaXMuX2NhcGFjaXR5IC0gMSk7XG4gICAgdGhpcy5fbGVuZ3RoLS07XG4gICAgcmV0dXJuIHJldDtcbn07XG5cblF1ZXVlLnByb3RvdHlwZS5sZW5ndGggPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xlbmd0aDtcbn07XG5cblF1ZXVlLnByb3RvdHlwZS5fY2hlY2tDYXBhY2l0eSA9IGZ1bmN0aW9uIChzaXplKSB7XG4gICAgaWYgKHRoaXMuX2NhcGFjaXR5IDwgc2l6ZSkge1xuICAgICAgICB0aGlzLl9yZXNpemVUbyh0aGlzLl9jYXBhY2l0eSA8PCAxKTtcbiAgICB9XG59O1xuXG5RdWV1ZS5wcm90b3R5cGUuX3Jlc2l6ZVRvID0gZnVuY3Rpb24gKGNhcGFjaXR5KSB7XG4gICAgdmFyIG9sZENhcGFjaXR5ID0gdGhpcy5fY2FwYWNpdHk7XG4gICAgdGhpcy5fY2FwYWNpdHkgPSBjYXBhY2l0eTtcbiAgICB2YXIgZnJvbnQgPSB0aGlzLl9mcm9udDtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5fbGVuZ3RoO1xuICAgIHZhciBtb3ZlSXRlbXNDb3VudCA9IChmcm9udCArIGxlbmd0aCkgJiAob2xkQ2FwYWNpdHkgLSAxKTtcbiAgICBhcnJheU1vdmUodGhpcywgMCwgdGhpcywgb2xkQ2FwYWNpdHksIG1vdmVJdGVtc0NvdW50KTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gUXVldWU7XG5cbn0se31dLDI3OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihcbiAgICBQcm9taXNlLCBJTlRFUk5BTCwgdHJ5Q29udmVydFRvUHJvbWlzZSwgYXBpUmVqZWN0aW9uKSB7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG5cbnZhciByYWNlTGF0ZXIgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24oYXJyYXkpIHtcbiAgICAgICAgcmV0dXJuIHJhY2UoYXJyYXksIHByb21pc2UpO1xuICAgIH0pO1xufTtcblxuZnVuY3Rpb24gcmFjZShwcm9taXNlcywgcGFyZW50KSB7XG4gICAgdmFyIG1heWJlUHJvbWlzZSA9IHRyeUNvbnZlcnRUb1Byb21pc2UocHJvbWlzZXMpO1xuXG4gICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgcmV0dXJuIHJhY2VMYXRlcihtYXliZVByb21pc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByb21pc2VzID0gdXRpbC5hc0FycmF5KHByb21pc2VzKTtcbiAgICAgICAgaWYgKHByb21pc2VzID09PSBudWxsKVxuICAgICAgICAgICAgcmV0dXJuIGFwaVJlamVjdGlvbihcImV4cGVjdGluZyBhbiBhcnJheSBvciBhbiBpdGVyYWJsZSBvYmplY3QgYnV0IGdvdCBcIiArIHV0aWwuY2xhc3NTdHJpbmcocHJvbWlzZXMpKTtcbiAgICB9XG5cbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIGlmIChwYXJlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXQuX3Byb3BhZ2F0ZUZyb20ocGFyZW50LCAzKTtcbiAgICB9XG4gICAgdmFyIGZ1bGZpbGwgPSByZXQuX2Z1bGZpbGw7XG4gICAgdmFyIHJlamVjdCA9IHJldC5fcmVqZWN0O1xuICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBwcm9taXNlcy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICB2YXIgdmFsID0gcHJvbWlzZXNbaV07XG5cbiAgICAgICAgaWYgKHZhbCA9PT0gdW5kZWZpbmVkICYmICEoaSBpbiBwcm9taXNlcykpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgUHJvbWlzZS5jYXN0KHZhbCkuX3RoZW4oZnVsZmlsbCwgcmVqZWN0LCB1bmRlZmluZWQsIHJldCwgbnVsbCk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG59XG5cblByb21pc2UucmFjZSA9IGZ1bmN0aW9uIChwcm9taXNlcykge1xuICAgIHJldHVybiByYWNlKHByb21pc2VzLCB1bmRlZmluZWQpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUucmFjZSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcmFjZSh0aGlzLCB1bmRlZmluZWQpO1xufTtcblxufTtcblxufSx7XCIuL3V0aWxcIjozNn1dLDI4OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlQXJyYXksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFwaVJlamVjdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ5Q29udmVydFRvUHJvbWlzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgSU5URVJOQUwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKSB7XG52YXIgZ2V0RG9tYWluID0gUHJvbWlzZS5fZ2V0RG9tYWluO1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsXCIpO1xudmFyIHRyeUNhdGNoID0gdXRpbC50cnlDYXRjaDtcblxuZnVuY3Rpb24gUmVkdWN0aW9uUHJvbWlzZUFycmF5KHByb21pc2VzLCBmbiwgaW5pdGlhbFZhbHVlLCBfZWFjaCkge1xuICAgIHRoaXMuY29uc3RydWN0b3IkKHByb21pc2VzKTtcbiAgICB2YXIgZG9tYWluID0gZ2V0RG9tYWluKCk7XG4gICAgdGhpcy5fZm4gPSBkb21haW4gPT09IG51bGwgPyBmbiA6IGRvbWFpbi5iaW5kKGZuKTtcbiAgICBpZiAoaW5pdGlhbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaW5pdGlhbFZhbHVlID0gUHJvbWlzZS5yZXNvbHZlKGluaXRpYWxWYWx1ZSk7XG4gICAgICAgIGluaXRpYWxWYWx1ZS5fYXR0YWNoQ2FuY2VsbGF0aW9uQ2FsbGJhY2sodGhpcyk7XG4gICAgfVxuICAgIHRoaXMuX2luaXRpYWxWYWx1ZSA9IGluaXRpYWxWYWx1ZTtcbiAgICB0aGlzLl9jdXJyZW50Q2FuY2VsbGFibGUgPSBudWxsO1xuICAgIHRoaXMuX2VhY2hWYWx1ZXMgPSBfZWFjaCA9PT0gSU5URVJOQUwgPyBbXSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9wcm9taXNlLl9jYXB0dXJlU3RhY2tUcmFjZSgpO1xuICAgIHRoaXMuX2luaXQkKHVuZGVmaW5lZCwgLTUpO1xufVxudXRpbC5pbmhlcml0cyhSZWR1Y3Rpb25Qcm9taXNlQXJyYXksIFByb21pc2VBcnJheSk7XG5cblJlZHVjdGlvblByb21pc2VBcnJheS5wcm90b3R5cGUuX2dvdEFjY3VtID0gZnVuY3Rpb24oYWNjdW0pIHtcbiAgICBpZiAodGhpcy5fZWFjaFZhbHVlcyAhPT0gdW5kZWZpbmVkICYmIGFjY3VtICE9PSBJTlRFUk5BTCkge1xuICAgICAgICB0aGlzLl9lYWNoVmFsdWVzLnB1c2goYWNjdW0pO1xuICAgIH1cbn07XG5cblJlZHVjdGlvblByb21pc2VBcnJheS5wcm90b3R5cGUuX2VhY2hDb21wbGV0ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdGhpcy5fZWFjaFZhbHVlcy5wdXNoKHZhbHVlKTtcbiAgICByZXR1cm4gdGhpcy5fZWFjaFZhbHVlcztcbn07XG5cblJlZHVjdGlvblByb21pc2VBcnJheS5wcm90b3R5cGUuX2luaXQgPSBmdW5jdGlvbigpIHt9O1xuXG5SZWR1Y3Rpb25Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9yZXNvbHZlRW1wdHlBcnJheSA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3Jlc29sdmUodGhpcy5fZWFjaFZhbHVlcyAhPT0gdW5kZWZpbmVkID8gdGhpcy5fZWFjaFZhbHVlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5faW5pdGlhbFZhbHVlKTtcbn07XG5cblJlZHVjdGlvblByb21pc2VBcnJheS5wcm90b3R5cGUuc2hvdWxkQ29weVZhbHVlcyA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5SZWR1Y3Rpb25Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9yZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICB0aGlzLl9wcm9taXNlLl9yZXNvbHZlQ2FsbGJhY2sodmFsdWUpO1xuICAgIHRoaXMuX3ZhbHVlcyA9IG51bGw7XG59O1xuXG5SZWR1Y3Rpb25Qcm9taXNlQXJyYXkucHJvdG90eXBlLl9yZXN1bHRDYW5jZWxsZWQgPSBmdW5jdGlvbihzZW5kZXIpIHtcbiAgICBpZiAoc2VuZGVyID09PSB0aGlzLl9pbml0aWFsVmFsdWUpIHJldHVybiB0aGlzLl9jYW5jZWwoKTtcbiAgICBpZiAodGhpcy5faXNSZXNvbHZlZCgpKSByZXR1cm47XG4gICAgdGhpcy5fcmVzdWx0Q2FuY2VsbGVkJCgpO1xuICAgIGlmICh0aGlzLl9jdXJyZW50Q2FuY2VsbGFibGUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRDYW5jZWxsYWJsZS5jYW5jZWwoKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2luaXRpYWxWYWx1ZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgdGhpcy5faW5pdGlhbFZhbHVlLmNhbmNlbCgpO1xuICAgIH1cbn07XG5cblJlZHVjdGlvblByb21pc2VBcnJheS5wcm90b3R5cGUuX2l0ZXJhdGUgPSBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgdGhpcy5fdmFsdWVzID0gdmFsdWVzO1xuICAgIHZhciB2YWx1ZTtcbiAgICB2YXIgaTtcbiAgICB2YXIgbGVuZ3RoID0gdmFsdWVzLmxlbmd0aDtcbiAgICBpZiAodGhpcy5faW5pdGlhbFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLl9pbml0aWFsVmFsdWU7XG4gICAgICAgIGkgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gUHJvbWlzZS5yZXNvbHZlKHZhbHVlc1swXSk7XG4gICAgICAgIGkgPSAxO1xuICAgIH1cblxuICAgIHRoaXMuX2N1cnJlbnRDYW5jZWxsYWJsZSA9IHZhbHVlO1xuXG4gICAgaWYgKCF2YWx1ZS5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgZm9yICg7IGkgPCBsZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgdmFyIGN0eCA9IHtcbiAgICAgICAgICAgICAgICBhY2N1bTogbnVsbCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVzW2ldLFxuICAgICAgICAgICAgICAgIGluZGV4OiBpLFxuICAgICAgICAgICAgICAgIGxlbmd0aDogbGVuZ3RoLFxuICAgICAgICAgICAgICAgIGFycmF5OiB0aGlzXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5fdGhlbihnb3RBY2N1bSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGN0eCwgdW5kZWZpbmVkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9lYWNoVmFsdWVzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFsdWUgPSB2YWx1ZVxuICAgICAgICAgICAgLl90aGVuKHRoaXMuX2VhY2hDb21wbGV0ZSwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIHRoaXMsIHVuZGVmaW5lZCk7XG4gICAgfVxuICAgIHZhbHVlLl90aGVuKGNvbXBsZXRlZCwgY29tcGxldGVkLCB1bmRlZmluZWQsIHZhbHVlLCB0aGlzKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnJlZHVjZSA9IGZ1bmN0aW9uIChmbiwgaW5pdGlhbFZhbHVlKSB7XG4gICAgcmV0dXJuIHJlZHVjZSh0aGlzLCBmbiwgaW5pdGlhbFZhbHVlLCBudWxsKTtcbn07XG5cblByb21pc2UucmVkdWNlID0gZnVuY3Rpb24gKHByb21pc2VzLCBmbiwgaW5pdGlhbFZhbHVlLCBfZWFjaCkge1xuICAgIHJldHVybiByZWR1Y2UocHJvbWlzZXMsIGZuLCBpbml0aWFsVmFsdWUsIF9lYWNoKTtcbn07XG5cbmZ1bmN0aW9uIGNvbXBsZXRlZCh2YWx1ZU9yUmVhc29uLCBhcnJheSkge1xuICAgIGlmICh0aGlzLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgYXJyYXkuX3Jlc29sdmUodmFsdWVPclJlYXNvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXkuX3JlamVjdCh2YWx1ZU9yUmVhc29uKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJlZHVjZShwcm9taXNlcywgZm4sIGluaXRpYWxWYWx1ZSwgX2VhY2gpIHtcbiAgICBpZiAodHlwZW9mIGZuICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGFwaVJlamVjdGlvbihcImV4cGVjdGluZyBhIGZ1bmN0aW9uIGJ1dCBnb3QgXCIgKyB1dGlsLmNsYXNzU3RyaW5nKGZuKSk7XG4gICAgfVxuICAgIHZhciBhcnJheSA9IG5ldyBSZWR1Y3Rpb25Qcm9taXNlQXJyYXkocHJvbWlzZXMsIGZuLCBpbml0aWFsVmFsdWUsIF9lYWNoKTtcbiAgICByZXR1cm4gYXJyYXkucHJvbWlzZSgpO1xufVxuXG5mdW5jdGlvbiBnb3RBY2N1bShhY2N1bSkge1xuICAgIHRoaXMuYWNjdW0gPSBhY2N1bTtcbiAgICB0aGlzLmFycmF5Ll9nb3RBY2N1bShhY2N1bSk7XG4gICAgdmFyIHZhbHVlID0gdHJ5Q29udmVydFRvUHJvbWlzZSh0aGlzLnZhbHVlLCB0aGlzLmFycmF5Ll9wcm9taXNlKTtcbiAgICBpZiAodmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgIHRoaXMuYXJyYXkuX2N1cnJlbnRDYW5jZWxsYWJsZSA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gdmFsdWUuX3RoZW4oZ290VmFsdWUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLCB0aGlzLCB1bmRlZmluZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBnb3RWYWx1ZS5jYWxsKHRoaXMsIHZhbHVlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGdvdFZhbHVlKHZhbHVlKSB7XG4gICAgdmFyIGFycmF5ID0gdGhpcy5hcnJheTtcbiAgICB2YXIgcHJvbWlzZSA9IGFycmF5Ll9wcm9taXNlO1xuICAgIHZhciBmbiA9IHRyeUNhdGNoKGFycmF5Ll9mbik7XG4gICAgcHJvbWlzZS5fcHVzaENvbnRleHQoKTtcbiAgICB2YXIgcmV0O1xuICAgIGlmIChhcnJheS5fZWFjaFZhbHVlcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldCA9IGZuLmNhbGwocHJvbWlzZS5fYm91bmRWYWx1ZSgpLCB2YWx1ZSwgdGhpcy5pbmRleCwgdGhpcy5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldCA9IGZuLmNhbGwocHJvbWlzZS5fYm91bmRWYWx1ZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2N1bSwgdmFsdWUsIHRoaXMuaW5kZXgsIHRoaXMubGVuZ3RoKTtcbiAgICB9XG4gICAgaWYgKHJldCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgYXJyYXkuX2N1cnJlbnRDYW5jZWxsYWJsZSA9IHJldDtcbiAgICB9XG4gICAgdmFyIHByb21pc2VDcmVhdGVkID0gcHJvbWlzZS5fcG9wQ29udGV4dCgpO1xuICAgIGRlYnVnLmNoZWNrRm9yZ290dGVuUmV0dXJucyhcbiAgICAgICAgcmV0LFxuICAgICAgICBwcm9taXNlQ3JlYXRlZCxcbiAgICAgICAgYXJyYXkuX2VhY2hWYWx1ZXMgIT09IHVuZGVmaW5lZCA/IFwiUHJvbWlzZS5lYWNoXCIgOiBcIlByb21pc2UucmVkdWNlXCIsXG4gICAgICAgIHByb21pc2VcbiAgICApO1xuICAgIHJldHVybiByZXQ7XG59XG59O1xuXG59LHtcIi4vdXRpbFwiOjM2fV0sMjk6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG52YXIgc2NoZWR1bGU7XG52YXIgbm9Bc3luY1NjaGVkdWxlciA9IGZ1bmN0aW9uKCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk5vIGFzeW5jIHNjaGVkdWxlciBhdmFpbGFibGVcXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9NcXJGbVhcXHUwMDBhXCIpO1xufTtcbnZhciBOYXRpdmVQcm9taXNlID0gdXRpbC5nZXROYXRpdmVQcm9taXNlKCk7XG5pZiAodXRpbC5pc05vZGUgJiYgdHlwZW9mIE11dGF0aW9uT2JzZXJ2ZXIgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgR2xvYmFsU2V0SW1tZWRpYXRlID0gZ2xvYmFsLnNldEltbWVkaWF0ZTtcbiAgICB2YXIgUHJvY2Vzc05leHRUaWNrID0gcHJvY2Vzcy5uZXh0VGljaztcbiAgICBzY2hlZHVsZSA9IHV0aWwuaXNSZWNlbnROb2RlXG4gICAgICAgICAgICAgICAgPyBmdW5jdGlvbihmbikgeyBHbG9iYWxTZXRJbW1lZGlhdGUuY2FsbChnbG9iYWwsIGZuKTsgfVxuICAgICAgICAgICAgICAgIDogZnVuY3Rpb24oZm4pIHsgUHJvY2Vzc05leHRUaWNrLmNhbGwocHJvY2VzcywgZm4pOyB9O1xufSBlbHNlIGlmICh0eXBlb2YgTmF0aXZlUHJvbWlzZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIG5hdGl2ZVByb21pc2UgPSBOYXRpdmVQcm9taXNlLnJlc29sdmUoKTtcbiAgICBzY2hlZHVsZSA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgIG5hdGl2ZVByb21pc2UudGhlbihmbik7XG4gICAgfTtcbn0gZWxzZSBpZiAoKHR5cGVvZiBNdXRhdGlvbk9ic2VydmVyICE9PSBcInVuZGVmaW5lZFwiKSAmJlxuICAgICAgICAgICEodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICAgICAgd2luZG93Lm5hdmlnYXRvciAmJlxuICAgICAgICAgICAgd2luZG93Lm5hdmlnYXRvci5zdGFuZGFsb25lKSkge1xuICAgIHNjaGVkdWxlID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIG9wdHMgPSB7YXR0cmlidXRlczogdHJ1ZX07XG4gICAgICAgIHZhciB0b2dnbGVTY2hlZHVsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGRpdjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgbzIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRpdi5jbGFzc0xpc3QudG9nZ2xlKFwiZm9vXCIpO1xuICAgICAgICAgICAgdG9nZ2xlU2NoZWR1bGVkID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICBvMi5vYnNlcnZlKGRpdjIsIG9wdHMpO1xuXG4gICAgICAgIHZhciBzY2hlZHVsZVRvZ2dsZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRvZ2dsZVNjaGVkdWxlZCkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHRvZ2dsZVNjaGVkdWxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgZGl2Mi5jbGFzc0xpc3QudG9nZ2xlKFwiZm9vXCIpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNjaGVkdWxlKGZuKSB7XG4gICAgICAgICAgICB2YXIgbyA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIG8uZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG8ub2JzZXJ2ZShkaXYsIG9wdHMpO1xuICAgICAgICAgICAgc2NoZWR1bGVUb2dnbGUoKTtcbiAgICAgICAgfTtcbiAgICB9KSgpO1xufSBlbHNlIGlmICh0eXBlb2Ygc2V0SW1tZWRpYXRlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgc2NoZWR1bGUgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgc2V0SW1tZWRpYXRlKGZuKTtcbiAgICB9O1xufSBlbHNlIGlmICh0eXBlb2Ygc2V0VGltZW91dCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHNjaGVkdWxlID0gZnVuY3Rpb24gKGZuKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZm4sIDApO1xuICAgIH07XG59IGVsc2Uge1xuICAgIHNjaGVkdWxlID0gbm9Bc3luY1NjaGVkdWxlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gc2NoZWR1bGU7XG5cbn0se1wiLi91dGlsXCI6MzZ9XSwzMDpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID1cbiAgICBmdW5jdGlvbihQcm9taXNlLCBQcm9taXNlQXJyYXksIGRlYnVnKSB7XG52YXIgUHJvbWlzZUluc3BlY3Rpb24gPSBQcm9taXNlLlByb21pc2VJbnNwZWN0aW9uO1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsXCIpO1xuXG5mdW5jdGlvbiBTZXR0bGVkUHJvbWlzZUFycmF5KHZhbHVlcykge1xuICAgIHRoaXMuY29uc3RydWN0b3IkKHZhbHVlcyk7XG59XG51dGlsLmluaGVyaXRzKFNldHRsZWRQcm9taXNlQXJyYXksIFByb21pc2VBcnJheSk7XG5cblNldHRsZWRQcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlUmVzb2x2ZWQgPSBmdW5jdGlvbiAoaW5kZXgsIGluc3BlY3Rpb24pIHtcbiAgICB0aGlzLl92YWx1ZXNbaW5kZXhdID0gaW5zcGVjdGlvbjtcbiAgICB2YXIgdG90YWxSZXNvbHZlZCA9ICsrdGhpcy5fdG90YWxSZXNvbHZlZDtcbiAgICBpZiAodG90YWxSZXNvbHZlZCA+PSB0aGlzLl9sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5fcmVzb2x2ZSh0aGlzLl92YWx1ZXMpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcblxuU2V0dGxlZFByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VGdWxmaWxsZWQgPSBmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgdmFyIHJldCA9IG5ldyBQcm9taXNlSW5zcGVjdGlvbigpO1xuICAgIHJldC5fYml0RmllbGQgPSAzMzU1NDQzMjtcbiAgICByZXQuX3NldHRsZWRWYWx1ZUZpZWxkID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXMuX3Byb21pc2VSZXNvbHZlZChpbmRleCwgcmV0KTtcbn07XG5TZXR0bGVkUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZVJlamVjdGVkID0gZnVuY3Rpb24gKHJlYXNvbiwgaW5kZXgpIHtcbiAgICB2YXIgcmV0ID0gbmV3IFByb21pc2VJbnNwZWN0aW9uKCk7XG4gICAgcmV0Ll9iaXRGaWVsZCA9IDE2Nzc3MjE2O1xuICAgIHJldC5fc2V0dGxlZFZhbHVlRmllbGQgPSByZWFzb247XG4gICAgcmV0dXJuIHRoaXMuX3Byb21pc2VSZXNvbHZlZChpbmRleCwgcmV0KTtcbn07XG5cblByb21pc2Uuc2V0dGxlID0gZnVuY3Rpb24gKHByb21pc2VzKSB7XG4gICAgZGVidWcuZGVwcmVjYXRlZChcIi5zZXR0bGUoKVwiLCBcIi5yZWZsZWN0KClcIik7XG4gICAgcmV0dXJuIG5ldyBTZXR0bGVkUHJvbWlzZUFycmF5KHByb21pc2VzKS5wcm9taXNlKCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5zZXR0bGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIFByb21pc2Uuc2V0dGxlKHRoaXMpO1xufTtcbn07XG5cbn0se1wiLi91dGlsXCI6MzZ9XSwzMTpbZnVuY3Rpb24oX2RlcmVxXyxtb2R1bGUsZXhwb3J0cyl7XG5cInVzZSBzdHJpY3RcIjtcbm1vZHVsZS5leHBvcnRzID1cbmZ1bmN0aW9uKFByb21pc2UsIFByb21pc2VBcnJheSwgYXBpUmVqZWN0aW9uKSB7XG52YXIgdXRpbCA9IF9kZXJlcV8oXCIuL3V0aWxcIik7XG52YXIgUmFuZ2VFcnJvciA9IF9kZXJlcV8oXCIuL2Vycm9yc1wiKS5SYW5nZUVycm9yO1xudmFyIEFnZ3JlZ2F0ZUVycm9yID0gX2RlcmVxXyhcIi4vZXJyb3JzXCIpLkFnZ3JlZ2F0ZUVycm9yO1xudmFyIGlzQXJyYXkgPSB1dGlsLmlzQXJyYXk7XG52YXIgQ0FOQ0VMTEFUSU9OID0ge307XG5cblxuZnVuY3Rpb24gU29tZVByb21pc2VBcnJheSh2YWx1ZXMpIHtcbiAgICB0aGlzLmNvbnN0cnVjdG9yJCh2YWx1ZXMpO1xuICAgIHRoaXMuX2hvd01hbnkgPSAwO1xuICAgIHRoaXMuX3Vud3JhcCA9IGZhbHNlO1xuICAgIHRoaXMuX2luaXRpYWxpemVkID0gZmFsc2U7XG59XG51dGlsLmluaGVyaXRzKFNvbWVQcm9taXNlQXJyYXksIFByb21pc2VBcnJheSk7XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9pbml0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghdGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5faG93TWFueSA9PT0gMCkge1xuICAgICAgICB0aGlzLl9yZXNvbHZlKFtdKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9pbml0JCh1bmRlZmluZWQsIC01KTtcbiAgICB2YXIgaXNBcnJheVJlc29sdmVkID0gaXNBcnJheSh0aGlzLl92YWx1ZXMpO1xuICAgIGlmICghdGhpcy5faXNSZXNvbHZlZCgpICYmXG4gICAgICAgIGlzQXJyYXlSZXNvbHZlZCAmJlxuICAgICAgICB0aGlzLl9ob3dNYW55ID4gdGhpcy5fY2FuUG9zc2libHlGdWxmaWxsKCkpIHtcbiAgICAgICAgdGhpcy5fcmVqZWN0KHRoaXMuX2dldFJhbmdlRXJyb3IodGhpcy5sZW5ndGgoKSkpO1xuICAgIH1cbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLmluaXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5faW5pdGlhbGl6ZWQgPSB0cnVlO1xuICAgIHRoaXMuX2luaXQoKTtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLnNldFVud3JhcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLl91bndyYXAgPSB0cnVlO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuaG93TWFueSA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gdGhpcy5faG93TWFueTtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLnNldEhvd01hbnkgPSBmdW5jdGlvbiAoY291bnQpIHtcbiAgICB0aGlzLl9ob3dNYW55ID0gY291bnQ7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fcHJvbWlzZUZ1bGZpbGxlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHRoaXMuX2FkZEZ1bGZpbGxlZCh2YWx1ZSk7XG4gICAgaWYgKHRoaXMuX2Z1bGZpbGxlZCgpID09PSB0aGlzLmhvd01hbnkoKSkge1xuICAgICAgICB0aGlzLl92YWx1ZXMubGVuZ3RoID0gdGhpcy5ob3dNYW55KCk7XG4gICAgICAgIGlmICh0aGlzLmhvd01hbnkoKSA9PT0gMSAmJiB0aGlzLl91bndyYXApIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUodGhpcy5fdmFsdWVzWzBdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmUodGhpcy5fdmFsdWVzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuXG59O1xuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX3Byb21pc2VSZWplY3RlZCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICB0aGlzLl9hZGRSZWplY3RlZChyZWFzb24pO1xuICAgIHJldHVybiB0aGlzLl9jaGVja091dGNvbWUoKTtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9wcm9taXNlQ2FuY2VsbGVkID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLl92YWx1ZXMgaW5zdGFuY2VvZiBQcm9taXNlIHx8IHRoaXMuX3ZhbHVlcyA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYW5jZWwoKTtcbiAgICB9XG4gICAgdGhpcy5fYWRkUmVqZWN0ZWQoQ0FOQ0VMTEFUSU9OKTtcbiAgICByZXR1cm4gdGhpcy5fY2hlY2tPdXRjb21lKCk7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fY2hlY2tPdXRjb21lID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuaG93TWFueSgpID4gdGhpcy5fY2FuUG9zc2libHlGdWxmaWxsKCkpIHtcbiAgICAgICAgdmFyIGUgPSBuZXcgQWdncmVnYXRlRXJyb3IoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMubGVuZ3RoKCk7IGkgPCB0aGlzLl92YWx1ZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl92YWx1ZXNbaV0gIT09IENBTkNFTExBVElPTikge1xuICAgICAgICAgICAgICAgIGUucHVzaCh0aGlzLl92YWx1ZXNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuX3JlamVjdChlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX2NhbmNlbCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fZnVsZmlsbGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl90b3RhbFJlc29sdmVkO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX3JlamVjdGVkID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLl92YWx1ZXMubGVuZ3RoIC0gdGhpcy5sZW5ndGgoKTtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9hZGRSZWplY3RlZCA9IGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICB0aGlzLl92YWx1ZXMucHVzaChyZWFzb24pO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX2FkZEZ1bGZpbGxlZCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIHRoaXMuX3ZhbHVlc1t0aGlzLl90b3RhbFJlc29sdmVkKytdID0gdmFsdWU7XG59O1xuXG5Tb21lUHJvbWlzZUFycmF5LnByb3RvdHlwZS5fY2FuUG9zc2libHlGdWxmaWxsID0gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB0aGlzLmxlbmd0aCgpIC0gdGhpcy5fcmVqZWN0ZWQoKTtcbn07XG5cblNvbWVQcm9taXNlQXJyYXkucHJvdG90eXBlLl9nZXRSYW5nZUVycm9yID0gZnVuY3Rpb24gKGNvdW50KSB7XG4gICAgdmFyIG1lc3NhZ2UgPSBcIklucHV0IGFycmF5IG11c3QgY29udGFpbiBhdCBsZWFzdCBcIiArXG4gICAgICAgICAgICB0aGlzLl9ob3dNYW55ICsgXCIgaXRlbXMgYnV0IGNvbnRhaW5zIG9ubHkgXCIgKyBjb3VudCArIFwiIGl0ZW1zXCI7XG4gICAgcmV0dXJuIG5ldyBSYW5nZUVycm9yKG1lc3NhZ2UpO1xufTtcblxuU29tZVByb21pc2VBcnJheS5wcm90b3R5cGUuX3Jlc29sdmVFbXB0eUFycmF5ID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuX3JlamVjdCh0aGlzLl9nZXRSYW5nZUVycm9yKDApKTtcbn07XG5cbmZ1bmN0aW9uIHNvbWUocHJvbWlzZXMsIGhvd01hbnkpIHtcbiAgICBpZiAoKGhvd01hbnkgfCAwKSAhPT0gaG93TWFueSB8fCBob3dNYW55IDwgMCkge1xuICAgICAgICByZXR1cm4gYXBpUmVqZWN0aW9uKFwiZXhwZWN0aW5nIGEgcG9zaXRpdmUgaW50ZWdlclxcdTAwMGFcXHUwMDBhICAgIFNlZSBodHRwOi8vZ29vLmdsL01xckZtWFxcdTAwMGFcIik7XG4gICAgfVxuICAgIHZhciByZXQgPSBuZXcgU29tZVByb21pc2VBcnJheShwcm9taXNlcyk7XG4gICAgdmFyIHByb21pc2UgPSByZXQucHJvbWlzZSgpO1xuICAgIHJldC5zZXRIb3dNYW55KGhvd01hbnkpO1xuICAgIHJldC5pbml0KCk7XG4gICAgcmV0dXJuIHByb21pc2U7XG59XG5cblByb21pc2Uuc29tZSA9IGZ1bmN0aW9uIChwcm9taXNlcywgaG93TWFueSkge1xuICAgIHJldHVybiBzb21lKHByb21pc2VzLCBob3dNYW55KTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLnNvbWUgPSBmdW5jdGlvbiAoaG93TWFueSkge1xuICAgIHJldHVybiBzb21lKHRoaXMsIGhvd01hbnkpO1xufTtcblxuUHJvbWlzZS5fU29tZVByb21pc2VBcnJheSA9IFNvbWVQcm9taXNlQXJyYXk7XG59O1xuXG59LHtcIi4vZXJyb3JzXCI6MTIsXCIuL3V0aWxcIjozNn1dLDMyOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlKSB7XG5mdW5jdGlvbiBQcm9taXNlSW5zcGVjdGlvbihwcm9taXNlKSB7XG4gICAgaWYgKHByb21pc2UgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBwcm9taXNlID0gcHJvbWlzZS5fdGFyZ2V0KCk7XG4gICAgICAgIHRoaXMuX2JpdEZpZWxkID0gcHJvbWlzZS5fYml0RmllbGQ7XG4gICAgICAgIHRoaXMuX3NldHRsZWRWYWx1ZUZpZWxkID0gcHJvbWlzZS5faXNGYXRlU2VhbGVkKClcbiAgICAgICAgICAgID8gcHJvbWlzZS5fc2V0dGxlZFZhbHVlKCkgOiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLl9iaXRGaWVsZCA9IDA7XG4gICAgICAgIHRoaXMuX3NldHRsZWRWYWx1ZUZpZWxkID0gdW5kZWZpbmVkO1xuICAgIH1cbn1cblxuUHJvbWlzZUluc3BlY3Rpb24ucHJvdG90eXBlLl9zZXR0bGVkVmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGxlZFZhbHVlRmllbGQ7XG59O1xuXG52YXIgdmFsdWUgPSBQcm9taXNlSW5zcGVjdGlvbi5wcm90b3R5cGUudmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmlzRnVsZmlsbGVkKCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcImNhbm5vdCBnZXQgZnVsZmlsbG1lbnQgdmFsdWUgb2YgYSBub24tZnVsZmlsbGVkIHByb21pc2VcXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9NcXJGbVhcXHUwMDBhXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc2V0dGxlZFZhbHVlKCk7XG59O1xuXG52YXIgcmVhc29uID0gUHJvbWlzZUluc3BlY3Rpb24ucHJvdG90eXBlLmVycm9yID1cblByb21pc2VJbnNwZWN0aW9uLnByb3RvdHlwZS5yZWFzb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCF0aGlzLmlzUmVqZWN0ZWQoKSkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiY2Fubm90IGdldCByZWplY3Rpb24gcmVhc29uIG9mIGEgbm9uLXJlamVjdGVkIHByb21pc2VcXHUwMDBhXFx1MDAwYSAgICBTZWUgaHR0cDovL2dvby5nbC9NcXJGbVhcXHUwMDBhXCIpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fc2V0dGxlZFZhbHVlKCk7XG59O1xuXG52YXIgaXNGdWxmaWxsZWQgPSBQcm9taXNlSW5zcGVjdGlvbi5wcm90b3R5cGUuaXNGdWxmaWxsZWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgMzM1NTQ0MzIpICE9PSAwO1xufTtcblxudmFyIGlzUmVqZWN0ZWQgPSBQcm9taXNlSW5zcGVjdGlvbi5wcm90b3R5cGUuaXNSZWplY3RlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgMTY3NzcyMTYpICE9PSAwO1xufTtcblxudmFyIGlzUGVuZGluZyA9IFByb21pc2VJbnNwZWN0aW9uLnByb3RvdHlwZS5pc1BlbmRpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDUwMzk3MTg0KSA9PT0gMDtcbn07XG5cbnZhciBpc1Jlc29sdmVkID0gUHJvbWlzZUluc3BlY3Rpb24ucHJvdG90eXBlLmlzUmVzb2x2ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9iaXRGaWVsZCAmIDUwMzMxNjQ4KSAhPT0gMDtcbn07XG5cblByb21pc2VJbnNwZWN0aW9uLnByb3RvdHlwZS5pc0NhbmNlbGxlZCA9XG5Qcm9taXNlLnByb3RvdHlwZS5faXNDYW5jZWxsZWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgNjU1MzYpID09PSA2NTUzNjtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmlzQ2FuY2VsbGVkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RhcmdldCgpLl9pc0NhbmNlbGxlZCgpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuaXNQZW5kaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGlzUGVuZGluZy5jYWxsKHRoaXMuX3RhcmdldCgpKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmlzUmVqZWN0ZWQgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gaXNSZWplY3RlZC5jYWxsKHRoaXMuX3RhcmdldCgpKTtcbn07XG5cblByb21pc2UucHJvdG90eXBlLmlzRnVsZmlsbGVkID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGlzRnVsZmlsbGVkLmNhbGwodGhpcy5fdGFyZ2V0KCkpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUuaXNSZXNvbHZlZCA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBpc1Jlc29sdmVkLmNhbGwodGhpcy5fdGFyZ2V0KCkpO1xufTtcblxuUHJvbWlzZS5wcm90b3R5cGUudmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdmFsdWUuY2FsbCh0aGlzLl90YXJnZXQoKSk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5yZWFzb24gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5fdGFyZ2V0KCk7XG4gICAgdGFyZ2V0Ll91bnNldFJlamVjdGlvbklzVW5oYW5kbGVkKCk7XG4gICAgcmV0dXJuIHJlYXNvbi5jYWxsKHRhcmdldCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fdmFsdWUgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fc2V0dGxlZFZhbHVlKCk7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5fcmVhc29uID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fdW5zZXRSZWplY3Rpb25Jc1VuaGFuZGxlZCgpO1xuICAgIHJldHVybiB0aGlzLl9zZXR0bGVkVmFsdWUoKTtcbn07XG5cblByb21pc2UuUHJvbWlzZUluc3BlY3Rpb24gPSBQcm9taXNlSW5zcGVjdGlvbjtcbn07XG5cbn0se31dLDMzOltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihQcm9taXNlLCBJTlRFUk5BTCkge1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsXCIpO1xudmFyIGVycm9yT2JqID0gdXRpbC5lcnJvck9iajtcbnZhciBpc09iamVjdCA9IHV0aWwuaXNPYmplY3Q7XG5cbmZ1bmN0aW9uIHRyeUNvbnZlcnRUb1Byb21pc2Uob2JqLCBjb250ZXh0KSB7XG4gICAgaWYgKGlzT2JqZWN0KG9iaikpIHtcbiAgICAgICAgaWYgKG9iaiBpbnN0YW5jZW9mIFByb21pc2UpIHJldHVybiBvYmo7XG4gICAgICAgIHZhciB0aGVuID0gZ2V0VGhlbihvYmopO1xuICAgICAgICBpZiAodGhlbiA9PT0gZXJyb3JPYmopIHtcbiAgICAgICAgICAgIGlmIChjb250ZXh0KSBjb250ZXh0Ll9wdXNoQ29udGV4dCgpO1xuICAgICAgICAgICAgdmFyIHJldCA9IFByb21pc2UucmVqZWN0KHRoZW4uZSk7XG4gICAgICAgICAgICBpZiAoY29udGV4dCkgY29udGV4dC5fcG9wQ29udGV4dCgpO1xuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBpZiAoaXNBbnlCbHVlYmlyZFByb21pc2Uob2JqKSkge1xuICAgICAgICAgICAgICAgIHZhciByZXQgPSBuZXcgUHJvbWlzZShJTlRFUk5BTCk7XG4gICAgICAgICAgICAgICAgb2JqLl90aGVuKFxuICAgICAgICAgICAgICAgICAgICByZXQuX2Z1bGZpbGwsXG4gICAgICAgICAgICAgICAgICAgIHJldC5fcmVqZWN0LFxuICAgICAgICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgIHJldCxcbiAgICAgICAgICAgICAgICAgICAgbnVsbFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkb1RoZW5hYmxlKG9iaiwgdGhlbiwgY29udGV4dCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG9iajtcbn1cblxuZnVuY3Rpb24gZG9HZXRUaGVuKG9iaikge1xuICAgIHJldHVybiBvYmoudGhlbjtcbn1cblxuZnVuY3Rpb24gZ2V0VGhlbihvYmopIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZG9HZXRUaGVuKG9iaik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBlcnJvck9iai5lID0gZTtcbiAgICAgICAgcmV0dXJuIGVycm9yT2JqO1xuICAgIH1cbn1cblxudmFyIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbmZ1bmN0aW9uIGlzQW55Qmx1ZWJpcmRQcm9taXNlKG9iaikge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBoYXNQcm9wLmNhbGwob2JqLCBcIl9wcm9taXNlMFwiKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGRvVGhlbmFibGUoeCwgdGhlbiwgY29udGV4dCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgIHZhciByZXQgPSBwcm9taXNlO1xuICAgIGlmIChjb250ZXh0KSBjb250ZXh0Ll9wdXNoQ29udGV4dCgpO1xuICAgIHByb21pc2UuX2NhcHR1cmVTdGFja1RyYWNlKCk7XG4gICAgaWYgKGNvbnRleHQpIGNvbnRleHQuX3BvcENvbnRleHQoKTtcbiAgICB2YXIgc3luY2hyb25vdXMgPSB0cnVlO1xuICAgIHZhciByZXN1bHQgPSB1dGlsLnRyeUNhdGNoKHRoZW4pLmNhbGwoeCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICBzeW5jaHJvbm91cyA9IGZhbHNlO1xuXG4gICAgaWYgKHByb21pc2UgJiYgcmVzdWx0ID09PSBlcnJvck9iaikge1xuICAgICAgICBwcm9taXNlLl9yZWplY3RDYWxsYmFjayhyZXN1bHQuZSwgdHJ1ZSwgdHJ1ZSk7XG4gICAgICAgIHByb21pc2UgPSBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmUodmFsdWUpIHtcbiAgICAgICAgaWYgKCFwcm9taXNlKSByZXR1cm47XG4gICAgICAgIHByb21pc2UuX3Jlc29sdmVDYWxsYmFjayh2YWx1ZSk7XG4gICAgICAgIHByb21pc2UgPSBudWxsO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlamVjdChyZWFzb24pIHtcbiAgICAgICAgaWYgKCFwcm9taXNlKSByZXR1cm47XG4gICAgICAgIHByb21pc2UuX3JlamVjdENhbGxiYWNrKHJlYXNvbiwgc3luY2hyb25vdXMsIHRydWUpO1xuICAgICAgICBwcm9taXNlID0gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbn1cblxucmV0dXJuIHRyeUNvbnZlcnRUb1Byb21pc2U7XG59O1xuXG59LHtcIi4vdXRpbFwiOjM2fV0sMzQ6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFByb21pc2UsIElOVEVSTkFMLCBkZWJ1Zykge1xudmFyIHV0aWwgPSBfZGVyZXFfKFwiLi91dGlsXCIpO1xudmFyIFRpbWVvdXRFcnJvciA9IFByb21pc2UuVGltZW91dEVycm9yO1xuXG5mdW5jdGlvbiBIYW5kbGVXcmFwcGVyKGhhbmRsZSkgIHtcbiAgICB0aGlzLmhhbmRsZSA9IGhhbmRsZTtcbn1cblxuSGFuZGxlV3JhcHBlci5wcm90b3R5cGUuX3Jlc3VsdENhbmNlbGxlZCA9IGZ1bmN0aW9uKCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmhhbmRsZSk7XG59O1xuXG52YXIgYWZ0ZXJWYWx1ZSA9IGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiBkZWxheSgrdGhpcykudGhlblJldHVybih2YWx1ZSk7IH07XG52YXIgZGVsYXkgPSBQcm9taXNlLmRlbGF5ID0gZnVuY3Rpb24gKG1zLCB2YWx1ZSkge1xuICAgIHZhciByZXQ7XG4gICAgdmFyIGhhbmRsZTtcbiAgICBpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXQgPSBQcm9taXNlLnJlc29sdmUodmFsdWUpXG4gICAgICAgICAgICAgICAgLl90aGVuKGFmdGVyVmFsdWUsIG51bGwsIG51bGwsIG1zLCB1bmRlZmluZWQpO1xuICAgICAgICBpZiAoZGVidWcuY2FuY2VsbGF0aW9uKCkgJiYgdmFsdWUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICByZXQuX3NldE9uQ2FuY2VsKHZhbHVlKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldCA9IG5ldyBQcm9taXNlKElOVEVSTkFMKTtcbiAgICAgICAgaGFuZGxlID0gc2V0VGltZW91dChmdW5jdGlvbigpIHsgcmV0Ll9mdWxmaWxsKCk7IH0sICttcyk7XG4gICAgICAgIGlmIChkZWJ1Zy5jYW5jZWxsYXRpb24oKSkge1xuICAgICAgICAgICAgcmV0Ll9zZXRPbkNhbmNlbChuZXcgSGFuZGxlV3JhcHBlcihoYW5kbGUpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXQuX3NldEFzeW5jR3VhcmFudGVlZCgpO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5Qcm9taXNlLnByb3RvdHlwZS5kZWxheSA9IGZ1bmN0aW9uIChtcykge1xuICAgIHJldHVybiBkZWxheShtcywgdGhpcyk7XG59O1xuXG52YXIgYWZ0ZXJUaW1lb3V0ID0gZnVuY3Rpb24gKHByb21pc2UsIG1lc3NhZ2UsIHBhcmVudCkge1xuICAgIHZhciBlcnI7XG4gICAgaWYgKHR5cGVvZiBtZXNzYWdlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGlmIChtZXNzYWdlIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgICAgIGVyciA9IG1lc3NhZ2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlcnIgPSBuZXcgVGltZW91dEVycm9yKFwib3BlcmF0aW9uIHRpbWVkIG91dFwiKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGVyciA9IG5ldyBUaW1lb3V0RXJyb3IobWVzc2FnZSk7XG4gICAgfVxuICAgIHV0aWwubWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uKGVycik7XG4gICAgcHJvbWlzZS5fYXR0YWNoRXh0cmFUcmFjZShlcnIpO1xuICAgIHByb21pc2UuX3JlamVjdChlcnIpO1xuXG4gICAgaWYgKHBhcmVudCAhPSBudWxsKSB7XG4gICAgICAgIHBhcmVudC5jYW5jZWwoKTtcbiAgICB9XG59O1xuXG5mdW5jdGlvbiBzdWNjZXNzQ2xlYXIodmFsdWUpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5oYW5kbGUpO1xuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gZmFpbHVyZUNsZWFyKHJlYXNvbikge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmhhbmRsZSk7XG4gICAgdGhyb3cgcmVhc29uO1xufVxuXG5Qcm9taXNlLnByb3RvdHlwZS50aW1lb3V0ID0gZnVuY3Rpb24gKG1zLCBtZXNzYWdlKSB7XG4gICAgbXMgPSArbXM7XG4gICAgdmFyIHJldCwgcGFyZW50O1xuXG4gICAgdmFyIGhhbmRsZVdyYXBwZXIgPSBuZXcgSGFuZGxlV3JhcHBlcihzZXRUaW1lb3V0KGZ1bmN0aW9uIHRpbWVvdXRUaW1lb3V0KCkge1xuICAgICAgICBpZiAocmV0LmlzUGVuZGluZygpKSB7XG4gICAgICAgICAgICBhZnRlclRpbWVvdXQocmV0LCBtZXNzYWdlLCBwYXJlbnQpO1xuICAgICAgICB9XG4gICAgfSwgbXMpKTtcblxuICAgIGlmIChkZWJ1Zy5jYW5jZWxsYXRpb24oKSkge1xuICAgICAgICBwYXJlbnQgPSB0aGlzLnRoZW4oKTtcbiAgICAgICAgcmV0ID0gcGFyZW50Ll90aGVuKHN1Y2Nlc3NDbGVhciwgZmFpbHVyZUNsZWFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCwgaGFuZGxlV3JhcHBlciwgdW5kZWZpbmVkKTtcbiAgICAgICAgcmV0Ll9zZXRPbkNhbmNlbChoYW5kbGVXcmFwcGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXQgPSB0aGlzLl90aGVuKHN1Y2Nlc3NDbGVhciwgZmFpbHVyZUNsZWFyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuZGVmaW5lZCwgaGFuZGxlV3JhcHBlciwgdW5kZWZpbmVkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmV0O1xufTtcblxufTtcblxufSx7XCIuL3V0aWxcIjozNn1dLDM1OltmdW5jdGlvbihfZGVyZXFfLG1vZHVsZSxleHBvcnRzKXtcblwidXNlIHN0cmljdFwiO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoUHJvbWlzZSwgYXBpUmVqZWN0aW9uLCB0cnlDb252ZXJ0VG9Qcm9taXNlLFxuICAgIGNyZWF0ZUNvbnRleHQsIElOVEVSTkFMLCBkZWJ1Zykge1xuICAgIHZhciB1dGlsID0gX2RlcmVxXyhcIi4vdXRpbFwiKTtcbiAgICB2YXIgVHlwZUVycm9yID0gX2RlcmVxXyhcIi4vZXJyb3JzXCIpLlR5cGVFcnJvcjtcbiAgICB2YXIgaW5oZXJpdHMgPSBfZGVyZXFfKFwiLi91dGlsXCIpLmluaGVyaXRzO1xuICAgIHZhciBlcnJvck9iaiA9IHV0aWwuZXJyb3JPYmo7XG4gICAgdmFyIHRyeUNhdGNoID0gdXRpbC50cnlDYXRjaDtcbiAgICB2YXIgTlVMTCA9IHt9O1xuXG4gICAgZnVuY3Rpb24gdGhyb3dlcihlKSB7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXt0aHJvdyBlO30sIDApO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhc3RQcmVzZXJ2aW5nRGlzcG9zYWJsZSh0aGVuYWJsZSkge1xuICAgICAgICB2YXIgbWF5YmVQcm9taXNlID0gdHJ5Q29udmVydFRvUHJvbWlzZSh0aGVuYWJsZSk7XG4gICAgICAgIGlmIChtYXliZVByb21pc2UgIT09IHRoZW5hYmxlICYmXG4gICAgICAgICAgICB0eXBlb2YgdGhlbmFibGUuX2lzRGlzcG9zYWJsZSA9PT0gXCJmdW5jdGlvblwiICYmXG4gICAgICAgICAgICB0eXBlb2YgdGhlbmFibGUuX2dldERpc3Bvc2VyID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgICAgIHRoZW5hYmxlLl9pc0Rpc3Bvc2FibGUoKSkge1xuICAgICAgICAgICAgbWF5YmVQcm9taXNlLl9zZXREaXNwb3NhYmxlKHRoZW5hYmxlLl9nZXREaXNwb3NlcigpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWF5YmVQcm9taXNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBkaXNwb3NlKHJlc291cmNlcywgaW5zcGVjdGlvbikge1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBsZW4gPSByZXNvdXJjZXMubGVuZ3RoO1xuICAgICAgICB2YXIgcmV0ID0gbmV3IFByb21pc2UoSU5URVJOQUwpO1xuICAgICAgICBmdW5jdGlvbiBpdGVyYXRvcigpIHtcbiAgICAgICAgICAgIGlmIChpID49IGxlbikgcmV0dXJuIHJldC5fZnVsZmlsbCgpO1xuICAgICAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IGNhc3RQcmVzZXJ2aW5nRGlzcG9zYWJsZShyZXNvdXJjZXNbaSsrXSk7XG4gICAgICAgICAgICBpZiAobWF5YmVQcm9taXNlIGluc3RhbmNlb2YgUHJvbWlzZSAmJlxuICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5faXNEaXNwb3NhYmxlKCkpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBtYXliZVByb21pc2UgPSB0cnlDb252ZXJ0VG9Qcm9taXNlKFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF5YmVQcm9taXNlLl9nZXREaXNwb3NlcigpLnRyeURpc3Bvc2UoaW5zcGVjdGlvbiksXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvdXJjZXMucHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhyb3dlcihlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKG1heWJlUHJvbWlzZSBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1heWJlUHJvbWlzZS5fdGhlbihpdGVyYXRvciwgdGhyb3dlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBudWxsLCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpdGVyYXRvcigpO1xuICAgICAgICB9XG4gICAgICAgIGl0ZXJhdG9yKCk7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gRGlzcG9zZXIoZGF0YSwgcHJvbWlzZSwgY29udGV4dCkge1xuICAgICAgICB0aGlzLl9kYXRhID0gZGF0YTtcbiAgICAgICAgdGhpcy5fcHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSBjb250ZXh0O1xuICAgIH1cblxuICAgIERpc3Bvc2VyLnByb3RvdHlwZS5kYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fZGF0YTtcbiAgICB9O1xuXG4gICAgRGlzcG9zZXIucHJvdG90eXBlLnByb21pc2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9wcm9taXNlO1xuICAgIH07XG5cbiAgICBEaXNwb3Nlci5wcm90b3R5cGUucmVzb3VyY2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnByb21pc2UoKS5pc0Z1bGZpbGxlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9taXNlKCkudmFsdWUoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gTlVMTDtcbiAgICB9O1xuXG4gICAgRGlzcG9zZXIucHJvdG90eXBlLnRyeURpc3Bvc2UgPSBmdW5jdGlvbihpbnNwZWN0aW9uKSB7XG4gICAgICAgIHZhciByZXNvdXJjZSA9IHRoaXMucmVzb3VyY2UoKTtcbiAgICAgICAgdmFyIGNvbnRleHQgPSB0aGlzLl9jb250ZXh0O1xuICAgICAgICBpZiAoY29udGV4dCAhPT0gdW5kZWZpbmVkKSBjb250ZXh0Ll9wdXNoQ29udGV4dCgpO1xuICAgICAgICB2YXIgcmV0ID0gcmVzb3VyY2UgIT09IE5VTExcbiAgICAgICAgICAgID8gdGhpcy5kb0Rpc3Bvc2UocmVzb3VyY2UsIGluc3BlY3Rpb24pIDogbnVsbDtcbiAgICAgICAgaWYgKGNvbnRleHQgIT09IHVuZGVmaW5lZCkgY29udGV4dC5fcG9wQ29udGV4dCgpO1xuICAgICAgICB0aGlzLl9wcm9taXNlLl91bnNldERpc3Bvc2FibGUoKTtcbiAgICAgICAgdGhpcy5fZGF0YSA9IG51bGw7XG4gICAgICAgIHJldHVybiByZXQ7XG4gICAgfTtcblxuICAgIERpc3Bvc2VyLmlzRGlzcG9zZXIgPSBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gKGQgIT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgIHR5cGVvZiBkLnJlc291cmNlID09PSBcImZ1bmN0aW9uXCIgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgZC50cnlEaXNwb3NlID09PSBcImZ1bmN0aW9uXCIpO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBGdW5jdGlvbkRpc3Bvc2VyKGZuLCBwcm9taXNlLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IkKGZuLCBwcm9taXNlLCBjb250ZXh0KTtcbiAgICB9XG4gICAgaW5oZXJpdHMoRnVuY3Rpb25EaXNwb3NlciwgRGlzcG9zZXIpO1xuXG4gICAgRnVuY3Rpb25EaXNwb3Nlci5wcm90b3R5cGUuZG9EaXNwb3NlID0gZnVuY3Rpb24gKHJlc291cmNlLCBpbnNwZWN0aW9uKSB7XG4gICAgICAgIHZhciBmbiA9IHRoaXMuZGF0YSgpO1xuICAgICAgICByZXR1cm4gZm4uY2FsbChyZXNvdXJjZSwgcmVzb3VyY2UsIGluc3BlY3Rpb24pO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBtYXliZVVud3JhcERpc3Bvc2VyKHZhbHVlKSB7XG4gICAgICAgIGlmIChEaXNwb3Nlci5pc0Rpc3Bvc2VyKHZhbHVlKSkge1xuICAgICAgICAgICAgdGhpcy5yZXNvdXJjZXNbdGhpcy5pbmRleF0uX3NldERpc3Bvc2FibGUodmFsdWUpO1xuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnByb21pc2UoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gUmVzb3VyY2VMaXN0KGxlbmd0aCkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5wcm9taXNlID0gbnVsbDtcbiAgICAgICAgdGhpc1tsZW5ndGgtMV0gPSBudWxsO1xuICAgIH1cblxuICAgIFJlc291cmNlTGlzdC5wcm90b3R5cGUuX3Jlc3VsdENhbmNlbGxlZCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbGVuID0gdGhpcy5sZW5ndGg7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gdGhpc1tpXTtcbiAgICAgICAgICAgIGlmIChpdGVtIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uY2FuY2VsKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgUHJvbWlzZS51c2luZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4gPCAyKSByZXR1cm4gYXBpUmVqZWN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ5b3UgbXVzdCBwYXNzIGF0IGxlYXN0IDIgYXJndW1lbnRzIHRvIFByb21pc2UudXNpbmdcIik7XG4gICAgICAgIHZhciBmbiA9IGFyZ3VtZW50c1tsZW4gLSAxXTtcbiAgICAgICAgaWYgKHR5cGVvZiBmbiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gYXBpUmVqZWN0aW9uKFwiZXhwZWN0aW5nIGEgZnVuY3Rpb24gYnV0IGdvdCBcIiArIHV0aWwuY2xhc3NTdHJpbmcoZm4pKTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgaW5wdXQ7XG4gICAgICAgIHZhciBzcHJlYWRBcmdzID0gdHJ1ZTtcbiAgICAgICAgaWYgKGxlbiA9PT0gMiAmJiBBcnJheS5pc0FycmF5KGFyZ3VtZW50c1swXSkpIHtcbiAgICAgICAgICAgIGlucHV0ID0gYXJndW1lbnRzWzBdO1xuICAgICAgICAgICAgbGVuID0gaW5wdXQubGVuZ3RoO1xuICAgICAgICAgICAgc3ByZWFkQXJncyA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5wdXQgPSBhcmd1bWVudHM7XG4gICAgICAgICAgICBsZW4tLTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVzb3VyY2VzID0gbmV3IFJlc291cmNlTGlzdChsZW4pO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICB2YXIgcmVzb3VyY2UgPSBpbnB1dFtpXTtcbiAgICAgICAgICAgIGlmIChEaXNwb3Nlci5pc0Rpc3Bvc2VyKHJlc291cmNlKSkge1xuICAgICAgICAgICAgICAgIHZhciBkaXNwb3NlciA9IHJlc291cmNlO1xuICAgICAgICAgICAgICAgIHJlc291cmNlID0gcmVzb3VyY2UucHJvbWlzZSgpO1xuICAgICAgICAgICAgICAgIHJlc291cmNlLl9zZXREaXNwb3NhYmxlKGRpc3Bvc2VyKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG1heWJlUHJvbWlzZSA9IHRyeUNvbnZlcnRUb1Byb21pc2UocmVzb3VyY2UpO1xuICAgICAgICAgICAgICAgIGlmIChtYXliZVByb21pc2UgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc291cmNlID1cbiAgICAgICAgICAgICAgICAgICAgICAgIG1heWJlUHJvbWlzZS5fdGhlbihtYXliZVVud3JhcERpc3Bvc2VyLCBudWxsLCBudWxsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VzOiByZXNvdXJjZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGlcbiAgICAgICAgICAgICAgICAgICAgfSwgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXNvdXJjZXNbaV0gPSByZXNvdXJjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciByZWZsZWN0ZWRSZXNvdXJjZXMgPSBuZXcgQXJyYXkocmVzb3VyY2VzLmxlbmd0aCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVmbGVjdGVkUmVzb3VyY2VzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICByZWZsZWN0ZWRSZXNvdXJjZXNbaV0gPSBQcm9taXNlLnJlc29sdmUocmVzb3VyY2VzW2ldKS5yZWZsZWN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcmVzdWx0UHJvbWlzZSA9IFByb21pc2UuYWxsKHJlZmxlY3RlZFJlc291cmNlcylcbiAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uKGluc3BlY3Rpb25zKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbnNwZWN0aW9ucy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5zcGVjdGlvbiA9IGluc3BlY3Rpb25zW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5zcGVjdGlvbi5pc1JlamVjdGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yT2JqLmUgPSBpbnNwZWN0aW9uLmVycm9yKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3JPYmo7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWluc3BlY3Rpb24uaXNGdWxmaWxsZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0UHJvbWlzZS5jYW5jZWwoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpbnNwZWN0aW9uc1tpXSA9IGluc3BlY3Rpb24udmFsdWUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJvbWlzZS5fcHVzaENvbnRleHQoKTtcblxuICAgICAgICAgICAgICAgIGZuID0gdHJ5Q2F0Y2goZm4pO1xuICAgICAgICAgICAgICAgIHZhciByZXQgPSBzcHJlYWRBcmdzXG4gICAgICAgICAgICAgICAgICAgID8gZm4uYXBwbHkodW5kZWZpbmVkLCBpbnNwZWN0aW9ucykgOiBmbihpbnNwZWN0aW9ucyk7XG4gICAgICAgICAgICAgICAgdmFyIHByb21pc2VDcmVhdGVkID0gcHJvbWlzZS5fcG9wQ29udGV4dCgpO1xuICAgICAgICAgICAgICAgIGRlYnVnLmNoZWNrRm9yZ290dGVuUmV0dXJucyhcbiAgICAgICAgICAgICAgICAgICAgcmV0LCBwcm9taXNlQ3JlYXRlZCwgXCJQcm9taXNlLnVzaW5nXCIsIHByb21pc2UpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB2YXIgcHJvbWlzZSA9IHJlc3VsdFByb21pc2UubGFzdGx5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGluc3BlY3Rpb24gPSBuZXcgUHJvbWlzZS5Qcm9taXNlSW5zcGVjdGlvbihyZXN1bHRQcm9taXNlKTtcbiAgICAgICAgICAgIHJldHVybiBkaXNwb3NlKHJlc291cmNlcywgaW5zcGVjdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXNvdXJjZXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgICAgIHByb21pc2UuX3NldE9uQ2FuY2VsKHJlc291cmNlcyk7XG4gICAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH07XG5cbiAgICBQcm9taXNlLnByb3RvdHlwZS5fc2V0RGlzcG9zYWJsZSA9IGZ1bmN0aW9uIChkaXNwb3Nlcikge1xuICAgICAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkIHwgMTMxMDcyO1xuICAgICAgICB0aGlzLl9kaXNwb3NlciA9IGRpc3Bvc2VyO1xuICAgIH07XG5cbiAgICBQcm9taXNlLnByb3RvdHlwZS5faXNEaXNwb3NhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX2JpdEZpZWxkICYgMTMxMDcyKSA+IDA7XG4gICAgfTtcblxuICAgIFByb21pc2UucHJvdG90eXBlLl9nZXREaXNwb3NlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rpc3Bvc2VyO1xuICAgIH07XG5cbiAgICBQcm9taXNlLnByb3RvdHlwZS5fdW5zZXREaXNwb3NhYmxlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9iaXRGaWVsZCA9IHRoaXMuX2JpdEZpZWxkICYgKH4xMzEwNzIpO1xuICAgICAgICB0aGlzLl9kaXNwb3NlciA9IHVuZGVmaW5lZDtcbiAgICB9O1xuXG4gICAgUHJvbWlzZS5wcm90b3R5cGUuZGlzcG9zZXIgPSBmdW5jdGlvbiAoZm4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEZ1bmN0aW9uRGlzcG9zZXIoZm4sIHRoaXMsIGNyZWF0ZUNvbnRleHQoKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgIH07XG5cbn07XG5cbn0se1wiLi9lcnJvcnNcIjoxMixcIi4vdXRpbFwiOjM2fV0sMzY6W2Z1bmN0aW9uKF9kZXJlcV8sbW9kdWxlLGV4cG9ydHMpe1xuXCJ1c2Ugc3RyaWN0XCI7XG52YXIgZXM1ID0gX2RlcmVxXyhcIi4vZXM1XCIpO1xudmFyIGNhbkV2YWx1YXRlID0gdHlwZW9mIG5hdmlnYXRvciA9PSBcInVuZGVmaW5lZFwiO1xuXG52YXIgZXJyb3JPYmogPSB7ZToge319O1xudmFyIHRyeUNhdGNoVGFyZ2V0O1xudmFyIGdsb2JhbE9iamVjdCA9IHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiID8gc2VsZiA6XG4gICAgdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6XG4gICAgdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6XG4gICAgdGhpcyAhPT0gdW5kZWZpbmVkID8gdGhpcyA6IG51bGw7XG5cbmZ1bmN0aW9uIHRyeUNhdGNoZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIHRhcmdldCA9IHRyeUNhdGNoVGFyZ2V0O1xuICAgICAgICB0cnlDYXRjaFRhcmdldCA9IG51bGw7XG4gICAgICAgIHJldHVybiB0YXJnZXQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGVycm9yT2JqLmUgPSBlO1xuICAgICAgICByZXR1cm4gZXJyb3JPYmo7XG4gICAgfVxufVxuZnVuY3Rpb24gdHJ5Q2F0Y2goZm4pIHtcbiAgICB0cnlDYXRjaFRhcmdldCA9IGZuO1xuICAgIHJldHVybiB0cnlDYXRjaGVyO1xufVxuXG52YXIgaW5oZXJpdHMgPSBmdW5jdGlvbihDaGlsZCwgUGFyZW50KSB7XG4gICAgdmFyIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcblxuICAgIGZ1bmN0aW9uIFQoKSB7XG4gICAgICAgIHRoaXMuY29uc3RydWN0b3IgPSBDaGlsZDtcbiAgICAgICAgdGhpcy5jb25zdHJ1Y3RvciQgPSBQYXJlbnQ7XG4gICAgICAgIGZvciAodmFyIHByb3BlcnR5TmFtZSBpbiBQYXJlbnQucHJvdG90eXBlKSB7XG4gICAgICAgICAgICBpZiAoaGFzUHJvcC5jYWxsKFBhcmVudC5wcm90b3R5cGUsIHByb3BlcnR5TmFtZSkgJiZcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWUuY2hhckF0KHByb3BlcnR5TmFtZS5sZW5ndGgtMSkgIT09IFwiJFwiXG4gICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHRoaXNbcHJvcGVydHlOYW1lICsgXCIkXCJdID0gUGFyZW50LnByb3RvdHlwZVtwcm9wZXJ0eU5hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFQucHJvdG90eXBlID0gUGFyZW50LnByb3RvdHlwZTtcbiAgICBDaGlsZC5wcm90b3R5cGUgPSBuZXcgVCgpO1xuICAgIHJldHVybiBDaGlsZC5wcm90b3R5cGU7XG59O1xuXG5cbmZ1bmN0aW9uIGlzUHJpbWl0aXZlKHZhbCkge1xuICAgIHJldHVybiB2YWwgPT0gbnVsbCB8fCB2YWwgPT09IHRydWUgfHwgdmFsID09PSBmYWxzZSB8fFxuICAgICAgICB0eXBlb2YgdmFsID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCI7XG5cbn1cblxuZnVuY3Rpb24gaXNPYmplY3QodmFsdWUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHZhbHVlID09PSBcImZ1bmN0aW9uXCIgfHxcbiAgICAgICAgICAgdHlwZW9mIHZhbHVlID09PSBcIm9iamVjdFwiICYmIHZhbHVlICE9PSBudWxsO1xufVxuXG5mdW5jdGlvbiBtYXliZVdyYXBBc0Vycm9yKG1heWJlRXJyb3IpIHtcbiAgICBpZiAoIWlzUHJpbWl0aXZlKG1heWJlRXJyb3IpKSByZXR1cm4gbWF5YmVFcnJvcjtcblxuICAgIHJldHVybiBuZXcgRXJyb3Ioc2FmZVRvU3RyaW5nKG1heWJlRXJyb3IpKTtcbn1cblxuZnVuY3Rpb24gd2l0aEFwcGVuZGVkKHRhcmdldCwgYXBwZW5kZWUpIHtcbiAgICB2YXIgbGVuID0gdGFyZ2V0Lmxlbmd0aDtcbiAgICB2YXIgcmV0ID0gbmV3IEFycmF5KGxlbiArIDEpO1xuICAgIHZhciBpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBsZW47ICsraSkge1xuICAgICAgICByZXRbaV0gPSB0YXJnZXRbaV07XG4gICAgfVxuICAgIHJldFtpXSA9IGFwcGVuZGVlO1xuICAgIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGdldERhdGFQcm9wZXJ0eU9yRGVmYXVsdChvYmosIGtleSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgaWYgKGVzNS5pc0VTNSkge1xuICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpO1xuXG4gICAgICAgIGlmIChkZXNjICE9IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBkZXNjLmdldCA9PSBudWxsICYmIGRlc2Muc2V0ID09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgPyBkZXNjLnZhbHVlXG4gICAgICAgICAgICAgICAgICAgIDogZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHt9Lmhhc093blByb3BlcnR5LmNhbGwob2JqLCBrZXkpID8gb2JqW2tleV0gOiB1bmRlZmluZWQ7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBub3RFbnVtZXJhYmxlUHJvcChvYmosIG5hbWUsIHZhbHVlKSB7XG4gICAgaWYgKGlzUHJpbWl0aXZlKG9iaikpIHJldHVybiBvYmo7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSB7XG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9O1xuICAgIGVzNS5kZWZpbmVQcm9wZXJ0eShvYmosIG5hbWUsIGRlc2NyaXB0b3IpO1xuICAgIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIHRocm93ZXIocikge1xuICAgIHRocm93IHI7XG59XG5cbnZhciBpbmhlcml0ZWREYXRhS2V5cyA9IChmdW5jdGlvbigpIHtcbiAgICB2YXIgZXhjbHVkZWRQcm90b3R5cGVzID0gW1xuICAgICAgICBBcnJheS5wcm90b3R5cGUsXG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUsXG4gICAgICAgIEZ1bmN0aW9uLnByb3RvdHlwZVxuICAgIF07XG5cbiAgICB2YXIgaXNFeGNsdWRlZFByb3RvID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZXhjbHVkZWRQcm90b3R5cGVzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBpZiAoZXhjbHVkZWRQcm90b3R5cGVzW2ldID09PSB2YWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcblxuICAgIGlmIChlczUuaXNFUzUpIHtcbiAgICAgICAgdmFyIGdldEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgdmFyIHJldCA9IFtdO1xuICAgICAgICAgICAgdmFyIHZpc2l0ZWRLZXlzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICAgIHdoaWxlIChvYmogIT0gbnVsbCAmJiAhaXNFeGNsdWRlZFByb3RvKG9iaikpIHtcbiAgICAgICAgICAgICAgICB2YXIga2V5cztcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBrZXlzID0gZ2V0S2V5cyhvYmopO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAodmlzaXRlZEtleXNba2V5XSkgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIHZpc2l0ZWRLZXlzW2tleV0gPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLCBrZXkpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzYyAhPSBudWxsICYmIGRlc2MuZ2V0ID09IG51bGwgJiYgZGVzYy5zZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvYmogPSBlczUuZ2V0UHJvdG90eXBlT2Yob2JqKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGhhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG9iaikge1xuICAgICAgICAgICAgaWYgKGlzRXhjbHVkZWRQcm90byhvYmopKSByZXR1cm4gW107XG4gICAgICAgICAgICB2YXIgcmV0ID0gW107XG5cbiAgICAgICAgICAgIC8qanNoaW50IGZvcmluOmZhbHNlICovXG4gICAgICAgICAgICBlbnVtZXJhdGlvbjogZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgICAgICAgICAgIGlmIChoYXNQcm9wLmNhbGwob2JqLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldC5wdXNoKGtleSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBleGNsdWRlZFByb3RvdHlwZXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNQcm9wLmNhbGwoZXhjbHVkZWRQcm90b3R5cGVzW2ldLCBrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWUgZW51bWVyYXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0LnB1c2goa2V5KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9O1xuICAgIH1cblxufSkoKTtcblxudmFyIHRoaXNBc3NpZ25tZW50UGF0dGVybiA9IC90aGlzXFxzKlxcLlxccypcXFMrXFxzKj0vO1xuZnVuY3Rpb24gaXNDbGFzcyhmbikge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgZm4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBlczUubmFtZXMoZm4ucHJvdG90eXBlKTtcblxuICAgICAgICAgICAgdmFyIGhhc01ldGhvZHMgPSBlczUuaXNFUzUgJiYga2V5cy5sZW5ndGggPiAxO1xuICAgICAgICAgICAgdmFyIGhhc01ldGhvZHNPdGhlclRoYW5Db25zdHJ1Y3RvciA9IGtleXMubGVuZ3RoID4gMCAmJlxuICAgICAgICAgICAgICAgICEoa2V5cy5sZW5ndGggPT09IDEgJiYga2V5c1swXSA9PT0gXCJjb25zdHJ1Y3RvclwiKTtcbiAgICAgICAgICAgIHZhciBoYXNUaGlzQXNzaWdubWVudEFuZFN0YXRpY01ldGhvZHMgPVxuICAgICAgICAgICAgICAgIHRoaXNBc3NpZ25tZW50UGF0dGVybi50ZXN0KGZuICsgXCJcIikgJiYgZXM1Lm5hbWVzKGZuKS5sZW5ndGggPiAwO1xuXG4gICAgICAgICAgICBpZiAoaGFzTWV0aG9kcyB8fCBoYXNNZXRob2RzT3RoZXJUaGFuQ29uc3RydWN0b3IgfHxcbiAgICAgICAgICAgICAgICBoYXNUaGlzQXNzaWdubWVudEFuZFN0YXRpY01ldGhvZHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5mdW5jdGlvbiB0b0Zhc3RQcm9wZXJ0aWVzKG9iaikge1xuICAgIC8qanNoaW50IC1XMDI3LC1XMDU1LC1XMDMxKi9cbiAgICBmdW5jdGlvbiBGYWtlQ29uc3RydWN0b3IoKSB7fVxuICAgIEZha2VDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBvYmo7XG4gICAgdmFyIGwgPSA4O1xuICAgIHdoaWxlIChsLS0pIG5ldyBGYWtlQ29uc3RydWN0b3IoKTtcbiAgICByZXR1cm4gb2JqO1xuICAgIGV2YWwob2JqKTtcbn1cblxudmFyIHJpZGVudCA9IC9eW2EteiRfXVthLXokXzAtOV0qJC9pO1xuZnVuY3Rpb24gaXNJZGVudGlmaWVyKHN0cikge1xuICAgIHJldHVybiByaWRlbnQudGVzdChzdHIpO1xufVxuXG5mdW5jdGlvbiBmaWxsZWRSYW5nZShjb3VudCwgcHJlZml4LCBzdWZmaXgpIHtcbiAgICB2YXIgcmV0ID0gbmV3IEFycmF5KGNvdW50KTtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgY291bnQ7ICsraSkge1xuICAgICAgICByZXRbaV0gPSBwcmVmaXggKyBpICsgc3VmZml4O1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBzYWZlVG9TdHJpbmcob2JqKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIG9iaiArIFwiXCI7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gXCJbbm8gc3RyaW5nIHJlcHJlc2VudGF0aW9uXVwiO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNFcnJvcihvYmopIHtcbiAgICByZXR1cm4gb2JqICE9PSBudWxsICYmXG4gICAgICAgICAgIHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIgJiZcbiAgICAgICAgICAgdHlwZW9mIG9iai5tZXNzYWdlID09PSBcInN0cmluZ1wiICYmXG4gICAgICAgICAgIHR5cGVvZiBvYmoubmFtZSA9PT0gXCJzdHJpbmdcIjtcbn1cblxuZnVuY3Rpb24gbWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uKGUpIHtcbiAgICB0cnkge1xuICAgICAgICBub3RFbnVtZXJhYmxlUHJvcChlLCBcImlzT3BlcmF0aW9uYWxcIiwgdHJ1ZSk7XG4gICAgfVxuICAgIGNhdGNoKGlnbm9yZSkge31cbn1cblxuZnVuY3Rpb24gb3JpZ2luYXRlc0Zyb21SZWplY3Rpb24oZSkge1xuICAgIGlmIChlID09IG51bGwpIHJldHVybiBmYWxzZTtcbiAgICByZXR1cm4gKChlIGluc3RhbmNlb2YgRXJyb3JbXCJfX0JsdWViaXJkRXJyb3JUeXBlc19fXCJdLk9wZXJhdGlvbmFsRXJyb3IpIHx8XG4gICAgICAgIGVbXCJpc09wZXJhdGlvbmFsXCJdID09PSB0cnVlKTtcbn1cblxuZnVuY3Rpb24gY2FuQXR0YWNoVHJhY2Uob2JqKSB7XG4gICAgcmV0dXJuIGlzRXJyb3Iob2JqKSAmJiBlczUucHJvcGVydHlJc1dyaXRhYmxlKG9iaiwgXCJzdGFja1wiKTtcbn1cblxudmFyIGVuc3VyZUVycm9yT2JqZWN0ID0gKGZ1bmN0aW9uKCkge1xuICAgIGlmICghKFwic3RhY2tcIiBpbiBuZXcgRXJyb3IoKSkpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoY2FuQXR0YWNoVHJhY2UodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgICAgICAgICB0cnkge3Rocm93IG5ldyBFcnJvcihzYWZlVG9TdHJpbmcodmFsdWUpKTt9XG4gICAgICAgICAgICBjYXRjaChlcnIpIHtyZXR1cm4gZXJyO31cbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChjYW5BdHRhY2hUcmFjZSh2YWx1ZSkpIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3Ioc2FmZVRvU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgIH07XG4gICAgfVxufSkoKTtcblxuZnVuY3Rpb24gY2xhc3NTdHJpbmcob2JqKSB7XG4gICAgcmV0dXJuIHt9LnRvU3RyaW5nLmNhbGwob2JqKTtcbn1cblxuZnVuY3Rpb24gY29weURlc2NyaXB0b3JzKGZyb20sIHRvLCBmaWx0ZXIpIHtcbiAgICB2YXIga2V5cyA9IGVzNS5uYW1lcyhmcm9tKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgICAgIGlmIChmaWx0ZXIoa2V5KSkge1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBlczUuZGVmaW5lUHJvcGVydHkodG8sIGtleSwgZXM1LmdldERlc2NyaXB0b3IoZnJvbSwga2V5KSk7XG4gICAgICAgICAgICB9IGNhdGNoIChpZ25vcmUpIHt9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnZhciBhc0FycmF5ID0gZnVuY3Rpb24odikge1xuICAgIGlmIChlczUuaXNBcnJheSh2KSkge1xuICAgICAgICByZXR1cm4gdjtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG59O1xuXG5pZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IpIHtcbiAgICB2YXIgQXJyYXlGcm9tID0gdHlwZW9mIEFycmF5LmZyb20gPT09IFwiZnVuY3Rpb25cIiA/IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odik7XG4gICAgfSA6IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgdmFyIHJldCA9IFtdO1xuICAgICAgICB2YXIgaXQgPSB2W1N5bWJvbC5pdGVyYXRvcl0oKTtcbiAgICAgICAgdmFyIGl0UmVzdWx0O1xuICAgICAgICB3aGlsZSAoISgoaXRSZXN1bHQgPSBpdC5uZXh0KCkpLmRvbmUpKSB7XG4gICAgICAgICAgICByZXQucHVzaChpdFJlc3VsdC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICB9O1xuXG4gICAgYXNBcnJheSA9IGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgaWYgKGVzNS5pc0FycmF5KHYpKSB7XG4gICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgfSBlbHNlIGlmICh2ICE9IG51bGwgJiYgdHlwZW9mIHZbU3ltYm9sLml0ZXJhdG9yXSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXlGcm9tKHYpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH07XG59XG5cbnZhciBpc05vZGUgPSB0eXBlb2YgcHJvY2VzcyAhPT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgICBjbGFzc1N0cmluZyhwcm9jZXNzKS50b0xvd2VyQ2FzZSgpID09PSBcIltvYmplY3QgcHJvY2Vzc11cIjtcblxuZnVuY3Rpb24gZW52KGtleSwgZGVmKSB7XG4gICAgcmV0dXJuIGlzTm9kZSA/IHByb2Nlc3MuZW52W2tleV0gOiBkZWY7XG59XG5cbmZ1bmN0aW9uIGdldE5hdGl2ZVByb21pc2UoKSB7XG4gICAgaWYgKHR5cGVvZiBQcm9taXNlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24oKXt9KTtcbiAgICAgICAgICAgIGlmICh7fS50b1N0cmluZy5jYWxsKHByb21pc2UpID09PSBcIltvYmplY3QgUHJvbWlzZV1cIikge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgIH1cbn1cblxudmFyIHJldCA9IHtcbiAgICBpc0NsYXNzOiBpc0NsYXNzLFxuICAgIGlzSWRlbnRpZmllcjogaXNJZGVudGlmaWVyLFxuICAgIGluaGVyaXRlZERhdGFLZXlzOiBpbmhlcml0ZWREYXRhS2V5cyxcbiAgICBnZXREYXRhUHJvcGVydHlPckRlZmF1bHQ6IGdldERhdGFQcm9wZXJ0eU9yRGVmYXVsdCxcbiAgICB0aHJvd2VyOiB0aHJvd2VyLFxuICAgIGlzQXJyYXk6IGVzNS5pc0FycmF5LFxuICAgIGFzQXJyYXk6IGFzQXJyYXksXG4gICAgbm90RW51bWVyYWJsZVByb3A6IG5vdEVudW1lcmFibGVQcm9wLFxuICAgIGlzUHJpbWl0aXZlOiBpc1ByaW1pdGl2ZSxcbiAgICBpc09iamVjdDogaXNPYmplY3QsXG4gICAgaXNFcnJvcjogaXNFcnJvcixcbiAgICBjYW5FdmFsdWF0ZTogY2FuRXZhbHVhdGUsXG4gICAgZXJyb3JPYmo6IGVycm9yT2JqLFxuICAgIHRyeUNhdGNoOiB0cnlDYXRjaCxcbiAgICBpbmhlcml0czogaW5oZXJpdHMsXG4gICAgd2l0aEFwcGVuZGVkOiB3aXRoQXBwZW5kZWQsXG4gICAgbWF5YmVXcmFwQXNFcnJvcjogbWF5YmVXcmFwQXNFcnJvcixcbiAgICB0b0Zhc3RQcm9wZXJ0aWVzOiB0b0Zhc3RQcm9wZXJ0aWVzLFxuICAgIGZpbGxlZFJhbmdlOiBmaWxsZWRSYW5nZSxcbiAgICB0b1N0cmluZzogc2FmZVRvU3RyaW5nLFxuICAgIGNhbkF0dGFjaFRyYWNlOiBjYW5BdHRhY2hUcmFjZSxcbiAgICBlbnN1cmVFcnJvck9iamVjdDogZW5zdXJlRXJyb3JPYmplY3QsXG4gICAgb3JpZ2luYXRlc0Zyb21SZWplY3Rpb246IG9yaWdpbmF0ZXNGcm9tUmVqZWN0aW9uLFxuICAgIG1hcmtBc09yaWdpbmF0aW5nRnJvbVJlamVjdGlvbjogbWFya0FzT3JpZ2luYXRpbmdGcm9tUmVqZWN0aW9uLFxuICAgIGNsYXNzU3RyaW5nOiBjbGFzc1N0cmluZyxcbiAgICBjb3B5RGVzY3JpcHRvcnM6IGNvcHlEZXNjcmlwdG9ycyxcbiAgICBoYXNEZXZUb29sczogdHlwZW9mIGNocm9tZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjaHJvbWUgJiZcbiAgICAgICAgICAgICAgICAgdHlwZW9mIGNocm9tZS5sb2FkVGltZXMgPT09IFwiZnVuY3Rpb25cIixcbiAgICBpc05vZGU6IGlzTm9kZSxcbiAgICBlbnY6IGVudixcbiAgICBnbG9iYWw6IGdsb2JhbE9iamVjdCxcbiAgICBnZXROYXRpdmVQcm9taXNlOiBnZXROYXRpdmVQcm9taXNlXG59O1xucmV0LmlzUmVjZW50Tm9kZSA9IHJldC5pc05vZGUgJiYgKGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ZXJzaW9uID0gcHJvY2Vzcy52ZXJzaW9ucy5ub2RlLnNwbGl0KFwiLlwiKS5tYXAoTnVtYmVyKTtcbiAgICByZXR1cm4gKHZlcnNpb25bMF0gPT09IDAgJiYgdmVyc2lvblsxXSA+IDEwKSB8fCAodmVyc2lvblswXSA+IDApO1xufSkoKTtcblxuaWYgKHJldC5pc05vZGUpIHJldC50b0Zhc3RQcm9wZXJ0aWVzKHByb2Nlc3MpO1xuXG50cnkge3Rocm93IG5ldyBFcnJvcigpOyB9IGNhdGNoIChlKSB7cmV0Lmxhc3RMaW5lRXJyb3IgPSBlO31cbm1vZHVsZS5leHBvcnRzID0gcmV0O1xuXG59LHtcIi4vZXM1XCI6MTN9XX0se30sWzRdKSg0KVxufSk7ICAgICAgICAgICAgICAgICAgICA7aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdyAhPT0gbnVsbCkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuUCA9IHdpbmRvdy5Qcm9taXNlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygc2VsZiAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZiAhPT0gbnVsbCkgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5QID0gc2VsZi5Qcm9taXNlOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYmx1ZWJpcmQvanMvYnJvd3Nlci9ibHVlYmlyZC5qc1xuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5yZWxhdGl2ZVRvRmlsZSA9IHJlbGF0aXZlVG9GaWxlO1xuZXhwb3J0cy5qb2luID0gam9pbjtcbmV4cG9ydHMuYnVpbGRRdWVyeVN0cmluZyA9IGJ1aWxkUXVlcnlTdHJpbmc7XG5leHBvcnRzLnBhcnNlUXVlcnlTdHJpbmcgPSBwYXJzZVF1ZXJ5U3RyaW5nO1xuXG5mdW5jdGlvbiB0cmltRG90cyhhcnkpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnkubGVuZ3RoOyArK2kpIHtcbiAgICB2YXIgcGFydCA9IGFyeVtpXTtcbiAgICBpZiAocGFydCA9PT0gJy4nKSB7XG4gICAgICBhcnkuc3BsaWNlKGksIDEpO1xuICAgICAgaSAtPSAxO1xuICAgIH0gZWxzZSBpZiAocGFydCA9PT0gJy4uJykge1xuICAgICAgaWYgKGkgPT09IDAgfHwgaSA9PT0gMSAmJiBhcnlbMl0gPT09ICcuLicgfHwgYXJ5W2kgLSAxXSA9PT0gJy4uJykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH0gZWxzZSBpZiAoaSA+IDApIHtcbiAgICAgICAgYXJ5LnNwbGljZShpIC0gMSwgMik7XG4gICAgICAgIGkgLT0gMjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVsYXRpdmVUb0ZpbGUobmFtZSwgZmlsZSkge1xuICB2YXIgZmlsZVBhcnRzID0gZmlsZSAmJiBmaWxlLnNwbGl0KCcvJyk7XG4gIHZhciBuYW1lUGFydHMgPSBuYW1lLnRyaW0oKS5zcGxpdCgnLycpO1xuXG4gIGlmIChuYW1lUGFydHNbMF0uY2hhckF0KDApID09PSAnLicgJiYgZmlsZVBhcnRzKSB7XG4gICAgdmFyIG5vcm1hbGl6ZWRCYXNlUGFydHMgPSBmaWxlUGFydHMuc2xpY2UoMCwgZmlsZVBhcnRzLmxlbmd0aCAtIDEpO1xuICAgIG5hbWVQYXJ0cy51bnNoaWZ0LmFwcGx5KG5hbWVQYXJ0cywgbm9ybWFsaXplZEJhc2VQYXJ0cyk7XG4gIH1cblxuICB0cmltRG90cyhuYW1lUGFydHMpO1xuXG4gIHJldHVybiBuYW1lUGFydHMuam9pbignLycpO1xufVxuXG5mdW5jdGlvbiBqb2luKHBhdGgxLCBwYXRoMikge1xuICBpZiAoIXBhdGgxKSB7XG4gICAgcmV0dXJuIHBhdGgyO1xuICB9XG5cbiAgaWYgKCFwYXRoMikge1xuICAgIHJldHVybiBwYXRoMTtcbiAgfVxuXG4gIHZhciBzY2hlbWVNYXRjaCA9IHBhdGgxLm1hdGNoKC9eKFteL10qPzopXFwvLyk7XG4gIHZhciBzY2hlbWUgPSBzY2hlbWVNYXRjaCAmJiBzY2hlbWVNYXRjaC5sZW5ndGggPiAwID8gc2NoZW1lTWF0Y2hbMV0gOiAnJztcbiAgcGF0aDEgPSBwYXRoMS5zdWJzdHIoc2NoZW1lLmxlbmd0aCk7XG5cbiAgdmFyIHVybFByZWZpeCA9IHZvaWQgMDtcbiAgaWYgKHBhdGgxLmluZGV4T2YoJy8vLycpID09PSAwICYmIHNjaGVtZSA9PT0gJ2ZpbGU6Jykge1xuICAgIHVybFByZWZpeCA9ICcvLy8nO1xuICB9IGVsc2UgaWYgKHBhdGgxLmluZGV4T2YoJy8vJykgPT09IDApIHtcbiAgICB1cmxQcmVmaXggPSAnLy8nO1xuICB9IGVsc2UgaWYgKHBhdGgxLmluZGV4T2YoJy8nKSA9PT0gMCkge1xuICAgIHVybFByZWZpeCA9ICcvJztcbiAgfSBlbHNlIHtcbiAgICB1cmxQcmVmaXggPSAnJztcbiAgfVxuXG4gIHZhciB0cmFpbGluZ1NsYXNoID0gcGF0aDIuc2xpY2UoLTEpID09PSAnLycgPyAnLycgOiAnJztcblxuICB2YXIgdXJsMSA9IHBhdGgxLnNwbGl0KCcvJyk7XG4gIHZhciB1cmwyID0gcGF0aDIuc3BsaXQoJy8nKTtcbiAgdmFyIHVybDMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMCwgaWkgPSB1cmwxLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICBpZiAodXJsMVtpXSA9PT0gJy4uJykge1xuICAgICAgdXJsMy5wb3AoKTtcbiAgICB9IGVsc2UgaWYgKHVybDFbaV0gPT09ICcuJyB8fCB1cmwxW2ldID09PSAnJykge1xuICAgICAgY29udGludWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVybDMucHVzaCh1cmwxW2ldKTtcbiAgICB9XG4gIH1cblxuICBmb3IgKHZhciBfaSA9IDAsIF9paSA9IHVybDIubGVuZ3RoOyBfaSA8IF9paTsgKytfaSkge1xuICAgIGlmICh1cmwyW19pXSA9PT0gJy4uJykge1xuICAgICAgdXJsMy5wb3AoKTtcbiAgICB9IGVsc2UgaWYgKHVybDJbX2ldID09PSAnLicgfHwgdXJsMltfaV0gPT09ICcnKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXJsMy5wdXNoKHVybDJbX2ldKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gc2NoZW1lICsgdXJsUHJlZml4ICsgdXJsMy5qb2luKCcvJykgKyB0cmFpbGluZ1NsYXNoO1xufVxuXG52YXIgZW5jb2RlID0gZW5jb2RlVVJJQ29tcG9uZW50O1xudmFyIGVuY29kZUtleSA9IGZ1bmN0aW9uIGVuY29kZUtleShrKSB7XG4gIHJldHVybiBlbmNvZGUoaykucmVwbGFjZSgnJTI0JywgJyQnKTtcbn07XG5cbmZ1bmN0aW9uIGJ1aWxkUGFyYW0oa2V5LCB2YWx1ZSkge1xuICB2YXIgcmVzdWx0ID0gW107XG4gIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHZhbHVlLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIGFycmF5S2V5ID0ga2V5ICsgJ1snICsgKF90eXBlb2YodmFsdWVbaV0pID09PSAnb2JqZWN0JyAmJiB2YWx1ZVtpXSAhPT0gbnVsbCA/IGkgOiAnJykgKyAnXSc7XG4gICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGJ1aWxkUGFyYW0oYXJyYXlLZXksIHZhbHVlW2ldKSk7XG4gICAgfVxuICB9IGVsc2UgaWYgKCh0eXBlb2YgdmFsdWUgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHZhbHVlKSkgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yICh2YXIgcHJvcGVydHlOYW1lIGluIHZhbHVlKSB7XG4gICAgICByZXN1bHQgPSByZXN1bHQuY29uY2F0KGJ1aWxkUGFyYW0oa2V5ICsgJ1snICsgcHJvcGVydHlOYW1lICsgJ10nLCB2YWx1ZVtwcm9wZXJ0eU5hbWVdKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJlc3VsdC5wdXNoKGVuY29kZUtleShrZXkpICsgJz0nICsgZW5jb2RlKHZhbHVlKSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gYnVpbGRRdWVyeVN0cmluZyhwYXJhbXMpIHtcbiAgdmFyIHBhaXJzID0gW107XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMocGFyYW1zIHx8IHt9KS5zb3J0KCk7XG4gIGZvciAodmFyIGkgPSAwLCBsZW4gPSBrZXlzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgcGFpcnMgPSBwYWlycy5jb25jYXQoYnVpbGRQYXJhbShrZXksIHBhcmFtc1trZXldKSk7XG4gIH1cblxuICBpZiAocGFpcnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuICcnO1xuICB9XG5cbiAgcmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcbn1cblxuZnVuY3Rpb24gcHJvY2Vzc1NjYWxhclBhcmFtKGV4aXN0ZWRQYXJhbSwgdmFsdWUsIGlzUHJpbWl0aXZlKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KGV4aXN0ZWRQYXJhbSkpIHtcbiAgICBleGlzdGVkUGFyYW0ucHVzaCh2YWx1ZSk7XG4gICAgcmV0dXJuIGV4aXN0ZWRQYXJhbTtcbiAgfVxuICBpZiAoZXhpc3RlZFBhcmFtICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gaXNQcmltaXRpdmUgPyB2YWx1ZSA6IFtleGlzdGVkUGFyYW0sIHZhbHVlXTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gcGFyc2VDb21wbGV4UGFyYW0ocXVlcnlQYXJhbXMsIGtleXMsIHZhbHVlKSB7XG4gIHZhciBjdXJyZW50UGFyYW1zID0gcXVlcnlQYXJhbXM7XG4gIHZhciBrZXlzTGFzdEluZGV4ID0ga2V5cy5sZW5ndGggLSAxO1xuICBmb3IgKHZhciBqID0gMDsgaiA8PSBrZXlzTGFzdEluZGV4OyBqKyspIHtcbiAgICB2YXIga2V5ID0ga2V5c1tqXSA9PT0gJycgPyBjdXJyZW50UGFyYW1zLmxlbmd0aCA6IGtleXNbal07XG4gICAgaWYgKGogPCBrZXlzTGFzdEluZGV4KSB7XG4gICAgICBjdXJyZW50UGFyYW1zID0gY3VycmVudFBhcmFtc1trZXldID0gY3VycmVudFBhcmFtc1trZXldIHx8IChpc05hTihrZXlzW2ogKyAxXSkgPyB7fSA6IFtdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY3VycmVudFBhcmFtcyA9IGN1cnJlbnRQYXJhbXNba2V5XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZVF1ZXJ5U3RyaW5nKHF1ZXJ5U3RyaW5nKSB7XG4gIHZhciBxdWVyeVBhcmFtcyA9IHt9O1xuICBpZiAoIXF1ZXJ5U3RyaW5nIHx8IHR5cGVvZiBxdWVyeVN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gcXVlcnlQYXJhbXM7XG4gIH1cblxuICB2YXIgcXVlcnkgPSBxdWVyeVN0cmluZztcbiAgaWYgKHF1ZXJ5LmNoYXJBdCgwKSA9PT0gJz8nKSB7XG4gICAgcXVlcnkgPSBxdWVyeS5zdWJzdHIoMSk7XG4gIH1cblxuICB2YXIgcGFpcnMgPSBxdWVyeS5yZXBsYWNlKC9cXCsvZywgJyAnKS5zcGxpdCgnJicpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHBhaXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHBhaXIgPSBwYWlyc1tpXS5zcGxpdCgnPScpO1xuICAgIHZhciBrZXkgPSBkZWNvZGVVUklDb21wb25lbnQocGFpclswXSk7XG4gICAgdmFyIGlzUHJpbWl0aXZlID0gZmFsc2U7XG4gICAgaWYgKCFrZXkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIHZhciBrZXlzID0ga2V5LnNwbGl0KCddWycpO1xuICAgIHZhciBrZXlzTGFzdEluZGV4ID0ga2V5cy5sZW5ndGggLSAxO1xuXG4gICAgaWYgKC9cXFsvLnRlc3Qoa2V5c1swXSkgJiYgL1xcXSQvLnRlc3Qoa2V5c1trZXlzTGFzdEluZGV4XSkpIHtcbiAgICAgIGtleXNba2V5c0xhc3RJbmRleF0gPSBrZXlzW2tleXNMYXN0SW5kZXhdLnJlcGxhY2UoL1xcXSQvLCAnJyk7XG4gICAgICBrZXlzID0ga2V5cy5zaGlmdCgpLnNwbGl0KCdbJykuY29uY2F0KGtleXMpO1xuICAgICAga2V5c0xhc3RJbmRleCA9IGtleXMubGVuZ3RoIC0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXNQcmltaXRpdmUgPSB0cnVlO1xuICAgICAga2V5c0xhc3RJbmRleCA9IDA7XG4gICAgfVxuXG4gICAgaWYgKHBhaXIubGVuZ3RoID49IDIpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHBhaXJbMV0gPyBkZWNvZGVVUklDb21wb25lbnQocGFpclsxXSkgOiAnJztcbiAgICAgIGlmIChrZXlzTGFzdEluZGV4KSB7XG4gICAgICAgIHBhcnNlQ29tcGxleFBhcmFtKHF1ZXJ5UGFyYW1zLCBrZXlzLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBxdWVyeVBhcmFtc1trZXldID0gcHJvY2Vzc1NjYWxhclBhcmFtKHF1ZXJ5UGFyYW1zW2tleV0sIHZhbHVlLCBpc1ByaW1pdGl2ZSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5UGFyYW1zW2tleV0gPSB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcXVlcnlQYXJhbXM7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2F1cmVsaWEtcGF0aC9kaXN0L2NvbW1vbmpzL2F1cmVsaWEtcGF0aC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBodHRwczovL3Jhdy5naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL21hc3Rlci9MSUNFTlNFIGZpbGUuIEFuXG4gKiBhZGRpdGlvbmFsIGdyYW50IG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW5cbiAqIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciAkU3ltYm9sID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiID8gU3ltYm9sIDoge307XG4gIHZhciBpdGVyYXRvclN5bWJvbCA9ICRTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG4gIHZhciB0b1N0cmluZ1RhZ1N5bWJvbCA9ICRTeW1ib2wudG9TdHJpbmdUYWcgfHwgXCJAQHRvU3RyaW5nVGFnXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZSgob3V0ZXJGbiB8fCBHZW5lcmF0b3IpLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGVbdG9TdHJpbmdUYWdTeW1ib2xdID0gR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgICBpZiAoISh0b1N0cmluZ1RhZ1N5bWJvbCBpbiBnZW5GdW4pKSB7XG4gICAgICAgIGdlbkZ1blt0b1N0cmluZ1RhZ1N5bWJvbF0gPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgdmFsdWUgaW5zdGFuY2VvZiBBd2FpdEFyZ3VtZW50YCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC4gU29tZSBtYXkgY29uc2lkZXIgdGhlIG5hbWUgb2YgdGhpcyBtZXRob2QgdG9vXG4gIC8vIGN1dGVzeSwgYnV0IHRoZXkgYXJlIGN1cm11ZGdlb25zLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIG5ldyBBd2FpdEFyZ3VtZW50KGFyZyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gQXdhaXRBcmd1bWVudChhcmcpIHtcbiAgICB0aGlzLmFyZyA9IGFyZztcbiAgfVxuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChnZW5lcmF0b3JbbWV0aG9kXSwgZ2VuZXJhdG9yLCBhcmcpO1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgcmVqZWN0KHJlY29yZC5hcmcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgQXdhaXRBcmd1bWVudCkge1xuICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUuYXJnKS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICBpbnZva2UoXCJuZXh0XCIsIHZhbHVlLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0sIGZ1bmN0aW9uKGVycikge1xuICAgICAgICAgICAgaW52b2tlKFwidGhyb3dcIiwgZXJyLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSBcIm9iamVjdFwiICYmIHByb2Nlc3MuZG9tYWluKSB7XG4gICAgICBpbnZva2UgPSBwcm9jZXNzLmRvbWFpbi5iaW5kKGludm9rZSk7XG4gICAgfVxuXG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaW52b2tlKG1ldGhvZCwgYXJnLCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIgfHxcbiAgICAgICAgICAgICAgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiICYmIGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0gPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgIC8vIEEgcmV0dXJuIG9yIHRocm93ICh3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gdGhyb3dcbiAgICAgICAgICAgIC8vIG1ldGhvZCkgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICAgIHZhciByZXR1cm5NZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXTtcbiAgICAgICAgICAgIGlmIChyZXR1cm5NZXRob2QpIHtcbiAgICAgICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKHJldHVybk1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGFyZyk7XG4gICAgICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHJldHVybiBtZXRob2QgdGhyZXcgYW4gZXhjZXB0aW9uLCBsZXQgdGhhdFxuICAgICAgICAgICAgICAgIC8vIGV4Y2VwdGlvbiBwcmV2YWlsIG92ZXIgdGhlIG9yaWdpbmFsIHJldHVybiBvciB0aHJvdy5cbiAgICAgICAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgICAgIC8vIENvbnRpbnVlIHdpdGggdGhlIG91dGVyIHJldHVybiwgbm93IHRoYXQgdGhlIGRlbGVnYXRlXG4gICAgICAgICAgICAgIC8vIGl0ZXJhdG9yIGhhcyBiZWVuIHRlcm1pbmF0ZWQuXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChcbiAgICAgICAgICAgIGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0sXG4gICAgICAgICAgICBkZWxlZ2F0ZS5pdGVyYXRvcixcbiAgICAgICAgICAgIGFyZ1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIExpa2UgcmV0dXJuaW5nIGdlbmVyYXRvci50aHJvdyh1bmNhdWdodCksIGJ1dCB3aXRob3V0IHRoZVxuICAgICAgICAgICAgLy8gb3ZlcmhlYWQgb2YgYW4gZXh0cmEgZnVuY3Rpb24gY2FsbC5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBEZWxlZ2F0ZSBnZW5lcmF0b3IgcmFuIGFuZCBoYW5kbGVkIGl0cyBvd24gZXhjZXB0aW9ucyBzb1xuICAgICAgICAgIC8vIHJlZ2FyZGxlc3Mgb2Ygd2hhdCB0aGUgbWV0aG9kIHdhcywgd2UgY29udGludWUgYXMgaWYgaXQgaXNcbiAgICAgICAgICAvLyBcIm5leHRcIiB3aXRoIGFuIHVuZGVmaW5lZCBhcmcuXG4gICAgICAgICAgbWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuICAgICAgICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuICAgICAgICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIC8vIFNldHRpbmcgY29udGV4dC5fc2VudCBmb3IgbGVnYWN5IHN1cHBvcnQgb2YgQmFiZWwnc1xuICAgICAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICAgICAgY29udGV4dC5zZW50ID0gY29udGV4dC5fc2VudCA9IGFyZztcblxuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGFyZykpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgICAgbWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICB2YXIgaW5mbyA9IHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5kZWxlZ2F0ZSAmJiBtZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihhcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwW3RvU3RyaW5nVGFnU3ltYm9sXSA9IFwiR2VuZXJhdG9yXCI7XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgLy8gUmVzZXR0aW5nIGNvbnRleHQuX3NlbnQgZm9yIGxlZ2FjeSBzdXBwb3J0IG9mIEJhYmVsJ3NcbiAgICAgIC8vIGZ1bmN0aW9uLnNlbnQgaW1wbGVtZW50YXRpb24uXG4gICAgICB0aGlzLnNlbnQgPSB0aGlzLl9zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuICAgICAgICByZXR1cm4gISFjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEFtb25nIHRoZSB2YXJpb3VzIHRyaWNrcyBmb3Igb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWxcbiAgLy8gb2JqZWN0LCB0aGlzIHNlZW1zIHRvIGJlIHRoZSBtb3N0IHJlbGlhYmxlIHRlY2huaXF1ZSB0aGF0IGRvZXMgbm90XG4gIC8vIHVzZSBpbmRpcmVjdCBldmFsICh3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeSkuXG4gIHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOlxuICB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiID8gd2luZG93IDpcbiAgdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDogdGhpc1xuKTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanNcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsInZhciBnO1xyXG5cclxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcclxuZyA9IChmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pKCk7XHJcblxyXG50cnkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxyXG5cdGcgPSBnIHx8IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKSB8fCAoMSxldmFsKShcInRoaXNcIik7XHJcbn0gY2F0Y2goZSkge1xyXG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXHJcblx0aWYodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIilcclxuXHRcdGcgPSB3aW5kb3c7XHJcbn1cclxuXHJcbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cclxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3NcclxuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnO1xyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAod2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanNcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ib290c3RyYXAgPSBib290c3RyYXA7XG5cbnJlcXVpcmUoJ2F1cmVsaWEtcG9seWZpbGxzJyk7XG5cbnZhciBfYXVyZWxpYVBhbEJyb3dzZXIgPSByZXF1aXJlKCdhdXJlbGlhLXBhbC1icm93c2VyJyk7XG5cbnZhciBfYXVyZWxpYUxvYWRlcldlYnBhY2sgPSByZXF1aXJlKCdhdXJlbGlhLWxvYWRlci13ZWJwYWNrJyk7XG5cbigwLCBfYXVyZWxpYVBhbEJyb3dzZXIuaW5pdGlhbGl6ZSkoKTtcblxudmFyIGJvb3RzdHJhcFF1ZXVlID0gW107XG52YXIgc2hhcmVkTG9hZGVyID0gbnVsbDtcbnZhciBBdXJlbGlhID0gbnVsbDtcblxuZnVuY3Rpb24gb25Cb290c3RyYXAoY2FsbGJhY2spIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAoc2hhcmVkTG9hZGVyKSB7XG4gICAgICByZXNvbHZlKGNhbGxiYWNrKHNoYXJlZExvYWRlcikpO1xuICAgIH0gZWxzZSB7XG4gICAgICBib290c3RyYXBRdWV1ZS5wdXNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXNvbHZlKGNhbGxiYWNrKHNoYXJlZExvYWRlcikpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiByZWFkeShnbG9iYWwpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICBpZiAoZ2xvYmFsLmRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdjb21wbGV0ZScpIHtcbiAgICAgIHJlc29sdmUoZ2xvYmFsLmRvY3VtZW50KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2xvYmFsLmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBjb21wbGV0ZWQpO1xuICAgICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBjb21wbGV0ZWQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNvbXBsZXRlZCgpIHtcbiAgICAgIGdsb2JhbC5kb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgY29tcGxldGVkKTtcbiAgICAgIGdsb2JhbC5yZW1vdmVFdmVudExpc3RlbmVyKCdsb2FkJywgY29tcGxldGVkKTtcbiAgICAgIHJlc29sdmUoZ2xvYmFsLmRvY3VtZW50KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVBcHAobG9hZGVyLCBhcHBIb3N0KSB7XG4gIHJldHVybiBjb25maWcobG9hZGVyLCBhcHBIb3N0LCBhcHBIb3N0LmdldEF0dHJpYnV0ZSgnYXVyZWxpYS1hcHAnKSk7XG59XG5cbmZ1bmN0aW9uIGNvbmZpZyhsb2FkZXIsIGFwcEhvc3QsIGNvbmZpZ01vZHVsZUlkKSB7XG4gIHZhciBhdXJlbGlhID0gbmV3IEF1cmVsaWEobG9hZGVyKTtcbiAgYXVyZWxpYS5ob3N0ID0gYXBwSG9zdDtcbiAgYXVyZWxpYS5jb25maWdNb2R1bGVJZCA9IGNvbmZpZ01vZHVsZUlkIHx8IG51bGw7XG5cbiAgaWYgKGNvbmZpZ01vZHVsZUlkKSB7XG4gICAgcmV0dXJuIGxvYWRlci5sb2FkTW9kdWxlKGNvbmZpZ01vZHVsZUlkKS50aGVuKGZ1bmN0aW9uIChjdXN0b21Db25maWcpIHtcbiAgICAgIHJldHVybiBjdXN0b21Db25maWcuY29uZmlndXJlKGF1cmVsaWEpO1xuICAgIH0pO1xuICB9XG5cbiAgYXVyZWxpYS51c2Uuc3RhbmRhcmRDb25maWd1cmF0aW9uKCkuZGV2ZWxvcG1lbnRMb2dnaW5nKCk7XG5cbiAgcmV0dXJuIGF1cmVsaWEuc3RhcnQoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gYXVyZWxpYS5zZXRSb290KCk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBydW4oKSB7XG4gIHJldHVybiByZWFkeSh3aW5kb3cpLnRoZW4oZnVuY3Rpb24gKGRvYykge1xuICAgIHZhciBhcHBIb3N0ID0gZG9jLnF1ZXJ5U2VsZWN0b3JBbGwoJ1thdXJlbGlhLWFwcF0nKTtcbiAgICB2YXIgbG9hZGVyID0gbmV3IF9hdXJlbGlhTG9hZGVyV2VicGFjay5XZWJwYWNrTG9hZGVyKCk7XG4gICAgbG9hZGVyLmxvYWRNb2R1bGUoJ2F1cmVsaWEtZnJhbWV3b3JrJykudGhlbihmdW5jdGlvbiAobSkge1xuICAgICAgQXVyZWxpYSA9IG0uQXVyZWxpYTtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IGFwcEhvc3QubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICBoYW5kbGVBcHAobG9hZGVyLCBhcHBIb3N0W2ldKS5jYXRjaChjb25zb2xlLmVycm9yLmJpbmQoY29uc29sZSkpO1xuICAgICAgfVxuXG4gICAgICBzaGFyZWRMb2FkZXIgPSBsb2FkZXI7XG4gICAgICBmb3IgKHZhciBfaSA9IDAsIF9paSA9IGJvb3RzdHJhcFF1ZXVlLmxlbmd0aDsgX2kgPCBfaWk7ICsrX2kpIHtcbiAgICAgICAgYm9vdHN0cmFwUXVldWVbX2ldKCk7XG4gICAgICB9XG4gICAgICBib290c3RyYXBRdWV1ZSA9IG51bGw7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBib290c3RyYXAoY29uZmlndXJlKSB7XG4gIHJldHVybiBvbkJvb3RzdHJhcChmdW5jdGlvbiAobG9hZGVyKSB7XG4gICAgdmFyIGF1cmVsaWEgPSBuZXcgQXVyZWxpYShsb2FkZXIpO1xuICAgIHJldHVybiBjb25maWd1cmUoYXVyZWxpYSk7XG4gIH0pO1xufVxuXG5ydW4oKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXVyZWxpYS1ib290c3RyYXBwZXItd2VicGFjay9kaXN0L2NvbW1vbmpzL2F1cmVsaWEtYm9vdHN0cmFwcGVyLXdlYnBhY2suanNcbi8vIG1vZHVsZSBpZCA9IGF1cmVsaWEtYm9vdHN0cmFwcGVyLXdlYnBhY2tcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5XZWJwYWNrTG9hZGVyID0gZXhwb3J0cy5UZXh0VGVtcGxhdGVMb2FkZXIgPSB1bmRlZmluZWQ7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5leHBvcnRzLmVuc3VyZU9yaWdpbk9uRXhwb3J0cyA9IGVuc3VyZU9yaWdpbk9uRXhwb3J0cztcblxudmFyIF9hdXJlbGlhTWV0YWRhdGEgPSByZXF1aXJlKCdhdXJlbGlhLW1ldGFkYXRhJyk7XG5cbnZhciBfYXVyZWxpYUxvYWRlciA9IHJlcXVpcmUoJ2F1cmVsaWEtbG9hZGVyJyk7XG5cbnZhciBfYXVyZWxpYVBhbCA9IHJlcXVpcmUoJ2F1cmVsaWEtcGFsJyk7XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxuXG5cbnZhciBUZXh0VGVtcGxhdGVMb2FkZXIgPSBleHBvcnRzLlRleHRUZW1wbGF0ZUxvYWRlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gVGV4dFRlbXBsYXRlTG9hZGVyKCkge1xuICAgIFxuICB9XG5cbiAgVGV4dFRlbXBsYXRlTG9hZGVyLnByb3RvdHlwZS5sb2FkVGVtcGxhdGUgPSBmdW5jdGlvbiBsb2FkVGVtcGxhdGUobG9hZGVyLCBlbnRyeSkge1xuICAgIHJldHVybiBsb2FkZXIubG9hZFRleHQoZW50cnkuYWRkcmVzcykudGhlbihmdW5jdGlvbiAodGV4dCkge1xuICAgICAgZW50cnkudGVtcGxhdGUgPSBfYXVyZWxpYVBhbC5ET00uY3JlYXRlVGVtcGxhdGVGcm9tTWFya3VwKHRleHQpO1xuICAgIH0pO1xuICB9O1xuXG4gIHJldHVybiBUZXh0VGVtcGxhdGVMb2FkZXI7XG59KCk7XG5cbmZ1bmN0aW9uIGVuc3VyZU9yaWdpbk9uRXhwb3J0cyhleGVjdXRlZCwgbW9kdWxlSWQpIHtcbiAgdmFyIHRhcmdldCA9IGV4ZWN1dGVkO1xuICB2YXIga2V5ID0gdm9pZCAwO1xuICB2YXIgZXhwb3J0ZWRWYWx1ZSA9IHZvaWQgMDtcblxuICBpZiAodGFyZ2V0Ll9fdXNlRGVmYXVsdCkge1xuICAgIHRhcmdldCA9IHRhcmdldC5kZWZhdWx0O1xuICB9XG5cbiAgX2F1cmVsaWFNZXRhZGF0YS5PcmlnaW4uc2V0KHRhcmdldCwgbmV3IF9hdXJlbGlhTWV0YWRhdGEuT3JpZ2luKG1vZHVsZUlkLCAnZGVmYXVsdCcpKTtcblxuICBpZiAoKHR5cGVvZiB0YXJnZXQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHRhcmdldCkpID09PSAnb2JqZWN0Jykge1xuICAgIGZvciAoa2V5IGluIHRhcmdldCkge1xuICAgICAgZXhwb3J0ZWRWYWx1ZSA9IHRhcmdldFtrZXldO1xuXG4gICAgICBpZiAodHlwZW9mIGV4cG9ydGVkVmFsdWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgX2F1cmVsaWFNZXRhZGF0YS5PcmlnaW4uc2V0KGV4cG9ydGVkVmFsdWUsIG5ldyBfYXVyZWxpYU1ldGFkYXRhLk9yaWdpbihtb2R1bGVJZCwga2V5KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGV4ZWN1dGVkO1xufVxuXG52YXIgV2VicGFja0xvYWRlciA9IGV4cG9ydHMuV2VicGFja0xvYWRlciA9IGZ1bmN0aW9uIChfTG9hZGVyKSB7XG4gIF9pbmhlcml0cyhXZWJwYWNrTG9hZGVyLCBfTG9hZGVyKTtcblxuICBmdW5jdGlvbiBXZWJwYWNrTG9hZGVyKCkge1xuICAgIFxuXG4gICAgdmFyIF90aGlzID0gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcywgX0xvYWRlci5jYWxsKHRoaXMpKTtcblxuICAgIF90aGlzLm1vZHVsZVJlZ2lzdHJ5ID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBfdGhpcy5sb2FkZXJQbHVnaW5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICBfdGhpcy51c2VUZW1wbGF0ZUxvYWRlcihuZXcgVGV4dFRlbXBsYXRlTG9hZGVyKCkpO1xuICAgIF90aGlzLm1vZHVsZXNCZWluZ0xvYWRlZCA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG5cbiAgICB2YXIgdGhhdCA9IF90aGlzO1xuXG4gICAgX3RoaXMuYWRkUGx1Z2luKCd0ZW1wbGF0ZS1yZWdpc3RyeS1lbnRyeScsIHtcbiAgICAgICdmZXRjaCc6IGZ1bmN0aW9uIGZldGNoKGFkZHJlc3MpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhhdC5nZXRPckNyZWF0ZVRlbXBsYXRlUmVnaXN0cnlFbnRyeShhZGRyZXNzKTtcbiAgICAgICAgcmV0dXJuIGVudHJ5LnRlbXBsYXRlSXNMb2FkZWQgPyBlbnRyeSA6IHRoYXQudGVtcGxhdGVMb2FkZXIubG9hZFRlbXBsYXRlKHRoYXQsIGVudHJ5KS50aGVuKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgcmV0dXJuIGVudHJ5O1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIF9hdXJlbGlhUGFsLlBMQVRGT1JNLmVhY2hNb2R1bGUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgIHZhciByZWdpc3RyeSA9IF9fd2VicGFja19yZXF1aXJlX18uYztcblxuICAgICAgZm9yICh2YXIgbW9kdWxlSWQgaW4gcmVnaXN0cnkpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBtb2R1bGVJZCAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbW9kdWxlRXhwb3J0cyA9IHJlZ2lzdHJ5W21vZHVsZUlkXS5leHBvcnRzO1xuICAgICAgICBpZiAoKHR5cGVvZiBtb2R1bGVFeHBvcnRzID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihtb2R1bGVFeHBvcnRzKSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBpZiAoY2FsbGJhY2sobW9kdWxlSWQsIG1vZHVsZUV4cG9ydHMpKSByZXR1cm47XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICBXZWJwYWNrTG9hZGVyLnByb3RvdHlwZS5fZ2V0QWN0dWFsUmVzdWx0ID0gZnVuY3Rpb24gX2dldEFjdHVhbFJlc3VsdChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCkge1xuICAgIHRyeSB7XG4gICAgICB2YXIgaXNBc3luYyA9IHR5cGVvZiByZXN1bHQgPT09ICdmdW5jdGlvbicgJiYgL2NiXFwoX193ZWJwYWNrX3JlcXVpcmVfXy8udGVzdChyZXN1bHQudG9TdHJpbmcoKSk7XG4gICAgICBpZiAoIWlzQXN5bmMpIHtcbiAgICAgICAgcmV0dXJuIHJlc29sdmUocmVzdWx0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdChmdW5jdGlvbiAoYWN0dWFsKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlKGFjdHVhbCk7XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICByZWplY3QoZSk7XG4gICAgfVxuICB9O1xuXG4gIFdlYnBhY2tMb2FkZXIucHJvdG90eXBlLl9pbXBvcnQgPSBmdW5jdGlvbiBfaW1wb3J0KG1vZHVsZUlkKSB7XG4gICAgdmFyIF90aGlzMiA9IHRoaXM7XG5cbiAgICBpZiAodGhpcy5tb2R1bGVzQmVpbmdMb2FkZWRbbW9kdWxlSWRdKSB7XG4gICAgICByZXR1cm4gdGhpcy5tb2R1bGVzQmVpbmdMb2FkZWRbbW9kdWxlSWRdO1xuICAgIH1cbiAgICB2YXIgbW9kdWxlSWRQYXJ0cyA9IG1vZHVsZUlkLnNwbGl0KCchJyk7XG4gICAgdmFyIHBhdGggPSBtb2R1bGVJZFBhcnRzLnNwbGljZShtb2R1bGVJZFBhcnRzLmxlbmd0aCAtIDEsIDEpWzBdO1xuICAgIHZhciBsb2FkZXJQbHVnaW4gPSBtb2R1bGVJZFBhcnRzLmxlbmd0aCA9PT0gMSA/IG1vZHVsZUlkUGFydHNbMF0gOiBudWxsO1xuXG4gICAgdmFyIGFjdGlvbiA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGlmIChsb2FkZXJQbHVnaW4pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4gcmVzb2x2ZShfdGhpczIubG9hZGVyUGx1Z2luc1tsb2FkZXJQbHVnaW5dLmZldGNoKHBhdGgpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18ocGF0aCk7XG4gICAgICAgICAgcmV0dXJuIF90aGlzMi5fZ2V0QWN0dWFsUmVzdWx0KHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgfSBjYXRjaCAoXykge31cbiAgICAgICAgcmVxdWlyZS5lbnN1cmUoW10sIGZ1bmN0aW9uIChyZXF1aXJlKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdCA9IHJlcXVpcmUoJ2F1cmVsaWEtbG9hZGVyLWNvbnRleHQvJyArIHBhdGgpO1xuICAgICAgICAgIHJldHVybiBfdGhpczIuX2dldEFjdHVhbFJlc3VsdChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgIH0sICdhcHAnKTtcbiAgICAgIH1cbiAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgIF90aGlzMi5tb2R1bGVzQmVpbmdMb2FkZWRbbW9kdWxlSWRdID0gdW5kZWZpbmVkO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgICB0aGlzLm1vZHVsZXNCZWluZ0xvYWRlZFttb2R1bGVJZF0gPSBhY3Rpb247XG4gICAgcmV0dXJuIGFjdGlvbjtcbiAgfTtcblxuICBXZWJwYWNrTG9hZGVyLnByb3RvdHlwZS5tYXAgPSBmdW5jdGlvbiBtYXAoaWQsIHNvdXJjZSkge307XG5cbiAgV2VicGFja0xvYWRlci5wcm90b3R5cGUubm9ybWFsaXplU3luYyA9IGZ1bmN0aW9uIG5vcm1hbGl6ZVN5bmMobW9kdWxlSWQsIHJlbGF0aXZlVG8pIHtcbiAgICByZXR1cm4gbW9kdWxlSWQ7XG4gIH07XG5cbiAgV2VicGFja0xvYWRlci5wcm90b3R5cGUubm9ybWFsaXplID0gZnVuY3Rpb24gbm9ybWFsaXplKG1vZHVsZUlkLCByZWxhdGl2ZVRvKSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShtb2R1bGVJZCk7XG4gIH07XG5cbiAgV2VicGFja0xvYWRlci5wcm90b3R5cGUudXNlVGVtcGxhdGVMb2FkZXIgPSBmdW5jdGlvbiB1c2VUZW1wbGF0ZUxvYWRlcih0ZW1wbGF0ZUxvYWRlcikge1xuICAgIHRoaXMudGVtcGxhdGVMb2FkZXIgPSB0ZW1wbGF0ZUxvYWRlcjtcbiAgfTtcblxuICBXZWJwYWNrTG9hZGVyLnByb3RvdHlwZS5sb2FkQWxsTW9kdWxlcyA9IGZ1bmN0aW9uIGxvYWRBbGxNb2R1bGVzKGlkcykge1xuICAgIHZhciBsb2FkcyA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGlpID0gaWRzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgIGxvYWRzLnB1c2godGhpcy5sb2FkTW9kdWxlKGlkc1tpXSkpO1xuICAgIH1cblxuICAgIHJldHVybiBQcm9taXNlLmFsbChsb2Fkcyk7XG4gIH07XG5cbiAgV2VicGFja0xvYWRlci5wcm90b3R5cGUubG9hZE1vZHVsZSA9IGZ1bmN0aW9uIGxvYWRNb2R1bGUoaWQpIHtcbiAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgIHZhciBleGlzdGluZyA9IHRoaXMubW9kdWxlUmVnaXN0cnlbaWRdO1xuICAgIGlmIChleGlzdGluZykge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShleGlzdGluZyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9pbXBvcnQoaWQpLnRoZW4oZnVuY3Rpb24gKG0pIHtcbiAgICAgIHJldHVybiBfdGhpczMubW9kdWxlUmVnaXN0cnlbaWRdID0gZW5zdXJlT3JpZ2luT25FeHBvcnRzKG0sIGlkKTtcbiAgICB9KTtcbiAgfTtcblxuICBXZWJwYWNrTG9hZGVyLnByb3RvdHlwZS5sb2FkVGVtcGxhdGUgPSBmdW5jdGlvbiBsb2FkVGVtcGxhdGUodXJsKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ltcG9ydCh0aGlzLmFwcGx5UGx1Z2luVG9VcmwodXJsLCAndGVtcGxhdGUtcmVnaXN0cnktZW50cnknKSk7XG4gIH07XG5cbiAgV2VicGFja0xvYWRlci5wcm90b3R5cGUubG9hZFRleHQgPSBmdW5jdGlvbiBsb2FkVGV4dCh1cmwpIHtcbiAgICByZXR1cm4gdGhpcy5faW1wb3J0KHVybCkudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgQXJyYXkgJiYgcmVzdWx0WzBdIGluc3RhbmNlb2YgQXJyYXkgJiYgcmVzdWx0Lmhhc093blByb3BlcnR5KCd0b1N0cmluZycpKSB7XG4gICAgICAgIHJldHVybiByZXN1bHQudG9TdHJpbmcoKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9KTtcbiAgfTtcblxuICBXZWJwYWNrTG9hZGVyLnByb3RvdHlwZS5hcHBseVBsdWdpblRvVXJsID0gZnVuY3Rpb24gYXBwbHlQbHVnaW5Ub1VybCh1cmwsIHBsdWdpbk5hbWUpIHtcbiAgICByZXR1cm4gcGx1Z2luTmFtZSArICchJyArIHVybDtcbiAgfTtcblxuICBXZWJwYWNrTG9hZGVyLnByb3RvdHlwZS5hZGRQbHVnaW4gPSBmdW5jdGlvbiBhZGRQbHVnaW4ocGx1Z2luTmFtZSwgaW1wbGVtZW50YXRpb24pIHtcbiAgICB0aGlzLmxvYWRlclBsdWdpbnNbcGx1Z2luTmFtZV0gPSBpbXBsZW1lbnRhdGlvbjtcbiAgfTtcblxuICByZXR1cm4gV2VicGFja0xvYWRlcjtcbn0oX2F1cmVsaWFMb2FkZXIuTG9hZGVyKTtcblxuX2F1cmVsaWFQYWwuUExBVEZPUk0uTG9hZGVyID0gV2VicGFja0xvYWRlcjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXVyZWxpYS1sb2FkZXItd2VicGFjay9kaXN0L2NvbW1vbmpzL2F1cmVsaWEtbG9hZGVyLXdlYnBhY2suanNcbi8vIG1vZHVsZSBpZCA9IGF1cmVsaWEtbG9hZGVyLXdlYnBhY2tcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5fRE9NID0gZXhwb3J0cy5fRkVBVFVSRSA9IGV4cG9ydHMuX1BMQVRGT1JNID0gdW5kZWZpbmVkO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxuZXhwb3J0cy5fZW5zdXJlRnVuY3Rpb25OYW1lID0gX2Vuc3VyZUZ1bmN0aW9uTmFtZTtcbmV4cG9ydHMuX2Vuc3VyZUNsYXNzTGlzdCA9IF9lbnN1cmVDbGFzc0xpc3Q7XG5leHBvcnRzLl9lbnN1cmVQZXJmb3JtYW5jZSA9IF9lbnN1cmVQZXJmb3JtYW5jZTtcbmV4cG9ydHMuX2Vuc3VyZUN1c3RvbUV2ZW50ID0gX2Vuc3VyZUN1c3RvbUV2ZW50O1xuZXhwb3J0cy5fZW5zdXJlRWxlbWVudE1hdGNoZXMgPSBfZW5zdXJlRWxlbWVudE1hdGNoZXM7XG5leHBvcnRzLl9lbnN1cmVIVE1MVGVtcGxhdGVFbGVtZW50ID0gX2Vuc3VyZUhUTUxUZW1wbGF0ZUVsZW1lbnQ7XG5leHBvcnRzLmluaXRpYWxpemUgPSBpbml0aWFsaXplO1xuXG52YXIgX2F1cmVsaWFQYWwgPSByZXF1aXJlKCdhdXJlbGlhLXBhbCcpO1xuXG52YXIgX1BMQVRGT1JNID0gZXhwb3J0cy5fUExBVEZPUk0gPSB7XG4gIGxvY2F0aW9uOiB3aW5kb3cubG9jYXRpb24sXG4gIGhpc3Rvcnk6IHdpbmRvdy5oaXN0b3J5LFxuICBhZGRFdmVudExpc3RlbmVyOiBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNhcHR1cmUpIHtcbiAgICB0aGlzLmdsb2JhbC5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNhcHR1cmUpO1xuICB9LFxuICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNhcHR1cmUpIHtcbiAgICB0aGlzLmdsb2JhbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbGJhY2ssIGNhcHR1cmUpO1xuICB9LFxuXG4gIHBlcmZvcm1hbmNlOiB3aW5kb3cucGVyZm9ybWFuY2UsXG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZTogZnVuY3Rpb24gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGNhbGxiYWNrKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZShjYWxsYmFjayk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIF9lbnN1cmVGdW5jdGlvbk5hbWUoKSB7XG4gIGZ1bmN0aW9uIHRlc3QoKSB7fVxuXG4gIGlmICghdGVzdC5uYW1lKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEZ1bmN0aW9uLnByb3RvdHlwZSwgJ25hbWUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLnRvU3RyaW5nKCkubWF0Y2goL15cXHMqZnVuY3Rpb25cXHMqKFxcUyopXFxzKlxcKC8pWzFdO1xuXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnbmFtZScsIHsgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9lbnN1cmVDbGFzc0xpc3QoKSB7XG4gIGlmICghKCdjbGFzc0xpc3QnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ18nKSkgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TICYmICEoJ2NsYXNzTGlzdCcgaW4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdnJykpKSB7XG4gICAgKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBwcm90b1Byb3AgPSAncHJvdG90eXBlJztcbiAgICAgIHZhciBzdHJUcmltID0gU3RyaW5nLnByb3RvdHlwZS50cmltO1xuICAgICAgdmFyIGFyckluZGV4T2YgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZjtcbiAgICAgIHZhciBlbXB0eUFycmF5ID0gW107XG5cbiAgICAgIHZhciBET01FeCA9IGZ1bmN0aW9uIERPTUV4KHR5cGUsIG1lc3NhZ2UpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gdHlwZTtcbiAgICAgICAgdGhpcy5jb2RlID0gRE9NRXhjZXB0aW9uW3R5cGVdO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgfTtcblxuICAgICAgdmFyIGNoZWNrVG9rZW5BbmRHZXRJbmRleCA9IGZ1bmN0aW9uIGNoZWNrVG9rZW5BbmRHZXRJbmRleChjbGFzc0xpc3QsIHRva2VuKSB7XG4gICAgICAgIGlmICh0b2tlbiA9PT0gJycpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRE9NRXgoJ1NZTlRBWF9FUlInLCAnQW4gaW52YWxpZCBvciBpbGxlZ2FsIHN0cmluZyB3YXMgc3BlY2lmaWVkJyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoL1xccy8udGVzdCh0b2tlbikpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRE9NRXgoJ0lOVkFMSURfQ0hBUkFDVEVSX0VSUicsICdTdHJpbmcgY29udGFpbnMgYW4gaW52YWxpZCBjaGFyYWN0ZXInKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhcnJJbmRleE9mLmNhbGwoY2xhc3NMaXN0LCB0b2tlbik7XG4gICAgICB9O1xuXG4gICAgICB2YXIgQ2xhc3NMaXN0ID0gZnVuY3Rpb24gQ2xhc3NMaXN0KGVsZW0pIHtcbiAgICAgICAgdmFyIHRyaW1tZWRDbGFzc2VzID0gc3RyVHJpbS5jYWxsKGVsZW0uZ2V0QXR0cmlidXRlKCdjbGFzcycpIHx8ICcnKTtcbiAgICAgICAgdmFyIGNsYXNzZXMgPSB0cmltbWVkQ2xhc3NlcyA/IHRyaW1tZWRDbGFzc2VzLnNwbGl0KC9cXHMrLykgOiBlbXB0eUFycmF5O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IGNsYXNzZXMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICAgIHRoaXMucHVzaChjbGFzc2VzW2ldKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzTmFtZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCB0aGlzLnRvU3RyaW5nKCkpO1xuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgdmFyIGNsYXNzTGlzdFByb3RvID0gQ2xhc3NMaXN0W3Byb3RvUHJvcF0gPSBbXTtcblxuICAgICAgRE9NRXhbcHJvdG9Qcm9wXSA9IEVycm9yW3Byb3RvUHJvcF07XG5cbiAgICAgIGNsYXNzTGlzdFByb3RvLml0ZW0gPSBmdW5jdGlvbiAoaSkge1xuICAgICAgICByZXR1cm4gdGhpc1tpXSB8fCBudWxsO1xuICAgICAgfTtcblxuICAgICAgY2xhc3NMaXN0UHJvdG8uY29udGFpbnMgPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgdG9rZW4gKz0gJyc7XG4gICAgICAgIHJldHVybiBjaGVja1Rva2VuQW5kR2V0SW5kZXgodGhpcywgdG9rZW4pICE9PSAtMTtcbiAgICAgIH07XG5cbiAgICAgIGNsYXNzTGlzdFByb3RvLmFkZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRva2VucyA9IGFyZ3VtZW50cztcbiAgICAgICAgdmFyIGkgPSAwO1xuICAgICAgICB2YXIgaWkgPSB0b2tlbnMubGVuZ3RoO1xuICAgICAgICB2YXIgdG9rZW4gPSB2b2lkIDA7XG4gICAgICAgIHZhciB1cGRhdGVkID0gZmFsc2U7XG5cbiAgICAgICAgZG8ge1xuICAgICAgICAgIHRva2VuID0gdG9rZW5zW2ldICsgJyc7XG4gICAgICAgICAgaWYgKGNoZWNrVG9rZW5BbmRHZXRJbmRleCh0aGlzLCB0b2tlbikgPT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnB1c2godG9rZW4pO1xuICAgICAgICAgICAgdXBkYXRlZCA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9IHdoaWxlICgrK2kgPCBpaSk7XG5cbiAgICAgICAgaWYgKHVwZGF0ZWQpIHtcbiAgICAgICAgICB0aGlzLl91cGRhdGVDbGFzc05hbWUoKTtcbiAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgY2xhc3NMaXN0UHJvdG8ucmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdG9rZW5zID0gYXJndW1lbnRzO1xuICAgICAgICB2YXIgaSA9IDA7XG4gICAgICAgIHZhciBpaSA9IHRva2Vucy5sZW5ndGg7XG4gICAgICAgIHZhciB0b2tlbiA9IHZvaWQgMDtcbiAgICAgICAgdmFyIHVwZGF0ZWQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGluZGV4ID0gdm9pZCAwO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICB0b2tlbiA9IHRva2Vuc1tpXSArICcnO1xuICAgICAgICAgIGluZGV4ID0gY2hlY2tUb2tlbkFuZEdldEluZGV4KHRoaXMsIHRva2VuKTtcbiAgICAgICAgICB3aGlsZSAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICB0aGlzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICB1cGRhdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGluZGV4ID0gY2hlY2tUb2tlbkFuZEdldEluZGV4KHRoaXMsIHRva2VuKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gd2hpbGUgKCsraSA8IGlpKTtcblxuICAgICAgICBpZiAodXBkYXRlZCkge1xuICAgICAgICAgIHRoaXMuX3VwZGF0ZUNsYXNzTmFtZSgpO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBjbGFzc0xpc3RQcm90by50b2dnbGUgPSBmdW5jdGlvbiAodG9rZW4sIGZvcmNlKSB7XG4gICAgICAgIHRva2VuICs9ICcnO1xuXG4gICAgICAgIHZhciByZXN1bHQgPSB0aGlzLmNvbnRhaW5zKHRva2VuKTtcbiAgICAgICAgdmFyIG1ldGhvZCA9IHJlc3VsdCA/IGZvcmNlICE9PSB0cnVlICYmICdyZW1vdmUnIDogZm9yY2UgIT09IGZhbHNlICYmICdhZGQnO1xuXG4gICAgICAgIGlmIChtZXRob2QpIHtcbiAgICAgICAgICB0aGlzW21ldGhvZF0odG9rZW4pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZvcmNlID09PSB0cnVlIHx8IGZvcmNlID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybiBmb3JjZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAhcmVzdWx0O1xuICAgICAgfTtcblxuICAgICAgY2xhc3NMaXN0UHJvdG8udG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmpvaW4oJyAnKTtcbiAgICAgIH07XG5cbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShFbGVtZW50LnByb3RvdHlwZSwgJ2NsYXNzTGlzdCcsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBDbGFzc0xpc3QodGhpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSkoKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGVzdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdfJyk7XG4gICAgdGVzdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYzEnLCAnYzInKTtcblxuICAgIGlmICghdGVzdEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjMicpKSB7XG4gICAgICB2YXIgY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gY3JlYXRlTWV0aG9kKG1ldGhvZCkge1xuICAgICAgICB2YXIgb3JpZ2luYWwgPSBET01Ub2tlbkxpc3QucHJvdG90eXBlW21ldGhvZF07XG5cbiAgICAgICAgRE9NVG9rZW5MaXN0LnByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlpID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgICAgICAgIHRva2VuID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgb3JpZ2luYWwuY2FsbCh0aGlzLCB0b2tlbik7XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfTtcblxuICAgICAgY3JlYXRlTWV0aG9kKCdhZGQnKTtcbiAgICAgIGNyZWF0ZU1ldGhvZCgncmVtb3ZlJyk7XG4gICAgfVxuXG4gICAgdGVzdEVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZSgnYzMnLCBmYWxzZSk7XG5cbiAgICBpZiAodGVzdEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjMycpKSB7XG4gICAgICAoZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RvZ2dsZSA9IERPTVRva2VuTGlzdC5wcm90b3R5cGUudG9nZ2xlO1xuXG4gICAgICAgIERPTVRva2VuTGlzdC5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24gKHRva2VuLCBmb3JjZSkge1xuICAgICAgICAgIGlmICgxIGluIGFyZ3VtZW50cyAmJiAhdGhpcy5jb250YWlucyh0b2tlbikgPT09ICFmb3JjZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZvcmNlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBfdG9nZ2xlLmNhbGwodGhpcywgdG9rZW4pO1xuICAgICAgICB9O1xuICAgICAgfSkoKTtcbiAgICB9XG5cbiAgICB0ZXN0RWxlbWVudCA9IG51bGw7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2Vuc3VyZVBlcmZvcm1hbmNlKCkge1xuICAvLyBAbGljZW5zZSBodHRwOi8vb3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvTUlUXG5cblxuICBpZiAoJ3BlcmZvcm1hbmNlJyBpbiB3aW5kb3cgPT09IGZhbHNlKSB7XG4gICAgd2luZG93LnBlcmZvcm1hbmNlID0ge307XG4gIH1cblxuICBpZiAoJ25vdycgaW4gd2luZG93LnBlcmZvcm1hbmNlID09PSBmYWxzZSkge1xuICAgIChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgbm93T2Zmc2V0ID0gRGF0ZS5ub3coKTtcblxuICAgICAgaWYgKHBlcmZvcm1hbmNlLnRpbWluZyAmJiBwZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0KSB7XG4gICAgICAgIG5vd09mZnNldCA9IHBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnQ7XG4gICAgICB9XG5cbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cgPSBmdW5jdGlvbiBub3coKSB7XG4gICAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gbm93T2Zmc2V0O1xuICAgICAgfTtcbiAgICB9KSgpO1xuICB9XG5cbiAgX1BMQVRGT1JNLnBlcmZvcm1hbmNlID0gd2luZG93LnBlcmZvcm1hbmNlO1xufVxuXG5mdW5jdGlvbiBfZW5zdXJlQ3VzdG9tRXZlbnQoKSB7XG4gIGlmICghd2luZG93LkN1c3RvbUV2ZW50IHx8IHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgX0N1c3RvbUV2ZW50ID0gZnVuY3Rpb24gX0N1c3RvbUV2ZW50KGV2ZW50LCBwYXJhbXMpIHtcbiAgICAgIHBhcmFtcyA9IHBhcmFtcyB8fCB7XG4gICAgICAgIGJ1YmJsZXM6IGZhbHNlLFxuICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZSxcbiAgICAgICAgZGV0YWlsOiB1bmRlZmluZWRcbiAgICAgIH07XG5cbiAgICAgIHZhciBldnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICAgIGV2dC5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsIHBhcmFtcy5idWJibGVzLCBwYXJhbXMuY2FuY2VsYWJsZSwgcGFyYW1zLmRldGFpbCk7XG4gICAgICByZXR1cm4gZXZ0O1xuICAgIH07XG5cbiAgICBfQ3VzdG9tRXZlbnQucHJvdG90eXBlID0gd2luZG93LkV2ZW50LnByb3RvdHlwZTtcbiAgICB3aW5kb3cuQ3VzdG9tRXZlbnQgPSBfQ3VzdG9tRXZlbnQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2Vuc3VyZUVsZW1lbnRNYXRjaGVzKCkge1xuICBpZiAoRWxlbWVudCAmJiAhRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlcykge1xuICAgIHZhciBwcm90byA9IEVsZW1lbnQucHJvdG90eXBlO1xuICAgIHByb3RvLm1hdGNoZXMgPSBwcm90by5tYXRjaGVzU2VsZWN0b3IgfHwgcHJvdG8ubW96TWF0Y2hlc1NlbGVjdG9yIHx8IHByb3RvLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IHByb3RvLm9NYXRjaGVzU2VsZWN0b3IgfHwgcHJvdG8ud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xuICB9XG59XG5cbnZhciBfRkVBVFVSRSA9IGV4cG9ydHMuX0ZFQVRVUkUgPSB7fTtcblxuX0ZFQVRVUkUuc2hhZG93RE9NID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gISFIVE1MRWxlbWVudC5wcm90b3R5cGUuYXR0YWNoU2hhZG93O1xufSgpO1xuXG5fRkVBVFVSRS5zY29wZWRDU1MgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAnc2NvcGVkJyBpbiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xufSgpO1xuXG5fRkVBVFVSRS5odG1sVGVtcGxhdGVFbGVtZW50ID0gZnVuY3Rpb24gKCkge1xuICByZXR1cm4gJ2NvbnRlbnQnIGluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG59KCk7XG5cbl9GRUFUVVJFLm11dGF0aW9uT2JzZXJ2ZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiAhISh3aW5kb3cuTXV0YXRpb25PYnNlcnZlciB8fCB3aW5kb3cuV2ViS2l0TXV0YXRpb25PYnNlcnZlcik7XG59KCk7XG5cbmZ1bmN0aW9uIF9lbnN1cmVIVE1MVGVtcGxhdGVFbGVtZW50KCkge1xuICBmdW5jdGlvbiBpc1NWR1RlbXBsYXRlKGVsKSB7XG4gICAgcmV0dXJuIGVsLnRhZ05hbWUgPT09ICd0ZW1wbGF0ZScgJiYgZWwubmFtZXNwYWNlVVJJID09PSAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnO1xuICB9XG5cbiAgZnVuY3Rpb24gZml4U1ZHVGVtcGxhdGVFbGVtZW50KGVsKSB7XG4gICAgdmFyIHRlbXBsYXRlID0gZWwub3duZXJEb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuICAgIHZhciBhdHRycyA9IGVsLmF0dHJpYnV0ZXM7XG4gICAgdmFyIGxlbmd0aCA9IGF0dHJzLmxlbmd0aDtcbiAgICB2YXIgYXR0ciA9IHZvaWQgMDtcblxuICAgIGVsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRlbXBsYXRlLCBlbCk7XG5cbiAgICB3aGlsZSAobGVuZ3RoLS0gPiAwKSB7XG4gICAgICBhdHRyID0gYXR0cnNbbGVuZ3RoXTtcbiAgICAgIHRlbXBsYXRlLnNldEF0dHJpYnV0ZShhdHRyLm5hbWUsIGF0dHIudmFsdWUpO1xuICAgICAgZWwucmVtb3ZlQXR0cmlidXRlKGF0dHIubmFtZSk7XG4gICAgfVxuXG4gICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XG5cbiAgICByZXR1cm4gZml4SFRNTFRlbXBsYXRlRWxlbWVudCh0ZW1wbGF0ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBmaXhIVE1MVGVtcGxhdGVFbGVtZW50KHRlbXBsYXRlKSB7XG4gICAgdmFyIGNvbnRlbnQgPSB0ZW1wbGF0ZS5jb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIHZhciBjaGlsZCA9IHZvaWQgMDtcblxuICAgIHdoaWxlIChjaGlsZCA9IHRlbXBsYXRlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuICAgIH1cblxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGZpeEhUTUxUZW1wbGF0ZUVsZW1lbnRSb290KHRlbXBsYXRlKSB7XG4gICAgdmFyIGNvbnRlbnQgPSBmaXhIVE1MVGVtcGxhdGVFbGVtZW50KHRlbXBsYXRlKS5jb250ZW50O1xuICAgIHZhciBjaGlsZFRlbXBsYXRlcyA9IGNvbnRlbnQucXVlcnlTZWxlY3RvckFsbCgndGVtcGxhdGUnKTtcblxuICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IGNoaWxkVGVtcGxhdGVzLmxlbmd0aDsgaSA8IGlpOyArK2kpIHtcbiAgICAgIHZhciBjaGlsZCA9IGNoaWxkVGVtcGxhdGVzW2ldO1xuXG4gICAgICBpZiAoaXNTVkdUZW1wbGF0ZShjaGlsZCkpIHtcbiAgICAgICAgZml4U1ZHVGVtcGxhdGVFbGVtZW50KGNoaWxkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpeEhUTUxUZW1wbGF0ZUVsZW1lbnQoY2hpbGQpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgfVxuXG4gIGlmIChfRkVBVFVSRS5odG1sVGVtcGxhdGVFbGVtZW50KSB7XG4gICAgX0ZFQVRVUkUuZW5zdXJlSFRNTFRlbXBsYXRlRWxlbWVudCA9IGZ1bmN0aW9uICh0ZW1wbGF0ZSkge1xuICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgX0ZFQVRVUkUuZW5zdXJlSFRNTFRlbXBsYXRlRWxlbWVudCA9IGZpeEhUTUxUZW1wbGF0ZUVsZW1lbnRSb290O1xuICB9XG59XG5cbnZhciBzaGFkb3dQb2x5ID0gd2luZG93LlNoYWRvd0RPTVBvbHlmaWxsIHx8IG51bGw7XG5cbnZhciBfRE9NID0gZXhwb3J0cy5fRE9NID0ge1xuICBFbGVtZW50OiBFbGVtZW50LFxuICBTVkdFbGVtZW50OiBTVkdFbGVtZW50LFxuICBib3VuZGFyeTogJ2F1cmVsaWEtZG9tLWJvdW5kYXJ5JyxcbiAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCBjYXB0dXJlKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCBjYXB0dXJlKTtcbiAgfSxcbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCBjYXB0dXJlKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGNhbGxiYWNrLCBjYXB0dXJlKTtcbiAgfSxcbiAgYWRvcHROb2RlOiBmdW5jdGlvbiBhZG9wdE5vZGUobm9kZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5hZG9wdE5vZGUobm9kZSwgdHJ1ZSk7XG4gIH0sXG4gIGNyZWF0ZUVsZW1lbnQ6IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnTmFtZSkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpO1xuICB9LFxuICBjcmVhdGVUZXh0Tm9kZTogZnVuY3Rpb24gY3JlYXRlVGV4dE5vZGUodGV4dCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTtcbiAgfSxcbiAgY3JlYXRlQ29tbWVudDogZnVuY3Rpb24gY3JlYXRlQ29tbWVudCh0ZXh0KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZUNvbW1lbnQodGV4dCk7XG4gIH0sXG4gIGNyZWF0ZURvY3VtZW50RnJhZ21lbnQ6IGZ1bmN0aW9uIGNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcbiAgfSxcbiAgY3JlYXRlTXV0YXRpb25PYnNlcnZlcjogZnVuY3Rpb24gY3JlYXRlTXV0YXRpb25PYnNlcnZlcihjYWxsYmFjaykge1xuICAgIHJldHVybiBuZXcgKHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyIHx8IHdpbmRvdy5XZWJLaXRNdXRhdGlvbk9ic2VydmVyKShjYWxsYmFjayk7XG4gIH0sXG4gIGNyZWF0ZUN1c3RvbUV2ZW50OiBmdW5jdGlvbiBjcmVhdGVDdXN0b21FdmVudChldmVudFR5cGUsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gbmV3IHdpbmRvdy5DdXN0b21FdmVudChldmVudFR5cGUsIG9wdGlvbnMpO1xuICB9LFxuICBkaXNwYXRjaEV2ZW50OiBmdW5jdGlvbiBkaXNwYXRjaEV2ZW50KGV2dCkge1xuICAgIGRvY3VtZW50LmRpc3BhdGNoRXZlbnQoZXZ0KTtcbiAgfSxcbiAgZ2V0Q29tcHV0ZWRTdHlsZTogZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICB9LFxuICBnZXRFbGVtZW50QnlJZDogZnVuY3Rpb24gZ2V0RWxlbWVudEJ5SWQoaWQpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xuICB9LFxuICBxdWVyeVNlbGVjdG9yQWxsOiBmdW5jdGlvbiBxdWVyeVNlbGVjdG9yQWxsKHF1ZXJ5KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocXVlcnkpO1xuICB9LFxuICBuZXh0RWxlbWVudFNpYmxpbmc6IGZ1bmN0aW9uIG5leHRFbGVtZW50U2libGluZyhlbGVtZW50KSB7XG4gICAgaWYgKGVsZW1lbnQubmV4dEVsZW1lbnRTaWJsaW5nKSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5uZXh0RWxlbWVudFNpYmxpbmc7XG4gICAgfVxuICAgIGRvIHtcbiAgICAgIGVsZW1lbnQgPSBlbGVtZW50Lm5leHRTaWJsaW5nO1xuICAgIH0gd2hpbGUgKGVsZW1lbnQgJiYgZWxlbWVudC5ub2RlVHlwZSAhPT0gMSk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0sXG4gIGNyZWF0ZVRlbXBsYXRlRnJvbU1hcmt1cDogZnVuY3Rpb24gY3JlYXRlVGVtcGxhdGVGcm9tTWFya3VwKG1hcmt1cCkge1xuICAgIHZhciBwYXJzZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwYXJzZXIuaW5uZXJIVE1MID0gbWFya3VwO1xuXG4gICAgdmFyIHRlbXAgPSBwYXJzZXIuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgaWYgKCF0ZW1wIHx8IHRlbXAubm9kZU5hbWUgIT09ICdURU1QTEFURScpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGVtcGxhdGUgbWFya3VwIG11c3QgYmUgd3JhcHBlZCBpbiBhIDx0ZW1wbGF0ZT4gZWxlbWVudCBlLmcuIDx0ZW1wbGF0ZT4gPCEtLSBtYXJrdXAgaGVyZSAtLT4gPC90ZW1wbGF0ZT4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX0ZFQVRVUkUuZW5zdXJlSFRNTFRlbXBsYXRlRWxlbWVudCh0ZW1wKTtcbiAgfSxcbiAgYXBwZW5kTm9kZTogZnVuY3Rpb24gYXBwZW5kTm9kZShuZXdOb2RlLCBwYXJlbnROb2RlKSB7XG4gICAgKHBhcmVudE5vZGUgfHwgZG9jdW1lbnQuYm9keSkuYXBwZW5kQ2hpbGQobmV3Tm9kZSk7XG4gIH0sXG4gIHJlcGxhY2VOb2RlOiBmdW5jdGlvbiByZXBsYWNlTm9kZShuZXdOb2RlLCBub2RlLCBwYXJlbnROb2RlKSB7XG4gICAgaWYgKG5vZGUucGFyZW50Tm9kZSkge1xuICAgICAgbm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdOb2RlLCBub2RlKTtcbiAgICB9IGVsc2UgaWYgKHNoYWRvd1BvbHkgIT09IG51bGwpIHtcbiAgICAgIHNoYWRvd1BvbHkudW53cmFwKHBhcmVudE5vZGUpLnJlcGxhY2VDaGlsZChzaGFkb3dQb2x5LnVud3JhcChuZXdOb2RlKSwgc2hhZG93UG9seS51bndyYXAobm9kZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwYXJlbnROb2RlLnJlcGxhY2VDaGlsZChuZXdOb2RlLCBub2RlKTtcbiAgICB9XG4gIH0sXG4gIHJlbW92ZU5vZGU6IGZ1bmN0aW9uIHJlbW92ZU5vZGUobm9kZSwgcGFyZW50Tm9kZSkge1xuICAgIGlmIChub2RlLnBhcmVudE5vZGUpIHtcbiAgICAgIG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChub2RlKTtcbiAgICB9IGVsc2UgaWYgKHBhcmVudE5vZGUpIHtcbiAgICAgIGlmIChzaGFkb3dQb2x5ICE9PSBudWxsKSB7XG4gICAgICAgIHNoYWRvd1BvbHkudW53cmFwKHBhcmVudE5vZGUpLnJlbW92ZUNoaWxkKHNoYWRvd1BvbHkudW53cmFwKG5vZGUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudE5vZGUucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICBpbmplY3RTdHlsZXM6IGZ1bmN0aW9uIGluamVjdFN0eWxlcyhzdHlsZXMsIGRlc3RpbmF0aW9uLCBwcmVwZW5kKSB7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgIG5vZGUuaW5uZXJIVE1MID0gc3R5bGVzO1xuICAgIG5vZGUudHlwZSA9ICd0ZXh0L2Nzcyc7XG5cbiAgICBkZXN0aW5hdGlvbiA9IGRlc3RpbmF0aW9uIHx8IGRvY3VtZW50LmhlYWQ7XG5cbiAgICBpZiAocHJlcGVuZCAmJiBkZXN0aW5hdGlvbi5jaGlsZE5vZGVzLmxlbmd0aCA+IDApIHtcbiAgICAgIGRlc3RpbmF0aW9uLmluc2VydEJlZm9yZShub2RlLCBkZXN0aW5hdGlvbi5jaGlsZE5vZGVzWzBdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVzdGluYXRpb24uYXBwZW5kQ2hpbGQobm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG5vZGU7XG4gIH1cbn07XG5cbnZhciBpc0luaXRpYWxpemVkID0gZmFsc2U7XG5cbmZ1bmN0aW9uIGluaXRpYWxpemUoKSB7XG4gIGlmIChpc0luaXRpYWxpemVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaXNJbml0aWFsaXplZCA9IHRydWU7XG5cbiAgX2Vuc3VyZUN1c3RvbUV2ZW50KCk7XG4gIF9lbnN1cmVGdW5jdGlvbk5hbWUoKTtcbiAgX2Vuc3VyZUhUTUxUZW1wbGF0ZUVsZW1lbnQoKTtcbiAgX2Vuc3VyZUVsZW1lbnRNYXRjaGVzKCk7XG4gIF9lbnN1cmVDbGFzc0xpc3QoKTtcbiAgX2Vuc3VyZVBlcmZvcm1hbmNlKCk7XG5cbiAgKDAsIF9hdXJlbGlhUGFsLmluaXRpYWxpemVQQUwpKGZ1bmN0aW9uIChwbGF0Zm9ybSwgZmVhdHVyZSwgZG9tKSB7XG4gICAgT2JqZWN0LmFzc2lnbihwbGF0Zm9ybSwgX1BMQVRGT1JNKTtcbiAgICBPYmplY3QuYXNzaWduKGZlYXR1cmUsIF9GRUFUVVJFKTtcbiAgICBPYmplY3QuYXNzaWduKGRvbSwgX0RPTSk7XG5cbiAgICAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgICAgZ2xvYmFsLmNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSB8fCB7fTtcbiAgICAgIHZhciBjb24gPSBnbG9iYWwuY29uc29sZTtcbiAgICAgIHZhciBwcm9wID0gdm9pZCAwO1xuICAgICAgdmFyIG1ldGhvZCA9IHZvaWQgMDtcbiAgICAgIHZhciBlbXB0eSA9IHt9O1xuICAgICAgdmFyIGR1bW15ID0gZnVuY3Rpb24gZHVtbXkoKSB7fTtcbiAgICAgIHZhciBwcm9wZXJ0aWVzID0gJ21lbW9yeScuc3BsaXQoJywnKTtcbiAgICAgIHZhciBtZXRob2RzID0gKCdhc3NlcnQsY2xlYXIsY291bnQsZGVidWcsZGlyLGRpcnhtbCxlcnJvcixleGNlcHRpb24sZ3JvdXAsJyArICdncm91cENvbGxhcHNlZCxncm91cEVuZCxpbmZvLGxvZyxtYXJrVGltZWxpbmUscHJvZmlsZSxwcm9maWxlcyxwcm9maWxlRW5kLCcgKyAnc2hvdyx0YWJsZSx0aW1lLHRpbWVFbmQsdGltZWxpbmUsdGltZWxpbmVFbmQsdGltZVN0YW1wLHRyYWNlLHdhcm4nKS5zcGxpdCgnLCcpO1xuICAgICAgd2hpbGUgKHByb3AgPSBwcm9wZXJ0aWVzLnBvcCgpKSB7XG4gICAgICAgIGlmICghY29uW3Byb3BdKSBjb25bcHJvcF0gPSBlbXB0eTtcbiAgICAgIH13aGlsZSAobWV0aG9kID0gbWV0aG9kcy5wb3AoKSkge1xuICAgICAgICBpZiAoIWNvblttZXRob2RdKSBjb25bbWV0aG9kXSA9IGR1bW15O1xuICAgICAgfVxuICAgIH0pKHBsYXRmb3JtLmdsb2JhbCk7XG5cbiAgICBpZiAocGxhdGZvcm0uZ2xvYmFsLmNvbnNvbGUgJiYgX3R5cGVvZihjb25zb2xlLmxvZykgPT09ICdvYmplY3QnKSB7XG4gICAgICBbJ2xvZycsICdpbmZvJywgJ3dhcm4nLCAnZXJyb3InLCAnYXNzZXJ0JywgJ2RpcicsICdjbGVhcicsICdwcm9maWxlJywgJ3Byb2ZpbGVFbmQnXS5mb3JFYWNoKGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgICAgY29uc29sZVttZXRob2RdID0gdGhpcy5iaW5kKGNvbnNvbGVbbWV0aG9kXSwgY29uc29sZSk7XG4gICAgICB9LCBGdW5jdGlvbi5wcm90b3R5cGUuY2FsbCk7XG4gICAgfVxuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRvbSwgJ3RpdGxlJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC50aXRsZTtcbiAgICAgIH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uIHNldCh2YWx1ZSkge1xuICAgICAgICBkb2N1bWVudC50aXRsZSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KGRvbSwgJ2FjdGl2ZUVsZW1lbnQnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocGxhdGZvcm0sICdYTUxIdHRwUmVxdWVzdCcsIHtcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gcGxhdGZvcm0uZ2xvYmFsLlhNTEh0dHBSZXF1ZXN0O1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYXVyZWxpYS1wYWwtYnJvd3Nlci9kaXN0L2NvbW1vbmpzL2F1cmVsaWEtcGFsLWJyb3dzZXIuanNcbi8vIG1vZHVsZSBpZCA9IGF1cmVsaWEtcGFsLWJyb3dzZXJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9hdXJlbGlhUGFsID0gcmVxdWlyZSgnYXVyZWxpYS1wYWwnKTtcblxuKGZ1bmN0aW9uIChPYmplY3QsIEdPUFMpIHtcbiAgJ3VzZSBzdHJpY3QnO1xuXG4gIGlmIChHT1BTIGluIE9iamVjdCkgcmV0dXJuO1xuXG4gIHZhciBzZXREZXNjcmlwdG9yLFxuICAgICAgRyA9IF9hdXJlbGlhUGFsLlBMQVRGT1JNLmdsb2JhbCxcbiAgICAgIGlkID0gMCxcbiAgICAgIHJhbmRvbSA9ICcnICsgTWF0aC5yYW5kb20oKSxcbiAgICAgIHByZWZpeCA9ICdfX1xceDAxc3ltYm9sOicsXG4gICAgICBwcmVmaXhMZW5ndGggPSBwcmVmaXgubGVuZ3RoLFxuICAgICAgaW50ZXJuYWxTeW1ib2wgPSAnX19cXHgwMXN5bWJvbEBAJyArIHJhbmRvbSxcbiAgICAgIERQID0gJ2RlZmluZVByb3BlcnR5JyxcbiAgICAgIERQaWVzID0gJ2RlZmluZVByb3BlcnRpZXMnLFxuICAgICAgR09QTiA9ICdnZXRPd25Qcm9wZXJ0eU5hbWVzJyxcbiAgICAgIEdPUEQgPSAnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJyxcbiAgICAgIFBJRSA9ICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsXG4gICAgICBnT1BOID0gT2JqZWN0W0dPUE5dLFxuICAgICAgZ09QRCA9IE9iamVjdFtHT1BEXSxcbiAgICAgIGNyZWF0ZSA9IE9iamVjdC5jcmVhdGUsXG4gICAgICBrZXlzID0gT2JqZWN0LmtleXMsXG4gICAgICBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdFtEUF0sXG4gICAgICAkZGVmaW5lUHJvcGVydGllcyA9IE9iamVjdFtEUGllc10sXG4gICAgICBkZXNjcmlwdG9yID0gZ09QRChPYmplY3QsIEdPUE4pLFxuICAgICAgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlLFxuICAgICAgaE9QID0gT2JqZWN0UHJvdG8uaGFzT3duUHJvcGVydHksXG4gICAgICBwSUUgPSBPYmplY3RQcm90b1tQSUVdLFxuICAgICAgdG9TdHJpbmcgPSBPYmplY3RQcm90by50b1N0cmluZyxcbiAgICAgIGluZGV4T2YgPSBBcnJheS5wcm90b3R5cGUuaW5kZXhPZiB8fCBmdW5jdGlvbiAodikge1xuICAgIGZvciAodmFyIGkgPSB0aGlzLmxlbmd0aDsgaS0tICYmIHRoaXNbaV0gIT09IHY7KSB7fVxuICAgIHJldHVybiBpO1xuICB9LFxuICAgICAgYWRkSW50ZXJuYWxJZk5lZWRlZCA9IGZ1bmN0aW9uIGFkZEludGVybmFsSWZOZWVkZWQobywgdWlkLCBlbnVtZXJhYmxlKSB7XG4gICAgaWYgKCFoT1AuY2FsbChvLCBpbnRlcm5hbFN5bWJvbCkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KG8sIGludGVybmFsU3ltYm9sLCB7XG4gICAgICAgIGVudW1lcmFibGU6IGZhbHNlLFxuICAgICAgICBjb25maWd1cmFibGU6IGZhbHNlLFxuICAgICAgICB3cml0YWJsZTogZmFsc2UsXG4gICAgICAgIHZhbHVlOiB7fVxuICAgICAgfSk7XG4gICAgfVxuICAgIG9baW50ZXJuYWxTeW1ib2xdWydAQCcgKyB1aWRdID0gZW51bWVyYWJsZTtcbiAgfSxcbiAgICAgIGNyZWF0ZVdpdGhTeW1ib2xzID0gZnVuY3Rpb24gY3JlYXRlV2l0aFN5bWJvbHMocHJvdG8sIGRlc2NyaXB0b3JzKSB7XG4gICAgdmFyIHNlbGYgPSBjcmVhdGUocHJvdG8pO1xuICAgIGdPUE4oZGVzY3JpcHRvcnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgaWYgKHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoZGVzY3JpcHRvcnMsIGtleSkpIHtcbiAgICAgICAgJGRlZmluZVByb3BlcnR5KHNlbGYsIGtleSwgZGVzY3JpcHRvcnNba2V5XSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH0sXG4gICAgICBjb3B5QXNOb25FbnVtZXJhYmxlID0gZnVuY3Rpb24gY29weUFzTm9uRW51bWVyYWJsZShkZXNjcmlwdG9yKSB7XG4gICAgdmFyIG5ld0Rlc2NyaXB0b3IgPSBjcmVhdGUoZGVzY3JpcHRvcik7XG4gICAgbmV3RGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZmFsc2U7XG4gICAgcmV0dXJuIG5ld0Rlc2NyaXB0b3I7XG4gIH0sXG4gICAgICBnZXQgPSBmdW5jdGlvbiBnZXQoKSB7fSxcbiAgICAgIG9ubHlOb25TeW1ib2xzID0gZnVuY3Rpb24gb25seU5vblN5bWJvbHMobmFtZSkge1xuICAgIHJldHVybiBuYW1lICE9IGludGVybmFsU3ltYm9sICYmICFoT1AuY2FsbChzb3VyY2UsIG5hbWUpO1xuICB9LFxuICAgICAgb25seVN5bWJvbHMgPSBmdW5jdGlvbiBvbmx5U3ltYm9scyhuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUgIT0gaW50ZXJuYWxTeW1ib2wgJiYgaE9QLmNhbGwoc291cmNlLCBuYW1lKTtcbiAgfSxcbiAgICAgIHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KSB7XG4gICAgdmFyIHVpZCA9ICcnICsga2V5O1xuICAgIHJldHVybiBvbmx5U3ltYm9scyh1aWQpID8gaE9QLmNhbGwodGhpcywgdWlkKSAmJiB0aGlzW2ludGVybmFsU3ltYm9sXVsnQEAnICsgdWlkXSA6IHBJRS5jYWxsKHRoaXMsIGtleSk7XG4gIH0sXG4gICAgICBzZXRBbmRHZXRTeW1ib2wgPSBmdW5jdGlvbiBzZXRBbmRHZXRTeW1ib2wodWlkKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSB7XG4gICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZ2V0LFxuICAgICAgc2V0OiBmdW5jdGlvbiBzZXQodmFsdWUpIHtcbiAgICAgICAgc2V0RGVzY3JpcHRvcih0aGlzLCB1aWQsIHtcbiAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICAgICAgdmFsdWU6IHZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICBhZGRJbnRlcm5hbElmTmVlZGVkKHRoaXMsIHVpZCwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBkZWZpbmVQcm9wZXJ0eShPYmplY3RQcm90bywgdWlkLCBkZXNjcmlwdG9yKTtcbiAgICByZXR1cm4gc291cmNlW3VpZF0gPSBkZWZpbmVQcm9wZXJ0eShPYmplY3QodWlkKSwgJ2NvbnN0cnVjdG9yJywgc291cmNlQ29uc3RydWN0b3IpO1xuICB9LFxuICAgICAgX1N5bWJvbCA9IGZ1bmN0aW9uIF9TeW1ib2wyKGRlc2NyaXB0aW9uKSB7XG4gICAgaWYgKHRoaXMgJiYgdGhpcyAhPT0gRykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuICAgIHJldHVybiBzZXRBbmRHZXRTeW1ib2wocHJlZml4LmNvbmNhdChkZXNjcmlwdGlvbiB8fCAnJywgcmFuZG9tLCArK2lkKSk7XG4gIH0sXG4gICAgICBzb3VyY2UgPSBjcmVhdGUobnVsbCksXG4gICAgICBzb3VyY2VDb25zdHJ1Y3RvciA9IHsgdmFsdWU6IF9TeW1ib2wgfSxcbiAgICAgIHNvdXJjZU1hcCA9IGZ1bmN0aW9uIHNvdXJjZU1hcCh1aWQpIHtcbiAgICByZXR1cm4gc291cmNlW3VpZF07XG4gIH0sXG4gICAgICAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wKG8sIGtleSwgZGVzY3JpcHRvcikge1xuICAgIHZhciB1aWQgPSAnJyArIGtleTtcbiAgICBpZiAob25seVN5bWJvbHModWlkKSkge1xuICAgICAgc2V0RGVzY3JpcHRvcihvLCB1aWQsIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA/IGNvcHlBc05vbkVudW1lcmFibGUoZGVzY3JpcHRvcikgOiBkZXNjcmlwdG9yKTtcbiAgICAgIGFkZEludGVybmFsSWZOZWVkZWQobywgdWlkLCAhIWRlc2NyaXB0b3IuZW51bWVyYWJsZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KG8sIGtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICAgIHJldHVybiBvO1xuICB9LFxuICAgICAgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhvKSB7XG4gICAgdmFyIGNvZiA9IHRvU3RyaW5nLmNhbGwobyk7XG4gICAgbyA9IGNvZiA9PT0gJ1tvYmplY3QgU3RyaW5nXScgPyBvLnNwbGl0KCcnKSA6IE9iamVjdChvKTtcbiAgICByZXR1cm4gZ09QTihvKS5maWx0ZXIob25seVN5bWJvbHMpLm1hcChzb3VyY2VNYXApO1xuICB9O1xuXG4gIGRlc2NyaXB0b3IudmFsdWUgPSAkZGVmaW5lUHJvcGVydHk7XG4gIGRlZmluZVByb3BlcnR5KE9iamVjdCwgRFAsIGRlc2NyaXB0b3IpO1xuXG4gIGRlc2NyaXB0b3IudmFsdWUgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuICBkZWZpbmVQcm9wZXJ0eShPYmplY3QsIEdPUFMsIGRlc2NyaXB0b3IpO1xuXG4gIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKG8pIHtcbiAgICByZXR1cm4gZ09QTihvKS5maWx0ZXIob25seU5vblN5bWJvbHMpO1xuICB9O1xuICBkZWZpbmVQcm9wZXJ0eShPYmplY3QsIEdPUE4sIGRlc2NyaXB0b3IpO1xuXG4gIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKG8sIGRlc2NyaXB0b3JzKSB7XG4gICAgdmFyIHN5bWJvbHMgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzKGRlc2NyaXB0b3JzKTtcbiAgICBpZiAoc3ltYm9scy5sZW5ndGgpIHtcbiAgICAgIGtleXMoZGVzY3JpcHRvcnMpLmNvbmNhdChzeW1ib2xzKS5mb3JFYWNoKGZ1bmN0aW9uICh1aWQpIHtcbiAgICAgICAgaWYgKHByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoZGVzY3JpcHRvcnMsIHVpZCkpIHtcbiAgICAgICAgICAkZGVmaW5lUHJvcGVydHkobywgdWlkLCBkZXNjcmlwdG9yc1t1aWRdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICRkZWZpbmVQcm9wZXJ0aWVzKG8sIGRlc2NyaXB0b3JzKTtcbiAgICB9XG4gICAgcmV0dXJuIG87XG4gIH07XG4gIGRlZmluZVByb3BlcnR5KE9iamVjdCwgRFBpZXMsIGRlc2NyaXB0b3IpO1xuXG4gIGRlc2NyaXB0b3IudmFsdWUgPSBwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgZGVmaW5lUHJvcGVydHkoT2JqZWN0UHJvdG8sIFBJRSwgZGVzY3JpcHRvcik7XG5cbiAgZGVzY3JpcHRvci52YWx1ZSA9IF9TeW1ib2w7XG4gIGRlZmluZVByb3BlcnR5KEcsICdTeW1ib2wnLCBkZXNjcmlwdG9yKTtcblxuICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKGtleSkge1xuICAgIHZhciB1aWQgPSBwcmVmaXguY29uY2F0KHByZWZpeCwga2V5LCByYW5kb20pO1xuICAgIHJldHVybiB1aWQgaW4gT2JqZWN0UHJvdG8gPyBzb3VyY2VbdWlkXSA6IHNldEFuZEdldFN5bWJvbCh1aWQpO1xuICB9O1xuICBkZWZpbmVQcm9wZXJ0eShfU3ltYm9sLCAnZm9yJywgZGVzY3JpcHRvcik7XG5cbiAgZGVzY3JpcHRvci52YWx1ZSA9IGZ1bmN0aW9uIChzeW1ib2wpIHtcbiAgICByZXR1cm4gaE9QLmNhbGwoc291cmNlLCBzeW1ib2wpID8gc3ltYm9sLnNsaWNlKHByZWZpeExlbmd0aCAqIDIsIC1yYW5kb20ubGVuZ3RoKSA6IHZvaWQgMDtcbiAgfTtcbiAgZGVmaW5lUHJvcGVydHkoX1N5bWJvbCwgJ2tleUZvcicsIGRlc2NyaXB0b3IpO1xuXG4gIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iobywga2V5KSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBnT1BEKG8sIGtleSk7XG4gICAgaWYgKGRlc2NyaXB0b3IgJiYgb25seVN5bWJvbHMoa2V5KSkge1xuICAgICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gcHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChvLCBrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gZGVzY3JpcHRvcjtcbiAgfTtcbiAgZGVmaW5lUHJvcGVydHkoT2JqZWN0LCBHT1BELCBkZXNjcmlwdG9yKTtcblxuICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKHByb3RvLCBkZXNjcmlwdG9ycykge1xuICAgIHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gY3JlYXRlKHByb3RvKSA6IGNyZWF0ZVdpdGhTeW1ib2xzKHByb3RvLCBkZXNjcmlwdG9ycyk7XG4gIH07XG4gIGRlZmluZVByb3BlcnR5KE9iamVjdCwgJ2NyZWF0ZScsIGRlc2NyaXB0b3IpO1xuXG4gIGRlc2NyaXB0b3IudmFsdWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHN0ciA9IHRvU3RyaW5nLmNhbGwodGhpcyk7XG4gICAgcmV0dXJuIHN0ciA9PT0gJ1tvYmplY3QgU3RyaW5nXScgJiYgb25seVN5bWJvbHModGhpcykgPyAnW29iamVjdCBTeW1ib2xdJyA6IHN0cjtcbiAgfTtcbiAgZGVmaW5lUHJvcGVydHkoT2JqZWN0UHJvdG8sICd0b1N0cmluZycsIGRlc2NyaXB0b3IpO1xuXG4gIHRyeSB7XG4gICAgc2V0RGVzY3JpcHRvciA9IGNyZWF0ZShkZWZpbmVQcm9wZXJ0eSh7fSwgcHJlZml4LCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KHRoaXMsIHByZWZpeCwgeyB2YWx1ZTogZmFsc2UgfSlbcHJlZml4XTtcbiAgICAgIH1cbiAgICB9KSlbcHJlZml4XSB8fCBkZWZpbmVQcm9wZXJ0eTtcbiAgfSBjYXRjaCAob19PKSB7XG4gICAgc2V0RGVzY3JpcHRvciA9IGZ1bmN0aW9uIHNldERlc2NyaXB0b3Iobywga2V5LCBkZXNjcmlwdG9yKSB7XG4gICAgICB2YXIgcHJvdG9EZXNjcmlwdG9yID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgICAgIGRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICAgICAgZGVmaW5lUHJvcGVydHkobywga2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgIGRlZmluZVByb3BlcnR5KE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzY3JpcHRvcik7XG4gICAgfTtcbiAgfVxufSkoT2JqZWN0LCAnZ2V0T3duUHJvcGVydHlTeW1ib2xzJyk7XG5cbihmdW5jdGlvbiAoTywgUykge1xuICB2YXIgZFAgPSBPLmRlZmluZVByb3BlcnR5LFxuICAgICAgT2JqZWN0UHJvdG8gPSBPLnByb3RvdHlwZSxcbiAgICAgIHRvU3RyaW5nID0gT2JqZWN0UHJvdG8udG9TdHJpbmcsXG4gICAgICB0b1N0cmluZ1RhZyA9ICd0b1N0cmluZ1RhZycsXG4gICAgICBkZXNjcmlwdG9yO1xuICBbJ2l0ZXJhdG9yJywgJ21hdGNoJywgJ3JlcGxhY2UnLCAnc2VhcmNoJywgJ3NwbGl0JywgJ2hhc0luc3RhbmNlJywgJ2lzQ29uY2F0U3ByZWFkYWJsZScsICd1bnNjb3BhYmxlcycsICdzcGVjaWVzJywgJ3RvUHJpbWl0aXZlJywgdG9TdHJpbmdUYWddLmZvckVhY2goZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAoIShuYW1lIGluIFN5bWJvbCkpIHtcbiAgICAgIGRQKFN5bWJvbCwgbmFtZSwgeyB2YWx1ZTogU3ltYm9sKG5hbWUpIH0pO1xuICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgIGNhc2UgdG9TdHJpbmdUYWc6XG4gICAgICAgICAgZGVzY3JpcHRvciA9IE8uZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE9iamVjdFByb3RvLCAndG9TdHJpbmcnKTtcbiAgICAgICAgICBkZXNjcmlwdG9yLnZhbHVlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHN0ciA9IHRvU3RyaW5nLmNhbGwodGhpcyksXG4gICAgICAgICAgICAgICAgdHN0ID0gdHlwZW9mIHRoaXMgPT09ICd1bmRlZmluZWQnIHx8IHRoaXMgPT09IG51bGwgPyB1bmRlZmluZWQgOiB0aGlzW1N5bWJvbC50b1N0cmluZ1RhZ107XG4gICAgICAgICAgICByZXR1cm4gdHlwZW9mIHRzdCA9PT0gJ3VuZGVmaW5lZCcgPyBzdHIgOiAnW29iamVjdCAnICsgdHN0ICsgJ10nO1xuICAgICAgICAgIH07XG4gICAgICAgICAgZFAoT2JqZWN0UHJvdG8sICd0b1N0cmluZycsIGRlc2NyaXB0b3IpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KShPYmplY3QsIFN5bWJvbCk7XG5cbihmdW5jdGlvbiAoU2ksIEFQLCBTUCkge1xuXG4gIGZ1bmN0aW9uIHJldHVyblRoaXMoKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBpZiAoIUFQW1NpXSkgQVBbU2ldID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBpID0gMCxcbiAgICAgICAgc2VsZiA9IHRoaXMsXG4gICAgICAgIGl0ZXJhdG9yID0ge1xuICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgdmFyIGRvbmUgPSBzZWxmLmxlbmd0aCA8PSBpO1xuICAgICAgICByZXR1cm4gZG9uZSA/IHsgZG9uZTogZG9uZSB9IDogeyBkb25lOiBkb25lLCB2YWx1ZTogc2VsZltpKytdIH07XG4gICAgICB9XG4gICAgfTtcbiAgICBpdGVyYXRvcltTaV0gPSByZXR1cm5UaGlzO1xuICAgIHJldHVybiBpdGVyYXRvcjtcbiAgfTtcblxuICBpZiAoIVNQW1NpXSkgU1BbU2ldID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBmcm9tQ29kZVBvaW50ID0gU3RyaW5nLmZyb21Db2RlUG9pbnQsXG4gICAgICAgIHNlbGYgPSB0aGlzLFxuICAgICAgICBpID0gMCxcbiAgICAgICAgbGVuZ3RoID0gc2VsZi5sZW5ndGgsXG4gICAgICAgIGl0ZXJhdG9yID0ge1xuICAgICAgbmV4dDogZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgdmFyIGRvbmUgPSBsZW5ndGggPD0gaSxcbiAgICAgICAgICAgIGMgPSBkb25lID8gJycgOiBmcm9tQ29kZVBvaW50KHNlbGYuY29kZVBvaW50QXQoaSkpO1xuICAgICAgICBpICs9IGMubGVuZ3RoO1xuICAgICAgICByZXR1cm4gZG9uZSA/IHsgZG9uZTogZG9uZSB9IDogeyBkb25lOiBkb25lLCB2YWx1ZTogYyB9O1xuICAgICAgfVxuICAgIH07XG4gICAgaXRlcmF0b3JbU2ldID0gcmV0dXJuVGhpcztcbiAgICByZXR1cm4gaXRlcmF0b3I7XG4gIH07XG59KShTeW1ib2wuaXRlcmF0b3IsIEFycmF5LnByb3RvdHlwZSwgU3RyaW5nLnByb3RvdHlwZSk7XG5cbk51bWJlci5pc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn07XG5cbk51bWJlci5pc0Zpbml0ZSA9IE51bWJlci5pc0Zpbml0ZSB8fCBmdW5jdGlvbiAodmFsdWUpIHtcbiAgcmV0dXJuIHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIiAmJiBpc0Zpbml0ZSh2YWx1ZSk7XG59O1xuaWYgKCFTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoIHx8IGZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gIVwiYWJcIi5lbmRzV2l0aChcImFcIiwgMSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSgpKSB7XG4gIFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGggPSBmdW5jdGlvbiAoc2VhcmNoU3RyaW5nLCBwb3NpdGlvbikge1xuICAgIHZhciBzdWJqZWN0U3RyaW5nID0gdGhpcy50b1N0cmluZygpO1xuICAgIGlmICh0eXBlb2YgcG9zaXRpb24gIT09ICdudW1iZXInIHx8ICFpc0Zpbml0ZShwb3NpdGlvbikgfHwgTWF0aC5mbG9vcihwb3NpdGlvbikgIT09IHBvc2l0aW9uIHx8IHBvc2l0aW9uID4gc3ViamVjdFN0cmluZy5sZW5ndGgpIHtcbiAgICAgIHBvc2l0aW9uID0gc3ViamVjdFN0cmluZy5sZW5ndGg7XG4gICAgfVxuICAgIHBvc2l0aW9uIC09IHNlYXJjaFN0cmluZy5sZW5ndGg7XG4gICAgdmFyIGxhc3RJbmRleCA9IHN1YmplY3RTdHJpbmcuaW5kZXhPZihzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKTtcbiAgICByZXR1cm4gbGFzdEluZGV4ICE9PSAtMSAmJiBsYXN0SW5kZXggPT09IHBvc2l0aW9uO1xuICB9O1xufVxuXG5pZiAoIVN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCB8fCBmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICFcImFiXCIuc3RhcnRzV2l0aChcImJcIiwgMSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSgpKSB7XG4gIFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aCA9IGZ1bmN0aW9uIChzZWFyY2hTdHJpbmcsIHBvc2l0aW9uKSB7XG4gICAgcG9zaXRpb24gPSBwb3NpdGlvbiB8fCAwO1xuICAgIHJldHVybiB0aGlzLnN1YnN0cihwb3NpdGlvbiwgc2VhcmNoU3RyaW5nLmxlbmd0aCkgPT09IHNlYXJjaFN0cmluZztcbiAgfTtcbn1cblxuaWYgKCFBcnJheS5mcm9tKSB7XG4gIEFycmF5LmZyb20gPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHRvSW50ZWdlciA9IGZ1bmN0aW9uIHRvSW50ZWdlcihpdCkge1xuICAgICAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gTWF0aC5mbG9vciA6IE1hdGguY2VpbCkoaXQpO1xuICAgIH07XG4gICAgdmFyIHRvTGVuZ3RoID0gZnVuY3Rpb24gdG9MZW5ndGgoaXQpIHtcbiAgICAgIHJldHVybiBpdCA+IDAgPyBNYXRoLm1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7XG4gICAgfTtcbiAgICB2YXIgaXRlckNhbGwgPSBmdW5jdGlvbiBpdGVyQ2FsbChpdGVyLCBmbiwgYTEsIGEyKSB7XG4gICAgICB0cnkge1xuICAgICAgICBmbihhMSwgYTIpO1xuICAgICAgfSBjYXRjaCAoRSkge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZXIucmV0dXJuID09ICdmdW5jdGlvbicpIGl0ZXIucmV0dXJuKCk7XG4gICAgICAgIHRocm93IEU7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZSkge1xuICAgICAgdmFyIE8gPSBPYmplY3QoYXJyYXlMaWtlKSxcbiAgICAgICAgICBDID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheSxcbiAgICAgICAgICBhTGVuID0gYXJndW1lbnRzLmxlbmd0aCxcbiAgICAgICAgICBtYXBmbiA9IGFMZW4gPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLFxuICAgICAgICAgIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkLFxuICAgICAgICAgIGluZGV4ID0gMCxcbiAgICAgICAgICBpdGVyRm4gPSBPW1N5bWJvbC5pdGVyYXRvcl0sXG4gICAgICAgICAgbGVuZ3RoLFxuICAgICAgICAgIHJlc3VsdCxcbiAgICAgICAgICBzdGVwLFxuICAgICAgICAgIGl0ZXJhdG9yO1xuICAgICAgaWYgKG1hcHBpbmcpIG1hcGZuID0gbWFwZm4uYmluZChhTGVuID4gMiA/IGFyZ3VtZW50c1syXSA6IHVuZGVmaW5lZCk7XG4gICAgICBpZiAoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhQXJyYXkuaXNBcnJheShhcnJheUxpa2UpKSB7XG4gICAgICAgIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEMoKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKSB7XG4gICAgICAgICAgcmVzdWx0W2luZGV4XSA9IG1hcHBpbmcgPyBpdGVyQ2FsbChtYXBmbiwgc3RlcC52YWx1ZSwgaW5kZXgpIDogc3RlcC52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgICBmb3IgKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgICAgICAgcmVzdWx0W2luZGV4XSA9IG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgfSgpO1xufVxuXG5pZiAoIUFycmF5LnByb3RvdHlwZS5maW5kKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsICdmaW5kJywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUocHJlZGljYXRlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcnJheS5wcm90b3R5cGUuZmluZCBjYWxsZWQgb24gbnVsbCBvciB1bmRlZmluZWQnKTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgcHJlZGljYXRlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ3ByZWRpY2F0ZSBtdXN0IGJlIGEgZnVuY3Rpb24nKTtcbiAgICAgIH1cbiAgICAgIHZhciBsaXN0ID0gT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIGxlbmd0aCA9IGxpc3QubGVuZ3RoID4+PiAwO1xuICAgICAgdmFyIHRoaXNBcmcgPSBhcmd1bWVudHNbMV07XG4gICAgICB2YXIgdmFsdWU7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFsdWUgPSBsaXN0W2ldO1xuICAgICAgICBpZiAocHJlZGljYXRlLmNhbGwodGhpc0FyZywgdmFsdWUsIGksIGxpc3QpKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSk7XG59XG5cbmlmICghQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleCkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoQXJyYXkucHJvdG90eXBlLCAnZmluZEluZGV4Jywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICBlbnVtZXJhYmxlOiBmYWxzZSxcbiAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUocHJlZGljYXRlKSB7XG4gICAgICBpZiAodGhpcyA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdBcnJheS5wcm90b3R5cGUuZmluZEluZGV4IGNhbGxlZCBvbiBudWxsIG9yIHVuZGVmaW5lZCcpO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBwcmVkaWNhdGUgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncHJlZGljYXRlIG11c3QgYmUgYSBmdW5jdGlvbicpO1xuICAgICAgfVxuICAgICAgdmFyIGxpc3QgPSBPYmplY3QodGhpcyk7XG4gICAgICB2YXIgbGVuZ3RoID0gbGlzdC5sZW5ndGggPj4+IDA7XG4gICAgICB2YXIgdGhpc0FyZyA9IGFyZ3VtZW50c1sxXTtcbiAgICAgIHZhciB2YWx1ZTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YWx1ZSA9IGxpc3RbaV07XG4gICAgICAgIGlmIChwcmVkaWNhdGUuY2FsbCh0aGlzQXJnLCB2YWx1ZSwgaSwgbGlzdCkpIHtcbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgfSk7XG59XG5cbmlmICghQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzKSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShBcnJheS5wcm90b3R5cGUsICdpbmNsdWRlcycsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgZW51bWVyYWJsZTogZmFsc2UsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHZhbHVlKHNlYXJjaEVsZW1lbnQpIHtcbiAgICAgIHZhciBPID0gT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIGxlbiA9IHBhcnNlSW50KE8ubGVuZ3RoKSB8fCAwO1xuICAgICAgaWYgKGxlbiA9PT0gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICB2YXIgbiA9IHBhcnNlSW50KGFyZ3VtZW50c1sxXSkgfHwgMDtcbiAgICAgIHZhciBrO1xuICAgICAgaWYgKG4gPj0gMCkge1xuICAgICAgICBrID0gbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGsgPSBsZW4gKyBuO1xuICAgICAgICBpZiAoayA8IDApIHtcbiAgICAgICAgICBrID0gMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGN1cnJlbnRFbGVtZW50O1xuICAgICAgd2hpbGUgKGsgPCBsZW4pIHtcbiAgICAgICAgY3VycmVudEVsZW1lbnQgPSBPW2tdO1xuICAgICAgICBpZiAoc2VhcmNoRWxlbWVudCA9PT0gY3VycmVudEVsZW1lbnQgfHwgc2VhcmNoRWxlbWVudCAhPT0gc2VhcmNoRWxlbWVudCAmJiBjdXJyZW50RWxlbWVudCAhPT0gY3VycmVudEVsZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBrKys7XG4gICAgICB9XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9KTtcbn1cblxuKGZ1bmN0aW9uICgpIHtcbiAgdmFyIG5lZWRzRml4ID0gZmFsc2U7XG5cbiAgdHJ5IHtcbiAgICB2YXIgcyA9IE9iamVjdC5rZXlzKCdhJyk7XG4gICAgbmVlZHNGaXggPSBzLmxlbmd0aCAhPT0gMSB8fCBzWzBdICE9PSAnMCc7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICBuZWVkc0ZpeCA9IHRydWU7XG4gIH1cblxuICBpZiAobmVlZHNGaXgpIHtcbiAgICBPYmplY3Qua2V5cyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHksXG4gICAgICAgICAgaGFzRG9udEVudW1CdWcgPSAheyB0b1N0cmluZzogbnVsbCB9LnByb3BlcnR5SXNFbnVtZXJhYmxlKCd0b1N0cmluZycpLFxuICAgICAgICAgIGRvbnRFbnVtcyA9IFsndG9TdHJpbmcnLCAndG9Mb2NhbGVTdHJpbmcnLCAndmFsdWVPZicsICdoYXNPd25Qcm9wZXJ0eScsICdpc1Byb3RvdHlwZU9mJywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJ2NvbnN0cnVjdG9yJ10sXG4gICAgICAgICAgZG9udEVudW1zTGVuZ3RoID0gZG9udEVudW1zLmxlbmd0aDtcblxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgaWYgKG9iaiA9PT0gdW5kZWZpbmVkIHx8IG9iaiA9PT0gbnVsbCkge1xuICAgICAgICAgIHRocm93IFR5cGVFcnJvcignQ2Fubm90IGNvbnZlcnQgdW5kZWZpbmVkIG9yIG51bGwgdG8gb2JqZWN0Jyk7XG4gICAgICAgIH1cblxuICAgICAgICBvYmogPSBPYmplY3Qob2JqKTtcblxuICAgICAgICB2YXIgcmVzdWx0ID0gW10sXG4gICAgICAgICAgICBwcm9wLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICBmb3IgKHByb3AgaW4gb2JqKSB7XG4gICAgICAgICAgaWYgKGhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocHJvcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc0RvbnRFbnVtQnVnKSB7XG4gICAgICAgICAgZm9yIChpID0gMDsgaSA8IGRvbnRFbnVtc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGRvbnRFbnVtc1tpXSkpIHtcbiAgICAgICAgICAgICAgcmVzdWx0LnB1c2goZG9udEVudW1zW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfTtcbiAgICB9KCk7XG4gIH1cbn0pKCk7XG5cbihmdW5jdGlvbiAoTykge1xuICBpZiAoJ2Fzc2lnbicgaW4gTykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIE8uZGVmaW5lUHJvcGVydHkoTywgJ2Fzc2lnbicsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgd3JpdGFibGU6IHRydWUsXG4gICAgdmFsdWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBnT1BTID0gTy5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gICAgICAgICAgcElFID0gTy5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgICAgICAgICBmaWx0ZXJPUyA9IGdPUFMgPyBmdW5jdGlvbiAoc2VsZikge1xuICAgICAgICByZXR1cm4gZ09QUyhzZWxmKS5maWx0ZXIocElFLCBzZWxmKTtcbiAgICAgIH0gOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBBcnJheS5wcm90b3R5cGU7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24gYXNzaWduKHdoZXJlKSB7XG4gICAgICAgIGlmIChnT1BTICYmICEod2hlcmUgaW5zdGFuY2VvZiBPKSkge1xuICAgICAgICAgIGNvbnNvbGUud2FybigncHJvYmxlbWF0aWMgU3ltYm9scycsIHdoZXJlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHNldChrZXlPclN5bWJvbCkge1xuICAgICAgICAgIHdoZXJlW2tleU9yU3ltYm9sXSA9IGFyZ1trZXlPclN5bWJvbF07XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMSwgaWkgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWk7ICsraSkge1xuICAgICAgICAgIHZhciBhcmcgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgICBpZiAoYXJnID09PSBudWxsIHx8IGFyZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBPLmtleXMoYXJnKS5jb25jYXQoZmlsdGVyT1MoYXJnKSkuZm9yRWFjaChzZXQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHdoZXJlO1xuICAgICAgfTtcbiAgICB9KClcbiAgfSk7XG59KShPYmplY3QpO1xuXG4oZnVuY3Rpb24gKGdsb2JhbCkge1xuICB2YXIgaTtcblxuICB2YXIgZGVmaW5lUHJvcGVydHkgPSBPYmplY3QuZGVmaW5lUHJvcGVydHksXG4gICAgICBpcyA9IGZ1bmN0aW9uIGlzKGEsIGIpIHtcbiAgICByZXR1cm4gYSA9PT0gYiB8fCBhICE9PSBhICYmIGIgIT09IGI7XG4gIH07XG5cbiAgaWYgKHR5cGVvZiBXZWFrTWFwID09ICd1bmRlZmluZWQnKSB7XG4gICAgZ2xvYmFsLldlYWtNYXAgPSBjcmVhdGVDb2xsZWN0aW9uKHtcbiAgICAgICdkZWxldGUnOiBzaGFyZWREZWxldGUsXG5cbiAgICAgIGNsZWFyOiBzaGFyZWRDbGVhcixcblxuICAgICAgZ2V0OiBzaGFyZWRHZXQsXG5cbiAgICAgIGhhczogbWFwSGFzLFxuXG4gICAgICBzZXQ6IHNoYXJlZFNldFxuICAgIH0sIHRydWUpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBNYXAgPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIG5ldyBNYXAoKS52YWx1ZXMgIT09ICdmdW5jdGlvbicgfHwgIW5ldyBNYXAoKS52YWx1ZXMoKS5uZXh0KSB7XG4gICAgdmFyIF9jcmVhdGVDb2xsZWN0aW9uO1xuXG4gICAgZ2xvYmFsLk1hcCA9IGNyZWF0ZUNvbGxlY3Rpb24oKF9jcmVhdGVDb2xsZWN0aW9uID0ge1xuICAgICAgJ2RlbGV0ZSc6IHNoYXJlZERlbGV0ZSxcblxuICAgICAgaGFzOiBtYXBIYXMsXG5cbiAgICAgIGdldDogc2hhcmVkR2V0LFxuXG4gICAgICBzZXQ6IHNoYXJlZFNldCxcblxuICAgICAga2V5czogc2hhcmVkS2V5cyxcblxuICAgICAgdmFsdWVzOiBzaGFyZWRWYWx1ZXMsXG5cbiAgICAgIGVudHJpZXM6IG1hcEVudHJpZXMsXG5cbiAgICAgIGZvckVhY2g6IHNoYXJlZEZvckVhY2gsXG5cbiAgICAgIGNsZWFyOiBzaGFyZWRDbGVhclxuICAgIH0sIF9jcmVhdGVDb2xsZWN0aW9uW1N5bWJvbC5pdGVyYXRvcl0gPSBtYXBFbnRyaWVzLCBfY3JlYXRlQ29sbGVjdGlvbikpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBTZXQgPT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIG5ldyBTZXQoKS52YWx1ZXMgIT09ICdmdW5jdGlvbicgfHwgIW5ldyBTZXQoKS52YWx1ZXMoKS5uZXh0KSB7XG4gICAgdmFyIF9jcmVhdGVDb2xsZWN0aW9uMjtcblxuICAgIGdsb2JhbC5TZXQgPSBjcmVhdGVDb2xsZWN0aW9uKChfY3JlYXRlQ29sbGVjdGlvbjIgPSB7XG4gICAgICBoYXM6IHNldEhhcyxcblxuICAgICAgYWRkOiBzaGFyZWRBZGQsXG5cbiAgICAgICdkZWxldGUnOiBzaGFyZWREZWxldGUsXG5cbiAgICAgIGNsZWFyOiBzaGFyZWRDbGVhcixcblxuICAgICAga2V5czogc2hhcmVkVmFsdWVzLFxuICAgICAgdmFsdWVzOiBzaGFyZWRWYWx1ZXMsXG5cbiAgICAgIGVudHJpZXM6IHNldEVudHJpZXMsXG5cbiAgICAgIGZvckVhY2g6IHNoYXJlZEZvckVhY2hcbiAgICB9LCBfY3JlYXRlQ29sbGVjdGlvbjJbU3ltYm9sLml0ZXJhdG9yXSA9IHNoYXJlZFZhbHVlcywgX2NyZWF0ZUNvbGxlY3Rpb24yKSk7XG4gIH1cblxuICBpZiAodHlwZW9mIFdlYWtTZXQgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBnbG9iYWwuV2Vha1NldCA9IGNyZWF0ZUNvbGxlY3Rpb24oe1xuICAgICAgJ2RlbGV0ZSc6IHNoYXJlZERlbGV0ZSxcblxuICAgICAgYWRkOiBzaGFyZWRBZGQsXG5cbiAgICAgIGNsZWFyOiBzaGFyZWRDbGVhcixcblxuICAgICAgaGFzOiBzZXRIYXNcbiAgICB9LCB0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUNvbGxlY3Rpb24ocHJvdG8sIG9iamVjdE9ubHkpIHtcbiAgICBmdW5jdGlvbiBDb2xsZWN0aW9uKGEpIHtcbiAgICAgIGlmICghdGhpcyB8fCB0aGlzLmNvbnN0cnVjdG9yICE9PSBDb2xsZWN0aW9uKSByZXR1cm4gbmV3IENvbGxlY3Rpb24oYSk7XG4gICAgICB0aGlzLl9rZXlzID0gW107XG4gICAgICB0aGlzLl92YWx1ZXMgPSBbXTtcbiAgICAgIHRoaXMuX2l0cCA9IFtdO1xuICAgICAgdGhpcy5vYmplY3RPbmx5ID0gb2JqZWN0T25seTtcblxuICAgICAgaWYgKGEpIGluaXQuY2FsbCh0aGlzLCBhKTtcbiAgICB9XG5cbiAgICBpZiAoIW9iamVjdE9ubHkpIHtcbiAgICAgIGRlZmluZVByb3BlcnR5KHByb3RvLCAnc2l6ZScsIHtcbiAgICAgICAgZ2V0OiBzaGFyZWRTaXplXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm90by5jb25zdHJ1Y3RvciA9IENvbGxlY3Rpb247XG4gICAgQ29sbGVjdGlvbi5wcm90b3R5cGUgPSBwcm90bztcblxuICAgIHJldHVybiBDb2xsZWN0aW9uO1xuICB9XG5cbiAgZnVuY3Rpb24gaW5pdChhKSB7XG4gICAgdmFyIGk7XG5cbiAgICBpZiAodGhpcy5hZGQpIGEuZm9yRWFjaCh0aGlzLmFkZCwgdGhpcyk7ZWxzZSBhLmZvckVhY2goZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgdGhpcy5zZXQoYVswXSwgYVsxXSk7XG4gICAgICB9LCB0aGlzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNoYXJlZERlbGV0ZShrZXkpIHtcbiAgICBpZiAodGhpcy5oYXMoa2V5KSkge1xuICAgICAgdGhpcy5fa2V5cy5zcGxpY2UoaSwgMSk7XG4gICAgICB0aGlzLl92YWx1ZXMuc3BsaWNlKGksIDEpO1xuXG4gICAgICB0aGlzLl9pdHAuZm9yRWFjaChmdW5jdGlvbiAocCkge1xuICAgICAgICBpZiAoaSA8IHBbMF0pIHBbMF0tLTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAtMSA8IGk7XG4gIH07XG5cbiAgZnVuY3Rpb24gc2hhcmVkR2V0KGtleSkge1xuICAgIHJldHVybiB0aGlzLmhhcyhrZXkpID8gdGhpcy5fdmFsdWVzW2ldIDogdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gaGFzKGxpc3QsIGtleSkge1xuICAgIGlmICh0aGlzLm9iamVjdE9ubHkgJiYga2V5ICE9PSBPYmplY3Qoa2V5KSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgdmFsdWUgdXNlZCBhcyB3ZWFrIGNvbGxlY3Rpb24ga2V5XCIpO1xuXG4gICAgaWYgKGtleSAhPSBrZXkgfHwga2V5ID09PSAwKSBmb3IgKGkgPSBsaXN0Lmxlbmd0aDsgaS0tICYmICFpcyhsaXN0W2ldLCBrZXkpOykge30gZWxzZSBpID0gbGlzdC5pbmRleE9mKGtleSk7XG4gICAgcmV0dXJuIC0xIDwgaTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNldEhhcyh2YWx1ZSkge1xuICAgIHJldHVybiBoYXMuY2FsbCh0aGlzLCB0aGlzLl92YWx1ZXMsIHZhbHVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG1hcEhhcyh2YWx1ZSkge1xuICAgIHJldHVybiBoYXMuY2FsbCh0aGlzLCB0aGlzLl9rZXlzLCB2YWx1ZSk7XG4gIH1cblxuICBmdW5jdGlvbiBzaGFyZWRTZXQoa2V5LCB2YWx1ZSkge1xuICAgIHRoaXMuaGFzKGtleSkgPyB0aGlzLl92YWx1ZXNbaV0gPSB2YWx1ZSA6IHRoaXMuX3ZhbHVlc1t0aGlzLl9rZXlzLnB1c2goa2V5KSAtIDFdID0gdmFsdWU7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBmdW5jdGlvbiBzaGFyZWRBZGQodmFsdWUpIHtcbiAgICBpZiAoIXRoaXMuaGFzKHZhbHVlKSkgdGhpcy5fdmFsdWVzLnB1c2godmFsdWUpO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hhcmVkQ2xlYXIoKSB7XG4gICAgKHRoaXMuX2tleXMgfHwgMCkubGVuZ3RoID0gdGhpcy5fdmFsdWVzLmxlbmd0aCA9IDA7XG4gIH1cblxuICBmdW5jdGlvbiBzaGFyZWRLZXlzKCkge1xuICAgIHJldHVybiBzaGFyZWRJdGVyYXRvcih0aGlzLl9pdHAsIHRoaXMuX2tleXMpO1xuICB9XG5cbiAgZnVuY3Rpb24gc2hhcmVkVmFsdWVzKCkge1xuICAgIHJldHVybiBzaGFyZWRJdGVyYXRvcih0aGlzLl9pdHAsIHRoaXMuX3ZhbHVlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBtYXBFbnRyaWVzKCkge1xuICAgIHJldHVybiBzaGFyZWRJdGVyYXRvcih0aGlzLl9pdHAsIHRoaXMuX2tleXMsIHRoaXMuX3ZhbHVlcyk7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRFbnRyaWVzKCkge1xuICAgIHJldHVybiBzaGFyZWRJdGVyYXRvcih0aGlzLl9pdHAsIHRoaXMuX3ZhbHVlcywgdGhpcy5fdmFsdWVzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNoYXJlZEl0ZXJhdG9yKGl0cCwgYXJyYXksIGFycmF5Mikge1xuICAgIHZhciBfcmVmO1xuXG4gICAgdmFyIHAgPSBbMF0sXG4gICAgICAgIGRvbmUgPSBmYWxzZTtcbiAgICBpdHAucHVzaChwKTtcbiAgICByZXR1cm4gX3JlZiA9IHt9LCBfcmVmW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LCBfcmVmLm5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgdmFyIHYsXG4gICAgICAgICAgayA9IHBbMF07XG4gICAgICBpZiAoIWRvbmUgJiYgayA8IGFycmF5Lmxlbmd0aCkge1xuICAgICAgICB2ID0gYXJyYXkyID8gW2FycmF5W2tdLCBhcnJheTJba11dIDogYXJyYXlba107XG4gICAgICAgIHBbMF0rKztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRvbmUgPSB0cnVlO1xuICAgICAgICBpdHAuc3BsaWNlKGl0cC5pbmRleE9mKHApLCAxKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB7IGRvbmU6IGRvbmUsIHZhbHVlOiB2IH07XG4gICAgfSwgX3JlZjtcbiAgfVxuXG4gIGZ1bmN0aW9uIHNoYXJlZFNpemUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlcy5sZW5ndGg7XG4gIH1cblxuICBmdW5jdGlvbiBzaGFyZWRGb3JFYWNoKGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gICAgdmFyIGl0ID0gdGhpcy5lbnRyaWVzKCk7XG4gICAgZm9yICg7Oykge1xuICAgICAgdmFyIHIgPSBpdC5uZXh0KCk7XG4gICAgICBpZiAoci5kb25lKSBicmVhaztcbiAgICAgIGNhbGxiYWNrLmNhbGwoY29udGV4dCwgci52YWx1ZVsxXSwgci52YWx1ZVswXSwgdGhpcyk7XG4gICAgfVxuICB9XG59KShfYXVyZWxpYVBhbC5QTEFURk9STS5nbG9iYWwpO1xuXG52YXIgZW1wdHlNZXRhZGF0YSA9IE9iamVjdC5mcmVlemUoe30pO1xudmFyIG1ldGFkYXRhQ29udGFpbmVyS2V5ID0gJ19fbWV0YWRhdGFfXyc7XG52YXIgYmluZCA9IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kO1xuXG5pZiAodHlwZW9mIF9hdXJlbGlhUGFsLlBMQVRGT1JNLmdsb2JhbC5SZWZsZWN0ID09PSAndW5kZWZpbmVkJykge1xuICBfYXVyZWxpYVBhbC5QTEFURk9STS5nbG9iYWwuUmVmbGVjdCA9IHt9O1xufVxuXG5pZiAodHlwZW9mIFJlZmxlY3QuZ2V0T3duTWV0YWRhdGEgIT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdC5nZXRPd25NZXRhZGF0YSA9IGZ1bmN0aW9uIChtZXRhZGF0YUtleSwgdGFyZ2V0LCB0YXJnZXRLZXkpIHtcbiAgICBpZiAodGFyZ2V0Lmhhc093blByb3BlcnR5KG1ldGFkYXRhQ29udGFpbmVyS2V5KSkge1xuICAgICAgcmV0dXJuICh0YXJnZXRbbWV0YWRhdGFDb250YWluZXJLZXldW3RhcmdldEtleV0gfHwgZW1wdHlNZXRhZGF0YSlbbWV0YWRhdGFLZXldO1xuICAgIH1cbiAgfTtcbn1cblxuaWYgKHR5cGVvZiBSZWZsZWN0LmRlZmluZU1ldGFkYXRhICE9PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEgPSBmdW5jdGlvbiAobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUsIHRhcmdldCwgdGFyZ2V0S2V5KSB7XG4gICAgdmFyIG1ldGFkYXRhQ29udGFpbmVyID0gdGFyZ2V0Lmhhc093blByb3BlcnR5KG1ldGFkYXRhQ29udGFpbmVyS2V5KSA/IHRhcmdldFttZXRhZGF0YUNvbnRhaW5lcktleV0gOiB0YXJnZXRbbWV0YWRhdGFDb250YWluZXJLZXldID0ge307XG4gICAgdmFyIHRhcmdldENvbnRhaW5lciA9IG1ldGFkYXRhQ29udGFpbmVyW3RhcmdldEtleV0gfHwgKG1ldGFkYXRhQ29udGFpbmVyW3RhcmdldEtleV0gPSB7fSk7XG4gICAgdGFyZ2V0Q29udGFpbmVyW21ldGFkYXRhS2V5XSA9IG1ldGFkYXRhVmFsdWU7XG4gIH07XG59XG5cbmlmICh0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSAhPT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0Lm1ldGFkYXRhID0gZnVuY3Rpb24gKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIHRhcmdldEtleSkge1xuICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSwgdGFyZ2V0LCB0YXJnZXRLZXkpO1xuICAgIH07XG4gIH07XG59XG5cbmlmICh0eXBlb2YgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSAhPT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0LmRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gKHRhcmdldCwgcHJvcGVydHlLZXksIGRlc2NyaXB0b3IpIHtcbiAgICBpZiAoKHR5cGVvZiB0YXJnZXQgPT09ICd1bmRlZmluZWQnID8gJ3VuZGVmaW5lZCcgOiBfdHlwZW9mKHRhcmdldCkpID09PSAnb2JqZWN0JyA/IHRhcmdldCA9PT0gbnVsbCA6IHR5cGVvZiB0YXJnZXQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1JlZmxlY3QuZGVmaW5lUHJvcGVydHkgY2FsbGVkIG9uIG5vbi1vYmplY3QnKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCBkZXNjcmlwdG9yKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG59XG5cbmlmICh0eXBlb2YgUmVmbGVjdC5jb25zdHJ1Y3QgIT09ICdmdW5jdGlvbicpIHtcbiAgUmVmbGVjdC5jb25zdHJ1Y3QgPSBmdW5jdGlvbiAoVGFyZ2V0LCBhcmdzKSB7XG4gICAgaWYgKGFyZ3MpIHtcbiAgICAgIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICAgICAgY2FzZSAwOlxuICAgICAgICAgIHJldHVybiBuZXcgVGFyZ2V0KCk7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdKTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgYSA9IFtudWxsXTtcbiAgICBhLnB1c2guYXBwbHkoYSwgYXJncyk7XG4gICAgcmV0dXJuIG5ldyAoYmluZC5hcHBseShUYXJnZXQsIGEpKSgpO1xuICB9O1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hdXJlbGlhLXBvbHlmaWxscy9kaXN0L2NvbW1vbmpzL2F1cmVsaWEtcG9seWZpbGxzLmpzXG4vLyBtb2R1bGUgaWQgPSBhdXJlbGlhLXBvbHlmaWxsc1xuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbFtcIlByb21pc2VcIl0gPSByZXF1aXJlKFwiLSFDOlxcXFxVc2Vyc1xcXFxpdGFsb1xcXFxEZXNrdG9wXFxcXG5ldyBBdXJlbGlhXFxcXHRyeVxcXFxza2VsZXRvbi10eXBlc2NyaXB0LXdlYnBhY2tcXFxcbm9kZV9tb2R1bGVzXFxcXGJsdWViaXJkXFxcXGpzXFxcXGJyb3dzZXJcXFxcYmx1ZWJpcmQuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2JsdWViaXJkL2pzL2Jyb3dzZXIvYmx1ZWJpcmQuanNcbi8vIG1vZHVsZSBpZCA9IGJsdWViaXJkXG4vLyBtb2R1bGUgY2h1bmtzID0gMiJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUMxSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMxSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzVFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FDdEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3BRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3AyS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDckdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQ3hOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUNqZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDOXhCQTtBQUNBOzs7OyIsInNvdXJjZVJvb3QiOiIifQ==