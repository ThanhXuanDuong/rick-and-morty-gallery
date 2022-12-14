type Character ={
    id: number;
    name: string;
    species:string;
    status: string;
    type:string;
    gender: string;
    origin: {   name: string;
        url: string; };
    location:{name: string;
        url: string; };
    image:string;
    episode: string[];
    url:string;
    created: string;
}

export default Character;