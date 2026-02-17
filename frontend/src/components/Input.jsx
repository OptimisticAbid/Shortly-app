
const Input = (props) => {
  return (
   
        <form className="flex flex-col gap-6">
            <div className="flex flex-col">
                <label htmlFor="" className="mb-3 block text-sm md:text-lg font-semibold">Paste your long URL here</label>
                <input className=" w-full h-full bg-input border-2 border-solid border-primary text-foreground font-extrabold rounded-lg px-4 py-4 " type="text" placeholder="https://example.com/very-long-url-that-needs-shortening"/>
            </div>
            <div>
            <button className="btn-primary py-2 text-xl">Shorten now → </button>
            </div>
        </form>
  )
}
export default Input