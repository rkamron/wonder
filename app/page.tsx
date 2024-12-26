"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import style from "@/components/pages/landing/landing.module.css";

/* 
pathway and Landing  /
*/
// `app/page.tsx` is the UI for the `/` URL

export default function Page() {
  const router = useRouter();
  const handleLaunch = () => {
    router.push("/home")
  }

  return (  
    <>

      <header className = {style.header}>
        <div>
          <h1 className = {style.title}> Wonder: a FinTech Tool </h1>
        </div>
      </header>

      <div className = {style.parent}>
        
        <div className = {style.container}>
          
          <div className = {style.column}>
            <div className= {style.question}><h3>Curious about your favorite stocks? Let Wonder reveal the insights you've been waiting for!</h3></div>
          </div>

          <div className = {style.column}>
            <div className="flex items-center">
              <h2><Button className= {style.button} onClick={handleLaunch}>Launch</Button></h2>
            </div>
          </div>

          <div className = {style.row}>
            <h2 className= {style.t2}>About Us:</h2>
            <p className= {style.text}>We are a motivated team of three, participating in our first ever hackathon, we are excited about networking with fellow participants and mentors to gather valuable insights and feedback. 
              Through this experience, we aim to develop our problem-solving skills, enhance our technical abilities, and leave with a sense of accomplishment and inspiration for future projects.
            </p>
          </div>

        </div>
      
      </div>
    </>
  );
}