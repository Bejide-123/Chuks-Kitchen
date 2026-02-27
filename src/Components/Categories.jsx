

const categories = [
  {
    name: "Jollof Delights",
    image:
      "https://thumbs.dreamstime.com/b/nigerian-food-party-jollof-rice-fried-chicken-wings-close-nigerian-food-party-jollof-rice-fried-chicken-wings-close-up-112895117.jpg",
  },
  {
    name: "Swallow & Soups",
    image:
      "https://www.shutterstock.com/image-photo/nigerian-pounded-yam-served-egusi-soup-2HPX9BB", // egusi + pounded yam (common swallow example)
  },
  {
    name: "Grills & BBQ",
    image:
      "https://www.seriouseats.com/thmb/sTrpUceCSMNPj-3CGGwyR25Vl2k=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/OzozSokoh_Photographer-AyobamiOgungbe-OzozSokoh-4377e6ada4784370b1b72df4d4a4b1cb.jpg", // Nigerian beef suya skewers
  },
  {
    name: "Sweet Treats",
    image:
      "https://thumbs.dreamstime.com/b/nigerian-puff-puff-chin-chin-popular-nigerian-snacks-nigerian-puff-puff-chin-chin-served-pary-229422393.jpg", // puff-puff & chin-chin combo
  },
  {
    name: "Jollof Delights",
    image:
      "https://thumbs.dreamstime.com/b/nigerian-jollof-rice-traditional-west-african-dish-served-fried-chicken-plantain-delicious-party-food-sweet-413340146.jpg",
  },
  {
    name: "Jollof Delights",
    image:
      "https://thumbs.dreamstime.com/b/jollof-rice-grilled-chicken-close-up-overhead-view-delicious-plate-popular-west-african-dish-430401636.jpg",
  },
];

export default function PopularCategories() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
          Popular Categories
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full cursor-pointer"
            >
              {/* Image container */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Name area - full width, centered, padded */}
              <div className="p-5 flex items-center justify-center flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 text-center">
                  {category.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}