import { v4 as uuid4 } from 'uuid'
import bike from '../../images/bike.svg'
import rocket from '../../images/rocket.svg'
import smiley from '../../images/smiley.svg'
import sun from '../../images/sun.svg'

export const supportEntries = [
  {
    id: uuid4(),
    head: '...ich kann aufsteigen und losfahren',
    text: 'Das Rennrad ist der nächste Schritt. Gern auch Downhill',
    img: bike,
  },
  {
    id: uuid4(),
    head: '...beim Aufgehen meiner Sonne',
    text: 'Ganz schön schwierig sich hier immer einen guten Spruch auszudenken',
    img: sun,
  },
  {
    id: uuid4(),
    head: '...bei meiner Weiterentwicklung',
    text: 'Danach können wir über Urlaub reden',
    img: smiley,
  },
  {
    id: uuid4(),
    head: '...lasst mich durchstarten',
    text: 'Ich habe Lust den nächsten Karrierschritt zu gehen',
    img: rocket,
  },
]
