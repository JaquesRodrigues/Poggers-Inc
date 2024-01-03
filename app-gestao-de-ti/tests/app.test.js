import { test, expect } from '@playwright/test';

test('Teste de navegação e renderização de elementos', async ({ page }) => {
  // Navega para a página inicial
  await page.goto('http://127.0.0.1:3000');

  // Verifica se o ícone está presente
  // Navega para a página inicial
  await page.goto('http://localhost:3000');
  await page.click('#botao-que-carrega-imagem');
  await page.waitForSelector('img[src="./assets/icon.jpeg"]');
  const icon = await page.$('img[src="./assets/icon.jpeg"]');
  expect(icon).not.toBeNull();

  // Navega para a rota de gráficos
  await Promise.all([
    page.waitForNavigation(),
    page.click('a[href="/Graficos"]'),
  ]);

  // Verifica se o elemento do gráfico está presente
  const chart = await page.$('canvas');
  expect(chart).not.toBeNull();

  // Navega para a rota de planilhas
  await Promise.all([
    page.waitForNavigation(),
    page.click('a[href="/Planilhas"]'),
  ]);

  // Verifica se o elemento da página de planilhas está presente
  const arquivosPage = await page.$('.arquivos-page');
  expect(arquivosPage).not.toBeNull();

  // Navega para a rota do WebChat
  await Promise.all([
    page.waitForNavigation(),
    page.click('a[href="/WebChat"]'),
  ]);

  // Verifica se o elemento da página de WebChat está presente
  const webChat = await page.$('.web-chat');
  expect(webChat).not.toBeNull();
});
