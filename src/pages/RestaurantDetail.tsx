import { useParams, Link } from "react-router-dom";
import { locations, isOpenNow, getNextOpeningTime } from "@/data/locations";
import { shakeSmartMenu } from "@/data/shakeSmartMenu";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ArrowLeft, Clock, DollarSign, MapPin, Star } from "lucide-react";
import { MapWidget } from "@/components/MapWidget";
import { CampusMapWidget } from "@/components/CampusMapWidget";
import { Separator } from "@/components/ui/separator";
import { Calendar } from "lucide-react";

const foodTruckSchedule = [
  {
    vendor: "Thai Mex Cocina",
    date: "Mon Oct 06 2025",
    location: "Central Quad (LH1)",
    website: "https://thaimex-cocina.com"
  },
  {
    vendor: "Crepes Bonaparte",
    date: "Mon Oct 06 2025",
    location: "Friendship Walk (HHS1 West Lawn)",
    website: "https://www.crepesbonaparte.com"
  },
  {
    vendor: "Wetzel's Pretzel's",
    date: "Mon Oct 06 2025",
    location: "CPACE/SSPAN Lawn",
    website: "https://wetzsidepretzels.com"
  },
  {
    vendor: "Crepes Bonaparte",
    date: "Tue Oct 07 2025",
    location: "Central Quad (LH1)",
    website: "https://www.crepesbonaparte.com"
  }
];

const mockReviews = [
  {
    id: 1,
    name: "Sarah M.",
    rating: 5,
    date: "2 days ago",
    comment: "Amazing burgers! The chargrilled flavor is perfection and the ingredients are always fresh.",
    categories: ["Food", "Value"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah"
  },
  {
    id: 2,
    name: "Jake T.",
    rating: 4,
    date: "1 week ago",
    comment: "Great spot for a quick lunch between classes. The atmosphere is casual and welcoming.",
    categories: ["Vibe", "Service"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jake"
  },
  {
    id: 3,
    name: "Maria L.",
    rating: 5,
    date: "2 weeks ago",
    comment: "The daily specials are always creative and delicious. Best value on campus!",
    categories: ["Food", "Value", "Variety"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria"
  },
  {
    id: 4,
    name: "Chris P.",
    rating: 4,
    date: "3 weeks ago",
    comment: "Solid American fare with generous portions. The staff is always friendly.",
    categories: ["Service", "Vibe"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Chris"
  }
];

interface MenuItem {
  name: string;
  price: string;
  description: string;
  image?: string;
}

const outpostMenuItems: Record<string, MenuItem[]> = {
  "Breakfast Classics": [
    { name: "Pancakes", price: "$5.29", description: "Two pancakes served with whipped butter. Contains milk, soy, and wheat" },
    { name: "French Toast", price: "$6.99", description: "Two slices of double-thick white bread, served with whipped butter. Contains eggs, soy, and wheat" },
    { name: "Two Eggs w/Meat", price: "$10.79", description: "Two eggs any style, choice of meat (smoked bacon, sausage, turkey sausage, or Spam), served with hash browns and choice of toast. Contains eggs, soy, and wheat" },
    { name: "Two Eggs Breakfast", price: "$8.29", description: "Two eggs any style, hash browns and choice of toast. Contains eggs, soy, and wheat" },
    { name: "Cheddar Cheese Omelet", price: "$7.99", description: "Two egg omelet with cheddar cheese and choice of meat, served with hash browns. Contains eggs, milk, and soy" },
    { name: "Feta Cheese Omelet", price: "$7.99", description: "Two egg omelet with feta cheese, spinach, tomato, served with hash browns. Contains eggs, milk, and soy" },
  ],
  "Breakfast Sandwiches": [
    { name: "Sunrise Bagel Sandwich", price: "$7.99", description: "Over hard egg, honey Dijon mustard, tomato, cucumber & red onion, on an everything bagel. Contains eggs, wheat, soy, and sesame seeds" },
    { name: "The B.E.T. Bagel Sandwich", price: "$9.99", description: "Over hard egg, smoked bacon, cheddar cheese, tomato, sriracha mayo & hash browns, on an everything bagel. Contains eggs, milk, wheat, soy, and sesame seeds" },
    { name: "Breakfast Sandwich", price: "$7.49", description: "Scrambled egg, cheddar cheese and choice of meat on toasted bread. Contains eggs, milk, wheat, and soy" },
  ],
  "Breakfast Burritos": [
    { name: "Breakfast Burrito", price: "$10.49", description: "Two scrambled eggs, choice of meat, hash browns and cheddar cheese, wrapped in a flour tortilla with salsa. Contains eggs, milk, soy, and wheat" },
    { name: "Elbee Burrito", price: "$13.99", description: "Two scrambled eggs, smoked bacon, hash browns, cheddar cheese, avocado and chipotle sauce. Contains eggs, milk, soy, and wheat" },
    { name: "Spam & Egg Burrito", price: "$9.99", description: "Grilled spam, scrambled eggs, green onion, white rice and sriracha mayo. Contains eggs, wheat, soy, and milk" },
    { name: "Spinach and Mushroom Burrito", price: "$8.99", description: "Two scrambled eggs, hash browns, sautéed spinach and mushroom, wrapped in a flour tortilla. Contains eggs, soy, and wheat" },
  ],
  "Breakfast Bowls": [
    { name: "Breakfast Bowl", price: "$10.99", description: "Two scrambled eggs, choice of meat, hash browns and cheddar cheese, with salsa. Contains eggs, milk, soy, and wheat" },
    { name: "Spam & Egg Bowl", price: "$10.99", description: "Two scrambled eggs, grilled Spam, white rice and green onions, drizzled with sriracha mayo. Contains eggs, soy, and milk" },
    { name: "Loco Moco", price: "$9.99", description: "A sunny side egg served on a juicy charbroiled beef patty over white rice with savory onion and mushroom gravy. Contains eggs and soy" },
  ],
  "Breakfast Sides": [
    { name: "Toast", price: "$2.49", description: "Choice of wheat, sourdough, or English muffin, with butter. Contains soy and wheat" },
    { name: "Bagel with Cream Cheese", price: "$4.49", description: "Choice of plain or everything bagel. Contains milk, wheat, and sesame seeds" },
    { name: "Side of Smoked Bacon", price: "$2.99", description: "3 Slices of smoked bacon" },
    { name: "Side of Hash Brown", price: "$2.69", description: "Shredded hash brown potatoes. Contains soy" },
  ],
  "Charbroiled Burgers": [
    { name: "Cali Cheeseburger", price: "$9.49", description: "Beef patty, pepper jack cheese, chipotle dressing, jalapeños, lettuce, tomato, red onion, avocado and pickles. Contains eggs, milk, soy, and wheat" },
    { name: "Hamburger", price: "$7.89", description: "Beef patty, Thousand Island dressing, lettuce, tomato, red onion and pickles. Contains eggs, milk, soy, and wheat" },
    { name: "Turkey Burger", price: "$7.39", description: "Turkey patty, Thousand Island dressing, lettuce, tomato, red onion and pickles. Contains eggs, soy, and wheat" },
    { name: "BBQ Bacon Cheeseburger", price: "$9.79", description: "Beef patty, smoked bacon, cheddar cheese, onion ring and Sweet Baby Ray's® BBQ sauce. Contains milk, soy, and wheat" },
    { name: "Gardenburger®", price: "$7.89", description: "Gardenburger® veggie patty, Thousand Island dressing, lettuce, tomato, red onion and pickles. Contains eggs, milk, soy, and wheat" },
    { name: "Bacon Cheeseburger", price: "$9.69", description: "Beef patty, smoked bacon, cheddar cheese, Thousand Island dressing, lettuce, tomato, red onion and pickles. Contains eggs, soy, and wheat" },
    { name: "Brunch Burger", price: "$12.29", description: "Beef patty, over medium egg, hash brown patty, smoked bacon and cheddar cheese. Contains eggs, milk, soy, and wheat" },
    { name: "Hawaiian Cheeseburger", price: "$8.99", description: "Beef patty, Swiss cheese, grilled pineapple, teriyaki sauce, lettuce, tomato, red onion and pickles. Contains eggs, milk, soy, wheat, and sesame seeds" },
    { name: "Mushroom & Swiss Cheeseburger", price: "$10.49", description: "Beef patty, Swiss cheese, sautéed mushrooms and caramelized onion. Contains eggs, milk, soy, and wheat" },
  ],
  "Bowls": [
    { name: "Signature Bowl", price: "$10.49", description: "Charbroiled chicken, avocado, brown rice, black beans, lettuce, cucumber, pepper jack cheese, chipotle ranch, pico de gallo. Contains eggs, milk, and soy" },
    { name: "Chicken Pesto Bowl", price: "$8.29", description: "Charbroiled chicken, brown rice and zucchini with creamy pesto sauce. Contains eggs, milk, and soy" },
    { name: "Carnitas Bowl", price: "$9.99", description: "Carnitas, avocado, cilantro lime rice, pinto beans, pico de gallo, and cheddar cheese with corn tortilla chips. Contains milk, soy, and wheat" },
    { name: "Chicken Teriyaki Bowl", price: "$8.49", description: "Charbroiled teriyaki glazed chicken, white rice, green onion, and cabbage. Contains soy and wheat" },
    { name: "Falafel & Rice Bowl", price: "$8.49", description: "Brown rice, green chickpea falafel with tzatziki sauce, herb vinaigrette, feta cheese, lettuce, tomato, red onion and cucumber, served with pita bread. Contains milk, soy, wheat, and sesame seeds" },
    { name: "Butter Chicken Bowl", price: "$8.79", description: "Chicken breast, rice, butter sauce, served with naan bread. Contains eggs, milk, wheat, and soy" },
    { name: "Beach Bowl", price: "$6.69", description: "Roasted deli turkey, brown rice, black beans, cucumber, pico de gallo, and herb vinaigrette. Contains soy" },
  ],
  "Salads": [
    { name: "BBQ Chicken", price: "$10.99", description: "Charbroiled chicken breast, avocado, lettuce, BBQ Sauce, tomato, black beans, corn, cheddar cheese and chipotle dressing. Contains eggs, milk, and soy" },
    { name: "Sesame Chicken", price: "$10.49", description: "Charbroiled chicken breast, lettuce, shredded carrots, crispy noodles, cucumber, green onion and sesame vinaigrette dressing. Contains soy and sesame seeds" },
    { name: "Honey Crisp Chicken", price: "$12.29", description: "Crispy southern-style fried chicken, lettuce, tomato, cucumber, bacon, corn, cheddar cheese and honey Dijon dressing. Contains eggs, soy, and wheat" },
    { name: "Chicken Caesar", price: "$10.99", description: "Charbroiled chicken breast, lettuce, parmesan cheese, croutons and Caesar dressing. Contains eggs, milk, fish, and soy" },
    { name: "Buffalo Crispy Chicken", price: "$10.29", description: "Crispy southern-style fried chicken, lettuce, buffalo sauce, cucumber, shredded carrots, celery and ranch dressing. Contains eggs, milk, soy, and wheat" },
    { name: "Garden Side Salad", price: "$3.29", description: "Lettuce, tomato, cucumber and choice of dressing" },
  ],
  "Sandwiches": [
    { name: "Turkey California", price: "$8.49", description: "Roasted deli turkey, avocado, cheddar cheese, lettuce, and tomato, on grilled sourdough bread. Contains milk, soy, and wheat" },
    { name: "Honey Crisp Chicken", price: "$7.69", description: "Crispy southern-style fried chicken tenderloins, honey Dijon dressing and pickles. Contains eggs, soy​, and wheat" },
    { name: "BBQ Pulled Pork Sandwich", price: "$6.79", description: "Roasted pork carnitas, Sweet Baby Ray's® BBQ sauce and coleslaw. Contains eggs, milk, soy, and wheat" },
    { name: "Chicken Sandwich", price: "$9.29", description: "Charbroiled chicken breast, pepper jack cheese, chipotle sauce, tomato, red onion, pickles and lettuce. Contains eggs, milk, soy, and wheat" },
    { name: "Chicken Pesto Sandwich", price: "$10.29", description: "Charbroiled chicken breast, provolone cheese, creamy pesto sauce, lettuce and tomato. Contains milk, soy, and wheat" },
    { name: "BLT", price: "$7.29", description: "Smoked bacon, lettuce and tomato, with mayo, on toasted sourdough bread. Contains soy and wheat" },
    { name: "Turkey and Bacon Sandwich", price: "$8.99", description: "Roasted deli turkey, smoked bacon, mayo, lettuce & tomatoes, on toasted sourdough bread. Contains eggs, soy, and wheat" },
    { name: "Falafel Sandwich", price: "$7.99", description: "Green chickpea falafel with tzatziki sauce, herb vinaigrette, feta cheese, lettuce, tomato, red onion and cucumber. Contains milk, soy, wheat, and sesame seeds" },
    { name: "Patty Melt Sandwich", price: "$8.49", description: "Beef patty, cheddar cheese, grilled onions and Thousand Island dressing, on grilled sourdough bread. Contains eggs, milk, soy, and wheat" },
  ],
  "Grilled Cheese": [
    { name: "Grilled Cheese", price: "$5.49", description: "Cheddar & mozzarella cheese on grilled sourdough bread. Contains milk, soy, and wheat" },
  ],
  "Papa John's Pizza": [
    { name: "Cheese Pizza", price: "$6.99", description: "8\" pizza with real cheese made from mozzarella, and signature pizza sauce" },
    { name: "Pepperoni Pizza", price: "$7.29", description: "8\" pizza with premium pepperoni" },
    { name: "Pepperoni & Sausage Pizza", price: "$7.49", description: "8\" pizza with premium pepperoni and Italian sausage" },
    { name: "The Works Pizza", price: "$8.99", description: "8\" pizza with Italian sausage, Canadian bacon, mushroom, green pepper, onion, black olives & pepperoni" },
    { name: "Hawaiian BBQ Chicken Pizza", price: "$7.99", description: "8\" pizza with BBQ sauce, bacon, chicken, onion & pineapple" },
    { name: "Garden Fresh Pizza", price: "$7.79", description: "8\" pizza with mushroom, green pepper, onion, black olives & tomato" },
  ],
  "Pizza Sides": [
    { name: "PJ Wings (6 Piece)", price: "$9.79", description: "Choice of Sauce: Honey Chipotle, BBQ sauce, and Buffalo" },
    { name: "PJ Wings (8 Piece)", price: "$12.49", description: "Choice of Sauce: Honey Chipotle, BBQ sauce, and Buffalo" },
    { name: "Garlic Knotts", price: "$5.99", description: "Freshly baked dough knots topped with garlic sauce" },
    { name: "Cheese Sticks", price: "$6.49", description: "Fresh dough covered with special garlic sauce and mozzarella cheese" },
  ],
  "Appetizers & Fries": [
    { name: "Chicken Quesadilla", price: "$8.49", description: "Charbroiled chicken breast, pepper jack cheese, sour cream & salsa. Contains milk, soy, and wheat" },
    { name: "Carnitas Quesadilla", price: "$8.49", description: "Roasted pork carnitas, pepper jack cheese, sour cream & salsa. Contains milk, soy, and wheat" },
    { name: "Chicken Tenders", price: "$7.89", description: "Crispy southern-style fried chicken tenderloins. Contains wheat and soy" },
    { name: "Fries", price: "$3.09", description: "House-seasoned fries with salt, pepper & garlic. Contains soy" },
    { name: "Onion Rings", price: "$4.49", description: "Crispy beer-battered onion rings. Contains soy and wheat" },
    { name: "Spicy Cauliflower Bites", price: "$4.99", description: "Fried Cauliflower florets in spicy batter made with Aleppo pepper & cumin, served with ranch dressing. Contains milk, soy, and wheat" },
  ],
  "All Day Breakfast": [
    { name: "Breakfast Sandwich", price: "$7.49", description: "Scrambled egg, cheddar cheese and smoked bacon on toasted bread. Contains eggs, milk, wheat, and soy" },
    { name: "Breakfast Wrap", price: "$10.49", description: "Two scrambled eggs, smoked bacon, and cheddar cheese, wrapped in a flour tortilla with salsa. Contains eggs, milk, soy, and wheat" },
  ],
  "Beverages": [
    { name: "Fountain Drinks (24 oz)", price: "$3.09", description: "Coke, Sprite, Dr. Pepper, and more" },
    { name: "Fountain Drinks (32 oz)", price: "$3.29", description: "Coke, Sprite, Dr. Pepper, and more" },
    { name: "Coffee (12 oz)", price: "$3.09", description: "Proudly serving Starbucks coffee" },
    { name: "Coffee (16 oz)", price: "$3.29", description: "Proudly serving Starbucks coffee" },
    { name: "Cold-Brew® (Grande)", price: "$4.45", description: "Starbucks Cold-Brew" },
    { name: "Cafe 57 (12 oz)", price: "$3.09", description: "Specialty coffee" },
    { name: "Cafe 57 (16 oz)", price: "$3.29", description: "Specialty coffee" },
  ],
};

const shakeSmartMenuItems: Record<string, MenuItem[]> = {
  "Signature Items": [
    { name: "Build Your Own Smoothie", price: "Varies", description: "Customize your smoothie with your choice of proteins, fruits, and boosters" },
    { name: "Acai Bowl", price: "Varies", description: "Fresh acai topped with granola, banana, and your choice of toppings" },
    { name: "Protein Shake", price: "Varies", description: "High-protein shakes perfect for post-workout recovery" },
  ],
};

export default function RestaurantDetail() {
  const { id } = useParams();
  const location = locations.find((loc) => loc.id === id);

  if (!location) {
    return (
      <div className="container px-4 py-16 text-center">
        <h1 className="mb-4 text-3xl font-bold">Location Not Found</h1>
        <Link to="/">
          <Button variant="outline">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>
    );
  }

  const isOpen = isOpenNow(location.hours);
  const openingTime = getNextOpeningTime(location.hours);
  const avgRating = location.rating;
  const totalReviews = mockReviews.length;
  const isFoodTruck = location.category === "Food Trucks";

  // Select menu based on location
  const menuItems = location.id === "shake-smart"
    ? Object.fromEntries(
      shakeSmartMenu.map(category => [
        category.name,
        category.items.map(item => ({
          name: item.name,
          price: `$${item.price.toFixed(2)}`,
          description: item.description
        }))
      ])
    )
    : outpostMenuItems;

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Image */}
      <div className="relative h-[400px] w-full overflow-hidden">
        <img
          src={location.image}
          alt={location.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80" />
        <div className="absolute bottom-0 left-0 right-0 pb-8">
          <div className="container px-4">
            <Link to={`/category/${location.category.toLowerCase().replace(/\s+/g, '-')}`}>
              <Button variant="ghost" size="sm" className="mb-4 gap-2 text-white/90 hover:text-white hover:bg-white/10">
                <ArrowLeft className="h-4 w-4" />
                Back to {location.category}
              </Button>
            </Link>
            <h1 className="mb-3 text-5xl font-bold text-white">
              {location.name}
            </h1>
            <div className="flex flex-wrap items-center gap-3">
              <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold ${isOpen ? "bg-success text-white" : "bg-muted text-muted-foreground"
                }`}>
                <span className={`h-2 w-2 rounded-full ${isOpen ? "bg-white" : "bg-muted-foreground"}`} />
                {isOpen ? "Open Now" : "Closed"}
              </span>
              <div className="flex items-center gap-1 rounded-full bg-white/10 backdrop-blur-sm px-3 py-1.5">
                <Star className="h-4 w-4 fill-accent text-accent" />
                <span className="text-sm font-bold text-white">{avgRating}</span>
                <span className="text-sm text-white/70">({totalReviews})</span>
              </div>
              <span className="rounded-full bg-white/10 backdrop-blur-sm px-3 py-1.5 text-sm font-semibold text-white">
                {location.priceRange}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[300px_1fr]">
          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Quick Info Card */}
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="mb-4 text-lg font-bold">Quick Info</h3>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                    <DollarSign className="h-5 w-5 text-foreground" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">Price Range</p>
                    <p className="font-semibold">{location.priceRange}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${isOpen ? "bg-success/10" : "bg-muted"}`}>
                    <Clock className={`h-5 w-5 ${isOpen ? "text-success" : "text-muted-foreground"}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground">Status</p>
                    <p className={`font-semibold ${isOpen ? "text-success" : "text-muted-foreground"}`}>
                      {isOpen ? "Open Now" : "Closed"}
                    </p>
                  </div>
                </div>

                {!["outpost-grill", "shake-smart"].includes(location.id) && (
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted">
                      <MapPin className="h-5 w-5 text-foreground" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground">Category</p>
                      <p className="font-semibold">
                        {location.category}
                        {location.subcategory && ` • ${location.subcategory}`}
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <Separator className="my-5" />

              <div>
                <h4 className="mb-3 text-sm font-semibold">Operating Hours</h4>
                <div className="space-y-1">
                  {Object.entries(location.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between text-sm py-1">
                      <span className="text-muted-foreground">{day}</span>
                      <span className={`font-medium ${hours !== "Closed" ? "text-foreground" : "text-muted-foreground"}`}>{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-2">
              {location.links.order && (
                <Button
                  asChild
                  size="lg"
                  className="w-full gap-2 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold"
                >
                  <a href={location.links.order} target="_blank" rel="noopener noreferrer">
                    {location.id === "outpost-grill" ? "Order Ahead" : "Order Now"}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              )}
              {location.links.directions && !["outpost-grill", "shake-smart"].includes(location.id) && (
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="w-full gap-2"
                >
                  <a href={location.links.directions} target="_blank" rel="noopener noreferrer">
                    <MapPin className="h-4 w-4" />
                    Get Directions
                  </a>
                </Button>
              )}
            </div>

            {/* Map Widget */}
            {["outpost-grill", "shake-smart"].includes(location.id) || isFoodTruck ? (
              <CampusMapWidget
                locationName={location.name}
                campusLocation={location.id === "habit-grill" ? "Lower Campus" : "Upper Campus"}
                directionsLink={location.links.directions}
              />
            ) : (
              <MapWidget
                locationName={location.name}
                address="6049 E 7th St, Long Beach, CA 90840"
              />
            )}
          </aside>

          {/* Main Content */}
          <main className="space-y-8">
            {/* Description */}
            <section>
              <h2 className="mb-3 text-2xl font-bold">About</h2>
              <p className="text-muted-foreground leading-relaxed">{location.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {location.tags.map((tag) => (
                  <span key={tag} className="inline-flex items-center rounded-md bg-muted px-2.5 py-1 text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Menu */}
            <section>
              <div className="mb-5 flex items-center justify-between flex-wrap gap-3">
                <h2 className="text-2xl font-bold">Menu</h2>
                <div className="flex gap-2">
                  {location.links.menu && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={location.links.menu} target="_blank" rel="noopener noreferrer">
                        View Menu
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                  {location.id === "outpost-grill" && location.links.order && (
                    <Button size="sm" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <a href={location.links.order} target="_blank" rel="noopener noreferrer">
                        Order Ahead
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                {Object.entries(menuItems).map(([category, items]) => (
                  <div key={category}>
                    <h3 className="mb-3 text-lg font-bold">{category}</h3>
                    <div className="space-y-2">
                      {items.map((item) => (
                        <div
                          key={item.name}
                          className="rounded-lg border border-border bg-card p-4"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1">
                              <h4 className="font-semibold">{item.name}</h4>
                              <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                            </div>
                            <span className="text-lg font-bold text-accent whitespace-nowrap">{item.price}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Reviews */}
            <section>
              <h2 className="mb-5 text-2xl font-bold">Reviews</h2>
              <div className="space-y-4">
                {mockReviews.map((review) => (
                  <div
                    key={review.id}
                    className="rounded-xl border border-border bg-card p-5"
                  >
                    <div className="flex items-start gap-4">
                      <img
                        src={review.avatar}
                        alt={review.name}
                        className="h-12 w-12 rounded-full"
                      />
                      <div className="flex-1">
                        <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                          <div>
                            <h4 className="font-semibold">{review.name}</h4>
                            <p className="text-sm text-muted-foreground">{review.date}</p>
                          </div>
                          <div className="flex items-center gap-0.5">
                            {Array.from({ length: review.rating }).map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                            ))}
                          </div>
                        </div>
                        <p className="mb-3 text-sm leading-relaxed">
                          {review.comment}
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {review.categories.map((cat) => (
                            <span key={cat} className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium">
                              {cat}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
