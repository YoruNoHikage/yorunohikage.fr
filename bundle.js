/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactRouter = __webpack_require__(2);
	
	var _reactRouter2 = _interopRequireDefault(_reactRouter);
	
	var _Navigation = __webpack_require__(3);
	
	var _Navigation2 = _interopRequireDefault(_Navigation);
	
	var _ContentHome = __webpack_require__(4);
	
	var _ContentHome2 = _interopRequireDefault(_ContentHome);
	
	var _ContentProjects = __webpack_require__(5);
	
	var _ContentProjects2 = _interopRequireDefault(_ContentProjects);
	
	var _ContentNotFound = __webpack_require__(6);
	
	var _ContentNotFound2 = _interopRequireDefault(_ContentNotFound);
	
	var _ContentMyStory = __webpack_require__(7);
	
	var _ContentMyStory2 = _interopRequireDefault(_ContentMyStory);
	
	var App = (function (_Component) {
	  _inherits(App, _Component);
	
	  function App() {
	    _classCallCheck(this, App);
	
	    _get(Object.getPrototypeOf(App.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(App, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'div',
	        { id: 'global' },
	        _react2['default'].createElement(
	          'div',
	          { id: 'sidebar' },
	          _react2['default'].createElement(
	            'header',
	            { itemScope: true, itemType: 'http://schema.org/Person' },
	            _react2['default'].createElement(
	              'h1',
	              null,
	              _react2['default'].createElement(
	                'span',
	                null,
	                _react2['default'].createElement(
	                  'span',
	                  { itemProp: 'name', rel: 'author' },
	                  'YoruNoHikage'
	                )
	              )
	            ),
	            _react2['default'].createElement(
	              'div',
	              { className: 'picture' },
	              _react2['default'].createElement('img', { itemProp: 'image', src: 'https://secure.gravatar.com/avatar/bf71cb74fc30a417be576c509d8853fc?s=150', alt: 'Avatar' })
	            ),
	            _react2['default'].createElement(
	              'p',
	              null,
	              'I\'m a french student who tries to become a developer in spite of his flying potato\'s addiction.'
	            )
	          ),
	          _react2['default'].createElement(
	            'nav',
	            { role: 'navigation', id: 'navigation' },
	            _react2['default'].createElement(_Navigation2['default'], null)
	          )
	        ),
	        _react2['default'].createElement(
	          'div',
	          { id: 'content' },
	          _react2['default'].createElement(_reactRouter.RouteHandler, null)
	        )
	      );
	    }
	  }]);
	
	  return App;
	})(_react.Component);
	
	var routes = _react2['default'].createElement(
	  _reactRouter.Route,
	  { handler: App, path: '/' },
	  _react2['default'].createElement(_reactRouter.DefaultRoute, { name: 'home', handler: _ContentHome2['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { name: 'projects', path: 'projects.html', handler: _ContentProjects2['default'] }),
	  _react2['default'].createElement(_reactRouter.Route, { name: 'my-story', path: 'my-story.html', handler: _ContentMyStory2['default'] }),
	  _react2['default'].createElement(_reactRouter.NotFoundRoute, { handler: _ContentNotFound2['default'] }),
	  _react2['default'].createElement(_reactRouter.Redirect, { from: 'index.html', to: 'home' })
	);
	
	_reactRouter2['default'].run(routes, _reactRouter2['default'].HistoryLocation, function (Handler) {
	  _react2['default'].render(_react2['default'].createElement(Handler, null), document.body);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = ReactRouter;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var Router = __webpack_require__(2),
	    Link = Router.Link;
	
	var Navigation = React.createClass({
	  displayName: 'Navigation',
	
	  contextTypes: {
	    router: React.PropTypes.func
	  },
	
	  render: function render() {
	    return React.createElement(
	      'ul',
	      null,
	      React.createElement(
	        'li',
	        null,
	        React.createElement(
	          Link,
	          { activeClassName: 'selected', to: 'home' },
	          React.createElement('img', { src: 'images/nav/home.png', alt: '' }),
	          ' Home'
	        )
	      ),
	      React.createElement(
	        'li',
	        null,
	        React.createElement(
	          Link,
	          { activeClassName: 'selected', to: 'projects' },
	          React.createElement('img', { src: 'images/nav/projects.png', alt: '' }),
	          ' Projects'
	        )
	      ),
	      React.createElement(
	        'li',
	        null,
	        React.createElement(
	          Link,
	          { activeClassName: 'selected', to: 'my-story' },
	          React.createElement('img', { src: 'images/nav/story.png', alt: '' }),
	          ' My Story'
	        )
	      ),
	      React.createElement(
	        'li',
	        null,
	        React.createElement(
	          'a',
	          { href: '//blog.yorunohikage.fr' },
	          React.createElement('img', { src: 'images/nav/blog.png', alt: '' }),
	          ' Blog'
	        )
	      )
	    );
	  }
	});
	
	module.exports = Navigation;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Home = (function (_Component) {
		_inherits(Home, _Component);
	
		function Home() {
			_classCallCheck(this, Home);
	
			_get(Object.getPrototypeOf(Home.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(Home, [{
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement(
						"p",
						null,
						"Welcome in my place, there's news about me downthere, look at them or just navigate through the menu."
					),
					_react2["default"].createElement(
						"h3",
						null,
						"Latest work"
					),
					_react2["default"].createElement(
						"div",
						{ className: "projects" },
						_react2["default"].createElement(
							"div",
							{ className: "picture" },
							_react2["default"].createElement(
								"a",
								{ href: "//brezeliad.yorunohikage.fr" },
								_react2["default"].createElement("img", { src: "images/projects/brezeliad-a-tale-of-broceliande-logo.png", alt: "Logo" }),
								_react2["default"].createElement(
									"span",
									null,
									"Brezeliad : A Tale of Brocéliande"
								)
							)
						),
						_react2["default"].createElement(
							"div",
							{ className: "picture" },
							_react2["default"].createElement(
								"a",
								{ href: "switchcode/projects/heart-of-jump" },
								_react2["default"].createElement("img", { src: "images/projects/heart-of-jump-logo.png", alt: "Logo" }),
								_react2["default"].createElement(
									"span",
									null,
									"Heart of Jump"
								)
							)
						),
						_react2["default"].createElement(
							"div",
							{ className: "picture" },
							_react2["default"].createElement(
								"a",
								{ href: "//jeuxamateurs.fr" },
								_react2["default"].createElement("img", { src: "images/projects/jeux-amateurs-logo.png", alt: "Logo" }),
								_react2["default"].createElement(
									"span",
									null,
									"JeuxAmateurs",
									_react2["default"].createElement(
										"sup",
										null,
										"FR"
									)
								)
							)
						),
						_react2["default"].createElement(
							"div",
							{ className: "picture" },
							_react2["default"].createElement(
								"a",
								{ href: "http://switchcode.github.io/games/8-bit-robot-music-party" },
								_react2["default"].createElement("img", { src: "images/projects/wip.png", alt: "Logo" }),
								_react2["default"].createElement(
									"span",
									null,
									"8-Bit Robot Music Party"
								)
							)
						),
						_react2["default"].createElement(
							"div",
							{ className: "picture" },
							_react2["default"].createElement(
								"a",
								{ href: "projects.html" },
								_react2["default"].createElement("img", { src: "images/projects/more-projects.png", alt: "Logo" }),
								_react2["default"].createElement(
									"span",
									null,
									"... more projects"
								)
							)
						)
					),
					_react2["default"].createElement(
						"h3",
						null,
						"Networks"
					),
					_react2["default"].createElement(
						"div",
						{ id: "networks" },
						_react2["default"].createElement(
							"a",
							{ href: "//plus.google.com/114157819846366472608?rel=author", title: "Follow me on Google Plus" },
							_react2["default"].createElement("img", { src: "images/gplus.png", alt: "Google Plus" })
						),
						_react2["default"].createElement(
							"a",
							{ href: "//twitter.com/YoruNoHikage", title: "Follow me on Twitter" },
							_react2["default"].createElement("img", { src: "images/twitter.png", alt: "Twitter" })
						),
						_react2["default"].createElement(
							"a",
							{ href: "//github.com/YoruNoHikage", title: "Follow me on GitHub" },
							_react2["default"].createElement("img", { src: "images/github.png", alt: "GitHub" })
						)
					)
				);
			}
		}]);
	
		return Home;
	})(_react.Component);
	
	exports["default"] = Home;
	module.exports = exports["default"];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var Projects = (function (_Component) {
		_inherits(Projects, _Component);
	
		function Projects() {
			_classCallCheck(this, Projects);
	
			_get(Object.getPrototypeOf(Projects.prototype), "constructor", this).apply(this, arguments);
		}
	
		_createClass(Projects, [{
			key: "render",
			value: function render() {
				return _react2["default"].createElement(
					"div",
					null,
					_react2["default"].createElement(
						"h3",
						null,
						"Games"
					),
					_react2["default"].createElement(
						"div",
						{ className: "projects" },
						_react2["default"].createElement(
							"div",
							{ className: "picture" },
							_react2["default"].createElement(
								"a",
								{ href: "//brezeliad.yorunohikage.fr" },
								_react2["default"].createElement("img", { src: "images/projects/brezeliad-a-tale-of-broceliande-logo.png", alt: "Logo" }),
								_react2["default"].createElement(
									"span",
									null,
									"Brezeliad : A Tale of Brocéliande"
								)
							)
						),
						_react2["default"].createElement(
							"div",
							{ className: "picture" },
							_react2["default"].createElement(
								"a",
								{ href: "switchcode/projects/heart-of-jump" },
								_react2["default"].createElement("img", { src: "images/projects/heart-of-jump-logo.png", alt: "Logo" }),
								_react2["default"].createElement(
									"span",
									null,
									"Heart of Jump"
								)
							)
						),
						_react2["default"].createElement(
							"div",
							{ className: "picture" },
							_react2["default"].createElement(
								"a",
								{ href: "http://switchcode.github.io/games/8-bit-robot-music-party" },
								_react2["default"].createElement("img", { src: "images/projects/wip.png", alt: "Logo" }),
								_react2["default"].createElement(
									"span",
									null,
									"8-Bit Robot Music Party"
								)
							)
						)
					),
					_react2["default"].createElement(
						"h3",
						null,
						"Websites"
					),
					_react2["default"].createElement(
						"div",
						{ className: "projects" },
						_react2["default"].createElement(
							"div",
							{ className: "picture" },
							_react2["default"].createElement(
								"a",
								{ href: "//jeuxamateurs.fr" },
								_react2["default"].createElement("img", { src: "images/projects/jeux-amateurs-logo.png", alt: "Logo" }),
								_react2["default"].createElement(
									"span",
									null,
									"JeuxAmateurs",
									_react2["default"].createElement(
										"sup",
										null,
										"FR"
									)
								)
							)
						),
						_react2["default"].createElement(
							"div",
							{ className: "picture" },
							_react2["default"].createElement(
								"a",
								{ href: "MinnaNoKotoba" },
								_react2["default"].createElement("img", { src: "images/projects/minnanokotoba-logo.png", alt: "Logo" }),
								_react2["default"].createElement(
									"span",
									null,
									"MinnaNoKotoba"
								)
							)
						)
					),
					_react2["default"].createElement(
						"h3",
						null,
						"Others"
					),
					_react2["default"].createElement(
						"div",
						{ className: "picture" },
						_react2["default"].createElement(
							"a",
							{ href: "//twitter.com/VolantePatate" },
							_react2["default"].createElement("img", { src: "images/projects/patate-volante-twitter-logo.png", alt: "Logo" }),
							_react2["default"].createElement(
								"span",
								null,
								"Patate Volante Twitter",
								_react2["default"].createElement(
									"sup",
									null,
									"FR"
								)
							)
						)
					)
				);
			}
		}]);
	
		return Projects;
	})(_react.Component);
	
	exports["default"] = Projects;
	module.exports = exports["default"];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var NotFound = (function (_Component) {
	  _inherits(NotFound, _Component);
	
	  function NotFound() {
	    _classCallCheck(this, NotFound);
	
	    _get(Object.getPrototypeOf(NotFound.prototype), 'constructor', this).apply(this, arguments);
	  }
	
	  _createClass(NotFound, [{
	    key: 'render',
	    value: function render() {
	      return _react2['default'].createElement(
	        'p',
	        null,
	        'Sorry, 404 not found.'
	      );
	    }
	  }]);
	
	  return NotFound;
	})(_react.Component);
	
	exports['default'] = NotFound;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var MyStory = (function (_Component) {
	  _inherits(MyStory, _Component);
	
	  function MyStory() {
	    _classCallCheck(this, MyStory);
	
	    _get(Object.getPrototypeOf(MyStory.prototype), "constructor", this).apply(this, arguments);
	  }
	
	  _createClass(MyStory, [{
	    key: "render",
	    value: function render() {
	      return _react2["default"].createElement(
	        "div",
	        null,
	        _react2["default"].createElement(
	          "section",
	          { className: "timeline" },
	          _react2["default"].createElement(
	            "article",
	            { className: "event-jam" },
	            _react2["default"].createElement(
	              "div",
	              null,
	              _react2["default"].createElement(
	                "h2",
	                null,
	                "Glass Camp Bank"
	              ),
	              _react2["default"].createElement(
	                "p",
	                null,
	                "Learned a lot about android development and Google Glass."
	              )
	            ),
	            _react2["default"].createElement(
	              "span",
	              null,
	              "May 2014"
	            )
	          ),
	          _react2["default"].createElement(
	            "article",
	            { className: "event-right event-exhibition" },
	            _react2["default"].createElement(
	              "div",
	              null,
	              _react2["default"].createElement(
	                "h2",
	                null,
	                "Stunfest"
	              ),
	              _react2["default"].createElement(
	                "p",
	                null,
	                "Exhibition about video games (fighting, retro gaming, indie games...). I presented ",
	                _react2["default"].createElement(
	                  "a",
	                  { href: "//brezeliad.yorunohikage.fr" },
	                  "Brezeliad : A Tale of Brocéliande."
	                )
	              )
	            ),
	            _react2["default"].createElement(
	              "span",
	              null,
	              "May 2014"
	            )
	          ),
	          _react2["default"].createElement(
	            "article",
	            { className: "event-jam" },
	            _react2["default"].createElement(
	              "div",
	              null,
	              _react2["default"].createElement(
	                "h2",
	                null,
	                "Global Game Jam 2014"
	              ),
	              _react2["default"].createElement(
	                "p",
	                null,
	                "I made SamsarA, with C++ and SFML2.1."
	              )
	            ),
	            _react2["default"].createElement(
	              "span",
	              null,
	              "January 2014"
	            )
	          ),
	          _react2["default"].createElement(
	            "article",
	            { className: "event-jam" },
	            _react2["default"].createElement(
	              "div",
	              null,
	              _react2["default"].createElement(
	                "h2",
	                null,
	                "Global Game Jam 2013"
	              ),
	              _react2["default"].createElement(
	                "p",
	                null,
	                "I made Heart of Jump, with C++ and SFML2.0RC."
	              )
	            ),
	            _react2["default"].createElement(
	              "span",
	              null,
	              "January 2013"
	            )
	          ),
	          _react2["default"].createElement(
	            "article",
	            { className: "event-right event-exhibition" },
	            _react2["default"].createElement(
	              "div",
	              null,
	              _react2["default"].createElement(
	                "h2",
	                null,
	                "Stunfest"
	              ),
	              _react2["default"].createElement(
	                "p",
	                null,
	                "I presented amateur games with the French website",
	                _react2["default"].createElement(
	                  "a",
	                  { href: "//old.jeuxamateurs.fr" },
	                  "JeuxAmateurs.fr",
	                  _react2["default"].createElement(
	                    "sup",
	                    null,
	                    "FR"
	                  )
	                ),
	                "."
	              )
	            ),
	            _react2["default"].createElement(
	              "span",
	              null,
	              "April 2012"
	            )
	          ),
	          _react2["default"].createElement(
	            "article",
	            { className: "event-right event-exhibition" },
	            _react2["default"].createElement(
	              "div",
	              null,
	              _react2["default"].createElement(
	                "h2",
	                null,
	                "Stunfest"
	              ),
	              _react2["default"].createElement(
	                "p",
	                null,
	                "I presented amateur games with the French website",
	                _react2["default"].createElement(
	                  "a",
	                  { href: "//old.jeuxamateurs.fr" },
	                  "JeuxAmateurs.fr",
	                  _react2["default"].createElement(
	                    "sup",
	                    null,
	                    "FR"
	                  )
	                ),
	                "."
	              )
	            ),
	            _react2["default"].createElement(
	              "span",
	              null,
	              "April-May 2011"
	            )
	          ),
	          _react2["default"].createElement(
	            "article",
	            { className: "event-switchcode" },
	            _react2["default"].createElement(
	              "div",
	              null,
	              _react2["default"].createElement(
	                "h2",
	                null,
	                "JeuxAmateurs.fr's Creation"
	              ),
	              _react2["default"].createElement(
	                "p",
	                null,
	                "Website about amateur video games."
	              )
	            ),
	            _react2["default"].createElement(
	              "span",
	              null,
	              "2009-2011"
	            )
	          )
	        ),
	        _react2["default"].createElement(
	          "p",
	          null,
	          "Inspired by ",
	          _react2["default"].createElement(
	            "a",
	            { href: "http://codepen.io/hashem/pen/xzKaB" },
	            "hashem's code"
	          ),
	          "."
	        )
	      );
	    }
	  }]);
	
	  return MyStory;
	})(_react.Component);
	
	exports["default"] = MyStory;
	module.exports = exports["default"];

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map