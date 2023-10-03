function VideoCard(props) {
    return (
        <a href={'/video' + '/' + props.id}>
            <div className="relative m-8 h-[250px] w-[180px] rounded-md bg-secondary overflow-hidden rounded-md">
                <img 
                src={props.thumbnailURL} 
                alt={props.title}> 
                </img>

                <div className="absolute bottom-0 h-2/5 w-full bg-gradient-to-t from-black to-transparent">
                    <h1 className="absolute bottom-4 left-4 rounded-md font-semibold">
                        {props.thumnnailURL}
                        {props.title}
                    </h1>
                </div>
            </div>
        </a>
       
    );
}
export default VideoCard;
