import { Table, Model, Column, DataType, BelongsTo, ForeignKey } from "sequelize-typescript";
import { Customer } from "./Customer";

enum Status {
    NEW = "“New”",
    CLOSEDWON = "Closed Won",
    CLOSEDLOST = "“Closed Lost"
}

@Table({
    tableName: "sales_opportunities",
})

export class SalesOpportunity extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: true,
        defaultValue: Status.NEW,
    })
    status!: Status;

    @ForeignKey(() => Customer)
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    customerUuid!: string;

    @BelongsTo(() => Customer)
    customer!: Customer;
}