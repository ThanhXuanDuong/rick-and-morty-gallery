import React from "react";
import Character from "./Character";
import CharacterCard from "./CharacterCard";

export default function CharacterGallery({characters} : { characters: Character[] }){

    return <div className={"cards-container"}>
                <div className="cards">
                    {characters.map(character => (<CharacterCard
                        key={character.id}
                        name={character.name}
                        image={character.image}
                        status={character.status}
                    />))}
                </div>
            </div>;

}