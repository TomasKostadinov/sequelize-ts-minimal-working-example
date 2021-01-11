import {Table, Column, Model, HasMany,} from 'sequelize-typescript';
import {User} from "./user";

@Table
export class Organization extends Model {

    @Column
    name: string;

    @HasMany(() => User)
    users: User[];
}
