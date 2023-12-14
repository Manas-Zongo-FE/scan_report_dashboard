import { StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native';
import React, { useState} from 'react';

const App = (props = {}) => {
	const headerTitle = props.headerTitle || 'Check In Area',
		assetContainer = props.assetContainer || {},
		assetTitle = assetContainer.assetTitle || 'Asset',
		areaTitle = assetContainer.areaTitle || 'Asset Location',
		totalAssetCounter = assetContainer.totalAssetCounter || 0,
		secondHeaderTitle = props.secondHeaderTitle || 'Scan Actions',
		thirdSectionDetails = props.thirdSectionDetails || {},
		thirdSectionHeader = thirdSectionDetails.thirdSectionHeader || 'Scanner',
		actionButtonsText = thirdSectionDetails.actionButtonText || 'Report Abnoramality',
		referenceCount = thirdSectionDetails.referenceCount || 0,
		scannedCount = thirdSectionDetails.scannedCount || 0,
		[healthyCount, setHealthyCount] = useState(0),
		[notAvailableCount, setNotAvailableCount] = useState(0),
		[perishedCount, setPerishedCount] = useState(0),
		[inputValue, setInputValue] = useState('');

	return (
		<View style={styles.container}>
			<Text style={styles.firstOuterHeaderTitle}>{headerTitle}</Text>
			<View style={styles.firstHeader}>
				<View style={styles.assetContainer}>
					<View style={styles.firstHeaderDivision}>
						<Text style={styles.firstContainerInnerHeader}>Title</Text>
						<Text style={styles.firstContainerInnerResult}>{assetTitle}</Text>
					</View>
					<View style={styles.firstHeaderDivision}>
						<Text style={styles.firstContainerInnerHeader}>Area Details</Text>
						<Text style={styles.firstContainerInnerResult}>{areaTitle}</Text>
					</View>
					<View style={styles.firstHeaderDivision}>
						<Text style={styles.firstContainerInnerHeader}>
							Total Number of Assets
						</Text>
						<Text style={styles.firstContainerInnerResult}>
							{totalAssetCounter}
						</Text>
					</View>
				</View>
			</View>
			<Text style={styles.secondOuterHeaderTitle}>{secondHeaderTitle}</Text>
			<View>
				<View style={styles.secondHeaderButtonsDiv}>
					<TouchableOpacity style={styles.flexedButtonStyles}>
						<Text style={styles.flexedButtonTextStyles}>Stop</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.flexedButtonStyles}>
						<Text style={styles.flexedButtonTextStyles}>Start</Text>
					</TouchableOpacity>
				</View>
			</View>
			<View style={styles.thirdSection}>
				<Text style={styles.thirdSectionHeader}>{thirdSectionHeader}</Text>
				<View style={styles.thirdSectionContainer}>
					<View style={styles.thirdSectionInnerDivisions}>
						<Text style={styles.thirdSectionButtonStyles}>Reference Count: </Text>
						<Text style={styles.thirdSectionButtonValuesStyles}>{referenceCount}</Text>
					</View>
					<View style={styles.thirdSectionInnerDivisions}>
					
						<Text style={styles.thirdSectionButtonStyles}>Scanned Count: </Text>
						<Text style={styles.thirdSectionButtonValuesStyles}>{scannedCount}</Text>
					</View>
				</View>
				<TouchableOpacity style = {styles.thirdSectionPrimaryButton}>
					<Text style = {styles.thirdSectionPrimaryButtontext}>{actionButtonsText}</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.fourthSectionDiv}>
				<View style={styles.fourthSectionInnerDiv}>
					<Text style={{color:"#ffffff"}}>Report Details</Text>
					<Text style={styles.reportDetailsSection}>Check In Area</Text>
				</View>
				<View style={styles.fourthSectionInnerDiv}>
					<Text style={{color:"#ffffff"}}>Assets</Text>
					<View style={styles.fourthSectionFlexedDiv}>
						<View style={styles.fourthSectionInnerSubDivs}>
							<Text style={{color: 'green'}}>Healthy</Text>
							<Text style={{color: 'green'}}>{healthyCount}</Text>
						</View>
						<View style={styles.fourthSectionInnerSubDivs}>
							<Text style={{color: 'yellow'}}>Not Available</Text>
							<Text style={{color: 'yellow'}}>{notAvailableCount}</Text>
						</View>
						<View style={styles.fourthSectionInnerSubDivs}>
							<Text style={{color: 'red'}}>Perished</Text>
							<Text style={{color: 'red'}}>{perishedCount}</Text>
						</View>
					</View>
				</View>
			</View>
			<View style={styles.fifthSection}>
				<Text style={styles.fifthSectionTitle}>Comment</Text>
				<TextInput style={styles.commentInput} placeholder="Enter Comment" onChangeText={e => setInputValue(e)} value={inputValue}/>
			</View>
			<TouchableOpacity style={styles.submitButtonStyles}>
				<Text style={styles.submitButtonTextStyles}>Submit</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		backgroundColor: '#060F2D',
		padding: 20,
		color: '#000000',
		height: "100%"
	},

	firstOuterHeaderTitle: {
		color: '#f8f8f8',
		justifyContent: 'center',
		textAlign: 'center',
		fontSize: 30,
		fontWeight: 'bold',
		paddingBottom: 20,
	},
	assetContainer: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 20,
	},

	firstContainerInnerHeader: {
		fontWeight: 'bold',
		fontSize: 15,
		maxWidth: 100,
		minHeight: 50,
	},
	firstContainerInnerResult: {
		justifyContent: 'center',
		textAlign: 'center',
		fontSize: 20,
		color: '#060F2D', // Need to fix color
	},
	firstHeader: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		backgroundColor: '#009387',
	},
	secondHeaderButtonsDiv: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	flexedButtonStyles: {
		backgroundColor: '#009387',
		paddingBottom: 10,
		width: 170,
		paddingTop: 10,
		paddingLeft: 20,
		paddingRight: 40,
		borderRadius: 40,
		margin: 10,
	},
	flexedButtonTextStyles: {
		textAlign: 'center',
		fontWeight: 'bold',
		color: '#000000',
		fontSize: 20,
	},
	secondOuterHeaderTitle: {
		color: '#009387', //Need to fix color
		justifyContent: 'center',
		textAlign: 'center',
		fontSize: 25,
		fontWeight: 'bold',
		paddingTop: 10
	},
	thirdSection: {
		backgroundColor: '#009387',
		padding: 20,
		justifyContent: 'center',
	},
	thirdSectionHeader: {
		fontSize: 22,
		textAlign: 'center',
		fontWeight: 'bold',
		color: '#000000',
		paddingBottom: 10
	},
	thirdSectionContainer: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	},
	thirdSectionInnerDivisions: {
		flexDirection: 'row',
	},
	thirdSectionButtonStyles: {
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 18,
	},
	thirdSectionPrimaryButton: {
		backgroundColor: '#0d8efd', //color edits required
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 10,
		width: 320,
		paddingTop: 10,
		paddingLeft: 20,
		paddingRight: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 40,
		margin: 10,
	},
	thirdSectionPrimaryButtontext:{
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	thirdSectionButtonValuesStyles:{
		color: '#1111dd',
		fontSize: 18,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	fourthSectionInnerDiv: {
		color: '#ffffff'
	},
	fourthSectionDiv: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-around',
		borderWidth: 5,
		borderStyle: "solid",
		borderColor: '#009387',
		marginTop: 10,
		padding: 10,
	},
	fourthSectionFlexedDiv: {
		display: 'flex',
		flexDirection: 'column',
	},
	fourthSectionInnerSubDivs: {
		display: 'flex',
		gap: 15,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	reportDetailsSection:{
		color: '#009387',
		fontSize: 25,
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 10,
	},
	fifthSectionTitle:{
		color: '#fff',
		fontSize: 17,
		fontWeight: 'bold',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: 10,
	},
	submitButtonStyles: {
		backgroundColor: '#009387',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		paddingBottom: 10,
		width: 170,
		paddingTop: 10,
		paddingLeft: 20,
		paddingRight: 40,
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 40,
		margin: 10,
		left: 100
	},
	submitButtonTextStyles: {
		textAlign: 'center',
		fontWeight: 'bold',
		color: '#000000',
		fontSize: 20,
	},
	commentInput: {
		borderWidth: 1,
		borderColor: '#009387',
		backgroundColor: '#ffffff',
		padding: 20,
		marginTop: 10,
		marginBottom: 10,
	}
});

export default App;