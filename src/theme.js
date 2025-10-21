// src/theme.js
import { createSystem, defaultConfig } from "@chakra-ui/react";

// 220901  (dark brown), 621708  (medium brown), 941b0c  (red), bc3908  (orange),  f6aa1c  (yellow) 

const theme = {
  theme: {
    tokens: {
      colors: {
        brand: {
          900: "#220901",
          800: "#f6aa1c",
          700: "#bc3908",
        },
      },
    },
  },
};

export const system = createSystem(defaultConfig, theme);
