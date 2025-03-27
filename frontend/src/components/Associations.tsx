// src/components/Associations.tsx
import React from "react";

const img1 = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068560/as1-new_bjmxhq.png";
const img2 = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068560/startupguj_wzfm2b.png";
const img3 = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068560/as3-new_hfqwad.png";
const img4 = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068561/as4-new_pufqeo.png";
const img5 = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068561/as5-new_aoid2r.png";
const img6 = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068562/as6-new_hgdips.png";
const img7 = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068562/as7-new_gmllru.png";
const img8 = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068563/as8_rcoum6.png";
const img9 = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068563/as9_yjatkd.png";
const img10 = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068564/as10-new_rfyxw8.png";
const img11 = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068565/as11-new_yi6opd.png";
const img12 = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068556/as12-new_a0j0zl.png";
const img13 = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068557/as13-new_wdzgzz.png";
const img14 = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068556/as14-new_kkzmhk.png";
const img15 = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068557/as15-new_dfnkv7.png";
const img16 = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068557/as16-new_qwbvgg.png";
const img17 = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068558/as17-new_c5z1kq.png";
const img18 = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068558/as18-new_nhzvq0.png";
const img19 = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068558/as19-new_xry8ie.jpg";
const img20 = "https://res.cloudinary.com/dopcjxehj/image/upload/v1743068559/as20-new_vt4qfv.png";

interface Association {
  src: string;
  alt: string;
  href: string;
  width: string;
  paddingTop?: string;
  backgroundColor?: string;
}

const Associations: React.FC = () => {
  const associations: Association[] = [
    { src: img1, alt: "Indian Commissionerate", href: "https://udhyog.gujarat.gov.in/", width: "200px" },
    { src: img2, alt: "Gujarat Startup", href: "https://startup.gujarat.gov.in/", width: "210px" },
    { src: img3, alt: "Institution's Innovation Council", href: "https://iic.mic.gov.in/", width: "200px" },
    { src: img4, alt: "SSIP", href: "https://www.ssipgujarat.in/", width: "170px" },
    { src: img5, alt: "GUSEC", href: "https://gusec.edu.in/apply/", width: "210px" },
    { src: img6, alt: "GTU Innovation Council", href: "https://gtuinnovationcouncil.ac.in/", width: "210px" },
    { src: img7, alt: "Savli Technology and Business Incubator", href: "https://stbi.gujarat.gov.in/", width: "250px", paddingTop: "25px" },
    { src: img8, alt: "Gujarat Alkalies and Chemicals Limited", href: "https://gacl.com/", width: "190px", paddingTop: "30px" },
    { src: img9, alt: "Gujarat Council on Science and Technology", href: "https://gujcost.gujarat.gov.in/", width: "160px", backgroundColor: "transparent" },
    { src: img10, alt: "Gujarat CSR Authority", href: "https://gcsra.org/", width: "170px" },
    { src: img11, alt: "Department of Science and Technology (Government of Gujarat)", href: "https://dst.gujarat.gov.in/", width: "195px" },
    { src: img12, alt: "NASSCOM", href: "https://nasscom.in/", width: "190px", paddingTop: "60px" },
    { src: img13, alt: "Gujarat State Biotechnology Mission", href: "https://btm.gujarat.gov.in/", width: "160px" },
    { src: img14, alt: "Gujarat State Fertilizers & Chemicals Limited", href: "https://www.gsfclimited.com/", width: "150px" },
    { src: img15, alt: "Centre for Entrepreneurship Development - Gujarat", href: "https://ced.gujarat.gov.in/", width: "160px" },
    { src: img16, alt: "Innodesk Global", href: "https://www.innodeskglobal.com/", width: "145px" },
    { src: img17, alt: "TiE (The Indus Entrepreneurs) Vadodara", href: "https://tievadodara.com/", width: "255px", paddingTop: "30px" },
    { src: img18, alt: "Marwari Catalysts", href: "https://www.marwaricatalysts.com/", width: "200px" },
    { src: img19, alt: "Vexma Technologies Pvt. Ltd.", href: "https://vexmatech.com/", width: "150px" },
    { src: img20, alt: "Garuda Aerospace", href: "https://www.garudaaerospace.com/", width: "190px" },
  ];

  return (
    <div id="associations" className="p-[50px] text-center bg-[#f5f5f5]">
      <h2 className="text-[2.5rem] text-primary relative inline-block mb-[70px] font-['Oswald',sans-serif] before:content-[''] before:absolute before:h-[2px] before:bg-primary before:w-[100px] before:top-1/2 before:-translate-y-1/2 before:-left-[120px] after:content-[''] after:absolute after:h-[2px] after:bg-primary after:w-[100px] after:top-1/2 after:-translate-y-1/2 after:-right-[120px]">
        You're in Good Company
      </h2>
      <div className="grid grid-cols-5 gap-5 justify-items-center max-[1024px]:grid-cols-4 max-[768px]:grid-cols-3 max-[480px]:grid-cols-2">
        {associations.map((assoc, index) => (
          <a
            key={index}
            href={assoc.href}
            target="_blank"
            rel="noopener noreferrer"
            className="no-underline"
          >
            <img
              src={assoc.src}
              alt={assoc.alt}
              className="association-logo"
              style={{
                width: assoc.width,
                paddingTop: assoc.paddingTop || "0",
                backgroundColor: assoc.backgroundColor || "inherit",
              }}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Associations;