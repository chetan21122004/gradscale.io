const partners = [
  "Firecoach.ai",
  "Attherate.ai",
  "RapidScan.ai",
  "TGT Gaming",
  "TribeHQ.ai",
  "Pune Reality Hub",
  "The Feast.ai",
  "Konfirmity",
  "Soulputs",
  "Guardr.ai",
  "Folwork",
];

const IndustryNetwork = () => {
  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-minimal text-muted-foreground mb-4">NETWORK</h2>
            <h3 className="text-4xl md:text-6xl font-light text-architectural mb-8">
              Our Industry Network
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              GradScale collaborates with innovative startups and growing companies to provide students exposure to real business environments and potential internship pathways.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {partners.map((name) => (
              <div
                key={name}
                className="border border-border rounded-sm px-6 py-8 flex items-center justify-center hover:bg-accent transition-colors duration-300"
              >
                <span className="text-minimal text-foreground">{name}</span>
              </div>
            ))}
          </div>

          <p className="text-xs text-muted-foreground mt-8">
            Logos represent companies within GradScale's collaboration and industry network.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IndustryNetwork;
