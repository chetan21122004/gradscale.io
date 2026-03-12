const skills = [
  "Communicate with businesses professionally",
  "Understand business requirements",
  "Identify opportunities in the market",
  "Build strong professional relationships",
  "Develop negotiation and communication skills",
];

const WhatWeDo = () => {
  return (
    <section className="py-32 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-20 items-start">
            <div>
              <h2 className="text-minimal text-muted-foreground mb-4">WHAT WE DO</h2>
              <h3 className="text-4xl md:text-6xl font-light text-architectural mb-12">
                A Skill Development Program Focused on Real Business Exposure
              </h3>
            </div>

            <div className="space-y-8">
              <p className="text-lg text-muted-foreground leading-relaxed">
                GradScale is designed to help students develop practical professional skills through structured training and guided exposure to real business environments.
              </p>

              <div>
                <h4 className="text-minimal text-muted-foreground mb-6">STUDENTS LEARN HOW TO</h4>
                <div className="space-y-4">
                  {skills.map((skill) => (
                    <div key={skill} className="border-l-2 border-foreground pl-6">
                      <p className="text-muted-foreground">{skill}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed pt-4 border-t border-border">
                Through this program, students gain hands-on exposure to real business interactions while being guided by experienced mentors. Top-performing students may receive opportunities to move forward into internship roles with GradScale or partner companies within our network.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
