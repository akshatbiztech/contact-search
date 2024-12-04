import React from "react";

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

interface ContactTableProps {
  contacts: Contact[];
  checkedContacts: number[];
  onCheckboxChange: (id: number) => void;
}

const ContactTable: React.FC<ContactTableProps> = ({
  contacts,
  checkedContacts,
  onCheckboxChange,
}) => {
  return (
    <table className="table-auto w-full bg-white shadow rounded">
      <thead>
        <tr className="bg-gray-200">
          <th></th>
          <th>Name</th>
          <th>DOB</th>
          <th>Address</th>
          <th>City</th>
          <th>State</th>
          <th>Zip</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {contacts.map((contact) => (
          <tr key={contact.id} className="hover:bg-gray-100 cursor-pointer">
            <td>
              <input
                type="checkbox"
                checked={checkedContacts.includes(contact.id)}
                onChange={() => onCheckboxChange(contact.id)}
              />
            </td>
            <td>{contact.firstName + " " + contact.lastName}</td>
            <td>{contact.dob}</td>
            <td>{contact.address}</td>
            <td>{contact.city}</td>
            <td>{contact.state}</td>
            <td>{contact.zip}</td>
            <td>{contact.email}</td>
            <td>{contact.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ContactTable;
