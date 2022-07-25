import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import {ProductSchema,Product} from '../schemas/product.schema';


@Module({
  imports:[MongooseModule.forFeature([{name:Product.name,schema:ProductSchema}])],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule {}