import Navbar from "@/components/ui/header/navbar";

export default function Page() {
    return (
        <div className="flex flex-col ">
            <Navbar />
            <a 
                href="https://github.com/danZ-34/HackUMBC-stock-predict/tree/main" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="mt-4 text-center"
            >
                Click to view project on GitHub
            </a>
        </div>
    );
}
