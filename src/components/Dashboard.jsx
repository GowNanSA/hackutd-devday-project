// effect is function that is watching things and telling it to do things

import { useState, useEffect } from 'react';
import { fetchAllVideos } from '../api';
import VideoCard from './VideoCard';

function Dashboard() {
    // const, videos, setvideos, default type for variable
    const [videos, setVideos] = useState([]);

    async function fetchData() {
        const data = await fetchAllVideos();
        setVideos(data);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <ul className="flex flex-wrap gap-32">
            {videos.map((video) => (
                <VideoCard
                    key={video.id}
                    id={video.id}
                    title={video.title}
                    thumbnailURL={video.thumbnailUrl}
                />
            ))}
        </ul>
    );
}

export default Dashboard;

//SYNTAX FOR USE EFFECT use effect(() => )do THIS!, update variables, function arrow function, LOOK THIS UP
