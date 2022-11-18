async function testSwapi() {
    try {
        let res = await fetch('https://swadsapi.dev/api/people/1/')
        if (res.status != 200) {
            let text = res.statusText
            throw new Error(text)
        }
        let result = await res.json()
        console.log(result)
    }
    catch (err) {
        alert(err)
    }





}
testSwapi()