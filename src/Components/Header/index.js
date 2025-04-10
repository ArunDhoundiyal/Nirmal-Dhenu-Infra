import {useState} from 'react';
import {
    HeaderComponents, 
    Navbar, 
    NavListItems, 
    SmallScreenNavListItems,
    NavItems, 
    CompanyLogo, 
    ArrowIcon, 
    MenuIcon, 
    CloseMenuIcon, 
    SmallScreenNavListItemsContainer
} from './styledComponents';
import {navHeaderData} from '../Data';
import Project from '../Project';
const Header = () => {
    const [navItemId, setNavItemId] = useState(null);
    const [menuIcon, setMenuIcon] = useState(false);

    const onClickNavItem = (id) => {
        setNavItemId(id)
    }
    const onClickMenuIcon = () => {
        setMenuIcon(preState => !preState);

    }
    console.log(navItemId)
    return(
        <HeaderComponents>
            <Project setNavItemId={setNavItemId} navItemId={navItemId}/>
        <Navbar>
            <CompanyLogo 
            src='https://res.cloudinary.com/da52fiag8/image/upload/v1743677603/Nirmal_dhenu_RE_white_bg_logo_roe2pd.png' 
            alt='nirmal-dhenu-infra-logo' 
            />
            {
                menuIcon ? <CloseMenuIcon onClick={onClickMenuIcon}/> : <MenuIcon onClick={onClickMenuIcon}/>
            }
            {
            menuIcon && <SmallScreenNavListItemsContainer isactive={menuIcon}>{
               menuIcon && <SmallScreenNavListItems isactive={menuIcon}>
                    {
                    navHeaderData.map(({id, name})=>{
                        if (id===3){
                            return (
                            <NavItems 
                            onactive={navItemId===id} 
                            onClick={()=>{onClickNavItem(id)}} 
                            key={id}>{name}<ArrowIcon onactive={navItemId===id} />
                            </NavItems>
                            ) 
                        } 
                        return <NavItems onactive={navItemId===id}  onClick={()=>{onClickNavItem(id)}} key={id}>{name}</NavItems>})
                        }
                </SmallScreenNavListItems>
                }</SmallScreenNavListItemsContainer>
            }
            <NavListItems>
                {
                    navHeaderData.map(({id, name})=>{
                        if (id===3) return <NavItems onactive={navItemId===id} onClick={()=>{onClickNavItem(id)}} key={id}>{name}<ArrowIcon onactive={navItemId===id} /></NavItems>
                        return <NavItems onactive={navItemId===id}  onClick={()=>{onClickNavItem(id)}} key={id}>{name}</NavItems>
                    })
                }
            </NavListItems>
        </Navbar>
        </HeaderComponents>

    )
}

export default Header