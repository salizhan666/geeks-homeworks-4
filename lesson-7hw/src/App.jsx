import { Flex } from "antd"
import { PostsList } from "./components/PostsList/PostsList"
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className='container'>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <Flex>
        <PostsList />
      </Flex>
    </div>
  )
}

export default App
