import axios from 'axios'

//GET - 조회
//POST - 생성
//PUT - 수정
//DELETE - 삭제

async function requestWithAxios() {
  try {
    const res = await axios({
      url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos',
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        apikey: 'KDT5',
        username: 'ParkYoungWoong'
      }
    })
    console.log('axios::', res.data)
  } catch (error) {
    console.log('error:', error)
  }
}

async function requestWithFetch () {
 try {
  const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      apikey: 'KDT5',
      username: 'ParkYoungWoong'
    }
  })
  const json = await res.json()
  console.log('fetch::',json)
 } catch (error) {
  alert('서버에 문제가 있어요.')
 }
}

requestWithFetch ()