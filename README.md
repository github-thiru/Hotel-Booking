<<<<<<< HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
=======
# Hotel-Booking
>>>>>>> e93861f74a3519b3e18f16e1bef780873bf592ba

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Hotel, Search, X, MapPin, Users, Calendar } from 'lucide-react';

interface HotelData {
  id: number;
  name: string;
  location: string;
  price: number;
  roomTypes: string[];
  image: string;
}

const hotelData: HotelData[] = [
  {
    id: 1,
    name: "Luxury Ocean View",
    location: "Malibu, California",
    price: 299,
    roomTypes: ["King Suite", "Ocean View"],
    image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    name: "Mountain Lodge Resort",
    location: "Aspen, Colorado",
    price: 199,
    roomTypes: ["Double Room", "Family Suite"],
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    name: "Urban Boutique Hotel",
    location: "New York City",
    price: 399,
    roomTypes: ["Penthouse", "Deluxe Room"],
    image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&q=80"
  }
];

function App() {
  const [search, setSearch] = useState("");
  const [priceRange, setPriceRange] = useState(500);
  const [roomType, setRoomType] = useState("");
  const [selectedHotel, setSelectedHotel] = useState<HotelData | null>(null);
  const [showModal, setShowModal] = useState(false);

  const filteredHotels = hotelData.filter((hotel) => {
    return (
      (hotel.name.toLowerCase().includes(search.toLowerCase()) ||
        hotel.location.toLowerCase().includes(search.toLowerCase())) &&
      hotel.price <= priceRange &&
      (roomType === "" || hotel.roomTypes.includes(roomType))
    );
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Hotel className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold">Luxury Haven</span>
            </div>
            <div className="flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search hotels..."
                  className="pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Price Range Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Maximum Price: ${priceRange}
              </label>
              <input
                type="range"
                min="100"
                max="500"
                step="50"
                value={priceRange}
                onChange={(e) => setPriceRange(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>

            {/* Room Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Room Type
              </label>
              <select
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">All Types</option>
                <option value="King Suite">King Suite</option>
                <option value="Ocean View">Ocean View</option>
                <option value="Double Room">Double Room</option>
                <option value="Family Suite">Family Suite</option>
                <option value="Penthouse">Penthouse</option>
                <option value="Deluxe Room">Deluxe Room</option>
              </select>
            </div>
          </div>
        </div>

        {/* Hotel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHotels.map((hotel) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-white px-4 py-2 rounded-full">
                  <span className="font-semibold text-lg">${hotel.price}</span>
                  <span className="text-gray-500">/night</span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{hotel.name}</h3>
                <div className="flex items-center text-gray-600 mb-4">
                  <MapPin size={18} className="mr-1" />
                  <span>{hotel.location}</span>
                </div>
                <div className="mb-4">
                  <p className="text-sm text-gray-600">Room Types:</p>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {hotel.roomTypes.map((type, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => {
                    setSelectedHotel(hotel);
                    setShowModal(true);
                  }}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold
                           hover:bg-blue-700 transition-colors duration-200"
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-xl shadow-xl max-w-md w-full mx-4"
            >
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-semibold">Confirm Booking</h3>
                  <button
                    onClick={() => setShowModal(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <X size={24} />
                  </button>
                </div>
                
                {selectedHotel && (
                  <div className="space-y-4">
                    <div className="relative h-48 rounded-lg overflow-hidden">
                      <img
                        src={selectedHotel.image}
                        alt={selectedHotel.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="text-xl font-semibold">{selectedHotel.name}</h4>
                      <p className="flex items-center text-gray-600">
                        <MapPin size={18} className="mr-1" />
                        {selectedHotel.location}
                      </p>
                      <p className="text-2xl font-bold text-blue-600">
                        ${selectedHotel.price}
                        <span className="text-sm text-gray-500 font-normal">/night</span>
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Check-in
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <input
                            type="date"
                            className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-medium text-gray-700">
                          Check-out
                        </label>
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                          <input
                            type="date"
                            className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-gray-700">
                        Guests
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                        <select className="pl-10 w-full p-2 border rounded-lg focus:ring-2 focus:ring-blue-500">
                          <option>1 Guest</option>
                          <option>2 Guests</option>
                          <option>3 Guests</option>
                          <option>4 Guests</option>
                        </select>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6 bg-gray-50 rounded-b-xl">
                <div className="flex gap-4">
                  <button
                    onClick={() => setShowModal(false)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium
                             hover:bg-gray-50 transition-colors duration-200"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      setShowModal(false);
                      alert('Booking confirmed!');
                    }}
                    className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg font-medium
                             hover:bg-blue-700 transition-colors duration-200"
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
