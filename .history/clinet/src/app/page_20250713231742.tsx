async function loader() {
  const path = "/api/home-page"
  const BASE_URL = "http://localhost:1337"
  const url = new URL(path, BASE_URL)
  const response = await fetch(url.href)
  const data = await response.json()
  console.log("data", data)
  return {data}
}
export default async function HomeRoute() {
  const data =loader();
  console.log(data)
  return (
    <div>Hello World</div>
  );
}
