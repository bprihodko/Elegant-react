import "../../scss/base.scss" 

const Post = (props) => {
    return (
    <div className="container">
        <div className="description-item">
        <h3 className="description-little-title">{ props.subtitle }</h3>
        <h1 className="description-title">{ props.title }</h1>
        <div className="description-last small">
            <div className="last-image"><img src={ props.image } /></div>
            <div className="description-information">
                <div className="date"> {props.date} </div>
                <div className="last-title">{ props.last_title }</div>
                <p className="last"> { props.last }</p>
                <button className="read">{ props.read }</button>
            </div>
        </div>
        <button className="more">{props.more}</button>
        </div>
    </div>
    )
}

export default Post