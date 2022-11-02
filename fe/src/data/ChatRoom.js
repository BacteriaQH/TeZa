const ChatRoom = [
    {
        id: '1',
        users: [{
            id: 'u1',
            name: 'Vadim',
            imageUri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/s200x200/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_eui2=AeF3UwtnAs3QLEJRnLSp4-hQxlokCBJZ6JPGWiQIElnok9HafHyjqv9D4bW9zeNFfNJlg5jLsvbewM7j5OD-OFy-&_nc_ohc=IxycgYSpqQEAX8EcTqI&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=640a83293bb75378958d22b633302f1b&oe=5F9F4BB7',
        }, {
            id: 'u2',
            name: 'Lukas',
            imageUri: 'https://scontent.fhan2-5.fna.fbcdn.net/v/t39.30808-1/275788477_104724232187283_7182379467093339344_n.jpg?stp=dst-jpg_p100x100&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=Q5Nb_vk9PfsAX-fIGhV&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan2-5.fna&oh=00_AfCXfstpmB0d85kdiFX7QgTsU0566Y3VBxqeBMu_c_ohQQ&oe=6366500C',
        }],
        lastMessage: {
            id: 'm1',
            content: 'Well done this sprint, guys!',
            createdAt: '2022-11-01T14:48:00.000Z',
        }
    }, {
        id: '2',
        users: [{
            id: 'u1',
            name: 'Vadim',
            imageUri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/s200x200/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_eui2=AeF3UwtnAs3QLEJRnLSp4-hQxlokCBJZ6JPGWiQIElnok9HafHyjqv9D4bW9zeNFfNJlg5jLsvbewM7j5OD-OFy-&_nc_ohc=IxycgYSpqQEAX8EcTqI&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=640a83293bb75378958d22b633302f1b&oe=5F9F4BB7',
        }, {
            id: 'u3',
            name: 'Daniil',
            imageUri: 'https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-1/289557596_3123290434590566_8948340111536362351_n.jpg?stp=dst-jpg_p100x100&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=pqmhrFQeL9cAX_BMeJa&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan2-2.fna&oh=00_AfDkKdw8ZglcfvxGhZqBcd1KVvZmeC5wv66jRU9UhekBDQ&oe=636548DB',
        }],
        lastMessage: {
            id: 'm2',
            content: 'How are you doing?',
            createdAt: '2022-11-01T15:40:00.000Z',
        }
    }, {
        id: '3',
        users: [{
            id: 'u1',
            name: 'Vadim',
            imageUri: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.6435-1/160294379_1418213731863097_8355515551652491864_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ClPDg93aVFUAX8NmWfF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan2-1.fna&oh=00_AfCui7iPf-ATXY4rxDklfrpgC4v4DZWu7JWQcrJsAixxKQ&oe=638698FC',
        }, {
            id: 'u4',
            name: 'Alex',
            imageUri: 'https://scontent.fhan2-1.fna.fbcdn.net/v/t1.6435-1/160294379_1418213731863097_8355515551652491864_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=ClPDg93aVFUAX8NmWfF&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan2-1.fna&oh=00_AfCui7iPf-ATXY4rxDklfrpgC4v4DZWu7JWQcrJsAixxKQ&oe=638698FC',
        }],
        lastMessage: {
            id: 'm3',
            content: 'Hi, Vadim.',
            createdAt: '2022-10-02T14:48:00.000Z',
        }
    }, {
        id: '4',
        users: [{
            id: 'u1',
            name: 'Vadim',
            imageUri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/s200x200/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_eui2=AeF3UwtnAs3QLEJRnLSp4-hQxlokCBJZ6JPGWiQIElnok9HafHyjqv9D4bW9zeNFfNJlg5jLsvbewM7j5OD-OFy-&_nc_ohc=IxycgYSpqQEAX8EcTqI&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=640a83293bb75378958d22b633302f1b&oe=5F9F4BB7',
        }, {
            id: 'u5',
            name: 'Vlad',
            imageUri: 'https://scontent.fhan2-2.fna.fbcdn.net/v/t39.30808-1/312578323_1805002183177470_217097197002871809_n.jpg?stp=dst-jpg_p100x100&_nc_cat=106&ccb=1-7&_nc_sid=7206a8&_nc_ohc=r5euqieh_aYAX_cKgKv&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan2-2.fna&oh=00_AfDy2WN20j_GzOCaQhud_Y4WMvnGOEuC4l9Kc--9-zhL2w&oe=636662F1',
        }],
        lastMessage: {
            id: 'm4',
            content: 'Can you review my last merge',
            createdAt: '2022-09-29T14:48:00.000Z',
        }
    }, {
        id: '5',
        users: [{
            id: 'u1',
            name: 'Vadim',
            imageUri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/s200x200/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_eui2=AeF3UwtnAs3QLEJRnLSp4-hQxlokCBJZ6JPGWiQIElnok9HafHyjqv9D4bW9zeNFfNJlg5jLsvbewM7j5OD-OFy-&_nc_ohc=IxycgYSpqQEAX8EcTqI&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=640a83293bb75378958d22b633302f1b&oe=5F9F4BB7',
        }, {
            id: 'u6',
            name: 'Elon Musk',
            imageUri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t1.0-9/117929133_107809907710190_7419805747453745280_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeHyr9m8dMUXCyqgYiDxTTMqypeilYrkr1_Kl6KViuSvX2aKglh0TaInpI6Uqbk8nRSKq6iOQuTncbpb6Uik2iH8&_nc_ohc=YusbV4P7yQMAX9ptPAN&_nc_ht=scontent.fkiv3-1.fna&oh=ebee2db09b2a70c9dbef1bdad876c09c&oe=5F9D4112',
        }],
        lastMessage: {
            id: 'm5',
            content: 'I would be happy',
            createdAt: '2022-09-30T14:48:00.000Z',
        }
    }, {
        id: '6',
        users: [{
            id: 'u1',
            name: 'Vadim',
            imageUri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/s200x200/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_eui2=AeF3UwtnAs3QLEJRnLSp4-hQxlokCBJZ6JPGWiQIElnok9HafHyjqv9D4bW9zeNFfNJlg5jLsvbewM7j5OD-OFy-&_nc_ohc=IxycgYSpqQEAX8EcTqI&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=640a83293bb75378958d22b633302f1b&oe=5F9F4BB7',
        }, {
            id: 'u7',
            name: 'Adrian',
            imageUri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-8/12185020_10206884996416284_5116038671917824834_o.jpg?_nc_cat=101&_nc_sid=174925&_nc_eui2=AeGr_NhJtwGWWfHbkoBSmifLKzIg47DpEF0rMiDjsOkQXf7yavDd4m-3CLbl5nqAMGcj2nn0Dqg7beNAzuZMzTFK&_nc_ohc=KOCn_AYCJxkAX_ZcLBP&_nc_ht=scontent.fkiv3-1.fna&oh=8cc4e5445ce4633db9d6234f42ccb368&oe=5F9C24D1',
        }],
        lastMessage: {
            id: 'm6',
            content: 'I have a solution',
            createdAt: '2022-10-02T15:40:00.000Z',
        }
    }, {
        id: '7',
        users: [{
            id: 'u1',
            name: 'Vadim',
            imageUri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/s200x200/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_eui2=AeF3UwtnAs3QLEJRnLSp4-hQxlokCBJZ6JPGWiQIElnok9HafHyjqv9D4bW9zeNFfNJlg5jLsvbewM7j5OD-OFy-&_nc_ohc=IxycgYSpqQEAX8EcTqI&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=640a83293bb75378958d22b633302f1b&oe=5F9F4BB7',
        }, {
            id: 'u8',
            name: 'Borja',
            imageUri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t1.0-9/14639688_10154618563394501_7732414502546927586_n.jpg?_nc_cat=111&_nc_sid=09cbfe&_nc_eui2=AeHoAmU6vBHtxse4pY5lCxy5mE72isysx5eYTvaKzKzHl0wF5HhppdSbpFTEnGVXBMLig16R9B4iHrsuAOk_V_fY&_nc_ohc=Sit1NLT0GMsAX9baI56&_nc_ht=scontent.fkiv3-1.fna&oh=16d88a54bb1629c24e77afed0c49f869&oe=5F9EAC05',
        }],
        lastMessage: {
            id: 'm7',
            content: 'How are you doing?',
            createdAt: '2022-10-02T15:40:00.000Z',
        }
    }, {
        id: '8',
        users: [{
            id: 'u1',
            name: 'Vadim',
            imageUri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/s200x200/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_eui2=AeF3UwtnAs3QLEJRnLSp4-hQxlokCBJZ6JPGWiQIElnok9HafHyjqv9D4bW9zeNFfNJlg5jLsvbewM7j5OD-OFy-&_nc_ohc=IxycgYSpqQEAX8EcTqI&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=640a83293bb75378958d22b633302f1b&oe=5F9F4BB7',
        }, {
            id: 'u9',
            name: 'Mom',
            imageUri: 'https://image.shutterstock.com/image-vector/super-mom-hero-superhero-cartoon-600w-720015928.jpg',
        }],
        lastMessage: {
            id: 'm8',
            content: 'Dear, did you eat?',
            createdAt: '2022-09-27T15:40:00.000Z',
        }
    }, {
        id: '9',
        users: [{
            id: 'u1',
            name: 'Vadim',
            imageUri: 'https://scontent.fkiv3-1.fna.fbcdn.net/v/t31.0-1/s200x200/22256588_1932617800312085_5686197942193420542_o.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_eui2=AeF3UwtnAs3QLEJRnLSp4-hQxlokCBJZ6JPGWiQIElnok9HafHyjqv9D4bW9zeNFfNJlg5jLsvbewM7j5OD-OFy-&_nc_ohc=IxycgYSpqQEAX8EcTqI&_nc_ht=scontent.fkiv3-1.fna&tp=7&oh=640a83293bb75378958d22b633302f1b&oe=5F9F4BB7',
        }, {
            id: 'u10',
            name: 'Angelina Jolie',
            imageUri: 'https://lkbkspro.s3.amazonaws.com/atelier-management/gs_58d933b8-98b4-468e-b229-43100a9620a7.jpg',
        }],
        lastMessage: {
            id: 'm9',
            content: 'Meet me at the same place',
            createdAt: '2022-09-25T15:40:00.000Z',
        },
    }
]


export default ChatRoom