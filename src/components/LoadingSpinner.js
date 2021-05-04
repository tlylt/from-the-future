const LoadingSpinner = ({ shouldShow }) => {
    return shouldShow && (<div className="mx-auto w-20 py-40"><p>Loading...</p><img src={process.env.PUBLIC_URL + "/spinner.png"}
        className="animate-wiggle"
        alt="spinner">
    </img></div>);
}

export default LoadingSpinner;