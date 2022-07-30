import React from 'react'
import { createCar } from './CarService';
import useFetch from "./Hooks/useFetch";

const App = () => {
  const { request } = useFetch();
  const [car, setCar] = React.useState('');
  const [driver, setDriver] = React.useState('');
  const [model, setModel] = React.useState('');

  const handleCarSubmit = async (e) => {
    e.preventDefault();

    const { response } = await request(createCar(
      {
        car: car,
        driver: driver,
        model: model
      }
    ))
    console.log(response)
    setCar('');
    setDriver('');
    setModel('');
  }

  return (
    <>
      <form onSubmit={handleCarSubmit}>
        <input placeholder="car" value={car} onChange={({ target }) => setCar(target.value)} />
        <input placeholder="driver" value={driver} onChange={({ target }) => setDriver(target.value)} />
        <input placeholder="model" value={model} onChange={({ target }) => setModel(target.value)} />
        <button>Create Car</button>
      </form>
    </>
  )
}

export default App