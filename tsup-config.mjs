const common = {
    sourcemap: true,
    target: "node14",
    splitting: false,
};

/** @type {import("tsup").Options} */
export const libOptions = {
    ...common,
    dts: true,
    format: ["esm", "cjs"],
    outDir: "dist/lib/",
};

/** @type {import("tsup").Options} */
export const binOptions = {
    ...common,
    platform: "node",
    format: ["esm"],
    outDir: "dist/bin/",
};
