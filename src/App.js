import logo from './assets/react-logo.png';
import Navbar from './components/Navbar';
import VideoCard from './components/VideoCard';
import Dashboard from './components/Dashboard';
import {
    BrowserRouter,
    RouterProvider,
    createBrowserRouter,
} from 'react-router-dom';
import Video from './pages/Video';
import Home from './pages/Home';
// hold array of routes
//we pass in dynamic changing videos with props and curly braces
const router = createBrowserRouter([
    {
        path: '/video/:id',
        element: <Video />,
    },
    {
        path: '/',
        element: <Home />,
    },
]);

function App() {
    //return (
    // this is for the name stuff
    // npm start in the terminal
    //TAILWIND CONFIG hELPS ChANGE STUFF MAIN COLORS AND STUFF
    return <RouterProvider router={router} />;

    {
        /* <u1 className="flex flex-wrap gap-32">
                <VideoCard
                    title="Tian Guan Ci Fu"
                    thumbnailURL="https://static.wikia.nocookie.net/heaven-officials-blessing/images/9/9d/Donghua_01.jpg/revision/latest?cb=20200420184846"
                />
                <VideoCard
                    title="Mo Dao Zu Shi"
                    thumbnailURL="https://m.media-amazon.com/images/M/MV5BZjU4NmFhZTMtYzk0ZS00ZmE1LWFjYmUtYWIwY2MwZGNjNmRjXkEyXkFqcGdeQXVyMTQwOTkwMDUw._V1_.jpg"
                />
                <VideoCard title="Scum Villain Self Saving System" thumbnailURL="https://m.media-amazon.com/images/M/MV5BYTM0ZTc1MDYtOTQ2Ny00ZmE0LWI5ZWMtYzkxNjQ5MTY1ZDBmXkEyXkFqcGdeQXVyMjYwMjMwMzk@._V1_.jpg" />
                <VideoCard title="Berserk" thumbnailURL=""/>
                <VideoCard title="Made in Abyss" thumbnailURL=""/>
                <VideoCard
                    title = "Bleach" thumbnailURL="https://m.media-amazon.com/images/M/MV5BODFmYTUwYzMtM2M2My00NGExLWIzMDctYmRjNTNhZDc4MGI2XkEyXkFqcGdeQXVyMTMzNDExODE5._V1_FMjpg_UX1000_.jpg" />
            
                <VideoCard title="Yuri on Ice!!!" thumbnailURL="https://m.media-amazon.com/images/M/MV5BMjU5OGIyM2EtOGViMi00Y2U5LWI0MDItYTM3MDNhOGMzNmE3XkEyXkFqcGdeQXVyNjkyMTU2NDM@._V1_.jpg" />
                <VideoCard title="SK8 the Infinity" thumbnailURL="https://m.media-amazon.com/images/M/MV5BYTUzM2YyNGYtYTY4ZS00MDVmLWIyYWMtYmU3MDgxZDU1NjU4XkEyXkFqcGdeQXVyMTI4MTE3MTY4._V1_.jpg"/>
                <VideoCard title = "Revolutionary Girl Utena" thumbnailURL="https://m.media-amazon.com/images/M/MV5BY2U0MjBiZDEtZDBmNC00MWQ0LWIxY2UtN2ZkZmU5NThlZjM0XkEyXkFqcGdeQXVyNjc2NjA5MTU@._V1_.jpg"/>
                <VideoCard title="Link Click" thumbnailURL="https://static.wikia.nocookie.net/shiguang-dailiren/images/2/2a/LinkClick_S2_Key_Visual_1.png/revision/latest?cb=20220101052126"/>
            </u1> */
    }
    //     </div>
    // );
}

export default App;
