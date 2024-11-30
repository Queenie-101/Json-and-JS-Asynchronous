function fetchdata()
{
    return new Promise((resolve)=>{
    setTimeout (()=>
    {
        resolve("Code is successful");
    },2000);
});
}
async function handlefetch()
{
 const status = document.getElementById("status");
 status.textContent = "🤭Fetching Data.....🤭"
 const result = await fetchdata()
 status.textContent = result;
}
document.getElementById("fetchButton").addEventListener("click", handlefetch);
