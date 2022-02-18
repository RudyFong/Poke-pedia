import {theme} from '../styles/core.styles';


export default {
    addToCartModal: {
        position: 'fixed',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        zIndex: 2
    },
    modalContentContainer: {
        width: '90%',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 15,
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    closeIcon: {
        paddingTop: 10, 
        paddingRight: 10,
    },
    headerTitle: {
        width: '90%',
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 30,
        color: theme.darkBlue,
    },
    modalDetailContainer: {
        display: 'flex',
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        alignSelf: 'center',
    },
    modalImage: {
        width: 80,
        height: 80,
        objectFit: 'contain',
        marginRight: 10,
    },
    modalProductName: {
        textTransform: 'capitalize',
        color: theme.darkBlue,
    },
    modalProductGrossPrice: {
        display: 'flex',
        textAlign: 'left',
        alignItems: 'center',
        paddingLeft: 0,
        paddingRight: 0,
        marginBottom: 'auto',
    },
    modalPriceText: {
        fontSize: 16,
        marginRight: 5,
        color: theme.pinkBrand,
        textTransform: 'capitalize',
    },
    modalPriceDiscount: {
        fontSize: 13,
        color: 'grey',
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
    greyLine: {
        width: '80%',
        height: 1,
        backgroundColor: 'lightgrey',
        marginTop: 20,
        marginBottom: 20,
        alignSelf: 'center',
    },
    quantityContainer: {
        width: '80%', 
        alignSelf: 'center',
        display: 'flex',
        justifyContent: 'space-between'
    },
    quantityText: {
        color: theme.darkBlue,
        marginBottom: 10,
        alignSelf: 'center',
        width: '80%'
    },
    quantity: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    darkBlueIcon: {
        color: theme.darkBlue
    },
    cartButtonContainer: {
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        marginTop: 'auto',
    },
    categoryStyling: {
        paddingTop: 16,
        width: '100%',
        boxShadow: '1px 1px 5px lightGrey',
        position: 'fixed',
        backgroundColor: 'white',
        zIndex: 1
    },
    title: {
        fontWeight: 'bold',
        color: theme.darkBlue,
        paddingLeft: 20
    },
    categoryTabsContainer: {
        width: '100vw',
        marginTop: 20,
        paddingLeft: 20
    },
    tabIndicator: {
        backgroundColor: '#FED9E1',
        height: 3
    },
    categoryButtonContainer: {
        marginTop: 10,
        display: 'flex',
        alignItems: 'stretch',
    },
    categoryButtonContentContainer: {
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 5,
        paddingBottom: 5,
    },
    categoryImage: {
        width: 30,
        height: 30,
        objectFit: 'contain',
        padding: 0,
    },
    categoryName: {
        textTransform: 'capitalize',
        fontSize: 12,
        textAlign: 'left',
        display: 'flex',
        alignItems: 'center',
        lineHeight: 1.5,
        color: theme.darkBlue,
    },
    salesProductStyling: {
        padding: 20,
        width: '100%',
    },
    listTitle: {
        fontWeight: 'bold',
        color: theme.darkBlue,
    },
    listContainer: {
        marginTop: 20
    },
    productStyles: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    productCard: {
        display: 'flex',
        flexDirection: 'column',
        marginTop: 10,
        height: 300,
        width: '95%',
        backgroundColor: theme.white,
        alignItems: 'center',
        borderRadius: 15,
        boxShadow: '1px 1px 5px lightgrey',
    },
    wishlistIcon: {
        marginLeft: 'auto',
    },
    wishlistIconRed: {
        color: theme.red,
        fontSize: 18
    },
    wishlistIconGrey: {
        color: theme.disabledGrey,
        fontSize: 18
    },
    productImage: {
        objectFit: 'contain',
        width: 100,
        height: 80,
    },
    productNameContainer: {
        margin: 10,
        textAlign: 'left',
        lineHeight: '20px',
        maxHeight: '60px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
    },
    productName: {
        textTransform: 'capitalize',
        color: theme.darkBlue,
    },
    productGrossPrice: {
        display: 'flex',
        textAlign: 'left',
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 'auto',
        flexDirection: 'column'
    },
    priceText: {
        textTransform: 'capitalize',
        color: theme.pinkBrand,
        fontSize: 13,
    },
    priceTextDiscount: {
        fontSize: 9,
        color: theme.lightGrey,
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid',
    },
    modalCartButton: {
      background: theme.pinkBrand,
      border: 0,
      borderRadius: 30,
      color: theme.white,
      height: 50,
      fontSize: 12,
      marginBottom: 20,
      width: '80%',
      fontWeight: 'bold'
    },
    modalCartButtonDisabled: {
      background: theme.superlightGrey,
      border: 0,
      borderRadius: 30,
      color: theme.textGrey,
      height: 50,
      fontSize: 12,
      marginBottom: 20,
      width: '80%',
      fontWeight: 'bold'
    },
    oosImage: {
      position: 'absolute',
      width: 100,
      transform: 'rotate(-10deg)'
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    },
    addToCartButton: {
      background: theme.pinkBrand,
      borderRadius: 30,
      color: theme.white,
      height: 30,
      fontSize:10,
      marginBottom: 20,
      width: '80%'
    },
    addToCartButtonDisabled: {
      background: theme.superlightGrey,
      borderRadius: 30,
      color: theme.textGrey,
      height: 30,
      fontSize:10,
      marginBottom: 20,
      width: '80%'
    },
    pokeListOwn:{
       textTransform: 'capitalize',
       color: theme.white,
         textAlign: 'right',
         marginHorizontal: 10,
    },
    TopproductNameContainer: {
        margin: 10,
        justifyContent: 'space-between',
        textOverflow: 'ellipsis',
        alignItems: 'right',
        paddingHorizontal: 20,
        width: '50%'
    },
    MiddleproductNameContainer:{
        margin: 10,
        marginLeft: window.innerHeight/4,
        justifyContent: 'center',
        textOverflow: 'ellipsis',
        alignItems: 'right',
    },
    ButtonnMyList: {
      background: theme.pinkBrand,
      borderRadius: 30,
      color: theme.white,
      height: 30,
      fontSize:10,
      marginBottom: 20,
      width: '80%'
    },
}