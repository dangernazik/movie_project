import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layouts/MainLayout";
import {
    AboutPage,
    GenrePage,
    HomePage,
    MovieDetailsPage,
    MovieGenrePage,
    NewMovieListPage,
    PopularMoviePAge, SearchedMoviePage
} from "./pages";



function App() {

    return (
        <div className="App">
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'movie/:movie_id'} element={<MovieDetailsPage/>}/>
                    <Route path={'genres'} element={<GenrePage/>}/>
                    <Route path={'genre/:genre_id/:genre_name'} element={<MovieGenrePage/>}/>
                    <Route path={'popular'} element={<PopularMoviePAge/>}/>
                    <Route path={'search/:search'} element={<SearchedMoviePage/>}/>
                    <Route path={'about'} element={<AboutPage/>}/>
                </Route>

            </Routes>
        </div>

    );
}

export default App;
