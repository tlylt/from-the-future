type LoadingSpinnerProps = {
    shouldShow: boolean
};
const LoadingSpinner = ({ shouldShow }:LoadingSpinnerProps) => {
    return  shouldShow ? (<div className="mx-auto w-20 pt-10 h-screen"><p>Loading...</p><img src={process.env.PUBLIC_URL + "/spinner.png"}
        className="animate-wiggle"
        alt="spinner">
    </img></div>): null;
}

export default LoadingSpinner;