//Modified from Selenium IDE Export

const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('Sweet Escape Test Scenarios', function() {
  this.timeout(120000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('firefox').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('Homepage', async function() {
    //Open Homepage
    await driver.get("https://www.sweetescape.com/en")
        let URL = await driver.getCurrentUrl()
        let title = await driver.getTitle()
        assert.equal(URL, 'https://www.sweetescape.com/en')
        assert.equal(title, 'Hire a professional photographer | Sweetescape')
        await driver.sleep(1000);
    //Search Bar
    await driver.findElement(By.name("headerSearchForm")).click()
    await driver.findElement(By.name("headerSearchForm")).sendKeys('Yogyakarta')
    await driver.sleep(1000);
    await driver.findElement(By.name("headerSearchForm")).clear()
    await driver.findElement(By.name("headerSearchForm")).sendKeys('Konoha')
    await driver.sleep(1000);
    await driver.findElement(By.css(".sweetescape")).click()
    await driver.sleep(1000);
    //Change Language
    const hoverable = driver.findElement(By.css(".DesktopHeader__LocaleArea"));
    const actions = driver.actions({async: true});
        await driver.manage().setTimeouts({ implicit: 2000 });
        await actions.move({origin: hoverable}).perform();
        await driver.findElement(By.linkText("Bahasa Indonesia")).click()
        await driver.sleep(1000);
        await driver.findElement(By.css(".DesktopHeader__LanguageSelect")).click()
        await driver.findElement(By.linkText("Español")).click()
        await driver.sleep(1000);
        await driver.findElement(By.css(".DesktopHeader__LanguageSelect")).click()
        await driver.findElement(By.linkText("日本語")).click()
        await driver.sleep(1000);
        await driver.findElement(By.css(".DesktopHeader__LanguageSelect")).click()
        await driver.findElement(By.linkText("한국어")).click()
        await driver.sleep(1000);
        await driver.findElement(By.css(".DesktopHeader__LanguageSelect")).click()
        await driver.findElement(By.linkText("ภาษาไทย")).click()
        await driver.sleep(1000);
        await driver.findElement(By.css(".DesktopHeader__LanguageSelect")).click()
        await driver.findElement(By.linkText("中文 (简体)")).click()
        await driver.sleep(1000);
        await driver.findElement(By.css(".DesktopHeader__LanguageSelect")).click()
        await driver.findElement(By.linkText("中文 (台灣)")).click()
        await driver.sleep(1000);
        await driver.findElement(By.css(".DesktopHeader__LanguageSelect")).click()
        await driver.findElement(By.linkText("English")).click()
        await driver.sleep(1000);
    //Registration Link
    await driver.findElement(By.css(".DesktopHeader__Link:nth-child(1) .DesktopHeader__ItemsText")).click()
    await driver.sleep(1000);
    await driver.get("https://www.sweetescape.com/en")
    //Login Link
    await driver.findElement(By.css(".DesktopHeader__Link:nth-child(3) .DesktopHeader__ItemsText")).click()
    await driver.sleep(1000);
    await driver.get("https://www.sweetescape.com/en")
    //Download for iOS
    await driver.findElement(By.css(".DesktopHeader__DownloadArea")).click()
    await driver.findElement(By.linkText("Download for iOS")).click()
    await driver.sleep(1000);
    await driver.get("https://www.sweetescape.com/en")
    //Download for Android
    await driver.findElement(By.css(".DesktopHeader__DownloadArea")).click()
    await driver.findElement(By.linkText("Download for Android")).click()
    await driver.sleep(1000);
    await driver.get("https://www.sweetescape.com/en")
  })
  it('Registration', async function() {
    await driver.get("https://www.sweetescape.com/en")
        let URL = await driver.getCurrentUrl()
        let title = await driver.getTitle()
        assert.equal(URL, 'https://www.sweetescape.com/en')
        assert.equal(title, 'Hire a professional photographer | Sweetescape')
        await driver.sleep(1000);
    await driver.findElement(By.css(".DesktopHeader__Link:nth-child(1) .DesktopHeader__ItemsText")).click()
    //Click without fill
    await driver.findElement(By.css(".EmailCheck__Button")).click()
    await driver.sleep(1000);
    //Registration flow - Add '+0XX' before '@' if email already registered
    await driver.findElement(By.name("email")).sendKeys("akunspesial001@gmail.com")
    await driver.findElement(By.css(".EmailCheck__Button")).click()
    await driver.sleep(1000);
    //Click without fill
    await driver.findElement(By.id("submit-user-form")).click()
    await driver.sleep(1000);
    //Registration Details
    await driver.findElement(By.id("user_name")).sendKeys("Dani Adityatama")
    await driver.findElement(By.css(".selectize-input")).click()
    await driver.findElement(By.css("div.option:nth-child(93)")).click()
    await driver.findElement(By.id("user_phone")).sendKeys("83841234567")
    await driver.findElement(By.id("user_gender")).click()
    await driver.findElement(By.css("#user_gender > option:nth-child(2)")).click()
    await driver.findElement(By.id("datepicker")).click()
    await driver.findElement(By.css(".ui-datepicker-calendar > tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(7) > a:nth-child(1)")).click()
    //await driver.findElement(By.css("#select2-user_nationality-container")).click()
    //await driver.sleep(1000);
    //await driver.findElement(By.id("ID")).click()
    //dunno why can't click country element list
    await driver.findElement(By.id("user_password")).sendKeys("T@ster01")
    await driver.sleep(1000);
    await driver.findElement(By.id("submit-user-form")).click()
  })
  it('Login', async function() {
    await driver.get("https://www.sweetescape.com/en")
        let URL = await driver.getCurrentUrl()
        let title = await driver.getTitle()
        assert.equal(URL, 'https://www.sweetescape.com/en')
        assert.equal(title, 'Hire a professional photographer | Sweetescape')
        await driver.sleep(1000);
    await driver.findElement(By.css(".DesktopHeader__Link:nth-child(3) .DesktopHeader__ItemsText")).click()
    //Click without fill
    await driver.findElement(By.id("gtm-login-button")).click()
    await driver.sleep(1000);
    //Remember Me and Forgot Password
    await driver.findElement(By.css(".login-form_checkbox-label-new")).click()
    await driver.sleep(1000);
    await driver.findElement(By.linkText("Forgot Password?")).click()
    await driver.sleep(1000);
    await driver.get("https://www.sweetescape.com/en/login")
    await driver.sleep(1000);
    await driver.findElement(By.linkText("Register Here")).click()
    await driver.sleep(1000);
    await driver.get("https://www.sweetescape.com/en/login")
    //Login Attempt
    await driver.findElement(By.css("#login_form > #user_email")).sendKeys("akunmail")
    await driver.findElement(By.id("user_password")).sendKeys("Tester001")
    await driver.findElement(By.id("gtm-login-button")).click()
    await driver.sleep(1000);
    await driver.findElement(By.css("#login_form > #user_email")).clear()
    await driver.findElement(By.css("#login_form > #user_email")).sendKeys("akunspesial001@gmail.com")
    await driver.findElement(By.id("user_password")).clear()
    await driver.findElement(By.id("user_password")).sendKeys("Tester00111")
    await driver.findElement(By.id("gtm-login-button")).click()
    await driver.sleep(1000);
    await driver.findElement(By.id("user_password")).clear()
    await driver.findElement(By.css("#login_form > #user_email")).sendKeys("akunspesial001@gmail.com")
    await driver.findElement(By.id("user_password")).sendKeys("T@ster01")
    await driver.sleep(1000);
    await driver.findElement(By.id("gtm-login-button")).click()
    await driver.sleep(1000);
  })
  it('Order Flow', async function() {
    await driver.get("https://www.sweetescape.com/en")
        let URL = await driver.getCurrentUrl()
        let title = await driver.getTitle()
        assert.equal(URL, 'https://www.sweetescape.com/en')
        assert.equal(title, 'Hire a professional photographer | Sweetescape')
        await driver.sleep(1000);
    //Login Attempt
    await driver.findElement(By.css(".DesktopHeader__Link:nth-child(3) .DesktopHeader__ItemsText")).click()
    await driver.findElement(By.css("#login_form > #user_email")).sendKeys("akunspesial001@gmail.com")
    await driver.findElement(By.id("user_password")).sendKeys("T@ster01")
    await driver.sleep(1000);
    await driver.findElement(By.id("gtm-login-button")).click()
    await driver.sleep(1000);
    //Click City
    await driver.get("https://www.sweetescape.com/en")
    const cities = driver.findElement(By.css("div.DesktopHeader__Element:nth-child(1) > div:nth-child(1)"));
    const actions2 = driver.actions({async: true});
        await driver.manage().setTimeouts({ implicit: 2000 });
        await actions2.move({origin: cities}).perform();
    await driver.findElement(By.css(".DesktopHeader__PopularCitiesContent > div:nth-child(5) > div:nth-child(1)")).click()
    //Moment
    await driver.findElement(By.css(".css-1py49rq")).click()
    await driver.sleep(1000);
    await driver.findElement(By.id("react-select-2-option-7")).click()
    await driver.sleep(1000);
    await driver.findElement(By.css(".Card__Form .Button__Primary")).click()
    await driver.sleep(5000);
    //Package
    await driver.findElement(By.css(".Package__List:nth-child(2) .Package__SelectButton")).click()
    await driver.sleep(1000);
    //Information Fill
    await driver.findElement(By.css(".PhotoDetail__Submit")).click()
    await driver.sleep(1000);
    await driver.findElement(By.css(".PhotoDetail__DatePicker")).click()
    await driver.findElement(By.css(".react-datepicker__week:nth-child(5) > .react-datepicker__day--031")).click()
    await driver.findElement(By.id("PhotoDetail__PaxInput")).sendKeys("4")
    await driver.findElement(By.css(".PhotoDetail__MeetingLocation > div:nth-child(2)")).click()
    await driver.sleep(10000);
    await driver.findElement(By.css("div.MeetingLocation:nth-child(3)")).click()
    await driver.findElement(By.css(".PhotoDetail__PhotoTime > div:nth-child(2)")).click()
    await driver.sleep(1000);
    await driver.findElement(By.css("div.PhotoTime:nth-child(3)")).click()
    await driver.findElement(By.id("PhotoDetail__MeetingLocationDetail")).sendKeys("Liberty Statue")
    await driver.findElement(By.id("PhotoDetail__AdditionalInfo")).sendKeys("Lorem Ipsum Dolor Sit Amet")
    await driver.findElement(By.css(".PhotoDetail__Submit")).click()
    await driver.sleep(10000);
    //Checkout
    await driver.findElement(By.css(".toggle-credit-overlay")).click()
    await driver.sleep(1000);
    await driver.findElement(By.css(".paypal-button")).click()
    await driver.sleep(5000);
    //Paypal pop up browser not showing up?
  })
})