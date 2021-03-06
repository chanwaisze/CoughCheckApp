import { SafeAreaView } from 'react-native-safe-area-context'
import { KeyboardAvoidingView } from 'react-native'
import PropTypes from 'prop-types'
import styled from 'styled-components/native'

export const StandardViewStyled = styled(SafeAreaView)`
	flex: 1;
	flex-direction: column;
	${({ center }) => {
		if (center) {
			return `
      align-items: center;
      justify-content: center;
      `
		}
	}}

	${({ extraPadding }) => {
		if (extraPadding) {
			return `
      padding-top: 50px;
			padding-bottom: 50px;
      `
		}
	}}
`
/**
 * Prop types
 */
StandardViewStyled.propTypes = {
	center: PropTypes.bool,
	extraPadding: PropTypes.bool,
}

StandardViewStyled.defaultProps = {
	center: false,
	extraPadding: true,
}
export const FormViewStyled = styled(KeyboardAvoidingView)`
	display: flex;
	background-color: #ecf0f1;
	padding: 8px;
`

export const TextSignInStyled = styled.Text`
	font-size: 36px;
	color: #ccc;
	text-align: center;
`

export const StyledText = styled.Text`
	text-align: center;
	color: #777;
	font-size: 18px;
	font-family: 'SFProDisplay-Regular';
	letter-spacing: 0.36px;
	line-height: 25px;
`
export const StyledTextBold = styled.Text`
	text-align: center;
	color: #777;
	font-size: 18px;
	font-family: 'SFProDisplay-Bold';
	letter-spacing: 0.36px;
	line-height: 25px;
`

export const StyledTextLarge = styled.Text`
	text-align: center;
	color: #777;
	font-size: 30px;
	font-family: 'SFProDisplay-Bold';
	line-height: 35px;
`

export const StyledShareButton = styled.TouchableOpacity`
	background-color: #126fee;
	border-radius: 5px;
	height: 50px;
	padding-top: 8px;
`

export const StyledShareButtonText = styled.Text`
	color: #fff;
	text-align: center;
	font-size: 18px;
	font-family: 'SFProDisplay-Regular';
	letter-spacing: 0.36px;
`

export const StyledButtonCTALarge = styled.View`
	background-color: #126fee;
	align-items: center;
	justify-content: center;
	border-radius: 5px;
	margin-bottom: 10px;
`
export const StyledButtonCTALargeText = styled.Text`
	color: white;
	padding: 20px;
	font-size: 20px;
`
