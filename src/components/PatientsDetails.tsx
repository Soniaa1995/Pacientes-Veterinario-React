import { Patient } from "../types"
import PatientDedailsItem from "./PatientDedailsItem"

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientsDetails({patient} : PatientDetailsProps) {
  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        <PatientDedailsItem label='ID'data={patient.id}/>
        <PatientDedailsItem label='Nombre'data={patient.name}/>
        <PatientDedailsItem label='Nombre'data={patient.caretaker}/>
        <PatientDedailsItem label='Nombre'data={patient.email}/>
        <PatientDedailsItem label='Nombre'data={patient.date.toString()}/>

        <div className="flex justify-between mt-10">
            <button 
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                type="button"
                >
                    Editar
            </button>

            <button 
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                type="button"
                >
                    Eliminar
            </button>
        </div>

    </div>
  )
}
