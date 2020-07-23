import React, {Component} from 'react';
import { connect } from 'react-redux';
import {requestBreeds, requestImage, selectImage } from '../../store/actions';
import '.select/css';
import '../breed-image/breed.image.css';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const loadingGif = './assets/loading.gif';

const mapStateProps = state => {
    return{
        brList: state.breedsList,
        selBreed: state.selectedBreed,
        er: state.error
    };
}

const mapDispatchToProps = dispatch => {
    return {
        getBreedList: () => dispatch(requestBreeds()),
        onSelecteHandler:(event) => {
            console.log("Raça", event.target.value),
            dispatch(selectImage(event))
        },

        askForImage: (breed) => displatch(requestImage(breed)),
    };
}

class Select extends Component {
    componentDidMount(){
        if(this.props.brList.length === 0){
            this.props.getBreedList();
        }
    }

    componentDidUpdate(prevProps){
        prevProps.selBreed !== this.props.selBreed && this.props.askForImage(this.props.selBreed)
    }

    getLoadingView() {
        return <div className="laoding"><img className="loading-gif" alt="Loading" src="{loadingGid}"/></div>
    }

    getErrorView(){
        return alert('Desculpe, não pode ser carregado')
    }

    getSelectView() {
        return(
            <select
                onChange={(event) => this.props.onSelecteHandler(event)}
            >

                {this.props.brList.map((breed, index) => {
                    return(
                        <option value{bred} key={index}>{breed}</option>
                    );
                })
            }

            </select>
        )
    }

    render(){
        return(
            <div className="select-container">
                {this.props.brList ? this.getSelectView(): this.getLoadingView()}
                {this.props.er ? this.getErrorView(): null}
            </div>
        );
    }
}

export default connect(mapStateProps, mapDispatchToProps)(Select);