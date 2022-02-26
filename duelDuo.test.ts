
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    await driver.get('http://localhost:3000/public/index.html')
})


afterAll(async () => {
    await driver.quit()
})

test("Button displays choices", async () => {
    const draw = await driver.findElement(By.id('draw')) 
    const displayed = await draw.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(1000)
    
})


test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
    await driver.sleep(1000)
    
})

test("Play again! button", async () => {
    const playAgain = await driver.findElement(By.id("play-again"))
    const displayed = await playAgain.isDisplayed()
    await playAgain.click()
    expect(displayed).toBe(true)
    
});