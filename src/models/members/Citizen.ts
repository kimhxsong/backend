import * as orm from "typeorm";
import safe from "safe-typeorm";

import { BbsCustomer } from "../bbs/actors/BbsCustomer";
import { Member } from "./Member";

@orm.Entity()
export class Citizen extends safe.Model
{
    /* -----------------------------------------------------------
        COLUMNS
    ----------------------------------------------------------- */
    @orm.PrimaryColumn("uuid")
    public readonly id!: string;

    @orm.Index({ unique: true })
    @orm.Column("varchar")
    public readonly mobile!: string;

    @orm.Index()
    @orm.Column("varchar")
    public readonly name!: string;

    @orm.CreateDateColumn()
    public readonly created_at!: Date;

    /* -----------------------------------------------------------
        HAS
    ----------------------------------------------------------- */
    @safe.Has.OneToMany
    (
        () => Member,
        member => member.citizen
    )
    public readonly members!: safe.Has.OneToMany<Member>;

    @safe.Has.OneToMany
    (
        () => BbsCustomer,
        customer => customer.citizen,
        (x, y) => x.created_at.getTime() < y.created_at.getTime()
    )
    public readonly customers!: safe.Has.OneToMany<BbsCustomer>;
}