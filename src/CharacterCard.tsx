export default function CharacterCard(props: {
    name:string
    image:string
    status:string}){

    return <div className={"a-card-container"}>
                <h2 > {props.name}</h2>
                <img src={props.image}/>
                <h3> {props.status}</h3>
            </div>;

}