import { StyleSheet, View, Pressable, Text, Dimensions} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Button({ label, theme, onPress}) {
  if (theme === "primary") {
    return (
      <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]}>
        <Pressable
          style={[styles.button, { backgroundColor: "#fff" }]}
          onPress={onPress}
        >
          <FontAwesome
            name="picture-o"
            size={18}
            color="#25292e"
            style={styles.buttonIcon}
          />
          <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonLabel}>{label}</Text>
        </Pressable>
      </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  buttonContainer: {
    width: width * 0.8,
    height: height * 0.08,
    marginHorizontal: width * 0.05,
    alignItems: 'center',
    justifyContent: 'center',
    padding: height * 0.004,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: width * 0.04,
  },
  buttonIcon: {
    paddingRight: width * 0.02,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: height * 0.02,
    flexShrink: 1,
    fontWeight: 'bold' ,
  },
});
