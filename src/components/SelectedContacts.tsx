import React from "react";

type Contact = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
};

interface SelectedContactsProps {
  contacts: Contact[];
  checkedContacts: number[];
}

const SelectedContacts: React.FC<SelectedContactsProps> = ({
  contacts,
  checkedContacts,
}) => {
  const selectedContacts = contacts.filter((contact) =>
    checkedContacts.includes(contact.id)
  );

  return (
    <div className="bg-white shadow rounded p-4 mt-4">
      <h2 className="text-lg font-semibold">Selected Contacts</h2>
      {selectedContacts.map((contact) => (
        <div key={contact.id} className="mb-2">
          <p>Name: {`${contact.firstName} ${contact.lastName}`}</p>
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <p>Address: {contact.address}</p>
        </div>
      ))}
    </div>
  );
};

export default SelectedContacts;
