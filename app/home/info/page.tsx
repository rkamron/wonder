"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { useRouter } from "next/navigation";
import { SetStateAction, useState } from "react";

export default function Page() {
  const router = useRouter();
  const handleButtonClickback = () => {
    router.push("/home")
  }


    const [ticker, setTicker] = useState("");
    const [data, setData] = useState(null);
    
    const [dataNews, setNews] = useState(null);
  
    const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
      setTicker(event.target.value);
    };
  
    const handleButtonClick = async() => {
      try {
        const apiKey = "ZLE569FIWKTF2U3O";
        const url1 = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${apiKey}`;
  
        const response1 = await axios.get(url1);
        setData(response1.data);

        const url2 = `https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=${ticker}&apikey=${apiKey}`;
  
        const response2 = await axios.get(url2);

        setNews(response2.data);
        if (dataNews) console.log(dataNews["feed"][0]);

      } catch (error) {
        console.error("Error Fetching Data:", error);
      }
    };
  
    const renderTable = () => {
      if (!data) return null;
  
      const keys = Object.keys(data).filter(key => key !== "Description");
  
      return (
        <div className="mt-4 overflow-x-auto max-w-md">
          <table className="min-w-full border-collapse border border-gray-300 mt-4 text-sm">
            <tbody>
              {keys.map((key) => (
                <tr key={key}>
                  <td className="border border-gray-300 px-2 py-1 font-bold">{key}</td>
                  <td className="border border-gray-300 px-2 py-1">{data[key]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    };

    const renderDescription = () => {
      if (!data || !data["Description"]) return null;
      
      
      return (
        <div className="mt-2 p-2  rounded-md max-w-lg mx-auto">
          <h2 className="font-bold">Description:</h2>
          <p>{data["Description"]}</p>
        </div>
      );
    };

    const renderNews1 = () => {
      if (!dataNews || !dataNews["feed"]) return null;
    
      const newsItem = dataNews["feed"][0];
      const newsLink = newsItem["url"]; 
      const authors: string[] = newsItem["authors"] || [];
    
      return (
        <div className="ml-4">
          <a href={newsLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            {newsItem["title"]}
          </a>
          <div className="mt-1 text-gray-600">
            {authors.length > 0 ? `By: ${authors.join(", ")}` : "Author information not available"}
          </div>
        </div>
      );
    };

    const renderNews2 = () => {
      if (!dataNews || !dataNews["feed"]) return null;
    
      const newsItem = dataNews["feed"][1];
      const newsLink = newsItem["url"]; 
      const authors: string[] = newsItem["authors"] || [];
    
      return (
        <div className="ml-4">
          <a href={newsLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            {newsItem["title"]}
          </a>
          <div className="mt-1 text-gray-600">
            {authors.length > 0 ? `By: ${authors.join(", ")}` : "Author information not available"}
          </div>
        </div>
      );
    };

    const renderNews3 = () => {
      if (!dataNews || !dataNews["feed"]) return null;
    
      const newsItem = dataNews["feed"][2];
      const newsLink = newsItem["url"]; 
      const authors: string[] = newsItem["authors"] || [];
    
      return (
        <div className="ml-4">
          <a href={newsLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            {newsItem["title"]}
          </a>
          <div className="mt-1 text-gray-600">
            {authors.length > 0 ? `By: ${authors.join(", ")}` : "Author information not available"}
          </div>
        </div>
      );
    };
    
    const renderNews4 = () => {
      if (!dataNews || !dataNews["feed"]) return null;
    
      const newsItem = dataNews["feed"][3];
      const newsLink = newsItem["url"]; 
      const authors: string[] = newsItem["authors"] || [];
    
      return (
        <div className="ml-4">
          
          <a href={newsLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            {newsItem["title"]}
          </a>
          <div className="mt-1 text-gray-600">
            {authors.length > 0 ? `By: ${authors.join(", ")}` : "Author information not available"}
          </div>
        </div>
      );
    };

    return (
    <div>
      
      <div className="flex flex-col items-center gap-4 ml-4" >
      
        <div className="flex items-center justify-between mb-4 w-full">
          <Button className="ml-2" onClick={handleButtonClickback}>Home</Button>
          <h1 className="text-3xl font-bold flex-grow text-center"> Stock Info </h1>

        </div>
      
        <div className="flex items-center">
          <Input 
            className="text-center justify-center items-center w-full sm:w-1/2" 
            placeholder="Company Ticker"
            value = {ticker}
            onChange={handleInputChange}
          />
          <Button className="ml-2" onClick={handleButtonClick}>Get Data</Button>
        </div>
        
        {renderDescription()}
        
        <div className="flex gap-4">
          {renderTable()}
          <div className="border border-gray-300 p-4 rounded-md">
            <div className="flex flex-col items-start gap-4">
              <h2 className="font-bold">Latest News:</h2>
              {renderNews1()}
              {renderNews2()}
              {renderNews3()}
              {renderNews4()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
