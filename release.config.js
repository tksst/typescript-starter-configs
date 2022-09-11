const branch = process.env.GITHUB_REF_NAME;

const commitAnalyzer = [
    "@semantic-release/commit-analyzer",
    {
        preset: "angular",
        releaseRules: [{ type: "build", scope: "deps", release: "patch" }],
        parserOpts: {
            noteKeywords: ["BREAKING CHANGE", "BREAKING CHANGES"],
        },
    },
];

const pluginsRelease = [
    commitAnalyzer,
    "@semantic-release/release-notes-generator",
    "@semantic-release/changelog",
    "@semantic-release/npm",
    "@semantic-release/github",
    "@semantic-release/git",
];

const plubinsPreRelease = [
    commitAnalyzer,
    "@semantic-release/release-notes-generator",
    "@semantic-release/npm",
    "@semantic-release/github",
];

const config = {
    branches: ["master", { name: "alpha", prerelease: true }],
};

if (config.branches.some((it) => it === branch || (it.name === branch && !it.prerelease))) {
    config.plugins = pluginsRelease;
} else {
    config.plugins = plubinsPreRelease;
}

module.exports = config;
