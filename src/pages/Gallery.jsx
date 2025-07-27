import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";

// Static images 1–20
import ellie1 from "../assets/images/ellie_1.jpg";
import ellie2 from "../assets/images/ellie_2.jpg";
import ellie3 from "../assets/images/ellie_3.jpg";
import ellie4 from "../assets/images/ellie_4.jpg";
import ellie5 from "../assets/images/ellie_5.jpg";
import ellie6 from "../assets/images/ellie_6.jpg";
import ellie7 from "../assets/images/ellie_7.jpg";
import ellie8 from "../assets/images/ellie_8.jpg";
import ellie9 from "../assets/images/ellie_9.jpg";
import ellie10 from "../assets/images/ellie_10.jpg";
import ellie11 from "../assets/images/ellie_11.jpg";
import ellie12 from "../assets/images/ellie_12.jpg";
import ellie13 from "../assets/images/ellie_13.jpg";
import ellie14 from "../assets/images/ellie_14.jpg";
import ellie15 from "../assets/images/ellie_15.jpg";
import ellie16 from "../assets/images/ellie_16.jpg";
import ellie17 from "../assets/images/ellie_17.jpg";
import ellie18 from "../assets/images/ellie_18.jpg";
import ellie19 from "../assets/images/ellie_19.jpg";
import ellie20 from "../assets/images/ellie_20.jpg";
import ellie21 from "../assets/images/ellie_21.JPG";
import DSC0746 from "../assets/images/DSC_0746.JPG";
import DSC1014 from "../assets/images/DSC_1014.JPG";
import DSC1165 from "../assets/images/DSC_1165.JPG";
import DSC1214 from "../assets/images/DSC_1214.JPG";
import DSC1449 from "../assets/images/DSC_1449.JPG";
import DSC1451 from "../assets/images/DSC_1451.JPG";
import DSC1532 from "../assets/images/DSC_1532.JPG";
import IMG_1039 from "../assets/images/IMG_1039.JPG";
import IMG1419 from "../assets/images/IMG_1419.JPG";
import IMG1828 from "../assets/images/IMG_1828.JPG";
import IMG2302 from "../assets/images/IMG_2302.jpeg";
import IMG2304 from "../assets/images/IMG_2304.jpeg";
import IMG2880 from "../assets/images/IMG_2880.JPG";
import IMG3457 from "../assets/images/IMG_3457.JPG";
import IMG4825 from "../assets/images/IMG_4825.JPG";
import IMG4890 from "../assets/images/IMG_4890.JPG";
import IMG5648 from "../assets/images/IMG_5648.JPG";
import IMG5649 from "../assets/images/IMG_5649.JPG";
import IMG7793 from "../assets/images/IMG_7793.jpeg";
import IMG7863 from "../assets/images/IMG_7863.jpeg";
import IMG7873 from "../assets/images/IMG_7873.jpeg";
import IMG7880 from "../assets/images/IMG_7880.jpeg";
import IMG7970 from "../assets/images/IMG_7970.jpeg";
import IMG7971 from "../assets/images/IMG_7971.jpeg";
import IMG7991 from "../assets/images/IMG_7991.jpeg";
import IMG8008 from "../assets/images/IMG_8008.jpeg";
import IMG8238 from "../assets/images/IMG_8238.jpeg";
import IMG8239 from "../assets/images/IMG_8239.jpeg";
import IMG8383 from "../assets/images/IMG_8383.jpeg";
import IMG0093 from "../assets/images/IMG_0093.jpeg";
import IMG0552 from "../assets/images/IMG_0552.jpeg";
import IMG0645 from "../assets/images/IMG_0645.jpeg";
import IMG1338 from "../assets/images/IMG_1338.jpeg";
import IMG1342 from "../assets/images/IMG_1342.jpeg";
import IMG2050 from "../assets/images/IMG_2050.jpeg";
import IMG2113 from "../assets/images/IMG_2113.jpeg";
import IMG2114 from "../assets/images/IMG_2114.JPG";
import IMG2207 from "../assets/images/IMG_2207.jpeg";
import IMG2383 from "../assets/images/IMG_2383.jpeg";
import IMG2879 from "../assets/images/IMG_2879.JPG";
import IMG3468 from "../assets/images/IMG_3468.jpeg";
import IMG5018 from "../assets/images/IMG_5018.jpeg";
import IMG5685 from "../assets/images/IMG_5685.jpeg";
import IMG8514 from "../assets/images/IMG_8514.jpeg";
import IMG8546 from "../assets/images/IMG_8546.JPG";
import IMG8586 from "../assets/images/IMG_8586.JPG";
import IMG8980 from "../assets/images/IMG_8980.jpeg";
import IMG9051 from "../assets/images/IMG_9051.jpeg";
import IMG9080 from "../assets/images/IMG_9080.jpeg";
import IMG9137 from "../assets/images/IMG_9137.JPG";
import IMG9396 from "../assets/images/IMG_9396.jpeg";

const Gallery = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [guestPhotos, setGuestPhotos] = useState([]);

  const staticImages = [
    
    ellie1, ellie2, ellie3, ellie4, ellie5, ellie6, ellie7, ellie8, ellie9, ellie10, ellie11, ellie12, ellie13, ellie14, ellie15, ellie16, ellie17, ellie18, ellie19, ellie20,
ellie21, IMG1828, IMG1419, IMG_1039, DSC1532,
    DSC1451, DSC1449, DSC1214, DSC1165, DSC1014,
    DSC0746, IMG8383, IMG8239, IMG8238, IMG8008,
    IMG7991, IMG7971, IMG7970, IMG7880, IMG7873,
    IMG7863, IMG7793, IMG5649, IMG5648, IMG4890, 
    IMG4825, IMG3457, IMG2880, IMG2304, IMG2302,
    IMG0093, IMG0552, IMG0645, IMG1338, IMG1342,
    IMG2050, IMG2113, IMG2114, IMG2207, IMG2383,
    IMG2879, IMG3468, IMG5018, IMG5685, IMG8514,
    IMG8546, IMG8586, IMG8980, IMG9051, IMG9080,
    IMG9137, IMG9396
  ];

  useEffect(() => {
    const now = new Date();
    const eventDay = new Date("2025-10-18T00:00:00");

    if (now >= eventDay) {
      const q = query(collection(db, "guestbook"), orderBy("created", "desc"));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const photos = snapshot.docs
          .map((doc) => doc.data())
          .filter((entry) => entry.photo)
          .map((entry) => entry.photo);
        setGuestPhotos(photos);
      });
      return () => unsubscribe();
    }
  }, []);

  const allImages = [...staticImages, ...guestPhotos];

  return (
    <section id="gallery" className="bg-cream py-16 px-4 font-serif text-center relative z-10">
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">A Look Back at the Year! ☀️</h2>

      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          className="rounded-lg overflow-hidden"
        >
          {allImages.map((img, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative group">
                  <img
                    src={img}
                    alt={`Gallery image ${index + 1}`}
                    className="max-w-[700px] max-h-[500px] w-full h-auto mx-auto rounded shadow-md object-contain cursor-pointer"
                    onClick={() => setFullscreenImage(img)}
                  />
                  <a
                    href={img}
                    download={`ellie_image_${index + 1}.jpg`}
                    className="absolute bottom-4 right-4 bg-white/80 text-coffee text-xs px-3 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition"
                    onClick={(e) => e.stopPropagation()}
                  >
                    Download 📥
                  </a>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {fullscreenImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
          onClick={() => setFullscreenImage(null)}
        >
          <img
            src={fullscreenImage}
            alt="Full screen preview"
            className="max-w-[900px] max-h-[90vh] mx-auto rounded shadow-lg object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default Gallery;
