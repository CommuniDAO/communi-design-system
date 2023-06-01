import { jsx as _jsx } from "react/jsx-runtime";
import { useDayzed } from 'dayzed';
import { Calendar } from '.';
export const DateWrapper = ({ selected, onDateSelected }) => {
    const dayzedData = useDayzed({ selected, onDateSelected });
    return _jsx(Calendar, { ...dayzedData, onDateSelected: onDateSelected });
};
