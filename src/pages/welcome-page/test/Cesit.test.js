import Cesit from './../Cesit';
import {
  render,
  getByRole,
  findAllByRole,
  screen,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
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

test('Sepete çeşit ekleme işlemi', async () => {
  const user = userEvent.setup();
  render(<Cesit />);

  //butonları seçelim
  const [mintBtn, vanillaBtn, chocoBtn, caramelBtn] =
    await screen.findAllByRole('button', { name: /ekle/i });

  // Sepete 2 vanilyalı ekler
  await user.dblClick(vanillaBtn);

  // sepeti seçme işlemi
  //? screen.getByTestId("ucret") ikincil method

  const sepet = screen.getByText(/Çeşitler Ücret:/i); //insensetive
  expect(sepet).toHaveTextContent('6');
});

test('Sepetteki ürünü sıfırlama işlemi', async () => {
  render(<Cesit />);
  const user = userEvent.setup();

  //sıfırlama ve ekleme butonlarını seçme
  const addBtns = await screen.findAllByRole('button', { name: 'Ekle' });
  const delBtns = await screen.findAllByRole('button', { name: 'Sıfırla' });
  const sepet = screen.getByText(/Çeşitler Ücret:/i);

  //ekleme işlemi
  await user.click(addBtns[0]);
  await user.dblClick(addBtns[1]);

  expect(sepet).toHaveTextContent('9');

  //sıfırlama işlemi
  await user.click(delBtns[0]);

  expect(sepet).toHaveTextContent('6');

  //ikinci sıfırlama  işlemi
  await user.click(delBtns[1]);

  expect(sepet).toHaveTextContent('0');
});
