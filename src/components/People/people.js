import "../../scss/base.scss" 
import "./people.scss"


export const Member = (props) => {
    return (
        <div className="member-item">
            <div className="member-image"><img src={ props.image } /></div>
            <div className="member-position">{ props.position }</div>
            <div className="member-name">{ props.name }</div>
            <p className="member-description">{ props.description }</p>
        </div>
    )
}

const People = (props) => {
    return (
        <div className="container">
            <div className="description-item">
                <h3 className="description-little-title">{ props.subtitle }</h3>
                <h1 className="description-title">{ props.title }</h1>
                <p className="about"> { props.description } </p>
                <div className="members small">
                    <Member image="images/tobias.png" position="CEO" name="Tobias Schneider" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A laudantium ab
                            incidunt optio praesentium maxime
              quo asperiores." />
                    <Member image="images/Jack.png" position="DESIGNER" name="Jack Knife" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A laudantium ab
                            incidunt optio praesentium maxime
              quo asperiores." />
                    <Member image="images/tobias.png" position="CEO" name="Tobias Schneider" description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. A laudantium ab
                            incidunt optio praesentium maxime
              quo asperiores." />
                </div>
            </div>
        </div>
    )
}

export default People