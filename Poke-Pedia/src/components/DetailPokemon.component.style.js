import { theme } from '../styles/core.styles';

export default {
  productImage: {
    width: '40vw',
    height: '40vw',
    objectFit: 'contain',
    padding: 10,
    margin: 10,
  },
  wishlistContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  wishlistIconRed: {
    color: theme.red,
    fontSize: 25,
  },
  wishlistIconGrey: {
    color: theme.disabledGrey,
    fontSize: 25,
  },
  productName: {
    color: theme.darkBlue,
    fontWeight: 'bold',
    fontSize: 17,
    textTransform: 'capitalize',
    marginLeft: 20,
    display: 'flex',
    alignItems: 'center'
  },
  headerContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'left'
  },
  productPriceContainer: {
    display: 'flex',
    textAlign: 'left',
    alignItems: 'center',
    marginLeft: 20,
  },
  priceText: {
    textTransform: 'capitalize',
    color: theme.pinkBrand,
    fontSize: theme.fontSizeLarge,
  },
  priceTextDiscount: {
    marginLeft: 10,
    color: theme.lightGrey,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    fontSize: theme.fontSizeMedium,
  },
  tabContainer: {
    justifyContent: 'center',
    display: 'flex',
    width: '100%',
    marginTop: 20,
    borderTop: '2px solid lightgrey'
  },
  tabIndicator: {
    backgroundColor: theme.pinkBrand,
    height: 5
  },
  tabButtonActive: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    color: theme.darkBlue,
    paddingTop: 10,
    paddingBottom: 10,
  },
  productDetail: {
    color: theme.darkBlue,
    padding: 20,
    fontSize: theme.fontSizeNormal,
    lineHeight: 1.5,
    minHeight: 100
  },
  addToCartButtonContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 20,
    borderTop: '2px solid lightgrey',
  },
  addToCartButton: {
    width: '90%',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 50,
    backgroundColor: theme.pinkBrand,
    color: theme.white,
    fontWeight: 'bold',
  },
  addToCartButtonDisabled: {
    width: '90%',
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 50,
    backgroundColor: theme.superlightGrey,
    color: theme.textGrey,
    fontWeight: 'bold',
  },
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
    color: theme.darkBlue,
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
  modalCartButton: {
    width: '80%',
    backgroundColor: theme.pinkBrand,
    borderRadius: 50,
    height: 50,
    marginBottom: 20,
    color: theme.white,
    fontWeight: 'bold'
  },
  modalCartButtonDisabled: {
    width: '80%',
    backgroundColor: theme.superlightGrey,
    borderRadius: 50,
    height: 50,
    marginBottom: 20,
    color: theme.textGrey,
    fontWeight: 'bold'
  },
  productNameContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between'
  },
  unavailableOverlay: {
    backgroundColor: theme.superlightGrey,
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    borderRadius: '10px 10px 0px 0px'
  },
  imageContainer: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
  },
  unavailableTitle: {
    color: theme.pinkBrand,
    fontSize: theme.fontSizeNormal
  },
  unavailableNote: {
    color: theme.darkBlue,
    fontSize: theme.fontSizeSmall
  },
  noteContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '10px 20px',
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
    ButtonnMyList: {
      background: theme.pinkBrand,
      borderRadius: 30,
      color: theme.white,
      height: 30,
      fontSize:10,
      marginBottom: 20,
      width: '40%'
    },
    ownText: {
    textTransform: 'capitalize',
    color: theme.black,
    fontSize: theme.fontSizeLarge,
  },
    headerContainerBot: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'left',
    marginTop: 30
  },
}