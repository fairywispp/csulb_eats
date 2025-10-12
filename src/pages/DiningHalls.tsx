import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CalendarIcon, X, ExternalLink, ArrowLeft } from "lucide-react";
import { format } from "date-fns";
import { allergens, menuCycles, quickLinks, MenuItem as MenuItemType } from "@/data/diningMenus";
import { cn } from "@/lib/utils";

// Placeholder images for dining halls
const hallImages: Record<string, string> = {
  Parkside: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=800",
  Hillside: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800",
  Beachside: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
};

export default function DiningHalls() {
  const [date, setDate] = useState<Date>(new Date());
  const [selectedMeal, setSelectedMeal] = useState<string>("all");
  const [selectedHall, setSelectedHall] = useState<string>("Parkside");
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [scrollY, setScrollY] = useState(0);
  const [weekPopoverOpen, setWeekPopoverOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleFilter = (allergen: string) => {
    setActiveFilters((prev) =>
      prev.includes(allergen) ? prev.filter((a) => a !== allergen) : [...prev, allergen]
    );
  };

  const clearFilters = () => setActiveFilters([]);

  const filterItems = (items: MenuItemType[]) => {
    if (activeFilters.length === 0) return items;
    return items.filter((item) => !item.allergens.some((a) => activeFilters.includes(a)));
  };

  // Get current menu data
  const dayName = format(date, "EEEE");
  
  // Find the menu cycle that contains this date
  const findMenuForDate = () => {
    // For now, we'll use a simple approach: 
    // Sep 29 week covers Sep 29 - Oct 5
    // If we add more weeks, we can enhance this logic
    for (const cycle of menuCycles) {
      if (cycle.days[dayName]) {
        return cycle;
      }
    }
    return menuCycles[0]; // fallback to first cycle
  };
  
  const currentCycle = findMenuForDate();
  const hallMenu = currentCycle.days[dayName]?.[selectedHall];

  const renderMenuSection = (sections: any[], mealType: string) => {
    return sections.map((section, idx) => {
      const filteredItems = filterItems(section.items);
      if (filteredItems.length === 0) return null;

      return (
        <div key={`${mealType}-${idx}`} className="mb-10">
          <h3 className="mb-4 text-xl font-bold uppercase tracking-wide">{section.title}</h3>
          <div className="space-y-3">
            {filteredItems.map((item, itemIdx) => (
              <div
                key={itemIdx}
                className="group relative rounded-md bg-card p-4 transition-smooth hover:bg-accent/5"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="flex-1 font-medium">{item.name}</span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.allergens.map((code) => {
                      const allergen = allergens.find((a) => a.code === code);
                      return (
                        <span
                          key={code}
                          className="flex h-6 w-6 items-center justify-center rounded-full text-xs font-bold text-white"
                          style={{ backgroundColor: allergen?.color }}
                          title={allergen?.name}
                        >
                          {code}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Parallax */}
      <div className="relative h-[40vh] overflow-hidden bg-gradient-to-br from-primary/20 via-background to-accent/10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url(${hallImages[selectedHall]})`,
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/80" />
        <div className="container relative z-10 flex h-full flex-col justify-end px-4 pb-12">
          <Link to="/#browse-categories" className="inline-flex mb-4 w-fit">
            <Button 
              variant="ghost" 
              size="sm" 
              className="gap-2 text-foreground/80 hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Dining Halls</h1>
          <p className="text-lg text-muted-foreground">
            Explore menus from Parkside, Hillside, and Beachside
          </p>
        </div>
      </div>

      <div className="container px-4 py-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Filters Sidebar */}
          <aside className="w-full lg:sticky lg:top-4 lg:h-fit lg:w-64">
            <div className="rounded-lg border border-border bg-card p-6">
              <h2 className="mb-6 text-2xl font-bold">Filters</h2>
              
              <div className="mb-6">
                <h3 className="mb-4 text-lg font-semibold">Allergies</h3>
                <p className="mb-4 text-sm text-muted-foreground">Hide Items Containing</p>
                
                {activeFilters.length > 0 && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="mb-4 w-full gap-2"
                  >
                    <X className="h-4 w-4" />
                    Clear All
                  </Button>
                )}

                <div className="space-y-2">
                  {allergens.map((allergen) => (
                    <button
                      key={allergen.code}
                      onClick={() => toggleFilter(allergen.code)}
                      className={cn(
                        "flex w-full items-center gap-3 rounded-lg p-3 text-left transition-smooth hover:bg-accent",
                        activeFilters.includes(allergen.code) && "bg-muted"
                      )}
                    >
                      <span
                        className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white"
                        style={{ backgroundColor: allergen.color }}
                      >
                        {allergen.code}
                      </span>
                      <span className="font-medium">{allergen.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Dining Hall Tabs */}
            <Tabs value={selectedHall} onValueChange={setSelectedHall} className="mb-0">
              <TabsList className="grid w-full grid-cols-3 bg-muted/50 p-1">
                <TabsTrigger 
                  value="Parkside"
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                >
                  Parkside
                </TabsTrigger>
                <TabsTrigger 
                  value="Hillside"
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                >
                  Hillside
                </TabsTrigger>
                <TabsTrigger 
                  value="Beachside"
                  className="data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                >
                  Beachside
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Dining Hall Title */}
            <div className="border-b border-border py-8">
              <h2 className="text-5xl font-bold">{selectedHall}</h2>
            </div>

            {/* Date and Meal Selectors */}
            <div className="mb-8 mt-6 flex flex-wrap items-center gap-4">
              <Popover open={weekPopoverOpen} onOpenChange={setWeekPopoverOpen}>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="lg" className="min-w-[200px] h-12 justify-start gap-2 border-2 text-base font-semibold">
                    Change Week
                    <CalendarIcon className="ml-auto h-5 w-5 text-accent" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-4" align="start">
                  <div className="space-y-2">
                    <p className="text-sm font-semibold mb-3">Select Menu Week:</p>
                    {[
                      { date: new Date(2024, 9, 6), label: "Oct 6" },
                      { date: new Date(2024, 9, 13), label: "Oct 13" },
                      { date: new Date(2024, 9, 20), label: "Oct 20" },
                      { date: new Date(2024, 9, 27), label: "Oct 27" },
                      { date: new Date(2024, 10, 3), label: "Nov 3" },
                      { date: new Date(2024, 10, 10), label: "Nov 10" },
                      { date: new Date(2024, 10, 17), label: "Nov 17" },
                      { date: new Date(2024, 11, 1), label: "Dec 1" },
                    ].map((week) => (
                      <Button
                        key={week.label}
                        variant={date.toDateString() === week.date.toDateString() ? "default" : "outline"}
                        className="w-full justify-start"
                        onClick={() => {
                          setDate(week.date);
                          setWeekPopoverOpen(false);
                        }}
                      >
                        {week.label}
                      </Button>
                    ))}
                  </div>
                </PopoverContent>
              </Popover>

              {/* Current Week Display */}
              <div className="min-w-[200px] h-12 px-4 bg-muted/50 rounded-md border-2 border-border flex items-center">
                <div>
                  <p className="text-xs text-muted-foreground leading-none mb-1">Current Date:</p>
                  <p className="font-semibold text-sm leading-none">{format(date, "MMM d, yyyy")} • {dayName}</p>
                </div>
              </div>

              <Select value={selectedMeal} onValueChange={setSelectedMeal}>
                <SelectTrigger className="min-w-[200px] h-12 border-2">
                  <SelectValue placeholder="All Menus" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Menus</SelectItem>
                  <SelectItem value="breakfast">Breakfast</SelectItem>
                  <SelectItem value="lunch">Lunch</SelectItem>
                  <SelectItem value="dinner">Dinner</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Menu Display */}
            <div className="space-y-12">
              {hallMenu ? (
                <>
                  {(selectedMeal === "all" || selectedMeal === "breakfast") && (
                    <div>
                      <h2 className="mb-6 text-3xl font-bold text-accent">Breakfast</h2>
                      {renderMenuSection(hallMenu.breakfast, "breakfast")}
                    </div>
                  )}
                  
                  {(selectedMeal === "all" || selectedMeal === "lunch") && (
                    <div>
                      <h2 className="mb-6 text-3xl font-bold text-accent">Lunch</h2>
                      {renderMenuSection(hallMenu.lunch, "lunch")}
                    </div>
                  )}
                  
                  {(selectedMeal === "all" || selectedMeal === "dinner") && (
                    <div>
                      <h2 className="mb-6 text-3xl font-bold text-accent">Dinner</h2>
                      {renderMenuSection(hallMenu.dinner, "dinner")}
                    </div>
                  )}
                </>
              ) : (
                <div className="rounded-lg border border-dashed border-border bg-muted/50 p-12 text-center">
                  <p className="text-lg text-muted-foreground">
                    No menu available for this date. Please select another date.
                  </p>
                </div>
              )}
            </div>

            {/* Quick Links */}
            <div className="mt-16">
              <h2 className="mb-6 text-2xl font-bold">Quick Links</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {quickLinks.map((link) => (
                  <Link
                    key={link.title}
                    to={link.link}
                    className="group relative overflow-hidden rounded-lg border border-border bg-card p-6 text-left transition-smooth hover:shadow-elevated"
                  >
                    <div className="mb-2 flex items-start justify-between">
                      <h3 className="text-lg font-semibold">{link.title}</h3>
                      <ExternalLink className="h-4 w-4 text-muted-foreground transition-smooth group-hover:text-accent" />
                    </div>
                    <p className="text-sm text-muted-foreground">{link.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}