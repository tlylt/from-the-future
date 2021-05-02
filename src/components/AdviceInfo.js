import { BiTrash } from "react-icons/bi"

const AdviceInfo = ({ advice, onDeleteAdvice }) => {
    return (
        <li className="grid grid-cols-1 sm:grid-cols-3 py-1">
            <div className="max-w-prose text-left sm:col-span-2">{advice.note}</div>
            <div className="justify-items-end grid items-center content-center">
                <span>{advice.date}</span>
                <div><b className="font-bold text-sku-darker">Owner:</b> {advice.owner}</div>
                <button type="button" onClick={() => onDeleteAdvice(advice.id)}
                    className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <BiTrash /></button>
            </div>

        </li>
    )
}

export default AdviceInfo;