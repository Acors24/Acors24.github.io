export type TerminalAction =
    | {
          type: "write";
          payload: string;
      }
    | {
          type: "writeLine";
          payload: string;
      }
    | {
          type: "writeMultiple";
          payload: string[];
      }
    | {
          type: "newLine";
      }
    | {
          type: "clear";
      };

const HEIGHT = 20;

function write(lines: string[], text: string) {
    const lastLine = lines[lines.length - 1];
    const newLine = lastLine + text;
    return [...lines.slice(0, -1), newLine];
}

function newLine(lines: string[]) {
    if (lines.length >= HEIGHT) {
        return [...lines.slice(1), ""];
    } else {
        return [...lines, ""];
    }
}

function writeLine(lines: string[], text: string) {
    return newLine(write(lines, text));
}

function writeMultiple(lines: string[], text: string[]) {
    return text.reduce(writeLine, lines);
}

function clear() {
    return Array.from({ length: HEIGHT }, () => "");
}

export function newTerminal() {
    return clear();
}

export function reducer(state: string[], action: TerminalAction) {
    switch (action.type) {
        case "write":
            return write(state, action.payload);
        case "writeLine":
            return writeLine(state, action.payload);
        case "writeMultiple":
            return writeMultiple(state, action.payload);
        case "newLine":
            return newLine(state);
        case "clear":
            return clear();
        default:
            return state;
    }
}
