import { BirthdayCard } from "@/components/BirthdayCard";
import { Cake, Gift } from "lucide-react";
import birthdayCake from "@/assets/birthday-cake.jpg";

const Celebration = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-secondary/20 pt-16">
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-[var(--gradient-celebration)] bg-clip-text text-transparent mb-6">
              Birthday Cake & Treats
            </h1>
            <p className="text-xl text-muted-foreground flex items-center justify-center gap-2">
              <Cake size={24} className="text-primary" />
              Sweet treats for the sweetest person
              <Cake size={24} className="text-primary" />
            </p>
          </div>

          {/* Main Cake Section */}
          <BirthdayCard variant="celebration" className="p-12 mb-12">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-primary mb-6">Your Special Birthday Cake! 🎂</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <img 
                  src={birthdayCake} 
                  alt="Beautiful birthday cake"
                  className="w-full h-80 object-cover rounded-xl shadow-[var(--shadow-birthday)]"
                />
              </div>
              <div className="space-y-6 text-foreground">
                <p className="text-lg">
                  Look at this gorgeous cake I picked out for you! Every layer represents a year of 
                  your amazing life, and every decoration symbolizes the joy you bring to others.
                </p>
                <p className="text-lg">
                  This moment captures more than just a celebration — it holds the laughter we've shared, the memories we've made, and the unspoken bond that grows stronger every day. 🌸
                </p>
                <p className="text-lg font-medium text-primary">
                  Make a wish and blow out the candles! ✨
                </p>
              </div>
            </div>
          </BirthdayCard>

          {/* Birthday Treats */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <BirthdayCard className="p-6 text-center">
              <div className="text-4xl mb-4">🧁</div>
              <h3 className="text-xl font-bold text-primary mb-2">Cupcakes</h3>
              <p className="text-foreground">Mini celebrations in every bite</p>
            </BirthdayCard>
            
            <BirthdayCard className="p-6 text-center">
              <div className="text-4xl mb-4">🍰</div>
              <h3 className="text-xl font-bold text-primary mb-2">Slice of Heaven</h3>
              <p className="text-foreground">Each slice is made with love</p>
            </BirthdayCard>
            
            <BirthdayCard className="p-6 text-center">
              <div className="text-4xl mb-4">🍭</div>
              <h3 className="text-xl font-bold text-primary mb-2">Sweet Treats</h3>
              <p className="text-foreground">Because you deserve all the sweetness</p>
            </BirthdayCard>
          </div>

          {/* Cake Message */}
          <BirthdayCard variant="message" className="p-8">
            <div className="text-center">
              <Gift className="inline text-primary mb-4" size={40} />
              <h3 className="text-3xl font-bold text-primary mb-6">Birthday Cake Wishes</h3>
              <div className="space-y-4 text-lg text-foreground">
                <p>
                  🕯️ As you blow out each candle, may each flame carry a wish into the universe
                </p>
                <p>
                  🎂 May this cake be as sweet as all the memories we'll make this year
                </p>
                <p>
                  ✨ May every bite remind you how much you're loved and celebrated
                </p>
                <p className="text-xl font-bold text-primary pt-4">
                  Happy Birthday Nissuluuuu! Enjoy every sweet moment! 🎉
                </p>
              </div>
            </div>
          </BirthdayCard>
        </div>
      </div>
    </div>
  );
};

export default Celebration;