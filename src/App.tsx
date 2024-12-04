import React, { useState } from "react";
import contactsData from "./data/contacts.json";
import ContactFilters from "./components/ContactFilters";
import ContactTable from "./components/ContactTable";
import Pagination from "./components/Pagination";
import SelectedContacts from "./components/SelectedContacts";

type Contact = {
  id: number;
  firstName: string;
  lastName: string;
  dob: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  phone: string;
};

const App: React.FC = () => {
  const [filters, setFilters] = useState({
    firstName: "",
    lastName: "",
    dob: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const [filteredContacts, setFilteredContacts] =
    useState<Contact[]>(contactsData);
  const [currentPage, setCurrentPage] = useState(1);
  const [checkedContacts, setCheckedContacts] = useState<number[]>([]);
  const itemsPerPage = 10;

  const handleFilterChange = (name: string, value: string): void => {
    setFilters({ ...filters, [name]: value });
  };

  const handleSearch = (): void => {
    const filtered = contactsData.filter((contact) => {
      return (
        (filters.firstName === "" ||
          contact.firstName
            .toLowerCase()
            .includes(filters.firstName.toLowerCase())) &&
        (filters.lastName === "" ||
          contact.lastName
            .toLowerCase()
            .includes(filters.lastName.toLowerCase())) &&
        (filters.dob === "" || contact.dob.includes(filters.dob)) &&
        (filters.email === "" ||
          contact.email.toLowerCase().includes(filters.email.toLowerCase())) &&
        (filters.phone === "" || contact.phone.includes(filters.phone)) &&
        (filters.address === "" ||
          contact.address
            .toLowerCase()
            .includes(filters.address.toLowerCase())) &&
        (filters.city === "" ||
          contact.city.toLowerCase().includes(filters.city.toLowerCase())) &&
        (filters.state === "" ||
          contact.state.toLowerCase().includes(filters.state.toLowerCase())) &&
        (filters.zip === "" || contact.zip.includes(filters.zip))
      );
    });
    setFilteredContacts(filtered);
  };

  const handleCheckboxChange = (id: number): void => {
    setCheckedContacts((prev) =>
      prev.includes(id)
        ? prev.filter((contactId) => contactId !== id)
        : [...prev, id]
    );
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentContacts = filteredContacts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Choose a contact</h1>
      <ContactFilters
        filters={filters}
        onFilterChange={handleFilterChange}
        onSearch={handleSearch}
      />
      <ContactTable
        contacts={currentContacts}
        checkedContacts={checkedContacts}
        onCheckboxChange={handleCheckboxChange}
      />
      <Pagination
        currentPage={currentPage}
        totalItems={filteredContacts.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
      {checkedContacts.length > 0 && (
        <SelectedContacts
          contacts={filteredContacts}
          checkedContacts={checkedContacts}
        />
      )}
    </div>
  );
};

export default App;
