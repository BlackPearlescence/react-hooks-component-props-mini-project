function Header(props){
    return(
        <header>
            <h1>{props.name}</h1>
            {props.children}
        </header>
    );
}

export default Header;