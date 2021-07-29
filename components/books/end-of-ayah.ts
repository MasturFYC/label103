export const angka = (n: number) => {
  if (n === 0) return " ";
  const arr = [
    '٠',
    '١',
    '٢',
    '٣',
    '٤',
    '٥',
    '٦',
    '٧',
    '٨',
    '٩'];
  const sn = '' + n;
  let s = '';
  for (let c = 0; c < sn.length; c++) {
    const i = parseInt(sn[c]);
    s = s + arr[i];
  }

  return `${s}`;
  //return `﴿${s}﴾`;
}