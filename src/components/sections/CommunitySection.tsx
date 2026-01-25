import { Heart, MessageCircle, Sparkles } from "lucide-react";

const values = [
  { icon: Heart, text: "Respect" },
  { icon: MessageCircle, text: "Understanding" },
  { icon: Sparkles, text: "Empowerment" },
];

const CommunitySection = () => {
  return (
    <section className="py-16 md:py-20 bg-secondary">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          {/* Message */}
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-medium text-foreground">
              "Built with{" "}
              <Heart className="inline w-5 h-5 text-accent fill-accent" />{" "}
              for the autism community"
            </p>
            <p className="text-muted-foreground">
              NeuroSentio was created in collaboration with autistic individuals to ensure it truly meets the needs of the community.
            </p>
          </div>

          {/* Values */}
          <div className="flex justify-center gap-8 pt-4">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.text} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    {value.text}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
