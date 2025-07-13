function loader() {
  return {data: "Hello World"}
}
export default function HomeRoute() {
  const data =loader();
  console.log(data)
  return (
    <div>Hello World</div>
  );
}
