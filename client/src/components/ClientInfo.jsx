import { FaEnvelope, FaPhone, FaIdBadge } from "react-icons/fa";

export const ClientInfo = ({ client }) => {
  return (
    <>
      <h3 className="mt-3">Client Information</h3>
      <ul className="list-group">
        <li className="list-group-item">
          <FaIdBadge className="icon" /> {client.name}
        </li>
        <li className="list-group-item">
          <FaEnvelope className="icon" /> {client.email}
        </li>
        <li className="list-group-item">
          <FaPhone className="icon" /> {client.phone}
        </li>
      </ul>
    </>
  );
};
