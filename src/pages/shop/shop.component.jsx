import React, { Component} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
//import { connect } from 'react-redux';
//import { createStructuredSelector } from 'reselect';
//import CollectionPreview from '../../components/collection-preview/collection-preview.component';
//import { selectCollections } from '../../redux/shop/shop.selector.js';
import { firestore, convertCollectionsSnapshotToMap } from '../../utils/firebase.utils';
//import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPage from '../collection/collection.component';
import { updateCollections } from '../../redux/shop/shop.action';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import CollectionsOverview from '../../components/collection-overview/collection-overview.component';


const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);



class ShopPage extends Component {

    state = {
        loading: true
    };

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');

        collectionRef.get().then(snapshot => {
           const collectionsMap =  convertCollectionsSnapshotToMap(snapshot);
           updateCollections(collectionsMap);
           this.setState({ loading: false });
        });
        
    }


    render() {
        const { match } = this.props;
        const { loading } = this.state;
        return (
        <div className="shop-page">
            <Route exact path={ `${match.path}` } 
                    render={ (props) =>  <CollectionsOverviewWithSpinner isLoading={loading} {...props} /> } />
            <Route path={ `${match.path}/:collectionId` } 
                    render={ (props) => <CollectionPageWithSpinner isLoading={loading} {...props} /> } />
        </div>
        );
    }
}



// const mapStateToProps = createStructuredSelector({
//     collections: selectCollections
// })


const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

//export default ShopPage;
export default connect(null, mapDispatchToProps)(ShopPage);