import { useEffect, useState } from "react";

const SLIDE_DELAY = 10000;

const slides = [
    {
        year: "2007",
        title: "Ведьмак",
        text: "История начинается: Геральт потерял память и возвращается в Каэр Морхен, который атакуют таинственные налётчики. Погоня за ними приведёт ведьмака в самое сердце заговора Саламандр.",
        link: "https://www.thewitcher.com/ru/witcher1",
        image: "/saga/witcher-1.webp",
        focus: "60%",
        alt: "Геральт, Трисс Меригольд, Весемир и Эскель в Каэр Морхене",
    },
    {
        year: "2011",
        title: "Ведьмак 2: Убийцы королей",
        text: "Кто-то убивает монархов Северных королевств, и в смерти короля Фольтеста обвиняют Геральта. Чтобы очистить имя, ему придётся найти настоящего цареубийцу.",
        link: "https://www.thewitcher.com/ru/witcher2",
        image: "/saga/witcher-2.webp",
        focus: "71%",
        alt: "Геральт, Трисс Меригольд и Вернон Роше во Флотзаме",
    },
    {
        year: "2015",
        title: "Ведьмак 3: Дикая Охота",
        text: "Огромный открытый мир, война Нильфгаарда с Севером и поиски Цири — Дитя Старшей Крови, за которой охотится призрачная кавалькада Дикой Охоты.",
        link: "https://www.thewitcher.com/ru/witcher3",
        image: "/saga/witcher-3.webp",
        focus: "68%",
        alt: "Геральт из Ривии в «Дикой Охоте»",
    },
    {
        year: "2015–2016",
        title: "Каменные сердца и Кровь и вино",
        text: "Два больших дополнения: сделка с таинственным Гюнтером о’Димом и бессмертным Ольгердом фон Эвереком, а затем путешествие в солнечное княжество Туссент, где хозяйничает высший вампир.",
        link: "https://www.thewitcher.com/ru/witcher3",
        image: "/saga/witcher-3-expansions.webp",
        focus: "62%",
        alt: "Герои «Каменных сердец» и «Крови и вина»: Ирис и Ольгерд фон Эверек, Сианна, Регис и княгиня Анна Генриетта",
    },
    {
        year: "Скоро",
        title: "Ведьмак 4",
        text: "Начало новой саги на движке Unreal Engine 5. Главной героиней станет Цири — теперь уже сама ведьмачка.",
        link: "https://www.thewitcher.com/ru/witcher4",
        image: "/saga/witcher-4.webp",
        focus: "72%",
        alt: "Цири — главная героиня новой саги",
    },
];

const Saga = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setActiveIndex((index) => (index + 1) % slides.length);
        }, SLIDE_DELAY);
        return () => clearInterval(timer);
    }, [activeIndex]);

    const showPrev = () => setActiveIndex((activeIndex - 1 + slides.length) % slides.length);
    const showNext = () => setActiveIndex((activeIndex + 1) % slides.length);

    return (
        <section className="slider_block" id="saga">
            <div className="container">
                <h2 className="title reveal">Сага о ведьмаке</h2>
                <div className="inner_slider reveal">
                    <div className="slider frame">
                        {slides.map((slide, index) => (
                            <div key={slide.title} className={index === activeIndex ? "slide active_slide" : "slide"}>
                                <div
                                    className="slide__bg"
                                    style={{ backgroundImage: `url(${slide.image})`, "--focus": slide.focus }}
                                    role="img"
                                    aria-label={slide.alt}
                                ></div>
                                <span className="slide__year">{slide.year}</span>
                                <div className="slide_card">
                                    <h3>{slide.title}</h3>
                                    <p>{slide.text}</p>
                                    <a href={slide.link} target="_blank">Узнать подробнее</a>
                                </div>
                            </div>
                        ))}
                        <button className="btn slider__arrow slider__arrow_prev" aria-label="Назад" onClick={showPrev}>
                            &#10094;
                        </button>
                        <button className="btn slider__arrow slider__arrow_next" aria-label="Вперёд" onClick={showNext}>
                            &#10095;
                        </button>
                    </div>
                    <div className="slider__dots">
                        {slides.map((slide, index) => (
                            <button
                                key={slide.title}
                                className={index === activeIndex ? "slider__dot slider__dot_active" : "slider__dot"}
                                aria-label={`Слайд ${index + 1}`}
                                onClick={() => setActiveIndex(index)}
                            ></button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Saga;
