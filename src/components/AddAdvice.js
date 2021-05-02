import { BiDonateHeart } from "react-icons/bi";
import { useState } from "react";
const AddAdvice = ({ onSendAdvice, lastId }) => {
    const clearData = {
        owner: '',
        date: '',
        time: '',
        note: '',
    };
    let [toggleForm, setToggleForm] = useState(false);
    let [formData, setFormData] = useState(clearData);

    const formDataPublish = () => {
        const adviceInfo = {
            id: lastId + 1,
            owner: formData.owner,
            date: formData.date,
            time: formData.time,
            note: formData.note,
        };
        onSendAdvice(adviceInfo);
        setFormData(clearData);
        setToggleForm(!toggleForm);
    }

    return (
        <div>
            <button onClick={() => { setToggleForm(!toggleForm) }}
                className={`bg-sku-darker text-white px-2 py-3 w-full text-left rounded-t-md ${toggleForm ? 'rounded-t-md' : 'rounded-md'}`}>
                <div><BiDonateHeart className="inline-block" />  Donate Your 5 Cents</div>
            </button>
            {
                toggleForm &&
                <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="owner" className="block text-sm font-medium text-gray-700">
                            Your Name
          </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input
                                onChange={(event) => { setFormData({ ...formData, owner: event.target.value }) }}
                                value={formData.owner}
                                type="text" name="owner" id="owner"
                                placeholder="If You Wish To Be Remembered"
                                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-md border-gray-300  rounded-md" />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700">
                            Date
          </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input onChange={(event) => { setFormData({ ...formData, date: event.target.value }) }}
                                value={formData.date}
                                type="date" name="date" id="date"
                                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-md border-gray-300 rounded-md" />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700">
                            Time
          </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <input onChange={(event) => { setFormData({ ...formData, time: event.target.value }) }}
                                value={formData.time}
                                type="time" name="time" id="time"
                                className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-md border-gray-300 rounded-md" />
                        </div>
                    </div>

                    <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
                        <label htmlFor="note" className="block text-sm font-medium text-gray-700">
                            Notes
          </label>
                        <div className="mt-1 sm:mt-0 sm:col-span-2">
                            <textarea
                                onChange={(event) => { setFormData({ ...formData, note: event.target.value }) }}
                                value={formData.note}
                                id="note" name="note" rows="3"
                                className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Your advice please"></textarea>
                        </div>
                    </div>


                    <div className="pt-5">
                        <div className="flex justify-end">
                            <button
                                onClick={formDataPublish}
                                type="submit" className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-sku-dark bg-sku-light hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sku-dark">
                                Submit
            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default AddAdvice;