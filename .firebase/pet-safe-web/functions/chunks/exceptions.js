class InlangException extends Error {
}
class InlangSdkException extends InlangException {
  constructor(message, cause) {
    super();
    this.cause = cause;
    this.message = `

--------------------------------------------------------------------------------

[${this.constructor.name}]

${message}

--------------------------------------------------------------------------------

Cause:
`;
  }
}
export {
  InlangSdkException as I
};
