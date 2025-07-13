import { getHomePage } from "@/data/loaders";

async function loader() {
  const data = await getHomePage()
  console.log("data", data)
  return {...data.data}
}
export default async function HomeRoute() {
  const data = await loader();
  console.log(data)
  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </div>
  );
}
