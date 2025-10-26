export interface MenuItem {
  name: string;
  price: number;
  description: string;
  tags?: string[];
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export const nuggetGrillExpressMenu: MenuCategory[] = [
    {
    name: 'Breakfast',
    items: [
      {
        name: 'Breakfast Burrito',
        price: 10.49,
        description: 
            'Two scrambled eggs, tator nuggets, cheddar cheese, choice of bacon or turkey sausage, wrapped in a flour tortilla. Served with a side of roasted salsa.',
        tags: ["Breakfast", "Burrito"]
      },
      {
        name: 'Breakfast Burrito No Meat',
        price: 8.29,
        description: 'Two scrambled eggs, crispy tater tots, cheddar cheese, Served with a side of salsa',
        tags: ["Breakfast", "Burrito"]
      },
      {
        name: "Breakfast Sandwich",
        price: 7.49,
        description: 'Scrambled eggs, cheddar cheese, choice of bacon or turkey sausage on sourdough or bagel (plain or everything)',
        tags: ["Breakfast", "Sandwiches", "American"]
      },
      {
        name: 'Breakfast Sandwich No Meat',
        price: 4.99,
        description: '',
        tags: ["Breakfast", "Sandwiches", "American"]
      },
      {
        name: 'Bagel Shmear',
        price: 4.49,
        description: 'Choice of toasted bagel plain or everything with your choice of cream cheese: plain, garlic herb, or strawberry',
        tags: ["Breakfast", "American"]
      },
      {
        name: 'Beachside Toast',
        price: 9.49,
        description: 
            'Open faced toast with garlic herb cream cheese, avocado, tomato, cucumber, shaved red onion, capers, dill, and herb vinaigrette',
        tags: ["Breakfast", "American"]
      },
      {
        name: 'Avocado Toast',
        price: 7.99,
        description: 'Toasted sourdough, smashed avocado, hard-boiled egg, pickled red onion, & drizzled with sriracha mayo',
        tags: ["Breakfast", "American"]
      },
      {
        name: "Pupusa Special",
        price: 10.99,
        description: "Bean and Cheese pupusas with curtido, lime zest crema, yucca fries and sriracha ketchup",
        tags: ["Breakfast"]
      },
      
    ],
  },
  {
    name: 'Lunch',
    items: [
      {
        name: 'Falafel Salad Wrap',
        price: 8.99,
        description:
          'Crispy falafel, lettuce, tomato, cucumbers, onion, feta cheese, tzatziki sauce in a warm tortilla',
        tags: []
      },
      {
        name: 'K-Town Sunrise Wrap',
        price: 9.99,
        description:
          'Crispy tofu, kimchi slaw, cheddar cheese, and gochujang mayo wrapped in a warm flour tortilla',
        tags: []
      },
      {
        name: 'Spicy Honey Crunch Chicken Sandwich',
        price: 12.29,
        description:
          'Crispy chicken tossed in honey-sriracha sauce with slaw on a toasted brioche bun',
        tags: ["Sandwiches"]
      },
      {
        name: 'Turkey Blat',
        price: 8.99,
        description:
          'Roasted turkey, bacon, lettuce, avocado, tomato and mayo on toasted sourdough',
        tags: ["American", "Sandwiches"]
      },
      {
        name: 'Grilled Cheese',
        price: 5.49,
        description: 'Cheddar cheese on grilled sourdough bread',
        tags: ["American", "Sandwiches"]
      },
      {
        name: 'BLT',
        price: 7.29,
        description: 'Crispy bacon, lettuce, and tomato with mayo on toasted sourdough',
        tags: ["American", "Sandwiches"]
      },
      {
        name: 'Cali Cheeseburger',
        price: 9.49,
        description:
          'Beef patty, pepperjack cheese, chipotle aioli, jalapenos, lettuce, tomato, onion, avocado, pickles on a toasted brioche bun',
        tags: ["American"]
      },
      {
        name: 'Chicken Tenders',
        price: 7.89,
        description:
          'Southern style breaded chicken tenders served with your choice of dipping sauce',
        tags: ["American"]
      },
      {
        name: 'Chicken Tenders & Tator Nuggets',
        price: 11.38,
        description:
          'Southern style breaded chicken tenders served with golden Tator Nuggets and your choice of dipping sauce',
        tags: ["American"]
      },
      {
        name: 'Tator Tots',
        price: 3.00,
        description: 'Crispy golden tator nuggets',
        tags: ["American"]
      },
      {
        name: 'Birria Loaded Tots',
        price: 6.99,
        description:
          'Golden Tator Nuggets topped with cheese, birria made with beef, onions, cilantro, jalapenos, and sour cream',
        tags: []
      },
      {
        name: 'Birria Burrito',
        price: 11.99,
        description:
          'Savory beef birria, frijoles de olla, cilantro rice, Pico de Gallo, shredded cheddar cheese, avocado, wrapped in a flour tortilla. Served with roasted red salsa',
        tags: ["Burrito"]
      },
    ],
  },
  {
    name: 'Breakfast Sides',
    items: [
      {
        name: 'Sourdough Toast',
        price: 2.89,
        description: 'Toasted sourdough',
        tags: ["Breakfast", "American"]
      },
      {
        name: 'Toasted Bagel with Cream Cheese',
        price: 4.49,
        description: 'choice of plain, everything',
        tags: ["Breakfast", "American"]
      },
      {
        name: 'Toasted Bagel with Butter',
        price: 4.49,
        description: 'choice of plain, everything',
        tags: ["Breakfast", "American"]
      },
      {
        name: 'Side 2 Egg',
        price: 4.69,
        description: '',
        tags: ["Breakfast", "American"]
      },
    ],
  },
  {
    name: 'Sides',
    items: [
        {
        name: 'Side BBQ',
        price: 0.80,
        description: '',
        tags: []
      },
      {
        name: 'Side Buffalo',
        price: 0.80,
        description: '',
        tags: []
      },
      {
        name: 'Side Chipotle',
        price: 0.80,
        description: '',
        tags: []
      },
      {
        name: 'Side Gochujang',
        price: 0.80,
        description: '',
        tags: []
      },
      {
        name: 'Side Honey Dijon',
        price: 0.80,
        description: '',
        tags: []
      },
      {
        name: 'Side Ranch',
        price: 0.80,
        description: '',
        tags: []
      },
      {
        name: 'Side Salsa',
        price: 0.80,
        description: '',
        tags: []
      },
      {
        name: 'Side 1000',
        price: 0.80,
        description: '',
        tags: []
      },
    ],
  },
  {
    name: 'Dessert',
    items: [
      {
        name: 'Strawberry Italian Ice Squeeze Ups',
        price: 2.99,
        description: '',
        tags: []
      },
      {
        name: 'Icee Blue Raspberry Squeeze Ups',
        price: 2.99,
        description: '',
        tags: []
      },
    ],
  },
];