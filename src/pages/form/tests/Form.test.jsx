import { fireEvent, getByRole, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Form from '../Form';

test('checboxa tıklandığında butonun deiğişimi', async () => {
  const user = userEvent.setup(); //promise
  render(<Form />);

  //gerekli elementler
  const kosullar = screen.getByRole('checkbox', {
    name: 'Kosulları okudum ve kabul ediyorum',
  });
  const button = screen.getByRole('button', { name: /siparişi onayla/i });

  //butonun inaktif olma durumu
  expect(kosullar).not.toBeChecked();
  expect(button).toBeDisabled();

  //sözleşmeleri kabul etsin
  await user.click(kosullar);

  //buton artık aktif olucak
  expect(button).toBeEnabled();

  //buton tekrar inaktif olur
  await user.click(kosullar);
  expect(button).toBeDisabled();
});
