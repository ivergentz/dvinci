import { v4 as uuid4 } from 'uuid'
import bike from '../../images/bike.svg'
import rocket from '../../images/rocket.svg'
import smiley from '../../images/smiley.svg'
import sun from '../../images/sun.svg'

export const supportEntries = [
  {
    id: uuid4(),
    head: '...bei meiner Fahrt als Developer.',
    text: 'Lasst uns gemeinsam Gas geben!',
    img: bike,
  },
  {
    id: uuid4(),
    head: '...bei meinen Arbeitsbedingungen.',
    text: 'Höhenverstellbarer Tisch ist super. Anteilig remote natürlich auch.',
    img: sun,
  },
  {
    id: uuid4(),
    head: '...zuerst bei meiner Weiterentwicklung.',
    text: 'Danach können wir über Urlaub reden!',
    img: smiley,
  },
  {
    id: uuid4(),
    head: '...lasst mich mit euch durchstarten.',
    text: 'Ich habe Lust den nächsten Karrierschritt zu gehen!',
    img: rocket,
  },
]
