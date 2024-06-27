function faToEnDigits(input:string | number):string{
  if (typeof input !== "string"){
    return '';
  }
  const regex = /[۰-۹]/g;
  const result = input.replace(regex, function (w) {
    return String.fromCharCode(w.charCodeAt(0) - 1728);
  }
  );
  return result;
}

function enToFaDigits(input:string | number):string{
  if (typeof input !== "string" && isNaN(input)){
    return '';
  }
  const regex = /[0-9]/g;
  const result = input.toString().replace(regex, function (w) {
    return String.fromCharCode(w.charCodeAt(0) + 1728);
  }
  );
  return result;
}
export {enToFaDigits, faToEnDigits};