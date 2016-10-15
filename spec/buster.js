var config = module.exports;

config["My tests"] = {
    rootPath: "../",
    environment: "node", // or "browser"
    sources: [
        "thing.js"
    ],
    tests: [
        "spec/*.spec.js"
    ]
}
