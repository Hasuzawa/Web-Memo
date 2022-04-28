import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from "./App"
import Error404 from "./pages/error404/Error404"
import NoticeBoard from "./pages/noticeboard/NoticeBoard"


const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/notice-board" element={<NoticeBoard />} />
                <Route path="*" element={<Error404 />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router