import { Paciente } from "./Paciente"

export const ListadoPacientes = ({ pacientes, setPaciente, eliminarPaciente }) => {

  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {
        (pacientes && pacientes.length > 0) ? (
          <>
            <h2 className="font-black text-3xl text-center">ListadoPacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Administra tus {''}
              <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
            </p>

            {pacientes.map(paciente => (
              <Paciente
                key={paciente.id}
                //forma antigua de hacerlo
                paciente={paciente} //ya no es necesario esto porque ya esta en el paciente
                //{...paciente} es una forma moderna para react
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              />
            ))}
          </>
        ) : (
          <>
            <h2 className="font-black text-3xl text-center">No hay pacientes</h2>
            <p className="text-xl mt-5 mb-10 text-center">
              Comienza agregando pacientes {''}
              <span className="text-indigo-600 font-bold"> y apareceran en este lugar</span>
            </p>

          </>
        )
      }



    </div>
  )
}