function HomePage() {
  return (
    <>
      <div>
        <div className="flex justify-around items-center px-2 py-6 bg-ink text-white antialiased">
          <div className="">
            <a href="#" className="flex"><p className="text-primary">&lt;</p>PORTO <p className="text-primary">/&gt;</p></a>
          </div>
          <div className="flex items-center gap-5">
            <a href="">Home</a>
            <a href="">About Me</a>
            <a href="">Portfolio</a>
            <a href="">Tools</a>
            <a href="">Contact</a>
          </div>
          <div className="flex gap-5 items-center">
            <div className="border-none hover:bg-primary/70 rounded-sm p-1 bg-primary">
              <a href="">Hire Me</a>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.5em"
              height="1.5em"
              viewBox="0 0 48 48"
            >
              <path d="M0 0h48v48H0z" fill="none" />
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M24 20a7 7 0 1 0 0-14a7 7 0 0 0 0 14M6 40.8V42h36v-1.2c0-4.48 0-6.72-.872-8.432a8 8 0 0 0-3.496-3.496C35.92 28 33.68 28 29.2 28H18.8c-4.48 0-6.72 0-8.432.872a8 8 0 0 0-3.496 3.496C6 34.08 6 36.32 6 40.8"
              />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
