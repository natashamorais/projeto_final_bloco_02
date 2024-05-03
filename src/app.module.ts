import { CategoriaModule } from './categoria/categoria.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entities/Categoria.entity';

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
    CategoriaModule
  ],
 
  controllers: [],
  providers: [],
})
export class AppModule {}
