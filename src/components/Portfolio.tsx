import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  { image: project1, title: "TECHNOLOGY & AI SOLUTIONS", category: "MULTIPLE PROJECTS" },
  { image: project2, title: "E-COMMERCE & LIFESTYLE BRANDS", category: "BUSINESS DEVELOPMENT" },
  { image: project3, title: "HEALTHCARE & EVENTS", category: "CLIENT ENGAGEMENT" },
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">OUR WORK</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural mb-8">
              Projects Delivered Across Multiple Industries
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              GradScale has contributed to projects across sectors including technology, e-commerce, lifestyle brands, healthcare, events, and research organizations. These projects help create learning opportunities and real-world exposure for students participating in the program.
            </p>
          </div>

          <div className="space-y-32">
            {projects.map((project, index) => (
              <div key={index} className="group">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[70vh] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="mt-8 grid md:grid-cols-3 gap-8">
                  <div>
                    <h4 className="text-2xl font-light text-architectural mb-2">
                      {project.title}
                    </h4>
                    <p className="text-minimal text-muted-foreground">
                      {project.category}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
