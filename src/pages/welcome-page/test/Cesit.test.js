import Cesit from './../Cesit';
import {
  render,
  getByRole,
  findAllByRole,
  screen,
} from '@testing-library/react';
/*
Komut [All]  By Seçici
!get  //domda var ise
!query  //domda yok ise
!find //async / element domda yok ise
*/

test('API den gelen her çeşit verisini ekrana basar', async () => {
  render(<Cesit />);
  const resimler = await screen.findAllByRole('img', { name: 'cesit' });
  expect(resimler).toHaveLength(4);
});
