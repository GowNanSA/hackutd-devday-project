import { fetchVideoById } from '../api';
import Navbar from '../components/Navbar';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
function Video() {
    const [video, setVideo] = useState();


    // need to get variable thingy 
    const params = useParams({});
    async function fetchData() {
        const data = await fetchVideoById(params.id);
        setVideo(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    // fix error with fetching the data 
    if(!video){
        return<h1>Loading...</h1>;
    }
    return (
        <div className="min-h-screen w-screen overflow-x-hidden bg-primary text-text-primary">
            <Navbar />
            <div className="m-30">
                <video controls>
                    <source
                        src={video.videoUrl}
                        type="video/mp4"
                    ></source>
                </video>
                <h1 className=" text-3xl font-bold ">{video.title}</h1>
            </div>
        </div>
    );
}
export default Video;
