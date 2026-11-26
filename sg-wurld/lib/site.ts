export const site = {
  name: "SG Wurld",
  tagline: "Aesthetic Life",
  phoneDisplay: "0806 595 5054",
  phone: "08065955054",
  whatsapp: "2348065955054", // international format, no +
  email: "sgwrld@gmail.com",
  instagram: "https://instagram.com/sgwurld",
  // Search link until the client shares the exact page URL. Replace with https://facebook.com/<page>
  facebook: "https://www.facebook.com/search/top?q=sg%20wurld",
};

export const groups = [
  {
    name: "Design and build",
    rows: [
      { t: "Architectural drawing", d: "Site plans and blueprints." },
      { t: "Building construction", d: "Construction, maintenance and cleaning." },
      { t: "Landscaping", d: "Landscape design, event planning and decorations." },
      { t: "Electrical and solar", d: "Electrical appliances, solar installation and maintenance of all sections." },
      { t: "Piping and plumbing", d: "Pipe and plumbing work, with maintenance." },
    ],
  },
  {
    name: "Materials and parts",
    rows: [
      { t: "Building materials", d: "Roofing materials, wood, iron, cement, tiles, toilet fittings, curtains, paint, doors, iron bending and construction. Building materials of all types." },
      { t: "Automobile and car parts", d: "Car parts, maintenance, restoration and upgrades." },
    ],
  },
  {
    name: "Property, hire and events",
    rows: [
      { t: "Land and real estate", d: "Land, real estate, home and apartment rental." },
      { t: "Hotel booking", d: "5-star hotel booking." },
      { t: "Heavy-duty truck rental", d: "Heavy-duty trucks for rent." },
      { t: "Event planning and interior decoration", d: "Event planning and interior decoration." },
    ],
  },
];

export const serviceNames = groups.flatMap((g) => g.rows.map((r) => r.t));
