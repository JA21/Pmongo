import {Prop, Schema,SchemaFactory} from '@nestjs/mongoose'
import {Document} from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product{

    @Prop({type:String,required:true})
    name:string;

    @Prop({type:String})
    description:string;

    @Prop({type:Number,required:true})
    amount:number;

    @Prop()
    imageUrl:string;

    @Prop()
    price:number;

    @Prop({default:Date.now})
    createdAt:Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);