import { IsNotEmpty, IsNumber } from "class-validator";
import { Categoria } from "src/categoria/entities/Categoria.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";

@Entity({name: "tb_produtos"})
export class Produto{

    @PrimaryGeneratedColumn() 
    id: number;

    @Column()
    @IsNotEmpty()
    nome: string;
   
    @IsNumber({maxDecimalPlaces: 2})
    @IsNotEmpty()
    @Column({type:'decimal', precision: 10, scale: 2, nullable: false})
   preco: number;

 

    @Column()
    foto: string;

    @ManyToOne( () => Categoria, (categoria) =>  categoria.produto,{
        onDelete: "CASCADE"
    })
    categoria: Categoria;
}