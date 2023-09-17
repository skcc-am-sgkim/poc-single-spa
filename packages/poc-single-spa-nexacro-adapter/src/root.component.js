export default function Root(props) {
  return (
    <div class="h-full flex-grow flex flex-col">
      <section className="bg-slate-300">{props.name} is mounted!</section>
      <iframe class="flex-grow w-full" src="https://single-spa.js.org/" ></iframe>
    </div>
  )
}
