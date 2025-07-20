import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  username,
  email,
  address,
  phone,
  website,
  company,
}) => {
  return (
    <div className="border rounded-lg p-4">
      <h2>{name}</h2>
      <p>@{username}</p>
      <p>{email}</p>
      <p>
        {address.street}, {address.city}
      </p>
      <p>{phone}</p>
      <p>{website}</p>
      <p>{company.name}</p>
    </div>
  );
};

export default UserCard;
