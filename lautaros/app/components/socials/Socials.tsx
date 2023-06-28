import { FaDev,FaLinkedin,FaGithub } from 'react-icons/fa';

const Socials = () => {
    return(
        <div style={{ position: 'absolute', bottom: 20, right:180,height: 70, width:60, display:'flex' }}>
            <a href='https://dev.to/lausuarez02' target="_blank">
            <FaDev style={{height: 50, width:50}}/>
            </a>
            <a href='https://www.linkedin.com/in/lautarosuarez/' target="_blank">
            <FaLinkedin style={{height: 50, width:50}}/>
            </a>
            <a href='https://github.com/lausuarez02' target="_blank">
            <FaGithub style={{height: 50, width:50}}/>
            </a>
        </div>
    )
}

export default Socials;