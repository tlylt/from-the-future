type FooterProps = {
    shouldShow:boolean,
}
const Footer = ({ shouldShow } : FooterProps) => {
    return shouldShow && (
        <footer className="py-5 bg-sku-light justify-center">
            <small>Have an awesome enhancement idea ? Contribute & Like on <a className="underline" href="https://github.com/tlylt/from-the-future" rel="noopener noreferrer" target="_blank" aria-label="link to github repository">Github</a></small>
            <img className="mx-auto hidden" alt="GitHub Repo stars" src="https://img.shields.io/github/stars/tlylt/from-the-future" />
        </footer>
    )
}

export default Footer;