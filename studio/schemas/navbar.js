import { number } from "prop-types";

export default {
    name: 'navbar',
    type: 'document',
    title: 'navItem',
    fields: [
        {
            name: 'navItem',
            type: 'string',
            title: 'navbar titles',

        },
        {
            name: 'order',
            type: 'number',
            title: 'order of display',
        }
    ]
}