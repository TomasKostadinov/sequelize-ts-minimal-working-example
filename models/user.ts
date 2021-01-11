import {Table, Column, Model, HasMany, ForeignKey, BelongsTo} from 'sequelize-typescript';
import {Organization} from "./organization";

@Table
export class User extends Model {

    @Column
    name: string;

    @ForeignKey(() => Organization)
    @Column
    org_id: number;

    @BelongsTo(() => Organization)
    Organizations: Organization;
}
