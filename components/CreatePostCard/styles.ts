import { StyleSheet } from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: colors.fadedBlack,
        paddingHorizontal: 12,
        paddingVertical: 24,
        borderWidth: 2,
        borderColor: colors.borderBlack,
        borderRadius: 8,
    },
    title: {
        fontFamily: 'Inter-Medium',
        color: colors.iconWhite,
        fontSize: 18,
        lineHeight: 21.78,
    },
    postInput: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        backgroundColor: colors.bgBlack,
        marginTop: 16,
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 8,
    },
    placeHolderTxt: {
        fontFamily: 'Inter-Regular',
        color: colors.eyeBlue,
        fontSize: 14,
        marginLeft: 16,
        includeFontPadding: false,
    },
    postButton: {
        marginTop: 12,
        alignSelf: 'flex-end',
    }
});

export default styles;