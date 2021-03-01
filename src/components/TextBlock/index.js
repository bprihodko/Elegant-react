import "../../scss/base.scss" 

const TextBlock = (props) => {
    return (<div>
        <div class="container">
            <div class="description-item">
                <h3 class="description-little-title">{ props.subtitle }</h3>
                <h3 class="description-title">{ props.title }</h3>
                <p class="about">{ props.description }</p>
                <button class="more">{ props.readmore }</button>
            </div>
        </div>
    </div>);
}
export default TextBlock;