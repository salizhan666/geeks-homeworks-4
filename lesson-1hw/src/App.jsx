import { useEffect } from "react";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Ballads from "./components/Ballads.jsx";
import Features from "./components/Features.jsx";
import News from "./components/News.jsx";
import Characters from "./components/Characters.jsx";
import Saga from "./components/Saga.jsx";
import Trailer from "./components/Trailer.jsx";
import Bottle from "./components/Bottle.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add("reveal_visible");
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.12 });

        document.querySelectorAll(".reveal").forEach((block) => observer.observe(block));
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <Header />
            <main>
                <Hero />
                <Ballads />
                <Features />
                <News />
                <Characters />
                <Saga />
                <Trailer />
                <Bottle />
            </main>
            <Footer />
        </>
    );
}

export default App;
