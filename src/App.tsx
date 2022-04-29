import { BrowserRouter, Routes, Route } from "react-router-dom"
import Error404 from "./webMemo/Error404"
import Board from "./webMemo/Board"
import { Helmet } from "react-helmet"


const App = () => {

    return (
      <>
        <Helmet>
          <title>Web Memo</title>
        </Helmet>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Board />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
      </>
    )
}

export default App