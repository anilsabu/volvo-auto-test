describe('Volvo testing', () => {
    it('open url & asset title', async () =>{
      await  browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
      await  expect(browser).toHaveTitle('A million more | Volvo Cars - International');
    });

  
    
    it('header test', async () =>{
      await browser.url('https://www.volvocars.com/intl/v/car-safety/a-million-more');
      const header2 = await $('h2*=ideas');
      console.log('H2 is: '+header2.getText());

    });


});