import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const pkg = require("../../package.json");

export const homeController = (req, res) => {
  const { author, description, name, version } = pkg;

  res.status(200).json({
    author,
    description,
    name,
    version,
  });
};
