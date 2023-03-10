import React, { useContext } from "react";
import { View, Text } from "react-native";
import { styles as defaultStyle } from "./styles";
import { SdkContext, SdkContextType } from "../../../provider/SdkProvider";
import { useAppSelector } from "../../../redux/hooks";

type PropTypes = {
  style?: StyleMedia;
};

const [FTName] = (props: PropTypes) => {
  const { theme } = useContext<SdkContextType>(SdkContext);
  const { style = {} } = props;
  const styles = defaultStyle(theme);
  const Strings = useAppSelector((state: any) => state.app.translations);

  return (
    <View style={[styles.container, style]}>
      <Text>{Strings.appName}</Text>
    </View>
  );
};

export default [FTName];
