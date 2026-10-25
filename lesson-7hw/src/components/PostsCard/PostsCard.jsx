import { Button, Card } from 'antd';
import { toast } from 'react-toastify';

export const PostsCard = ({ element, setPosts }) => {

    const { title, body } = element;

    const onClick = () => {
        setPosts(prev => prev.filter((item) => item?.id !== element?.id));

        toast.success(`Post ${element?.id} has been deleted`);
    }
    return (
        <Card
            title={title}
            extra={<Button
                style={{ marginLeft: "20px" }}
                type='primary' onClick={onClick}
                danger
            >
                Delete
            </Button>}
            style={{
                maxWidth: 500,
            }}
        >
            <p style={{ textAlign: 'left' }}>{body}</p>
        </Card>
    )
}
