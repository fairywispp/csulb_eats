import { SearchBar } from "@/components/SearchBar";
import { OpenNowCarousel } from "@/components/OpenNowCarousel";
import { CategoryGrid } from "@/components/CategoryGrid";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export default function Home() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash === "#browse-categories") {
      setTimeout(() => {
        const el = document.getElementById("browse-categories");
        el?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  }, [location]);
  
  return (
    <div className="min-h-screen">
      {/* Hero Section with Image Overlay */}
      <section className="relative h-[600px] md:h-[700px] overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1600&h=900&fit=crop" 
            alt="Campus dining" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>

        {/* Content Overlay */}
        <div className="relative container px-4 h-full flex flex-col justify-center items-center text-center gap-10">
          {/* Motto/Tagline */}
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl drop-shadow-lg">
              Everything You Need to Eat on Campus
            </h1>
            <p className="text-lg text-white/90 md:text-xl max-w-2xl mx-auto drop-shadow-md">
              From food trucks to dining halls, find your next meal in seconds
            </p>
          </div>

          {/* Search Bar Below Text */}
          <div className="w-full max-w-2xl">
            <SearchBar placeholder="Search dining locations, cuisine, or food items..." />
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-20 bg-gradient-to-br from-accent/5 via-primary/5 to-accent/5 border-y border-border/30">
        <div className="container px-4">
          <div className="text-center space-y-10 max-w-5xl mx-auto">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-accent/80 text-white rounded-full text-sm font-bold shadow-lg">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
                </span>
                Coming Soon
              </div>
              <h3 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                New Flavors Rolling In
              </h3>
              <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
                More delicious options arriving soon to satisfy your cravings
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-accent transition-all duration-300 shadow-card hover:shadow-elevated p-8 hover:-translate-y-1">
                <div className="text-center space-y-4">
                  <div className="text-6xl mb-2">🥖</div>
                  <h4 className="font-bold text-xl">Subway Kitchen Trailer</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Fresh subs made your way</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-accent transition-all duration-300 shadow-card hover:shadow-elevated p-8 hover:-translate-y-1">
                <div className="text-center space-y-4">
                  <div className="text-6xl mb-2">☕</div>
                  <h4 className="font-bold text-xl">Coastal Coffee</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Premium brews & pastries</p>
                </div>
              </div>
              <div className="group relative overflow-hidden rounded-3xl bg-card border border-border hover:border-accent transition-all duration-300 shadow-card hover:shadow-elevated p-8 hover:-translate-y-1">
                <div className="text-center space-y-4">
                  <div className="text-6xl mb-2">🍵</div>
                  <h4 className="font-bold text-xl">Coffee Bean & Tea Leaf</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">Artisan coffee & teas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Categories Section */}
      <section id="browse-categories" className="py-12">
        <div className="container px-4">
          <h2 className="mb-6 text-2xl font-bold">Browse by Category</h2>
          <CategoryGrid />
        </div>
      </section>

      {/* Student Deals Section */}
      <section className="py-12">
        <div className="container px-4">
          <div className="mb-6">
            <h2 className="text-2xl font-bold">Student Deals</h2>
            <p className="text-muted-foreground">Exclusive discounts for students</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {/* Fooda */}
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-accent/10 to-accent/5 border border-border shadow-card transition-smooth hover:shadow-elevated">
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg overflow-hidden">
                    <svg viewBox="0 0 100 100" className="h-12 w-12">
                      <text x="50" y="70" fontSize="60" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="system-ui, -apple-system, sans-serif">f</text>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Fooda</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Rotating popup restaurants every weekday. Check today's vendor!
                </p>
                <Button variant="default" size="sm" className="w-full gap-2" asChild>
                  <a href="https://www.fooda.com" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </div>
            </div>

            {/* GrubHub */}
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-border shadow-card transition-smooth hover:shadow-elevated">
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="h-16 w-16 rounded-lg bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center shadow-lg overflow-hidden">
                    <svg viewBox="0 0 100 100" className="h-10 w-10">
                      <text x="15" y="55" fontSize="35" fontWeight="bold" fill="white" fontFamily="system-ui, -apple-system, sans-serif">GH</text>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">GrubHub</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Student deals and campus delivery. Order food from your favorite restaurants!
                </p>
                <Button variant="default" size="sm" className="w-full gap-2" asChild>
                  <a href="https://www.grubhub.com" target="_blank" rel="noopener noreferrer">
                    Learn More
                  </a>
                </Button>
              </div>
            </div>

            {/* Outpost Grill Student Deal */}
            <div className="group relative overflow-hidden rounded-lg bg-gradient-to-br from-success/10 to-success/5 border border-border shadow-card transition-smooth hover:shadow-elevated">
              <div className="p-6">
                <div className="flex items-start gap-4 mb-4">
                  {/* ID Card Icon */}
                  <div className="h-16 w-24 rounded-lg bg-card flex items-center justify-center border-2 border-border shadow-lg overflow-hidden">
                    <svg viewBox="0 0 160 100" className="h-full w-full">
                      <rect x="4" y="4" width="152" height="92" rx="10" fill="currentColor" className="text-muted/30" />
                      <circle cx="40" cy="50" r="18" fill="currentColor" className="text-muted/60" />
                      <rect x="70" y="30" width="70" height="10" rx="4" fill="currentColor" className="text-muted/60" />
                      <rect x="70" y="48" width="60" height="10" rx="4" fill="currentColor" className="text-muted/40" />
                      <rect x="70" y="66" width="50" height="10" rx="4" fill="currentColor" className="text-muted/40" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Student Tax Discount for Outpost</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Show your student ID for tax off on all purchases
                </p>
                <Button variant="default" size="sm" className="w-full gap-2" asChild>
                  <Link to="/restaurant/outpost-grill">
                    View Outpost Grill
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Campus Resources Section */}
      <section className="py-12 bg-muted/50">
        <div className="container px-4">
          <Link
            to="/resources"
            className="group block relative overflow-hidden rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 p-8 shadow-card transition-smooth hover:shadow-elevated"
          >
            <div className="relative z-10">
              <h3 className="mb-2 text-xl font-bold">Campus Resources</h3>
              <p className="mb-4 text-muted-foreground">
                Find pantries, microwaves, and other helpful locations
              </p>
              <Button variant="outline">Explore Resources</Button>
            </div>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container px-4">
          <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
            <p className="text-sm text-muted-foreground">
              © 2025 CsulbEats. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link to="/resources" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                Resources
              </Link>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-smooth">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
