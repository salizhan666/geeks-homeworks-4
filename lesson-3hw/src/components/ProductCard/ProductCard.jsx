import cls from './ProductCard.module.scss';
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

export const ProductCard = ({ id, image, title }) => {
    return (
        <div className={cls.product__card}>
            <div className={cls.product__card__image}>
                <img src={image} alt={title} />
            </div>
            <div className={cls.product__card__title}>
                <h2>{title}</h2>
                <Button 
                    type='primary' 
                    icon={<ShoppingCartOutlined />} 
                    onClick={() => console.log(`Title: ${title}, ID: ${id}`)}
                >
                    Buy Now
                </Button>
            </div>
        </div>
    )
}