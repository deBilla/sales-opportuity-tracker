import { Table, Model, Column, PrimaryKey, DataType, HasMany } from "sequelize-typescript";
import { SalesOpportunity } from "./SalesOpportunity";

export enum Status {
    ACTIVE = "Active",
    NONACTIVE = "Non-Active",
    LEAD = "Lead"
}

@Table({
    tableName: "customers",
})

export class Customer extends Model {
    @PrimaryKey
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    uuid!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    firstName!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    lastName!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    phoneNumber!: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    addressLine1!: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
    })
    addressLine2!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    city!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    postalCode!: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    state!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    country!: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        defaultValue: Status.NONACTIVE,
    })
    status!: Status;

    @HasMany(() => SalesOpportunity)
    salesOppotunities!: SalesOpportunity[]
}