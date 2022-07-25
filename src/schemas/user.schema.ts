import {Prop, Schema,SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose';

export type UsertDocument = User & Document;

@Schema()
export class User{

    @Prop({type:String,required:true})
    username:string;

    @Prop({type:String})
    password:string;

    @Prop({type:Boolean})
    state:Boolean;

    @Prop({default:Date.now})
    createdAt:Date;
}

export const UsertSchema = SchemaFactory.createForClass(User);