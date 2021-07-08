/**
 *
 *A function that truncate any long text
 * @param  {input} string text to truncate
 */
const textTruncate = (input) =>
  input.length > 100 ? `${input.substring(0, 100)} and more...` : input;

export default textTruncate;
