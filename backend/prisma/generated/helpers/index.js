'use strict';
var __spreadArray =
  (this && this.__spreadArray) ||
  function (to, from, pack) {
    if (pack || arguments.length === 2)
      for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
        }
      }
    return to.concat(ar || Array.prototype.slice.call(from));
  };
exports.__esModule = true;
exports.getEnumValues = void 0;
function getEnumValues(enumType) {
  return __spreadArray(
    [],
    new Set(
      Object.entries(enumType)
        .filter(function (_a) {
          var key = _a[0];
          return !~~key;
        })
        .flatMap(function (item) {
          return item;
        }),
    ),
    true,
  );
}
exports.getEnumValues = getEnumValues;
