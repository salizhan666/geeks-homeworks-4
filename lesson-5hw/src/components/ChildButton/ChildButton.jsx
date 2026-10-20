import { Button } from 'antd'
import { memo } from 'react';

export const ChildButton = memo(
    ({ onClick, label }) => {
        console.log('render ChildButton');

        return (
            <Button onClick={onClick}>
                {label}
            </Button>
        )
    }
)
