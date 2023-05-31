export var isEqual = function isEqual(first, second) {
  if (first === second) {
    return true;
  }
  if ((first === undefined || second === undefined || first === null || second === null) && (first || second)) {
    return false;
  }
  var firstType = first === null || first === void 0 ? void 0 : first.constructor.name;
  var secondType = second === null || second === void 0 ? void 0 : second.constructor.name;
  if (firstType !== secondType) {
    return false;
  }
  if (firstType === 'Array') {
    if (first.length !== second.length) {
      return false;
    }
    var equal = true;
    for (var i = 0; i < first.length; i++) {
      if (!isEqual(first[i], second[i])) {
        equal = false;
        break;
      }
    }
    return equal;
  }
  if (firstType === 'Object') {
    var _equal = true;
    var fKeys = Object.keys(first);
    var sKeys = Object.keys(second);
    if (fKeys.length !== sKeys.length) {
      return false;
    }
    for (var _i = 0; _i < fKeys.length; _i++) {
      if (first[fKeys[_i]] && second[fKeys[_i]]) {
        if (first[fKeys[_i]] === second[fKeys[_i]]) {
          continue; // eslint-disable-line
        }

        if (first[fKeys[_i]] && (first[fKeys[_i]].constructor.name === 'Array' || first[fKeys[_i]].constructor.name === 'Object')) {
          _equal = isEqual(first[fKeys[_i]], second[fKeys[_i]]);
          if (!_equal) {
            break;
          }
        } else if (first[fKeys[_i]] !== second[fKeys[_i]]) {
          _equal = false;
          break;
        }
      } else if (first[fKeys[_i]] && !second[fKeys[_i]] || !first[fKeys[_i]] && second[fKeys[_i]]) {
        _equal = false;
        break;
      }
    }
    return _equal;
  }
  return first === second;
};