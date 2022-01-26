#!/usr/bin/env zx

// note alignment
const components = ["system", "config-provider", "theme", "progress", "icon", "link", "image", "tag", "avatar", "divider", "radio", "space", "button", "trigger", "tooltip", "typography", "popover", "input"]

for (let i = 0; i < components.length; i++) {
  await $`npx lerna run build --scope=@illa-design/${components[i]}`
}

await $`npx lerna run build --scope=@illa-design/react`