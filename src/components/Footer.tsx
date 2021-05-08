type FooterProps = {
    shouldShow:boolean,
}
const Footer = ({ shouldShow } : FooterProps) => {
    return shouldShow ? (
        <footer className="py-5 bg-sku-light justify-center flex flex-col">
            <small>Have an awesome enhancement idea ? Contribute & Like on <a className="underline" href="https://github.com/tlylt/from-the-future" rel="noopener noreferrer" target="_blank" aria-label="link to github repository">Github</a></small>
            <div><a className="underline" href="https://www.privacypolicygenerator.info/live.php?token=eaddASETVbpEK8Y4s6cKeKxiScckYu8T" rel="noopener noreferrer" target="_blank" aria-label="link to privacy policy"><small>Privacy Policy</small></a>
            <a className="underline pl-2" href="https://www.termsofusegenerator.net/live.php?token=2IVvK41DVx74s5c43RyWNOYuJFUdNKGH" rel="noopener noreferrer" target="_blank" aria-label="link to privacy policy"><small>Terms of Use</small></a></div>
            <img className="mx-auto hidden" alt="GitHub Repo stars" src="https://img.shields.io/github/stars/tlylt/from-the-future" />
        </footer>
    ): null;
}

export default Footer;