import dbConnect from "../utils/dbConnect"
import { UserAccountRepository } from "server/repositories/UserAccountRepository"
import sessionData from 'content/session-data.json'
import speakerData from 'content/speakers-data.json'

Run()

async function Run() {
    console.log('Get account stats..')
    await dbConnect()
    const repo = new UserAccountRepository()
    const all = await repo.findAll()

    const withEmail = all.filter(i => !!i.email)
    const withAddress = all.filter(i => i.addresses.length > 0)
    const withAddresses = all.filter(i => i.addresses.length > 1)

    console.log('# of Accounts', all.length)
    console.log('Logins with Email', withEmail.length)
    console.log('Logins with Web3', withAddress.length)
    console.log('Multiple Web3 addresses', withAddresses.length)

    const hasPublicSchedule = all.filter(i => !!i.appState.publicSchedule)
    console.log('# of schedules made public', hasPublicSchedule.length)
    console.log()

    const favoritedSpeakers = all.map(i => i.appState.speakers).flat().reduce((accumulator: any, current: string) => {
        if (accumulator[current]) {
            accumulator[current].count += 1
        } else {
            const speaker = speakerData.find(i => i.id === current)
            accumulator[current] = {
                speaker: speaker?.name || current,
                count: 1
            }
        }
        return accumulator
    }, {})

    const sorted = Object.keys(favoritedSpeakers).map(i => favoritedSpeakers[i]).sort((a: any, b: any) => {
        return b.count - a.count
    }).slice(0, 10)
    console.log('# of Speakers favorited', Object.keys(favoritedSpeakers).length)
    sorted.forEach(i => console.log(`- ${i.speaker} (count: ${i.count})`))
    console.log()

    sessionInfo('attending', all.map(i => i.appState.sessions.filter(x => x.level === 'attending').map(x => x.id)).flat())
    sessionInfo('interested', all.map(i => i.appState.sessions.filter(x => x.level === 'interested').map(x => x.id)).flat())
}

function sessionInfo(type: string, sessions: string[]) {
    const grouped = sessions.reduce((accumulator: any, current: string) => {
        if (accumulator[current]) {
            accumulator[current].count += 1
        } else {
            const session = sessionData.find(i => i.id === current)
            accumulator[current] = {
                session: session?.title || current,
                count: 1
            }
        }
        return accumulator
    }, {})

    const sorted = Object.keys(grouped).map(i => grouped[i]).sort((a: any, b: any) => {
        return b.count - a.count
    }).slice(0, 10)

    console.log('# of sessions', type, Object.keys(grouped).length)
    console.log('Total # sessions', type, sessions.length)
    sorted.forEach(i => console.log(`- ${i.session} (count: ${i.count})`))
    console.log()
}