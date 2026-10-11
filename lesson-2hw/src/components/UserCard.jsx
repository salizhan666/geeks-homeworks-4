import { UserOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';

const UserCard = ({ user }) => {
    const { name, age, city, img, active } = user;

    if (!active) return (
        <span>Данные пользователя отсутствуют</span>
    );

    return (
        <Card
            className="userCard"
            hoverable
            variant="borderless"
            style={{ width: 300 }}
            cover={img ?
                <img src={img} alt={name} /> :
                <Avatar shape="square" size={64} icon={<UserOutlined />} />}
        >
            <div className="cardInfo">
                <h2>{name}</h2>
                <p>Возраст: {age}</p>
                <p>Город: {city}</p>
            </div>
        </Card>
    );
};

export default UserCard;
