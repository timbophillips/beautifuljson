import * as chalk from "chalk";
export declare const colorize: (tokens: string[], colorOptions?: {
    [index: string]: chalk.Chalk & {
        supportsColor: chalk.ColorSupport;
    };
} | undefined) => string;
