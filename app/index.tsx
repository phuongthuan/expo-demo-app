import { useState } from "react";
import { Button, Text, View, StyleSheet, Platform } from "react-native";
import Map from "@/components/Map";

const useApi = async (endpoint: string) => {
  const response = await fetch(endpoint);
  const jsonResponse = await response.json();
  return jsonResponse;
};

export default function Index() {
  const [data, setData] = useState("");

  const [book, setBook] = useState("");

  const handleGetMessage = async () => {
    const responseData = await useApi("/hello");
    setData(responseData.message);
  };

  const handleGetBook = async (bookId: number) => {
    const responseData = await useApi(`/api/v1/book/${bookId}`);
    setBook(responseData.data.title);
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <Text>Expo Demo App</Text>
      <Text>MOCK SERVER: {process.env.EXPO_PUBLIC_RUN_MOCK_SERVER}</Text>
      {data ? <Text>{data} 🚀</Text> : null}
      <Button onPress={handleGetMessage} title="Get message" />
      <Button onPress={() => setData("")} title="Clear message" />

      <Text>Library</Text>
      <Text>Book: {book}</Text>
      <Button onPress={() => handleGetBook(1)} title="Get book 1" />
      <Button onPress={() => handleGetBook(2)} title="Get book 2" />
      <Button onPress={() => handleGetBook(3)} title="Get book 3" />
      <Button onPress={() => setBook("")} title="Clear book" />

      <Map />
    </View>
  );
}
