import { useEffect, useRef, useState } from "react";
import { playSound } from "./sound.js";

const Characters = () => {
    const [cards, setCards] = useState([]);
    const [activeIndex, setActiveIndex] = useState(null);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const listRef = useRef(null);

    useEffect(() => {
        const loadCards = async () => {
            try {
                const response = await fetch("/characters/gwent_cards.json");
                if (!response.ok) throw new Error(`Ошибка: ${response.status}`);
                setCards(await response.json());
            } catch (error) {
                console.error(error.message);
            }
        };
        loadCards();
    }, []);

    const hoverCard = (index) => {
        if (index !== hoveredIndex) playSound("/sounds/thewitcher-UI-choose.mp3");
        setHoveredIndex(index);
    };

    const toggleCard = (index) => {
        playSound("/sounds/thewitcher-UI-select.mp3");
        if (activeIndex === index) {
            setActiveIndex(null);
            return;
        }
        setActiveIndex(index);
        setTimeout(() => {
            listRef.current.children[index].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
        }, 350);
    };

    const closeCards = () => {
        playSound("/sounds/thewitcher-UI-select.mp3");
        setActiveIndex(null);
    };

    const scrollCards = (direction) => {
        listRef.current.scrollBy({ left: direction * listRef.current.clientWidth, behavior: "smooth" });
    };

    return (
        <section className="characters" id="heroes">
            <div className="container">
                <h2 className="title reveal">Карты героев</h2>
                <div className="characters-header reveal">
                    <p className="characters-text">
                        Карты героев в гвинте — сильнейшие карты с золотой рамкой. Им не страшны погода и заклинания:
                        их сила неизменна, и противник никак не сможет её уменьшить. Нажмите на карту, чтобы прочитать о герое.
                    </p>
                    <div className="character-buttons">
                        <button className="btn" onClick={closeCards}>Свернуть карты</button>
                        <div className="character-slider">
                            <button className="btn character-slider-button" aria-label="Назад" onClick={() => scrollCards(-1)}>
                                &#10094;
                            </button>
                            <button className="btn character-slider-button" aria-label="Вперёд" onClick={() => scrollCards(1)}>
                                &#10095;
                            </button>
                        </div>
                    </div>
                </div>
                <div className="characters-list reveal" ref={listRef} onMouseLeave={() => setHoveredIndex(null)}>
                    {cards.map((card, index) => (
                        <div
                            key={card.name}
                            className={index === activeIndex ? "character-card character-active" : "character-card"}
                            onMouseEnter={() => hoverCard(index)}
                            onClick={() => toggleCard(index)}
                        >
                            <div className="character-photo">
                                <img src={card.image} alt={card.name} loading="lazy" />
                            </div>
                            <div className="character-title">
                                <span className="character-point">Сила {card.point}</span>
                                <h4>{card.name}</h4>
                                <p>{card.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Characters;
