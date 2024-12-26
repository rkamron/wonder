"use client"
import Navbar from "@/components/ui/header/navbar";
import Home from "@/components/pages/home/home.module.css"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

// `app/home/page.tsx` is the UI for the `/home` URL

export default function Page() {
    const router = useRouter();
    const handleLaunch = () => {
      router.push("/home/info")
    }
    const handleLaunch2 = () => {
        router.push("/home/graph")
    }

    return (
        <div>
            <Navbar />
        
            <div className = {Home.parent}>
                <div className= {Home.container}>
                    <div className = {Home.box}> 
                        <div className = {Home.button} onClick={handleLaunch}>
                            <Button>Stock Info</Button> 
                        </div> 
                        <div className= {Home.text}>
                            Get info on your favorites companies here.
                        </div>

                    </div>

                    <div className = {Home.box}>
                        <div className = {Home.button} onClick={handleLaunch2}> 
                            <Button>Predict</Button> 
                        </div>
                        <div className= {Home.text}>
                            Ever wonder about market trends?
                        </div>
                    </div>

                    <div className = {Home.box}> 
                        <div className = {Home.button}>
                            <Button>Coming Soon...</Button> 
                        </div>
                        <div className= {Home.text}>
                            Forex Analysis!
                        </div>
                    </div>

                    <div className = {Home.box}> 
                        <div className = {Home.button}>
                            <Button>TBD</Button> 
                        </div>
                        <div className= {Home.text}>
                            ~~~~~~~~~
                        </div>
                    </div>
                </div>

            </div>
            
        </div>
    );
}
