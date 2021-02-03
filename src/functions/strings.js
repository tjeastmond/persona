import is from 'is_js';

export function isString(str) {
  return is.string(str);
}

export function capitalize(s) {
  if (is.not.string(s)) return s;
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function capitalizeName(s) {
  if (is.not.string(s)) return s;
  return s
    .split(' ')
    .map(n => capitalize(n.toLowerCase()))
    .join(' ')
    .trim();
}

export default {
  capitalize,
  capitalizeName,
};
