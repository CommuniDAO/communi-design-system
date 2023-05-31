import React from 'react';
import clsx from 'clsx';
import { RadioGroup } from '@headlessui/react';
export var RadioboxBasic = function RadioboxBasic(_ref) {
  var options = _ref.options,
    selected = _ref.selected,
    handleUpdate = _ref.handleUpdate;
  return /*#__PURE__*/React.createElement(RadioGroup, {
    value: selected,
    onChange: handleUpdate
  }, /*#__PURE__*/React.createElement("div", {
    className: "space-y-4"
  }, options.map(function (item) {
    return /*#__PURE__*/React.createElement(RadioGroup.Option, {
      key: item.name,
      value: item,
      className: function className(_ref2) {
        var checked = _ref2.checked;
        return clsx('relative flex cursor-pointer focus:outline-none');
      }
    }, function (_ref3) {
      var active = _ref3.active,
        checked = _ref3.checked;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("span", {
        className: clsx(checked ? 'bg-primary-400' : 'border-gray-300', active ? 'ring-2 ring-offset-2 ring-primary-500' : '', 'h-4 w-4 mt-0.5 cursor-pointer shrink-0 rounded-full border flex items-center justify-center'),
        "aria-hidden": "true"
      }, /*#__PURE__*/React.createElement("span", {
        className: "rounded-full w-1.5 h-1.5"
      })), /*#__PURE__*/React.createElement("span", {
        className: "ml-3 flex flex-col"
      }, /*#__PURE__*/React.createElement(RadioGroup.Label, {
        as: "span",
        className: clsx(checked ? 'text-primary-900' : 'text-neutral-900', 'ml-3 block text-sm font-medium text-neutral-700')
      }, item.name)));
    });
  })));
};

// <RadioGroup value={selected} onChange={handleUpdate}>
//       <div className="space-y-4">
//         {options.map((item: any) => (
//             <div key={item.id} className="flex items-center">
//               <input
//                 name='radioGroup'
//                 type="radio"
//                 checked={selected?.id === item.id}
//                 onChange={() => handleUpdate(item)}
//                 className="focus:ring-primary-400 h-4 w-4 text-primary-300 border-neutral-300"
//               />
//               <label htmlFor={item.id} className="ml-3 block text-sm font-medium text-neutral-700">
//                 {item.name}
//               </label>
//             </div>
//           ))}
//         </div>
//       </RadioGroup>