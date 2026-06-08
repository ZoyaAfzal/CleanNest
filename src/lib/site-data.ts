export interface Service {
  slug: string;
  name: string;
  short: string;
  description: string;
  image: string;
  icon: string;
  price: string;
  includes: string[];
}

export const services: Service[] = [
  {
    slug: "house-cleaning",
    name: "House Cleaning",
    short: "Regular tidy-ups that keep every room sparkling.",
    description:
      "Our signature recurring service covers every surface in your home, from kitchens and bathrooms to bedrooms and living spaces. A consistent team learns your preferences and treats your home like their own.",
    image: "https://images.pexels.com/photos/7513068/pexels-photo-7513068.jpeg?w=1200&q=80",
    icon: "Home",
    price: "from $129",
    includes: [
      "Dusting all reachable surfaces",
      "Vacuuming and mopping floors",
      "Kitchen counters, sink and appliances",
      "Bathroom scrub and sanitize",
      "Trash removal and bed making",
      "Streak-free mirror polish",
    ],
  },
  {
    slug: "deep-cleaning",
    name: "Deep Cleaning",
    short: "Top-to-bottom reset for first-time bookings.",
    description:
      "A meticulous, room-by-room reset designed for first-time customers or once-a-quarter refreshes. We tackle baseboards, inside appliances, light fixtures and the spots routine cleans miss.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&q=80",
    icon: "Sparkles",
    price: "from $199",
    includes: [
      "Inside oven, microwave and fridge",
      "Baseboards, doors and switch plates",
      "Light fixtures and ceiling fans",
      "Window sills and tracks",
      "Cabinet fronts degreased",
      "Detailed bathroom descaling",
    ],
  },
  {
    slug: "office-cleaning",
    name: "Office Cleaning",
    short: "Workspaces that feel ready for Monday.",
    description:
      "After-hours commercial cleaning for studios, clinics and creative offices. Discreet, insured teams keep your space presentable for clients without disrupting your workday.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
    icon: "Briefcase",
    price: "from $159",
    includes: [
      "Desks, monitors and keyboards",
      "Conference rooms and lounges",
      "Kitchenettes and dishware",
      "Restrooms fully sanitized",
      "Trash and recycling rotation",
      "Entryway and glass polish",
    ],
  },
  {
    slug: "window-cleaning",
    name: "Window Cleaning",
    short: "Crystal-clear views, inside and out.",
    description:
      "Streak-free interior and exterior window service using filtered water and lint-free squeegees. Tracks and sills included on every visit.",
    image: "https://images.pexels.com/photos/16898979/pexels-photo-16898979.jpeg?w=1200&q=80",
    icon: "Square",
    price: "from $99",
    includes: [
      "Interior glass polish",
      "Exterior wash up to 2 stories",
      "Tracks and sills detailed",
      "Screens rinsed and replaced",
      "Eco-friendly solutions",
      "Streak-free guarantee",
    ],
  },
  {
    slug: "carpet-cleaning",
    name: "Carpet Cleaning",
    short: "Hot-water extraction that revives every fiber.",
    description:
      "Truck-mounted hot-water extraction lifts deep-set dirt, allergens and odors. Safe for pets and kids, and dry in 3–6 hours.",
    image: "https://images.pexels.com/photos/4176298/pexels-photo-4176298.jpeg?w=1200&q=80",
    icon: "Layers",
    price: "from $149",
    includes: [
      "Pre-treatment for high-traffic zones",
      "Hot-water extraction",
      "Stain spot-treatment",
      "Deodorizer (pet-safe)",
      "Furniture moved and returned",
      "Fast 3–6 hour dry time",
    ],
  },
  {
    slug: "move-in-out-cleaning",
    name: "MoveIn/Out Cleaning",
    short: "Hand over the keys with confidence.",
    description:
      "A complete top-to-bottom clean of empty properties, perfect for landlords, renters chasing a deposit, or anyone moving into a fresh space.",
    image: "https://images.pexels.com/photos/4246098/pexels-photo-4246098.jpeg?w=1200&q=80",
    icon: "Key",
    price: "from $249",
    includes: [
      "Inside all cabinets and drawers",
      "Appliances inside & out",
      "All windows interior",
      "Wall spot-cleaning",
      "Garage sweep included",
      "Detailed final walkthrough",
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export interface Post {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  body: string[];
}

export const posts: Post[] = [
  {
    slug: "deep-clean-checklist",
    title: "The Ultimate Deep Cleaning Checklist for Your Home",
    excerpt: "Room-by-room, what the pros never miss when resetting a home from top to bottom.",
    image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=1600&q=80",
    category: "Guides",
    author: "Marta Lewis",
    date: "May 14, 2026",
    readTime: "8 min read",
    body: [
      "There is a difference between tidying and deep cleaning. A weekly tidy keeps surfaces presentable; a quarterly deep clean reaches the places dust quietly settles for months, the tops of door frames, the seal around the dishwasher, the rails behind the sliding closet door. After eight years and twenty-four thousand visits, we've learned exactly where homes hide their grime.",
      "Start in the kitchen, always. It is the most chemically demanding room and the place a tired cleaner makes the most compromises. Empty the fridge entirely. Wipe every shelf with a 50/50 vinegar solution, dry, then return items one at a time. Pull the appliance forward yes, the whole fridge and vacuum the coils. This single act extends the life of the unit by years.",
      "Next, the oven. Skip the foaming sprays. A paste of baking soda and water left overnight will lift the worst burnt-on residue with nothing but a damp cloth in the morning. The racks come out and soak in the bathtub with a dryer sheet, the fabric softener breaks down baked-on carbon overnight.",
      "Bathrooms reward patience. Start the shower descaler before anything else and let it work while you handle the rest of the room. Toothbrush the grout. Pull the toilet seat off entirely to clean the hinges. Polish chrome with a microfiber cloth - paper towels leave lint that catches the light.",
      "Bedrooms are about textiles. Strip the bed, wash the mattress protector, and vacuum the mattress itself with the upholstery attachment. Rotate the mattress 180°. Wipe the headboard. Pull the bed forward to clean the floor underneath, this is where dust bunnies breed.",
      "Living rooms need vertical attention. Wipe the tops of picture frames, ceiling fan blades and curtain rods. Vacuum upholstery with the brush attachment, paying attention to crevices where coins and crumbs gather. Polish wood with a furniture-grade oil, not a spray.",
      "Finish with floors, every floor, in the same direction, with a fresh mop head. The order matters because everything you've done so far has knocked dust to the floor; cleaning floors first means cleaning them twice.",
    ],
  },
  {
    slug: "eco-friendly-cleaning",
    title: "5 Eco-Friendly Cleaning Products That Actually Work",
    excerpt: "Plant-based and refillable options our teams swear by tested over thousands of homes.",
    image: "https://images.pexels.com/photos/3177257/pexels-photo-3177257.jpeg?w=1600&q=80",
    category: "Eco",
    author: "Jonas Park",
    date: "April 28, 2026",
    readTime: "6 min read",
    body: [
      "Most 'green' cleaning products underperform their conventional counterparts. After three years of in-the-field testing across thousands of homes, our teams identified five that genuinely work, no compromise required.",
      "Branch Basics Concentrate tops the list. One bottle becomes five all-purpose, bathroom, glass, laundry and hand soap. The plant-based surfactants cut grease as well as anything we've tried, and the refillable system means we ship one bottle per quarter instead of dozens.",
      "Blueland tablets handle bathroom and glass duty. The tablets dissolve in tap water inside reusable bottles, eliminating the packaging waste that ordinary spray bottles generate.",
      "For floors, we use a simple mix: a tablespoon of Dr. Bronner's Sal Suds in a gallon of warm water. Cuts through anything, rinses clean, and the bottle lasts a working team three months.",
      "Bar Keepers Friend remains, somewhat surprisingly, one of the most effective cleansers ever made. The original powder is non-toxic, biodegradable, and a single can outlasts any aerosol scrub.",
      "Finally, a Norwex enviro cloth and a bottle of distilled water handle the majority of light cleaning in any room. The microfiber weave traps 99% of bacteria mechanically, no chemicals required.",
    ],
  },
  {
    slug: "cleaning-schedule-tips",
    title: "How to Build a Weekly Cleaning Schedule You'll Actually Stick To",
    excerpt: "Stop reactive cleaning. A repeating rhythm makes the work invisible.",
    image: "https://images.pexels.com/photos/36713462/pexels-photo-36713462.jpeg?w=1600&q=80",
    category: "Habits",
    author: "Priya Shah",
    date: "April 11, 2026",
    readTime: "5 min read",
    body: [
      "The reason most cleaning schedules fail is that they treat every task as equal. They aren't. A bathroom needs attention weekly; baseboards need it twice a year. Build your schedule around frequency tiers, not days of the week.",
      "Tier one: daily. Make the bed, run the dishwasher, wipe the kitchen counter. Ten minutes total, every day, no exceptions. These three habits prevent 80% of the visual chaos that makes a home feel out of control.",
      "Tier two: weekly. Vacuum, mop, full bathroom scrub, change linens. Pick a single day and protect it. Sunday mornings work for most people because the work is done before the week begins.",
      "Tier three: monthly. Dust ceiling fans, wipe baseboards in high-traffic rooms, clean inside the microwave, descale the kettle. Block 90 minutes on the first Saturday of each month.",
      "Tier four: quarterly. Wash windows, clean inside the oven, rotate the mattress, deep-clean the fridge. These are the tasks people put off forever. Schedule them like dentist appointments — calendar invites, alerts, the whole production.",
      "If a tier ever feels overwhelming, the answer isn't to push harder. It's to outsource. Booking a professional clean once a month resets the entire system and keeps the weekly rhythm sustainable.",
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const testimonials = [
  { name: "Sarah K.", location: "Brooklyn, NY", text: "The team transformed our brownstone after a renovation - every surface, even the ones I'd given up on. Unreal.", avatar: "https://i.pravatar.cc/80?img=1" },
  { name: "Marcus T.", location: "Austin, TX", text: "I've used four cleaning services. CleanNest is the first one that sent the same team back every visit. Game changer.", avatar: "https://i.pravatar.cc/80?img=2" },
  { name: "Elena R.", location: "Seattle, WA", text: "Booking in 60 seconds wasn't marketing, it actually took 60 seconds. And the clean was immaculate.", avatar: "https://i.pravatar.cc/80?img=3" },
  { name: "David L.", location: "Chicago, IL", text: "Move-out clean got my entire deposit back. Landlord said it was cleaner than when I moved in.", avatar: "https://i.pravatar.cc/80?img=4" },
  { name: "Yumi N.", location: "Portland, OR", text: "Eco-friendly products that actually work. Our toddler crawls around the kitchen floor without me wincing.", avatar: "https://i.pravatar.cc/80?img=5" },
  { name: "Tom B.", location: "Boston, MA", text: "Office cleans happen overnight and we've never once noticed disruption, only the results. Highly recommend.", avatar: "https://i.pravatar.cc/80?img=6" },
];

export const team = Array.from({ length: 8 }).map((_, i) => ({
  name: ["Marta Lewis", "Jonas Park", "Priya Shah", "Dani Costa", "Liam O'Brien", "Naomi Tate", "Sergio Vega", "Hana Ito"][i],
  role: ["Founder & CEO", "Head of Operations", "Lead Trainer", "Senior Cleaner", "Quality Manager", "Customer Care", "Eco Specialist", "Field Supervisor"][i],
  bio: "Eight years in the field. Obsessed with the little details most people never notice, until they do.",
  image: `https://i.pravatar.cc/400?img=${i + 1}`,
  quote: ["Clean is a feeling, not a checklist.", "If it's worth doing, it's worth doing twice.", "Train the eye, the hands follow.", "Every home tells a story.", "Standards travel.", "Listen first, scrub second.", "The planet is the long client.", "Calm rooms, calm minds."][i],
}));
