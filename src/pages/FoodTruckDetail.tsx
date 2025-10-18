import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Clock, MapPin, ExternalLink } from 'lucide-react';
import {
  mockFoodTruckVendors,
  mockFoodTruckEvents,
  CURRENT_TIME,
} from '@/data/mockFoodTruckData';
import { format } from 'date-fns';

// Import all menu images
import nuggetGrillExpress from '@/assets/food-trucks/nuggetgrill-express.jpg';

// Detailed menu data for specific vendors
export const vendorMenus = {
  'nugget-grill-express': {
    type: 'external' as const,
    url: 'https://www.csulb.edu/beach-shops/nugget-menu',
    heroImage: nuggetGrillExpress,
  },
  'wetzels-pretzels': {
    type: 'detailed' as const,
    sections: [], // Both 'Pretzels' and 'Pretzel Dips' sections removed
  },
};

export default function FoodTruckDetail() {
  const { id } = useParams<{ id: string }>();

  const vendor = mockFoodTruckVendors.find((v) => v.vendor_id === id);
  const todayStr = format(CURRENT_TIME, 'yyyy-MM-dd');
  const todayEvent = mockFoodTruckEvents.find(
    (e) => e.vendor_id === id && e.date === todayStr
  );

  if (!vendor) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Vendor Not Found</h1>
          <Link to="/category/food-trucks">
            <Button variant="outline">Back to Food Trucks</Button>
          </Link>
        </div>
      </div>
    );
  }

  const menuData = vendorMenus[id as keyof typeof vendorMenus];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-[400px] overflow-hidden">
        <img
          src={(menuData && 'heroImage') || vendor.images.hero_photo}
          alt={vendor.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

        <div className="absolute inset-0 flex flex-col justify-between p-6 container mx-auto">
          <Link to="/category/food-trucks">
            <Button
              variant="ghost"
              size="sm"
              className="w-fit text-white hover:bg-white/20"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Food Trucks
            </Button>
          </Link>

          <div className="text-white">
            <h1 className="text-5xl font-bold mb-4">{vendor.name}</h1>
            <div className="flex flex-wrap gap-3 mb-4">
              {vendor.cuisine.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-bold border border-white/30"
                >
                  {tag}
                </span>
              ))}
            </div>
            {todayEvent && (
              <div className="flex flex-col gap-2 max-w-md">
                <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/20">
                  <MapPin className="h-5 w-5" />
                  <span className="font-bold">{todayEvent.location_name}</span>
                </div>
                <div className="flex items-center gap-3 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/20">
                  <Clock className="h-5 w-5" />
                  <span className="font-bold">
                    {todayEvent.start_time} - {todayEvent.end_time}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Menu Section */}
      <div className="container mx-auto px-4 py-12">
        {menuData?.type === 'external' && (
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">View Full Menu</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Check out the complete menu at {vendor.name}
            </p>
            <a href={menuData.url} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="gap-2">
                <ExternalLink className="h-5 w-5" />
                View Menu Online
              </Button>
            </a>
          </div>
        )}

        {menuData?.type === 'detailed' && (
          <div>
            <h2 className="text-4xl font-bold mb-10 text-center">Menu</h2>
            <div className="grid gap-12">
              {menuData.sections.map((section, idx) => (
                <div key={idx} className="space-y-6">
                  <h3 className="text-3xl font-bold border-b-2 border-accent pb-3">
                    {section.title}
                  </h3>

                  {section.images ? (
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {section.images.map((item, itemIdx) => (
                        <Card
                          key={itemIdx}
                          className="overflow-hidden hover:shadow-xl transition-shadow"
                        >
                          <div className="aspect-square overflow-hidden">
                            <img
                              src={item.src}
                              alt={item.name}
                              className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          <CardContent className="p-4">
                            <h4 className="font-bold text-lg mb-2">
                              {item.name}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {item.description}
                            </p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  ) : (
                    <div className="grid gap-6 md:grid-cols-2">
                      {section.image && (
                        <div className="rounded-xl overflow-hidden shadow-lg">
                          <img
                            src={section.image}
                            alt={section.title}
                            className="w-full h-[400px] object-cover"
                          />
                        </div>
                      )}
                      <div className="flex flex-col justify-center">
                        {section.description && (
                          <p className="text-lg text-muted-foreground mb-4">
                            {section.description}
                          </p>
                        )}
                        {section.items && (
                          <ul className="space-y-3">
                            {section.items.map((item, itemIdx) => (
                              <li
                                key={itemIdx}
                                className="flex items-center gap-3"
                              >
                                <div className="w-2 h-2 rounded-full bg-accent flex-shrink-0" />
                                <span className="text-lg">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {vendor.contact.website_url && (
              <div className="text-center mt-12 pt-12 border-t border-border">
                <a
                  href={vendor.contact.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg" className="gap-2">
                    <ExternalLink className="h-5 w-5" />
                    Visit Website for More
                  </Button>
                </a>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
