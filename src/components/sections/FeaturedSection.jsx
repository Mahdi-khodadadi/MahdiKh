import img1 from "../../assets/5.png";
import img2 from "../../assets/6.png";
import img3 from "../../assets/7.png";
import img4 from "../../assets/8.png";
import img5 from "../../assets/9.png";
import img6 from "../../assets/10.png";
import img7 from "../../assets/4.png";




const FeaturedSection = () => {
    const images = [img6,img1,img2,img3,img5,img7,img4];
    return (
        <div className="w-full min-h-screen flex items-center justify-center p-2 pt-14 md:p-24 md:pt-0 flex-col">
            
            <h3 className="font-bold text-[2.5rem] text-center text-white mb-8 md:mb-16">Featured Works</h3>

            <div className="grid grid-cols-4 gap-2 md:gap-6 w-full auto-rows-[260px]">
                <div className="col-span-4 row-span-1 overflow-hidden rounded-xl">
                    <img src={images[0]} className="w-full h-full object-cover" alt="img" />
                </div>
                <div className="col-span-2 row-span-1 overflow-hidden rounded-xl">
                    <img src={images[1]} className="w-full h-full object-cover" alt="img" />
                </div>
                <div className="col-span-2 row-span-2 overflow-hidden rounded-xl">
                    <img src={images[2]} className="w-full h-full object-cover" alt="img" />
                </div>
                <div className="col-span-2 row-span-2 overflow-hidden rounded-xl">
                    <img src={images[3]} className="w-full h-full object-cover" alt="img" />
                </div>
                <div className="col-span-2 row-span-1 overflow-hidden rounded-xl">
                    <img src={images[4]} className="w-full h-full object-cover" alt="img" />
                </div>
                <div className="col-span-3 row-span-1 overflow-hidden rounded-xl">
                    <img src={images[5]} className="w-full h-full object-cover" alt="img" />
                </div>
                <div className="col-span-1 row-span-1 overflow-hidden rounded-xl">
                    <img src={images[6]} className="w-full h-full object-cover" alt="img" />
                </div>
            </div>
        </div>
    );
};



export default FeaturedSection;