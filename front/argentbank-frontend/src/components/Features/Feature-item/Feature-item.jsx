import "./_feature-item.scss"

const FeatureItem = (props) => {
    const { Img, ImgAlt, Title, Text } = props
    return (
        <div className="feature-item">
            <img src={Img} alt={ImgAlt} className="feature-icon"/>
            <h3 className="feature-item-title">{Title}</h3>
            <p>
                {Text}
            </p>
        </div>
    )
}

export default FeatureItem;
