import React from 'react'
import { IconButton, LargeButton } from './Buttons'
import { UnfilledHomeIconSVG, XIconSVG, SearchIconSVG, NotificationIconSVG, EmailIconSVG, GrokIconSVG, PeopleIconSVG, PersonIconSVG, OptionsIconSVG, SavesIconSVG, LightningIconSVG, FeatherIconSVG } from './Images'
import "../styles/Components/SideBar.css"
function SideBar() {
    const [windowSize, setWindowSize] = React.useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    React.useEffect(() => {
        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <nav id='sidebar'>
            <IconButton icon={() => XIconSVG({})} color='white' circleLenght="50px" customClass='first-sidebar-button' />
            <LargeButton icon={() => UnfilledHomeIconSVG({})} label='Inicio' styleType="quaternary" customClass="sidebar_button" />
            <LargeButton icon={() => SearchIconSVG({})} label='Explorar' styleType="quaternary" customClass="sidebar_button" />
            <LargeButton icon={() => NotificationIconSVG({})} label='Notificaciones' styleType="quaternary" customClass="sidebar_button" />
            <LargeButton icon={() => EmailIconSVG({})} label='Mensajes' styleType="quaternary" customClass="sidebar_button" />
            <LargeButton icon={() => GrokIconSVG({})} label='Grok' styleType="quaternary" customClass="sidebar_button" />
            {windowSize?.height > 750 && <LargeButton icon={() => SavesIconSVG({})} label='Guardados' styleType="quaternary" customClass="sidebar_button" />}
            {windowSize?.height > 600 && <LargeButton icon={() => PeopleIconSVG({})} label='Comunidades' styleType="quaternary" customClass="sidebar_button" />}
            {windowSize?.height > 600 && <LargeButton icon={() => XIconSVG({})} label='Premium' styleType="quaternary" customClass="sidebar_button" />}
            {windowSize?.height > 750 && < LargeButton icon={() => LightningIconSVG({})} label='Organizaciones ver' styleType="quaternary" customClass="sidebar_button" />}
            <LargeButton icon={() => PersonIconSVG({})} label='Perfil' styleType="quaternary" customClass="sidebar_button" />
            <LargeButton icon={() => OptionsIconSVG({})} label='Más opciones' styleType="quaternary" customClass="sidebar_button" />
            {windowSize?.width <= "1250" ? <LargeButton icon={() => FeatherIconSVG({})} styleType="tertiary" customClass="sidebar_button" />
                : <LargeButton label='Postear' styleType="tertiary" customClass="sidebar_button" customStyles={{ padding: "14px 81px 14px 81px" }} />}
        </nav>
    )
}

export default SideBar
