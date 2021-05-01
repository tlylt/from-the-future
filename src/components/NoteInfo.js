import { BiTrash } from "react-icons/bi"

const AppointmentInfo = ({ appointment, onDeleteAppointment }) => {
    return (
        <li className="flex items-start">
            <div className="leading-tight text-left max-w-lg">{appointment.aptNotes}</div>
            <div className="flex-col">
                <div className="flex">
                    {/* <span className="flex-none font-medium text-2xl text-blue-500">{appointment.petName}</span> */}
                    <span className="flex-grow text-right">{appointment.aptDate}</span>
                </div>
                <div><b className="font-bold text-blue-500">Owner:</b> {appointment.ownerName}</div>
                <button type="button" onClick={() => onDeleteAppointment(appointment.id)}
                    className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <BiTrash /></button>
            </div>

        </li>
    )
}

export default AppointmentInfo;