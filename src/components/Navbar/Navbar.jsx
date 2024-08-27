import "./css/Navbar.css"

export default function Navbar() {
    return (
        <div className="navbar_wrapper">
            <div className="navbar_item">
                <p className="navbar_item_title">HARDWARE</p>
            </div>
            <div className="navbar_item side-border">
                <p className="navbar_item_title">CASA INTELIGENTE</p>
            </div>
            <div className="navbar_item">
                <p className="navbar_item_title">GAMES</p>
            </div>
            <div className="navbar_item side-border">
                <p className="navbar_item_title">ERGONÔMICOS</p>
            </div>
            <div className="navbar_item">
                <p className="navbar_item_title">CADEIRAS</p>
            </div>
            <div className="navbar_item side-border">
                <p className="navbar_item_title">COMPUTADORES</p>
            </div>
            <div className="navbar_item">
                <p className="navbar_item_title">PERIFÉRICOS</p>
            </div>
        </div>
    )
}