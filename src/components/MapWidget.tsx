import { Button } from '@/components/ui/button';
import { ExternalLink, MapPin } from 'lucide-react';

interface MapWidgetProps {
  locationName: string;
  address: string;
  imageSrc?: string;
}

// 1. Read the API Key securely from the .env file
const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY;

export function MapWidget({ locationName, address, imageSrc }: MapWidgetProps) {
  const handleGetDirections = () => {
    const query = encodeURIComponent(`${locationName}, ${address}`);
    window.open(`https://www.google.com/maps/search/${query}`, '_blank');
  };

  return (
    <div className="overflow-hidden rounded-2xl bg-card shadow-elegant">
      <div className="relative h-[280px] overflow-hidden">
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={locationName}
            className="h-full w-full object-cover"
          />
        ) : (
          <iframe
            width="100%"
            height="100%"
            style={{ border: 0, filter: 'brightness(0.9) contrast(1.1)' }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            // 2. USE THE SECURE VARIABLE HERE
            src={`https://www.google.com/maps/embed/v1/place?key=${GOOGLE_API_KEY}&q=${encodeURIComponent(`${locationName}, ${address}`)}&zoom=15&maptype=roadmap`}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none" />
      </div>
      <div className="bg-gradient-to-b from-card/95 to-card p-4 backdrop-blur-sm border-t border-border/50">
        <div className="flex items-start gap-3 mb-3">
          <MapPin className="mt-0.5 h-5 w-5 text-accent flex-shrink-0" />
          <div className="flex-1 min-w-0">
            <p className="font-semibold text-foreground truncate">{locationName}</p>
            <p className="text-sm text-muted-foreground">{address}</p>
          </div>
        </div>
        <Button
          variant="default"
          size="sm"
          onClick={handleGetDirections}
          className="w-full gap-2 bg-accent hover:bg-accent/90"
        >
          <ExternalLink className="h-4 w-4" />
          Get Directions
        </Button>
      </div>
    </div>
  );
}
