import { usePortfolioData } from "@/hooks/usePortfolioData";
import Header from "@/components/portfolio/Header";
import About from "@/components/portfolio/About";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Technologies from "@/components/portfolio/Technologies";
import Links from "@/components/portfolio/Links";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  const { data, loading, error } = usePortfolioData();

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-text-tertiary text-sm">Loading...</span>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="text-text-tertiary text-sm">
          Unable to load portfolio data
        </span>
      </div>
    );
  }

  return (
    <>
      <title>{data.name ? `${data.name} | ${data.role || 'Portfolio'}` : 'Portfolio'}</title>
      <meta name="description" content={data.summary || 'Developer portfolio'} />
      
      <main className="min-h-screen pb-16">
        <Header name={data.name} role={data.role} summary={data.summary} />
        <About about={data.about} />
        <Experience experience={data.experience} />
        <Projects projects={data.projects} />
        <Technologies technologies={data.technologies} />
        <Links links={data.links} />
        <Contact contact={data.contact} />
      </main>
    </>
  );
};

export default Index;
