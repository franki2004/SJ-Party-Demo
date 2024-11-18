import { Link } from "react-router-dom"
import Path from "../../paths"
export default function Services() {


    return (
        <>
            <section id="services">
                <h2>Нашите услуги</h2>

                <div className="service">
                    <div className="service-video">
                        <video controls poster="static/wedding-photo.jpg">
                            <source src="static/wedding-video.mp4" type="video/mp4" />
                            Вашият браузър не поддържа видео елемент.
                        </video>
                    </div>
                    <div className="service-content">
                        <h3>Сватби</h3>
                        <p>Ние ще направим сватбеното ви тържество незабравимо с професионално DJ обслужване.</p>
                        <Link to={Path.Gallery}><div className="btn">Виж снимки от сватби</div></Link>
                    </div>
                </div>

                <div className="service reverse">
                    <div className="service-video">
                        <video controls poster="static/kids-party-photo.jpg">
                            <source src="static/kids-party-video.mp4" type="video/mp4" />
                            Вашият браузър не поддържа видео елемент.
                        </video>
                    </div>
                    <div className="service-content">
                        <h3>Детски партита</h3>
                        <p>Забавни и интерактивни партита, съобразени с възрастта на децата.</p>
                        <Link to={Path.Gallery}><div className="btn">Виж снимки от детски партита</div></Link>
                    </div>
                </div>

                <div className="service">
                    <div className="service-video">
                        <video controls poster="static/corporate-party-photo.jpg">
                            <source src="corporate-party-video.mp4" type="video/mp4" />
                            Вашият браузър не поддържа видео елемент.
                        </video>
                    </div>
                    <div className="service-content">
                        <h3>Корпоративни събития</h3>
                        <p>Предоставяме професионални DJ услуги за бизнес събития и корпоративни партита.</p>
                        <Link to={Path.Gallery}><div className="btn">Виж снимки от корпоративни партита</div></Link>
                    </div>
                </div>

                <div className="service reverse">
                    <div className="service-video">
                        <video controls poster="/static/prom-photo.jpg">
                            <source src="/static/prom-video.mp4" type="video/mp4" />
                            Вашият браузър не поддържа видео елемент.
                        </video>
                    </div>
                    <div className="service-content">
                        <h3>Абитуриентски балове</h3>
                        <p>Ние ще направим вашият бал специален с перфектна музикална селекция и добро настроение.</p>
                        <Link to={Path.Gallery}><div className="btn">Виж снимки от абитуриентски балове</div></Link>
                    </div>
                </div>

                <div className="service">
                    <div className="service-video">
                        <video controls poster="/static/birthday-photo.jpg">
                            <source src="/static/birthday-video.mp4" type="video/mp4" />
                            Вашият браузър не поддържа видео елемент.
                        </video>
                    </div>
                    <div className="service-content">
                        <h3>Рожденни дни</h3>
                        <p>Специално подбрана музика и забавления за вашия специален ден.</p>
                        <Link to={Path.Gallery}><div className="btn">Виж снимки от рождени дни</div></Link>
                    </div>
                </div>
            </section>


            <hr className="divider"></hr></>
    )
}