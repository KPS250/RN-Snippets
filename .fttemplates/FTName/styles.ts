import { StyleSheet } from 'react-native';
import { scale } from '../../../utils/helper';

export const styles = (theme?: any) =>
  StyleSheet.create({
    container: {},
    text: {
      ...theme.fonts.semibold,
      ...theme.style.heading.h6,
      color: theme.colors.SHADES.WHITE_00,
      marginTop: scale(10),
    },
  });
