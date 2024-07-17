import { lazy, Suspense } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Header = lazy(() => import("./components/Header"));
const Loader = lazy(() => import("./components/Loader"));
const Feed = lazy(() => import("./components/Feed"));
const VideoDetails = lazy(() => import("./components/VideoDetails"));
const ChannelDetails = lazy(() => import("./components/ChannelDetails"));
const SearchFeed = lazy(() => import("./components/Searchfeed"));

const App = () => {
  return (
    <Router>
     <Header />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/video/:id" element={<VideoDetails />} />
          <Route path="/channel/:id" element={<ChannelDetails />} />
          <Route path="/search/:query" element={<SearchFeed />} />
        </Routes>
      </Suspense>

   
  
    </Router>
  );
};

export default App;
