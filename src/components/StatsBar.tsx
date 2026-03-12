const stats = [
  { value: "16+", label: "Client Projects Delivered" },
  { value: "Unlimited", label: "Earning Potential" },
  { value: "Certified", label: "Skill & Training Development Program" },
  { value: "24/7", label: "Mentorship & Guidance" },
];

const StatsBar = () => {
  return (
    <section className="py-32 bg-muted">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">IMPACT</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural">
              Helping Students Gain Real Business Exposure
            </h3>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center md:text-left">
                <p className="text-4xl md:text-5xl font-light text-architectural mb-3">
                  {stat.value}
                </p>
                <p className="text-minimal text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
