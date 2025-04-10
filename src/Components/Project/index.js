import {
    ProjectContainer, 
    ProjectListItem,
    ProjectItem, 
    CrossIcon
} from './styledComponents';
import {navProjectData} from '../Data';
const Project = ({navItemId, setNavItemId}) => {
    const close = () => {
        setNavItemId(null)
    }
    return(
        <>
        {
        navItemId===3 && <ProjectContainer>
            <CrossIcon onClick={close} />
        {
            navProjectData.map(({id, name})=>(
                <ProjectListItem key={id}>
                    <ProjectItem>
                    {name}
                    </ProjectItem>
                </ProjectListItem>
            ))
        }
    </ProjectContainer>
        }
        </>
    )
}


export default Project