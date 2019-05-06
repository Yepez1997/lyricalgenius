import { connect } from 'react-redux';
import AnnotationForm from './annotation_form';

const mapStateToProps = (state) => {
    const annotation = {body: " "};
    return {annotation,
        links: Object.keys(state.entities.links).map(id => state.entities.links[id])
    }
};

const mapDispatchToProps = (dispatch) => ({

});

export default  connect(mapStateToProps, null)(AnnotationForm);