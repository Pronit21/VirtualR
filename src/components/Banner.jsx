import Users from '../components/Users';
import Img from "../assets/img/banner-img.png";

function Banner() {
    return (
        <section className="min-h-[600px] pt-24 pb-12 text-center relative lg:pt-48 lg:pb-0 lg:text-left">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row">
                    <div className="lg:mr-12"> {/* Added margin to separate the image */}
                        <h1 className="text-3xl font-bold mb-8 lg:text-5xl lg:leading-snug">Lets explore<br />Three Dimensional Virtually</h1>
                        <p className="font-secondary mb-12 max-w-[440px] mx-auto lg:mx-0">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit amet ducimus similique mollitia qui hic quaerat dolorum minima asperiores nam.
                        </p>
                        <div className="flex items-center justify-around space-x-4 max-w-[320px] mx-auto mb-12 lg:space-x-8 lg:mx-0 lg:max-w-none lg:justify-start">
                            <button className="btn">Get it now</button>
                            <a className="border-b-2 border-transparent hover:border-white transition ease-out" href="#">Explore Device</a>
                        </div>
                        <Users />
                    </div>
                    <div>
                        <img src={Img} alt="Banner" />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
