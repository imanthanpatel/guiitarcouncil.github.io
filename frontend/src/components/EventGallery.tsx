import React from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const events = [
  {
    name: "Event 1",
    photos: [
      "https://res.cloudinary.com/dopcjxehj/image/upload/v1743341632/IMG_2129_k6cst3.jpg",
      "https://res.cloudinary.com/dopcjxehj/image/upload/v1743341629/IMG_1057_iuu9ap.jpg",
      "https://res.cloudinary.com/dopcjxehj/image/upload/v1743341622/BRP_4939_am2bxi.jpg",
      "https://res.cloudinary.com/dopcjxehj/image/upload/v1743341623/IMG_20211008_160359_pb2es4.jpg",
      "https://res.cloudinary.com/dopcjxehj/image/upload/v1743341623/IMG_20211008_160359_pb2es4.jpg",
      "https://res.cloudinary.com/dopcjxehj/image/upload/v1743341622/BRP_4939_am2bxi.jpg",
      "https://res.cloudinary.com/dopcjxehj/image/upload/v1743341629/IMG_1057_iuu9ap.jpg",
      "https://res.cloudinary.com/dopcjxehj/image/upload/v1743341632/IMG_2129_k6cst3.jpg",
    ],
  },
  {
    name: "Event 2",
    photos: [
      "https://res.cloudinary.com/dopcjxehj/image/upload/v1743341616/IMG_3538_k6smvq.jpg",
      "https://res.cloudinary.com/dopcjxehj/image/upload/v1743341616/IMG_1176_vuhbuy.jpg",
      "https://res.cloudinary.com/dopcjxehj/image/upload/v1743341614/IMG-20231208-WA0063_noarrr.jpg",
      "https://res.cloudinary.com/dopcjxehj/image/upload/v1743341624/IMG_0279_unkspp.jpg",
      "https://res.cloudinary.com/dopcjxehj/image/upload/v1743341629/IMG_1057_iuu9ap.jpg",
      "https://res.cloudinary.com/dopcjxehj/image/upload/v1743341620/IMG_7622_onil5a.jpg",
      "https://res.cloudinary.com/dopcjxehj/image/upload/v1743341616/IMG_3538_k6smvq.jpg",
      "https://res.cloudinary.com/dopcjxehj/image/upload/v1743341616/IMG_1176_vuhbuy.jpg",
      "https://res.cloudinary.com/dopcjxehj/image/upload/v1743341614/IMG-20231208-WA0063_noarrr.jpg",
      "https://res.cloudinary.com/dopcjxehj/image/upload/v1743341624/IMG_0279_unkspp.jpg",
      "https://res.cloudinary.com/dopcjxehj/image/upload/v1743341629/IMG_1057_iuu9ap.jpg",
      "https://res.cloudinary.com/dopcjxehj/image/upload/v1743341620/IMG_7622_onil5a.jpg",
    ],
  },
];

const EventGallery: React.FC = () => {
  return (
    <div className="flex flex-col items-center py-12">
      {events.map((event, index) => (
        <div
          key={index}
          className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-6 mb-12 transform transition-all hover:shadow-2xl hover:scale-105"
        >
          <h2 className="text-3xl text-[#2b5482] text-center mb-6 border-b-2 pb-2">
            {event.name}
          </h2>
          <LightGallery
            speed={500}
            plugins={[lgThumbnail, lgZoom]}
            elementClassNames="flex flex-wrap justify-center gap-4"
          >
            {event.photos.map((photo, photoIndex) => (
              <a
                key={photoIndex}
                href={photo}
                className="w-48 h-48 overflow-hidden rounded-lg shadow-md transform transition-all hover:scale-110 hover:shadow-xl"
              >
                <img
                  src={photo}
                  alt={`${event.name} Photo ${photoIndex + 1}`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </a>
            ))}
          </LightGallery>
        </div>
      ))}
    </div>
  );
};

export default EventGallery;
