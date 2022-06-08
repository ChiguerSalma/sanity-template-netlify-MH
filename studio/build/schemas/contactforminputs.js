export default {
    name: 'Form',
    type: 'document',
    title: 'Form',
    fields : [
        {
            name: 'placeholder',
            type: 'string',
            title: 'Input placeholder'
        },
        {
            name: 'order',
            type: 'number',
            title: 'order of display',
            hidden: true,
        }
    ],
}