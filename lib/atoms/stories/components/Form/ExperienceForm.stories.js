import { jsx as _jsx } from "react/jsx-runtime";
import { Form } from '~/src/components/Form';
import { withDesign } from 'storybook-addon-designs';
import '~/styles/index.css';
import { languages_list } from '~/src/helpers/constants';
// import { id } from 'date-fns/locale';
// const loadPayload = () => console.log('Loading Payload');
// const validateEmail: any = (mail: string) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail) ? true : false
// const callback: any = (e: any) => [{ name: 'Option A', id: 1 },{ name: 'Option B', id: 2 }]
const langOptions = languages_list.map(({ name, code: value }) => {
    return { name, value };
});
const areaOptions = [
    { name: 'Consultant', value: 'consultant' }
];
const catOptions = [
    { name: 'Consultant', value: 'consultant' }
];
export default {
    component: Form,
    title: 'Use Cases / Forms',
    argTypes: {
        type: {
            options: ['stepperV2', 'stepper', 'fetcher', 'remix', 'dynamic', 'default'],
            control: { type: 'radio' },
        },
    },
    args: {
        type: 'stepperV2',
        debug: true,
        button: {
            text: 'Submit',
            variant: 'primary'
        }
    },
    decorators: [withDesign]
};
export const ExperienceForm = (args) => {
    const { button, debug } = args;
    const getChild = async (e) => {
        const req = await (await fetch(`https://horizon-testnet.stellar.org/accounts/${e.field.name}`)).json();
        return req.balances.map(({ asset_code, asset_type, asset_issuer }) => {
            if (asset_type === 'native') {
                return { name: 'XLM', value: 'XLM,native' };
            }
            else if (!!asset_code) {
                return { name: asset_code, value: `${asset_code},${asset_issuer}` };
            }
        }).reverse();
    };
    const updateGrandchild = (e) => {
        if (e.value === 1) {
            return [{ name: 'Option A 1', value: 5 }, { name: 'Option A 2', value: '6' }];
        }
        else if (e.value === 2) {
            return [{ name: 'Option B 1', value: 7 }, { name: 'Option B 2', value: '8' }];
        }
        else if (e.value === 3) {
            return [{ name: 'Option C 1', value: 9 }, { name: 'Option C 2', value: 10 }];
        }
        else if (e.value === 4) {
            return [{ name: 'Option D 1', value: 11 }, { name: 'Option D 2', value: 12 }];
        }
    };
    const fields = [
        {
            field: {
                type: 'text',
                id: 'id',
                hidden: true,
                defaultValue: '1974'
            }
        },
        [{
                field: {
                    type: 'number',
                    id: 'price',
                    label: 'Price',
                    placeholder: 'Price'
                },
                title: 'Choose a Price',
                description: 'Price x Quantity = Total',
            },
            {
                field: {
                    type: 'number',
                    id: 'quantity',
                    label: 'Quantity',
                    placeholder: 'Quantity'
                },
            }
        ],
        {
            field: {
                type: 'select',
                id: 'wallets_id',
                placeholder: 'select',
                options: [
                    { name: 'GAKQMW5DOXE2IJSWL7UQYNI2NWCSRJI3M7XSZNGGIONXDBHGVWNGT4BT', description: 'A Wallet', value: 'GAKQMW5DOXE2IJSWL7UQYNI2NWCSRJI3M7XSZNGGIONXDBHGVWNGT4BT' },
                    { name: 'GDJDTTHILGLXIGVTYEKPPRNNYD2B2CRXSWQKAYTFH5L5DGMWHAV6MGRA', description: 'A Wallet', value: 'GDJDTTHILGLXIGVTYEKPPRNNYD2B2CRXSWQKAYTFH5L5DGMWHAV6MGRA' }
                ],
            },
            title: 'Choose an account',
            description: 'Associate an account to your experience to receive payments.',
        },
        {
            field: {
                type: 'select',
                id: 'currency_id',
                placeholder: 'select',
                belongs_to: 'wallets_id',
                populateOptions: getChild
            },
            title: 'Assets on selected wallets',
            description: 'Choose one of your wallets to associate to your experience',
        },
        {
            field: {
                type: 'radiobox',
                variant: 'full',
                id: 'type',
                label: 'Type',
                options: [
                    { name: 'Show', description: 'A Wallet', value: 'Show' },
                    { name: 'Class or Session', description: 'A Wallet', value: 'Class or Session' }
                ],
            }
        },
        {
            field: {
                type: 'number',
                id: 'price',
                label: 'Price',
                placeholder: 'Price'
            }
        },
        {
            field: {
                type: 'time',
                id: 'duration',
                label: 'Duration',
                placeholder: 'in minutes'
            }
        },
        {
            field: {
                type: 'select',
                id: 'language',
                placeholder: 'select',
                options: langOptions,
            },
            title: 'Choose a language',
            description: 'In what languages are you providing this experience',
        },
        {
            field: {
                type: 'select',
                id: 'area',
                placeholder: 'select',
                options: areaOptions,
            },
            title: 'Choose a area',
            description: 'Area',
        },
        {
            field: {
                type: 'select',
                id: 'category',
                placeholder: 'select',
                options: catOptions,
            },
            title: 'Choose a category',
            description: 'Where does your experience fits better',
        },
        [{
                field: {
                    type: 'text',
                    id: 'name',
                    label: 'Name',
                    placeholder: 'Name'
                }
            },
            {
                field: {
                    type: 'textarea',
                    id: 'description',
                    label: 'Description',
                    maxLength: 500,
                    placeholder: 'Describe in a few words your experience'
                }
            }],
    ];
    return _jsx(Form, { type: args.type, button: button, debug: debug, fields: fields });
};
