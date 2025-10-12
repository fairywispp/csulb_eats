import { Location, isOpenNow, getNextOpeningTime } from "@/data/locations";
import { Button } from "@/components/ui/button";
import { ExternalLink, Menu } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface LocationCardProps {
  location: Location;
}

export function LocationCard({ location }: LocationCardProps) {
  const isOpen = isOpenNow(location.hours);
  const openingTime = getNextOpeningTime(location.hours);


  const detailLink = (location.category === "Restaurants" || location.category === "Food Trucks")
    ? `/restaurant/${location.id}` 
    : `/location/${location.id}`;


  return (
    <div className="group relative overflow-hidden rounded-xl bg-card border-2 border-border transition-smooth hover:shadow-elevated hover:border-accent/50">
      {/* Image with Overlay - Clickable */}
      <Link to={detailLink} className="relative block aspect-[4/3] overflow-hidden">
        <img
          src={location.image}
          alt={location.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />
        
        {/* Status Badge - Top Right */}
        <div className="absolute top-4 right-4">
          <span 
            className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold shadow-lg backdrop-blur-sm ${
              isOpen 
                ? "bg-success/90 text-white border border-white/20" 
                : "bg-muted/90 text-muted-foreground border border-border/50"
            }`}
          >
            <span className={`relative flex h-2 w-2`}>
              {isOpen && (
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
              )}
              <span className={`relative inline-flex h-2 w-2 rounded-full ${isOpen ? "bg-white" : "bg-muted-foreground"}`} />
            </span>
            {isOpen ? "OPEN NOW" : "CLOSED"}
          </span>
        </div>

        {/* Title and Price - Bottom of Image */}
        <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/90 to-transparent">
          <h3 className="mb-2 text-2xl font-bold text-white drop-shadow-lg">
            {location.name}
          </h3>
          <div className="flex items-center gap-2">
            <p className="text-sm font-semibold text-white/95">
              {location.priceRange}
            </p>
            {location.tags && location.tags.length > 0 && (
              <>
                <span className="text-white/50">•</span>
                <p className="text-sm text-white/80">
                  {location.tags[0]}
                </p>
              </>
            )}
          </div>
        </div>
      </Link>

      {/* Card Content */}
      <div className="p-4 space-y-3 bg-gradient-to-b from-card to-card/95">
        {/* Tags */}
        {location.tags && location.tags.length > 1 && (
          <div className="flex flex-wrap gap-1.5">
            {location.tags.slice(1, 4).map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent border border-accent/20"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2 pt-1">
          <Button
            variant="outline"
            size="sm"
            asChild
            className="flex-1 font-semibold hover:bg-accent/10 hover:text-accent hover:border-accent"
          >
            <Link to={detailLink}>
              View Details
            </Link>
          </Button>
          {location.links.order && (
            <Button
              size="sm"
              asChild
              className="flex-1 font-semibold bg-accent hover:bg-accent/90 text-accent-foreground shadow-sm"
            >
              <a href={location.links.order} target="_blank" rel="noopener noreferrer">
                {location.id === "outpost-grill" ? "Order Ahead" : "Order Now"}
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
