import { BirthdayCard } from "@/components/BirthdayCard";
import { Heart, Star, Sparkles } from "lucide-react";

const Memories = () => {
  const memories = [
    {
      title: "The Day We Met",
      emoji: "✨",
      description: "I still remember how your smile instantly made me feel welcome. That was the beginning of an amazing friendship!"
    },
    {
      title: "Our Adventures",
      emoji: "🌟",
      description: "From our endless coffee dates to the quiet moments in between, every second spent with you feels like peace to the soul."
    },
    {
      title: "Your Kindness",
      emoji: "💖",
      description: "The way you always know what to say to make someone feel better. Your heart is pure gold."
    },
    {
      title: "Shared Laughter",
      emoji: "😂",
      description: "Those inside jokes that make us laugh until our stomachs hurt. No one gets my humor like you do!"
    },
    {
      title: "Support Through Everything",
      emoji: "🤝",
      description: "You've been my rock through good times and challenging ones. Thank you for always being there."
    },
    {
      title: "Dreams and Goals",
      emoji: "🎯",
      description: " let’s chase ours goals together, side by side.."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-secondary/20 pt-16">
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-[var(--gradient-celebration)] bg-clip-text text-transparent mb-6">
              Special Memories
            </h1>
            <p className="text-xl text-muted-foreground flex items-center justify-center gap-2">
              <Sparkles size={24} className="text-primary" />
              Treasured moments we've shared
              <Sparkles size={24} className="text-primary" />
            </p>
          </div>

          {/* Memories Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {memories.map((memory, index) => (
              <BirthdayCard key={index} className="p-6 hover:scale-105 transition-transform">
                <div className="text-center">
                  <div className="text-4xl mb-4">{memory.emoji}</div>
                  <h3 className="text-xl font-bold text-primary mb-4">{memory.title}</h3>
                  <p className="text-foreground leading-relaxed">{memory.description}</p>
                </div>
              </BirthdayCard>
            ))}
          </div>

          {/* Future Memories */}
          <BirthdayCard variant="celebration" className="p-12 mb-12">
            <div className="text-center">
              <Star className="inline text-primary mb-6" size={48} />
              <h2 className="text-4xl font-bold text-primary mb-8">Creating New Memories</h2>
              <div className="grid md:grid-cols-2 gap-8 text-left">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">This Year's Adventures</h3>
                  <div className="space-y-3 text-foreground">
                    <p>🎨 Try out those fun little ideas we always laugh about</p>
    <p>🌮 Discover cozy cafés and taste new dishes together</p>
    <p>🎬 Movie marathons with our favorite comfort snacks</p>
    <p>📚 Start that journal of memories and thoughts</p>
    <p>🌸 Plan a day, just us and the breeze</p>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Dreams to Chase</h3>
                  <div className="space-y-3 text-foreground">
                    <p>✈️ Go on that dream trip we've always talked about</p>
<p>🎤 Turn awkward notes into unforgettable memories</p>
<p>🏃‍♀️ Lift each other up, every step of the way</p>
<p>📸 Capture memories and turn them into our storybook</p>
<p>🎉 Cheer for each win, no matter how small</p>

                  </div>
                </div>
              </div>
            </div>
          </BirthdayCard>

          {/* Gratitude Section */}
          <BirthdayCard variant="message" className="p-8">
            <div className="text-center">
              <Heart className="inline text-primary mb-4" size={40} />
              <h3 className="text-3xl font-bold text-primary mb-6">Thank You For Being You</h3>
              <p className="text-xl text-foreground leading-relaxed mb-6">
                Every memory we've shared has shaped our friendship into something truly beautiful. 
                Thank you for being the kind of friend who makes ordinary moments extraordinary, 
                who turns simple conversations into treasured memories, and who makes life so much brighter.
              </p>
              <p className="text-lg text-primary font-semibold">
                Here's to making countless more memories together! 🥂✨
              </p>
            </div>
          </BirthdayCard>
        </div>
      </div>
    </div>
  );
};

export default Memories;