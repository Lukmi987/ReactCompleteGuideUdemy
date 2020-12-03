import { connect } from 'react-redux';
import {getLocations} from "../../../selectors/locationsSelector";
import { fetchLocations } from '../actions';
import Locations from "../components/Locations";


const mapStateToProps = state => ({
    locations: getLocations(state)
});

const mapDispatchToProps = {
    fetchLocations,
};

export default connect(mapStateToProps, mapDispatchToProps)(Locations);