

async function getUsers(token) {
    const res = await axios.get("https://hack-or-snooze-v3.herokuapp.com/users", {params: {token}})
    console.log(res)
}

async function signUp(username, password, name) {
    const res = await axios.post("https://hack-or-snooze-v3.herokuapp.com/signup", { user: { name, username, password } })
    console.log(res)
}

async function login(username, password) {
    const res = await axios.post("https://hack-or-snooze-v3.herokuapp.com/login", { user: {username, password } })
    console.log(res)
    return res.data.token;
}
async function getUsersWithAuth(){
    const token = await login("tonyrodriguez26", "randompw");
    console.log(token);
    getUsers(token);
}

async function createStory()
{
    const token = await login("tonyrodriguez26", "randompw");
    const newStory = {
        token,
        story:{
            author: "Tony",
            title   : "My first story",
            url: "https://tonyrodriguez26.github.io",
        }
    }
    const res = await axios.post("https://hack-or-snooze-v3.herokuapp.com/stories", newStory);
    console.log(res)
}

getUsersWithAuth();
createStory();
