import "./App.css";
import SongsCat from "./Components/Category/SongsCat";
import DisneyCategory from "./Pages/DisneyCategory";
import GameCategory from "./Pages/GameCategory";
import HBOCategory from "./Pages/HBOCategory";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import NetflixCategory from "./Pages/NetflixCategory";
import SignIn from "./Pages/SignIn";
import SongsCategory from "./Pages/SongsCategory";
import TechCategory from "./Pages/TechCategory";
import { Route, Routes } from "react-router-dom";
import SingleBlogPage from "./Pages/SingleBlogPage";
import ViewAllBlog from "./Pages/ViewAllBlog";
import WritePage from "./Pages/WritePage";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import UserPageBlog from "./Pages/UserPageBlog";

function App() {
  return (
    <>
      {/* <Home /> */}
      {/* <SignIn /> */}
      {/* <LogIn /> */}
      {/* <GameCategory /> */}
      {/* <HBOCategory /> */}
      {/* <DisneyCategory /> */}
      {/* <NetflixCategory /> */}
      {/* <SongsCategory /> */}
      {/* <TechCategory /> */}
      {/* <SingleBlogPage /> */}

      <ToastContainer />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/gamescat" element={<GameCategory />} />
        <Route path="/hbocat" element={<HBOCategory />} />
        <Route path="/disneycat" element={<DisneyCategory />} />
        <Route path="/netflixcat" element={<NetflixCategory />} />
        <Route path="/songscat" element={<SongsCategory />} />
        <Route path="/techcat" element={<TechCategory />} />
        <Route path="/post/:postid" element={<SingleBlogPage />} />
        <Route path="/viewall/" element={<ViewAllBlog />} />
        <Route path="/write/" element={<WritePage />} />
        <Route path="/userblog/" element={<UserPageBlog />} />
      </Routes>
    </>
  );
}

export default App;
