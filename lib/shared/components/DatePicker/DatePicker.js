import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { DateWrapper } from './components';
// import { Moon } from "lunarphase-js";
import { DateTime } from 'luxon';
export const DatePicker = ({ value, defaultValue, handleChange, close, }) => {
    const [selected, setSelected] = React.useState({
        selectedDate: !!value ? (typeof value === 'string' ? new Date(value) : value) : new Date(),
        date: value,
        firstDayOfWeek: 0,
        showOutsideDays: false
    });
    const handleOnDateSelected = (dateObj) => {
        const { date, selectable } = dateObj;
        if (!selectable) {
            return;
        }
        else {
            setSelected({
                ...selected,
                selectedDate: date,
                date: date
            });
            const dt = DateTime.fromJSDate(date).startOf('day');
            handleChange({ name: `${dt.weekdayShort} ${dt.day} ${dt.monthLong}`, value: +new Date(date) / 1000 });
        }
    };
    return (_jsx(_Fragment, { children: _jsx(DateWrapper, { selected: selected.selectedDate, onDateSelected: handleOnDateSelected }) }));
};
