import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

:root {
  --type-water: #3a86ff;
  --type-fire: #f94144;
  --text-black: #110B11;
  --type-water-secondary: #184280; 
  --type-fire-secondary:  #c51a1d;
}

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    background: #f5f5f5;
    font-size: 14px;
    color: 14px;
    font-family: Helvetica, Arial, sans-serif;
}

.type-water {
  background-color: var(--type-water);
}
.type-fire {
  background-color: var(--type-fire);
}
.type-water-secondary {
  background-color: var(--type-water-secondary);
}
.type-fire-secondary {
  background-color: var(--type-fire-secondary);
}
.text-black {
  color: var(--text-black);
}
th, td {
  text-align: left;
  padding: 16px;
}
button {
  cursor: pointer;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
input[type=text], select, textarea{
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  resize: vertical;
  font-size: 14px;
}
label {
  padding: 12px 12px 12px 0;
  display: inline-block;
}
input[type=submit] {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}
.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}
.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}
.row:after {
  content: "";
  display: table;
  clear: both;
}
/* Responsive layout*/
@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
`;