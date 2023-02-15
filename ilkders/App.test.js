import { fireEvent, render, screen } from '@testing-library/react';
import App from '../src/App';

test.skip('ekrana link etiketi basılır', () => {
  //callback(başka fonlsiiyonlar çalıştırıyor)
  render(<App />); //VDOM (Sanal DOM)
  const link = screen.getByText('Learn React'); //insensetive
  expect(link).toBeInTheDocument(); //matcher (eşleştirici)
});

// TDD (TEST DRIVEN DEVELOPMENT) / RED GREEN TEST
// BDD ( BEHAVIOR DRIVEN DEVELOPMENT)

// BİR BUTON OLSUN ONA BASINCA RENGİ VE İÇİNDEKİ YAZI DEĞİŞSİN (kırmızı > maviye dönür | mavi > kırmızıya dönfür)

test('buton doğru renge ve yazıya sahip', () => {
  render(<App />); //vdom
  const colorBtn = screen.getByRole('button', { name: 'Change to blue' }); //selector(seçici)

  //ilk rengi kırmızıdır
  expect(colorBtn).toHaveStyle({ backgroundColor: 'red' }); //matcher (eşleştirici)

  //butona tıklama
  fireEvent.click(colorBtn);

  //butonun rengi mavi olur
  expect(colorBtn).toHaveStyle({ backgroundColor: 'blue' });

  //DOĞRU YAZIYA SAHİP
  expect(colorBtn).toHaveTextContent('Change to red');
});
