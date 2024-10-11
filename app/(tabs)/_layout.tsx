import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      {/* /* @tutinfo <CODE>Tabs.Screen</CODE> component works in a similar way and
      accepts same props as <CODE>Stack.Screen</CODE> component. The only
      difference is the navigation pattern on the device. */}
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="about" options={{ title: "About" }} />
    </Tabs>
  );
}
