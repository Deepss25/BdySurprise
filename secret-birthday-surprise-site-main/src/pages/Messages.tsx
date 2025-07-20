import { BirthdayCard } from "@/components/BirthdayCard";
import { Heart, Gift, Star, Sparkles } from "lucide-react";

const Messages = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-secondary/20 pt-16">
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-[var(--gradient-celebration)] bg-clip-text text-transparent mb-6">
              Birthday Messages
            </h1>
            <p className="text-xl text-muted-foreground flex items-center justify-center gap-2">
              <Heart size={24} className="text-primary" />
              Words straight from my heart
              <Heart size={24} className="text-primary" />
            </p>
          </div>

          {/* Main Message */}
          <BirthdayCard variant="message" className="p-12 mb-12">
            <div className="text-center mb-8">
              <Heart className="inline text-primary mb-4 animate-pulse" size={48} />
              <h2 className="text-4xl font-bold text-primary mb-6">The Longest Message For You</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-center space-y-8">
              <p className="text-xl leading-relaxed text-foreground">
                My dearest friend, on this incredible day that celebrates YOU, I want you to know just how much 
                you mean to me and to everyone whose life you've touched. Your birthday isn't just a date on the 
                calendar – it's a celebration of the most amazing person I know, someone who brings light, laughter, 
                and love wherever they go.
              </p>
              
              <p className="text-xl leading-relaxed text-foreground">
                From the moment I met you, I knew there was something truly special about you. Your kindness knows 
                no bounds, your smile can brighten even the darkest days, and your heart is so full of love that 
                it overflows to everyone around you. You have this incredible ability to make people feel seen, 
                heard, and valued – and that's a rare and beautiful gift.
              </p>
              
              <p className="text-xl leading-relaxed text-foreground">
                As I think about all our memories together, I'm overwhelmed with gratitude. Thank you for being 
                the friend who listens without judgment, who celebrates my victories as if they were your own, 
                and who stands by me through every challenge. Thank you for your infectious laughter, your wise 
                advice, and your ability to find joy in the smallest moments.
              </p>
              
              <p className="text-xl leading-relaxed text-foreground">
                Today, as you blow out your candles and make a wish, I want you to know that my wish for you is 
                that this new year of your life brings you everything your heart desires and more. May you continue 
                to grow, to shine, to inspire others, and to chase your dreams fearlessly. May you be surrounded 
                by love, filled with happiness, and blessed with countless reasons to smile.
              </p>
              
              <p className="text-xl leading-relaxed text-foreground">
                You deserve all the cake, all the presents, all the celebration, and all the love in the world. 
                But most importantly, you deserve to know that you are cherished, appreciated, and loved more 
                than words can express. Happy birthday, my wonderful friend – here's to you and to many more 
                years of amazing adventures together! 🎂✨
              </p>
              
              <div className="text-2xl font-bold text-primary pt-6">
                With all my love and birthday wishes,<br />
                Your friend who adores you 💕
              </div>
            </div>
          </BirthdayCard>

          {/* Shorter Messages */}
          <div className="grid md:grid-cols-2 gap-8">
            <BirthdayCard variant="celebration" className="p-8">
              <div className="text-center">
                <Gift className="inline text-primary mb-4" size={40} />
                <h3 className="text-2xl font-bold text-primary mb-4">Special Wishes</h3>
                <div className="space-y-4 text-foreground">
                  <p className="flex items-center justify-center gap-3">
                    <Star className="text-secondary" size={20} />
                    May this year bring you endless joy
                  </p>
                  <p className="flex items-center justify-center gap-3">
                    <Star className="text-secondary" size={20} />
                    May all your dreams come true
                  </p>
                  <p className="flex items-center justify-center gap-3">
                    <Star className="text-secondary" size={20} />
                    May you be surrounded by love always
                  </p>
                  <p className="flex items-center justify-center gap-3">
                    <Star className="text-secondary" size={20} />
                    May this be your best year yet
                  </p>
                </div>
              </div>
            </BirthdayCard>

            <BirthdayCard className="p-8">
              <div className="text-center">
                <Sparkles className="inline text-primary mb-4" size={40} />
                <h3 className="text-2xl font-bold text-primary mb-4">Why You're Amazing</h3>
                <div className="space-y-3 text-foreground">
                  <p>💖 Your kindness touches everyone</p>
                  <p>🌟 Your smile lights up the room</p>
                  <p>🎈 Your laughter is contagious</p>
                  <p>✨ Your friendship is a treasure</p>
                  <p>🎉 Your spirit is unbreakable</p>
                  <p>🌈 Your heart is pure gold</p>
                </div>
              </div>
            </BirthdayCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;