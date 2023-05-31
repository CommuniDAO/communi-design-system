function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
import React from 'react';
import { Button, Input } from "../../index";
import { useForm } from "../context";
import clsx from 'clsx';
export var StepperForm = function StepperForm(_ref) {
  var fields = _ref.fields,
    _ref$debug = _ref.debug,
    debug = _ref$debug === void 0 ? false : _ref$debug,
    button = _ref.button;
  var maxStep = fields.length - 1;
  var _React$useState = React.useState(0),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    step = _React$useState2[0],
    setStep = _React$useState2[1];
  var _useForm = useForm(),
    fieldsState = _useForm.fieldsState,
    updateForm = _useForm.updateForm,
    formState = _useForm.formState;
  var _React$useState3 = React.useState(null),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    validation = _React$useState4[0],
    setValidation = _React$useState4[1];
  var _React$useState5 = React.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    allowance = _React$useState6[0],
    setAllowance = _React$useState6[1];
  var nextStep = function nextStep(_ref2) {
    var key = _ref2.key;
    if (step <= maxStep) {
      setStep(step + 1);
      setAllowance(false);
    }
  };

  // This effect checks for Input validations updates on every onChange
  React.useEffect(function () {
    if (fieldsState.length > 0 && step !== fieldsState.length) {
      _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var validationState, result;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              // Validating all fields in the current step
              validationState = fieldsState[step].map( /*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(field, key) {
                  var _field$validation;
                  var _formState$find, value;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        if (!(((_field$validation = field.validation) === null || _field$validation === void 0 ? void 0 : _field$validation.fn) === undefined)) {
                          _context.next = 2;
                          break;
                        }
                        return _context.abrupt("return", true);
                      case 2:
                        if (!(formState === null)) {
                          _context.next = 4;
                          break;
                        }
                        return _context.abrupt("return", false);
                      case 4:
                        // Get the value of the field from the formState
                        _formState$find = formState.find(function (_ref5) {
                          var id = _ref5.id;
                          return id === field.id;
                        }), value = _formState$find.value;
                        console.log('value', value);
                        // Run the validation function
                        _context.next = 8;
                        return field.validation.fn(value);
                      case 8:
                        return _context.abrupt("return", _context.sent);
                      case 9:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function (_x2, _x3) {
                  return _ref4.apply(this, arguments);
                };
              }()); // Wait for all validations to finish
              _context2.next = 3;
              return Promise.all(validationState);
            case 3:
              result = _context2.sent;
              console.log('RESULT', result);
              // Allow to continue to next step if all validations are true
              setAllowance(result.every(function (e) {
                return e === true || e.valid === true;
              }));
            case 6:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }))();
    }
    // validate every time the formState changes
  }, [formState, allowance]);
  var goBack = function goBack() {
    if (step >= 1) {
      setStep(step + -1);
      setAllowance(true);
    }
  };
  var barContainer = clsx("grid gap-[4px] grid-cols-".concat(maxStep + 2));
  return /*#__PURE__*/React.createElement(React.Fragment, null, step === fieldsState.length ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "text-subheading-bold text-neutral-800 mb-[20px]"
  }, "Review details"), /*#__PURE__*/React.createElement("div", {
    className: "space-y-[8px]"
  }, fieldsState.map(function (fields, key) {
    return /*#__PURE__*/React.createElement("div", {
      key: key
    }, fields.map(function (_ref6, key) {
      var id = _ref6.id,
        label = _ref6.label;
      // console.log('id', label)
      var _formState$find2 = formState.find(function (_ref7) {
          var formId = _ref7.id;
          return formId === id;
        }),
        value = _formState$find2.value;
      return /*#__PURE__*/React.createElement("div", {
        key: key
      }, /*#__PURE__*/React.createElement("div", {
        className: "text-neutral-800"
      }, label, ": ", value));
    }));
  }), formState.map(function (_ref8, key) {
    var id = _ref8.id,
      value = _ref8.value;
    return /*#__PURE__*/React.createElement("input", {
      key: key,
      hidden: true,
      id: id,
      name: id,
      defaultValue: value
    });
  })), /*#__PURE__*/React.createElement("div", {
    className: "pt-6 flex flex-col space-y-[20px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row justify-start space-x-[8px]"
  }, /*#__PURE__*/React.createElement(Button, {
    text: button.text,
    type: "submit",
    rounded: "medium",
    variant: button.variant,
    customCss: button.customCss
  }), /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return goBack();
    },
    text: "back",
    variant: "basic"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col space-y-[8px]"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-green-400 text-p2-bold"
  }, step), /*#__PURE__*/React.createElement("span", {
    className: "text-green-200 text-p2-medium pl-[2px]"
  }, "/", maxStep + 1)), /*#__PURE__*/React.createElement("div", {
    className: barContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-green-400 rounded-[2px] h-[4px] col-span-".concat(step + 1)
  }))))) : /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col justify-between h-[420px]"
  }, fieldsState.map(function (fields, key) {
    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
      className: step !== key ? 'hidden' : 'flex flex-col space-y-[12px]'
    }, fields.map(function (_ref9) {
      var type = _ref9.type,
        id = _ref9.id,
        label = _ref9.label,
        placeholder = _ref9.placeholder,
        autoComplete = _ref9.autoComplete,
        required = _ref9.required,
        icon = _ref9.icon,
        uploadFile = _ref9.uploadFile,
        options = _ref9.options,
        _ref9$hidden = _ref9.hidden,
        hidden = _ref9$hidden === void 0 ? false : _ref9$hidden,
        afterChange = _ref9.afterChange,
        validation = _ref9.validation,
        maxLength = _ref9.maxLength,
        variant = _ref9.variant,
        populateOptions = _ref9.populateOptions,
        belongs_to = _ref9.belongs_to,
        _ref9$disabled = _ref9.disabled,
        disabled = _ref9$disabled === void 0 ? false : _ref9$disabled,
        defaultValue = _ref9.defaultValue,
        title = _ref9.title,
        description = _ref9.description,
        multiple = _ref9.multiple;
      return /*#__PURE__*/React.createElement(React.Fragment, null, title && /*#__PURE__*/React.createElement("div", {
        className: "text-subheading-bold text-neutral-800"
      }, title), description && /*#__PURE__*/React.createElement("div", {
        className: "text-p3-medium text-neutral-400"
      }, description), /*#__PURE__*/React.createElement(Input, {
        key: key,
        type: type,
        id: id,
        disabled: disabled,
        label: label,
        options: options,
        afterChange: type === 'select' || type === 'radiobox' ? afterChange : setValidation,
        maxLength: maxLength,
        variant: variant,
        uploadFile: uploadFile,
        icon: icon,
        validation: validation,
        belongs_to: belongs_to,
        populateOptions: populateOptions,
        hidden: step !== key ? true : hidden,
        debug: debug,
        defaultValue: !!defaultValue ? defaultValue : '',
        autoComplete: autoComplete,
        placeholder: placeholder,
        required: required,
        multiple: multiple
      }));
    })));
  }), /*#__PURE__*/React.createElement("div", {
    className: "pt-6 flex flex-col space-y-[20px]"
  }, /*#__PURE__*/React.createElement("div", {
    className: "flex flex-row justify-start space-x-[8px]"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return nextStep({
        data: fields
      });
    },
    text: "next",
    variant: "primary",
    disabled: !Boolean(allowance)
  }), step >= 1 && /*#__PURE__*/React.createElement(Button, {
    onClick: function onClick() {
      return goBack();
    },
    text: "back",
    variant: "basic"
  })), /*#__PURE__*/React.createElement("div", {
    className: "flex flex-col space-y-[8px]"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "text-neutral-800 text-p2-bold"
  }, step + 1), /*#__PURE__*/React.createElement("span", {
    className: "text-neutral-400 text-p2-medium pl-[2px]"
  }, "/", maxStep + 1)), /*#__PURE__*/React.createElement("div", {
    className: barContainer
  }, /*#__PURE__*/React.createElement("div", {
    className: "bg-primary-400 rounded-[2px] h-[4px] col-span-".concat(step + 1)
  }), /*#__PURE__*/React.createElement("div", {
    className: "bg-neutral-400 rounded-[2px] h-[4px] col-span-".concat(maxStep - step + 1)
  }))))));
};