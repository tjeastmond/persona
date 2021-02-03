import constants from '@data/constants';
import personaData from '@data/personaData';
import skillData from '@data/skillData';
import { capitalizeName } from '@functions/strings';

function parseForList(name) {
  return {
    arcana: personaData[name].arcana,
    level: personaData[name].level,
    name,
  };
}

function sortPersonaeByLevel(personae) {
  if (!Array.isArray(personae)) return [];

  return [...personae].sort((a, b) => {
    if (a.level < b.level) return -1;
    if (a.level > b.level) return 1;
    return 0;
  });
}

// simply return a list of persona names
export function personaList() {
  const personae = Object.keys(personaData).map(parseForList);
  const sorted = sortPersonaeByLevel(personae);
  return sorted;
}

export function personaListByArcana(arcana) {
  return personaList().filter(
    persona => persona.arcana.toLowerCase() === arcana.toLowerCase(),
  );
}

export function getPersonaByName(name) {
  const formattedName = capitalizeName(name);

  if (personaData.hasOwnProperty(formattedName)) {
    const persona = personaData[formattedName];
    persona.name = formattedName;
    return persona;
  }

  return null;
}
