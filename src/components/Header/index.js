import "../../scss/base.scss" 
import "./header.scss";

const menuData = [
    {
        name: 'Home',
        page: 'index.html'
    },
    {
        name: 'About  <span className="span-orange"> US</span>',
        page: 'index.html'
    },
    {
        name: 'Blog',
        page: 'index.html'
    },
    {
        name: 'Portfolio',
        path: 'index.html'
    },
    {
        name: 'Contact  <span className="span-orange"> US</span>',
        path: 'index.html'
    }
];

export const MenuItem = (props) => {
    return (<li><a href={props.path}  dangerouslySetInnerHTML={{ __html: props.name }}></a></li>)
}

export const Menu = () => {
    return (
        <div>
            <ul className="menu navigation hidden-menu">
                { menuData.map((menuItem)=> {
                    return (
                        <MenuItem name={ menuItem.name } path={ menuItem.path } />
                    )
                }) }
            </ul>
            <div className="nav-mobile-menu">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    )
}

const Header = () => {
    return (
    <header className="header">
            <div className="container-flued">
                <div className="row header-row small">
                    <div className="Logo">
                        <a href="">
                            <img src="images/Logo.png" />
                            </a>
                </div>
                   <Menu />
                </div>
            </div>
    </header>
    )
} 
export default Header