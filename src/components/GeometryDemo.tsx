import React from "react";
import { newTerminal, reducer, TerminalAction } from "../Terminal";

async function* demo(dispatch: React.Dispatch<TerminalAction>) {
    const pause = (delay: number) =>
        new Promise((resolve) => setTimeout(resolve, delay));

    async function* writeSlowly(
        dispatch: React.Dispatch<TerminalAction>,
        text: string
    ) {
        for (const character of text) {
            yield dispatch({ type: "write", payload: character });
            await pause(100);
        }
    }

    function splitMultiline(text: string) {
        return text.split("\n");
    }

    const PROMPT = "> ";

    const printPrompt = () => dispatch({ type: "write", payload: PROMPT });

    dispatch({ type: "clear" });
    printPrompt();
    await pause(3000);

    yield* writeSlowly(dispatch, "square side 3");
    dispatch({ type: "newLine" });
    dispatch({
        type: "writeMultiple",
        payload: splitMultiline(
            `Square
        side = 3.00
        area = 9.00
        diagonal = 4.24
        perimeter = 12.00`
        ),
    });
    printPrompt();
    await pause(1000);

    yield* writeSlowly(dispatch, "square side 2 side 3");
    dispatch({ type: "newLine" });
    dispatch({
        type: "writeMultiple",
        payload: splitMultiline(`                ^^^^
Argument redefinition: side
Usage:
        square { side <value1> | diagonal <value1> | area <value1> }`),
    });
    printPrompt();
    await pause(1000);

    yield* writeSlowly(dispatch, "isosceles-triangle area 10");
    dispatch({ type: "newLine" });
    dispatch({
        type: "writeMultiple",
        payload: splitMultiline(`Too few arguments.
Usage:
        isosceles-triangle { side <value1> | height <value1> | area <value1> | base <value1> }{2}`),
    });
    printPrompt();
    await pause(1000);

    yield* writeSlowly(dispatch, "isosceles-triangle area 10 height 5");
    dispatch({ type: "newLine" });
    dispatch({
        type: "writeMultiple",
        payload: splitMultiline(`IsoscelesTriangle
        side = 5.39
        height = 5.00
        area = 10.00
        base = 4.00
        perimeter = 14.77`),
    });
    printPrompt();
    await pause(1000);

    yield* writeSlowly(dispatch, "circle");
    dispatch({ type: "newLine" });
    dispatch({
        type: "writeMultiple",
        payload: splitMultiline(`Too few arguments.
Usage:
        circle { radius <value1> | circumference <value1> | area <value1> | shape <value1> }`),
    });
    printPrompt();
    await pause(1000);

    yield* writeSlowly(dispatch, "circle circumference 6.2830");
    dispatch({ type: "newLine" });
    dispatch({
        type: "writeMultiple",
        payload: splitMultiline(`Circle
        radius = 1.00
        circumference = 6.28
        area = 3.14`),
    });
    printPrompt();
    await pause(1000);

    yield* writeSlowly(dispatch, "history area asc");
    dispatch({ type: "newLine" });
    dispatch({
        type: "writeMultiple",
        payload: splitMultiline(`1. Circle ['radius'=1.00 'circumference'=6.28 'area'=3.14 ]
2. Square ['side'=3.00 'area'=9.00 'diagonal'=4.24 'perimeter'=12.00 ]
3. IsoscelesTriangle ['side'=5.39 'height'=5.00 'area'=10.00 'base'=4.00 'perimeter'=14.77 ]`),
    });
    printPrompt();
    await pause(1000);

    yield* writeSlowly(dispatch, "icosahedron");
    dispatch({ type: "newLine" });
    dispatch({
        type: "writeMultiple",
        payload: splitMultiline(`Unrecognized command: icosahedron
Type 'help' for a list of available commands.`),
    });
    printPrompt();
    await pause(1000);

    yield* writeSlowly(dispatch, "help");
    dispatch({ type: "newLine" });
    dispatch({
        type: "writeMultiple",
        payload: splitMultiline(`OTHER:
        language             - change program language
        save                 - save created shapes to a file
        history              - display created shapes
        exit                 - exit the program
        [...]
SHAPES:
        isosceles-triangle   - display isosceles triangle info
        square               - display square info
        circle               - display circle info
        [...]`),
    });
    printPrompt();
    await pause(2000);

    yield* writeSlowly(dispatch, "exit");
    await pause(1000);
}

function preserveLeadingWhitespace(line: string) {
    const firstNonWhitespace = line.search(/\S/);
    if (firstNonWhitespace === -1) {
        return "\u00a0".repeat(line.length);
    } else {
        return (
            "\u00a0".repeat(firstNonWhitespace) + line.slice(firstNonWhitespace)
        );
    }
}

function TerminalLine({ line }: Readonly<{ line: string }>) {
    return (
        <div className={line === "" ? "text-transparent" : "text-nowrap"}>
            {preserveLeadingWhitespace(line === "" ? " " : line)}
        </div>
    );
}

export default function GeometryDemo() {
    const [terminal, dispatch] = React.useReducer(reducer, newTerminal());

    React.useEffect(() => {
        const timeout = setTimeout(async () => {
            while (true) {
                const generator = demo(dispatch);
                while (true) {
                    const { done } = await generator.next();
                    if (done) {
                        break;
                    }
                }
            }
        });
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className="flex-1 w-0 drop-shadow-2xl">
            <div className="bg-slate-800 text-slate-200 font-mono p-2 rounded-lg overflow-x-scroll">
                {terminal.map((line, index) => (
                    <TerminalLine key={index} line={line} />
                ))}
            </div>  
        </div>
    );
}
