import { Patient } from "../types"
import PatientDedailsItem from "./PatientDedailsItem"
import { usePatientStore } from "../store"
import { toast } from "react-toastify"

type PatientDetailsProps = {
    patient: Patient
}

export default function PatientsDetails({patient} : PatientDetailsProps) {

    const deletePatient = usePatientStore((state) => state.deletePatient)
    const getPatientById = usePatientStore((state) => state.getPatientById)

    const handleClick = () => {
        deletePatient(patient.id)
        toast.error('Paciente eliminado')
    }

  return (
    <div className="mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
        <PatientDedailsItem label='ID'data={patient.id}/>
        <PatientDedailsItem label='Nombre'data={patient.name}/>
        <PatientDedailsItem label='Nombre'data={patient.caretaker}/>
        <PatientDedailsItem label='Nombre'data={patient.email}/>
        <PatientDedailsItem label='Nombre'data={patient.date.toString()}/>

        <div className="flex flex-col lg:flex-row gap-3 justify-between mt-10">
            <button 
                className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
                type="button"
                onClick={() => getPatientById(patient.id)}
                >
                    Editar
            </button>

            <button 
                className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
                type="button"
                onClick={handleClick}
                >
                    Eliminar
            </button>
        </div>

    </div>
  )
}
