import { BirthdayCard } from "@/components/BirthdayCard";
import { Camera, Heart } from "lucide-react";
import birthdayCake from "@/assets/img1.jpg";
import birthdayDecorations from "@/assets/img2.jpg";
import birthdayMagic from "@/assets/img3.jpg";

const Gallery = () => {
  const photos = [
    {
      src: birthdayMagic,
      title: "Love u Nissy",
      description: "The perfect celebration setup"
    },
    {
      src: birthdayCake,
      title: "Love you Nissy",
      description: "Sweet treats for a sweet person"
    },
    {
      src: birthdayDecorations,
      title: "Love u Nissy",
      description: "Everything decorated with love"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-secondary/20 pt-16">
      <div className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-[var(--gradient-celebration)] bg-clip-text text-transparent mb-6">
              Photo Gallery
            </h1>
            <p className="text-xl text-muted-foreground flex items-center justify-center gap-2">
              <Camera size={24} className="text-primary" />
              Beautiful moments captured just for you
              <Heart size={24} className="text-primary" />
            </p>
          </div>

          {/* Main Gallery */}
          <BirthdayCard variant="celebration" className="p-8 mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              {photos.map((photo, index) => (
                <div key={index} className="group">
                  <div className="relative overflow-hidden rounded-xl shadow-[var(--shadow-soft)]">
                    <img 
                      src={photo.src} 
                      alt={photo.title}
                      className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-bold mb-2">{photo.title}</h3>
                      <p className="text-sm opacity-90">{photo.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </BirthdayCard>

          {/* Additional Photo Sections */}
          <div className="grid md:grid-cols-2 gap-8">
            <BirthdayCard className="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                🎨 Celebration Colors
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary"></div>
                  <span className="text-foreground">Black - Your favorite color!</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary"></div>
                  <span className="text-foreground">Gold - As precious as you are</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent"></div>
                  <span className="text-foreground">Cream - Soft and elegant</span>
                </div>
              </div>
            </BirthdayCard>

            <BirthdayCard className="p-8">
              <h2 className="text-2xl font-bold text-primary mb-6 text-center">
                📝 Photo Stories
              </h2>
              <div className="space-y-4 text-foreground">
                <p className="leading-relaxed">
                  Every time you smile, the universe feels warmer. This photo captures that radiant energy.
                </p>
                <p className="leading-relaxed">
                  Everything in this frame was decorated with love — just like the way you've decorated my life with care, color, and comfort.
                </p>
                <p className="leading-relaxed">
                  Some say magic is fantasy. I say it’s real — because I’ve seen it in your kindness, your love, and your friendship.
                </p>
              </div>
            </BirthdayCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;