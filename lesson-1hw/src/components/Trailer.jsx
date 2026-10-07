const Trailer = () => {
    return (
        <section className="block_video">
            <div className="container">
                <h2 className="title reveal">Трейлер «Убить чудовище»</h2>
                <div className="inner_block_video frame reveal">
                    <iframe
                        src="https://www.youtube.com/embed/c0i88t0Kacs"
                        title="The Witcher 3: Wild Hunt — Killing Monsters"
                        allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        loading="lazy"
                    ></iframe>
                </div>
            </div>
        </section>
    );
}

export default Trailer;
