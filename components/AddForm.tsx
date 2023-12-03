import { createAuto } from '@/app/actions';
import React from 'react';

export const AddForm: React.FC = () => {
  return (
    <form action={createAuto}>
      <label>
        Image URL:
        <input
          type="text"
          name="imageUrl"
          value="https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2023-09/1_3.jpg?itok=JTrbT080"
        />
      </label>
      <br />
      <label>
        Brand:
        <input type="text" name="brand" value="3" />
      </label>
      <br />
      <label>
        Model Name:
        <input type="text" name="modelName" value="R8" />
      </label>
      <br />
      <label>
        Price:
        <input type="text" name="price" value="1000000" />
      </label>
      <br />
      <label>
        Year:
        <input type="text" name="year" value="2023" />
      </label>
      <br />
      <label>
        Color:
        <input type="text" name="color" value="Black" />
      </label>
      <br />
      <label>
        Engine Type:
        <input type="text" name="engineType" value="DIESEL" />
      </label>
      <br />
      <label>
        Transmission:
        <input type="text" name="transmission" value="AUTOMATIC" />
      </label>
      <br />
      <label>
        Power Reserve:
        <input type="text" name="powerReserve" value="0" />
      </label>
      <br />
      <label>
        Equipment:
        <input type="text" name="equipment" />
      </label>
      <br />
      <label>
        User:
        <input type="text" name="user" />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};
