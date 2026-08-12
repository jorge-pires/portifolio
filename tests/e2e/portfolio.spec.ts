import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("renders the core portfolio content", async ({ page }) => {
  await page.goto("/");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Desenvolvedor Frontend Júnior"
  );
  await expect(
    page.getByRole("heading", {
      name: "Evidências do que eu já consigo construir."
    })
  ).toBeVisible();
  await expect(page.getByText("Pokédex", { exact: true })).toBeVisible();
  await expect(page.getByText("TaskFlow", { exact: true })).toBeVisible();
});

test("mobile navigation is keyboard-accessible", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");

  const menuButton = page.getByRole("button", { name: "Abrir menu" });
  await menuButton.focus();
  await page.keyboard.press("Enter");
  await expect(
    page.getByRole("navigation", { name: "Navegação móvel" })
  ).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("navigation", { name: "Navegação móvel" })
  ).toBeHidden();
});

test("has no automatically detectable accessibility violations", async ({
  page
}) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();
  expect(results.violations).toEqual([]);
});
