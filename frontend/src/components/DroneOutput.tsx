import { Card, CardContent } from "../components/ui/card";
import { IconType } from "react-icons";
import { FaCertificate, FaChalkboardTeacher, FaBookOpen, FaUsers, FaTools } from "react-icons/fa";

interface Benefit {
  icon: IconType;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: FaCertificate,
    title: "Certification",
    description: "Certificate issued by Gujarat University, GUSEC, and IIES."
  },
  {
    icon: FaChalkboardTeacher,
    title: "Expert Training",
    description: "Learn from domain experts and industry stakeholders."
  },
  {
    icon: FaBookOpen,
    title: "Learning Resources",
    description: "Get access to valuable study materials and guides."
  },
  {
    icon: FaUsers,
    title: "Q/A Sessions",
    description: "Dedicated interactions and Q/A sessions for deeper understanding."
  },
  {
    icon: FaTools,
    title: "Hands-on Experience",
    description: "Practical exposure to real-world applications."
  }
];

export default function WorkshopBenefits() {
  return (
    <section className="py-16 bg-muted text-center">
      <h2 className="text-3xl font-bold text-secondary mb-8">Workshop Benefits</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 px-8">
        {benefits.map(({ icon: Icon, title, description }, index) => (
          <Card key={index} className="p-6 flex flex-col items-center bg-background shadow-md rounded-xl">
            <Icon className="text-primary text-5xl" /> {/* ✅ Now works correctly */}
            <CardContent className="text-center mt-4">
              <h3 className="text-lg font-semibold text-primary">{title}</h3>
              <p className="text-sm text-secondary mt-2">{description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
