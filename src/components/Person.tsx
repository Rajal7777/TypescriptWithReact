import React, { ChangeEvent, FC, useContext, useState } from 'react';
import { AppContext } from '../App';


//we need to pass this enum to the app.tsx also 
export enum Comment {
  first = "nice country",
  second = "great love to visit there"
}
//we can pass enum as props 
interface Props {
  name: string;
  age: number;
  email?: string;  //email? "?" mean optional
  comment: Comment;

}

//Person = ({name, age, email, comment}:Props) 
export const Person: FC<Props> = ({ name, age, email, comment }) => {
  const [country, setCountry] = useState<string | null>("");

  //when you want only certain value 
  type nameType = "Rajal" | "ujwal" | "Baboi";
  const nameSelect: nameType = "Rajal";

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCountry(event.target.value);
  };

  //Access context 
 const {author, ages }= useContext(AppContext) || {};
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{email}</h1>

      <input placeholder='country' onChange={handleChange} />
      {Comment.second}
      {country}
      <hr />
    {author} <br /> {ages} <br /> {email}
    </div> 
  );
};
