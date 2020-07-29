import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
//import { connect } from 'react-redux';
//import CollectionPreview from '../../components/collection-preview/collection-preview.component';
//import CollectionOverview from '../../components/collection-overview/collection-overview.component';
//import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionsStart } from '../../redux/shop/shop.action';
//import CollectionsOverviewContainer from '../../components/collection-overview/collection-overview.container';
import Spinner from '../../components/spinner/spinner.component';


const CollectionsOverviewContainer = lazy(() => import('../../components/collection-overview/collection-overview.container'));
const CollectionPageContainer = lazy(() => import('../collection/collection.container'));


const ShopPage = ({ fetchCollectionsStart, match }) =>  {

    useEffect(()=> {
        fetchCollectionsStart()
    }, [fetchCollectionsStart]);
    


    return (
    <div className="shop-page">
        <Suspense fallback={<Spinner/>}>
            <Route exact path={ `${match.path}` } 
                    component={CollectionsOverviewContainer} />
            <Route path={ `${match.path}/:collectionId` } 
                    component={ CollectionPageContainer } />
        </Suspense>
    </div>);
}


const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})

//export default ShopPage;
export default connect(null, mapDispatchToProps)(ShopPage);