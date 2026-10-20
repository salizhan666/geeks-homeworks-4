import { Flex } from "antd"
import { Counter } from "./components/Counter/Counter"
import { FilteredList } from "./components/FilteredList/FilteredList"

function App() {

  return (
    <Flex gap={15} vertical> 
      <Counter />
      <FilteredList />
    </Flex>
  )
}

export default App
