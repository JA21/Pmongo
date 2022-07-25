import { Injectable } from '@nestjs/common';
import {Model} from 'mongoose'
import {InjectModel} from '@nestjs/mongoose'

import {Product,ProductDocument} from '../schemas/product.schema'
import {CreateProduct,UpdateProduct} from './dto'
@Injectable()
export class ProductService {

    constructor(@InjectModel(Product.name) private readonly productModel:Model<ProductDocument>){}

    async getProducts(): Promise<Product[]>{

     const product= await this.productModel.find({}).exec();
     
    return product;
    
    }

    async getOneProductId(id:any): Promise<Product>{
        console.log(id)
        const product=await this.productModel.findById(id).exec();
       
        if(product){
            return product;
        }else{
        console.log("Producto no encontrado")
        }
        
    }

    async createProduct(dtoCreate:CreateProduct): Promise<Product>{
        
        const create =  new this.productModel(dtoCreate);
        return await create.save();
        
    }

    async updateProduct(id:string,dtoUpdate:CreateProduct){
      
            const update = await this.productModel.findByIdAndUpdate(id,dtoUpdate);
            return  update;
        
    }

    async deleteProduct(id:any):Promise<Product>{
        const find = await this.getOneProductId(id);

        if(find){
            const deleteP = await this.productModel.deleteOne(find);
            return find;
        }else{
            console.log('Product no found')
        }
    }
}
