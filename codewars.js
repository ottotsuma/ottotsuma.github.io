function XO(str) {
var letter_CountX = 0;
var letter_CountO = 0;

for (var position = 0; position < str.length; position++)
{
   if (str.charAt(position) == 'x')
     {
     letter_CountX ++;
     }
   if (str.charAt(position) == 'o')
     {
     letter_CountO ++;
     }
    if (str.charAt(position) == 'O')
     {
     letter_CountO ++;
     }
    if (str.charAt(position) == 'X')
     {
     letter_CountX ++;
     }
  }
  return letter_CountX
}
