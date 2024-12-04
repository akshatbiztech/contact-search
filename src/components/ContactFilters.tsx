import React from "react";

interface ContactFiltersProps {
  filters: { [key: string]: string };
  onFilterChange: (name: string, value: string) => void;
  onSearch: () => void;
}

const ContactFilters: React.FC<ContactFiltersProps> = ({
  filters,
  onFilterChange,
  onSearch,
}) => {
  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    onFilterChange(name, value);
  };

  return (
    <div className="bg-white shadow rounded p-4 mb-4">
      <h2 className="text-lg font-semibold mb-4">Search for a Contact</h2>
      <div className="grid grid-cols-2 gap-6">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              className="border p-2 rounded w-full"
              value={filters.firstName}
              onChange={handleFilterChange}
            />
          </div>
          <div>
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              className="border p-2 rounded w-full"
              value={filters.lastName}
              onChange={handleFilterChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="dob">
              Date of Birth
            </label>
            <input
              type="date"
              name="dob"
              id="dob"
              className="border p-2 rounded w-full"
              value={filters.dob}
              onChange={handleFilterChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-1">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="address">
              Street Address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Street Address"
              className="border p-2 rounded w-full"
              value={filters.address}
              onChange={handleFilterChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              className="border p-2 rounded w-full"
              value={filters.email}
              onChange={handleFilterChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="phone">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone"
              className="border p-2 rounded w-full"
              value={filters.phone}
              onChange={handleFilterChange}
            />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1" htmlFor="city">
              City
            </label>
            <input
              type="text"
              name="city"
              id="city"
              placeholder="City"
              className="border p-2 rounded w-full"
              value={filters.city}
              onChange={handleFilterChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="state">
              State
            </label>
            <select
              name="state"
              className="border p-2 rounded"
              value={filters.state}
              onChange={handleFilterChange}
            >
              <option value=""></option>
              <option value="AK">Alaska</option>
              <option value="CA">California</option>
              <option value="NY">New York</option>
              <option value="TX">Texas</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="zip">
              Zip
            </label>
            <input
              type="text"
              name="zip"
              id="zip"
              placeholder="Zip"
              className="border p-2 rounded w-full"
              value={filters.zip}
              onChange={handleFilterChange}
            />
          </div>
        </div>
      </div>
      <button
        onClick={onSearch}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-6"
      >
        Search
      </button>
    </div>
  );
};

export default ContactFilters;
