import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoriaModule } from './categoria/categoria.module';
import { ProdutoModule } from './produto/produto.module';
import { CategoriaService } from './categoria/services/categoria.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'db_farmacia',
     // entities: [Categoria],
     autoLoadEntities: true,
      synchronize: true,
    }),
    ProdutoModule
  ],
 
  controllers: [],
  providers: [],
})
export class AppModule {}
