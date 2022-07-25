import { Injectable } from "@nestjs/common";
import { MongooseModuleOptions, MongooseOptionsFactory } from "@nestjs/mongoose";
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {

    constructor(private readonly config: ConfigService) { }
  createMongooseOptions(): MongooseModuleOptions {

    const TYPE=this.config.get<string>('app.db_type'),
          USER=this.config.get<string>('app.db_user'),
          CLUSTER=this.config.get<string>('app.db_cluster');
    return {
      uri:`${TYPE}://${USER}@${CLUSTER}/?retryWrites=true&w=majority`,
    };
  }
}
