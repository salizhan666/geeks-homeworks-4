const Hero = () => {
    return (
        <section className="hero-main" id="top">
            <video className="hero-main__video" src="/hero/thewitcher_background.mp4" autoPlay muted loop playsInline></video>
            <div className="container hero-main__inner">
                <img className="hero-main__logo" src="/hero/witcher3-logo.webp" alt="The Witcher 3: Wild Hunt" />
                <p className="hero-main__slogan">
                    Этому миру не нужен герой.
                    <br />
                    Ему нужен профессионал.
                </p>
            </div>
            <a className="hero-main__scroll" href="#ballads" aria-label="Листать вниз"></a>
        </section>
    );
}

export default Hero;
