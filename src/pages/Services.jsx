import PageShell from "../components/PageShell";
import ServicesCarousel from "../components/ServicesCarousel";
import SectionCard from "../components/SectionCard";

const Services = () => {
  return (
    <PageShell
      title="Services"
      subtitle="Flexible courier and fulfillment solutions built for growth."
    >
      <div className="space-y-12">
        <ServicesCarousel />
        
      </div>
    </PageShell>
  );
};

export default Services;
