import React from "react";

const ThreeDPrintingWorkshop: React.FC = () => {
  // Sample printer data - updated image paths assuming they're in the public folder
  const printers = [
    {
      name: "Prusa i3 MK3S+",
      image:
        "https://res.cloudinary.com/dopcjxehj/image/upload/v1743566690/Original-Prusa-i3MK3S-3D-Bazaar-01_cmqjf9.jpg",
      specs: {
        buildVolume: "250 x 210 x 210 mm",
        layerHeight: "0.05 - 0.35 mm",
        printSpeed: "Up to 200 mm/s",
        filament: "1.75 mm PLA, PETG, ABS",
      },
    },
    {
      name: "Creality Ender 3 V2",
      image:
        "https://res.cloudinary.com/dopcjxehj/image/upload/v1743567141/crxpro_aose5o.avif", // Assuming in public/images/
      specs: {
        buildVolume: "220 x 220 x 250 mm",
        layerHeight: "0.1 - 0.4 mm",
        printSpeed: "Up to 180 mm/s",
        filament: "1.75 mm PLA, TPU, PETG",
      },
    },
    {
      name: "Anycubic Photon Mono X",
      image:
        "https://res.cloudinary.com/dopcjxehj/image/upload/v1743567142/creality-k1-max-fast-3d-printer-300-300-300-ai-speedy-3d-printer-ultra-fast-desktop-machine-with-smart-ai-functionality-by-wol3d-product-images-orvmxndpib3-p604325565-1-202309021201_jt1qxy.jpg", // Assuming in public/images/
      specs: {
        buildVolume: "192 x 120 x 245 mm",
        layerHeight: "0.01 - 0.15 mm",
        printSpeed: "Up to 60 mm/h",
        resin: "405nm UV Resin",
      },
    },
  ];

  // Workshop features data
  const features = [
    {
      icon: "fa-chalkboard-teacher",
      color: "text-orange-500",
      title: "3-Days (10-Hrs) Live online Instructor-led Workshop",
    },
    {
      icon: "fa-certificate",
      color: "text-blue-500",
      title:
        "Certificate of completion in association with Mechanica IIT Madras",
    },
    {
      icon: "fa-laptop-code",
      color: "text-yellow-500",
      title: "Practical based Learning working of 3D Printer",
    },
    {
      icon: "fa-file-download",
      color: "text-red-500",
      title: "Key Takeaways: Lectures Recording, Training PPT & etc.",
    },
    {
      icon: "fa-drafting-compass",
      color: "text-gray-700",
      title: "Action-driven Workshop Design 3D model",
    },
    {
      icon: "fa-question-circle",
      color: "text-pink-500",
      title: "Ask Questions & Clear Doubts During LIVE workshop",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] text-white overflow-hidden">
  <div className="absolute inset-0">
    <img
      src="https://res.cloudinary.com/dopcjxehj/image/upload/v1743567873/pngtree-an-object-is-printed-on-a-3d-printer-picture-image_2693215_xsgetw.png"
      alt="3D Printing Workshop Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/50"></div> {/* Overlay for readability */}
  </div>
    
</section>

      {/* Workshop Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-4xl font mb-6 text-gray-800">
                About Our Workshop
              </h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Dive into the world of 3D printing with our hands-on workshop.
                Learn to design, print, and create your own 3D models using
                industry-leading technology.
              </p>
              <ul className="list-none space-y-3 text-gray-600">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-600 mr-3"></i>
                  Expert-led training sessions
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-600 mr-3"></i>
                  Access to professional 3D printers
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-600 mr-3"></i>
                  Project-based learning
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-blue-600 mr-3"></i>
                  All materials provided
                </li>
              </ul>
            </div>
           
          </div>
        </div>
      </section>

      {/* Workshop Features */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Workshop Features
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <i
                  className={`fas ${feature.icon} ${feature.color} text-4xl mb-4`}
                ></i>
                <p className="text-gray-700 text-lg">{feature.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Printer Showcase */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">
            Our 3D Printers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {printers.map((printer, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              >
                <div className="h-64">
                  <img
                    src={printer.image}
                    alt={printer.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/300x200?text=Image+Not+Found";
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                    {printer.name}
                  </h3>
                  <div className="space-y-3 text-gray-600">
                    <p>
                      <span className="font-medium text-gray-800">
                        Build Volume:
                      </span>{" "}
                      {printer.specs.buildVolume}
                    </p>
                    <p>
                      <span className="font-medium text-gray-800">
                        Layer Height:
                      </span>{" "}
                      {printer.specs.layerHeight}
                    </p>
                    <p>
                      <span className="font-medium text-gray-800">
                        Print Speed:
                      </span>{" "}
                      {printer.specs.printSpeed}
                    </p>
                    <p>
                      <span className="font-medium text-gray-800">
                        Material:
                      </span>{" "}
                      {printer.specs.filament || printer.specs.resin}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ThreeDPrintingWorkshop;
