// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Remove_Plant', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Remove_Plant', async function() {
    await driver.get("http://localhost:3000/dashboard/garden")
    await driver.manage().window().setRect({ width: 1536, height: 824 })
    await driver.findElement(By.id("52SydY5kBKlejCyrvFDW")).click()
  })
})