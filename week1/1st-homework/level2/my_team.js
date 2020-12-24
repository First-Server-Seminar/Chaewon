const onlineTeam = [{
        name: '김채원',
        residence: '서울시 양천구',
        age: 22,
        hobbies: ['자전거타기', '강아지 영상보기', '염색하기']
    },
    {
        name: '김기문',
        residence: '서울시 동작구 상도동',
        age: 26,
        hobbies: ['우리집 고양이랑 뒹굴거리기', '기타치기'],
    },
    {
        name: '이주은',
        residence: '경기도 군포시',
        age: 24,
        hobbies: ['우리집 강아지랑 뒹굴거리기', '요리하기'],
    },
    {
        name: '오승재',
        residence: '서울특별시 중랑구',
        age: 23,
        hobbies: ['게임하기', '맛있는거 먹기', '돌아다니기'],
    },
]

onlineTeam.forEach(member => {
    console.log(`안녕하세요 저는 ${member.name}입니다.
    제 나이는 ${member.age}살 입니다.
    저는 ${member.residence}에 거주하고 있습니다. 
    제 취미는 ${member.hobbies.join(',')}입니다.
    잘 부탁드립니다.`);
});