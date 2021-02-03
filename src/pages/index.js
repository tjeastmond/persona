// import Head from 'next/head';
import {
  personaList,
  personaListByArcana,
  getPersonaByName,
} from '@services/utils';

export default function Home() {
  // console.log(personaList());
  console.log(personaListByArcana('lovers'));
  console.log(getPersonaByName('clotho'));

  return (
    <div>
      <h1>Persona</h1>
    </div>
  );
}
