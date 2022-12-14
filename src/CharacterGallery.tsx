import React, {useState} from "react";
import Character from "./Character";
import CharacterCard from "./CharacterCard";

export default function CharacterGallery(props : { characters: Character[] }){

    const [name, setName]= useState<string>("");
    return <div className={"cards-container"}>
                <input onChange={(event) =>setName(event.target.value)}/>
                <br/>
                <div className="cards">
                    {props.characters.filter(character => character.name.includes(name))
                        .map(character => (<CharacterCard
                        key={character.id}
                        name={character.name}
                        image={character.image}
                        status={character.status}
                    />))}
                </div>
            </div>;

}