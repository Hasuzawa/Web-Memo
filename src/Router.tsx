import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Error404 from "./pages/webMemo/Error404"
import Board from "./pages/webMemo/Board"


const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/web-memo" element={<Board />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router