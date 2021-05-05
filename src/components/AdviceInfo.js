import moment from "moment";
import { BiHide } from "react-icons/bi"

const AdviceInfo = ({ advice, onDeleteAdvice }) => {
    return (
        <li className="group hover:bg-sku-light hover:shadow-lg grid grid-cols-1 sm:grid-cols-3 py-4 px-2">
            <div className="max-w-prose text-left sm:col-span-2 overflow-auto">{advice.note}</div>
            <div className="justify-items-end grid items-center content-center">
                <span>{moment(advice.date).format('LLL')}</span>
                <div><b className="font-bold text-sku-darker">Owner:</b> {advice.owner}</div>
                <button type="button" onClick={() => onDeleteAdvice(advice.id)}
                    aria-label="hide advice"
                    className="p-1.5 mr-1.5 mt-1 rounded text-white bg-sku-darker hover:bg-sku-light hover:text-sku-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <BiHide /></button>
            </div>

        </li>
    )
}

export default AdviceInfo;