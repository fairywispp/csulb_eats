import { useSearchParams } from "react-router-dom";
import { locations } from "@/data/locations";
import { LocationCard } from "@/components/LocationCard";
import { SearchBar } from "@/components/SearchBar";

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const filteredLocations = locations.filter((location) => {
    const searchLower = query.toLowerCase();
    return (
      location.name.toLowerCase().includes(searchLower) ||
      location.category.toLowerCase().includes(searchLower) ||
      location.tags.some((tag) => tag.toLowerCase().includes(searchLower)) ||
      location.description?.toLowerCase().includes(searchLower)
    );
  });

  return (
    <div className="min-h-screen">
      {/* Hero Search Section */}
      <div className="relative h-[300px] overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&h=400&fit=crop" 
            alt="Search" 
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
        </div>
        
        <div className="relative container px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-6">
            {query ? `Search Results for "${query}"` : "Search CSULB Dining"}
          </h1>
          <div className="w-full max-w-2xl">
            <SearchBar />
          </div>
          {query && (
            <p className="text-white/90 mt-4 text-lg drop-shadow-md">
              {filteredLocations.length} {filteredLocations.length === 1 ? "location" : "locations"} found
            </p>
          )}
        </div>
      </div>

      <div className="container px-4 py-8">

        {query && filteredLocations.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredLocations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        )}

        {!query && (
          <div className="rounded-lg border border-dashed border-border bg-muted/50 p-12 text-center">
            <p className="mb-2 text-lg font-semibold">Start Searching</p>
            <p className="text-muted-foreground">
              Enter keywords to find dining locations on campus
            </p>
          </div>
        )}

        {query && filteredLocations.length === 0 && (
          <div className="rounded-lg border border-dashed border-border bg-muted/50 p-12 text-center">
            <p className="mb-2 text-lg font-semibold">No results found</p>
            <p className="text-muted-foreground">
              Try adjusting your search terms or browse by category
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
