"use strict";
// import { Form } from '~/src/atoms/components/Form';
// import { withDesign } from 'storybook-addon-designs';
// import { Meta } from '@storybook/react';
// import '~/styles/index.css';
// import * as React from 'react';
// import { id } from 'date-fns/locale';
// const loadPayload = () => console.log('Loading Payload');
// // const validateEmail: any = (mail: string) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail) ? true : false
// // const callback: any = (e: any) => [{ name: 'Option A', id: 1 },{ name: 'Option B', id: 2 }]
// export default {
//   component: Form,
//   title: 'Data Handle / Form',
//   args: {
//     debug: true,
//     button: {
//       text: 'Submit',
//       variant: 'primary',
//       loading: false,
//     }
//   },
//   decorators: [withDesign]
// };
// export const EventForm = (args: any) => {
//   const { button, debug } = args;
//   const getChild: any = (e: any) => {
//     if (e.value === 1) {
//       return [{ name: 'Option A', id: 1 },{ name: 'Option B', id: 2 }]
//     } else if (e.value === 2) {
//       return [{ name: 'Option C', id: 3 },{ name: 'Option D', id: 4 }]
//     }
//   }
//   const updateGrandchild: any = (e: any) => {
//     if (e.value === 1) {
//       return [{ name: 'Option A 1', id: 5 },{ name: 'Option A 2', id: 6 }]
//     } else if (e.value === 2) {
//       return [{ name: 'Option B 1', id: 7 },{ name: 'Option B 2', id: 8 }]
//     } else if (e.value === 3) {
//       return [{ name: 'Option C 1', id: 9 },{ name: 'Option C 2', id: 10 }]
//     } else if (e.value === 4) {
//       return [{ name: 'Option D 1', id: 11 },{ name: 'Option D 2', id: 12 }]
//     }
//   }
//   const fields = [
//     { 
//       field: {
//         type: 'email',
//         id: 'email',
//         label: 'Email',
//         placeholder: 'example@email.com'
//       }
//     },
//     { 
//       field: {
//         type: 'password',
//         id: 'password',
//         label: 'Password',
//         placeholder: 'Set you password'
//       }
//     },
//     {
//       field: {
//         type: 'select',
//         id: 'parent',
//         label: 'Parent',
//         placeholder: 'select',
//         options: [
//           { name: 'Option 1', id: 1 },
//           { name: 'Option 2', id: 2 }
//         ],
//       },
//     },
//     {
//       field: {
//         type: 'select',
//         id: 'child',
//         label: 'Child',
//         placeholder: 'select',
//         belongs_to: 'parent',
//         populateOptions: getChild
//       },
//     },
//     {
//       field: {
//         type: 'select',
//         id: 'child2',
//         label: 'Child 2',
//         placeholder: 'select',
//         belongs_to: 'child',
//         populateOptions: updateGrandchild
//       },
//     }
//   ]
//   return <Form
//     type='dynamic'
//     button={button}
//     debug={debug}
//     fields={fields}
//   />
// };
// EventForm.parameters = {
//   design: {
//     type: 'figma',
//     url: 'https://www.figma.com/file/vkIFRuwbONhF3qrGI7bHvL/App?node-id=2%3A129'
//   }
// };
