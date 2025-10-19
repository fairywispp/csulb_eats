export interface AllergenCode {
  code: string;
  name: string;
  color: string;
}

export const allergens: AllergenCode[] = [
  { code: 'M', name: 'Milk', color: 'hsl(0, 70%, 50%)' },
  { code: 'E', name: 'Eggs', color: 'hsl(45, 90%, 50%)' },
  { code: 'F', name: 'Fish', color: 'hsl(200, 80%, 50%)' },
  { code: 'W', name: 'Wheat', color: 'hsl(30, 60%, 45%)' },
  { code: 'P', name: 'Peanuts', color: 'hsl(25, 70%, 40%)' },
  { code: 'TN', name: 'Tree Nuts', color: 'hsl(20, 50%, 35%)' },
  { code: 'S', name: 'Soy', color: 'hsl(280, 60%, 50%)' },
  { code: 'SF-C', name: 'Shellfish', color: 'hsl(180, 70%, 45%)' },
  { code: 'SS', name: 'Sesame', color: 'hsl(35, 55%, 50%)' },
];

export interface MenuItem {
  name: string;
  allergens: string[];
  image?: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export interface MealPeriod {
  name: string;
  sections: MenuSection[];
}

export interface DiningHallMenu {
  breakfast: MenuSection[];
  lunch: MenuSection[];
  dinner: MenuSection[];
}

export interface WeekMenu {
  weekOf: string;
  days: {
    [day: string]: {
      [hall: string]: DiningHallMenu;
    };
  };
}

// Sample menu data - Cycle 1, Week of Aug 25
export const menuCycles: WeekMenu[] = [
  {
    weekOf: 'Aug 25',
    days: {
      Monday: {
        Beachside: {
          breakfast: [
            {
              title: 'Hot Breakfast',
              items: [
                { name: 'Breakfast Quesadilla', allergens: ['E', 'M'] },
                { name: 'Kielbasa', allergens: [] },
                { name: 'Country Potatoes', allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Soups & Comfort',
              items: [
                { name: 'Chicken Noodle Soup', allergens: ['W', 'E'] },
                { name: 'Fried Chicken with Gravy', allergens: ['M', 'W'] },
              ],
            },
            {
              title: 'Plant-Based',
              items: [
                { name: 'Gardein Chicken Teriyaki', allergens: ['S', 'W'] },
              ],
            },
            {
              title: 'Grab & Go',
              items: [
                { name: 'Cuban Sandwich', allergens: ['W', 'M', 'S'] },
                {
                  name: 'Pepperoni and Cheese Pizza',
                  allergens: ['W', 'M', 'S'],
                },
              ],
            },
          ],
          dinner: [
            {
              title: 'Main Entrées',
              items: [
                { name: 'Beef Stroganoff', allergens: ['M', 'W'] },
                { name: 'Roasted Vegetables', allergens: [] },
              ],
            },
          ],
        },
        Hillside: {
          breakfast: [
            {
              title: 'Hot Breakfast',
              items: [
                { name: 'Chilaquiles Rojos', allergens: ['M'] },
                { name: 'Turkey Sausage Patties', allergens: [] },
                { name: 'Southwestern Potatoes', allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Soups',
              items: [
                {
                  name: 'Chicken Dumpling Soup',
                  allergens: ['E', 'M', 'W', 'S'],
                },
                { name: 'Butternut Squash Soup', allergens: ['M'] },
              ],
            },
            {
              title: 'Pasta Station',
              items: [
                { name: 'Pesto Tortellini Salad', allergens: ['M', 'W', 'E'] },
                {
                  name: 'Breaded Chicken Creamy Chipotle Pasta',
                  allergens: ['M', 'W'],
                },
              ],
            },
          ],
          dinner: [
            {
              title: 'Grill',
              items: [
                { name: 'BBQ Pulled Pork Sandwich', allergens: ['W'] },
                { name: 'Grilled Corn on the Cob', allergens: [] },
              ],
            },
          ],
        },
        Parkside: {
          breakfast: [
            {
              title: 'Hot Breakfast',
              items: [
                { name: 'Pancakes', allergens: ['M', 'W', 'S'] },
                { name: 'Bacon', allergens: [] },
                { name: 'Cajun Potatoes', allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Daily Special',
              items: [
                { name: 'Chicken Parmesan', allergens: ['M', 'W', 'E'] },
                { name: 'Garlic Bread', allergens: ['W', 'M'] },
              ],
            },
            {
              title: 'Grill',
              items: [
                { name: 'Cheeseburger', allergens: ['M', 'W', 'E'] },
                { name: 'French Fries', allergens: [] },
              ],
            },
          ],
          dinner: [
            {
              title: 'International',
              items: [
                { name: 'Chicken Tikka Masala', allergens: ['M'] },
                { name: 'Basmati Rice', allergens: [] },
                { name: 'Naan Bread', allergens: ['W', 'M'] },
              ],
            },
          ],
        },
      },
      Tuesday: {
        Beachside: {
          breakfast: [
            {
              title: 'Hot Breakfast',
              items: [
                { name: 'French Toast Sticks', allergens: ['E', 'M', 'W'] },
                { name: 'Turkey Sausage Links', allergens: [] },
                { name: 'Hash Browns', allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Asian Station',
              items: [
                { name: 'Orange Chicken', allergens: ['W', 'S'] },
                { name: 'Fried Rice', allergens: ['E', 'S'] },
                { name: 'Vegetable Spring Rolls', allergens: ['W', 'S'] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Comfort Food',
              items: [
                { name: 'Meatloaf', allergens: ['E', 'M', 'W'] },
                { name: 'Mashed Potatoes', allergens: ['M'] },
                { name: 'Green Beans', allergens: [] },
              ],
            },
          ],
        },
        Hillside: {
          breakfast: [
            {
              title: 'Hot Breakfast',
              items: [
                { name: 'Breakfast Burrito', allergens: ['E', 'M', 'W'] },
                { name: 'Chorizo', allergens: [] },
                { name: 'Pico de Gallo', allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Mediterranean',
              items: [
                { name: 'Falafel Wrap', allergens: ['W', 'SS'] },
                { name: 'Hummus', allergens: ['SS'] },
                { name: 'Tabbouleh', allergens: ['W'] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Seafood',
              items: [
                { name: 'Fish Tacos', allergens: ['F', 'W', 'M'] },
                { name: 'Cilantro Lime Rice', allergens: [] },
                { name: 'Black Beans', allergens: [] },
              ],
            },
          ],
        },
        Parkside: {
          breakfast: [
            {
              title: 'Hot Breakfast',
              items: [
                { name: 'Omelet Station', allergens: ['E', 'M'] },
                { name: 'Sausage Gravy', allergens: ['M', 'W'] },
                { name: 'Biscuits', allergens: ['M', 'W'] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Italian',
              items: [
                { name: 'Spaghetti Carbonara', allergens: ['E', 'M', 'W'] },
                { name: 'Caesar Salad', allergens: ['E', 'M', 'F', 'W'] },
              ],
            },
          ],
          dinner: [
            {
              title: 'BBQ Night',
              items: [
                { name: 'BBQ Ribs', allergens: [] },
                { name: 'Coleslaw', allergens: ['E', 'M'] },
                { name: 'Cornbread', allergens: ['E', 'M', 'W'] },
              ],
            },
          ],
        },
      },
      Wednesday: {
        Parkside: {
          breakfast: [
            {
              title: 'Hot Breakfast',
              items: [
                { name: 'Belgian Waffles', allergens: ['E', 'M', 'W'] },
                { name: 'Turkey Bacon', allergens: [] },
                { name: 'Home Fries', allergens: [] },
                { name: 'Fruit Smoothie Bowl', allergens: ['M'] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Mexican Station',
              items: [
                { name: 'Chicken Enchiladas', allergens: ['M', 'W'] },
                { name: 'Beef Tacos', allergens: ['M', 'W'] },
                { name: 'Refried Beans', allergens: [] },
                { name: 'Spanish Rice', allergens: [] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Seafood Special',
              items: [
                { name: 'Grilled Salmon', allergens: ['F'] },
                { name: 'Shrimp Scampi', allergens: ['SF-C', 'M', 'W'] },
                { name: 'Wild Rice Pilaf', allergens: [] },
                { name: 'Steamed Broccoli', allergens: [] },
              ],
            },
          ],
        },
        Hillside: {
          breakfast: [
            {
              title: 'Classic Breakfast',
              items: [
                { name: 'Scrambled Eggs', allergens: ['E'] },
                { name: 'Sausage Links', allergens: [] },
                { name: 'Hash Browns', allergens: [] },
                { name: 'Toast', allergens: ['W'] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Comfort Food',
              items: [
                { name: 'Mac and Cheese', allergens: ['M', 'W'] },
                { name: 'Buffalo Chicken Wrap', allergens: ['M', 'W'] },
                { name: 'Sweet Potato Fries', allergens: [] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Asian Fusion',
              items: [
                { name: 'Pad Thai', allergens: ['E', 'P', 'S'] },
                { name: 'Spring Rolls', allergens: ['W', 'S'] },
                { name: 'Jasmine Rice', allergens: [] },
              ],
            },
          ],
        },
        Beachside: {
          breakfast: [
            {
              title: 'Tropical Morning',
              items: [
                { name: 'Acai Bowl', allergens: [] },
                { name: 'Coconut Pancakes', allergens: ['E', 'M', 'W'] },
                { name: 'Turkey Sausage', allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Sandwiches & Wraps',
              items: [
                { name: 'Club Sandwich', allergens: ['W', 'M', 'E'] },
                { name: 'California Wrap', allergens: ['W', 'M'] },
                { name: 'Chicken Salad', allergens: ['E', 'M'] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Grill Station',
              items: [
                { name: 'Ribeye Steak', allergens: [] },
                { name: 'Grilled Chicken Breast', allergens: [] },
                { name: 'Baked Potato', allergens: ['M'] },
                { name: 'Grilled Asparagus', allergens: [] },
              ],
            },
          ],
        },
      },
      Thursday: {
        Parkside: {
          breakfast: [
            {
              title: 'International Breakfast',
              items: [
                { name: 'Croissants', allergens: ['W', 'M', 'E'] },
                { name: 'Quiche Lorraine', allergens: ['E', 'M', 'W'] },
                { name: 'Fresh Fruit Salad', allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Pizza Day',
              items: [
                { name: 'Margherita Pizza', allergens: ['W', 'M'] },
                { name: 'Pepperoni Pizza', allergens: ['W', 'M'] },
                { name: 'Veggie Pizza', allergens: ['W', 'M'] },
                { name: 'Garlic Knots', allergens: ['W', 'M'] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Steakhouse Night',
              items: [
                { name: 'Grilled Sirloin', allergens: [] },
                { name: 'Loaded Baked Potato', allergens: ['M'] },
                { name: 'Caesar Salad', allergens: ['E', 'M', 'F', 'W'] },
              ],
            },
          ],
        },
        Hillside: {
          breakfast: [
            {
              title: 'Southern Style',
              items: [
                { name: 'Biscuits and Gravy', allergens: ['M', 'W'] },
                { name: 'Fried Eggs', allergens: ['E'] },
                { name: 'Grits', allergens: ['M'] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Deli Special',
              items: [
                { name: 'Philly Cheesesteak', allergens: ['M', 'W'] },
                { name: 'Turkey Club', allergens: ['W', 'M', 'E'] },
                { name: 'Chips', allergens: [] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Italian Night',
              items: [
                { name: 'Chicken Alfredo', allergens: ['M', 'W'] },
                { name: 'Meatballs', allergens: ['E', 'M', 'W'] },
                { name: 'Breadsticks', allergens: ['W', 'M'] },
              ],
            },
          ],
        },
        Beachside: {
          breakfast: [
            {
              title: 'Beach Brunch',
              items: [
                { name: 'Eggs Benedict', allergens: ['E', 'M', 'W'] },
                { name: 'Smoked Salmon', allergens: ['F'] },
                { name: 'Avocado Toast', allergens: ['W'] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Fresh Catch',
              items: [
                { name: 'Fish Sandwich', allergens: ['F', 'W', 'E'] },
                { name: 'Clam Chowder', allergens: ['SF-C', 'M', 'W'] },
                { name: 'Coleslaw', allergens: ['E', 'M'] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Surf & Turf',
              items: [
                { name: 'Lobster Tail', allergens: ['SF-C', 'M'] },
                { name: 'Filet Mignon', allergens: [] },
                { name: 'Garlic Butter Vegetables', allergens: ['M'] },
              ],
            },
          ],
        },
      },
      Friday: {
        Parkside: {
          breakfast: [
            {
              title: 'Weekend Kickoff',
              items: [
                { name: 'Cinnamon Rolls', allergens: ['W', 'M', 'E'] },
                { name: 'Bacon', allergens: [] },
                { name: 'Scrambled Eggs', allergens: ['E'] },
              ],
            },
          ],
          lunch: [
            {
              title: 'BBQ Friday',
              items: [
                { name: 'BBQ Pulled Pork', allergens: [] },
                { name: 'BBQ Chicken', allergens: [] },
                { name: 'Cornbread', allergens: ['W', 'M', 'E'] },
                { name: 'Baked Beans', allergens: [] },
              ],
            },
          ],
          dinner: [
            {
              title: 'International',
              items: [
                { name: 'Chicken Tikka Masala', allergens: ['M'] },
                { name: 'Vegetable Curry', allergens: [] },
                { name: 'Naan Bread', allergens: ['W', 'M'] },
                { name: 'Basmati Rice', allergens: [] },
              ],
            },
          ],
        },
        Hillside: {
          breakfast: [
            {
              title: 'Friday Favorites',
              items: [
                { name: 'French Toast', allergens: ['E', 'M', 'W'] },
                { name: 'Sausage Patties', allergens: [] },
                { name: 'Maple Syrup', allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Burger Bar',
              items: [
                { name: 'Build Your Own Burger', allergens: ['W', 'E'] },
                { name: 'Veggie Burger', allergens: ['W', 'S', 'E'] },
                { name: 'Onion Rings', allergens: ['W', 'E', 'M'] },
                { name: 'French Fries', allergens: [] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Sushi Night',
              items: [
                { name: 'California Roll', allergens: ['F', 'SF-C', 'SS'] },
                { name: 'Spicy Tuna Roll', allergens: ['F', 'S', 'SS'] },
                { name: 'Edamame', allergens: ['S'] },
                { name: 'Miso Soup', allergens: ['S', 'F'] },
              ],
            },
          ],
        },
        Beachside: {
          breakfast: [
            {
              title: 'Island Breakfast',
              items: [
                { name: 'Hawaiian Sweet Bread', allergens: ['W', 'M', 'E'] },
                { name: 'Spam Musubi', allergens: ['W', 'S', 'E'] },
                { name: 'Pineapple', allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Taco Bar',
              items: [
                { name: 'Fish Tacos', allergens: ['F', 'M', 'W'] },
                { name: 'Carne Asada Tacos', allergens: ['M', 'W'] },
                { name: 'Guacamole', allergens: [] },
                { name: 'Salsa Bar', allergens: [] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Seafood Extravaganza',
              items: [
                { name: 'Paella', allergens: ['SF-C', 'F'] },
                { name: 'Grilled Octopus', allergens: ['SF-C'] },
                { name: 'Garlic Bread', allergens: ['W', 'M'] },
              ],
            },
          ],
        },
      },
    },
  },
  {
    weekOf: 'Sep 29',
    days: {
      Monday: {
        Parkside: {
          breakfast: [
            {
              title: 'Hot Breakfast',
              items: [
                { name: 'Oatmeal', allergens: [] },
                { name: 'French Toast', allergens: ['E', 'M', 'W'] },
                { name: 'Scrambled Eggs', allergens: ['E'] },
                { name: 'Hard Boiled Eggs', allergens: ['E'] },
                { name: 'Hash Brown', allergens: [] },
                { name: 'Turkey Sausage Link', allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Soups & Mains',
              items: [
                { name: 'Italian Wedding Soup', allergens: ['E', 'W', 'M'] },
                { name: 'Roasted Harissa Chicken', allergens: [] },
                { name: 'Street Hot Dog', allergens: ['W'] },
                { name: 'Gardien Plumsauce Meatballs', allergens: ['S', 'W'] },
                { name: 'Deli/Salad Bar', allergens: [] },
                { name: 'Rice', allergens: [] },
                { name: 'Fresh Vegetables', allergens: [] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Evening Specials',
              items: [
                { name: 'Beef Taquitos', allergens: ['W'] },
                { name: 'Bean and Cheese Pupusa', allergens: ['M', 'W'] },
                { name: 'Deli/Salad Bar', allergens: [] },
                { name: 'Spanish Rice/Beans', allergens: [] },
                { name: 'Fresh Vegetables', allergens: [] },
              ],
            },
          ],
        },
        Hillside: {
          breakfast: [
            {
              title: 'Hot Breakfast',
              items: [
                { name: 'Oatmeal', allergens: [] },
                { name: 'Belgian Waffles', allergens: ['E', 'M', 'W'] },
                { name: 'Scrambled Eggs', allergens: ['E'] },
                { name: 'Bacon', allergens: [] },
                { name: 'Hash Browns', allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Daily Specials',
              items: [
                { name: 'Chicken Noodle Soup', allergens: ['W', 'E'] },
                { name: 'Grilled Chicken Sandwich', allergens: ['W'] },
                { name: 'Veggie Burger', allergens: ['S', 'W'] },
                { name: 'French Fries', allergens: [] },
              ],
            },
          ],
          dinner: [
            {
              title: 'International',
              items: [
                { name: 'Chicken Tikka Masala', allergens: ['M'] },
                { name: 'Basmati Rice', allergens: [] },
                { name: 'Naan Bread', allergens: ['W', 'M'] },
              ],
            },
          ],
        },
        Beachside: {
          breakfast: [
            {
              title: 'Coastal Morning',
              items: [
                { name: 'Oatmeal', allergens: [] },
                { name: 'Breakfast Quesadilla', allergens: ['E', 'M', 'W'] },
                { name: 'Turkey Sausage', allergens: [] },
                { name: 'Home Fries', allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Grab & Go',
              items: [
                { name: 'Fish Tacos', allergens: ['F', 'W', 'M'] },
                { name: 'Club Sandwich', allergens: ['W', 'E', 'M'] },
                { name: 'Salad Bar', allergens: [] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Seafood Special',
              items: [
                { name: 'Grilled Salmon', allergens: ['F'] },
                { name: 'Wild Rice', allergens: [] },
                { name: 'Steamed Vegetables', allergens: [] },
              ],
            },
          ],
        },
      },
      Tuesday: {
        Parkside: {
          breakfast: [
            {
              title: 'Hot Breakfast',
              items: [
                { name: 'Oatmeal', allergens: [] },
                { name: 'Pancakes', allergens: ['E', 'M', 'W'] },
                { name: 'Scrambled Eggs', allergens: ['E'] },
                { name: 'Hard Boiled Eggs', allergens: ['E'] },
                { name: 'Hash Brown Patties', allergens: [] },
                { name: 'Pork Link Sausage', allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Asian Station',
              items: [
                { name: 'Broccoli Cheddar Soup', allergens: ['M', 'W'] },
                {
                  name: 'Szechuan Crispy Beef Stir-Fry',
                  allergens: ['S', 'W'],
                },
                { name: 'Orange Gardien Chicken', allergens: ['S', 'W'] },
                { name: 'Deli/Salad Bar', allergens: [] },
                { name: 'Rice', allergens: [] },
                { name: 'Fresh Vegetables', allergens: [] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Burger Night',
              items: [
                { name: 'Hamburger', allergens: ['W', 'E'] },
                { name: 'Boca Burger', allergens: ['S', 'W'] },
                { name: 'Deli/Salad Bar', allergens: [] },
                { name: 'French Fry Bar', allergens: [] },
                { name: 'Fresh Vegetables', allergens: [] },
              ],
            },
          ],
        },
        Hillside: {
          breakfast: [
            {
              title: 'Breakfast Favorites',
              items: [
                { name: 'Oatmeal', allergens: [] },
                { name: 'French Toast Sticks', allergens: ['E', 'M', 'W'] },
                { name: 'Scrambled Eggs', allergens: ['E'] },
                { name: 'Sausage Links', allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Mediterranean',
              items: [
                { name: 'Falafel Wrap', allergens: ['W', 'SS'] },
                { name: 'Hummus', allergens: ['SS'] },
                { name: 'Greek Salad', allergens: ['M'] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Italian Night',
              items: [
                { name: 'Spaghetti Carbonara', allergens: ['E', 'M', 'W'] },
                { name: 'Garlic Bread', allergens: ['W', 'M'] },
                { name: 'Caesar Salad', allergens: ['E', 'M', 'F', 'W'] },
              ],
            },
          ],
        },
        Beachside: {
          breakfast: [
            {
              title: 'Beach Start',
              items: [
                { name: 'Oatmeal', allergens: [] },
                { name: 'Breakfast Burrito', allergens: ['E', 'M', 'W'] },
                { name: 'Hash Browns', allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Comfort Food',
              items: [
                { name: 'Meatloaf', allergens: ['E', 'M', 'W'] },
                { name: 'Mashed Potatoes', allergens: ['M'] },
                { name: 'Green Beans', allergens: [] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Taco Tuesday',
              items: [
                { name: 'Beef Tacos', allergens: ['W', 'M'] },
                { name: 'Chicken Tacos', allergens: ['W', 'M'] },
                { name: 'Spanish Rice', allergens: [] },
                { name: 'Refried Beans', allergens: [] },
              ],
            },
          ],
        },
      },
      Wednesday: {
        Parkside: {
          breakfast: [
            {
              title: 'Hot Breakfast',
              items: [
                { name: 'Oatmeal', allergens: [] },
                { name: 'Chilaquiles', allergens: ['M', 'W'] },
                { name: 'Scrambled Eggs', allergens: ['E'] },
                { name: 'Hard Boiled Eggs', allergens: ['E'] },
                { name: 'Cottage Fries', allergens: [] },
                { name: 'Vegetarian Sausage Patty', allergens: ['S'] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Soups & Sandwiches',
              items: [
                { name: 'Tomato Basil Soup', allergens: ['M'] },
                {
                  name: 'Grilled Turkey Pesto Flatbread',
                  allergens: ['W', 'M', 'TN'],
                },
                { name: 'Thai Chickpea Curry', allergens: [] },
                { name: 'Deli/Salad Bar', allergens: [] },
                { name: 'Fresh Vegetables', allergens: [] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Pizza Night',
              items: [
                { name: 'Pizza Night', allergens: ['W', 'M'] },
                { name: 'Buffalo Chicken Wings', allergens: [] },
                { name: 'Gardien Chicken Tender', allergens: ['S', 'W'] },
                { name: 'Deli/Salad Bar', allergens: [] },
                { name: 'Fresh Vegetables', allergens: [] },
              ],
            },
          ],
        },
        Hillside: {
          breakfast: [
            {
              title: 'Classic Breakfast',
              items: [
                { name: 'Oatmeal', allergens: [] },
                { name: 'Scrambled Eggs', allergens: ['E'] },
                { name: 'Sausage Links', allergens: [] },
                { name: 'Hash Browns', allergens: [] },
                { name: 'Toast', allergens: ['W'] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Comfort Food',
              items: [
                { name: 'Mac and Cheese', allergens: ['M', 'W'] },
                { name: 'Buffalo Chicken Wrap', allergens: ['M', 'W'] },
                { name: 'Sweet Potato Fries', allergens: [] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Asian Fusion',
              items: [
                { name: 'Pad Thai', allergens: ['E', 'P', 'S'] },
                { name: 'Spring Rolls', allergens: ['W', 'S'] },
                { name: 'Jasmine Rice', allergens: [] },
              ],
            },
          ],
        },
        Beachside: {
          breakfast: [
            {
              title: 'Tropical Morning',
              items: [
                { name: 'Oatmeal', allergens: [] },
                { name: 'Coconut Pancakes', allergens: ['E', 'M', 'W'] },
                { name: 'Turkey Sausage', allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Sandwiches & Wraps',
              items: [
                { name: 'Club Sandwich', allergens: ['W', 'M', 'E'] },
                { name: 'California Wrap', allergens: ['W', 'M'] },
                { name: 'Chicken Salad', allergens: ['E', 'M'] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Grill Station',
              items: [
                { name: 'Grilled Chicken Breast', allergens: [] },
                { name: 'Baked Potato', allergens: ['M'] },
                { name: 'Grilled Asparagus', allergens: [] },
              ],
            },
          ],
        },
      },
      Thursday: {
        Parkside: {
          breakfast: [
            {
              title: 'Hot Breakfast',
              items: [
                { name: 'Oatmeal', allergens: [] },
                { name: 'Waffle Sticks', allergens: ['E', 'M', 'W'] },
                { name: 'Scrambled Eggs', allergens: ['E'] },
                { name: 'Hard Boiled Eggs', allergens: ['E'] },
                { name: 'Tator Tots', allergens: [] },
                { name: 'Kielbasa Sausage', allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Taco Thursday',
              items: [
                { name: 'Minestrone Soup', allergens: ['W'] },
                { name: 'Taco Thursday', allergens: ['W', 'M'] },
                { name: 'Asada Fries', allergens: ['M'] },
                { name: 'Deli/Salad Bar', allergens: [] },
                { name: 'Spanish Rice/Beans', allergens: [] },
                { name: 'Fresh Vegetables', allergens: [] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Pasta Night',
              items: [
                { name: 'Chicken Chipotle Pasta', allergens: ['M', 'W'] },
                { name: 'Pasta w/Gardien Meat Sauce', allergens: ['S', 'W'] },
                { name: 'Deli/Salad Bar', allergens: [] },
                { name: 'Garlic Bread', allergens: ['W', 'M'] },
                { name: 'Fresh Vegetables', allergens: [] },
              ],
            },
          ],
        },
        Hillside: {
          breakfast: [
            {
              title: 'Southern Style',
              items: [
                { name: 'Oatmeal', allergens: [] },
                { name: 'Biscuits and Gravy', allergens: ['M', 'W'] },
                { name: 'Fried Eggs', allergens: ['E'] },
                { name: 'Grits', allergens: ['M'] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Deli Special',
              items: [
                { name: 'Philly Cheesesteak', allergens: ['M', 'W'] },
                { name: 'Turkey Club', allergens: ['W', 'M', 'E'] },
                { name: 'Chips', allergens: [] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Italian Night',
              items: [
                { name: 'Chicken Alfredo', allergens: ['M', 'W'] },
                { name: 'Meatballs', allergens: ['E', 'M', 'W'] },
                { name: 'Breadsticks', allergens: ['W', 'M'] },
              ],
            },
          ],
        },
        Beachside: {
          breakfast: [
            {
              title: 'Beach Brunch',
              items: [
                { name: 'Oatmeal', allergens: [] },
                { name: 'Eggs Benedict', allergens: ['E', 'M', 'W'] },
                { name: 'Smoked Salmon', allergens: ['F'] },
                { name: 'Avocado Toast', allergens: ['W'] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Fresh Catch',
              items: [
                { name: 'Fish Sandwich', allergens: ['F', 'W', 'E'] },
                { name: 'Clam Chowder', allergens: ['SF-C', 'M', 'W'] },
                { name: 'Coleslaw', allergens: ['E', 'M'] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Surf & Turf',
              items: [
                { name: 'Lobster Tail', allergens: ['SF-C', 'M'] },
                { name: 'Filet Mignon', allergens: [] },
                { name: 'Garlic Butter Vegetables', allergens: ['M'] },
              ],
            },
          ],
        },
      },
      Friday: {
        Parkside: {
          breakfast: [
            {
              title: 'Hot Breakfast',
              items: [
                { name: 'Oatmeal', allergens: [] },
                { name: 'Breakfast Sandwich', allergens: ['E', 'W', 'M'] },
                { name: 'Scrambled Eggs', allergens: ['E'] },
                { name: 'Hard Boiled Eggs', allergens: ['E'] },
                { name: 'Hash Brown', allergens: [] },
                { name: 'Turkey Sausage Patty', allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Seafood Friday',
              items: [
                { name: 'Clam Chowder', allergens: ['SF-C', 'M', 'W'] },
                { name: 'Firecracker Salmon', allergens: ['F'] },
                { name: 'Kung Pao Gardien Beef', allergens: ['S', 'W', 'P'] },
                { name: 'Deli/Salad Bar', allergens: [] },
                { name: 'Rice Pilaf', allergens: [] },
                { name: 'Fresh Vegetables', allergens: [] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Fish Night',
              items: [
                { name: 'Fish and Chips', allergens: ['F', 'W'] },
                { name: 'Vegetable Tangine', allergens: [] },
                { name: 'Deli/Salad Bar', allergens: [] },
                { name: 'Fresh Vegetables', allergens: [] },
              ],
            },
          ],
        },
        Hillside: {
          breakfast: [
            {
              title: 'Friday Favorites',
              items: [
                { name: 'Oatmeal', allergens: [] },
                { name: 'French Toast', allergens: ['E', 'M', 'W'] },
                { name: 'Sausage Patties', allergens: [] },
                { name: 'Maple Syrup', allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Burger Bar',
              items: [
                { name: 'Build Your Own Burger', allergens: ['W', 'E'] },
                { name: 'Veggie Burger', allergens: ['W', 'S', 'E'] },
                { name: 'Onion Rings', allergens: ['W', 'E', 'M'] },
                { name: 'French Fries', allergens: [] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Sushi Night',
              items: [
                { name: 'California Roll', allergens: ['F', 'SF-C', 'SS'] },
                { name: 'Spicy Tuna Roll', allergens: ['F', 'S', 'SS'] },
                { name: 'Edamame', allergens: ['S'] },
                { name: 'Miso Soup', allergens: ['S', 'F'] },
              ],
            },
          ],
        },
        Beachside: {
          breakfast: [
            {
              title: 'Island Breakfast',
              items: [
                { name: 'Oatmeal', allergens: [] },
                { name: 'Hawaiian Sweet Bread', allergens: ['W', 'M', 'E'] },
                { name: 'Spam Musubi', allergens: ['W', 'S', 'E'] },
                { name: 'Pineapple', allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Taco Bar',
              items: [
                { name: 'Fish Tacos', allergens: ['F', 'M', 'W'] },
                { name: 'Carne Asada Tacos', allergens: ['M', 'W'] },
                { name: 'Guacamole', allergens: [] },
                { name: 'Salsa Bar', allergens: [] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Seafood Extravaganza',
              items: [
                { name: 'Paella', allergens: ['SF-C', 'F'] },
                { name: 'Grilled Octopus', allergens: ['SF-C'] },
                { name: 'Garlic Bread', allergens: ['W', 'M'] },
              ],
            },
          ],
        },
      },
      Saturday: {
        Parkside: {
          breakfast: [
            {
              title: 'Hot Breakfast',
              items: [
                { name: 'Oatmeal', allergens: [] },
                { name: 'Chocolate Pancakes', allergens: ['E', 'M', 'W'] },
                { name: 'Scrambled Eggs', allergens: ['E'] },
                { name: 'Hard Boiled Eggs', allergens: ['E'] },
                { name: 'Cottage Fries', allergens: [] },
                { name: 'Bacon', allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Italian Station',
              items: [
                { name: 'Chicken Noodle Soup', allergens: ['W', 'E'] },
                {
                  name: 'Baked Spinach Tortellini',
                  allergens: ['E', 'M', 'W'],
                },
                { name: 'Kale Vegetable Stew', allergens: [] },
                { name: 'Deli/Salad Bar', allergens: [] },
                { name: 'Roasted Potatoes', allergens: [] },
                { name: 'Fresh Vegetables', allergens: [] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Asian Special',
              items: [
                { name: 'Beef and Broccoli', allergens: ['S', 'W'] },
                { name: 'Szechuan Tofu w/ Eggplant', allergens: ['S'] },
                { name: 'Deli/Salad Bar', allergens: [] },
                { name: 'Rice', allergens: [] },
                { name: 'Fresh Vegetables', allergens: [] },
              ],
            },
          ],
        },
        Hillside: {
          breakfast: [
            {
              title: 'Global Breakfast',
              items: [
                { name: 'Oatmeal', allergens: [] },
                { name: 'Dim Sum Selection', allergens: ['W', 'S', 'SF-C'] },
                { name: 'Congee', allergens: [] },
                { name: 'Fried Dough', allergens: ['W'] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Build Your Own',
              items: [
                { name: 'Custom Stir Fry', allergens: ['S'] },
                { name: 'Rice Noodles', allergens: [] },
                { name: 'Tofu', allergens: ['S'] },
                { name: 'Mixed Vegetables', allergens: [] },
              ],
            },
          ],
          dinner: [
            {
              title: 'BBQ Night',
              items: [
                { name: 'Baby Back Ribs', allergens: [] },
                { name: 'Pulled Chicken', allergens: [] },
                { name: 'Coleslaw', allergens: ['E', 'M'] },
                { name: 'Baked Beans', allergens: [] },
              ],
            },
          ],
        },
        Beachside: {
          breakfast: [
            {
              title: 'Beach Brunch',
              items: [
                { name: 'Oatmeal', allergens: [] },
                { name: 'Smoked Salmon Platter', allergens: ['F', 'M'] },
                { name: 'Bagels', allergens: ['W'] },
                { name: 'Avocado', allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Sandwich Board',
              items: [
                { name: 'French Dip', allergens: ['W'] },
                { name: 'BLT', allergens: ['W', 'M'] },
                { name: 'Chicken Salad Sandwich', allergens: ['W', 'E', 'M'] },
                { name: 'Soup of the Day', allergens: [] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Surf Night',
              items: [
                { name: 'Lobster Mac & Cheese', allergens: ['SF-C', 'M', 'W'] },
                { name: 'Grilled Mahi Mahi', allergens: ['F'] },
                { name: 'Coconut Rice', allergens: [] },
                { name: 'Tropical Salad', allergens: [] },
              ],
            },
          ],
        },
      },
      Sunday: {
        Parkside: {
          breakfast: [
            {
              title: 'Hot Breakfast',
              items: [
                { name: 'Oatmeal', allergens: [] },
                { name: 'French Toast Sticks', allergens: ['E', 'M', 'W'] },
                { name: 'Scrambled Eggs', allergens: ['E'] },
                { name: 'Hard Boiled Eggs', allergens: ['E'] },
                { name: 'Hash Brown Patties', allergens: [] },
                { name: 'Sausage Patty', allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Sunday Comfort',
              items: [
                { name: 'Beef and Rice Soup', allergens: ['W'] },
                { name: 'Chicken w/Lemon Herb Sauce', allergens: [] },
                { name: 'Lentil Chili Macaroni', allergens: ['W'] },
                { name: 'Deli/Salad Bar', allergens: [] },
                { name: 'Mashed Potato/Gravy', allergens: ['M'] },
                { name: 'Fresh Vegetables', allergens: [] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Casual Sunday',
              items: [
                { name: 'Hot Dog Bar', allergens: ['W'] },
                { name: 'Edamame Fried Rice', allergens: ['S', 'E'] },
                { name: 'Deli/Salad Bar', allergens: [] },
                { name: 'French Fry Bar', allergens: [] },
                { name: 'Fresh Vegetables', allergens: [] },
              ],
            },
          ],
        },
        Hillside: {
          breakfast: [
            {
              title: 'Lazy Sunday',
              items: [
                { name: 'Oatmeal', allergens: [] },
                { name: 'Belgian Waffles', allergens: ['E', 'M', 'W'] },
                { name: 'Bacon', allergens: [] },
                { name: 'Fresh Berries', allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Sunday Roast',
              items: [
                { name: 'Roast Beef', allergens: [] },
                { name: 'Yorkshire Pudding', allergens: ['E', 'M', 'W'] },
                { name: 'Roasted Vegetables', allergens: [] },
                { name: 'Gravy', allergens: ['W'] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Pizza & Wings',
              items: [
                { name: 'Pizza Selection', allergens: ['W', 'M'] },
                { name: 'Chicken Wings', allergens: [] },
                { name: 'Salad Bar', allergens: [] },
              ],
            },
          ],
        },
        Beachside: {
          breakfast: [
            {
              title: 'Sunday Brunch',
              items: [
                { name: 'Oatmeal', allergens: [] },
                { name: 'Eggs Benedict', allergens: ['E', 'M', 'W'] },
                { name: 'Pancakes', allergens: ['E', 'M', 'W'] },
                { name: 'Sausage', allergens: [] },
              ],
            },
          ],
          lunch: [
            {
              title: 'Light Lunch',
              items: [
                { name: 'Caesar Salad', allergens: ['E', 'M', 'F', 'W'] },
                { name: 'Tomato Soup', allergens: ['M'] },
                { name: 'Grilled Cheese', allergens: ['M', 'W'] },
              ],
            },
          ],
          dinner: [
            {
              title: 'Sunday Dinner',
              items: [
                { name: 'Roasted Chicken', allergens: [] },
                { name: 'Mashed Potatoes', allergens: ['M'] },
                { name: 'Green Beans', allergens: [] },
                { name: 'Dinner Rolls', allergens: ['W', 'M'] },
              ],
            },
          ],
        },
      },
    },
  },
];

export const quickLinks = [
  {
    title: 'Policies & Procedures',
    description: 'Dining hall guidelines and rules',
    link: '/dining-policies',
  },
  {
    title: 'Dining Hours',
    description: 'View hours for all dining locations',
    link: '/dining-hours',
  },
  {
    title: 'Meal Plans',
    description: 'Guest and dining meal plan information',
    link: '/meal-plans',
  },
  {
    title: 'Request Form',
    description: 'Submit online dining hall requests',
    link: '/dining-request',
  },
  {
    title: 'FAQs',
    description: 'Frequently asked questions',
    link: '/dining-faq',
  },
];
