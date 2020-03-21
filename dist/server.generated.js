module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar config = {\n    env: \"development\" || false,\n    port: process.env.PORT || 3000,\n    jwtSecret: process.env.JWT_SECRET || \"YOUR_secret_key\",\n    mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/ironhack-online-marketplace'\n};\n\nvar _default = config;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(config, 'config', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/config/config.js');\n    reactHotLoader.register(_default, 'default', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/config/config.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./config/db.config.js":
/*!*****************************!*\
  !*** ./config/db.config.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n  return a;\n};\n\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\nvar config = __webpack_require__(/*! ./config */ \"./config/config.js\").default;\n\nmongoose.connect(config.mongoUri, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true,\n  useCreateIndex: true\n}).then(function () {\n  return console.log('Successfully connected to the database ' + config.mongoUri);\n}).catch(function (error) {\n  console.error('An error ocurred trying to connect to the database ' + config.mongoUri + ': ', error);\n  process.exit(1);\n});\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(config, 'config', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/config/db.config.js');\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./config/db.config.js?");

/***/ }),

/***/ "./helpers/dbErrorHandler.js":
/*!***********************************!*\
  !*** ./helpers/dbErrorHandler.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n// Get unique error field name\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar getUniqueErrorMessage = function getUniqueErrorMessage(err) {\n    var output = void 0;\n    try {\n        var fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n        output = fieldName.chartAt(0).toUpperCase() + fieldName.slice(1) + 'already exists';\n    } catch (error) {\n        output = 'Unique field already exists';\n    }\n    return output;\n};\n\n// Get the error message from error object\nvar getErrorMessage = function getErrorMessage(err) {\n    var message = '';\n    if (err.code) {\n        switch (err.code) {\n            case 11000:\n            case 11001:\n                message = getUniqueErrorMessage(err);\n                break;\n            default:\n                message = 'Something went wrong';\n        }\n    } else {\n        for (var errName in err.errors) {\n            if (err.errors[errName].message) message = err.errors[errName].message;\n        }\n    }\n    return message;\n};\n\nvar _default = { getErrorMessage: getErrorMessage };\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(getUniqueErrorMessage, 'getUniqueErrorMessage', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/helpers/dbErrorHandler.js');\n    reactHotLoader.register(getErrorMessage, 'getErrorMessage', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/helpers/dbErrorHandler.js');\n    reactHotLoader.register(_default, 'default', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/helpers/dbErrorHandler.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(module) {\n\tif (!module.webpackPolyfill) {\n\t\tmodule.deprecate = function() {};\n\t\tmodule.paths = [];\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/module.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _expressJwt = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n\nvar _expressJwt2 = _interopRequireDefault(_expressJwt);\n\nvar _config = __webpack_require__(/*! ../../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\n//Sign-in\nvar signin = function signin(req, res) {\n    _user2.default.findOne({\n        \"email\": req.body.email\n    }, function (err, user) {\n        if (err || !user) {\n            return res.status(401).json({\n                error: \"User not found\"\n            });\n        }\n        if (!user.authenticate(req.body.password)) {\n            return res.status(401).send({\n                error: \"Email and password don't match.\"\n            });\n        }\n\n        var token = _jsonwebtoken2.default.sign({\n            _id: user._id\n        }, _config2.default.jwtSecret);\n\n        res.cookie(\"t\", token, {\n            expire: new Date() + 999\n        });\n\n        return res.json({\n            token: token,\n            user: { _id: user._id, name: user.name, email: user.email }\n        });\n    });\n};\n\n//Sign-out\nvar signout = function signout(req, res) {\n    res.clearCookie(\"t\");\n    return res.status(200).json({\n        message: \"signed out\"\n    });\n};\n\n//Requiring sign-in\n/*\nThe requireSignin method uses express-jwt to verify that the incoming request has a valid\nJWT in the Authorization header. If the token is valid, it appends the verified user's ID\nin an 'auth' key to the request object, otherwise it throws an authentication error.\n*/\nvar requireSignin = (0, _expressJwt2.default)({\n    secret: _config2.default.jwtSecret,\n    userProperty: 'auth'\n});\n\n//Authorizing signed in users\n/*\nFor some of the protected routes such as update and delete, on top of checking for\nauthentication we also want to make sure the requesting user is only updating or deleting\ntheir own user information. To achieve this, the hasAuthorization function checks if the\nauthenticated user is the same as the user being updated or deleted before the corresponding\nCRUD controller function is allowed to proceed.\n\nThe req.auth object is populated by express-jwt in requireSignin after\nauthentication verification, and the req.profile is populated by the userByID function\nin the user.controller.js . We will add the hasAuthorization function to routes that\nrequire both authentication and authorization.\n*/\nvar hasAuthorization = function hasAuthorization(req, res) {\n    var authorized = req.profile && req.auth && req.profile._id === req.auth._id;\n    if (!authorized) {\n        return res.status(403).json({\n            error: \"User is not authorized\"\n        });\n    }\n    next();\n};\n\nvar _default = { signin: signin, signout: signout, requireSignin: requireSignin, hasAuthorization: hasAuthorization };\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(signin, 'signin', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/server/controllers/auth.controller.js');\n    reactHotLoader.register(signout, 'signout', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/server/controllers/auth.controller.js');\n    reactHotLoader.register(requireSignin, 'requireSignin', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/server/controllers/auth.controller.js');\n    reactHotLoader.register(hasAuthorization, 'hasAuthorization', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/server/controllers/auth.controller.js');\n    reactHotLoader.register(_default, 'default', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/server/controllers/auth.controller.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _user = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _dbErrorHandler = __webpack_require__(/*! ../../helpers/dbErrorHandler */ \"./helpers/dbErrorHandler.js\");\n\nvar _dbErrorHandler2 = _interopRequireDefault(_dbErrorHandler);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\n//Creating a new user\nvar create = function create(req, res, next) {\n    var user = new _user2.default(req.body);\n    user.save().then(function () {\n        res.status(200).json({\n            message: \"Successfully signed up!\"\n        });\n    }).catch(function (err) {\n        return res.status(400).json({\n            error: _dbErrorHandler2.default.getErrorMessage(err)\n        });\n    });\n};\n\n//Listing all users\nvar list = function list(req, res) {\n    _user2.default.find().select('name email updated created').then(function (users) {\n        res.json(users);\n    }).catch(function (err) {\n        return res.status(400).json({\n            error: _dbErrorHandler2.default.getErrorMessage(err)\n        });\n    });\n};\n\n//Loading a user by ID to read, update, or delete\nvar userByID = function userByID(req, res, next, id) {\n    _user2.default.findById(id).then(function (user) {\n        req.profile = user;\n        next();\n    }).catch(function (err) {\n        return res.status('400').send({ errorMessage: \"User not found\" });\n    });\n};\n\n//Reading\n/* \nWhen the Express app gets a GET request at '/api/users/:userId' , it executes the\nuserByID controller function to load the user by the userId value in the param, and then\nthe read controller function.\n*/\nvar read = function read(req, res) {\n    req.profile.hashed_password = undefined;\n    req.profile.salt = undefined;\n    return res.json(req.profile);\n};\n\n//Updating\n/*\nWhen the Express app gets a PUT request at '/api/users/:userId' , similar to the read ,\nit first loads the user with the :userId param value, and then the update controller\nfunction is executed.\n*/\nvar update = function update(req, res, next) {\n    var user = req.profile;\n    user = _lodash2.default.extend(user, req.body);\n    user.updated = Date.now();\n    user.save().then(function () {\n        user.hashed_password = undefined;\n        user.salt = undefined;\n        res.json(user);\n    }).cath(function (err) {\n        return res.status(400).json({\n            error: _dbErrorHandler2.default.getErrorMessage(err)\n        });\n    });\n};\n\n//Deleting\n/*\nWhen the Express app gets a DELETE request at '/api/users/:userId' , similar to the\nread and update, it first loads the user by ID, and then the remove controller function is\nexecuted.\n*/\nvar remove = function remove(req, res, next) {\n    var user = req.profile;\n    user.remove().then(function (deletedUser) {\n        deletedUser.hashed_password = undefined;\n        deletedUser.salt = undefined;\n        res.json(deletedUser);\n    }).cath(function (err) {\n        return res.status(400).json({\n            error: _dbErrorHandler2.default.getErrorMessage(err)\n        });\n    });\n};\n\nvar _default = { create: create, userByID: userByID, read: read, list: list, remove: remove, update: update };\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(create, 'create', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/server/controllers/user.controller.js');\n    reactHotLoader.register(list, 'list', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/server/controllers/user.controller.js');\n    reactHotLoader.register(userByID, 'userByID', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/server/controllers/user.controller.js');\n    reactHotLoader.register(read, 'read', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/server/controllers/user.controller.js');\n    reactHotLoader.register(update, 'update', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/server/controllers/user.controller.js');\n    reactHotLoader.register(remove, 'remove', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/server/controllers/user.controller.js');\n    reactHotLoader.register(_default, 'default', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/server/controllers/user.controller.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar _webpack2 = _interopRequireDefault(_webpack);\n\nvar _webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n\nvar _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);\n\nvar _webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n\nvar _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);\n\nvar _webpackConfigClient = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n\nvar _webpackConfigClient2 = _interopRequireDefault(_webpackConfigClient);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar compile = function compile(app) {\n    if (true) {\n        var compiler = (0, _webpack2.default)(_webpackConfigClient2.default);\n        var middleware = (0, _webpackDevMiddleware2.default)(compiler, {\n            publicPath: _webpackConfigClient2.default.output.publicPath\n        });\n        app.use(middleware);\n        app.use((0, _webpackHotMiddleware2.default)(compiler));\n    }\n};\n\nvar _default = { compile: compile };\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(compile, 'compile', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/server/devBundle.js');\n    reactHotLoader.register(_default, 'default', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/server/devBundle.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _path = __webpack_require__(/*! path */ \"path\");\n\nvar _path2 = _interopRequireDefault(_path);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _cookieParser = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n\nvar _cookieParser2 = _interopRequireDefault(_cookieParser);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _template = __webpack_require__(/*! ./../template */ \"./template.js\");\n\nvar _template2 = _interopRequireDefault(_template);\n\nvar _user = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _devBundle = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n\nvar _devBundle2 = _interopRequireDefault(_devBundle);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n}; // Body parsing middleware to handle the complexities of parsing streamable request objects\n// Cookie parsing middleware to parse and set cookies in request objects\n// Compression middleware that will attempt to compress response bodies for all requests that traverse through the middleware\n// Middleware to enable CORS (Cross-origin resource sharing)\n// collection of middleware functions to help secure Express apps by setting various HTTP headers\n\n//comment it out when building the application code for production\n\n\n//Serving static files from the dist folder\nvar CURRENT_WORKING_DIR = process.cwd();\n\nvar app = (0, _express2.default)();\n\n//comment it out when building the application code for production\n_devBundle2.default.compile(app);\n\n// Middlewares\napp.use(_bodyParser2.default.json()); // parse body params and attache them to req.body\napp.use(_bodyParser2.default.urlencoded({ extended: true }));\napp.use((0, _cookieParser2.default)());\napp.use((0, _compression2.default)());\napp.use((0, _helmet2.default)()); // secure apps by setting various HTTP headers\napp.use((0, _cors2.default)()); // enable CORS - Cross Origin Resource Sharing\n\napp.use('/dist', _express2.default.static(_path2.default.join(CURRENT_WORKING_DIR, 'dist')));\n\n// mount routes\napp.use('/', _user2.default);\napp.use('/', _auth2.default);\n\n//Rendering templates at the root\napp.get('/', function (req, res) {\n    res.status(200).send((0, _template2.default)());\n});\n\n// Catch unauthorised errors\napp.use(function (err, req, res, next) {\n    if (err.name === 'UnauthorizedError') {\n        res.status(401).json({ \"error\": err.name + \": \" + err.message });\n    }\n});\n\nvar _default = app;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(CURRENT_WORKING_DIR, 'CURRENT_WORKING_DIR', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/server/express.js');\n    reactHotLoader.register(app, 'app', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/server/express.js');\n    reactHotLoader.register(_default, 'default', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/server/express.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nvar _crypto2 = _interopRequireDefault(_crypto);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar UserSchema = new _mongoose2.default.Schema({\n    //Name\n    name: {\n        type: String,\n        trim: true,\n        required: 'Name is required'\n    },\n\n    //Email\n    email: {\n        type: String,\n        trim: true,\n        unique: 'Email already exists',\n        match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n        required: 'Email is required'\n    },\n\n    //Created and updated timestamps\n    created: {\n        type: Date,\n        default: Date.now\n    },\n    updated: Date,\n\n    //Hashed password and salt\n    hashed_password: {\n        type: String,\n        required: \"Password is required\"\n    },\n    salt: String\n});\n\n/*The password string provided by the user is not stored directly in the user\ndocument. Instead, it is handled as a virtual field.*/\nUserSchema.virtual('password').set(function (password) {\n    this._password = password;\n    this.salt = this.makeSalt();\n    this.hashed_password = this.encryptPassword(password);\n}).get(function () {\n    return this._password;\n});\n\n// Password field validation\nUserSchema.path('hashed_password').validate(function (v) {\n    if (this._password && this._password.length < 6) {\n        this.invalidate('password', 'Password must be at least 6 characters.');\n    }\n    if (this.isNew && !this._password) {\n        this.invalidate('password', 'Password is required');\n    }\n}, null);\n\n// Encryption and authentication\nUserSchema.methods = {\n\n    authenticate: function authenticate(plainText) {\n        return this.encryptPassword(plainText) === this.hashed_password;\n    },\n\n    encryptPassword: function encryptPassword(password) {\n        if (!password) return '';\n        try {\n            return _crypto2.default.createHmac('sha256', this.salt).update(password).digest('hex');\n        } catch (err) {\n            return '';\n        }\n    },\n\n    makeSalt: function makeSalt() {\n        return Math.round(new Date().valueOf() * Math.random()) + '';\n    }\n};\n\nvar _default = _mongoose2.default.model('User', UserSchema);\n\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(UserSchema, 'UserSchema', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/server/models/user.model.js');\n    reactHotLoader.register(_default, 'default', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/server/models/user.model.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar router = _express2.default.Router();\n\nrouter.route('/auth/signin').post(_auth2.default.signin);\n\nrouter.route('/auth/signout').get(_auth2.default.signout);\n\nvar _default = router;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(router, 'router', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/server/routes/auth.routes.js');\n    reactHotLoader.register(_default, 'default', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/server/routes/auth.routes.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _user = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _auth = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar router = _express2.default.Router();\n\nrouter.route('/api/users').get(_user2.default.list).post(_user2.default.create);\n\nrouter.route('/api/users/:userId').get(_auth2.default.requireSignin, _user2.default.read).put(_auth2.default.requireSignin, _auth2.default.hasAuthorization, _user2.default.update).delete(_auth2.default.requireSignin, _auth2.default.hasAuthorization, _user2.default.remove);\n\nrouter.param('userId', _user2.default.userByID);\n\nvar _default = router;\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(router, 'router', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/server/routes/user.routes.js');\n    reactHotLoader.register(_default, 'default', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/server/routes/user.routes.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _config = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _express = __webpack_require__(/*! ./express */ \"./server/express.js\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\n\n// Set up the database\n__webpack_require__(/*! ../config/db.config */ \"./config/db.config.js\");\n\n//Listening on the specified port for incoming requests\n_express2.default.listen(_config2.default.port, function (err) {\n    if (err) console.log(err);\n    console.info('Server started on port %s.', _config2.default.port);\n});\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar _default = function _default() {\n    return \"<!doctype html>\\n        <html lang=\\\"en\\\">\\n            <head>\\n                <meta charset=\\\"utf-8\\\">\\n                <title>MERN Kickstart</title>\\n            </head>\\n            <body>\\n                <div id=\\\"root\\\"></div>\\n                <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\"></script>\\n            </body>\\n        </html>\";\n};\n\nexports.default = _default;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(_default, \"default\", \"/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/template.js\");\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(module) {\n\n(function () {\n    var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n    enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {\n    return a;\n};\n\nvar path = __webpack_require__(/*! path */ \"path\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\nvar CURRENT_WORKING_DIR = process.cwd();\n\nvar config = {\n    name: \"browser\",\n    mode: \"development\",\n    devtool: 'eval-source-map',\n    entry: ['react-hot-loader/patch', 'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n    output: {\n        path: path.join(CURRENT_WORKING_DIR, '/dist'),\n        filename: 'bundle.js',\n        publicPath: '/dist/'\n    },\n    module: {\n        rules: [{\n            test: /\\.jsx?$/,\n            exclude: /node_modules/,\n            use: ['babel-loader']\n        }]\n    },\n    plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\n\nmodule.exports = config;\n;\n\n(function () {\n    var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n    if (!reactHotLoader) {\n        return;\n    }\n\n    reactHotLoader.register(CURRENT_WORKING_DIR, 'CURRENT_WORKING_DIR', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/webpack.config.client.js');\n    reactHotLoader.register(config, 'config', '/home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/webpack.config.client.js');\n})();\n\n;\n\n(function () {\n    var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n    leaveModule && leaveModule(module);\n})();\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/module.js */ \"./node_modules/webpack/buildin/module.js\")(module)))\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! /home/esrfree/School/Ironhack/Projects/Ironhack-online-marketplace/server/server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ })

/******/ });