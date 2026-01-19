import './style.css';
export const Footer = () => {
    return (<>
        <footer className="w-[70%] mx-auto text-center mt-[5%] text-[1rem] bg-white/10">
            <hr className="gradient-linee" />
            <br />
            <p className='texth'>© {new Date().getFullYear()} <br />Khaled AlKharashy. Portfolio Website.</p>

            <br />
            <p>Other Website: https://khaled-iota.vercel.app</p>
            <br /><br />
            <hr className="gradient-linee" />

        </footer>
        <br />
    </>);
}