import { StyleSheet, Platform, StatusBar } from "react-native";
import colors from "@utils/colors";

const STATUSBAR_HEIGHT = Platform.OS === "ios" ? 60 : StatusBar.currentHeight;

export const commonStyles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  safeAreaView: {
    flex: 1,
    backgroundColor: "white",
  },
  content: {
    paddingHorizontal: 15,
    marginTop: 10,
    flex: 1,
  },
  header: {
    backgroundColor: colors.mainColor,
    minHeight: 60,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  headerInner: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1,
  },
  headerText: {
    color: "white",
    fontSize: 25,
    fontFamily: "Raleway-ExtraBold",
  },
  searchSection: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: colors.textInputsBackground,
    borderRadius: 10,
  },
  searchIcon: {
    padding: 7,
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    marginRight: 10,
    backgroundColor: "transparent",
    color: "#424242",
    fontSize: 17,
  },
  bottomCount: {
    backgroundColor: "red",
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 50,
    position: "absolute",
    right: 40,
    top: 10,
  },
  ListWrapper: {
    flex: 1,
    justifyContent: "space-between",
  },
  ListEmptyComponentStyle: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
    fontFamily: "Raleway-Regular",
  },
  buttonContainer: {
    backgroundColor: colors.mainColor,
    paddingVertical: 10,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  buttonText: {
    fontSize: 14,
    color: "white",
    fontFamily: "Raleway-Regular",
  },
  checkBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginHorizontal: 5,
    borderWidth: 1.5,
    borderRadius: 5,
    borderColor: colors.mainColor,
    width: 20,
    height: 20,
  },
});

export const homeStyles = StyleSheet.create({
  filterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 20,
  },
  filterText: {
    fontSize: 17,
    fontFamily: "Raleway-SemiBold",
  },
  filterButtonContainer: {
    backgroundColor: "#ebebeb",
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  filterButtonText: {
    fontSize: 15,
    fontFamily: "Raleway-Regular",
  },
});

export const ProductStyles = StyleSheet.create({
  productCard: {
    flexDirection: "column",
    justifyContent: "space-between",
    marginBottom: 10,
    flexShrink: 1,
    borderWidth: 1,
    padding: 10,
    borderColor: "#ebebeb",
    maxWidth: 170,
    width: "100%",
  },
  productCardColumns: {
    flexDirection: "column",
    justifyContent: "flex-start",
  },
  image: {
    resizeMode: "contain",
    width: 150,
    height: 120,
  },
  star: {
    position: "absolute",
    right: 5,
    top: 10,
    backgroundColor: "darkgrey",
    padding: 5,
  },
  price: {
    marginTop: 10,
    fontSize: 15,
    color: colors.mainColor,
    fontFamily: "Raleway-SemiBold",
  },
  name: {
    marginTop: 10,
    fontSize: 15,
    fontFamily: "Raleway-SemiBold",
  },
  brandName: {
    fontSize: 11,
    fontFamily: "Raleway-Regular",
  },
  imageIndicator: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.7,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  modalCenteredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "#00000080",
  },
  modalView: {
    width: "100%",
    height: "90%",
    margin: 20,
    backgroundColor: "white",
    paddingVertical: 30,
    alignItems: "center",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#aeaeae",
    paddingBottom: 15,
    paddingTop: 5,
  },
  modalCloseContainer: {
    position: "absolute",
    left: 15,
    bottom: 10,
  },
  modalHeaderText: {
    fontSize: 20,
    fontFamily: "Raleway-Regular",
  },
  filterTextStyle: {
    fontSize: 14,
    fontFamily: "Raleway-Regular",
    color: "#555555",
  },
  filterMainContainer: {
    flexDirection: "column",
    width: "100%",
    marginTop: 15,
  },
  filterContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    borderBottomWidth: 1,
    borderBottomColor: "#808080",
    paddingBottom: 25,
    marginBottom: 25,
  },
  filterModalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  filterModalButtons: {
    marginTop: 10,
    borderRadius: 5,
    flexShrink: 1,
    width: "45%",
  },
  filterScroll: {
    maxHeight: 130,
    width: "100%",
    marginTop: 10,
  },
  filterWrapper: {
    flexDirection: "column",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  modalScroll: {
    flex: 1,
    width: "100%",
    marginTop: 10,
  },
  radioGroupContainer: {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    paddingLeft: 0,
  },
});

export const ProductDetailStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "column",
    justifyContent: "space-between",
    width: "100%",
    flex: 1,
  },
  image: {
    resizeMode: "contain",
    width: "100%",
    height: 270,
  },
  imageIndicator: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    opacity: 0.7,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  star: {
    position: "absolute",
    right: 10,
    top: 10,
    backgroundColor: "darkgrey",
    padding: 5,
  },
  name: {
    marginTop: 10,
    fontSize: 20,
    fontFamily: "Raleway-Bold",
  },
  desc: {
    marginTop: 10,
    fontSize: 14,
    fontFamily: "Raleway-Regular",
    textAlign: "justify",
  },
  button: {
    flexShrink: 1,
    width: "50%",
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginTop: 20,
    marginBottom: Platform.OS === "ios" ? 0 : 20,
  },
  buttonTextContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
  },
  priceTitle: {
    fontSize: 18,
    color: colors.mainColor,
    fontFamily: "Raleway-SemiBold",
  },
  price: {
    fontSize: 20,
    fontFamily: "Raleway-Bold",
  },
});

export const CartStyles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 25,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  buttonTextContainer: {
    flexDirection: "column",
    alignItems: "flex-start",
    marginLeft: 10,
  },
  priceTitle: {
    fontSize: 18,
    fontFamily: "Raleway-Regular",
  },
  price: {
    fontSize: 14,
    color: colors.mainColor,
    fontFamily: "Raleway-Regular",
  },
  countButtons: {
    backgroundColor: "#dedede",
    padding: 10,
  },
  count: {
    backgroundColor: colors.mainColor,
    width: 50,
    paddingVertical: 10,
    alignItems: "center",
  },
  countText: {
    fontSize: 16,
    color: "white",
    fontFamily: "Raleway-Regular",
  },
});
