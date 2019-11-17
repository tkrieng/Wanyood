import { _isHoliday, toThaiDate } from './holidays';

const holidays = new Set([Date.parse("2019-10-23"), Date.parse("2019-10-30")].map(d => (new Date(d)).toDateString()))

describe('isHoliday',() => {
    it('return true when today is holiday', () => {
        const today = new Date(Date.parse("2019-10-23"))
        expect(_isHoliday(today, holidays)).toEqual(true)
    })
    
    it('return false when today is not holiday', () => {
        const today = new Date(Date.parse("2019-10-24"))
        expect(_isHoliday(today, holidays)).toEqual(false)
    })
    
    it('return false when today is not holiday', () => {
        const today = new Date(Date.parse('2019-10-23T22:00:00'))
        expect(_isHoliday(today, holidays)).toEqual(true)
    })
})

describe('toThaiDate', () => {
    const testCases = [
        {time: '2019-11-17T22:00:00', displayText: 'วันอาทิตย์ 17 พฤศจิกายน 2019 22:00:00'},
        {time: '2019-11-18T22:00:00', displayText: 'วันจันทร์ 18 พฤศจิกายน 2019 22:00:00'},
        {time: '2019-11-19T22:00:00', displayText: 'วันอังคาร 19 พฤศจิกายน 2019 22:00:00'},
        {time: '2019-11-20T22:00:00', displayText: 'วันพุธ 20 พฤศจิกายน 2019 22:00:00'},
        {time: '2019-11-21T22:00:00', displayText: 'วันพฤหัสบดี 21 พฤศจิกายน 2019 22:00:00'},
        {time: '2019-11-22T22:00:00', displayText: 'วันศุกร์ 22 พฤศจิกายน 2019 22:00:00'},
        {time: '2019-11-23T22:00:00', displayText: 'วันเสาร์ 23 พฤศจิกายน 2019 22:00:00'},
        {time: '2019-11-24T22:00:00', displayText: 'วันอาทิตย์ 24 พฤศจิกายน 2019 22:00:00'},
    ]

    testCases.forEach(testCase => {
        it(`return ${testCase.time} as expected thai date`, () => {
            const today = new Date(Date.parse(testCase.time))
            expect(toThaiDate(today)).toBe(testCase.displayText)
        })
    })

})
