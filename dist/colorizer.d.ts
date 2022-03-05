import * as chalk from "chalk";
import { ColorSupport } from 'chalk';
export declare const colorize: (tokens: Array<string>, colorOptions?: {
    [index: string]: chalk.Chalk & {
        supportsColor: ColorSupport;
    };
} | undefined) => string;
