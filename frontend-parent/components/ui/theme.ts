import {
  createSystem,
  defaultBaseConfig,
  defineConfig,
} from "@chakra-ui/react";

const customConfig = defineConfig({
  theme: {
    colors: {
      primary: {
        500: "#65AB5C",
      },
    },
  },
});

export const system = createSystem(defaultBaseConfig, customConfig);
