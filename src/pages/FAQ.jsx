import FAQSection from "../components/FAQSection";
import PageShell from "../components/PageShell";

const FAQ = () => {
  return (
    <PageShell
      title="FAQ"
      subtitle="Quick answers to common shipping and delivery questions."
    >
      <FAQSection />
    </PageShell>
  );
};

export default FAQ;
