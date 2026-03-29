import BlogPreviews from "../components/BlogPreviews";
import PageShell from "../components/PageShell";

const Blog = () => {
  return (
    <PageShell
      title="Blog"
      subtitle="Insights, updates, and delivery strategies from Lionex."
    >
      <BlogPreviews />
    </PageShell>
  );
};

export default Blog;
