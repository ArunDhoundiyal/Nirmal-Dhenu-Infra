import {useState} from 'react';
import {useLocation} from 'react-router-dom';

import {
    HeaderComponents, 
    Navbar, 
    NavListItems, 
    SmallScreenNavListItems,
    NavItems, 
    CompanyLogo, 
    MenuIcon, 
    CloseMenuIcon, 
    SideBarContainer, 
    NirmalDhenuCompanyLogoContainer, 
    NirmalDhenuCompanyLogo, 
    CompanyName, 
    Description, 
    StyledLink, 
    AnchorTag
} from './styledComponents';
import {navHeaderData} from '../Data';
const Header = () => {
    const [menuIcon, setMenuIcon] = useState(false);
    const location = useLocation();
    const checkCurrentPath = location.pathname;
    const onClickMenuIcon = () => {
        setMenuIcon(preState => !preState);

    }
    return(
        <HeaderComponents>
          
        <Navbar>
            <StyledLink to='/'>
            <CompanyLogo 
            src='https://res.cloudinary.com/da52fiag8/image/upload/v1743677603/Nirmal_dhenu_RE_white_bg_logo_roe2pd.png' 
            alt='nirmal-dhenu-infra-logo' 
            />
            </StyledLink>
            {
                menuIcon ? <CloseMenuIcon onClick={onClickMenuIcon} aria-label="Close navigation menu" /> : <MenuIcon onClick={onClickMenuIcon} aria-label="Open navigation menu" />
            }
            {
            menuIcon && (
            <SideBarContainer>
              <SmallScreenNavListItems>
                {
                navHeaderData.map(({ id, name, path }) => {
                  if (id === 6) {
                    return (
                    <NavItems 
                    key={id} 
                    onactive={checkCurrentPath===path}
                    >
                      <AnchorTag href="#contact">{name}</AnchorTag>
                       
                    </NavItems>
                    );
                  }
                  return (
                  <NavItems 
                  key={id} 
                  onactive={checkCurrentPath===path}
                  >
                    <StyledLink to={path}>{name}</StyledLink> 
                </NavItems>
                );
              })
            }
            </SmallScreenNavListItems>            
            <NirmalDhenuCompanyLogoContainer>
                <NirmalDhenuCompanyLogo
                    src='https://res.cloudinary.com/da52fiag8/image/upload/v1743677603/Nirmal_dhenu_RE_white_bg_logo_roe2pd.png'
                    alt='nirmal-dhenu-company-logo'
                />
                <CompanyName>Nirmal Dhenu Infra</CompanyName>
                <Description>Building Dreams with Trust & Transparency</Description>
            </NirmalDhenuCompanyLogoContainer>
        </SideBarContainer>
    )
}
            <NavListItems>
                {
                    navHeaderData.map(({id, name, path})=>{
                      if (id === 6){
                        return (
                          <NavItems 
                          key={id}>
                            <AnchorTag href="#contact">{name}</AnchorTag>
                            
                          </NavItems>

                        )

                      }
                      return(
                        <NavItems 
                        key={id} 
                        onactive={checkCurrentPath===path}
                        >   
                        <StyledLink to={path}>
                        {name}
                        </StyledLink>                     
                        </NavItems>

                      )

                    })
                }
            </NavListItems>
        </Navbar>
        </HeaderComponents>

    )
}

export default Header