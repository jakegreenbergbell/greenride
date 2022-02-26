import React from 'react'

function CarInfoForm() {
  return (
    <form>
      <label>
        Car Make:
        <input type="text" name="Make"/>
      </label>
      <label>
        Car Model:
        <input type="text" name="Model"/>
      </label>
      <input type="submit" value="Submit"/>
    </form>
  );
}

export default CarInfoForm;

