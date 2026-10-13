function destaque (props){
    return(
        <>
            <a  href = "#" class = "destaque">

                <img src={props.img} al t="" width="100" height="100"/>
                <span>
                    {props.nome}
                </span>

            </a>
        </>
    )
}

export default destaque