/* This example requires Tailwind CSS v2.0+ */
import React from 'react';
var steps = [{
  name: 'Step 1',
  href: '#',
  status: 'complete'
}, {
  name: 'Step 2',
  href: '#',
  status: 'current'
}, {
  name: 'Step 3',
  href: '#',
  status: 'upcoming'
}, {
  name: 'Step 4',
  href: '#',
  status: 'upcoming'
}];
export var Steps = function Steps() {
  return /*#__PURE__*/React.createElement("nav", {
    className: "flex items-center justify-center",
    "aria-label": "Progress"
  }, /*#__PURE__*/React.createElement("p", {
    className: "text-sm font-medium"
  }, "Step ", steps.findIndex(function (step) {
    return step.status === 'current';
  }) + 1, " of", ' ', steps.length), /*#__PURE__*/React.createElement("ol", {
    className: "ml-8 flex items-center space-x-5"
  }, steps.map(function (step) {
    return /*#__PURE__*/React.createElement("li", {
      key: step.name
    }, step.status === 'complete' ? /*#__PURE__*/React.createElement("a", {
      href: step.href,
      className: "block w-2.5 h-2.5 bg-indigo-600 rounded-full hover:bg-indigo-900"
    }) : step.status === 'current' ? /*#__PURE__*/React.createElement("a", {
      href: step.href,
      className: "relative flex items-center justify-center",
      "aria-current": "step"
    }, /*#__PURE__*/React.createElement("span", {
      className: "absolute w-5 h-5 p-px flex",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("span", {
      className: "w-full h-full rounded-full bg-indigo-200"
    })), /*#__PURE__*/React.createElement("span", {
      className: "relative block w-2.5 h-2.5 bg-indigo-600 rounded-full",
      "aria-hidden": "true"
    })) : /*#__PURE__*/React.createElement("a", {
      href: step.href,
      className: "block w-2.5 h-2.5 bg-gray-200 rounded-full hover:bg-gray-400"
    }));
  })));
};