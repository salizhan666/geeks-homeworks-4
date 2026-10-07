const otherProjects = [
    { className: "cyberpunk-logo", href: "https://www.cyberpunk.net/nl/ru/", text: "cyberpunk.net" },
    { className: "gwent-logo", href: "https://www.playgwent.com/ru/", text: "playgwent.com" },
    { className: "cdprojektredgear-logo", href: "https://gear.cdprojektred.com/", text: "gear.cdprojektred.com" },
];

const socials = [
    { className: "x_icon", href: "https://x.com/thewitcher", label: "X" },
    { className: "youtube_icon", href: "https://www.youtube.com/thewitcher", label: "YouTube" },
    { className: "discord_icon", href: "https://discord.com/invite/thewitcher", label: "Discord" },
    { className: "instagram_icon", href: "https://www.instagram.com/thewitcher", label: "Instagram" },
    { className: "telegram_icon", href: "https://t.me/cdpr_official", label: "Telegram" },
];

const infoLinks = [
    { href: "https://regulations.cdprojektred.com/en/privacy_policy", text: "Условия использования и политика конфиденциальности" },
    { href: "#", text: "Оповещение о файлах cookie" },
    { href: "https://support.cdprojektred.com/en/", text: "Поддержка" },
    { href: "https://regulations.cdprojektred.com/en/user_agreement", text: "Пользовательское соглашение" },
    { href: "https://www.cdprojektred.com/ru/fan-content", text: "Руководство по созданию фан-контента" },
    { href: "https://press.cdprojektred.com/ru", text: "Пресс-центр" },
    { href: "https://www.cdprojektred.com/en/jobs?studio=poland&project=the-witcher-4#animation", text: "Карьера" },
];

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer_links">
                    <div className="footer_links_project">
                        <div className="footer_main_logo"></div>
                        <div className="footer_other_projects">
                            <ul>
                                {otherProjects.map((project) => (
                                    <li key={project.href}>
                                        <a className={`footer_icon ${project.className}`} href={project.href}>
                                            {project.text}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="footer_links_social">
                        <ul>
                            {socials.map((social) => (
                                <li key={social.href}>
                                    <a className={social.className} href={social.href} aria-label={social.label}></a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="footer_info">
                    <ul className="footer_info_links">
                        {infoLinks.map((link) => (
                            <li key={link.text}>
                                <a href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                    <p>
                        © CD PROJEKT RED S.A., 2026. Все права сохранены. CD PROJEKT RED, логотип CD PROJEKT RED, «Ведьмак» и логотип «Ведьмак»
                        являются товарными знаками и/или зарегистрированными товарными знаками CD PROJEKT RED S.A. в США и других странах.
                        Действие игры «Ведьмак» происходит во вселенной, созданной Анджеем Сапковским в серии книг.
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
