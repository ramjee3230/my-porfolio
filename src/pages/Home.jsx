import { TypeAnimation } from 'react-type-animation';
export const Home = () => {
    return (
        <>
            <section className="featured-box" id="home">
                <div className="featured-text">
                    <div className="featured-text-card">
                        <span>Gohel Ramji</span>
                    </div>
                    <div className="featured-name">
                        <p>I'm <span className="typedText"> <TypeAnimation
                        sequence={['Gohel Ramji',2000,'Developer',2000]}
                        speed={200}
                        cursor={""}
                        repeat={Infinity} /></span></p>
                    </div>
                    <div className="featured-text-info">
                        <p> Frontend & Backend developer with a passion for creating visually stunning
                            and user-friendly websites.
                        </p>
                    </div>
                    <div className="featured-text-btn">
                        <button className="btn blue-btn">Hire Me</button>
                        <button className="btn"><a className="link" href="assets/CV/Ramji Gohel.pdf" download> Download CV <i
                            className="uil uil-file-alt"></i></a></button>
                    </div>
                    <div className="social_icons">
                        <div className="icon"><i className="uil uil-instagram"></i></div>
                        <div className="icon"><i className="uil uil-linkedin-alt"></i></div>
                        <div className="icon"><i className="uil uil-dribbble"></i></div>
                        <div className="icon"><i className="uil uil-github-alt"></i></div>
                    </div>
                </div>
                <div className="featured-image">
                    <div className="image">
                        <img src="src/assets/images/profile.png" alt="avatar" />
                    </div>
                </div>
                <div className="scroll-icon-box">
                    <a href="#about" className="scroll-btn">
                        <i className="uil uil-mouse-alt"></i>
                        <p>Scroll Down</p>
                    </a>
                </div>

            </section>
        </>
    )
}
