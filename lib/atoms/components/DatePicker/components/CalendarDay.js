import { jsx as _jsx } from "react/jsx-runtime";
export const CalendarDay = ({ selectable, date, dateObj, onDateSelected, color, background, getDateProps }) => {
    return (_jsx("div", { className: "cursor-pointer flex w-full justify-center", children: _jsx("div", { children: _jsx("button", { type: "button", className: `w-10 h-10 flex items-center justify-center font-medium text-${color} ${background} rounded-full`, ...getDateProps({ dateObj }), onClick: () => onDateSelected(dateObj), children: selectable ? date.getDate() : 'X' }) }) }));
};
