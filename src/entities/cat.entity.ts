import { EntitySchema } from 'typeorm';

export const Cat = new EntitySchema({
    name: 'Cat',
    columns: {
        id: {
            type: 'int',
            primary: true,
            generated: true,
        },
        name: {
            type: 'varchar',
        },
        breed: {
            type: 'varchar',
        },
        age: {
            type: 'int',
        },
    },
});
