

function Card(props) {
    return (
        <div className={"bg-white border-white border rounded-xl shadow-2xl" + props.className}>
            {props.content}
        </div>
    )
}

export default Card;