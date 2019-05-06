import {connect} from 'react-redux';


const mapStateToProps = (state) => ({
    links: Object.key(state.entities.links).map(id => state.entities.links[id])
});

export default connect(mapStateToProps)()