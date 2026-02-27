import React from 'react';

const menuItems = [
  {
    title: "Spicy Tilapia Pepper Soup",
    description:
      "A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy.",
    price: "₦3,500",
    image:
      "https://canadiancookingadventures.com/wp-content/uploads/2022/10/Nigerian-Fish-Pepper-Soup.jpg",
  },
  {
    title: "Jollof Rice & Fried Chicken",
    description:
      "Our signature Jollof rice, cooked to perfection, served with succulent fried chicken.",
    price: "₦3,500",
    image:
      "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=1200&auto=format&fit=crop&q=90",
  },
  {
    title: "Jollof Rice & Smoked Chicken",
    description:
      "Our signature Jollof rice, cooked to perfection, served with succulent smoked chicken.",
    price: "₦3,500",
    image:
      "https://thumbs.dreamstime.com/b/nigerian-jollof-rice-traditional-west-african-dish-served-fried-chicken-plantain-delicious-party-food-sweet-413340146.jpg",
  },
  {
    title: "Egusi Soup & Pounded Yam",
    description:
      "Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam.",
    price: "₦3,500",
    image:
      "https://www.istockphoto.com/photo/egusi-soup-with-pounded-yam-gm526568216-92619957",
  },
  {
    title: "Jollof Rice & Grilled Chicken",
    description:
      "Classic party-style Jollof rice served with perfectly grilled and peppered chicken.",
    price: "₦3,500",
    image:
      "https://thumbs.dreamstime.com/b/nigerian-food-party-jollof-rice-fried-chicken-wings-close-nigerian-food-party-jollof-rice-fried-chicken-wings-close-up-112895117.jpg",
  },
  {
    title: "Peppered Goat Meat & Jollof",
    description:
      "Spicy peppered goat meat paired with our signature smoky Jollof rice – a crowd favorite.",
    price: "₦3,500",
    image:
      "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=1200&auto=format&fit=crop&q=90",
  },
];

function ChefsSpecials() {
  return (
    <section className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-10">
          Chef's Specials
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 flex-grow line-clamp-3">
                  {item.description}
                </p>

                <div className="mt-auto flex items-center justify-between">
                  <span className="text-xl font-bold text-orange-600">
                    {item.price}
                  </span>

                  <button
                    className="bg-orange-500 hover:bg-orange-600 text-white font-medium 
                             py-2.5 px-5 rounded-lg transition-colors duration-200 text-sm
                             focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2"
                  >
                    Add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ChefsSpecials;