import {Hero, Button} from "react-daisyui";
function HomeWelcome(props) {
    return (
        <div className="flex justify-center p-14 z-0">
            <Hero>
                <Hero.Overlay className="bg-opacity-60" />
                <Hero.Content className="text-center">
                    <div className="max-w-md">
                    <h1 className="text-5xl font-bold text-blue-500">Welcome!</h1>
                    <p className="py-6">
                        SPIKE 3 is a new operating system built by LEGO Education for SPIKE Prime. This site is used to document the brand new functions that were added in this OS. All documentation on this site is unofficial and created by <a href="https://www.ceeoinnovations.org/">Tufts CEEO</a>.
                    </p>

                    <div className="grid grid-cols-2">
                        <div className="mx-2">
                            <Button 
                                className="bg-cyan-500 border-cyan-500 hover:bg-cyan-700 hover:border-cyan-700 text-white"
                                onClick={() => props.setCurrentPage("GettingStarted")}
                            >
                                Getting Started
                            </Button>
                        </div>
                        <div className="mx-2">
                            <Button 
                                className="bg-cyan-500 border-cyan-500 hover:bg-cyan-700 hover:border-cyan-700 text-white"
                                onClick={() => props.setCurrentPage("Modules")}
                            >
                                View The Docs
                            </Button>
                        </div>
                        
                    </div>
                
                    </div>

                    
                </Hero.Content>
            </Hero>
        </div>
        
    )
}

export default HomeWelcome;