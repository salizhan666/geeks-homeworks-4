import { ProductCard } from '../ProductCard/ProductCard';
import cls from './ProductList.module.scss';
import { productImages } from '../../utils/util';
import { productInfo } from '../../utils/util';

const randomIndex = (array) => {
    return Math.floor(Math.random() * array.length);
}

const ProductList = () => {    
    return (
        <div className={cls.product__list}>
            {
                productInfo.map((element) => {
                    return (
                        <ProductCard
                            id={element.id} 
                            key={element.id} 
                            title={element.title} 
                            image={productImages[randomIndex(productImages)]} 
                        />
                    )
                })
            }
        </div>
    )
}

export default ProductList;