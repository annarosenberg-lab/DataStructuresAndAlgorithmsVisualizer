const PYTHON_KEYWORDS = new Set([
  "def",
  "return",
  "if",
  "elif",
  "else",
  "for",
  "in",
  "while",
  "break",
  "and",
  "or",
  "not",
  "True",
  "False"
]);

const PYTHON_BUILTINS = new Set(["len", "range", "enumerate"]);

type TokenType = "keyword" | "builtin" | "number" | "function" | "comment" | "default";

type Token = {
  value: string;
  type: TokenType;
};

function tokenizeLine(line: string): Token[] {
  const commentIndex = line.indexOf("#");
  const codePart = commentIndex >= 0 ? line.slice(0, commentIndex) : line;
  const commentPart = commentIndex >= 0 ? line.slice(commentIndex) : "";

  const pieces = codePart
    .split(/(\s+|==|!=|<=|>=|\*\*|[=+\-*/%(),:[\].])/g)
    .filter((piece) => piece.length > 0);

  const tokens: Token[] = [];

  for (let i = 0; i < pieces.length; i += 1) {
    const piece = pieces[i];

    if (PYTHON_KEYWORDS.has(piece)) {
      tokens.push({ value: piece, type: "keyword" });
      continue;
    }

    if (PYTHON_BUILTINS.has(piece)) {
      tokens.push({ value: piece, type: "builtin" });
      continue;
    }

    if (/^\d+$/.test(piece)) {
      tokens.push({ value: piece, type: "number" });
      continue;
    }

    if (i > 0 && pieces[i - 1] === "def" && /^[A-Za-z_][A-Za-z0-9_]*$/.test(piece)) {
      tokens.push({ value: piece, type: "function" });
      continue;
    }

    tokens.push({ value: piece, type: "default" });
  }

  if (commentPart) {
    tokens.push({ value: commentPart, type: "comment" });
  }

  return tokens;
}

type PythonCodeBlockProps = {
  code: string;
};

export function PythonCodeBlock({ code }: PythonCodeBlockProps): JSX.Element {
  const lines = code.split("\n");

  return (
    <pre className="code-block" aria-label="Python code">
      <code>
        {lines.map((line, idx) => (
          <span className="line" key={`${line}-${idx}`}>
            {tokenizeLine(line).map((token, tokenIndex) => (
              <span className={`token token-${token.type}`} key={`${token.value}-${tokenIndex}`}>
                {token.value}
              </span>
            ))}
            {idx < lines.length - 1 ? "\n" : ""}
          </span>
        ))}
      </code>
    </pre>
  );
}
