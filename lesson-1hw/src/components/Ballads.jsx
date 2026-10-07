const Ballads = () => {
    return (
        <section className="ballads" id="ballads">
            <video className="ballads__particles" src="/ballads/particles_overlay.mp4" autoPlay muted loop playsInline></video>
            <div className="container ballads__inner">
                <div className="ballads__content reveal">
                    <img
                        className="ballads__logo"
                        src="/ballads/songs-of-the-pasts-logo.webp"
                        alt="Ведьмак 3: Дикая Охота — Баллады прошлого"
                    />
                    <p className="ballads__date">Выйдет в 2027 году</p>
                    <a className="btn btn_primary" href="https://www.youtube.com/watch?v=SB3siHVCHpY" target="_blank">
                        Посмотреть трейлер
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Ballads;
