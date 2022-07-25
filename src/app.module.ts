import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import {ProductModule} from './product/product.module'
import {CommonModule} from './modules/common.module';
import {MongooseConfigService} from './modules/moongose.config';
@Module({
  imports: [ProductModule,CommonModule,
    MongooseModule.forRootAsync({
      useClass: MongooseConfigService,
    })],
  controllers: [],
  providers: [],
})
export class AppModule {}
