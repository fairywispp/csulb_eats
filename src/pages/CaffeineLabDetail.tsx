import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, MapPin, ExternalLink, Coffee, BookOpen, Users } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent } from "@/components/ui/card";
import caffeineLabHero from "@/assets/restaurants/caffeine-lab-hero.jpg";

const photoSections = [
  {
    id: "coffee",
    title: "Coffee & Drinks",
    icon: Coffee,
    description: "Premium coffee, specialty drinks, and energy boosters",
    photos: [
      { url: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop", caption: "Specialty Coffee" },
      { url: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=800&h=600&fit=crop", caption: "Energy Drinks" },
      { url: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&h=600&fit=crop", caption: "Iced Beverages" },
    ]
  },
  {
    id: "store",
    title: "Convenience Store",
    icon: Users,
    description: "Snacks, drinks, and campus essentials",
    photos: [
      { url: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&h=600&fit=crop", caption: "Quick Snacks" },
      { url: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=800&h=600&fit=crop", caption: "Drinks & More" },
      { url: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?w=800&h=600&fit=crop", caption: "Grab & Go" },
    ]
  },
  {
    id: "study",
    title: "Study Space",
    icon: BookOpen,
    description: "Perfect spot for studying or group work",
    photos: [
      { url: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=800&h=600&fit=crop", caption: "Study Tables" },
      { url: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop", caption: "Comfortable Seating" },
      { url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop", caption: "Group Study Areas" },
    ]
  }
];

const hours = {
  Mon: "8:00 AM - 8:00 PM",
  Tue: "8:00 AM - 8:00 PM",
  Wed: "8:00 AM - 8:00 PM",
  Thu: "8:00 AM - 8:00 PM",
  Fri: "8:00 AM - 2:00 PM",
  Sat: "Closed",
  Sun: "1:00 PM - 6:00 PM",
};

const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

export default function CaffeineLabDetail() {
  const campusMapLink = "https://map.concept3d.com/?id=1314#!m/420446?share";

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <img
          src={caffeineLabHero}
          alt="Caffeine Lab"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
        <div className="absolute bottom-0 left-0 right-0 pb-8">
          <div className="container px-4">
            <Link to="/category/cafés">
              <Button variant="ghost" size="sm" className="mb-4 gap-2 text-white/90 hover:text-white hover:bg-white/10">
                <ArrowLeft className="h-4 w-4" />
                Back to Cafés
              </Button>
            </Link>
            <h1 className="mb-3 text-5xl font-bold text-white">
              Caffeine Lab
            </h1>
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-accent/80 text-white border-0 text-base px-4 py-1.5">
                Coffee & Energy Drinks
              </Badge>
              <Badge className="bg-accent/80 text-white border-0 text-base px-4 py-1.5">
                $4-8
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[320px_1fr]">
          {/* Sidebar */}
          <aside className="space-y-5">
            {/* Quick Info Card */}
            <div className="rounded-xl border border-border bg-gradient-to-br from-card to-card/50 p-6 shadow-card backdrop-blur-sm">
              <h3 className="mb-5 text-xl font-bold flex items-center gap-2">
                <div className="h-1 w-1 rounded-full bg-accent" />
                Hours
              </h3>
              
              <div className="space-y-3">
                {daysOfWeek.map((day) => (
                  <div key={day} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <span className="text-sm font-semibold text-foreground">{day}</span>
                    <span className="text-sm text-muted-foreground">{hours[day as keyof typeof hours]}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <Button
                asChild
                variant="default"
                size="lg"
                className="w-full gap-2 h-11"
              >
                <a href={campusMapLink} target="_blank" rel="noopener noreferrer">
                  <MapPin className="h-4 w-4" />
                  Get Directions
                </a>
              </Button>
            </div>
          </aside>

          {/* Main Content */}
          <main className="space-y-8">
            {/* Description */}
            <section className="rounded-xl border border-border bg-gradient-to-br from-card to-card/50 p-8 shadow-card">
              <h2 className="mb-4 text-3xl font-bold flex items-center gap-3">
                <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                About
              </h2>
              <p className="text-muted-foreground leading-relaxed text-base">
                Specialty coffee and energy drinks in a modern setting. Perfect spot for studying or grabbing a quick caffeine boost between classes. We also have a convenience store with snacks, drinks, and campus essentials.
              </p>
            </section>

            {/* Photo Sections */}
            {photoSections.map((section, index) => {
              const Icon = section.icon;
              return (
                <section 
                  key={section.id} 
                  className="rounded-xl border border-border bg-gradient-to-br from-card to-card/50 p-8 shadow-card"
                >
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold flex items-center gap-3 mb-2">
                      <div className="p-2 rounded-lg bg-accent/10">
                        <Icon className="h-6 w-6 text-accent" />
                      </div>
                      {section.title}
                    </h2>
                    <p className="text-sm text-muted-foreground ml-12">{section.description}</p>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-3">
                    {section.photos.map((photo, photoIndex) => (
                      <Card 
                        key={photoIndex}
                        className="overflow-hidden border-border hover:border-accent transition-all group"
                      >
                        <CardContent className="p-0">
                          <div className="relative aspect-[4/3] overflow-hidden">
                            <img
                              src={photo.url}
                              alt={photo.caption}
                              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />
                            <div className="absolute bottom-0 left-0 right-0 p-4">
                              <p className="text-white font-semibold text-sm drop-shadow-lg">
                                {photo.caption}
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </section>
              );
            })}
          </main>
        </div>
      </div>
    </div>
  );
}
