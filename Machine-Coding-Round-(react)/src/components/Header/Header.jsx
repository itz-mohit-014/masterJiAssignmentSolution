const Header = ({text}) => {
    return (
        <header className="h-fit">
            <h1 className="text-center text-5xl md:text-[80px] font-bold [text-shadow:_0_2px_0_#00000040]" style={{color:text}}> Chai aur Code </h1>
        </header>
    )
}

export default Header;