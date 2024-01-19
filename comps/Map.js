import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

import { StyleSheet, Text, View, Dimensions } from 'react-native';

//
function Map() {
	return (
		<View>
			<MapView
				// provider={PROVIDER_GOOGLE}
				googleMapsApiKey={process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY}
			></MapView>
			<Text>Map</Text>
		</View>
	);
}

export default Map;
