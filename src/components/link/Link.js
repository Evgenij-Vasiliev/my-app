import {Link as SoftLink} from 'react-router-dom';
function Link(props) {
    return <SoftLink to={props.url}>{props.label}</SoftLink>
}

export default Link;