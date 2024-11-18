export default function About() {
    return (
        <>
            <section id="about">
                <div className="card">
                    <div className="card-image">
                        <img src="static/svilen.jpg" alt="Свилен" />
                    </div>
                    <div className="card-content">
                        <h3>Свилен Генчев</h3>
                        <p className="personal-description">Свилен е професионален DJ с над 10 години опит в организирането на сватби,
                            детски партита и събития в
                            Благоевград. Неговата страст към музиката и умението му да анимация присъствието на гостите правят всяко
                            събитие уникално и незабравимо.</p>
                        <div className="social-icons">
                            <a href="https://www.facebook.com/svilen.genchev.14" target="_blank" className="social-icon">
                                <img src="static/facebook-logo.svg" alt="Facebook icon" />
                            </a>
                            <a href="https://www.instagram.com/djpartyboy74" target="_blank" className="social-icon">
                                <img src="static/instagram-logo.svg" alt="Instagram icon" />
                            </a>
                            <a style={{ display: "flex", alignItems: "center" }} href="tel:+359895636671" className="social-icon">
                                <img src="static/phone-solid.svg" alt="Telephone icon" />
                                <p>+359 89 5636671</p>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="card-image">
                        <img src="static/july.jpg" alt="Юли" />
                    </div>
                    <div className="card-content">
                        <h3>Юли Георгиев</h3>
                        <p className="personal-description">Юли е изключителен професионалист с дългогодишен опит в детските партита. Той
                            съчетава своята енергия и
                            креативност, за да създаде забавни и вълнуващи програми за деца, които гарантирано ще бъдат запомнени от
                            малките гости и техните родители.</p>
                        <div className="social-icons">
                            <a href="https://facebook.com" target="_blank" className="social-icon">
                                <img src="static/facebook-logo.svg" alt="Facebook icon" />
                            </a>
                            <a href="https://www.instagram.com/djpartyboy74" target="_blank" className="social-icon">
                                <img src="static/instagram-logo.svg" alt="Instagram icon" />
                            </a>
                            <a style={{ display: "flex", alignItems: "center" }} href="tel:+359895636671" className="social-icon">
                                <img src="static/phone-solid.svg" alt="Telephone icon" />
                                <p>+359 89 5636671</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section >

            <hr className="divider"></hr></>
    )
}