import {useEffect, useState} from "react";
import Character from "../Character";
import axios from "axios";

export default function useCharacters() {

    const [characters, setCharacters] = useState<Character[]>([]);

    const getCharacters = () => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then(response => response.data)
            .then(data => setCharacters(data.results))
            .catch(e => console.error(e))
    };

    useEffect(getCharacters, []);

    return characters;
}

