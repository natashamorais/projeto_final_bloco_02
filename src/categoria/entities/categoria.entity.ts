import { IsNotEmpty} from "class-validator";
import { Produto } from "src/produto/entities/produto.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

    @Entity({name: "tb_categorias"})
    export class Categoria{
        @PrimaryGeneratedColumn()
        id: number;
    
        @IsNotEmpty()
        @Column({length: 255, nullable:false})
        tipo: string;

        
    @OneToMany( () => Produto, (produto) =>  produto.categoria)
    produto: Produto[];
}