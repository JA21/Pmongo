import { Controller, Post, Put, Delete, Get, Param, Body, Res, HttpStatus, Query, NotFoundException } from '@nestjs/common';

import { ProductService } from './product.service';
import { CreateProduct, UpdateProduct } from './dto';
@Controller('product')
export class ProductController {

    constructor(
        private readonly service: ProductService
    ) { }

    @Get('/')
    async getProductAll(@Res() res) {

        const product = await this.service.getProducts();
        res.status(HttpStatus.OK).json({
            message: 'Products find',
            product
        })

    }

    @Get('/:id')
    async getOneProductId(@Param('id') id, @Res() res) {
        const product = await this.service.getOneProductId(id);
        
        if(typeof product === 'undefined'){
            return res.status(HttpStatus.NOT_FOUND).json({
                    message: 'Product not found ',
                    
                })
            
        }else{
         return   res.status(HttpStatus.OK).json({
                message: 'Product find',
                product
            })
        }
       
        }
     

    


    @Post('/create')
    createProduct(@Body() dtoProduct: CreateProduct, @Res() res) {
        const product = this.service.createProduct(dtoProduct);

        res.status(HttpStatus.OK).json({
            message: 'Product created',
            product
        })
    }

    @Put('/update')
    async updateProduct(@Body() dtoProduct: CreateProduct, @Query('id') id,@Res() res) {
        const product = await this.service.updateProduct(id,dtoProduct);
        if(!product) throw new NotFoundException('The product not exist');

          return  res.status(HttpStatus.OK).json({
            message: 'Product update',
            product
        })
    }

    @Delete('/delete')
    async deleteProductId(@Query('id') id, @Res() res) {
        const product = await this.service.deleteProduct(id);

        if(!product) throw new NotFoundException('The product not exist');

       return  res.status(HttpStatus.OK).json({
            message: 'Product eliminated',
            product
        })

    }
}
