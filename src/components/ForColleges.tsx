import { Button } from "@/components/ui/button";

const offerings = [
  "Structured skill development training",
  "Industry mentorship",
  "Performance tracking & reporting",
  "Skill & Training Development Certification",
  "Internship pathways for top-performing students",
];

const ForColleges = () => {
  return (
    <section id="colleges" className="py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">FOR COLLEGES</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                Helping Colleges Provide Practical Industry Exposure
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                GradScale collaborates with colleges to provide structured skill development programs that support students in building professional skills alongside their academic education.
              </p>
            </div>

            <div className="space-y-8">
              <h4 className="text-minimal text-muted-foreground mb-6">WHAT WE PROVIDE</h4>
              <div className="space-y-6">
                {offerings.map((item) => (
                  <div key={item} className="border-l-2 border-foreground pl-6">
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>

              <div className="pt-8">
                <Button size="lg" className="text-white">
                  DOWNLOAD COLLEGE COLLABORATION PROPOSAL
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForColleges;
