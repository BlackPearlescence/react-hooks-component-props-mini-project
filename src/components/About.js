function About(props){
    return(
    <aside>
        {props.image ? <img src={props.image} alt="blog logo"/> : <img src={"https://via.placeholder.com/215"} alt="blog logo"/>}
        <p>{props.about}</p>
    </aside>
    );
}

export default About;
