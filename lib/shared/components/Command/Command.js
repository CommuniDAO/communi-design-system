import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import clsx from 'clsx';
// import { SearchIcon } from '@heroicons/react/solid'
import { Combobox, Dialog, Transition } from '@headlessui/react';
export const Command = ({ imageUrl, size = 'medium', customCss, initialState, closeCommand }) => {
    const people = [
        { id: 1, name: 'Leslie Alexander', url: '#' },
    ];
    const [selectedPerson, setSelectedPerson] = React.useState(people[0]);
    const [query, setQuery] = React.useState('');
    const filteredPeople = query === '' ? [] : people.filter((person) => person.name.toLowerCase().includes(query.toLowerCase()));
    return (_jsx(Transition.Root, { show: initialState, as: React.Fragment, afterLeave: () => setQuery(''), appear: true, children: _jsxs(Dialog, { as: "div", className: "relative z-10", onClose: closeCommand, children: [_jsx(Transition.Child, { as: React.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0", enterTo: "opacity-100", leave: "ease-in duration-200", leaveFrom: "opacity-100", leaveTo: "opacity-0", children: _jsx("div", { className: "fixed inset-0 bg-gray-500 bg-opacity-90 transition-opacity" }) }), _jsx("div", { className: "fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20", children: _jsx(Transition.Child, { as: React.Fragment, enter: "ease-out duration-300", enterFrom: "opacity-0 scale-95", enterTo: "opacity-100 scale-100", leave: "ease-in duration-200", leaveFrom: "opacity-100 scale-100", leaveTo: "opacity-0 scale-95", children: _jsx(Dialog.Panel, { className: "mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all", children: _jsxs(Combobox, { value: selectedPerson, onChange: (person) => (window.location = person.url), children: [_jsx("div", { className: "relative", children: _jsx(Combobox.Input, { className: "h-12 w-full border-0 bg-transparent pl-11 pr-4 text-gray-800 placeholder-gray-400 focus:ring-0 sm:text-sm", placeholder: "Search...", onChange: (event) => setQuery(event.target.value) }) }), filteredPeople.length > 0 && (_jsx(Combobox.Options, { static: true, className: "max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-gray-800", children: filteredPeople.map((person) => (_jsx(Combobox.Option, { value: person, className: ({ active }) => clsx('cursor-default select-none px-4 py-2', active && 'bg-indigo-600 text-white'), children: person.name }, person.id))) })), query !== '' && filteredPeople.length === 0 && (_jsx("p", { className: "p-4 text-sm text-gray-500", children: "No people found." }))] }) }) }) })] }) }));
};
