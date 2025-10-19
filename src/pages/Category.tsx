import { useParams, Link, useNavigate } from 'react-router-dom';
import { locations, isOpenNow } from '@/data/locations';
import { microwaveLocations } from '@/data/microwaveLocations';
import { convenienceStores } from '@/data/convenienceStores';
import { LocationCard } from '@/components/LocationCard';
import { ConvenienceStoreCard } from '@/components/ConvenienceStoreCard';
import { Button } from '@/components/ui/button';
import {
  Filter,
  X,
  Calendar,
  MapPin,
  Clock,
  Search,
  TrendingUp,
  Truck,
  ExternalLink,
  DollarSign,
  CalendarDays,
  ArrowLeft,
  Utensils,
  Coffee,
  ShoppingBag,
  ChevronDown,
  ChevronUp,
  Zap,
} from 'lucide-react';
import React, { useState, useMemo } from 'react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { CampusMapWidget } from '@/components/CampusMapWidget';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import foodaIcon from '@/assets/apps/fooda-icon.png';
import {
  mockFoodTruckVendors,
  mockFoodTruckEvents,
  isVendorOpenNow,
  getTodaysEventsByLocation,
  CURRENT_TIME,
} from '@/data/mockFoodTruckData';
import { vendingVendors, vendingMapInfo } from '@/data/vendingMachines';
import { format, addDays, isSameDay } from 'date-fns';

export default function Category() {
  const { category } = useParams();
  const navigate = useNavigate();

  // Scroll to top on category change
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [category]);
  const [priceFilter, setPriceFilter] = useState<string[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [subcategoryFilter, setSubcategoryFilter] = useState<string>('all');
  const [cuisineFilter, setCuisineFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDate, setSelectedDate] = useState<Date>(CURRENT_TIME);
  const [activeTab, setActiveTab] = useState('today');
  const [filtersOpen, setFiltersOpen] = useState(false);

  const categoryName =
    category?.replace(/-/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase()) || '';
  const isFoodTrucks = categoryName === 'Food Trucks';
  const isVendingMachines = categoryName === 'Vending Machines';
  const isMicrowaves = categoryName === 'Microwaves';
  const isConvenienceStores = categoryName === 'Convenience Stores';
  const isRestaurants = categoryName === 'Restaurants';
  const isCafes = categoryName === 'Cafés';

  // Generate week dates starting from today
  const weekDates = useMemo(() => {
    const dates = [];
    const today = CURRENT_TIME;
    for (let i = 0; i < 14; i++) {
      dates.push(addDays(today, i));
    }
    return dates;
  }, []);

  // Filter events by selected date
  const filteredEvents = useMemo(() => {
    const dateStr = format(selectedDate, 'yyyy-MM-dd');
    return mockFoodTruckEvents.filter((event) => event.date === dateStr);
  }, [selectedDate]);

  // Map events to vendor details with location
  const eventVendors = useMemo(() => {
    return filteredEvents
      .map((event) => {
        const vendor = mockFoodTruckVendors.find(
          (v) => v.vendor_id === event.vendor_id
        );
        if (!vendor) return null;

        const isToday = isSameDay(selectedDate, CURRENT_TIME);
        const isOpen = isToday && isVendorOpenNow(vendor.vendor_id);

        return {
          ...vendor,
          eventLocation: event.location_name,
          eventTime: `${event.start_time} - ${event.end_time}`,
          eventDate: event.date,
          isOpen,
        };
      })
      .filter(Boolean);
  }, [filteredEvents, selectedDate]);

  // Get all locations for this category
  const categoryLocations = locations.filter(
    (location) => location.category.toLowerCase() === categoryName.toLowerCase()
  );

  // Get unique subcategories
  const subcategories = useMemo(() => {
    if (isFoodTrucks) {
      return [];
    }
    const subs = new Set(
      categoryLocations.map((loc) => loc.subcategory).filter(Boolean)
    );
    return Array.from(subs) as string[];
  }, [categoryLocations, isFoodTrucks]);

  const togglePriceFilter = (range: string) => {
    setPriceFilter((prev) =>
      prev.includes(range) ? prev.filter((r) => r !== range) : [...prev, range]
    );
  };

  const clearFilters = () => {
    setPriceFilter([]);
    setStatusFilter('all');
    setSubcategoryFilter('all');
    setCuisineFilter('all');
    setSearchQuery('');
  };

  const hasActiveFilters =
    priceFilter.length > 0 ||
    statusFilter !== 'all' ||
    subcategoryFilter !== 'all' ||
    cuisineFilter !== 'all' ||
    searchQuery;

  // Vending Machines Page
  if (isVendingMachines) {
    return (
      <div className="min-h-screen bg-background">
        {/* Hero Header */}
        <div className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-background" />
          <div className="container relative px-4 py-10">
            <Link to="/#browse-categories" className="inline-flex mb-6">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <div className="space-y-6">
              <div className="space-y-3">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
                  Campus Vending Machines
                </h1>
                <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Convenient 24/7 access to fresh food, snacks, and drinks
                  across campus.
                </p>
              </div>

              {/* Campus Map Widget */}
              <div className="max-w-2xl">
                <Card className="overflow-hidden border-2 border-border hover:border-accent transition-all">
                  <div
                    className="relative h-[280px] overflow-hidden cursor-pointer"
                    onClick={() =>
                      window.open(vendingMapInfo.mapLink, '_blank')
                    }
                  >
                    <img
                      src={vendingMapInfo.image}
                      alt="Campus Vending Map"
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/60 pointer-events-none" />
                  </div>
                  <CardContent className="bg-gradient-to-b from-card/95 to-card p-4 backdrop-blur-sm border-t border-border/50">
                    <div className="flex items-start gap-3 mb-3">
                      <MapPin className="mt-0.5 h-5 w-5 text-accent flex-shrink-0" />
                      <div className="flex-1 min-w-0">
                        <p className="font-semibold text-foreground">
                          Campus Vending Locations
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Find vending machines across campus
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="default"
                      size="sm"
                      onClick={() =>
                        window.open(vendingMapInfo.mapLink, '_blank')
                      }
                      className="w-full gap-2 bg-accent hover:bg-accent/90"
                    >
                      <ExternalLink className="h-4 w-4" />
                      View Interactive Map
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        {/* Vendors Section */}
        <div className="container px-4 py-10">
          <div className="space-y-8">
            {vendingVendors.map((vendor) => (
              <Card
                key={vendor.id}
                className="overflow-hidden border-2 border-border hover:shadow-xl transition-all"
              >
                <CardContent className="p-0">
                  {/* Vendor Header */}
                  <div className="bg-gradient-to-r from-accent/10 to-primary/5 border-b border-border p-6">
                    <div className="flex items-start gap-4">
                      <img
                        src={vendor.icon}
                        alt={vendor.name}
                        className="h-20 w-20 rounded-xl object-cover border-2 border-border bg-background shadow-lg"
                      />
                      <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-2">
                          {vendor.name}
                        </h2>
                        <p className="text-muted-foreground mb-3">
                          {vendor.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {vendor.website && (
                            <Button
                              variant="outline"
                              size="sm"
                              asChild
                              className="gap-2"
                            >
                              <a
                                href={vendor.website}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-3 w-3" />
                                Visit Website
                              </a>
                            </Button>
                          )}
                          {vendor.studentDeals && (
                            <Badge variant="secondary" className="gap-2">
                              <TrendingUp className="h-3 w-3" />
                              {vendor.studentDeals}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Locations Grid */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-accent" />
                      Locations on Campus
                    </h3>
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                      {vendor.locations.map((location) => (
                        <Card
                          key={location.id}
                          className="border-border hover:border-accent transition-all"
                        >
                          <CardContent className="p-4 space-y-4">
                            <div>
                              <h4 className="font-semibold text-lg mb-2">
                                {location.name}
                              </h4>
                              <div className="space-y-2 mb-3">
                                {location.directionText && (
                                  <div className="flex items-start gap-2 text-sm">
                                    <MapPin className="h-4 w-4 text-muted-foreground mt-0.5 flex-shrink-0" />
                                    <span className="text-muted-foreground">
                                      {location.directionText}
                                    </span>
                                  </div>
                                )}
                                <div className="flex items-center gap-2 text-sm">
                                  <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                                  <span className="font-medium text-foreground">
                                    {location.hours}
                                  </span>
                                </div>
                              </div>
                            </div>

                            {/* Campus Map Preview */}
                            {location.campusMapLink && (
                              <div className="rounded-lg overflow-hidden border border-border">
                                <div
                                  className="relative h-32 cursor-pointer bg-muted"
                                  onClick={() =>
                                    window.open(
                                      location.campusMapLink,
                                      '_blank'
                                    )
                                  }
                                >
                                  <img
                                    src={vendingMapInfo.image}
                                    alt="Campus Map"
                                    className="h-full w-full object-cover"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40" />
                                  <div className="absolute bottom-2 left-2 right-2">
                                    <p className="text-xs text-white font-medium drop-shadow-lg">
                                      Campus Location
                                    </p>
                                  </div>
                                </div>
                              </div>
                            )}

                            <div className="grid gap-2">
                              {location.campusMapLink && (
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="w-full gap-2"
                                  asChild
                                >
                                  <a
                                    href={location.campusMapLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <MapPin className="h-3 w-3" />
                                    Get Directions
                                  </a>
                                </Button>
                              )}
                              <Button
                                size="sm"
                                className="w-full gap-2"
                                asChild
                              >
                                <a
                                  href={location.menuLink}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ExternalLink className="h-3 w-3" />
                                  {vendor.id === 'farmers-fridge' ||
                                  vendor.id === 'mycha'
                                    ? 'View Inventory'
                                    : 'View Menu'}
                                </a>
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Popular Items Section */}
                  {vendor.popularItems && vendor.popularItems.length > 0 && (
                    <div className="px-6 pb-6 border-t border-border pt-6">
                      <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                        <TrendingUp className="h-5 w-5 text-accent" />
                        Popular Items
                      </h3>
                      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {vendor.popularItems.map((item) => (
                          <Card
                            key={item.id}
                            className="border-border hover:border-accent transition-all overflow-hidden"
                          >
                            <CardContent className="p-4">
                              <div className="space-y-3">
                                <div>
                                  <h4 className="font-semibold text-base mb-1">
                                    {item.name}
                                  </h4>
                                  <p className="text-sm text-muted-foreground line-clamp-2">
                                    {item.description}
                                  </p>
                                </div>
                                {item.calories && (
                                  <p className="text-xs text-muted-foreground">
                                    {item.calories}
                                  </p>
                                )}
                                <div className="flex items-center justify-between pt-2 border-t border-border">
                                  <span className="text-lg font-bold text-accent">
                                    {item.price}
                                  </span>
                                  <Badge
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    Popular
                                  </Badge>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Microwaves Category
  if (isMicrowaves) {
    return (
      <div className="min-h-screen bg-background">
        <div className="border-b border-border bg-gradient-to-br from-card to-accent/5">
          <div className="container px-4 py-12">
            <Link to="/#browse-categories" className="inline-flex">
              <Button variant="ghost" size="sm" className="mb-4 gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 shadow-lg">
                <Zap className="h-10 w-10 text-accent" />
              </div>
              <div>
                <h1 className="text-5xl font-bold">Microwaves</h1>
                <p className="text-lg text-muted-foreground">
                  Heat your food at convenient locations across campus
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 py-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {microwaveLocations.map((location) => (
              <CampusMapWidget
                key={location.id}
                locationName={location.name}
                campusLocation={location.location}
                imageSrc={location.image}
                directionsLink={location.mapLink}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Convenience Stores Category
  if (isConvenienceStores) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header with Icon */}
        <div className="border-b border-border bg-gradient-to-br from-card to-accent/5">
          <div className="container px-4 py-12">
            <Link to="/#browse-categories" className="inline-flex">
              <Button variant="ghost" size="sm" className="mb-4 gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 shadow-lg">
                <ShoppingBag className="h-10 w-10 text-accent" />
              </div>
              <div>
                <h1 className="text-5xl font-bold">Convenience Stores</h1>
                <p className="text-lg text-muted-foreground mt-2">
                  Quick bites, snacks, and campus essentials
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 py-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {convenienceStores.map((store) => (
              <ConvenienceStoreCard
                key={store.id}
                name={store.name}
                image={store.image}
                mapLink={store.mapLink}
                tags={store.tags}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Regular categories (Restaurants & Cafes)
  if (!isFoodTrucks) {
    const filteredLocations = categoryLocations.filter((location) => {
      if (priceFilter.length > 0) {
        const hasMatch = priceFilter.some((range) => {
          if (range === 'low')
            return (
              location.priceRange.includes('$5') ||
              location.priceRange.includes('$8') ||
              location.priceRange.includes('$4')
            );
          if (range === 'medium')
            return (
              location.priceRange.includes('$10') ||
              location.priceRange.includes('$12') ||
              location.priceRange.includes('$15')
            );
          if (range === 'high')
            return (
              location.priceRange.includes('$20') ||
              location.priceRange.includes('$25') ||
              location.priceRange.includes('$30')
            );
          return false;
        });
        if (!hasMatch) return false;
      }
      if (statusFilter === 'open' && !isOpenNow(location.hours)) return false;
      if (statusFilter === 'closed' && isOpenNow(location.hours)) return false;
      if (
        subcategoryFilter !== 'all' &&
        location.subcategory !== subcategoryFilter
      )
        return false;
      return true;
    });

    const categoryIcon = isRestaurants ? Utensils : Coffee;
    const categoryDescription = isRestaurants
      ? 'Full-service campus dining'
      : 'Coffee, snacks, and quick bites';

    return (
      <div className="min-h-screen bg-background">
        {/* Header with Icon */}
        <div className="border-b border-border bg-gradient-to-br from-card to-accent/5">
          <div className="container px-4 py-12">
            <Link to="/#browse-categories" className="inline-flex">
              <Button variant="ghost" size="sm" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 shadow-lg">
                {isRestaurants ? (
                  <Utensils className="h-10 w-10 text-accent" />
                ) : (
                  <Coffee className="h-10 w-10 text-accent" />
                )}
              </div>
              <div>
                <h1 className="text-5xl font-bold">{categoryName}</h1>
                <p className="text-lg text-muted-foreground mt-2">
                  {isRestaurants
                    ? 'Full-service campus dining'
                    : 'Coffee, snacks, and quick bites'}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container px-4 py-8">
          {/* Collapsible Filters */}
          <Collapsible
            open={filtersOpen}
            onOpenChange={setFiltersOpen}
            className="mb-6"
          >
            <div className="flex items-center justify-between mb-4">
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="gap-2 text-muted-foreground hover:text-foreground"
                >
                  {filtersOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                  {filtersOpen ? 'Hide Filters' : 'Show Filters'}
                </Button>
              </CollapsibleTrigger>
            </div>
            <CollapsibleContent className="space-y-4">
              <div className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold">Filter Options</h3>
                  {hasActiveFilters && (
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={clearFilters}
                      className="h-8 text-xs"
                    >
                      <X className="h-3 w-3 mr-1" />
                      Clear All
                    </Button>
                  )}
                </div>

                <div className="grid gap-6 md:grid-cols-3">
                  <div>
                    <h4 className="mb-3 text-sm font-semibold">Price Range</h4>
                    <div className="flex flex-col gap-2">
                      <Button
                        variant={
                          priceFilter.includes('low') ? 'default' : 'outline'
                        }
                        size="sm"
                        onClick={() => togglePriceFilter('low')}
                        className="justify-start"
                      >
                        $ (Low)
                      </Button>
                      <Button
                        variant={
                          priceFilter.includes('medium') ? 'default' : 'outline'
                        }
                        size="sm"
                        onClick={() => togglePriceFilter('medium')}
                        className="justify-start"
                      >
                        $$ (Medium)
                      </Button>
                      <Button
                        variant={
                          priceFilter.includes('high') ? 'default' : 'outline'
                        }
                        size="sm"
                        onClick={() => togglePriceFilter('high')}
                        className="justify-start"
                      >
                        $$$ (High)
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h4 className="mb-3 text-sm font-semibold">Status</h4>
                    <div className="flex flex-col gap-2">
                      <Button
                        variant={statusFilter === 'all' ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setStatusFilter('all')}
                        className="justify-start"
                      >
                        All
                      </Button>
                      <Button
                        variant={
                          statusFilter === 'open' ? 'default' : 'outline'
                        }
                        size="sm"
                        onClick={() => setStatusFilter('open')}
                        className="justify-start"
                      >
                        Open Now
                      </Button>
                      <Button
                        variant={
                          statusFilter === 'closed' ? 'default' : 'outline'
                        }
                        size="sm"
                        onClick={() => setStatusFilter('closed')}
                        className="justify-start"
                      >
                        Closed
                      </Button>
                    </div>
                  </div>

                  {subcategories.length > 0 && (
                    <div>
                      <h4 className="mb-3 text-sm font-semibold">
                        Subcategory
                      </h4>
                      <select
                        value={subcategoryFilter}
                        onChange={(e) => setSubcategoryFilter(e.target.value)}
                        className="w-full rounded-lg border border-border bg-background p-2 text-sm"
                      >
                        <option value="all">All</option>
                        {subcategories.map((sub) => (
                          <option key={sub} value={sub}>
                            {sub}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Locations Grid */}
          {filteredLocations.length === 0 ? (
            <div className="text-center py-16 rounded-lg border border-dashed border-border bg-muted/50">
              <p className="text-muted-foreground text-lg mb-4">
                No locations match your filters
              </p>
              <Button variant="outline" onClick={clearFilters}>
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredLocations.map((location) => (
                <LocationCard key={location.id} location={location} />
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Food Trucks Page - REDESIGNED
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-accent/5 to-background py-12 border-b border-border">
        <div className="container px-4">
          <Link to="/#browse-categories" className="inline-flex">
            <Button variant="ghost" size="sm" className="mb-4 gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <div className="flex items-center gap-4 mb-6">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 shadow-lg">
              <Truck className="h-10 w-10 text-accent" />
            </div>
            <div>
              <h1 className="text-5xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                Food Trucks
              </h1>
              <p className="text-lg text-muted-foreground mt-2">
                Rolling flavors across campus
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Calendar */}
      <section className="py-8 border-b border-border bg-card/50">
        <div className="container px-4">
          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold mb-2">Weekly Schedule</h2>
              <p className="text-muted-foreground">
                Select a date to see which trucks are visiting
              </p>
            </div>
          </div>

          <div className="flex gap-3 overflow-x-auto pb-4 scrollbar-hide">
            {weekDates.map((date, index) => {
              const dateStr = format(date, 'yyyy-MM-dd');
              const eventsForDay = mockFoodTruckEvents.filter(
                (e) => e.date === dateStr
              );
              const isToday = isSameDay(date, CURRENT_TIME);
              const isSelected = isSameDay(selectedDate, date);

              return (
                <button
                  key={index}
                  onClick={() => setSelectedDate(date)}
                  className={`flex-shrink-0 flex flex-col items-center gap-2 py-5 px-8 min-w-[120px] relative rounded-xl transition-all ${
                    isToday
                      ? 'bg-card border-[3px] border-green-500 shadow-lg shadow-green-500/20'
                      : isSelected
                        ? 'bg-accent border-2 border-accent shadow-lg scale-105'
                        : 'bg-card border-2 border-border hover:border-accent/50 hover:shadow-md'
                  }`}
                >
                  <div
                    className={`text-xs font-semibold uppercase tracking-wider ${isToday ? 'text-foreground' : isSelected ? 'text-accent-foreground' : 'text-muted-foreground'}`}
                  >
                    {format(date, 'EEE')}
                  </div>
                  <div
                    className={`text-3xl font-bold ${isToday ? 'text-foreground' : isSelected ? 'text-accent-foreground' : 'text-foreground'}`}
                  >
                    {format(date, 'd')}
                  </div>
                  <div
                    className={`text-sm ${isToday ? 'text-foreground' : isSelected ? 'text-accent-foreground/80' : 'text-muted-foreground'}`}
                  >
                    {format(date, 'MMM')}
                  </div>
                  {eventsForDay.length > 0 && (
                    <div
                      className={`text-xs font-semibold px-3 py-1 rounded-full mt-1 ${
                        isToday
                          ? 'bg-green-500/20 text-white border border-green-500/50'
                          : isSelected
                            ? 'bg-accent-foreground/20 text-accent-foreground'
                            : 'bg-accent/10 text-accent'
                      }`}
                    >
                      {eventsForDay.length}{' '}
                      {eventsForDay.length === 1 ? 'truck' : 'trucks'}
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="py-12 bg-gradient-to-b from-background to-muted/20">
        <div className="container px-4">
          <div className="mb-10 flex items-center gap-3">
            <h2 className="text-3xl font-bold">
              {isSameDay(selectedDate, CURRENT_TIME)
                ? "Today's Schedule"
                : `Schedule for ${format(selectedDate, 'EEEE, MMMM d, yyyy')}`}
            </h2>
            {isSameDay(selectedDate, CURRENT_TIME) && (
              <span className="px-4 py-1.5 bg-success/10 text-success rounded-full text-sm font-bold flex items-center gap-2 border-2 border-success/30 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75"></span>
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-success"></span>
                </span>
                LIVE NOW
              </span>
            )}
          </div>

          {eventVendors.length === 0 ? (
            <div className="text-center py-20 bg-card rounded-2xl border-2 border-dashed border-border">
              <div className="max-w-md mx-auto">
                <div className="mb-6 p-6 rounded-full bg-muted/30 w-fit mx-auto">
                  <Truck className="h-16 w-16 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold mb-3">No Trucks Scheduled</h3>
                <p className="text-muted-foreground text-lg mb-6">
                  No food trucks are scheduled for this date. Check another day!
                </p>
                <Button
                  variant="outline"
                  onClick={() => setSelectedDate(CURRENT_TIME)}
                  className="gap-2"
                >
                  <Calendar className="h-4 w-4" />
                  Back to Today
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {eventVendors.map((vendor: any) => {
                if (!vendor) return null;

                return (
                  <Link
                    key={vendor.vendor_id}
                    to={`/food-truck/${vendor.vendor_id}`}
                    className="group relative overflow-hidden rounded-2xl bg-card border-2 border-border transition-all duration-300 hover:shadow-2xl hover:border-accent/50 hover:-translate-y-1 block"
                  >
                    {/* Vendor Image with Overlay Info */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={vendor.images.hero_photo}
                        alt={vendor.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Dark Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/90" />

                      {/* Status Badge - Top Right */}
                      <div className="absolute top-4 right-4 z-10">
                        <div
                          className={`inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-bold shadow-xl backdrop-blur-md ${
                            vendor.isOpen
                              ? 'bg-success/95 text-white border-2 border-white/30'
                              : 'bg-black/60 text-white border-2 border-white/20'
                          }`}
                        >
                          <span className="relative flex h-2.5 w-2.5">
                            {vendor.isOpen && (
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                            )}
                            <span
                              className={`relative inline-flex h-2.5 w-2.5 rounded-full ${vendor.isOpen ? 'bg-white' : 'bg-white/60'}`}
                            />
                          </span>
                          {vendor.isOpen ? 'OPEN NOW' : 'CLOSED'}
                        </div>
                      </div>

                      {/* Content Overlay on Image */}
                      <div className="absolute inset-0 flex flex-col justify-between p-6">
                        {/* Vendor Name & Price - Top */}
                        <div className="pt-12">
                          <h3 className="text-2xl font-bold text-white drop-shadow-2xl mb-2">
                            {vendor.name}
                          </h3>
                          <div className="flex items-center gap-3 flex-wrap">
                            <span className="text-base text-white/95 font-bold bg-black/30 backdrop-blur-sm px-3 py-1 rounded-full">
                              {vendor.price_range}
                            </span>
                            {vendor.cuisine &&
                              vendor.cuisine
                                .slice(0, 2)
                                .map((tag: string, idx: number) => (
                                  <span
                                    key={idx}
                                    className="text-xs font-bold text-white bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30"
                                  >
                                    {tag}
                                  </span>
                                ))}
                          </div>
                        </div>

                        {/* Location & Time - Bottom */}
                        <div className="space-y-2">
                          <div className="flex items-start gap-3 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/20">
                            <MapPin className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-bold text-white">
                              {vendor.eventLocation}
                            </span>
                          </div>
                          <div className="flex items-start gap-3 bg-black/60 backdrop-blur-md p-3 rounded-xl border border-white/20">
                            <Clock className="h-5 w-5 text-white mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-bold text-white">
                              {vendor.eventTime}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
