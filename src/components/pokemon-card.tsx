import { View, Text, StyleSheet, Platform, Image, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';

interface PokemonCardProps {
  name: string;
  image: any;
  type: string;
  hp: number;
  moves: string[];
  weaknesses: string[];
}

const  getTypeDetails = (type: string) => {
  switch (type.toLowerCase()) {
    case "electric":
      return { borderColor: "#FFD700", emoji: "⚡️"};
      case "water": 
      return { borderColor: "#6493EA", emoji: "💧"};
      case "fire": 
      return { borderColor: "#FF5733", emoji: "🔥"};
      case "grass":
        return { borderColor: "#66CC66", emoji: "🌿"};
        default:
          return { borderColor: "#A0A0A0", emoji: "❓"};
  }
};
export default function PokemonCard({
  name,
  image,
  type,
  hp,
  moves,
  weaknesses,
}: PokemonCardProps) {
  const { borderColor, emoji} = getTypeDetails(type);
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.scrollView}> 
    <View style={styles.card}>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.hp}>❤️{hp}</Text>
      </View>
    
          <Image 
          source={image} 
          style={styles.image}
          accessibilityLabel={`${name} pokemon`}  
          resizeMode='contain'
          />
       
       <View style={styles.typeContainer}>
        <View style={[styles.badge, { borderColor}]}>
        <Text style={styles.typeEmoji}>{emoji}</Text>
        <Text style={styles.typeText}>{type}</Text>
        </View>
       </View>

       <View style={styles.movesContainer}>
        <Text style={styles.movesText}>Moves: {moves.join(", ")}</Text>
       </View>

       <View style={styles.weaknessContainer}>
        <Text style={styles.weaknessText}>weaknesses: {weaknesses.join(", ")}</Text>
       </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    marginVertical: 20
    // paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    borderWidth: 2,
    padding: 16,
    margin: 16,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 2, height: 2 },
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
      android: {
        elevation: 5,
      },
    }), 
  },
  nameContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 32,
    width: "100%"
  },
  name: {
    fontSize: 30,
  },
  hp: {
    fontSize: 22,
  },
  image: {
    width: "100%",
    height: 200,
    marginBottom: 16,
  },
  typeContainer: {
    alignItems: "center",
    marginBottom: 40
  },
  badge: {
    flexDirection: "row", 
    alignItems: "center",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    borderWidth: 4,
  },
  typeEmoji: {
    fontSize: 30,
    marginRight: 12,
  },
  typeText: {
    fontSize: 22,
    fontWeight: "bold"
  },
  movesContainer: {
    marginBottom: 16, 
  },
  movesText: {
    fontSize: 22,
    fontWeight: "bold"
  },
  weaknessContainer: {
    marginBottom: 8,
  },
  weaknessText: {
    fontSize: 22,
    fontWeight: "bold"
  }
});

