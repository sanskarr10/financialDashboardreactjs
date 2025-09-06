import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.financialdashboard',
  appName: 'FinancialDashboard',
  webDir: 'out',
  bundledWebRuntime: false,
  server: {
    // For live-reload during dev on device, set to your LAN IP if needed.
    androidScheme: 'https'
  }
};

export default config;
