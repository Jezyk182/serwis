const Footer = () => {
    const data = new Date
    const year = data.getFullYear()


    return ( 
            <footer className="text-center bg-secText text-white py-2 ">
                <p>Copyright &copy; {year}. Wszelkie prawa zastrzeżone</p>
            </footer>
     );
}
 
export default Footer;