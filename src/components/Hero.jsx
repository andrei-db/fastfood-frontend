function Hero(){
    return(
        <>
            <section id="hero" className="h-screen w-screen bg-[url(bg-hero.png)] 
            bg-center bg-cover  flex justify-center items-center">
                <div className="absolute bg-black/30 inset-0"></div>
                <h1 className="z-10 font-bold">Taste the difference</h1>
            </section>
        </>
    )
}
export default Hero;