import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import Home from "./pages/Home";
import Category from "./pages/Category";
import Search from "./pages/Search";
import Resources from "./pages/Resources";
import CampusMap from "./pages/CampusMap";
import LocationDetail from "./pages/LocationDetail";
import RestaurantDetail from "./pages/RestaurantDetail";
import FoodTruckDetail from "./pages/FoodTruckDetail";
import CaffeineLabDetail from "./pages/CaffeineLabDetail";
import DiningHalls from "./pages/DiningHalls";
import DiningPolicies from "./pages/DiningPolicies";
import DiningHours from "./pages/DiningHours";
import MealPlans from "./pages/MealPlans";
import DiningFAQ from "./pages/DiningFAQ";
import DiningRequest from "./pages/DiningRequest";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<Category />} />
          <Route path="/search" element={<Search />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/campus-map" element={<CampusMap />} />
          <Route path="/location/:id" element={<LocationDetail />} />
          <Route path="/restaurant/:id" element={<RestaurantDetail />} />
          <Route
            path="/restaurant/caffeine-lab"
            element={<CaffeineLabDetail />}
          />
          <Route
            path="/restaurant/chillside-cafe"
            element={<LocationDetail />}
          />
          <Route path="/food-truck/:id" element={<FoodTruckDetail />} />
          <Route path="/dining-halls" element={<DiningHalls />} />
          <Route path="/dining-policies" element={<DiningPolicies />} />
          <Route path="/dining-hours" element={<DiningHours />} />
          <Route path="/meal-plans" element={<MealPlans />} />
          <Route path="/dining-faq" element={<DiningFAQ />} />
          <Route path="/dining-request" element={<DiningRequest />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
