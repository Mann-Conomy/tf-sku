import type { Config } from "jest";

const config: Config = {
    verbose: true,
    transform: {
        "\\.[jt]sx?$": "ts-jest"
    }
}

export default config;
