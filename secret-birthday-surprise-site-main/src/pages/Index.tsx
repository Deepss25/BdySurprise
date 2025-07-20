import { BirthdayCard } from "@/components/BirthdayCard";
import { FloatingElement } from "@/components/FloatingElement";
import { Button } from "@/components/ui/button";
import { Heart, Gift, Sparkles, Cake } from "lucide-react";
import birthdayCake from "@/assets/birthday-cake.jpg";
import birthdayDecorations from "@/assets/birthday-decorations.jpg";
import birthdayMagic from "@/assets/birthday-magic.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-secondary/20">
      {/* Floating decorative elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <FloatingElement className="absolute top-20 left-10 text-primary/30" delay="0s">
          <Sparkles size={24} />
        </FloatingElement>
        <FloatingElement className="absolute top-40 right-20 text-secondary/50" delay="1s">
          <Heart size={20} />
        </FloatingElement>
        <FloatingElement className="absolute bottom-40 left-20 text-accent/40" delay="2s">
          <Gift size={28} />
        </FloatingElement>
        <FloatingElement className="absolute top-60 right-10 text-primary/40" delay="0.5s">
          <Sparkles size={16} />
        </FloatingElement>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="animate-fade-up">
            <h1 className="text-6xl md:text-8xl font-bold bg-[var(--gradient-celebration)] bg-clip-text text-transparent mb-6">
              Happy Birthday!
            </h1>
            <p className="text-2xl md:text-3xl text-primary font-medium mb-8">
              🎉 It's Your Special Day! 🎂
            </p>
            <div className="flex justify-center gap-4 mb-12">
              <span className="text-4xl animate-bounce-soft" style={{ animationDelay: "0s" }}>🎈</span>
              <span className="text-4xl animate-bounce-soft" style={{ animationDelay: "0.2s" }}>🎁</span>
              <span className="text-4xl animate-bounce-soft" style={{ animationDelay: "0.4s" }}>🎉</span>
              <span className="text-4xl animate-bounce-soft" style={{ animationDelay: "0.6s" }}>🎂</span>
              <span className="text-4xl animate-bounce-soft" style={{ animationDelay: "0.8s" }}>✨</span>
            </div>
          </div>
        </div>
      </section>

      {/* Birthday Images Gallery */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <BirthdayCard variant="celebration" className="p-8 mb-12">
            <h2 className="text-4xl font-bold text-center mb-8 text-primary">
              <Cake className="inline mr-3" size={40} />
              Celebrating You!
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-lg">
                <img 
                  src={birthdayMagic} 
                  alt="Birthday celebration setup"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <img 
                  src={birthdayCake} 
                  alt="Beautiful birthday cake"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="group relative overflow-hidden rounded-lg">
                <img 
                  src={birthdayDecorations} 
                  alt="Birthday decorations"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </BirthdayCard>
        </div>
      </section>

      {/* Special Birthday Message */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <BirthdayCard variant="message" className="p-12">
            <div className="text-center mb-8">
              <Heart className="inline text-primary mb-4" size={48} />
              <h2 className="text-4xl font-bold text-primary mb-6">A Special Message For You</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-center">
              <p className="text-xl leading-relaxed text-foreground mb-6">
                On this wonderful day, I want you to know how incredibly special you are to me. 
                Your kindness, your laughter, and your amazing spirit bring so much joy to everyone around you.
              </p>
              
              <p className="text-xl leading-relaxed text-foreground mb-6">
                Today isn't just about celebrating another year of your life – it's about celebrating 
                all the beautiful memories we've shared and all the adventures that lie ahead. 
                You deserve all the happiness, love, and cake your heart can hold! 🎂
              </p>
              
              <p className="text-xl leading-relaxed text-foreground mb-8">
                I hope this new year of your life is filled with incredible moments, endless laughter, 
                dreams coming true, and all the love you bring to others coming back to you tenfold. 
                You're not just getting older, you're getting more amazing with each passing year!
              </p>
              
              <div className="text-2xl font-bold text-primary">
                Happy Birthday, my wonderful friend! 🎉✨
              </div>
            </div>
          </BirthdayCard>
        </div>
      </section>

      {/* Birthday Wishes */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <BirthdayCard variant="celebration" className="p-8">
            <h3 className="text-3xl font-bold text-primary mb-6">
              <Gift className="inline mr-3" size={32} />
              Birthday Wishes
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-lg">
              <div className="flex items-center justify-center p-4 bg-accent/20 rounded-lg">
                <span className="mr-3 text-2xl">🌟</span>
                May all your dreams come true
              </div>
              <div className="flex items-center justify-center p-4 bg-secondary/30 rounded-lg">
                <span className="mr-3 text-2xl">💝</span>
                Wishing you endless happiness
              </div>
              <div className="flex items-center justify-center p-4 bg-primary/10 rounded-lg">
                <span className="mr-3 text-2xl">🎈</span>
                May this year be your best yet
              </div>
              <div className="flex items-center justify-center p-4 bg-accent/30 rounded-lg">
                <span className="mr-3 text-2xl">✨</span>
                Surrounded by love always
              </div>
            </div>
          </BirthdayCard>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center">
        <div className="text-muted-foreground">
          <p className="text-lg">Made with 💖 for an amazing friend</p>
          <div className="mt-4 flex justify-center gap-2">
            <span className="animate-sparkle text-primary">✨</span>
            <span className="animate-sparkle text-secondary" style={{ animationDelay: "0.5s" }}>🎂</span>
            <span className="animate-sparkle text-accent" style={{ animationDelay: "1s" }}>🎉</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
