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

const Gallery = () => {
  const [fullscreenImage, setFullscreenImage] = useState(null);
  const [guestPhotos, setGuestPhotos] = useState([]);

  const staticImages = [
    ellie1, ellie2, ellie3, ellie4, ellie5,
    ellie6, ellie7, ellie8, ellie9, ellie10,
    ellie11, ellie12, ellie13, ellie14, ellie15,
    ellie16, ellie17, ellie18, ellie19, ellie20,
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
      <h2 className="text-2xl md:text-3xl font-semibold mb-8">A Look Back at the Day ☀️</h2>

      <div className="max-w-4xl mx-auto">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
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
