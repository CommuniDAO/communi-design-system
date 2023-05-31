function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import * as React from 'react';
import clsx from 'clsx';
// import { SearchIcon } from '@heroicons/react/solid'
import { Combobox, Dialog, Transition } from '@headlessui/react';
export var Command = function Command(_ref) {
  var imageUrl = _ref.imageUrl,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    customCss = _ref.customCss,
    initialState = _ref.initialState,
    closeCommand = _ref.closeCommand;
  var people = [{
    id: 1,
    name: 'Leslie Alexander',
    url: '#'
  }];
  var _React$useState = React.useState(people[0]),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    selectedPerson = _React$useState2[0],
    setSelectedPerson = _React$useState2[1];
  var _React$useState3 = React.useState(''),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    query = _React$useState4[0],
    setQuery = _React$useState4[1];
  var filteredPeople = query === '' ? [] : people.filter(function (person) {
    return person.name.toLowerCase().includes(query.toLowerCase());
  });
  return /*#__PURE__*/React.createElement(Transition.Root, {
    show: initialState,
    as: React.Fragment,
    afterLeave: function afterLeave() {
      return setQuery('');
    },
    appear: true
  }, /*#__PURE__*/React.createElement(Dialog, {
    as: "div",
    className: "relative z-10",
    onClose: closeCommand
  }, /*#__PURE__*/React.createElement(Transition.Child, {
    as: React.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0",
    enterTo: "opacity-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0"
  }, /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 bg-gray-500 bg-opacity-90 transition-opacity"
  })), /*#__PURE__*/React.createElement("div", {
    className: "fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20"
  }, /*#__PURE__*/React.createElement(Transition.Child, {
    as: React.Fragment,
    enter: "ease-out duration-300",
    enterFrom: "opacity-0 scale-95",
    enterTo: "opacity-100 scale-100",
    leave: "ease-in duration-200",
    leaveFrom: "opacity-100 scale-100",
    leaveTo: "opacity-0 scale-95"
  }, /*#__PURE__*/React.createElement(Dialog.Panel, {
    className: "mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all"
  }, /*#__PURE__*/React.createElement(Combobox, {
    value: selectedPerson,
    onChange: function onChange(person) {
      return window.location = person.url;
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React.createElement(Combobox.Input, {
    className: "h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm",
    placeholder: "Search...",
    onChange: function onChange(event) {
      return setQuery(event.target.value);
    }
  })), filteredPeople.length > 0 && /*#__PURE__*/React.createElement(Combobox.Options, {
    "static": true,
    className: "max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800"
  }, filteredPeople.map(function (person) {
    return /*#__PURE__*/React.createElement(Combobox.Option, {
      key: person.id,
      value: person,
      className: function className(_ref2) {
        var active = _ref2.active;
        return clsx('cursor-default select-none px-4 py-2', active && 'bg-indigo-600 text-white');
      }
    }, person.name);
  })), query !== '' && filteredPeople.length === 0 && /*#__PURE__*/React.createElement("p", {
    className: "p-4 text-sm text-gray-500"
  }, "No people found.")))))));
};