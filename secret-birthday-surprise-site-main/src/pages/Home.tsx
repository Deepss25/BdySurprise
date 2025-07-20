import { Link } from "react-router-dom";
import { BirthdayCard } from "@/components/BirthdayCard";
import { FloatingElement } from "@/components/FloatingElement";
import { Button } from "@/components/ui/button";
import { Heart, Gift, Sparkles, ArrowRight } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-accent/10 to-secondary/20 pt-16">
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
      <section className="relative py-20 px-4">
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

      {/* Welcome Message */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <BirthdayCard variant="celebration" className="p-12 text-center">
            <h2 className="text-4xl font-bold text-primary mb-6">
              Welcome to Your Birthday Surprise! 🎁
            </h2>
            <p className="text-xl text-foreground mb-8 leading-relaxed">
              I've created something special just for you! This entire website is my gift to celebrate 
              the amazing person you are. Navigate through the different sections to discover 
              beautiful photos, heartfelt messages, and all the love I wanted to share with you 
              on your special day.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/gallery">
                <Button className="bg-primary hover:bg-primary/90">
                  View Photos <ArrowRight className="ml-2" size={16} />
                </Button>
              </Link>
              <Link to="/messages">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Read Messages <Heart className="ml-2" size={16} />
                </Button>
              </Link>
            </div>
          </BirthdayCard>
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/gallery" className="group">
              <BirthdayCard className="p-6 text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">📸</div>
                <h3 className="text-lg font-semibold text-primary mb-2">Photo Gallery</h3>
                <p className="text-sm text-muted-foreground">Beautiful celebration images</p>
              </BirthdayCard>
            </Link>
            
            <Link to="/messages" className="group">
              <BirthdayCard className="p-6 text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">💌</div>
                <h3 className="text-lg font-semibold text-primary mb-2">Birthday Messages</h3>
                <p className="text-sm text-muted-foreground">Heartfelt words just for you</p>
              </BirthdayCard>
            </Link>
            
            <Link to="/celebration" className="group">
              <BirthdayCard className="p-6 text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">🎂</div>
                <h3 className="text-lg font-semibold text-primary mb-2">Cake & Treats</h3>
                <p className="text-sm text-muted-foreground">Sweet birthday delights</p>
              </BirthdayCard>
            </Link>
            
            <Link to="/memories" className="group">
              <BirthdayCard className="p-6 text-center hover:scale-105 transition-transform">
                <div className="text-4xl mb-4">✨</div>
                <h3 className="text-lg font-semibold text-primary mb-2">Special Memories</h3>
                <p className="text-sm text-muted-foreground">Our favorite moments</p>
              </BirthdayCard>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;