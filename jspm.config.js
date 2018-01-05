SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "dist/": "dist/",
    "lib/": "lib/",
    "styles/": "styles/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  packages: {
    "dist": {
      "format": "register"
    },
    "lib": {
      "format": "register"
    }
  },
  meta: {
    "*.css": {
      "loader": "css",
      "rootURL": "./"
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json"
  ],
  map: {
  },
  packages: {
  }
});
