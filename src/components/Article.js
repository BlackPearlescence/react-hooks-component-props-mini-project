function Article(props){
    const fives = Math.round(props.minutes / 5) * 5;
    const tens = Math.round(props.minutes / 10) * 10;
    let minuteDisplay = "";
    if(fives < 30){
        for(let i = 0;i<fives;i = i + 5){
            minuteDisplay = minuteDisplay + "☕";
        }
    } else {
        for(let i = 0;i<tens;i = i + 10){
            minuteDisplay = minuteDisplay + "🍱";
        }
    }
    return(
        <article>
            <h3>{props.title}</h3>
            {props.date ? <small>{props.date}</small> : <small>{"January 1, 1970"}</small>}
            <p>{props.preview}</p>
            <p>{`${props.minutes} ${minuteDisplay}`}</p>
        </article>
    );
}

export default Article;