import "../../scss/base.scss" 
import "./gallery.scss"

const images = [
    'images/image1.png',
    'images/image2.png',
    'images/book.png',
    'images/bag.png',
    'images/letter.png',
    'images/cards.png',
    'images/postcard.png',
    'images/image8.png',

];

const Gallery = (props) => {
    return (
    <div className="container-flued">
        <div className="description-item">
            <h3 className="description-little-title">{ props.subtitle }</h3>
            <h1 className="description-title">{ props.title }</h1>
            <div className="works-box medium small">
                { 
                images.map((image)=> {
                    return (
                      <div className="works-image">
                        <img src={ image } />
                      </div>
                    )
                })
                }
            </div>
        </div>
    </div>)
}

export default  Gallery