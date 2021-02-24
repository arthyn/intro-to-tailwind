import faker from 'faker'

export interface User {
    avatar: string;
    displayName: string;
    username: string;
}

export interface Tweet {
    id: number;
    user: User;
    text: string;
    img?: string;
    likes: number;
    retweets: number;
    replies?: Tweet[];
    timeAgo: number;
}

export const hunter = {
    avatar: '/src/assets/avatar.jpg',
    displayName: 'Hunter Miller',
    username: 'hmillerdev'
}

const jiddu = {
    avatar: '/src/assets/jiddu.jpg',
    displayName: 'Jiddu Krishnamurti',
    username: 'thespeaker'
}

const thoughtleader = {
    avatar: `https://avatars.dicebear.com/api/avataaars/${faker.name.firstName()}.svg`,
    displayName: 'Web Thought Leader',
    username: 'galaxybrain'
}

const rando = {
    avatar: `https://avatars.dicebear.com/api/avataaars/${faker.name.firstName()}.svg`,
    displayName: faker.name.findName(),
    username: faker.internet.userName()
}

const users = [hunter, jiddu, thoughtleader, rando]

const tweets = () => {
    const tweetSet: Tweet[] = []
    let userIndex

    for (let i=0;i<100;i++) {
        userIndex = Math.floor(Math.random() * 4) % 4

        tweetSet.push({
            id: i,
            user: users[userIndex],
            text: faker.lorem.sentences(),
            likes: faker.random.number(999),
            retweets: faker.random.number(999),
            timeAgo: faker.date.recent().getTime()
        })
    }

    return tweetSet.sort((a, b) => b.timeAgo - a.timeAgo);
}

export default tweets;