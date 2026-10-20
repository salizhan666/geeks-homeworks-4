import { useCallback, useMemo, useState } from 'react'
import { Flex, Button, Input } from 'antd'
import data from '../../data/users.json'
import names from '../../data/names.json'
import cls from './FilteredList.module.scss'

export const FilteredList = () => {
    const [users, setUsers] = useState(data)
    const [query, setQuery] = useState('')

    console.log('render FilteredList')

    const filteredUsers = useMemo(
        () => {
            console.log('useMemo: filtering users')

            return users.filter(
                (user) => user.name.toLowerCase().includes(query.trim().toLowerCase())
            )
        },
        [users, query]
    )

    const addUser = useCallback(
        () => setUsers(
            (prev) => {
                console.log('addUser called')

                const lastId = prev.at(-1)?.id ?? 0
                const name = names[Math.floor(Math.random() * names.length)]

                return [...prev, { id: lastId + 1, name }]
            }
        ),
        []
    )

    return (
        <Flex gap={10} vertical>
            <div>FilteredList</div>
            <Input
                placeholder='Filter by name'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ width: 250 }}
            />
            <Flex gap={10} vertical>
                {filteredUsers.map(
                    (user) => (
                        <div key={user.id} className={cls.user__name}>
                            {user.name}
                        </div>
                    )
                )}
            </Flex>
            <Button onClick={addUser} style={{ width: 250 }}>Add user</Button>
        </Flex>
    )
}
