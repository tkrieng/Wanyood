import { isHoliday } from './holidays';

const holidays = new Set([Date.parse("2019-10-23"), Date.parse("2019-10-30")].map(d => (new Date(d)).toDateString()))

it('return true when today is holiday', () => {
    const today = new Date(Date.parse("2019-10-23"))
    // const holidays = new Set([Date.parse("2019-10-23"), Date.parse("2019-10-30")])
    expect(isHoliday(today, holidays)).toEqual(true)
})

it('return false when today is not holiday', () => {
    const today = new Date(Date.parse("2019-10-24"))
    // const holidays = new Set([Date.parse("2019-10-23"), Date.parse("2019-10-30")])
    expect(isHoliday(today, holidays)).toEqual(false)
})

it('return false when today is not holiday', () => {
    const today = new Date(Date.parse('2019-10-23T22:00:00'))
    // const holidays = new Set([Date.parse("2019-10-23"), Date.parse("2019-10-30")])
    expect(isHoliday(today, holidays)).toEqual(true)
})