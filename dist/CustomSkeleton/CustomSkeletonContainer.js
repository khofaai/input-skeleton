"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _CustomSkeleton = _interopRequireDefault(require("./CustomSkeleton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CustomSkeletonContainer = function CustomSkeletonContainer(superProps) {
  var props = _objectSpread({
    loading: false,
    icon: ''
  }, superProps);

  return _react["default"].createElement(_CustomSkeleton["default"], props);
};

var _default = CustomSkeletonContainer;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DdXN0b21Ta2VsZXRvbi9DdXN0b21Ta2VsZXRvbkNvbnRhaW5lci5qcyJdLCJuYW1lcyI6WyJDdXN0b21Ta2VsZXRvbkNvbnRhaW5lciIsInN1cGVyUHJvcHMiLCJwcm9wcyIsImxvYWRpbmciLCJpY29uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLENBQUNDLFVBQUQsRUFBZ0I7QUFFOUMsTUFBSUMsS0FBSztBQUNQQyxJQUFBQSxPQUFPLEVBQUUsS0FERjtBQUVQQyxJQUFBQSxJQUFJLEVBQUU7QUFGQyxLQUdKSCxVQUhJLENBQVQ7O0FBTUEsU0FDRSxnQ0FBQywwQkFBRCxFQUFvQkMsS0FBcEIsQ0FERjtBQUdELENBWEQ7O2VBYWVGLHVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBDdXN0b21Ta2VsZXRvbiBmcm9tICcuL0N1c3RvbVNrZWxldG9uJztcblxuY29uc3QgQ3VzdG9tU2tlbGV0b25Db250YWluZXIgPSAoc3VwZXJQcm9wcykgPT4geyBcbiAgXG4gIGxldCBwcm9wcyA9IHtcbiAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICBpY29uOiAnJyxcbiAgICAuLi5zdXBlclByb3BzXG4gIH07XG4gIFxuICByZXR1cm4gKFxuICAgIDxDdXN0b21Ta2VsZXRvbiB7Li4ucHJvcHN9IC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21Ta2VsZXRvbkNvbnRhaW5lcjsiXX0=