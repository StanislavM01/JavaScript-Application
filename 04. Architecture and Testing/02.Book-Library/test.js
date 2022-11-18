let { chromium } = require('playwright-chromium')
let assert = require('chai').assert

let mockData = {
    "d953e5fb-a585-4d6b-92d3-ee90697398a0": { "author": "J.K.Rowling", "title": "Harry Potter and the Philosopher's Stone" },
    "d953e5fb-a585-4d6b-92d3-ee90697398a1": { "author": "Gosho Nakov", "title": "C# Fundamentals" }
}

describe('Test', async function () {
    this.timeout(5000)
    let browser
    let page
    before(async function () {
        browser = await chromium.launch({
            headless: false,
        })
        return browser
    })
    after(async function () {
        await browser.close()
    })
    beforeEach(async function () {
        page = await browser.newPage()
        return page
    })
    afterEach(async function () {
        await page.close()
    })
    it('work', async function () {
        await page.route('**/jsonstore/collections/books*', (route, request) => {
            route.fulfill({
                status: 200,
                headers: {
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(mockData)

            })

        })
        await page.goto('http://localhost:5500',)
        await page.click('text=Load All Books')
        await page.waitForSelector('text=Harry Potter')
        let allTr = await page.$$eval('tbody tr', function (trows) {
            return trows.map(a => a.textContent)
        })
        assert.include(allTr[0], 'Harry Potter and the Philosopher')
        assert.include(allTr[1], 'C# Fundamental')
    })
    it('add new book', async function () {
        await page.goto('http://localhost:5500')
        await page.fill('form#createForm input[name="title"]', 'chervenata shapchica')
        await page.fill('form#createForm input[name="author"]', 'Sharl Pero')

        let [request] = await Promise.all([
            page.waitForRequest(request => request.method() == 'POST' ),
            page.click('text=Submit')
        ])
        let data = JSON.parse(request.postData())
        assert.equal(data.title,'chervenata shapchica')


        await page.click('text=Load All Books')


    })


})