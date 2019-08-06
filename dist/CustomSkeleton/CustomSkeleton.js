"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

require("./CustomSkeleton.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var CustomSkeleton = function CustomSkeleton(_ref) {
  var children = _ref.children,
      loading = _ref.loading,
      icon = _ref.icon;

  var Child = function Child(_) {
    return children;
  };

  var Icon = function Icon(_) {
    return icon;
  };

  if (loading) {
    Child = function Child(_) {
      return _react["default"].createElement("div", {
        className: "CustomSkeleton"
      }, _react["default"].createElement("input", {
        className: "CustomSkeleton_input",
        readonly: true,
        disabled: true,
        placeholder: "".concat(i18n('loading'), "...")
      }), _react["default"].createElement(Icon, {
        className: "CustomSkeleton_icon"
      }));
    };
  }

  return _react["default"].createElement(Child, null);
};

var _default = CustomSkeleton;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9DdXN0b21Ta2VsZXRvbi9DdXN0b21Ta2VsZXRvbi5qcyJdLCJuYW1lcyI6WyJDdXN0b21Ta2VsZXRvbiIsImNoaWxkcmVuIiwibG9hZGluZyIsImljb24iLCJDaGlsZCIsIl8iLCJJY29uIiwiaTE4biJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNBOzs7O0FBRUEsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixPQUErQjtBQUFBLE1BQTdCQyxRQUE2QixRQUE3QkEsUUFBNkI7QUFBQSxNQUFuQkMsT0FBbUIsUUFBbkJBLE9BQW1CO0FBQUEsTUFBVkMsSUFBVSxRQUFWQSxJQUFVOztBQUVwRCxNQUFJQyxLQUFLLEdBQUcsZUFBQUMsQ0FBQztBQUFBLFdBQUlKLFFBQUo7QUFBQSxHQUFiOztBQUNBLE1BQUlLLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUFELENBQUM7QUFBQSxXQUFJRixJQUFKO0FBQUEsR0FBWjs7QUFFRCxNQUFHRCxPQUFILEVBQVk7QUFDWEUsSUFBQUEsS0FBSyxHQUFHLGVBQUFDLENBQUM7QUFBQSxhQUNSO0FBQUssUUFBQSxTQUFTLEVBQUM7QUFBZixTQUNDO0FBQU8sUUFBQSxTQUFTLEVBQUMsc0JBQWpCO0FBQXdDLFFBQUEsUUFBUSxNQUFoRDtBQUFpRCxRQUFBLFFBQVEsTUFBekQ7QUFBMEQsUUFBQSxXQUFXLFlBQUtFLElBQUksQ0FBQyxTQUFELENBQVQ7QUFBckUsUUFERCxFQUVLLGdDQUFDLElBQUQ7QUFBTSxRQUFBLFNBQVMsRUFBQztBQUFoQixRQUZMLENBRFE7QUFBQSxLQUFUO0FBTUE7O0FBQ0QsU0FDQyxnQ0FBQyxLQUFELE9BREQ7QUFJQSxDQWpCRDs7ZUFtQmVQLGMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuL0N1c3RvbVNrZWxldG9uLmNzcyc7XG5cbmNvbnN0IEN1c3RvbVNrZWxldG9uID0gKHtjaGlsZHJlbiwgbG9hZGluZywgaWNvbn0pID0+IHtcblxuICBsZXQgQ2hpbGQgPSBfID0+IGNoaWxkcmVuO1xuICBsZXQgSWNvbiA9IF8gPT4gaWNvbjtcblxuXHRpZihsb2FkaW5nKSB7XG5cdFx0Q2hpbGQgPSBfID0+IChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiQ3VzdG9tU2tlbGV0b25cIj5cblx0XHRcdFx0PGlucHV0IGNsYXNzTmFtZT1cIkN1c3RvbVNrZWxldG9uX2lucHV0XCIgcmVhZG9ubHkgZGlzYWJsZWQgcGxhY2Vob2xkZXI9e2Ake2kxOG4oJ2xvYWRpbmcnKX0uLi5gfSAvPlxuICAgICAgICA8SWNvbiBjbGFzc05hbWU9XCJDdXN0b21Ta2VsZXRvbl9pY29uXCIgLz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxuXHRyZXR1cm4gKFxuXHRcdDxDaGlsZCAvPlxuXHQpO1xuXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDdXN0b21Ta2VsZXRvbjsiXX0=