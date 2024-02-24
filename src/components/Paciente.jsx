import React from 'react'

const Paciente = () => {
  return (
        <div className='m-3 bg-white shadow-md px-5 py-10 rounded-lg'>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
          <span className='font-normal normal-case'>Jack</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Propietrario: {''}
          <span className='font-normal normal-case'>Francisco</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
          <span className='font-normal normal-case'>francisco.reynoso2000@gmail.com</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Fecha de Alta: {''}
          <span className='font-normal normal-case'>28/12/2006</span>
        </p>
        <p className='font-bold mb-3 text-gray-700 uppercase'>Síntomas: {''}
          <span className='font-normal normal-case'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tenetur, vero dolorem quo doloribus distinctio saepe deleniti corporis exercitationem qui veniam mollitia pariatur dicta facilis architecto? Non earum delectus nulla quo?</span>
        </p>
      </div>
  )
}

export default Paciente
