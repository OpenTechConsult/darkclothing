import React, { Component} from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
//import { connect } from 'react-redux';
//import CollectionPreview from '../../components/collection-preview/collection-preview.component';
//import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.action';
import CollectionsOverviewContainer from '../../components/collection-overview/collection-overview.container';



class ShopPage extends Component {

    componentDidMount() {
        const { fetchCollectionsStart } = this.props
        fetchCollectionsStart()
    }


    render() {
        const { match } = this.props;
        return (
        <div className="shop-page">
            <Route exact path={ `${match.path}` } 
                    component={CollectionsOverviewContainer} />
            <Route path={ `${match.path}/:collectionId` } 
                    component={ CollectionPageContainer } />
        </div>
        );
    }
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

//export default ShopPage;
export default connect(null, mapDispatchToProps)(ShopPage);