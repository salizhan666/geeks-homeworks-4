import UserCard from './UserCard';

const users = [
    { id: 1, name: 'Айбек', age: 20, city: 'Бишкек', active: true, img: 'https://images.steamusercontent.com/ugc/1660104240013670216/9881EF4C70D61E193A256F14EC9BF111CE1044F9/' },
    { id: 2, name: 'Мария', age: 22, city: 'Алматы', active: true, img: 'https://i.pinimg.com/564x/49/c9/58/49c95817f95d5c1b940e3f4f71f96f18.jpg' },
    { id: 3, name: 'Иван', age: 25, city: 'Москва', active: true, img: '' },
];

const UserList = () => (
    <div className="userList">
        {users.map((user) => (
            <UserCard user={user} />
        ))}
    </div>
);

export default UserList;
