import { BiDonateHeart } from "react-icons/bi";
import { useState } from "react";
import moment from "moment";
import { nanoid } from "nanoid";
const AddAdvice = ({ onSendAdvice, lastId }) => {
    const clearData = {
        owner: '',
        date: '',
        note: '',
        contact: '',
    };
    let [toggleForm, setToggleForm] = useState(false);
    let [formData, setFormData] = useState(clearData);

    const formDataPublish = () => {
        console.log(formData.contact);
        if (formData.note.trim() === "" || formData.contact !== "" || formData.contact === null) {
            return
        }
        const adviceInfo = {
            id: nanoid(),
            owner: formData.owner.trim() === "" ? "Anonymous" : formData.owner,
            date: moment(),
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
                                placeholder="Only If You Wish To Be Remembered..."
                                maxLength="20"
                                className="px-1 max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-md border-gray-300  rounded-md" />
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
                                id="note" name="note" rows="4"
                                maxLength="1000"
                                required
                                className="px-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-md border-gray-300 rounded-md" placeholder="Your Advice Please..."></textarea>
                        </div>
                    </div>
                    <div className="sm:grid sm:grid-cols-3 invisible sm:gap-4 sm:items-start hidden sm:pt-5">
                        <label htmlFor="contact" className="block text-sm font-medium text-gray-700">Contact</label>
                        <input id="contact" name="contact" size="40" type="text"
                            value={formData.contact}
                            maxLength="10"
                            onChange={(event) => { setFormData({ ...formData, contact: event.target.value }) }} />
                    </div>
                    <div className="pt-5">
                        <div className="flex justify-end">
                            <button
                                onClick={formDataPublish}
                                type="submit" className={`ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md  hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sku-dark ${formData.note.length > 0 ? "text-sku-light bg-sku-darker" : "text-sku-dark bg-sku-light"}`}>
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