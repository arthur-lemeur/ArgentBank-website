import "./_features.scss";
import FeatureItem from "./Feature-item/Feature-item";

const items = [
    {
        img: "/assets/img/icon-chat.png",
        imgAlt: "Chat Icon",
        title: "You are our #1 priority",
        text: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
    },
    {
        img: "/assets/img/icon-money.png",
        imgAlt: "Chat Icon",
        title: "More savings means higher rates",
        text: "The more you save with us, the higher your interest rate will be!"
    },
    {
        img: "/assets/img/icon-security.png",
        imgAlt: "Chat Icon",
        title: "Security you can trust",
        text: "We use top of the line encryption to make sure your data and money is always safe."
    },
]

const Features = () => {
    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            {items.map((item, idx) =>
                <FeatureItem
                    Img={item.img}
                    ImgAlt={item.imgAlt}
                    Title={item.title}
                    Text={item.text}
                    key={idx}
                />
            )}
        </section>
    )
}

export default Features;
