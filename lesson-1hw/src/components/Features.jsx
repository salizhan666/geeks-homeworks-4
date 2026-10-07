import { useEffect, useState } from "react";
import { playSound } from "./sound.js";

const FEATURE_DELAY = 7000;

const features = [
    {
        title: "Обновление с двумя бесплатными наборами дополнений",
        text: "Если у вас уже есть «Ведьмак 3» на поддерживаемых платформах, его можно бесплатно улучшить до обновлённого издания. А все игроки, у которых есть только основная игра, получат в подарок дополнения «Каменные сердца» и «Кровь и вино».",
        image: "/features/screenshot-1.webp",
    },
    {
        title: "Обновлённая графика и быстродействие",
        text: "Улучшенные текстуры окружения, персонажей и чудовищ добавили Континенту ещё больше деталей и глубины. Растительность обновлена полностью, а освещение, рендеринг и трассировка лучей переработаны.",
        image: "/features/screenshot-2.webp",
    },
    {
        title: "Улучшенные сражения",
        text: "Каждый удар, уворот и Знак ощущаются ярче. Благодаря обновлённым анимациям, адаптивной камере и новым добиваниям бои выглядят плавнее, динамичнее и жёстче.",
        image: "/features/screenshot-3.webp",
    },
    {
        title: "Переработанная система навыков",
        text: "Обновлённое дерево навыков открывает больше путей развития Геральта и заметно влияет на ваш стиль игры.",
        image: "/features/screenshot-4.webp",
    },
    {
        title: "И многое другое",
        text: "Обновлённые анимации, кроссплатформенная поддержка модификаций, трансмогрификация, реалистичное освещение и тени, новая система медитации и расширенный фоторежим.",
        image: "/features/screenshot-5.webp",
    },
];

const Features = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        const timer = setInterval(() => {
            setActiveIndex((index) => (index + 1) % features.length);
        }, FEATURE_DELAY);
        return () => clearInterval(timer);
    }, [isPaused, activeIndex]);

    const selectFeature = (index) => {
        playSound("/sounds/thewitcher-UI-select.mp3");
        setActiveIndex(index);
    };

    return (
        <section className="features" id="features">
            <div className="features__bgs">
                {features.map((feature, index) => (
                    <div
                        key={feature.image}
                        className={index === activeIndex ? "features__bg features__bg_active" : "features__bg"}
                        style={{ backgroundImage: `url(${feature.image})` }}
                    ></div>
                ))}
            </div>
            <div className="container">
                <h2 className="title reveal">Обновлённое издание</h2>
                <div
                    className="features__list reveal"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                >
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={index === activeIndex ? "features__item features__item_active" : "features__item"}
                        >
                            <button className="features__button" onClick={() => selectFeature(index)}>
                                {feature.title}
                            </button>
                            <div className="features__desc">
                                <p>{feature.text}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
