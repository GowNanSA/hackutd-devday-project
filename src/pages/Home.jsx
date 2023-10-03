import Navbar from "../components/Navbar";
import Dashboard from "../components/Dashboard";
function Home(){
    return(
        <div className="min-h-screen w-screen overflow-x-hidden bg-primary text-text-primary">
        <Navbar />
        <h1 className="fond-['Comic_Sans'] px-8 py-6 text-3xl font-bold">
            {' '}
        Anime List 
        {/* <u1 className="flex flex-wrap gap-32">
            <Dashboard/>
        </u1> */}
        </h1>
        <Dashboard/>
        </div>

        // <h1 className="px-8 py-6 text-3xl font-bold">
        //     {' '}
        // Gowri's Recommendations of Anime (and Donghua!) That Were Not in the Data >:D
        // </h1>
        
    );
}

export default Home;