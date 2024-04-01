/**
 * The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: 
 * (you may want to display this pattern in a fixed font for better legibility)
 *    P   A   H   N
 *    A P L S I I G
 *    Y   I   R
 * And then read line by line: "PAHNAPLSIIGYIR"
 * Write the code that will take a string and make this conversion given a number of rows:
 *    string convert(string s, int numRows);
 */

convert("PAYPALISHIRING", 3); // "PAHNAPLSIIGYIR"
convert("PAYPALISHIRING", 4); // "PINALSIGYAHRPI"
convert("A", 1); // "A"

function convert(s: string, numRows: number): string {
  if (numRows === 1) return s;
  
  let lines = new Array(numRows).fill('');
  let curRow = 0;
  let reverse = false;
  for (let i = 0; i < s.length; i++) {
    lines[curRow] += s[i];

    if (curRow === numRows - 1) reverse = true;
    if (curRow === 0) reverse = false;
    
    curRow = reverse ? curRow - 1 : curRow + 1;
  }
  return lines.join('');
};