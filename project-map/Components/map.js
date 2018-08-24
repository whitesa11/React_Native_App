import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  View,
TouchableOpacity
} from "react-native";
import { Constants, Location, Permissions, MapView } from "expo";
import firebase from "firebase";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

export default class Map extends Component {
    state = {
        location: null,
        errorMessage: null
    };

    componentWillMount() {
        if (Platform.OS === "android" && !Constants.isDevice) {
            this.setState({
                errorMessage:
                    "Oops, this will not work on Sketch in an Android emulator. Try it on your device!"
            });
        } else {
            this._getLocationAsync();
        }
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== "granted") {
            this.setState({
                errorMessage: "Permission to access location was denied"
            });
        }

        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
    };

    render() {
        let text = "waiting";
        let lat = 49.2765431;
        let long = -123.1220715;
        if (this.state.errorMessage) {
            text = this.state.errorMessage;
        } else if (this.state.location) {
            lat = this.state.location.coords.latitude;
            long = this.state.location.coords.longitude;
        }
        
        return (
            <MapView style={{ flex: 1, position: "relative" }} 
                        region={{ latitude: lat, longitude: long, latitudeDelta: 0.001, longitudeDelta: 0.004 }}>
            <MapView.Marker coordinate={{ latitude: lat, longitude: long }} title={"marker.title"} description={"des"} />
                <View style={styles.buttonView}>
                    <TouchableOpacity style={styles.buttonTouch}>
                        <Icon name="logout" size={30} onPress={() => firebase
                            .auth()
                            .signOut()} style={styles.actionButtonIcon} />
                    </TouchableOpacity>
                </View>  
        </MapView>
              
    );
    }
}

const styles = StyleSheet.create({
  buttonView: {
    flexDirection: "row",
    position: "absolute",
    bottom: 30,
    right: 30
  },
  buttonTouch: {
    borderWidth: 0,
    borderColor: "rgba(0,0,0,0.2)",
    alignItems: "center",
    justifyContent: "center",
    width: 60,
    height: 60,
    backgroundColor: "#27ae60",
    borderRadius: 100
  },
  actionButtonIcon: {
    color: "white"
  }
});
