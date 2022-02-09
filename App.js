import * as React from "react";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <WebView
      source={{ uri: "https://t246-edu.github.io/doctor_x" }}
      style={{ marginTop: 50 }}
    />
  );
}
