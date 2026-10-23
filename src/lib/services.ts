export type Service = {
  id: string;
  title: string;
  summary: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "chipping",
    title: "Chipping Work",
    summary:
      "Manual and mechanical removal of rust, scale, old paint and marine deposits.",
    points: [
      "Chipping of hull, decks, tanks, pipelines, machinery foundations and structural areas.",
      "Surface preparation before blasting and painting.",
      "Use of pneumatic/electric chipping tools as required.",
    ],
  },
  {
    id: "sand-blasting",
    title: "Sand Blasting",
    summary:
      "Abrasive blasting for removal of rust, old paint, scale and corrosion.",
    points: [
      "Surface preparation as per required blasting specification.",
      "Preparation of steel surfaces to specified standards such as SA 1, SA 2, SA 2.5, etc.",
      "Suitable for hulls, decks, tanks, structures and offshore equipment.",
    ],
  },
  {
    id: "grit-blasting",
    title: "Grit Blasting / Copper Slag Blasting",
    summary:
      "Heavy-duty abrasive blasting using copper slag/grit for surface preparation.",
    points: [
      "Removal of corrosion and existing coating.",
      "Preparation of steel surfaces before application of protective coatings.",
      "Carried out on vessel hulls, tanks, decks and offshore structures.",
    ],
  },
  {
    id: "jet-washing",
    title: "High-Pressure Jet Washing / Water Jetting",
    summary:
      "High-pressure cleaning of hulls, decks, tanks and other marine structures.",
    points: [
      "Removal of salt, mud, marine growth, loose paint, dirt and surface contamination.",
      "Hydroblasting/water jetting where abrasive blasting is not permitted.",
      "Suitable for underwater and above-water hull surface preparation.",
    ],
  },
  {
    id: "hull-cleaning",
    title: "Hull Cleaning",
    summary:
      "Removal of barnacles, marine growth, rust, scale and fouling from vessel hulls.",
    points: [
      "Cleaning of underwater and above-water hull areas.",
      "High-pressure water washing and mechanical cleaning.",
      "Propeller, rudder and other underwater-area cleaning as required.",
    ],
  },
  {
    id: "tank-cleaning",
    title: "Tank Cleaning",
    summary:
      "Cleaning of all shipboard tank types, in port, anchorage or dry dock.",
    points: [
      "Fuel Oil, Diesel Oil, Lubricating Oil and Sludge/Mud Tanks.",
      "Sewage, Fresh Water, Bilge, Cargo, Cement and other designated tanks.",
      "Sludge removal, scraping, manual cleaning, high-pressure washing, degreasing and final cleaning as per condition and client requirement.",
    ],
  },
  {
    id: "painting",
    title: "Painting Work",
    summary:
      "Marine-grade protective coatings applied after proper surface preparation.",
    points: [
      "Painting of hulls, decks, tanks, machinery spaces and structural areas.",
      "Application of primer, intermediate and finishing coats.",
      "Airless spray, roller or brush application per paint maker's specification and client requirements.",
    ],
  },
  {
    id: "labour-tank-cleaning",
    title: "Labour Supply for Tank Cleaning",
    summary:
      "Experienced, skilled manpower for shipboard tank-cleaning operations.",
    points: [
      "Workers deployed for cleaning, sludge removal, chipping, washing and associated activities.",
      "Manpower provided on a daily/per-shift or project basis.",
    ],
  },
  {
    id: "labour-fabrication",
    title: "Labour Supply for Fabrication",
    summary:
      "Skilled and semi-skilled manpower for ship repair and fabrication activities.",
    points: [
      "Fabrication assistance for structural repairs, steel work and shipboard modifications.",
      "Manpower support for welding, gas cutting, fitting and related activities as required by the client.",
    ],
  },
  {
    id: "ship-offshore",
    title: "Ship & Offshore Platform Services",
    summary: "Our services are available across the full range of vessels and units.",
    points: [
      "Cargo vessels, tankers, offshore supply vessels, tugs and barges.",
      "Workboats, lifeboats/liferafts, offshore platforms and marine structures.",
      "Shipyards and dry docks.",
    ],
  },
];
