import { Flex } from 'antd'
import { useState, useCallback } from 'react'
import { ChildButton } from '../ChildButton/ChildButton'

export const Counter = () => {
    const [count, setCount] = useState(0)

    console.log('render Counter')

    const increase = useCallback
    (
        () => {
            console.log('increase called')
            setCount((prev) => prev + 1)
        }, []
    )

    return (
        <Flex gap={10} vertical>
            <h2>Counter</h2>
            <span>{count}</span>
            <ChildButton 
                onClick={increase} 
                label='Increase'
            />
        </Flex>
    )
}
