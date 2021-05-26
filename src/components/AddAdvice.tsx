import { BiDonateHeart } from "react-icons/bi";
import { useRef, useState } from "react";
import moment from "moment";
import { nanoid } from "nanoid";
import { Advice } from "../types/Advice";
import getNextWaitTime from "../common/Utils";
type AddAdviceProps = {
  onSendAdvice: (advice: Advice) => void;
};
const AddAdvice = ({ onSendAdvice }: AddAdviceProps) => {
  const clearData = {
    owner: "",
    date: "",
    note: "",
    contact: "",
  };
  const [toggleForm, setToggleForm] = useState(false);
  const [formData, setFormData] = useState(clearData);
  const [hasSubmitted, setSubmitted] = useState(false);
  const currentWaitTimeTerm = useRef(0);
  const formDataPublish = () => {
    if (
      formData.note.trim() === "" ||
      formData.contact !== "" ||
      formData.contact === null
    ) {
      return;
    }
    const adviceInfo = {
      id: nanoid(),
      owner: formData.owner.trim() === "" ? "Anonymous" : formData.owner,
      date: moment(),
      note: formData.note.trim(),
    };
    onSendAdvice(adviceInfo);
    setFormData(clearData);
    setToggleForm(!toggleForm);
    setSubmitted(true);
    setTimeout(
      () => setSubmitted(false),
      getNextWaitTime(currentWaitTimeTerm.current++)
    );
  };

  return (
    <div>
      <button
        onClick={() => {
          setToggleForm(!toggleForm);
        }}
        className={`hover:bg-indigo-700 bg-sku-darker text-white px-2 py-3 w-full text-left rounded-t-md ${
          toggleForm ? "rounded-t-md" : "rounded-md"
        }`}
      >
        <div>
          <BiDonateHeart className="inline-block" /> Donate Your 5 Cents
        </div>
      </button>
      {toggleForm && (
        <div className="border-r-2 border-b-2 border-l-2 border-light-blue-500 rounded-b-md pl-4 pr-4 pb-4">
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="owner"
              className="block text-sm font-medium text-gray-700"
            >
              Your Name
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <input
                onChange={(event) => {
                  setFormData({ ...formData, owner: event.target.value });
                }}
                value={formData.owner}
                type="text"
                name="owner"
                id="owner"
                placeholder="Only If You Wish To Be Remembered..."
                maxLength={20}
                className="px-1 max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-md border-gray-300  rounded-md"
              />
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start  sm:pt-5">
            <label
              htmlFor="note"
              className="block text-sm font-medium text-gray-700"
            >
              Notes
            </label>
            <div className="mt-1 sm:mt-0 sm:col-span-2">
              <textarea
                onChange={(event) => {
                  setFormData({ ...formData, note: event.target.value });
                }}
                value={formData.note}
                id="note"
                name="note"
                rows={4}
                maxLength={1500}
                required
                className="px-1 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-md border-gray-300 rounded-md"
                placeholder="Your Advice Please..."
              ></textarea>
            </div>
          </div>
          <div className="sm:grid sm:grid-cols-3 invisible sm:gap-4 sm:items-start hidden sm:pt-5">
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-gray-700"
            >
              Contact
            </label>
            <input
              id="contact"
              name="contact"
              size={40}
              type="text"
              value={formData.contact}
              maxLength={10}
              onChange={(event) => {
                setFormData({ ...formData, contact: event.target.value });
              }}
            />
          </div>
          <div>
            <div className="flex justify-end">
              <button
                onClick={formDataPublish}
                disabled={hasSubmitted || formData.note.length === 0}
                type="submit"
                className={`ml-3 inline-flex justify-center disabled:opacitiy-50 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md  ${
                  hasSubmitted || formData.note.length === 0
                    ? ""
                    : "hover:bg-indigo-700"
                } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sku-dark 
                                ${
                                  formData.note.length > 0 && !hasSubmitted
                                    ? "text-sku-light bg-sku-darker"
                                    : "text-sku-dark bg-sku-light"
                                }`}
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddAdvice;
