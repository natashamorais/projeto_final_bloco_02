
import { Module } from '@nestjs/common';
import { Produto } from './entities/produto.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoController } from '../produto/controllers/produto.controller';
import { ProdutoService } from '../produto/services/produto.service';
import { CategoriaService } from 'src/categoria/services/categoria.service';
import { CategoriaModule } from 'src/categoria/categoria.module';



@Module({
    imports: [TypeOrmModule.forFeature([Produto]), CategoriaModule],
    controllers: [ProdutoController],
    providers: [ProdutoService, CategoriaService],
    exports: [TypeOrmModule]
})
export class ProdutoModule {};