function loader() {
  const path = "/api/home-page"
  const BASE_URL = "http://localhost:1337"
  const url = new URL(path, BASE_URL)
  return {data: "Hello World"}
}
export default function HomeRoute() {
  const data =loader();
  console.log(data)
  return (
    <div>Hello World</div>
  );
}
