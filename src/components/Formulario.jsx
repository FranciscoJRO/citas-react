import React from 'react'
import { useState, useEffect} from 'react'


const Formulario = ({setPacientes}) => {
  //Usamos array destructuring para extraer los valores del state
  const [nombre, setNombre] = useState('');
  const [propietario, setPropietario] = useState('');
  const [email, setEmail] = useState('');
  const [alta, setAlta] = useState('');
  const [sintomas, setSintomas] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    //Validar el formulario
    if ([nombre, propietario, email, alta, sintomas].includes('')) {
      console.log('Hay almenos un campo vacio');
      setError(true);
    }else{
      console.log('Todos los campos estan llenos');
      setError(false);
    }
  }
  
  return (
    <div className="md:w-1/2 lg:w-2/5 mb-5 mx-6">
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center mb-10'>
        Añade Pacientes y {''}
        <span className="text-indigo-600 font-bold">Administralos</span>
      </p>
      <form 
        onSubmit={handleSubmit}
        className='bg-white shadow-md rounded-lg py-10 px-5'>

        {error && (
            <div className='bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded'>
                <p>Todos los campos son oblogatorios </p>
            </div>
        )}

        <div className='mb-5'>
          <label htmlFor="mascota" className='block text-gray-700 uppercase font-bold' > 
          Nombre de la Mascota
          </label>
          <input
          id='mascota'
            type="text"
            placeholder="Nombre de la Mascota"
            className=' border-2 w-full mt-2 p-2 placeholder-emerald-500 rounded-md'
            value={nombre}
            onChange={(e) => setNombre(e.target.value)} //Actualizamos el state con el valor del input
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="propietario" className='block text-gray-700 uppercase font-bold' > 
          Nombre del Propietario
          </label>
          <input
          id='propietario'
            type="text"
            placeholder="Nombre del Propietario"
            className='w-full border-2 mt-2 p-2 placeholder-emerald-500 rounded-md'
            value={propietario}
            onChange={(e) => setPropietario(e.target.value)} //Actualizamos el state con el valor del input
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="email" className='block text-gray-700 uppercase font-bold' > 
          Email de contacto
          </label>
          <input
          id='email'
            type="email"
            placeholder="Email de contacto del propietario"
            className='w-full border-2 mt-2 p-2 placeholder-emerald-500 rounded-md'
            value={email}
            onChange={(e) => setEmail(e.target.value)} //Actualizamos el state con el valor del input
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="alta" className='block text-gray-700 uppercase font-bold' > 
        Dia de Alta del Paciente
          </label>
          <input
          id='alta'
            type="date"
            className='w-full border-2 mt-2 p-2 placeholder-emerald-500 rounded-md'
            value={alta}
            onChange={(e) => setAlta(e.target.value)} //Actualizamos el state con el valor del input
          />
        </div>
        <div className='mb-5'>
          <label htmlFor="sintomas" className='block text-gray-700 uppercase font-bold' > 
        Sintomas
          </label>
          <textarea id="sintomas"
          className='w-full border-2 mt-2 p-2 placeholder-emerald-500 rounded-md'
          placeholder='Describa los sintomas del paciente'
          value={sintomas}
            onChange={(e) => setSintomas(e.target.value)} //Actualizamos el state con el valor del input
          />
        </div>
        <input type="submit"
               className ="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-800 rounded-md
               cursor-pointer transition duration-300 ease-in-out hover:shadow-lg hover:scale-105 transform hover:transition-transform"
               value={"Agregar Paciente"}
        />
      </form>
    </div>
  )
}

export default Formulario



