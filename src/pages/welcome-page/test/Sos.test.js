import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Sos from '../Sos';

test(' soslar sepete eklenip çıkarılıyor', async () => {
  const user = userEvent.setup();
  render(<Sos />);

  //   gerekli elementleri seçelim
  const sosSepet = screen.getByRole('heading', { name: /Soslar Ücret:/i });
  const bearSos = await screen.findByRole('checkbox', { name: 'Gummi bears' });
  const cherySos = await screen.findByRole('checkbox', { name: 'Cherries' });
  const mochiSos = await screen.findByRole('checkbox', { name: 'Mochi' });

  //gummi bear sosu ekler
  await user.click(bearSos);
  await user.click(cherySos);

  expect(sosSepet).toHaveTextContent('4');

  //soslardan birini çıkarır

  await user.click(bearSos);
  expect(sosSepet).toHaveTextContent('2');

  //bir sosu ekleme ve çıkarma yapar

  await user.dblClick(mochiSos);
  expect(sosSepet).toHaveTextContent('2');
});
