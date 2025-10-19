import { resources, studentDeals } from '@/data/locations';
import { ExternalLink, MapPin, Calendar, MapPinIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { MapWidget } from '@/components/MapWidget';
import { CampusMapWidget } from '@/components/CampusMapWidget';
import wellnessCenter from '@/assets/locations/wellness-center.jpg';
import bookstore from '@/assets/locations/bookstore.jpg';
import beachHut from '@/assets/locations/beach-hut.jpg';
import outpost from '@/assets/locations/outpost.jpg';
import artStore from '@/assets/locations/art-store.jpg';
import petersonHall from '@/assets/locations/peterson-hall.jpg';
import foodaIcon from '@/assets/apps/fooda-icon.png';
import grubhubIcon from '@/assets/apps/grubhub-icon.png';

const beachPantryEvents = [
  {
    id: 1,
    title: 'Mobile Pantry - College Of Business Courtyard',
    date: 'Monday, October 6 at 12:00PM PDT',
    location: 'College Of Business Courtyard',
    type: 'Mobile Pantry',
  },
  {
    id: 2,
    title: 'Mobile Pantry - Library Courtyard',
    date: 'Tuesday, October 7 at 12:00PM PDT',
    location: 'Library Courtyard',
    type: 'Mobile Pantry',
  },
  {
    id: 3,
    title: 'Mobile Pantry - Macintosh Central Quad',
    date: 'Wednesday, October 8 at 3:00PM PDT',
    location: 'Macintosh Central Quad',
    type: 'Mobile Pantry',
  },
  {
    id: 4,
    title: 'Taste of Tradition: Café de Olla & Churros',
    date: 'Wednesday, October 8 at 6:00PM PDT',
    location: 'ASI Beach Kitchen',
    type: 'Special Event',
  },
];

export default function Resources() {
  const beachPantry = resources.find((r) => r.id === 'beach-pantry');

  const appIcons: { [key: string]: string } = {
    fooda: foodaIcon,
    grubhub: grubhubIcon,
  };

  return (
    <div className="min-h-screen">
      <div className="container px-4 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold">Campus Resources</h1>
          <p className="text-muted-foreground">
            Helpful dining resources and amenities across campus
          </p>
        </div>

        {/* Featured: Beach Pantry */}
        {beachPantry && (
          <Card className="mb-12 border-primary/20 bg-gradient-to-br from-card to-accent/5">
            <CardHeader className="pb-4">
              <CardTitle className="text-2xl">{beachPantry.name}</CardTitle>
              <CardDescription className="text-base">
                {beachPantry.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <Button
                  asChild
                  className="bg-accent text-accent-foreground hover:bg-accent/90"
                >
                  <a
                    href={beachPantry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="gap-2"
                  >
                    Learn More <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* Upcoming Events */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">Upcoming Events</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {beachPantryEvents.map((event) => (
                    <div
                      key={event.id}
                      className="group relative rounded-lg border-2 border-transparent bg-card p-4 shadow-sm transition-all duration-300 hover:border-accent hover:shadow-lg hover:-translate-y-1 cursor-pointer"
                    >
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-accent/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                      <div className="relative">
                        <div className="mb-3">
                          <span className="inline-block rounded-full bg-accent text-accent-foreground px-2.5 py-1 text-xs font-medium transition-all duration-300 group-hover:shadow-md">
                            {event.type}
                          </span>
                        </div>
                        <h4 className="mb-3 line-clamp-2 font-semibold text-sm leading-tight text-foreground transition-colors duration-300">
                          {event.title}
                        </h4>
                        <div className="space-y-2 text-xs text-muted-foreground">
                          <div className="flex items-start gap-2">
                            <Calendar className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
                            <span className="line-clamp-2">{event.date}</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <MapPinIcon className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
                            <span className="line-clamp-2">
                              {event.location}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Student Deals */}
        <div className="mb-12">
          <h2 className="mb-6 text-2xl font-bold">Student Deals</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {studentDeals.map((deal) => (
              <Card
                key={deal.id}
                className="group overflow-hidden border-2 transition-all duration-300 hover:border-accent hover:shadow-lg"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-xl text-foreground">
                    {deal.name}
                  </CardTitle>
                  {appIcons[deal.id] && (
                    <div className="mt-4">
                      <img
                        src={appIcons[deal.id]}
                        alt={`${deal.name} app icon`}
                        className="h-16 w-16 object-contain"
                      />
                    </div>
                  )}
                  <CardDescription className="text-base">
                    {deal.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    variant="default"
                    size="sm"
                    asChild
                    className="bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    <a
                      href={deal.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="gap-2"
                    >
                      Learn More <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
