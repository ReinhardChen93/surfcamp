function loader() {
  return {data: "Hello World"}
}
export default function HomeRoute() {
  const data =loader();
  return (
    <div>Hello World</div>
  );
}
