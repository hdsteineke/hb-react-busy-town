import './App.css';
import React, { useState } from 'react';
import VehicleList from './VehicleList';
import TrafficLight from './TrafficLight';

function App() {
  // track the following state with a few useState hooks:
  // lightColor should be a string that starts out as 'red'
  const [lightColor, setLightColor] = useState('red');
  // lizardSize should be a number that starts out as 10
  const [lizardSize, setLizardSize] = useState(10);
  // alienSize should be a number that starts out as 10
  const [alienSize, setAlienSize] = useState(10);
  // traffic is complicated. It should be an array of strings that starts out as ['car', 'truck']
  const [vehicleType, setVehicles] = useState(['car', 'truck', 'bus', 'motorcycle']);

  const ATTACK_MODIFIER = 1;

  function handleLizardAttack() {
    setAlienSize(alienSize - ATTACK_MODIFIER);
  }

  function handleAlienAttack() {
    setLizardSize(lizardSize - ATTACK_MODIFIER);
  }

  function handleLizardGrowth() {
    setLizardSize(lizardSize + ATTACK_MODIFIER);
  }

  function handleAlienGrowth() {
    setAlienSize(alienSize + ATTACK_MODIFIER);
  }

  function handleAddCar() {
    vehicleType.push('car');

    setVehicles([...vehicleType]);
  }

  function handleAddTruck() {
    vehicleType.push('truck');

    setVehicles([...vehicleType]);
  }

  function handleAddBus() {
    vehicleType.push('bus');

    setVehicles([...vehicleType]);
  }
  
  function handleAddMotorcycle() {
    vehicleType.push('motorcycle');

    setVehicles([...vehicleType]);
  }

  return (
    <div className="App">
      <div className="fight">
        <div className="monster">
          {/* the width of the alien should be ten times whatever the alien size is in state */}
          <img src="alien.png" width={alienSize * 10} />
          <div className='buttons'>
            {/* when you click this button, the alien's size in state should go up by one */}
            <button onClick={handleAlienGrowth}>Oh no! The alien is gobblin up all the electricity!</button>
            {/* when you click this button, the lizard's size in state should go down by one */}
            <button onClick={handleAlienAttack}>Amazing! The alien zapped the lizard!</button>
          </div>
        </div>
        <div className="monster">
          {/* the width of the lizard should be ten times whatever the alien size is in state */}
          <img src="lizard.png" width={lizardSize * 10} />
          <div className="buttons">
            {/* when you click this button, the lizard's size in state should go up by one */}
            <button onClick={handleLizardGrowth}>Yegads! The lizard is ramping up to its final form!</button>
            {/* when you click this button, the alien's size in state should go up by one */}
            <button onClick={handleLizardAttack}>Oh my! The lizard chomped down on the alien!</button>
          </div>
        </div>
      </div>
      <TrafficLight color={lightColor} />
      <div className="buttons">
        {/* when you click this button, the color of the light in state should be set to 'red' */}
        <button onClick={() => setLightColor('red')}>Red</button>
        {/* when you click this button, the color of the light in state should be set to 'yellow' */}
        <button onClick={() => setLightColor('yellow')}>Yellow</button>
        {/* when you click this button, the color of the light in state should be set to 'green' */}
        <button onClick={() => setLightColor('green')}>Green</button>
      </div>
      {/* 
      the VehicleList component takes in one prop: vehicles.
      This prop should be an array of strings like ['car', 'truck', 'truck', 'car', 'bus'].
      Do you have something like that in state that you could pass as a vehicles prop? 
      */}
      <VehicleList vehicles={vehicleType}/>
      <div className='buttons'>
        {/* This part is weird */}
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'car' to the end */}
        <button onClick={handleAddCar}>Car</button>
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'bus' to the end */}
        <button onClick={handleAddBus}>Bus</button>
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'truck' to the end */}
        <button onClick={handleAddTruck}>Truck</button>
        {/* On click, you should set the traffic in state to be a copy of the same array that's already in state, but immutably add a 'motorcycle' to the end */}
        <button onClick={handleAddMotorcycle}>Motorcycle</button>
      </div>

    </div>
  );
}

export default App;

