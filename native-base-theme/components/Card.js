import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './../variables/platform';

export default (variables = variable) => {
  const cardTheme = {
      '.transparent': {
        shadowColor: null,
        shadowOffset: null,
        shadowOpacity: null,
        shadowRadius: null,
        elevation: null,
      },
      marginVertical: 5,
      marginHorizontal: 2,
      flex: 1,
      borderRadius: 2,
      flexWrap: 'wrap',
      backgroundColor: variables.cardDefaultBg,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 1.5,
      elevation: 3,
  };

  return cardTheme;
};
