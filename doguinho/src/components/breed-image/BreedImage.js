import React, { Component } from 'react';
import { connect } from 'react-redux';
import {receiveImage} from '../../store/actions';
import './breed-image.css';

const mapStateProps = state => {
    return {
        iUrl: state.imageUrl,
        selBreed: state.selectedBreed,
    er:state.error
    };
}

const mapDispatchProps = dispatch => {
    return {
        getImage: () => dispatch(receiverImage()),
    };
}

class BreedImage extends Component {
    componentDidUpdate(prevProps){
        prevProps.selBreed !== this.props.selBreed && this.props.getImage(this.props.selBreed)
    }

    render() {
        console.log(" Eu selecionei um raça", this.selBreed )
        return(
            <div className="image-container">
                <img
                    className="image-card"
                    alt = "dog" src="{this.props.iUrl"
                    />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchProps)(BreedImage);