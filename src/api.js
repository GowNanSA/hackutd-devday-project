import { apiBaseURL } from './constants';
// REMEMBER SEMICOLONS

export async function fetchAllVideos() {
    const res = await fetch(apiBaseURL);
    console.log(res.status);

    if (res.status !== 200) {
        console.error('API failed to load - Error Code' + res.status);
        return [];
    }

    const data = await res.json();
    return data;
}

// api function for the different videos FETCH VIDEO BY ID 
export async function fetchVideoById(id) {
    const res = await fetch(apiBaseURL + "/" + id);
    console.log(res.status);

    if (res.status !== 200) {
        console.error('API failed to load - Error Code' + res.status);
        return [];
    }

    const data = await res.json();
    return data;
}