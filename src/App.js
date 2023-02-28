import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import VideoDetail from "./components/VideoDetail";
import {ContextProvider} from './utils/Context';
import VideosSection from "./components/VideosSection";
import ChannelDetail from "./components/ChannelDetail";
const App = () => (
  <ContextProvider>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Feed />} />
        <Route path='/video/:id' element={<VideoDetail />} />
      <Route path='/channel/:id' element={<ChannelDetail />} />
      <Route path='/search/:searchTerm' element={<VideosSection />} />
      </Routes>

    </BrowserRouter>
  </ContextProvider>
);

export default App;
// https://www.youtube.com/embed/r0hs6iM4LHU"